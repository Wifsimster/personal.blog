import type { PostMetadata, PostContent } from '@/lib/posts'

export const metadata: PostMetadata = {
  slug: 'emplacement-refrigerateur-cuisine-ouverte',
  date: '2018-01-29',
  tags: ['Renovation', 'DIY']
}

const frenchContent: PostContent = {
  title: 'Emplacement pour réfrigérateur dans une cuisine ouverte',
  description: 'Création d\'un emplacement sur mesure pour intégrer un réfrigérateur dans une cuisine ouverte en construisant une cloison de séparation.',
  html: `<h2>Introduction</h2>
<p>Lors de la rénovation de mon appartement, j'ai souhaité créer une cuisine ouverte tout en intégrant de manière élégante le réfrigérateur. Plutôt que de le laisser encombrer l'espace, j'ai décidé de construire une cloison de séparation qui lui servirait d'emplacement dédié, créant ainsi une séparation visuelle entre la cuisine et le reste de l'espace de vie.</p>

<h2>Planification</h2>
<p>La première étape a consisté à déterminer l'emplacement idéal pour le réfrigérateur. Il fallait tenir compte de plusieurs contraintes : l'accès aux prises électriques, la ventilation nécessaire, et bien sûr les dimensions du réfrigérateur lui-même.</p>
<p>J'ai choisi de positionner le réfrigérateur le long d'une cloison qui séparerait la cuisine du reste de la pièce, créant ainsi une zone dédiée tout en préservant l'aspect ouvert de l'espace.</p>
<p><img src="/images/emplacement-refrigerateur-construction-1.jpg" alt="Planification et début de construction de la cloison"></p>

<h2>Construction de la cloison</h2>
<p>La construction de la cloison a nécessité plusieurs étapes. J'ai commencé par assembler les blocs de construction en veillant à laisser suffisamment d'espace pour accueillir le réfrigérateur.</p>
<p>Pour maintenir la cloison verticale pendant la construction, j'ai utilisé des supports métalliques temporaires. Une fois la cloison terminée et stable, ces supports ont été retirés. J'ai ensuite procédé à la pose des plaques de plâtre et au plâtrage.</p>
<p><img src="/images/emplacement-refrigerateur-construction-2.jpg" alt="Construction de la cloison avec supports métalliques temporaires"></p>
<p><img src="/images/emplacement-refrigerateur-construction-3.jpg" alt="Avancement de la construction de la cloison"></p>

<h2>Installation du réfrigérateur</h2>
<p>Une fois la cloison terminée et peinte, j'ai procédé à l'installation du réfrigérateur. L'emplacement a été conçu pour qu'il s'intègre parfaitement dans l'ouverture, créant un effet de meuble encastré.</p>
<p>Il était important de laisser un espace de ventilation suffisant à l'arrière et sur les côtés pour assurer le bon fonctionnement de l'appareil. L'alimentation électrique a été prévue dès la construction de la cloison.</p>
<p><img src="/images/emplacement-refrigerateur-installation-1.jpg" alt="Installation du réfrigérateur dans l'emplacement"></p>

<h2>Résultat final</h2>
<p>Le réfrigérateur est maintenant parfaitement intégré dans la cuisine ouverte. La cloison crée une séparation visuelle élégante tout en conservant l'aspect ouvert de l'espace.</p>
<p><img src="/images/emplacement-refrigerateur-final-1.jpg" alt="Résultat final - Réfrigérateur intégré dans la cuisine ouverte"></p>
<p><img src="/images/emplacement-refrigerateur-final-2.jpg" alt="Résultat final - Vue détaillée de l'intégration"></p>`
}

const englishContent: PostContent = {
  title: 'Refrigerator emplacement in open kitchen',
  description: 'Creating a custom emplacement to integrate a refrigerator in an open kitchen by building a partition wall.',
  html: `<h2>Introduction</h2>
<p>During my apartment renovation, I wanted to create an open kitchen while elegantly integrating the refrigerator. Rather than having it clutter the space, I decided to build a partition wall that would serve as a dedicated emplacement, creating a visual separation between the kitchen and the rest of the living space.</p>

<h2>Planning</h2>
<p>The first step was to determine the ideal location for the refrigerator. Several constraints had to be considered: access to electrical outlets, necessary ventilation, and of course the dimensions of the refrigerator itself.</p>
<p>I chose to position the refrigerator along a partition that would separate the kitchen from the rest of the room, creating a dedicated zone while preserving the open aspect of the space.</p>
<p><img src="/images/emplacement-refrigerateur-construction-1.jpg" alt="Planning and beginning of partition construction"></p>

<h2>Partition Construction</h2>
<p>Building the partition required several steps. I started by assembling the construction blocks, making sure to leave enough space to accommodate the refrigerator.</p>
<p>To keep the wall vertical during construction, I used temporary metal supports. Once the partition was completed and stable, these supports were removed. I then proceeded with installing the drywall panels and plastering.</p>
<p><img src="/images/emplacement-refrigerateur-construction-2.jpg" alt="Partition construction with temporary metal supports"></p>
<p><img src="/images/emplacement-refrigerateur-construction-3.jpg" alt="Partition construction progress"></p>

<h2>Refrigerator Installation</h2>
<p>Once the partition was finished and painted, I proceeded with the refrigerator installation. The emplacement was designed so it would fit perfectly in the opening, creating a built-in effect.</p>
<p>It was important to leave sufficient ventilation space at the back and sides to ensure proper operation of the appliance. Electrical supply was planned from the beginning of the partition construction.</p>
<p><img src="/images/emplacement-refrigerateur-installation-1.jpg" alt="Refrigerator installation in the emplacement"></p>

<h2>Final Result</h2>
<p>The refrigerator is now perfectly integrated into the open kitchen. The partition creates an elegant visual separation while maintaining the open aspect of the space.</p>
<p><img src="/images/emplacement-refrigerateur-final-1.jpg" alt="Final result - Refrigerator integrated in open kitchen"></p>
<p><img src="/images/emplacement-refrigerateur-final-2.jpg" alt="Final result - Detailed view of the integration"></p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

