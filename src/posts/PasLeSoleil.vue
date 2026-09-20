<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'not-the-sun',
  date: '2026-10-18',
  tags: ['Homelab', 'Home-Assistant', 'Analysis', 'AI']
}

const frenchContent: PostContent = {
  title: "Mon bureau est à 29 °C la nuit, et le soleil n'y est pour rien",
  description: "Épisode 5 : six volets qui décident seuls, à partir de la température de leur pièce et de la course du soleil sur leur façade. Le modèle a été construit avec le cadastre et trente jours de corrélation. Son résultat le plus utile a été de me dire où ne pas agir.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Ma maison est passée d'un mode « canicule » global à six volets qui décident chacun pour soi, à partir de la température de leur pièce et de la position du soleil sur leur façade. Le modèle vient du cadastre croisé avec trente jours de corrélation entre température et <abbr title="Direction du soleil sur l'horizon, en degrés depuis le nord">azimut</abbr> solaire. Il m'a donné des orientations que la seule courbe de température ne pouvait pas donner, et un masque d'horizon que j'ignorais. Mais son résultat le plus utile n'est pas un réglage de volet. C'est d'avoir montré que mon bureau est à 29 °C à trois heures du matin, trois degrés au-dessus du salon, et que le soleil n'y est pour rien : c'est une baie informatique qui dissipe 331 W en continu. Le même piège m'attendait sur le tableau électrique.</p></div>
<hr>
<p>Trois heures du matin, mi-août. Le bureau est à 29 °C. Il n'y a pas eu de soleil depuis neuf heures.</p>
<p>J'ai passé une partie de l'été à construire un modèle solaire de ma maison pour piloter six volets. Ce modèle m'a surtout appris que sur la pièce qui me gênait le plus, les volets ne servaient à rien.</p>

<h2>D'un mode global à six décisions séparées</h2>
<p>La première version était un interrupteur « canicule ». Quand je le basculais, une règle unique s'appliquait à toute la maison : fermer si dehors est plus chaud que dedans.</p>
<p>Elle avait le défaut de sa simplicité. Une maison n'a pas une température, elle en a autant que de pièces, et chaque pièce reçoit le soleil à une heure différente. La moyenne de la maison masquait tout.</p>
<p>Le remplacement tient en une phrase. Chaque volet a sa propre cible de position, calculée à partir de deux choses : la température de sa pièce, et un capteur qui dit si le soleil frappe sa façade en ce moment.</p>
<p>Ce second capteur est la partie intéressante. Il compare l'azimut du soleil à la normale de la façade, avec un écart signé pour gérer le passage par le nord, et il est vrai tant que l'écart reste sous soixante-cinq degrés.</p>
<svg viewBox="0 0 640 362" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fenêtres d'ensoleillement des cinq façades de la maison sur une journée d'août : la façade est-nord-est du bureau ne reçoit le soleil que de huit heures quinze à midi, la sud-sud-est de la chambre parentale de sept heures trente à quatorze heures quarante-cinq, l'est-sud-est du lever à treize heures trente, le pignon sud-sud-ouest de dix à dix-sept heures, et l'ouest-nord-ouest du cellier de quatorze heures au coucher." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">CINQ FAÇADES · UNE JOURNÉE D'AOÛT</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Chaque façade a son créneau.</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">
<text x="32" y="132">Bureau, chambre — ENE</text>
<text x="32" y="168">Parentale — SSE</text>
<text x="32" y="204">Chambre d'enfant — ESE</text>
<text x="32" y="240">Pignon — SSO</text>
<text x="32" y="276">Cellier — ONO</text>
</g>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="249" y="116" width="98" height="22" rx="6" fill="var(--diagram-accent)" fill-opacity="1"></rect>
<rect x="229" y="152" width="189" height="22" rx="6" fill="currentColor" fill-opacity="0.3"></rect>
<rect x="216" y="188" width="170" height="22" rx="6" fill="currentColor" fill-opacity="0.3"></rect>
<rect x="294" y="224" width="183" height="22" rx="6" fill="currentColor" fill-opacity="0.3"></rect>
<rect x="399" y="260" width="169" height="22" rx="6" fill="currentColor" fill-opacity="0.3"></rect>
</g>
<line x1="190" y1="300" x2="608" y2="300" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6" text-anchor="middle">
<text x="190" y="320">6 h</text>
<text x="294" y="320">10 h</text>
<text x="399" y="320">14 h</text>
<text x="503" y="320">18 h</text>
<text x="608" y="320">22 h</text>
</g>
<text x="32" y="352" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Le créneau du bureau est le plus court de la maison. C'est aussi la pièce la plus chaude.</text>
</svg>
<p>Cinq façades, cinq créneaux, et donc cinq histoires différentes dans la même maison. Le pignon sud-sud-ouest est le mieux exposé à l'année, mais c'est le plus petit. Le cellier ne prend le soleil qu'en fin de journée, par sa seule ouverture.</p>

<h2>Le cadastre dit ce que la courbe de température ne dit pas</h2>
<p>Ma première tentative d'orientation venait uniquement des données. J'avais corrélé trente jours de température de chaque pièce avec l'azimut du soleil, et j'en avais déduit une façade « est » entre 60 et 150 degrés.</p>
<p>Deux erreurs dans ce seul résultat. La normale réelle de cette façade est à 114 degrés, donc mon intervalle était décentré. Et surtout il ne contenait aucune façade ouest, alors que la maison en a une.</p>
<p>La corrélation sait confirmer qu'une pièce appartient bien à une façade. Elle ne sait pas inventer une façade dont aucune pièce instrumentée ne dépend. Le plan cadastral, lui, donne le faîtage et les quatre orientations en dix minutes.</p>
<blockquote><p>Les données disent comment se comporte ce que vous mesurez. Elles ne disent rien de ce que vous n'avez pas pensé à mesurer.</p></blockquote>
<p>Deux corrections sont venues ensuite, et aucune n'était dans le cadastre non plus.</p>
<p>La première : mon bureau n'a qu'une seule ouverture, orientée est-nord-est à 67 degrés, et pas sur la grande façade à 114. L'écart paraît mince. Il ne l'est pas : le soleil quitte une ouverture est-nord-est vers midi contre une heure et demie plus tard pour l'autre. Rattacher le bureau à la mauvaise façade gardait son volet baissé une heure trente pour rien, tous les jours.</p>
<p>La seconde : le soleil n'entre réellement par cette fenêtre qu'à partir de quatorze degrés d'élévation, soit environ huit heures quinze début août. Mon seuil initial faisait basculer le capteur à sept heures vingt-six, cinquante minutes trop tôt. L'azimut n'est jamais limitant le matin ; seule la hauteur compte, ce qui trahit un obstacle bâti ou végétal à l'est. Le capteur expose désormais l'azimut et l'élévation en attributs, pour se recalibrer par simple observation.</p>
<p>Et une troisième correction est venue de la maison elle-même. J'avais annoncé la chambre parentale orientée sud-sud-est. Le calcul qui en découlait ne laissait entrer le soleil qu'à partir de neuf heures trente, donc le volet restait ouvert toute la matinée — alors que la pièce est en plein soleil bien avant. Normale ramenée à 135 degrés, fenêtre recalculée de sept heures trente à quatorze heures quarante-cinq, cible immédiatement descendue à 55 %.</p>

<h2>Ce que le modèle m'a dit de ne pas faire</h2>
<p>Le bureau était la pièce qui motivait tout ce chantier. Il est invivable en août, et je voulais que son volet le protège.</p>
<p>Le modèle a répondu autre chose.</p>
<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparaison de la température nocturne moyenne sur quatorze jours entre une heure et six heures du matin : le salon est à vingt-six degrés et le bureau à vingt-neuf, soit trois degrés de plus sans aucun apport solaire, écart attribué aux trois cent trente et un watts dissipés en continu par la baie informatique." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">1 H - 6 H · MOYENNE SUR 14 JOURS</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Trois degrés de plus, sans soleil.</text>
<text x="32" y="116" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">Bureau</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="126" width="448" height="30" rx="8" fill="currentColor" fill-opacity="0.2"></rect>
<rect x="480" y="126" width="52" height="30" rx="8" fill="var(--diagram-accent)" fill-opacity="1"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">
<text x="44" y="146">26,0 °C — ce que fait le salon à la même heure</text>
</g>
<path d="M 480 160 L 480 182 L 532 182 L 532 160" fill="none" stroke="var(--diagram-accent)" stroke-opacity="0.9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 506 182 L 506 194" fill="none" stroke="var(--diagram-accent)" stroke-opacity="0.9" stroke-width="1.5" stroke-linecap="round"></path>
<text x="506" y="214" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" font-weight="650" text-anchor="middle">+3,0 °C</text>
<text x="32" y="248" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">La cause n'est pas dehors. C'est une baie informatique qui dissipe 331 W en continu.</text>
<text x="32" y="284" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Moyenne réelle sur 14 jours, entre 1 h et 6 h. Aucun apport solaire sur la période.</text>
</svg>
<p>Vingt-neuf degrés en pleine nuit, moyenne sur quatorze jours entre une heure et six heures. Trois degrés au-dessus du salon, deux et demi au-dessus de la cuisine, sans le moindre rayon de soleil depuis des heures.</p>
<p>La pièce est très isolée et contient une baie informatique qui dissipe 331 W en permanence. Elle ne refroidit jamais. Le volet ne peut agir que sur l'apport solaire du matin, par la plus petite ouverture de la maison, pendant un créneau de trois heures quarante-cinq — c'est-à-dire sur la plus petite part du problème.</p>
<p>Le levier est l'évacuation, pas l'occultation. J'aurais passé l'été à régler un barème solaire sur un problème qui n'était pas solaire. Un capteur dédié dit maintenant quand il fait au moins deux degrés de moins dehors que dans le bureau, et une notification propose simplement d'ouvrir.</p>
<p>Une hypothèse a été écartée au passage, et elle vaut d'être dite parce qu'elle était séduisante. Je soupçonnais la pièce voisine, un cellier sans volet, de conduire sa chaleur vers le bureau. Les mesures disent l'inverse : le bureau est à 29 °C, le cellier à 25 ou 26. Le gradient va donc du bureau vers le cellier, qui lui sert de puits et non de source.</p>

<h2>Le même piège sur le tableau électrique</h2>
<p>La maison est en triphasé 9 <abbr title="Kilovoltampère — la puissance que le compteur autorise, qui n'est pas exactement des kilowatts">kVA</abbr>, avec un compteur par phase. La question que je me posais était simple : sur quelle phase puis-je encore brancher quelque chose.</p>
<p>Ma première analyse regardait la puissance maximale par heure. Elle désignait la phase A comme saturée, à 2 882 W, soit 96 % de sa capacité. Conclusion : ne plus rien y mettre.</p>
<p>C'était faux, et l'erreur tient à l'unité.</p>
<svg viewBox="0 0 640 288" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pointe de courant par phase sur trente jours d'une installation triphasée : la phase A plafonne à treize ampères et demi, la phase B atteint vingt-six ampères et sept, la phase C vingt-quatre ampères et huit ; contrairement à une lecture en watts, c'est la phase A qui dispose de la plus grande marge." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">TRIPHASÉ · POINTE DE COURANT SUR 30 JOURS</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">En ampères, tout s'inverse.</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">
<text x="32" y="134">Phase A — la baie serveur</text>
<text x="32" y="178">Phase B — chauffe-eau</text>
<text x="32" y="222">Phase C — lave-linge</text>
</g>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="250" y="116" width="152" height="26" rx="7" fill="currentColor" fill-opacity="0.3"></rect>
<rect x="250" y="160" width="300" height="26" rx="7" fill="var(--diagram-accent)" fill-opacity="1"></rect>
<rect x="250" y="204" width="279" height="26" rx="7" fill="currentColor" fill-opacity="0.3"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.9">
<text x="412" y="134">13,5 A</text>
<text x="560" y="178">26,7 A</text>
<text x="539" y="222">24,8 A</text>
</g>
<line x1="407" y1="110" x2="407" y2="236" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-dasharray="4 4" stroke-linecap="round"></line>
<text x="407" y="102" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6" text-anchor="middle">14 A</text>
<text x="32" y="270" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Heures passées au-dessus de 14 A en 30 jours : A = 0, B = 28, C = 18.</text>
</svg>
<p>En courant sur trente jours, la phase A plafonne à 13,5 ampères et ne dépasse jamais quatorze. La phase B monte à 26,7 et la phase C à 24,8, avec vingt-huit et dix-huit heures passées au-dessus du seuil.</p>
<p>Les pointes de B et C sont plus brèves, donc elles passaient sous le radar d'un maximum horaire exprimé en watts. La phase que je croyais saturée est en réalité la plus libre de l'installation. C'est exactement là qu'il faut ajouter une charge.</p>
<p>Un détail m'a amusé dans cette analyse. Mon lave-vaisselle n'est mesuré par rien, et il a pourtant été identifié sans ambiguïté par sa seule signature électrique : deux plateaux résistifs de 2 400 à 2 900 W espacés d'exactement deux heures, presque tous les jours, environ 780 Wh par cycle. C'est le seul gros poste non compté de sa phase.</p>

<h2>Ce que la maison ne décide toujours pas</h2>
<p>Il faut finir par l'aveu. Le pilotage automatique des volets est encore sur arrêt.</p>
<p>Le modèle existe, les six cibles se calculent en continu, et je peux les lire à tout moment. Mais l'interrupteur qui autorise les volets à bouger seuls n'a jamais été armé. La raison est simple : j'ai voulu regarder les cibles pendant une saison complète avant de laisser la maison fermer des volets sans me demander mon avis.</p>
<p>Deux autres décisions sont restées du côté humain, et le modèle les a confortées plutôt que remplacées.</p>
<p>Le cellier n'a pas de volet. Sa grande fenêtre est simplement ombragée par un drap tendu dehors, ce qui ressemble à du bricolage. Trente jours de mesures disent que le drap suffit : le cellier est plus frais que la cuisine à vingt et une heures tous les jours sans exception. Je n'achèterai pas de store extérieur.</p>
<p>Et la toiture, en pans est-sud-est et ouest-nord-ouest, correspond à une configuration est-ouest : environ 80 à 85 % du productible d'un plein sud, avec une courbe plus étalée sur la journée. C'est plutôt favorable à de l'autoconsommation. C'est noté, ce n'est pas décidé.</p>

<h2>Ce que j'en retiens</h2>
<ul>
<li><strong>Le résultat le plus utile d'un modèle peut être un renoncement.</strong> Celui-ci m'a évité une saison de réglages sur un volet qui n'aurait rien changé.</li>
<li><strong>Croiser deux sources, toujours.</strong> La corrélation confirme une appartenance, le plan donne les orientations, l'observation corrige les deux.</li>
<li><strong>La moyenne d'une maison n'existe pas.</strong> Trois degrés d'écart entre deux pièces à trois heures du matin disparaissent entièrement dans une moyenne.</li>
<li><strong>Vérifier l'unité avant de conclure.</strong> La même installation, lue en watts puis en ampères, désigne deux phases opposées comme la plus chargée.</li>
<li><strong>Un appareil non mesuré reste identifiable.</strong> Deux plateaux de 2 400 W espacés de deux heures ne peuvent être qu'un lave-vaisselle.</li>
<li><strong>Construire un modèle est devenu moins cher que de s'en passer.</strong> Quelques heures d'analyse qui ne servent qu'une fois, personne ne les investit sur une maison. C'est précisément ce qui a changé.</li>
</ul>
<p>C'est le dernier épisode de cette série. Elle aura tenu en une phrase : ma maison n'est pas devenue intelligente, elle est devenue modifiable.</p>
<p><strong>Lire la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Dix ans de domotique tout seul, un an avec un agent</a> — l'inventaire de l'installation et la mesure de ce qui a changé. <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">L'IA n'a pas automatisé ma maison</a> — pourquoi le gain se mesure sur les chantiers qu'on ne commençait pas. <a target="_blank" rel="noopener noreferrer" href="/posts/daily-rhythm">J'ai changé le calendrier du soir trois fois en une semaine</a> — la maison qui porte le rythme de la journée. <a target="_blank" rel="noopener noreferrer" href="/posts/no-choices">J'ai enlevé les choix</a> — treize annonces vocales, et pourquoi le problème n'était pas le son.</p>`
}

const englishContent: PostContent = {
  title: 'My Office Sits at 29 °C at Night, and the Sun Has Nothing to Do With It',
  description: 'Episode 5: six shutters deciding on their own, from their room temperature and the sun\'s track across their facade. The model was built from the land registry and thirty days of correlation. Its most useful output was telling me where not to act.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> My house moved from a global heatwave switch to six shutters that each decide for themselves, from their room temperature and the sun's position on their facade. The model comes from the land registry, cross-checked against thirty days of correlation between temperature and solar <abbr title="The sun's compass direction, in degrees from north">azimuth</abbr>. It gave me orientations the temperature curve alone could not, and a horizon mask I did not know about. But its most useful output is not a shutter setting. It is that my office sits at 29 °C at three in the morning, three degrees above the living room, and the sun has nothing to do with it: a server rack dissipates 331 W continuously. The same trap was waiting for me on the electrical panel.</p></div>
<hr>
<p>Three in the morning, mid-August. The office is at 29 °C. There has been no sun for nine hours.</p>
<p>I spent part of the summer building a solar model of my house to drive six shutters. What that model mostly taught me is that on the room bothering me the most, the shutters were beside the point.</p>

<h2>From one global mode to six separate decisions</h2>
<p>The first version was a heatwave switch. When I flipped it, a single rule applied to the whole house: close if it is hotter outside than in.</p>
<p>It carried the flaw of its own simplicity. A house does not have one temperature, it has as many as it has rooms, and every room gets the sun at a different hour. The house average hid all of it.</p>
<p>The replacement fits in a sentence. Every shutter has its own target position, computed from two things: its room's temperature, and a sensor that says whether the sun is currently hitting its facade.</p>
<p>That second sensor is the interesting part. It compares the sun's azimuth to the facade's normal, using a signed difference so the wrap past north behaves, and stays true while that difference is under sixty-five degrees.</p>
<svg viewBox="0 0 640 362" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sunlight windows for the five facades of the house across an August day: the office's east-north-east facade only gets sun from quarter past eight to midday, the parents' south-south-east one from half past seven to a quarter to three, the east-south-east one from sunrise to half past one, the south-south-west gable from ten to five, and the utility room's west-north-west facade from two in the afternoon to sunset." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">FIVE FACADES · ONE AUGUST DAY</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Every facade has its window.</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">
<text x="32" y="132">Office, bedroom — ENE</text>
<text x="32" y="168">Parents' room — SSE</text>
<text x="32" y="204">Child's room — ESE</text>
<text x="32" y="240">Gable — SSW</text>
<text x="32" y="276">Utility room — WNW</text>
</g>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="249" y="116" width="98" height="22" rx="6" fill="var(--diagram-accent)" fill-opacity="1"></rect>
<rect x="229" y="152" width="189" height="22" rx="6" fill="currentColor" fill-opacity="0.3"></rect>
<rect x="216" y="188" width="170" height="22" rx="6" fill="currentColor" fill-opacity="0.3"></rect>
<rect x="294" y="224" width="183" height="22" rx="6" fill="currentColor" fill-opacity="0.3"></rect>
<rect x="399" y="260" width="169" height="22" rx="6" fill="currentColor" fill-opacity="0.3"></rect>
</g>
<line x1="190" y1="300" x2="608" y2="300" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6" text-anchor="middle">
<text x="190" y="320">6 am</text>
<text x="294" y="320">10 am</text>
<text x="399" y="320">2 pm</text>
<text x="503" y="320">6 pm</text>
<text x="608" y="320">10 pm</text>
</g>
<text x="32" y="352" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">The office has the shortest window in the house. It is also the hottest room.</text>
</svg>
<p>Five facades, five windows, and therefore five different stories inside one house. The south-south-west gable is the best exposed across the year, and the smallest. The utility room only catches the sun late in the day, through its single opening.</p>

<h2>The land registry says what the temperature curve cannot</h2>
<p>My first attempt at orientation came from the data alone. I had correlated thirty days of each room's temperature against the sun's azimuth, and concluded there was an "east" facade somewhere between 60 and 150 degrees.</p>
<p>Two errors in that single result. The real normal of that facade is 114 degrees, so my interval was off centre. And more importantly it contained no west facade at all, while the house has one.</p>
<p>Correlation can confirm that a room belongs to a facade. It cannot invent a facade that no instrumented room depends on. The cadastral plan gives you the ridge line and all four orientations in ten minutes.</p>
<blockquote><p>Data tells you how the things you measure behave. It says nothing about what you never thought to measure.</p></blockquote>
<p>Two corrections followed, and neither was in the land registry either.</p>
<p>The first: my office has a single opening, facing east-north-east at 67 degrees, not on the big 114-degree facade. The gap looks small. It is not. The sun leaves an east-north-east opening around midday, against an hour and a half later for the other one. Attaching the office to the wrong facade kept its shutter down for ninety minutes of nothing, every day.</p>
<p>The second: the sun only actually enters that window from fourteen degrees of elevation, around quarter past eight in early August. My initial threshold flipped the sensor at 7:26, fifty minutes too early. Azimuth is never the limiting factor in the morning; only height matters, which points at a building or a tree to the east. The sensor now exposes azimuth and elevation as attributes, so it can be recalibrated by plain observation.</p>
<p>A third correction came from the house itself. I had described the parents' bedroom as facing south-south-east. The maths that followed only let the sun in from half past nine, so the shutter stayed open all morning — while the room is in full sun well before that. Normal brought back to 135 degrees, window recomputed from 7:30 to 2:45 p.m., target immediately down to 55%.</p>

<h2>What the model told me not to do</h2>
<p>The office was the room that motivated the whole build. It is unlivable in August, and I wanted its shutter to protect it.</p>
<p>The model answered something else.</p>
<svg viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fourteen-day average night temperature between one and six in the morning: the living room sits at twenty-six degrees and the office at twenty-nine, three degrees higher with no solar gain at all, a gap attributed to the three hundred and thirty-one watts dissipated continuously by a server rack." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">1 AM - 6 AM · 14-DAY AVERAGE</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Three degrees more, no sun.</text>
<text x="32" y="116" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">Office</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="32" y="126" width="448" height="30" rx="8" fill="currentColor" fill-opacity="0.2"></rect>
<rect x="480" y="126" width="52" height="30" rx="8" fill="var(--diagram-accent)" fill-opacity="1"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">
<text x="44" y="146">26.0 °C — what the living room does at the same hour</text>
</g>
<path d="M 480 160 L 480 182 L 532 182 L 532 160" fill="none" stroke="var(--diagram-accent)" stroke-opacity="0.9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 506 182 L 506 194" fill="none" stroke="var(--diagram-accent)" stroke-opacity="0.9" stroke-width="1.5" stroke-linecap="round"></path>
<text x="506" y="214" fill="var(--diagram-accent)" font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" font-weight="650" text-anchor="middle">+3.0 °C</text>
<text x="32" y="248" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.85">The cause is not outside. It is a server rack dissipating 331 W continuously.</text>
<text x="32" y="284" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Real 14-day average, 1 am to 6 am. No solar gain over that window.</text>
</svg>
<p>Twenty-nine degrees in the middle of the night, averaged over fourteen days between one and six in the morning. Three degrees above the living room, two and a half above the kitchen, without a ray of sun for hours.</p>
<p>The room is very well insulated and holds a server rack dissipating 331 W permanently. It never cools down. The shutter can only act on the morning solar gain, through the smallest opening in the house, across a window of three hours and forty-five minutes. That is the smallest part of the problem.</p>
<p>The lever is evacuation, not shading. I would have spent the summer tuning a solar curve against a problem that was not solar. A dedicated sensor now says when it is at least two degrees cooler outside than in the office, and a notification simply suggests opening a window.</p>
<p>One hypothesis got ruled out along the way, and it is worth stating because it was seductive. I suspected the neighbouring utility room, which has no shutter, of conducting its heat into the office. The measurements say the opposite: the office is at 29 °C, the utility room at 25 or 26. The gradient runs from the office into the utility room, which acts as a sink rather than a source.</p>

<h2>The same trap on the electrical panel</h2>
<p>The house runs on a 9 <abbr title="Kilovolt-ampere — the power the meter allows, which is not quite kilowatts">kVA</abbr> three-phase supply, with a meter per phase. My question was simple: which phase can still take something.</p>
<p>My first pass looked at maximum hourly power. It flagged phase A as saturated, at 2,882 W, or 96% of its capacity. Conclusion: put nothing else on it.</p>
<p>That was wrong, and the error is in the unit.</p>
<svg viewBox="0 0 640 288" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Peak current per phase over thirty days on a three-phase supply: phase A tops out at thirteen and a half amps, phase B reaches twenty-six point seven, phase C twenty-four point eight; contrary to a reading in watts, phase A is the one with the most headroom." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">THREE-PHASE · PEAK CURRENT OVER 30 DAYS</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">In amps, it all flips.</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.75">
<text x="32" y="134">Phase A — the server rack</text>
<text x="32" y="178">Phase B — water heater</text>
<text x="32" y="222">Phase C — washing machine</text>
</g>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="250" y="116" width="152" height="26" rx="7" fill="currentColor" fill-opacity="0.3"></rect>
<rect x="250" y="160" width="300" height="26" rx="7" fill="var(--diagram-accent)" fill-opacity="1"></rect>
<rect x="250" y="204" width="279" height="26" rx="7" fill="currentColor" fill-opacity="0.3"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="0.9">
<text x="412" y="134">13.5 A</text>
<text x="560" y="178">26.7 A</text>
<text x="539" y="222">24.8 A</text>
</g>
<line x1="407" y1="110" x2="407" y2="236" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-dasharray="4 4" stroke-linecap="round"></line>
<text x="407" y="102" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6" text-anchor="middle">14 A</text>
<text x="32" y="270" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Hours spent above 14 A in 30 days: A = 0, B = 28, C = 18.</text>
</svg>
<p>Measured in current over thirty days, phase A tops out at 13.5 amps and never crosses fourteen. Phase B climbs to 26.7 and phase C to 24.8, with twenty-eight and eighteen hours spent above that line.</p>
<p>The peaks on B and C are briefer, so they slipped under the radar of an hourly maximum expressed in watts. The phase I believed saturated is in fact the one with the most headroom. That is exactly where a new load belongs.</p>
<p>One detail amused me in that analysis. My dishwasher is metered by nothing, and it was still identified beyond doubt from its electrical signature alone: two resistive plateaus of 2,400 to 2,900 W spaced exactly two hours apart, nearly every day, about 780 Wh per cycle. It is the only large unmetered load on its phase.</p>

<h2>What the house still does not decide</h2>
<p>Time for the admission. Automatic shutter control is still switched off.</p>
<p>The model exists, all six targets are computed continuously, and I can read them at any moment. But the switch that lets the shutters move on their own has never been armed. The reason is plain: I wanted to watch those targets across a full season before letting the house close shutters without asking me.</p>
<p>Two other decisions stayed on the human side, and the model backed them rather than replacing them.</p>
<p>The utility room has no shutter. Its large window is simply shaded by a sheet hung outside, which looks like a bodge. Thirty days of measurements say the sheet is enough: the utility room is cooler than the kitchen at nine in the evening every single day, without exception. I will not be buying an external blind.</p>
<p>And the roof, pitched east-south-east and west-north-west, matches an east-west configuration: roughly 80 to 85% of what a full-south array would yield, with a flatter curve across the day. That leans in favour of self-consumption. It is noted, not decided.</p>

<h2>What I am taking away</h2>
<ul>
<li><strong>A model's most useful output can be a decision not to act.</strong> This one saved me a season of tuning a shutter that would have changed nothing.</li>
<li><strong>Cross two sources, always.</strong> Correlation confirms a membership, the plan gives the orientations, observation corrects both.</li>
<li><strong>A house average does not exist.</strong> Three degrees between two rooms at three in the morning vanish completely inside one.</li>
<li><strong>Check the unit before concluding.</strong> The same installation, read in watts and then in amps, names two opposite phases as the most loaded.</li>
<li><strong>An unmetered appliance is still identifiable.</strong> Two 2,400 W plateaus spaced two hours apart can only be a dishwasher.</li>
<li><strong>Building a model became cheaper than going without one.</strong> A few hours of analysis that pay off once is not something anyone invests in a house. That is precisely what changed.</li>
</ul>
<p>This is the last episode of the series. It holds in one sentence: my house did not become smart, it became modifiable.</p>
<p><strong>Read the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Ten Years of Home Automation Alone. One Year With an Agent</a> — the inventory and a measurement of what changed. <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">AI Didn't Automate My House</a> — why the win shows up on the projects you never started. <a target="_blank" rel="noopener noreferrer" href="/posts/daily-rhythm">I Changed the Evening Schedule Three Times in One Week</a> — the house that holds the shape of the day. <a target="_blank" rel="noopener noreferrer" href="/posts/no-choices">I Took the Choices Out</a> — thirteen spoken announcements, and why the audio was never the problem.</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'PasLeSoleil',
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
