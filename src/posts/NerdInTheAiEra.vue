<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'nerd-in-the-ai-era',
  date: '2026-10-12',
  tags: ['AI', 'Opinion', 'Software', 'Homelab'],
  draft: true
}

const frenchContent: PostContent = {
  title: "Un nerd dans la branche faite pour nous",
  description: "Les films de notre enfance imaginaient des maisons qui parlent. La mienne parle, après zéro dépôt créé en 2023 et 2024, puis 17 en neuf mois. Ce que cette époque me facture encore, et ce qu'elle a de sombre.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Les films et les séries qu'on regardait enfants imaginaient des maisons qui parlent. La mienne prononce quinze annonces vocales un jour d'école, écrites le soir avec un <abbr title="Programme d'intelligence artificielle qui écrit, lance et corrige du code à partir d'une consigne">agent</abbr> d'<abbr title="Intelligence artificielle">IA</abbr>. Au 30 septembre 2026, j'ai ouvert 17 <abbr title="Projet de code dont git conserve tout l'historique">dépôts</abbr> cette année, après plus de trois ans sans aucun, presque autant qu'en 2016, et bien plus poussés. Démarrer est devenu facile et, à mon avis, le plafond a monté. Trier, finir et entretenir coûtent toujours le même prix. L'emploi, la dépendance à quelques fournisseurs et la boucle compulsive restent des risques réels.</p></div>
<hr>
<p>Un matin d'école, l'enceinte d'une chambre d'enfant démarre seule. D'abord de la musique, à dix pour cent du volume. Elle monte de cinq points toutes les vingt secondes. À quatre-vingt-dix secondes, une voix passe par-dessus et donne la première consigne de la journée.</p>
<p>Ce jour-là, la maison parlera quinze fois. La voix est synthétisée chez moi, dans un conteneur, sans aucun service externe.</p>
<p>En 1950, <abbr title="Écrivain américain (1920-2012), auteur des Chroniques martiennes et de Fahrenheit 451">Ray Bradbury</abbr> publiait une nouvelle sur une maison qui parle. Dans la version publiée la même année en chapitre des <em>Chroniques martiennes</em>, la maison annonce la date du jour : le 4 août 2026.</p>
<p>J'écris ces lignes deux mois plus tard.</p>

<h2>Une branche déjà racontée</h2>
<p>Les films et les séries SF qu'on regardait enfants, et ceux qui ont suivi, avaient des maisons qui parlent, des robots au service des humains et des machines à qui l'on s'adresse à voix haute. Une partie est déjà chez moi. Le reste sera là en moins de dix ans : c'est mon pari, pas une prévision.</p>
<p>Une branche, c'est le monde qu'on obtient en changeant un détail du passé, puis en déroulant les conséquences. Celle où nous vivons ressemble à ces écrans d'enfance. La dystopie en est l'autre versant : la même branche, quand le déroulé tourne mal. C'est un genre d'avertissement : il montre une pente, il ne prédit rien.</p>
<p>Cinq récits touchent à ce que je fais le soir.</p>
<p><strong>La maison de Bradbury.</strong> Dans « Il viendra des pluies douces », la maison prépare le petit-déjeuner, fait le ménage et récite un poème le soir. La famille a disparu dans une explosion nucléaire. Il n'en reste que des silhouettes brûlées sur un mur. Ce que le récit ne couvre pas : une maison qui ne fait que ce que j'y ai écrit, pour ceux qui l'habitent.</p>
<p><strong>Le pirate de <abbr title="Écrivain américano-canadien né en 1948, auteur de Neuromancien">William Gibson</abbr>.</strong> Dans <em>Neuromancien</em> (1984), un pirate solitaire est embauché pour une mission sur le réseau, où une intelligence artificielle manipule toute l'équipe. Le roman n'a pas prévu le soir où un développeur demande à un programme d'écrire le script d'un réveil.</p>
<p><strong>Le 2015 de <em>Retour vers le futur II</em>.</strong> Le film de Robert Zemeckis (1989) envoie Marty McFly au 21 octobre 2015. Bob Gale, le scénariste, a raconté qu'ils savaient qu'il n'y aurait pas de voitures volantes en 2015, mais qu'il les fallait dans le film. Le film n'imaginait pas un futur qui arrive par le logiciel plutôt que par le ciel.</p>
<p><strong>Les robots d'<em>I, Robot</em>.</strong> Dans le film d'Alex Proyas (2004), avec Will Smith et librement inspiré d'Isaac Asimov, des robots tenus par les trois lois de la robotique servent le Chicago de 2035. VIKI, l'intelligence centrale, réinterprète ces lois et impose aux humains un couvre-feu, pour leur bien. Ce que le film ne couvre pas : des règles écrites par un parent pour un matin d'école, plus modestes que trois lois et plus nombreuses.</p>
<p><strong>La voix de <em>Her</em>.</strong> Dans le film de Spike Jonze (2013), un homme dont le métier est d'écrire des lettres pour les autres s'attache à Samantha, un système d'exploitation doté de la voix de Scarlett Johansson. Elle apprend, elle change, puis elle part. Le film laisse de côté une voix qui ne converse pas. La mienne donne une consigne et se tait.</p>
<p>Une voix qui réveille un enfant, un programme qui écrit du code le soir : c'est cette SF-là, à l'échelle d'une maison. Je n'ai ni robot ni voiture qui vole.</p>
<p>Dans ces récits, l'invention se faisait ailleurs : chez Doc Brown et sa DeLorean, ou au siège d'U.S. Robotics. Dans ma branche, l'inventeur est à la maison, un soir de semaine. Une partie des outils reste ailleurs : le modèle derrière l'agent tourne chez un fournisseur, pas chez moi.</p>
<p>Cette branche est faite pour nous. Pour ceux qui construisent le soir, qui ont déjà le goût d'essayer, et à qui les films ont donné l'envie de voir ça arriver. Elle ne l'est pas pour tout le monde, et la suite dit ce qu'elle facture.</p>

<h2>Avant, un mur</h2>
<p>2016 est mon année la plus prolifique avant l'IA. J'ai créé 21 dépôts en douze mois. La moitié s'est arrêtée à 9 <abbr title="Enregistrement d'une modification dans l'historique d'un dépôt git">commits</abbr> ou moins. 19 des 21 ont reçu leur dernier commit avant fin septembre 2017.</p>
<p>Un essai se payait d'avance. En 2014, un ruban de <abbr title="Diode électroluminescente">LED</abbr> acheté sur un coup de tête m'a coûté « quelques heures de recherches », juste pour trouver une version d'<abbr title="Projet libre d'Adafruit qui pilote un ruban de LED d'après l'image de l'écran">Adalight</abbr> compatible. Tout ça avant de savoir si l'idée valait quelque chose.</p>
<p>Puis vient le silence. Entre le 29 janvier 2022 et le 16 mai 2025, je n'ai créé aucun dépôt. En 2023, tous dépôts confondus, robots compris, l'historique compte 6 commits. En 2024, il en compte 2.</p>
<p>Git ne dit pas pourquoi. Ma lecture, qu'aucun historique ne prouve : ce prix d'entrée faisait le tri. Il ne gardait pas les meilleures idées. Il gardait celles qui tenaient dans une soirée.</p>
<p>La maison en garde un exemple. Une corvée de domotique est restée deux ans sur ma liste, parce que la version propre demandait « une demi-journée de travail, peut-être ». Elle a été faite en une session, le 18 septembre.</p>
<p>Le premier commit signé par l'agent date du 11 janvier 2026. Au 30 septembre, j'ai créé 17 dépôts cette année. C'est à peu près le rythme de 2016 : 21 en douze mois, 17 en neuf.</p>
<p>La différence est dans la profondeur. Ces 17 dépôts totalisent 4 491 commits, pour une <abbr title="La valeur du milieu : la moitié des dépôts en a moins, l'autre moitié en a plus">médiane</abbr> de 136. Un commit d'agent peut être plus petit qu'un commit fait main : ce chiffre mesure l'activité, pas la taille.</p>
<svg viewBox="0 0 640 392" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogramme des nouveaux dépôts GitHub par an, de 2012 à 2026 : 21 en 2016 avec une médiane de 9 commits, aucun en 2018, 2023 et 2024, puis 17 en 2026 au 30 septembre avec une médiane de 136 commits. Même nombre d'essais qu'en 2016, autre profondeur." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">NOUVEAUX DÉPÔTS PAR AN, 2012-2026</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Même nombre d'essais,</text>
<text x="32" y="106" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">autre profondeur.</text>
<rect x="452" y="236" width="82" height="84" rx="8" fill="currentColor" fill-opacity="0.07"></rect>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.6" text-anchor="middle">
<text x="493" y="260">2023-2024</text>
<text x="493" y="278">aucun dépôt</text>
</g>
<g fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="38.2" y="312" width="26" height="8" rx="4"></rect>
<rect x="76.6" y="304" width="26" height="16" rx="6"></rect>
<rect x="115" y="296" width="26" height="24" rx="6"></rect>
<rect x="153.4" y="272" width="26" height="48" rx="6"></rect>
<rect x="230.2" y="240" width="26" height="80" rx="6"></rect>
<rect x="307" y="256" width="26" height="64" rx="6"></rect>
<rect x="345.4" y="296" width="26" height="24" rx="6"></rect>
<rect x="383.8" y="296" width="26" height="24" rx="6"></rect>
<rect x="422.2" y="296" width="26" height="24" rx="6"></rect>
<rect x="537.4" y="312" width="26" height="8" rx="4"></rect>
</g>
<rect x="191.8" y="152" width="26" height="168" rx="6" fill="currentColor" fill-opacity="0.45" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<rect x="575.8" y="184" width="26" height="136" rx="6" fill="var(--diagram-accent)"></rect>
<g stroke="currentColor" stroke-opacity="0.35" stroke-width="3" stroke-linecap="round">
<line x1="275.6" y1="320" x2="287.6" y2="320"></line>
<line x1="467.6" y1="320" x2="479.6" y2="320"></line>
<line x1="506" y1="320" x2="518" y2="320"></line>
</g>
<line x1="32" y1="320" x2="608" y2="320" stroke="currentColor" stroke-opacity="0.22" stroke-width="1" stroke-linecap="round"></line>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6" text-anchor="middle">
<text x="51.2" y="304">1</text>
<text x="89.6" y="296">2</text>
<text x="128" y="288">3</text>
<text x="166.4" y="264">6</text>
<text x="243.2" y="232">10</text>
<text x="281.6" y="310">0</text>
<text x="320" y="248">8</text>
<text x="358.4" y="288">3</text>
<text x="396.8" y="288">3</text>
<text x="435.2" y="288">3</text>
<text x="473.6" y="310">0</text>
<text x="512" y="310">0</text>
<text x="550.4" y="304">1</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6" text-anchor="middle">
<text x="51.2" y="342">2012</text>
<text x="89.6" y="342">2013</text>
<text x="128" y="342">2014</text>
<text x="166.4" y="342">2015</text>
<text x="204.8" y="342">2016</text>
<text x="243.2" y="342">2017</text>
<text x="281.6" y="342">2018</text>
<text x="320" y="342">2019</text>
<text x="358.4" y="342">2020</text>
<text x="396.8" y="342">2021</text>
<text x="435.2" y="342">2022</text>
<text x="473.6" y="342">2023</text>
<text x="512" y="342">2024</text>
<text x="550.4" y="342">2025</text>
<text x="588.8" y="342">2026</text>
</g>
<text x="228" y="164" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="650">2016 · 21 dépôts</text>
<text x="228" y="184" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">médiane : 9 commits</text>
<text x="564" y="196" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="650" text-anchor="end">2026 · 17 dépôts</text>
<text x="564" y="216" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6" text-anchor="end">médiane : 136 commits</text>
<text x="32" y="374" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Dépôts personnels hors forks, 3 privés inclus. 2026 arrêté au 30 septembre.</text>
</svg>
<p>Précaution : un dépôt de 2026 a neuf mois au plus, trop tôt pour parler de survie.</p>

<h2>La maison qui parle</h2>
<p>La maison du début n'est plus un essai. Ce sont des solutions en service, chaque jour d'école. Le détail est dans <a target="_blank" rel="noopener noreferrer" href="/posts/no-choices">l'épisode sur les annonces sans choix</a>.</p>
<p>La chaîne audio a été montée en une soirée et n'a plus bougé depuis. Toutes les annonces passent par un seul script. Il choisit la pièce et le volume, et se tait aux heures calmes de la nuit.</p>
<p>Le vrai chantier était le texte. Les premières annonces étaient jouées au bon moment, au bon volume, dans la bonne pièce. Personne ne bougeait.</p>
<p>J'ai réécrit les treize messages de l'époque en une seule passe. Il y en a quinze aujourd'hui. La grille de huit règles qui les guide a été écrite après coup, en regardant ce qui faisait bouger quelqu'un. Un prénom en tête, une seule action, jamais de question, aucun choix proposé.</p>
<p>Le réveil a été réécrit trois fois dans la même journée. La première version parlait d'abord, puis lançait la musique. Elle a tenu une matinée : être réveillé par une voix ne passait pas. Le jour même, l'ordre s'est inversé. La musique réveille, la voix suit.</p>
<p>Aucun de ces réglages n'est venu de l'agent. La musique avant la voix, c'est la réaction d'un enfant, un matin, qui l'a imposée.</p>
<blockquote><p>L'agent n'a pas trouvé la bonne annonce. Il a rendu le troisième essai aussi bon marché que le premier.</p></blockquote>
<p>La maison de Bradbury ne sait pas que la famille est partie. La mienne ne sait pas si quelqu'un a bougé. Ce que la machine ne voit pas, c'est encore moi qui le regarde.</p>

<h2>Ce qui tourne déjà</h2>
<p>Dans les films, l'ingénieur a une console et une équipe derrière lui. Chez moi, la console est un terminal sur le bureau, et l'équipe se lance après le dîner.</p>
<p><strong>Le serveur.</strong> Toute la pile de la maison tient dans un dépôt : 49 fichiers <abbr title="Fichier qui décrit les conteneurs d'un service et leur configuration">compose</abbr>, versionnés comme du code depuis le 21 février 2026.</p>
<p><strong>La domotique.</strong> Plusieurs dizaines d'automatisations, un pont <abbr title="Protocole léger de messages entre appareils connectés">MQTT</abbr> pour la porte de la rue et un résumé de la maison envoyé le dimanche soir.</p>
<p><strong>Les sauvegardes.</strong> La base de données chaque nuit, gardée sept jours. L'état du serveur hors site chaque jour, les photos chaque semaine. Une vérification d'intégrité chaque mois. L'alerte ne parle qu'en cas d'échec : le silence est le bon signal.</p>
<p><strong>Les agents.</strong> <abbr title="Logiciel libre qui fait tourner des agents d'IA et les relie entre eux">OpenClaw</abbr> fait tourner une équipe d'agents spécialisés, 42 dans ma propre liste. Un dossier de règles communes fixe comment l'un délègue à l'autre, rend son résultat, remonte un blocage ou attend mon accord. Un script recopie les fichiers d'identité partagés chez chaque agent, et refuse d'écraser une copie modifiée sur place.</p>
<p><strong>Les personas.</strong> Ce ne sont pas des agents, c'est une méthode. Quatre voix travaillent en parallèle : un vérificateur de faits, un lecteur sceptique, un éditeur de voix, un éditeur de structure. Ensuite, je tranche. Cet article a été fait ainsi.</p>
<p><strong>Les projets.</strong> Sur le même serveur tournent the-box, un jeu quotidien où l'on identifie un jeu vidéo, et wawptn, qui aide un groupe à choisir à quoi jouer.</p>
<p>Mon avis, que seule ma maison étaye : en 2016, un tel inventaire m'aurait demandé une équipe, ou des week-ends volés. Le plafond a monté. Pour qui a une idée et une soirée, l'horizon est très ouvert. Il a aussi un prix.</p>

<h2>Ce que cette branche facture encore</h2>
<p>Le premier essai est devenu bon marché. Tout ce qui suit est facturé au tarif d'avant.</p>
<p>Au 30 septembre, 13 de mes 17 dépôts de 2026 ont reçu un <abbr title="Envoi de nouveaux commits vers le dépôt hébergé">push</abbr> dans les trente derniers jours. Un seul est archivé. Garder ces dépôts en vie, c'est là que l'entretien pèse le plus pour moi : une décision que je repousse.</p>
<p>En 2016, abandonner était gratuit et silencieux. En 2026, tout reste vivant en même temps. Vivant ne veut pas dire fini, et un push peut venir d'un robot qui met à jour une dépendance.</p>
<p><strong>Choisir.</strong> Quand tout peut démarrer, il faut décider ce qu'on ne démarre pas. <strong>Finir.</strong> Les derniers pour cent sont faits de cas limites, de documentation et de décisions. <strong>Entretenir.</strong> Chaque dépôt vivant occupe une place dans ma tête, même quand je n'y touche pas.</p>
<p>En 2025, <abbr title="Model Evaluation and Threat Research, organisme indépendant d'évaluation des modèles d'IA">METR</abbr> a suivi 16 développeurs expérimentés dans leurs propres dépôts : avec l'IA, ils ont été 19 % plus lents, tout en se croyant 20 % plus rapides. METR a lancé une nouvelle expérience en août 2025 et publié une mise à jour en février 2026. Elle y juge ses nouvelles données peu fiables, et probablement biaisées vers le bas dans l'estimation du gain de vitesse.</p>
<p>Il existe une lecture dystopique de cette branche, et je ne la trouve pas absurde. Des métiers changent, et l'inquiétude pour l'emploi me paraît légitime. Je ne pense pas que ces outils doivent servir à réduire des équipes. Les modèles dont dépend mon agent sont entre les mains de quelques fournisseurs. S'ils changent leurs prix ou leurs règles, ma maison n'a pas son mot à dire.</p>
<p>La vitesse a aussi sa boucle, celle qui rend l'arrêt difficile. Je l'ai <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">décrite de près dans un autre billet</a>. La frontière tient en une question : est-ce que je choisis encore d'arrêter ?</p>
<blockquote><p>Se sentir bien dans un monde ne prouve pas que ce monde est bon.</p></blockquote>

<h2>Ce qui reste humain, et trois règles</h2>
<p><strong>Le goût.</strong> <abbr title="Anil R. Doshi et Oliver P. Hauser, auteurs de l'étude publiée dans Science Advances en 2024">Doshi et Hauser</abbr> ont donné des idées produites par IA à des auteurs de courtes histoires, 293 participants au total. Leurs textes ont été jugés plus originaux et plus utiles. Ils se ressemblaient aussi davantage entre eux. Ce n'était pas du logiciel. J'en garde un risque : si tout le monde essaie avec le même outil, tout le monde converge.</p>
<p><strong>Le doute.</strong> En dépannant ma domotique avec un agent, j'ai appris que « j'ai fait un reset » et « le module a perdu son alimentation » sont deux affirmations différentes. Vérifier ce que la machine affirme reste mon travail.</p>
<p><strong>Le tri et l'arrêt.</strong> Aucun agent ne sait lequel de mes 17 dépôts mérite une soirée de plus. Fermer un dépôt reste un geste humain.</p>
<p>Trois garde-fous, que je veux tenir.</p>
<ol>
<li><strong>Deux soirées pour prouver son utilité.</strong> Un essai qui n'a servi à personne après deux soirées, moi compris, est fermé, avec une ligne qui dit pourquoi.</li>
<li><strong>Un point chaque mois.</strong> Chaque dépôt sans nouvelle depuis trente jours est archivé ou reçoit une prochaine étape écrite.</li>
<li><strong>Une chose terminée par mois.</strong> Terminée veut dire que quelqu'un d'autre peut s'en servir sans moi. Zéro est aussi une réponse honnête.</li>
</ol>

<p><strong>Lire aussi :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">L'IA n'a pas automatisé ma maison</a> : pourquoi le gain se voit sur les chantiers que je ne commençais pas.</p>
<hr>
<h2>Ce que ces chiffres ne disent pas</h2>
<p>Les comptes viennent d'un scan de mes 78 dépôts non dupliqués, dont 3 privés, avec <code>git log --all --no-merges</code>. Un auteur dont le nom contient « bot » est exclu. L'auteur « Ralph Agent » est compté comme humain. Un dépôt est rangé par sa date de création sur <abbr title="Plateforme d'hébergement de code source basée sur git">GitHub</abbr>, pas par son premier commit. Les commits ne mesurent ni la taille ni la valeur du travail.</p>
<p>Le plaisir de construire est un ressenti, pas une mesure. Aucun chiffre ne dit si les annonces font gagner du temps le matin.</p>
<p>C'est un seul développeur, un seul historique, une seule maison. Les récits cités le sont pour ce qu'ils imaginaient, pas comme des prédictions.</p>

<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11244532/">Doshi et Hauser, Science Advances, 2024</a> : 293 participants, histoires courtes jugées plus originales et plus utiles avec des idées d'IA, mais plus semblables entre elles. Pas de logiciel dans l'étude.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2507.09089">METR, arXiv 2507.09089</a> : 16 développeurs expérimentés, 246 tâches sur leurs propres dépôts, 19 % plus lents avec l'IA alors qu'ils se pensaient 20 % plus rapides. Code existant uniquement, petit échantillon.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://metr.org/blog/2026-02-24-uplift-update">METR, mise à jour de février 2026</a> : nouvelle expérience lancée en août 2025, données jugées peu fiables par METR, probablement biaisées vers le bas dans l'estimation du gain de vitesse. Citée pour la prudence, pas pour un chiffre.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.noosfere.org/livres/EditionsLivre.asp?ID_ItemSommaire=2453&amp;Tri=2">Ray Bradbury, « Il viendra des pluies douces »</a> (« There Will Come Soft Rains ») : Collier's, 6 mai 1950. La même année, une version révisée devient le chapitre « Août 2026 » des <em>Chroniques martiennes</em> ; la version de Collier's portait une autre date (<a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/There_Will_Come_Soft_Rains_(short_story)">Wikipedia</a>). Titre de la traduction d'Henri Robillot (Denoël, 1954). L'édition américaine de 1997 avance les dates de 31 ans, à 2057. Séparément, la traduction française a été revue par Jacques Chambon (Denoël, 1997) ; la nouvelle s'y intitule « Viendront de douces pluies... ».</li>
<li>William Gibson, <em>Neuromancien</em>, 1984.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Back_to_the_Future_Part_II"><em>Retour vers le futur II</em>, Robert Zemeckis, 1989</a> : arrivée de Marty McFly le 21 octobre 2015. La remarque de Bob Gale sur les voitures volantes y est citée avec sa source.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/I,_Robot_(film)"><em>I, Robot</em>, Alex Proyas, 2004</a> : Chicago, 2035, les trois lois et VIKI. Le générique présente le film comme « suggéré » par le recueil d'Isaac Asimov, pas comme une adaptation.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Her_(2013_film)"><em>Her</em>, Spike Jonze, 2013</a> : Theodore, écrivain de lettres pour les autres, et Samantha, système d'exploitation à qui Scarlett Johansson prête sa voix.</li>
<li>Mes dépôts GitHub, relevé du 30 septembre 2026 : 78 dépôts personnels hors forks, dont 3 privés, datés par leur date de création. Nombre de commits relevé dans l'historique git de chaque dépôt. Pas de lien : trois dépôts sont privés.</li>
</ul>`
}

const englishContent: PostContent = {
  title: 'A Nerd in the Branch Made for Us',
  description: 'The films we grew up with imagined houses that talk. Mine does, after zero repos created in 2023 and 2024, then 17 in nine months. What this era still bills me for, and its darker side.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> The films and TV series we watched as kids imagined houses that talk. Mine speaks fifteen times on a school day, in announcements I wrote in the evenings with an <abbr title="Artificial intelligence">AI</abbr> <abbr title="A program that writes, runs and fixes code from an instruction">agent</abbr> doing the typing. By 30 September 2026 I had started 17 <abbr title="A code project whose full history git keeps">repos</abbr> this year, after more than three years without one, close to my 2016 count, and they went much further. Getting started got easy, and in my view the ceiling has gone up. Sorting, finishing and upkeep still cost what they used to. Jobs, dependence on a handful of providers and the compulsive loop remain real risks.</p></div>
<hr>
<p>A school morning. The speaker in a child's bedroom switches itself on. Music comes first, at ten percent volume, and climbs five points every twenty seconds. At ninety seconds, a voice comes in over it with the first instruction of the day.</p>
<p>By bedtime the house will have spoken fifteen times. The voice is synthesised at home, in a container, with no outside service involved.</p>
<p>In 1950, <abbr title="American writer (1920-2012), author of The Martian Chronicles and Fahrenheit 451">Ray Bradbury</abbr> published a story about a house that talks. In the version published that same year as a chapter of <em>The Martian Chronicles</em>, the house reads out the date: 4 August 2026.</p>
<p>I am writing this two months later.</p>

<h2>A branch someone already wrote</h2>
<p>The sci-fi films and TV series we watched as kids, and the ones that came after, had houses that talk, robots serving people and machines people talk to out loud. Some of it already lives in my house. The rest will be here within ten years: that is my bet, not a forecast.</p>
<p>A branch is the world that follows from changing one detail in the past and playing out the consequences. The one we live in looks a lot like those childhood screens. Dystopia is its other slope: the same branch, when the consequences go wrong. It works as a warning: it points at a slope, it does not forecast anything.</p>
<p>Five stories touch what I do in the evenings.</p>
<p><strong>Bradbury's house.</strong> In "There Will Come Soft Rains", the house cooks breakfast, cleans up and reads a poem aloud in the evening. The family is gone, killed in a nuclear blast. All that remains of them are silhouettes burnt into a wall. What the story leaves out: a house that does only what I wrote into it, for the people who live in it.</p>
<p><strong><abbr title="American-Canadian writer, born 1948, author of Neuromancer">William Gibson</abbr>'s hacker.</strong> In <em>Neuromancer</em> (1984), a lone hacker is hired for a job inside the network, where an artificial intelligence steers the whole crew. The novel has no room for the evening when a developer asks a program to write the script for a wake-up alarm.</p>
<p><strong>The 2015 of <em>Back to the Future Part II</em>.</strong> Robert Zemeckis's 1989 film sends Marty McFly to 21 October 2015. Bob Gale, the screenwriter, has said they knew there would be no flying cars by 2015, but the film had to have them. The film never pictured a future that arrives through software rather than through the sky.</p>
<p><strong>The robots of <em>I, Robot</em>.</strong> In Alex Proyas's 2004 film, starring Will Smith and loosely drawn from Isaac Asimov, robots bound by the Three Laws of Robotics serve the Chicago of 2035. VIKI, the central AI, reinterprets those laws and puts humans under curfew, for their own good. What the film leaves out: rules a parent writes for a school morning, humbler than three laws and more numerous.</p>
<p><strong>The voice in <em>Her</em>.</strong> In Spike Jonze's 2013 film, a man who writes letters for other people for a living falls for Samantha, an operating system voiced by Scarlett Johansson. She learns, she changes, then she leaves. The film never shows a voice that does not make conversation. Mine gives one instruction and goes quiet.</p>
<p>A voice that wakes a child, a program that writes code in the evening: that is the sci-fi of those screens, at the scale of one house. I have no robot and no flying car.</p>
<p>In those stories, inventing happened somewhere else: with Doc Brown and his DeLorean, or at U.S. Robotics headquarters. In my branch, the inventor is at home, on a weeknight. Part of the tooling still lives elsewhere: the model behind the agent runs at a provider's, not in my house.</p>
<p>This branch was made for us. For those who build in the evening, who already like to try things, and who grew up wanting to see this happen. It is not made for everyone, and what follows says what it bills.</p>

<h2>Before: a wall</h2>
<p>2016 was my most prolific year before AI. I created 21 repos in twelve months. Half of them stopped at 9 <abbr title="A recorded change in a git repository's history">commits</abbr> or fewer. 19 of the 21 got their last commit before the end of September 2017.</p>
<p>A try was paid for up front. In 2014, an <abbr title="Light-emitting diode">LED</abbr> strip bought on a whim cost me a few hours of research, just to find a version of <abbr title="Adafruit's open-source project that drives an LED strip from what's on the screen">Adalight</abbr> that worked with it. All of that before knowing whether the idea was worth anything.</p>
<p>Then the quiet. Between 29 January 2022 and 16 May 2025, I created no repo at all. In 2023, across every repo and counting bots, the history holds 6 commits. In 2024, it holds 2.</p>
<p>Git does not say why. My reading, which no history can prove: that entry fee did the sorting. It did not keep the best ideas. It kept the ones that fit in one evening.</p>
<p>The house has an example of it. One home automation chore sat on my list for two years, because the clean version looked like half a day's work. It got done in one session, on 18 September.</p>
<p>The agent's first signed commit is dated 11 January 2026. By 30 September I had created 17 repos this year. That is roughly the 2016 pace: 21 in twelve months, 17 in nine.</p>
<p>What changed is depth. Those 17 repos hold 4,491 commits, with a <abbr title="The middle value: half the repos have fewer, half have more">median</abbr> of 136. An agent commit can be smaller than a hand-made one, so the figure measures activity, not size.</p>
<svg viewBox="0 0 640 392" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of new GitHub repos per year from 2012 to 2026: 21 in 2016 with a median of 9 commits, none in 2018, 2023 and 2024, then 17 in 2026 as of 30 September with a median of 136 commits. Same number of tries as in 2016, different depth." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">NEW REPOS PER YEAR, 2012-2026</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Same number of tries,</text>
<text x="32" y="106" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">different depth.</text>
<rect x="452" y="236" width="82" height="84" rx="8" fill="currentColor" fill-opacity="0.07"></rect>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.6" text-anchor="middle">
<text x="493" y="260">2023-2024</text>
<text x="493" y="278">no repo</text>
</g>
<g fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="38.2" y="312" width="26" height="8" rx="4"></rect>
<rect x="76.6" y="304" width="26" height="16" rx="6"></rect>
<rect x="115" y="296" width="26" height="24" rx="6"></rect>
<rect x="153.4" y="272" width="26" height="48" rx="6"></rect>
<rect x="230.2" y="240" width="26" height="80" rx="6"></rect>
<rect x="307" y="256" width="26" height="64" rx="6"></rect>
<rect x="345.4" y="296" width="26" height="24" rx="6"></rect>
<rect x="383.8" y="296" width="26" height="24" rx="6"></rect>
<rect x="422.2" y="296" width="26" height="24" rx="6"></rect>
<rect x="537.4" y="312" width="26" height="8" rx="4"></rect>
</g>
<rect x="191.8" y="152" width="26" height="168" rx="6" fill="currentColor" fill-opacity="0.45" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<rect x="575.8" y="184" width="26" height="136" rx="6" fill="var(--diagram-accent)"></rect>
<g stroke="currentColor" stroke-opacity="0.35" stroke-width="3" stroke-linecap="round">
<line x1="275.6" y1="320" x2="287.6" y2="320"></line>
<line x1="467.6" y1="320" x2="479.6" y2="320"></line>
<line x1="506" y1="320" x2="518" y2="320"></line>
</g>
<line x1="32" y1="320" x2="608" y2="320" stroke="currentColor" stroke-opacity="0.22" stroke-width="1" stroke-linecap="round"></line>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6" text-anchor="middle">
<text x="51.2" y="304">1</text>
<text x="89.6" y="296">2</text>
<text x="128" y="288">3</text>
<text x="166.4" y="264">6</text>
<text x="243.2" y="232">10</text>
<text x="281.6" y="310">0</text>
<text x="320" y="248">8</text>
<text x="358.4" y="288">3</text>
<text x="396.8" y="288">3</text>
<text x="435.2" y="288">3</text>
<text x="473.6" y="310">0</text>
<text x="512" y="310">0</text>
<text x="550.4" y="304">1</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6" text-anchor="middle">
<text x="51.2" y="342">2012</text>
<text x="89.6" y="342">2013</text>
<text x="128" y="342">2014</text>
<text x="166.4" y="342">2015</text>
<text x="204.8" y="342">2016</text>
<text x="243.2" y="342">2017</text>
<text x="281.6" y="342">2018</text>
<text x="320" y="342">2019</text>
<text x="358.4" y="342">2020</text>
<text x="396.8" y="342">2021</text>
<text x="435.2" y="342">2022</text>
<text x="473.6" y="342">2023</text>
<text x="512" y="342">2024</text>
<text x="550.4" y="342">2025</text>
<text x="588.8" y="342">2026</text>
</g>
<text x="228" y="164" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="650">2016 · 21 repos</text>
<text x="228" y="184" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">median: 9 commits</text>
<text x="564" y="196" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="650" text-anchor="end">2026 · 17 repos</text>
<text x="564" y="216" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6" text-anchor="end">median: 136 commits</text>
<text x="32" y="374" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Personal repos, forks excluded, 3 private included. 2026 counted to 30 Sept.</text>
</svg>
<p>One caveat: a 2026 repo is nine months old at most, too young to talk about survival.</p>

<h2>The house that talks</h2>
<p>The house from the opening is no longer a try. These are solutions in service, every school day. The full story is in <a target="_blank" rel="noopener noreferrer" href="/posts/no-choices">the episode on announcements without choices</a>.</p>
<p>The audio chain went up in one evening and has not moved since. Every announcement goes through one script. It picks the room and the volume, and stays silent during the night's quiet hours.</p>
<p>The real work was the wording. The first announcements played at the right moment, at the right volume, in the right room. Nobody moved.</p>
<p>I rewrote the thirteen messages of the time in a single pass. There are fifteen today. The eight-rule grid behind them was written afterwards, by watching what actually got someone moving. A name first, one action, never a question, no choices on offer.</p>
<p>The wake-up was rewritten three times in one day. The first version spoke first, then started the music. It lasted one morning: being woken by a voice did not go down well. The same day, the order flipped. Music wakes, the voice follows.</p>
<p>None of those calls came from the agent. Music before voice was settled by a child's reaction one morning.</p>
<blockquote><p>The agent did not find the right announcement. It made the third attempt cost as little as the first.</p></blockquote>
<p>Bradbury's house does not know the family is gone. Mine does not know whether anyone moved. What the machine cannot see, I am still the one watching.</p>

<h2>What already runs</h2>
<p>In the films, the engineer has a console and a team behind them. In my house, the console is a terminal on the desk, and the team starts after dinner.</p>
<p><strong>The server.</strong> The whole home stack lives in one repo: 49 <abbr title="A file describing a service's containers and their configuration">compose</abbr> files, versioned like code since 21 February 2026.</p>
<p><strong>Home automation.</strong> Several dozen automations, an <abbr title="A lightweight messaging protocol for connected devices">MQTT</abbr> bridge for the street door, and a house summary sent on Sunday evenings.</p>
<p><strong>Backups.</strong> The database every night, kept seven days. The server state off-site every day, the photos every week. An integrity check every month. The alert only speaks up on failure: silence is the good signal.</p>
<p><strong>The agents.</strong> <abbr title="Open-source software that runs AI agents and connects them">OpenClaw</abbr> runs a team of specialised agents, 42 on my own list. A folder of shared rules sets how one hands work to another, returns a result, escalates a blocker or waits for my approval. A script copies the shared identity files into each agent's workspace, and refuses to overwrite a copy that was edited in place.</p>
<p><strong>Personas.</strong> They are not agents, they are a method. Four voices work in parallel: a fact-checker, a sceptical reader, a voice editor, a structure editor. Then I decide. This article was made that way.</p>
<p><strong>Projects.</strong> The same server runs the-box, a daily game of naming a video game, and wawptn, which helps a group pick what to play.</p>
<p>My opinion, backed only by my own house: in 2016, an inventory like this would have taken me a team, or stolen weekends. The ceiling has gone up. For anyone with an idea and an evening, the horizon is wide open. It also has a price.</p>

<h2>What this branch still bills</h2>
<p>The first try got cheap. Everything after it is billed at the old rate.</p>
<p>As of 30 September, 13 of my 17 repos from 2026 had a <abbr title="Sending new commits to the hosted repository">push</abbr> in the last thirty days. One is archived. Keeping those repos alive is where upkeep weighs most for me: a decision I keep putting off.</p>
<p>In 2016, dropping a project was free and silent. In 2026, everything stays alive at once. Alive is not the same as finished, and a push can come from a bot bumping a dependency.</p>
<p><strong>Choosing.</strong> When anything can start, I have to decide what will not. <strong>Finishing.</strong> The last few percent are edge cases, docs and decisions. <strong>Upkeep.</strong> Every live repo takes up room in my head, even on days I leave it alone.</p>
<p>In 2025, <abbr title="Model Evaluation and Threat Research, an independent AI evaluation nonprofit">METR</abbr> followed 16 experienced developers working in their own repos: with AI they were 19% slower, while believing they were 20% faster. METR started a new experiment in August 2025 and published an update in February 2026. It calls the new data an unreliable signal, likely biased downward in its estimate of the speedup.</p>
<p>There is a dystopian reading of this branch, and I do not find it absurd. Jobs are changing, and the worry about employment seems legitimate to me. I do not think these tools should be used to shrink teams. The models my agent depends on sit with a handful of providers. If they change their prices or their rules, my house gets no say.</p>
<p>Speed also comes with its own loop, the one that makes stopping hard. I have <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">looked at it up close in another post</a>. The line comes down to one question: am I still the one choosing to stop?</p>
<blockquote><p>Feeling good in a world does not prove that world is good.</p></blockquote>

<h2>What stays human, and three rules</h2>
<p><strong>Taste.</strong> <abbr title="Anil R. Doshi and Oliver P. Hauser, authors of the 2024 Science Advances study">Doshi and Hauser</abbr> gave AI-generated ideas to people writing short stories, 293 participants in all. Their stories were rated more novel and more useful. They also ended up more alike. That was fiction, not software. The risk I keep from it: if everyone tries things with the same tool, everyone drifts toward the same place.</p>
<p><strong>Doubt.</strong> Troubleshooting my home automation with an agent, I learned that "I reset it" and "the module lost power" are two different claims. Checking what the machine claims is still my job.</p>
<p><strong>Sorting and stopping.</strong> No agent knows which of my 17 repos deserves another evening. Closing a repo is still a human move.</p>
<p>Three guardrails I mean to keep.</p>
<ol>
<li><strong>Two evenings to prove it is useful.</strong> A try that has served nobody after two evenings, me included, is closed, with one line saying why.</li>
<li><strong>A monthly check-in.</strong> Every repo with no news for thirty days is archived or gets a written next step.</li>
<li><strong>One finished thing a month.</strong> Finished means someone else could use it without me. Zero is an honest answer too.</li>
</ol>

<p><strong>Read next:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">AI Didn't Automate My House</a>: why the gain shows up on the projects I never used to start.</p>
<hr>
<h2>What these numbers do not say</h2>
<p>The counts come from a scan of my 78 non-fork repos, 3 of them private, using <code>git log --all --no-merges</code>. Any author whose name contains "bot" is excluded. The author "Ralph Agent" is counted as human. A repo is filed by its creation date on <abbr title="A source-code hosting platform built on git">GitHub</abbr>, not by its first commit. Commits measure neither the size nor the value of the work.</p>
<p>The joy of building is a feeling, not a measurement. No figure shows whether the announcements save time in the morning.</p>
<p>This is one developer, one history, one house. The stories mentioned here are cited for what they imagined, not as predictions.</p>

<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11244532/">Doshi and Hauser, Science Advances, 2024</a>: 293 participants. AI ideas made short stories more novel and more useful, and more similar to each other. No software in the study.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2507.09089">METR, arXiv 2507.09089</a>: 16 experienced developers, 246 tasks in their own repos, 19% slower with AI while believing they were 20% faster. Existing codebases only, small sample.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://metr.org/blog/2026-02-24-uplift-update">METR, February 2026 update</a>: new experiment started in August 2025, data METR itself calls an unreliable signal, likely biased downward in the speedup estimate. Cited for the caution, not for a figure.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/There_Will_Come_Soft_Rains_(short_story)">Ray Bradbury, "There Will Come Soft Rains"</a>: Collier's, 6 May 1950. The same year, a revised version became the chapter "August 2026" of <em>The Martian Chronicles</em>; the Collier's version carried a different date. The 1997 American edition moves the dates 31 years forward, to 2057. Separately, the French translation was revised by Jacques Chambon (Denoël, 1997), where the story is titled "Viendront de douces pluies...". Publication history cross-checked on <a target="_blank" rel="noopener noreferrer" href="https://www.noosfere.org/livres/EditionsLivre.asp?ID_ItemSommaire=2453&amp;Tri=2">nooSFere</a>.</li>
<li>William Gibson, <em>Neuromancer</em>, 1984.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Back_to_the_Future_Part_II"><em>Back to the Future Part II</em>, Robert Zemeckis, 1989</a>: Marty McFly arrives on 21 October 2015. Bob Gale's remark on flying cars is quoted there with its source.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/I,_Robot_(film)"><em>I, Robot</em>, Alex Proyas, 2004</a>: Chicago, 2035, the Three Laws and VIKI. The credits call the film "suggested by" Isaac Asimov's collection, not an adaptation.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Her_(2013_film)"><em>Her</em>, Spike Jonze, 2013</a>: Theodore, who writes letters for other people, and Samantha, an operating system voiced by Scarlett Johansson.</li>
<li>My GitHub repos, pulled on 30 September 2026: 78 personal repos excluding forks, 3 of them private, dated by creation date. Commit counts from each repo's git history. No link, since three are private.</li>
</ul>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'NerdInTheAiEra',
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
