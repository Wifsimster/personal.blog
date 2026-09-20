<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'renovation-cellier-bureau-maison-1970',
  date: '2025-10-17',
  tags: ['Renovation', 'DIY']
}

const frenchContent: PostContent = {
  title: 'Rénovation du cellier avec bureau et buanderie - Série rénovation #10',
  description: 'Rénovation complète du cellier de la maison des années 1970, incluant l\'isolation du plafond avec suspentes dans le plafond hourdis, l\'installation de plaques BA13 au plafond, l\'isolation des murs, et la création de deux espaces fonctionnels : un bureau et un cellier/buanderie avec la chaudière.',
  html: `<h2>Introduction</h2>
<p>Après avoir rénové les deux autres chambres dans <a href="/posts/renovation-chambres-maison-1970">le neuvième article de cette série</a>, il était temps de s'attaquer à la rénovation complète du cellier. Cet espace, situé au rez-de-chaussée, abritait la chaudière et donnait accès à la cave. Cette rénovation représentait un défi technique important : transformer cet espace utilitaire en deux pièces fonctionnelles et bien isolées - un bureau et un cellier/buanderie - tout en conservant l'accès à la cave et en intégrant la chaudière.</p>
<p>Le projet impliquait plusieurs étapes techniques complexes : l'isolation du plafond avec un système de suspentes dans le plafond hourdis, l'installation de plaques <abbr title="Plaque de plâtre de 13 mm d'épaisseur, le placo standard des cloisons">BA13</abbr> au plafond, l'isolation des murs, et la création de deux espaces distincts avec leurs propres fonctionnalités. Cette rénovation était essentielle pour optimiser l'utilisation de cet espace et améliorer le confort thermique de la maison.</p>

<h2>État initial / Démolition</h2>
<p>Le cellier conservait encore son état d'origine des années 1970. L'espace était brut, avec un plafond hourdis (plafond en béton avec alvéoles), et une organisation peu optimale. La chaudière était installée dans un coin de la pièce. L'accès à la cave était enfermé dans une cage d'escalier avec deux murs qui fermaient totalement la pièce, ce qui limitait considérablement l'utilisation de l'espace.</p>
<p>Pour optimiser l'espace et exploiter pleinement la surface disponible, j'ai décidé de détruire ces deux murs afin d'ouvrir complètement la pièce et exploiter l'espace au-dessus de la cave. Cette démolition a permis de libérer l'espace et de créer une ouverture vers la cave, tout en conservant l'accès fonctionnel.</p>
<p>La première étape a consisté à démolir l'existant et à préparer l'espace : retirer les anciennes finitions, démolir les deux murs de la cage d'escalier, nettoyer les surfaces, et préparer les murs et le plafond pour les travaux d'isolation et de finition à venir.</p>
<p><img src="/images/renovation-cellier-bureau-etat-initial-1.jpg" alt="État initial du cellier avec chaudière et accès cave"></p>
<p><img src="/images/renovation-cellier-bureau-etat-initial-2.jpg" alt="Mur de la cave avant démolition"></p>

<h2>Isolation et installation des plaques BA13 au plafond</h2>
<p>L'isolation du plafond était une étape importante pour améliorer le confort de l'espace. Le plafond hourdis nécessitait un système de suspension pour supporter l'ossature métallique et les plaques BA13.</p>
<p>J'ai installé des suspentes métalliques directement dans le plafond hourdis. Ces suspentes permettent de suspendre une ossature métallique en dessous. J'ai percé le plafond à des endroits stratégiques et fixé les suspentes solidement pour supporter le poids de l'isolation et des plaques BA13.</p>
<p>Une fois les suspentes installées, j'ai mis en place une ossature métallique avec des rails et des montants. Cette ossature forme une grille qui supporte l'isolation et les plaques de plâtre. Entre le plafond hourdis et cette ossature, j'ai installé une épaisse couche d'isolation en laine minérale de 20 cm, qui améliore considérablement le confort de l'espace.</p>
<p><img src="/images/renovation-cellier-bureau-plafond-suspentes-1.jpg" alt="Installation des suspentes dans le plafond hourdis"></p>
<p><img src="/images/renovation-cellier-bureau-plafond-ossature-1.jpg" alt="Ossature métallique suspendue avec isolation"></p>
<p><img src="/images/renovation-cellier-bureau-plafond-isolation-1.jpg" alt="Isolation thermique et acoustique entre le plafond et l'ossature"></p>
<p>Une fois l'ossature métallique et l'isolation en place, j'ai procédé à l'installation des plaques BA13 au plafond.</p>
<p>Pour faciliter l'installation, j'ai utilisé un lève-plaques. Cet outil est essentiel pour ce type de travail, car il évite d'avoir à tenir manuellement des plaques de plusieurs dizaines de kilos au-dessus de la tête.</p>
<p>J'ai installé les plaques BA13 une par une, en les vissant solidement à l'ossature métallique avec des vis à placo. Les plaques ont été posées de manière à créer des joints réguliers qui seront ensuite rebouchés et poncés pour obtenir une surface lisse et uniforme.</p>

<h2>Isolation des murs</h2>
<p>Pour compléter l'isolation thermique de l'espace, j'ai également isolé les murs.</p>
<p>J'ai réalisé l'isolation des murs avec des plaques de polyuréthane extrudé, posées entre une ossature métallique fixée aux murs. Une fois l'isolation en place, j'ai recouvert les murs de plaques BA13.</p>
<p><img src="/images/renovation-cellier-bureau-murs-isolation-1.jpg" alt="Isolation thermique des murs avec panneaux réfléchissants"></p>
<p><img src="/images/renovation-cellier-bureau-murs-isolation-2.jpg" alt="Ossature métallique et isolation en cours d'installation"></p>
<p><img src="/images/renovation-cellier-bureau-murs-placo-1.jpg" alt="Plaques BA13 installées sur les murs isolés"></p>

<h2>Installation électrique et réseau</h2>
<p>Les tableaux électriques ont été entièrement refaits et mis aux normes lors de la rénovation précédente, avant la rénovation du cellier.</p>
<p>Le bureau sera le centre névralgique du réseau informatique de la maison. Tout sera hébergé dans une baie informatique 33U. Il a donc fallu ramener tous les câbles RJ45 jusqu'au bureau en sortant par le plafond à l'emplacement de la baie informatique.</p>
<p>Pour le bureau, j'ai prévu une installation réseau complète avec des prises réseau dans les murs. J'ai installé un panneau de brassage pour organiser les câbles réseau.</p>
<p>J'ai également installé des prises multiples pour les équipements de bureau et de buanderie, ainsi qu'un éclairage adapté à chaque espace. Tous les câbles électriques et réseau ont été installés dans des gaines pour assurer la sécurité.</p>
<p><img src="/images/renovation-cellier-bureau-electricite-1.jpg" alt="Tableau électrique et équipements réseau installés"></p>
<p><img src="/images/renovation-cellier-bureau-reseau-1.jpg" alt="Installation du panneau de brassage et des équipements réseau"></p>
<p><img src="/images/renovation-cellier-bureau-reseau-2.jpg" alt="Câbles réseau organisés dans les gaines"></p>

<h2>Installation de la plomberie</h2>
<p>J'ai également ajouté un petit radiateur au cas où, malgré la grande isolation faite. Il a fallu revoir le réseau de plomberie en cuivre qui se trouve caché dans le mur pour rajouter un nouveau départ. Le tout a été fait en multicouches pour faciliter l'opération.</p>
<p>J'ai prévu des vannes d'arrêt pour permettre l'isolation de chaque circuit en cas de maintenance.</p>
<p><img src="/images/renovation-cellier-bureau-plomberie-1.jpg" alt="Installation des tuyaux PEX et raccords en laiton"></p>

<h2>Création de deux espaces</h2>
<p>L'un des objectifs principaux de cette rénovation était de transformer le cellier en deux espaces fonctionnels et distincts : un bureau et un cellier/buanderie. Cette division de l'espace nécessitait une planification soignée pour optimiser l'utilisation de chaque zone.</p>

<h3>Le bureau</h3>
<p>J'ai créé le bureau dans une partie de l'espace, avec une surface suffisante pour installer un plan de travail, des étagères, et un espace de rangement. Cet espace bénéficie d'un éclairage naturel grâce à une grande fenêtre coulissante en alu blanche comme le reste de la maison, qui apporte beaucoup de lumière naturelle. L'isolation thermique et acoustique installée au plafond et aux murs garantit un environnement de travail confortable et calme.</p>
<p><img src="/images/renovation-cellier-bureau-espace-bureau-1.jpg" alt="Espace bureau en cours de création avec fenêtre"></p>
<p><img src="/images/renovation-cellier-bureau-bureau-installation-1.jpg" alt="Installation du bureau et de l'infrastructure réseau"></p>
<p><img src="/images/renovation-cellier-bureau-bureau-reseau-1.jpg" alt="Équipements réseau et câblage du bureau"></p>
<p>L'espace peut également servir de chambre d'amis grâce à un lit escamotable, faisant de cet espace un lieu polyvalent. Des rangements muraux et des étagères permettent d'organiser le matériel et les fournitures de bureau.</p>

<h3>Le cellier/buanderie</h3>
<p>Le cellier/buanderie est un espace qui existait déjà mais qui n'avait jamais été rénové. Après avoir cassé les murs d'accès à la cave afin d'augmenter le volume exploitable, nous allons en profiter pour l'utiliser comme buanderie pour étendre le linge et stocker la nourriture et autres affaires.</p>
<p>J'ai conservé la chaudière dans cet espace, avec un accès facilité pour la maintenance. L'isolation installée garantit que la chaleur produite par la chaudière contribue au confort de l'espace sans créer de surchauffe. J'ai préservé l'accès à la cave, avec une trappe.</p>
<p>L'espace a été organisé pour optimiser le rangement et faciliter l'utilisation quotidienne.</p>

<h2>Finitions et résultat final</h2>
<p>Une fois les travaux d'isolation et de cloisonnement terminés, j'ai procédé aux finitions : rebouchage et ponçage des joints entre les plaques BA13, préparation des murs pour la peinture, et application de la peinture blanche sur les murs et le plafond. Les murs blancs créent une ambiance lumineuse et moderne dans les deux espaces.</p>
<p>Les finitions électriques et réseau ont été finalisées, avec les prises et les interrupteurs installés, et l'infrastructure réseau opérationnelle. Les équipements de buanderie peuvent maintenant être connectés, et le bureau est prêt à accueillir le matériel informatique et de travail.</p>
<p>Le résultat final est un espace transformé, avec deux pièces fonctionnelles et bien isolées. Le bureau offre un environnement de travail confortable et calme, avec une grande fenêtre apportant la lumière naturelle, tandis que le cellier/buanderie est un espace pratique et organisé pour les tâches quotidiennes et le stockage, avec la chaudière intégrée de manière harmonieuse.</p>
<p><img src="/images/renovation-cellier-bureau-final-1.jpg" alt="Bureau terminé avec fenêtre et sol stratifié"></p>
<p><img src="/images/renovation-cellier-bureau-final-2.jpg" alt="Cellier/buanderie terminé avec chaudière et carrelage mosaïque"></p>

<h2>Conclusion</h2>
<p>La rénovation complète du cellier est maintenant terminée. Le résultat est un espace transformé, avec deux pièces fonctionnelles et bien isolées : un bureau et un cellier/buanderie. Cette rénovation améliore considérablement le confort et la fonctionnalité de cet espace, tout en conservant l'accès à la cave et en intégrant harmonieusement la chaudière dans le cellier/buanderie.</p>`
}

const englishContent: PostContent = {
  title: 'Renovation of the Cellier with Office and Laundry Room - Renovation Series #10',
  description: 'Complete renovation of the cellier (pantry/storage room) of the 1970s house, including ceiling insulation with hangers in a hollow block ceiling, BA13 plasterboard ceiling installation, wall insulation, and the creation of two functional spaces: an office and a pantry/laundry room with the boiler.',
  html: `<h2>Introduction</h2>
<p>After renovating the two other bedrooms in <a href="/en/posts/renovation-chambres-maison-1970">the ninth article of this series</a>, it was time to tackle the complete renovation of the cellier. This space, located on the ground floor, housed the boiler and provided access to the basement. This renovation represented a significant technical challenge: transforming this utility space into two functional and well-insulated rooms - an office and a pantry/laundry room - while preserving access to the basement and integrating the boiler.</p>
<p>The project involved several complex technical steps: ceiling insulation with a hanger system in the hollow block ceiling, <abbr title="13 mm plasterboard, the standard panel for partition walls in France">BA13</abbr> plasterboard ceiling installation, wall insulation, and the creation of two distinct spaces with their own functionalities. This renovation was essential to optimize the use of this space and improve the thermal comfort of the house.</p>

<h2>Initial State / Demolition</h2>
<p>The cellier still retained its original 1970s state. The space was raw, with a hollow block ceiling (concrete ceiling with cells), and suboptimal organization. The boiler was installed in a corner of the room. Access to the basement was enclosed in a stairwell with two walls that completely closed off the room, which significantly limited the use of the space.</p>
<p>To optimize the space and fully exploit the available surface area, I decided to demolish these two walls to completely open up the room and exploit the space above the basement. This demolition freed up the space and created an opening to the basement, while maintaining functional access.</p>
<p>The first step was to demolish the existing elements and prepare the space: remove old finishes, demolish the two stairwell walls, clean surfaces, and prepare the walls and ceiling for the upcoming insulation and finishing work.</p>
<p><img src="/images/renovation-cellier-bureau-etat-initial-1.jpg" alt="Initial state of the cellier with boiler and basement access"></p>
<p><img src="/images/renovation-cellier-bureau-etat-initial-2.jpg" alt="Basement wall before demolition"></p>

<h2>Ceiling Insulation and BA13 Installation</h2>
<p>Ceiling insulation was an important step to improve the comfort of the space. The hollow block ceiling needed a suspension system to support the metal framework and BA13 plasterboard.</p>
<p>I installed metal hangers directly into the hollow block ceiling. These hangers allow suspending a metal framework below. I drilled the ceiling at strategic locations and secured the hangers firmly to support the weight of the insulation and BA13 plasterboard.</p>
<p>Once the hangers were installed, I set up a metal framework with rails and studs. This framework forms a grid that supports the insulation and plasterboard. Between the hollow block ceiling and this framework, I installed a thick layer of 20 cm mineral wool insulation, which significantly improves the comfort of the space.</p>
<p><img src="/images/renovation-cellier-bureau-plafond-suspentes-1.jpg" alt="Installing hangers in the hollow block ceiling"></p>
<p><img src="/images/renovation-cellier-bureau-plafond-ossature-1.jpg" alt="Suspended metal framework with insulation"></p>
<p><img src="/images/renovation-cellier-bureau-plafond-isolation-1.jpg" alt="Thermal and acoustic insulation between ceiling and framework"></p>
<p>Once the metal framework and insulation were in place, I proceeded with the installation of BA13 plasterboard on the ceiling.</p>
<p>To facilitate installation, I used a mechanical tool. This tool is essential for this type of work, as it avoids having to manually hold panels weighing several tens of kilograms overhead.</p>
<p>I installed the BA13 panels one by one, screwing them firmly to the metal framework with drywall screws. The panels were placed to create regular joints that would then be filled and sanded to obtain a smooth and uniform surface.</p>

<h2>Wall Insulation</h2>
<p>To complete the thermal insulation of the space, I also insulated the walls.</p>
<p>I did the wall insulation with extruded polyurethane panels, placed between a metal framework fixed to the walls. Once the insulation was in place, I covered the walls with BA13 panels.</p>
<p><img src="/images/renovation-cellier-bureau-murs-isolation-1.jpg" alt="Wall thermal insulation with reflective panels"></p>
<p><img src="/images/renovation-cellier-bureau-murs-isolation-2.jpg" alt="Metal framework and insulation being installed"></p>
<p><img src="/images/renovation-cellier-bureau-murs-placo-1.jpg" alt="BA13 panels installed on insulated walls"></p>

<h2>Electrical and Network Installation</h2>
<p>The electrical panels were completely redone and brought up to code during the previous renovation, before the cellier renovation.</p>
<p>The office will be the nerve center of the home's computer network. Everything will be housed in a 33U server rack. It was therefore necessary to bring all RJ45 cables to the office, exiting through the ceiling at the location of the server rack.</p>
<p>For the office, I planned a complete network installation with network outlets in the walls. I installed a patch panel to organize network cables.</p>
<p>I also installed multiple outlets for office and laundry equipment, as well as appropriate lighting for each space. All electrical and network cables were installed in conduits to ensure safety.</p>
<p><img src="/images/renovation-cellier-bureau-electricite-1.jpg" alt="Electrical panel and network equipment installed"></p>
<p><img src="/images/renovation-cellier-bureau-reseau-1.jpg" alt="Patch panel and network equipment installation"></p>
<p><img src="/images/renovation-cellier-bureau-reseau-2.jpg" alt="Network cables organized in conduits"></p>

<h2>Plumbing Installation</h2>
<p>I also added a small radiator just in case, despite the extensive insulation done. It was necessary to review the copper plumbing network hidden in the wall to add a new branch. Everything was done in multilayer to facilitate the operation.</p>
<p>I provided shut-off valves to allow isolation of each circuit in case of maintenance.</p>
<p><img src="/images/renovation-cellier-bureau-plomberie-1.jpg" alt="PEX pipes and brass fittings installation"></p>

<h2>Creation of Two Spaces</h2>
<p>One of the main objectives of this renovation was to transform the cellier into two functional and distinct spaces: an office and a pantry/laundry room. This division of space required careful planning to optimize the use of each zone.</p>

<h3>The Office</h3>
<p>I created the office in one part of the space, with sufficient surface area to install a work surface, shelves, and storage space. This space benefits from natural lighting thanks to a large white aluminum sliding window like the rest of the house, which brings a lot of natural light. The thermal and acoustic insulation installed on the ceiling and walls ensures a comfortable and quiet working environment.</p>
<p><img src="/images/renovation-cellier-bureau-espace-bureau-1.jpg" alt="Office space being created with window"></p>
<p><img src="/images/renovation-cellier-bureau-bureau-installation-1.jpg" alt="Desk and network infrastructure installation"></p>
<p><img src="/images/renovation-cellier-bureau-bureau-reseau-1.jpg" alt="Network equipment and office cabling"></p>
<p>The space can also serve as a guest room thanks to a pull-out bed, making this space a versatile area. Wall storage and shelves allow organizing equipment and office supplies.</p>

<h3>The Pantry/Laundry Room</h3>
<p>The pantry/laundry room is a space that already existed but had never been renovated. After breaking down the walls providing access to the basement to increase the usable volume, we will take advantage of it to use it as a laundry room to hang laundry and store food and other items.</p>
<p>I kept the boiler in this space, with easy access for maintenance. The installed insulation ensures that the heat produced by the boiler contributes to the comfort of the space without creating overheating. I preserved access to the basement, with a trap door.</p>
<p>The space was organized to optimize storage and facilitate daily use.</p>

<h2>Finishes and Final Result</h2>
<p>Once the insulation and partitioning work was completed, I proceeded with the finishes: filling and sanding joints between BA13 panels, preparing walls for painting, and applying white paint to walls and ceiling. The white walls create a bright and modern atmosphere in both spaces.</p>
<p>Electrical and network finishes were finalized, with outlets and switches installed, and the network infrastructure operational. Laundry equipment can now be connected, and the office is ready to accommodate computer and work equipment.</p>
<p>The final result is a transformed space, with two functional and well-insulated rooms. The office offers a comfortable and quiet working environment, with a large window bringing natural light, while the pantry/laundry room is a practical and organized space for daily tasks and storage, with the boiler integrated harmoniously.</p>
<p><img src="/images/renovation-cellier-bureau-final-1.jpg" alt="Completed office with window and laminate flooring"></p>
<p><img src="/images/renovation-cellier-bureau-final-2.jpg" alt="Completed pantry/laundry room with boiler and mosaic tiles"></p>

<h2>Conclusion</h2>
<p>The complete renovation of the cellier is now finished. The result is a transformed space, with two functional and well-insulated rooms: an office and a pantry/laundry room. This renovation significantly improves the comfort and functionality of this space, while preserving access to the basement and harmoniously integrating the boiler into the pantry/laundry room.</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'RenovationCellierBureauMaison1970',
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
