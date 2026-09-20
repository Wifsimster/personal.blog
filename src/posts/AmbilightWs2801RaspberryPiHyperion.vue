<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'ambilight-ws2801-raspberry-pi-hyperion',
  date: '2014-07-09',
  tags: ['Ambilight', 'WS2801', 'Raspberry-Pi', 'DIY', 'Electronic']
}

const frenchContent: PostContent = {
  title: 'Ambi-like avec un ruban WS2801, un Raspberry Pi et Hyperion',
  description: "Réalisation d'un système Ambi-like DIY avec un ruban de 50 LED WS2801, un Raspberry Pi et le logiciel Hyperion pour reproduire l'effet Ambilight de Philips.",
  html: `<h2>Matériel</h2>
<p>Au niveau du matériel, j'ai choisi un ruban à 50 leds, une alimentation 5v 8A et un connecteur d'alimentation jack.</p>
<ul>
<li>1 ruban de 50 <a href="http://www.ebay.fr/itm/50PCS-WS2801-RGB-Full-Color-12mm-Pixels-digital-Addressable-LED-String-DC-5V-/121159316753?pt=US_Car_Lighting&hash=item1c35a87511">LED WS2801</a> pour 21€ ;</li>
<li>1 alimentation <a href="http://www.ebay.fr/itm/5V-8A-Power-supply-AC-to-DC-Adapter-for-WS2811-WS2801-HL8806-LED-String-Light-/121153648301?hash=item1c3551f6ad&pt=US_Lighting_Parts_and_Accessories">5V 8A</a> pour 12€ ;</li>
<li>1 connecteur d'alimentation jack (à l'<a href="http://www.amazon.fr/gp/product/B006WJL7Y6/ref=oh_details_o00_s00_i00?ie=UTF8&psc=1">unité 3€</a> ou <a href="http://www.amazon.fr/gp/product/B008H2HLUA/ref=oh_details_o08_s00_i00?ie=UTF8&psc=1">10 pour 7€</a>).</li>
</ul>
<h2>Prototype</h2>
<p>J'ai commencé par réaliser un cadre avec des morceaux de MDF qui ne me servaient à rien. C'est léger, facile à travaillé mais vite fragilisé avec les trous vu l'épaisseur.</p>
<p><img src="/images/ambilight-ws2801-prototype-1.jpg" alt="Prototype 1"></p>
<p><img src="/images/ambilight-ws2801-prototype-2.jpg" alt="Prototype 2"></p>
<p><img src="/images/ambilight-ws2801-prototype-3.jpg" alt="Prototype 3"></p>
<p><img src="/images/ambilight-ws2801-prototype-4.jpg" alt="Prototype 4"></p>
<p><img src="/images/ambilight-ws2801-prototype-5.jpg" alt="Prototype 5"></p>
<h2>Connexion avec le <abbr title="Nano-ordinateur à bas coût, très utilisé en domotique et en électronique de loisir">Raspberry Pi</abbr></h2>
<p>La connexion avec le Raspberry Pi est relativement simple, comme vous pouvez le voir sur le schéma ci-dessous.</p>
<p>Les LED étant sensibles au voltage, il est préférable de les alimenter avec une alimentation extérieure connectée en parallèle au 5v du port <abbr title="Broche d'entrée-sortie d'un microcontrôleur, configurable par logiciel">GPIO</abbr>.</p>
<p><img src="/images/ambilight-ws2801-schema-connexion.png" alt="Schéma connexion"></p>
<h2>Installation d'<abbr title="Logiciel open source qui pilote un rétroéclairage à partir de l'image affichée">Hyperion</abbr></h2>
<p>Le plus simple pour utiliser Hyperion est d'utiliser une <a href="http://www.raspberrypi.org/downloads/">Raspbian</a> sur votre Raspberry Pi, si jamais vous voulez absoluement tourner sur un aure OS je vous repporte sur le wiki d'Hyperion qui explique la procédure supplémentaire à suivre <a href="https://github.com/tvdzwan/hyperion/wiki/installation">ici</a>.</p>
<p>En premier lieu, une installation de quelques librairies est nécessaire pour faire tourner Hyperion sur votre Raspberi Pi.</p>
<pre><code class="language-bash">sudo apt-get update 
sudo apt-get install libqtcore4 libqtgui4 libqt4-network libusb-1.0-0 libprotobuf7 ca-certificates
</code></pre>
<p>Ensuite téléchargé et déployé Hyperion.</p>
<pre><code class="language-bash">wget -N https://raw.github.com/tvdzwan/hyperion/master/bin/install_hyperion.sh
sudo sh ./install_hyperion.sh
</code></pre>
<p>A savoir qu'Hyperion se lancera automatiquement dès le prochain démarrage du Raspberry Pi.</p>
<p>Vous pouvez ensuite tester simple d'allumer votre ruban en rouge.</p>
<pre><code class="language-bash">hyperion-remote --priority 50 --color red --duration 5000
</code></pre>
<p>Si vous souhaité désactiver le lancement automatique d'Hyperion au démarrage.</p>
<pre><code class="language-bash">sudo /sbin/initctl stop hyperion
rm /etc/init/hyperion.conf
</code></pre>
<p>Pour information, je n'ai pas réussi à faire fonctionner mon connecteur usb/wifi Edimax sur la Raspbmc alors qu'il fonctionnait très bien sur ma Raspbian, je me suis donc résolu à connecter mon Raspberry Pi en RJ45.</p>
<p>Il existe une application Android gratuite pour contrôler le serveur Hyperion à distance, disponible sur le <a href="https://play.google.com/store/apps/details?id=nl.hyperion.hyperionfree">store</a>.</p>
<h2>Configuration d'Hyperion</h2>
<p>Hyperion possède un logiciel de paramétrage très bien fait, nommé <a href="https://github.com/tvdzwan/hyperion/wiki/configuration">HyperCon</a>, il permet de gérer l'ensemble des LED (position, couleurs, éclairage, taille, …). L'ensemble des possibilités est détaillées dans le lien précédent.</p>
<p>Hypercon va donc vous générer un fichier hyperion.config.json à déposer par défaut dans /etc.</p>
<p><img src="/images/ambilight-ws2801-hypercon.jpg" alt="HyperCon"></p>
<h2>Cadre en acier</h2>
<p>Mon cadre en MDF n'étant pas très résistant, j'ai acheté quelques cornières en acier, que j'ai découpé et ensuite peinte. Le résultat est bien mieux, l'ensemble est solide, léger et tient bien mieux à la TV.</p>
<p><img src="/images/ambilight-ws2801-cadre-acier-1.jpg" alt="Cadre acier 1"></p>
<p><img src="/images/ambilight-ws2801-cadre-acier-2.jpg" alt="Cadre acier 2"></p>
<p><img src="/images/ambilight-ws2801-cadre-acier-3.jpg" alt="Cadre acier 3"></p>
<p><img src="/images/ambilight-ws2801-cadre-acier-4.jpg" alt="Cadre acier 4"></p>
<p><img src="/images/ambilight-ws2801-cadre-acier-5.jpg" alt="Cadre acier 5"></p>
<h2>Configuration avec <abbr title="Ancien nom du lecteur multimédia libre Kodi">XBMC</abbr></h2>
<p>J'ai bataillé un moment avant de faire communiquer mon XBMC sous mon media center (Windows) avec le serveur Hyperion sur le Raspberry Pi.</p>
<p>La seule solution (à l'heure actuelle) que j'ai trouvé, c'est de passer par l'addon XBMC Boblight qui rend possible la communication entre XBMC et Hyperion sur le réseau.</p>
<p>J'ai testé l'addon Hyperion pour XBMC mais impossible d'établir une connexion…</p>
<h2>Vidéos</h2>
<iframe src="//www.youtube.com/embed/OVBgoJScQIA" frameborder="0" allowfullscreen></iframe>
<iframe src="//www.youtube.com/embed/4Ka4kQxznlQ" frameborder="0" allowfullscreen></iframe>`
}

const englishContent: PostContent = {
  title: 'Ambi-like with WS2801 strip, Raspberry Pi and Hyperion',
  description: 'Building a DIY Ambi-like system with a 50 LED WS2801 strip, a Raspberry Pi and Hyperion software to reproduce Philips Ambilight effect.',
  html: `<h2>Materials</h2>
<p>For the hardware, I chose a 50 LED strip, a 5v 8A power supply and a jack power connector.</p>
<ul>
<li>1 strip of 50 <a href="http://www.ebay.fr/itm/50PCS-WS2801-RGB-Full-Color-12mm-Pixels-digital-Addressable-LED-String-DC-5V-/121159316753?pt=US_Car_Lighting&hash=item1c35a87511">WS2801 LEDs</a> for 21€;</li>
<li>1 <a href="http://www.ebay.fr/itm/5V-8A-Power-supply-AC-to-DC-Adapter-for-WS2811-WS2801-HL8806-LED-String-Light-/121153648301?hash=item1c3551f6ad&pt=US_Lighting_Parts_and_Accessories">5V 8A</a> power supply for 12€;</li>
<li>1 jack power connector (<a href="http://www.amazon.fr/gp/product/B006WJL7Y6/ref=oh_details_o00_s00_i00?ie=UTF8&psc=1">single unit 3€</a> or <a href="http://www.amazon.fr/gp/product/B008H2HLUA/ref=oh_details_o08_s00_i00?ie=UTF8&psc=1">10 for 7€</a>).</li>
</ul>
<h2>Prototype</h2>
<p>I started by building a frame with MDF pieces that I had no use for. It's light, easy to work with but quickly weakened with holes given the thickness.</p>
<p><img src="/images/ambilight-ws2801-prototype-1.jpg" alt="Prototype 1"></p>
<p><img src="/images/ambilight-ws2801-prototype-2.jpg" alt="Prototype 2"></p>
<p><img src="/images/ambilight-ws2801-prototype-3.jpg" alt="Prototype 3"></p>
<p><img src="/images/ambilight-ws2801-prototype-4.jpg" alt="Prototype 4"></p>
<p><img src="/images/ambilight-ws2801-prototype-5.jpg" alt="Prototype 5"></p>
<h2>Connection with <abbr title="Low-cost single-board computer, widely used in home automation and hobby electronics">Raspberry Pi</abbr></h2>
<p>The connection with the Raspberry Pi is relatively simple, as you can see in the diagram below.</p>
<p>Since LEDs are sensitive to voltage, it's preferable to power them with an external power supply connected in parallel to the 5v <abbr title="A microcontroller's general-purpose input/output pin">GPIO</abbr> port.</p>
<p><img src="/images/ambilight-ws2801-schema-connexion.png" alt="Connection diagram"></p>
<h2><abbr title="Open-source software that drives a backlight from the displayed picture">Hyperion</abbr> Installation</h2>
<p>The easiest way to use Hyperion is to use <a href="http://www.raspberrypi.org/downloads/">Raspbian</a> on your Raspberry Pi. If you absolutely want to run on another OS, I refer you to the Hyperion wiki which explains the additional procedure to follow <a href="https://github.com/tvdzwan/hyperion/wiki/installation">here</a>.</p>
<p>First, installation of a few libraries is necessary to run Hyperion on your Raspberry Pi.</p>
<pre><code class="language-bash">sudo apt-get update 
sudo apt-get install libqtcore4 libqtgui4 libqt4-network libusb-1.0-0 libprotobuf7 ca-certificates
</code></pre>
<p>Then download and deploy Hyperion.</p>
<pre><code class="language-bash">wget -N https://raw.github.com/tvdzwan/hyperion/master/bin/install_hyperion.sh
sudo sh ./install_hyperion.sh
</code></pre>
<p>Note that Hyperion will automatically start on the next Raspberry Pi boot.</p>
<p>You can then test by simply turning your strip red.</p>
<pre><code class="language-bash">hyperion-remote --priority 50 --color red --duration 5000
</code></pre>
<p>If you want to disable Hyperion automatic startup.</p>
<pre><code class="language-bash">sudo /sbin/initctl stop hyperion
rm /etc/init/hyperion.conf
</code></pre>
<p>For information, I couldn't get my Edimax usb/wifi connector to work on Raspbmc while it worked perfectly on my Raspbian, so I resolved to connect my Raspberry Pi via RJ45.</p>
<p>There is a free Android application to remotely control the Hyperion server, available on the <a href="https://play.google.com/store/apps/details?id=nl.hyperion.hyperionfree">store</a>.</p>
<h2>Hyperion Configuration</h2>
<p>Hyperion has a very well-made configuration software called <a href="https://github.com/tvdzwan/hyperion/wiki/configuration">HyperCon</a>, which allows you to manage all LEDs (position, colors, lighting, size, …). All possibilities are detailed in the previous link.</p>
<p>HyperCon will generate a hyperion.config.json file to place by default in /etc.</p>
<p><img src="/images/ambilight-ws2801-hypercon.jpg" alt="HyperCon"></p>
<h2>Steel Frame</h2>
<p>My MDF frame not being very resistant, I bought some steel angles, which I cut and then painted. The result is much better, the whole thing is solid, light and holds much better to the TV.</p>
<p><img src="/images/ambilight-ws2801-cadre-acier-1.jpg" alt="Steel frame 1"></p>
<p><img src="/images/ambilight-ws2801-cadre-acier-2.jpg" alt="Steel frame 2"></p>
<p><img src="/images/ambilight-ws2801-cadre-acier-3.jpg" alt="Steel frame 3"></p>
<p><img src="/images/ambilight-ws2801-cadre-acier-4.jpg" alt="Steel frame 4"></p>
<p><img src="/images/ambilight-ws2801-cadre-acier-5.jpg" alt="Steel frame 5"></p>
<h2>Configuration with <abbr title="The former name of the open-source media centre Kodi">XBMC</abbr></h2>
<p>I struggled for a while before getting my XBMC on my media center (Windows) to communicate with the Hyperion server on the Raspberry Pi.</p>
<p>The only solution (at the moment) I found is to use the XBMC Boblight addon which makes communication between XBMC and Hyperion over the network possible.</p>
<p>I tested the Hyperion addon for XBMC but couldn't establish a connection…</p>
<h2>Videos</h2>
<iframe src="//www.youtube.com/embed/OVBgoJScQIA" frameborder="0" allowfullscreen></iframe>
<iframe src="//www.youtube.com/embed/4Ka4kQxznlQ" frameborder="0" allowfullscreen></iframe>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'AmbilightWs2801RaspberryPiHyperion',
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
