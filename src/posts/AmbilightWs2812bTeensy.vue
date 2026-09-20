<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'ambilight-ws2812b-teensy',
  date: '2014-10-06',
  tags: ['Ambilight', 'WS2812B', 'Teensy', 'DIY', 'Electronic']
}

const frenchContent: PostContent = {
  title: 'Ambi-like avec 240 LED WS2812B et une Teensy 2.0',
  description: "Réalisation d'un système Ambi-like avec un ruban de 4m composé de 240 LED WS2812B et une Teensy 2.0 pour restituer le flux vidéo de l'ordinateur sur les LED.",
  html: `<h2>Pourquoi ce choix de matériel ?</h2>
<p>Un système Ambi-like se fait généralement avec des LED <abbr title="Circuit de bandeau LED adressable, piloté en SPI, chaque LED réglable indépendamment">WS2801</abbr> car elles sont adressables contrairement aux LED WS2811/WS2812. J'avoue avoir acheté ce ruban sur un coup de tête (le nombre de LED au mètre m'a attiré) sans avoir vérifié la compatibilité avec les systèmes Ambi-like du moment… Mais j'aime les défis et surtout les nouvelles choses :)</p>
<p><img src="/images/ambilight-ws2812b-ruban.jpg" alt="Ruban WS2812"></p>
<p>Pour le choix du contrôleur, j'avais déjà joué avec un Raspeberry Pi précédemment, je voulais donc tenter l'aventure sur un autre périphérique. Un Arduino correspond très bien au besoin, c'est petit, possède une faible consommation énergétique et il existe plusieurs systèmes d'Ambi-like dédiés. J'ai donc commandé une Tensy 2.0 qui est encore plus petite qu'un Arduino Uno et possède une plus grande puissance de calcul (ça se révélera important étant donné que mes LED ne sont pas adressables).</p>
<p><img src="/images/ambilight-ws2812b-teensy.jpg" alt="Teensy 2.0"></p>
<h2>Programmation</h2>
<p>J'ai donc découvert la programmation sous Arduino grâce à cette <abbr title="Carte microcontrôleur compacte, appréciée pour piloter des bandeaux de LED">Teensy</abbr> 2.0. A vrai dire avec quelques connaissance en C, c'est relativement simple !</p>
<p>Il existe un logiciel de développement dédié pour les Arduino, à <a href="http://arduino.cc/en/Main/Software">télécharger ici</a>, par défaut Arduino ne prend pas en charge les Teensy, il faut donc télécharger et installer sur votre installation d'Arduino le 'patch' <a href="https://www.pjrc.com/teensy/td_download.html">Teensyduino</a>.</p>
<p>Il embarque nativement des libraires de développement, à utiliser selon la fonction que vous voulez donner à votre système.</p>
<p>Ici, nous voulons commander notre ruban à LED via notre ordinateur en passant par la Teensy. Pour cela nous utiliserons deux logiciels concurrent nommés <a href="http://www.ambibox.ru/en/index.php/Main_Page">Ambibox</a> et <a href="http://lightpack.tv/downloads">Prismatik</a>.</p>
<p>Ces deux logiciels peuvent fonctionner en communiquant avec un système <a href="http://www.adafruit.com/products/461">Adalight</a> (embarqué sur la Teensy).</p>
<p>Le problème, c'est qu'Adalight est développé pour fonctionner avec des LED 2801. Après quelques heures de recherches, j'ai réussi à trouver un <a href="https://code.google.com/p/adalight-ws2812/source/browse/0.9?spec=svn2&r=2">fork d'Adalight</a> fonctionnant avec des LED WS2812.</p>
<p>Ce fork d'Adalight repose malheureusement sur une ancienne librairie FastSPI_LED2 (permettant de commander des LED WS2811/WS2812), qui a évoluée et se trouve maintenant sous le nom FastLED (disponible sous l'éditeur Arduino).</p>
<p>J'ai donc résolu mon problème en modifiant légèrement le code du fork pour utiliser la dernière version de la librairie FastLED, ma version disponible sur <a href="https://github.com/Wifsimster/adalight_ws2812">Github</a> (dernière mise à jour 22/11/2015).</p>
<p>Je ne vais pas vous expliquer comment charger le programme sur la Teensy, c'est très simple et repose sur le même principe que n'importe quel Arduino, pour plus d'informations, <a href="http://www.pjrc.com/teensy/loader_vista.html">voir ici</a>.</p>
<h2>Montage</h2>
<p>J'ai donc simplement découpé des bandes pour chaque longueur des écrans, bien penser à respecter le sens des flèches du ruban (pour le signal).</p>
<p>J'ai relié chaque bandes bout à bout par trois fils soudés de chaque côté et relié mon alimentation 5v 8A en entrée et sortie du ruban (préféré plusieurs points d'alimentation sur votre ruban).</p>
<p><img src="/images/ambilight-ws2812b-montage-1.jpg" alt="Montage 1"></p>
<p>Comme vous pouvez le voir ci-dessous, j'ai connecté les trois fils du ruban sur les ports VCC, GRD B1 de la Teensy 2.0. Le port B1 est paramétrable dans ma version de l'Adalight.</p>
<p><img src="/images/ambilight-ws2812b-montage-2.jpg" alt="Montage 2"></p>
<h2>Communication avec Adalight</h2>
<p>Adalight est très répandu et est de plus en plus reconnu par les logiciels <abbr title="Éclairage d'ambiance projeté derrière l'écran et synchronisé avec l'image, popularisé par Philips">Ambilight</abbr>. J'ai donc testé les deux plus connus du moment, Prismatik et Ambibox !</p>
<p><img src="/images/ambilight-ws2812b-communication.jpg" alt="Communication"></p>
<h2>Update - 22/11/2015</h2>
<p>Suite à mon déménagement, j'ai dû me remettre dans la programmation de la Teensy et je viens donc d'en profiter pour mettre à jour ma version d'Adalight.</p>
<p>Le plus gros problème que j'ai eu après tout ce temps (et un nouvelle installation de Windows) c'est la configuration de Prismatik !</p>
<p>Penser à bien installer les drivers pour votre Teensy, les drivers sont embarqués dans le 'patch' <a href="https://www.pjrc.com/teensy/td_download.html">Teensyduino</a> (voir au début de l'article) et par la suite récupéré le port dans la gestion de vos périphériques Windows.</p>
<p><img src="/images/ambilight-ws2812b-peripheriques.png" alt="Périphériques"></p>`
}

const englishContent: PostContent = {
  title: 'Ambi-like with 240 WS2812B LEDs and a Teensy 2.0',
  description: 'Building an Ambi-like system with a 4m strip composed of 240 WS2812B LEDs and a Teensy 2.0 to reproduce the computer\'s video stream on the LEDs.',
  html: `<h2>Why this hardware choice?</h2>
<p>An Ambi-like system is usually done with <abbr title="Addressable LED strip chip driven over SPI, every LED individually controllable">WS2801</abbr> LEDs because they are addressable unlike WS2811/WS2812 LEDs. I admit I bought this strip on impulse (the number of LEDs per meter attracted me) without checking compatibility with current Ambi-like systems… But I like challenges and especially new things :)</p>
<p><img src="/images/ambilight-ws2812b-ruban.jpg" alt="WS2812 Strip"></p>
<p>For the controller choice, I had already played with a <abbr title="Low-cost single-board computer, widely used in home automation and hobby electronics">Raspberry Pi</abbr> previously, so I wanted to try the adventure on another device. An Arduino fits the need very well, it's small, has low power consumption and there are several dedicated Ambi-like systems. So I ordered a <abbr title="Compact microcontroller board, favoured for driving LED strips">Teensy</abbr> 2.0 which is even smaller than an Arduino Uno and has greater computing power (this will prove important given that my LEDs are not addressable).</p>
<p><img src="/images/ambilight-ws2812b-teensy.jpg" alt="Teensy 2.0"></p>
<h2>Programming</h2>
<p>So I discovered Arduino programming thanks to this Teensy 2.0. To be honest with some C knowledge, it's relatively simple!</p>
<p>There is dedicated development software for Arduino, <a href="http://arduino.cc/en/Main/Software">download here</a>, by default Arduino doesn't support Teensy, so you need to download and install the <a href="https://www.pjrc.com/teensy/td_download.html">Teensyduino</a> 'patch' on your Arduino installation.</p>
<p>It natively includes development libraries, to use according to the function you want to give to your system.</p>
<p>Here, we want to control our LED strip via our computer through the Teensy. For this we will use two competing software named <a href="http://www.ambibox.ru/en/index.php/Main_Page">Ambibox</a> and <a href="http://lightpack.tv/downloads">Prismatik</a>.</p>
<p>These two software can work by communicating with an <a href="http://www.adafruit.com/products/461">Adalight</a> system (embedded on the Teensy).</p>
<p>The problem is that Adalight is developed to work with 2801 LEDs. After a few hours of research, I managed to find an <a href="https://code.google.com/p/adalight-ws2812/source/browse/0.9?spec=svn2&r=2">Adalight fork</a> working with WS2812 LEDs.</p>
<p>This Adalight fork unfortunately relies on an old FastSPI_LED2 library (allowing to control WS2811/WS2812 LEDs), which has evolved and is now called FastLED (available in the Arduino editor).</p>
<p>So I solved my problem by slightly modifying the fork code to use the latest version of the FastLED library, my version available on <a href="https://github.com/Wifsimster/adalight_ws2812">Github</a> (last update 22/11/2015).</p>
<p>I won't explain how to load the program on the Teensy, it's very simple and based on the same principle as any Arduino, for more information, <a href="http://www.pjrc.com/teensy/loader_vista.html">see here</a>.</p>
<h2>Assembly</h2>
<p>I simply cut strips for each screen length, making sure to respect the arrow direction of the strip (for the signal).</p>
<p>I connected each strip end to end with three wires soldered on each side and connected my 5v 8A power supply at the input and output of the strip (prefer multiple power points on your strip).</p>
<p><img src="/images/ambilight-ws2812b-montage-1.jpg" alt="Assembly 1"></p>
<p>As you can see below, I connected the three wires of the strip to the VCC, GRD B1 ports of the Teensy 2.0. The B1 port is configurable in my version of Adalight.</p>
<p><img src="/images/ambilight-ws2812b-montage-2.jpg" alt="Assembly 2"></p>
<h2>Communication with Adalight</h2>
<p>Adalight is very widespread and increasingly recognized by <abbr title="Ambient lighting projected behind a screen and synchronised with the picture, popularised by Philips">Ambilight</abbr> software. So I tested the two most known at the moment, Prismatik and Ambibox!</p>
<p><img src="/images/ambilight-ws2812b-communication.jpg" alt="Communication"></p>
<h2>Update - 22/11/2015</h2>
<p>Following my move, I had to get back into Teensy programming and I just took the opportunity to update my Adalight version.</p>
<p>The biggest problem I had after all this time (and a new Windows installation) is Prismatik configuration!</p>
<p>Remember to properly install the drivers for your Teensy, the drivers are embedded in the <a href="https://www.pjrc.com/teensy/td_download.html">Teensyduino</a> 'patch' (see at the beginning of the article) and then retrieve the port in your Windows device management.</p>
<p><img src="/images/ambilight-ws2812b-peripheriques.png" alt="Devices"></p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'AmbilightWs2812bTeensy',
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
