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
<p>Trois heures du matin, mi-août. Le bureau est à 29 °C. Il n'y a pas eu de soleil depuis neuf heures. J'ai passé une partie de l'été à construire un modèle solaire de ma maison pour piloter six volets. Ce modèle m'a surtout appris que sur la pièce qui me gênait le plus, les volets ne servaient à rien.</p>

<h2>D'un mode global à six décisions séparées</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/not-the-sun/shutters-light.png"><img src="/visuals/not-the-sun/shutters-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/not-the-sun/shutters-dark.png"><img src="/visuals/not-the-sun/shutters-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>La première version était un interrupteur « canicule ». Quand je le basculais, une règle unique s'appliquait à toute la maison : fermer si dehors est plus chaud que dedans.</p>
<p>Elle avait le défaut de sa simplicité. Une maison n'a pas une température, elle en a autant que de pièces, et chaque pièce reçoit le soleil à une heure différente. La moyenne de la maison masquait tout.</p>
<p>Dans la nouvelle version, chaque volet a sa propre cible de position, calculée à partir de deux choses : la température de sa pièce, et un capteur qui dit si le soleil frappe sa façade en ce moment.</p>
<p>Ce second capteur est la partie intéressante. Il compare l'azimut du soleil à la normale de la façade, avec un écart signé pour gérer le passage par le nord, et il est vrai tant que l'écart reste sous soixante-cinq degrés.</p>
<svg viewBox="0 0 640 486" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagramme en arc représentant, sur une journée d'août, la fenêtre d'ensoleillement réelle de cinq façades de la maison, chacune sur son propre anneau concentrique : celle du bureau, en couleur d'accent, est la plus courte de toutes, de 8 h 15 à midi seulement." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">CINQ FAÇADES · UNE JOURNÉE D'AOÛT</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Chaque façade a son créneau.</text>
<g fill="none" stroke-linecap="round">
<path d="M 163.2 236.1 A 176 176 0 0 1 265.6 148.6" stroke="var(--diagram-accent)" stroke-opacity="1" stroke-width="15"></path>
<path d="M 173.3 284.8 A 150 150 0 0 1 320.0 166.0" stroke="currentColor" stroke-opacity="0.55" stroke-width="15"></path>
<path d="M 202.1 277.7 A 124 124 0 0 1 352.1 196.2" stroke="currentColor" stroke-opacity="0.42" stroke-width="15"></path>
<path d="M 254.4 243.2 A 98 98 0 0 1 385.6 243.2" stroke="currentColor" stroke-opacity="0.32" stroke-width="15"></path>
<path d="M 327.5 244.4 A 72 72 0 0 1 391.6 308.5" stroke="currentColor" stroke-opacity="0.24" stroke-width="15"></path>
</g>
<line x1="132" y1="316" x2="508" y2="316" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></line>
<line x1="124.0" y1="316.0" x2="114.0" y2="316.0" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="98.0" y="316.0" text-anchor="start" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">6 h</text>
<line x1="161.4" y1="200.8" x2="153.3" y2="194.9" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="140.4" y="185.5" text-anchor="start" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">9 h</text>
<line x1="259.4" y1="129.6" x2="256.3" y2="120.1" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="251.4" y="104.9" text-anchor="start" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">12 h</text>
<line x1="380.6" y1="129.6" x2="383.7" y2="120.1" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="388.6" y="104.9" text-anchor="end" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">15 h</text>
<line x1="478.6" y1="200.8" x2="486.7" y2="194.9" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="499.6" y="185.5" text-anchor="end" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">18 h</text>
<line x1="516.0" y1="316.0" x2="526.0" y2="316.0" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="542.0" y="316.0" text-anchor="end" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">21 h</text>
<rect x="32" y="347" width="16" height="8" rx="4" fill="var(--diagram-accent)" fill-opacity="1"></rect>
<text x="56" y="354" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="1">Bureau, chambre — ENE</text>
<text x="56" y="370" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">8 h 15 – 12 h 00</text>
<rect x="32" y="379" width="16" height="8" rx="4" fill="currentColor" fill-opacity="0.55"></rect>
<text x="56" y="386" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="500" opacity="0.85">Chambre d'enfant — ESE</text>
<text x="56" y="402" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">7 h 00 – 13 h 30</text>
<rect x="32" y="411" width="16" height="8" rx="4" fill="currentColor" fill-opacity="0.42"></rect>
<text x="56" y="418" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="500" opacity="0.85">Parentale — SSE</text>
<text x="56" y="434" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">7 h 30 – 14 h 45</text>
<rect x="330" y="347" width="16" height="8" rx="4" fill="currentColor" fill-opacity="0.32"></rect>
<text x="354" y="354" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="500" opacity="0.85">Pignon — SSO</text>
<text x="354" y="370" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">10 h 00 – 17 h 00</text>
<rect x="330" y="379" width="16" height="8" rx="4" fill="currentColor" fill-opacity="0.24"></rect>
<text x="354" y="386" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="500" opacity="0.85">Cellier — ONO</text>
<text x="354" y="402" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">14 h 00 – 20 h 30</text>
<text x="32" y="452" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Rayon = façade, du bureau (extérieur) au cellier (intérieur).</text>
<text x="32" y="470" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Longueur d'arc = fenêtre réelle, azimut et hauteur croisés.</text>
</svg>
<p>Le pignon sud-sud-ouest est le mieux exposé à l'année, mais c'est le plus petit. Le cellier ne prend le soleil qu'en fin de journée, par sa seule ouverture.</p>

<h2>Le cadastre dit ce que la courbe de température ne dit pas</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/not-the-sun/facades-light.png"><img src="/visuals/not-the-sun/facades-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/not-the-sun/facades-dark.png"><img src="/visuals/not-the-sun/facades-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>Ma première tentative d'orientation venait uniquement des données. J'avais corrélé trente jours de température de chaque pièce avec l'azimut du soleil, et j'en avais déduit une façade « est » entre 60 et 150 degrés.</p>
<p>Ce calcul, je ne l'aurais jamais lancé à la main. Il a tourné pendant que je cherchais le plan cadastral.</p>
<p>Deux erreurs dans ce seul résultat. La normale réelle de cette façade est à 114 degrés, donc mon intervalle était décentré. Et surtout il ne contenait aucune façade ouest, alors que la maison en a une.</p>
<p>La corrélation sait confirmer qu'une pièce appartient bien à une façade. Elle ne sait pas inventer une façade dont aucune pièce instrumentée ne dépend. Le plan cadastral, lui, donne le faîtage et les quatre orientations en dix minutes.</p>
<blockquote><p>Les données disent comment se comporte ce que vous mesurez. Elles ne disent rien de ce que vous n'avez pas pensé à mesurer.</p></blockquote>
<p>Trois corrections sont venues ensuite, et aucune n'était dans le cadastre. La première : mon bureau n'a qu'une seule ouverture, orientée est-nord-est à 67 degrés, et pas sur la grande façade à 114. Le soleil quitte une ouverture est-nord-est vers midi contre une heure et demie plus tard pour l'autre. Rattacher le bureau à la mauvaise façade gardait son volet baissé une heure trente pour rien, tous les jours.</p>
<p>La deuxième : le soleil n'entre par cette fenêtre qu'à partir de quatorze degrés d'élévation, soit environ 8 h 15 début août. Mon seuil initial faisait basculer le capteur à 7 h 26, cinquante minutes trop tôt. L'azimut n'est jamais limitant le matin ; seule la hauteur compte, ce qui trahit un obstacle bâti ou végétal à l'est. Le capteur expose désormais l'azimut et l'élévation en attributs, pour se recalibrer par simple observation.</p>
<p>La troisième est venue de la maison elle-même. J'avais annoncé la chambre parentale orientée sud-sud-est. Le calcul qui en découlait ne laissait entrer le soleil qu'à partir de neuf heures trente, donc le volet restait ouvert toute la matinée — alors que la pièce est en plein soleil bien avant. Normale ramenée à 135 degrés, fenêtre recalculée de sept heures trente à quatorze heures quarante-cinq, cible immédiatement descendue à 55 %.</p>

<h2>Ce que le modèle m'a dit de ne pas faire</h2>
<p>Le bureau est invivable en août, et je voulais que son volet le protège. Le modèle a répondu autre chose.</p>
<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparaison de la température nocturne moyenne sur quatorze jours entre une heure et six heures du matin, représentée en deux colonnes façon thermomètre : le salon à vingt-six degrés, le bureau à vingt-neuf, soit trois degrés de plus sans aucun apport solaire." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">1 H – 6 H · MOYENNE SUR 14 JOURS</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Trois degrés de plus, sans soleil.</text>
<g fill="none" stroke-linecap="round">
<line x1="216" y1="118" x2="216" y2="306" stroke="currentColor" stroke-opacity="0.14" stroke-width="34"></line>
<line x1="424" y1="118" x2="424" y2="306" stroke="currentColor" stroke-opacity="0.14" stroke-width="34"></line>
<line x1="216" y1="306" x2="216" y2="207.0" stroke="currentColor" stroke-opacity="0.45" stroke-width="34"></line>
<line x1="424" y1="306" x2="424" y2="162.5" stroke="var(--diagram-accent)" stroke-opacity="1" stroke-width="34"></line>
</g>
<circle cx="216" cy="306" r="22" fill="currentColor" fill-opacity="0.45"></circle>
<circle cx="424" cy="306" r="22" fill="var(--diagram-accent)" fill-opacity="1"></circle>
<g font-family="ui-sans-serif, system-ui, sans-serif" text-anchor="middle">
<text x="216" y="191.0" fill="currentColor" font-size="20" font-weight="650" opacity="0.85">26,0 °C</text>
<text x="216" y="348" fill="currentColor" font-size="13" opacity="0.7">Salon</text>
<text x="424" y="146.5" fill="var(--diagram-accent)" font-size="20" font-weight="650">29,0 °C</text>
<text x="424" y="348" fill="currentColor" font-size="13" opacity="0.85" font-weight="600">Bureau</text>
</g>
<path d="M 241.0 207.0 L 320.0 207.0 L 320.0 162.5 L 399.0 162.5" fill="none" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<text x="330.0" y="189.8" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" font-weight="650" opacity="0.9">+3,0 °C</text>
<text x="32" y="376" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">La cause n'est pas dehors. C'est une baie informatique qui dissipe 331 W en continu.</text>
<text x="32" y="400" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Moyenne réelle sur 14 jours, entre 1 h et 6 h. Aucun apport solaire sur la période.</text>
</svg>
<p>La scène de l'introduction est une moyenne. Sur quatorze nuits, entre une heure et six heures, le bureau reste trois degrés au-dessus du salon et deux et demi au-dessus de la cuisine.</p>
<p>La pièce est très isolée. Elle abrite la baie informatique et ses 331 W, jour et nuit, et ne refroidit jamais. Le volet ne peut agir que sur l'apport solaire du matin, par la plus petite ouverture de la maison, pendant un créneau de trois heures quarante-cinq — c'est-à-dire sur la plus petite part du problème.</p>
<p>Le levier est l'évacuation, pas l'occultation. J'aurais passé l'été à régler un barème solaire sur un problème qui n'était pas solaire. Un capteur dédié dit maintenant quand il fait au moins deux degrés de moins dehors que dans le bureau, et une notification propose simplement d'ouvrir. Un ventilateur de plafond a suivi, dont la vitesse se cale sur la température de la pièce de mai à septembre.</p>
<p>J'ai aussi écarté une hypothèse séduisante. Je soupçonnais la pièce voisine, un cellier sans volet, de conduire sa chaleur vers le bureau. Les mesures disent l'inverse : le cellier reste à 25 ou 26 °C. Le gradient va donc du bureau vers le cellier, qui lui sert de puits et non de source.</p>

<h2>Le même piège sur le tableau électrique</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/not-the-sun/phases-light.png"><img src="/visuals/not-the-sun/phases-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/not-the-sun/phases-dark.png"><img src="/visuals/not-the-sun/phases-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>La maison est en triphasé 9 <abbr title="Kilovoltampère — la puissance que le compteur autorise, qui n'est pas exactement des kilowatts">kVA</abbr>, avec un compteur par phase. La question que je me posais était simple : sur quelle phase puis-je encore brancher quelque chose.</p>
<p>Ma première analyse regardait la puissance maximale par heure. Elle désignait la phase A comme saturée, à 2 882 W, soit 96 % de sa capacité. Conclusion : ne plus rien y mettre.</p>
<p>C'était faux, et l'erreur tient à l'unité.</p>
<svg viewBox="0 0 640 336" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trois jauges radiales comparant la pointe de courant de chaque phase d'une installation triphasée sur trente jours, avec un repère à quatorze ampères : la phase A, en couleur d'accent, reste seule sous le seuil, à treize ampères et demi, alors qu'une lecture en puissance la désignait comme la plus chargée." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">TRIPHASÉ · POINTE DE COURANT SUR 30 JOURS</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">En ampères, tout s'inverse.</text>
<g>
<path d="M 62.0 210.0 A 78 78 0 0 1 218.0 210.0" fill="none" stroke="currentColor" stroke-opacity="0.12" stroke-width="14" stroke-linecap="round"></path>
<path d="M 62.0 210.0 A 78 78 0 0 1 127.8 133.0" fill="none" stroke="var(--diagram-accent)" stroke-opacity="1" stroke-width="14" stroke-linecap="round"></path>
<line x1="132.9" y1="142.4" x2="130.8" y2="122.5" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"></line>
<text x="140" y="226" text-anchor="middle" fill="var(--diagram-accent)" fill-opacity="1" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">13,5 A</text>
<text x="140" y="250" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75" font-weight="600">Phase A</text>
<text x="140" y="268" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">Baie, lave-vaisselle</text>
<text x="140" y="288" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.5">heures > 14 A : 0 h</text>
</g>
<g>
<path d="M 242.0 210.0 A 78 78 0 0 1 398.0 210.0" fill="none" stroke="currentColor" stroke-opacity="0.12" stroke-width="14" stroke-linecap="round"></path>
<path d="M 242.0 210.0 A 78 78 0 0 1 393.4 183.6" fill="none" stroke="currentColor" stroke-opacity="0.4" stroke-width="14" stroke-linecap="round"></path>
<line x1="312.9" y1="142.4" x2="310.8" y2="122.5" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"></line>
<text x="320" y="226" text-anchor="middle" fill="currentColor" fill-opacity="0.85" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="600">26,7 A</text>
<text x="320" y="250" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75" font-weight="500">Phase B</text>
<text x="320" y="268" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">Chauffe-eau</text>
<text x="320" y="288" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.5">heures > 14 A : 28 h</text>
</g>
<g>
<path d="M 422.0 210.0 A 78 78 0 0 1 578.0 210.0" fill="none" stroke="currentColor" stroke-opacity="0.12" stroke-width="14" stroke-linecap="round"></path>
<path d="M 422.0 210.0 A 78 78 0 0 1 566.7 169.6" fill="none" stroke="currentColor" stroke-opacity="0.4" stroke-width="14" stroke-linecap="round"></path>
<line x1="492.9" y1="142.4" x2="490.8" y2="122.5" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"></line>
<text x="500" y="226" text-anchor="middle" fill="currentColor" fill-opacity="0.85" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="600">24,8 A</text>
<text x="500" y="250" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75" font-weight="500">Phase C</text>
<text x="500" y="268" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">Lave-linge</text>
<text x="500" y="288" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.5">heures > 14 A : 18 h</text>
</g>
<text x="310.8" y="114.5" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.55">seuil 14 A</text>
<text x="32" y="316" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">La phase A — celle que les watts désignaient comme saturée — est la seule sous le seuil.</text>
</svg>
<p>En courant sur trente jours, la phase A plafonne à 13,5 ampères et ne dépasse jamais quatorze. La phase B monte à 26,7 et la phase C à 24,8, avec vingt-huit et dix-huit heures passées au-dessus du seuil.</p>
<p>Les pointes de B et C sont plus brèves, donc elles passaient sous le radar d'un maximum horaire exprimé en watts. La phase que je croyais saturée est la plus libre de l'installation. C'est exactement là qu'il faut ajouter une charge.</p>
<p>Un détail m'a amusé dans cette analyse. Mon lave-vaisselle n'est mesuré par rien, et il a pourtant été identifié sans ambiguïté par sa seule signature électrique : deux plateaux résistifs de 2 400 à 2 900 W espacés d'exactement deux heures, presque tous les jours, environ 780 Wh par cycle. C'est le seul gros poste non compté de sa phase. Personne ne l'a cherché.</p>

<h2>Ce que la maison ne décide toujours pas</h2>
<p>Il faut finir par l'aveu. Le pilotage automatique des volets est encore sur arrêt.</p>
<p>Le modèle existe, les six cibles se calculent en continu, et je peux les lire à tout moment. Mais l'interrupteur qui autorise les volets à bouger seuls n'a jamais été armé. La raison est simple : j'ai voulu regarder les cibles pendant une saison complète avant de laisser la maison fermer des volets sans me demander mon avis.</p>
<p>Deux autres décisions sont restées du côté humain, et le modèle les a confortées plutôt que remplacées.</p>
<p>Le cellier n'a pas de volet. Sa grande fenêtre est simplement ombragée par un drap tendu dehors, ce qui ressemble à du bricolage. Trente jours de mesures disent que le drap suffit : le cellier est plus frais que la cuisine à vingt et une heures tous les jours sans exception. Je n'achèterai pas de store extérieur.</p>
<p>Et la toiture, en pans est-sud-est et ouest-nord-ouest, correspond à une configuration est-ouest : environ 80 à 85 % du productible d'un plein sud, avec une courbe plus étalée sur la journée. C'est plutôt favorable à de l'autoconsommation. C'est noté, ce n'est pas décidé.</p>

<h2>Ce que j'en retiens</h2>
<ul>
<li><strong>Chercher la cause avant de régler l'actionneur.</strong> Un volet ne traite que l'apport solaire. Une mesure de nuit suffit à savoir s'il est en cause.</li>
<li><strong>Le plan d'abord, les données ensuite.</strong> J'ai fait l'inverse, et la corrélation a cherché des façades que le cadastre donnait déjà. Le reste se règle sur place, à l'œil.</li>
<li><strong>Lire une mesure dans l'unité de son seuil, au pas le plus fin.</strong> Chaque agrégation ajoutée en chemin peut effacer la pointe qu'on cherche.</li>
</ul>
<p>C'est le dernier épisode de cette série. Elle aura tenu en une phrase : ma maison n'est pas devenue intelligente, elle est devenue modifiable.</p>
<h2>À télécharger</h2>
<p>Les deux briques réutilisables de cet épisode.</p>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/not-the-sun/soleil-facade.yaml" download>soleil-facade.yaml</a> — un capteur par façade, qui dit si le soleil est réellement dessus. Trois nombres à régler, tous commentés.</li>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/not-the-sun/blueprint-vitesse-selon-temperature.yaml" download>blueprint-vitesse-selon-temperature.yaml</a> — le barème qui traduit une température en vitesse de 0 à 6. Il écrit un nombre et ne commande rien lui-même, pour que le matériel puisse changer sans toucher au barème.</li>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/not-the-sun/LISEZMOI.md" download>LISEZMOI.md</a> — l'installation, la méthode de réglage du masque d'horizon par observation, et le calcul d'écart d'azimut décrit sans Home Assistant.</li>
</ul>
<p><strong>Lire la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/ten-years-of-home-automation">Dix ans de domotique tout seul, un an avec un agent</a> — l'inventaire de l'installation et la mesure de ce qui a changé. <a target="_blank" rel="noopener noreferrer" href="/posts/cost-of-trying">L'IA n'a pas automatisé ma maison</a> — pourquoi le gain se mesure sur les chantiers qu'on ne commençait pas. <a target="_blank" rel="noopener noreferrer" href="/posts/daily-rhythm">J'ai changé le calendrier du soir trois fois en une semaine</a> — la maison qui porte le rythme de la journée. <a target="_blank" rel="noopener noreferrer" href="/posts/no-choices">J'ai enlevé les choix</a> — treize annonces vocales, et pourquoi le problème n'était pas le son.</p>`
}

const englishContent: PostContent = {
  title: 'My Office Sits at 29 °C at Night, and the Sun Has Nothing to Do With It',
  description: 'Episode 5: six shutters deciding on their own, from their room temperature and the sun\'s track across their facade. The model was built from the land registry and thirty days of correlation. Its most useful output was telling me where not to act.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> My house moved from a global heatwave switch to six shutters that each decide for themselves, from their room temperature and the sun's position on their facade. The model comes from the land registry, cross-checked against thirty days of correlation between temperature and solar <abbr title="The sun's compass direction, in degrees from north">azimuth</abbr>. It gave me orientations the temperature curve alone could not, and a horizon mask I did not know about. But its most useful output is not a shutter setting. It is that my office sits at 29 °C at three in the morning, three degrees above the living room, and the sun has nothing to do with it: a server rack dissipates 331 W continuously. The same trap was waiting for me on the electrical panel.</p></div>
<hr>
<p>Three in the morning, mid-August. The office is at 29 °C. There has been no sun for nine hours. I spent part of the summer building a solar model of my house to drive six shutters. What that model mostly taught me is that on the room bothering me the most, the shutters were beside the point.</p>

<h2>From one global mode to six separate decisions</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/not-the-sun/shutters-light.png"><img src="/visuals/not-the-sun/shutters-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/not-the-sun/shutters-dark.png"><img src="/visuals/not-the-sun/shutters-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>The first version was a heatwave switch. When I flipped it, a single rule applied to the whole house: close if it is hotter outside than in.</p>
<p>It carried the flaw of its own simplicity. A house does not have one temperature, it has as many as it has rooms, and every room gets the sun at a different hour. The house average hid all of it.</p>
<p>In the new version, every shutter has its own target position, computed from two things: its room's temperature, and a sensor that says whether the sun is currently hitting its facade.</p>
<p>That second sensor is the interesting part. It compares the sun's azimuth to the facade's normal, using a signed difference so the wrap past north behaves, and stays true while that difference is under sixty-five degrees.</p>
<svg viewBox="0 0 640 486" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Arc diagram showing, across one August day, the real sunlight window of five house facades, each on its own concentric ring: the office's, in accent colour, is the shortest of all, from 8:15 to noon only." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">FIVE FACADES · ONE AUGUST DAY</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Every facade has its window.</text>
<g fill="none" stroke-linecap="round">
<path d="M 163.2 236.1 A 176 176 0 0 1 265.6 148.6" stroke="var(--diagram-accent)" stroke-opacity="1" stroke-width="15"></path>
<path d="M 173.3 284.8 A 150 150 0 0 1 320.0 166.0" stroke="currentColor" stroke-opacity="0.55" stroke-width="15"></path>
<path d="M 202.1 277.7 A 124 124 0 0 1 352.1 196.2" stroke="currentColor" stroke-opacity="0.42" stroke-width="15"></path>
<path d="M 254.4 243.2 A 98 98 0 0 1 385.6 243.2" stroke="currentColor" stroke-opacity="0.32" stroke-width="15"></path>
<path d="M 327.5 244.4 A 72 72 0 0 1 391.6 308.5" stroke="currentColor" stroke-opacity="0.24" stroke-width="15"></path>
</g>
<line x1="132" y1="316" x2="508" y2="316" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></line>
<line x1="124.0" y1="316.0" x2="114.0" y2="316.0" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="98.0" y="316.0" text-anchor="start" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">6:00</text>
<line x1="161.4" y1="200.8" x2="153.3" y2="194.9" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="140.4" y="185.5" text-anchor="start" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">9:00</text>
<line x1="259.4" y1="129.6" x2="256.3" y2="120.1" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="251.4" y="104.9" text-anchor="start" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">12:00</text>
<line x1="380.6" y1="129.6" x2="383.7" y2="120.1" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="388.6" y="104.9" text-anchor="end" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">15:00</text>
<line x1="478.6" y1="200.8" x2="486.7" y2="194.9" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="499.6" y="185.5" text-anchor="end" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">18:00</text>
<line x1="516.0" y1="316.0" x2="526.0" y2="316.0" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<text x="542.0" y="316.0" text-anchor="end" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">21:00</text>
<rect x="32" y="347" width="16" height="8" rx="4" fill="var(--diagram-accent)" fill-opacity="1"></rect>
<text x="56" y="354" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" opacity="1">Office, bedroom — ENE</text>
<text x="56" y="370" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">8:15 – 12:00</text>
<rect x="32" y="379" width="16" height="8" rx="4" fill="currentColor" fill-opacity="0.55"></rect>
<text x="56" y="386" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="500" opacity="0.85">Child's room — ESE</text>
<text x="56" y="402" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">7:00 – 13:30</text>
<rect x="32" y="411" width="16" height="8" rx="4" fill="currentColor" fill-opacity="0.42"></rect>
<text x="56" y="418" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="500" opacity="0.85">Parents' room — SSE</text>
<text x="56" y="434" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">7:30 – 14:45</text>
<rect x="330" y="347" width="16" height="8" rx="4" fill="currentColor" fill-opacity="0.32"></rect>
<text x="354" y="354" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="500" opacity="0.85">Gable — SSW</text>
<text x="354" y="370" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">10:00 – 17:00</text>
<rect x="330" y="379" width="16" height="8" rx="4" fill="currentColor" fill-opacity="0.24"></rect>
<text x="354" y="386" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="500" opacity="0.85">Utility room — WNW</text>
<text x="354" y="402" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">14:00 – 20:30</text>
<text x="32" y="452" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Radius = facade, from the office (outer) to the utility room (inner).</text>
<text x="32" y="470" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Arc length = real window, azimuth and elevation combined.</text>
</svg>
<p>The south-south-west gable is the best exposed across the year, and the smallest. The utility room only catches the sun late in the day, through its single opening.</p>

<h2>The land registry says what the temperature curve cannot</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/not-the-sun/facades-light.png"><img src="/visuals/not-the-sun/facades-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/not-the-sun/facades-dark.png"><img src="/visuals/not-the-sun/facades-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>My first attempt at orientation came from the data alone. I had correlated thirty days of each room's temperature against the sun's azimuth, and concluded there was an "east" facade somewhere between 60 and 150 degrees.</p>
<p>I would never have started that computation by hand. It ran while I was digging out the cadastral plan.</p>
<p>Two errors in that single result. The real normal of that facade is 114 degrees, so my interval was off centre. And more importantly it contained no west facade at all, while the house has one.</p>
<p>Correlation can confirm that a room belongs to a facade. It cannot invent a facade that no instrumented room depends on. The cadastral plan gives you the ridge line and all four orientations in ten minutes.</p>
<blockquote><p>Data tells you how the things you measure behave. It says nothing about what you never thought to measure.</p></blockquote>
<p>Three corrections followed, and none of them was in the land registry. The first: my office has a single opening, facing east-north-east at 67 degrees, not on the big 114-degree facade. The sun leaves an east-north-east opening around midday, against an hour and a half later for the other one. Attaching the office to the wrong facade kept its shutter down for ninety minutes of nothing, every day.</p>
<p>The second: the sun only enters that window from fourteen degrees of elevation, around quarter past eight in early August. My initial threshold flipped the sensor at 7:26, fifty minutes too early. Azimuth is never the limiting factor in the morning; only height matters, which points at a building or a tree to the east. The sensor now exposes azimuth and elevation as attributes, so it can be recalibrated by plain observation.</p>
<p>The third came from the house itself. I had described the parents' bedroom as facing south-south-east. The maths that followed only let the sun in from half past nine, so the shutter stayed open all morning — while the room is in full sun well before that. Normal brought back to 135 degrees, window recomputed from 7:30 to 2:45 p.m., target immediately down to 55%.</p>

<h2>What the model told me not to do</h2>
<p>The office is unlivable in August, and I wanted its shutter to protect it. The model answered something else.</p>
<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fourteen-day average night temperature between one and six in the morning, shown as two thermometer-style columns: living room at twenty-six degrees, office at twenty-nine, three degrees higher with no solar gain at all." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">1 AM – 6 AM · 14-DAY AVERAGE</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Three degrees more, no sun.</text>
<g fill="none" stroke-linecap="round">
<line x1="216" y1="118" x2="216" y2="306" stroke="currentColor" stroke-opacity="0.14" stroke-width="34"></line>
<line x1="424" y1="118" x2="424" y2="306" stroke="currentColor" stroke-opacity="0.14" stroke-width="34"></line>
<line x1="216" y1="306" x2="216" y2="207.0" stroke="currentColor" stroke-opacity="0.45" stroke-width="34"></line>
<line x1="424" y1="306" x2="424" y2="162.5" stroke="var(--diagram-accent)" stroke-opacity="1" stroke-width="34"></line>
</g>
<circle cx="216" cy="306" r="22" fill="currentColor" fill-opacity="0.45"></circle>
<circle cx="424" cy="306" r="22" fill="var(--diagram-accent)" fill-opacity="1"></circle>
<g font-family="ui-sans-serif, system-ui, sans-serif" text-anchor="middle">
<text x="216" y="191.0" fill="currentColor" font-size="20" font-weight="650" opacity="0.85">26.0 °C</text>
<text x="216" y="348" fill="currentColor" font-size="13" opacity="0.7">Living room</text>
<text x="424" y="146.5" fill="var(--diagram-accent)" font-size="20" font-weight="650">29.0 °C</text>
<text x="424" y="348" fill="currentColor" font-size="13" opacity="0.85" font-weight="600">Office</text>
</g>
<path d="M 241.0 207.0 L 320.0 207.0 L 320.0 162.5 L 399.0 162.5" fill="none" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<text x="330.0" y="189.8" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" font-weight="650" opacity="0.9">+3.0 °C</text>
<text x="32" y="376" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">The cause is not outside. It is a server rack dissipating 331 W continuously.</text>
<text x="32" y="400" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Real 14-day average, 1 am to 6 am. No solar gain over that window.</text>
</svg>
<p>The opening scene is an average. Over fourteen nights, between one and six, the office stays three degrees warmer than the living room and two and a half warmer than the kitchen.</p>
<p>The room is very well insulated. It houses the server rack and its 331 W, day and night, and it never cools down. The shutter can only act on the morning solar gain, through the smallest opening in the house, across a window of three hours and forty-five minutes. That is the smallest part of the problem.</p>
<p>The lever is evacuation, not shading. I would have spent the summer tuning a solar curve against a problem that was not solar. A dedicated sensor now says when it is at least two degrees cooler outside than in the office, and a notification simply suggests opening a window. A ceiling fan followed, its speed tracking the room temperature from May to September.</p>
<p>I also ruled out a tempting hypothesis. I suspected the neighbouring utility room, which has no shutter, of conducting its heat into the office. The measurements say the opposite: the utility room stays at 25 or 26 °C. The gradient runs from the office into the utility room, which acts as a sink rather than a source.</p>

<h2>The same trap on the electrical panel</h2>
<picture class="section-loop loop-light"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/not-the-sun/phases-light.png"><img src="/visuals/not-the-sun/phases-light.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<picture class="section-loop loop-dark"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/not-the-sun/phases-dark.png"><img src="/visuals/not-the-sun/phases-dark.webp" alt="" width="240" height="120" loading="lazy" decoding="async"></picture>
<p>The house runs on a 9 <abbr title="Kilovolt-ampere — the power the meter allows, which is not quite kilowatts">kVA</abbr> three-phase supply, with a meter per phase. My question was simple: which phase can still take something.</p>
<p>My first pass looked at maximum hourly power. It flagged phase A as saturated, at 2,882 W, or 96% of its capacity. Conclusion: put nothing else on it.</p>
<p>That was wrong, and the error is in the unit.</p>
<svg viewBox="0 0 640 336" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three radial gauges comparing each phase's peak current on a three-phase supply over thirty days, with a fourteen-amp marker: phase A, in accent colour, is the only one under the threshold, at thirteen and a half amps, even though a wattage reading had flagged it as the most loaded." class="diagram-svg">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">THREE-PHASE · PEAK CURRENT OVER 30 DAYS</text>
<text x="32" y="76" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">In amps, it all flips.</text>
<g>
<path d="M 62.0 210.0 A 78 78 0 0 1 218.0 210.0" fill="none" stroke="currentColor" stroke-opacity="0.12" stroke-width="14" stroke-linecap="round"></path>
<path d="M 62.0 210.0 A 78 78 0 0 1 127.8 133.0" fill="none" stroke="var(--diagram-accent)" stroke-opacity="1" stroke-width="14" stroke-linecap="round"></path>
<line x1="132.9" y1="142.4" x2="130.8" y2="122.5" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"></line>
<text x="140" y="226" text-anchor="middle" fill="var(--diagram-accent)" fill-opacity="1" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">13.5 A</text>
<text x="140" y="250" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75" font-weight="600">Phase A</text>
<text x="140" y="268" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">Rack, dishwasher</text>
<text x="140" y="288" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.5">hours > 14 A: 0 h</text>
</g>
<g>
<path d="M 242.0 210.0 A 78 78 0 0 1 398.0 210.0" fill="none" stroke="currentColor" stroke-opacity="0.12" stroke-width="14" stroke-linecap="round"></path>
<path d="M 242.0 210.0 A 78 78 0 0 1 393.4 183.6" fill="none" stroke="currentColor" stroke-opacity="0.4" stroke-width="14" stroke-linecap="round"></path>
<line x1="312.9" y1="142.4" x2="310.8" y2="122.5" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"></line>
<text x="320" y="226" text-anchor="middle" fill="currentColor" fill-opacity="0.85" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="600">26.7 A</text>
<text x="320" y="250" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75" font-weight="500">Phase B</text>
<text x="320" y="268" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">Water heater</text>
<text x="320" y="288" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.5">hours > 14 A: 28 h</text>
</g>
<g>
<path d="M 422.0 210.0 A 78 78 0 0 1 578.0 210.0" fill="none" stroke="currentColor" stroke-opacity="0.12" stroke-width="14" stroke-linecap="round"></path>
<path d="M 422.0 210.0 A 78 78 0 0 1 566.7 169.6" fill="none" stroke="currentColor" stroke-opacity="0.4" stroke-width="14" stroke-linecap="round"></path>
<line x1="492.9" y1="142.4" x2="490.8" y2="122.5" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round"></line>
<text x="500" y="226" text-anchor="middle" fill="currentColor" fill-opacity="0.85" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="600">24.8 A</text>
<text x="500" y="250" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75" font-weight="500">Phase C</text>
<text x="500" y="268" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55">Washing machine</text>
<text x="500" y="288" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.5">hours > 14 A: 18 h</text>
</g>
<text x="310.8" y="114.5" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.55">14 A threshold</text>
<text x="32" y="316" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">Phase A — the one watts flagged as saturated — is the only one under the threshold.</text>
</svg>
<p>Measured in current over thirty days, phase A tops out at 13.5 amps and never crosses fourteen. Phase B climbs to 26.7 and phase C to 24.8, with twenty-eight and eighteen hours spent above that line.</p>
<p>The peaks on B and C are briefer, so they slipped under the radar of an hourly maximum expressed in watts. The phase I believed saturated is the one with the most headroom. That is exactly where a new load belongs.</p>
<p>One detail amused me in that analysis. My dishwasher is metered by nothing, and it was still identified beyond doubt from its electrical signature alone: two resistive plateaus of 2,400 to 2,900 W spaced exactly two hours apart, nearly every day, about 780 Wh per cycle. It is the only large unmetered load on its phase. Nobody went looking for it.</p>

<h2>What the house still does not decide</h2>
<p>Time for the admission. Automatic shutter control is still switched off.</p>
<p>The model exists, all six targets are computed continuously, and I can read them at any moment. But the switch that lets the shutters move on their own has never been armed. The reason is plain: I wanted to watch those targets across a full season before letting the house close shutters without asking me.</p>
<p>Two other decisions stayed on the human side, and the model backed them rather than replacing them.</p>
<p>The utility room has no shutter. Its large window is simply shaded by a sheet hung outside, which looks like a bodge. Thirty days of measurements say the sheet is enough: the utility room is cooler than the kitchen at nine in the evening every single day, without exception. I will not be buying an external blind.</p>
<p>And the roof, pitched east-south-east and west-north-west, matches an east-west configuration: roughly 80 to 85% of what a full-south array would yield, with a flatter curve across the day. That leans in favour of self-consumption. It is noted, not decided.</p>

<h2>What I am taking away</h2>
<ul>
<li><strong>Find the cause before tuning the actuator.</strong> A shutter only treats solar gain. One night-time measurement tells you whether solar gain is to blame.</li>
<li><strong>Plan first, data second.</strong> I did it the other way round, and the correlation went hunting for facades the land registry already listed. Whatever is left gets settled on site, by eye.</li>
<li><strong>Read a measurement in the unit of its limit, at the finest step.</strong> Every aggregation added along the way can erase the very peak you are looking for.</li>
</ul>
<p>This is the last episode of the series. It holds in one sentence: my house did not become smart, it became modifiable.</p>
<h2>Downloads</h2>
<p>The two reusable building blocks from this episode.</p>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/not-the-sun/soleil-facade.yaml" download>soleil-facade.yaml</a> — one sensor per facade, telling you whether the sun is actually on it. Three numbers to set, all commented.</li>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/not-the-sun/blueprint-vitesse-selon-temperature.yaml" download>blueprint-vitesse-selon-temperature.yaml</a> — the scale turning a temperature into a speed from 0 to 6. It writes a number and commands nothing itself, so the hardware can change without touching the scale.</li>
<li><a target="_blank" rel="noopener noreferrer" href="/downloads/not-the-sun/LISEZMOI.md" download>LISEZMOI.md</a> — installation, how to tune the horizon mask by observation, and the azimuth maths described without Home Assistant. Written in French.</li>
</ul>
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
