import type { PostMetadata, PostContent } from '@/lib/posts'

export const metadata: PostMetadata = {
  slug: 'no-choices',
  date: '2026-10-11',
  tags: ['Homelab', 'Home-Assistant', 'DIY', 'AI']
}

const frenchContent: PostContent = {
  title: "J'ai enlevé les choix, et l'annonce a commencé à marcher",
  description: "Épisode 4 : quinze annonces vocales un jour d'école, du lever au coucher. Le son passait dès le premier jour, mais personne ne bougeait. Huit règles de rédaction, un réveil réécrit trois fois dans la journée, et ce qui se passe quand l'enceinte de la chambre est hors ligne.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Ma maison diffuse quinze annonces vocales un jour d'école, du lever au coucher, sur deux enceintes. Au début, elles passaient très bien et personne ne bougeait. Le son n'était pas en cause, le texte l'était. J'ai réécrit les treize messages d'alors avec huit règles, et la plus surprenante consiste à retirer tous les choix. Le réveil, lui, a été réécrit trois fois dans la même journée. La musique démarre maintenant en premier, la voix arrive 90 secondes plus tard. C'est le seul épisode de la série où il n'est question d'aucun protocole.</p></div>
<hr>
<p>19 h 31. L'enceinte du salon annonce : « C'est le temps calme. Tu peux lire, dessiner ou jouer. »</p>
<p>Le message part à la bonne heure, au bon volume, dans la bonne pièce. Personne ne bouge.</p>
<p>J'ai passé les trois épisodes précédents à vérifier ce que les machines me racontent. Ici, la machine dit vrai : l'annonce est bien partie, à l'heure. La technique a marché dès le premier jour. C'est le texte qui ne marchait pas.</p>

<h2>Le son n'était pas en cause</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/speaker-light.png"><img src="/visuals/no-choices/speaker-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/speaker-dark.png"><img src="/visuals/no-choices/speaker-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>Deux phrases suffisent. Je l'ai montée en une soirée et je n'y ai plus touché. La synthèse vocale est assurée par <abbr title="Moteur libre de synthèse vocale, qui tourne en local">Piper</abbr>, dans un <abbr title="Programme isolé qui embarque ses propres dépendances">conteneur</abbr>, en français, sans service externe. Les annonces n'appellent jamais directement une enceinte. Elles passent toutes par un seul script <abbr title="Logiciel libre de domotique">Home Assistant</abbr>, qui choisit la pièce et le volume et qui applique les heures calmes. Quand une enceinte change de nom, je corrige à un seul endroit.</p>

<h2>Huit règles, écrites après coup</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/rules-light.png"><img src="/visuals/no-choices/rules-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/rules-dark.png"><img src="/visuals/no-choices/rules-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>Le vrai travail était dans les textes. J'ai réécrit les treize messages d'alors en une seule passe, puis j'ai mis la grille par écrit.</p>
<ol>
<li><strong>Le prénom en tête.</strong> Une consigne impersonnelle ne désigne personne, donc personne ne bouge. « On range ses affaires » ne s'adresse à personne en particulier.</li>
<li><strong>Une seule action par annonce.</strong> Pas deux consignes dans le même message.</li>
<li><strong>Un verbe à l'impératif et un objet concret.</strong> « Brosse tes dents », pas « c'est l'heure du brossage ».</li>
<li><strong>Jamais de question.</strong> « En pyjama ? Alors… » ouvre une discussion.</li>
<li><strong>Borner le temps quand la tâche est ouverte.</strong> Les devoirs sont devenus « Quinze minutes, puis on mange ».</li>
<li><strong>Séquencer explicitement quand il y a un ordre.</strong> « Chaussures, puis manteau. »</li>
<li><strong>Aucun choix proposé.</strong> Chaque option proposée est une décision à prendre avant d'agir.</li>
<li><strong>Rien de la logistique des adultes dans un message pour un enfant.</strong> L'annonce de 7 h 50 donnait l'emploi du temps des autres, et la seule consigne utile s'y perdait.</li>
</ol>
<p>Un script a appliqué la grille : il parcourt chaque appel du script d'annonce et corrige le texte sur place. Treize automatisations réécrites et rechargées, sans erreur de configuration, le temps d'un café. Il y en a deux de plus aujourd'hui. Cela ne coûtait presque rien, donc j'ai pu réessayer jusqu'à obtenir une version qui marche, au lieu de garder la première qui semblait raisonnable.</p>
<p>La règle 7 est celle qui m'a le plus surpris. Elle vient du message de temps calme.</p>
<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trois versions de l'annonce de temps calme, écrites le même jour. À chaque version il reste moins de texte, jusqu'à « PRÉNOM, temps calme. » seul. Cette partie, en couleur d'accent, n'a jamais changé." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">TEMPS CALME · 19 H 31 · TROIS VERSIONS</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Trois versions du même message.</text>
<text x="32" y="116" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.5" letter-spacing="0.08em">VERSION 1 · TROIS DÉCISIONS AVANT D'AGIR</text>
<text x="32" y="140" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17"><tspan fill="var(--diagram-accent)" font-weight="650">« PRÉNOM, </tspan><tspan fill="currentColor" fill-opacity="0.32">c'est le </tspan><tspan fill="var(--diagram-accent)" font-weight="650">temps calme.</tspan><tspan fill="currentColor" fill-opacity="0.32"> Tu peux lire, dessiner ou jouer. »</tspan></text>
<line x1="32" y1="158" x2="608" y2="158" stroke="currentColor" stroke-opacity="0.12" stroke-width="1"></line>
<text x="32" y="178" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.5" letter-spacing="0.08em">VERSION 2 · UNE DÉCISION</text>
<text x="32" y="202" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17"><tspan fill="var(--diagram-accent)" font-weight="650">« PRÉNOM, temps calme.</tspan><tspan fill="currentColor" fill-opacity="0.32"> Tu peux lire ou dessiner. »</tspan></text>
<line x1="32" y1="220" x2="608" y2="220" stroke="currentColor" stroke-opacity="0.12" stroke-width="1"></line>
<text x="32" y="240" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.5" letter-spacing="0.08em">VERSION 3 · AUCUNE</text>
<text x="32" y="264" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17"><tspan fill="var(--diagram-accent)" font-weight="650">« PRÉNOM, temps calme. »</tspan></text>
<text x="32" y="298" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">La partie en couleur n'a jamais changé. Le reste a été supprimé.</text>
</svg>
<p>La première version proposait trois activités. Je pensais bien faire : offrir un choix, c'est respecter l'enfant. Avec deux options, ça marchait un peu mieux. Sans option, ça a marché. L'annonce dit ce qui est attendu, elle ne propose pas de menu.</p>
<p>La grille a eu un autre effet, qui m'a gêné au début. Deux annonces avaient une version « mercredi » et une version « jour d'école » qui disaient la même chose avec des mots différents. Je les ai fusionnées. Un message identique chaque jour se reconnaît dès les premiers mots.</p>
<p>Une règle m'a coûté quelque chose. L'annonce du petit-déjeuner rappelait « tu dois être habillé ». Elle ne le fait plus, à cause de la règle 2. Seul le réveil le dit encore, 90 secondes après le début de la musique. Plus personne ne vérifie à l'étape du petit-déjeuner. Je ne sais pas si c'est le bon compromis.</p>
<p>Trois messages s'écartent de la grille aujourd'hui. Le plus net est une annonce de télévision, ajoutée après la réécriture : « PRÉNOM, dents finies ? Tu peux aller regarder la télé jusqu'à sept heures et demie. » Elle pose une question et laisse une option, donc elle enfreint les règles 3, 4 et 7. Je ne l'ai pas encore corrigée. Le message du réveil enchaîne deux consignes : « PRÉNOM, debout. Sept heures quinze. Tu t'habilles d'abord. » (règle 2). Celui du portail à 7 h 55, adressé à toute la famille, dit « On y va » sans prénom (règle 1).</p>
<blockquote><p>Une annonce a marché si quelqu'un a bougé. Qu'elle ait été jouée ne prouve rien.</p></blockquote>
<p>Les messages pour les adultes gardent leur logistique. Celui de 8 h 00 dit « Vous êtes en retard » et rappelle où chacun doit être. À cette heure-là, seuls ceux qui ne sont pas partis l'entendent.</p>

<h2>Le réveil, trois versions dans la même journée</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/wakeup-light.png"><img src="/visuals/no-choices/wakeup-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/wakeup-dark.png"><img src="/visuals/no-choices/wakeup-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>La première version du réveil annonçait d'abord, puis lançait la musique. Elle a duré une matinée. Se faire réveiller par une voix ne passait pas.</p>
<p>J'ai inversé l'ordre le jour même. La musique démarre en premier, et la voix arrive 90 secondes plus tard, par-dessus.</p>
<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Courbe du volume de l'enceinte : de 10 à 30 % par paliers de 5 points toutes les 20 secondes, avec un repère à 90 secondes où la voix arrive par-dessus la musique, quel que soit le réglage de la rampe." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">RÉVEIL · VERSION DU 18 SEPTEMBRE</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">La musique d'abord, la voix ensuite.</text>
<line x1="32" y1="230" x2="608" y2="230" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></line>
<path d="M 32.0 199.5 L 147.2 184.2 L 262.4 169.0 L 377.6 153.8 L 492.8 138.5 L 608.0 138.5 L 608.0 230 L 32.0 230 Z" fill="var(--diagram-accent)" fill-opacity="0.14" stroke="none"></path>
<path d="M 32.0 199.5 L 147.2 184.2 L 262.4 169.0 L 377.6 153.8 L 492.8 138.5 L 608.0 138.5" fill="none" stroke="var(--diagram-accent)" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
<circle cx="32.0" cy="199.5" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="32.0" y="182.5" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">10 %</text>
<circle cx="147.2" cy="184.2" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="147.2" y="167.2" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">15 %</text>
<circle cx="262.4" cy="169.0" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="262.4" y="152.0" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">20 %</text>
<circle cx="377.6" cy="153.8" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="377.6" y="136.8" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">25 %</text>
<circle cx="492.8" cy="138.5" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="492.8" y="121.5" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">30 %</text>
<line x1="550.4" y1="132.5" x2="550.4" y2="240" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="3 4" stroke-linecap="round"></line>
<text x="550.4" y="260" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="650" opacity="0.9">T+90 s</text>
<text x="32" y="260" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">0 s · la musique démarre</text>
<text x="32" y="288" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Trois réglages le même jour, jusqu'à 30 %.</text>
<text x="32" y="310" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Le volume de l'enceinte n'est pas restauré ensuite.</text>
</svg>
<p>Le réglage important est la rampe. L'enceinte démarre à 10 %. Elle monte de 5 points toutes les 20 secondes, jusqu'à 30 %. La voix arrive à 90 secondes, quelle que soit la rampe. J'ai essayé trois réglages : un palier unique à 20 %, une rampe jusqu'à 20 %, puis une rampe jusqu'à 30 %.</p>
<p>J'ai aussi abandonné une de mes consignes de départ. J'avais demandé que la musique reprenne « au volume courant de l'enceinte ». La musique est maintenant le réveil, et hériter du volume de la veille au soir le rend imprévisible. Un matin c'est trop fort, le lendemain on n'entend rien.</p>
<p>Deux limites. Le volume n'est pas remis comme avant après le réveil, donc l'enceinte reste à 30 % tant que personne n'y touche. Et la rampe écrase toute baisse manuelle faite pendant les 80 premières secondes, parce que rien ne détecte cette action.</p>
<p>Choisir la musique m'a réservé une surprise. L'enceinte n'avait aucune liste de lecture locale et ses favoris étaient vides. La seule liste que j'écoutais venait d'un service de streaming, envoyée depuis le téléphone. J'ai donc enregistré la file en cours comme liste locale. Home Assistant retrouve cette liste par son titre exact : la renommer dans l'application casse le réveil. Dernier détail, la lecture repart sur la première piste. Le réglage de lecture aléatoire reste celui de l'enceinte, l'automatisation n'y touche pas.</p>
<p>Aucune automatisation dédiée n'arrête la musique. L'annonce de 8 h 00 met en pause les enceintes qui jouent à ce moment-là. La liste est filtrée sur l'état « playing » plutôt qu'écrite en dur, pour qu'une enceinte à l'arrêt ne provoque pas d'erreur. Si aucune enceinte ne joue, la liste est vide et rien ne se passe.</p>

<h2>Le jour où l'enceinte ne répond pas</h2>
<p>Si une annonce de routine rate, ce n'est pas grave. Si le réveil rate, personne n'est réveillé.</p>
<p>L'automatisation du lever vérifie donc d'abord que l'enceinte de la chambre est disponible. Si oui, elle lance la musique puis appelle le script d'annonce. Sinon, elle envoie deux notifications : une notification prioritaire sur les téléphones, et une <abbr title="Message qui reste dans l'interface de Home Assistant tant que personne ne l'a fermé">notification persistante</abbr> dans l'interface. Les deux donnent l'état de l'enceinte et l'heure, et disent que le réveil n'a pas été diffusé.</p>
<p>Cette branche de repli m'a pris dix minutes à écrire. À ce prix, il n'y avait aucune raison de s'en passer.</p>

<h2>Ce que la maison ne dit pas</h2>
<p>Quelques interdits se sont ajoutés aux règles de rédaction.</p>
<p>La maison est de plain-pied. Je n'écris jamais « monte », « descends », « en haut » ni « en bas », ni dans les annonces ni dans les notifications. On les écrit par réflexe.</p>
<p>Rien n'est diffusé entre 21 h 45 et 7 h 00, sauf si l'appel le demande. Un lave-linge qui se termine à deux heures du matin ne réveille donc personne. Les alertes de sécurité le demandent : portail resté ouvert, présence à l'extérieur, panne du congélateur.</p>
<p>Une branche du script ne fait rien pour l'instant, volontairement. Elle vise la chambre d'un second enfant, qui n'a pas encore d'enceinte. Quand elle en aura une, il suffira de lui donner le bon nom dans l'application du fabricant pour que le script la trouve.</p>

<h2>Ce qui reste aux humains</h2>
<p>Savoir qu'un enfant n'aime pas être réveillé par une voix. Aucune donnée de l'installation ne le montre : on s'en rend compte à 7 h 15.</p>
<p>Regarder si l'annonce produit une action. Home Assistant sait que le clip a été joué. Il ne sait pas si quelqu'un a bougé, et c'est la seule mesure qui compte ici.</p>
<p>Décider ce que la maison impose. Le temps calme à 19 h 31, la télévision coupée à 19 h 30, le coucher à 20 h 30 : ce sont des décisions de parent, pas des optimisations. Aucun capteur ne les produit.</p>

<h2>Ce que j'en retiens</h2>
<ul>
<li><strong>Écrire la grille, pas seulement les messages.</strong> Un texte finit toujours par changer, et la grille sert à relire le suivant. Le message de télévision, ajouté après, montre qu'il faut la rouvrir à chaque nouvelle annonce.</li>
<li><strong>Tester sans faire de bruit.</strong> Une automatisation jetable qui affiche le texte reçu vaut mieux qu'un essai à sept heures du matin.</li>
</ul>
<p>Le prochain épisode revient à la physique du bâtiment : six volets qui décident seuls de leur position à partir de la température de leur pièce et de la course du soleil sur leur façade, un cadastre, et un bureau à 29 °C en pleine nuit sans le moindre rayon de soleil.</p>
<h2>À télécharger</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/no-choices/annonce-vocale.yaml" download>annonce-vocale.yaml</a> : le script par lequel passent toutes les annonces. Une seule chose à adapter, la table des enceintes.</li>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/no-choices/LISEZMOI.md" download>LISEZMOI.md</a> : l'installation, la mécanique décrite sans Home Assistant, et la grille de rédaction en huit lignes.</li>
</ul>
<p><strong>Lire la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Dix ans de domotique tout seul, un an avec un agent</a> : l'inventaire de l'installation et la mesure de ce qui a changé. <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">L'IA n'a pas automatisé ma maison</a> : pourquoi le gain se mesure sur les chantiers qu'on ne commençait pas. <a target="_blank" rel="noopener noreferrer" href="/posts/daily-rhythm">J'ai changé le calendrier du soir trois fois en une semaine</a> : portail, télévision, volets et calendrier scolaire. <a target="_blank" rel="noopener noreferrer" href="/posts/not-the-sun">Mon bureau est à 29 °C la nuit</a> : six volets qui décident seuls, et ce que le modèle m'a dit de ne pas faire.</p>`
}

const englishContent: PostContent = {
  title: 'I Took the Choices Out, and the Announcement Started Working',
  description: 'Episode 4: fifteen spoken announcements on a school day, from wake-up to bedtime. The sound played fine from day one, and nobody moved. Eight writing rules, a wake-up rewritten three times in one day, and what happens when the bedroom speaker is offline.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> My house plays fifteen spoken announcements on a school day, from wake-up to bedtime, on two speakers. At first they played perfectly and nobody moved. The sound was fine. The text was the problem. I rewrote the thirteen messages of the time against eight rules, and the most surprising one was removing every choice. The wake-up was rewritten three times in a single day. The music now starts first and the voice comes in 90 seconds later. This is the one episode of the series with no protocol in it.</p></div>
<hr>
<p>7:31 p.m. The living-room speaker announces: "It's quiet time. You can read, draw, or play."</p>
<p>The message goes out at the right time, at the right volume, in the right room. Nobody moves.</p>
<p>For the last three episodes I checked what machines tell me. This time the machine told the truth: the announcement went out on time. The setup worked from day one. The text did not.</p>

<h2>The sound was not the problem</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/speaker-light.png"><img src="/visuals/no-choices/speaker-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/speaker-dark.png"><img src="/visuals/no-choices/speaker-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>Two sentences are enough. I built it in one evening and have not touched it since. Speech synthesis is done by <abbr title="Free speech-synthesis engine that runs locally">Piper</abbr>, in a <abbr title="An isolated program that ships with its own dependencies">container</abbr>, in French, with no external service. The announcements never call a speaker directly. They all go through one <abbr title="Free home-automation software">Home Assistant</abbr> script, which picks the room and the volume and applies the quiet hours. When a speaker changes name, I fix one place.</p>

<h2>Eight rules, written afterwards</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/rules-light.png"><img src="/visuals/no-choices/rules-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/rules-dark.png"><img src="/visuals/no-choices/rules-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>The real work was in the texts. I rewrote the thirteen messages of the time in a single pass, then wrote the grid down.</p>
<ol>
<li><strong>Name first.</strong> An impersonal instruction is addressed to nobody, so nobody moves. "We tidy our things" is addressed to no one in particular.</li>
<li><strong>One action per announcement.</strong> No two instructions in the same message.</li>
<li><strong>Imperative verb, concrete object.</strong> "Brush your teeth", not "it is teeth-brushing time".</li>
<li><strong>Never a question.</strong> "In your pyjamas? Then…" opens a discussion.</li>
<li><strong>Bound the time when the task is open-ended.</strong> Homework became "Fifteen minutes, then we eat".</li>
<li><strong>Sequence explicitly when order matters.</strong> "Shoes, then coat."</li>
<li><strong>Offer no choices.</strong> Every option is a decision to make before acting.</li>
<li><strong>No adult logistics in a message for a child.</strong> The 7:50 announcement gave everyone else's schedule, and the one useful instruction got lost in it.</li>
</ol>
<p>A script applied the grid. It walks through every call to the announcement script and fixes the text in place. Thirteen automations rewritten and reloaded, no configuration errors, in the time it takes to make coffee. There are two more today. It cost almost nothing, so I could keep trying until one version worked, instead of keeping the first one that looked reasonable.</p>
<p>Rule 7 is the one that surprised me most. It comes from the quiet-time message.</p>
<svg viewBox="0 0 640 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three versions of the quiet-time announcement, written the same day. Each version has less text, until only ‘NAME, quiet time.’ is left. That part, in accent colour, never changed." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">QUIET TIME · 7:31 PM · THREE VERSIONS</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Three versions of one message.</text>
<text x="32" y="116" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.5" letter-spacing="0.08em">VERSION 1 · THREE DECISIONS BEFORE ACTING</text>
<text x="32" y="140" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17"><tspan fill="var(--diagram-accent)" font-weight="650">“NAME, </tspan><tspan fill="currentColor" fill-opacity="0.32">it's </tspan><tspan fill="var(--diagram-accent)" font-weight="650">quiet time.</tspan><tspan fill="currentColor" fill-opacity="0.32"> You can read, draw, or play.”</tspan></text>
<line x1="32" y1="158" x2="608" y2="158" stroke="currentColor" stroke-opacity="0.12" stroke-width="1"></line>
<text x="32" y="178" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.5" letter-spacing="0.08em">VERSION 2 · ONE DECISION</text>
<text x="32" y="202" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17"><tspan fill="var(--diagram-accent)" font-weight="650">“NAME, quiet time.</tspan><tspan fill="currentColor" fill-opacity="0.32"> You can read or draw.”</tspan></text>
<line x1="32" y1="220" x2="608" y2="220" stroke="currentColor" stroke-opacity="0.12" stroke-width="1"></line>
<text x="32" y="240" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.5" letter-spacing="0.08em">VERSION 3 · NONE</text>
<text x="32" y="264" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17"><tspan fill="var(--diagram-accent)" font-weight="650">“NAME, quiet time.”</tspan></text>
<text x="32" y="298" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">The coloured part never changed. The rest was removed.</text>
</svg>
<p>The first version offered three activities. I thought I was doing the right thing: offering a choice is a way to respect a child. With two options, it worked slightly better. With none, it worked. The announcement says what is expected. It does not offer a menu.</p>
<p>The grid had another effect that bothered me at first. Two announcements had a "Wednesday" version and a "school day" version that said the same thing in different words. I merged them. A message that is identical every day is recognisable from its first words.</p>
<p>One rule cost me something. The breakfast announcement used to say "you need to be dressed". It no longer does, because of rule 2. Only the wake-up still says it, 90 seconds after the music starts. Nobody checks at the breakfast step any more. I do not know if that is the right trade-off.</p>
<p>Three messages break the grid today. The clearest is a TV announcement, added after the rewrite: "NAME, teeth done? You can go watch TV until seven thirty." It asks a question and leaves an option, so it breaks rules 3, 4 and 7. I have not fixed it yet. The wake-up message chains two instructions: "NAME, get up. Seven fifteen. Get dressed first." (rule 2). The 7:55 gate message, addressed to the whole family, says "Let's go" without a name (rule 1).</p>
<blockquote><p>An announcement worked if somebody moved. That it played proves nothing.</p></blockquote>
<p>Messages for adults keep their logistics. The 8 a.m. one says "You are late" and reminds everyone where they should be. At that hour, only the people who have not left hear it.</p>

<h2>The wake-up, three versions in one day</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/wakeup-light.png"><img src="/visuals/no-choices/wakeup-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/no-choices/wakeup-dark.png"><img src="/visuals/no-choices/wakeup-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>The first version of the wake-up announced first, then started the music. It lasted one morning. Being woken by a voice did not go down well.</p>
<p>I flipped the order the same day. The music starts first, and the voice comes in over it 90 seconds later.</p>
<svg viewBox="0 0 640 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Curve of the speaker's volume: from 10 to 30% in 5-point steps every 20 seconds, with a marker at 90 seconds where the voice comes in over the music, whatever the ramp is set to." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">WAKE-UP · 18 SEPTEMBER VERSION</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Music first, voice second.</text>
<line x1="32" y1="230" x2="608" y2="230" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></line>
<path d="M 32.0 199.5 L 147.2 184.2 L 262.4 169.0 L 377.6 153.8 L 492.8 138.5 L 608.0 138.5 L 608.0 230 L 32.0 230 Z" fill="var(--diagram-accent)" fill-opacity="0.14" stroke="none"></path>
<path d="M 32.0 199.5 L 147.2 184.2 L 262.4 169.0 L 377.6 153.8 L 492.8 138.5 L 608.0 138.5" fill="none" stroke="var(--diagram-accent)" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
<circle cx="32.0" cy="199.5" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="32.0" y="182.5" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">10%</text>
<circle cx="147.2" cy="184.2" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="147.2" y="167.2" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">15%</text>
<circle cx="262.4" cy="169.0" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="262.4" y="152.0" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">20%</text>
<circle cx="377.6" cy="153.8" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="377.6" y="136.8" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">25%</text>
<circle cx="492.8" cy="138.5" r="4.5" fill="var(--diagram-accent)"></circle>
<text x="492.8" y="121.5" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">30%</text>
<line x1="550.4" y1="132.5" x2="550.4" y2="240" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="3 4" stroke-linecap="round"></line>
<text x="550.4" y="260" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="650" opacity="0.9">T+90 s</text>
<text x="32" y="260" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">0 s · the music starts</text>
<text x="32" y="288" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Three settings in one day, ending at 30%.</text>
<text x="32" y="310" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">The speaker volume is not restored afterwards.</text>
</svg>
<p>The setting that matters is the ramp. The speaker starts at 10%. It climbs 5 points every 20 seconds, up to 30%. The voice comes in at 90 seconds, whatever the ramp. I tried three settings: a single step at 20%, a ramp to 20%, then a ramp to 30%.</p>
<p>I also dropped one of my starting instructions. I had asked for the music to resume "at the speaker's current volume". The music is now the alarm, and inheriting last night's volume makes it unpredictable. One morning it is too loud, the next it is inaudible.</p>
<p>Two limits. The volume is not put back after the wake-up, so the speaker stays at 30% until somebody touches it. And the ramp overrides any manual reduction made during the first 80 seconds, because nothing detects it.</p>
<p>Choosing the music held a surprise. The speaker had no local playlist and its favourites were empty. The only list I listened to came from a streaming service, pushed from the phone. So I saved the current queue as a local playlist. Home Assistant finds that playlist by its exact title, so renaming it in the app breaks the wake-up. One last detail: playback restarts on the first track. The shuffle setting stays whatever the speaker has, and the automation does not touch it.</p>
<p>No dedicated automation stops the music. The 8 a.m. announcement pauses the speakers that are playing at that moment. The list is filtered on the "playing" state instead of being hard-coded, so an idle speaker does not cause an error. If nothing is playing, the list is empty and nothing happens.</p>

<h2>The day the speaker does not answer</h2>
<p>If a routine announcement fails, it does not matter. If the wake-up fails, nobody wakes up.</p>
<p>So the wake-up automation first checks that the bedroom speaker is available. If it is, the automation starts the music, then calls the announcement script. If not, it sends two notifications: a high-priority one to the phones, and a <abbr title="A message that stays in the Home Assistant interface until someone dismisses it">persistent notification</abbr> in the interface. Both give the speaker's state and the time, and say the wake-up was not played.</p>
<p>That fallback took me ten minutes to write. At that price, there was no reason to go without it.</p>

<h2>What the house does not say</h2>
<p>A few prohibitions were added to the writing rules.</p>
<p>The house is single-storey. I never write "go up", "come down", "upstairs" or "downstairs", in announcements or in notifications. They are easy to write out of habit.</p>
<p>Nothing is broadcast between 9:45 p.m. and 7 a.m. unless the call asks for it. A washing machine that finishes at two in the morning wakes nobody. Safety alerts ask for it: gate left open, someone detected outside, freezer failure.</p>
<p>One branch of the script does nothing for now, on purpose. It is meant for a second child's bedroom, which has no speaker yet. When it gets one, giving it the right name in the manufacturer's app will be enough for the script to find it.</p>

<h2>What still belongs to humans</h2>
<p>Knowing that a child does not like being woken by a voice. No data from this installation shows it. It shows at 7:15.</p>
<p>Checking whether the announcement leads to an action. Home Assistant knows the clip played. It does not know whether anyone moved, and that is the only measure that matters here.</p>
<p>Deciding what the house imposes. Quiet time at 7:31 p.m., the television cut at 7:30, bed at 8:30: these are parenting decisions, not optimisations. No sensor produces them.</p>

<h2>What I am taking away</h2>
<ul>
<li><strong>Write the grid, not just the messages.</strong> A text always ends up changing, and the grid is how I reread the next one. The TV message, added later, shows that I have to reopen it for every new announcement.</li>
<li><strong>Test quietly.</strong> A throwaway automation that prints the text it receives beats a live trial at seven in the morning.</li>
</ul>
<p>The next episode goes back to building physics: six shutters deciding their own position from their room temperature and the sun's track across their facade, a land registry, and an office at 29 °C in the middle of the night without a single ray of sun.</p>
<h2>Downloads</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/no-choices/annonce-vocale.yaml" download>annonce-vocale.yaml</a>: the script every announcement goes through. One thing to adapt, the speaker table.</li>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/no-choices/LISEZMOI.md" download>LISEZMOI.md</a>: installation, how it works without Home Assistant, and the eight-line writing grid. Written in French.</li>
</ul>
<p><strong>Read the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Ten Years of Home Automation Alone. One Year With an Agent</a> : the inventory and a measurement of what changed. <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">AI Didn't Automate My House</a> : why the win shows up on the projects you never started. <a target="_blank" rel="noopener noreferrer" href="/posts/daily-rhythm">I Changed the Evening Schedule Three Times in One Week</a> : gate, television, shutters and the school calendar. <a target="_blank" rel="noopener noreferrer" href="/posts/not-the-sun">My Office Sits at 29 °C at Night</a> : six shutters deciding on their own, and what the model told me not to do.</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

