<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'nerd-in-the-ai-era',
  date: '2026-10-10',
  tags: ['AI', 'Opinion', 'Software', 'Homelab'],
  draft: true
}

const frenchContent: PostContent = {
  title: "Un nerd dans la timeline faite pour nous",
  description: "Les films de notre enfance imaginaient des maisons qui parlent. Elles parlent désormais. Voici ce que cette époque ouvre à ceux qui aiment construire, et ce qu'elle coûte encore.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> La <abbr title="Science-fiction">SF</abbr> de notre enfance promettait des maisons qui parlent, des robots serviables et des voix à qui l'on confie sa journée. Une partie est arrivée, plus modeste et plus bricolée que dans les films. Des <abbr title="Intelligence artificielle">IA</abbr> capables laissent parfois une personne seule transformer une idée en objet en une soirée. On adore vivre dans cette timeline, et on n'en voit pas encore la limite. Choisir, finir et entretenir coûtent toujours autant. L'emploi, la dépendance à quelques fournisseurs et la boucle compulsive restent des risques réels.</p></div>
<hr>
<figure class="post-cover"><img src="/visuals/nerd-in-the-ai-era/covers/martian-chronicles.webp" alt="Couverture de la première édition des Chroniques martiennes : le nom de Ray Bradbury et le titre sur un ciel bleu et orange traversé d'orbites." width="300" height="437" loading="lazy" decoding="async"><figcaption><em>Chroniques martiennes</em>, 1950, Ray Bradbury. Couverture de la première édition américaine (Doubleday), domaine public selon Wikimedia Commons.</figcaption></figure>
<p>En 1950, <abbr title="Écrivain américain (1920-2012), auteur des Chroniques martiennes et de Fahrenheit 451">Ray Bradbury</abbr> publiait une nouvelle sur une maison qui parle. Dans la version reprise la même année en chapitre des <em>Chroniques martiennes</em>, la maison annonce la date du jour : le 4 août 2026.</p>
<p>Cette date est passée depuis deux mois.</p>
<p>La maison qui parle existe, en plus modeste, et pas d'hier. Des enceintes avec micro et des assistants domotiques sont vendus au grand public depuis plus de dix ans : on leur parle, ils répondent. Ce qui change, c'est qu'on peut maintenant les écrire soi-même. Une enceinte annonce la pluie dans la bonne pièce. Une porte restée ouverte prévient. Une voix lit le programme du matin, puis se tait. Pour monter ça, il ne faut ni usine ni laboratoire. Une personne curieuse, un <abbr title="Programme d'intelligence artificielle qui écrit, lance et corrige du code à partir d'une consigne">agent</abbr> d'IA et une soirée peuvent suffire.</p>

<h2>Une timeline déjà racontée</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/nerd-in-the-ai-era/timeline-light.png"><img src="/visuals/nerd-in-the-ai-era/timeline-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/nerd-in-the-ai-era/timeline-dark.png"><img src="/visuals/nerd-in-the-ai-era/timeline-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>Les films et les séries de SF qu'on regardait enfants avaient des maisons qui parlent, des robots au service des humains et des machines à qui l'on s'adresse à voix haute. Une partie est déjà là. Le reste arrivera peut-être d'ici dix ans. C'est un pari, pas une prévision.</p>
<p>La timeline où nous vivons ressemble à ces écrans d'enfance. La dystopie en est l'autre versant : la même timeline, quand le déroulé tourne mal. Ce genre montre une pente, il ne prédit rien.</p>
<p>Six récits éclairent ce qu'on peut construire aujourd'hui. Chacun a manqué un détail, et c'est souvent le plus beau.</p>
<p><strong>La maison de Bradbury.</strong> Dans « Il viendra des pluies douces », la maison prépare le petit-déjeuner, fait le ménage et récite un poème le soir. La famille a disparu dans une explosion nucléaire. Il n'en reste que des silhouettes brûlées sur un mur. La maison continue, sans savoir pour qui. Le récit n'imaginait pas une maison réglée ligne par ligne par ceux qui y vivent.</p>
<figure class="post-cover post-cover-left"><img src="/visuals/nerd-in-the-ai-era/covers/knight-rider.webp" alt="Générique de K 2000 : le titre Knight Rider au-dessus de KITT, une voiture noire, dans un désert au coucher du soleil." width="320" height="180" loading="lazy" decoding="async"><figcaption><em>K 2000</em> (<em>Knight Rider</em>), 1982-1986, Glen A. Larson. Image du générique : ©&nbsp;ayants droit, reproduite à titre d'illustration.</figcaption></figure>
<p><strong>La voiture de <em>K 2000</em>.</strong> La voiture qui parle de notre enfance, c'est KITT. Dans la série créée par Glen A. Larson et diffusée sur NBC de 1982 à 1986, Michael Knight, joué par David Hasselhoff, combat le crime avec cette voiture dotée d'une intelligence artificielle, consciente d'elle-même et presque indestructible. La série n'imaginait pas que la voix arriverait sans la voiture : un simple assistant vocal, posé sur une étagère de cuisine.</p>
<p><strong>Le pirate de <abbr title="Écrivain américano-canadien né en 1948, auteur de Neuromancien">William Gibson</abbr>.</strong> Dans <em>Neuromancien</em> (1984), un pirate solitaire est embauché pour une mission sur le réseau, où une intelligence artificielle manipule toute l'équipe. Chez Gibson, savoir entrer dans les machines est réservé à quelques spécialistes. Le roman n'a pas prévu que ce savoir deviendrait une conversation ordinaire, ouverte à n'importe quel curieux.</p>
<figure class="post-cover"><img src="/visuals/nerd-in-the-ai-era/covers/back-to-the-future-2.webp" alt="Affiche de Retour vers le futur II : Marty et Doc sortent de la DeLorean et regardent leurs montres." width="259" height="384" loading="lazy" decoding="async"><figcaption><em>Retour vers le futur II</em>, 1989, Robert Zemeckis. Affiche : ©&nbsp;ayants droit, reproduite à titre d'illustration.</figcaption></figure>
<p><strong>Les deux 1985 de <em>Retour vers le futur II</em>.</strong> Le film de Robert Zemeckis (1989) envoie Marty McFly au 21 octobre 2015. Bob Gale, le scénariste, a raconté qu'ils savaient qu'il n'y aurait pas de voitures volantes en 2015, mais qu'il les fallait dans le film. Plus loin, le vieux Biff vole la DeLorean et remet à son double de 1955 un almanach des résultats sportifs. Marty rentre dans un 1985 où sa ville est devenue une dystopie. Même passé, un détail changé, une autre timeline. Le film n'imaginait pas un futur qui arrive par le logiciel plutôt que par le ciel.</p>
<figure class="post-cover post-cover-left"><img src="/visuals/nerd-in-the-ai-era/covers/i-robot.webp" alt="Affiche de I, Robot : Will Smith en manteau noir, devant une foule de robots identiques." width="260" height="385" loading="lazy" decoding="async"><figcaption><em>I, Robot</em>, 2004, Alex Proyas. Affiche : ©&nbsp;ayants droit, reproduite à titre d'illustration.</figcaption></figure>
<p><strong>Les robots d'<em>I, Robot</em>.</strong> Dans le film d'Alex Proyas (2004), avec Will Smith et librement inspiré d'Isaac Asimov, des robots tenus par les trois lois de la robotique servent le Chicago de 2035. VIKI, l'intelligence centrale, réinterprète ces lois et impose aux humains un couvre-feu, pour leur bien. Le film laisse de côté le cas inverse : de petites règles écrites par les habitants eux-mêmes, et corrigées le lendemain quand elles tombent à côté.</p>
<figure class="post-cover"><img src="/visuals/nerd-in-the-ai-era/covers/her.webp" alt="Affiche de Her : gros plan d'un homme à moustache, en chemise rouge, sur fond rose." width="220" height="314" loading="lazy" decoding="async"><figcaption><em>Her</em>, 2013, Spike Jonze. Affiche : ©&nbsp;ayants droit, reproduite à titre d'illustration.</figcaption></figure>
<p><strong>La voix de <em>Her</em>.</strong> Dans le film de Spike Jonze (2013), un homme dont le métier est d'écrire des lettres pour les autres s'attache à Samantha, un système d'exploitation doté de la voix de Scarlett Johansson. Elle apprend, elle change, puis elle part. Le film ne montre pas une voix plus modeste, qu'on fabrique soi-même et qui sait se taire.</p>
<p>Dans ces récits, l'invention se faisait ailleurs : chez Doc Brown et sa DeLorean, ou au siège d'U.S. Robotics. Dans notre timeline, l'inventeur est à la maison, un soir de semaine. Une partie des outils reste ailleurs : le modèle derrière l'agent tourne chez un fournisseur.</p>
<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Frise de 1945 à 2040. Les Chroniques martiennes, parues en 1950, datent leur maison qui parle du 4 août 2026. Retour vers le futur II, sorti en 1989, envoie Marty au 21 octobre 2015. I, Robot, sorti en 2004, se passe en 2035. Au 10 octobre 2026, les deux premières dates sont passées et seule 2035 reste à venir." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">DATES DE LA SF, VUES DU 10 OCTOBRE 2026</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Deux de ces futurs sont déjà passés.</text>
<rect x="527.8" y="100" width="80.2" height="238" rx="8" fill="var(--diagram-accent)" fill-opacity="0.08" stroke="none"></rect>
<text x="567.9" y="114" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.6">à venir</text>
<line x1="32" y1="340" x2="608" y2="340" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></line>
<line x1="62.3" y1="336" x2="62.3" y2="344" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5" stroke-linecap="round"></line>
<text x="62.3" y="362" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.5">1950</text>
<line x1="213.9" y1="336" x2="213.9" y2="344" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5" stroke-linecap="round"></line>
<text x="213.9" y="362" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.5">1975</text>
<line x1="365.5" y1="336" x2="365.5" y2="344" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5" stroke-linecap="round"></line>
<text x="365.5" y="362" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.5">2000</text>
<line x1="517.1" y1="336" x2="517.1" y2="344" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5" stroke-linecap="round"></line>
<text x="517.1" y="362" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.5">2025</text>
<line x1="527.8" y1="100" x2="527.8" y2="340" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="3 4" stroke-linecap="round"></line>
<text x="519.8" y="114" text-anchor="end" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13.5" font-weight="650" opacity="0.9">Aujourd'hui, 10 oct. 2026</text>
<text x="57.3" y="134" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="650" font-style="italic" opacity="0.85">Chroniques martiennes</text>
<line x1="62.3" y1="150" x2="519.7" y2="150" stroke="currentColor" stroke-opacity="0.35" stroke-width="3" stroke-linecap="round"></line>
<circle cx="526.7" cy="150" r="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.75" stroke-width="2.5"></circle>
<circle cx="62.3" cy="150" r="5" fill="currentColor" fill-opacity="0.75"></circle>
<text x="62.3" y="174" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">1950</text>
<text x="515.8" y="174" text-anchor="end" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">4 août 2026</text>
<text x="293.8" y="204" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="650" font-style="italic" opacity="0.85">Retour vers le futur II</text>
<line x1="298.8" y1="220" x2="454.3" y2="220" stroke="currentColor" stroke-opacity="0.35" stroke-width="3" stroke-linecap="round"></line>
<circle cx="461.3" cy="220" r="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.75" stroke-width="2.5"></circle>
<circle cx="298.8" cy="220" r="5" fill="currentColor" fill-opacity="0.75"></circle>
<text x="298.8" y="244" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">1989</text>
<text x="461.3" y="244" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">21 oct. 2015</text>
<text x="384.7" y="274" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="650" font-style="italic" opacity="0.85">I, Robot</text>
<line x1="389.7" y1="290" x2="527.8" y2="290" stroke="currentColor" stroke-opacity="0.35" stroke-width="3" stroke-linecap="round"></line>
<line x1="527.8" y1="290" x2="570.7" y2="290" stroke="var(--diagram-accent)" stroke-width="3" stroke-linecap="round"></line>
<circle cx="577.7" cy="290" r="6" fill="var(--diagram-accent)" fill-opacity="0.18" stroke="var(--diagram-accent)" stroke-width="2.5"></circle>
<circle cx="389.7" cy="290" r="5" fill="currentColor" fill-opacity="0.75"></circle>
<text x="389.7" y="314" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">2004</text>
<text x="577.7" y="314" text-anchor="middle" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">2035</text>
<text x="32" y="390" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Point plein : parution ou sortie. Cercle : date où se passe le récit.</text>
</svg>

<h2>Pourquoi on adore être ici</h2>
<p>On adore être dans cette timeline. Enfants, on regardait ces futurs depuis un canapé. Aujourd'hui, on peut en fabriquer des morceaux le soir, sur la table de la cuisine.</p>
<p>On parle beaucoup de <abbr title="Intelligence artificielle hypothétique qui dépasserait les humains dans presque tous les domaines">superintelligence</abbr>. Elle reste une hypothèse, et personne ne sait dire si elle viendra, ni quand. Ce qui est déjà là suffit à nous enthousiasmer : des IA capables, à qui l'on parle en phrases ordinaires.</p>
<p>Avec elles, une personne curieuse peut déjà :</p>
<ul>
<li>entrer dans un domaine inconnu en posant ses questions, à son rythme, jusqu'à trouver la bonne ;</li>
<li>lire une notice, une norme ou un code écrits dans une langue qu'elle ne maîtrise pas ;</li>
<li>passer d'un croquis à un prototype qui tourne, le casser, puis recommencer ;</li>
<li>écrire enfin le test, la documentation ou la sauvegarde remis à plus tard depuis des mois.</li>
</ul>
<p>Où est la limite ? On ne la voit pas encore. Ce qui semblait hors de portée l'an dernier tient parfois dans une soirée. Les bords qu'on touche sont souvent les nôtres : le temps, l'attention, la fatigue. Mais les modèles se trompent aussi, et le savoir fait partie du jeu.</p>
<blockquote><p>Les films nous montraient le futur. Cette timeline nous en tend les outils.</p></blockquote>
<p>C'est en ce sens qu'elle est faite pour nous. Pour ceux qui construisent, qui ont le goût d'essayer, et à qui ces écrans ont donné l'envie de voir ça arriver. On n'est plus spectateurs du futur. On en bricole des morceaux.</p>

<h2>Plus petit que dans les films</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/nerd-in-the-ai-era/house-light.png"><img src="/visuals/nerd-in-the-ai-era/house-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/nerd-in-the-ai-era/house-dark.png"><img src="/visuals/nerd-in-the-ai-era/house-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>Le genre promettait des majordomes en métal et des voitures dans le ciel. Ce qui est arrivé tient sur un bureau : un terminal, un agent, une soirée. C'est moins spectaculaire. C'est surtout à la portée d'une seule personne.</p>
<p>Voici ce qu'on peut déjà assembler seul, sans équipe derrière soi.</p>
<ul>
<li><strong>Une maison qui parle.</strong> Des annonces vocales dans la bonne pièce, au bon volume, et le silence la nuit.</li>
<li><strong>Des automatisations.</strong> Une porte d'entrée qui prévient, un résumé de la semaine qui arrive tout seul.</li>
<li><strong>Des sauvegardes.</strong> Une copie hors site automatique, avec une alerte qui ne parle qu'en cas d'échec : le silence est le bon signal.</li>
<li><strong>Des agents qui se passent le relais.</strong> L'un écrit, l'autre relit, un troisième attend l'accord d'un humain avant d'agir.</li>
<li><strong>Des lectures en parallèle.</strong> Plusieurs agents jouent chacun un rôle : vérificateur de faits, lecteur sceptique, éditeur. Puis un humain tranche.</li>
<li><strong>Un jeu ou un outil monté en une soirée.</strong> Un petit jeu entre amis, ou un outil qui aide un groupe à décider.</li>
</ul>
<p>Aucun de ces objets n'est un robot. C'est la SF de nos écrans, ramenée à l'échelle d'une maison. Elle tient dans quelques fichiers de configuration.</p>
<p>Le travail difficile n'est presque jamais technique. Un agent peut écrire dix versions d'une annonce, d'un menu ou d'un réglage en une soirée. Savoir laquelle est la bonne, c'est encore à nous de le sentir.</p>
<blockquote><p>L'agent ne trouve pas la bonne idée à notre place.</p></blockquote>

<h2>Ce que cette timeline facture</h2>
<p>Elle n'est pas faite pour tout le monde. Elle suppose du temps libre, un métier qui laisse de l'énergie le soir, et assez de bases pour juger ce que l'agent produit. Beaucoup n'ont pas ces trois choses à la fois.</p>
<p><strong>Choisir.</strong> Quand tout peut démarrer, il faut décider ce qu'on ne démarre pas. <strong>Finir.</strong> Les derniers pour cent sont faits de cas limites, de documentation et de décisions. <strong>Entretenir.</strong> Chaque projet vivant occupe une place dans la tête, même les jours où l'on n'y touche pas.</p>
<p>Avant, abandonner était gratuit et silencieux. Un essai mort restait mort. Aujourd'hui, tout peut rester vivant en même temps. Vivant ne veut pas dire fini.</p>
<p>La vitesse ressentie trompe aussi. En 2025, <abbr title="Model Evaluation and Threat Research, organisme indépendant d'évaluation des modèles d'IA">METR</abbr> a suivi 16 développeurs expérimentés sur leurs propres projets : avec l'IA, ils ont été 19 % plus lents, tout en se croyant 20 % plus rapides. METR a lancé une nouvelle expérience en août 2025 et publié une mise à jour en février 2026. Elle y juge ses nouvelles données peu fiables, et probablement biaisées vers le bas dans l'estimation du gain de vitesse. METR écrit aussi que les développeurs sont probablement plus accélérés début 2026.</p>
<p>Il existe une lecture dystopique de cette timeline, et elle n'a rien d'absurde. Des métiers changent, et l'inquiétude pour l'emploi est légitime. Ces outils ne devraient pas servir à réduire des équipes.</p>
<p>Les modèles dont dépendent nos agents sont entre les mains de quelques fournisseurs. S'ils changent leurs prix ou leurs règles, nos maisons n'ont pas leur mot à dire. La maison qui parle reste, en partie, une maison louée.</p>
<p>La vitesse a aussi sa boucle, celle qui rend l'arrêt difficile. <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">Un autre billet la regarde de près</a>. La frontière tient en une question : est-ce qu'on choisit encore d'arrêter ?</p>
<blockquote><p>Se sentir bien dans un monde ne prouve pas que ce monde est bon.</p></blockquote>

<h2>Ce qui reste humain</h2>
<p>La maison de Bradbury ne sait pas que la famille a disparu. Les nôtres ne savent pas toujours qui est à la maison. Ce que la machine ne voit pas, un humain doit encore le regarder.</p>
<p><strong>Le goût.</strong> <abbr title="Anil R. Doshi et Oliver P. Hauser, auteurs de l'étude publiée dans Science Advances en 2024">Doshi et Hauser</abbr> ont fait écrire de courtes histoires à 293 auteurs, répartis en trois groupes : sans aide, avec une idée produite par IA, avec cinq. Les textes aidés par l'IA ont été jugés plus originaux et plus utiles, surtout chez les auteurs les moins créatifs. Ils se ressemblaient aussi davantage entre eux. Ce n'était pas du logiciel. Le risque qu'on peut en tirer : si tout le monde essaie avec le même outil, tout le monde converge.</p>
<p><strong>Le doute.</strong> « J'ai lancé le test » et « le test a réussi » sont deux affirmations différentes. Un agent peut annoncer la première comme si c'était la seconde. Vérifier ce que la machine affirme reste un travail humain.</p>
<p><strong>Le tri et l'arrêt.</strong> Aucun agent ne sait quel projet mérite une soirée de plus. Fermer un essai reste un geste humain, et souvent le plus difficile.</p>

<h2>Trois garde-fous</h2>
<p>Trois règles qu'on peut se donner pour garder le plaisir intact.</p>
<ol>
<li><strong>Deux soirées pour prouver son utilité.</strong> Un essai qui n'a servi à personne après deux soirées, nous compris, se ferme, avec une ligne qui dit pourquoi.</li>
<li><strong>Un point chaque mois.</strong> Chaque projet sans nouvelle depuis trente jours est archivé ou reçoit une prochaine étape écrite.</li>
<li><strong>Une chose terminée par mois.</strong> Terminée veut dire que quelqu'un d'autre peut s'en servir sans nous. Zéro est aussi une réponse honnête.</li>
</ol>

<p><strong>Lire aussi :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">L'IA n'a pas automatisé ma maison</a> : pourquoi le gain se voit sur les chantiers qu'on ne commençait pas.</p>
<hr>
<h2>Ce que ces chiffres ne disent pas</h2>
<p>Les chiffres de METR portent sur 16 développeurs et sur du code existant. La mise à jour de février 2026 est citée pour sa prudence, pas pour un chiffre.</p>
<p>L'étude de Doshi et Hauser porte sur des histoires courtes, pas sur du logiciel. La convergence qu'elle mesure est une piste pour le code, pas une preuve.</p>
<p>Aucun chiffre ne dit ici combien de temps les exemples cités font gagner, ni à qui. Le plaisir d'être dans cette timeline est un ressenti, assumé comme tel.</p>
<p>Les récits cités le sont pour ce qu'ils imaginaient, pas comme des prédictions.</p>

<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11244532/">Doshi et Hauser, Science Advances, 2024</a> : 293 participants, histoires courtes jugées plus originales et plus utiles avec des idées d'IA, mais plus semblables entre elles. Pas de logiciel dans l'étude.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2507.09089">METR, arXiv 2507.09089</a> : 16 développeurs expérimentés, 246 tâches sur leurs propres projets, 19 % plus lents avec l'IA alors qu'ils se pensaient 20 % plus rapides. Code existant uniquement, petit échantillon.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://metr.org/blog/2026-02-24-uplift-update">METR, mise à jour de février 2026</a> : nouvelle expérience lancée en août 2025, données jugées peu fiables par METR, probablement biaisées vers le bas dans l'estimation du gain de vitesse. Citée pour la prudence, pas pour un chiffre.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.noosfere.org/livres/EditionsLivre.asp?ID_ItemSommaire=2453&amp;Tri=2">Ray Bradbury, « Il viendra des pluies douces »</a> (« There Will Come Soft Rains ») : Collier's, 6 mai 1950. La même année, une version révisée devient le chapitre « Août 2026 » des <em>Chroniques martiennes</em> ; la version de Collier's portait une autre date (<a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/There_Will_Come_Soft_Rains_(short_story)">Wikipedia</a>). Titre de la traduction d'Henri Robillot (Denoël, 1954). L'édition américaine de 1997 avance les dates de 31 ans, à 2057. Séparément, la traduction française a été revue par Jacques Chambon (Denoël, 1997) ; la nouvelle s'y intitule « Viendront de douces pluies... ».</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://fr.wikipedia.org/wiki/K_2000_(s%C3%A9rie_t%C3%A9l%C3%A9vis%C3%A9e)"><em>K 2000</em></a> (<em>Knight Rider</em>), série créée par Glen A. Larson, diffusée sur NBC du 26 septembre 1982 au 4 avril 1986. David Hasselhoff y joue Michael Knight, aidé de KITT, voiture dotée d'une intelligence artificielle (<a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Knight_Rider_(1982_TV_series)">Wikipedia</a>). Image du générique reprise de <a target="_blank" rel="noopener noreferrer" href="https://it.wikipedia.org/wiki/File:Supercar.png">Wikipedia en italien</a>.</li>
<li>William Gibson, <em>Neuromancien</em>, 1984.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Back_to_the_Future_Part_II"><em>Retour vers le futur II</em>, Robert Zemeckis, 1989</a> : arrivée de Marty McFly le 21 octobre 2015, puis l'almanach sportif que le vieux Biff remet à son double de 1955 et le 1985 devenu dystopique. La remarque de Bob Gale sur les voitures volantes y est citée avec sa source.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/I,_Robot_(film)"><em>I, Robot</em>, Alex Proyas, 2004</a> : Chicago, 2035, les trois lois et VIKI. Le générique présente le film comme « suggéré » par le recueil d'Isaac Asimov, pas comme une adaptation.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Her_(2013_film)"><em>Her</em>, Spike Jonze, 2013</a> : Theodore, écrivain de lettres pour les autres, et Samantha, système d'exploitation à qui Scarlett Johansson prête sa voix.</li>
</ul>`
}

const englishContent: PostContent = {
  title: 'A Nerd in the Timeline Made for Us',
  description: 'The films we grew up with imagined houses that talk. They do now. Here is what this era opens up for people who love to build, and what it still costs.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> The sci-fi we grew up on promised talking houses, helpful robots and voices we could hand our day to. Some of it has arrived, smaller and more home-made than on screen. Capable <abbr title="Artificial intelligence">AI</abbr> sometimes lets one person turn an idea into a working thing in a single evening. We love living in this timeline, and we cannot see its edge yet. Choosing, finishing and upkeep cost what they always did. Jobs, dependence on a handful of providers and the compulsive loop are still real risks.</p></div>
<hr>
<figure class="post-cover"><img src="/visuals/nerd-in-the-ai-era/covers/martian-chronicles.webp" alt="First edition cover of The Martian Chronicles: Ray Bradbury's name and the title over a blue and orange sky crossed by orbits." width="300" height="437" loading="lazy" decoding="async"><figcaption><em>The Martian Chronicles</em>, 1950, Ray Bradbury. First US edition cover (Doubleday), public domain according to Wikimedia Commons.</figcaption></figure>
<p>In 1950, <abbr title="American writer (1920-2012), author of The Martian Chronicles and Fahrenheit 451">Ray Bradbury</abbr> published a story about a house that talks. In the version that became a chapter of <em>The Martian Chronicles</em> that same year, the house reads out the date: 4 August 2026.</p>
<p>That date is now two months behind us.</p>
<p>The talking house is real, just humbler, and not new. Speakers with a microphone and home assistants have been sold to the general public for more than ten years: you talk to them, they answer. What changes now is that we can write them ourselves. A speaker warns about rain in the right room. A door left open sends word. A voice reads out the morning plan, then goes quiet. None of it takes a factory or a lab. A curious person, an AI <abbr title="A program that writes, runs and fixes code from an instruction">agent</abbr> and one evening can be enough.</p>

<h2>A timeline someone already wrote</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/nerd-in-the-ai-era/timeline-light.png"><img src="/visuals/nerd-in-the-ai-era/timeline-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/nerd-in-the-ai-era/timeline-dark.png"><img src="/visuals/nerd-in-the-ai-era/timeline-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>The sci-fi films and TV series we watched as kids had houses that talk, robots serving people and machines people speak to out loud. Some of it is already here. The rest may arrive within ten years. That is a bet, not a forecast.</p>
<p>The timeline we live in looks a lot like those childhood screens. Dystopia is its other slope: the same timeline, when the consequences go wrong. The genre points at a slope and forecasts nothing.</p>
<p>Six stories help explain what we can build today. Each one missed a detail, and that detail is often the best part.</p>
<p><strong>Bradbury's house.</strong> In "There Will Come Soft Rains", the house cooks breakfast, cleans up and reads a poem aloud in the evening. The family is gone, killed in a nuclear blast. All that remains of them are silhouettes burnt into a wall. The house carries on, with no idea who for. The story never pictured a house tuned line by line by the people who live in it.</p>
<figure class="post-cover post-cover-left"><img src="/visuals/nerd-in-the-ai-era/covers/knight-rider.webp" alt="Knight Rider title card: the show's title above KITT, a black car, in a desert at sunset." width="320" height="180" loading="lazy" decoding="async"><figcaption><em>Knight Rider</em>, 1982-1986, Glen A. Larson. Title card: ©&nbsp;rights holders, reproduced for illustration.</figcaption></figure>
<p><strong>The car in <em>Knight Rider</em>.</strong> The talking car of our childhood is KITT. In the series created by Glen A. Larson and aired on NBC from 1982 to 1986, Michael Knight, played by David Hasselhoff, fights crime alongside this artificially intelligent car, self-aware and nearly indestructible. The show never pictured the voice arriving without the car: just a voice assistant on a kitchen shelf.</p>
<p><strong><abbr title="American-Canadian writer, born 1948, author of Neuromancer">William Gibson</abbr>'s hacker.</strong> In <em>Neuromancer</em> (1984), a lone hacker is hired for a job inside the network, where an artificial intelligence steers the whole crew. In Gibson's world, getting inside machines is left to a handful of specialists. The novel did not see that skill turning into an ordinary conversation, open to anyone curious.</p>
<figure class="post-cover"><img src="/visuals/nerd-in-the-ai-era/covers/back-to-the-future-2.webp" alt="Back to the Future Part II poster: Marty and Doc step out of the DeLorean, staring at their watches." width="259" height="384" loading="lazy" decoding="async"><figcaption><em>Back to the Future Part II</em>, 1989, Robert Zemeckis. Poster: ©&nbsp;rights holders, reproduced for illustration.</figcaption></figure>
<p><strong>The two 1985s of <em>Back to the Future Part II</em>.</strong> Robert Zemeckis's 1989 film sends Marty McFly to 21 October 2015. Bob Gale, the screenwriter, has said they knew there would be no flying cars by 2015, but the film had to have them. Later on, old Biff steals the DeLorean and hands his 1955 self a sports almanac. Marty comes home to a 1985 where his town has turned into a dystopia. Same past, one detail changed, another timeline. The film never pictured a future that arrives through software rather than through the sky.</p>
<figure class="post-cover post-cover-left"><img src="/visuals/nerd-in-the-ai-era/covers/i-robot.webp" alt="I, Robot poster: Will Smith in a black coat, in front of a crowd of identical robots." width="260" height="385" loading="lazy" decoding="async"><figcaption><em>I, Robot</em>, 2004, Alex Proyas. Poster: ©&nbsp;rights holders, reproduced for illustration.</figcaption></figure>
<p><strong>The robots of <em>I, Robot</em>.</strong> In Alex Proyas's 2004 film, starring Will Smith and loosely drawn from Isaac Asimov, robots bound by the Three Laws of Robotics serve the Chicago of 2035. VIKI, the central AI, reinterprets those laws and puts humans under curfew, for their own good. The film skips the opposite case: small rules written by the people at home, and fixed the next morning when they miss.</p>
<figure class="post-cover"><img src="/visuals/nerd-in-the-ai-era/covers/her.webp" alt="Her poster: close-up of a man with a moustache, in a red shirt, on a pink background." width="220" height="314" loading="lazy" decoding="async"><figcaption><em>Her</em>, 2013, Spike Jonze. Poster: ©&nbsp;rights holders, reproduced for illustration.</figcaption></figure>
<p><strong>The voice in <em>Her</em>.</strong> In Spike Jonze's 2013 film, a man who writes letters for other people for a living falls for Samantha, an operating system voiced by Scarlett Johansson. She learns, she changes, then she leaves. The film leaves out a humbler voice, one we build ourselves and that knows when to stop talking.</p>
<p>In those stories, inventing happened somewhere else: with Doc Brown and his DeLorean, or at U.S. Robotics headquarters. In our timeline, the inventor is at home, on a weeknight. Part of the tooling still lives elsewhere: the model behind the agent runs at a provider's.</p>
<svg viewBox="0 0 640 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline from 1945 to 2040. The Martian Chronicles, published in 1950, dates its talking house 4 August 2026. Back to the Future Part II, released in 1989, sends Marty to 21 October 2015. I, Robot, released in 2004, is set in 2035. As of 10 October 2026, the first two dates are past and only 2035 is still ahead." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">SCI-FI DATES, SEEN FROM 10 OCTOBER 2026</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Two of these futures have passed.</text>
<rect x="527.8" y="100" width="80.2" height="238" rx="8" fill="var(--diagram-accent)" fill-opacity="0.08" stroke="none"></rect>
<text x="567.9" y="114" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.6">ahead</text>
<line x1="32" y1="340" x2="608" y2="340" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></line>
<line x1="62.3" y1="336" x2="62.3" y2="344" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5" stroke-linecap="round"></line>
<text x="62.3" y="362" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.5">1950</text>
<line x1="213.9" y1="336" x2="213.9" y2="344" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5" stroke-linecap="round"></line>
<text x="213.9" y="362" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.5">1975</text>
<line x1="365.5" y1="336" x2="365.5" y2="344" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5" stroke-linecap="round"></line>
<text x="365.5" y="362" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.5">2000</text>
<line x1="517.1" y1="336" x2="517.1" y2="344" stroke="currentColor" stroke-opacity="0.35" stroke-width="1.5" stroke-linecap="round"></line>
<text x="517.1" y="362" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.5">2025</text>
<line x1="527.8" y1="100" x2="527.8" y2="340" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="3 4" stroke-linecap="round"></line>
<text x="519.8" y="114" text-anchor="end" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13.5" font-weight="650" opacity="0.9">Today, 10 Oct. 2026</text>
<text x="57.3" y="134" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="650" font-style="italic" opacity="0.85">The Martian Chronicles</text>
<line x1="62.3" y1="150" x2="519.7" y2="150" stroke="currentColor" stroke-opacity="0.35" stroke-width="3" stroke-linecap="round"></line>
<circle cx="526.7" cy="150" r="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.75" stroke-width="2.5"></circle>
<circle cx="62.3" cy="150" r="5" fill="currentColor" fill-opacity="0.75"></circle>
<text x="62.3" y="174" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">1950</text>
<text x="515.8" y="174" text-anchor="end" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">4 Aug. 2026</text>
<text x="293.8" y="204" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="650" font-style="italic" opacity="0.85">Back to the Future Part II</text>
<line x1="298.8" y1="220" x2="454.3" y2="220" stroke="currentColor" stroke-opacity="0.35" stroke-width="3" stroke-linecap="round"></line>
<circle cx="461.3" cy="220" r="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-opacity="0.75" stroke-width="2.5"></circle>
<circle cx="298.8" cy="220" r="5" fill="currentColor" fill-opacity="0.75"></circle>
<text x="298.8" y="244" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">1989</text>
<text x="461.3" y="244" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">21 Oct. 2015</text>
<text x="384.7" y="274" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="650" font-style="italic" opacity="0.85">I, Robot</text>
<line x1="389.7" y1="290" x2="527.8" y2="290" stroke="currentColor" stroke-opacity="0.35" stroke-width="3" stroke-linecap="round"></line>
<line x1="527.8" y1="290" x2="570.7" y2="290" stroke="var(--diagram-accent)" stroke-width="3" stroke-linecap="round"></line>
<circle cx="577.7" cy="290" r="6" fill="var(--diagram-accent)" fill-opacity="0.18" stroke="var(--diagram-accent)" stroke-width="2.5"></circle>
<circle cx="389.7" cy="290" r="5" fill="currentColor" fill-opacity="0.75"></circle>
<text x="389.7" y="314" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">2004</text>
<text x="577.7" y="314" text-anchor="middle" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.85">2035</text>
<text x="32" y="390" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Solid dot: published or released. Ring: the date the story is set on.</text>
</svg>

<h2>Why we love it here</h2>
<p>We love being in this timeline. As kids, we watched these futures from the sofa. Now we can build pieces of them on a weeknight, at the kitchen table.</p>
<p>There is plenty of talk about <abbr title="A hypothetical AI that would outperform humans in nearly every field">superintelligence</abbr>. It is still a hypothesis, and nobody can say whether it will come, or when. What already exists is enough to get excited about: capable AI that we talk to in plain sentences.</p>
<p>With it, one curious person can already:</p>
<ul>
<li>step into an unfamiliar field by asking questions at their own pace, until the right one lands;</li>
<li>read a manual, a standard or a codebase written in a language they do not speak;</li>
<li>go from a sketch to a running prototype, break it, and start again;</li>
<li>finally write the test, the docs or the backup that kept slipping for months.</li>
</ul>
<p>Where is the limit? We cannot see it yet. What looked out of reach last year sometimes fits in one evening. The edges we hit are often our own: time, attention, tiredness. But models get things wrong too, and knowing that is part of the game.</p>
<blockquote><p>The films showed us the future. This timeline hands us the tools.</p></blockquote>
<p>That is the sense in which it was made for us. For people who build, who like to try things, and who grew up wanting to see this happen. We are no longer watching the future from the audience. We are tinkering with pieces of it.</p>

<h2>Smaller than the films</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/nerd-in-the-ai-era/house-light.png"><img src="/visuals/nerd-in-the-ai-era/house-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/nerd-in-the-ai-era/house-dark.png"><img src="/visuals/nerd-in-the-ai-era/house-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>The genre promised metal butlers and cars in the sky. What arrived fits on a desk: a terminal, an agent, an evening. It is less spectacular. Mostly, it is within reach of one person.</p>
<p>Here is what one person can already put together alone, with no team behind them.</p>
<ul>
<li><strong>A house that talks.</strong> Spoken announcements in the right room, at the right volume, and silence at night.</li>
<li><strong>Automations.</strong> A front door that sends word, a summary of the week that arrives by itself.</li>
<li><strong>Backups.</strong> An automatic off-site copy, with an alert that only speaks up on failure: silence is the good signal.</li>
<li><strong>Agents handing off to each other.</strong> One writes, another reviews, a third waits for a human's approval before acting.</li>
<li><strong>Parallel readings.</strong> Several agents each play a role: fact-checker, sceptical reader, editor. Then a human decides.</li>
<li><strong>A game or a tool built in one evening.</strong> A small game among friends, or a tool that helps a group decide.</li>
</ul>
<p>None of these things is a robot. It is the sci-fi of our screens, brought down to the size of a house. It fits in a few configuration files.</p>
<p>The hard part is rarely technical. An agent can write ten versions of an announcement, a menu or a setting in one evening. Knowing which one is right is still ours to feel.</p>
<blockquote><p>The agent does not find the right idea for us.</p></blockquote>

<h2>What this timeline bills</h2>
<p>It was not made for everyone. It assumes spare time, a job that leaves some energy for the evening, and enough grounding to judge what the agent hands back. Plenty of people do not have all three at once.</p>
<p><strong>Choosing.</strong> When anything can start, someone has to decide what will not. <strong>Finishing.</strong> The last few percent are edge cases, docs and decisions. <strong>Upkeep.</strong> Every live project takes up room in our heads, even on the days it is left alone.</p>
<p>Dropping a project used to be free and silent. A dead try stayed dead. Now everything can stay alive at once. Alive is not the same as finished.</p>
<p>The feeling of speed misleads, too. In 2025, <abbr title="Model Evaluation and Threat Research, an independent AI evaluation nonprofit">METR</abbr> followed 16 experienced developers working on their own projects: with AI they were 19% slower, while believing they were 20% faster. METR started a new experiment in August 2025 and published an update in February 2026. It calls the new data an unreliable signal, likely biased downward in its estimate of the speedup. METR also writes that developers are probably more sped up in early 2026.</p>
<p>There is a dystopian reading of this timeline, and it is not absurd. Jobs are changing, and the worry about employment is legitimate. These tools should not be used to shrink teams.</p>
<p>The models our agents depend on sit with a handful of providers. If those providers change their prices or their rules, our houses get no say. The talking house is still, in part, a rented one.</p>
<p>Speed also comes with its own loop, the one that makes stopping hard. <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">Another post looks at it up close</a>. The line comes down to one question: are we still the ones choosing to stop?</p>
<blockquote><p>Feeling good in a world does not prove that world is good.</p></blockquote>

<h2>What stays human</h2>
<p>Bradbury's house does not know the family is gone. Ours do not always know who is home. What the machine cannot see, a human still has to watch.</p>
<p><strong>Taste.</strong> <abbr title="Anil R. Doshi and Oliver P. Hauser, authors of the 2024 Science Advances study">Doshi and Hauser</abbr> had 293 people write short stories, split into three groups: no help, one AI-generated idea, five. The AI-assisted stories were rated more novel and more useful, most of all for the less creative writers. They also ended up more alike. That was fiction, not software. The risk worth keeping from it: if everyone tries things with the same tool, everyone drifts toward the same place.</p>
<p><strong>Doubt.</strong> "I ran the test" and "the test passed" are two different claims. An agent can report the first as if it were the second. Checking what the machine claims is still human work.</p>
<p><strong>Sorting and stopping.</strong> No agent knows which project deserves another evening. Closing a try is still a human move, and often the hardest one.</p>

<h2>Three guardrails</h2>
<p>Three rules we can set ourselves to keep the fun intact.</p>
<ol>
<li><strong>Two evenings to prove it is useful.</strong> A try that has served nobody after two evenings, us included, gets closed, with one line saying why.</li>
<li><strong>A monthly check-in.</strong> Every project with no news for thirty days is archived or gets a written next step.</li>
<li><strong>One finished thing a month.</strong> Finished means someone else could use it without us. Zero is an honest answer too.</li>
</ol>

<p><strong>Read next:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">AI Didn't Automate My House</a>: why the gain shows up on the projects nobody used to start.</p>
<hr>
<h2>What these numbers do not say</h2>
<p>METR's figures cover 16 developers working on existing code. The February 2026 update is cited for its caution, not for a figure.</p>
<p>Doshi and Hauser studied short stories, not software. The convergence they measured is a lead for code, not proof.</p>
<p>No figure here says how much time the examples above save, or for whom. The joy of being in this timeline is a feeling, and it is offered as one.</p>
<p>The stories mentioned here are cited for what they imagined, not as predictions.</p>

<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11244532/">Doshi and Hauser, Science Advances, 2024</a>: 293 participants. AI ideas made short stories more novel and more useful, and more similar to each other. No software in the study.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2507.09089">METR, arXiv 2507.09089</a>: 16 experienced developers, 246 tasks on their own projects, 19% slower with AI while believing they were 20% faster. Existing codebases only, small sample.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://metr.org/blog/2026-02-24-uplift-update">METR, February 2026 update</a>: new experiment started in August 2025, data METR itself calls an unreliable signal, likely biased downward in the speedup estimate. Cited for the caution, not for a figure.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/There_Will_Come_Soft_Rains_(short_story)">Ray Bradbury, "There Will Come Soft Rains"</a>: Collier's, 6 May 1950. The same year, a revised version became the chapter "August 2026" of <em>The Martian Chronicles</em>; the Collier's version carried a different date. The 1997 American edition moves the dates 31 years forward, to 2057. Separately, the French translation was revised by Jacques Chambon (Denoël, 1997), where the story is titled "Viendront de douces pluies...". Publication history cross-checked on <a target="_blank" rel="noopener noreferrer" href="https://www.noosfere.org/livres/EditionsLivre.asp?ID_ItemSommaire=2453&amp;Tri=2">nooSFere</a>.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Knight_Rider_(1982_TV_series)"><em>Knight Rider</em></a>: series created by Glen A. Larson, aired on NBC from 26 September 1982 to 4 April 1986. David Hasselhoff plays Michael Knight, assisted by KITT, an artificially intelligent car. Title card taken from <a target="_blank" rel="noopener noreferrer" href="https://it.wikipedia.org/wiki/File:Supercar.png">Italian Wikipedia</a>.</li>
<li>William Gibson, <em>Neuromancer</em>, 1984.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Back_to_the_Future_Part_II"><em>Back to the Future Part II</em>, Robert Zemeckis, 1989</a>: Marty McFly arrives on 21 October 2015, then old Biff hands his 1955 self a sports almanac and 1985 turns dystopian. Bob Gale's remark on flying cars is quoted there with its source.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/I,_Robot_(film)"><em>I, Robot</em>, Alex Proyas, 2004</a>: Chicago, 2035, the Three Laws and VIKI. The credits call the film "suggested by" Isaac Asimov's collection, not an adaptation.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Her_(2013_film)"><em>Her</em>, Spike Jonze, 2013</a>: Theodore, who writes letters for other people, and Samantha, an operating system voiced by Scarlett Johansson.</li>
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
