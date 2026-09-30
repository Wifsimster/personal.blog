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
  description: "Nerd, geek, hacker, maker, no-life : d'où viennent ces mots, et ce que mes dépôts GitHub de 2016 et de 2026 disent de l'envie d'essayer. L'IA a fait tomber la barrière du premier pas. Décider quoi garder, le mener au bout et le faire vivre reste à ma charge.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Nerd, geek, hacker, maker, no-life : cinq mots pour la même manie, qui ne disent pas la même chose. Deux sont nés comme des insultes. Deux décrivent un geste. Le dernier décrit un manque. Mes dépôts GitHub racontent la suite. En 2016, j'en ai ouvert 21, et la moitié s'est arrêtée à neuf commits ou moins. En 2026, au 30 septembre, j'en ai ouvert 17, et la moitié a atteint 136 commits. L'envie est la même. Avec l'IA, le ticket d'entrée a presque disparu. Trier, terminer et entretenir se paient au même tarif qu'avant.</p></div>
<hr>
<p>Le mot « nerd » n'apparaît dans aucun billet de ce blog. « Geek » non plus, ni « no-life ». J'y parle pourtant de soudure, de capteurs et de code du soir depuis des années.</p>
<p>Ce titre est la première fois que je me range sous ce mot. Un mot qu'on porte, autant savoir d'où il vient.</p>

<h2>Définir : nerd, geek, hacker, maker, no-life</h2>
<p><strong>Geek</strong> est le plus ancien. Selon <abbr title="Online Etymology Dictionary, dictionnaire étymologique de l'anglais tenu par Douglas Harper">etymonline</abbr>, il vient de « geck », un fou, attesté dans les années 1510. En 1911, un geek est un phénomène de foire. Dans les années 1980, c'est encore une insulte. Vers 1989, l'argot des campus américains l'a rendu neutre.</p>
<p><strong>Nerd</strong> apparaît en 1950 chez <abbr title="Theodor Seuss Geisel, auteur américain de livres pour enfants">Dr. Seuss</abbr>, dans <em>If I Ran the Zoo</em>. C'est le nom d'une créature. Le mot entre dans l'argot dès 1951. On raconte qu'il viendrait de « knurd », <em>drunk</em> à l'envers. C'est une tradition orale : etymonline le fait plutôt venir, « probablement », de « nert », lui-même tiré de « nut », le cinglé.</p>
<p>Le Wiktionnaire français, lui, en est resté là : « Socialement handicapé et passionné par des sujets liés à la science et aux techniques ». La définition a vieilli plus vite que le mot.</p>
<p><strong>Hacker</strong> a pris un autre chemin. Le <abbr title="Lexique collectif de l'argot des hackers, publié en ligne par Eric S. Raymond">Jargon File</abbr>, le lexique des hackers eux-mêmes, en donne plusieurs définitions. L'une d'elles est le plaisir du défi intellectuel : surmonter ou contourner une limite, avec créativité. Le malveillant a son propre mot, <em>cracker</em>. <strong>Maker</strong> prolonge la culture du <abbr title="Do It Yourself, fais-le toi-même">DIY</abbr>. Ces deux mots-là désignent un geste, pas une personne vue de l'extérieur.</p>
<p><strong>No-life</strong> n'a aucune définition de dictionnaire que j'aie pu vérifier. Je le définis donc par un comportement : une activité qui a mangé le reste. Le sommeil, les repas, les proches. L'article Geek de Wikipédia en français trace la frontière utile. Le geek garde une communauté. Le no-life la perd.</p>
<p>C'est là que je sépare ce que le mot mélange. La passion est une activité qu'on choisit et qu'on sait arrêter. La compulsion décide à votre place. Je ne revendique pas « no-life ». Le mot décrit une perte, pas un talent.</p>
<svg viewBox="0 0 640 504" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Frise de cinq mots : geek et nerd ont vécu comme des insultes avant de devenir neutres, et le Wiktionnaire français décrit encore le nerd comme socialement handicapé ; hacker et maker désignent ce qu'on fait ; no-life, sans définition sourcée, désigne ce qu'on perd." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">CINQ MOTS, D'OÙ ILS VIENNENT</text>
<text x="32" y="74" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Deux insultes, deux gestes, un vide.</text>
<line x1="120" y1="128" x2="120" y2="278" stroke="currentColor" stroke-opacity="0.22" stroke-width="2" stroke-linecap="round"></line>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75" text-anchor="end">
<text x="104" y="133">1510s</text>
<text x="104" y="163">1911</text>
<text x="104" y="193">1950-51</text>
<text x="104" y="223">années 80</text>
<text x="104" y="253">vers 1989</text>
<text x="104" y="283">2026</text>
</g>
<g stroke-width="2">
<circle cx="120" cy="128" r="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.7"></circle>
<circle cx="120" cy="158" r="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.7"></circle>
<circle cx="120" cy="188" r="6" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-opacity="0.35"></circle>
<circle cx="120" cy="218" r="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.7"></circle>
<circle cx="120" cy="248" r="6" fill="var(--diagram-accent)" stroke="var(--diagram-accent)"></circle>
<circle cx="120" cy="278" r="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.7"></circle>
</g>
<g fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="136" y="117" width="60" height="22" rx="6"></rect>
<rect x="136" y="147" width="60" height="22" rx="6"></rect>
<rect x="136" y="177" width="60" height="22" rx="6"></rect>
<rect x="136" y="207" width="60" height="22" rx="6"></rect>
<rect x="136" y="237" width="60" height="22" rx="6"></rect>
<rect x="136" y="267" width="60" height="22" rx="6"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" letter-spacing="0.06em" text-anchor="middle">
<text x="166" y="133">GEEK</text>
<text x="166" y="163">GEEK</text>
<text x="166" y="193">NERD</text>
<text x="166" y="223">GEEK</text>
<text x="166" y="253">GEEK</text>
<text x="166" y="283">NERD</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">
<text x="212" y="133">« geck » : un fou</text>
<text x="212" y="163">un phénomène de foire</text>
<text x="212" y="193">une créature de Dr. Seuss, puis de l'argot</text>
<text x="212" y="223">toujours une insulte</text>
<text x="212" y="253">argot des campus, devenu neutre</text>
<text x="212" y="283">Wiktionnaire : « socialement handicapé »</text>
</g>
<g font-family="ui-sans-serif, system-ui, sans-serif" font-size="13">
<circle cx="40" cy="316" r="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.7" stroke-width="2"></circle>
<text x="54" y="321" fill="currentColor" opacity="0.6">insulte</text>
<circle cx="140" cy="316" r="6" fill="var(--diagram-accent)"></circle>
<text x="154" y="321" fill="currentColor" opacity="0.6">neutre</text>
<circle cx="236" cy="316" r="6" fill="currentColor" fill-opacity="0.35"></circle>
<text x="250" y="321" fill="currentColor" opacity="0.6">ton non établi par les sources</text>
</g>
<text x="32" y="360" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">CE QU'ON FAIT, CE QU'ON PERD</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="376" width="184" height="92" rx="8" fill="currentColor" fill-opacity="0.07"></rect>
<rect x="228" y="376" width="184" height="92" rx="8" fill="currentColor" fill-opacity="0.07"></rect>
<rect x="424" y="376" width="184" height="92" rx="8" fill="none" stroke-dasharray="4 5" stroke-opacity="0.45"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="650" letter-spacing="0.06em">
<text x="48" y="404">HACKER</text>
<text x="244" y="404">MAKER</text>
<text x="440" y="404">NO-LIFE</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">
<text x="48" y="428">aime vaincre une limite</text>
<text x="48" y="450">le malveillant : cracker</text>
<text x="244" y="428">fabrique et bricole</text>
<text x="244" y="450">héritier du DIY</text>
<text x="440" y="428">sans définition sourcée</text>
<text x="440" y="450">nomme ce qu'on perd</text>
</g>
<text x="32" y="492" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Sources : etymonline, Jargon File, Wikipédia, Wiktionnaire.</text>
</svg>
<blockquote><p>Geek et nerd sont des mots que les autres ont posés sur nous. Hacker et maker disent ce qu'on fait. No-life dit ce qu'on a laissé tomber.</p></blockquote>

<h2>Ce que je suis, sans étiquette</h2>
<p>Je n'ai jamais eu besoin de ces mots pour me présenter. Le seul que j'aie écrit, c'est « maker ». C'était en mars, en anglais : « I'm a maker. Evenings and weekends, I experiment with AI ». Des soirs et des week-ends à essayer des choses.</p>
<p>En 2014 déjà, à propos d'un ruban de <abbr title="Diode électroluminescente">LED</abbr> acheté sur un coup de tête, j'écrivais : « j'aime les défis et surtout les nouvelles choses ». Douze ans plus tard, la phrase tient toujours.</p>
<p>Sur ma façon de penser, je m'en tiens à ce que j'ai déjà écrit : « J'ai simplement une grande capacité à inventer, des idées plein la tête en permanence — rien de plus. » Je n'y ajoute rien.</p>
<p>Dans ce billet, « nerd » veut donc dire une chose simple. Quelqu'un qui essaie pour voir si ça marche, et qui paie ce prix avec son temps libre.</p>

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
<p><strong>L'arrêt.</strong> Fermer un dépôt reste un geste humain. C'est aussi celui qui sépare la passion du no-life.</p>

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
<li><a target="_blank" rel="noopener noreferrer" href="https://www.etymonline.com/word/nerd">etymonline — nerd</a> : première trace chez Dr. Seuss en 1950, sens argotique en 1951. Origine « probablement » de « nert », « nut ». L'histoire du « knurd » n'y est pas retenue.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.etymonline.com/word/geek">etymonline — geek</a> : « geck » vers les années 1510, phénomène de foire en 1911, insulte jusqu'aux années 1980, argot neutre vers 1989.</li>
<li><a target="_blank" rel="noopener noreferrer" href="http://www.catb.org/jargon/html/H/hacker.html">Jargon File — hacker</a> et <a target="_blank" rel="noopener noreferrer" href="http://www.catb.org/jargon/html/C/cracker.html">cracker</a> : la définition par le défi intellectuel, et le mot réservé au sens malveillant.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Maker_culture">Wikipedia — Maker culture</a> : le mouvement maker comme prolongement de la culture DIY. Cité pour la filiation, rien de plus.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://fr.wiktionary.org/wiki/nerd">Wiktionnaire — nerd</a> : cité pour montrer l'âge de la définition française, pas pour l'endosser.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://fr.wikipedia.org/wiki/Geek">Wikipédia — Geek</a> : la connotation méliorative et communautaire du mot, et la distinction avec le no-life.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11244532/">Doshi et Hauser, Science Advances, 2024</a> : 293 auteurs de fiction courte, textes jugés plus originaux et plus utiles avec des idées d'IA, mais plus semblables entre eux. Pas de logiciel dans l'étude.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2507.09089">METR, arXiv 2507.09089</a> : 16 développeurs expérimentés, 246 tâches sur leurs propres dépôts, 19 % plus lents avec l'IA alors qu'ils se pensaient 20 % plus rapides. Code existant uniquement, petit échantillon.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://metr.org/blog/2026-02-24-uplift-update">METR, mise à jour de février 2026</a> : le suivi de l'étude, dont METR juge elle-même les nouveaux chiffres peu fiables. Cité pour la prudence, pas pour un chiffre.</li>
<li>Mes dépôts GitHub, relevé du 30 septembre 2026 : 78 dépôts personnels hors forks, dont 3 privés, datés par leur date de création. Nombre de commits relevé dans l'historique git de chaque dépôt. Pas de lien : trois dépôts sont privés.</li>
</ul>`
}

const englishContent: PostContent = {
  title: 'Being a Nerd in the AI Era',
  description: "Nerd, geek, hacker, maker, no-life: where the words come from, and what my GitHub repos from 2016 and 2026 say about the urge to try things. AI knocked down the wall in front of the first step. Deciding what to keep, seeing it through and keeping it running are still on me.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Nerd, geek, hacker, maker, no-life. Five words for one habit, and they don't mean the same thing. Two started life as insults. Two name an action. The last one names a loss. My GitHub repos tell the rest. In 2016 I started 21, and half of them stopped at nine commits or fewer. In 2026, as of 30 September, I started 17, and half of them reached 136. The urge hasn't moved. With AI, the entry fee is nearly gone. Sorting, finishing and upkeep cost exactly what they used to.</p></div>
<hr>
<p>The word "nerd" appears in no post on this blog. Neither does "geek", or "no-life". And yet I have been writing about soldering irons, sensors and after-hours code here for years.</p>
<p>This title is the first time I file myself under that word. If I'm going to wear it, I want to know where it has been.</p>

<h2>Definitions: nerd, geek, hacker, maker, no-life</h2>
<p><strong>Geek</strong> is the oldest of the five. <abbr title="The Online Etymology Dictionary, an English etymology reference maintained by Douglas Harper">Etymonline</abbr> traces it to "geck", a fool, in the 1510s. By 1911 a geek is a sideshow freak. Through the 1980s it is still an insult. Around 1989, American college slang turns it neutral.</p>
<p><strong>Nerd</strong> first shows up in 1950, in <abbr title="Theodor Seuss Geisel, American children's author">Dr. Seuss</abbr>'s <em>If I Ran the Zoo</em>, as the name of a creature. It becomes slang in 1951. You may have heard it comes from "knurd", drunk spelled backwards. That story is oral tradition. Etymonline says the word "probably" comes from "nert", itself from "nut".</p>
<p>French Wiktionary never moved on. Its entry still reads « Socialement handicapé et passionné par des sujets liés à la science et aux techniques »: socially handicapped, and passionate about science and technology. The definition has aged worse than the word.</p>
<p><strong>Hacker</strong> took a different path. The <abbr title="A collective glossary of hacker slang, published online by Eric S. Raymond">Jargon File</abbr>, the hackers' own dictionary, lists several definitions. One of them is "one who enjoys the intellectual challenge of creatively overcoming or circumventing limitations." The malicious version gets its own word: cracker. <strong>Maker</strong> grew out of <abbr title="Do It Yourself">DIY</abbr> culture. Both words describe what you do. Neither is a label pinned on you from outside.</p>
<p><strong>No-life</strong> has no dictionary definition I could verify. So I define it by behaviour: one activity that has eaten everything else. Sleep, meals, the people around you. The French Wikipedia article on geeks draws the useful line. A geek keeps a community. A no-life loses it.</p>
<p>That is where I split what the word lumps together. Passion is something you choose and know how to stop. Compulsion does the choosing for you. I'm not claiming "no-life" as a badge. It names a loss, not a talent.</p>
<svg viewBox="0 0 640 504" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of five words: geek and nerd lived as insults before turning neutral, and French Wiktionary still calls a nerd socially handicapped; hacker and maker name what you do; no-life, with no sourced definition, names what you lose." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">FIVE WORDS, WHERE THEY CAME FROM</text>
<text x="32" y="74" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Two insults, two verbs, a void.</text>
<line x1="120" y1="128" x2="120" y2="278" stroke="currentColor" stroke-opacity="0.22" stroke-width="2" stroke-linecap="round"></line>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75" text-anchor="end">
<text x="104" y="133">1510s</text>
<text x="104" y="163">1911</text>
<text x="104" y="193">1950-51</text>
<text x="104" y="223">1980s</text>
<text x="104" y="253">c. 1989</text>
<text x="104" y="283">2026</text>
</g>
<g stroke-width="2">
<circle cx="120" cy="128" r="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.7"></circle>
<circle cx="120" cy="158" r="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.7"></circle>
<circle cx="120" cy="188" r="6" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-opacity="0.35"></circle>
<circle cx="120" cy="218" r="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.7"></circle>
<circle cx="120" cy="248" r="6" fill="var(--diagram-accent)" stroke="var(--diagram-accent)"></circle>
<circle cx="120" cy="278" r="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.7"></circle>
</g>
<g fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="136" y="117" width="60" height="22" rx="6"></rect>
<rect x="136" y="147" width="60" height="22" rx="6"></rect>
<rect x="136" y="177" width="60" height="22" rx="6"></rect>
<rect x="136" y="207" width="60" height="22" rx="6"></rect>
<rect x="136" y="237" width="60" height="22" rx="6"></rect>
<rect x="136" y="267" width="60" height="22" rx="6"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" letter-spacing="0.06em" text-anchor="middle">
<text x="166" y="133">GEEK</text>
<text x="166" y="163">GEEK</text>
<text x="166" y="193">NERD</text>
<text x="166" y="223">GEEK</text>
<text x="166" y="253">GEEK</text>
<text x="166" y="283">NERD</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">
<text x="212" y="133">"geck": a fool</text>
<text x="212" y="163">a sideshow freak</text>
<text x="212" y="193">a Dr. Seuss creature, then slang</text>
<text x="212" y="223">still an insult</text>
<text x="212" y="253">college slang, now neutral</text>
<text x="212" y="283">French Wiktionary: "socially handicapped"</text>
</g>
<g font-family="ui-sans-serif, system-ui, sans-serif" font-size="13">
<circle cx="40" cy="316" r="6" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-opacity="0.7" stroke-width="2"></circle>
<text x="54" y="321" fill="currentColor" opacity="0.6">insult</text>
<circle cx="130" cy="316" r="6" fill="var(--diagram-accent)"></circle>
<text x="144" y="321" fill="currentColor" opacity="0.6">neutral</text>
<circle cx="226" cy="316" r="6" fill="currentColor" fill-opacity="0.35"></circle>
<text x="240" y="321" fill="currentColor" opacity="0.6">tone not established by the sources</text>
</g>
<text x="32" y="360" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">WHAT YOU DO, WHAT YOU LOSE</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="376" width="184" height="92" rx="8" fill="currentColor" fill-opacity="0.07"></rect>
<rect x="228" y="376" width="184" height="92" rx="8" fill="currentColor" fill-opacity="0.07"></rect>
<rect x="424" y="376" width="184" height="92" rx="8" fill="none" stroke-dasharray="4 5" stroke-opacity="0.45"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="650" letter-spacing="0.06em">
<text x="48" y="404">HACKER</text>
<text x="244" y="404">MAKER</text>
<text x="440" y="404">NO-LIFE</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">
<text x="48" y="428">enjoys beating a limit</text>
<text x="48" y="450">its dark twin: cracker</text>
<text x="244" y="428">builds and tinkers</text>
<text x="244" y="450">heir to DIY culture</text>
<text x="440" y="428">no sourced definition</text>
<text x="440" y="450">names what you lose</text>
</g>
<text x="32" y="492" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Sources: etymonline, Jargon File, Wikipedia, Wiktionary.</text>
</svg>
<blockquote><p>Other people pinned geek and nerd on us. Hacker and maker are things we do. No-life is what we let slip.</p></blockquote>

<h2>What I am, minus the label</h2>
<p>I never needed any of these words to introduce myself. The only one I have used is "maker". That was in March: "I'm a maker. Evenings and weekends, I experiment with AI." Evenings and weekends, trying things.</p>
<p>Back in 2014, writing about an <abbr title="Light-emitting diode">LED</abbr> strip bought on a whim, I put it in French: « j'aime les défis et surtout les nouvelles choses ». I like challenges, and new things most of all. Twelve years on, that still holds.</p>
<p>On how my head works, I stick to what I have already written: "I simply have an outsized capacity to invent, a head permanently full of ideas — nothing more." I'm not adding to that.</p>
<p>So in this post, "nerd" means something plain. Someone who tries things to see whether they work, and pays for it with their free time.</p>

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
<p><strong>Stopping.</strong> Closing a repo is still a human move. It is also the one that separates passion from no-life.</p>

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
<li><a target="_blank" rel="noopener noreferrer" href="https://www.etymonline.com/word/nerd">Etymonline — nerd</a>: first recorded in Dr. Seuss in 1950, slang sense in 1951, "probably" from "nert" and "nut". It does not back the "knurd" story.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.etymonline.com/word/geek">Etymonline — geek</a>: "geck" in the 1510s, sideshow freak by 1911, an insult through the 1980s, neutral college slang around 1989.</li>
<li><a target="_blank" rel="noopener noreferrer" href="http://www.catb.org/jargon/html/H/hacker.html">Jargon File — hacker</a> and <a target="_blank" rel="noopener noreferrer" href="http://www.catb.org/jargon/html/C/cracker.html">cracker</a>: the intellectual-challenge definition, and the separate word for the malicious sense.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Maker_culture">Wikipedia — Maker culture</a>: the maker movement as an extension of DIY culture. Cited for the lineage only.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://fr.wiktionary.org/wiki/nerd">Wiktionnaire — nerd</a> (French Wiktionary): quoted to show how dated the French definition is, not to endorse it.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://fr.wikipedia.org/wiki/Geek">Wikipédia — Geek</a> (French Wikipedia): the word's positive, community-minded connotation, and its line against no-life.</li>
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
