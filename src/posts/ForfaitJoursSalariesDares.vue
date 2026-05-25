<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'forfait-jours-salaries-france-2024',
  date: '2026-05-25',
  tags: ['Work', 'France', 'Analysis']
}

const frenchContent: PostContent = {
  title: 'Le forfait en jours en France : 2,4 millions de salariés, et 208 heures de plus par an',
  description: 'La DARES publie un panorama 2024 du forfait annuel en jours : qui sont ces salariés, où sont-ils, et combien d\'heures travaillent-ils vraiment ? Les points essentiels à retenir, sans noyer le lecteur sous les chiffres.',
  html: `<p><strong>TL;DR :</strong> Le 12 mai 2026, la DARES a publié <em>Qui sont les salariés au forfait en jours et comment leur travail s'organise-t-il ?</em> (Dares Analyses n° 20, Fouad Amar). En 2024, <strong>2,4 millions de salariés</strong> relèvent d'une convention de forfait annuel en jours, soit <strong>15,1 % des salariés à temps complet du privé</strong>. En moyenne, ils travaillent <strong>208 heures de plus par an</strong> que les autres temps pleins — soit l'équivalent de cinq semaines et demie de travail supplémentaires. Plus de soir, plus de télétravail, et un dispositif qui s'est accéléré ces dernières années.</p>
<hr>

<h2>Un dispositif qui s'est installé sans bruit</h2>
<p>Le forfait annuel en jours, introduit par les lois Aubry de 2000, repose sur une logique simple : on ne décompte plus les heures, on décompte les jours travaillés sur l'année (218 maximum dans la plupart des accords). En contrepartie, le salarié est censé disposer d'une <strong>autonomie réelle</strong> dans la gestion de son emploi du temps.</p>
<p>Depuis le début des années 2000, la part de salariés concernés monte régulièrement. La DARES note même une <em>accélération en fin de période</em> : entre 2019 et 2024, la diffusion s'est emballée. On est passé d'un dispositif réservé à une frange de cadres dirigeants à un standard pour 1 salarié à temps complet sur 7 dans le privé.</p>

<h2>Qui sont-ils ?</h2>
<p>Le portrait-robot, tel que la DARES le dresse, ne surprend pas — mais il mérite d'être posé clairement :</p>
<ul>
<li><strong>Des cadres, très majoritairement.</strong> Le forfait jours suit la frontière statutaire : c'est l'organisation du temps de travail des cadres autonomes, par construction.</li>
<li><strong>Des âges intermédiaires.</strong> Plus rare en début de carrière, plus rare aussi en fin de carrière, le forfait jours culmine sur la tranche des 30-50 ans — celle où l'on prend des responsabilités et où l'on est censé "savoir s'organiser".</li>
<li><strong>Un peu plus d'hommes que de femmes</strong>, l'écart se creusant surtout après 45 ans. La DARES ne tranche pas la cause, mais l'écart recoupe la sur-représentation masculine dans les postes d'encadrement seniors.</li>
<li><strong>Plus présent dans les grandes entreprises</strong>, où l'infrastructure RH et les accords collectifs permettent de cadrer le dispositif.</li>
<li><strong>Concentré dans la finance/assurance et l'information/communication</strong>, deux secteurs où les cadres sont sur-représentés. Sans surprise.</li>
</ul>

<h2>Le chiffre qui pique : 208 heures de plus par an</h2>
<p>C'est, pour moi, la donnée centrale de la note.</p>
<p>En 2024, un salarié au forfait jours travaille en moyenne <strong>1 821 heures par an</strong>, contre <strong>1 613 heures</strong> pour un salarié à temps complet décompté en heures. L'écart : <strong>208 heures</strong>.</p>
<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Heures travaillées en moyenne par an en 2024 : un salarié à temps complet décompté en heures travaille 1 613 heures ; un salarié au forfait en jours travaille 1 821 heures, soit 208 heures de plus, l'équivalent d'environ 5,5 semaines." class="diagram-svg">
<text x="0" y="20" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">HEURES TRAVAILLÉES PAR AN · 2024</text>
<text x="0" y="58" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="500" opacity="0.7">Temps complet · décompte horaire</text>
<rect x="0" y="70" width="380" height="42" rx="6" fill="currentColor" fill-opacity="0.15"/>
<rect x="0" y="70" width="380" height="42" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<text x="395" y="98" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="600">1 613</text>
<text x="476" y="98" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55" letter-spacing="0.03em">h / an</text>
<text x="0" y="160" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700">Forfait en jours</text>
<rect x="0" y="172" width="380" height="42" rx="6" fill="currentColor" fill-opacity="0.15"/>
<rect x="0" y="172" width="380" height="42" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<rect x="384" y="172" width="49" height="42" rx="6" fill="currentColor" fill-opacity="0.92"/>
<text x="448" y="200" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="700">1 821</text>
<text x="529" y="200" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55" letter-spacing="0.03em">h / an</text>
<path d="M 384 226 L 384 235 L 433 235 L 433 226" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" opacity="0.55"/>
<text x="408" y="259" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700">+208 h</text>
<text x="408" y="278" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-style="italic" opacity="0.6">≈ 5,5 semaines de plus</text>
</svg>
<p>208 heures, c'est l'équivalent de <strong>cinq semaines et demie</strong> de travail supplémentaires sur une année — ou, si on préfère, environ <strong>52 minutes de plus par jour ouvré</strong>. Ce n'est pas un effet de bord, c'est la nature même du forfait : on troque le décompte horaire contre une charge de travail évaluée en jours, et la moyenne dérive vers le haut.</p>
<p>À noter que la DARES parle bien d'une <em>moyenne</em>. Une partie des cadres au forfait dépasse largement ce chiffre, une autre est en deçà. Mais la tendance centrale est nette : passer au forfait jours, c'est, statistiquement, allonger sa semaine.</p>

<h2>Plus le soir, et plus en télétravail</h2>
<p>L'autre apport de la note est qualitatif. Les salariés au forfait jours :</p>
<ul>
<li><strong>Travaillent plus souvent le soir, entre 20 h et minuit</strong>, que les autres salariés à temps complet. Le forfait jours autorise — et, dans les faits, normalise — la dispersion du temps de travail en dehors des heures de bureau classiques.</li>
<li><strong>Télétravaillent plus souvent.</strong> Les deux phénomènes sont liés : autonomie horaire et autonomie spatiale vont ensemble, et se renforcent. Quand on ne décompte plus les heures, on cesse aussi de décompter la présence sur site.</li>
</ul>
<p>C'est cohérent avec le dispositif. C'est aussi le point de friction historique : sans repère horaire, le droit à la déconnexion devient le seul rempart contre l'extension du temps de travail dans la soirée, le week-end, depuis la maison. La note ne traite pas ce sujet frontalement, mais ses chiffres le posent en creux.</p>

<h2>Ce qu'il faut en retenir</h2>
<ol>
<li><strong>Le forfait jours n'est plus un dispositif marginal.</strong> 15,1 % des temps pleins du privé, 2,4 millions de personnes : c'est devenu la norme pour les cadres et un standard pour une bonne partie des fonctions encadrantes.</li>
<li><strong>L'autonomie a un prix horaire.</strong> +208 h/an en moyenne, ce n'est pas neutre — et c'est la première fois qu'une publication officielle française donne un chiffre aussi net sur l'écart.</li>
<li><strong>La frontière vie pro / vie perso est statistique, pas juridique.</strong> Plus de soir, plus de télétravail : le forfait jours déplace mécaniquement le travail dans des plages que la convention horaire encadrait, elle, par construction.</li>
<li><strong>L'accélération récente mérite d'être surveillée.</strong> Si la diffusion s'est emballée entre 2019 et 2024, c'est probablement la trace de deux choses simultanées : la généralisation du télétravail post-Covid, et la requalification de profils "para-cadres" en cadres au forfait. À suivre.</li>
</ol>

<h2>Et au-delà</h2>
<p>La note pose le constat, elle ne juge pas. Mais elle ouvre, par ses chiffres, plusieurs questions qu'il serait honnête de poser :</p>
<ul>
<li>Les 208 heures supplémentaires sont-elles <em>compensées</em> en autonomie réelle, ou simplement <em>absorbées</em> par la charge ? La note ne le dit pas — c'est probablement le sujet de la prochaine étude.</li>
<li>Le travail du soir et le télétravail amplifient-ils l'écart femmes-hommes après 45 ans, par effet de charge mentale et domestique ? Question ouverte.</li>
<li>L'accélération 2019-2024 est-elle un rattrapage ou un nouveau régime ? La courbe de la DARES laisse penser qu'on n'est pas revenu à l'avant-Covid.</li>
</ul>
<p>Ce ne sont pas des conclusions, ce sont des pistes. La donnée brute, elle, est là — et elle est solide : 2,4 millions de personnes, 208 heures de plus par an, et un dispositif qui s'installe.</p>

<hr>
<h2>Source</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://dares.travail-emploi.gouv.fr/publication/qui-sont-les-salaries-au-forfait-en-jours-et-comment-leur-travail-sorganise-t-il">DARES Analyses n° 20 — <em>Qui sont les salariés au forfait en jours et comment leur travail s'organise-t-il ?</em></a> (Fouad Amar, 12 mai 2026). Champ : France hors Mayotte ; salariés à temps complet du secteur privé, hors agriculture, particuliers employeurs et activités extraterritoriales, hors intérim. Sources : DSN à partir de 2019, enquête Acemo trimestrielle 2002-2018.</li>
</ul>`
}

const englishContent: PostContent = {
  title: 'Day-count work agreements in France: 2.4 million workers, 208 extra hours a year',
  description: 'France\'s DARES just published its 2024 snapshot of the "forfait en jours" — a day-counted (not hour-counted) work agreement used mostly for managers. Who is on it, where, and how many hours do they actually work? The essentials, without drowning the reader in numbers.',
  html: `<p><strong>TL;DR:</strong> On May 12, 2026, France's DARES (the labor ministry's statistics arm) published <em>Who are the day-count workers and how is their work organized?</em> (Dares Analyses no. 20, Fouad Amar). In 2024, <strong>2.4 million employees</strong> are on a "forfait annuel en jours" — an annual work agreement counted in days, not hours — which is <strong>15.1% of full-time private-sector employees</strong>. On average, they work <strong>208 hours more per year</strong> than other full-timers — about five and a half extra weeks of work. More evenings, more remote, and a scheme that has accelerated in the last five years.</p>
<hr>

<h2>A scheme that settled in without much noise</h2>
<p>The <em>forfait en jours</em>, introduced by the Aubry laws in 2000, rests on a simple idea: stop counting hours, count working days over the year (218 max under most agreements). In exchange, the employee is supposed to have <strong>real autonomy</strong> in how they manage their schedule.</p>
<p>Since the early 2000s, the share of employees covered has risen steadily. DARES even flags an <em>acceleration in the recent period</em>: between 2019 and 2024, diffusion took off. What started as a scheme for a sliver of senior managers is now the default for one in seven full-time private-sector employees.</p>

<h2>Who is on it?</h2>
<p>The profile DARES paints isn't surprising — but it's worth stating clearly:</p>
<ul>
<li><strong>Managers, overwhelmingly.</strong> The scheme tracks the statutory line: it's the working-time arrangement for autonomous managers, by construction.</li>
<li><strong>Mid-career.</strong> Rare at the start of a career, rare again at the end, the day-count peaks in the 30-50 age bracket — when people take on responsibility and are expected to "manage their own time".</li>
<li><strong>Slightly more men than women</strong>, with the gap widening past age 45. DARES doesn't pick a cause, but the gap maps onto the male over-representation in senior management.</li>
<li><strong>More common in large firms</strong>, where HR infrastructure and collective agreements can frame the scheme.</li>
<li><strong>Concentrated in finance/insurance and information/communication</strong>, two sectors where managers are over-represented. No surprise there.</li>
</ul>

<h2>The number that stings: 208 extra hours a year</h2>
<p>This is, for me, the central figure of the note.</p>
<p>In 2024, a day-count employee works on average <strong>1,821 hours a year</strong>, versus <strong>1,613 hours</strong> for an hour-counted full-time employee. The gap: <strong>208 hours</strong>.</p>
<svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Average hours worked per year in 2024: an hour-counted full-time employee works 1,613 hours; a day-count employee works 1,821 hours — 208 hours more, about 5.5 extra weeks." class="diagram-svg">
<text x="0" y="20" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">HOURS WORKED PER YEAR · 2024</text>
<text x="0" y="58" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="500" opacity="0.7">Full-time · hour-counted</text>
<rect x="0" y="70" width="380" height="42" rx="6" fill="currentColor" fill-opacity="0.15"/>
<rect x="0" y="70" width="380" height="42" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<text x="395" y="98" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="600">1,613</text>
<text x="476" y="98" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55" letter-spacing="0.03em">h / year</text>
<text x="0" y="160" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="700">Day-count (forfait jours)</text>
<rect x="0" y="172" width="380" height="42" rx="6" fill="currentColor" fill-opacity="0.15"/>
<rect x="0" y="172" width="380" height="42" rx="6" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"/>
<rect x="384" y="172" width="49" height="42" rx="6" fill="currentColor" fill-opacity="0.92"/>
<text x="448" y="200" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="700">1,821</text>
<text x="529" y="200" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" opacity="0.55" letter-spacing="0.03em">h / year</text>
<path d="M 384 226 L 384 235 L 433 235 L 433 226" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" opacity="0.55"/>
<text x="408" y="259" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="16" font-weight="700">+208 h</text>
<text x="408" y="278" text-anchor="middle" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-style="italic" opacity="0.6">≈ 5.5 extra weeks</text>
</svg>
<p>208 hours is the equivalent of <strong>five and a half extra weeks</strong> of work a year — or, if you prefer, about <strong>52 more minutes per working day</strong>. This isn't a side-effect, it's the nature of the scheme: you trade hour-counting for a workload measured in days, and the average drifts upward.</p>
<p>Worth noting: DARES is talking about an <em>average</em>. Some day-count managers blow well past that figure, others sit below it. But the central tendency is clear: moving to the day-count, statistically, lengthens your week.</p>

<h2>More evenings, more remote</h2>
<p>The other contribution of the note is qualitative. Day-count employees:</p>
<ul>
<li><strong>Work more often in the evening, between 8 p.m. and midnight</strong>, than other full-time employees. The scheme allows — and, in practice, normalizes — work time spilling outside classic office hours.</li>
<li><strong>Telework more often.</strong> The two go together: schedule autonomy and location autonomy reinforce each other. Once you stop counting hours, you also stop counting on-site presence.</li>
</ul>
<p>That tracks with how the scheme is designed. It's also the historical friction point: with no hourly anchor, the "right to disconnect" becomes the only barrier against work expanding into evenings, weekends, and the kitchen table. The note doesn't address that head-on, but its numbers raise it implicitly.</p>

<h2>What to take away</h2>
<ol>
<li><strong>The day-count is no longer a marginal scheme.</strong> 15.1% of full-time private-sector workers, 2.4 million people: it has become the norm for managers and a standard for many supervisory roles.</li>
<li><strong>Autonomy carries an hourly price tag.</strong> +208 h/year on average is not nothing — and this is the first time a French official publication puts such a clean number on the gap.</li>
<li><strong>The work/life boundary is statistical, not legal.</strong> More evenings, more remote: the day-count mechanically pushes work into time slots that the hour-counted contract used to fence off by construction.</li>
<li><strong>The recent acceleration deserves attention.</strong> If diffusion took off between 2019 and 2024, it's likely two things at once: the generalization of remote work post-Covid, and the reclassification of "para-management" profiles as managers on the day-count. Worth watching.</li>
</ol>

<h2>And beyond</h2>
<p>The note presents the data; it doesn't pass judgment. But its numbers open questions worth asking honestly:</p>
<ul>
<li>Are those 208 extra hours <em>offset</em> by real autonomy, or simply <em>absorbed</em> by the workload? The note doesn't say — that's probably the next study.</li>
<li>Do evening work and remote work amplify the male-female gap after 45 through mental and domestic load? Open question.</li>
<li>Is the 2019-2024 acceleration a catch-up or a new regime? DARES's curve suggests we haven't returned to the pre-Covid baseline.</li>
</ul>
<p>These aren't conclusions, they're leads. The raw data is there — and it's solid: 2.4 million people, 208 extra hours a year, and a scheme that is settling in.</p>

<hr>
<h2>Source</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://dares.travail-emploi.gouv.fr/publication/qui-sont-les-salaries-au-forfait-en-jours-et-comment-leur-travail-sorganise-t-il">DARES Analyses no. 20 — <em>Qui sont les salariés au forfait en jours et comment leur travail s'organise-t-il ?</em></a> (Fouad Amar, May 12, 2026). Scope: France excluding Mayotte; full-time private-sector employees, excluding agriculture, household employers, extraterritorial activities, and temp workers. Sources: DSN from 2019 onward, quarterly Acemo survey 2002-2018.</li>
</ul>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'ForfaitJoursSalariesDares',
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
