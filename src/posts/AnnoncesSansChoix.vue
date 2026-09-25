<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'no-choices',
  date: '2026-10-11',
  tags: ['Homelab', 'Home-Assistant', 'DIY', 'AI']
}

const frenchContent: PostContent = {
  title: "J'ai enlevé les choix, et l'annonce a commencé à marcher",
  description: "Épisode 4 : treize annonces vocales par jour, du lever au coucher. La chaîne audio marchait dès le premier jour et ne produisait aucune action. Huit règles de rédaction, un réveil réécrit trois fois dans la même journée, et la branche de repli pour le jour où l'enceinte ne répond pas.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Ma maison diffuse treize annonces vocales par jour, du lever au coucher, sur deux enceintes. Les premières versions étaient jouées parfaitement et ne produisaient aucune action. Le problème n'était nulle part dans la chaîne audio. Il était dans le texte. Les treize messages ont été réécrits d'un coup selon une grille de huit règles, dont la plus contre-intuitive est d'avoir retiré tous les choix proposés. Le réveil, lui, a été réécrit trois fois dans la même journée, jusqu'à ce que la musique remplace la voix. Cet épisode est le seul de la série où le protocole ne joue aucun rôle.</p></div>
<hr>
<p>19 h 31. L'enceinte du salon annonce : « C'est le temps calme. Tu peux lire, dessiner, ou jouer tranquillement. »</p>
<p>Le message part au bon moment, au bon volume, dans la bonne pièce. Personne ne bouge.</p>
<p>J'ai passé les trois épisodes précédents à me méfier de ce que les machines racontent. Celui-ci est différent. Le montage technique fonctionnait dès le premier jour.</p>

<h2>La chaîne audio n'était pas en cause</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/speaker-light.png"><img src="/visuals/no-choices/speaker-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/speaker-dark.png"><img src="/visuals/no-choices/speaker-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>Elle mérite deux phrases, parce qu'elle a été montée en une soirée et n'a plus jamais bougé. La synthèse vocale tourne dans un conteneur, en français, sans aucun service externe. Les treize automatisations n'adressent jamais une enceinte directement : elles appellent un script unique qui choisit la pièce, le volume et le canal, ce qui laisse un seul endroit à corriger le jour où les enceintes changent de nom.</p>

<h2>Huit règles, écrites après coup</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/rules-light.png"><img src="/visuals/no-choices/rules-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/rules-dark.png"><img src="/visuals/no-choices/rules-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>Le vrai chantier était ailleurs. Les treize messages ont été réécrits en une passe, selon une grille que j'ai fini par formuler explicitement.</p>
<ol>
<li><strong>Le prénom en tête.</strong> Une consigne impersonnelle ne désigne personne, donc personne ne bouge. « On range ses affaires » s'adresse à la pièce.</li>
<li><strong>Une seule action par annonce.</strong> Jamais deux consignes empilées. Une annonce vaut une étape.</li>
<li><strong>Un verbe à l'impératif et un objet concret.</strong> « Brosse tes dents », pas « c'est l'heure du brossage ».</li>
<li><strong>Jamais de question.</strong> « En pyjama ? Alors… » invite à négocier ou à décrocher.</li>
<li><strong>Borner le temps quand la tâche est ouverte.</strong> Les devoirs sont devenus « Quinze minutes, puis on mange ».</li>
<li><strong>Séquencer explicitement quand il y a un ordre.</strong> « Chaussures, puis manteau. »</li>
<li><strong>Aucun choix proposé.</strong> Chaque option énumérée est une décision à prendre avant d'agir.</li>
<li><strong>Zéro logistique d'adulte dans un message adressé à un enfant.</strong> L'annonce de 7 h 50 récitait l'emploi du temps des autres, ce qui noyait la seule consigne utile.</li>
</ol>
<p>En pratique, la grille a été appliquée par un script qui parcourt chaque appel du script d'annonce et corrige le texte sur place. Treize automatisations réécrites et rechargées, aucune erreur de configuration, le temps d'un café. C'est cette absence de coût qui a permis d'aller jusqu'à la version qui marche, au lieu de s'arrêter à la première qui semblait raisonnable.</p>
<p>La septième règle est celle qui m'a le plus surpris, et c'est celle du temps calme.</p>
<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trois réécritures successives de la même annonce de temps calme, écrites le même jour : à chaque version, le texte accessoire s'efface un peu plus, jusqu'à ne laisser que « PRÉNOM, temps calme. », en couleur d'accent dans les trois versions, la seule partie qui survit." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">TEMPS CALME · 19 H 31 · TROIS VERSIONS</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Ce qui reste, en couleur.</text>
<text x="32" y="116" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.5" letter-spacing="0.08em">VERSION 1 · TROIS DÉCISIONS AVANT D'AGIR</text>
<text x="32" y="140" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17"><tspan fill="var(--diagram-accent)" font-weight="650">« PRÉNOM, </tspan><tspan fill="currentColor" fill-opacity="0.32">c'est le </tspan><tspan fill="var(--diagram-accent)" font-weight="650">temps calme.</tspan><tspan fill="currentColor" fill-opacity="0.32"> Tu peux lire, dessiner ou jouer. »</tspan></text>
<line x1="32" y1="158" x2="608" y2="158" stroke="currentColor" stroke-opacity="0.12" stroke-width="1"></line>
<text x="32" y="178" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.5" letter-spacing="0.08em">VERSION 2 · UNE DÉCISION</text>
<text x="32" y="202" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17"><tspan fill="var(--diagram-accent)" font-weight="650">« PRÉNOM, temps calme.</tspan><tspan fill="currentColor" fill-opacity="0.32"> Tu peux lire ou dessiner. »</tspan></text>
<line x1="32" y1="220" x2="608" y2="220" stroke="currentColor" stroke-opacity="0.12" stroke-width="1"></line>
<text x="32" y="240" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.5" letter-spacing="0.08em">VERSION 3 · AUCUNE</text>
<text x="32" y="264" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17"><tspan fill="var(--diagram-accent)" font-weight="650">« PRÉNOM, temps calme. »</tspan></text>
<text x="32" y="298" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">La partie en couleur ne change jamais. Tout le reste finit par disparaître.</text>
</svg>
<p>La première version proposait trois activités. Je l'avais écrite en croyant bien faire, parce qu'offrir un choix passe pour une marque de respect. Ramenée à deux options, elle marchait un peu mieux. Ramenée à zéro, elle a commencé à marcher. L'annonce nomme l'état attendu, elle ne présente pas un menu.</p>
<p>Un autre effet de cette grille m'a d'abord gêné. Les branches « mercredi » et « jour d'école » de deux annonces disaient la même chose avec des mots différents. Je les ai fusionnées, et la variation a disparu. Cette répétition à l'identique rend un message reconnaissable dès les premiers mots.</p>
<p>Enfin, une règle a coûté quelque chose. L'annonce du petit-déjeuner rappelait « tu dois être habillé ». Elle ne le rappelle plus, au nom de la deuxième règle. Le contrôle de l'étape précédente a disparu, et je l'assume sans être certain que ce soit le bon arbitrage.</p>
<blockquote><p>Une annonce qui ne change le comportement de personne n'est pas une annonce. C'est du bruit à l'heure dite.</p></blockquote>
<p>Les messages adressés aux adultes suivent des règles opposées et gardent leur contenu logistique. Celui de 8 h 00 a seulement été reformulé en alerte, « vous devriez déjà être partis », parce que ceux qui l'entendent encore sont précisément ceux qui ne sont pas partis.</p>

<h2>Le réveil, trois versions dans la même journée</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/wakeup-light.png"><img src="/visuals/no-choices/wakeup-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/wakeup-dark.png"><img src="/visuals/no-choices/wakeup-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>La première version du réveil annonçait, puis lançait la musique. Elle a tenu une matinée. Se faire réveiller par une voix ne passait pas.</p>
<p>La séquence a été inversée le jour même. La musique devient le réveil, et la consigne passe par-dessus quatre-vingt-dix secondes plus tard.</p>
<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Courbe montrant le volume de l'enceinte grimper de dix à trente pour cent par paliers de cinq points toutes les vingt secondes, avec un repère vertical à quatre-vingt-dix secondes marquant le moment où la consigne vocale passe par-dessus la musique, quel que soit le réglage de la rampe." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">RÉVEIL · VERSION DU 18 SEPTEMBRE</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">La musique d'abord, la voix ensuite.</text>
<line x1="32" y1="230" x2="608" y2="230" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></line>
<path d="M 32.0 199.5 L 147.2 184.2 L 262.4 169.0 L 377.6 153.8 L 492.8 138.5 L 608.0 138.5 L 608.0 230 L 32.0 230 Z" fill="var(--diagram-accent)" fill-opacity="0.14" stroke="none"></path>
<path d="M 32.0 199.5 L 147.2 184.2 L 262.4 169.0 L 377.6 153.8 L 492.8 138.5 L 608.0 138.5" fill="none" stroke="var(--diagram-accent)" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
<circle cx="32.0" cy="199.5" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="32.0" y="182.5" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="650" opacity="0.85">10 %</text>
<circle cx="147.2" cy="184.2" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="147.2" y="167.2" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="650" opacity="0.85">15 %</text>
<circle cx="262.4" cy="169.0" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="262.4" y="152.0" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="650" opacity="0.85">20 %</text>
<circle cx="377.6" cy="153.8" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="377.6" y="136.8" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="650" opacity="0.85">25 %</text>
<circle cx="492.8" cy="138.5" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="492.8" y="121.5" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="650" opacity="0.85">30 %</text>
<line x1="550.4" y1="132.5" x2="550.4" y2="240" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="3 4" stroke-linecap="round"></line>
<text x="550.4" y="260" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="650" opacity="0.9">T+90 s</text>
<text x="32" y="260" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">0 s · la musique démarre</text>
<text x="32" y="288" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Trois itérations le même jour, jusqu'au bon plafond de volume.</text>
<text x="32" y="310" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Le volume de l'enceinte n'est pas restauré ensuite.</text>
</svg>
<p>Le détail qui compte est la rampe. L'enceinte démarre à dix pour cent et monte de cinq points toutes les vingt secondes. La consigne tombe toujours à quatre-vingt-dix secondes, quel que soit le réglage de la montée. Trois réglages se sont succédé : un palier unique à vingt pour cent, puis une rampe jusqu'à vingt, puis jusqu'à trente.</p>
<p>Une consigne de départ a été abandonnée le même jour. J'avais demandé que la musique reprenne « au volume courant de l'enceinte ». Dès lors que la musique <em>est</em> le réveil, hériter du volume laissé la veille au soir rend le réveil imprévisible : trop fort un matin, inaudible le lendemain.</p>
<p>Deux réserves honnêtes. Le volume n'est pas restauré après le réveil, donc l'enceinte reste à trente pour cent pour la journée. Et la rampe écrase toute baisse manuelle faite pendant les quatre-vingts premières secondes, puisque rien ne détecte l'interaction.</p>
<p>Le choix de la musique a réservé une surprise. Il n'existait aucune liste de lecture locale sur l'enceinte. Les favoris étaient vides, et la seule liste écoutée venait d'un service de streaming poussé depuis le téléphone. J'ai donc figé la file en cours en liste locale. Conséquence à ne pas oublier : le serveur retrouve cette liste par correspondance exacte de son titre, donc la renommer depuis l'application casse le réveil. Et la lecture repart toujours sur la première piste, parce que la lecture aléatoire est un réglage qui resterait actif sur l'enceinte après le réveil.</p>
<p>La musique s'arrête d'elle-même, sans automatisation dédiée. L'annonce de huit heures met en pause les enceintes en cours de lecture. Pour cibler celles-ci sans déclencher d'erreur sur une enceinte inactive, la liste est construite par filtrage plutôt qu'écrite en dur. Une liste vide ne déclenche aucune action.</p>

<h2>Le jour où l'enceinte ne répond pas</h2>
<p>Une annonce de routine peut se permettre de rater. Un réveil, non.</p>
<p>L'automatisation du lever teste donc d'abord que l'enceinte de la chambre répond. Si oui, elle appelle le script d'annonce. Sinon, elle bascule sur une notification prioritaire vers les téléphones <em>et</em> une notification persistante dans l'interface, toutes deux portant l'état réel de l'enceinte et l'heure. La notification persistante est le filet sous le filet : elle s'affiche même si le canal des téléphones est cassé.</p>
<p>Cette branche de repli a pris dix minutes à écrire. C'est le genre de robustesse qu'on ne s'offre que quand elle est bon marché.</p>

<h2>Ce que la maison n'a pas le droit de dire</h2>
<p>Quelques interdits se sont accumulés, et ils valent autant que les règles de rédaction.</p>
<p>La maison est de plain-pied. « Monte », « descends », « en haut », « en bas » sont bannis de toutes les annonces et de toutes les notifications. C'est le genre de tournure qu'on écrit sans y penser.</p>
<p>Rien n'est diffusé entre 21 h 45 et 7 h 00, sauf si l'appel le demande explicitement. Une alerte de portail à deux heures du matin réveillerait toute la maison pour une bourrasque.</p>
<p>Et une branche du script est aujourd'hui inerte, volontairement. Il sait adresser une deuxième chambre d'enfant, qui n'a pas encore d'enceinte. Le jour où elle en aura une, il suffira de la nommer correctement dans l'application du fabricant pour que l'identifiant attendu par le script se crée tout seul.</p>

<h2>Ce qui reste aux humains</h2>
<p>Savoir que son enfant déteste être réveillé par une voix. Ça ne se déduit d'aucune donnée de cette installation. Ça se découvre à sept heures quinze.</p>
<p>Observer si l'annonce produit une action. Le serveur sait me dire qu'un clip a été joué. Il ne saura jamais me dire que personne n'a bougé, et c'est la seule mesure qui compte ici.</p>
<p>Décider ce que la maison impose. Le temps calme de 19 h 31, la télévision coupée à 19 h 30, le coucher à 20 h 30 : ce sont des décisions de parent, pas des optimisations. Aucun capteur ne les produit.</p>

<h2>Ce que j'en retiens</h2>
<ul>
<li><strong>Écrire la grille, pas seulement les messages.</strong> Un texte finit toujours par changer. La grille resservira pour chaque nouvelle consigne.</li>
<li><strong>Le bon test ne fait pas de bruit dans la maison.</strong> Une automatisation jetable qui affiche ce qu'elle reçoit vaut mieux qu'un essai grandeur nature à sept heures du matin.</li>
</ul>
<p>Le prochain épisode revient à la physique du bâtiment : six volets qui décident seuls de leur position à partir de la température de leur pièce et de la course du soleil sur leur façade, un cadastre, et un bureau à 29 °C en pleine nuit sans le moindre rayon de soleil.</p>
<h2>À télécharger</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/no-choices/annonce-vocale.yaml" download>annonce-vocale.yaml</a> — le script par lequel passent les treize annonces. Une seule chose à adapter, la table des enceintes.</li>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/no-choices/LISEZMOI.md" download>LISEZMOI.md</a> — l'installation, la mécanique décrite sans Home Assistant, et la grille de rédaction en huit lignes.</li>
</ul>
<p><strong>Lire la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Dix ans de domotique tout seul, un an avec un agent</a> — l'inventaire de l'installation et la mesure de ce qui a changé. <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">L'IA n'a pas automatisé ma maison</a> — pourquoi le gain se mesure sur les chantiers qu'on ne commençait pas. <a target="_blank" rel="noopener noreferrer" href="/posts/daily-rhythm">J'ai changé le calendrier du soir trois fois en une semaine</a> — portail, télévision, volets et calendrier scolaire. <a target="_blank" rel="noopener noreferrer" href="/posts/not-the-sun">Mon bureau est à 29 °C la nuit</a> — six volets qui décident seuls, et ce que le modèle m'a dit de ne pas faire.</p>`
}

const englishContent: PostContent = {
  title: 'I Took the Choices Out, and the Announcement Started Working',
  description: 'Episode 4: thirteen spoken announcements a day, from wake-up to bedtime. The audio chain worked from day one and produced no action at all. Eight writing rules, a wake-up rewritten three times in one day, and the fallback for the morning the speaker does not answer.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> My house plays thirteen spoken announcements a day, from wake-up to bedtime, on two speakers. The first versions played perfectly and produced no action whatsoever. Nothing in the audio chain was at fault. The problem was the text. All thirteen messages were rewritten in one pass against a grid of eight rules, the most counter-intuitive of which was removing every choice on offer. The wake-up itself was rewritten three times in a single day, until music replaced the voice. This is the one episode in the series where no protocol plays any part.</p></div>
<hr>
<p>7:31 p.m. The living-room speaker announces: "It's quiet time. You can read, draw, or play quietly."</p>
<p>The message goes out at the right moment, at the right volume, in the right room. Nobody moves.</p>
<p>I spent the last three episodes distrusting what machines report. This one is different. The technical setup worked from day one.</p>

<h2>The audio chain was not at fault</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/speaker-light.png"><img src="/visuals/no-choices/speaker-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/speaker-dark.png"><img src="/visuals/no-choices/speaker-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>It deserves two sentences, because it went up in one evening and never moved again. Speech synthesis runs in a container, in French, with no external service. The thirteen automations never address a speaker directly: they call one script that picks the room, the volume and the channel, which leaves one place to fix the day the speakers change names.</p>

<h2>Eight rules, written afterwards</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/rules-light.png"><img src="/visuals/no-choices/rules-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/rules-dark.png"><img src="/visuals/no-choices/rules-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>The actual work was elsewhere. I rewrote every message in a single sweep, against a grid I ended up stating explicitly.</p>
<ol>
<li><strong>Name first.</strong> An impersonal instruction addresses nobody, so nobody moves. "We tidy our things" is addressed to the room.</li>
<li><strong>One action per announcement.</strong> Never two instructions stacked. One announcement is one step.</li>
<li><strong>Imperative verb, concrete object.</strong> "Brush your teeth", not "it is teeth-brushing time".</li>
<li><strong>Never a question.</strong> "In your pyjamas? Then…" invites negotiation, or drifting off.</li>
<li><strong>Bound the time when the task is open-ended.</strong> Homework became "Fifteen minutes, then we eat".</li>
<li><strong>Sequence explicitly when order matters.</strong> "Shoes, then coat."</li>
<li><strong>Offer no choices.</strong> Every option listed is a decision to make before acting.</li>
<li><strong>No adult logistics in a message addressed to a child.</strong> The 7:50 announcement recited everyone else's schedule, which drowned the one instruction that mattered.</li>
</ol>
<p>In practice the grid was applied by a script walking every call site of the announcement script and fixing the text in place. Thirteen automations rewritten and reloaded, no configuration errors, in the time it takes to make coffee. That absence of cost is what made it possible to reach the version that works, instead of stopping at the first one that looked reasonable.</p>
<p>The seventh rule surprised me most, and it belongs to the quiet-time message.</p>
<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three successive rewrites of the same quiet-time announcement, written the same day: with each version the extra text fades a little more, until only ‘NAME, quiet time.’, in accent colour across all three versions, is what survives." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">QUIET TIME · 7:31 PM · THREE VERSIONS</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">What survives, in colour.</text>
<text x="32" y="116" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.5" letter-spacing="0.08em">VERSION 1 · THREE DECISIONS BEFORE ACTING</text>
<text x="32" y="140" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17"><tspan fill="var(--diagram-accent)" font-weight="650">“NAME, </tspan><tspan fill="currentColor" fill-opacity="0.32">it's </tspan><tspan fill="var(--diagram-accent)" font-weight="650">quiet time.</tspan><tspan fill="currentColor" fill-opacity="0.32"> You can read, draw, or play. ”</tspan></text>
<line x1="32" y1="158" x2="608" y2="158" stroke="currentColor" stroke-opacity="0.12" stroke-width="1"></line>
<text x="32" y="178" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.5" letter-spacing="0.08em">VERSION 2 · ONE DECISION</text>
<text x="32" y="202" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17"><tspan fill="var(--diagram-accent)" font-weight="650">“NAME, quiet time.</tspan><tspan fill="currentColor" fill-opacity="0.32"> You can read or draw. ”</tspan></text>
<line x1="32" y1="220" x2="608" y2="220" stroke="currentColor" stroke-opacity="0.12" stroke-width="1"></line>
<text x="32" y="240" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.5" letter-spacing="0.08em">VERSION 3 · NONE</text>
<text x="32" y="264" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17"><tspan fill="var(--diagram-accent)" font-weight="650">“NAME, quiet time. ”</tspan></text>
<text x="32" y="298" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">The coloured part never changes. Everything else eventually disappears.</text>
</svg>
<p>The first version offered three activities. I had written it meaning well, because offering a choice reads as a mark of respect. Cut to two options, it worked slightly better. Cut to none, it started working. The announcement names the expected state, it does not present a menu.</p>
<p>Another effect of the grid bothered me at first. The "Wednesday" and "school day" branches of two announcements said the same thing in different words. I merged them, and the variation disappeared. That exact repetition makes a message recognisable from its first words.</p>
<p>One rule did cost something. The breakfast announcement used to add "you need to be dressed". It no longer does, in the name of rule two. The check on the previous step is gone, and I own that without being sure it was the right call.</p>
<blockquote><p>An announcement that changes nobody's behaviour is not an announcement. It is noise on a schedule.</p></blockquote>
<p>Messages addressed to adults follow the opposite rules and keep their logistics. The 8 a.m. one was only reframed as an alert, "you should have left by now", because whoever still hears it is precisely whoever has not left.</p>

<h2>The wake-up, three versions in one day</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/wakeup-light.png"><img src="/visuals/no-choices/wakeup-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/wakeup-dark.png"><img src="/visuals/no-choices/wakeup-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>The original wake-up announced, then started the music. It lasted one morning. Being woken by a voice did not go down well.</p>
<p>The sequence was flipped the same day. Music becomes the alarm, and the instruction is layered over it ninety seconds later.</p>
<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Curve showing the speaker's volume climbing from ten to thirty percent in five-point steps every twenty seconds, with a vertical marker at ninety seconds marking the point where the spoken instruction is layered over the music, whatever the ramp is set to." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">WAKE-UP · 18 SEPTEMBER VERSION</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Music first, voice second.</text>
<line x1="32" y1="230" x2="608" y2="230" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></line>
<path d="M 32.0 199.5 L 147.2 184.2 L 262.4 169.0 L 377.6 153.8 L 492.8 138.5 L 608.0 138.5 L 608.0 230 L 32.0 230 Z" fill="var(--diagram-accent)" fill-opacity="0.14" stroke="none"></path>
<path d="M 32.0 199.5 L 147.2 184.2 L 262.4 169.0 L 377.6 153.8 L 492.8 138.5 L 608.0 138.5" fill="none" stroke="var(--diagram-accent)" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
<circle cx="32.0" cy="199.5" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="32.0" y="182.5" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="650" opacity="0.85">10%</text>
<circle cx="147.2" cy="184.2" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="147.2" y="167.2" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="650" opacity="0.85">15%</text>
<circle cx="262.4" cy="169.0" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="262.4" y="152.0" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="650" opacity="0.85">20%</text>
<circle cx="377.6" cy="153.8" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="377.6" y="136.8" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="650" opacity="0.85">25%</text>
<circle cx="492.8" cy="138.5" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="492.8" y="121.5" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="650" opacity="0.85">30%</text>
<line x1="550.4" y1="132.5" x2="550.4" y2="240" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="3 4" stroke-linecap="round"></line>
<text x="550.4" y="260" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="650" opacity="0.9">T+90 s</text>
<text x="32" y="260" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">0 s · the music starts</text>
<text x="32" y="288" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Three iterations the same day, until the ceiling felt right.</text>
<text x="32" y="310" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">The speaker volume is not restored afterwards.</text>
</svg>
<p>The ramp is the part that matters. The speaker starts at ten percent and climbs five points every twenty seconds. The instruction always lands at ninety seconds, whatever the ramp is set to. Three settings followed each other: a single step at twenty percent, then a ramp to twenty, then to thirty.</p>
<p>I also dropped one of my own starting instructions. I had asked for the music to resume "at the speaker's current volume". Once music <em>is</em> the alarm, inheriting last night's setting makes the wake-up unpredictable: too loud one morning, inaudible the next.</p>
<p>Two honest reservations. The volume is not restored afterwards, so the speaker sits at thirty percent for the rest of the day. And the ramp overrides any manual reduction made during the first eighty seconds, since nothing detects the interaction.</p>
<p>Picking the music held a surprise. No local playlist existed on the speaker at all. The favourites were empty, and the only list being played came from a streaming service pushed from the phone. So I froze the current queue into a local playlist. One consequence not to forget: the server finds that list by exact title match, so renaming it from the app breaks the alarm. And playback always restarts on the first track, because shuffle is a setting that would stay switched on after the wake-up.</p>
<p>The music stops on its own, with no dedicated automation. The eight o'clock announcement pauses whichever speakers are playing. To target those without erroring on an idle one, the list is built by filtering rather than hard-coded. An empty list triggers nothing.</p>

<h2>The morning the speaker does not answer</h2>
<p>A routine announcement can afford to miss. A wake-up cannot.</p>
<p>So the wake-up automation first tests that the bedroom speaker answers. If it does, it calls the announcement script. If not, it falls back to a high-priority push to the phones <em>and</em> a persistent notification in the interface, both carrying the speaker's real state and the time. The persistent notification is the net under the net: it shows up even if the phone channel is broken.</p>
<p>That fallback took ten minutes to write. It is the kind of robustness you only grant yourself when it is cheap.</p>

<h2>What the house is not allowed to say</h2>
<p>A few prohibitions piled up, and they matter as much as the writing rules.</p>
<p>The house is single-storey. "Go up", "come down", "upstairs", "downstairs" are banned from every announcement and every notification. That is exactly the kind of phrasing you write without thinking.</p>
<p>Nothing is broadcast between 9:45 p.m. and 7 a.m. unless the call explicitly asks for it. A gate alert at two in the morning would wake the whole house for a gust of wind.</p>
<p>And one branch of the script is deliberately inert today. It knows how to address a second child's bedroom, which has no speaker yet. The day it gets one, naming it correctly in the manufacturer's app is enough for the identifier the script already expects to create itself.</p>

<h2>What still belongs to humans</h2>
<p>Knowing that your child hates being woken by a voice. No data in this installation implies it. You find it out at 7:15.</p>
<p>Watching whether the announcement gets anyone moving. The server can tell me a clip played. It will never tell me nobody moved, and that is the only measurement that counts here.</p>
<p>Deciding what the house imposes. Quiet time at 7:31 p.m., the television cut at 7:30, bed at 8:30 — those are parenting decisions, not optimisations. No sensor produces them.</p>

<h2>What I am taking away</h2>
<ul>
<li><strong>Write the grid, not just the messages.</strong> Any text ends up changing. The grid will serve again for each new instruction.</li>
<li><strong>A good test makes no noise in the house.</strong> A throwaway automation printing what it received beats a full-scale trial at seven in the morning.</li>
</ul>
<p>The next episode goes back to building physics: six shutters deciding their own position from their room temperature and the sun's track across their facade, a land registry, and an office sitting at 29 °C in the middle of the night without a single ray of sun.</p>
<h2>Downloads</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/no-choices/annonce-vocale.yaml" download>annonce-vocale.yaml</a> — the script all thirteen announcements go through. One thing to adapt, the speaker table.</li>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/no-choices/LISEZMOI.md" download>LISEZMOI.md</a> — installation, the mechanics described without Home Assistant, and the eight-line writing grid. Written in French.</li>
</ul>
<p><strong>Read the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Ten Years of Home Automation Alone. One Year With an Agent</a> — the inventory and a measurement of what changed. <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">AI Didn't Automate My House</a> — why the win shows up on the projects you never started. <a target="_blank" rel="noopener noreferrer" href="/posts/daily-rhythm">I Changed the Evening Schedule Three Times in One Week</a> — gate, television, shutters and the school calendar. <a target="_blank" rel="noopener noreferrer" href="/posts/not-the-sun">My Office Sits at 29 °C at Night</a> — six shutters deciding on their own, and what the model told me not to do.</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'AnnoncesSansChoix',
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
