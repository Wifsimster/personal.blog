<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'ten-years-of-home-automation',
  date: '2026-09-20',
  tags: ['Homelab', 'Home-Assistant', 'DIY', 'AI']
}

const frenchContent: PostContent = {
  title: "Dix ans de domotique tout seul, un an avec un agent",
  description: "État des lieux d'une installation domotique de dix ans : de Jeedom et des ESP8266 flashés à la main jusqu'à 87 appareils sur neuf écosystèmes. Ce que j'ai construit seul, ce qui est arrivé depuis que je travaille avec un agent, et les deux exemples qui résument la différence.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Mon dernier billet de domotique date d'avril 2016 : une sonde <abbr title="Capteur de pression et de température de Bosch, communiquant en I2C">BMP180</abbr> sur un <abbr title="Microcontrôleur Wi-Fi bon marché, très répandu chez les bricoleurs">ESP8266</abbr>, remontée dans <abbr title="Logiciel de domotique français, concurrent historique de Home Assistant">Jeedom</abbr>. Dix ans plus tard la maison compte 87 appareils sur neuf écosystèmes, 929 entités et 75 automatisations. Ce billet ouvre une série sur ce que l'IA change en domotique, vu depuis une installation réelle. Il pose l'inventaire, raconte comment on en arrive là un week-end à la fois, et mesure ce qui a bougé depuis que je travaille avec un agent. Deux exemples portent la différence. Deux enceintes <abbr title="Fabricant d'enceintes connectées, pilotables sur le réseau local">Sonos</abbr> livrées un mercredi, intégrées et câblées à treize annonces de routine le lendemain. Et un visiophone dont l'appel ne sortait par aucune intégration, récupéré via un pont maison de 225 lignes.</p></div>
<hr>
<p>Dix ans plus tard, on va reparler de domotique ici.</p>
<p>Le dernier billet sur le sujet date d'avril 2016. Un capteur de luminosité sur ESP8266, remonté dans Jeedom. Entre-temps il y a eu une maison de 1970 achetée en 2019, une pièce rénovée par an jusqu'en 2025, et une installation qui a grossi sans que j'en écrive une ligne.</p>
<p>Cette fois, le sujet n'est pas le montage. C'est ce que l'IA change dans ce domaine, vu depuis un cas précis, le mien. Pas un pilote d'entreprise, pas une démonstration de salon. Une maison de famille, un parc hétérogène qu'aucun standard n'a réduit, et dix ans d'habitudes de bricoleur.</p>
<p>Ce premier épisode pose l'état des lieux. Ce qu'il y a dans la maison, comment ça s'est empilé, et ce que plus d'un an de travail avec un agent a changé à un chantier que je menais seul.</p>

<h2>L'époque du fer à souder</h2>
<p>Le premier billet domotique de ce blog date de février 2014 : piloter des prises <abbr title="Marque française de prises et interrupteurs radio 433 MHz, courants en grande surface de bricolage">Chacon</abbr> depuis un <abbr title="Nano-ordinateur à bas coût, très utilisé en domotique et en électronique de loisir">Raspberry Pi</abbr>. Ensuite un <abbr title="Éclairage d'ambiance projeté derrière l'écran et synchronisé avec l'image, popularisé par Philips">Ambilight</abbr> en <abbr title="Circuit de bandeau LED adressable, piloté en SPI, chaque LED réglable indépendamment">WS2801</abbr>, puis un second en <abbr title="Bandeau LED adressable sur un seul fil de données, successeur répandu du WS2801">WS2812b</abbr> piloté par un <abbr title="Carte microcontrôleur compacte, appréciée pour piloter des bandeaux de LED">Teensy</abbr>. En 2016, six billets d'affilée sur l'ESP8266 — le flashage, la communication sans fil, un afficheur <abbr title="Bus série à deux fils, standard pour relier capteurs et afficheurs à un microcontrôleur">I2C</abbr>, une sonde de température, un capteur de luminosité, et un distributeur de croquettes.</p>
<p>Tout passait par Jeedom. Chaque capteur était une carte à souder, un firmware à compiler, un script à écrire. Un montage occupait un week-end entier, et je documentais le week-end suivant.</p>
<p>Puis la maison a changé. Achat en 2019, rénovation pièce par pièce jusqu'en 2025, et un déménagement de l'installation vers Home Assistant quelque part au milieu. Le matériel a suivi les travaux plutôt que l'inverse. Un module de volet quand la chambre a été refaite, une prise pilotée quand le salon a été ouvert, des thermomètres quand j'ai voulu comprendre pourquoi le bureau était invivable en août.</p>
<p>Cette méthode a une signature reconnaissable. L'installation avance par à-coups, au rythme des travaux, et elle traîne derrière elle une liste de choses à faire « quand j'aurai le temps ». Cette liste, je l'ai toujours.</p>

<h2>Ce qu'il y a dans la maison aujourd'hui</h2>
<p>Le relevé brut du registre d'appareils, ce matin.</p>
<svg viewBox="0 0 640 472" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagramme en barres du registre d'appareils de la maison : 87 appareils répartis sur neuf écosystèmes différents, dont 35 en Zigbee, 9 en Matter et 8 en Wi-Fi propriétaire Yeelight ; aucun standard ne couvre plus de 40 % du parc." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">87 APPAREILS · RELEVÉ DU 20/09/2026</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Neuf écosystèmes, un seul toit.</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">
<text x="32" y="115">Zigbee (ZHA)</text>
<text x="32" y="147">Matter</text>
<text x="32" y="179">Wi-Fi Yeelight</text>
<text x="32" y="211">Shelly (HTTP local)</text>
<text x="32" y="243">Téléphones (Companion)</text>
<text x="32" y="275">eWeLink (cloud Sonoff)</text>
<text x="32" y="307">Caméras (Protect, ONVIF)</text>
<text x="32" y="339">Sonos (SSDP)</text>
<text x="32" y="371">HomeKit (HAP)</text>
<text x="32" y="403">Broadlink (IR / 433 MHz)</text>
<text x="32" y="435">Ponts et services</text>
</g>
<g fill="currentColor" fill-opacity="0.42" stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="232" y="100" width="340" height="20" rx="6"></rect>
<rect x="232" y="132" width="87" height="20" rx="6" fill="var(--diagram-accent)" fill-opacity="1"></rect>
<rect x="232" y="164" width="78" height="20" rx="6"></rect>
<rect x="232" y="196" width="58" height="20" rx="6"></rect>
<rect x="232" y="228" width="49" height="20" rx="6"></rect>
<rect x="232" y="260" width="29" height="20" rx="6"></rect>
<rect x="232" y="292" width="29" height="20" rx="6"></rect>
<rect x="232" y="324" width="19" height="20" rx="6"></rect>
<rect x="232" y="356" width="19" height="20" rx="6"></rect>
<rect x="232" y="388" width="10" height="20" rx="6"></rect>
<rect x="232" y="420" width="126" height="20" rx="6"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.9">
<text x="582" y="115">35</text>
<text x="329" y="147" fill="var(--diagram-accent)" opacity="1">9</text>
<text x="320" y="179">8</text>
<text x="300" y="211">6</text>
<text x="291" y="243">5</text>
<text x="271" y="275">3</text>
<text x="271" y="307">3</text>
<text x="261" y="339">2</text>
<text x="261" y="371">2</text>
<text x="252" y="403">1</text>
<text x="368" y="435">13</text>
</g>
<text x="32" y="464" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Relevé réel du registre, pas une cible d'architecture.</text>
</svg>
<p>Derrière ces 87 appareils : 929 entités, 75 automatisations, 43 intégrations, 14 pièces déclarées. Le cœur du parc est en <abbr title="Réseau maillé radio basse consommation, 2,4 GHz">Zigbee</abbr>. Le reste est une longue traîne qui ne disparaîtra pas : un pont Somfy qui ne parle que <abbr title="Protocole d'accessoires domotique d'Apple">HomeKit</abbr>, huit ampoules Wi-Fi d'un constructeur chinois, une télécommande infrarouge pour la porte de l'atelier, des caméras en <abbr title="Standard ouvert d'interface pour caméras IP">ONVIF</abbr>, un compteur triphasé <abbr title="Modules de mesure et de commande électrique en Wi-Fi, pilotables en HTTP local">Shelly</abbr>, un moteur de synthèse vocale en conteneur.</p>
<p>Il faut dire aussi ce qui ne marche pas, sinon l'inventaire est de la publicité. 250 entités sur 929 sont actuellement indisponibles ou inconnues. La majorité est normale. Les ampoules Wi-Fi sont coupées à l'interrupteur mural, et certains appareils sont saisonniers. Le reste est de la dette — des doublons d'anciens appairages, des capteurs à pile vides, un volet que le pont Somfy a perdu en août.</p>
<blockquote><p>Une installation domotique de dix ans n'est pas un système. C'est une sédimentation.</p></blockquote>

<h2>Ce qui a changé, et de combien</h2>
<p>Home Assistant horodate les automatisations créées depuis son interface. Leur identifiant est un temps Unix. 42 des 75 en portent un. Les 33 autres viennent de fichiers <abbr title="Format de fichier de configuration lisible, utilisé par Home Assistant">YAML</abbr> et ne sont pas datables de cette façon.</p>
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparaison du rythme de création d'automatisations : environ une par mois entre février 2024 et août 2025, contre vingt-deux pour le seul mois de septembre 2026." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">AUTOMATISATIONS CRÉÉES PAR MOIS</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Dix-huit mois, puis un mois.</text>
<text x="32" y="112" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">Février 2024 → août 2025</text>
<rect x="32" y="120" width="22" height="28" rx="8" fill="currentColor" fill-opacity="0.42" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="66" y="139" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.8">1,1 par mois · 20 automatisations en 18 mois</text>
<text x="32" y="176" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">Septembre 2026</text>
<rect x="32" y="184" width="440" height="28" rx="8" fill="var(--diagram-accent)" fill-opacity="1" stroke="var(--diagram-accent)" stroke-opacity="0.55" stroke-width="1"></rect>
<text x="482" y="203" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.9">22 en un mois</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">
<text x="32" y="248">42 des 75 automatisations portent un identifiant horodaté. Les autres</text>
<text x="32" y="270">viennent de fichiers YAML et ne sont pas datables de cette façon.</text>
</g>
</svg>
<p>Le rapport est de vingt contre un. Il faut le lire pour ce qu'il est : une mesure du rythme de création, pas de la valeur créée. Vingt-deux automatisations en un mois, ce n'est pas vingt fois mieux qu'une par mois. C'est surtout la preuve qu'un lot de sujets attendait depuis longtemps et qu'ils sont passés d'un coup.</p>
<p>Ce qui suit est plus parlant que la courbe.</p>

<h2>Deux enceintes, un mercredi</h2>
<p>Deux Sonos <abbr title="Enceinte connectée de Sonos, pilotable sur le réseau local ; la déclinaison SL est dépourvue de micro">Era 100</abbr> livrées le 16 septembre. Le lendemain elles étaient dans Home Assistant, nommées par pièce, rattachées au salon et à la chambre, et branchées sur treize annonces de routine.</p>
<p>Ce n'est pas du plug and play, et c'est là que se joue la différence. L'intégration Sonos ne découvre rien par elle-même. Elle s'abonne au composant <abbr title="Simple Service Discovery Protocol — découverte d'appareils UPnP sur le réseau local">SSDP</abbr>, qui balaie le réseau toutes les dix minutes. Entre la création de l'entrée et la première entité, il ne se passe rien. Seul, j'aurais passé la soirée à soupçonner le multicast, puis j'aurais basculé sur une configuration manuelle par adresse IP — la mauvaise réponse à un problème qui n'existait pas.</p>
<p>Ce n'est pas moi qui l'ai trouvé. L'agent est allé lire le code de l'intégration, a constaté qu'elle se contentait de s'abonner, et a conclu qu'il fallait attendre le prochain balayage. Le diagnostic a pris le temps de poser la question.</p>
<p>Le même chantier a buté sur trois autres détails du même genre. La langue de la synthèse vocale doit être <code>fr_FR</code> et pas <code>fr</code>, sans quoi le serveur renvoie une erreur 500. Une annonce sur une Sonos récente passe par une interface séparée, et l'état de l'enceinte ne bouge donc pas pendant qu'elle parle — j'ai cru trois fois que rien ne partait. Et le script d'annonce, écrit avant l'achat, visait des identifiants devinés qui n'ont jamais existé ; un filtre le rendait silencieusement inoffensif au lieu de lever une erreur.</p>
<p>Aucun de ces points n'est difficile. Chacun coûte une soirée quand on le découvre seul, et il y en avait quatre dans le même chantier.</p>

<h2>Un visiophone qui ne parlait à personne</h2>
<p>La platine de rue du portail est une Dahua VTO2202F. Elle a une caméra, un micro, un bouton d'appel, et une intégration ONVIF qui remonte l'image. L'appui sur le bouton, lui, ne sort par aucune intégration. L'ONVIF ne le voit pas.</p>
<p>L'événement existe pourtant. Il circule dans un flux propriétaire de la platine, <code>eventManager.cgi?action=attach</code>, qu'il faut maintenir ouvert et décoder soi-même. Le résultat est un pont de 225 lignes de Python, dans son propre conteneur, qui s'authentifie sur la platine, écoute ce flux, republie sur <abbr title="Message Queuing Telemetry Transport — bus de messages léger">MQTT</abbr> et s'annonce en découverte automatique auprès de Home Assistant.</p>
<p>Ce que ça donne côté maison : quand quelqu'un sonne, les deux téléphones reçoivent une notification prioritaire avec la vue de la platine, un bouton « Ouvrir » et un bouton « Voir ». Appuyer sur « Ouvrir » déclenche l'ouverture. En parallèle, les Sonos annoncent l'appel dans le salon.</p>
<p>Entre « la sonnette ne remonte nulle part » et un pont qui tourne dans son conteneur, il s'est passé une soirée. L'agent a identifié le flux dans la documentation du constructeur, écrit le pont, câblé la découverte automatique et traité les cas d'erreur. J'ai fourni les identifiants de la platine et validé le résultat.</p>
<p>Ce pont contient un garde-fou dont je suis content. Si la platine oublie d'envoyer la fin d'appel, un délai de deux minutes remet le capteur à zéro. Sans lui, un appel manqué laisserait la maison en « quelqu'un sonne » indéfiniment.</p>
<blockquote><p>Je n'aurais jamais écrit ce pont. Pas parce que c'est difficile, mais parce que je n'aurais jamais commencé à lire la documentation d'un flux propriétaire pour une sonnette.</p></blockquote>

<h2>Ce que ça n'a pas changé</h2>
<p>Le matériel reste du matériel. Un module Zigbee qui perd son réseau se répare en coupant le disjoncteur, et il m'a fallu trois tentatives pour trouver le bon. Un accessoire Somfy perdu par sa box se ré-appaire avec la télécommande, debout dans la chambre. Une ampoule qui a oublié son Wi-Fi veut cinq coupures secteur rapides.</p>
<p>Le jugement reste aussi du côté humain, et pas seulement pour les décisions techniques. La coupure de télévision de 19 h 30 n'est pas une optimisation de consommation. C'est un repère de fin de journée pour un enfant.</p>
<p>Enfin, l'installation ne s'est pas simplifiée. Elle a gagné des intégrations, des conteneurs et des dépendances. Un parc qui grossit plus vite reste un parc qui grossit, et la série suivante de billets parlera surtout de ce que ça coûte.</p>

<h2>La suite</h2>
<p>Cette série suit un plan simple : un épisode par couche du problème.</p>
<ol>
<li><strong>Cet épisode</strong> — l'inventaire, dix ans d'empilement, et la mesure de ce qui a changé.</li>
<li><strong><a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">Le prix d'essayer</a></strong> — pourquoi le gain se mesure sur les chantiers qu'on ne commençait pas, pas sur ceux qu'on faisait déjà.</li>
<li><strong><a target="_blank" rel="noopener noreferrer" href="/posts/daily-rhythm">Le rythme de la journée</a></strong> — portail, télévision, volets et calendrier scolaire officiel : la maison porte le cadre, et le calendrier a changé trois fois en une semaine.</li>
<li><strong><a target="_blank" rel="noopener noreferrer" href="/posts/no-choices">La maison qui parle</a></strong> — concevoir treize annonces vocales pour un enfant de sept ans, ce qui est un problème de rédaction avant d'être un problème technique.</li>
<li><strong><a target="_blank" rel="noopener noreferrer" href="/posts/not-the-sun">Le thermique d'une maison de 1970</a></strong> — six volets qui décident seuls, le cadastre, et le bureau à 29 °C en pleine nuit.</li>
</ol>

<h2>Ce que j'en retiens</h2>
<ul>
<li><strong>Dix ans d'installation produisent une sédimentation, pas une architecture.</strong> Chaque couche a été posée pour une bonne raison, aucune n'a été posée en pensant aux suivantes.</li>
<li><strong>Le parc hétérogène est la norme, pas l'accident.</strong> Neuf écosystèmes chez un bricoleur qui choisit au cas par cas, c'est le résultat attendu, et aucun standard ne l'a réduit.</li>
<li><strong>Le blocage n'a jamais été la compétence.</strong> Le pont visiophone, j'aurais su l'écrire en 2016. Je ne l'aurais pas commencé.</li>
<li><strong>Publier l'inventaire oblige à compter ce qui ne marche pas.</strong> 250 entités indisponibles sur 929 : la moitié est normale, l'autre est une liste de choses à réparer que je n'avais jamais écrite.</li>
</ul>
<p>Le prochain épisode part de la question que celui-ci laisse ouverte : si la compétence n'était pas le frein, qu'est-ce qui l'était.</p>`
}

const englishContent: PostContent = {
  title: 'Ten Years of Home Automation Alone. One Year With an Agent.',
  description: 'A survey of a ten-year home automation build: from Jeedom and hand-flashed ESP8266 boards to 87 devices across nine ecosystems. What I built alone, what arrived once I started working with an agent, and the two examples that carry the difference.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> My last home automation post here is dated April 2016: a <abbr title="Bosch pressure and temperature sensor, speaking I2C">BMP180</abbr> probe on an <abbr title="A cheap Wi-Fi microcontroller, widely used by hobbyists">ESP8266</abbr>, reporting into <abbr title="French home automation software, a long-standing Home Assistant rival">Jeedom</abbr>. Ten years on, the house holds 87 devices across nine ecosystems, 929 entities and 75 automations. This post opens a series on what AI changes in home automation, seen from one real installation. It sets out the inventory, tells how you get there one weekend at a time, and measures what moved once I started working with an agent. Two examples carry the difference. Two <abbr title="Maker of networked speakers, controllable over the local network">Sonos</abbr> speakers delivered on a Wednesday, integrated and wired into thirteen routine announcements the next day. And a door entry panel whose call event reached no integration at all, recovered through a 225-line bridge written from scratch.</p></div>
<hr>
<p>Ten years on, we are going to talk about home automation here again.</p>
<p>The last post on the subject is dated April 2016. A light sensor on an ESP8266, reporting into Jeedom. In between there was a 1970s house bought in 2019, one room renovated a year until 2025, and an installation that grew without a single line written about it here.</p>
<p>This time the subject is not the build. It is what AI changes in this field, seen from one specific case, mine. Not an enterprise pilot, not a trade-show demo. A family house, a heterogeneous fleet no standard has reduced, and ten years of hobbyist habits.</p>
<p>This first episode sets out the state of things. What is in the house, how it piled up, and what over a year of working with an agent changed about a project I had been running alone.</p>

<h2>The soldering-iron years</h2>
<p>The first home automation post on this blog is from February 2014: driving <abbr title="French brand of 433 MHz radio sockets and switches, common in DIY stores">Chacon</abbr> mains sockets from a <abbr title="Low-cost single-board computer, widely used in home automation and hobby electronics">Raspberry Pi</abbr>. Then an <abbr title="Ambient lighting projected behind a screen and synchronised with the picture, popularised by Philips">Ambilight</abbr> on <abbr title="Addressable LED strip chip driven over SPI, every LED individually controllable">WS2801</abbr>, then a second one on <abbr title="Addressable LED strip on a single data wire, the widespread successor to the WS2801">WS2812b</abbr> driven by a <abbr title="Compact microcontroller board, favoured for driving LED strips">Teensy</abbr>. In 2016, six posts in a row on the ESP8266 — flashing it, wireless comms, an <abbr title="Two-wire serial bus, the standard way to attach sensors and displays to a microcontroller">I2C</abbr> display, a temperature probe, a light sensor, and a cat food dispenser.</p>
<p>All of it ran through Jeedom. Every sensor was a board to solder, a firmware to compile, a script to write. One build took a whole weekend, and I documented it the weekend after.</p>
<p>Then the house changed. Bought in 2019, renovated room by room until 2025, with the installation moving to Home Assistant somewhere in the middle. Hardware followed the building work rather than the other way round. A shutter module when the bedroom was redone, a smart plug when the living room was opened up, thermometers when I wanted to know why the office was unlivable in August.</p>
<p>That method leaves a recognisable signature. The installation advances in bursts, at the pace of the renovation, and it drags along a list of things to do "when I have time". I still have that list.</p>

<h2>What is in the house today</h2>
<p>The raw device registry, this morning.</p>
<svg viewBox="0 0 640 472" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of the house device registry: 87 devices spread across nine different ecosystems, with 35 on Zigbee, 9 on Matter and 8 on proprietary Yeelight Wi-Fi; no single standard covers more than 40 percent of the fleet." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">87 DEVICES · SNAPSHOT, 20 SEP 2026</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Nine ecosystems. One roof.</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">
<text x="32" y="115">Zigbee (ZHA)</text>
<text x="32" y="147">Matter</text>
<text x="32" y="179">Yeelight Wi-Fi</text>
<text x="32" y="211">Shelly (local HTTP)</text>
<text x="32" y="243">Phones (Companion)</text>
<text x="32" y="275">eWeLink (Sonoff cloud)</text>
<text x="32" y="307">Cameras (Protect, ONVIF)</text>
<text x="32" y="339">Sonos (SSDP)</text>
<text x="32" y="371">HomeKit (HAP)</text>
<text x="32" y="403">Broadlink (IR / 433 MHz)</text>
<text x="32" y="435">Bridges and services</text>
</g>
<g fill="currentColor" fill-opacity="0.42" stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="232" y="100" width="340" height="20" rx="6"></rect>
<rect x="232" y="132" width="87" height="20" rx="6" fill="var(--diagram-accent)" fill-opacity="1"></rect>
<rect x="232" y="164" width="78" height="20" rx="6"></rect>
<rect x="232" y="196" width="58" height="20" rx="6"></rect>
<rect x="232" y="228" width="49" height="20" rx="6"></rect>
<rect x="232" y="260" width="29" height="20" rx="6"></rect>
<rect x="232" y="292" width="29" height="20" rx="6"></rect>
<rect x="232" y="324" width="19" height="20" rx="6"></rect>
<rect x="232" y="356" width="19" height="20" rx="6"></rect>
<rect x="232" y="388" width="10" height="20" rx="6"></rect>
<rect x="232" y="420" width="126" height="20" rx="6"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.9">
<text x="582" y="115">35</text>
<text x="329" y="147" fill="var(--diagram-accent)" opacity="1">9</text>
<text x="320" y="179">8</text>
<text x="300" y="211">6</text>
<text x="291" y="243">5</text>
<text x="271" y="275">3</text>
<text x="271" y="307">3</text>
<text x="261" y="339">2</text>
<text x="261" y="371">2</text>
<text x="252" y="403">1</text>
<text x="368" y="435">13</text>
</g>
<text x="32" y="464" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">A real registry reading, not a target architecture.</text>
</svg>
<p>Behind those 87 devices: 929 entities, 75 automations, 43 integrations, 14 declared rooms. The core of the fleet is <abbr title="Low-power 2.4 GHz mesh radio protocol">Zigbee</abbr>. The rest is a long tail that is not going away: a Somfy bridge that only speaks <abbr title="Apple's local smart-home accessory protocol">HomeKit</abbr>, eight Wi-Fi bulbs from a Chinese vendor, an infrared remote for the workshop door, cameras on <abbr title="Open interface standard for IP cameras">ONVIF</abbr>, a three-phase <abbr title="Wi-Fi electrical metering and switching modules, driven over local HTTP">Shelly</abbr> meter, a text-to-speech engine in a container.</p>
<p>The broken parts belong in the inventory too, otherwise this is advertising. 250 entities out of 929 are currently unavailable or unknown. Most of that is expected. The Wi-Fi bulbs are switched off at the wall, and some devices are seasonal. The rest is debt — duplicates left by old pairings, flat battery sensors, a shutter the Somfy bridge lost in August.</p>
<blockquote><p>A ten-year home automation build is not a system. It is a sediment.</p></blockquote>

<h2>What changed, and by how much</h2>
<p>Home Assistant timestamps automations created through its interface. The identifier is a Unix time. 42 of the 75 carry one. The other 33 come from <abbr title="A readable configuration file format, used by Home Assistant">YAML</abbr> files and cannot be dated this way.</p>
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of the rate at which automations were created: about one a month between February 2024 and August 2025, against twenty-two in the single month of September 2026." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">AUTOMATIONS CREATED PER MONTH</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Eighteen months, then one month.</text>
<text x="32" y="112" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">February 2024 → August 2025</text>
<rect x="32" y="120" width="22" height="28" rx="8" fill="currentColor" fill-opacity="0.42" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="66" y="139" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.8">1.1 a month · 20 automations in 18 months</text>
<text x="32" y="176" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">September 2026</text>
<rect x="32" y="184" width="440" height="28" rx="8" fill="var(--diagram-accent)" fill-opacity="1" stroke="var(--diagram-accent)" stroke-opacity="0.55" stroke-width="1"></rect>
<text x="482" y="203" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.9">22 in one month</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">
<text x="32" y="248">42 of the 75 automations carry a timestamped identifier. The rest</text>
<text x="32" y="270">come from YAML files and cannot be dated this way.</text>
</g>
</svg>
<p>The ratio is twenty to one. It should be read for what it is: a measure of how fast things get created, not of value created. Twenty-two automations in a month is not twenty times better than one a month. Mostly it shows that a batch of subjects had been waiting a long time, and that they all went through at once.</p>
<p>What follows says more than the curve does.</p>

<h2>Two speakers, one Wednesday</h2>
<p>Two Sonos <abbr title="A networked Sonos speaker, controllable over the local network; the SL variant has no microphone">Era 100</abbr> delivered on 16 September. The next day they were in Home Assistant, named per room, attached to the living room and the bedroom, and wired into thirteen routine announcements.</p>
<p>It is not plug and play, and that is where the difference shows. The Sonos integration discovers nothing on its own. It subscribes to the <abbr title="Simple Service Discovery Protocol — UPnP device discovery on the local network">SSDP</abbr> component, which sweeps the network every ten minutes. Between creating the entry and the first entity appearing, nothing happens. Alone, I would have spent the evening suspecting broken multicast, then fallen back to a manual per-IP configuration — the wrong answer to a problem that did not exist.</p>
<p>I did not find that. The agent went and read the integration's source, saw that it only subscribes, and concluded we had to wait for the next sweep. The diagnosis took as long as asking the question.</p>
<p>The same build hit three more details of the same kind. The speech engine needs <code>fr_FR</code> rather than <code>fr</code>, or the server returns a 500. An announcement on a recent Sonos goes through a separate interface, so the speaker's reported state does not move while it is talking — I concluded three times that nothing was playing. And the announcement script, written before the hardware arrived, targeted guessed identifiers that never existed; a filter quietly made it harmless instead of raising an error.</p>
<p>None of these is hard. Each one costs an evening when you meet it alone, and there were four of them in the same build.</p>

<h2>A door entry panel that talked to nobody</h2>
<p>The street panel at the gate is a Dahua VTO2202F. It has a camera, a microphone, a call button, and an ONVIF integration that carries the video. The button press reaches no integration at all. ONVIF does not see it.</p>
<p>The event does exist. It travels in a proprietary stream on the panel, <code>eventManager.cgi?action=attach</code>, which you have to hold open and decode yourself. The result is a 225-line Python bridge in its own container that authenticates against the panel, listens to that stream, republishes over <abbr title="Message Queuing Telemetry Transport — lightweight message bus">MQTT</abbr>, and announces itself to Home Assistant through auto-discovery.</p>
<p>What that gives the house: when someone rings, both phones get a high-priority notification carrying the panel's view, an "Open" button and a "View" button. Pressing "Open" triggers the door. At the same time, the Sonos announce the call in the living room.</p>
<p>Between "the doorbell reaches nothing" and a bridge running in its own container, one evening passed. The agent identified the stream in the manufacturer's documentation, wrote the bridge, wired up auto-discovery and handled the error cases. I supplied the panel's credentials and checked the result.</p>
<p>The bridge carries one guard I am happy with. If the panel forgets to send the end-of-call event, a two-minute timeout resets the sensor. Without it, one missed hang-up would leave the house stuck on "someone is ringing" forever.</p>
<blockquote><p>I would never have written that bridge. Not because it is hard, but because I would never have started reading a proprietary stream's documentation for a doorbell.</p></blockquote>

<h2>What did not change</h2>
<p>Hardware is still hardware. A Zigbee module that loses its network is fixed by throwing a breaker, and it took me three attempts to find the right one. A Somfy accessory dropped by its bridge is re-paired with the remote, standing in the bedroom. A bulb that forgot its Wi-Fi wants five fast power cycles.</p>
<p>Judgment stays on the human side too, and not only for technical calls. The 7:30 p.m. television cut is not an energy optimisation. It is an end-of-day landmark for a child.</p>
<p>And the installation did not get simpler. It gained integrations, containers and dependencies. A fleet that grows faster is still a fleet that grows, and the next posts in this series are mostly about what that costs.</p>

<h2>Where this goes</h2>
<p>The series follows one plan: an episode per layer of the problem.</p>
<ol>
<li><strong>This episode</strong> — the inventory, ten years of sediment, and a measurement of what changed.</li>
<li><strong><a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">The cost of trying</a></strong> — why the win shows up on the projects you never started, not on the ones you already did.</li>
<li><strong><a target="_blank" rel="noopener noreferrer" href="/posts/daily-rhythm">The shape of the day</a></strong> — gate, television, shutters and the official school calendar: the house holds the frame, and the schedule changed three times in one week.</li>
<li><strong><a target="_blank" rel="noopener noreferrer" href="/posts/no-choices">The house that speaks</a></strong> — designing thirteen spoken announcements for a seven-year-old, which is a writing problem before it is a technical one.</li>
<li><strong><a target="_blank" rel="noopener noreferrer" href="/posts/not-the-sun">Thermal behaviour of a 1970s house</a></strong> — six shutters deciding on their own, the land registry, and the office at 29 °C in the middle of the night.</li>
</ol>

<h2>What I am taking away</h2>
<ul>
<li><strong>Ten years of building produces sediment, not architecture.</strong> Every layer was laid for a good reason, and none of them was laid with the next one in mind.</li>
<li><strong>A heterogeneous fleet is the norm, not an accident.</strong> Nine ecosystems in the hands of a hobbyist who picks case by case is the expected outcome, and no standard has reduced it.</li>
<li><strong>The blocker was never skill.</strong> I could have written the door entry bridge in 2016. I would not have started it.</li>
<li><strong>Publishing an inventory forces you to count what is broken.</strong> 250 unavailable entities out of 929: half of that is normal, the other half is a repair list I had never written down.</li>
</ul>
<p>The next episode starts from the question this one leaves open: if skill was not the brake, what was.</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'DixAnsDeDomotique',
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
