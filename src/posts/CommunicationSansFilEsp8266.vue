<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'communication-sans-fil-esp8266',
  date: '2016-04-15',
  tags: ['ESP8266', 'NodeMCU', 'Electronic']
}

const frenchContent: PostContent = {
  title: 'Communication sans fil indépendante via deux ESP8266',
  description: 'La problématique de ce projet est de réaliser soit même une communication sans fil. Dans ce cas précis, une communication wifi et autonome',
  html: `<h2>Prérequis</h2>
<p>Je pars du principe que :</p>
<ul>
<li>la détection de présence sur la cellule IR provoque un état haut sur une entrée <abbr title="Broche d'entrée-sortie d'un microcontrôleur, configurable par logiciel">GPIO</abbr>;</li>
<li>l'alarme sera mise en fonction via un état haut d'une sortie GPIO.</li>
</ul>
<p>Il vous faudra :</p>
<ul>
<li>2 <a href="http://www.ebay.com/itm/ESP8266-Serial-WIFI-Wireless-Transceiver-Module-Send-Receive-LWIP-Support-AP-STA-/171653455849?hash=item27f757dfe9:g:KDkAAOSw-W5Uwh9z">ESP8266</a>;</li>
<li>2 régulateurs <a href="http://www.ebay.com/itm/LF33CV-Original-New-ST-Transistor-/400409071685?hash=item5d3a3d9045:g:pF4AAMXQk-FRE8mt">LF33CV</a>;</li>
<li>2 résistances <a href="http://www.ebay.com/itm/1000PCS-1K-1K-Ohm-1-4W-0-25W-5-Carbon-Film-Resistors-Resistance-/252071106631?hash=item3ab09bd847:g:ymUAAOSwjVVV3nVm">1KΩ</a>.</li>
</ul>
<p><strong>Attention !</strong><br>
Le code est en <abbr title="Langage de script léger, utilisé par le firmware NodeMCU">LUA</abbr> et nécessite donc d'avoir les <abbr title="Microcontrôleur Wi-Fi bon marché, très répandu chez les bricoleurs">ESP8266</abbr> avec le firmware nodemcu.</p>
<h2>Principe</h2>
<p>Un esp va servir de serveur, c'est à dire qu'il va :</p>
<ol>
<li>Déclarer son propre point d'accès wifi;</li>
<li>Instancier un serveur HTTP;</li>
<li>Attendre une requête HTTP et produire une action en conséquence de cette requête.</li>
</ol>
<p>Le deuxième esp va lui servir de client, c'est à dire qu'il va :</p>
<ol>
<li>Essayer de se connecter sur le point d'accès wifi du serveur (pendant 1 min, led verte clignotante);</li>
<li>Allumer la led verte pour indiquer que la connexion au serveur est établie;</li>
<li>Attendre un changement d'état du port GPIO_2 (la cellule IR);</li>
<li>Envoyer une requête HTTP au serveur avec l'état du port GPIO_2;</li>
</ol>
<h2>Schémas</h2>
<p><img src="/images/communication-sans-fil-esp8266-schema-client.png" alt="Schéma client"></p>
<p><img src="/images/communication-sans-fil-esp8266-schema-serveur.png" alt="Schéma serveur"></p>
<h2>Code</h2>
<p><a href="https://github.com/Wifsimster/soft-ap-client">Client</a> | <a href="https://github.com/Wifsimster/soft-ap">Serveur</a></p>
<h2>Réalisation</h2>
<p><img src="/images/communication-sans-fil-esp8266-client.jpg" alt="Image client"></p>
<p><img src="/images/communication-sans-fil-esp8266-serveur.jpg" alt="Image serveur"></p>`
}

const englishContent: PostContent = {
  title: 'Independent wireless communication via two ESP8266',
  description: 'The challenge of this project is to create your own wireless communication. In this specific case, a wifi and autonomous communication.',
  html: `<h2>Prerequisites</h2>
<p>I assume that:</p>
<ul>
<li>presence detection on the IR cell triggers a high state on a <abbr title="A microcontroller's general-purpose input/output pin">GPIO</abbr> input;</li>
<li>the alarm will be activated via a high state on a GPIO output.</li>
</ul>
<p>You will need:</p>
<ul>
<li>2 <a href="http://www.ebay.com/itm/ESP8266-Serial-WIFI-Wireless-Transceiver-Module-Send-Receive-LWIP-Support-AP-STA-/171653455849?hash=item27f757dfe9:g:KDkAAOSw-W5Uwh9z">ESP8266</a>;</li>
<li>2 <a href="http://www.ebay.com/itm/LF33CV-Original-New-ST-Transistor-/400409071685?hash=item5d3a3d9045:g:pF4AAMXQk-FRE8mt">LF33CV</a> regulators;</li>
<li>2 <a href="http://www.ebay.com/itm/1000PCS-1K-1K-Ohm-1-4W-0-25W-5-Carbon-Film-Resistors-Resistance-/252071106631?hash=item3ab09bd847:g:ymUAAOSwjVVV3nVm">1KΩ</a> resistors.</li>
</ul>
<p><strong>Warning!</strong><br>
The code is in <abbr title="Lightweight scripting language, used by the NodeMCU firmware">LUA</abbr> and therefore requires the <abbr title="A cheap Wi-Fi microcontroller, widely used by hobbyists">ESP8266</abbr> to have the nodemcu firmware.</p>
<h2>Principle</h2>
<p>One ESP will serve as a server, meaning it will:</p>
<ol>
<li>Declare its own wifi access point;</li>
<li>Instantiate an HTTP server;</li>
<li>Wait for an HTTP request and perform an action based on that request.</li>
</ol>
<p>The second ESP will serve as a client, meaning it will:</p>
<ol>
<li>Try to connect to the server's wifi access point (for 1 min, green LED blinking);</li>
<li>Turn on the green LED to indicate that the connection to the server is established;</li>
<li>Wait for a state change on GPIO_2 port (the IR cell);</li>
<li>Send an HTTP request to the server with the GPIO_2 port state;</li>
</ol>
<h2>Diagrams</h2>
<p><img src="/images/communication-sans-fil-esp8266-schema-client.png" alt="Client diagram"></p>
<p><img src="/images/communication-sans-fil-esp8266-schema-serveur.png" alt="Server diagram"></p>
<h2>Code</h2>
<p><a href="https://github.com/Wifsimster/soft-ap-client">Client</a> | <a href="https://github.com/Wifsimster/soft-ap">Server</a></p>
<h2>Realization</h2>
<p><img src="/images/communication-sans-fil-esp8266-client.jpg" alt="Client image"></p>
<p><img src="/images/communication-sans-fil-esp8266-serveur.jpg" alt="Server image"></p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'CommunicationSansFilEsp8266',
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
