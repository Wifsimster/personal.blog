import type { PostMetadata, PostContent } from '@/lib/posts'

export const metadata: PostMetadata = {
  slug: 'structure-rack-bois-mur-placo',
  date: '2018-02-17',
  tags: ['DIY']
}

const frenchContent: PostContent = {
  title: 'Structure de rack en bois dans une cloison alvéolaire',
  description: 'Création d\'une structure de rack en bois encastrée dans une cloison alvéolaire pour organiser l\'équipement réseau de manière discrète.',
  html: `<h2>Introduction</h2>
<p>Lors de la rénovation de mon appartement, j'ai eu besoin de créer un espace dédié pour organiser mon équipement réseau. Plutôt que d'avoir des câbles et des équipements qui traînent, j'ai décidé de créer une structure de rack encastrée directement dans le mur en cloison alvéolaire.</p>

<h2>Préparation du mur</h2>
<p>La première étape consiste à préparer l'emplacement dans le mur. J'ai d'abord repéré l'emplacement idéal, en tenant compte de la présence des câbles réseau et électriques existants.</p>
<p>J'ai ensuite découpé la cloison alvéolaire pour créer une ouverture rectangulaire permettant d'accueillir la structure de rack.</p>
<p><img src="/images/structure-rack-bois-preparation-1.jpg" alt="Préparation du mur et découpe de la cloison alvéolaire"></p>
<p><img src="/images/structure-rack-bois-preparation-2.jpg" alt="Ouverture dans la cloison alvéolaire avec câbles visibles"></p>
<p><img src="/images/structure-rack-bois-preparation-3.jpg" alt="Installation de la multiprise"></p>

<h2>Construction de la structure en bois</h2>
<p>J'ai construit une structure en bois qui servira de support pour les rails de rack. La structure est composée de quatre montants verticaux et de plusieurs traverses horizontales.</p>
<p>J'ai utilisé des assemblages à vis à bois (pocket holes) pour assembler la structure de manière solide et discrète. Cette technique permet d'avoir des vis invisibles de l'extérieur.</p>
<p><img src="/images/structure-rack-bois-construction-2.jpg" alt="Assemblage avec vis à bois"></p>
<p><img src="/images/structure-rack-bois-construction-3.jpg" alt="Structure en bois assemblée"></p>

<h2>Installation des rails de rack</h2>
<p>Une fois la structure en bois assemblée, j'ai fixé les rails de rack métalliques à l'intérieur. Ces rails sont standardisés (19 pouces) et permettent de monter tout équipement rack classique.</p>
<p>Les rails sont fixés verticalement sur les montants en bois à l'aide de vis.</p>
<p><img src="/images/structure-rack-bois-rails-1.jpg" alt="Installation des rails de rack"></p>

<h2>Résultat final</h2>
<p>La structure de rack est maintenant complètement intégrée dans le mur. L'équipement réseau est organisé de manière professionnelle et discrète. Le panneau de brassage permet de gérer facilement toutes les connexions réseau.</p>
<p>Cette solution offre plusieurs avantages :</p>
<ul>
<li>Équipement caché et organisé</li>
<li>Accès facile pour la maintenance</li>
<li>Gain de place</li>
</ul>
<p><img src="/images/structure-rack-bois-final-1.jpg" alt="Résultat final - Rack complet"></p>
<p><img src="/images/structure-rack-bois-final-2.jpg" alt="Résultat final - Vue de détail"></p>`
}

const englishContent: PostContent = {
  title: 'Wood rack structure in hollow partition wall',
  description: 'Creating a wooden rack structure recessed into a hollow partition wall to organize network equipment in a discreet manner.',
  html: `<h2>Introduction</h2>
<p>During the renovation of my apartment, I needed to create a dedicated space to organize my network equipment. Rather than having cables and equipment lying around, I decided to create a recessed rack structure directly in the hollow partition wall.</p>

<h2>Wall Preparation</h2>
<p>The first step is to prepare the location in the wall. I first identified the ideal location, taking into account the presence of existing network and electrical cables.</p>
<p>I then cut the hollow partition wall to create a rectangular opening to accommodate the rack structure.</p>
<p><img src="/images/structure-rack-bois-preparation-1.jpg" alt="Wall preparation and hollow partition wall cutting"></p>
<p><img src="/images/structure-rack-bois-preparation-2.jpg" alt="Hollow partition wall opening with visible cables"></p>
<p><img src="/images/structure-rack-bois-preparation-3.jpg" alt="Power strip installation"></p>

<h2>Wood Structure Construction</h2>
<p>I built a wooden structure that will serve as a support for the rack rails. The structure consists of four vertical posts and several horizontal crossbeams.</p>
<p>I used pocket hole joinery to assemble the structure in a strong and discreet way. This technique allows for invisible screws from the outside.</p>
<p><img src="/images/structure-rack-bois-construction-2.jpg" alt="Assembly with pocket hole screws"></p>
<p><img src="/images/structure-rack-bois-construction-3.jpg" alt="Assembled wood structure"></p>

<h2>Rack Rails Installation</h2>
<p>Once the wooden structure was assembled, I mounted the metal rack rails inside. These rails are standardized (19 inches) and allow mounting any standard rack equipment.</p>
<p>The rails are mounted vertically on the wood posts using appropriate screws. It is important to check alignment and level so that equipment installs correctly.</p>
<p><img src="/images/structure-rack-bois-rails-1.jpg" alt="Rack rails installation"></p>

<h2>Final Result</h2>
<p>The rack structure is now completely integrated into the wall. Network equipment is organized in a professional and discreet manner. The patch panel allows easy management of all network connections.</p>
<p>This solution offers several advantages:</p>
<ul>
<li>Hidden and organized equipment</li>
<li>Easy access for maintenance</li>
<li>Space saving</li>
</ul>
<p><img src="/images/structure-rack-bois-final-1.jpg" alt="Final result - Complete rack"></p>
<p><img src="/images/structure-rack-bois-final-2.jpg" alt="Final result - Detail view"></p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

