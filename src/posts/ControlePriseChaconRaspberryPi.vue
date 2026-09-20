<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'controle-prise-chacon-raspberry-pi',
  date: '2014-02-25',
  tags: ['Raspberry-Pi', 'DIY', 'Electronic']
}

const frenchContent: PostContent = {
  title: 'Contrôle de prise Chacon DIO First via Raspberry Pi',
  description: 'Premier article de domotique : contrôle de prises Chacon DIO First via un Raspberry Pi et un émetteur 433MHz.',
  html: `<p>Bonjour,</p>
<p>C'est donc mon premier article de domotique et également mon premier montage.</p>
<p>Cette article s'appuie sur les deux articles suivant :</p>
<ul>
<li><a href="http://www.homautomation.org/2013/10/09/how-to-control-di-o-devices-with-a-raspberry/">How to control dio devices with a raspberry pi</a>;</li>
<li><a href="http://blog.idleman.fr/raspberry-pi-12-allumer-des-prises-distance/">Raspberry Pi 12 – Allumer des prises à distance</a>.</li>
</ul>
<h2>Principe & fonctionnement</h2>
<p>Les prises <abbr title="Marque française de prises et interrupteurs radio 433 MHz, courants en grande surface de bricolage">Chacon</abbr> DIO First fonctionne via radio fréquence en 433MHz.<br>
Le principe est tout simple, reproduire les donnés émises par la télécommande via l'émétteur 433MHz couplé au <abbr title="Nano-ordinateur à bas coût, très utilisé en domotique et en électronique de loisir">Raspberry Pi</abbr>.</p>
<p>La télécommande communique avec les prises via le protocole Easy Home, ce protocole compose le signal sous 32 bits ainsi :</p>
<ul>
<li>26 premiers bits correspondant à l'identifiant de la télécommande;</li>
<li>27 ème bit correspondant au numéro du groupe (non importante ici);</li>
<li>28 ème bit correspondant à l'état de la prise (ON=1 & OFF=0);</li>
<li>29 à 32 èmes bits correspondant au numéro de la prise à commandée.</li>
</ul>
<p>Pour de meilleure explication, je vous réfère au tutoriel d'<a href="http://blog.idleman.fr/raspberry-pi-10-commander-le-raspberry-pi-par-radio/">Idleman 10</a> sur le Raspberry Pi.</p>
<h2>Montage</h2>
<p>Si vous n'avez jamais jouer avec les ports <abbr title="Broche d'entrée-sortie d'un microcontrôleur, configurable par logiciel">GPIO</abbr> du Raspberry Pi voici le montage à adopté pour faire fonctionner l'émetteur 433MHz.</p>
<p><img src="/images/controle-prise-chacon-schema-raspberry-pi.jpg" alt="Schéma Raspberry Pi"></p>
<p>Vous pouvez voir sur le montage l'émetteur mais également le récepteur, ce n'est pas utile pour ce que l'on veut faire ici.</p>
<p>Pour l'astuce, un câble de ventilateur PC à trois pins convient parfaitement pour l'émetteur 433MHz ;)</p>
<p>Vous pouvez souder un fil conducteur à l'emplacement réservé à l'antenne (Ant) sur l'émetteur de 17,3cm, si vous voulez vous assurez de la bonne communication avec les prises.</p>
<p><img src="/images/controle-prise-chacon-emetteur-433mhz.jpg" alt="Émetteur 433MHz"></p>
<h2>Logiciel</h2>
<p>On passe ensuite au niveau logiciel sur le Raspberry Pi.</p>
<p>Il vous faut avant tout chose installer la librairie WiringPi, permettant de simplifier l'accès aux ports GPIO:</p>
<p>Installation de git</p>
<pre><code class="language-bash">sudo apt-get install git-core
</code></pre>
<p>Mise à jour de Raspbian</p>
<pre><code class="language-bash">sudo apt-get update
sudo apt-get upgrade
</code></pre>
<p>Récupération de WiringPi sur Git</p>
<pre><code class="language-bash">git clone git://git.drogon.net/wiringPi
</code></pre>
<p>Récupération des dernières modifications de WiringPi</p>
<pre><code class="language-bash">cd wiringPi
git pull origin
</code></pre>
<p>Construction de la librairie WiringPi</p>
<pre><code class="language-bash">cd wiringPi
./build
</code></pre>
<p>Le code pour contrôler les prises est à récupéré sur le site d'<a href="http://projet.idleman.fr/domopi/data/hcc/hcc.zip">Idleman</a> (merci à lui).</p>
<p>Dans ce zip se trouve, une interface web et le code C permettant le contrôle des prises Chacon. On ne s'occupera pas de l'interface web dans cette article.<br>
Le fichier important est donc radioEmission, si vous voulez jouer avec le code, vous pouvez ouvrir (et modifier) le fichier radioEmission.cpp et recompiler le fichie radioEmission à l'aide de la commande suivante :</p>
<pre><code class="language-bash">g++ radioEmission.cpp -o radioEmission -lwiringPi
</code></pre>`
}

const englishContent: PostContent = {
  title: 'Chacon DIO First outlet control via Raspberry Pi',
  description: 'First home automation article: controlling Chacon DIO First outlets via a Raspberry Pi and a 433MHz transmitter.',
  html: `<p>Hello,</p>
<p>This is my first home automation article and also my first build.</p>
<p>This article is based on the following two articles:</p>
<ul>
<li><a href="http://www.homautomation.org/2013/10/09/how-to-control-di-o-devices-with-a-raspberry/">How to control dio devices with a raspberry pi</a>;</li>
<li><a href="http://blog.idleman.fr/raspberry-pi-12-allumer-des-prises-distance/">Raspberry Pi 12 – Allumer des prises à distance</a>.</li>
</ul>
<h2>Principle & Operation</h2>
<p><abbr title="French brand of 433 MHz radio sockets and switches, common in DIY stores">Chacon</abbr> DIO First outlets work via 433MHz radio frequency.<br>
The principle is very simple, reproduce the data emitted by the remote control via the 433MHz transmitter coupled to the <abbr title="Low-cost single-board computer, widely used in home automation and hobby electronics">Raspberry Pi</abbr>.</p>
<p>The remote control communicates with the outlets via the Easy Home protocol, this protocol composes the signal in 32 bits as follows:</p>
<ul>
<li>First 26 bits corresponding to the remote control identifier;</li>
<li>27th bit corresponding to the group number (not important here);</li>
<li>28th bit corresponding to the outlet state (ON=1 & OFF=0);</li>
<li>29th to 32nd bits corresponding to the outlet number to be controlled.</li>
</ul>
<p>For better explanation, I refer you to <a href="http://blog.idleman.fr/raspberry-pi-10-commander-le-raspberry-pi-par-radio/">Idleman 10</a>'s tutorial on the Raspberry Pi.</p>
<h2>Assembly</h2>
<p>If you've never played with the Raspberry Pi <abbr title="A microcontroller's general-purpose input/output pin">GPIO</abbr> ports, here's the setup to adopt to make the 433MHz transmitter work.</p>
<p><img src="/images/controle-prise-chacon-schema-raspberry-pi.jpg" alt="Raspberry Pi Diagram"></p>
<p>You can see in the setup the transmitter but also the receiver, it's not useful for what we want to do here.</p>
<p>For the tip, a three-pin PC fan cable works perfectly for the 433MHz transmitter ;)</p>
<p>You can solder a conductor wire at the antenna location (Ant) on the transmitter of 17.3cm, if you want to ensure good communication with the outlets.</p>
<p><img src="/images/controle-prise-chacon-emetteur-433mhz.jpg" alt="433MHz Transmitter"></p>
<h2>Software</h2>
<p>Then we move to the software level on the Raspberry Pi.</p>
<p>First of all, you need to install the WiringPi library, which simplifies GPIO port access:</p>
<p>Git installation</p>
<pre><code class="language-bash">sudo apt-get install git-core
</code></pre>
<p>Raspbian update</p>
<pre><code class="language-bash">sudo apt-get update
sudo apt-get upgrade
</code></pre>
<p>Retrieve WiringPi from Git</p>
<pre><code class="language-bash">git clone git://git.drogon.net/wiringPi
</code></pre>
<p>Retrieve latest WiringPi updates</p>
<pre><code class="language-bash">cd wiringPi
git pull origin
</code></pre>
<p>Build WiringPi library</p>
<pre><code class="language-bash">cd wiringPi
./build
</code></pre>
<p>The code to control the outlets is to be retrieved from <a href="http://projet.idleman.fr/domopi/data/hcc/hcc.zip">Idleman</a>'s site (thanks to him).</p>
<p>In this zip you'll find a web interface and the C code allowing Chacon outlet control. We won't deal with the web interface in this article.<br>
The important file is therefore radioEmission, if you want to play with the code, you can open (and modify) the radioEmission.cpp file and recompile the radioEmission file using the following command:</p>
<pre><code class="language-bash">g++ radioEmission.cpp -o radioEmission -lwiringPi
</code></pre>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'ControlePriseChaconRaspberryPi',
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
