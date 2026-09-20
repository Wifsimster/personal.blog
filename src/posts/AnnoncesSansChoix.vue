<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'no-choices',
  date: '2026-10-11',
  tags: ['Homelab', 'Home-Assistant', 'DIY', 'AI'],
  draft: true
}

const frenchContent: PostContent = {
  title: "J'ai enlevé les choix, et l'annonce a commencé à marcher",
  description: "Épisode 4 : treize annonces vocales par jour, du lever au coucher. La chaîne audio marchait dès le premier jour et ne produisait aucune action. Huit règles de rédaction, un réveil réécrit trois fois dans la même journée, et la branche de repli pour le jour où l'enceinte ne répond pas.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Ma maison diffuse treize annonces vocales par jour, du lever au coucher, sur deux enceintes. Les premières versions étaient jouées parfaitement et ne produisaient aucune action. Le problème n'était nulle part dans la chaîne audio. Il était dans le texte. Les treize messages ont été réécrits d'un coup selon une grille de huit règles, dont la plus contre-intuitive est d'avoir retiré tous les choix proposés. Le réveil, lui, a été réécrit trois fois dans la même journée, jusqu'à ce que la musique remplace la voix. Cet épisode est le seul de la série où le protocole ne joue aucun rôle.</p></div>
<hr>
<p>19 h 31. L'enceinte du salon annonce : « C'est le temps calme. Tu peux lire, dessiner, ou jouer tranquillement. »</p>
<p>Le message part au bon moment, au bon volume, dans la bonne pièce. Mon fils de sept ans ne bouge pas.</p>
<p>J'ai passé les trois épisodes précédents à me méfier de ce que les machines racontent. Celui-ci est différent. Tout le montage technique fonctionnait dès le premier jour, et il n'a jamais été le problème.</p>

<h2>La chaîne audio n'était pas en cause</h2>
<p>Elle mérite deux phrases, parce qu'elle a été montée en une soirée et n'a plus jamais bougé. La synthèse vocale tourne dans un conteneur, en français, sans aucun service externe. Les treize automatisations n'adressent jamais une enceinte directement : elles appellent un script unique qui choisit la pièce, le volume et le canal, ce qui laisse un seul endroit à corriger le jour où les enceintes changent de nom.</p>
<p>C'est tout. À partir de là, tout le travail a été de la rédaction.</p>

<h2>Huit règles, écrites après coup</h2>
<p>Le vrai chantier était ailleurs. Les treize messages ont été réécrits en une passe, selon une grille que j'ai fini par formuler explicitement parce que je la ré-appliquerai à chaque annonce future.</p>
<ol>
<li><strong>Le prénom en tête.</strong> Une consigne impersonnelle ne désigne personne, donc personne ne bouge. « On range ses affaires » s'adresse à la pièce.</li>
<li><strong>Une seule action par annonce.</strong> Jamais deux consignes empilées. Une annonce vaut une étape.</li>
<li><strong>Un verbe à l'impératif et un objet concret.</strong> « Brosse tes dents », pas « c'est l'heure du brossage ».</li>
<li><strong>Jamais de question.</strong> « En pyjama ? Alors… » invite à négocier ou à décrocher.</li>
<li><strong>Borner le temps quand la tâche est ouverte.</strong> Les devoirs sont devenus « Quinze minutes, puis on mange ».</li>
<li><strong>Séquencer explicitement quand il y a un ordre.</strong> « Chaussures, puis manteau. »</li>
<li><strong>Aucun choix proposé.</strong> Chaque option énumérée est une décision à prendre avant d'agir.</li>
<li><strong>Zéro logistique d'adulte dans un message adressé à un enfant.</strong> L'annonce de 7 h 50 récitait les horaires de sa sœur et de la nounou, ce qui noyait la seule consigne qui le concernait.</li>
</ol>
<p>La septième est celle qui m'a le plus surpris, et c'est celle du temps calme.</p>
<svg viewBox="0 0 640 344" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trois versions successives de la même annonce de temps calme, écrites dans la même journée : la première propose trois activités au choix, la deuxième en propose deux, la troisième n'en propose aucune et se réduit à quatre mots ; la longueur du message et le nombre de décisions demandées diminuent ensemble." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">TEMPS CALME · 19 H 31 · TROIS VERSIONS</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Moins de mots, moins de décisions.</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.5" letter-spacing="0.1em">
<text x="32" y="108">VERSION 1 · TROIS DÉCISIONS AVANT D'AGIR</text>
<text x="32" y="180">VERSION 2 · UNE DÉCISION</text>
<text x="32" y="252">VERSION 3 · AUCUNE</text>
</g>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="118" width="320" height="12" rx="6" fill="currentColor" fill-opacity="0.16"></rect>
<rect x="32" y="190" width="190" height="12" rx="6" fill="currentColor" fill-opacity="0.28"></rect>
<rect x="32" y="262" width="82" height="12" rx="6" fill="var(--diagram-accent)" fill-opacity="1"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.8">
<text x="32" y="156">« PRÉNOM, c'est le temps calme. Tu peux lire, dessiner ou jouer. »</text>
<text x="32" y="228">« PRÉNOM, temps calme. Tu peux lire ou dessiner. »</text>
<text x="32" y="300">« PRÉNOM, temps calme. »</text>
</g>
<text x="32" y="332" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">La barre mesure la longueur du message. Le prénom réel est dit en clair.</text>
</svg>
<p>La première version proposait trois activités. Je l'avais écrite en croyant bien faire, parce qu'offrir un choix passe pour une marque de respect. Ramenée à deux options, elle marchait un peu mieux. Ramenée à zéro, elle a commencé à marcher. L'annonce nomme l'état attendu, elle ne présente pas un menu.</p>
<p>Un autre effet de cette grille m'a d'abord gêné. Les branches « mercredi » et « jour d'école » de deux annonces disaient la même chose avec des mots différents. Je les ai fusionnées, et la variation a disparu. La répétition à l'identique n'est pas une paresse de rédaction. C'est ce qui rend un message reconnaissable dès les premiers mots.</p>
<p>Enfin, une règle a coûté quelque chose. L'annonce du petit-déjeuner rappelait « tu dois être habillé ». Elle ne le rappelle plus, au nom de la règle « une seule action ». Le contrôle de l'étape précédente a disparu, et je l'assume sans être certain que ce soit le bon arbitrage.</p>
<blockquote><p>Une annonce qui ne change le comportement de personne n'est pas une annonce. C'est du bruit à l'heure dite.</p></blockquote>
<p>Les messages adressés aux adultes suivent des règles opposées et gardent leur contenu logistique. Celui de 8 h 00 a seulement été reformulé en alerte, « vous devriez déjà être partis », parce que ceux qui l'entendent encore sont précisément ceux qui ne sont pas partis.</p>

<h2>Le réveil, trois versions dans la même journée</h2>
<p>La première version du réveil annonçait, puis lançait la musique. Elle a tenu une matinée. Mon fils n'aime pas être réveillé par une voix, ce qu'aucun capteur de cette maison n'était en mesure de me dire.</p>
<p>La séquence a été inversée le jour même. La musique devient le réveil, et la consigne passe par-dessus quatre-vingt-dix secondes plus tard.</p>
<svg viewBox="0 0 640 354" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Séquence du réveil : le volume de l'enceinte démarre à dix pour cent et monte de cinq points toutes les vingt secondes jusqu'à trente pour cent à quatre-vingts secondes, puis l'annonce vocale se superpose à la musique à quatre-vingt-dix secondes." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">RÉVEIL · VERSION DU 18 SEPTEMBRE</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">La musique d'abord, la voix ensuite.</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="221" width="115" height="29" rx="4" fill="currentColor" fill-opacity="0.2"></rect>
<rect x="147" y="207" width="115" height="43" rx="4" fill="currentColor" fill-opacity="0.26"></rect>
<rect x="262" y="193" width="116" height="57" rx="4" fill="currentColor" fill-opacity="0.32"></rect>
<rect x="378" y="178" width="115" height="72" rx="4" fill="currentColor" fill-opacity="0.38"></rect>
<rect x="493" y="164" width="115" height="86" rx="4" fill="currentColor" fill-opacity="0.44"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle" opacity="0.85">
<text x="89" y="213">10 %</text>
<text x="204" y="199">15 %</text>
<text x="320" y="185">20 %</text>
<text x="435" y="170">25 %</text>
<text x="550" y="156">30 %</text>
</g>
<line x1="32" y1="250" x2="608" y2="250" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5" stroke-linecap="round"></line>
<line x1="550" y1="168" x2="550" y2="266" stroke="var(--diagram-accent)" stroke-opacity="1" stroke-width="2" stroke-linecap="round"></line>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">
<text x="32" y="270">0 s · la musique démarre</text>
</g>
<text x="608" y="292" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" font-weight="650" text-anchor="end">T+90 s · l'annonce passe par-dessus</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">
<text x="32" y="322">Trois itérations le même jour, jusqu'au bon plafond de volume.</text>
<text x="32" y="342">Le volume de l'enceinte n'est pas restauré ensuite.</text>
</g>
</svg>
<p>Le détail qui compte est la rampe. L'enceinte démarre à dix pour cent et monte de cinq points toutes les vingt secondes. La consigne tombe toujours à quatre-vingt-dix secondes, quel que soit le réglage de la montée. Trois versions se sont succédé dans la journée : un palier unique à vingt pour cent, puis une rampe jusqu'à vingt, puis jusqu'à trente.</p>
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
<p>Et une branche du script est aujourd'hui inerte, volontairement. Il sait adresser la chambre de ma fille, qui n'a pas encore d'enceinte. Le jour où elle en aura une, il suffira de la nommer correctement dans l'application du fabricant pour que l'identifiant attendu par le script se crée tout seul.</p>

<h2>Ce qui reste aux humains</h2>
<p>Savoir que son enfant déteste être réveillé par une voix. Ça ne se déduit d'aucune donnée de cette installation. Ça se découvre à sept heures quinze, et ça se corrige le jour même parce que corriger ne coûte plus rien.</p>
<p>Observer si l'annonce produit une action. Le serveur sait me dire qu'un clip a été joué. Il ne saura jamais me dire que personne n'a bougé, et c'est la seule mesure qui compte ici.</p>
<p>Décider ce que la maison impose. Le temps calme de 19 h 31, la coupure de télévision de 19 h 30, le coucher à 20 h 30 : ce sont des décisions de parent, pas des optimisations. Aucun capteur ne les produit, et j'ai déjà proposé deux fois de les rationaliser en me trompant les deux fois.</p>

<h2>Ce que j'en retiens</h2>
<ul>
<li><strong>Un message parfaitement diffusé peut être parfaitement inutile.</strong> La chaîne technique et l'effet obtenu sont deux mesures distinctes, et seule la seconde compte.</li>
<li><strong>Proposer un choix coûte une décision.</strong> Trois options énumérées, ce sont trois décisions à prendre avant la première action.</li>
<li><strong>La répétition à l'identique est une fonctionnalité.</strong> Varier les formulations pour éviter la monotonie rend le message méconnaissable.</li>
<li><strong>Écrire la grille, pas seulement les messages.</strong> Les treize annonces seront réécrites un jour ; la grille, elle, se réapplique.</li>
<li><strong>Un réveil mérite une branche de repli et deux canaux.</strong> Une annonce de routine peut rater. Pas celle qui décide de l'heure du lever.</li>
<li><strong>Le bon test ne fait pas de bruit dans la maison.</strong> Une automatisation jetable qui affiche ce qu'elle reçoit vaut mieux qu'un essai grandeur nature à sept heures du matin.</li>
</ul>
<p>Le prochain épisode revient à la physique du bâtiment : six volets qui décident seuls de leur position à partir de la température de leur pièce et de la course du soleil sur leur façade, un cadastre, et un bureau à 29 °C en pleine nuit sans le moindre rayon de soleil.</p>
<h2>À télécharger</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/no-choices/annonce-vocale.yaml" download>annonce-vocale.yaml</a> — le script par lequel passent les treize annonces. Une seule chose à adapter, la table des enceintes.</li>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/no-choices/LISEZMOI.md" download>LISEZMOI.md</a> — l'installation, la mécanique décrite sans Home Assistant, et la grille de rédaction en huit lignes.</li>
</ul>
<p><strong>Lire la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Dix ans de domotique tout seul, un an avec un agent</a> — l'inventaire de l'installation et la mesure de ce qui a changé. <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">L'IA n'a pas automatisé ma maison</a> — pourquoi le gain se mesure sur les chantiers qu'on ne commençait pas. <a target="_blank" rel="noopener noreferrer" href="/posts/daily-rhythm">J'ai changé le calendrier du soir trois fois en une semaine</a> — portail, télévision, volets et calendrier scolaire.</p>`
}

const englishContent: PostContent = {
  title: 'I Took the Choices Out, and the Announcement Started Working',
  description: 'Episode 4: thirteen spoken announcements a day, from wake-up to bedtime. The audio chain worked from day one and produced no action at all. Eight writing rules, a wake-up rewritten three times in one day, and the fallback for the morning the speaker does not answer.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> My house plays thirteen spoken announcements a day, from wake-up to bedtime, on two speakers. The first versions played perfectly and produced no action whatsoever. Nothing in the audio chain was at fault. The problem was the text. All thirteen messages were rewritten in one pass against a grid of eight rules, the most counter-intuitive of which was removing every choice on offer. The wake-up itself was rewritten three times in a single day, until music replaced the voice. This is the one episode in the series where no protocol plays any part.</p></div>
<hr>
<p>7:31 p.m. The living-room speaker announces: "It's quiet time. You can read, draw, or play quietly."</p>
<p>The message goes out at the right moment, at the right volume, in the right room. My seven-year-old does not move.</p>
<p>I spent the last three episodes distrusting what machines report. This one is different. The whole technical setup worked from day one, and it was never the problem.</p>

<h2>The audio chain was not at fault</h2>
<p>It deserves two sentences, because it went up in one evening and never moved again. Speech synthesis runs in a container, in French, with no external service. The thirteen automations never address a speaker directly: they call one script that picks the room, the volume and the channel, which leaves one place to fix the day the speakers change names.</p>
<p>That is all of it. From there, every bit of the work was writing.</p>

<h2>Eight rules, written afterwards</h2>
<p>The actual work was elsewhere. All thirteen messages were rewritten in one pass, against a grid I ended up stating explicitly because I will apply it to every future announcement.</p>
<ol>
<li><strong>Name first.</strong> An impersonal instruction addresses nobody, so nobody moves. "We tidy our things" is addressed to the room.</li>
<li><strong>One action per announcement.</strong> Never two instructions stacked. One announcement is one step.</li>
<li><strong>Imperative verb, concrete object.</strong> "Brush your teeth", not "it is teeth-brushing time".</li>
<li><strong>Never a question.</strong> "In your pyjamas? Then…" invites negotiation, or drifting off.</li>
<li><strong>Bound the time when the task is open-ended.</strong> Homework became "Fifteen minutes, then we eat".</li>
<li><strong>Sequence explicitly when order matters.</strong> "Shoes, then coat."</li>
<li><strong>Offer no choices.</strong> Every option listed is a decision to make before acting.</li>
<li><strong>No adult logistics in a message addressed to a child.</strong> The 7:50 announcement recited his sister's and the childminder's schedules, which drowned the one instruction meant for him.</li>
</ol>
<p>The seventh surprised me most, and it belongs to the quiet-time message.</p>
<svg viewBox="0 0 640 344" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three successive versions of the same quiet-time announcement, written on the same day: the first offers three activities to choose from, the second offers two, the third offers none and comes down to three words; message length and the number of decisions requested shrink together." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">QUIET TIME · 19:31 · THREE VERSIONS</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Fewer words, fewer decisions.</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.5" letter-spacing="0.1em">
<text x="32" y="108">VERSION 1 · THREE DECISIONS BEFORE ACTING</text>
<text x="32" y="180">VERSION 2 · ONE DECISION</text>
<text x="32" y="252">VERSION 3 · NONE</text>
</g>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="118" width="320" height="12" rx="6" fill="currentColor" fill-opacity="0.16"></rect>
<rect x="32" y="190" width="190" height="12" rx="6" fill="currentColor" fill-opacity="0.28"></rect>
<rect x="32" y="262" width="82" height="12" rx="6" fill="var(--diagram-accent)" fill-opacity="1"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.8">
<text x="32" y="156">"NAME, it's quiet time. You can read, draw, or play."</text>
<text x="32" y="228">"NAME, quiet time. You can read or draw."</text>
<text x="32" y="300">"NAME, quiet time."</text>
</g>
<text x="32" y="332" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">The bar measures message length. The real first name is spoken in full.</text>
</svg>
<p>The first version offered three activities. I had written it meaning well, because offering a choice reads as a mark of respect. Cut to two options, it worked slightly better. Cut to none, it started working. The announcement names the expected state, it does not present a menu.</p>
<p>Another effect of the grid bothered me at first. The "Wednesday" and "school day" branches of two announcements said the same thing in different words. I merged them, and the variation disappeared. Repeating the exact same wording is not lazy writing. It is what makes a message recognisable from its first words.</p>
<p>One rule did cost something. The breakfast announcement used to remind him "you need to be dressed". It no longer does, in the name of the one-action rule. The check on the previous step is gone, and I own that without being sure it was the right call.</p>
<blockquote><p>An announcement that changes nobody's behaviour is not an announcement. It is noise on a schedule.</p></blockquote>
<p>Messages addressed to adults follow the opposite rules and keep their logistics. The 8 a.m. one was only reframed as an alert, "you should have left by now", because whoever still hears it is precisely whoever has not left.</p>

<h2>The wake-up, three versions in one day</h2>
<p>The first version announced, then started the music. It lasted one morning. My son does not like being woken by a voice, which no sensor in this house was ever going to tell me.</p>
<p>The sequence was flipped the same day. Music becomes the alarm, and the instruction is layered over it ninety seconds later.</p>
<svg viewBox="0 0 640 354" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The wake-up sequence: speaker volume starts at ten percent and rises five points every twenty seconds up to thirty percent at eighty seconds, then the spoken instruction is layered over the music at ninety seconds." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">WAKE-UP · 18 SEPTEMBER VERSION</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Music first, voice second.</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="221" width="115" height="29" rx="4" fill="currentColor" fill-opacity="0.2"></rect>
<rect x="147" y="207" width="115" height="43" rx="4" fill="currentColor" fill-opacity="0.26"></rect>
<rect x="262" y="193" width="116" height="57" rx="4" fill="currentColor" fill-opacity="0.32"></rect>
<rect x="378" y="178" width="115" height="72" rx="4" fill="currentColor" fill-opacity="0.38"></rect>
<rect x="493" y="164" width="115" height="86" rx="4" fill="currentColor" fill-opacity="0.44"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle" opacity="0.85">
<text x="89" y="213">10%</text>
<text x="204" y="199">15%</text>
<text x="320" y="185">20%</text>
<text x="435" y="170">25%</text>
<text x="550" y="156">30%</text>
</g>
<line x1="32" y1="250" x2="608" y2="250" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5" stroke-linecap="round"></line>
<line x1="550" y1="168" x2="550" y2="266" stroke="var(--diagram-accent)" stroke-opacity="1" stroke-width="2" stroke-linecap="round"></line>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">
<text x="32" y="270">0 s · the music starts</text>
</g>
<text x="608" y="292" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" font-weight="650" text-anchor="end">T+90 s · the instruction goes over it</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">
<text x="32" y="322">Three iterations the same day, until the ceiling felt right.</text>
<text x="32" y="342">The speaker volume is not restored afterwards.</text>
</g>
</svg>
<p>The ramp is the part that matters. The speaker starts at ten percent and climbs five points every twenty seconds. The instruction always lands at ninety seconds, whatever the ramp is set to. Three versions followed each other that day: a single step at twenty percent, then a ramp to twenty, then to thirty.</p>
<p>One of my own starting instructions was abandoned the same day. I had asked for the music to resume "at the speaker's current volume". Once music <em>is</em> the alarm, inheriting last night's setting makes the wake-up unpredictable: too loud one morning, inaudible the next.</p>
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
<p>And one branch of the script is deliberately inert today. It knows how to address my daughter's bedroom, which has no speaker yet. The day it gets one, naming it correctly in the manufacturer's app is enough for the identifier the script already expects to create itself.</p>

<h2>What still belongs to humans</h2>
<p>Knowing that your child hates being woken by a voice. No data in this installation implies it. You find it out at 7:15, and you fix it the same day because fixing costs nothing now.</p>
<p>Watching whether the announcement produces an action. The server can tell me a clip played. It will never tell me nobody moved, and that is the only measurement that counts here.</p>
<p>Deciding what the house imposes. Quiet time at 7:31 p.m., the television cut at 7:30, bed at 8:30 — those are parenting decisions, not optimisations. No sensor produces them, and I have twice proposed rationalising them and been wrong twice.</p>

<h2>What I am taking away</h2>
<ul>
<li><strong>A perfectly delivered message can be perfectly useless.</strong> The technical chain and the effect obtained are two separate measurements, and only the second one counts.</li>
<li><strong>Offering a choice costs a decision.</strong> Three options listed are three decisions to make before the first action.</li>
<li><strong>Repeating the exact same wording is a feature.</strong> Varying the phrasing to avoid monotony makes the message unrecognisable.</li>
<li><strong>Write the grid, not just the messages.</strong> The thirteen announcements will be rewritten one day. The grid gets reapplied.</li>
<li><strong>A wake-up deserves a fallback branch and two channels.</strong> A routine announcement may miss. Not the one that decides when the day starts.</li>
<li><strong>A good test makes no noise in the house.</strong> A throwaway automation printing what it received beats a full-scale trial at seven in the morning.</li>
</ul>
<p>The next episode goes back to building physics: six shutters deciding their own position from their room temperature and the sun's track across their facade, a land registry, and an office sitting at 29 °C in the middle of the night without a single ray of sun.</p>
<h2>Downloads</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/no-choices/annonce-vocale.yaml" download>annonce-vocale.yaml</a> — the script all thirteen announcements go through. One thing to adapt, the speaker table.</li>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/no-choices/LISEZMOI.md" download>LISEZMOI.md</a> — installation, the mechanics described without Home Assistant, and the eight-line writing grid. Written in French.</li>
</ul>
<p><strong>Read the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Ten Years of Home Automation Alone. One Year With an Agent</a> — the inventory and a measurement of what changed. <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">AI Didn't Automate My House</a> — why the win shows up on the projects you never started. <a target="_blank" rel="noopener noreferrer" href="/posts/daily-rhythm">I Changed the Evening Schedule Three Times in One Week</a> — gate, television, shutters and the school calendar.</p>`
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
