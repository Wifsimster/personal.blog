<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'proxmox-nvme-migration',
  date: '2026-05-17',
  tags: ['Homelab', 'Proxmox', 'LVM']
}

const frenchContent: PostContent = {
  title: "Quand mon homelab a crashé : migrer le NVMe de Proxmox sans tout perdre",
  description: "Récit d'une panne de homelab — thin pool LVM saturé à 97,8 %, RAM en swap thrashing — et de la migration de l'hôte Proxmox vers un NVMe quatre fois plus grand : clone dd via un disque USB en relais, zéro réinstallation, et la leçon discard=on découverte après coup.",
  html: `<p><strong>TL;DR :</strong> le 14 mai 2026, ma VM Docker s'est figée. Deux saturations en même temps : la RAM partait en swap thrashing et le thin pool LVM de Proxmox affichait 97,8 % — <code>dmeventd: Insufficient free space</code>, toutes les I/O bloquées. Le NVMe de 250 Go était plein et le groupe de volumes n'avait plus un octet libre : aucune marge pour réparer. La vraie solution tenait en une phrase — un disque plus gros — et en un problème matériel : la carte mère n'a qu'un seul slot M.2. Voici comment j'ai migré un hôte Proxmox vers un NVMe quatre fois plus grand avec <code>dd</code>, un disque USB en relais et zéro réinstallation. Et la leçon <code>discard=on</code> que je n'ai comprise qu'une semaine plus tard.</p>
<hr>
<p>Un homelab, ça marche très bien jusqu'au jour où ça ne marche plus du tout. Le mien tourne sous Proxmox : deux machines virtuelles — une baie Unraid et une VM Docker qui héberge une soixantaine de conteneurs (Plex, Immich, Paperless, et tout le reste). Pendant des mois, je n'ai pas regardé l'espace disque. C'était l'erreur.</p>
<p>Ce billet est le récit d'une panne, puis d'une migration de disque système menée depuis un live USB, étape par étape. Si vous faites tourner Proxmox sur un NVMe qui se remplit, l'épilogue vous concerne directement.</p>

<h2>Un dimanche, la VM 101 se fige</h2>
<p>La VM Docker — la 101 dans Proxmox — ne répondait plus. L'interface morte, les conteneurs injoignables. Le diagnostic a révélé non pas une panne, mais deux, simultanées.</p>
<p><strong>La RAM, d'abord.</strong> La VM consommait 96 % de sa mémoire — 26 Gio. À ce niveau, le noyau invité s'est rabattu sur le swap, puis a passé tout son temps à faire des allers-retours entre RAM et disque. Le <em>swap thrashing</em> a déclenché des <em>soft-lockups</em> CPU : le processeur attend si longtemps une I/O qu'il se déclare lui-même bloqué. La VM était figée vivante.</p>
<p><strong>Le stockage, ensuite — et c'est le plus grave.</strong> Proxmox range ses disques virtuels dans un <em>thin pool</em> LVM nommé <code>pve/data</code>. Il était rempli à 97,8 %. À ce seuil, <code>dmeventd</code> — le démon qui surveille les volumes LVM — a rendu son verdict : <code>Insufficient free space</code>. Toutes les écritures vers le pool ont été bloquées. Une VM dont le disque ne peut plus rien écrire ne fait pas grand-chose.</p>
<p>Un <em>thin pool</em>, c'est un réservoir de blocs. Les disques virtuels — ici 32 Go pour la baie Unraid, 150 Go pour la VM Docker — sont des volumes <em>thin</em> : ils annoncent leur taille maximale mais ne consomment dans le réservoir que les blocs réellement écrits. Pratique pour sur-allouer… jusqu'au jour où le réservoir se vide pour de bon. Et là, ce ne sont pas les volumes qui débordent : c'est le pool.</p>
<p>Les premiers secours ont calmé l'incendie sans l'éteindre. J'ai abaissé les limites mémoire des conteneurs les plus gourmands, réduit le swap de 8 à 2 Gio, supprimé un snapshot fantôme resté bloqué, et récupéré ces quelques gigaoctets pour étendre le thin pool à 159 Go. Les VMs sont reparties. Mais le pool affichait toujours <strong>93,5 %</strong>. J'avais déplacé le problème de quelques jours, pas réglé quoi que ce soit.</p>

<h2>Le vrai problème : il n'y avait plus aucune marge</h2>
<p>Pourquoi je ne pouvais pas simplement agrandir le pool ? Parce qu'il n'y avait plus rien pour l'agrandir.</p>
<p>Voici à quoi ressemblait le NVMe avant migration :</p>
<pre><code>/dev/nvme0n1 — 232,9 GiB (Crucial CT250P5SSD8)
├── nvme0n1p1    1007K   BIOS boot
├── nvme0n1p2       1G   EFI System
└── nvme0n1p3   231,9G   Linux LVM (VG : pve)
    ├── pve-swap       2G
    ├── pve-root      68G   ext4 (15 GiB utilisés)
    ├── pve-data   159,1G   thin pool (93,5 %)
    │   ├── vm-100-disk-0   32G
    │   └── vm-101-disk-0  150G
    └── (libre : 0G)</code></pre>
<p>Regardez la dernière ligne. <strong>Le groupe de volumes <code>pve</code> avait 0 Go de libre.</strong> Tout l'espace du disque avait été distribué : 2 Go de swap, 68 Go de racine, et tout le reste versé dans le thin pool. Le « moi » qui avait installé ce Proxmox des mois plus tôt avait coché l'option par défaut et tout alloué. Il ne restait pas un octet pour respirer.</p>
<p>C'est exactement la marge qui manque le jour d'un incident. Pas d'espace libre dans le VG, pas d'extension possible du pool ; un disque de 250 Go plein, pas de disque plus grand. Toutes les portes étaient fermées sauf une : <strong>remplacer le NVMe par un modèle plus grand.</strong> Un Crucial P5 de 1 To — quatre fois la place.</p>

<h2>Un seul slot M.2 — la contrainte qui complique tout</h2>
<p>Remplacer un disque système, sur le papier, c'est trivial : on branche le neuf à côté de l'ancien, on clone de l'un vers l'autre, on débranche l'ancien. Sauf que la carte mère de ce serveur — une Gigabyte B450M DS3H — n'a <strong>qu'un seul emplacement M.2</strong>. Impossible d'avoir l'ancien et le nouveau NVMe branchés en même temps. Impossible de cloner directement de disque à disque.</p>
<p>La solution : un <strong>disque relais</strong>. On clone le NVMe vers un disque externe, on éteint, on permute physiquement les deux NVMe, on rallume, et on restaure le clone depuis le disque externe vers le NVMe neuf. Deux passes au lieu d'une, mais ça contourne la contrainte. J'avais sous la main un WD Elements de 12 To en USB, vide — parfait comme relais.</p>
<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stratégie de clone par disque relais : passe 1, dd copie le NVMe 250 Go vers un WD Elements 12 To en USB ; on permute physiquement les NVMe ; passe 2, un dd borné restaure le clone du WD Elements vers le NVMe 1 To neuf." class="diagram-svg">
<g fill="none" stroke="currentColor" stroke-width="1.5">
<rect x="12" y="48" width="176" height="72" rx="6"></rect>
<rect x="232" y="48" width="176" height="72" rx="6"></rect>
<rect x="452" y="48" width="176" height="72" rx="6"></rect>
<line x1="190" y1="84" x2="224" y2="84"></line>
<line x1="410" y1="84" x2="444" y2="84"></line>
</g>
<g fill="currentColor" stroke="none">
<polygon points="224,79 232,84 224,89"></polygon>
<polygon points="444,79 452,84 444,89"></polygon>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" text-anchor="middle">
<text x="100" y="80">NVMe 250 Go</text>
<text x="100" y="100" font-size="11">source — plein</text>
<text x="320" y="80">WD Elements 12 To</text>
<text x="320" y="100" font-size="11">relais USB</text>
<text x="540" y="80">NVMe 1 To</text>
<text x="540" y="100" font-size="11">cible — neuf</text>
<text x="207" y="73" font-size="11">1. dd — clone</text>
<text x="427" y="73" font-size="11">2. dd borné</text>
<text x="320" y="152" font-size="12" font-style="italic">Entre les deux passes : extinction, retrait du 250 Go,</text>
<text x="320" y="170" font-size="12" font-style="italic">insertion du 1 To dans l'unique slot M.2.</text>
</g>
</svg>
<p>Il existe une variante plus rapide : glisser le NVMe 1 To neuf dans un <strong>boîtier USB-M.2</strong> (une douzaine d'euros), cloner directement de NVMe interne à NVMe externe en une seule passe à vitesse SSD, puis permuter physiquement les deux disques. Plus de disque relais, plus de double copie. Je ne l'ai pas fait — j'avais déjà le WD Elements — mais si vous prévoyez ce genre d'opération, le boîtier vaut largement son prix.</p>

<h2>Cloner le disque, pas réinstaller</h2>
<p>J'aurais pu réinstaller Proxmox à neuf sur le 1 To et tout reconfigurer. Je ne l'ai pas fait, et c'est volontaire.</p>
<p>Un clone bloc à bloc avec <code>dd</code> copie <em>tout</em> : la table de partition, la partition EFI, le chargeur GRUB, et le volume physique LVM avec ses UUID. Après restauration, le nouveau disque est un jumeau parfait de l'ancien. Proxmox démarre, les VMs démarrent, la configuration réseau, les utilisateurs, les certificats — rien n'a bougé, parce que du point de vue du système <em>rien n'a changé</em>. On n'a fait que poser les mêmes octets sur un disque plus grand.</p>
<p>Le prix à payer : les VMs sont arrêtées pendant toute l'opération (un clone à froid, pas de migration à chaud), et il faut deux passes <code>dd</code> à travers l'USB. Dans mon cas, environ 17 minutes par passe à 235 Mo/s en USB 3. Un downtime d'un après-midi, planifiable.</p>

<h2>La procédure, étape par étape</h2>
<p>Toute la chirurgie se fait depuis un live USB. <strong>Pas l'ISO d'installation de Proxmox</strong> : son environnement de secours est trop minimal — pas de <code>lsblk</code>, pas de <code>parted</code>, <code>/dev/disk/by-id/</code> non peuplé. J'ai utilisé <a href="https://www.system-rescue.org/" target="_blank" rel="noopener noreferrer">SystemRescue</a>, qui embarque tout l'outillage disque et ouvre directement un shell root.</p>

<h3>Étape 1 — Arrêter les VMs proprement</h3>
<p>Depuis l'interface Proxmox, avant de toucher au matériel :</p>
<pre><code>qm shutdown 101 --timeout 120
qm shutdown 100 --timeout 120
qm list</code></pre>

<h3>Étape 2 — Booter sur SystemRescue</h3>
<p>Clé USB SystemRescue et disque relais branchés, on redémarre, on entre dans le BIOS (touche <code>DEL</code> sur Gigabyte) et on amorce sur la clé. SystemRescue ouvre directement un shell root. Clavier français : <code>loadkeys fr</code>.</p>

<h3>Étape 3 — Identifier les disques</h3>
<p>L'étape la plus dangereuse de toute la procédure. Les lettres <code>/dev/sdX</code> changent d'un démarrage à l'autre — on ne s'y fie pas. On désigne le disque USB par son chemin stable dans <code>/dev/disk/by-id/</code> ; le NVMe, seul de la machine, garde son nom fixe <code>/dev/nvme0n1</code>.</p>
<pre><code>lsblk -d -o NAME,SIZE,MODEL,SERIAL
ls -l /dev/disk/by-id/ | grep -E 'nvme|usb'</code></pre>
<p>Sur ce serveur, l'inventaire réservait une surprise : Proxmox étant arrêté, les <strong>huit disques de 4 To de la baie Unraid</strong> (la VM 100) apparaissaient comme des disques nus, <code>sda</code> à <code>sdh</code>. Les inclure dans une commande <code>dd</code> aurait pulvérisé le NAS. D'où la règle absolue : on définit des variables nommées, et on ne tape <em>jamais</em> un <code>sdX</code> brut.</p>
<pre><code>SRC=/dev/nvme0n1
DST=/dev/disk/by-id/usb-WD_Elements_XXXX-0:0
lsblk "$SRC" "$DST"
# $SRC doit montrer ~232G (nvme0n1p1/p2/p3) — $DST doit montrer ~10,9T.
# Si les tailles semblent inversées : STOP, on ne lance rien.</code></pre>

<h3>Étape 4 — Cloner le NVMe vers le disque relais</h3>
<pre><code>dd if="$SRC" of="$DST" bs=4M conv=fsync status=progress</code></pre>
<p>Environ 17 minutes à 236 Mo/s. On vérifie ensuite le clone — mais en comparant <em>uniquement</em> la taille du NVMe : le disque relais est bien plus grand, comparer les deux disques entiers donnerait un faux échec à coup sûr.</p>
<pre><code>SIZE=$(blockdev --getsize64 "$SRC")
echo "$SIZE"          # noter cette valeur — réutilisée à l'étape 6
cmp -n "$SIZE" "$SRC" "$DST" && echo "CLONE OK"</code></pre>

<h3>Étape 5 — Permuter physiquement les NVMe</h3>
<p>On éteint (<code>poweroff</code>), on débranche l'alimentation. On retire le Crucial 250 Go — <strong>on l'étiquette et on le met de côté : c'est le rollback complet</strong> — et on insère le 1 To dans le même slot M.2. La clé SystemRescue et le disque relais restent branchés.</p>

<h3>Étape 6 — Restaurer le clone sur le NVMe neuf</h3>
<p>On redémarre sur SystemRescue. Le NVMe affiche désormais ~931 Go. La restauration va dans le sens inverse de l'étape 4 — et elle doit être <strong>bornée</strong> :</p>
<pre><code>NVME=/dev/nvme0n1
DST=/dev/disk/by-id/usb-WD_Elements_XXXX-0:0
lsblk "$NVME" "$DST"

CLONE_SIZE=250059350016   # la taille relevée à l'étape 4
dd if="$DST" of="$NVME" bs=4M iflag=count_bytes count="$CLONE_SIZE" conv=fsync status=progress
sync
cmp -n "$CLONE_SIZE" "$NVME" "$DST" && echo "RESTORE OK"</code></pre>
<p>Sans le <code>count=</code>, <code>dd</code> recopierait l'intégralité du disque relais de 12 To et saturerait le NVMe bien avant d'avoir fini — des centaines de gigaoctets pour rien.</p>

<h3>Étape 7 — Réparer la GPT, étendre la partition et le pool</h3>
<p>Le clone fait 233 Go ; posé sur un disque de 1 To, sa table GPT de secours se retrouve au mauvais endroit et masque l'espace libre. On la replace, puis — point crucial — <strong>on débranche le disque relais avant toute opération LVM</strong> : le clone étant bit-à-bit, le relais et le NVMe portent le même UUID de volume physique. Tant que les deux sont branchés, LVM voit un PV dupliqué et peut opérer sur le mauvais disque.</p>
<pre><code>vgchange -an pve
sgdisk -e "$NVME"            # replace la GPT de secours en fin de disque

# >>> débrancher physiquement le câble USB du disque relais <<<
pvscan --cache
pvs                          # un seul PV pour le VG « pve », sans avertissement « duplicate »

growpart "$NVME" 3           # étend la partition 3 à tout l'espace
partprobe "$NVME"
pvresize /dev/nvme0n1p3
vgchange -ay pve

lvextend --poolmetadatasize +1G pve/data   # le pool quintuple — les métadonnées doivent suivre
lvextend -l +95%FREE pve/data              # +95 %, surtout pas +100 % : on garde une marge
lvs -o lv_name,lv_size,data_percent,metadata_percent pve
vgs pve</code></pre>
<p>Note : <code>parted</code> peut être absent du PATH sous SystemRescue ; <code>growpart</code> fait le travail aussi bien, et gère lui-même la relocalisation de la GPT.</p>

<h3>Étape 8 — Redémarrer</h3>
<p>On retire la clé SystemRescue et on <code>reboot</code>. Comme <code>dd</code> a recopié à l'identique la partition EFI, GRUB et tous les UUID, le serveur démarre sur le NVMe neuf sans rien savoir du changement.</p>

<h3>Étape 9 — Vérifier</h3>
<pre><code>pveversion
qm list
qm status 100
qm status 101</code></pre>
<p>Si les VMs ont l'option <code>onboot</code>, elles sont déjà reparties toutes seules.</p>
<blockquote>Un détail qui peut inquiéter : <code>proxmox-boot-tool status</code> renvoie <code>E: /etc/kernel/proxmox-boot-uuids does not exist</code>. C'est normal sur une installation classique LVM + GRUB — <code>proxmox-boot-tool</code> ne sert que pour les setups ZFS ou systemd-boot. Le démarrage réussi suffit à prouver que la chaîne d'amorçage est intacte.</blockquote>

<h2>Les pièges qui transforment une migration en sinistre</h2>
<p>La première version de cette procédure ne tenait pas debout. C'est la relecture, puis le test terrain, qui l'ont durcie. Voici les huit pièges qui font la différence entre une migration propre et un disque effacé.</p>
<ul>
<li><strong>Vérifier le clone sur la bonne taille.</strong> Un <code>cmp</code> sur les deux disques entiers est un faux échec garanti — le disque relais est plus grand. On compare avec <code>cmp -n</code> et le nombre d'octets exact du clone.</li>
<li><strong>Borner la restauration avec <code>count=</code>.</strong> Le relais de 12 To est bien plus grand que le clone de 250 Go ; un <code>dd</code> sans limite recopie tout le relais jusqu'à saturer le NVMe.</li>
<li><strong>Débrancher le disque relais avant toute commande LVM.</strong> Un clone bit-à-bit, c'est un UUID de PV identique. LVM voit un PV dupliqué et peut lancer <code>pvresize</code>/<code>lvextend</code> sur le mauvais disque.</li>
<li><strong>Relocaliser la GPT de secours.</strong> Le clone fait 233 Go ; sur un disque de 1 To, sa table GPT de secours atterrit au mauvais endroit et l'extension de partition ne voit pas l'espace libre. <code>sgdisk -e</code> la remet en place.</li>
<li><strong>Désigner les disques USB par <code>/dev/disk/by-id/</code>.</strong> Les lettres <code>sdX</code> changent d'un boot à l'autre. Le NVMe, seul de la machine, garde son <code>/dev/nvme0n1</code> stable.</li>
<li><strong>Connaître son live USB.</strong> <code>parted</code> peut manquer du PATH sous SystemRescue ; <code>growpart</code> ou <code>sgdisk</code> font le travail. Et l'ISO d'installation Proxmox est trop minimale pour de la chirurgie disque.</li>
<li><strong>Laisser une marge dans le groupe de volumes.</strong> Jamais de <code>lvextend -l +100%FREE</code>. Ce « 0 Go libre », c'est précisément ce qui a bloqué la résolution de l'incident. J'ai laissé ~5 %.</li>
<li><strong>Inventorier tous les disques avant le moindre <code>dd</code>.</strong> Proxmox arrêté, les huit disques de 4 To de la baie Unraid apparaissaient comme des disques nus. En attraper un dans un <code>dd</code> aurait détruit le NAS. Variables nommées, jamais de <code>sdX</code> brut.</li>
</ul>

<h2>Le résultat</h2>
<p>Le serveur a redémarré du premier coup sur le NVMe neuf. Voici le layout final :</p>
<pre><code>/dev/nvme0n1 — 931,5 Go (Crucial CT1000P5SSD8)
├── nvme0n1p1    1007K   BIOS boot
├── nvme0n1p2       1G   EFI System
└── nvme0n1p3  ~930,5G   Linux LVM (VG : pve, VFree 34,83 GiB)
    ├── pve-swap        2G
    ├── pve-root      ~68G
    ├── pve-data   820,91G   thin pool (18,12 %)
    │   ├── vm-100-disk-0   32G
    │   └── vm-101-disk-0  150G
    └── (libre VG : 34,83G — marge de sécurité)</code></pre>
<ul>
<li><strong>Thin pool LVM</strong> — de 159 Go saturés à 93,5 %, à 820,91 Go occupés à seulement <strong>18,12 %</strong>.</li>
<li><strong>Métadonnées du pool</strong> — étendues de 1,40 à 2,40 Go, pour suivre un pool cinq fois plus grand.</li>
<li><strong>Espace libre du groupe de volumes</strong> — de 0 à <strong>34,83 Go</strong>. C'est la marge de sécurité qui manquait le 14 mai.</li>
<li><strong>Démarrage</strong> — Proxmox VE 9.1.1 (noyau 6.17.2-1-pve) a redémarré sans broncher, les deux VMs relancées automatiquement par <code>onboot</code>.</li>
</ul>
<p>Aucune reconfiguration. <code>dd</code> ayant recopié EFI, GRUB et les UUID à l'identique, le système n'a tout simplement pas vu qu'il avait changé de disque.</p>

<h2>Épilogue — le « 99 % » qui n'en était pas un</h2>
<p>En clôturant le ticket, j'avais noté un point de suivi : le disque virtuel de la VM 101 semblait « rempli à 99 % ». Une semaine plus tard, en voulant l'agrandir, je me suis rendu compte que je m'étais trompé de métrique.</p>
<p>Ce « 99 % » n'était pas le remplissage du système de fichiers invité. C'était le <code>Data%</code> du volume thin <code>vm-101-disk-0</code> — la part du <em>réservoir</em> que ce volume avait consommée. À l'intérieur de la VM, le système de fichiers <code>/</code> était en réalité à <strong>72 %</strong> : 99 Go utilisés sur 146, 41 Go libres. Aucun agrandissement n'était nécessaire. Mais alors, pourquoi l'allocation thin avait-elle gonflé jusqu'à 99 % ?</p>
<p>La réponse tient en un mot : <code>discard</code>. Le disque <code>scsi0</code> de la VM n'avait pas l'option <code>discard=on</code>. Sans elle, les commandes TRIM de l'invité — qui signalent les blocs libérés — n'atteignaient jamais le thin pool. L'invité avait beau lancer son <code>fstrim</code> hebdomadaire, le pool ne récupérait jamais ces blocs. L'allocation ne pouvait que croître, jamais diminuer. Un disque qui se vide côté invité mais reste « plein » côté pool : voilà le piège du thin provisioning sans <code>discard</code>.</p>
<p>Le correctif :</p>
<pre><code>qm set 101 --scsi0 local-lvm:vm-101-disk-0,size=150G,discard=on,ssd=1</code></pre>
<p>Un reboot de la VM (l'option <code>discard</code> est posée à la création du périphérique bloc), puis un <code>fstrim -av</code> dans l'invité — et <strong>48 Go</strong> sont rendus au pool d'un coup. Le <code>Data%</code> de <code>vm-101-disk-0</code> tombe de 99,17 % à 70,46 %, le thin pool de 18,12 % à 12,88 %. Le <code>fstrim.timer</code> hebdomadaire entretient désormais l'allocation tout seul.</p>
<p>Et le dernier maillon manquant : je n'avais <strong>aucune sauvegarde automatique</strong>. Le WD Elements de 12 To qui avait servi de relais a été reconverti en disque de sauvegarde — effacé, reformaté en ext4, monté en <code>/mnt/wd-backup</code>, déclaré comme stockage Proxmox. Un job <code>vzdump</code> hebdomadaire sauvegarde maintenant les deux VMs tous les dimanches à 2 h du matin, en mode snapshot, compression <code>zstd</code>. L'incident du 14 mai aurait pu coûter une soixantaine de conteneurs et leurs données. La prochaine fois, il y aura un filet.</p>

<h2>Ce que je retiens</h2>
<ul>
<li><strong>Ne jamais allouer 100 % d'un groupe de volumes.</strong> Gardez ~5 % de libre. Cette marge est exactement ce qui permet de réparer un incident au lieu de le subir.</li>
<li><strong>Le thin provisioning exige <code>discard=on</code> de bout en bout.</strong> Sans lui, l'allocation du pool ne fait que monter, même quand les invités se vident. TRIM doit pouvoir traverser toute la chaîne.</li>
<li><strong>Surveillez le thin pool, pas seulement les disques.</strong> Un volume invité à 72 % et un pool à 97 % racontent deux histoires différentes — et c'est le pool qui vous bloque les I/O.</li>
<li><strong>Un clone <code>dd</code> est un outil de migration sous-estimé.</strong> Il transporte EFI, GRUB et les UUID LVM à l'identique : le système ne voit pas la différence.</li>
<li><strong>Connaissez votre live USB avant d'en avoir besoin.</strong> Quels outils sont présents, comment les disques sont nommés, ce que l'ISO de secours embarque vraiment.</li>
<li><strong>Pas de sauvegarde, pas de filet.</strong> Un homelab sans <code>vzdump</code> planifié n'est pas un homelab, c'est un pari.</li>
</ul>
<p>Le NVMe de 250 Go est étiqueté et rangé. Il reste intact une à deux semaines — le temps de valider la stabilité du nouveau disque — comme chemin de retour arrière. Parce qu'une migration n'est jamais vraiment terminée tant qu'on n'a pas de quoi l'annuler.</p>`
}

const englishContent: PostContent = {
  title: "When My Homelab Crashed: Migrating Proxmox's NVMe Without Losing Everything",
  description: "The story of a homelab outage — LVM thin pool jammed at 97.8%, RAM thrashing into swap — and the migration of the Proxmox host onto an NVMe four times larger: a dd clone through a USB relay drive, zero reinstall, and the discard=on lesson learned the hard way.",
  html: `<p><strong>TL;DR:</strong> on 14 May 2026, my Docker VM froze. Two saturations at once: RAM was thrashing into swap, and Proxmox's LVM thin pool sat at 97.8% — <code>dmeventd: Insufficient free space</code>, every I/O blocked. The 250 GB NVMe was full and the volume group had zero free bytes left: no room to repair. The real fix was one sentence — a bigger disk — and one hardware problem: the motherboard has a single M.2 slot. Here is how I migrated a Proxmox host onto an NVMe four times larger with <code>dd</code>, a USB relay drive and zero reinstall. Plus the <code>discard=on</code> lesson I only understood a week later.</p>
<hr>
<p>A homelab works fine right up until the day it doesn't work at all. Mine runs on Proxmox: two virtual machines — an Unraid array and a Docker VM hosting around sixty containers (Plex, Immich, Paperless, and all the rest). For months, I never looked at the disk space. That was the mistake.</p>
<p>This post is the story of an outage, then of a system-disk migration carried out from a live USB, step by step. If you run Proxmox on an NVMe that is filling up, the epilogue concerns you directly.</p>

<h2>One Sunday, VM 101 freezes</h2>
<p>The Docker VM — 101 in Proxmox — stopped responding. The UI dead, the containers unreachable. The diagnosis revealed not one failure but two, at once.</p>
<p><strong>RAM first.</strong> The VM was using 96% of its memory — 26 GiB. At that level the guest kernel fell back on swap, then spent all its time shuttling pages between RAM and disk. The <em>swap thrashing</em> triggered CPU <em>soft-lockups</em>: the processor waits so long on an I/O that it declares itself stuck. The VM was frozen alive.</p>
<p><strong>Storage next — and this one is worse.</strong> Proxmox keeps its virtual disks in an LVM <em>thin pool</em> named <code>pve/data</code>. It was 97.8% full. At that threshold <code>dmeventd</code> — the daemon watching LVM volumes — returned its verdict: <code>Insufficient free space</code>. Every write to the pool was blocked. A VM whose disk can no longer write anything does not do much.</p>
<p>A <em>thin pool</em> is a reservoir of blocks. The virtual disks — here 32 GB for the Unraid array, 150 GB for the Docker VM — are <em>thin</em> volumes: they advertise their maximum size but only draw from the reservoir the blocks actually written. Handy for over-committing… until the day the reservoir genuinely runs dry. And then it is not the volumes that overflow: it is the pool.</p>
<p>Emergency triage calmed the fire without putting it out. I lowered the memory limits of the greediest containers, cut swap from 8 to 2 GiB, deleted a ghost snapshot stuck in place, and used the few gigabytes reclaimed to extend the thin pool to 159 GB. The VMs came back. But the pool still read <strong>93.5%</strong>. I had pushed the problem back a few days, not solved anything.</p>

<h2>The real problem: there was no margin left</h2>
<p>Why couldn't I just grow the pool? Because there was nothing left to grow it with.</p>
<p>Here is what the NVMe looked like before the migration:</p>
<pre><code>/dev/nvme0n1 — 232.9 GiB (Crucial CT250P5SSD8)
├── nvme0n1p1    1007K   BIOS boot
├── nvme0n1p2       1G   EFI System
└── nvme0n1p3   231.9G   Linux LVM (VG: pve)
    ├── pve-swap       2G
    ├── pve-root      68G   ext4 (15 GiB used)
    ├── pve-data   159.1G   thin pool (93.5%)
    │   ├── vm-100-disk-0   32G
    │   └── vm-101-disk-0  150G
    └── (free: 0G)</code></pre>
<p>Look at the last line. <strong>Volume group <code>pve</code> had 0 GB free.</strong> Every byte of the disk had been handed out: 2 GB of swap, 68 GB of root, and all the rest poured into the thin pool. The "me" who had installed this Proxmox months earlier had ticked the default option and allocated everything. Not one byte left to breathe.</p>
<p>That is exactly the margin you miss on the day of an incident. No free space in the VG, no way to extend the pool; a full 250 GB disk, no bigger disk. Every door was shut but one: <strong>replace the NVMe with a larger model.</strong> A 1 TB Crucial P5 — four times the room.</p>

<h2>A single M.2 slot — the constraint that complicates everything</h2>
<p>Replacing a system disk, on paper, is trivial: plug the new one in next to the old, clone across, unplug the old. Except this server's motherboard — a Gigabyte B450M DS3H — has <strong>only one M.2 slot</strong>. No way to have the old and the new NVMe connected at the same time. No way to clone disk to disk directly.</p>
<p>The workaround: a <strong>relay drive</strong>. Clone the NVMe to an external disk, power down, physically swap the two NVMe drives, power back up, and restore the clone from the external disk onto the new NVMe. Two passes instead of one, but it sidesteps the constraint. I had a 12 TB WD Elements on USB sitting empty — a perfect relay.</p>
<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Clone-via-relay strategy: pass 1, dd copies the 250 GB NVMe onto a 12 TB WD Elements over USB; the NVMe drives are physically swapped; pass 2, a bounded dd restores the clone from the WD Elements onto the new 1 TB NVMe." class="diagram-svg">
<g fill="none" stroke="currentColor" stroke-width="1.5">
<rect x="12" y="48" width="176" height="72" rx="6"></rect>
<rect x="232" y="48" width="176" height="72" rx="6"></rect>
<rect x="452" y="48" width="176" height="72" rx="6"></rect>
<line x1="190" y1="84" x2="224" y2="84"></line>
<line x1="410" y1="84" x2="444" y2="84"></line>
</g>
<g fill="currentColor" stroke="none">
<polygon points="224,79 232,84 224,89"></polygon>
<polygon points="444,79 452,84 444,89"></polygon>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" text-anchor="middle">
<text x="100" y="80">NVMe 250 GB</text>
<text x="100" y="100" font-size="11">source — full</text>
<text x="320" y="80">WD Elements 12 TB</text>
<text x="320" y="100" font-size="11">USB relay</text>
<text x="540" y="80">NVMe 1 TB</text>
<text x="540" y="100" font-size="11">target — new</text>
<text x="207" y="73" font-size="11">1. dd — clone</text>
<text x="427" y="73" font-size="11">2. bounded dd</text>
<text x="320" y="152" font-size="12" font-style="italic">Between the two passes: power off, pull the 250 GB drive,</text>
<text x="320" y="170" font-size="12" font-style="italic">fit the 1 TB into the only M.2 slot.</text>
</g>
</svg>
<p>There is a faster variant: slip the new 1 TB NVMe into a <strong>USB-to-M.2 enclosure</strong> (about ten euros), clone straight from internal NVMe to external NVMe in a single pass at SSD speed, then physically swap the two drives. No relay drive, no double copy. I didn't do it — I already had the WD Elements — but if you are planning this kind of operation, the enclosure is well worth the price.</p>

<h2>Clone the disk, don't reinstall</h2>
<p>I could have reinstalled Proxmox fresh on the 1 TB and reconfigured everything. I didn't, and that was deliberate.</p>
<p>A block-for-block clone with <code>dd</code> copies <em>everything</em>: the partition table, the EFI partition, the GRUB bootloader, and the LVM physical volume with its UUIDs. After the restore, the new disk is a perfect twin of the old one. Proxmox boots, the VMs boot, the network config, the users, the certificates — nothing moved, because as far as the system is concerned <em>nothing changed</em>. We only laid the same bytes onto a bigger disk.</p>
<p>The price: the VMs are shut down for the whole operation (a cold clone, no live migration), and it takes two <code>dd</code> passes across USB. In my case, about 17 minutes per pass at 235 MB/s over USB 3. An afternoon of downtime, schedulable.</p>

<h2>The procedure, step by step</h2>
<p>All the surgery runs from a live USB. <strong>Not the Proxmox installer ISO</strong>: its rescue environment is too minimal — no <code>lsblk</code>, no <code>parted</code>, <code>/dev/disk/by-id/</code> not populated. I used <a href="https://www.system-rescue.org/" target="_blank" rel="noopener noreferrer">SystemRescue</a>, which carries the full disk toolkit and drops you straight into a root shell.</p>

<h3>Step 1 — Shut the VMs down cleanly</h3>
<p>From the Proxmox UI, before touching any hardware:</p>
<pre><code>qm shutdown 101 --timeout 120
qm shutdown 100 --timeout 120
qm list</code></pre>

<h3>Step 2 — Boot into SystemRescue</h3>
<p>With the SystemRescue USB stick and the relay drive plugged in, reboot, enter the BIOS (the <code>DEL</code> key on Gigabyte) and boot from the stick. SystemRescue drops you straight into a root shell. For a French keyboard: <code>loadkeys fr</code>.</p>

<h3>Step 3 — Identify the disks</h3>
<p>The most dangerous step in the whole procedure. The <code>/dev/sdX</code> letters change from one boot to the next — never trust them. Address the USB disk by its stable path under <code>/dev/disk/by-id/</code>; the NVMe, the only one in the machine, keeps its fixed name <code>/dev/nvme0n1</code>.</p>
<pre><code>lsblk -d -o NAME,SIZE,MODEL,SERIAL
ls -l /dev/disk/by-id/ | grep -E 'nvme|usb'</code></pre>
<p>On this server, the inventory held a surprise: with Proxmox stopped, the <strong>eight 4 TB disks of the Unraid array</strong> (VM 100) showed up as bare disks, <code>sda</code> through <code>sdh</code>. Catching one of them in a <code>dd</code> command would have pulverized the NAS. Hence the iron rule: define named variables, and <em>never</em> type a raw <code>sdX</code>.</p>
<pre><code>SRC=/dev/nvme0n1
DST=/dev/disk/by-id/usb-WD_Elements_XXXX-0:0
lsblk "$SRC" "$DST"
# $SRC must show ~232G (nvme0n1p1/p2/p3) — $DST must show ~10.9T.
# If the sizes look swapped: STOP, run nothing.</code></pre>

<h3>Step 4 — Clone the NVMe onto the relay drive</h3>
<pre><code>dd if="$SRC" of="$DST" bs=4M conv=fsync status=progress</code></pre>
<p>About 17 minutes at 236 MB/s. Then verify the clone — but comparing <em>only</em> the NVMe's size: the relay drive is far larger, so comparing both whole disks would be a guaranteed false failure.</p>
<pre><code>SIZE=$(blockdev --getsize64 "$SRC")
echo "$SIZE"          # note this value — reused in step 6
cmp -n "$SIZE" "$SRC" "$DST" && echo "CLONE OK"</code></pre>

<h3>Step 5 — Physically swap the NVMe drives</h3>
<p>Power off (<code>poweroff</code>), unplug the power. Remove the 250 GB Crucial — <strong>label it and set it aside: this is the full rollback</strong> — and fit the 1 TB into the same M.2 slot. The SystemRescue stick and the relay drive stay plugged in.</p>

<h3>Step 6 — Restore the clone onto the new NVMe</h3>
<p>Boot back into SystemRescue. The NVMe now reports ~931 GB. The restore goes the opposite direction from step 4 — and it must be <strong>bounded</strong>:</p>
<pre><code>NVME=/dev/nvme0n1
DST=/dev/disk/by-id/usb-WD_Elements_XXXX-0:0
lsblk "$NVME" "$DST"

CLONE_SIZE=250059350016   # the size recorded in step 4
dd if="$DST" of="$NVME" bs=4M iflag=count_bytes count="$CLONE_SIZE" conv=fsync status=progress
sync
cmp -n "$CLONE_SIZE" "$NVME" "$DST" && echo "RESTORE OK"</code></pre>
<p>Without the <code>count=</code>, <code>dd</code> would copy the entire 12 TB relay drive and overflow the NVMe long before it finished — hundreds of gigabytes for nothing.</p>

<h3>Step 7 — Repair the GPT, extend the partition and the pool</h3>
<p>The clone is 233 GB; laid onto a 1 TB disk, its backup GPT table ends up in the wrong place and hides the free space. We relocate it, then — the crucial point — <strong>unplug the relay drive before any LVM command</strong>: because the clone is bit-for-bit, the relay and the NVMe carry the same physical-volume UUID. As long as both are connected, LVM sees a duplicate PV and may operate on the wrong disk.</p>
<pre><code>vgchange -an pve
sgdisk -e "$NVME"            # relocate the backup GPT to the end of the disk

# >>> physically unplug the relay drive's USB cable <<<
pvscan --cache
pvs                          # one single PV for VG "pve", no "duplicate" warning

growpart "$NVME" 3           # grow partition 3 to all available space
partprobe "$NVME"
pvresize /dev/nvme0n1p3
vgchange -ay pve

lvextend --poolmetadatasize +1G pve/data   # the pool quintuples — metadata must keep up
lvextend -l +95%FREE pve/data              # +95%, never +100%: keep a margin
lvs -o lv_name,lv_size,data_percent,metadata_percent pve
vgs pve</code></pre>
<p>Note: <code>parted</code> may be missing from the PATH on SystemRescue; <code>growpart</code> does the job just as well, and handles the GPT relocation itself.</p>

<h3>Step 8 — Reboot</h3>
<p>Remove the SystemRescue stick and <code>reboot</code>. Since <code>dd</code> copied the EFI partition, GRUB and every UUID identically, the server boots on the new NVMe without ever knowing about the change.</p>

<h3>Step 9 — Verify</h3>
<pre><code>pveversion
qm list
qm status 100
qm status 101</code></pre>
<p>If the VMs have the <code>onboot</code> option, they are already back up on their own.</p>
<blockquote>One detail that may worry you: <code>proxmox-boot-tool status</code> returns <code>E: /etc/kernel/proxmox-boot-uuids does not exist</code>. That is normal on a classic LVM + GRUB install — <code>proxmox-boot-tool</code> only matters for ZFS or systemd-boot setups. A successful boot is proof enough that the boot chain is intact.</blockquote>

<h2>The traps that turn a migration into a disaster</h2>
<p>The first draft of this procedure did not hold together. It was the review, then the field test, that hardened it. Here are the eight traps that make the difference between a clean migration and a wiped disk.</p>
<ul>
<li><strong>Verify the clone against the right size.</strong> A <code>cmp</code> over both whole devices is a guaranteed false failure — the relay drive is larger. Use <code>cmp -n</code> with the clone's exact byte count.</li>
<li><strong>Bound the restore with <code>count=</code>.</strong> The 12 TB relay is far bigger than the 250 GB clone; an unbounded <code>dd</code> copies the entire relay until it overflows the NVMe.</li>
<li><strong>Unplug the relay drive before any LVM command.</strong> A bit-for-bit clone means an identical PV UUID. LVM sees a duplicate PV and may run <code>pvresize</code>/<code>lvextend</code> on the wrong disk.</li>
<li><strong>Relocate the backup GPT.</strong> The clone is 233 GB; on a 1 TB disk its backup GPT table lands in the wrong place and partition growth can't see the free space. <code>sgdisk -e</code> puts it back.</li>
<li><strong>Address USB disks by <code>/dev/disk/by-id/</code>.</strong> The <code>sdX</code> letters change between boots. The NVMe, the only one in the machine, keeps its stable <code>/dev/nvme0n1</code>.</li>
<li><strong>Know your live USB.</strong> <code>parted</code> may be missing from the PATH on SystemRescue; <code>growpart</code> or <code>sgdisk</code> do the job. And the Proxmox installer ISO is too bare for disk surgery.</li>
<li><strong>Leave a margin in the volume group.</strong> Never <code>lvextend -l +100%FREE</code>. That "0 GB free" is exactly what blocked the incident response. I left around 5%.</li>
<li><strong>Inventory every disk before the first <code>dd</code>.</strong> With Proxmox stopped, the eight 4 TB disks of the Unraid array showed up as bare disks. Catching one in a <code>dd</code> would have destroyed the NAS. Named variables, never a raw <code>sdX</code>.</li>
</ul>

<h2>The result</h2>
<p>The server booted on the new NVMe on the first try. Here is the final layout:</p>
<pre><code>/dev/nvme0n1 — 931.5 GB (Crucial CT1000P5SSD8)
├── nvme0n1p1    1007K   BIOS boot
├── nvme0n1p2       1G   EFI System
└── nvme0n1p3  ~930.5G   Linux LVM (VG: pve, VFree 34.83 GiB)
    ├── pve-swap        2G
    ├── pve-root      ~68G
    ├── pve-data   820.91G   thin pool (18.12%)
    │   ├── vm-100-disk-0   32G
    │   └── vm-101-disk-0  150G
    └── (VG free: 34.83G — safety margin)</code></pre>
<ul>
<li><strong>LVM thin pool</strong> — from 159 GB jammed at 93.5%, to 820.91 GB used at just <strong>18.12%</strong>.</li>
<li><strong>Pool metadata</strong> — extended from 1.40 to 2.40 GB, to keep up with a pool five times larger.</li>
<li><strong>Volume group free space</strong> — from 0 to <strong>34.83 GB</strong>. That is the safety margin that was missing on 14 May.</li>
<li><strong>Boot</strong> — Proxmox VE 9.1.1 (kernel 6.17.2-1-pve) came back without a hitch, both VMs restarted automatically by <code>onboot</code>.</li>
</ul>
<p>No reconfiguration. Because <code>dd</code> copied EFI, GRUB and the UUIDs identically, the system simply never noticed it had changed disks.</p>

<h2>Epilogue — the "99%" that wasn't</h2>
<p>When closing the ticket, I had noted a follow-up item: VM 101's virtual disk appeared "99% full". A week later, when I went to enlarge it, I realized I had read the wrong metric.</p>
<p>That "99%" was not the fill level of the guest filesystem. It was the <code>Data%</code> of the thin volume <code>vm-101-disk-0</code> — the share of the <em>reservoir</em> that this volume had consumed. Inside the VM, the <code>/</code> filesystem was actually at <strong>72%</strong>: 99 GB used out of 146, 41 GB free. No enlargement was needed. But then, why had the thin allocation ballooned to 99%?</p>
<p>The answer is one word: <code>discard</code>. The VM's <code>scsi0</code> disk did not have the <code>discard=on</code> option. Without it, the guest's TRIM commands — which signal freed blocks — never reached the thin pool. The guest could run its weekly <code>fstrim</code> all it wanted, the pool never reclaimed those blocks. The allocation could only grow, never shrink. A disk that empties out on the guest side but stays "full" on the pool side: that is the trap of thin provisioning without <code>discard</code>.</p>
<p>The fix:</p>
<pre><code>qm set 101 --scsi0 local-lvm:vm-101-disk-0,size=150G,discard=on,ssd=1</code></pre>
<p>A reboot of the VM (the <code>discard</code> option is set when the block device is created), then an <code>fstrim -av</code> inside the guest — and <strong>48 GB</strong> are handed back to the pool in one go. The <code>Data%</code> of <code>vm-101-disk-0</code> drops from 99.17% to 70.46%, the thin pool from 18.12% to 12.88%. The weekly <code>fstrim.timer</code> now keeps the allocation tidy on its own.</p>
<p>And the last missing link: I had <strong>no automated backups</strong>. The 12 TB WD Elements that had served as the relay was repurposed as a backup disk — wiped, reformatted to ext4, mounted at <code>/mnt/wd-backup</code>, declared as Proxmox storage. A weekly <code>vzdump</code> job now backs up both VMs every Sunday at 2 a.m., in snapshot mode, with <code>zstd</code> compression. The 14 May incident could have cost around sixty containers and their data. Next time, there will be a net.</p>

<h2>What I'm taking away</h2>
<ul>
<li><strong>Never allocate 100% of a volume group.</strong> Keep around 5% free. That margin is exactly what lets you repair an incident instead of suffering it.</li>
<li><strong>Thin provisioning requires <code>discard=on</code> end to end.</strong> Without it, the pool's allocation only climbs, even when the guests empty out. TRIM must be able to travel the whole chain.</li>
<li><strong>Watch the thin pool, not just the disks.</strong> A guest volume at 72% and a pool at 97% tell two different stories — and it is the pool that blocks your I/O.</li>
<li><strong>A <code>dd</code> clone is an underrated migration tool.</strong> It carries EFI, GRUB and the LVM UUIDs identically: the system never sees the difference.</li>
<li><strong>Know your live USB before you need it.</strong> Which tools are present, how the disks are named, what the rescue ISO actually carries.</li>
<li><strong>No backup, no net.</strong> A homelab without a scheduled <code>vzdump</code> is not a homelab, it is a bet.</li>
</ul>
<p>The 250 GB NVMe is labeled and stored away. It stays intact for a week or two — long enough to confirm the new disk is stable — as a rollback path. Because a migration is never truly finished until you have a way to undo it.</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'ProxmoxNvmeMigration',
  props: {
    locale: {
      type: String as () => 'fr' | 'en',
      required: true
    }
  },
  setup(props) {
    const content = computed(() => {
      return getContent(props.locale)
    })
    return { content }
  },
  template: '<div v-html="content.html"></div>'
})
</script>

<template>
  <div v-html="content.html"></div>
</template>
