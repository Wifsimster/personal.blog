<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'nerd-in-the-ai-era',
  date: '2026-09-30',
  tags: ['AI', 'Opinion', 'Software', 'Homelab'],
  draft: true
}

const frenchContent: PostContent = {
  title: "Être un nerd à l'ère de l'IA",
  description: "Ce que mes dépôts GitHub de 2016 et de 2026 disent de l'envie d'essayer, pour les hackers et les makers. L'IA a fait tomber la barrière du premier pas. Décider quoi garder, le mener au bout et le faire vivre reste à ma charge.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Avec l'IA, le ticket d'entrée d'un essai a presque disparu, et mes dépôts GitHub le montrent. En 2016, j'en ai ouvert 21, et la moitié s'est arrêtée à neuf commits ou moins. En 2026, au 30 septembre, j'en ai ouvert 17, et la moitié a atteint 136 commits. L'envie est la même. Trier, terminer et entretenir se paient au même tarif qu'avant.</p></div>
<hr>
<p>Ce billet s'adresse aux hackers et aux makers : à tous ceux qui ont toujours une idée à tester et un soir pour s'y mettre.</p>

<h2>Ce que je suis</h2>
<p>Je suis un maker, et je l'ai écrit tel quel en mars, en anglais : « I'm a maker. Evenings and weekends, I experiment with AI ». Des soirs et des week-ends à essayer des choses.</p>
<p>J'aime fabriquer, et rendre fonctionnel ce qui me passe par la tête. Comme Géo Trouvetou.</p>
<p>En 2014 déjà, à propos d'un ruban de <abbr title="Diode électroluminescente">LED</abbr> acheté sur un coup de tête, j'écrivais : « j'aime les défis et surtout les nouvelles choses ». Douze ans plus tard, la phrase tient toujours.</p>
<p>Sur ma façon de penser, je m'en tiens à ce que j'ai déjà écrit : « J'ai simplement une grande capacité à inventer, des idées plein la tête en permanence — rien de plus. » Je n'y ajoute rien.</p>
<p>Dans ce billet, « nerd » est le mot du titre pour la même chose, simple : quelqu'un qui essaie pour voir si ça marche, et qui paie ce prix avec son temps libre.</p>

<h2>Avant : ce qui limitait le nerd</h2>
<p>2016 est mon année la plus prolifique avant l'IA. J'ai créé 21 nouveaux dépôts sur <abbr title="Plateforme d'hébergement de code source basée sur git">GitHub</abbr> en douze mois, pour 470 <abbr title="Enregistrement d'une modification dans l'historique d'un dépôt git">commits</abbr> au total. La <abbr title="La valeur du milieu : la moitié des dépôts en a moins, l'autre moitié en a plus">médiane</abbr> est de 9 commits par dépôt.</p>
<p>19 de ces 21 dépôts ont reçu leur dernier commit avant fin septembre 2017. Abandonner ne coûtait rien. Un dépôt mort ne réclame rien. On passait à l'idée suivante.</p>
<p>Puis vient le silence. Entre le 29 janvier 2022 et le 16 mai 2025, je n'ai créé aucun dépôt. Trente-neuf mois. En 2023, tous dépôts confondus, robots compris, l'historique compte 6 commits. En 2024, il en compte 2.</p>
<p>Git ne dit pas pourquoi. Il dit seulement ce que coûtait un essai. Dans mon bilan de dix ans de domotique, je résumais ainsi cette époque : « Un montage occupait un week-end entier, et je documentais le week-end suivant. »</p>
<p>Le prix d'un essai se payait d'avance. Lire la documentation d'un outil inconnu. Monter l'environnement. Écrire la plomberie avant la première ligne utile. Tout ça avant de savoir si l'idée valait quelque chose.</p>
<p>Ma lecture, qu'aucun historique ne prouve : ce prix faisait un tri. Il ne gardait pas les bonnes idées. Il gardait celles qui tenaient dans une soirée.</p>

<h2>Après : ce que l'IA a enlevé</h2>
<p>Depuis janvier 2026, je travaille avec des agents d'<abbr title="Intelligence artificielle">IA</abbr>, au bureau comme le soir. Au 30 septembre, j'ai créé 17 dépôts cette année. C'est à peu près le rythme de 2016 : 21 en douze mois, 17 en neuf.</p>
<p>La différence est dans la profondeur. Ces 17 dépôts totalisent 4 491 commits. Leur médiane est de 136. La moitié d'entre eux a donc atteint ce seuil.</p>
<svg viewBox="0 0 640 392" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogramme des nouveaux dépôts GitHub par an, de 2012 à 2026 : 21 en 2016 avec une médiane de 9 commits, zéro en 2018, 2023 et 2024, puis 17 en 2026 au 30 septembre avec une médiane de 136 commits. Le nombre d'essais revient au niveau de 2016 ; leur profondeur n'a rien à voir." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">NOUVEAUX DÉPÔTS PAR AN, 2012-2026</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Même élan, autre profondeur.</text>
<rect x="452" y="236" width="82" height="84" rx="8" fill="currentColor" fill-opacity="0.07"></rect>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.6" text-anchor="middle">
<text x="493" y="260">39 mois</text>
<text x="493" y="278">sans dépôt</text>
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
<p>Deux précautions. Ces chiffres couvrent mes dépôts personnels hors <abbr title="Copie d'un dépôt appartenant à quelqu'un d'autre">forks</abbr>, dont 3 privés. Et un dépôt de 2026 a neuf mois au plus : trop tôt pour parler de survie.</p>
<p>Ce qui a disparu, c'est le mur du début. La documentation qu'on n'a pas envie de lire. Le squelette du projet. La première version qui tourne assez pour juger l'idée. L'agent prend tout ça en charge, et l'essai commence là où il s'arrêtait avant.</p>
<p>Ma lecture, là encore : en 2016, beaucoup de mes dépôts ne mouraient pas d'une mauvaise idée. Ils mouraient au deuxième obstacle, avant la deuxième soirée. Git ne garde pas ce genre de raison. La médiane de 9 commits, si.</p>
<p>Côté maison, les preuves concrètes sont dans <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">ce récit de domotique pilotée par un agent</a>. Ici, je m'en tiens au code et à ce que ça change pour la personne.</p>
<p>Car c'est d'abord une affaire d'identité. Pendant des années, être nerd voulait dire accepter de payer l'entrée. Lire, souder, configurer, avant le moindre résultat. Ce droit d'entrée a presque disparu. Il reste l'envie, et la question de savoir quoi en faire.</p>
<blockquote><p>Le nerd n'a pas changé. C'est le prix du premier pas qui a changé.</p></blockquote>

<h2>Ce qui n'a pas bougé : choisir, finir, garder en vie</h2>
<p>Tout ce qui vient après le premier essai coûte le même prix qu'avant.</p>
<p>Au 30 septembre, 13 de mes 17 dépôts de 2026 ont reçu un push dans les trente derniers jours. Un seul est archivé. En 2016, abandonner était gratuit et silencieux. En 2026, tout reste vivant en même temps, et chaque dépôt vivant réclame de l'attention.</p>
<p>Les trois derniers n'ont rien reçu depuis plus d'un mois, sans être archivés. Ni vivants ni morts. C'est là que l'entretien coûte le plus : une décision qu'on repousse.</p>
<p>Vivant ne veut pas dire fini. Git n'a pas de case « terminé ». Et un push peut venir d'un robot qui met à jour une dépendance.</p>
<blockquote><p>Essayer ne coûte presque plus rien. Choisir, finir et entretenir coûtent toujours autant.</p></blockquote>
<p><strong>Choisir.</strong> Quand tout peut démarrer, il faut décider ce qu'on ne démarre pas. <strong>Finir.</strong> Les derniers pour cent d'un projet sont faits de cas limites, de documentation et de décisions. <strong>Entretenir.</strong> Chaque dépôt vivant occupe une place dans ma tête, même quand je n'y touche pas.</p>
<p>Sur ce terrain-là, les preuves de gain sont minces. L'étude de <abbr title="Model Evaluation and Threat Research, organisme indépendant d'évaluation des modèles d'IA">METR</abbr> a suivi 16 développeurs expérimentés sur 246 tâches, dans leurs propres dépôts. Avec l'IA, ils ont été 19 % plus lents. Ils pensaient avoir gagné 20 %.</p>
<p>L'échantillon est petit, et il ne couvre que du code existant. METR qualifie elle-même de signal peu fiable les chiffres de son suivi de 2026. J'en retiens une seule chose : l'impression d'aller vite ne mesure rien.</p>
<p>Il y a aussi la face sombre, la boucle qui empêche de s'arrêter. Je l'ai <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">décrite de près ailleurs</a>. La frontière entre passion et compulsion tient en une question : est-ce que je choisis encore d'arrêter ?</p>

<h2>Ce qui reste aux humains</h2>
<p><strong>Le goût.</strong> <abbr title="Anil R. Doshi et Oliver P. Hauser, auteurs de l'étude publiée dans Science Advances en 2024">Doshi et Hauser</abbr> ont donné des idées générées par IA à des auteurs de courtes histoires, 293 au total. Les textes ont été jugés plus originaux (+8,1 %) et plus utiles (+9,0 %). Le gain était plus fort chez les moins créatifs. Mais les histoires se ressemblaient davantage entre elles.</p>
<p>Ce n'était pas du logiciel. J'en garde le risque : si tout le monde essaie avec le même outil, tout le monde converge.</p>
<p><strong>Le tri.</strong> Aucun agent ne sait lequel de mes 17 dépôts mérite une soirée de plus.</p>
<p><strong>L'arrêt.</strong> Fermer un dépôt reste un geste humain. C'est aussi celui qui empêche l'envie de devenir une obligation.</p>

<h2>Trois règles que je veux tenir</h2>
<p>Je n'ai pas de méthode à vendre. Seulement trois garde-fous, pour que l'envie d'essayer ne tourne pas à l'encombrement.</p>
<ol>
<li><strong>Deux soirées pour prouver son utilité.</strong> Un essai qui n'a servi à personne au bout de deux soirées, moi compris, part aux archives. J'ajoute une ligne pour me rappeler pourquoi.</li>
<li><strong>Un tour du cimetière chaque mois.</strong> Je liste les dépôts muets depuis trente jours. Chacun est archivé ou reçoit une prochaine étape écrite. Pas d'entre-deux.</li>
<li><strong>Une chose terminée par mois.</strong> Terminée veut dire que quelqu'un d'autre pourrait s'en servir sans moi. Zéro, c'est aussi une réponse honnête.</li>
</ol>

<p><strong>Lire aussi :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">Le SDLC est mort</a> — la boucle du maker appliquée au logiciel professionnel. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">L'IA est devenue un réflexe d'équipe</a> — essayer, à l'échelle d'une équipe. <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Dix ans de domotique tout seul, un an avec un agent</a> — dix ans de montages du week-end, et l'inventaire d'aujourd'hui.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11244532/">Doshi et Hauser, Science Advances, 2024</a> : 293 auteurs de fiction courte, textes jugés plus originaux et plus utiles avec des idées d'IA, mais plus semblables entre eux. Pas de logiciel dans l'étude.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2507.09089">METR, arXiv 2507.09089</a> : 16 développeurs expérimentés, 246 tâches sur leurs propres dépôts, 19 % plus lents avec l'IA alors qu'ils se pensaient 20 % plus rapides. Code existant uniquement, petit échantillon.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://metr.org/blog/2026-02-24-uplift-update">METR, mise à jour de février 2026</a> : le suivi de l'étude, dont METR juge elle-même les nouveaux chiffres peu fiables. Cité pour la prudence, pas pour un chiffre.</li>
<li>Mes dépôts GitHub, relevé du 30 septembre 2026 : 78 dépôts personnels hors forks, dont 3 privés, datés par leur date de création. Nombre de commits relevé dans l'historique git de chaque dépôt. Pas de lien : trois dépôts sont privés.</li>
</ul>`
}

const englishContent: PostContent = {
  title: 'Being a Nerd in the AI Era',
  description: "What my GitHub repos from 2016 and 2026 say about the urge to try things, for hackers and makers. AI knocked down the wall in front of the first step. Deciding what to keep, seeing it through and keeping it running are still on me.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> With AI, the entry fee for a try has nearly vanished, and my GitHub repos show it. In 2016 I started 21, and half of them stopped at nine commits or fewer. In 2026, as of 30 September, I started 17, and half of them reached 136. The urge hasn't moved. Sorting, finishing and upkeep cost exactly what they used to.</p></div>
<hr>
<p>This post is for hackers and makers: anyone who always has an idea to test and an evening to spend on it.</p>

<h2>What I am</h2>
<p>I'm a maker, and I wrote it just like that in March: "I'm a maker. Evenings and weekends, I experiment with AI." Evenings and weekends, trying things.</p>
<p>I like building, and making whatever crosses my mind actually work. Think Gyro Gearloose.</p>
<p>Back in 2014, writing about an <abbr title="Light-emitting diode">LED</abbr> strip bought on a whim, I put it in French: « j'aime les défis et surtout les nouvelles choses ». I like challenges, and new things most of all. Twelve years on, that still holds.</p>
<p>On how my head works, I stick to what I have already written: "I simply have an outsized capacity to invent, a head permanently full of ideas — nothing more." I'm not adding to that.</p>
<p>In this post, "nerd" is the title's word for the same plain thing: someone who tries things to see whether they work, and pays for it with their free time.</p>

<h2>Before: what held the nerd back</h2>
<p>2016 was my busiest year before AI. I created 21 new repos on <abbr title="A source-code hosting platform built on git">GitHub</abbr> that year, 470 <abbr title="A recorded change in a git repository's history">commits</abbr> in total. The <abbr title="The middle value: half the repos have fewer, half have more">median</abbr> repo got 9 commits.</p>
<p>19 of those 21 had their last commit before the end of September 2017. Dropping a project was free. A dead repo asks for nothing. You just moved on to the next idea.</p>
<p>Then came the quiet. Between 29 January 2022 and 16 May 2025, I created no repo at all. Thirty-nine months. In 2023, across every repo and counting bots, the history holds 6 commits. In 2024, it holds 2.</p>
<p>Git doesn't say why. It only shows what a try used to cost. In my ten-year home automation retrospective, I summed up that era this way: "One build took a whole weekend, and I documented it the weekend after."</p>
<p>You paid for a try up front. Read the docs for a tool you had never used. Set up the environment. Write the plumbing before the first useful line. All of it before you knew whether the idea was any good.</p>
<p>My reading, which no commit log can prove: that price did the sorting. It didn't keep the good ideas. It kept the ones that fit in one evening.</p>

<h2>After: what AI took away</h2>
<p>Since January 2026 I have worked with <abbr title="Artificial intelligence">AI</abbr> agents, at the office and after hours. As of 30 September, I have created 17 repos this year. That is roughly the 2016 pace: 21 in twelve months, 17 in nine.</p>
<p>The difference is depth. Those 17 repos hold 4,491 commits between them. Their median is 136. Half of them reached at least that.</p>
<svg viewBox="0 0 640 392" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of new GitHub repos per year from 2012 to 2026: 21 in 2016 with a median of 9 commits, zero in 2018, 2023 and 2024, then 17 in 2026 as of 30 September with a median of 136 commits. The number of tries is back at the 2016 level; how far each one goes is not comparable." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">NEW REPOS PER YEAR, 2012-2026</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Same urge. Not the same depth.</text>
<rect x="452" y="236" width="82" height="84" rx="8" fill="currentColor" fill-opacity="0.07"></rect>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.6" text-anchor="middle">
<text x="493" y="260">39 months</text>
<text x="493" y="278">no new repo</text>
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
<p>Two caveats. These counts cover my personal repos minus <abbr title="A copy of someone else's repository">forks</abbr>, and 3 of them are private. And a 2026 repo is nine months old at most. Too early to talk about survival.</p>
<p>What disappeared is the wall at the start. The docs you don't feel like reading. The project skeleton. The first version that runs well enough to judge the idea. The agent carries all of that, so a try now starts where it used to stall.</p>
<p>My reading again: in 2016, plenty of my repos didn't die of a bad idea. They died at the second obstacle, before the second evening. Git keeps no record of reasons like that. The median of 9 commits is the trace it does keep.</p>
<p>For the house, the hands-on evidence lives in <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">this account of home automation run through an agent</a>. Here I stay with the code, and with what it changes for the person writing it.</p>
<p>Because this is about identity first. For years, being a nerd meant agreeing to pay the entry fee. Read, solder, configure, all before seeing any result. That fee has nearly vanished. What remains is the urge, and the question of what to do with it.</p>
<blockquote><p>Nerds didn't change. The price of getting started did.</p></blockquote>

<h2>What didn't move: choosing, finishing, keeping alive</h2>
<p>Everything after the first try still costs what it always did.</p>
<p>As of 30 September, 13 of my 17 repos from 2026 got a push in the last thirty days. One is archived. In 2016, dropping a project was free and silent. In 2026, everything stays alive at once, and every live repo wants attention.</p>
<p>The last three have had nothing for over a month, and none is archived. Not alive, not dead. That is where upkeep costs the most: a decision you keep putting off.</p>
<p>Alive is not the same as finished. Git has no "done" flag. And a push can come from a bot bumping a dependency.</p>
<blockquote><p>Trying is almost free now. Choosing, finishing and upkeep are billed at the old rate.</p></blockquote>
<p><strong>Choosing.</strong> When anything can start, you have to decide what won't. <strong>Finishing.</strong> The last few percent of a project are edge cases, docs and decisions. <strong>Upkeep.</strong> Every live repo holds a slot in my head, even on the days I don't touch it.</p>
<p>On that ground, the evidence for gains is thin. A <abbr title="Model Evaluation and Threat Research, an independent AI evaluation nonprofit">METR</abbr> study followed 16 experienced developers through 246 tasks in their own repos. With AI, they were 19% slower. They believed they had been 20% faster.</p>
<p>The sample is small and it covers <abbr title="Existing codebases with history and users, as opposed to greenfield projects started from scratch">brownfield</abbr> code only. METR's own 2026 follow-up calls its newer numbers an unreliable signal. I take one thing from it: feeling fast measures nothing.</p>
<p>There is also a darker side, the loop that won't let you stop. I have <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">looked at it up close elsewhere</a>. The line between passion and compulsion comes down to one question: am I still the one choosing to stop?</p>

<h2>What still belongs to humans</h2>
<p><strong>Taste.</strong> <abbr title="Anil R. Doshi and Oliver P. Hauser, authors of the 2024 Science Advances study">Doshi and Hauser</abbr> gave AI-generated ideas to 293 people writing short stories. The stories were rated more novel (+8.1%) and more useful (+9.0%). The least creative writers gained the most. But the stories ended up more alike.</p>
<p>That was fiction, not software. What I keep is the risk: if everyone tries things with the same tool, everyone drifts toward the same place.</p>
<p><strong>Sorting.</strong> No agent knows which of my 17 repos deserves another evening.</p>
<p><strong>Stopping.</strong> Closing a repo is still a human move. It is also the one that keeps the urge from turning into an obligation.</p>

<h2>Three rules I want to keep</h2>
<p>I have no method to sell. Just three guardrails, so the urge to try things doesn't turn into clutter.</p>
<ol>
<li><strong>Two evenings to prove it's useful.</strong> A try that has served nobody after two evenings, me included, goes to the archive. I add one line to remind myself why.</li>
<li><strong>A monthly walk through the graveyard.</strong> I list the repos that have been silent for thirty days. Each one is archived or gets a written next step. No limbo.</li>
<li><strong>One finished thing a month.</strong> Finished means someone else could use it without me. Zero is an honest answer too.</li>
</ol>

<p><strong>Read next:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">The SDLC Is Dead</a> — the maker's loop brought into professional software. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">AI Became a Team Reflex</a> — trying things, at team scale. <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Ten Years of Home Automation Alone. One Year With an Agent.</a> — a decade of weekend builds, and the inventory today.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11244532/">Doshi and Hauser, Science Advances, 2024</a>: 293 short-fiction writers. AI ideas made stories more novel and more useful, and more similar to each other. No software in the study.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2507.09089">METR, arXiv 2507.09089</a>: 16 experienced developers, 246 tasks in their own repos, 19% slower with AI while believing they were 20% faster. Brownfield only, small sample.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://metr.org/blog/2026-02-24-uplift-update">METR, February 2026 update</a>: the follow-up, whose newer numbers METR itself calls an unreliable signal. Cited for the caution, not for a figure.</li>
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
