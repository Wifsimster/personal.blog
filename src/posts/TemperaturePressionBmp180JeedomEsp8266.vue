<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'temperature-pression-bmp180-jeedom-esp8266',
  date: '2016-01-13',
  tags: ['ESP8266', 'NodeMCU', 'Jeedom', 'Electronic']
}

const frenchContent: PostContent = {
  title: 'Température et pression (BMP180) sous Jeedom via un ESP8266',
  description: "Mise en place d'un capteur BMP180 avec un ESP8266 pour récupérer la température et la pression sous Jeedom.",
  html: `<h2>Matériel</h2>
<ul>
<li>1 <a href="http://www.ebay.fr/itm/ESP8266-Serial-WIFI-Wireless-TransceiveR-Module-Send-Receive-LWIP-AP-STA-/271935772447?hash=item3f50a2971f:g:QEYAAOSw9N1VrfAJ">ESP8266</a>;</li>
<li>1 capteur <a href="http://www.ebay.fr/itm/BMP180-Replace-BMP085-Digital-Barometric-Pressure-Sensor-Board-Module-Arduino-IE-/281807948504?hash=item419d100ad8:g:rJIAAOSwVL1WApmE">BMP180</a> (température et pression);</li>
<li>1 régulateur <a href="http://www.ebay.fr/itm/LF33CV-Regulateur-TO-220-3V3-0-5A-STM-lot-de-5-ou-10-/181701724632?var=&hash=item2a4e4449d8:m:mzy0HUMgtVw3B4YO5VCN2-g">LF33CV</a> (5v vers 3.3v);</li>
<li>1 résistance <a href="http://www.ebay.fr/itm/resistance-1-4w-0-25w-1-10-100-1K-10K-100K-ohms-/171088290472">1kΩ</a> (pull-up).</li>
</ul>
<h2>Câblage</h2>
<p><img src="/images/temperature-pression-bmp180-jeedom-esp8266-cablage.png" alt="BMP180"></p>
<h2><abbr title="Logiciel de domotique français, concurrent historique de Home Assistant">Jeedom</abbr></h2>
<p>Créer un device virtuel.</p>
<p><img src="/images/temperature-pression-bmp180-jeedom-esp8266-jeedom.png" alt="BMP180 Jeedom"></p>
<p>Veuillez à bien noter les ID de deux informations (température et pression), ici 535 et 536. Ces deux ID sont à insérer dans la requête HTTP à envoyer à Jeedom.</p>
<h2>Code</h2>
<p><a href="https://github.com/Wifsimster/bmp180/">HTTP version</a></p>
<p><a href="https://github.com/Wifsimster/bmp180-mqtt">MQTT version</a></p>
<h2>Résultat</h2>
<p><img src="/images/temperature-pression-bmp180-jeedom-esp8266-resultat.png" alt="BMP180 Résultat"></p>`
}

const englishContent: PostContent = {
  title: 'Temperature and pressure (BMP180) under Jeedom via ESP8266',
  description: 'Setup of a BMP180 sensor with an ESP8266 to retrieve temperature and pressure under Jeedom.',
  html: `<h2>Materials</h2>
<ul>
<li>1 <a href="http://www.ebay.fr/itm/ESP8266-Serial-WIFI-Wireless-TransceiveR-Module-Send-Receive-LWIP-AP-STA-/271935772447?hash=item3f50a2971f:g:QEYAAOSw9N1VrfAJ">ESP8266</a>;</li>
<li>1 <a href="http://www.ebay.fr/itm/BMP180-Replace-BMP085-Digital-Barometric-Pressure-Sensor-Board-Module-Arduino-IE-/281807948504?hash=item419d100ad8:g:rJIAAOSwVL1WApmE">BMP180</a> sensor (temperature and pressure);</li>
<li>1 <a href="http://www.ebay.fr/itm/LF33CV-Regulateur-TO-220-3V3-0-5A-STM-lot-de-5-ou-10-/181701724632?var=&hash=item2a4e4449d8:m:mzy0HUMgtVw3B4YO5VCN2-g">LF33CV</a> regulator (5v to 3.3v);</li>
<li>1 <a href="http://www.ebay.fr/itm/resistance-1-4w-0-25w-1-10-100-1K-10K-100K-ohms-/171088290472">1kΩ</a> resistor (pull-up).</li>
</ul>
<h2>Wiring</h2>
<p><img src="/images/temperature-pression-bmp180-jeedom-esp8266-cablage.png" alt="BMP180"></p>
<h2><abbr title="French home automation software, a long-standing Home Assistant rival">Jeedom</abbr></h2>
<p>Create a virtual device.</p>
<p><img src="/images/temperature-pression-bmp180-jeedom-esp8266-jeedom.png" alt="BMP180 Jeedom"></p>
<p>Make sure to note the IDs of the two information (temperature and pressure), here 535 and 536. These two IDs are to be inserted in the HTTP request to send to Jeedom.</p>
<h2>Code</h2>
<p><a href="https://github.com/Wifsimster/bmp180/">HTTP version</a></p>
<p><a href="https://github.com/Wifsimster/bmp180-mqtt">MQTT version</a></p>
<h2>Result</h2>
<p><img src="/images/temperature-pression-bmp180-jeedom-esp8266-resultat.png" alt="BMP180 Result"></p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'TemperaturePressionBmp180JeedomEsp8266',
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
