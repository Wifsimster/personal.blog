<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'cost-of-trying',
  date: '2026-09-27',
  tags: ['Homelab', 'AI', 'Home-Assistant', 'Analysis']
}

const frenchContent: PostContent = {
  title: "L'IA n'a pas automatisé ma maison. Elle a supprimé le prix d'essayer.",
  description: "Plus d'un an de domotique menée avec un agent qui pilote l'API de Home Assistant : 87 appareils, neuf écosystèmes, 75 automatisations. J'y gagne des idées que je n'aurais jamais tentées et des diagnostics qui traversent cinq systèmes en une session.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Ma maison fédère neuf écosystèmes qui ne se parlent pas : <abbr title="Réseau maillé radio basse consommation, 2,4 GHz">Zigbee</abbr>, <abbr title="Standard d'interopérabilité domotique porté par la Connectivity Standards Alliance">Matter</abbr>, <abbr title="Protocole d'accessoires domotique d'Apple">HomeKit</abbr>, du Wi-Fi propriétaire, un cloud constructeur, du <abbr title="Simple Service Discovery Protocol — découverte d'appareils UPnP sur le réseau local">SSDP</abbr>, de l'infrarouge, du <abbr title="Message Queuing Telemetry Transport — bus de messages léger">MQTT</abbr> et une API ouverte de l'Éducation nationale. 87 appareils, 929 entités, 75 automatisations. Depuis plus d'un an, tout passe par un agent qui pilote l'API du serveur, lit les journaux et applique les correctifs. Les idées qui coûtaient trop cher à démarrer, je les lance enfin. Et un diagnostic traverse maintenant cinq systèmes en une soirée. Restent deux choses à faire soi-même : couper un disjoncteur, et décider ce que la maison doit imposer.</p></div>
<hr>
<p>Pendant deux ans, une corvée est restée sur ma liste sans jamais en sortir.</p>
<p>Mes routines du matin réveillent mon fils, ouvrent les volets et le portail. Elles ne doivent pas tourner pendant les vacances scolaires. Le garde-fou existait déjà. C'était un interrupteur que je basculais à la main, seize semaines par an. Je l'oubliais une fois sur deux.</p>
<p>La version propre était évidente. Le calendrier scolaire officiel est un jeu de données ouvert. Il suffit d'un capteur <abbr title="Interface web qui expose des données sur HTTP">REST</abbr>, d'un filtre sur l'académie, d'un capteur binaire qui teste si la date du jour tombe dans une période, et d'une synchronisation. Une demi-journée de travail, peut-être. Je ne l'ai jamais faite.</p>
<p>Elle a été faite en une session, testée de bout en bout, le 18 septembre.</p>

<h2>Pourquoi l'hétérogénéité change le calcul</h2>
<p>L'inventaire complet est dans <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">l'épisode précédent</a> : 87 appareils, 929 entités, 43 intégrations. Un seul chiffre compte ici. Matter devait être le standard qui range tout ça, et chez moi il pilote neuf appareils sur quatre-vingt-sept. Le reste est une longue traîne d'exceptions qui ne disparaîtra jamais : le kit Somfy qu'on n'atteint que par HomeKit, la porte de l'atelier commandée en infrarouge, huit ampoules Wi-Fi d'un constructeur chinois, des caméras en <abbr title="Standard ouvert d'interface pour caméras IP">ONVIF</abbr>.</p>
<p>Sur une installation à un seul protocole, un agent n'a pas grand-chose à apporter. Ici, la moindre idée traverse trois systèmes et deux formats de configuration.</p>
<blockquote><p>Home Assistant est une couche de fédération. Et une fédération se paie en contexte, celui qu'il faut tenir en tête avant chaque modification.</p></blockquote>

<h2>La friction n'a jamais été la syntaxe</h2>
<p>Je croyais que le coûteux, en domotique, c'était d'écrire le <abbr title="Format de fichier de configuration lisible, utilisé par Home Assistant">YAML</abbr>. Je n'en écris presque plus, et le temps part à retrouver le contexte. Quelles automatisations touchent cette entité. Laquelle de mes trois listes de jours doit rester synchronisée avec les deux autres. Quel garde-fou, écrit il y a huit mois, va réécraser la commande que je viens d'envoyer.</p>
<p>Exemple vécu. Ma routine de coupure de la télévision « ne marchait qu'une seconde ». Ce n'était ni la routine ni la prise. Une automatisation de garde-fou sans aucune condition, écrite des mois plus tôt, rallumait la prise dix secondes après chaque coupure.</p>
<p>La réponse tenait dans le journal de l'entité, une ligne sous la coupure, et il fallait la croiser avec les soixante-quinze automatisations pour nommer la coupable. Je n'avais jamais ouvert ce journal. L'agent l'a lu, a trouvé le conflit et a posé la condition manquante dans la même séance, à partir d'une seule phrase de ma part : « la coupure ne tient qu'une seconde ».</p>
<svg viewBox="0 0 640 316" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Deux trajets entre une même idée et sa mise en service : à la main, le trajet traverse toute la largeur du schéma ; avec un agent, il s'arrête bien avant, et l'écart entre les deux correspond exactement au temps passé à retrouver le contexte." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">UNE MÊME IDÉE, DEUX TRAJETS</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Le trajet a raccourci, pas l'idée.</text>
<text x="32" y="130" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.7">À la main</text>
<line x1="32" y1="150" x2="608" y2="150" stroke="currentColor" stroke-opacity="0.28" stroke-width="3" stroke-linecap="round"></line>
<circle cx="32" cy="150" r="7" fill="currentColor" fill-opacity="0.55"></circle>
<circle cx="608" cy="150" r="7" fill="currentColor" fill-opacity="0.55"></circle>
<text x="32" y="174" text-anchor="start" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.6">L'idée</text>
<text x="608" y="174" text-anchor="end" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.6">Livré</text>
<line x1="172" y1="198" x2="172" y2="206" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round"></line>
<line x1="608" y1="198" x2="608" y2="190" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round"></line>
<line x1="172" y1="198" x2="608" y2="198" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="2 5" stroke-linecap="round"></line>
<text x="390" y="184" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">retrouver le contexte</text>
<text x="32" y="226" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650">Avec un agent</text>
<line x1="32" y1="246" x2="172" y2="246" stroke="var(--diagram-accent)" stroke-opacity="1" stroke-width="4" stroke-linecap="round"></line>
<circle cx="32" cy="246" r="7" fill="var(--diagram-accent)"></circle>
<circle cx="172" cy="246" r="7" fill="var(--diagram-accent)"></circle>
<text x="32" y="270" text-anchor="start" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.6">L'idée</text>
<text x="172" y="270" text-anchor="start" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600">Livré</text>
<text x="32" y="292" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">L'idée n'a pas changé. Ce qui sépare les deux, c'est le temps passé à retrouver le contexte.</text>
</svg>
<p>Les treize annonces vocales de la maison ont été réécrites en une passe, par un script qui applique le même correctif à chaque appel. À la main, c'est treize formulaires. Les volumes du matin ont été baissés sur cinq automatisations d'un coup. Le mercredi a été ajouté à trois listes de jours qui doivent rester cohérentes, sans quoi la télévision se coupe sans jamais se rallumer.</p>
<p>Aucune de ces tâches n'est difficile. Elles attendaient depuis des mois parce qu'elles sont pénibles, et rien d'autre.</p>

<h2>Les idées qui passent enfin sous le seuil</h2>
<p>La liste de ce que j'accepte d'essayer s'est élargie. Ce changement-là n'apparaît sur aucun relevé d'activité.</p>
<p><strong>Le calendrier scolaire.</strong> Celui de l'introduction, synchronisé toutes les six heures. Il gouverne d'un coup les routines du matin, du soir et du coucher. Seize semaines de corvée annuelle supprimées par une intégration qui ne pilote aucun appareil.</p>
<p><strong>Un modèle solaire par façade.</strong> Chaque volet décide seul, à partir de la température de sa pièce et du soleil qui frappe, ou non, sa façade. Les orientations viennent du cadastre, recoupé avec un mois de relevés de température mis en face de la course du soleil. Le même travail a trouvé d'où venait la chaleur du bureau, et un ventilateur de plafond calé sur la température en est sorti. Il a ensuite désigné la phase du tableau électrique qui pouvait encore prendre une charge. Les deux réponses contredisaient mon premier calcul. Le détail est dans <a target="_blank" rel="noopener noreferrer" href="/posts/not-the-sun">le dernier épisode de la série</a>.</p>
<p>Ces chantiers demandent des heures d'analyse pour un résultat à usage unique. Personne ne passe un week-end à corréler trente jours de température avec l'azimut solaire pour régler six volets. Ils n'étaient pas difficiles à finir, ils étaient trop chers à commencer.</p>
<blockquote><p>Avant de lancer une idée, il ne reste qu'une question : est-ce que ça vaut la peine d'être vrai ?</p></blockquote>

<h2>Ce que la maison sait faire en plus</h2>
<p>Dans la même période, la maison a gagné ces usages :</p>
<ul>
<li>Un <strong>plan de la maison</strong> dans le tableau de bord, avec douze températures posées à leur place dans les pièces.</li>
<li>Un <strong>mode absence</strong> qui se déclenche quand les deux téléphones sont partis depuis dix minutes : chauffe-eau coupé, surveillance de la caméra étendue, notification au retour.</li>
<li>Une <strong>alerte de volet muet</strong> qui prévient si l'un des six ne répond plus depuis trente minutes, et prévient à nouveau quand il revient.</li>
<li>Une <strong>alerte d'aération</strong> pour le bureau, qui se déclenche quand l'extérieur passe deux degrés sous la pièce.</li>
<li>Un <strong>suivi de consommation par phase</strong> sur le compteur triphasé, avec les gros postes identifiés un par un.</li>
</ul>
<p>Aucun de ces cinq usages n'est remarquable, et aucun n'aurait justifié, seul, d'y passer un samedi. Ils existent parce qu'aucun n'a coûté un samedi.</p>

<h2>L'interaction que je n'avais pas imaginée</h2>
<p>La maison parle. Treize annonces par jour, du lever au coucher, sur des enceintes de salon et de chambre. Les premières versions sortaient au bon moment, au bon volume, et personne ne bougeait.</p>
<p>Le réveil est l'exemple le plus net. La première version annonçait, puis lançait la musique. Mon fils n'aime pas être réveillé par une voix. La séquence a été inversée le jour même — musique d'abord, montée progressive du volume sur quatre-vingts secondes, la consigne par-dessus à la fin. Trois itérations dans la même journée, jusqu'au bon plafond de volume.</p>
<p>Quand le coût d'une modification tombe à presque rien, on se met à régler des choses qu'on n'aurait jamais ouvertes.</p>
<blockquote><p>Une maison devient un objet qu'on ajuste au ressenti, le jour même, par petites touches.</p></blockquote>

<h2>Ce qui reste aux humains</h2>
<p>La liste est courte et elle est stable.</p>
<p><strong>Couper le courant.</strong> Le seul remède à une pile applicative figée est un cycle secteur. J'ai appris que « j'ai fait un reset » et « le module a perdu son alimentation » sont deux affirmations différentes. Il a fallu trois tentatives avant de tomber sur le bon disjoncteur.</p>
<p><strong>Arbitrer l'agent.</strong> Sur ce même volet, il a annoncé « l'étage radio est mort, matériel à remplacer » quatre minutes avant que le module ne revienne tout seul. Le raisonnement tenait debout. Il lui manquait d'attendre dix minutes de plus. Un agent avance vite, y compris vers une mauvaise réponse, et rien dans son ton ne le signale.</p>
<p><strong>Observer.</strong> J'ai annoncé une chambre orientée sud-sud-est. Le calcul qui en découlait gardait le volet ouvert tout le matin, dans une pièce en plein soleil. Il a fallu regarder la pièce pour voir l'erreur.</p>
<p><strong>Décider ce que la maison impose.</strong> Un agent optimise ce qu'on lui donne à optimiser. Il n'a aucun moyen de savoir qu'une coupure de télévision à heure fixe est un rituel de fin de journée et non une contrainte scolaire, ni que le vendredi ne mérite pas d'exception. J'ai proposé deux fois de rationaliser ce calendrier. Deux fois, la bonne réponse était non.</p>

<h2>Ce que j'en retiens</h2>
<ul>
<li><strong>Compter ce qui n'existait pas.</strong> Un avant-après ne montre que les tâches d'avant, faites plus vite. Il rate tout ce que je n'aurais jamais commencé.</li>
<li><strong>C'est sur un parc hétérogène qu'un agent rapporte le plus.</strong> Neuf écosystèmes, c'est neuf documentations et neuf façons de mentir sur son propre état de santé.</li>
<li><strong>Passer par l'API, jamais par les fichiers.</strong> Un service qui gère sa configuration la réécrit. Tout ce qui est décrit ici est passé par l'interface publique du serveur, ce qui rend chaque modification annulable.</li>
<li><strong>Préférer indisponible à faux.</strong> Mon capteur extérieur se déclare indisponible dès qu'il s'écarte de plus de 5 °C de la prévision. Il gèle les décisions au lieu de les fausser.</li>
<li><strong>Écrire les alertes qui manquent.</strong> Un volet est resté hors ligne trois jours sans que rien ne me prévienne. Le groupe qui l'appelle chaque matin ignorait le membre absent sans lever d'erreur.</li>
<li><strong>La moitié de ce chantier a été de la rédaction.</strong> Une automatisation qui ne change le comportement de personne n'existe pas.</li>
</ul>
<p>Le parc ne convergera pas. Dans cinq ans il y aura toujours un pont propriétaire, une télécommande infrarouge et une ampoule qui refuse son réseau. Mais le capteur de vacances scolaires tourne depuis deux jours, et cet interrupteur-là, je ne le rebasculerai plus jamais à la main.</p>
<p><strong>Lire la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Dix ans de domotique tout seul, un an avec un agent</a> — l'inventaire de l'installation, dix ans d'empilement, et la mesure de ce qui a changé. <a target="_blank" rel="noopener noreferrer" href="/posts/daily-rhythm">J'ai changé le calendrier du soir trois fois en une semaine</a> — la maison qui porte le rythme de la journée. <a target="_blank" rel="noopener noreferrer" href="/posts/no-choices">J'ai enlevé les choix</a> — treize annonces vocales, et pourquoi le problème n'était pas le son. <a target="_blank" rel="noopener noreferrer" href="/posts/not-the-sun">Mon bureau est à 29 °C la nuit</a> — six volets qui décident seuls, et ce que le modèle m'a dit de ne pas faire.</p>`
}

const englishContent: PostContent = {
  title: "AI Didn't Automate My House. It Deleted the Cost of Trying.",
  description: 'Over a year of home automation run through an agent driving the Home Assistant API: 87 devices, nine ecosystems, 75 automations. What I got out of it is ideas I would never have tried, and diagnostics that cross five systems in one sitting.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> My house federates nine ecosystems that do not talk to each other: <abbr title="Low-power 2.4 GHz mesh radio protocol">Zigbee</abbr>, <abbr title="Smart-home interoperability standard from the Connectivity Standards Alliance">Matter</abbr>, <abbr title="Apple's local smart-home accessory protocol">HomeKit</abbr>, proprietary Wi-Fi, a vendor cloud, <abbr title="Simple Service Discovery Protocol — UPnP device discovery on the local network">SSDP</abbr>, infrared, <abbr title="Message Queuing Telemetry Transport — lightweight message bus">MQTT</abbr>, and an open API from the French education ministry. 87 devices, 929 entities, 75 automations. For over a year everything has gone through an agent that drives the server API, reads the logs and applies the fixes. Ideas that used to cost too much to start, I now start. And a diagnosis can now cross five systems in one evening. Two things still need a human: throwing a breaker, and deciding what the house should impose.</p></div>
<hr>
<p>For two years, one chore sat on my list and never left it.</p>
<p>My morning routines wake my son, open the shutters and open the gate. They must not run during school holidays. There was already a guard, a switch I flipped by hand, sixteen weeks a year. I forgot half the time.</p>
<p>The clean version was obvious. The official school calendar is an open dataset. All it takes is a <abbr title="A web interface exposing data over HTTP">REST</abbr> sensor, a filter on the right region, a binary sensor testing whether today falls inside a holiday period, and a sync job. Half a day of work, maybe. I never did it.</p>
<p>It was built in one sitting, tested end to end, on 18 September.</p>

<h2>Why heterogeneity changes the maths</h2>
<p>The full inventory is in <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">the previous episode</a>: 87 devices, 929 entities, 43 integrations. One number matters here. Matter was supposed to be the standard that tidied this up, and in my house it drives nine devices out of eighty-seven. The rest is a long tail of exceptions that will never go away: a Somfy kit reachable only through HomeKit, a workshop door driven over infrared, eight Wi-Fi bulbs from a Chinese vendor, cameras on <abbr title="Open interface standard for IP cameras">ONVIF</abbr>.</p>
<p>On a single-protocol setup, an agent has little to add. Here, the smallest idea crosses three systems and two configuration formats.</p>
<blockquote><p>Home Assistant is a federation layer. And you pay for a federation in context, the context you must hold in your head before each change.</p></blockquote>

<h2>The friction was never the syntax</h2>
<p>I used to think the expensive part of home automation was writing the <abbr title="A readable configuration file format, used by Home Assistant">YAML</abbr>. I barely write any now. The time goes into recovering context. Which automations touch this entity. Which of my three day-lists has to stay in sync with the other two. Which guard, written eight months ago, is about to overwrite the command I just sent.</p>
<p>A real example. My television cut-off routine "only worked for one second". It was neither the routine nor the plug. A guard automation with no conditions at all, written months earlier, switched the plug back on ten seconds after every cut.</p>
<p>The answer sat in the entity's logbook, one line under the cut, and finding the culprit meant cross-referencing it against seventy-five automations. I had never opened that logbook. The agent read it, found the conflict and added the missing condition in the same sitting, off a single sentence from me: "the cut only holds for a second".</p>
<svg viewBox="0 0 640 316" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two routes from the same idea to shipped: by hand the route crosses the full width of the diagram; with an agent it stops well before, and the gap between the two matches exactly the time spent recovering context." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">ONE IDEA, TWO ROUTES</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">The route got shorter, not the idea.</text>
<text x="32" y="130" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.7">By hand</text>
<line x1="32" y1="150" x2="608" y2="150" stroke="currentColor" stroke-opacity="0.28" stroke-width="3" stroke-linecap="round"></line>
<circle cx="32" cy="150" r="7" fill="currentColor" fill-opacity="0.55"></circle>
<circle cx="608" cy="150" r="7" fill="currentColor" fill-opacity="0.55"></circle>
<text x="32" y="174" text-anchor="start" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.6">The idea</text>
<text x="608" y="174" text-anchor="end" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.6">Shipped</text>
<line x1="172" y1="198" x2="172" y2="206" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round"></line>
<line x1="608" y1="198" x2="608" y2="190" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round"></line>
<line x1="172" y1="198" x2="608" y2="198" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="2 5" stroke-linecap="round"></line>
<text x="390" y="184" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">recovering context</text>
<text x="32" y="226" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650">With an agent</text>
<line x1="32" y1="246" x2="172" y2="246" stroke="var(--diagram-accent)" stroke-opacity="1" stroke-width="4" stroke-linecap="round"></line>
<circle cx="32" cy="246" r="7" fill="var(--diagram-accent)"></circle>
<circle cx="172" cy="246" r="7" fill="var(--diagram-accent)"></circle>
<text x="32" y="270" text-anchor="start" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.6">The idea</text>
<text x="172" y="270" text-anchor="start" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600">Shipped</text>
<text x="32" y="292" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">The idea didn't change. What separates the two is the time spent recovering context.</text>
</svg>
<p>The thirteen spoken announcements were rewritten in a single pass, by a script applying the same patch to every call site. By hand that is thirteen forms. Morning volumes were lowered across five automations at once. Wednesday was added to three day-lists that have to stay consistent, or the television cuts off and never comes back on.</p>
<p>None of these tasks is hard. They had been waiting for months because they are tedious, and for no other reason.</p>

<h2>The ideas that finally clear the bar</h2>
<p>The list of things I am willing to attempt got wider. That change shows up on no activity log.</p>
<p><strong>The school calendar.</strong> The one from the opening, synced every six hours. It now governs the morning, evening and bedtime routines in one move. Sixteen weeks of annual chore removed by an integration that drives no device at all.</p>
<p><strong>A per-facade solar model.</strong> Each shutter decides on its own, from its room temperature and the sun's position on its facade. The orientations come from the land registry, cross-checked against a month of temperature readings set beside the sun's path. The same work traced where the office heat came from, and a ceiling fan tuned to the room temperature came out of it. It then picked out the phase of the electrical panel that could still take a load. Both answers contradicted my first calculation. The details are in <a target="_blank" rel="noopener noreferrer" href="/posts/not-the-sun">the last episode of the series</a>.</p>
<p>These are hours of analysis that pay off once. Nobody spends a weekend correlating thirty days of temperature against solar azimuth to tune six shutters. They were not hard to finish. They were too expensive to start.</p>
<blockquote><p>Before I start an idea, one question is left: is this worth being true?</p></blockquote>

<h2>What the house picked up along the way</h2>
<p>Over the same period, the house gained these use cases:</p>
<ul>
<li>A <strong>floor plan</strong> in the dashboard, with twelve temperatures placed where the rooms actually are.</li>
<li>An <strong>away mode</strong> that arms itself once both phones have been gone for ten minutes: water heater off, camera surveillance widened, a notification on return.</li>
<li>A <strong>silent-shutter alert</strong> that warns if any of the six stops answering for thirty minutes, and warns again when it comes back.</li>
<li>A <strong>ventilation alert</strong> for the office, firing when outside drops two degrees below the room.</li>
<li>A <strong>per-phase consumption view</strong> on the three-phase meter, with the big loads identified one by one.</li>
</ul>
<p>None of these five is remarkable, and none would have justified a Saturday on its own. They exist because none of them cost a Saturday.</p>

<h2>The interaction I had not imagined</h2>
<p>The house speaks. Thirteen announcements a day, from wake-up to bedtime, on living-room and bedroom speakers. The early versions went out at the right time, at the right volume, and nobody moved.</p>
<p>The wake-up is the clearest example. The first version announced, then started the music. My son does not like being woken by a voice. The sequence was flipped the same day — music first, volume ramping up over eighty seconds, the instruction laid over the top at the end. Three iterations in one day, until the ceiling volume felt right.</p>
<p>When the cost of a change falls to almost nothing, you start tuning things you would never have opened.</p>
<blockquote><p>A house becomes something you adjust by feel, same-day, in small strokes.</p></blockquote>

<h2>What still belongs to humans</h2>
<p>The list is short and it is stable.</p>
<p><strong>Cutting the power.</strong> The only cure for a wedged application stack is a power cycle. I learned that "I reset it" and "the module lost power" are two different claims. It took three attempts to find the right breaker.</p>
<p><strong>Refereeing the agent.</strong> On that same shutter, it announced "the radio stage is dead, replace the hardware" four minutes before the module came back on its own. The reasoning held up. What it lacked was waiting another ten minutes. An agent moves fast, including toward a wrong answer, and nothing in its tone flags the difference.</p>
<p><strong>Observing.</strong> I told it a bedroom faced south-south-east. The resulting maths left the shutter open all morning while the room sat in full sun. It took looking at the room to catch the error.</p>
<p><strong>Deciding what the house imposes.</strong> An agent optimises what you hand it to optimise. It has no way of knowing that a fixed-time television cut is an end-of-day ritual rather than a school-night constraint, or that Friday does not deserve an exception. I twice proposed rationalising that calendar. Twice the right answer was no.</p>

<h2>What I am taking away</h2>
<ul>
<li><strong>Count what did not exist.</strong> A before-and-after only shows the old tasks, done faster. It misses everything I would never have started.</li>
<li><strong>A heterogeneous fleet is where an agent pays off most.</strong> Nine ecosystems means nine sets of documentation and nine ways of lying about their own health.</li>
<li><strong>Go through the API, never the files.</strong> A service that manages its own configuration will rewrite it. Everything described here went through the server's public interface, which makes every change reversible.</li>
<li><strong>Prefer unavailable to wrong.</strong> My outdoor sensor declares itself unavailable as soon as it drifts more than 5 °C from the forecast. It freezes decisions instead of corrupting them.</li>
<li><strong>Write the alerts that are missing.</strong> A shutter sat offline for three days and nothing told me. The group calling it every morning skipped the absent member without raising an error.</li>
<li><strong>Half of this build was writing.</strong> An automation that changes nobody's behaviour does not exist.</li>
</ul>
<p>The fleet will not converge. In five years there will still be a proprietary bridge, an infrared remote and a bulb refusing its own network. But the school-holiday sensor has been running for two days, and that switch is one I will never flip by hand again.</p>
<p><strong>Read the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Ten Years of Home Automation Alone. One Year With an Agent</a> — the inventory, ten years of sediment, and a measurement of what changed. <a target="_blank" rel="noopener noreferrer" href="/posts/daily-rhythm">I Changed the Evening Schedule Three Times in One Week</a> — the house that holds the shape of the day. <a target="_blank" rel="noopener noreferrer" href="/posts/no-choices">I Took the Choices Out</a> — thirteen spoken announcements, and why the audio was never the problem. <a target="_blank" rel="noopener noreferrer" href="/posts/not-the-sun">My Office Sits at 29 °C at Night</a> — six shutters deciding on their own, and what the model told me not to do.</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'HomeAssistantConstellation',
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
