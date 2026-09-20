<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'cost-of-trying',
  date: '2026-09-27',
  tags: ['Homelab', 'AI', 'Home-Assistant', 'Analysis'],
  draft: true
}

const frenchContent: PostContent = {
  title: "L'IA n'a pas automatisé ma maison. Elle a supprimé le prix d'essayer.",
  description: "Six mois de domotique menée avec un agent qui pilote l'API de Home Assistant : 87 appareils, neuf écosystèmes, 75 automatisations. Le gain n'est pas le temps gagné sur ce que je faisais déjà. C'est la liste des idées que je n'aurais jamais tentées, et les diagnostics qui traversent cinq systèmes en une session.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Ma maison fédère neuf écosystèmes qui ne se parlent pas : <abbr title="Réseau maillé radio basse consommation, 2,4 GHz">Zigbee</abbr>, <abbr title="Standard d'interopérabilité domotique porté par la Connectivity Standards Alliance">Matter</abbr>, <abbr title="Protocole d'accessoires domotique d'Apple">HomeKit</abbr>, du Wi-Fi propriétaire, un cloud constructeur, du <abbr title="Simple Service Discovery Protocol — découverte d'appareils UPnP sur le réseau local">SSDP</abbr>, de l'infrarouge, du <abbr title="Message Queuing Telemetry Transport — bus de messages léger">MQTT</abbr> et une API ouverte de l'Éducation nationale. 87 appareils, 929 entités, 75 automatisations. Depuis six mois, tout passe par un agent qui pilote l'API du serveur, lit les journaux et applique les correctifs. Le gain ne porte pas sur le temps passé à ce que je faisais déjà. Il porte sur les idées que je ne commençais pas, parce qu'elles coûtaient trop cher à lancer. Et sur des diagnostics qui traversent cinq systèmes en une soirée. Restent deux choses à faire soi-même : couper un disjoncteur, et décider ce que la maison doit imposer.</p></div>
<hr>
<p>Pendant deux ans, une corvée est restée sur ma liste sans jamais en sortir.</p>
<p>Mes routines du matin réveillent mon fils, ouvrent les volets et le portail. Elles ne doivent pas tourner pendant les vacances scolaires. Le garde-fou existait : un interrupteur que je basculais à la main, seize semaines par an. Je l'oubliais une fois sur deux.</p>
<p>La version propre était évidente. Le calendrier scolaire officiel est un jeu de données ouvert. Il suffit d'un capteur <abbr title="Interface web qui expose des données sur HTTP">REST</abbr>, d'un filtre sur l'académie, d'un capteur binaire qui teste si la date du jour tombe dans une période, et d'une synchronisation. Une demi-journée de travail, peut-être. Je ne l'ai jamais faite.</p>
<p>Elle a été faite en une session, testée de bout en bout, le 18 septembre. C'est cette bascule que je veux décrire, pas le gadget.</p>

<h2>Pourquoi l'hétérogénéité change le calcul</h2>
<p>L'inventaire complet est dans <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">l'épisode précédent</a> : 87 appareils, 929 entités, 43 intégrations. Un seul chiffre compte ici. Matter devait être le standard qui range tout ça, et chez moi il pilote neuf appareils sur quatre-vingt-sept. Le reste est une longue traîne d'exceptions qui ne disparaîtra jamais : un pont Somfy qui ne parle que HomeKit, une télécommande infrarouge pour la porte de l'atelier, huit ampoules Wi-Fi d'un constructeur chinois, des caméras en ONVIF.</p>
<p>C'est le point de départ. Sur une installation à un seul protocole, un agent n'a pas grand-chose à apporter. Ici, la moindre idée traverse trois systèmes et deux formats de configuration.</p>
<blockquote><p>Home Assistant n'est pas un produit domotique. C'est une couche de fédération — et le coût d'une fédération, c'est le contexte qu'il faut tenir en tête avant chaque modification.</p></blockquote>

<h2>La friction n'a jamais été la syntaxe</h2>
<p>Je croyais que le coûteux, en domotique, c'était d'écrire le YAML. En six mois je n'en ai presque pas écrit, et le temps est passé ailleurs : à retrouver le contexte. Quelles automatisations touchent cette entité. Laquelle de mes trois listes de jours doit rester synchronisée avec les deux autres. Quel garde-fou, écrit il y a huit mois, va réécraser la commande que je viens d'envoyer.</p>
<p>Exemple vécu, avant l'agent. Ma routine de coupure de la télévision « ne marchait qu'une seconde ». Ce n'était ni la routine ni la prise : une automatisation de garde-fou sans aucune condition, écrite des mois plus tôt, rallumait la prise dix secondes après chaque coupure. La réponse était dans le journal de l'entité, une ligne en dessous. Je ne l'avais jamais ouvert.</p>
<p>Lire soixante-quinze automatisations et croiser leurs références, un agent le fait mieux que moi un dimanche soir.</p>
<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparaison illustrative du coût d'une même idée de domotique : menée à la main elle occupe toute la longueur de la barre, entre recherche de contexte, écriture et vérification ; menée avec un agent il n'en reste qu'un cinquième, et le reste est la part qui disparaît." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">UNE MÊME IDÉE, DEUX PRIX · ILLUSTRATIF</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">L'idée est la même. Le prix, non.</text>
<text x="32" y="112" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">À la main</text>
<rect x="32" y="120" width="540" height="28" rx="8" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="32" y="176" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">Avec un agent</text>
<rect x="32" y="184" width="112" height="28" rx="8" fill="currentColor" fill-opacity="0.42" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<path d="M 572 148 L 572 232 L 144 232 L 144 214" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 358 232 L 358 244" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"></path>
<text x="358" y="266" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" font-weight="650" text-anchor="middle">retrouver le contexte</text>
<text x="32" y="292" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Proportions illustratives — la forme de ce qui disparaît, pas un chronométrage.</text>
</svg>
<p>Le reste suit. Les treize annonces vocales de la maison ont été réécrites en une passe, par un script qui applique le même correctif à chaque appel. À la main, c'est treize formulaires. Les volumes du matin ont été baissés sur cinq automatisations d'un coup. Le mercredi a été ajouté à trois listes de jours qui doivent rester cohérentes, sans quoi la télévision se coupe sans jamais se rallumer.</p>
<p>Aucune de ces tâches n'est difficile. Elles attendaient depuis des mois parce qu'elles sont pénibles, et rien d'autre.</p>

<h2>Les idées qui passent enfin sous le seuil</h2>
<p>La liste de ce que j'accepte d'essayer s'est élargie. Ce changement-là n'apparaît sur aucun relevé d'activité.</p>
<p><strong>Le calendrier scolaire.</strong> Un capteur REST sur le jeu de données officiel, un capteur binaire qui teste si le jour courant tombe dans une période, une synchronisation toutes les six heures. Il gouverne d'un coup les routines du matin, du soir et du coucher. Seize semaines de corvée annuelle supprimées par une intégration qui ne pilote aucun appareil.</p>
<p><strong>Un modèle solaire par façade.</strong> Chaque volet décide seul, à partir de la température de sa pièce et de la position du soleil sur sa façade. Les orientations ne viennent pas d'une boussole mais du cadastre, recoupé avec trente jours de corrélation entre température et azimut solaire. Le bureau a même son masque d'horizon : le soleil n'entre réellement qu'à quatorze degrés d'élévation, cinquante minutes après le lever.</p>
<p><strong>Le bureau à 29 °C.</strong> Ce même bureau est à 29 °C en pleine nuit, soit trois degrés de plus que le salon, sans aucun soleil. La cause est une baie informatique qui dissipe 331 W en continu. Le volet n'a jamais été le levier. Sans l'analyse, j'aurais passé l'été à régler un barème solaire sur un problème qui n'était pas solaire.</p>
<p><strong>Le tableau électrique.</strong> Installation triphasée. Une première analyse en puissance désignait la phase A comme la plus chargée, à 96 % de sa capacité horaire. En raisonnant en ampères sur trente jours, c'est l'inverse : A plafonne à 13,5 A quand B monte à 26,7 A. Les pointes de B sont plus brèves et passaient sous le radar. La bonne phase où ajouter une charge était exactement celle qu'il fallait soulager selon le premier calcul.</p>
<p>Ces quatre chantiers sont des heures d'analyse qui ne servent qu'une fois. Personne ne passe un week-end à corréler trente jours de température avec l'azimut solaire pour régler six volets. Ils n'étaient pas difficiles à finir, ils étaient trop chers à commencer.</p>
<blockquote><p>La question n'est plus « est-ce que je sais le faire ». C'est « est-ce que ça vaut la peine d'être vrai ».</p></blockquote>

<h2>Les diagnostics qui traversent cinq systèmes</h2>
<p>Le 10 septembre, mon éclairage extérieur passe indisponible. C'est une prise Matter en Wi-Fi.</p>
<p>Le ping répond à 100 %. Le contrôleur Wi-Fi affiche <span style="white-space:nowrap">−47 dBm</span>, satisfaction 100, aucune anomalie. L'association date d'avant la panne. Tout est vert. Et la prise ne répond plus du tout.</p>
<svg viewBox="0 0 640 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagnostic d'un nœud Matter tombé : la radio Wi-Fi, l'association et la couche IP rapportent toutes un état parfaitement sain, alors que l'annonce mDNS du service Matter est absente ; seule cette dernière ligne signale réellement la panne." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">UNE PRISE MATTER · 10 SEPTEMBRE 2026</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Trois voyants verts, une panne.</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">
<text x="32" y="123">Radio Wi-Fi</text>
<text x="32" y="163">Association</text>
<text x="32" y="203">Couche IP</text>
<text x="32" y="243">Matter (mDNS)</text>
<text x="32" y="283">Home Assistant</text>
</g>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="196" y="104" width="412" height="28" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="196" y="144" width="412" height="28" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="196" y="184" width="412" height="28" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="196" y="224" width="412" height="28" rx="8" fill="currentColor" fill-opacity="0.4"></rect>
<rect x="196" y="264" width="412" height="28" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
</g>
<rect x="196" y="224" width="4" height="28" rx="2" fill="currentColor" fill-opacity="0.75"></rect>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.8">
<text x="212" y="123">−47 dBm, satisfaction 100</text>
<text x="212" y="163">associée, aucune anomalie, aucun événement</text>
<text x="212" y="203">ping : 100 % de réponses, zéro perte</text>
<text x="212" y="243" font-weight="650" opacity="1">aucune annonce _matter._tcp</text>
<text x="212" y="283">les 7 entités du nœud indisponibles</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">
<text x="32" y="330">Les trois premières lignes sont restées vertes pendant toute la panne.</text>
<text x="32" y="352">Seul remède : couper et rebrancher physiquement la prise.</text>
</g>
</svg>
<p>Sur ces prises, la pile réseau et la pile applicative tombent indépendamment. Ni le ping ni le signal ne le disent. La seule preuve est l'annonce <abbr title="Multicast DNS — annonce de services sur le réseau local, sans serveur central">mDNS</abbr> du service, listée depuis l'intérieur du conteneur. Quatre outils différents dans une seule séance, pour aboutir à une conclusion d'une ligne.</p>
<p>Mes huit ampoules Wi-Fi posaient la même question, en pire. L'explication confortable — « elles sont coupées à l'interrupteur mural » — était vraie pour la moitié d'entre elles. Pour les autres, il a fallu interroger la base du contrôleur Wi-Fi : un identifiant de réseau pointant vers un SSID supprimé des mois plus tôt, 86 échecs d'authentification en 24 heures sur une seule ampoule, et trois points d'accès d'appairage diffusés par des lampes que je croyais éteintes.</p>
<p>La télécommande infrarouge de l'atelier, je la vivais comme « aléatoire ». Mesurée sur trois jours, elle s'est figée 318 fois, une fois toutes les neuf minutes en médiane. La porte était donc injoignable un quart du temps. Elle est aujourd'hui sondée toutes les trente secondes et réveillée automatiquement, sans coupure de courant.</p>
<blockquote><p>Un appareil qui répond au ping n'est pas un appareil qui fonctionne. C'est un appareil qui répond au ping.</p></blockquote>
<p>Ces trois diagnostics ne demandent aucune intelligence particulière. Ils demandent de la patience, un accès à cinq systèmes, et la disponibilité d'aller vérifier une hypothèse à trois heures du matin. Je n'avais pas ça.</p>

<h2>L'interaction que je n'avais pas imaginée</h2>
<p>Rien de ce qui suit ne relève d'un protocole.</p>
<p>La maison parle. Treize annonces par jour, du lever au coucher, sur des enceintes de salon et de chambre. Les premières versions sortaient au bon moment, au bon volume, et personne ne bougeait.</p>
<p>Elles ont été réécrites d'un coup selon une grille de huit règles — le prénom en tête, une seule action, aucun choix proposé. Cette grille est le sujet de <a target="_blank" rel="noopener noreferrer" href="/posts/no-choices">l'épisode 4</a> ; ce qui compte ici est le coût de l'opération. Treize messages corrigés en une passe, par un script qui applique le même correctif à chaque appel.</p>
<p>Le réveil a suivi le même chemin. Version initiale : la voix, puis la musique. Mon fils n'aime pas être réveillé par une voix. La séquence a été inversée le jour même — musique d'abord, montée progressive du volume sur quatre-vingts secondes, la consigne par-dessus à la fin. Trois itérations dans la même journée, jusqu'au bon plafond de volume.</p>
<p>Quand le coût d'une modification tombe à presque rien, on se met à régler des choses qu'on n'aurait jamais ouvertes. Une maison cesse d'être une installation et devient un objet qu'on ajuste au ressenti, le jour même, par petites touches.</p>
<blockquote><p>Ce n'est plus de l'automatisation. C'est de l'itération de conception sur un lieu de vie.</p></blockquote>

<h2>Ce qui reste aux humains</h2>
<p>La liste est courte et elle est stable.</p>
<p><strong>Couper le courant.</strong> Le seul remède à une pile applicative figée est un cycle secteur. J'ai appris que « j'ai fait un reset » et « le module a perdu son alimentation » sont deux affirmations différentes. Il a fallu trois tentatives avant de tomber sur le bon disjoncteur.</p>
<p><strong>Arbitrer l'agent.</strong> Sur ce même volet, il a annoncé « l'étage radio est mort, matériel à remplacer » quatre minutes avant que le module ne revienne tout seul. Le raisonnement tenait debout. Il lui manquait d'attendre dix minutes de plus. Un agent avance vite, y compris vers une mauvaise réponse, et rien dans son ton ne le signale.</p>
<p><strong>Observer.</strong> J'ai annoncé une chambre orientée sud-sud-est. Le calcul qui en découlait laissait le volet ouvert toute la matinée alors que la pièce était en plein soleil. La correction n'est pas venue du cadastre, elle est venue de la pièce.</p>
<p><strong>Décider ce que la maison impose.</strong> Un agent optimise ce qu'on lui donne à optimiser. Il n'a aucun moyen de savoir qu'une coupure de télévision à heure fixe est un rituel de fin de journée et non une contrainte scolaire, ni que le vendredi ne mérite pas d'exception. J'ai proposé deux fois de rationaliser ce calendrier. Deux fois, la bonne réponse était non.</p>

<h2>Ce que j'en retiens</h2>
<ul>
<li><strong>Le gain ne se mesure pas sur les tâches que vous faisiez déjà.</strong> Il se mesure sur celles que vous ne commenciez pas. C'est la partie invisible d'un avant-après.</li>
<li><strong>Un parc hétérogène est l'endroit où le levier est le plus fort.</strong> Neuf écosystèmes, c'est neuf documentations et neuf façons de mentir sur son propre état de santé.</li>
<li><strong>Passer par l'API, jamais par les fichiers.</strong> Un service qui gère sa configuration la réécrit. Tout ce qui est décrit ici est passé par l'interface publique du serveur, ce qui rend chaque modification annulable.</li>
<li><strong>Préférer indisponible à faux.</strong> Mon capteur extérieur se déclare indisponible dès qu'il s'écarte de plus de 5 °C de la prévision. Il gèle les décisions au lieu de les fausser.</li>
<li><strong>Écrire les alertes qui manquent.</strong> Un volet est resté hors ligne trois jours sans que rien ne me prévienne. Le groupe qui l'appelle chaque matin n'échouait pas : il ignorait le membre absent.</li>
<li><strong>La moitié de ce chantier a été de la rédaction.</strong> Une automatisation qui ne change le comportement de personne n'existe pas.</li>
</ul>
<p>Le parc ne convergera pas. Dans cinq ans il y aura toujours un pont propriétaire, une télécommande infrarouge et une ampoule qui refuse son réseau. Mais le capteur de vacances scolaires tourne depuis deux jours, et cet interrupteur-là, je ne le rebasculerai plus jamais à la main.</p>
<p><strong>Lire la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Ma dernière sonde ESP8266 date de 2016</a> — l'inventaire de l'installation, dix ans d'empilement, et la mesure de ce qui a changé. <a target="_blank" rel="noopener noreferrer" href="/posts/nothing-failed">Rien n'a échoué</a> — neuf protocoles, neuf définitions du mot « en ligne », et les pannes qui ne remontent nulle part.</p>`
}

const englishContent: PostContent = {
  title: "AI Didn't Automate My House. It Deleted the Cost of Trying.",
  description: 'Six months of home automation run through an agent driving the Home Assistant API: 87 devices, nine ecosystems, 75 automations. The win is not the time saved on what I already did. It is the list of ideas I would never have started, and the diagnostics that cross five systems in one sitting.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> My house federates nine ecosystems that do not talk to each other: <abbr title="Low-power 2.4 GHz mesh radio protocol">Zigbee</abbr>, <abbr title="Smart-home interoperability standard from the Connectivity Standards Alliance">Matter</abbr>, <abbr title="Apple's local smart-home accessory protocol">HomeKit</abbr>, proprietary Wi-Fi, a vendor cloud, <abbr title="Simple Service Discovery Protocol — UPnP device discovery on the local network">SSDP</abbr>, infrared, <abbr title="Message Queuing Telemetry Transport — lightweight message bus">MQTT</abbr>, and an open API from the French education ministry. 87 devices, 929 entities, 75 automations. For six months everything has gone through an agent that drives the server API, reads the logs and applies the fixes. The win is not the time saved on work I already did. It is the work I never started, because starting cost too much. Plus diagnostics that cross five systems in one evening. Two things still need a human: throwing a breaker, and deciding what the house should impose.</p></div>
<hr>
<p>For two years, one chore sat on my list and never left it.</p>
<p>My morning routines wake my son, open the shutters and open the gate. They must not run during school holidays. The guard existed: a switch I flipped by hand, sixteen weeks a year. I forgot half the time.</p>
<p>The clean version was obvious. The official school calendar is an open dataset. All it takes is a <abbr title="A web interface exposing data over HTTP">REST</abbr> sensor, a filter on the right region, a binary sensor testing whether today falls inside a holiday period, and a sync job. Half a day of work, maybe. I never did it.</p>
<p>It was built in one sitting, tested end to end, on 18 September. That shift is what I want to describe, not the gadget.</p>

<h2>Why heterogeneity changes the maths</h2>
<p>The full inventory is in <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">the previous episode</a>: 87 devices, 929 entities, 43 integrations. One number matters here. Matter was supposed to be the standard that tidied this up, and in my house it drives nine devices out of eighty-seven. The rest is a long tail of exceptions that will never go away: a Somfy bridge that only speaks HomeKit, an infrared remote for the workshop door, eight Wi-Fi bulbs from a Chinese vendor, cameras on ONVIF.</p>
<p>That is the starting point. On a single-protocol setup, an agent has little to add. Here, the smallest idea crosses three systems and two configuration formats.</p>
<blockquote><p>Home Assistant is not a smart-home product. It is a federation layer — and the price of a federation is the context you must hold in your head before every change.</p></blockquote>

<h2>The friction was never the syntax</h2>
<p>I used to think the expensive part of home automation was writing the YAML. In six months I have barely written any, and the time went somewhere else: recovering context. Which automations touch this entity. Which of my three day-lists has to stay in sync with the other two. Which guard, written eight months ago, is about to overwrite the command I just sent.</p>
<p>A real example, from before the agent. My television cut-off routine "only worked for one second". It was neither the routine nor the plug: a guard automation with no conditions at all, written months earlier, switched the plug back on ten seconds after every cut. The answer was in the entity's logbook, one line below. I had never opened it.</p>
<p>Reading seventy-five automations and cross-referencing them is work an agent does better than I do on a Sunday night.</p>
<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustrative comparison of the cost of the same home-automation idea: done by hand it fills the whole bar, between recovering context, writing and verifying; done with an agent only a fifth remains, and the rest is the part that disappears." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">ONE IDEA, TWO PRICES · ILLUSTRATIVE</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Same idea. Not the same price.</text>
<text x="32" y="112" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">By hand</text>
<rect x="32" y="120" width="540" height="28" rx="8" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="32" y="176" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">With an agent</text>
<rect x="32" y="184" width="112" height="28" rx="8" fill="currentColor" fill-opacity="0.42" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<path d="M 572 148 L 572 232 L 144 232 L 144 214" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 358 232 L 358 244" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"></path>
<text x="358" y="266" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" font-weight="650" text-anchor="middle">recovering the context</text>
<text x="32" y="292" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Illustrative proportions — the shape of what disappears, not a stopwatch reading.</text>
</svg>
<p>The rest follows. The thirteen spoken announcements were rewritten in a single pass, by a script applying the same patch to every call site. By hand that is thirteen forms. Morning volumes were lowered across five automations at once. Wednesday was added to three day-lists that have to stay consistent, or the television cuts off and never comes back on.</p>
<p>None of these tasks is hard. They had been waiting for months because they are tedious, and for no other reason.</p>

<h2>The ideas that finally clear the bar</h2>
<p>The list of things I am willing to attempt got wider. That change shows up on no activity log.</p>
<p><strong>The school calendar.</strong> A REST sensor on the official dataset, a binary sensor testing whether today falls inside a holiday period, a sync every six hours. It now governs the morning, evening and bedtime routines in one move. Sixteen weeks of annual chore removed by an integration that drives no device at all.</p>
<p><strong>A per-facade solar model.</strong> Each shutter decides on its own, from its room temperature and the sun's position on its facade. The orientations did not come from a compass but from the land registry, cross-checked against thirty days of correlation between temperature and solar azimuth. The office even has a horizon mask: sunlight only really enters at fourteen degrees of elevation, fifty minutes after sunrise.</p>
<p><strong>The office at 29 °C.</strong> That same office sits at 29 °C in the middle of the night, three degrees above the living room, with no sun involved. The cause is a server rack dissipating 331 W continuously. The shutter was never the lever. Without the analysis I would have spent the summer tuning a solar curve against a problem that was not solar.</p>
<p><strong>The electrical panel.</strong> Three-phase supply. A first pass in watts flagged phase A as the most loaded, at 96% of its hourly capacity. Reasoning in amps over thirty days flips it: A peaks at 13.5 A while B reaches 26.7 A. B's peaks are shorter and slipped under an hourly maximum. The right phase to add load to was precisely the one the first calculation told me to relieve.</p>
<p>These four are hours of analysis that pay off once. Nobody spends a weekend correlating thirty days of temperature against solar azimuth to tune six shutters. They were not hard to finish. They were too expensive to start.</p>
<blockquote><p>The question is no longer "can I build this". It is "is this worth being true".</p></blockquote>

<h2>Diagnostics that cross five systems</h2>
<p>On 10 September my outdoor lighting goes unavailable. It runs on a Wi-Fi Matter plug.</p>
<p>Ping answers 100% of the time. The Wi-Fi controller reports <span style="white-space:nowrap">−47 dBm</span>, satisfaction 100, zero anomalies. The association predates the outage. Everything is green. And the plug answers nothing at all.</p>
<svg viewBox="0 0 640 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagnosing a dead Matter node: the Wi-Fi radio, the association and the IP layer all report a perfectly healthy state, while the mDNS announcement for the Matter service is missing; only that last row actually reveals the outage." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">ONE MATTER PLUG · 10 SEP 2026</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Three green lights. One dead node.</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">
<text x="32" y="123">Wi-Fi radio</text>
<text x="32" y="163">Association</text>
<text x="32" y="203">IP layer</text>
<text x="32" y="243">Matter (mDNS)</text>
<text x="32" y="283">Home Assistant</text>
</g>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="196" y="104" width="412" height="28" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="196" y="144" width="412" height="28" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="196" y="184" width="412" height="28" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="196" y="224" width="412" height="28" rx="8" fill="currentColor" fill-opacity="0.4"></rect>
<rect x="196" y="264" width="412" height="28" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
</g>
<rect x="196" y="224" width="4" height="28" rx="2" fill="currentColor" fill-opacity="0.75"></rect>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.8">
<text x="212" y="123">−47 dBm, satisfaction 100</text>
<text x="212" y="163">associated, no anomaly, no event logged</text>
<text x="212" y="203">ping: 100% replies, zero loss</text>
<text x="212" y="243" font-weight="650" opacity="1">no _matter._tcp announcement</text>
<text x="212" y="283">all 7 entities of the node unavailable</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">
<text x="32" y="330">The first three rows stayed green for the entire outage.</text>
<text x="32" y="352">The only fix was pulling the plug out of the wall by hand.</text>
</g>
</svg>
<p>On these plugs the network stack and the application stack die independently. Neither ping nor signal strength shows it. The only evidence is the <abbr title="Multicast DNS — service announcement on the local network, with no central server">mDNS</abbr> service announcement, listed from inside the container. Four different tools in one sitting, to reach a one-line conclusion.</p>
<p>My eight Wi-Fi bulbs posed the same question, worse. The comfortable explanation — "they are switched off at the wall" — was true for half of them. For the rest it took querying the Wi-Fi controller's own database: a network id pointing at an SSID deleted months earlier, 86 authentication failures in 24 hours on a single bulb, and three pairing access points broadcast by lamps I believed were off.</p>
<p>The workshop door's infrared remote, I experienced as random. Measured over three days, it froze 318 times, a median of once every nine minutes. So the door was unreachable a quarter of the time. It is now probed every thirty seconds and revived automatically, with no power cycle.</p>
<blockquote><p>A device that answers ping is not a working device. It is a device that answers ping.</p></blockquote>
<p>None of these three diagnoses needs special intelligence. They need patience, access to five systems, and the willingness to go test a hypothesis at three in the morning. I did not have that.</p>

<h2>The interaction I had not imagined</h2>
<p>Nothing in this last part is a protocol problem.</p>
<p>The house speaks. Thirteen announcements a day, from wake-up to bedtime, on living-room and bedroom speakers. The early versions went out at the right time, at the right volume, and nobody moved.</p>
<p>They were rewritten in one pass against a grid of eight rules — name first, one action, no choices offered. That grid is the subject of <a target="_blank" rel="noopener noreferrer" href="/posts/no-choices">episode 4</a>; what matters here is what the operation cost. Thirteen messages fixed in a single pass, by a script applying the same patch at every call site.</p>
<p>The wake-up went the same way. First version: voice, then music. My son does not like being woken by a voice. The sequence was flipped the same day — music first, volume ramping up over eighty seconds, the instruction laid over the top at the end. Three iterations in one day, until the ceiling volume felt right.</p>
<p>When the cost of a change falls to almost nothing, you start tuning things you would never have opened. A house stops being an installation and becomes something you adjust by feel, same-day, in small strokes.</p>
<blockquote><p>This is not automation anymore. It is design iteration on a place where people live.</p></blockquote>

<h2>What still belongs to humans</h2>
<p>The list is short and it is stable.</p>
<p><strong>Cutting the power.</strong> The only cure for a wedged application stack is a power cycle. I learned that "I reset it" and "the module lost power" are two different claims. It took three attempts to find the right breaker.</p>
<p><strong>Refereeing the agent.</strong> On that same shutter, it announced "the radio stage is dead, replace the hardware" four minutes before the module came back on its own. The reasoning held up. What it lacked was waiting another ten minutes. An agent moves fast, including toward a wrong answer, and nothing in its tone flags the difference.</p>
<p><strong>Observing.</strong> I described a bedroom as facing south-south-east. The maths that followed left the shutter open all morning while the room sat in full sun. The correction did not come from the land registry. It came from the room.</p>
<p><strong>Deciding what the house imposes.</strong> An agent optimises what you hand it to optimise. It has no way of knowing that a fixed-time television cut is an end-of-day ritual rather than a school-night constraint, or that Friday does not deserve an exception. I twice proposed rationalising that calendar. Twice the right answer was no.</p>

<h2>What I am taking away</h2>
<ul>
<li><strong>The win is not measured on the tasks you already did.</strong> It is measured on the ones you never started. That is the invisible half of any before-and-after.</li>
<li><strong>A heterogeneous fleet is where the leverage is highest.</strong> Nine ecosystems means nine sets of documentation and nine ways of lying about their own health.</li>
<li><strong>Go through the API, never the files.</strong> A service that manages its own configuration will rewrite it. Everything described here went through the server's public interface, which makes every change reversible.</li>
<li><strong>Prefer unavailable to wrong.</strong> My outdoor sensor declares itself unavailable as soon as it drifts more than 5 °C from the forecast. It freezes decisions instead of corrupting them.</li>
<li><strong>Write the alerts that are missing.</strong> A shutter sat offline for three days and nothing told me. The group calling it every morning was not failing: it was skipping the absent member.</li>
<li><strong>Half of this build was writing.</strong> An automation that changes nobody's behaviour does not exist.</li>
</ul>
<p>The fleet will not converge. In five years there will still be a proprietary bridge, an infrared remote and a bulb refusing its own network. But the school-holiday sensor has been running for two days, and that switch is one I will never flip by hand again.</p>
<p><strong>Read the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">My Last ESP8266 Probe Was 2016</a> — the inventory, ten years of sediment, and a measurement of what changed. <a target="_blank" rel="noopener noreferrer" href="/posts/nothing-failed">Nothing Failed</a> — nine protocols, nine definitions of "online", and the outages that surface nowhere.</p>`
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
