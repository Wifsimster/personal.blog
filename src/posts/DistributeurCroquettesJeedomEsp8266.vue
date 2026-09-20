<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'distributeur-croquettes-jeedom-esp8266',
  date: '2016-04-14',
  tags: ['ESP8266', 'NodeMCU', 'Jeedom', 'DIY', 'Electronic']
}

const frenchContent: PostContent = {
  title: 'Distributeur de croquettes sous Jeedom via un ESP8266',
  description: "Afin d'éviter LE problème quotidien : « nourrir le chat affamé », j'ai réalisé un distributeur connecté à Jeedom. Ce distributeur est constitué d'un simple moteur 12v actionné par un double relais et contrôler par un ESP8266.",
  html: `<h2>Prérequis</h2>
<p>Afin de réaliser ce montage, il vous faut :</p>
<ul>
<li>1 <a href="http://www.ebay.fr/itm/ESP8266-Serial-WIFI-Wireless-TransceiveR-Module-Send-Receive-LWIP-AP-STA-/271935772447?hash=item3f50a2971f:g:QEYAAOSw9N1VrfAJ">ESP8266</a>;</li>
<li>1 régulateur <a href="http://www.ebay.fr/itm/LF33CV-Regulateur-TO-220-3V3-0-5A-STM-lot-de-5-ou-10-/181701724632?var=&hash=item2a4e4449d8:m:mzy0HUMgtVw3B4YO5VCN2-g">LF33CV</a> (5v vers 3.3v);</li>
<li>1 résistance <a href="http://www.ebay.fr/itm/resistance-1-4w-0-25w-1-10-100-1K-10K-100K-ohms-/171088290472">1kΩ</a> (pull-up);</li>
<li>1 <a href="http://www.ebay.com/itm/1pcs-5V-2-Channel-Relay-Module-for-Arduino-PIC-ARM-DSP-AVR-Electronic-/400985229770?hash=item5d5c9509ca:g:cJgAAOxy86RSY-Jq">double relais</a> module (5v).</li>
</ul>
<h2>Principe</h2>
<p>Le distributeur est constitué d'un moteur 12v qui fait tourner une tige filetée à laquelle est fixé un plateau.</p>
<p>Le plateau est verrouillé en rotation par deux fine tiges à la base du distributeur.</p>
<p>En conséquence, selon le sens de rotation du moteur, la plateau descend ou monte.</p>
<p>Un tuyau de plus gros diamètre englobe le tout afin de récupérer les croquettes et les verse à la base par un bec.</p>
<p>Le distributeur est connecté à <abbr title="Logiciel de domotique français, concurrent historique de Home Assistant">Jeedom</abbr> par un <abbr title="Microcontrôleur Wi-Fi bon marché, très répandu chez les bricoleurs">ESP8266</abbr> et actionne le double relais sur requête HTTP.</p>
<p><img src="/images/distributeur-croquettes-1.jpg" alt="Distributeur 1"></p>
<p><img src="/images/distributeur-croquettes-2.jpg" alt="Distributeur 2"></p>
<p><img src="/images/distributeur-croquettes-3.jpg" alt="Distributeur 3"></p>
<h2>Câblage</h2>
<p><img src="/images/distributeur-croquettes-schema-relais.png" alt="Schéma relais"></p>
<h2>Code</h2>
<p><a href="https://github.com/Wifsimster/distributeur-lua">Github</a></p>
<h2>Jeedom</h2>
<p>Création d'un script pour communiquer avec l'esp8266 du distributeur :</p>
<p><img src="/images/distributeur-croquettes-jeedom-script.png" alt="Jeedom script"></p>
<p>Création d'un virtuel pour interagir avec le script précédent :</p>
<p><img src="/images/distributeur-croquettes-jeedom-virtuel.png" alt="Jeedom virtuel"></p>
<p>Création d'un scénario pour automatiser la distribution des croquettes :</p>
<p><img src="/images/distributeur-croquettes-jeedom-scenario.png" alt="Jeedom scénario"></p>
<h2>Résultat</h2>
<p><img src="/images/distributeur-croquettes-dashboard.png" alt="Dashboard"></p>
<iframe src="//www.youtube.com/embed/_gSTuAhnkl0" frameborder="0" allowfullscreen></iframe>`
}

const englishContent: PostContent = {
  title: 'Cat food dispenser under Jeedom via ESP8266',
  description: "To avoid THE daily problem: 'feeding the hungry cat', I built a dispenser connected to Jeedom. This dispenser consists of a simple 12v motor actuated by a double relay and controlled by an ESP8266.",
  html: `<h2>Prerequisites</h2>
<p>To build this setup, you will need:</p>
<ul>
<li>1 <a href="http://www.ebay.fr/itm/ESP8266-Serial-WIFI-Wireless-TransceiveR-Module-Send-Receive-LWIP-AP-STA-/271935772447?hash=item3f50a2971f:g:QEYAAOSw9N1VrfAJ">ESP8266</a>;</li>
<li>1 <a href="http://www.ebay.fr/itm/LF33CV-Regulateur-TO-220-3V3-0-5A-STM-lot-de-5-ou-10-/181701724632?var=&hash=item2a4e4449d8:m:mzy0HUMgtVw3B4YO5VCN2-g">LF33CV</a> regulator (5v to 3.3v);</li>
<li>1 <a href="http://www.ebay.fr/itm/resistance-1-4w-0-25w-1-10-100-1K-10K-100K-ohms-/171088290472">1kΩ</a> resistor (pull-up);</li>
<li>1 <a href="http://www.ebay.com/itm/1pcs-5V-2-Channel-Relay-Module-for-Arduino-PIC-ARM-DSP-AVR-Electronic-/400985229770?hash=item5d5c9509ca:g:cJgAAOxy86RSY-Jq">double relay</a> module (5v).</li>
</ul>
<h2>Principle</h2>
<p>The dispenser consists of a 12v motor that rotates a threaded rod to which a tray is attached.</p>
<p>The tray is locked in rotation by two thin rods at the base of the dispenser.</p>
<p>Consequently, depending on the rotation direction of the motor, the tray goes down or up.</p>
<p>A larger diameter tube surrounds everything to collect the food and pours it at the base through a spout.</p>
<p>The dispenser is connected to <abbr title="French home automation software, a long-standing Home Assistant rival">Jeedom</abbr> via an <abbr title="A cheap Wi-Fi microcontroller, widely used by hobbyists">ESP8266</abbr> and actuates the double relay on HTTP request.</p>
<p><img src="/images/distributeur-croquettes-1.jpg" alt="Dispenser 1"></p>
<p><img src="/images/distributeur-croquettes-2.jpg" alt="Dispenser 2"></p>
<p><img src="/images/distributeur-croquettes-3.jpg" alt="Dispenser 3"></p>
<h2>Wiring</h2>
<p><img src="/images/distributeur-croquettes-schema-relais.png" alt="Relay diagram"></p>
<h2>Code</h2>
<p><a href="https://github.com/Wifsimster/distributeur-lua">Github</a></p>
<h2>Jeedom</h2>
<p>Create a script to communicate with the esp8266 of the dispenser:</p>
<p><img src="/images/distributeur-croquettes-jeedom-script.png" alt="Jeedom script"></p>
<p>Create a virtual to interact with the previous script:</p>
<p><img src="/images/distributeur-croquettes-jeedom-virtuel.png" alt="Jeedom virtual"></p>
<p>Create a scenario to automate food distribution:</p>
<p><img src="/images/distributeur-croquettes-jeedom-scenario.png" alt="Jeedom scenario"></p>
<h2>Result</h2>
<p><img src="/images/distributeur-croquettes-dashboard.png" alt="Dashboard"></p>
<iframe src="//www.youtube.com/embed/_gSTuAhnkl0" frameborder="0" allowfullscreen></iframe>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'DistributeurCroquettesJeedomEsp8266',
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
