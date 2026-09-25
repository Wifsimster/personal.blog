<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'daily-rhythm',
  date: '2026-10-04',
  tags: ['Homelab', 'Home-Assistant', 'DIY', 'AI']
}

const frenchContent: PostContent = {
  title: "J'ai changé le calendrier du soir trois fois en une semaine",
  description: "Épisode 3 : la maison porte désormais le rythme de la journée. Portail ouvert à 7 h 55, télévision coupée à 19 h 30, volets fermés au même moment, et un jeu de données officiel qui suspend tout pendant les vacances scolaires. Chaque brique a été posée en une soirée, et c'est ce qui a permis de changer d'avis trois fois.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Ma maison tient maintenant le cadre de la journée. Volets ouverts à 7 h 20, portail à 7 h 55, télévision coupée à 19 h 30 et rendue aux parents à 20 h 30, volets fermés au même moment, coucher à 20 h 30. Un capteur <abbr title="Interface web qui expose des données sur HTTP">REST</abbr> branché sur le calendrier scolaire officiel suspend l'ensemble pendant les vacances, et un capteur de jours fériés répond à deux questions distinctes selon le moment de la journée. Le point de l'épisode n'est pas la liste : c'est que ce calendrier a changé trois fois en une semaine, parce qu'une erreur de règle ne coûtait plus qu'une retouche.</p></div>
<hr>
<p>19 h 30. La prise de la télévision se coupe. Les six volets se ferment. Une minute plus tard, l'enceinte du salon annonce le temps calme. À 20 h 30 la télévision se rallume pour les parents, et le coucher est annoncé dans la chambre.</p>
<p>Rien de tout cela n'existait il y a un mois.</p>
<p>Ce n'est pas la partie impressionnante de mon installation. C'est celle qui a le plus changé la maison, et celle dont la mise en place a été la plus rapide.</p>

<h2>Le soir, brique par brique</h2>
<p>Le premier morceau posé a été la coupure de télévision. Une prise <abbr title="Réseau maillé radio basse consommation, 2,4 GHz">Zigbee</abbr>, une automatisation à 19 h 30, une autre à 20 h 30 pour la rendre. Quinze minutes.</p>
<p>Puis l'annonce de 19 h 25, qui prévient cinq minutes avant. Puis la fermeture des volets, calée sur la même heure. Puis le temps calme à 19 h 31, pour que l'extinction soit suivie d'une consigne plutôt que d'un vide.</p>
<p>Chaque brique a pris une soirée au plus, et aucune n'a été pensée à l'avance. J'ai corrigé après chaque essai.</p>
<blockquote><p>Une maison ne se conçoit pas comme un produit. Elle se règle comme un instrument, par petites touches, en écoutant ce que ça donne.</p></blockquote>
<p>Le matin a suivi le même chemin. Les volets s'ouvrent à 7 h 20 les jours d'école, et le portail s'ouvre à 7 h 55, juste avant le départ.</p>
<p>Ce portail mérite deux phrases, parce qu'il illustre bien ce que veut dire « poser un usage ». Il est piloté par deux relais séparés, un pour l'ouverture et un pour la fermeture, avec un verrouillage qui coupe l'un quand l'autre s'active. Ouvrir un portail déjà ouvert ne produit donc aucun effet et aucune erreur. L'automatisation relève l'état <em>avant</em> d'agir, uniquement pour adapter la phrase annoncée : « le portail est ouvert » plutôt que « j'ouvre le portail ». Un détail de deux lignes, du genre qu'on n'écrit que si l'écrire est gratuit.</p>
<p>La fermeture, elle, repose sur deux filets. Une fermeture systématique à 20 h 30, et une fermeture de nuit une heure après le coucher du soleil. Le second suffisait en théorie, mais en été il laissait le portail ouvert jusqu'à 23 h.</p>

<h2>Mercredi, tout glisse de cinquante-cinq minutes</h2>
<p>La maison suit un emploi du temps réel, pas un emploi du temps moyen. Il y a école le lundi, le mardi, le jeudi et le vendredi. Le mercredi, il n'y a pas école. Le mercredi soir reste pourtant la veille d'un jour d'école, donc la même routine s'y joue, décalée.</p>
<svg viewBox="0 0 640 472" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Nuage de points relié comparant, pour sept étapes de la routine du soir, l'heure un jour d'école et l'heure le mercredi sur un même axe horaire : chaque étape glisse d'environ cinquante-cinq minutes, sauf le coucher, où les deux points se superposent exactement à vingt heures trente." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">SOIR · MÊME ROUTINE, HORAIRES DÉCALÉS</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Tout glisse, sauf le coucher.</text>
<g font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600">
<circle cx="37" cy="97" r="5.5" fill="currentColor" fill-opacity="0.55"></circle>
<text x="49" y="101" fill="currentColor" opacity="0.7">École</text>
<circle cx="132" cy="97" r="5.5" fill="var(--diagram-accent)"></circle>
<text x="144" y="101" fill="var(--diagram-accent)">Mercredi</text>
</g>
<line x1="208.0" y1="360" x2="608.0" y2="360" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></line>
<line x1="208.0" y1="354" x2="208.0" y2="366" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="208.0" y="384" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">18 h</text>
<line x1="341.3" y1="354" x2="341.3" y2="366" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="341.3" y="384" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">19 h</text>
<line x1="474.7" y1="354" x2="474.7" y2="366" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="474.7" y="384" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">20 h</text>
<line x1="608.0" y1="354" x2="608.0" y2="366" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="608.0" y="384" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">21 h</text>
<text x="32" y="138" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">Arrivée et douche</text>
<line x1="252.4" y1="134" x2="374.7" y2="134" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"></line>
<circle cx="252.4" cy="134" r="5.5" fill="currentColor" fill-opacity="0.55"></circle>
<circle cx="374.7" cy="134" r="5.5" fill="var(--diagram-accent)"></circle>
<text x="252.4" y="123" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.55">18 h 20</text>
<text x="374.7" y="123" text-anchor="middle" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.9">19 h 15</text>
<text x="32" y="172" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">Pyjama</text>
<line x1="263.6" y1="168" x2="385.8" y2="168" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"></line>
<circle cx="263.6" cy="168" r="5.5" fill="currentColor" fill-opacity="0.55"></circle>
<circle cx="385.8" cy="168" r="5.5" fill="var(--diagram-accent)"></circle>
<text x="263.6" y="157" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.55">18 h 25</text>
<text x="385.8" y="157" text-anchor="middle" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.9">19 h 20</text>
<text x="32" y="206" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">Devoirs</text>
<line x1="274.7" y1="202" x2="396.9" y2="202" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"></line>
<circle cx="274.7" cy="202" r="5.5" fill="currentColor" fill-opacity="0.55"></circle>
<circle cx="396.9" cy="202" r="5.5" fill="var(--diagram-accent)"></circle>
<text x="274.7" y="191" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.55">18 h 30</text>
<text x="396.9" y="191" text-anchor="middle" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.9">19 h 25</text>
<text x="32" y="240" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">Repas</text>
<line x1="308.0" y1="236" x2="430.2" y2="236" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"></line>
<circle cx="308.0" cy="236" r="5.5" fill="currentColor" fill-opacity="0.55"></circle>
<circle cx="430.2" cy="236" r="5.5" fill="var(--diagram-accent)"></circle>
<text x="308.0" y="225" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.55">18 h 45</text>
<text x="430.2" y="225" text-anchor="middle" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.9">19 h 40</text>
<text x="32" y="274" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">Brossage des dents</text>
<line x1="341.3" y1="270" x2="463.6" y2="270" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"></line>
<circle cx="341.3" cy="270" r="5.5" fill="currentColor" fill-opacity="0.55"></circle>
<circle cx="463.6" cy="270" r="5.5" fill="var(--diagram-accent)"></circle>
<text x="341.3" y="259" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.55">19 h 00</text>
<text x="463.6" y="259" text-anchor="middle" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.9">19 h 55</text>
<text x="32" y="308" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">Temps calme</text>
<line x1="410.2" y1="304" x2="474.7" y2="304" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"></line>
<circle cx="410.2" cy="304" r="5.5" fill="currentColor" fill-opacity="0.55"></circle>
<circle cx="474.7" cy="304" r="5.5" fill="var(--diagram-accent)"></circle>
<text x="410.2" y="293" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.55">19 h 31</text>
<text x="474.7" y="293" text-anchor="middle" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.9">20 h 00</text>
<text x="32" y="342" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">Coucher</text>
<circle cx="541.3" cy="338" r="9" fill="none" stroke="var(--diagram-accent)" stroke-opacity="0.4" stroke-width="6"></circle>
<circle cx="541.3" cy="338" r="5.5" fill="var(--diagram-accent)"></circle>
<text x="541.3" y="324" text-anchor="middle" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="650">20 h 30</text>
<text x="32" y="418" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Chaque trait relie la même étape à ses deux horaires.</text>
<text x="32" y="438" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Plus il est long, plus le décalage est grand — sauf au coucher, qui ne bouge jamais.</text>
</svg>
<p>Chaque étape porte donc deux horaires, et l'automatisation choisit selon celui qui l'a déclenchée. Les durées entre étapes sont conservées à l'identique. Ce sont les trente minutes de télévision et le temps calme qui encaissent le retard, pas le sommeil. Le matin fonctionne pareil : lever à 7 h 15 les jours d'école, 8 h 00 le mercredi, avec le même espacement de quarante minutes jusqu'au départ.</p>

<h2>Un jeu de données pour seize semaines par an</h2>
<p>Cette mécanique doit s'arrêter pendant les vacances scolaires. Sinon le réveil et le portail tournent pour rien.</p>
<p><a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">L'épisode 2</a> raconte comment l'interrupteur que je basculais à la main est devenu un capteur branché sur le calendrier scolaire officiel.</p>
<svg viewBox="0 0 640 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma en trois étages : le jeu de données officiel du calendrier scolaire alimente un capteur qui pilote un seul booléen, lequel gouverne d'un coup la routine du matin, la routine du soir et les trois automatisations de télévision." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">VACANCES SCOLAIRES · ZONE A</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Un jeu de données, trois routines.</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="146" width="170" height="50" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="232" y="146" width="130" height="50" rx="8" fill="var(--diagram-accent-soft)" stroke="var(--diagram-accent)" stroke-opacity="0.6" stroke-width="1"></rect>
<rect x="402" y="104" width="206" height="38" rx="8" fill="currentColor" fill-opacity="0.16"></rect>
<rect x="402" y="152" width="206" height="38" rx="8" fill="currentColor" fill-opacity="0.16"></rect>
<rect x="402" y="200" width="206" height="38" rx="8" fill="currentColor" fill-opacity="0.16"></rect>
</g>
<g fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M 202 171 L 224 171"></path>
<path d="M 362 171 L 382 171 L 382 123 L 394 123"></path>
<path d="M 382 171 L 394 171"></path>
<path d="M 382 171 L 382 219 L 394 219"></path>
</g>
<g fill="currentColor" stroke="none" fill-opacity="0.7">
<polygon points="224,166 232,171 224,176"></polygon>
<polygon points="394,118 402,123 394,128"></polygon>
<polygon points="394,166 402,171 394,176"></polygon>
<polygon points="394,214 402,219 394,224"></polygon>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">
<text x="44" y="168">Le jeu de données</text>
<text x="44" y="186">officiel de l'État</text>
<text x="244" y="177" font-weight="650">Un booléen</text>
<text x="414" y="128">Matin · 5 étapes</text>
<text x="414" y="176">Soir · 7 étapes</text>
<text x="414" y="224">Télévision · 3 autos</text>
</g>
<text x="32" y="276" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Relu toutes les six heures. Avant, c'était un interrupteur que j'oubliais.</text>
</svg>
<p>Le capteur interroge le jeu de données de l'Éducation nationale toutes les six heures, filtré sur mon académie. Une automatisation aligne le booléen sur sa réponse et me prévient quand il bascule. Le plus long a été de choisir l'académie.</p>
<p>Ce booléen pilote à la fois le matin, le soir et le coucher. En contrepartie, un forçage manuel est repris dans l'heure.</p>
<p>À côté, un capteur de jours fériés sert deux blocs qui posent des questions différentes. Le bloc du retour d'école demande « y avait-il école aujourd'hui ». Le bloc du coucher et de la télévision demande « y a-t-il une obligation demain ». Ce sont deux capteurs distincts, le second décalé d'un jour, et ils divergent exactement la veille d'un férié. Un service permet de les interroger à une date arbitraire, ce qui évite d'attendre le 31 octobre pour vérifier qu'on a raison.</p>

<h2>Le calendrier a changé trois fois en une semaine</h2>
<p>La première version coupait la télévision les dimanche, lundi, mardi et jeudi. C'était un calendrier de veilles d'école, construit en raisonnant sur l'emploi du temps.</p>
<p>Trois jours plus tard, le mercredi a été ajouté. La coupure de 19 h 30 tombe pile au retour de l'activité du soir, ce qui empêche de se mettre devant la télévision avant de dîner.</p>
<p>Le lendemain encore, le vendredi a été ajouté, et pour une raison qui invalide tout le raisonnement précédent. Ce n'est plus un calendrier de veilles d'obligation. C'est un rituel de fin de journée qui vaut tous les soirs, sauf le samedi. L'heure de rallumage est passée de 20 h 00 à 20 h 30 dans la foulée.</p>
<p>J'ai signalé deux fois que la règle de départ était incohérente. Les deux fois, la réponse a été de changer la règle plutôt que le raisonnement. C'est le bon ordre.</p>
<blockquote><p>Trois versions en une semaine, ce n'est pas de l'indécision. C'est ce qui arrive quand changer d'avis coûte moins cher que d'avoir raison du premier coup.</p></blockquote>
<p>Un détail pratique est né de là. Ces trois horaires vivent dans trois automatisations distinctes qui partagent la même liste de jours. Ajouter un jour à deux d'entre elles et pas à la troisième donne une télévision qui se coupe sans jamais se rallumer. Elles se modifient ensemble, toujours. Le blueprint proposé plus bas règle ce défaut, avec une seule automatisation et donc une seule liste de jours.</p>
<p>La même souplesse a servi ailleurs. L'ouverture des volets du matin a fini en trois horaires distincts, pour couvrir chaque jour de l'année exactement une fois : celui des jours d'école, 8 h 05 le mercredi, et 9 h 00 les week-ends, les fériés et les vacances. Sans le troisième, les volets restaient clos tout le samedi.</p>

<h2>Ce que la maison ne décide pas</h2>
<p>La fermeture des volets de 19 h 30 n'a volontairement aucune condition de jour, et elle n'est pas reliée au coucher du soleil. J'ai proposé de la caler sur le crépuscule, ce qui semblait plus intelligent. La réponse a été non : le but n'est pas de gérer la lumière naturelle, c'est d'imposer un repère visible aux enfants, qu'il fasse encore jour ou non. La description de l'automatisation le dit maintenant explicitement.</p>
<p>Les vacances scolaires restent la seule exception assumée. Pendant les vacances, aucune coupure de télévision, aucun soir. Le rituel vaut en période scolaire, et c'est une décision de parent.</p>
<p>Enfin, rien de tout cela ne me fait gagner du temps. Ouvrir un portail prend trois secondes et couper une télévision aussi. Ce que la maison apporte, c'est la régularité : l'heure ne dépend plus de qui est disponible, ni de l'énergie qu'on a ce soir-là pour la faire respecter.</p>

<h2>Ce que j'en retiens</h2>
<ul>
<li><strong>Automatiser un interrupteur partagé supprime le forçage manuel.</strong> Une exception, comme un congé pour enfant malade, demande alors un second interrupteur.</li>
<li><strong>Deux questions voisines ne sont pas la même question.</strong> Avant de réutiliser un capteur, écrire la question que pose chaque automatisation.</li>
<li><strong>Écrire pourquoi dans la description de l'automatisation.</strong> C'est elle qui protège une décision contre la prochaine bonne idée.</li>
</ul>
<p>Le prochain épisode reste sur les usages, mais passe à celui que je n'avais pas vu venir : la maison qui parle. Treize annonces vocales par jour, et la découverte que le problème n'était jamais le son.</p>
<h2>À télécharger</h2>
<p>Les deux briques de cet épisode sont réutilisables telles quelles.</p>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/daily-rhythm/vacances-scolaires-fr.yaml" download>vacances-scolaires-fr.yaml</a> — le capteur des vacances scolaires françaises. Une seule ligne à changer, votre académie.</li>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/daily-rhythm/blueprint-coupure-prise.yaml" download>blueprint-coupure-prise.yaml</a> — un <abbr title="Modèle d'automatisation Home Assistant, paramétrable depuis l'interface">blueprint</abbr> pour couper une prise à une heure et la rallumer à une autre. Prise, horaires, jours et conditions se règlent depuis l'interface, sans toucher au fichier.</li>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/daily-rhythm/LISEZMOI.md" download>LISEZMOI.md</a> — l'installation, et la même logique décrite sans Home Assistant pour qui veut la porter sur <abbr title="Logiciel de domotique français, concurrent historique de Home Assistant">Jeedom</abbr>, <abbr title="Plateforme domotique open source, alternative à Home Assistant">openHAB</abbr> ou <abbr title="Outil de programmation visuelle par flux, très utilisé en domotique">Node-RED</abbr>.</li>
</ul>
<p><strong>Lire la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Dix ans de domotique tout seul, un an avec un agent</a> — l'inventaire de l'installation et la mesure de ce qui a changé. <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">L'IA n'a pas automatisé ma maison</a> — pourquoi le gain se mesure sur les chantiers qu'on ne commençait pas. <a target="_blank" rel="noopener noreferrer" href="/posts/no-choices">J'ai enlevé les choix</a> — treize annonces vocales, et pourquoi le problème n'était pas le son. <a target="_blank" rel="noopener noreferrer" href="/posts/not-the-sun">Mon bureau est à 29 °C la nuit</a> — six volets qui décident seuls, et ce que le modèle m'a dit de ne pas faire.</p>`
}

const englishContent: PostContent = {
  title: 'I Changed the Evening Schedule Three Times in One Week',
  description: 'Episode 3: the house now carries the shape of the day. Gate open at 7:55, television cut at 7:30 p.m., shutters closed at the same moment, and an official open dataset that suspends the whole thing during school holidays. Every piece took an evening, and that is what made changing my mind three times possible.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> My house now holds the shape of the day. Shutters open at 7:20, gate at 7:55, television cut at 7:30 p.m. and handed back to the parents at 8:30, shutters closed at the same moment, bed at 8:30. A <abbr title="A web interface exposing data over HTTP">REST</abbr> sensor wired to the official school calendar suspends all of it during the holidays, and a public-holiday sensor answers two different questions depending on the time of day. The point of this episode is not the list. It is that this schedule changed three times in one week, because a wrong rule only cost a quick edit.</p></div>
<hr>
<p>7:30 p.m. The television socket cuts. The six shutters close. A minute later the living-room speaker announces quiet time. At 8:30 the television comes back for the parents, and bedtime is announced in the bedroom.</p>
<p>None of that existed a month ago.</p>
<p>It is not the impressive part of my installation. It is the part that changed the house the most, and the part that took the least time to build.</p>

<h2>The evening, one piece at a time</h2>
<p>The first piece was the television cut. A <abbr title="Low-power 2.4 GHz mesh radio protocol">Zigbee</abbr> socket and two automations, one at 7:30 p.m. and one at 8:30. A quarter of an hour's work.</p>
<p>Then the 7:25 announcement, which gives five minutes' notice. Then the shutters closing, set to the same time. Then quiet time at 7:31, so that switching off is followed by an instruction rather than a void.</p>
<p>Each piece took an evening at most, and none of them was planned in advance. I corrected after each attempt.</p>
<blockquote><p>A house is not designed like a product. It is tuned like an instrument, in small strokes, listening to what comes out.</p></blockquote>
<p>The morning was built like that too. Shutters open at 7:20 on school days, and the gate opens at 7:55, just before they leave.</p>
<p>The gate deserves two sentences, because it shows well what "adding a use case" means. It runs on two separate relays, one to open and one to close, with an interlock that cuts one when the other engages. Opening an already-open gate therefore produces no effect and no error. The automation reads the state <em>before</em> acting, purely to adapt the spoken line: "the gate is open" rather than "opening the gate". A two-line detail, the kind you only write when writing it is free.</p>
<p>Closing rests on two nets. A systematic close at 8:30 p.m., and a night close one hour after sunset. The second was enough in theory, but in summer it left the gate open until 11 p.m.</p>

<h2>Wednesday, everything slides by fifty-five minutes</h2>
<p>The house follows a real timetable, not an average one. School runs on Monday, Tuesday, Thursday and Friday. Wednesday has no school. Wednesday evening is still the night before a school day, so the same routine runs, shifted.</p>
<svg viewBox="0 0 640 472" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Connected dot plot comparing, for seven evening-routine steps, the school-day time and the Wednesday time on the same hour axis: every step slides by about fifty-five minutes, except bedtime, where the two points sit exactly on top of each other at half past eight." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">EVENING · SAME ROUTINE, SHIFTED</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Everything slides, except bedtime.</text>
<g font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600">
<circle cx="37" cy="97" r="5.5" fill="currentColor" fill-opacity="0.55"></circle>
<text x="49" y="101" fill="currentColor" opacity="0.7">School</text>
<circle cx="132" cy="97" r="5.5" fill="var(--diagram-accent)"></circle>
<text x="144" y="101" fill="var(--diagram-accent)">Wednesday</text>
</g>
<line x1="208.0" y1="360" x2="608.0" y2="360" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></line>
<line x1="208.0" y1="354" x2="208.0" y2="366" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="208.0" y="384" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">18:00</text>
<line x1="341.3" y1="354" x2="341.3" y2="366" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="341.3" y="384" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">19:00</text>
<line x1="474.7" y1="354" x2="474.7" y2="366" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="474.7" y="384" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">20:00</text>
<line x1="608.0" y1="354" x2="608.0" y2="366" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="608.0" y="384" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">21:00</text>
<text x="32" y="138" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">Home and shower</text>
<line x1="252.4" y1="134" x2="374.7" y2="134" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"></line>
<circle cx="252.4" cy="134" r="5.5" fill="currentColor" fill-opacity="0.55"></circle>
<circle cx="374.7" cy="134" r="5.5" fill="var(--diagram-accent)"></circle>
<text x="252.4" y="123" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.55">18:20</text>
<text x="374.7" y="123" text-anchor="middle" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.9">19:15</text>
<text x="32" y="172" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">Pyjamas</text>
<line x1="263.6" y1="168" x2="385.8" y2="168" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"></line>
<circle cx="263.6" cy="168" r="5.5" fill="currentColor" fill-opacity="0.55"></circle>
<circle cx="385.8" cy="168" r="5.5" fill="var(--diagram-accent)"></circle>
<text x="263.6" y="157" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.55">18:25</text>
<text x="385.8" y="157" text-anchor="middle" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.9">19:20</text>
<text x="32" y="206" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">Homework</text>
<line x1="274.7" y1="202" x2="396.9" y2="202" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"></line>
<circle cx="274.7" cy="202" r="5.5" fill="currentColor" fill-opacity="0.55"></circle>
<circle cx="396.9" cy="202" r="5.5" fill="var(--diagram-accent)"></circle>
<text x="274.7" y="191" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.55">18:30</text>
<text x="396.9" y="191" text-anchor="middle" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.9">19:25</text>
<text x="32" y="240" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">Dinner</text>
<line x1="308.0" y1="236" x2="430.2" y2="236" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"></line>
<circle cx="308.0" cy="236" r="5.5" fill="currentColor" fill-opacity="0.55"></circle>
<circle cx="430.2" cy="236" r="5.5" fill="var(--diagram-accent)"></circle>
<text x="308.0" y="225" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.55">18:45</text>
<text x="430.2" y="225" text-anchor="middle" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.9">19:40</text>
<text x="32" y="274" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">Brushing teeth</text>
<line x1="341.3" y1="270" x2="463.6" y2="270" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"></line>
<circle cx="341.3" cy="270" r="5.5" fill="currentColor" fill-opacity="0.55"></circle>
<circle cx="463.6" cy="270" r="5.5" fill="var(--diagram-accent)"></circle>
<text x="341.3" y="259" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.55">19:00</text>
<text x="463.6" y="259" text-anchor="middle" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.9">19:55</text>
<text x="32" y="308" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">Quiet time</text>
<line x1="410.2" y1="304" x2="474.7" y2="304" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"></line>
<circle cx="410.2" cy="304" r="5.5" fill="currentColor" fill-opacity="0.55"></circle>
<circle cx="474.7" cy="304" r="5.5" fill="var(--diagram-accent)"></circle>
<text x="410.2" y="293" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.55">19:31</text>
<text x="474.7" y="293" text-anchor="middle" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.9">20:00</text>
<text x="32" y="342" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">Bedtime</text>
<circle cx="541.3" cy="338" r="9" fill="none" stroke="var(--diagram-accent)" stroke-opacity="0.4" stroke-width="6"></circle>
<circle cx="541.3" cy="338" r="5.5" fill="var(--diagram-accent)"></circle>
<text x="541.3" y="324" text-anchor="middle" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="650">20:30</text>
<text x="32" y="418" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Each line connects one step to its two times.</text>
<text x="32" y="438" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">The longer it is, the bigger the shift — except bedtime, which never moves.</text>
</svg>
<p>Every step therefore carries two times, and the automation picks according to which one fired it. The gaps between steps are preserved exactly. The thirty minutes of television and the quiet time take the hit, not the sleep. Mornings shift too: up at 7:15 on school days, 8:00 on Wednesday, with the same forty-minute spacing through to leaving.</p>

<h2>One dataset for sixteen weeks a year</h2>
<p>This machinery has to stop during school holidays. Otherwise the wake-up and the gate run for nothing.</p>
<p><a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">Episode 2</a> tells how the switch I flipped by hand became a sensor wired to the official school calendar.</p>
<svg viewBox="0 0 640 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-stage diagram: the official school calendar dataset feeds a sensor that drives a single boolean, which in turn governs the morning routine, the evening routine and the three television automations at once." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">SCHOOL HOLIDAYS · REGION A</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">One dataset, three routines.</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="146" width="170" height="50" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="232" y="146" width="130" height="50" rx="8" fill="var(--diagram-accent-soft)" stroke="var(--diagram-accent)" stroke-opacity="0.6" stroke-width="1"></rect>
<rect x="402" y="104" width="206" height="38" rx="8" fill="currentColor" fill-opacity="0.16"></rect>
<rect x="402" y="152" width="206" height="38" rx="8" fill="currentColor" fill-opacity="0.16"></rect>
<rect x="402" y="200" width="206" height="38" rx="8" fill="currentColor" fill-opacity="0.16"></rect>
</g>
<g fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M 202 171 L 224 171"></path>
<path d="M 362 171 L 382 171 L 382 123 L 394 123"></path>
<path d="M 382 171 L 394 171"></path>
<path d="M 382 171 L 382 219 L 394 219"></path>
</g>
<g fill="currentColor" stroke="none" fill-opacity="0.7">
<polygon points="224,166 232,171 224,176"></polygon>
<polygon points="394,118 402,123 394,128"></polygon>
<polygon points="394,166 402,171 394,176"></polygon>
<polygon points="394,214 402,219 394,224"></polygon>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">
<text x="44" y="168">The official state</text>
<text x="44" y="186">open dataset</text>
<text x="244" y="177" font-weight="650">One boolean</text>
<text x="414" y="128">Morning · 5 steps</text>
<text x="414" y="176">Evening · 7 steps</text>
<text x="414" y="224">Television · 3 autos</text>
</g>
<text x="32" y="276" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Re-read every six hours. It used to be a switch I forgot.</text>
</svg>
<p>The sensor queries the education ministry's dataset every six hours, filtered to my region. An automation aligns the boolean with its answer and notifies me when it flips. The longest part was picking the right académie.</p>
<p>Morning, evening and bedtime all hang off that boolean. The side effect is that a manual override gets reverted within the hour.</p>
<p>Alongside it, a public-holiday sensor serves two blocks that ask different questions. The after-school block asks "was there school today". The bedtime and television block asks "is there an obligation tomorrow". Those are two separate sensors, the second offset by a day, and they diverge precisely on the eve of every holiday. A service lets me query them for an arbitrary date, which saves waiting until 31 October to check I got it right.</p>

<h2>The schedule changed three times in one week</h2>
<p>The first version cut the television on Sunday, Monday, Tuesday and Thursday. It was a school-night calendar, built by reasoning about the timetable.</p>
<p>Three days later Wednesday was added. The 7:30 cut lands right as everyone gets back from the evening activity, which stops the television happening before dinner.</p>
<p>The day after that, Friday was added, for a reason that invalidates all the previous reasoning. It is not a school-night calendar. It is an end-of-day ritual that holds every evening but Saturday. The hand-back time moved from 8 to 8:30 p.m. in the same edit.</p>
<p>I twice pointed out that the original rule was inconsistent. Both times the answer was to change the rule rather than the reasoning. That is the right order.</p>
<blockquote><p>Three versions in one week is not indecision. It is what happens when changing your mind costs less than being right first time.</p></blockquote>
<p>One practical detail came out of it. Those three times live in three separate automations that share one list of days. Adding a day to two of them and not the third gives you a television that cuts and never comes back. They get edited together, always. The blueprint in the downloads below fixes this: one automation, so only one day list.</p>
<p>The same flexibility paid off elsewhere. Opening the shutters in the morning ended up as three separate times, to cover every day of the year exactly once: the school-day time, 8:05 on Wednesday, and 9:00 on weekends, holidays and school breaks. Without the third, the shutters stayed shut all Saturday.</p>

<h2>What the house does not decide</h2>
<p>The 7:30 p.m. shutter close deliberately carries no day condition, and it is not tied to sunset. I proposed anchoring it to dusk, which looked smarter. The answer was no: the goal is not managing daylight, it is imposing a visible landmark on the children, whether it is still light outside or not. The automation's description now says so explicitly.</p>
<p>School holidays remain the one deliberate exception. During the holidays there is no television cut, no evening. The ritual is for term time, and that is a parenting decision.</p>
<p>Finally, none of this saves me time. Opening a gate takes three seconds and so does switching off a television. What the house brings is regularity: the time no longer depends on who is free, nor on how much energy anyone has that evening to enforce it.</p>

<h2>What I am taking away</h2>
<ul>
<li><strong>Automating a shared switch removes the manual override.</strong> An exception, like a day off for a sick child, then needs a second switch.</li>
<li><strong>Two neighbouring questions are not the same question.</strong> Before reusing a sensor, write down the question each automation is asking.</li>
<li><strong>Write the why into the automation's description.</strong> That is what protects a decision from the next good idea.</li>
</ul>
<p>The next episode stays on use cases, and moves to the one I did not see coming: the house that speaks. Thirteen spoken announcements a day, and the discovery that the problem was never the audio.</p>
<h2>Downloads</h2>
<p>Both building blocks from this episode are reusable as they are.</p>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/daily-rhythm/vacances-scolaires-fr.yaml" download>vacances-scolaires-fr.yaml</a> — the French school-holiday sensor. One line to change, your académie.</li>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/daily-rhythm/blueprint-coupure-prise.yaml" download>blueprint-coupure-prise.yaml</a> — a <abbr title="A Home Assistant automation template, configured from the interface">blueprint</abbr> to cut a socket at one time and restore it at another. Socket, times, days and extra conditions are all set from the interface, without editing the file.</li>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/daily-rhythm/LISEZMOI.md" download>LISEZMOI.md</a> — installation notes, plus the same logic described without Home Assistant for anyone porting it to <abbr title="French home automation software, a long-standing Home Assistant rival">Jeedom</abbr>, <abbr title="Open-source home automation platform, an alternative to Home Assistant">openHAB</abbr> or <abbr title="Flow-based visual programming tool, widely used in home automation">Node-RED</abbr>. Written in French.</li>
</ul>
<p><strong>Read the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Ten Years of Home Automation Alone. One Year With an Agent</a> — the inventory and a measurement of what changed. <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">AI Didn't Automate My House</a> — why the win shows up on the projects you never started. <a target="_blank" rel="noopener noreferrer" href="/posts/no-choices">I Took the Choices Out</a> — thirteen spoken announcements, and why the audio was never the problem. <a target="_blank" rel="noopener noreferrer" href="/posts/not-the-sun">My Office Sits at 29 °C at Night</a> — six shutters deciding on their own, and what the model told me not to do.</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'RythmeDeLaJournee',
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
