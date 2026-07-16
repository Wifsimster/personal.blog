<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'ai-agents-h1-2026-verdict',
  date: '2026-07-16',
  tags: ['Software', 'AI', 'Opinion', 'Analysis']
}

const englishContent: PostContent = {
  title: 'Six Months of Agents: I Graded My Own Predictions',
  description: 'Since January 2026, agent automation climbed in visible steps. Six months after my AI-series predictions, I grade my own homework: four of five calls got stronger, one needs a correction — the dip is now measured, the climb is not yet.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Between March and May I made five calls in this series — the SDLC was always waste, AI is an amplifier and not a coder-replacement, the J-curve is real, there is a verification tax, the coder becomes an engineer. Six months of 2026 evidence are now in, so instead of predicting again I grade my own homework. Four of the five calls got <em>stronger</em>. One needs a correction: I was more sure of the second half of the J-curve than the evidence yet supports. The models' <em>reach</em> grew a lot; their <em>reliability at long horizons</em> did not grow at the same rate — and that gap is exactly the verification tax I named, now with numbers.</p></div>
<hr>
<p>I researched this piece the way my team now works: a panel of specialist sub-agents fanned out across the web in parallel, then an independent fact-check pass tried to refute every number before I would write it down. That method caught me about to attribute a set of headline statistics to the wrong report — more on that below. It is worth saying up front, because the article is partly <em>about</em> that method becoming a product this half-year.</p>
<p>So: six months ago I was writing predictions from inside one team, with almost no external data. Now there is data. Some of it flatters me. Some of it doesn't. Let's grade honestly.</p>

<h2>The staircase of six months</h2>
<p>The paradigm did not arrive in one jump. It arrived as a staircase — a new frontier model roughly every six to ten weeks, each one shipping a little more autonomy, and the headline feature quietly shifting from "smarter" to "checks its own work".</p>
<svg viewBox="0 0 800 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="From January to July 2026, the announced capability of agents climbs in successive steps — task-horizon doubling, SWE-bench Verified retired, self-verification sold as a feature, parallel sub-agents, the review tax quantified, +24% merged PRs — while the gain actually measured on legacy code stays low, around 10%. The gap between the two is the verification tax." class="diagram-svg">
<text x="64" y="34" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">WHAT WAS ANNOUNCED  vs  WHAT WAS MEASURED · 2026</text>
<g fill="none" stroke="currentColor" stroke-opacity="0.32" stroke-width="1.5">
<line x1="64" y1="54" x2="64" y2="350"></line>
<line x1="64" y1="350" x2="728" y2="350"></line>
</g>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="76" y="298" width="96" height="52" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="184" y="266" width="96" height="84" rx="8" fill="currentColor" fill-opacity="0.13"></rect>
<rect x="292" y="230" width="96" height="120" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="400" y="192" width="96" height="158" rx="8" fill="currentColor" fill-opacity="0.15"></rect>
<rect x="508" y="150" width="96" height="200" rx="8" fill="currentColor" fill-opacity="0.16"></rect>
<rect x="616" y="108" width="96" height="242" rx="8" fill="currentColor" fill-opacity="0.17"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" text-anchor="middle">
<text x="124" y="256" font-size="10" opacity="0.55" letter-spacing="0.1em">JAN</text>
<text x="124" y="274" font-size="12.5" font-weight="650">Horizon 2×/</text>
<text x="124" y="290" font-size="12.5" font-weight="650">4 months</text>
<text x="232" y="224" font-size="10" opacity="0.55" letter-spacing="0.1em">FEB</text>
<text x="232" y="242" font-size="12.5" font-weight="650">SWE-bench</text>
<text x="232" y="258" font-size="12.5" font-weight="650">Verified retired</text>
<text x="340" y="188" font-size="10" opacity="0.55" letter-spacing="0.1em">APR</text>
<text x="340" y="206" font-size="12.5" font-weight="650">Opus 4.7:</text>
<text x="340" y="222" font-size="12.5" font-weight="650">self-check</text>
<text x="448" y="150" font-size="10" opacity="0.55" letter-spacing="0.1em">MAY</text>
<text x="448" y="168" font-size="12.5" font-weight="650">Sub-agents</text>
<text x="448" y="184" font-size="12.5" font-weight="650">1000 / run</text>
<text x="556" y="108" font-size="10" opacity="0.55" letter-spacing="0.1em">JUN</text>
<text x="556" y="126" font-size="12.5" font-weight="650">The tax,</text>
<text x="556" y="142" font-size="12.5" font-weight="650">quantified</text>
<text x="664" y="66" font-size="10" opacity="0.55" letter-spacing="0.1em">JUL</text>
<text x="664" y="84" font-size="12.5" font-weight="650">+24% PRs,</text>
<text x="664" y="100" font-size="12.5" font-weight="650">not value</text>
</g>
<path d="M 76 330 C 220 324 360 306 470 292 C 560 281 650 262 712 252" fill="none" stroke="currentColor" stroke-width="2" stroke-opacity="0.5" stroke-dasharray="5,4" stroke-linecap="round"></path>
<circle cx="712" cy="252" r="3.5" fill="currentColor" fill-opacity="0.75"></circle>
<text x="470" y="322" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" font-style="italic" opacity="0.7" text-anchor="middle">measured on legacy: ≤ 10%</text>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 712 108 L 740 108 M 712 252 L 740 252" stroke-dasharray="3,3"></path>
<path d="M 736 108 L 740 108 L 740 252 L 736 252"></path>
</g>
<text x="758" y="180" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle" transform="rotate(-90 758 180)">the verification tax</text>
<g font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" fill="currentColor">
<rect x="76" y="386" width="13" height="13" rx="3" fill="currentColor" fill-opacity="0.5" stroke="none"></rect>
<text x="96" y="396" opacity="0.75">announced</text>
<line x1="196" y1="393" x2="228" y2="393" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" stroke-dasharray="5,4" stroke-linecap="round"></line>
<text x="236" y="396" opacity="0.75">measured (METR · DORA · Stanford)</text>
</g>
</svg>
<p>Read left to right, that is the honest chronology of the half-year:</p>
<ul>
<li><strong>January</strong> — METR's Time Horizon update: the length of task an agent finishes with 50% reliability is now doubling roughly every four months, versus a full-period rate closer to seven. The <em>shape</em> is the signal, and it points straight up.</li>
<li><strong>February</strong> — OpenAI stopped reporting SWE-bench Verified, saying it "no longer measures frontier coding capabilities". In an audit, a majority of a sampled set of failed tasks turned out to have broken tests. The benchmark everyone had been quoting was retired by one of the labs quoting it.</li>
<li><strong>April</strong> — Opus 4.7 arrives, and its marquee pitch is <em>rigor</em>: Anthropic says the model devises its own verification steps before declaring a task done. Self-checking became a selling point.</li>
<li><strong>May</strong> — Opus 4.8, and with it Claude Code "dynamic workflows": a re-runnable script fans work across up to a thousand agents per run (about sixteen at a time), keeping intermediate results out of the model's context. My persona-panel method, industrialized. In the same window, the Model Context Protocol went stateless — fleets of agents became a load-balancer problem, not a demo.</li>
<li><strong>June</strong> — the review side finally got numbers (below).</li>
<li><strong>July</strong> — the largest real-org study of the period lands, and its headline is a throughput number with a warning label attached.</li>
</ul>
<p>The steps are real and they climb fast. Now look at the dashed line underneath — the gain actually measured on the kind of code most of us maintain. It barely moves. The distance between the staircase and that line is the whole story.</p>

<h2>Measured vs. sold</h2>
<p>Here is the discipline this series lives by: separate what was measured from what was modeled or claimed. Applied to the last six months, the split is stark.</p>
<p><strong>The strongest independent measurement of the period is a slowdown.</strong> METR's randomized trial — experienced open-source developers, working in repositories they had known for years — found that early-2025 AI tools made them <strong>19% slower</strong>, while they believed they had been sped up by about 20%. A roughly forty-point gap between felt and real, and the slowdown was invisible to the person living it. The confidence interval was wide, and METR has since said its follow-up experiment is too contaminated by selection effects to give a clean successor number. Which is the honest headline: the best rigorous measurement we have is a brownfield slowdown, and the optimistic side is still self-report.</p>
<p><strong>The greenfield/brownfield gap did not close.</strong> Stanford's productivity research — presented at conferences this year, not yet peer-reviewed, and the source DORA's 2026 report leans on — puts the gain on simple greenfield work at 30–40%, and on complex brownfield code at <strong>0–10%</strong>. That ≤10% survived Opus 4.8 and GPT-5.6. A new frontier model every six weeks did not move the number that describes my job. For a regulated healthcare codebase several years old, that is the only number that was ever going to matter.</p>
<p><strong>The verification tax is now in the telemetry — and this is where my sub-agents caught me.</strong> I was about to write that DORA measured a set of eye-watering deltas. It didn't. Those numbers — median PR review time up <strong>441%</strong>, incidents per PR up 243%, bugs per developer up 54% — come from <strong>Faros AI's "Acceleration Whiplash" report</strong> (around 22,000 developers), not from DORA. DORA's contribution is the framework and its "instability tax"; Faros supplies the deltas. Two different reports, and conflating them is exactly the vendor-sloppiness I promised never to commit. Separately, LinearB — across 8.1 million pull requests — found AI-authored PRs accepted at <strong>32.7%</strong> versus 84.4% for human ones, with agentic PRs sitting in the queue <strong>5.3× longer</strong>. The bottleneck moved from writing code to deciding whether code is safe to merge. That is the verification tax with a price tag.</p>
<blockquote><p>"The benchmark everyone quoted was retired by the lab that quoted it. Endorse the trend. Refuse the leaderboard."</p></blockquote>
<p><strong>What the vendors sell, meanwhile, is throughput.</strong> The largest real-org study — Microsoft, tens of thousands of engineers — found adopters merged an estimated <strong>24% more pull requests</strong>. Genuinely positive, and I won't wave it away. But the paper itself says the quiet part: "a merged PR is not the same as the value it delivers." It measured the exact metric the verification tax inflates. More PRs merged is not more value shipped, and the gap between those two sentences is where a whole year of nuance lives.</p>

<h2>The scorecard</h2>
<p>Five calls, graded against six months of evidence.</p>
<table>
<thead><tr><th>The call (Mar–May)</th><th>Grade</th><th>Why</th></tr></thead>
<tbody>
<tr><td><strong>The SDLC is dead</strong></td><td>Holds, amended</td><td>The ceremony died; a verification gate was born. Process didn't shrink — its center of gravity moved from writing to reviewing.</td></tr>
<tr><td><strong>AI is an amplifier</strong></td><td>Confirmed</td><td>Throughput up, quality costs compounding underneath. MIT found 95% of GenAI pilots delivered no measurable P&amp;L impact — an amplifier of the surrounding system, exactly as claimed.</td></tr>
<tr><td><strong>The J-curve is real</strong></td><td>Needs correction</td><td>The dip is now measured. The climb above baseline is not — it rests on self-report. See below.</td></tr>
<tr><td><strong>There is a verification tax</strong></td><td>Confirmed, quantified</td><td>Review time and queue latency up sharply (Faros, LinearB); full delegation stuck at 0–20% of tasks; and self-checking is now literally sold as a model feature.</td></tr>
<tr><td><strong>The coder becomes an engineer</strong></td><td>Confirmed</td><td>The frontier work of the half-year is orchestration — writing the harness, wiring the tools, grading the agents. Not typing syntax.</td></tr>
</tbody>
</table>

<h2>The one correction I owe myself</h2>
<p>In the DORA piece I described a dip that gives way to a climb, and I drew the curve rising confidently past its starting point. Six months on, I can prove the first half of that sentence and not the second.</p>
<p>The dip is measured, from several directions: METR's −19%, the ≤10% brownfield ceiling, the review-tax telemetry. But the climb — the part where value rises above where you started — is still mostly <em>self-reported</em>. METR's own 2026 survey finds developers claiming a 1.4–2× gain, and METR itself warns that figure overstates value. The Microsoft study offers a real number, but on a throughput proxy. Nobody has yet published a clean, measured, net-of-review-cost gain on complex legacy work. So the correction is this: <strong>reach outran reliability.</strong> The task horizon climbed faster than I'd have guessed — but reliability <em>at</em> that horizon did not keep pace, and I let the shape of the J make me more confident about the upswing than the data earns. The J is real. I've watched exactly one half of it in the numbers.</p>
<blockquote><p>"I can prove the dip. I can't yet prove the climb. That's the honest state of the art."</p></blockquote>

<h2>The ceiling nobody sells you</h2>
<p>There's a reason the climb is hard, and it isn't a lack of model intelligence. It's arithmetic. An agent that is 95% reliable at each step succeeds at a 20-step task about <strong>36%</strong> of the time, and at a 50-step task about <strong>7%</strong>. Reliability compounds multiplicatively, so long-horizon autonomy collapses well below the demo reel — and the only thing standing between that collapse and your production branch is verification. Independent work on "context rot" shows the same models degrading sharply once a run stretches past a few hundred thousand tokens, which is the mechanism by which long agent runs quietly go wrong.</p>
<p>And a new cost showed up that none of the March predictions named: <strong>security became structural.</strong> Prompt injection is now discussed as a permanent property of agents rather than a patchable bug; high-severity CVEs landed in the exact tools we use; and Anthropic disclosed a state-linked group that hijacked Claude Code instances to run largely-autonomous espionage. The ceremony that died is being replaced by a discipline that is being born — provenance, sandboxing, agent verification. That is not a contradiction of "the SDLC is dead". It's the new gate the old one always deserved.</p>

<h2>What still belongs to humans</h2>
<p>As in every piece in this series, the honest list — what six months of progress did <em>not</em> take off our plates.</p>
<p><strong>Deciding whether the code is safe to merge.</strong> This is the tax, and it did not get cheaper — it got bigger, and it moved to the front of the pipeline. The 32.7% acceptance rate is a human saying "no" thousands of times a day. That judgment is the job now.</p>
<p><strong>Reading the vendor number as a skeptic.</strong> A benchmark got retired by its own promoters this year. Two reports got conflated in my own draft until a checker caught it. Nobody automates the incentive filter for you.</p>
<p><strong>Absorbing the brownfield reality.</strong> The ≤10% ceiling is where regulated, legacy, consequential software lives. No release this half-year moved it. The person who understands the system's implicit contracts is still the one who ships safely.</p>
<p><strong>Keeping the people.</strong> Klarna spent the year quietly rebuilding the human capacity it had cut, after quality fell. The financial argument hasn't changed: the value moved <em>to</em> the humans who can specify, orchestrate, and verify fleets of agents. Delete them and you delete your own return — right at the bottom of the curve, where the tax is highest. On my team, over six months, headcount grew again. Nobody was replaced by a machine.</p>

<h2>What to do Monday morning</h2>
<p>If you lead a team and want something concrete out of this checkpoint:</p>
<ol>
<li><strong>Budget the review gate, not just the licenses.</strong> If your agents ship more PRs, someone reviews more PRs. Staff and measure that capacity <em>before</em> you scale generation, or the queue becomes your real bottleneck.</li>
<li><strong>Measure your own net gain on real tickets.</strong> Not greenfield demos — the legacy work you actually maintain, net of rework and review. That number is yours, and it's the only one that isn't a vendor's.</li>
<li><strong>Keep batches small.</strong> The compounding-error math is unforgiving: shorter agent runs with human checkpoints beat one heroic 50-step delegation every time. Design for verification, not for autonomy theatre.</li>
<li><strong>Treat agent security as production security.</strong> Prompt injection, tool permissions, provenance. If an agent can run a command, assume a hostile input can too. Sandbox accordingly.</li>
<li><strong>Retire your dead benchmarks.</strong> If OpenAI dropped SWE-bench Verified, your internal "the model scores X" slide is probably stale too. Trust the trend and your own repository, nothing on a leaderboard.</li>
</ol>

<h2>Where this leaves the series</h2>
<p>Six months ago I was predicting from inside one team. Today, external measurement has caught up — and mostly it agrees with what my team lived, which is a strange and useful feeling. Four calls got stronger; one got honestly corrected. The agents got a longer horizon, not a shorter leash. The reach is real. The reliability at that reach is the work still in front of us — and that work, for now, belongs to us.</p>
<p>The next checkpoint writes itself: when someone finally publishes a clean, measured, net-of-verification climb on complex legacy code, I'll grade that call again. Until then, the dip is proven and the climb is a promise. Know which half you're standing in.</p>
<p><strong>Read the rest of the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">The SDLC Is Dead</a> — why the process was always waste. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coding Was Never the Job</a> — what the engineer becomes when the syntax disappears. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">AI Became a Team Reflex</a> — what an AI-native team looks like on a Tuesday. <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA Just Confirmed What My Team Already Lived</a> — the report that named the J-curve I'm now correcting.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://metr.org/blog/2026-1-29-time-horizon-1-1/">METR — Measuring AI Ability to Complete Long Tasks (Time Horizon 1.1)</a>: the ~4-month doubling of the 50%-reliability task horizon.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2507.09089">METR — Impact of Early-2025 AI on Experienced Open-Source Developer Productivity</a>: the randomized trial that measured a 19% slowdown alongside a 20% <em>felt</em> speedup.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/">OpenAI — Why we no longer evaluate SWE-bench Verified</a>: the benchmark retirement, contamination and broken tests.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://softwareengineeringproductivity.stanford.edu/ai-impact">Stanford — Software Engineering Productivity research (Denisov-Blanch)</a>: the greenfield-vs-brownfield gradient, cited by DORA.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://dora.dev/ai/roi/report/">DORA — The ROI of AI-assisted Software Development (2026)</a>: the amplifier framing, the instability tax, the ≤10% brownfield figure.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.faros.ai/blog/ai-software-engineering">Faros AI — The Acceleration Whiplash (2026)</a>: the delivery-telemetry deltas (review time, incidents, bugs) — <em>not</em> DORA's numbers.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://linearb.io/resources/software-engineering-benchmarks-report">LinearB — 2026 Software Engineering Benchmarks</a>: AI-PR acceptance 32.7% vs 84.4%, and the 5.3× agentic-PR queue latency.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2607.01418">Murphy-Hill et al. — Adoption and Impact of Command-Line AI Coding Agents (Microsoft, 2026)</a>: the ~24% more merged PRs, and the "a merged PR is not the value" caveat.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/">Model Context Protocol — 2026 release</a>: the stateless core that turned agent fleets into infrastructure.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://code.claude.com/docs/en/workflows">Claude Code — Dynamic Workflows</a>: deterministic fan-out across up to 1,000 agents per run (~16 concurrent).</li>
</ul>`
}

const frenchContent: PostContent = {
  title: 'Six mois d\'agents : j\'ai corrigé ma propre copie',
  description: 'Depuis janvier 2026, l\'automatisation par agents a progressé par paliers. Six mois après mes prédictions de la série IA, je corrige ma propre copie : quatre paris sur cinq se confirment, un seul demande une correction — le creux est mesuré, la remontée, pas encore.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Entre mars et mai, j'ai fait cinq paris dans cette série — le SDLC a toujours été du gaspillage, l'IA est un amplificateur et non un remplaçant du codeur, la courbe en J est réelle, il existe une taxe de vérification, le codeur devient ingénieur. Six mois de données 2026 sont tombés, alors au lieu de prédire encore, je corrige ma propre copie. Quatre paris sur cinq se sont <em>renforcés</em>. Un seul demande une correction : j'étais plus sûr de la seconde moitié de la courbe en J que les données ne le permettent. La <em>portée</em> des modèles a beaucoup grimpé ; leur <em>fiabilité sur les longs horizons</em>, non — et cet écart, c'est exactement la taxe de vérification que j'avais nommée, désormais chiffrée.</p></div>
<hr>
<p>J'ai préparé cet article comme mon équipe travaille aujourd'hui : un panel de sous-agents spécialistes a ratissé le web en parallèle, puis une passe de vérification indépendante a tenté de réfuter chaque chiffre avant que je l'écrive. Cette méthode m'a rattrapé au moment où j'allais attribuer une série de statistiques marquantes au mauvais rapport — j'y reviens. Ça vaut la peine de le dire d'entrée, parce que l'article parle en partie de cette méthode <em>devenue un produit</em> ce semestre.</p>
<p>Donc : il y a six mois, j'écrivais des prédictions depuis l'intérieur d'une équipe, sans presque aucune donnée externe. Maintenant, il y a des données. Certaines me flattent. D'autres non. Corrigeons honnêtement.</p>

<h2>L'escalier des six mois</h2>
<p>Le paradigme n'est pas arrivé d'un bond. Il est arrivé en escalier — un nouveau modèle de pointe toutes les six à dix semaines environ, chacun livrant un peu plus d'autonomie, et l'argument phare glissant discrètement de "plus intelligent" à "vérifie son propre travail".</p>
<svg viewBox="0 0 800 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="De janvier à juillet 2026, la capacité annoncée des agents grimpe par paliers successifs — l'horizon de tâche qui double, SWE-bench Verified retiré, l'auto-vérification vendue comme fonctionnalité, les sous-agents en parallèle, la taxe de revue chiffrée, +24% de PR fusionnées — tandis que le gain réellement mesuré sur du code legacy reste bas, autour de 10%. L'écart entre les deux, c'est la taxe de vérification." class="diagram-svg">
<text x="64" y="34" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">CE QUI EST ANNONCÉ  vs  CE QUI EST MESURÉ · 2026</text>
<g fill="none" stroke="currentColor" stroke-opacity="0.32" stroke-width="1.5">
<line x1="64" y1="54" x2="64" y2="350"></line>
<line x1="64" y1="350" x2="728" y2="350"></line>
</g>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="76" y="298" width="96" height="52" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="184" y="266" width="96" height="84" rx="8" fill="currentColor" fill-opacity="0.13"></rect>
<rect x="292" y="230" width="96" height="120" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="400" y="192" width="96" height="158" rx="8" fill="currentColor" fill-opacity="0.15"></rect>
<rect x="508" y="150" width="96" height="200" rx="8" fill="currentColor" fill-opacity="0.16"></rect>
<rect x="616" y="108" width="96" height="242" rx="8" fill="currentColor" fill-opacity="0.17"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" text-anchor="middle">
<text x="124" y="256" font-size="10" opacity="0.55" letter-spacing="0.1em">JANV.</text>
<text x="124" y="274" font-size="12.5" font-weight="650">Horizon ×2</text>
<text x="124" y="290" font-size="12.5" font-weight="650">tous les 4 mois</text>
<text x="232" y="224" font-size="10" opacity="0.55" letter-spacing="0.1em">FÉVR.</text>
<text x="232" y="242" font-size="12.5" font-weight="650">SWE-bench</text>
<text x="232" y="258" font-size="12.5" font-weight="650">Verified retiré</text>
<text x="340" y="188" font-size="10" opacity="0.55" letter-spacing="0.1em">AVR.</text>
<text x="340" y="206" font-size="12.5" font-weight="650">Opus 4.7 :</text>
<text x="340" y="222" font-size="12.5" font-weight="650">auto-vérif</text>
<text x="448" y="150" font-size="10" opacity="0.55" letter-spacing="0.1em">MAI</text>
<text x="448" y="168" font-size="12.5" font-weight="650">Sous-agents</text>
<text x="448" y="184" font-size="12.5" font-weight="650">1000 / run</text>
<text x="556" y="108" font-size="10" opacity="0.55" letter-spacing="0.1em">JUIN</text>
<text x="556" y="126" font-size="12.5" font-weight="650">La taxe,</text>
<text x="556" y="142" font-size="12.5" font-weight="650">chiffrée</text>
<text x="664" y="66" font-size="10" opacity="0.55" letter-spacing="0.1em">JUIL.</text>
<text x="664" y="84" font-size="12.5" font-weight="650">+24% de PR,</text>
<text x="664" y="100" font-size="12.5" font-weight="650">pas de valeur</text>
</g>
<path d="M 76 330 C 220 324 360 306 470 292 C 560 281 650 262 712 252" fill="none" stroke="currentColor" stroke-width="2" stroke-opacity="0.5" stroke-dasharray="5,4" stroke-linecap="round"></path>
<circle cx="712" cy="252" r="3.5" fill="currentColor" fill-opacity="0.75"></circle>
<text x="470" y="322" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" font-style="italic" opacity="0.7" text-anchor="middle">mesuré sur du legacy : ≤ 10%</text>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 712 108 L 740 108 M 712 252 L 740 252" stroke-dasharray="3,3"></path>
<path d="M 736 108 L 740 108 L 740 252 L 736 252"></path>
</g>
<text x="758" y="180" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle" transform="rotate(-90 758 180)">la taxe de vérification</text>
<g font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" fill="currentColor">
<rect x="76" y="386" width="13" height="13" rx="3" fill="currentColor" fill-opacity="0.5" stroke="none"></rect>
<text x="96" y="396" opacity="0.75">annoncé</text>
<line x1="196" y1="393" x2="228" y2="393" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" stroke-dasharray="5,4" stroke-linecap="round"></line>
<text x="236" y="396" opacity="0.75">mesuré (METR · DORA · Stanford)</text>
</g>
</svg>
<p>De gauche à droite, voici la chronologie honnête du semestre :</p>
<ul>
<li><strong>Janvier</strong> — la mise à jour Time Horizon de METR : la durée de tâche qu'un agent termine avec 50 % de fiabilité double désormais environ tous les quatre mois, contre un rythme historique plus proche de sept. La <em>forme</em> est le signal, et elle pointe droit vers le haut.</li>
<li><strong>Février</strong> — OpenAI cesse de publier ses scores SWE-bench Verified, estimant que le benchmark "ne mesure plus les capacités de pointe". À l'audit, une majorité d'un échantillon de tâches échouées se révèle avoir des tests cassés. Le benchmark que tout le monde citait a été retiré par l'un des labos qui le citaient.</li>
<li><strong>Avril</strong> — Opus 4.7 arrive, et son argument phare, c'est la <em>rigueur</em> : Anthropic dit que le modèle conçoit ses propres étapes de vérification avant de déclarer une tâche terminée. L'auto-contrôle est devenu un argument de vente.</li>
<li><strong>Mai</strong> — Opus 4.8, et avec lui les "dynamic workflows" de Claude Code : un script rejouable répartit le travail sur jusqu'à mille agents par exécution (une quinzaine à la fois), en gardant les résultats intermédiaires hors du contexte du modèle. Ma méthode de panel de personas, industrialisée. Dans la même fenêtre, le Model Context Protocol passe stateless — une flotte d'agents devient un problème de load-balancer, pas une démo.</li>
<li><strong>Juin</strong> — le côté revue a enfin ses chiffres (plus bas).</li>
<li><strong>Juillet</strong> — la plus grande étude en organisation réelle du semestre tombe, et son titre est un chiffre de débit avec une étiquette d'avertissement collée dessus.</li>
</ul>
<p>Les paliers sont réels et ils montent vite. Regardez maintenant la ligne pointillée en dessous — le gain réellement mesuré sur le genre de code que la plupart d'entre nous maintiennent. Elle bouge à peine. La distance entre l'escalier et cette ligne, c'est toute l'histoire.</p>

<h2>Mesuré vs. vendu</h2>
<p>Voici la discipline dont vit cette série : séparer ce qui est mesuré de ce qui est modélisé ou revendiqué. Appliquée aux six derniers mois, la coupure est nette.</p>
<p><strong>La mesure indépendante la plus solide de la période, c'est un ralentissement.</strong> L'essai randomisé de METR — des développeurs open-source expérimentés, travaillant sur des dépôts qu'ils connaissaient depuis des années — a montré que les outils IA début 2025 les rendaient <strong>19 % plus lents</strong>, alors qu'ils se croyaient environ 20 % plus rapides. Une quarantaine de points d'écart entre le ressenti et le réel, et le ralentissement était invisible pour celui qui le vivait. L'intervalle de confiance était large, et METR a depuis reconnu que son expérience de suivi est trop biaisée par la sélection pour donner un chiffre successeur propre. Ce qui est le titre honnête : la meilleure mesure rigoureuse dont on dispose est un ralentissement sur du brownfield, et le côté optimiste reste de l'auto-déclaration.</p>
<p><strong>L'écart greenfield/brownfield ne s'est pas refermé.</strong> La recherche de Stanford sur la productivité — présentée en conférence cette année, pas encore publiée en revue, et la source sur laquelle s'appuie le rapport DORA 2026 — situe le gain sur du greenfield simple à 30–40 %, et sur du code brownfield complexe à <strong>0–10 %</strong>. Ce ≤10 % a survécu à Opus 4.8 et à GPT-5.6. Un nouveau modèle de pointe toutes les six semaines n'a pas bougé le chiffre qui décrit mon métier. Pour un code de santé régulé vieux de plusieurs années, c'est le seul chiffre qui allait compter.</p>
<p><strong>La taxe de vérification est maintenant dans la télémétrie — et c'est là que mes sous-agents m'ont rattrapé.</strong> J'allais écrire que DORA avait mesuré une série de deltas vertigineux. Faux. Ces chiffres — temps médian de revue de PR en hausse de <strong>441 %</strong>, incidents par PR +243 %, bugs par développeur +54 % — viennent du <strong>rapport "Acceleration Whiplash" de Faros AI</strong> (environ 22 000 développeurs), pas de DORA. La contribution de DORA, c'est le cadre et sa "taxe d'instabilité" ; Faros fournit les deltas. Deux rapports différents, et les confondre, c'est exactement le laisser-aller d'éditeur que j'avais promis de ne jamais commettre. Par ailleurs, LinearB — sur 8,1 millions de pull requests — a trouvé des PR écrites par l'IA acceptées à <strong>32,7 %</strong> contre 84,4 % pour les humaines, les PR agentiques restant <strong>5,3× plus longtemps</strong> en file. Le goulot d'étranglement est passé de l'écriture du code à la décision : ce code est-il sûr à fusionner ? C'est la taxe de vérification avec une étiquette de prix.</p>
<blockquote><p>"Le benchmark que tout le monde citait a été retiré par le labo qui le citait. Endossez la tendance. Refusez le classement."</p></blockquote>
<p><strong>Ce que les éditeurs vendent, pendant ce temps, c'est du débit.</strong> La plus grande étude en organisation réelle — Microsoft, des dizaines de milliers d'ingénieurs — a trouvé que les adopteurs fusionnaient environ <strong>24 % de pull requests en plus</strong>. Vraiment positif, et je ne vais pas l'écarter. Mais l'étude dit elle-même la partie gênante : "une PR fusionnée n'est pas la valeur qu'elle livre". Elle a mesuré exactement la métrique que la taxe de vérification gonfle. Plus de PR fusionnées, ce n'est pas plus de valeur livrée, et l'écart entre ces deux phrases, c'est là que vit une année entière de nuance.</p>

<h2>Le bulletin de notes</h2>
<p>Cinq paris, notés face à six mois de données.</p>
<table>
<thead><tr><th>Le pari (mars–mai)</th><th>Note</th><th>Pourquoi</th></tr></thead>
<tbody>
<tr><td><strong>Le SDLC est mort</strong></td><td>Tient, amendé</td><td>La cérémonie est morte ; une porte de vérification est née. Le processus n'a pas rétréci — son centre de gravité est passé de l'écriture à la revue.</td></tr>
<tr><td><strong>L'IA est un amplificateur</strong></td><td>Confirmé</td><td>Débit en hausse, coûts qualité qui se composent en dessous. Le MIT a trouvé que 95 % des pilotes d'IA générative n'ont eu aucun impact mesurable sur le P&amp;L — un amplificateur du système autour, exactement comme annoncé.</td></tr>
<tr><td><strong>La courbe en J est réelle</strong></td><td>À corriger</td><td>Le creux est maintenant mesuré. La remontée au-dessus de la ligne de base, non — elle repose sur de l'auto-déclaration. Voir plus bas.</td></tr>
<tr><td><strong>Il existe une taxe de vérification</strong></td><td>Confirmé, chiffré</td><td>Temps de revue et latence de file en forte hausse (Faros, LinearB) ; délégation complète bloquée à 0–20 % des tâches ; et l'auto-contrôle est désormais littéralement vendu comme fonctionnalité.</td></tr>
<tr><td><strong>Le codeur devient ingénieur</strong></td><td>Confirmé</td><td>Le travail de pointe du semestre, c'est l'orchestration — écrire le harnais, câbler les outils, noter les agents. Pas taper de la syntaxe.</td></tr>
</tbody>
</table>

<h2>La correction que je me dois</h2>
<p>Dans l'article DORA, j'ai décrit un creux qui cède la place à une remontée, et j'ai tracé la courbe repassant avec assurance au-dessus de son point de départ. Six mois plus tard, je peux prouver la première moitié de cette phrase, pas la seconde.</p>
<p>Le creux est mesuré, par plusieurs biais : les −19 % de METR, le plafond ≤10 % sur du brownfield, la télémétrie de la taxe de revue. Mais la remontée — la partie où la valeur repasse au-dessus du point de départ — reste surtout <em>auto-déclarée</em>. L'enquête 2026 de METR fait état de développeurs revendiquant un gain de 1,4 à 2×, et METR prévient elle-même que ce chiffre surestime la valeur. L'étude Microsoft offre un vrai chiffre, mais sur un indicateur de débit. Personne n'a encore publié de gain propre, mesuré, net du coût de revue, sur du code legacy complexe. Donc la correction est celle-ci : <strong>la portée a dépassé la fiabilité.</strong> L'horizon de tâche a grimpé plus vite que je ne l'aurais parié — mais la fiabilité <em>à</em> cet horizon n'a pas suivi, et j'ai laissé la forme du J me rendre plus sûr de la remontée que les données ne l'autorisent. Le J est réel. Je n'en ai vu qu'une moitié dans les chiffres.</p>
<blockquote><p>"Je peux prouver le creux. Je ne peux pas encore prouver la remontée. C'est l'état de l'art honnête."</p></blockquote>

<h2>Le plafond que personne ne vous vend</h2>
<p>Il y a une raison pour laquelle la remontée est difficile, et ce n'est pas un manque d'intelligence des modèles. C'est de l'arithmétique. Un agent fiable à 95 % à chaque étape réussit une tâche de 20 étapes environ <strong>36 %</strong> du temps, et une tâche de 50 étapes environ <strong>7 %</strong>. La fiabilité se compose de façon multiplicative, donc l'autonomie sur long horizon s'effondre bien en dessous de la démo — et la seule chose entre cet effondrement et votre branche de production, c'est la vérification. Des travaux indépendants sur le "context rot" montrent les mêmes modèles se dégrader nettement dès qu'une exécution dépasse quelques centaines de milliers de tokens : c'est le mécanisme par lequel les longues exécutions d'agents tournent mal en silence.</p>
<p>Et un coût nouveau est apparu, qu'aucune prédiction de mars n'avait nommé : <strong>la sécurité est devenue structurelle.</strong> L'injection de prompt se discute désormais comme une propriété permanente des agents plutôt que comme un bug corrigeable ; des CVE à haute sévérité ont touché les outils mêmes qu'on utilise ; et Anthropic a révélé un groupe lié à un État qui a détourné des instances de Claude Code pour mener un espionnage largement autonome. La cérémonie qui est morte se fait remplacer par une discipline qui naît — provenance, sandboxing, vérification des agents. Ce n'est pas une contradiction du "SDLC est mort". C'est la nouvelle porte que l'ancienne méritait depuis toujours.</p>

<h2>Ce qui reste aux humains</h2>
<p>Comme dans chaque article de cette série, la liste honnête — ce que six mois de progrès n'ont <em>pas</em> retiré de nos épaules.</p>
<p><strong>Décider si le code est sûr à fusionner.</strong> C'est la taxe, et elle n'a pas baissé — elle a grossi, et elle est passée en tête du pipeline. Le taux d'acceptation de 32,7 %, c'est un humain qui dit "non" des milliers de fois par jour. Ce jugement, c'est le métier maintenant.</p>
<p><strong>Lire le chiffre d'éditeur en sceptique.</strong> Un benchmark s'est fait retirer par ses propres promoteurs cette année. Deux rapports se sont retrouvés confondus dans mon propre brouillon jusqu'à ce qu'un vérificateur le rattrape. Personne n'automatise le filtre d'intérêt à votre place.</p>
<p><strong>Encaisser la réalité du brownfield.</strong> Le plafond ≤10 %, c'est là que vit le logiciel régulé, legacy, à conséquences. Aucune sortie du semestre ne l'a bougé. Celui qui comprend les contrats implicites du système est encore celui qui livre sans casser.</p>
<p><strong>Garder les gens.</strong> Klarna a passé l'année à reconstruire discrètement la capacité humaine qu'elle avait coupée, après une chute de qualité. L'argument financier n'a pas changé : la valeur s'est déplacée <em>vers</em> les humains capables de spécifier, d'orchestrer et de vérifier des flottes d'agents. Supprimez-les, et vous supprimez votre propre retour — juste au creux de la courbe, là où la taxe est la plus forte. Dans mon équipe, sur six mois, l'effectif a de nouveau grandi. Personne n'a été remplacé par une machine.</p>

<h2>Que faire lundi matin</h2>
<p>Si vous dirigez une équipe et voulez tirer quelque chose de concret de ce point d'étape :</p>
<ol>
<li><strong>Budgétez la porte de revue, pas seulement les licences.</strong> Si vos agents livrent plus de PR, quelqu'un relit plus de PR. Dotez et mesurez cette capacité <em>avant</em> de passer la génération à l'échelle, sinon la file devient votre vrai goulot.</li>
<li><strong>Mesurez votre propre gain net sur de vrais tickets.</strong> Pas des démos greenfield — le code legacy que vous maintenez vraiment, net de reprise et de revue. Ce chiffre est le vôtre, et c'est le seul qui n'appartienne pas à un éditeur.</li>
<li><strong>Gardez les lots petits.</strong> Le calcul d'erreur composée est impitoyable : des exécutions d'agent courtes avec des points de contrôle humains battent une héroïque délégation de 50 étapes à tous les coups. Concevez pour la vérification, pas pour le théâtre de l'autonomie.</li>
<li><strong>Traitez la sécurité des agents comme de la sécurité de production.</strong> Injection de prompt, permissions d'outils, provenance. Si un agent peut lancer une commande, supposez qu'une entrée hostile le peut aussi. Sandboxez en conséquence.</li>
<li><strong>Retirez vos benchmarks morts.</strong> Si OpenAI a lâché SWE-bench Verified, votre slide interne "le modèle score X" est probablement périmée aussi. Faites confiance à la tendance et à votre propre dépôt, à rien d'un classement.</li>
</ol>

<h2>Où cela laisse la série</h2>
<p>Il y a six mois, je prédisais depuis l'intérieur d'une équipe. Aujourd'hui, la mesure externe a rattrapé — et le plus souvent elle confirme ce que mon équipe a vécu, ce qui est une sensation étrange et utile. Quatre paris se sont renforcés ; un s'est honnêtement corrigé. Les agents ont gagné de l'horizon, pas une laisse plus courte. La portée est réelle. La fiabilité à cette portée, c'est le travail encore devant nous — et ce travail, pour l'instant, nous appartient.</p>
<p>Le prochain point d'étape s'écrit tout seul : le jour où quelqu'un publiera enfin une remontée propre, mesurée, nette de vérification, sur du code legacy complexe, je re-noterai ce pari. D'ici là, le creux est prouvé et la remontée est une promesse. Sachez dans quelle moitié vous vous tenez.</p>
<p><strong>Lire la suite de la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">Le SDLC est mort</a> — pourquoi le processus a toujours été du gaspillage. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coder n'a jamais été le métier</a> — ce que devient l'ingénieur quand la syntaxe disparaît. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">L'IA est devenue un réflexe d'équipe</a> — à quoi ressemble une équipe IA-native un mardi. <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA vient de confirmer ce que mon équipe a déjà vécu</a> — le rapport qui a nommé la courbe en J que je corrige maintenant.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://metr.org/blog/2026-1-29-time-horizon-1-1/">METR — Measuring AI Ability to Complete Long Tasks (Time Horizon 1.1)</a> : le doublement de l'horizon de tâche à 50 % de fiabilité, environ tous les quatre mois.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2507.09089">METR — Impact of Early-2025 AI on Experienced Open-Source Developer Productivity</a> : l'essai randomisé qui a mesuré un ralentissement de 19 % malgré une accélération <em>ressentie</em> de 20 %.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/">OpenAI — Why we no longer evaluate SWE-bench Verified</a> : le retrait du benchmark, contamination et tests cassés.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://softwareengineeringproductivity.stanford.edu/ai-impact">Stanford — Software Engineering Productivity (Denisov-Blanch)</a> : le gradient greenfield-vs-brownfield, cité par DORA.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://dora.dev/ai/roi/report/">DORA — The ROI of AI-assisted Software Development (2026)</a> : le cadre de l'amplificateur, la taxe d'instabilité, le chiffre ≤10 % sur du brownfield.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.faros.ai/blog/ai-software-engineering">Faros AI — The Acceleration Whiplash (2026)</a> : les deltas de télémétrie de delivery (temps de revue, incidents, bugs) — ce ne sont <em>pas</em> les chiffres de DORA.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://linearb.io/resources/software-engineering-benchmarks-report">LinearB — 2026 Software Engineering Benchmarks</a> : acceptation des PR IA 32,7 % vs 84,4 %, et la latence de file 5,3× des PR agentiques.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2607.01418">Murphy-Hill et al. — Adoption and Impact of Command-Line AI Coding Agents (Microsoft, 2026)</a> : les ~24 % de PR fusionnées en plus, et l'aveu "une PR fusionnée n'est pas la valeur".</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/">Model Context Protocol — sortie 2026</a> : le cœur stateless qui a transformé les flottes d'agents en infrastructure.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://code.claude.com/docs/en/workflows">Claude Code — Dynamic Workflows</a> : la répartition déterministe sur jusqu'à 1 000 agents par exécution (~16 en parallèle).</li>
</ul>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'AiAgentsH1Verdict',
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
