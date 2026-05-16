<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'dora-ai-roi-report',
  date: '2026-05-16',
  tags: ['Software', 'AI', 'Opinion']
}

const englishContent: PostContent = {
  title: 'DORA Just Confirmed What My Team Already Lived',
  description: 'Google Cloud\'s DORA team released its 2026 report on the ROI of AI-assisted software development. The J-Curve, the verification tax, AI as an amplifier — a field report on research that validates what my team lives daily, vendor numbers and all.',
  html: `<p><strong>TL;DR:</strong> Google Cloud's DORA team just published <em>The ROI of AI-assisted Software Development</em>. I found it because two people I follow were debating it on LinkedIn — and reading it gave me an odd feeling: the report describes, in research vocabulary, the year my team just lived through. The J-Curve, the verification tax, AI as an amplifier rather than a miracle. The diagnosis is right. The numbers are vendor numbers — and the report admits it itself. Read it for the framework, not for the "39% ROI".</p>
<hr>
<p>In March I wrote that <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">the SDLC is dead</a>, then that <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">coding was never the job</a>. In May I described how <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">AI became a team reflex</a> — a field report, not a manifesto. Three articles written from inside a team, with no external data to back them. Just what I was seeing.</p>
<p>Then, this week, the DORA report started circulating on LinkedIn. Robert Schrader, Head of Software Engineering, posted a measured analysis of it. Jean-Rémy Revy, Head of Architecture at Ippon Technologies, relayed it, saying it went "exactly in the direction" of what he had been arguing for months. Two practitioners, two different companies, the same conclusion. I clicked. I read all 60 pages. And I found, set down in black and white by a research team, almost everything I had described by feel.</p>
<p>One honest disclaimer first: this report is published by Google Cloud. The "delta" team that co-signs it is their consulting practice, and every chapter ends with a "contact us". It is, at the same time, genuine research synthesis — DORA is the lineage of <em>Accelerate</em> and the four key metrics, a brand that earned its credibility — and sales collateral. You can hold both ideas at once. You have to, in fact, to read this document correctly.</p>

<h2>"AI is an amplifier" — the line I'd already written</h2>
<p>The report's central thesis fits in one sentence: <strong>AI is an amplifier.</strong> It magnifies the strengths of organizations that work well and the dysfunctions of those that struggle. The return on investment doesn't come from the tool — it comes from the system around it: the quality of the internal platform, the clarity of workflows, the alignment of teams.</p>
<blockquote><p>"AI will not fix a broken engineering system."</p></blockquote>
<p>I wrote almost the exact same thing in the previous article: <em>"garbage context in, garbage debate out".</em> An agent that generates code three times faster inside a team with no solid pipeline does not produce three times the value. It produces three times the code, queued in front of an already-clogged manual review. The report says it bluntly: <strong>code is a liability, not an asset.</strong> Generating more code without guardrails isn't creating value — it's accelerating the accumulation of technical debt.</p>
<p>This point looks obvious once written. It is not obvious in the mind of a committee that just bought a thousand licenses expecting a miracle. The report's answer to them: the miracle is not in the license.</p>

<h2>The J-Curve finally has a name</h2>
<p>In <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">the previous article</a>, I described a dip: the first weeks my team adopted agents, we got <em>less</em> productive before getting more productive. I had no word for it. The report has one: the <strong>J-Curve</strong>.</p>
<p>The idea: when a team adopts a major technology, its performance temporarily drops before climbing back — and then past the starting point. The curve draws a J. DORA calls that dip "the tuition cost of transformation". Three things deepen it:</p>
<ul>
<li><strong>The learning curve</strong> — the time spent learning the tools, readapting workflows, moving from a hacked-together <em>prompt</em> to real work on context and specification.</li>
<li><strong>The verification tax</strong> — the time spent reviewing generated code you're not sure about. The more code the AI produces, the bigger the review burden.</li>
<li><strong>Pipeline adaptation</strong> — tests, approvals, the whole downstream that has to absorb a suddenly higher volume.</li>
</ul>
<svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The J-Curve of AI value realization: value starts at a baseline, dips under the learning curve, the verification tax and pipeline adaptation, then climbs back above the baseline into exponential growth." class="diagram-svg">
<g fill="none" stroke="currentColor" stroke-width="1.5">
<line x1="80" y1="45" x2="80" y2="280"></line>
<line x1="80" y1="280" x2="690" y2="280"></line>
<line x1="80" y1="195" x2="690" y2="195" stroke-dasharray="5,4"></line>
<path d="M120,195 C175,216 245,256 305,254 C400,252 490,150 650,72" stroke-width="2.5"></path>
<line x1="305" y1="172" x2="305" y2="280" stroke-dasharray="2,3"></line>
</g>
<g fill="currentColor" stroke="none">
<polygon points="650,72 638,73 645,84"></polygon>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle">
<text x="134" y="36" font-size="12">Value realized</text>
<text x="676" y="300" font-size="12">Time</text>
<text x="120" y="299" font-size="11" font-style="italic">Time zero</text>
<text x="628" y="187" font-size="11" font-style="italic">Baseline</text>
<text x="305" y="116" font-size="12">The learning curve</text>
<text x="305" y="136" font-size="12">The verification tax</text>
<text x="305" y="156" font-size="12">Pipeline adaptation</text>
<text x="556" y="100" font-size="12">Exponential growth</text>
<text x="305" y="301" font-size="11" font-style="italic">where is your team?</text>
<text x="385" y="328" font-size="13" font-style="italic">A dip to fund, not a failure to stop.</text>
</g>
</svg>
<p>The trap is the dip. The report is very clear on this: <strong>most AI initiatives fail not because the technology is bad, but because leadership mistakes the dip for failure and cuts funding at the worst possible moment.</strong> Jean-Rémy Revy summed it up exactly on LinkedIn: the J-Curve "materializes the fact that the initial investment often costs you a bit of performance, before it eventually catches up". If you launch AI in your organization, you're signing up for that dip. Better to know it, and to budget for it.</p>
<blockquote><p>"The dip is not a failure signal. It's the price of the ticket."</p></blockquote>
<p>One aside: the "verification tax" is exactly what my panel of persona sub-agents pays on purpose. Rather than letting the review burden dilute into Friday afternoons, we concentrate it into an explicit mechanism. The tax exists — DORA is right — the question is whether you pay it consciously or let it bleed you in silence.</p>

<h2>The ROI math, and the number I don't trust</h2>
<p>The core of the report is an ROI calculation model, with a worked example. A 500-person organization, $100M of product revenue. First-year investment: $8.4M. Value generated: $11.6M. First-year ROI: <strong>39%</strong>. Payback in eight months. And, as the cherry on top, "Google Cloud customers see an average of 727% ROI over three years".</p>
<p>There. Now, why I don't trust that number.</p>
<p>Of the $11.6M of value, <strong>$11M comes from a single lever</strong>: "headcount reinvestment capacity". In plain terms: it assumes every developer gains 12.5% of their time (about one hour a day) and values that hour at the fully-loaded salary cost. The entire ROI rests on two stacked assumptions: (a) that 12.5% time gain is real, and (b) that hour is <em>actually</em> reconverted into value. At 100%. But a "saved" hour has an annoying habit of being swallowed by meetings, context-switching… or by the verification tax itself. If real conversion is 50%, the ROI is halved.</p>
<p>As for the 727% over three years: those are Google Cloud customers, who stayed three years with Google Cloud, and who agreed to be measured. Total survivorship bias. The "78% of executives who report a return", the "88% of agentic adopters seeing positive returns": executive self-reporting, not delivery metrics.</p>
<p>The most honest part of all this is that <strong>the report says so itself.</strong> It calls its own numbers a "high-uncertainty estimate" meant "to spark a conversation", and quotes the classic line: "all models are wrong". So I take it at its word. What's useful in this chapter isn't the 39%. It's the <em>structure</em>: the formula, the value levers, the list of costs everyone always forgets — including a "J-Curve cost" line that nobody ever puts in the budget. The deliverable is the method. The percentage is decoration.</p>
<blockquote><p>"Endorse the reasoning framework. Refuse the precise number."</p></blockquote>

<h2>The real problem is measurement</h2>
<p>This is the point Robert Schrader raised on LinkedIn, and he's right to push it forward. The report gives you formulas — but an ROI formula needs two things: a <strong>baseline</strong> (the "before") and a <strong>target</strong> (the "after"), both grounded in real delivery metrics.</p>
<p>And that's where it gets hard. Getting reliable numbers is "especially hard in heterogeneous organizations", with fragmented system landscapes, disparate tool chains, and revenue drivers other than a software product or e-commerce. DORA itself warns that these metrics must be applied <em>in context</em>, at the application or service level — comparing two very different systems means nothing.</p>
<p>Translation: half the companies that will want to compute their AI ROI have no baseline. They never measured their lead time, their deployment frequency, their change failure rate <em>before</em>. Without that "before", the J-Curve is invisible: you cannot prove a climb you never measured descending.</p>
<p>Jean-Rémy Revy put it in a sentence I'm keeping: <strong>"No ROI without adopting an adequate methodological framework and aligned control tooling."</strong> That's the whole point. The report sells a calculation; the calculation assumes a measurement discipline most organizations don't have. The ROI of AI is, first, an instrumentation problem.</p>

<h2>The findings that flatter no one</h2>
<p>Two of the report's findings flatter no one — and that's exactly why they're the most credible.</p>
<p><strong>First: AI helps far less on the code you actually maintain.</strong> The cited research (Stanford) gives 35 to 40% productivity gains on simple, greenfield tasks. On legacy, complex, brownfield code? <strong>10% or less.</strong> For someone like me, working on regulated healthcare software several years old, that's the only number that matters. The "40%" that makes the headlines describes a blank slate. The real job happens in the code that already exists — and there, the gain is honest but modest.</p>
<p><strong>Second, and even more uncomfortable: AI adoption is associated with a rise in delivery instability.</strong> In the 2025 DORA research, more AI goes hand in hand with a rising change failure rate. The report's worked example bakes it in: the rate goes from 5% to 6%, costing $344,000 of "instability tax". The delta looks small. The fact is not: <strong>a vendor selling AI tooling admits, in black and white, that its technology, poorly governed, degrades stability.</strong> It's probably the most credible sentence in the document — because it survives the commercial-interest filter. When a seller says something against their own interest, you listen.</p>

<h2>Don't lay people off</h2>
<p>The report is firm on one point, and I want to underline it because it's the most important: <strong>do not reduce headcount.</strong> The productivity gained must not be used to lay people off; it must free capacity for innovation.</p>
<p>For once, the argument isn't moral, it's financial — and airtight. The report's ROI model rests almost entirely on "headcount reinvestment capacity". If you lay the people off, you delete the biggest line of your own ROI case. You destroy the value you claimed to create. And you destroy it precisely at the bottom of the J-Curve — meaning you fire the people paying the verification tax and absorbing the learning curve, right before the climb.</p>
<p>The report reframes ROI in a way I find right: it is no longer "how many developers can I replace", but how much latent human creativity you can unlock by offloading systemic toil to the agents.</p>
<blockquote><p>"We don't measure AI by the code it writes, but by the bottlenecks it clears."</p></blockquote>
<p>On my team, over six months, headcount didn't drop. It <em>grew</em> — interns and apprentices included. We ship more, we sleep better, and nobody was replaced by a machine. The report describes, in consulting-firm language, exactly what I watched happen.</p>

<h2>What still belongs to humans</h2>
<p>As in every article of this series, the honest part. Many things are not in this report — or are, but stay in our hands.</p>
<p><strong>Reading the report as a skeptic.</strong> Nobody will do it for you. A document published by a vendor, with a calculator provided by the same vendor, is read with one hand on your wallet. Not with contempt — DORA deserves a serious read — but with judgment.</p>
<p><strong>Building and holding the baseline.</strong> The measurement tooling, the methodological framework Revy talks about: it isn't bought, it's built. It's slow, unglamorous engineering work, and it's the prerequisite to any serious ROI calculation.</p>
<p><strong>Reconverting the gained time.</strong> The freed hour does not turn itself into value. Someone has to decide, deliberately, that it goes into tests, into the domain, into innovation — and not into one more meeting. The model's $11M only exists if that decision is made, and held.</p>
<p><strong>Holding the architecture and deciding what to build.</strong> No agent has the strategic read of a product. The framework that AI amplifies — we are the ones who write it.</p>

<h2>What to do Monday morning</h2>
<p>If you lead a team and you want to take something concrete out of this report, here's the order I'd suggest:</p>
<ol>
<li><strong>Measure your DORA baseline now.</strong> Lead time, deployment frequency, change failure rate, recovery time. Before adding any AI. Without the "before", you'll never prove the "after".</li>
<li><strong>Put the J-Curve in the budget.</strong> An explicit "transformation cost" line, with an announced duration. And get leadership to pre-commit to not cutting funding during the dip.</li>
<li><strong>Track leading indicators, not ROI.</strong> Experiment frequency and delivery metrics will tell you in week 3 whether you're on the curve. ROI is an eight-month story — too late to correct course.</li>
<li><strong>Audit your context layer.</strong> Is your internal platform a real product? Is your data AI-accessible? If the answer is no, <em>that's</em> where the spend goes — not into more licenses.</li>
<li><strong>Run the calculator with YOUR numbers.</strong> In three scenarios: conservative, realistic, optimistic. The deliverable is the range and the discipline of the exercise. Not the percentage you'll show in the steering committee.</li>
</ol>

<h2>Conclusion</h2>
<p>Six months ago, I wrote a field report and ended it with: "if you thought I was being theoretical — I wasn't." Today, an external research team, with no interest whatsoever in flattering me and which obviously never read my blog, publishes the same diagnosis. This is not vindication. It's a <em>convergence</em> — and a convergence is worth more than vindication, because it comes from elsewhere.</p>
<p>The report's diagnosis is solid: AI is an amplifier, the J-Curve is real, foundations come before the tool, and code stays a liability. The arithmetic, on the other hand, is a conversation starter — not a promise. Read the report for the framework. Run the calculator for the discipline of putting your own numbers in. And forget the 39%.</p>
<p>One last question, the only one that really matters: <strong>which part of the curve is your team on, right now?</strong> If you can't answer, that's fine — it just means you have no baseline. Start there. The rest will follow.</p>
<p><strong>Read the rest of the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">The SDLC Is Dead</a> — why the process was always waste. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coding Was Never the Job</a> — what the engineer becomes when the syntax disappears. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">AI Became a Team Reflex</a> — what an AI-native team looks like on a Tuesday.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://dora.dev/ai/roi/report/">DORA — The ROI of AI-assisted Software Development</a>: the full report (v. 2026.1), published by Google Cloud's DORA team and the "delta" consulting practice.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://dora.dev/ai/roi/calculator/">DORA — ROI of AI calculator</a>: the interactive calculator that accompanies the report, to replay the model with your own assumptions.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://dora.dev/dora-report-2025">DORA — 2025 State of AI-assisted Software Development</a>: the research behind the measured effects of AI, including the rise in delivery instability.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://dora.dev/research/publications/">DORA — Publications &amp; AI Capabilities Model</a>: the capabilities model the ROI report builds on.</li>
</ul>`
}

const frenchContent: PostContent = {
  title: 'DORA vient de confirmer ce que mon équipe a déjà vécu',
  description: 'L\'équipe DORA de Google Cloud a publié son rapport 2026 sur le ROI de l\'IA dans le développement logiciel. La J-Curve, la taxe de vérification, l\'IA comme amplificateur — un retour de terrain sur une recherche qui valide ce que mon équipe vit, chiffres d\'éditeur compris.',
  html: `<p><strong>TL;DR :</strong> L'équipe DORA de Google Cloud vient de publier <em>The ROI of AI-assisted Software Development</em>. Je suis tombé dessus parce que deux personnes que je suis en débattaient sur LinkedIn — et en le lisant, j'ai eu une sensation étrange : ce rapport décrit, en vocabulaire de recherche, l'année que mon équipe vient de vivre. La J-Curve, la taxe de vérification, l'IA comme amplificateur et non comme solution miracle. Le diagnostic est juste. Les chiffres, eux, sont des chiffres d'éditeur — et le rapport l'admet lui-même. À lire pour le cadre de pensée, pas pour le "39 % de ROI".</p>
<hr>
<p>En mars, j'ai écrit que <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">le SDLC est mort</a>, puis que <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">coder n'a jamais été le métier</a>. En mai, j'ai raconté comment <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">l'IA est devenue un réflexe d'équipe</a> — un retour de terrain, pas un manifeste. Trois articles écrits depuis l'intérieur d'une équipe, sans aucune donnée externe pour les appuyer. Juste ce que je voyais.</p>
<p>Et puis, cette semaine, le rapport DORA a commencé à tourner sur LinkedIn. Robert Schrader, Head of Software Engineering, en a publié une analyse posée. Jean-Rémy Revy, Head of Architecture chez Ippon Technologies, l'a relayée en disant qu'il allait "exactement dans le sens" de ce qu'il défendait depuis des mois. Deux praticiens, deux entreprises différentes, le même constat. J'ai cliqué. J'ai lu les 60 pages. Et j'ai retrouvé, posée noir sur blanc par une équipe de recherche, la quasi-totalité de ce que j'avais décrit à tâtons.</p>
<p>Avant d'aller plus loin, une mise au point honnête : ce rapport est publié par Google Cloud. L'équipe "delta" qui le co-signe est leur practice de conseil, et chaque chapitre se termine par un "contactez-nous". C'est, à la fois, de la vraie synthèse de recherche — DORA, c'est la lignée d'<em>Accelerate</em> et des quatre métriques clés, une marque qui a gagné sa crédibilité — et de la plaquette commerciale. On peut tenir les deux idées en même temps. C'est même indispensable pour lire ce document correctement.</p>

<h2>"L'IA est un amplificateur" — la phrase que j'avais déjà écrite</h2>
<p>La thèse centrale du rapport tient en une phrase : <strong>l'IA est un amplificateur.</strong> Elle amplifie les forces des organisations qui fonctionnent bien et les dysfonctionnements de celles qui galèrent. Le retour sur investissement ne vient pas de l'outil — il vient du système autour : la qualité de la plateforme interne, la clarté des workflows, l'alignement des équipes.</p>
<blockquote><p>"L'IA ne réparera pas un système d'ingénierie cassé."</p></blockquote>
<p>J'ai écrit presque mot pour mot la même chose dans l'article précédent : <em>"mauvais contexte en entrée, mauvais débat en sortie".</em> Un agent qui génère du code trois fois plus vite dans une équipe sans pipeline solide ne produit pas trois fois plus de valeur. Il produit trois fois plus de code, en attente devant une revue manuelle déjà engorgée. Le rapport le dit sans détour : <strong>le code est un passif, pas un actif.</strong> Générer plus de code sans garde-fous, ce n'est pas créer de la valeur, c'est accélérer l'accumulation de dette technique.</p>
<p>Ce point paraît évident une fois écrit. Il ne l'est pas dans la tête d'un comité qui vient d'acheter mille licences en espérant un miracle. Le rapport leur répond : le miracle n'est pas dans la licence.</p>

<h2>La J-Curve a enfin un nom</h2>
<p>Dans <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">l'article précédent</a>, j'ai décrit un creux : les premières semaines où mon équipe a adopté les agents, on a été <em>moins</em> productifs avant d'être plus productifs. Je n'avais pas de mot pour ça. Le rapport en a un : la <strong>J-Curve</strong>.</p>
<p>L'idée : quand une équipe adopte une technologie majeure, sa performance baisse temporairement avant de remonter — puis de dépasser le point de départ. La courbe dessine un J. DORA appelle ce creux "le coût de scolarité de la transformation". Trois choses le creusent :</p>
<ul>
<li><strong>La learning curve</strong> — le temps passé à apprendre les outils, à réadapter les workflows, à passer du <em>prompt</em> bricolé à un vrai travail de contexte et de spécification.</li>
<li><strong>La taxe de vérification</strong> — le temps passé à relire du code généré dont on n'est pas sûr. Plus l'IA produit de code, plus la charge de revue grossit.</li>
<li><strong>L'adaptation du pipeline</strong> — les tests, les approbations, tout l'aval qui doit encaisser un volume soudainement plus élevé.</li>
</ul>
<svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="La J-Curve de la réalisation de valeur de l'IA : la valeur part d'une ligne de base, plonge sous l'effet de la learning curve, de la taxe de vérification et de l'adaptation du pipeline, puis remonte au-dessus de la ligne de base en croissance exponentielle." class="diagram-svg">
<g fill="none" stroke="currentColor" stroke-width="1.5">
<line x1="80" y1="45" x2="80" y2="280"></line>
<line x1="80" y1="280" x2="690" y2="280"></line>
<line x1="80" y1="195" x2="690" y2="195" stroke-dasharray="5,4"></line>
<path d="M120,195 C175,216 245,256 305,254 C400,252 490,150 650,72" stroke-width="2.5"></path>
<line x1="305" y1="172" x2="305" y2="280" stroke-dasharray="2,3"></line>
</g>
<g fill="currentColor" stroke="none">
<polygon points="650,72 638,73 645,84"></polygon>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle">
<text x="138" y="36" font-size="12">Valeur réalisée</text>
<text x="672" y="300" font-size="12">Temps</text>
<text x="120" y="299" font-size="11" font-style="italic">Temps zéro</text>
<text x="624" y="187" font-size="11" font-style="italic">Ligne de base</text>
<text x="305" y="116" font-size="12">La learning curve</text>
<text x="305" y="136" font-size="12">La taxe de vérification</text>
<text x="305" y="156" font-size="12">L'adaptation du pipeline</text>
<text x="548" y="100" font-size="12">Croissance exponentielle</text>
<text x="305" y="301" font-size="11" font-style="italic">où en est votre équipe ?</text>
<text x="385" y="328" font-size="13" font-style="italic">Un creux à financer, pas un échec à stopper.</text>
</g>
</svg>
<p>Le piège, c'est le creux. Le rapport est très clair là-dessus : <strong>la plupart des initiatives IA n'échouent pas parce que la techno est mauvaise, mais parce que la direction prend le creux pour un échec et coupe le financement au pire moment.</strong> Jean-Rémy Revy résumait exactement ça sur LinkedIn : la J-Curve "matérialise le fait que l'investissement initial fait souvent perdre un peu en performance, puis finit par se rattraper". Si vous lancez l'IA dans votre organisation, vous signez pour ce creux. Autant le savoir, et le budgéter.</p>
<blockquote><p>"Le creux n'est pas un signal d'échec. C'est le ticket d'entrée."</p></blockquote>
<p>Au passage : la "taxe de vérification", c'est exactement ce que mon panel de sous-agents personas paie de façon délibérée. Plutôt que de laisser la charge de revue se diluer dans les vendredis après-midi, on la concentre dans un dispositif explicite. La taxe existe — DORA a raison — la question est de savoir si on la paie en pleine conscience ou si elle nous saigne en silence.</p>

<h2>Le calcul de ROI, et le chiffre auquel je ne crois pas</h2>
<p>Le cœur du rapport, c'est un modèle de calcul du ROI, avec un exemple chiffré. Une organisation de 500 personnes, 100 M$ de revenu produit. Investissement la première année : 8,4 M$. Valeur générée : 11,6 M$. ROI première année : <strong>39 %</strong>. Retour sur investissement en huit mois. Et, cerise sur le gâteau, "les clients Google Cloud constatent en moyenne 727 % de ROI sur trois ans".</p>
<p>Voilà. Maintenant, pourquoi je ne crois pas à ce chiffre.</p>
<p>Sur les 11,6 M$ de valeur, <strong>11 M$ viennent d'un seul levier</strong> : la "capacité de réinvestissement RH". En clair : on suppose que chaque développeur gagne 12,5 % de son temps (environ une heure par jour) et on valorise cette heure au coût salarial chargé. Tout le ROI tient à deux hypothèses empilées : (a) ce gain de temps de 12,5 % est réel, et (b) cette heure est <em>effectivement</em> reconvertie en valeur. À 100 %. Or une heure "gagnée" a une fâcheuse tendance à se faire avaler par les réunions, le changement de contexte… ou par la taxe de vérification elle-même. Si la conversion réelle est de 50 %, le ROI est divisé par deux.</p>
<p>Quant aux 727 % sur trois ans : ce sont des clients Google Cloud, qui sont restés trois ans chez Google Cloud, et qui ont accepté d'être mesurés. Biais de survie intégral. Les "78 % de dirigeants qui constatent un retour", les "88 % d'adopteurs de l'agentique aux retours positifs" : de l'auto-déclaration de cadres, pas des métriques de delivery.</p>
<p>Le plus honnête dans tout ça, c'est que <strong>le rapport le dit lui-même.</strong> Il qualifie ses propres chiffres d'"estimation à forte incertitude" destinée "à lancer une conversation", et cite la formule classique : "tous les modèles sont faux". Donc je le prends au mot. Ce qui est utile dans ce chapitre, ce n'est pas le 39 %. C'est la <em>structure</em> : la formule, les leviers de valeur, la liste des coûts qu'on oublie toujours — dont une ligne "coût de la J-Curve" que personne ne met jamais au budget. Le livrable, c'est la méthode. Le pourcentage, c'est de la décoration.</p>
<blockquote><p>"Endossez le cadre de raisonnement. Refusez le chiffre précis."</p></blockquote>

<h2>Le vrai problème, c'est la mesure</h2>
<p>C'est le point qu'a soulevé Robert Schrader sur LinkedIn, et il a raison de le mettre en avant. Le rapport vous donne des formules — mais une formule de ROI a besoin de deux choses : une <strong>baseline</strong> (l'"avant") et une <strong>cible</strong> (l'"après"), toutes deux fondées sur de vraies métriques de delivery.</p>
<p>Et là, ça se complique. Obtenir des chiffres fiables est "particulièrement difficile dans les organisations hétérogènes", avec des paysages applicatifs fragmentés, des chaînes d'outillage disparates, et des sources de revenu autres qu'un produit logiciel ou de l'e-commerce. DORA prévient d'ailleurs que ces métriques doivent être appliquées <em>en contexte</em>, au niveau de l'application ou du service — comparer deux systèmes très différents ne veut rien dire.</p>
<p>Traduction : la moitié des entreprises qui voudront calculer leur ROI IA n'ont pas de baseline. Elles n'ont jamais mesuré leur lead time, leur fréquence de déploiement, leur taux d'échec de changement <em>avant</em>. Sans cet "avant", la J-Curve est invisible : on ne peut pas prouver une remontée qu'on n'a pas su mesurer descendre.</p>
<p>Jean-Rémy Revy l'a formulé d'une phrase que je garde : <strong>"Pas de ROI sans l'adoption d'un cadre de travail méthodologique adéquat et d'un outillage de contrôle aligné."</strong> C'est tout le sujet. Le rapport vend un calcul ; le calcul suppose une discipline de mesure que la plupart des organisations n'ont pas. Le ROI de l'IA est, d'abord, un problème d'instrumentation.</p>

<h2>Les conclusions qui n'arrangent personne</h2>
<p>Deux résultats du rapport ne flattent personne — et ce sont, justement, les plus crédibles.</p>
<p><strong>Premier : l'IA aide beaucoup moins sur le code que vous maintenez vraiment.</strong> Les recherches citées (Stanford) donnent 35 à 40 % de gain de productivité sur des tâches simples, en greenfield. Sur du code legacy, complexe, brownfield ? <strong>10 % ou moins.</strong> Pour quelqu'un comme moi, qui travaille sur du logiciel de santé régulé, vieux de plusieurs années, c'est le seul chiffre qui compte. Le "40 %" qui fait les titres décrit un terrain vierge. Le vrai métier, lui, se passe dans le code qui existe déjà — et là, le gain est honnête mais modeste.</p>
<p><strong>Deuxième, et plus inconfortable encore : l'adoption de l'IA est associée à une hausse de l'instabilité du delivery.</strong> Dans la recherche DORA 2025, plus d'IA va de pair avec un taux d'échec de changement qui monte. L'exemple chiffré du rapport l'intègre : le taux passe de 5 % à 6 %, et ça coûte 344 000 $ de "taxe d'instabilité". Le delta paraît petit. Le fait, lui, ne l'est pas : <strong>un éditeur qui vend des outils d'IA admet noir sur blanc que sa techno, mal encadrée, dégrade la stabilité.</strong> C'est probablement la phrase la plus crédible du document — parce qu'elle survit au filtre de l'intérêt commercial. Quand un vendeur dit quelque chose contre son intérêt, on écoute.</p>

<h2>Ne licenciez pas</h2>
<p>Le rapport est ferme sur un point, et je veux le souligner parce que c'est le plus important : <strong>ne réduisez pas les effectifs.</strong> La productivité gagnée ne doit pas servir à licencier ; elle doit libérer de la capacité pour l'innovation.</p>
<p>Pour une fois, l'argument n'est pas moral, il est financier — et imparable. Le modèle de ROI du rapport repose presque entièrement sur la "capacité de réinvestissement RH". Si vous licenciez les gens, vous supprimez la plus grosse ligne de votre propre dossier de ROI. Vous détruisez la valeur que vous prétendiez créer. Et vous la détruisez précisément au creux de la J-Curve — c'est-à-dire en virant les gens qui paient la taxe de vérification et encaissent la learning curve, juste avant la remontée.</p>
<p>Le rapport reformule le ROI d'une façon que je trouve juste : ce n'est plus "combien de développeurs je peux remplacer", mais combien de créativité humaine latente on peut libérer en déchargeant les agents de la corvée systémique.</p>
<blockquote><p>"On ne mesure pas l'IA au code qu'elle écrit, mais aux goulots d'étranglement qu'elle dégage."</p></blockquote>
<p>Dans mon équipe, sur six mois, l'effectif n'a pas baissé. Il a <em>augmenté</em> — stagiaires et alternants compris. On livre plus, on dort mieux, et personne n'a été remplacé par une machine. Le rapport décrit, en langage de cabinet de conseil, exactement ce que j'ai vu se passer.</p>

<h2>Ce qui reste aux humains</h2>
<p>Comme dans chaque article de cette série, la partie honnête. Beaucoup de choses ne sont pas dans ce rapport — ou y sont, mais restent entre nos mains.</p>
<p><strong>Lire le rapport en sceptique.</strong> Personne ne le fera à votre place. Un document publié par un fournisseur, avec un calculateur fourni par le même fournisseur, se lit une main sur le portefeuille. Pas avec mépris — DORA mérite une lecture sérieuse — mais avec discernement.</p>
<p><strong>Construire et tenir la baseline.</strong> L'outillage de mesure, le cadre méthodologique dont parle Revy : ça ne s'achète pas, ça se construit. C'est un travail d'ingénierie, lent, peu glamour, et c'est le préalable à tout calcul de ROI sérieux.</p>
<p><strong>Reconvertir le temps gagné.</strong> L'heure libérée ne se transforme pas toute seule en valeur. Quelqu'un doit décider, délibérément, qu'elle ira dans les tests, dans le métier, dans l'innovation — et pas dans une réunion de plus. Le 11 M$ du modèle n'existe que si cette décision est prise, et tenue.</p>
<p><strong>Tenir l'architecture et décider quoi construire.</strong> Aucun agent n'a la lecture stratégique d'un produit. Le cadre que l'IA amplifie, c'est nous qui l'écrivons.</p>

<h2>Que faire lundi matin</h2>
<p>Si vous dirigez une équipe et que vous voulez tirer quelque chose de concret de ce rapport, voici l'ordre que je conseillerais :</p>
<ol>
<li><strong>Mesurez votre baseline DORA maintenant.</strong> Lead time, fréquence de déploiement, taux d'échec de changement, temps de restauration. Avant d'ajouter la moindre IA. Sans l'"avant", vous ne prouverez jamais l'"après".</li>
<li><strong>Mettez la J-Curve au budget.</strong> Une ligne explicite "coût de transformation", avec une durée annoncée. Et faites pré-valider à la direction l'engagement de ne pas couper le financement pendant le creux.</li>
<li><strong>Suivez les indicateurs avancés, pas le ROI.</strong> La fréquence d'expérimentation et les métriques de delivery vous diront en semaine 3 si vous êtes sur la courbe. Le ROI, c'est une histoire à huit mois — trop tard pour corriger le tir.</li>
<li><strong>Auditez votre couche de contexte.</strong> Votre plateforme interne est-elle un vrai produit ? Vos données sont-elles accessibles à l'IA ? Si la réponse est non, c'est <em>là</em> qu'est la dépense — pas dans plus de licences.</li>
<li><strong>Faites tourner le calculateur avec VOS chiffres.</strong> En trois scénarios : conservateur, réaliste, optimiste. Le livrable, c'est la fourchette et la discipline de l'exercice. Pas le pourcentage que vous montrerez en COPIL.</li>
</ol>

<h2>Conclusion</h2>
<p>Il y a six mois, j'ai écrit un retour de terrain et je l'ai terminé par : "si vous pensiez que je faisais de la théorie — non." Aujourd'hui, une équipe de recherche externe, sans le moindre intérêt à me flatter et qui n'a évidemment jamais lu mon blog, publie le même diagnostic. Ce n'est pas une revanche. C'est une <em>convergence</em> — et une convergence vaut plus qu'une revanche, parce qu'elle vient d'ailleurs.</p>
<p>Le diagnostic du rapport est solide : l'IA est un amplificateur, la J-Curve est réelle, les fondations passent avant l'outil, et le code reste un passif. L'arithmétique, elle, est une amorce de conversation — pas une promesse. Lisez le rapport pour le cadre. Faites tourner le calculateur pour la discipline d'y mettre vos propres chiffres. Et oubliez le 39 %.</p>
<p>Une dernière question, la seule qui compte vraiment : <strong>sur quelle partie de la courbe est votre équipe, en ce moment ?</strong> Si vous ne savez pas répondre, ce n'est pas grave — ça veut juste dire que vous n'avez pas de baseline. Commencez par là. Le reste suivra.</p>
<p><strong>Lire la suite de la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">Le SDLC est mort</a> — pourquoi le processus a toujours été du gaspillage. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coder n'a jamais été le métier</a> — ce que devient l'ingénieur quand la syntaxe disparaît. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">L'IA est devenue un réflexe d'équipe</a> — à quoi ressemble une équipe IA-native un mardi.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://dora.dev/ai/roi/report/">DORA — The ROI of AI-assisted Software Development</a> : le rapport complet (v. 2026.1), publié par l'équipe DORA de Google Cloud et la practice de conseil "delta".</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://dora.dev/ai/roi/calculator/">DORA — ROI of AI calculator</a> : le calculateur interactif qui accompagne le rapport, pour rejouer le modèle avec ses propres hypothèses.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://dora.dev/dora-report-2025">DORA — 2025 State of AI-assisted Software Development</a> : la recherche d'où viennent les effets mesurés de l'IA, dont la hausse de l'instabilité du delivery.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://dora.dev/research/publications/">DORA — Publications &amp; AI Capabilities Model</a> : le modèle des capacités sur lequel s'appuie le rapport ROI.</li>
</ul>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'DoraAiRoiReport',
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
