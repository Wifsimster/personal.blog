<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'bureau-sur-mesure-pc-integre',
  date: '2014-09-05',
  tags: ['DIY']
}

const frenchContent: PostContent = {
  title: 'Bureau sur mesure avec pc intégré',
  description: "Construction d'un bureau sur mesure avec un PC intégré, incluant étagère pour écrans, système de son, ventilation et finitions.",
  html: `<h2>Choix et composants</h2>
<p>Comme vous pouvez le voir ci-dessous j'ai découpé le bureau en 3 emplacements :</p>
<ul>
<li>l'emplacement gauche dédié à la carte mère et ses composants;</li>
<li>l'emplacement du fond dédié à l'alimentation et sortie de câbles (carte mère, haut parleurs, ventilation, etc…)</li>
<li>l'emplacement de droit n'a pas d'attribution spécifique pour le moment, je pense mettre déjà quelques commandes comme l'allumage, le contrôle de la ventilation…</li>
</ul>
<p><img src="/images/bureau-sur-mesure-plan.png" alt="Plan bureau"></p>
<p>Les côtés gauche et droit du meuble posséderons 3 ventilateurs <a href="http://www.amazon.fr/Corsair-Ventilateur-Grand-Edition-Silencieuse/dp/B007RESGGC/ref=sr_1_1?s=computers&ie=UTF8&qid=1404472072&sr=1-1&keywords=af140">Corsair AF140 QE</a> chacun afin de garantir une ventilation de droite à gauche du bloc principal.</p>
<p>L'extérieur des côtés sera recouvert de filtres anti-poussière, commandé sur <a href="http://www.moddiy.com/products/%28Daily-Deals%29-Ultra-Thin-0.45mm-PVC-Fan-Dust-Filter-%284cm-~-14cm%29.html">modDIY</a>.</p>
<p>J'ai choisi un <a href="http://www.ebay.fr/itm/16mm-12V-Voiture-Aluminum-Metal-Switch-LED-Bouton-Poussoir-Interrupteur-Lumiere-/310909165183?ssPageName=ADME:L:OU:FR:3160">bouton poussoir éclairé</a> comme bouton d'allumage, que je placerai certainement sur la face avant à droite.</p>
<p>Côté sons, j'ai démonté (découpé) de vielle enceintes Awai et JVC pour récupérer les haut parleurs que je vais placer sur des caissons fixé au dessus du meuble.</p>
<p>Je n'avais quasiment aucun outillage pour construire le bureau, j'ai donc investi dans quelques outils.<br>
Principalement, la scie sauteuse m'a permise de faire toutes mes découpes, je n'ai rien fait à la scie circulaire. J'ai rattrapé les lignes avec une vielle ponceuse.</p>
<p><img src="/images/bureau-sur-mesure-outils.jpg" alt="Outils"></p>
<p>Et sans oublié le plus important le bois ! Trouver le bois m'a pris un peu de temps. Je suis parti sur du MDF (medium density fibreà ou plus communément appelé medium (standard), fait pour être utilisé en intérieur, facile à travailler, n'éclate quasiment pas contrairement à du bois résineux et se peint simplement avec une sous-couche multi-support. C'est le bois idéal pour fabriquer un meuble pour un prix correcte !</p>
<p>Le médium se trouve généralement soit en magasin de bricolage style <a href="http://www.leroymerlin.fr/recherche=medium">Leroy Merlin</a> ou alors chez des négociants en bois. N'ayant pas de Leroy Merlin à proximité, je me suis procuré le médium chez un négociant de bois.</p>
<p>Pour information, j'ai acheté 4 plaques de 2m44x1m22x19mm.</p>
<blockquote>
<p>Y a plus qu'à !</p>
</blockquote>
<p><img src="/images/bureau-sur-mesure-bois.jpg" alt="Bois"></p>
<h2>Construction</h2>
<p>J'ai donc commencé par découper et assembler le fond du bureau, on peut y voir le découpage en 3 sections.</p>
<p>J'ai ensuite assemblé l'extérieur et mis en place les deux éléments ensemble.</p>
<p><img src="/images/bureau-sur-mesure-construction-1.jpg" alt="Construction 1"></p>
<p><img src="/images/bureau-sur-mesure-construction-2.jpg" alt="Construction 2"></p>
<p><img src="/images/bureau-sur-mesure-construction-3.jpg" alt="Construction 3"></p>
<p>Pour finir l'assemblage des pièces principales, j'ai rajouté les deux plans du bureau.</p>
<p><img src="/images/bureau-sur-mesure-plan-bureau.jpg" alt="Plan bureau"></p>
<h2>Étagère et son</h2>
<p>Une fois que le bureau fut assemblé j'ai rajouté une étagère sur toute la longueur pour rehausser mes deux écrans, j'en ai donc profiter pour intégrer un système de son 3 voies (gauche, centre & droit).</p>
<p>J'alimente les haut-parleurs avec deux petits amplificateurs double voies trouvé sur Conrad, que je placerai au centre du meuble.</p>
<p><img src="/images/bureau-sur-mesure-etagere-1.jpg" alt="Étagère 1"></p>
<p><img src="/images/bureau-sur-mesure-etagere-2.jpg" alt="Étagère 2"></p>
<p><img src="/images/bureau-sur-mesure-etagere-3.jpg" alt="Étagère 3"></p>
<p><img src="/images/bureau-sur-mesure-etagere-4.jpg" alt="Étagère 4"></p>
<p><img src="/images/bureau-sur-mesure-etagere-5.jpg" alt="Étagère 5"></p>
<h2>Ventilation</h2>
<p>Comme expliqué précédemment je voulais avoir un flux d'air de droite à gauche sur l'ensemble du plan principal grâce à 6 ventilateurs Corsair AF140.</p>
<p><img src="/images/bureau-sur-mesure-ventilation-1.jpg" alt="Ventilation 1"></p>
<p><img src="/images/bureau-sur-mesure-ventilation-2.jpg" alt="Ventilation 2"></p>
<p><img src="/images/bureau-sur-mesure-ventilation-3.jpg" alt="Ventilation 3"></p>
<p><img src="/images/bureau-sur-mesure-ventilation-4.jpg" alt="Ventilation 4"></p>
<h2>Carte-mère et passage de câbles</h2>
<p>Je me suis donc attaqué à où et comment placer/fixer ma carte-mère dans le bureau.</p>
<p>J'ai commencé par démonter mon boitier pour retirer le support de la carte mère, que j'ai ensuite ajusté et peint en noir.</p>
<p>J'ai ensuite découpé le meuble pour faire ressortir les connexions vers le compartiment du fond, où toutes les câbles passeront.</p>
<p><img src="/images/bureau-sur-mesure-carte-mere-1.jpg" alt="Carte-mère 1"></p>
<p><img src="/images/bureau-sur-mesure-carte-mere-2.jpg" alt="Carte-mère 2"></p>
<p><img src="/images/bureau-sur-mesure-carte-mere-3.jpg" alt="Carte-mère 3"></p>
<p><img src="/images/bureau-sur-mesure-carte-mere-4.jpg" alt="Carte-mère 4"></p>
<p>Mon alimentation actuelle n'est pas modulaire. Je ne peux donc pas la mettre où je veux.<br>
J'ai donc décidé (pour le moment) de la placer au niveaux de mes genoux contre le compartiment gauche. J'ai donc réalisé une boite pour fixer l'alimentation sous le meuble.</p>
<p><img src="/images/bureau-sur-mesure-alimentation-1.jpg" alt="Alimentation 1"></p>
<p><img src="/images/bureau-sur-mesure-alimentation-2.jpg" alt="Alimentation 2"></p>
<p>J'ai ensuite rajouter les trous pour le passage des câbles de l'alimentation.</p>
<p><img src="/images/bureau-sur-mesure-cables-1.jpg" alt="Câbles 1"></p>
<p><img src="/images/bureau-sur-mesure-cables-2.jpg" alt="Câbles 2"></p>
<h2>Peinture</h2>
<p>Il ne manque plus qu'une bonne couche de peinture pour finaliser le gros oeuvre. J'ai testé pour la première fois la peinture avec pistolet à air. Ça a l'avantage d'être rapide et sans bavure mais par ailleurs vous peignez les alentours du meuble, mes outils sont maintenant tachetés de gris et blanc… J'ai commencé par passer une sous-couche multisupport sur l'ensemble du meuble, poncé le tout une fois sec et ensuite passé deux couches de peinture acrylique teintée en gris ( parce que pas assez de teinture noir sous la main :) ). Le résultat n'étant pas assez lisse à mon gout et je voulais à la base un bureau full noir, j'ai donc trouvé de l'acrylique noir. J'ai donc terminé par une dernière couche de peinture en noir sur les éléments visibles du meuble.</p>
<p><img src="/images/bureau-sur-mesure-peinture-1.jpg" alt="Peinture 1"></p>
<p><img src="/images/bureau-sur-mesure-peinture-2.jpg" alt="Peinture 2"></p>
<p><img src="/images/bureau-sur-mesure-peinture-3.jpg" alt="Peinture 3"></p>
<p><img src="/images/bureau-sur-mesure-peinture-4.jpg" alt="Peinture 4"></p>
<p><img src="/images/bureau-sur-mesure-peinture-5.jpg" alt="Peinture 5"></p>
<p><img src="/images/bureau-sur-mesure-peinture-6.jpg" alt="Peinture 6"></p>
<h2>Assemblage et câblage</h2>
<p>Y a plus qu'à tout mettre en place ! L'assemblage et le câblage m'a prit pas mal de temps. Surtout que je voulais faire du sleeving sur les câbles de la carte mère pour avoir un joli rendu.</p>
<p><img src="/images/bureau-sur-mesure-assemblage-1.jpg" alt="Assemblage 1"></p>
<p><img src="/images/bureau-sur-mesure-assemblage-2.jpg" alt="Assemblage 2"></p>
<p><img src="/images/bureau-sur-mesure-assemblage-3.jpg" alt="Assemblage 3"></p>
<p><img src="/images/bureau-sur-mesure-assemblage-4.jpg" alt="Assemblage 4"></p>
<h2>Rendu final</h2>
<p>Et voilà le résultat, il y aura quelques optimisations et améliorations à venir (lumières, grille de ventilation, contrôle des amplis avec des prises 433MHz, etc…) mais tout est là :)</p>
<p><img src="/images/bureau-sur-mesure-rendu-final.jpg" alt="Rendu final"></p>
<p>Comme vous pouvez le voir le bureau + les pieds rendent le bureau très haut (plan de travail à 1m du sol).</p>
<p>J'ai donc hésité à m'arrêter là et trouver une chaise de bar avec dossier ou bien faire de nouveaux pieds plus petits à hauteur d'un siège de bureau.</p>
<p>Bien évidemment, j'ai construit de nouveaux pieds :p</p>
<h2>Construction des pieds</h2>
<p>J'ai donc rajouté sur la base de mon fichier Solidworks deux pieds avec porte de chaque côté (mais sans tiroir).</p>
<p>Rien de bien compliqué, excepté que j'en ai profité pour intégrer NAS, server Debian et onduleur dans le pied de gauche !</p>
<p><img src="/images/bureau-sur-mesure-pieds-1.jpg" alt="Pieds 1"></p>
<p><img src="/images/bureau-sur-mesure-pieds-2.jpg" alt="Pieds 2"></p>
<p>J'ai ajouté une entrée d'air ventilée sous le NAS, parce que oui tout ça ça chauffe à l'intérieur :</p>
<p><img src="/images/bureau-sur-mesure-ventilation-nas.jpg" alt="Ventilation NAS"></p>
<p>Une sous-couche multi-support blanche, puis une peinture glycéro noir (oui contrairement à celle du bureau):</p>
<p><img src="/images/bureau-sur-mesure-peinture-pieds.jpg" alt="Peinture pieds"></p>
<h2>Ventilations</h2>
<p>J'ai également terminé de câbler l'intégralité de mon système de ventilation, j'ai donc une ventillation de droite à gauche sous le plan de travail du bureau via 6 ventilateurs.</p>
<p>Les 6 ventilateurs sont reliés à mon rhéobus, je peux ainsi contrôler la vitesse de chaque ventilateur. Je rajouterai prochainement des sondes de température pour rendre dépendant la vitesse de la ventilation de la température.</p>
<p>Et pour terminer j'ai posé les caches de protections extérieurs des ventilateurs.</p>
<p><img src="/images/bureau-sur-mesure-ventilations.jpg" alt="Ventilations"></p>
<h2>Ecrans</h2>
<p>J'ai fini par investir dans un support <a href="http://www.amazon.fr/gp/product/B005BREK9Y/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1">triple display</a> pour rendre le tout un peu plus classe !</p>
<p>Le pied du support étant beaucoup trop large pour mon étagère de bureau, j'ai rallongé le tube du support et je l'ai fixé à l'arrière du meuble.</p>
<p><img src="/images/bureau-sur-mesure-support-ecrans.jpg" alt="Support écrans"></p>
<p>Et voici le résultat avec trois <a href="http://www.amazon.fr/gp/product/B00FABG2DI/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1">Iiyama Prolite E2483HS-B1</a> :</p>
<p><img src="/images/bureau-sur-mesure-ecrans.jpg" alt="Écrans"></p>
<h2>Siège</h2>
<p>J'ai également eu le plaisir d'avoir un nouveau siège de bureau pour mon anniversaire ;)</p>
<p><img src="/images/bureau-sur-mesure-siege.jpg" alt="Siège"></p>
<h2><abbr title="Éclairage d'ambiance projeté derrière l'écran et synchronisé avec l'image, popularisé par Philips">Ambilight</abbr></h2>
<p>Je viens de rajouter cette semaine un ruban autocollant de led WS2812B de 4m à l'arrière des écrans pour reproduire un système ambilight de la même manière que sur ma TV (Cf. <a href="/posts/ambilight-ws2801-raspberry-pi-hyperion">Ambi-like avec un ruban WS2801, un Raspberry Pi et Hyperion</a>).</p>
<p>Un article dédié arrive sous peu… mais voici le premier résultat :</p>
<p><img src="/images/bureau-sur-mesure-ambilight.jpg" alt="Ambilight"></p>
<iframe src="//www.youtube.com/embed/wNnYBho63YU" frameborder="0" allowfullscreen></iframe>
<p>Pour terminer la construction de mon meuble de bureau, un petit bilan s'impose.</p>
<h2>Mes objectifs initiaux</h2>
<p>Je voulais un bureau sur-mesure pour profiter au mieux de l'espace de la pièce et également que mon pc y soit intégré.</p>
<p>Par la suite j'ai voulu rajouter une étagère pour accueillir mes écrans et également quelques hauts-parleurs.</p>
<h2>Mon niveau de connaissances</h2>
<p>J'avais de simple connaissance en menuiserie (et manipulation d'outils) datant de mon enfance. C'est revenu assez rapidement après quelques erreurs…</p>
<p>J'ai fait mes études dans l'électrotechnique, j'ai donc quelques connaissances en électricité et câblage, qui m'ont bien servit pour le coup :)</p>
<h2>Mon installation</h2>
<p>Partant de quelques idées, et en m'inspirant de projets trouvés sur le net, j'ai donc réussi à réaliser mon bureau.</p>`
}

const englishContent: PostContent = {
  title: 'Custom desk with integrated PC',
  description: 'Building a custom desk with an integrated PC, including shelf for screens, sound system, ventilation and finishes.',
  html: `
<h2>Choices and Components</h2>
<p>As you can see below, I divided the desk into 3 areas:</p>
<ul>
<li>the left area dedicated to the motherboard and its components;</li>
<li>the back area dedicated to power supply and cable outputs (motherboard, speakers, ventilation, etc…)</li>
<li>the right area has no specific assignment for the moment, I'm thinking of putting some controls like power, ventilation control…</li>
</ul>
<p><img src="/images/bureau-sur-mesure-plan.png" alt="Desk plan"></p>
<p>The left and right sides of the furniture will have 3 <a href="http://www.amazon.fr/Corsair-Ventilateur-Grand-Edition-Silencieuse/dp/B007RESGGC/ref=sr_1_1?s=computers&ie=UTF8&qid=1404472072&sr=1-1&keywords=af140">Corsair AF140 QE</a> fans each to ensure ventilation from right to left of the main block.</p>
<p>The outside of the sides will be covered with dust filters, ordered from <a href="http://www.moddiy.com/products/%28Daily-Deals%29-Ultra-Thin-0.45mm-PVC-Fan-Dust-Filter-%284cm-~-14cm%29.html">modDIY</a>.</p>
<p>I chose an <a href="http://www.ebay.fr/itm/16mm-12V-Voiture-Aluminum-Metal-Switch-LED-Bouton-Poussoir-Interrupteur-Lumiere-/310909165183?ssPageName=ADME:L:OU:FR:3160">illuminated push button</a> as a power button, which I will certainly place on the front right.</p>
<p>For sound, I disassembled (cut) old Awai and JVC speakers to recover the speakers that I will place on boxes fixed above the furniture.</p>
<p>I had almost no tools to build the desk, so I invested in a few tools.<br>
Mainly, the jigsaw allowed me to make all my cuts, I did nothing with the circular saw. I fixed the lines with an old sander.</p>
<p><img src="/images/bureau-sur-mesure-outils.jpg" alt="Tools"></p>
<p>And not forgetting the most important: wood! Finding the wood took me a bit of time. I went with MDF (medium density fiberboard or more commonly called medium (standard), made to be used indoors, easy to work with, hardly splinters unlike softwood and paints simply with a multi-support primer. It's the ideal wood to make furniture for a reasonable price!</p>
<p>MDF is generally found either in DIY stores like <a href="http://www.leroymerlin.fr/recherche=medium">Leroy Merlin</a> or at wood dealers. Not having a Leroy Merlin nearby, I got the MDF from a wood dealer.</p>
<p>For information, I bought 4 sheets of 2m44x1m22x19mm.</p>
<blockquote>
<p>Let's get started!</p>
</blockquote>
<p><img src="/images/bureau-sur-mesure-bois.jpg" alt="Wood"></p>
<h2>Construction</h2>
<p>I started by cutting and assembling the back of the desk, you can see the division into 3 sections.</p>
<p>I then assembled the exterior and put the two elements together.</p>
<p><img src="/images/bureau-sur-mesure-construction-1.jpg" alt="Construction 1"></p>
<p><img src="/images/bureau-sur-mesure-construction-2.jpg" alt="Construction 2"></p>
<p><img src="/images/bureau-sur-mesure-construction-3.jpg" alt="Construction 3"></p>
<p>To finish assembling the main pieces, I added the two desk surfaces.</p>
<p><img src="/images/bureau-sur-mesure-plan-bureau.jpg" alt="Desk surface"></p>
<h2>Shelf and Sound</h2>
<p>Once the desk was assembled, I added a shelf along the entire length to raise my two screens, so I took the opportunity to integrate a 3-way sound system (left, center & right).</p>
<p>I power the speakers with two small dual-channel amplifiers found on Conrad, which I will place in the center of the furniture.</p>
<p><img src="/images/bureau-sur-mesure-etagere-1.jpg" alt="Shelf 1"></p>
<p><img src="/images/bureau-sur-mesure-etagere-2.jpg" alt="Shelf 2"></p>
<p><img src="/images/bureau-sur-mesure-etagere-3.jpg" alt="Shelf 3"></p>
<p><img src="/images/bureau-sur-mesure-etagere-4.jpg" alt="Shelf 4"></p>
<p><img src="/images/bureau-sur-mesure-etagere-5.jpg" alt="Shelf 5"></p>
<h2>Ventilation</h2>
<p>As explained previously, I wanted to have an airflow from right to left across the entire main surface thanks to 6 Corsair AF140 fans.</p>
<p><img src="/images/bureau-sur-mesure-ventilation-1.jpg" alt="Ventilation 1"></p>
<p><img src="/images/bureau-sur-mesure-ventilation-2.jpg" alt="Ventilation 2"></p>
<p><img src="/images/bureau-sur-mesure-ventilation-3.jpg" alt="Ventilation 3"></p>
<p><img src="/images/bureau-sur-mesure-ventilation-4.jpg" alt="Ventilation 4"></p>
<h2>Motherboard and Cable Routing</h2>
<p>So I tackled where and how to place/fix my motherboard in the desk.</p>
<p>I started by disassembling my case to remove the motherboard support, which I then adjusted and painted black.</p>
<p>I then cut the furniture to bring out the connections to the back compartment, where all the cables will pass.</p>
<p><img src="/images/bureau-sur-mesure-carte-mere-1.jpg" alt="Motherboard 1"></p>
<p><img src="/images/bureau-sur-mesure-carte-mere-2.jpg" alt="Motherboard 2"></p>
<p><img src="/images/bureau-sur-mesure-carte-mere-3.jpg" alt="Motherboard 3"></p>
<p><img src="/images/bureau-sur-mesure-carte-mere-4.jpg" alt="Motherboard 4"></p>
<p>My current power supply is not modular. So I can't put it where I want.<br>
I decided (for the moment) to place it at knee level against the left compartment. So I made a box to fix the power supply under the furniture.</p>
<p><img src="/images/bureau-sur-mesure-alimentation-1.jpg" alt="Power supply 1"></p>
<p><img src="/images/bureau-sur-mesure-alimentation-2.jpg" alt="Power supply 2"></p>
<p>I then added the holes for the power supply cable routing.</p>
<p><img src="/images/bureau-sur-mesure-cables-1.jpg" alt="Cables 1"></p>
<p><img src="/images/bureau-sur-mesure-cables-2.jpg" alt="Cables 2"></p>
<h2>Painting</h2>
<p>All that's left is a good coat of paint to finalize the main work. I tried air gun painting for the first time. It has the advantage of being fast and without smudges but on the other hand you paint the surroundings of the furniture, my tools are now spotted with gray and white… I started by applying a multi-support primer on the entire furniture, sanded everything once dry and then applied two coats of gray-tinted acrylic paint (because not enough black tint on hand :) ). The result not being smooth enough for my taste and I originally wanted a full black desk, so I found black acrylic. I finished with a final coat of black paint on the visible elements of the furniture.</p>
<p><img src="/images/bureau-sur-mesure-peinture-1.jpg" alt="Painting 1"></p>
<p><img src="/images/bureau-sur-mesure-peinture-2.jpg" alt="Painting 2"></p>
<p><img src="/images/bureau-sur-mesure-peinture-3.jpg" alt="Painting 3"></p>
<p><img src="/images/bureau-sur-mesure-peinture-4.jpg" alt="Painting 4"></p>
<p><img src="/images/bureau-sur-mesure-peinture-5.jpg" alt="Painting 5"></p>
<p><img src="/images/bureau-sur-mesure-peinture-6.jpg" alt="Painting 6"></p>
<h2>Assembly and Wiring</h2>
<p>Just need to put everything in place! Assembly and wiring took me quite a bit of time. Especially since I wanted to do sleeving on the motherboard cables for a nice result.</p>
<p><img src="/images/bureau-sur-mesure-assemblage-1.jpg" alt="Assembly 1"></p>
<p><img src="/images/bureau-sur-mesure-assemblage-2.jpg" alt="Assembly 2"></p>
<p><img src="/images/bureau-sur-mesure-assemblage-3.jpg" alt="Assembly 3"></p>
<p><img src="/images/bureau-sur-mesure-assemblage-4.jpg" alt="Assembly 4"></p>
<h2>Final Result</h2>
<p>And here's the result, there will be some optimizations and improvements to come (lights, ventilation grille, amplifier control with 433MHz outlets, etc…) but everything is there :)</p>
<p><img src="/images/bureau-sur-mesure-rendu-final.jpg" alt="Final result"></p>
<p>As you can see the desk + the legs make the desk very high (work surface at 1m from the ground).</p>
<p>So I hesitated to stop there and find a bar chair with backrest or make new smaller legs at desk chair height.</p>
<p>Obviously, I built new legs :p</p>
<h2>Leg Construction</h2>
<p>So I added to the base of my SolidWorks file two legs with doors on each side (but without drawers).</p>
<p>Nothing too complicated, except that I took the opportunity to integrate NAS, Debian server and UPS in the left leg!</p>
<p><img src="/images/bureau-sur-mesure-pieds-1.jpg" alt="Legs 1"></p>
<p><img src="/images/bureau-sur-mesure-pieds-2.jpg" alt="Legs 2"></p>
<p>I added a ventilated air intake under the NAS, because yes all that heats up inside:</p>
<p><img src="/images/bureau-sur-mesure-ventilation-nas.jpg" alt="NAS Ventilation"></p>
<p>A white multi-support primer, then black alkyd paint (yes unlike the desk):</p>
<p><img src="/images/bureau-sur-mesure-peinture-pieds.jpg" alt="Legs painting"></p>
<h2>Ventilation</h2>
<p>I also finished wiring my entire ventilation system, so I have ventilation from right to left under the desk work surface via 6 fans.</p>
<p>The 6 fans are connected to my rheostat, so I can control the speed of each fan. I will soon add temperature probes to make the ventilation speed dependent on temperature.</p>
<p>And to finish, I installed the external fan protection covers.</p>
<p><img src="/images/bureau-sur-mesure-ventilations.jpg" alt="Ventilation"></p>
<h2>Screens</h2>
<p>I finally invested in a <a href="http://www.amazon.fr/gp/product/B005BREK9Y/ref=oh_aui_detailpage_o01_s00?ie=UTF8&psc=1">triple display</a> stand to make it all a bit more classy!</p>
<p>The stand base being much too wide for my desk shelf, I extended the stand tube and fixed it to the back of the furniture.</p>
<p><img src="/images/bureau-sur-mesure-support-ecrans.jpg" alt="Screen stand"></p>
<p>And here's the result with three <a href="http://www.amazon.fr/gp/product/B00FABG2DI/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1">Iiyama Prolite E2483HS-B1</a>:</p>
<p><img src="/images/bureau-sur-mesure-ecrans.jpg" alt="Screens"></p>
<h2>Chair</h2>
<p>I also had the pleasure of having a new desk chair for my birthday ;)</p>
<p><img src="/images/bureau-sur-mesure-siege.jpg" alt="Chair"></p>
<h2><abbr title="Ambient lighting projected behind a screen and synchronised with the picture, popularised by Philips">Ambilight</abbr></h2>
<p>I just added this week a 4m WS2812B LED adhesive strip behind the screens to reproduce an ambilight system in the same way as on my TV (Cf. <a href="/posts/ambilight-ws2801-raspberry-pi-hyperion">Ambi-like with WS2801 strip, Raspberry Pi and Hyperion</a>).</p>
<p>A dedicated article coming soon… but here's the first result:</p>
<p><img src="/images/bureau-sur-mesure-ambilight.jpg" alt="Ambilight"></p>
<iframe src="//www.youtube.com/embed/wNnYBho63YU" frameborder="0" allowfullscreen></iframe>
<p>To finish the construction of my desk furniture, a small summary is in order.</p>
<h2>My Initial Goals</h2>
<p>I wanted a custom desk to make the best use of the room space and also have my PC integrated into it.</p>
<p>Subsequently, I wanted to add a shelf to accommodate my screens and also some speakers.</p>
<h2>My Knowledge Level</h2>
<p>I had simple woodworking knowledge (and tool handling) from my childhood. It came back fairly quickly after a few mistakes…</p>
<p>I studied electrotechnics, so I have some knowledge in electricity and wiring, which served me well for this :)</p>
<h2>My Installation</h2>
<p>Starting from a few ideas, and inspired by projects found on the net, I managed to build my desk.</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'BureauSurMesurePcIntegre',
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
