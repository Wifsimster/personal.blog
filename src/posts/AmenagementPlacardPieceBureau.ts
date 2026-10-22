import type { PostMetadata, PostContent } from '@/lib/posts'

export const metadata: PostMetadata = {
  slug: 'amenagement-placard-piece-bureau',
  date: '2018-02-17',
  tags: ['DIY']
}

const frenchContent: PostContent = {
  title: 'Aménagement d\'un placard dans la pièce bureau',
  description: 'Organisation et aménagement d\'un placard encastré dans la pièce bureau avec installation d\'étagères et unités de rangement pour optimiser l\'espace de stockage.',
  html: `<h2>Introduction</h2>
<p>Dans le cadre de l'aménagement de mon bureau, j'ai décidé d'organiser un placard encastré pour créer un espace de rangement fonctionnel et bien organisé. Cet espace me permettra de stocker mes composants électroniques, outils et divers accessoires de manière ordonnée.</p>

<h2>Préparation de l'espace</h2>
<p>Le placard est une alcove rectangulaire encastrée dans le mur, avec des murs blancs et un sol en parquet clair. L'espace était initialement vide et prêt à être aménagé.</p>
<p>J'ai d'abord nettoyé et préparé les surfaces pour m'assurer que les supports d'étagères seraient fixés de manière solide et durable.</p>
<p><img src="/images/amenagement-placard-vide-1.jpg" alt="Alcove vide initiale avant aménagement"></p>

<h2>Installation des supports d'étagères</h2>
<p>Pour créer un système d'étagères modulaire et solide, j'ai installé des supports en bois blanc fixés directement sur les murs latéraux de l'alcove. Ces supports sont constitués de bandes de bois d'environ 3 cm de largeur, fixées horizontalement à plusieurs niveaux.</p>
<p>Les supports sont fixés avec des vis et des chevilles Molly dans le mur alvéolaire, espacées régulièrement pour assurer une bonne répartition de la charge.</p>
<p><img src="/images/amenagement-placard-supports-1.jpg" alt="Installation des supports d'étagères en bois blanc"></p>

<h2>Installation des étagères</h2>
<p>Une fois les supports en place, j'ai installé les étagères en contreplaqué. J'ai choisi un mélange d'étagères en bois naturel clair et en contreplaqué teinté rouge-brun pour créer un contraste visuel intéressant.</p>
<p>Les étagères sont posées directement sur les supports et s'étendent sur toute la largeur de l'alcove.</p>
<p><img src="/images/amenagement-placard-etageres-1.jpg" alt="Étagères installées dans l'alcove"></p>

<h2>Résultat final</h2>
<p>Le placard est maintenant complètement aménagé et organisé. L'espace est utilisé de manière optimale avec plusieurs niveaux d'étagères permettant de stocker une grande quantité d'objets tout en gardant tout accessible et bien organisé.</p>
<p><img src="/images/amenagement-placard-organisation-1.jpg" alt="Placard organisé avec rangement"></p>
<p><img src="/images/amenagement-placard-final-1.jpg" alt="Résultat final - Placard organisé et fonctionnel"></p>`
}

const englishContent: PostContent = {
  title: 'Closet organization in desk room',
  description: 'Organization and setup of a built-in closet in the desk room with shelf installation and storage units to optimize storage space.',
  html: `<h2>Introduction</h2>
<p>As part of organizing my desk room, I decided to set up a built-in closet to create a functional and well-organized storage space. This space will allow me to store my electronic components, tools, and various accessories in an orderly manner.</p>

<h2>Space Preparation</h2>
<p>The closet is a rectangular alcove recessed into the wall, with white walls and a light wooden floor. The space was initially empty and ready to be organized.</p>
<p>I first cleaned and prepared the surfaces to ensure that the shelf supports would be securely and durably fixed.</p>
<p><img src="/images/amenagement-placard-vide-1.jpg" alt="Initial empty alcove before organization"></p>

<h2>Shelf Support Installation</h2>
<p>To create a modular and sturdy shelf system, I installed white wooden supports fixed directly to the side walls of the alcove. These supports consist of wood strips approximately 3 cm wide, fixed horizontally at several levels.</p>
<p>The supports are fixed with screws and Molly bolts in the hollow wall, evenly spaced to ensure good load distribution.</p>
<p><img src="/images/amenagement-placard-supports-1.jpg" alt="Installation of white wooden shelf supports"></p>

<h2>Shelf Installation</h2>
<p>Once the supports were in place, I installed the plywood shelves. I chose a mix of natural light wood shelves and reddish-brown stained plywood to create an interesting visual contrast.</p>
<p>The shelves are placed directly on the supports and extend across the full width of the alcove.</p>
<p><img src="/images/amenagement-placard-etageres-1.jpg" alt="Shelves installed in the alcove"></p>

<h2>Final Result</h2>
<p>The closet is now completely organized and set up. The space is used optimally with multiple shelf levels allowing storage of a large quantity of objects while keeping everything accessible and well-organized.</p>
<p><img src="/images/amenagement-placard-organisation-1.jpg" alt="Organized closet with storage"></p>
<p><img src="/images/amenagement-placard-final-1.jpg" alt="Final result - Organized and functional closet"></p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

