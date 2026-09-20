<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'affichage-i2c-esp8266',
  date: '2016-04-15',
  tags: ['ESP8266', 'NodeMCU', 'Jeedom', 'Electronic']
}

const frenchContent: PostContent = {
  title: 'Affichage de valeurs sur un écran I2C via un ESP8266',
  description: "Cet article met en avant l'utilisation d'un écran I2C OLED et d'un ESP8266 afin d'afficher des valeurs en provenance d'un broker MQTT.",
  html: `<h2>Prérequis</h2>
<p>Pour réaliser ce montage, il vous faut :</p>
<ul>
<li>1 <a href="http://www.ebay.fr/itm/ESP8266-Serial-WIFI-Wireless-TransceiveR-Module-Send-Receive-LWIP-AP-STA-/271935772447?hash=item3f50a2971f:g:QEYAAOSw9N1VrfAJ">ESP8266</a>;</li>
<li>1 écran <a href="http://www.ebay.com/itm/0-96-I2C-IIC-SPI-Serial-128X64-White-OLED-LCD-LED-Display-Module-for-Arduino-/201428440360?hash=item2ee6121528:g:MOYAAOSwv0tVeD0N">I2C 128×64 OLED</a>;</li>
<li>1 régulateur <a href="http://www.ebay.fr/itm/LF33CV-Regulateur-TO-220-3V3-0-5A-STM-lot-de-5-ou-10-/181701724632?var=&hash=item2a4e4449d8:m:mzy0HUMgtVw3B4YO5VCN2-g">LF33CV</a> (5v vers 3.3v);</li>
<li>1 résistance <a href="http://www.ebay.fr/itm/resistance-1-4w-0-25w-1-10-100-1K-10K-100K-ohms-/171088290472">1kΩ</a> (pull-up);</li>
<li>2 résistances <a href="http://www.ebay.com/itm/100PCS-4-7K-4K7-Ohms-1-4W-0-25W-5-Carbon-Film-Resistors-Resistance-/252071125870?hash=item3ab09c236e:g:k9EAAOSwjVVV3n3n">4.7kΩ</a>.</li>
</ul>
<p><strong>Attention !</strong><br>
Le code est en <abbr title="Langage de script léger, utilisé par le firmware NodeMCU">LUA</abbr> et nécessite donc d'avoir l'<abbr title="Microcontrôleur Wi-Fi bon marché, très répandu chez les bricoleurs">ESP8266</abbr> avec le firmware nodemcu.</p>
<h2>Câblage</h2>
<p><img src="/images/affichage-i2c-esp8266-schema.png" alt="Schéma I2C"></p>
<h2>Code</h2>
<p><a href="https://github.com/Wifsimster/i2c-display-mqtt">Github</a></p>
<h2>Principe</h2>
<p>Le principe est le suivant :</p>
<ol>
<li>L'ESP créé un client <abbr title="Message Queuing Telemetry Transport — bus de messages léger">MQTT</abbr> avec un id unique;</li>
<li>Il se connecte au broker MQTT;</li>
<li>Le client souscrit à un topic particulier où les données que l'on désire sont publiées;</li>
<li>L'ESP affiche une première fois les données à l'écran;</li>
<li>Puis à chaque fois que le broker MQTT reçoit des nouvelles données sur ce topic, notre client met à jour les données à l'écran.</li>
</ol>
<h2>Résultat</h2>
<p><img src="/images/affichage-i2c-esp8266-resultat.jpg" alt="Écran I2C"></p>`
}

const englishContent: PostContent = {
  title: 'Display values on an I2C screen via ESP8266',
  description: 'This article highlights the use of an I2C OLED screen and an ESP8266 to display values from an MQTT broker.',
  html: `<h2>Prerequisites</h2>
<p>To build this setup, you will need:</p>
<ul>
<li>1 <a href="http://www.ebay.fr/itm/ESP8266-Serial-WIFI-Wireless-TransceiveR-Module-Send-Receive-LWIP-AP-STA-/271935772447?hash=item3f50a2971f:g:QEYAAOSw9N1VrfAJ">ESP8266</a>;</li>
<li>1 <a href="http://www.ebay.com/itm/0-96-I2C-IIC-SPI-Serial-128X64-White-OLED-LCD-LED-Display-Module-for-Arduino-/201428440360?hash=item2ee6121528:g:MOYAAOSwv0tVeD0N">I2C 128×64 OLED</a> screen;</li>
<li>1 <a href="http://www.ebay.fr/itm/LF33CV-Regulateur-TO-220-3V3-0-5A-STM-lot-de-5-ou-10-/181701724632?var=&hash=item2a4e4449d8:m:mzy0HUMgtVw3B4YO5VCN2-g">LF33CV</a> regulator (5v to 3.3v);</li>
<li>1 <a href="http://www.ebay.fr/itm/resistance-1-4w-0-25w-1-10-100-1K-10K-100K-ohms-/171088290472">1kΩ</a> resistor (pull-up);</li>
<li>2 <a href="http://www.ebay.com/itm/100PCS-4-7K-4K7-Ohms-1-4W-0-25W-5-Carbon-Film-Resistors-Resistance-/252071125870?hash=item3ab09c236e:g:k9EAAOSwjVVV3n3n">4.7kΩ</a> resistors.</li>
</ul>
<p><strong>Warning!</strong><br>
The code is in <abbr title="Lightweight scripting language, used by the NodeMCU firmware">LUA</abbr> and therefore requires the <abbr title="A cheap Wi-Fi microcontroller, widely used by hobbyists">ESP8266</abbr> to have the nodemcu firmware.</p>
<h2>Wiring</h2>
<p><img src="/images/affichage-i2c-esp8266-schema.png" alt="I2C Diagram"></p>
<h2>Code</h2>
<p><a href="https://github.com/Wifsimster/i2c-display-mqtt">Github</a></p>
<h2>Principle</h2>
<p>The principle is as follows:</p>
<ol>
<li>The ESP creates an <abbr title="Message Queuing Telemetry Transport — lightweight message bus">MQTT</abbr> client with a unique id;</li>
<li>It connects to the MQTT broker;</li>
<li>The client subscribes to a specific topic where the desired data is published;</li>
<li>The ESP displays the data on the screen for the first time;</li>
<li>Then each time the MQTT broker receives new data on this topic, our client updates the data on the screen.</li>
</ol>
<h2>Result</h2>
<p><img src="/images/affichage-i2c-esp8266-resultat.jpg" alt="I2C Screen"></p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'AffichageI2cEsp8266',
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
  }
})
</script>

<template>
  <div v-html="content.html"></div>
</template>