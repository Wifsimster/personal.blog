<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'luminosite-jeedom-esp8266',
  date: '2016-04-15',
  tags: ['ESP8266', 'NodeMCU', 'Jeedom', 'Electronic']
}

const frenchContent: PostContent = {
  title: 'Luminosité sous Jeedom via un ESP8266',
  description: "Cet article met en avant la mise en place d'un capteur TSL2561 et d'un ESP8266 afin de récupérer la luminosité sous Jeedom. La communication des données se fera à travers un broker MQTT.",
  html: `<h2>Prérequis</h2>
<p>Pour réaliser ce montage, il vous faut :</p>
<ul>
<li>1 <a href="http://www.ebay.fr/itm/ESP8266-Serial-WIFI-Wireless-TransceiveR-Module-Send-Receive-LWIP-AP-STA-/271935772447?hash=item3f50a2971f:g:QEYAAOSw9N1VrfAJ">ESP8266</a>;</li>
<li>1 capteur <a href="http://www.ebay.fr/itm/TSL2561-Luminosity-Sensor-Breakout-infrared-Light-Sensor-integrating-sensor-/271789914195?hash=item3f47f0f853:g:bMIAAOSwNSxU8R-w">TSL2561</a>;</li>
<li>1 régulateur <a href="http://www.ebay.fr/itm/LF33CV-Regulateur-TO-220-3V3-0-5A-STM-lot-de-5-ou-10-/181701724632?var=&hash=item2a4e4449d8:m:mzy0HUMgtVw3B4YO5VCN2-g">LF33CV</a> (5v vers 3.3v);</li>
<li>1 résistance <a href="http://www.ebay.fr/itm/resistance-1-4w-0-25w-1-10-100-1K-10K-100K-ohms-/171088290472">1kΩ</a> (pull-up).</li>
</ul>
<p><strong>Attention !</strong><br>
Le code est en <abbr title="Langage de script léger, utilisé par le firmware NodeMCU">LUA</abbr> et nécessite donc d'avoir l'<abbr title="Microcontrôleur Wi-Fi bon marché, très répandu chez les bricoleurs">ESP8266</abbr> avec le firmware nodemcu.</p>
<h2>Câblage</h2>
<p>[En attente du capteur <abbr title="Capteur de luminosité communiquant en I2C">TSL2561</abbr> sous Fritzing]</p>
<h2>Code</h2>
<p><a href="https://github.com/Wifsimster/tsl2561-mqtt">Github</a></p>
<h2>Principe</h2>
<p>Le principe est le suivant :</p>
<ol>
<li>L'ESP créé un client <abbr title="Message Queuing Telemetry Transport — bus de messages léger">MQTT</abbr> avec un id unique;</li>
<li>Il se connecte au broker MQTT;</li>
<li>A chaque changement de valeur du capteur TSL2561, le client MQTT publie les données sur un topic particulier;</li>
<li>Le broker MQTT reçoit les données et les publie pour chaque client ayant souscrit à ce topic.</li>
</ol>
<h2><abbr title="Logiciel de domotique français, concurrent historique de Home Assistant">Jeedom</abbr></h2>
<p>Il vous faut tout d'abord installer le plugin gratuit MQTT dans Jeedom.</p>
<p>Dès lors que votre ESP8266 publiera sur le broker MQTT, le plugin Jeedom ajoutera automatiquement le device TSL2561 :</p>
<p><img src="/images/luminosite-jeedom-esp8266-mqtt.png" alt="TSL2561 MQTT"></p>
<p><img src="/images/luminosite-jeedom-esp8266-device.png" alt="TSL2561 Device"></p>
<h2>Résultat</h2>
<p><img src="/images/luminosite-jeedom-esp8266-jeedom.png" alt="TSL2561 Jeedom"></p>`
}

const englishContent: PostContent = {
  title: 'Brightness under Jeedom via ESP8266',
  description: 'This article highlights the setup of a TSL2561 sensor and an ESP8266 to retrieve brightness under Jeedom. Data communication will be through an MQTT broker.',
  html: `<h2>Prerequisites</h2>
<p>To build this setup, you will need:</p>
<ul>
<li>1 <a href="http://www.ebay.fr/itm/ESP8266-Serial-WIFI-Wireless-TransceiveR-Module-Send-Receive-LWIP-AP-STA-/271935772447?hash=item3f50a2971f:g:QEYAAOSw9N1VrfAJ">ESP8266</a>;</li>
<li>1 <a href="http://www.ebay.fr/itm/TSL2561-Luminosity-Sensor-Breakout-infrared-Light-Sensor-integrating-sensor-/271789914195?hash=item3f47f0f853:g:bMIAAOSwNSxU8R-w">TSL2561</a> sensor;</li>
<li>1 <a href="http://www.ebay.fr/itm/LF33CV-Regulateur-TO-220-3V3-0-5A-STM-lot-de-5-ou-10-/181701724632?var=&hash=item2a4e4449d8:m:mzy0HUMgtVw3B4YO5VCN2-g">LF33CV</a> regulator (5v to 3.3v);</li>
<li>1 <a href="http://www.ebay.fr/itm/resistance-1-4w-0-25w-1-10-100-1K-10K-100K-ohms-/171088290472">1kΩ</a> resistor (pull-up).</li>
</ul>
<p><strong>Warning!</strong><br>
The code is in <abbr title="Lightweight scripting language, used by the NodeMCU firmware">LUA</abbr> and therefore requires the <abbr title="A cheap Wi-Fi microcontroller, widely used by hobbyists">ESP8266</abbr> to have the nodemcu firmware.</p>
<h2>Wiring</h2>
<p>[Waiting for <abbr title="Light sensor speaking I2C">TSL2561</abbr> sensor under Fritzing]</p>
<h2>Code</h2>
<p><a href="https://github.com/Wifsimster/tsl2561-mqtt">Github</a></p>
<h2>Principle</h2>
<p>The principle is as follows:</p>
<ol>
<li>The ESP creates an <abbr title="Message Queuing Telemetry Transport — lightweight message bus">MQTT</abbr> client with a unique id;</li>
<li>It connects to the MQTT broker;</li>
<li>On each value change of the TSL2561 sensor, the MQTT client publishes the data on a specific topic;</li>
<li>The MQTT broker receives the data and publishes it for each client that has subscribed to this topic.</li>
</ol>
<h2><abbr title="French home automation software, a long-standing Home Assistant rival">Jeedom</abbr></h2>
<p>You must first install the free MQTT plugin in Jeedom.</p>
<p>Once your ESP8266 publishes on the MQTT broker, the Jeedom plugin will automatically add the TSL2561 device:</p>
<p><img src="/images/luminosite-jeedom-esp8266-mqtt.png" alt="TSL2561 MQTT"></p>
<p><img src="/images/luminosite-jeedom-esp8266-device.png" alt="TSL2561 Device"></p>
<h2>Result</h2>
<p><img src="/images/luminosite-jeedom-esp8266-jeedom.png" alt="TSL2561 Jeedom"></p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'LuminositeJeedomEsp8266',
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
