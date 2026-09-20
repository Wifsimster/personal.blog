<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'nothing-failed',
  date: '2026-10-04',
  tags: ['Homelab', 'Home-Assistant', 'Analysis'],
  draft: true
}

const frenchContent: PostContent = {
  title: "Rien n'a échoué. Le volet était mort depuis trois jours.",
  description: "Épisode 3 : neuf protocoles, neuf définitions du mot « en ligne ». Un drapeau de disponibilité périmé, un événement de succès qui part quand l'appareil est injoignable, un groupe de notifications vert qui ne réveille personne, et un voyant rouge qui ment lui aussi. Le juge de paix de chaque couche, et les alertes qu'il a fallu écrire.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Un volet de mon salon a quitté le réseau <abbr title="Réseau maillé radio basse consommation, 2,4 GHz">Zigbee</abbr> le 10 septembre à 17 h 48. Je l'ai découvert le 13. Entre les deux, le groupe qui ouvre les six volets chaque matin s'est exécuté trois fois sans erreur. Un groupe n'échoue pas, il saute le membre absent. Aucune couche ne mentait. Chacune répondait honnêtement à une question qui n'était pas la mienne. Cet épisode fait l'inventaire des indicateurs à ne pas croire, protocole par protocole, et nomme celui qu'il faut lire à la place. Avec un voyant rouge qui ment aussi : 2 871 échecs consécutifs sur un service qui allait parfaitement bien.</p></div>
<hr>
<p>Le 10 septembre à 11 h 59, le volet du salon côté sud reçoit sa dernière commande normale. Il se ferme.</p>
<p>À 17 h 48, Home Assistant bascule ses huit entités en indisponible. Personne ne le voit. Les trois matins suivants, l'automatisation d'ouverture fait son travail. Elle appelle le groupe des six volets, cinq s'ouvrent, et elle se termine en succès.</p>
<p>Je m'en suis aperçu le 13, en regardant autre chose.</p>

<h2>Un groupe n'échoue pas, il ignore</h2>
<p>C'est le premier piège, et il est dans le modèle, pas dans le matériel. Un groupe de volets appelé avec une commande d'ouverture ne vérifie pas que ses six membres répondent. Il transmet aux entités disponibles. Un membre absent ne produit pas d'erreur. Il produit une ligne d'avertissement dans le journal du serveur, <code>Referenced entities are missing or not currently available</code>, et l'exécution continue.</p>
<svg viewBox="0 0 640 288" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chronologie de la panne d'un volet Zigbee du 10 au 14 septembre 2026 : dernière commande à 11 h 59, bascule en indisponible à 17 h 48, puis trois ouvertures de groupe les matins suivants qui se terminent toutes en succès sans signaler le membre absent, et retour de l'appareil le 14 au soir après une coupure secteur." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">VOLET SALON SUD · 10 → 14 SEPTEMBRE 2026</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Trois matins. Zéro alerte.</text>
<line x1="32" y1="170" x2="608" y2="170" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<rect x="117" y="166" width="472" height="8" rx="4" fill="currentColor" fill-opacity="0.42"></rect>
<g fill="currentColor" fill-opacity="0.85">
<circle cx="90" cy="170" r="5"></circle>
<circle cx="117" cy="170" r="5"></circle>
<circle cx="183" cy="170" r="5"></circle>
<circle cx="298" cy="170" r="5"></circle>
<circle cx="413" cy="170" r="5"></circle>
<circle cx="589" cy="170" r="5"></circle>
</g>
<g font-family="ui-sans-serif, system-ui, sans-serif" fill="currentColor">
<text x="32" y="128" font-size="13" font-weight="650">10 septembre</text>
<text x="32" y="146" font-size="13" opacity="0.7">commande à 11 h 59, hors réseau à 17 h 48</text>
<text x="608" y="128" font-size="13" font-weight="650" text-anchor="end">14 septembre, 20 h 03</text>
<text x="608" y="146" font-size="13" opacity="0.7" text-anchor="end">retour après coupure secteur</text>
</g>
<path d="M 183 180 L 183 210 L 413 210 L 413 180" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 298 210 L 298 220" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"></path>
<text x="298" y="240" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" font-weight="650" text-anchor="middle">trois ouvertures du groupe, aucune en échec</text>
<text x="32" y="276" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Axe à l'échelle. Seul signal émis en trois jours : un avertissement par commande.</text>
</svg>
<p>Ce comportement est défendable. Une maison où l'ouverture des volets plante entièrement parce qu'un module est en panne serait pire. Mais il crée une catégorie de panne qui ne remonte nulle part. Le service rend la main, l'automatisation est verte dans l'historique, et la seule trace est un avertissement noyé dans un fichier que personne n'ouvre le matin.</p>
<p>La réparation n'était pas technique. J'ai écrit l'alerte qui manquait. Si l'un des six volets reste indisponible trente minutes, les deux téléphones reçoivent une notification, et une seconde part à son retour. Elle tourne depuis.</p>

<h2>Les drapeaux qui mentent</h2>
<p>Pendant ces trois jours, j'aurais pu interroger l'installation et en ressortir rassuré. Plusieurs indicateurs affirmaient que tout allait bien.</p>
<p><strong>Le drapeau de disponibilité.</strong> Dans l'intégration Zigbee, chaque appareil expose un <code>available</code> booléen. Ce n'est pas une mesure, c'est un cache. Il met longtemps à expirer, et il reste à vrai bien après que l'appareil s'est tu. La donnée utile est à côté, dans la date de dernier contact — et elle ne vaut que comparée à celle des autres appareils sur secteur du même maillage.</p>
<p><strong>L'événement de succès.</strong> Demander à l'intégration de reconfigurer l'appareil renvoie un événement <code>zha_channel_cfg_done</code>. Je l'ai pris pour une confirmation. Cet événement part même quand l'appareil est injoignable. Il signale que la procédure s'est déroulée, pas qu'elle a abouti. La preuve honnête était dans le journal, sous la forme d'une exception de routage, <code>NWK_NO_ROUTE</code>.</p>
<p><strong>Le drapeau de calibrage.</strong> Celui-là est le plus spectaculaire. Sur ces modules de volet, un bouton lance un cycle complet de calibrage. Appuyé alors que le volet n'est pas en butée haute, le capteur bascule sur « calibré » en moins de cinq secondes, sans qu'aucun cycle ne se déroule. Pire : une commande de position répond ensuite exactement la valeur demandée. Le volet n'a pas bougé d'un centimètre, et deux indicateurs crédibles affirment le contraire.</p>
<p><strong>Le code de retour HTTP.</strong> Appeler un service sur une entité qui n'existe plus renvoie 200. Le serveur a bien reçu et traité la demande. Que la demande n'ait atteint personne est une autre question, et elle se règle dans le journal.</p>
<blockquote><p>Un drapeau est l'opinion d'une intégration sur un appareil. Le journal est un fait.</p></blockquote>
<p>Au retour du volet, le 14 au soir, c'est un détail qui a tranché : son adresse réseau était passée de 25188 à 33130. Un module qui reprend sa session garde son adresse. Un module qui change d'adresse a refait un rattachement complet, donc il a réellement redémarré. Les deux coupures de courant précédentes n'avaient rien changé à cette valeur. Elles n'atteignaient pas le bon circuit.</p>

<h2>Le témoin fiable de chaque couche</h2>
<p>À force d'en collectionner, j'ai fini par écrire la table que j'aurais voulu avoir au départ.</p>
<svg viewBox="0 0 640 382" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tableau à deux colonnes opposant, pour cinq couches de l'installation, l'indicateur trompeur et l'indicateur fiable : le drapeau de disponibilité Zigbee contre la date de dernier contact, le ping contre l'annonce mDNS, le statut du contrôleur Wi-Fi contre la réponse ARP, l'existence du service de notification contre la date du dernier signal de la batterie, et le drapeau de calibrage contre le mouvement physique." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">CINQ COUCHES, CINQ TÉMOINS</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Chaque couche a son témoin.</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.5" letter-spacing="0.1em">
<text x="44" y="124">CE QUI MENT</text>
<text x="352" y="124">CE QU'IL FAUT LIRE</text>
</g>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="140" width="288" height="30" rx="8" fill="currentColor" fill-opacity="0.1"></rect>
<rect x="32" y="180" width="288" height="30" rx="8" fill="currentColor" fill-opacity="0.1"></rect>
<rect x="32" y="220" width="288" height="30" rx="8" fill="currentColor" fill-opacity="0.1"></rect>
<rect x="32" y="260" width="288" height="30" rx="8" fill="currentColor" fill-opacity="0.1"></rect>
<rect x="32" y="300" width="288" height="30" rx="8" fill="currentColor" fill-opacity="0.1"></rect>
<rect x="340" y="140" width="268" height="30" rx="8" fill="currentColor" fill-opacity="0.38"></rect>
<rect x="340" y="180" width="268" height="30" rx="8" fill="currentColor" fill-opacity="0.38"></rect>
<rect x="340" y="220" width="268" height="30" rx="8" fill="currentColor" fill-opacity="0.38"></rect>
<rect x="340" y="260" width="268" height="30" rx="8" fill="currentColor" fill-opacity="0.38"></rect>
<rect x="340" y="300" width="268" height="30" rx="8" fill="currentColor" fill-opacity="0.38"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.8">
<text x="44" y="160">Zigbee — le drapeau available</text>
<text x="44" y="200">Matter — le ping répond à 100 %</text>
<text x="44" y="240">Wi-Fi — le contrôleur dit en ligne</text>
<text x="44" y="280">Notifications — le service existe</text>
<text x="44" y="320">Volet — le drapeau « calibré »</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650">
<text x="352" y="160">last_seen d'un appareil sur secteur</text>
<text x="352" y="200">l'annonce mDNS du service</text>
<text x="352" y="240">la réponse à l'ARP</text>
<text x="352" y="280">last_reported de la batterie</text>
<text x="352" y="320">le mouvement physique</text>
</g>
<text x="32" y="364" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Chaque ligne vient d'une panne réelle de cette maison.</text>
</svg>
<p>Les deux premières lignes sont traitées dans <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">l'épisode précédent</a> : une prise Matter qui répond au ping avec une pile applicative figée, et une télécommande infrarouge que le contrôleur donne en ligne à <span style="white-space:nowrap">−19 dBm</span> alors qu'elle ne répond plus à l'ARP. Les trois autres méritent d'être détaillées ici.</p>

<h2>Le filet qui n'attrape plus personne</h2>
<p>Toutes ces alertes que j'écris reposent sur un groupe de notifications. Le 17 septembre, j'ai regardé ce qu'il contenait.</p>
<p>Il visait trois téléphones : deux Xiaomi et un Mi 8. Les trois avaient été remplacés douze jours plus tôt. Les deux téléphones réellement utilisés dans la maison n'étaient pas dans la liste.</p>
<p>Le point important est que rien n'échouait. Les services de notification de ces trois appareils existaient toujours dans le serveur, parce qu'un appareil retiré de la maison ne retire pas son service. Chaque appel partait, répondait 200, et n'atteignait personne. Pendant douze jours, tout mon dispositif d'alerte a été un décor.</p>
<p>Le témoin fiable est ailleurs. Chaque téléphone publie un capteur de niveau de batterie, et ce capteur porte la date de son dernier signal. Un appareil muet depuis des jours est un appareil parti. Le piège de détail vaut d'être noté. Ce capteur garde le nom de modèle d'origine alors que le service de notification suit le nom donné à l'appareil. Se fier à la ressemblance des noms ne marche pas, il faut passer par le registre.</p>
<blockquote><p>Un groupe de notifications peut être vert de bout en bout et ne réveiller personne.</p></blockquote>

<h2>Et le voyant rouge ment aussi</h2>
<p>Un article sur les faux verts serait malhonnête sans son revers.</p>
<p>Un de mes conteneurs de supervision est resté en état « malsain » pendant des semaines, avec 2 871 échecs consécutifs. Le service, lui, tournait parfaitement et répondait sur son port. La cause était dans le test de santé du fichier de composition. Il appelait une sous-commande du binaire sans le paramètre d'URL qu'elle exige. Sans ce paramètre, la commande affiche son aide et sort en erreur. À chaque intervalle. Indéfiniment.</p>
<p>Un rouge permanent est du bruit, et le bruit masque les vraies pannes aussi efficacement qu'un faux vert. Le réflexe utile est le même dans les deux sens : avant de diagnostiquer, lire la sortie enregistrée du test. Un message d'aide d'un outil en ligne de commande dans ce champ signifie que c'est le test qui est faux, pas le service.</p>

<h2>Plus haut que les capteurs : les données de référence</h2>
<p>Les pires erreurs de cette installation ne viennent pas d'un appareil en panne. Elles viennent de données justes en apparence, placées en amont de tout le reste.</p>
<p>Mon thermomètre extérieur était posé au soleil. Biais mesuré en journée : <strong>+14 °C</strong>, avec un pic à 36,5 °C à midi. Toute la logique d'aération de la maison reposait dessus, et ne se déclenchait donc qu'à 21 h. Déplacé à une fenêtre plein nord, il est passé de 36 à 27 °C en dix minutes.</p>
<p>Le plus instructif est venu après. Pour vérifier qu'il ne mentait plus, je l'ai comparé à la température annoncée par l'intégration météo. L'écart restait de 6,5 °C, ce qui laissait croire à un capteur encore biaisé. L'attribut que j'utilisais comme référence ne se rafraîchit qu'à l'heure ronde et retarde d'une à deux heures. Il affichait 22,8 °C quand la prévision horaire de la même intégration donnait 26,9 °C. Le biais résiduel réel était de 1,6 °C, normal pour une pose en tableau de fenêtre.</p>
<p>La référence qui servait à juger un capteur était elle-même périmée. C'est le genre d'erreur qui ne se voit pas, parce que les deux valeurs sont plausibles.</p>
<p>Dans le même registre, la position de la maison déclarée dans le serveur était fausse de 1 564 mètres. Mon téléphone me déclarait absent en permanence, y compris dans mon salon, et le mode absence ne pouvait donc ni s'armer ni se désarmer. Rien n'était en panne. La méthode qui tranche est simple : comparer les coordonnées du traqueur à celles de la zone et calculer la distance. Une précision annoncée de quatorze mètres avec un écart d'un kilomètre et demi ne peut pas être du bruit.</p>
<p>Enfin, un déclencheur peut se déclencher sur un événement qui n'a pas eu lieu. Un capteur calculé avec un délai d'activation restaure son état au démarrage du serveur. Au redémarrage du 29 juillet, il est revenu à sa valeur de la veille, puis a mis cinq minutes à retomber. Pendant cette fenêtre, une automatisation a fermé tous les volets à 10 % alors qu'il faisait 21,8 °C dehors et 24,7 °C dedans. Le déclencheur ne précisait pas d'où l'état devait venir, et une transition de reprise est indiscernable d'un vrai changement.</p>

<h2>Ce qui reste aux humains</h2>
<p>Savoir si un volet a bougé. Aucune couche de cette installation ne peut le dire, puisque le drapeau et la position rapportée sont tous les deux produits par le module lui-même. Un vrai cycle se reconnaît au fait que la position passe par des valeurs intermédiaires, et il faut quelqu'un dans la pièce pour le confirmer la première fois.</p>
<p>Distinguer le silence de la parole. Un appareil sur pile qui émet prouve que la radio passe, jamais qu'il y a du courant dans la pièce. J'ai cherché un problème de maillage pendant une heure parce que le thermomètre d'une chambre répondait ; les deux volets qui ne répondaient plus étaient les seuls appareils sur secteur de ces pièces, et le circuit était coupé.</p>
<p>Décider ce qui mérite une alerte. C'est la question la plus difficile et elle n'est pas technique. Alerter sur tout revient à ne rien alerter, et j'ai trois semaines de faux rouge pour le prouver.</p>

<h2>Ce que j'en retiens</h2>
<ul>
<li><strong>Un succès n'est pas une preuve d'effet.</strong> Un groupe qui rend la main, un code 200, un événement de fin de procédure : trois façons de confirmer que la demande est partie, aucune de confirmer qu'elle est arrivée.</li>
<li><strong>Identifier le témoin de chaque couche avant d'en avoir besoin.</strong> La table plus haut a été écrite panne après panne. Elle aurait pu l'être en une soirée.</li>
<li><strong>Se méfier d'un indicateur produit par l'appareil qu'il décrit.</strong> Le drapeau de calibrage et la position rapportée viennent du même module et se trompent ensemble.</li>
<li><strong>Préférer indisponible à faux.</strong> Mon capteur extérieur se déclare indisponible dès qu'il s'écarte de plus de 5 °C de la prévision horaire. Il gèle les décisions au lieu de les fausser, et une alerte part au bout d'une heure.</li>
<li><strong>Donner un état initial aux interrupteurs qui gouvernent des automatisations.</strong> Le mien retombe à l'arrêt à chaque redémarrage du serveur, et ça se lit exactement comme « l'automatisation ne marche plus ».</li>
<li><strong>Une panne silencieuse dure aussi longtemps que votre attention.</strong> Trois jours pour un volet, douze pour un groupe de notifications vide. Dans les deux cas, l'alerte manquante a été écrite après.</li>
</ul>
<p>Le prochain épisode change complètement de terrain. Après trois billets passés à ne pas croire des machines, il parlera de la seule partie de cette maison où le problème n'est ni radio ni réseau : treize annonces vocales, et la manière de les écrire pour qu'un enfant de sept ans les exécute.</p>
<p><strong>Lire la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Ma dernière sonde ESP8266 date de 2016</a> — l'inventaire de l'installation et la mesure de ce qui a changé. <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">L'IA n'a pas automatisé ma maison</a> — pourquoi le gain se mesure sur les chantiers qu'on ne commençait pas.</p>`
}

const englishContent: PostContent = {
  title: 'Nothing Failed. The Shutter Had Been Dead for Three Days.',
  description: 'Episode 3: nine protocols, nine definitions of "online". A stale availability flag, a success event that fires while the device is unreachable, a green notification group that wakes nobody, and a red light that lies too. The reliable witness for each layer, and the alerts I had to write.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> One of my living-room shutters left the <abbr title="Low-power 2.4 GHz mesh radio protocol">Zigbee</abbr> network on 10 September at 5:48 p.m. I found out on the 13th. In between, the group that opens all six shutters every morning ran three times without an error. A group does not fail, it skips the missing member. No layer was lying. Each answered honestly a question that was not mine. This episode inventories the indicators not to believe, protocol by protocol, and names the one to read instead. Including a red light that lies too: 2,871 consecutive failures on a service that was perfectly fine.</p></div>
<hr>
<p>On 10 September at 11:59 a.m., the south-side living-room shutter takes its last normal command. It closes.</p>
<p>At 5:48 p.m., Home Assistant flips its eight entities to unavailable. Nobody sees it. On each of the next three mornings the opening automation does its job. It calls the group of six shutters, five open, and it completes successfully.</p>
<p>I noticed on the 13th, while looking at something else.</p>

<h2>A group does not fail, it skips</h2>
<p>That is the first trap, and it sits in the model rather than the hardware. A shutter group handed an open command does not check that its six members answer. It forwards to whichever entities are available. A missing member produces no error. It produces one warning line in the server log, <code>Referenced entities are missing or not currently available</code>, and execution carries on.</p>
<svg viewBox="0 0 640 288" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of a Zigbee shutter outage from 10 to 14 September 2026: last command at 11:59, entities flipped to unavailable at 17:48, then three group openings on the following mornings that all complete successfully without reporting the missing member, and the device returning on the evening of the 14th after a power cut." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">ONE SHUTTER · 10 → 14 SEPTEMBER 2026</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Three mornings. No alert.</text>
<line x1="32" y1="170" x2="608" y2="170" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<rect x="117" y="166" width="472" height="8" rx="4" fill="currentColor" fill-opacity="0.42"></rect>
<g fill="currentColor" fill-opacity="0.85">
<circle cx="90" cy="170" r="5"></circle>
<circle cx="117" cy="170" r="5"></circle>
<circle cx="183" cy="170" r="5"></circle>
<circle cx="298" cy="170" r="5"></circle>
<circle cx="413" cy="170" r="5"></circle>
<circle cx="589" cy="170" r="5"></circle>
</g>
<g font-family="ui-sans-serif, system-ui, sans-serif" fill="currentColor">
<text x="32" y="128" font-size="13" font-weight="650">10 September</text>
<text x="32" y="146" font-size="13" opacity="0.7">command at 11:59, off the network at 17:48</text>
<text x="608" y="128" font-size="13" font-weight="650" text-anchor="end">14 September, 20:03</text>
<text x="608" y="146" font-size="13" opacity="0.7" text-anchor="end">back after a power cut</text>
</g>
<path d="M 183 180 L 183 210 L 413 210 L 413 180" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 298 210 L 298 220" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"></path>
<text x="298" y="240" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" font-weight="650" text-anchor="middle">three group openings, none of them failed</text>
<text x="32" y="276" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Axis to scale. Only signal in three days: one warning per command.</text>
</svg>
<p>The behaviour is defensible. A house where opening the shutters collapses entirely because one module died would be worse. But it creates a class of failure that surfaces nowhere. The service returns, the automation shows green in the history, and the only trace is a warning buried in a file nobody opens in the morning.</p>
<p>The repair was not technical. I wrote the alert that was missing. If any of the six shutters stays unavailable for thirty minutes, both phones get a notification, and a second one goes out when it comes back. It has been running since.</p>

<h2>The flags that lie</h2>
<p>During those three days I could have queried the installation and come away reassured. Several indicators insisted everything was fine.</p>
<p><strong>The availability flag.</strong> In the Zigbee integration, every device exposes an <code>available</code> boolean. It is not a measurement, it is a cache. It takes a long time to expire and stays true well after the device goes quiet. The useful value sits next to it, in the last-seen timestamp — and it only means something compared against the other mains-powered devices on the same mesh.</p>
<p><strong>The success event.</strong> Asking the integration to reconfigure the device returns a <code>zha_channel_cfg_done</code> event. I read it as confirmation. That event fires even when the device is unreachable. It reports that the procedure ran, not that it landed. The honest evidence was in the log, as a routing exception, <code>NWK_NO_ROUTE</code>.</p>
<p><strong>The calibration flag.</strong> This one is the most spectacular. On these shutter modules, a button starts a full calibration cycle. Pressed while the shutter is not at its top stop, the sensor flips to "calibrated" in under five seconds without any cycle running. Worse: a position command then reports back exactly the value you asked for. The shutter has not moved a centimetre, and two credible indicators say otherwise.</p>
<p><strong>The HTTP status code.</strong> Calling a service on an entity that no longer exists returns 200. The server did receive and process the request. Whether the request reached anybody is a separate question, and it gets settled in the log.</p>
<blockquote><p>A flag is an integration's opinion about a device. The log is a fact.</p></blockquote>
<p>When the shutter came back on the evening of the 14th, one detail settled it: its network address had gone from 25188 to 33130. A module resuming its session keeps its address. A module that changes address performed a full rejoin, so it genuinely rebooted. The two previous power cuts had left that value untouched. They were not reaching the right circuit.</p>

<h2>The reliable witness for each layer</h2>
<p>After collecting enough of these, I ended up writing the table I wish I had started with.</p>
<svg viewBox="0 0 640 382" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-column table setting the misleading indicator against the reliable one for five layers of the installation: the Zigbee availability flag against the last-seen timestamp, ping against the mDNS announcement, the Wi-Fi controller status against the ARP reply, the existence of a notification service against the battery sensor's last report, and the calibration flag against physical movement." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">FIVE LAYERS, FIVE WITNESSES</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Every layer has its witness.</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.5" letter-spacing="0.1em">
<text x="44" y="124">WHAT LIES</text>
<text x="352" y="124">WHAT TO READ</text>
</g>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="140" width="288" height="30" rx="8" fill="currentColor" fill-opacity="0.1"></rect>
<rect x="32" y="180" width="288" height="30" rx="8" fill="currentColor" fill-opacity="0.1"></rect>
<rect x="32" y="220" width="288" height="30" rx="8" fill="currentColor" fill-opacity="0.1"></rect>
<rect x="32" y="260" width="288" height="30" rx="8" fill="currentColor" fill-opacity="0.1"></rect>
<rect x="32" y="300" width="288" height="30" rx="8" fill="currentColor" fill-opacity="0.1"></rect>
<rect x="340" y="140" width="268" height="30" rx="8" fill="currentColor" fill-opacity="0.38"></rect>
<rect x="340" y="180" width="268" height="30" rx="8" fill="currentColor" fill-opacity="0.38"></rect>
<rect x="340" y="220" width="268" height="30" rx="8" fill="currentColor" fill-opacity="0.38"></rect>
<rect x="340" y="260" width="268" height="30" rx="8" fill="currentColor" fill-opacity="0.38"></rect>
<rect x="340" y="300" width="268" height="30" rx="8" fill="currentColor" fill-opacity="0.38"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.8">
<text x="44" y="160">Zigbee — the available flag</text>
<text x="44" y="200">Matter — ping replies 100%</text>
<text x="44" y="240">Wi-Fi — the controller says online</text>
<text x="44" y="280">Notifications — the service exists</text>
<text x="44" y="320">Shutter — the calibrated flag</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650">
<text x="352" y="160">last_seen on a mains device</text>
<text x="352" y="200">the mDNS service announcement</text>
<text x="352" y="240">the reply to ARP</text>
<text x="352" y="280">last_reported on the battery</text>
<text x="352" y="320">physical movement</text>
</g>
<text x="32" y="364" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Every row comes from a real outage in this house.</text>
</svg>
<p>The first two rows are covered in <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">the previous episode</a>: a Matter plug answering ping with a wedged application stack, and an infrared remote the controller calls online at <span style="white-space:nowrap">−19 dBm</span> while it has stopped answering ARP. The other three deserve the detail here.</p>

<h2>The net that catches nobody</h2>
<p>All the alerts I write rest on one notification group. On 17 September I looked at what was in it.</p>
<p>It targeted three phones: two Xiaomi handsets and a Mi 8. All three had been replaced twelve days earlier. The two phones actually in use in this house were not on the list.</p>
<p>The important part is that nothing was failing. The notification services for those three devices still existed in the server, because removing a phone from the house does not remove its service. Every call went out, returned 200, and reached nobody. For twelve days my entire alerting setup was scenery.</p>
<p>The reliable witness is elsewhere. Every phone publishes a battery level sensor, and that sensor carries the time of its last report. A device silent for days is a device that has left. One detail is worth noting. That sensor keeps the original model name while the notification service follows the name given to the device. Matching them by name similarity does not work. You have to go through the registry.</p>
<blockquote><p>A notification group can be green end to end and wake nobody up.</p></blockquote>

<h2>And the red light lies too</h2>
<p>An article about false greens would be dishonest without its reverse.</p>
<p>One of my monitoring containers sat in an unhealthy state for weeks, with 2,871 consecutive failures. The service itself ran perfectly and answered on its port. The cause was in the health check declared in the compose file. It called a subcommand of the binary without the URL parameter that subcommand requires. Without it, the command prints its usage and exits with an error. At every interval. Indefinitely.</p>
<p>A permanent red is noise, and noise hides real outages just as well as a false green does. The useful reflex runs both ways: before diagnosing anything, read the recorded output of the check. A command-line usage message in that field means the check is wrong, not the service.</p>

<h2>Above the sensors: the reference data</h2>
<p>The worst mistakes in this installation did not come from a broken device. They came from data that looked right, sitting upstream of everything else.</p>
<p>My outdoor thermometer was mounted in direct sun. Measured daytime bias: <strong>+14 °C</strong>, peaking at 36.5 °C at noon. The whole house ventilation logic ran on that number, so it only ever triggered at 9 p.m. Moved to a north-facing window, it dropped from 36 to 27 °C in ten minutes.</p>
<p>What came next taught me more. To check that it had stopped lying, I compared it against the temperature reported by the weather integration. The gap stayed at 6.5 °C, which suggested a still-biased sensor. The attribute I was using as a reference only refreshes on the hour and lags one to two hours. It read 22.8 °C while the hourly forecast from the same integration gave 26.9 °C. The real residual bias was 1.6 °C, which is normal for a window reveal.</p>
<p>The reference used to judge a sensor was itself stale. That kind of error stays invisible, because both values are plausible.</p>
<p>In the same family, the home location declared in the server was off by 1,564 metres. My phone reported me away permanently, including from my own sofa, so away mode could neither arm nor disarm. Nothing was broken. The method that settles it is simple: compare the tracker's coordinates against the zone's and compute the distance. A stated accuracy of fourteen metres with a gap of a kilometre and a half cannot be noise.</p>
<p>Finally, a trigger can fire on an event that never happened. A computed sensor with an activation delay restores its state when the server starts. On the reboot of 29 July it came back to the previous day's value, then took five minutes to fall back. During that window an automation closed every shutter to 10% while it was 21.8 °C outside and 24.7 °C inside. The trigger did not state which state the change had to come from, and a restore transition is indistinguishable from a real one.</p>

<h2>What still belongs to humans</h2>
<p>Knowing whether a shutter moved. No layer of this installation can say, because the flag and the reported position are both produced by the module itself. A real cycle is recognisable by the position passing through intermediate values, and it takes someone in the room to confirm it the first time.</p>
<p>Telling silence from speech. A battery device that transmits proves the radio gets through, never that there is power in the room. I hunted a mesh problem for an hour because a bedroom thermometer was answering; the two shutters that had gone quiet were the only mains-powered devices in those rooms, and the circuit was off.</p>
<p>Deciding what deserves an alert. That is the hardest question and it is not technical. Alerting on everything is the same as alerting on nothing, and I have three weeks of false red to prove it.</p>

<h2>What I am taking away</h2>
<ul>
<li><strong>Success is not evidence of effect.</strong> A group returning, a 200, an end-of-procedure event: three ways of confirming the request left, none of confirming it arrived.</li>
<li><strong>Identify each layer's witness before you need it.</strong> The table above was written one outage at a time. It could have been written in one evening.</li>
<li><strong>Distrust any indicator produced by the device it describes.</strong> The calibration flag and the reported position come from the same module and get it wrong together.</li>
<li><strong>Prefer unavailable to wrong.</strong> My outdoor sensor declares itself unavailable as soon as it drifts more than 5 °C from the hourly forecast. It freezes decisions instead of corrupting them, and an alert fires after an hour.</li>
<li><strong>Give an initial state to the switches that gate automations.</strong> Mine falls back to off on every server restart, and that reads exactly like "the automation stopped working".</li>
<li><strong>A silent failure lasts as long as your attention does.</strong> Three days for a shutter, twelve for an empty notification group. In both cases the missing alert was written afterwards.</li>
</ul>
<p>The next episode changes ground entirely. After three posts spent not believing machines, it covers the one part of this house where the problem is neither radio nor network: thirteen spoken announcements, and how to write them so a seven-year-old acts on them.</p>
<p><strong>Read the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">My Last ESP8266 Probe Was 2016</a> — the inventory and a measurement of what changed. <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">AI Didn't Automate My House</a> — why the win shows up on the projects you never started.</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'RienNaEchoue',
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
