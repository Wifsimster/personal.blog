<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'renovation-chambre-parentale-maison-1970',
  date: '2024-07-06',
  tags: ['Renovation', 'DIY']
}

const frenchContent: PostContent = {
  title: 'Rénovation de la chambre parentale - Série rénovation #8',
  description: 'Rénovation complète de la chambre parentale de la maison des années 1970, incluant la démolition, l\'agrandissement pour créer un dressing, l\'installation des réseaux, la construction des nouveaux espaces en rails métalliques et plaques BA13, et les finitions.',
  html: `<h2>Introduction</h2>
    <p>Après avoir rénové le salon dans <a href="/posts/renovation-salon-maison-1970">le septième article de cette série</a>, il était temps de s'attaquer à la rénovation complète de la chambre parentale. Cette chambre est la plus grande de la maison et représentait un défi majeur : l'agrandir pour créer un dressing intégré. Cette transformation majeure impliquait une démolition importante, la reconstruction de nouveaux espaces avec une ossature métallique et des plaques <abbr title="Plaque de plâtre de 13 mm d'épaisseur, le placo standard des cloisons">BA13</abbr>, ainsi que tous les travaux de finition nécessaires.</p>

<h2>Démolition</h2>
<p>La chambre parentale conservait encore ses finitions d'origine des années 1970. Les murs étaient recouverts de papier peint, notamment un mur violet qui nécessitait un détapissage complet. Le sol était recouvert d'un parquet qui avait vieilli et qui ne correspondait plus à nos attentes. Un placard intégré occupait une partie de la chambre et devait être démonté pour libérer l'espace.</p>
    <p>La première étape a consisté à démolir l'existant : détapisser le mur violet, retirer le parquet pour exposer le sol en béton, démonter le placard de la chambre. Pour agrandir la chambre et créer les nouveaux espaces, il était également nécessaire de casser le mur donnant sur les anciens WC. Cette démolition partielle a permis de libérer l'espace nécessaire pour le dressing.</p>
    <p><img src="/images/renovation-chambre-parentale-demolition-1.jpg" alt="Détapissage du mur violet"></p>
<p><img src="/images/renovation-chambre-parentale-demolition-2.jpg" alt="Retrait du parquet"></p>
    <p><img src="/images/renovation-chambre-parentale-demolition-3.jpg" alt="Démontage du placard"></p>

<h2>Construction des nouveaux espaces</h2>
    <p>La construction des nouveaux espaces a été réalisée avec une ossature métallique (rails et montants) pour créer la structure des nouvelles cloisons. J'ai ensuite installé des plaques BA13 standard pour les murs de la chambre.</p>
    <p><img src="/images/renovation-chambre-parentale-projection-3d-1.jpg" alt="Projection 3D des nouveaux espaces"></p>
    <p><img src="/images/renovation-chambre-parentale-ossature-1.jpg" alt="Installation de l'ossature métallique"></p>
    <p><img src="/images/renovation-chambre-parentale-placo-1.jpg" alt="Installation des plaques BA13 standard"></p>

    <h2>Dressing</h2>
    <p>La création du dressing a été réalisée avec des panneaux en mélamine de Brico Dépôt, assemblés avec des pocket holes (vis invisibles). Le dressing étant trop grand pour être déplacé, il a été monté directement à l'intérieur de la pièce. La construction a été progressive, avec l'assemblage des éléments et l'installation des supports, puis l'aménagement des rangements.</p>
<p>Le dressing final est un placard intégré moderne avec des étagères pour le rangement, une penderie avec barre de suspension, et des tiroirs pour l'organisation. Une porte coulissante en bois entre la chambre et le dressing, venant de Brico Dépôt, a été installée pour séparer les deux espaces.</p>
<p><img src="/images/renovation-chambre-parentale-dressing-construction-1.jpg" alt="Installation des étagères avec laser niveau"></p>
<p><img src="/images/renovation-chambre-parentale-dressing-construction-2.jpg" alt="Construction du dressing en cours"></p>
<p><img src="/images/renovation-chambre-parentale-dressing-final-1.jpg" alt="Dressing final terminé"></p>

<h2>Placard</h2>
    <p>Un placard intégré a été créé dans la chambre pour le rangement. La construction a commencé par la préparation des murs existants : rebouchage, application d'enduit, ponçage puis peinture. Des étagères en bois ont été montées sur les murs pour le rangement. Les tuyaux de plomberie ont été intégrés dans la structure du placard pour alimenter le radiateur de la chambre.</p>
    <p>Le placard final est une armoire coulissante intégrée s'étendant du sol au plafond, avec des portes en bois naturel (pin).</p>
    <p><img src="/images/renovation-chambre-parentale-placard-construction-1.jpg" alt="Préparation des murs avec rebouchage et enduit"></p>
    <p><img src="/images/renovation-chambre-parentale-placard-construction-2.jpg" alt="Installation des étagères et intégration de la plomberie"></p>
    <p><img src="/images/renovation-chambre-parentale-placard-construction-3.jpg" alt="Placard intégré avec portes coulissantes en bois naturel"></p>

<h2>Sol et finitions</h2>
    <p>Le sol de la chambre a été préparé avec des panneaux d'isolation verts (sous-couche) pour améliorer l'isolation thermique et phonique. Le plancher en stratifié, comme dans les autres chambres et le salon, a ensuite été installé.</p>
    <p>Les finitions ont consisté à appliquer l'enduit de rebouchage sur les murs pour masquer les vis et les joints entre les plaques BA13. Les murs ont été peints en blanc pour créer un espace lumineux et moderne. Le radiateur a été démonté et repeint au pistolet en blanc (anciennement bleu). La fenêtre a été remplacée par une fenêtre coulissante en alu blanche.</p>
<p><img src="/images/renovation-chambre-parentale-sol-isolation-1.jpg" alt="Panneaux d'isolation verts"></p>
<p><img src="/images/renovation-chambre-parentale-sol-installation-1.jpg" alt="Installation du plancher en cours"></p>
<p><img src="/images/renovation-chambre-parentale-sol-final-1.jpg" alt="Plancher terminé"></p>

<h2>Résultat final</h2>
    <p>La rénovation complète de la chambre parentale est maintenant terminée. Le résultat est un espace fonctionnel, moderne et esthétique qui combine élégance et praticité. La chambre agrandie offre maintenant un dressing intégré. Le plancher clair apporte une touche de chaleur à l'ensemble, et la grande fenêtre offre une vue magnifique sur le jardin.</p>

<h2>Conclusion</h2>
<p>La rénovation complète de la chambre parentale est maintenant terminée. Le résultat est un espace moderne, fonctionnel et esthétique qui répond parfaitement à nos besoins.</p>
    <p>Ce projet m'a permis d'apprendre énormément sur l'agrandissement d'une pièce, la création de nouveaux espaces avec ossature métallique et plaques BA13, et la construction d'un dressing intégré. La chambre parentale est maintenant un espace de vie agréable et confortable, parfait pour se détendre.</p>`
}

const englishContent: PostContent = {
  title: 'Parental Bedroom Renovation - Renovation Series #8',
  description: 'Complete renovation of the parental bedroom of the 1970s house, including demolition, expansion to create a dressing room, network installation, construction of new spaces with metal rails and BA13 boards, and finishing work.',
  html: `<h2>Introduction</h2>
    <p>After renovating the living room in <a href="/en/posts/renovation-salon-maison-1970">the seventh article of this series</a>, it was time to tackle the complete renovation of the parental bedroom. This bedroom is the largest in the house and represented a major challenge: expanding it to create an integrated dressing room. This major transformation involved significant demolition, reconstruction of new spaces with a metal framework and <abbr title="13 mm plasterboard, the standard panel for partition walls in France">BA13</abbr> boards, as well as all necessary finishing work.</p>

<h2>Demolition</h2>
<p>The parental bedroom still retained its original 1970s finishes. The walls were covered with wallpaper, including a purple wall that required complete stripping. The floor was covered with parquet that had aged and no longer met our expectations. A built-in closet occupied part of the bedroom and had to be dismantled to free up space.</p>
    <p>The first step was to demolish the existing elements: strip the purple wall, remove the parquet to expose the concrete floor, dismantle the bedroom closet. To expand the bedroom and create the new spaces, it was also necessary to break down the wall leading to the old WC. This partial demolition freed up the space needed for the dressing room.</p>
    <p><img src="/images/renovation-chambre-parentale-demolition-1.jpg" alt="Stripping the purple wall"></p>
<p><img src="/images/renovation-chambre-parentale-demolition-2.jpg" alt="Removing the parquet"></p>
    <p><img src="/images/renovation-chambre-parentale-demolition-3.jpg" alt="Dismantling the closet"></p>

<h2>Construction of New Spaces</h2>
    <p>The construction of new spaces was carried out with a metal framework (rails and studs) to create the structure of the new partitions. I then installed standard BA13 boards for the bedroom walls.</p>
    <p><img src="/images/renovation-chambre-parentale-projection-3d-1.jpg" alt="3D projection of new spaces"></p>
    <p><img src="/images/renovation-chambre-parentale-ossature-1.jpg" alt="Metal framework installation"></p>
    <p><img src="/images/renovation-chambre-parentale-placo-1.jpg" alt="Standard BA13 board installation"></p>

    <h2>Dressing Room</h2>
    <p>Creating the dressing room was done with melamine panels from Brico Dépôt, assembled using pocket holes (invisible screws). Since the dressing was too large to be moved, it was assembled directly inside the room. Construction was progressive, with element assembly and support installation, then storage organization.</p>
<p>The final dressing room is a modern built-in closet with shelves for storage, a wardrobe with hanging rod, and drawers for organization. A wooden sliding door between the bedroom and the dressing room, from Brico Dépôt, was installed to separate the two spaces.</p>
<p><img src="/images/renovation-chambre-parentale-dressing-construction-1.jpg" alt="Shelf installation with laser level"></p>
<p><img src="/images/renovation-chambre-parentale-dressing-construction-2.jpg" alt="Dressing room construction in progress"></p>
<p><img src="/images/renovation-chambre-parentale-dressing-final-1.jpg" alt="Final completed dressing room"></p>

<h2>Closet</h2>
    <p>A built-in closet was created in the bedroom for storage. Construction began with preparation of the existing walls: filling, joint compound application, sanding, then painting. Wooden shelves were mounted on the walls for storage. Plumbing pipes were integrated into the closet structure to supply the bedroom radiator.</p>
    <p>The final closet is a built-in sliding wardrobe extending from floor to ceiling, with natural wood doors (pine).</p>
    <p><img src="/images/renovation-chambre-parentale-placard-construction-1.jpg" alt="Wall preparation with filling and joint compound"></p>
    <p><img src="/images/renovation-chambre-parentale-placard-construction-2.jpg" alt="Shelf installation and plumbing integration"></p>
    <p><img src="/images/renovation-chambre-parentale-placard-construction-3.jpg" alt="Built-in closet with natural wood sliding doors"></p>

<h2>Floor and Finishing</h2>
    <p>The bedroom floor was prepared with green insulation panels (underlayment) to improve thermal and acoustic insulation. The laminate flooring, like in the other bedrooms and living room, was then installed.</p>
    <p>Finishing involved applying joint compound to the walls to hide screws and joints between BA13 boards. The walls were painted white to create a bright and modern space. The radiator was dismantled and spray-painted white (formerly blue). The window was replaced with a white aluminum sliding window.</p>
<p><img src="/images/renovation-chambre-parentale-sol-isolation-1.jpg" alt="Green insulation panels"></p>
<p><img src="/images/renovation-chambre-parentale-sol-installation-1.jpg" alt="Flooring installation in progress"></p>
<p><img src="/images/renovation-chambre-parentale-sol-final-1.jpg" alt="Completed flooring"></p>

<h2>Final Result</h2>
    <p>The complete parental bedroom renovation is now finished. The result is a functional, modern, and aesthetic space that combines elegance and practicality. The expanded bedroom now offers an integrated dressing room. The light flooring adds a warm touch to the whole, and the large window offers a magnificent view of the garden.</p>

<h2>Conclusion</h2>
<p>The complete parental bedroom renovation is now finished. The result is a modern, functional, and aesthetic space that perfectly meets our needs.</p>
    <p>This project allowed me to learn a great deal about expanding a room, creating new spaces with metal framework and BA13 boards, and building an integrated dressing room. The parental bedroom is now a pleasant and comfortable living space, perfect for relaxing.</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'RenovationChambreParentaleMaison1970',
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
