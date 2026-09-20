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
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Ma maison tient maintenant le cadre de la journée. Volets ouverts à 7 h 20, portail à 7 h 55, télévision coupée à 19 h 30 et rendue aux parents à 20 h 30, volets fermés au même moment, coucher à 20 h 30. Un capteur <abbr title="Interface web qui expose des données sur HTTP">REST</abbr> branché sur le calendrier scolaire officiel suspend l'ensemble pendant les vacances, et un capteur de jours fériés répond à deux questions distinctes selon le moment de la journée. Le point de l'épisode n'est pas la liste : c'est que ce calendrier a changé trois fois en une semaine, parce que changer d'avis est devenu moins cher que d'avoir raison du premier coup.</p></div>
<hr>
<p>19 h 30. La prise de la télévision se coupe. Les six volets se ferment. Une minute plus tard, l'enceinte du salon annonce le temps calme. À 20 h 30 la télévision se rallume pour les parents, et le coucher est annoncé dans la chambre.</p>
<p>Rien de tout cela n'existait il y a un mois.</p>
<p>Ce n'est pas la partie impressionnante de mon installation. C'est celle qui a le plus changé la maison, et celle dont la mise en place a été la plus rapide.</p>

<h2>Le soir, brique par brique</h2>
<p>Le premier morceau posé a été la coupure de télévision. Une prise <abbr title="Réseau maillé radio basse consommation, 2,4 GHz">Zigbee</abbr>, une automatisation à 19 h 30, une autre à 20 h 30 pour la rendre. Quinze minutes.</p>
<p>Puis l'annonce de 19 h 25, qui prévient cinq minutes avant. Puis la fermeture des volets, calée sur la même heure. Puis le temps calme à 19 h 31, juste après la coupure, pour que l'extinction soit suivie d'une consigne plutôt que d'un vide.</p>
<p>Chaque brique a pris une soirée au plus, et aucune n'a été pensée à l'avance. C'est une propriété qui compte davantage que le résultat final : la routine du soir n'a pas été conçue, elle a été accumulée, en corrigeant après chaque essai.</p>
<blockquote><p>Une maison ne se conçoit pas comme un produit. Elle se règle comme un instrument, par petites touches, en écoutant ce que ça donne.</p></blockquote>
<p>Le matin a suivi le même chemin. Les volets s'ouvrent à 7 h 20 les jours d'école, et le portail s'ouvre à 7 h 55, juste avant le départ.</p>
<p>Ce portail mérite deux phrases, parce qu'il illustre bien ce que veut dire « poser un usage ». Il est piloté par deux relais séparés, un pour l'ouverture et un pour la fermeture, avec un verrouillage qui coupe l'un quand l'autre s'active. Ouvrir un portail déjà ouvert ne produit donc aucun effet et aucune erreur. L'automatisation relève l'état <em>avant</em> d'agir, uniquement pour adapter la phrase annoncée : « le portail est ouvert » plutôt que « j'ouvre le portail ». Un détail de deux lignes, du genre qu'on n'écrit que si l'écrire est gratuit.</p>
<p>La fermeture, elle, repose sur deux filets. Une fermeture systématique à 20 h 30, et une fermeture de nuit une heure après le coucher du soleil. Le second suffisait en théorie, mais en été il laissait le portail ouvert jusqu'à 23 h.</p>

<h2>Mercredi, tout glisse de cinquante-cinq minutes</h2>
<p>La maison suit un emploi du temps réel, pas un emploi du temps moyen. Mon fils a école le lundi, le mardi, le jeudi et le vendredi. Le mercredi, c'est centre aéré le matin et judo de 18 h à 19 h.</p>
<p>La première version du soir excluait purement et simplement le mercredi. C'était une erreur : le mercredi soir est la veille du jeudi, jour d'école. La bonne réponse n'était pas d'exclure, mais de décaler.</p>
<svg viewBox="0 0 640 434" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tableau comparant les horaires de la routine du soir un jour d'école et le mercredi : chaque étape du retour, de la douche au temps calme, est décalée de cinquante-cinq minutes pour tenir compte du judo, tandis que l'heure du coucher reste identique à vingt heures trente." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">SOIR · MÊME ROUTINE, HORAIRES DÉCALÉS</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Mercredi, tout glisse de 55 min.</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.5" letter-spacing="0.1em">
<text x="44" y="124">ÉTAPE</text>
<text x="365" y="124" text-anchor="middle">ÉCOLE</text>
<text x="532" y="124" text-anchor="middle">MERCREDI</text>
</g>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="140" width="576" height="28" rx="8" fill="currentColor" fill-opacity="0.08"></rect>
<rect x="32" y="176" width="576" height="28" rx="8" fill="currentColor" fill-opacity="0.08"></rect>
<rect x="32" y="212" width="576" height="28" rx="8" fill="currentColor" fill-opacity="0.08"></rect>
<rect x="32" y="248" width="576" height="28" rx="8" fill="currentColor" fill-opacity="0.08"></rect>
<rect x="32" y="284" width="576" height="28" rx="8" fill="currentColor" fill-opacity="0.08"></rect>
<rect x="32" y="320" width="576" height="28" rx="8" fill="currentColor" fill-opacity="0.08"></rect>
<rect x="32" y="356" width="576" height="28" rx="8" fill="var(--diagram-accent-soft)" stroke="var(--diagram-accent)" stroke-opacity="0.6" stroke-width="1"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">
<text x="44" y="159">Arrivée et douche</text>
<text x="44" y="195">Pyjama</text>
<text x="44" y="231">Devoirs</text>
<text x="44" y="267">Repas</text>
<text x="44" y="303">Brossage des dents</text>
<text x="44" y="339">Temps calme</text>
<text x="44" y="375" font-weight="650">Coucher</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.85">
<text x="365" y="159">18 h 20</text>
<text x="365" y="195">18 h 25</text>
<text x="365" y="231">18 h 30</text>
<text x="365" y="267">18 h 45</text>
<text x="365" y="303">19 h 00</text>
<text x="365" y="339">19 h 31</text>
<text x="365" y="375" font-weight="650">20 h 30</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.85">
<text x="532" y="159">19 h 15</text>
<text x="532" y="195">19 h 20</text>
<text x="532" y="231">19 h 25</text>
<text x="532" y="267">19 h 40</text>
<text x="532" y="303">19 h 55</text>
<text x="532" y="339">20 h 00</text>
<text x="532" y="375" font-weight="650">20 h 30</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">
<text x="32" y="410">L'heure du coucher ne bouge pas. Ce sont les trente minutes de télévision</text>
<text x="32" y="428">et le temps calme qui absorbent le décalage.</text>
</g>
</svg>
<p>Chaque étape porte donc deux horaires, et l'automatisation choisit selon celui qui l'a déclenchée. Les durées entre étapes sont conservées à l'identique. Ce sont les trente minutes de télévision et le temps calme qui encaissent le retard, pas le sommeil.</p>
<p>Le matin fonctionne pareil : lever à 7 h 15 les jours d'école, 8 h 00 le mercredi, avec le même espacement de quarante minutes jusqu'au départ.</p>

<h2>Un jeu de données pour seize semaines par an</h2>
<p>Cette mécanique doit s'arrêter pendant les vacances scolaires. Sinon un enfant est réveillé à 7 h 15 et le portail s'ouvre à 7 h 55 pendant seize semaines par an.</p>
<p>Pendant deux ans, le garde-fou a été un interrupteur que je basculais à la main. Je l'oubliais une fois sur deux. Il est maintenant piloté par le calendrier scolaire officiel.</p>
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
<p>Le montage tient en trois pièces. Un capteur interroge le jeu de données de l'Éducation nationale toutes les six heures, filtré sur mon académie et sur les périodes à venir. Un second capteur répond simplement « sommes-nous dans une période de vacances ». Une automatisation aligne le booléen sur cette réponse et me prévient quand il bascule.</p>
<p>Ce booléen est partagé par les routines du matin, du soir et du coucher. L'automatiser les a donc toutes changées d'un coup, ce qui est exactement l'intention. L'effet secondaire est qu'un forçage manuel est repris dans l'heure : si je veux un jour un congé exceptionnel pour enfant malade, il faudra un second interrupteur, pas un forçage de celui-ci.</p>
<p>À côté, un capteur de jours fériés répond à deux questions qui ne sont pas la même. Le bloc du retour d'école demande « y avait-il école aujourd'hui ». Le bloc du coucher et de la télévision demande « y a-t-il une obligation demain ». Ce sont deux capteurs distincts, le second décalé d'un jour, et ils divergent exactement la veille d'un férié. Un service permet de les interroger à une date arbitraire, ce qui évite d'attendre le 31 octobre pour vérifier qu'on a raison.</p>

<h2>Le calendrier a changé trois fois en une semaine</h2>
<p>Voilà le vrai sujet de cet épisode.</p>
<p>La première version coupait la télévision les dimanche, lundi, mardi et jeudi. C'était un calendrier de veilles d'école, construit en raisonnant sur l'emploi du temps.</p>
<p>Trois jours plus tard, le mercredi a été ajouté : c'est la veille du jeudi scolaire, et la coupure de 19 h 30 tombe pile au retour du judo, ce qui empêche de se mettre devant la télévision avant de dîner.</p>
<p>Le lendemain encore, le vendredi a été ajouté, et pour une raison qui invalide tout le raisonnement précédent. Ce n'est plus un calendrier de veilles d'obligation. C'est un rituel de fin de journée qui vaut tous les soirs, sauf le samedi. L'heure de rallumage est passée de 20 h 00 à 20 h 30 dans la foulée.</p>
<p>J'ai signalé deux fois que la première version était incohérente. Les deux fois, la réponse a été de changer la règle plutôt que le raisonnement. C'est le bon ordre.</p>
<blockquote><p>Trois versions en une semaine, ce n'est pas de l'indécision. C'est ce qui arrive quand changer d'avis coûte moins cher que d'avoir raison du premier coup.</p></blockquote>
<p>Un détail pratique est né de là. Ces trois horaires vivent dans trois automatisations distinctes qui partagent la même liste de jours. Ajouter un jour à deux d'entre elles et pas à la troisième donne une télévision qui se coupe sans jamais se rallumer. Elles se modifient ensemble, toujours.</p>
<p>La même souplesse a servi ailleurs. L'ouverture des volets du matin a fini en trois horaires distincts, pour couvrir chaque jour de l'année exactement une fois : 7 h 20 les jours d'école, 8 h 05 le mercredi, et 9 h 00 les week-ends, les fériés et les vacances. Sans le troisième, les volets restaient clos tout le samedi.</p>

<h2>Ce que la maison ne décide pas</h2>
<p>La fermeture des volets de 19 h 30 n'a volontairement aucune condition de jour, et elle n'est pas reliée au coucher du soleil. J'ai proposé de la caler sur le crépuscule, ce qui semblait plus intelligent. La réponse a été non : le but n'est pas de gérer la lumière naturelle, c'est d'imposer un repère visible aux enfants, qu'il fasse encore jour ou non. La description de l'automatisation le dit maintenant explicitement, pour qu'une future bonne idée ne vienne pas la « corriger ».</p>
<p>Les vacances scolaires restent la seule exception assumée. Pendant les vacances, aucune coupure de télévision, aucun soir. Ce n'est pas une incohérence avec le rituel quotidien : le rituel vaut en période scolaire, et c'est une décision de parent, pas un réglage.</p>
<p>Enfin, rien de tout cela ne me fait gagner du temps. Ouvrir un portail prend trois secondes et couper une télévision aussi. Ce que la maison apporte, c'est la régularité : l'heure ne dépend plus de qui est disponible, ni de l'énergie qu'on a ce soir-là pour la faire respecter.</p>

<h2>Ce que j'en retiens</h2>
<ul>
<li><strong>Une routine ne se conçoit pas, elle s'accumule.</strong> Aucune des briques du soir n'était prévue quand j'ai posé la première. Elles se sont ajoutées une par une, en corrigeant après chaque essai.</li>
<li><strong>Le coût de changer d'avis est devenu le critère.</strong> Trois versions du calendrier en une semaine auraient été impensables quand chaque modification coûtait une soirée.</li>
<li><strong>Automatiser un interrupteur partagé change tout ce qu'il gouverne.</strong> Le calendrier scolaire touche seize semaines par an et trois blocs de routines d'un seul coup.</li>
<li><strong>Deux questions voisines ne sont pas la même question.</strong> « Y avait-il école aujourd'hui » et « y a-t-il une obligation demain » divergent la veille de chaque férié, et méritent deux capteurs.</li>
<li><strong>Écrire pourquoi dans la description de l'automatisation.</strong> Sans ça, la prochaine bonne idée viendra relier la fermeture des volets au soleil et cassera l'intention.</li>
<li><strong>Le gain n'est pas le temps, c'est la constance.</strong> La maison applique la règle même les soirs où je n'en aurais pas eu le courage.</li>
</ul>
<p>Le prochain épisode reste sur les usages, mais passe à celui que je n'avais pas vu venir : la maison qui parle. Treize annonces vocales par jour, et la découverte que le problème n'était jamais le son.</p>
<h2>À télécharger</h2>
<p>Les deux briques de cet épisode sont réutilisables telles quelles.</p>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/daily-rhythm/vacances-scolaires-fr.yaml" download>vacances-scolaires-fr.yaml</a> — le capteur des vacances scolaires françaises. Une seule ligne à changer, votre académie.</li>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/daily-rhythm/blueprint-coupure-prise.yaml" download>blueprint-coupure-prise.yaml</a> — un <abbr title="Modèle d'automatisation Home Assistant, paramétrable depuis l'interface">blueprint</abbr> pour couper une prise à une heure et la rallumer à une autre. Prise, horaires, jours et conditions se règlent depuis l'interface, sans toucher au fichier.</li>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/daily-rhythm/LISEZMOI.md" download>LISEZMOI.md</a> — l'installation, et la même logique décrite sans Home Assistant pour qui veut la porter sur <abbr title="Logiciel de domotique français, concurrent historique de Home Assistant">Jeedom</abbr>, <abbr title="Plateforme domotique open source, alternative à Home Assistant">openHAB</abbr> ou <abbr title="Outil de programmation visuelle par flux, très utilisé en domotique">Node-RED</abbr>.</li>
</ul>
<p>Le blueprint corrige au passage le défaut raconté plus haut. Les deux horaires y vivent dans une seule automatisation, donc une seule liste de jours à tenir à jour.</p>
<p><strong>Lire la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Dix ans de domotique tout seul, un an avec un agent</a> — l'inventaire de l'installation et la mesure de ce qui a changé. <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">L'IA n'a pas automatisé ma maison</a> — pourquoi le gain se mesure sur les chantiers qu'on ne commençait pas.</p>`
}

const englishContent: PostContent = {
  title: 'I Changed the Evening Schedule Three Times in One Week',
  description: 'Episode 3: the house now carries the shape of the day. Gate open at 7:55, television cut at 7:30 p.m., shutters closed at the same moment, and an official open dataset that suspends the whole thing during school holidays. Every piece took an evening, and that is what made changing my mind three times possible.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> My house now holds the shape of the day. Shutters open at 7:20, gate at 7:55, television cut at 7:30 p.m. and handed back to the parents at 8:30, shutters closed at the same moment, bed at 8:30. A <abbr title="A web interface exposing data over HTTP">REST</abbr> sensor wired to the official school calendar suspends all of it during the holidays, and a public-holiday sensor answers two different questions depending on the time of day. The point of this episode is not the list. It is that this schedule changed three times in one week, because changing my mind became cheaper than being right first time.</p></div>
<hr>
<p>7:30 p.m. The television socket cuts. The six shutters close. A minute later the living-room speaker announces quiet time. At 8:30 the television comes back for the parents, and bedtime is announced in the bedroom.</p>
<p>None of that existed a month ago.</p>
<p>It is not the impressive part of my installation. It is the part that changed the house the most, and the part that took the least time to build.</p>

<h2>The evening, one piece at a time</h2>
<p>The first piece was the television cut. A <abbr title="Low-power 2.4 GHz mesh radio protocol">Zigbee</abbr> socket, one automation at 7:30 p.m., another at 8:30 to hand it back. Fifteen minutes.</p>
<p>Then the 7:25 announcement, which gives five minutes' notice. Then the shutters closing, set to the same time. Then quiet time at 7:31, right after the cut, so that switching off is followed by an instruction rather than a void.</p>
<p>Each piece took an evening at most, and none of them was planned in advance. That property matters more than the end result: the evening routine was not designed, it accumulated, correcting after each attempt.</p>
<blockquote><p>A house is not designed like a product. It is tuned like an instrument, in small strokes, listening to what comes out.</p></blockquote>
<p>The morning followed the same path. Shutters open at 7:20 on school days, and the gate opens at 7:55, just before they leave.</p>
<p>The gate deserves two sentences, because it shows well what "adding a use case" means. It runs on two separate relays, one to open and one to close, with an interlock that cuts one when the other engages. Opening an already-open gate therefore produces no effect and no error. The automation reads the state <em>before</em> acting, purely to adapt the spoken line: "the gate is open" rather than "opening the gate". A two-line detail, the kind you only write when writing it is free.</p>
<p>Closing rests on two nets. A systematic close at 8:30 p.m., and a night close one hour after sunset. The second was enough in theory, but in summer it left the gate open until 11 p.m.</p>

<h2>Wednesday, everything slides by fifty-five minutes</h2>
<p>The house follows a real timetable, not an average one. My son has school on Monday, Tuesday, Thursday and Friday. Wednesday is a holiday club in the morning and judo from 6 to 7 p.m.</p>
<p>The first version of the evening simply excluded Wednesday. That was wrong: Wednesday evening is the night before Thursday, a school day. The right answer was not to exclude it but to shift it.</p>
<svg viewBox="0 0 640 434" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Table comparing evening routine times on a school day and on a Wednesday: every step from getting home and showering through to quiet time is shifted by fifty-five minutes to account for judo, while bedtime stays identical at half past eight." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">EVENING · SAME ROUTINE, SHIFTED</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Wednesday slides by 55 min.</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.5" letter-spacing="0.1em">
<text x="44" y="124">STEP</text>
<text x="365" y="124" text-anchor="middle">SCHOOL</text>
<text x="532" y="124" text-anchor="middle">WEDNESDAY</text>
</g>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="140" width="576" height="28" rx="8" fill="currentColor" fill-opacity="0.08"></rect>
<rect x="32" y="176" width="576" height="28" rx="8" fill="currentColor" fill-opacity="0.08"></rect>
<rect x="32" y="212" width="576" height="28" rx="8" fill="currentColor" fill-opacity="0.08"></rect>
<rect x="32" y="248" width="576" height="28" rx="8" fill="currentColor" fill-opacity="0.08"></rect>
<rect x="32" y="284" width="576" height="28" rx="8" fill="currentColor" fill-opacity="0.08"></rect>
<rect x="32" y="320" width="576" height="28" rx="8" fill="currentColor" fill-opacity="0.08"></rect>
<rect x="32" y="356" width="576" height="28" rx="8" fill="var(--diagram-accent-soft)" stroke="var(--diagram-accent)" stroke-opacity="0.6" stroke-width="1"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">
<text x="44" y="159">Home and shower</text>
<text x="44" y="195">Pyjamas</text>
<text x="44" y="231">Homework</text>
<text x="44" y="267">Dinner</text>
<text x="44" y="303">Brushing teeth</text>
<text x="44" y="339">Quiet time</text>
<text x="44" y="375" font-weight="650">Bedtime</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.85">
<text x="365" y="159">18:20</text>
<text x="365" y="195">18:25</text>
<text x="365" y="231">18:30</text>
<text x="365" y="267">18:45</text>
<text x="365" y="303">19:00</text>
<text x="365" y="339">19:31</text>
<text x="365" y="375" font-weight="650">20:30</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.85">
<text x="532" y="159">19:15</text>
<text x="532" y="195">19:20</text>
<text x="532" y="231">19:25</text>
<text x="532" y="267">19:40</text>
<text x="532" y="303">19:55</text>
<text x="532" y="339">20:00</text>
<text x="532" y="375" font-weight="650">20:30</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">
<text x="32" y="410">Bedtime does not move. The thirty minutes of television and the quiet</text>
<text x="32" y="428">time are what absorb the delay.</text>
</g>
</svg>
<p>Every step therefore carries two times, and the automation picks according to which one fired it. The gaps between steps are preserved exactly. The thirty minutes of television and the quiet time take the hit, not the sleep.</p>
<p>The morning works the same way: up at 7:15 on school days, 8:00 on Wednesday, with the same forty-minute spacing through to leaving.</p>

<h2>One dataset for sixteen weeks a year</h2>
<p>This machinery has to stop during school holidays. Otherwise a child is woken at 7:15 and the gate opens at 7:55 for sixteen weeks a year.</p>
<p>For two years the guard was a switch I flipped by hand. I forgot half the time. It now runs off the official school calendar.</p>
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
<p>The build has three parts. A sensor queries the education ministry's dataset every six hours, filtered to my region and to upcoming periods. A second sensor answers the plain question "are we inside a holiday period". An automation aligns the boolean with that answer and notifies me when it flips.</p>
<p>That boolean is shared by the morning, evening and bedtime routines. Automating it therefore changed all of them at once, which is exactly the intent. The side effect is that a manual override gets reverted within the hour: the day I want an exceptional day off for a sick child, that will need a second switch, not a fight with this one.</p>
<p>Alongside it, a public-holiday sensor answers two questions that are not the same. The after-school block asks "was there school today". The bedtime and television block asks "is there an obligation tomorrow". Those are two separate sensors, the second offset by a day, and they diverge precisely on the eve of every holiday. A service lets me query them for an arbitrary date, which saves waiting until 31 October to check I got it right.</p>

<h2>The schedule changed three times in one week</h2>
<p>This is the actual subject of the episode.</p>
<p>The first version cut the television on Sunday, Monday, Tuesday and Thursday. It was a school-night calendar, built by reasoning about the timetable.</p>
<p>Three days later Wednesday was added: it is the night before a school Thursday, and the 7:30 cut lands exactly when he gets back from judo, which stops the television happening before dinner.</p>
<p>The day after that, Friday was added, for a reason that invalidates all the previous reasoning. It is not a school-night calendar. It is an end-of-day ritual that holds every evening except Saturday. The hand-back time moved from 8 to 8:30 p.m. in the same edit.</p>
<p>I twice pointed out that the first version was inconsistent. Both times the answer was to change the rule rather than the reasoning. That is the right order.</p>
<blockquote><p>Three versions in one week is not indecision. It is what happens when changing your mind costs less than being right first time.</p></blockquote>
<p>One practical detail came out of it. Those three times live in three separate automations that share one list of days. Adding a day to two of them and not the third gives you a television that cuts and never comes back. They get edited together, always.</p>
<p>The same flexibility paid off elsewhere. Opening the shutters in the morning ended up as three separate times, to cover every day of the year exactly once: 7:20 on school days, 8:05 on Wednesday, and 9:00 on weekends, holidays and school breaks. Without the third, the shutters stayed shut all Saturday.</p>

<h2>What the house does not decide</h2>
<p>The 7:30 p.m. shutter close deliberately carries no day condition, and it is not tied to sunset. I proposed anchoring it to dusk, which looked smarter. The answer was no: the goal is not managing daylight, it is imposing a visible landmark on the children, whether it is still light outside or not. The automation's description now says so explicitly, so that a future good idea does not come along and "fix" it.</p>
<p>School holidays remain the one deliberate exception. During the holidays there is no television cut, no evening. That is not inconsistent with a daily ritual: the ritual holds during term, and it is a parenting decision rather than a setting.</p>
<p>Finally, none of this saves me time. Opening a gate takes three seconds and so does switching off a television. What the house brings is regularity: the time no longer depends on who is free, nor on how much energy anyone has that evening to enforce it.</p>

<h2>What I am taking away</h2>
<ul>
<li><strong>A routine is not designed, it accumulates.</strong> None of the evening pieces was planned when I laid the first one. They were added one at a time, correcting after each attempt.</li>
<li><strong>The cost of changing your mind became the criterion.</strong> Three versions of the schedule in one week would have been unthinkable when every edit cost an evening.</li>
<li><strong>Automating a shared switch changes everything it governs.</strong> The school calendar touches sixteen weeks a year and three blocks of routines in one move.</li>
<li><strong>Two neighbouring questions are not the same question.</strong> "Was there school today" and "is there an obligation tomorrow" diverge on the eve of every holiday, and deserve two sensors.</li>
<li><strong>Write the why into the automation's description.</strong> Without it, the next good idea will tie the shutter close to sunset and break the intent.</li>
<li><strong>The win is not time, it is consistency.</strong> The house applies the rule even on the evenings I would not have had the will to.</li>
</ul>
<p>The next episode stays on use cases, and moves to the one I did not see coming: the house that speaks. Thirteen spoken announcements a day, and the discovery that the problem was never the audio.</p>
<h2>Downloads</h2>
<p>Both building blocks from this episode are reusable as they are.</p>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/daily-rhythm/vacances-scolaires-fr.yaml" download>vacances-scolaires-fr.yaml</a> — the French school-holiday sensor. One line to change, your académie.</li>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/daily-rhythm/blueprint-coupure-prise.yaml" download>blueprint-coupure-prise.yaml</a> — a <abbr title="A Home Assistant automation template, configured from the interface">blueprint</abbr> to cut a socket at one time and restore it at another. Socket, times, days and extra conditions are all set from the interface, without editing the file.</li>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/daily-rhythm/LISEZMOI.md" download>LISEZMOI.md</a> — installation notes, plus the same logic described without Home Assistant for anyone porting it to <abbr title="French home automation software, a long-standing Home Assistant rival">Jeedom</abbr>, <abbr title="Open-source home automation platform, an alternative to Home Assistant">openHAB</abbr> or <abbr title="Flow-based visual programming tool, widely used in home automation">Node-RED</abbr>. Written in French.</li>
</ul>
<p>The blueprint also fixes the flaw described above. Both times live in a single automation there, so there is only one day list to keep up to date.</p>
<p><strong>Read the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Ten Years of Home Automation Alone. One Year With an Agent</a> — the inventory and a measurement of what changed. <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">AI Didn't Automate My House</a> — why the win shows up on the projects you never started.</p>`
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
