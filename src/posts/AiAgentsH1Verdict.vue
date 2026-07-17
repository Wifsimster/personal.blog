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
  description: 'Seven frontier models in six months, all sold on self-verification. On Solstice, our greenfield platform, four months of development with redefined working methods turned model quality into velocity: 4,526 commits, 999 PRs, 127 releases. What we automate in July — and what it took to get there.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Six months, seven frontier models: Opus 4.6, 4.7, 4.8, Fable 5, Sonnet 5, GPT-5.5, GPT-5.6 — a new step roughly every six weeks, and the sales pitch quietly changed with them. Nobody sells "smarter" anymore; they sell "checks its own work". Model quality now means reliability, and it's climbing. On my own project — <abbr title="Fictitious codename: the real project, its products and its vendor are anonymized.">Solstice*</abbr>, the greenfield platform my team started in March — four months spent redefining how we work turned that quality into velocity: 4,526 commits, 999 pull requests, 127 releases, a full frontend rewrite mid-flight. And the unit of delegation keeps widening: a function in January, a sweep in May, a whole flow in July.</p></div>
<hr>
<p>I built this piece the way my team works now. A panel of specialist sub-agents swept the web in parallel, each with its own lens, and then an independent fact-check pass tried to demolish every number before I was allowed to write it down. Good thing, too. I was about to credit DORA with statistics that belong to someone else. More on that below — it's practically the point of the article.</p>
<p>Because six months ago, I was making predictions from inside one team, with almost nothing external to back them. Now the studies are out. Some prove me right. One proves me wrong. Let's take it in order.</p>

<h2>The staircase of six months</h2>
<p>The paradigm didn't land in one jump. It climbed step by step: a new frontier model every six to ten weeks, each a little more autonomous than the last. And underneath, a quiet shift in the sales pitch — nobody sells "smarter" anymore. They sell "checks its own work".</p>
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
<p>Left to right, the honest chronology of the half-year:</p>
<ul>
<li><strong>January.</strong> METR updates its Time Horizon research: the length of task an agent finishes one time out of two now doubles roughly every four months, against seven before. Forget the exact hour count — it's the shape that matters, and the shape points up, fast.</li>
<li><strong>February.</strong> Opus 4.6 ships on the 5th. Three weeks later, OpenAI stops publishing SWE-bench Verified scores: the benchmark "no longer measures frontier coding capabilities", and on audit most of a sample of failed tasks had broken tests. The benchmark everyone quoted just got buried by one of the people quoting it.</li>
<li><strong>April.</strong> Two releases in one week: Opus 4.7 on the 16th, GPT-5.5 on the 23rd — six weeks after GPT-5.4, and OpenAI says so proudly. And Opus 4.7's sales pitch isn't power. It's rigor: the model designs its own verification steps before declaring a task done. Self-checking has become a feature you pay for.</li>
<li><strong>May.</strong> Opus 4.8 on the 28th. Anthropic claims it lets four times fewer flaws slip through its own generated code than 4.7 — a vendor number, sure, but the choice of number says everything: nobody sells generation anymore, they sell control. Alongside it, Claude Code's "dynamic workflows": a replayable script that spreads work across up to a thousand agents per run, about sixteen at a time, without flooding the model's context. My persona-panel method, basically, turned into a product. Same month, the MCP protocol goes stateless — a fleet of agents is now a load-balancer problem, not a demo.</li>
<li><strong>June.</strong> Fable 5 on the 9th, Sonnet 5 on the 30th — the cadence is not slowing down. Meanwhile, the code-review side finally gets its numbers. I'm coming to those.</li>
<li><strong>July.</strong> GPT-5.6 on the 9th, and the biggest real-company study of the half-year: a handsome throughput figure, with a warning label glued to it.</li>
</ul>
<p>So much for the steps. Now look at the dashed line under the staircase — the gain actually measured on the kind of code most of us maintain. It barely moves. This entire article lives in the distance between the two.</p>

<h2>The field: Solstice, four months on the clock</h2>
<p>This series has been quoting "my team" for six months without ever opening the books. Let's fix that too. Since March, my day job has a codename: <abbr title="Fictitious codename: the real project, its products and its vendor are anonymized.">Solstice*</abbr> — a greenfield platform, first commit on March 10, that merges two long-lived healthcare product suites into a single new TypeScript codebase. Four months later: thirty-one backend microservices, five micro-frontends, about 606,000 lines across 5,085 files. Greenfield with a caveat worth naming — the code is new, the domain is not. Regulated healthcare, patient data, and two legacy suites' worth of implicit contracts to honor.</p>
<p>The project's origin story is worth telling, because it is the half-year's best example of the equation changing. Patient administration and the patient journey ran on two historical foundations — one in a proprietary fourth-generation language from the nineties, the other in a desktop-era stack: technologies where every regulatory change fights the code, and where hiring has become a lost battle. The refactor-versus-rewrite dilemma had been sitting on the table for years, and it always tipped the same way: a rewrite was too expensive, too risky, a double run to fund. Agentic AI flipped the arbitrage in early 2026 — velocity multiplied, a screen prototyped in hours instead of weeks and validated with the domain experts before a line of production code, compliance codified into blocking CI guardrails: patient-identity vigilance, accessibility, auditability. The cost and the risk of the rewrite collapsed together. Solstice is not a project that uses agents. It is a project that would not exist without them.</p>
<p>The chosen foundation says the same thing: React micro-frontends behind a design system, Fastify/TypeScript microservices, PostgreSQL everywhere, FHIR R4 as the pivot data model, Docker, OpenTelemetry, GitHub Actions CI/CD. Nothing exotic — deliberately. A stack the models know by heart is a stack the agents run on at full speed. Choosing a technology is now a hiring decision for your agents as much as for your humans.</p>
<p>Here are the counters, frozen on July 15:</p>
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="From March 10 to July 15, 2026, the Solstice repository logged 4,526 commits — about 35 a day. Monthly bars: 394 in March, 1,038 in April, 1,764 in May — the peak of the React rewrite executed as an agent pipeline — 810 in June, 520 over the first half of July, on pace for roughly 1,070 across the month." class="diagram-svg">
<text x="64" y="34" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">SOLSTICE · COMMITS PER MONTH · MARCH – JULY 15, 2026</text>
<text x="64" y="68" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="26" font-weight="700">≈ 35 commits a day</text>
<text x="64" y="88" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.6">4,526 commits · 999 pull requests · 127 tagged releases · 128 days</text>
<line x1="80" y1="340" x2="728" y2="340" stroke="currentColor" stroke-opacity="0.32" stroke-width="1.5"></line>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="96" y="293" width="96" height="47" rx="8" fill="currentColor" fill-opacity="0.13"></rect>
<rect x="224" y="216" width="96" height="124" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="352" y="130" width="96" height="210" rx="8" fill="currentColor" fill-opacity="0.17"></rect>
<rect x="480" y="244" width="96" height="96" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="608" y="278" width="96" height="62" rx="8" fill="currentColor" fill-opacity="0.13"></rect>
</g>
<rect x="608" y="212" width="96" height="66" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3" stroke-dasharray="5,4"></rect>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle">
<text x="144" y="283">394</text>
<text x="272" y="206">1,038</text>
<text x="400" y="120">1,764</text>
<text x="528" y="234">810</text>
<text x="656" y="268">520</text>
</g>
<text x="656" y="202" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" font-style="italic" opacity="0.7" text-anchor="middle">month pace: ~1,070</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" opacity="0.55" letter-spacing="0.1em" text-anchor="middle">
<text x="144" y="360">MAR</text>
<text x="272" y="360">APR</text>
<text x="400" y="360">MAY</text>
<text x="528" y="360">JUN</text>
<text x="656" y="360">JUL · TO THE 15TH</text>
</g>
<path d="M 452 128 C 470 118 484 114 498 112" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.3" stroke-linecap="round"></path>
<text x="506" y="110" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" font-style="italic" opacity="0.75">the React rewrite,</text>
<text x="506" y="125" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" font-style="italic" opacity="0.75">run as an agent pipeline</text>
</svg>
<ul>
<li><strong>4,526 commits in 128 days</strong> — about 35 a day. 999 pull requests, 127 tagged releases, over 500 deployments. The May peak — 1,764 commits — is not an anomaly; it's the month the frontend rewrite ran as a pipeline.</li>
<li><strong>A full rewrite, executed mid-flight.</strong> One architecture decision record decided the frontend would leave Vue for React. Four months later: 328 <code>.tsx</code> files, zero <code>.vue</code> left. That kind of migration used to be a year-long project with its own steering committee. Here it was an agent sweep across hundreds of files, fenced in by tests, merged by humans.</li>
<li><strong>The autonomy infrastructure.</strong> 54 architecture decision records, 41 CLAUDE.md briefs — one per service — 39 skills, 260 docs. Nearly one line of Markdown for every five lines of code. That is not bureaucracy; it's the context we inject into agents so they can work a lane without us. We stopped documenting for humans only. We document for fleets.</li>
<li><strong>The tax, made executable.</strong> 643 test files, 27 end-to-end specs on the critical journeys, and a <code>task verify</code> gate that returns a PASS/FAIL verdict before any PR exists. The verification tax this series keeps naming is no longer a blog-post concept — it's a binary in the CI.</li>
</ul>
<p>And the fact that matters most, stated without hedging: one hundred percent of this code is agent-written. Not "assisted", not "autocompleted" — written. No human on this project types production code anymore. The commit signatures still carry human names, because a signature no longer says who wrote the change; it says who specified it, who orchestrated the fleet, and who verified the result. In 2026, a commit signature is a chain of accountability, not a byline.</p>
<p>Diagnosis versus arithmetic, as always: these are throughput numbers, not value — the metric Microsoft warns gets inflated — and they are greenfield numbers, the terrain where Stanford's research already grants agents their 30 to 40%. I claim velocity on a young codebase, nothing more. The interesting part isn't the raw count. It's what it took to get there.</p>
<h2>Four months to redefine how we work</h2>
<p>Because none of that velocity came from a model getting smarter on its own. How does a team of twenty-odd people change the way it works to ship fast in the agentic era? Not by buying licenses. By rewriting its method piece by piece, while shipping. Here is what actually changed for us between March and July.</p>
<p><strong>Need first, prototype in hours.</strong> The old method specified for weeks before anyone coded. The new one inverts it: field immersion, journeys co-designed with the domain experts, then a working prototype produced in hours by the agents — and put in front of users before anything gets industrialized. We no longer argue over mockups. We decide on something clickable.</p>
<p><strong>Everything decided gets written down, because everything written becomes context.</strong> Fifty-four architecture decision records in four months, a brief per service, a domain glossary, thirty-nine skills for the repeated gestures. Documentation changed nature: it is no longer a deliverable that ages, it is fuel for the fleets. A poorly written decision is a fleet coding beside the point. Nearly one line of Markdown for five lines of code — the best investment of the project.</p>
<p><strong>The machine says no before a human reads.</strong> The <code>task verify</code> gate returns PASS or FAIL before any PR exists; human review only starts once the machine has said yes. And the architecture itself serves the method: microservices and micro-frontends are bounded lanes an agent can hold alone, without stepping on anyone else's work.</p>
<p><strong>The tooling maintains itself.</strong> Self-healing CI, E2E specs generated and then kept alive on the critical journeys, briefs updated by the very agents that consume them. Tooling time used to be a tax. It became compound interest.</p>
<p><strong>And the human ritual that carries it all: practice-sharing.</strong> Nearly every week, the team sits down to share what it has learned about working with agents — about fifteen written reports in four months. What works becomes a skill. What binds the architecture becomes a decision record. It is the fastest learning loop I have seen in my career, and it owes nothing to the models.</p>
<p>And the velocity has a deadline attached, not just a counter: a first preadmission MVP deployed in October 2026, the full workflow early 2027, complete coverage of the legacy scope in 2028. Two years to replace two historical foundations. Before agents, nobody would have signed that plan — which is exactly why the rewrite had never been launched.</p>
<p>A postscript I had not planned when I started this piece: as I was finishing it, group leadership — CEO and CFO included — reviewed the project. Their verdict: well ahead of the rest of the group, in practices and in results, to the point of picking it as the pilot for the group's new contract with a frontier-model vendor — officially funded access to the tooling, plus extra resources for the team. I mention it less out of pride (fine, a little) than for what it confirms: the method described above doesn't just speed up one team. It gets noticed, it attracts, and it ends up flowing back down as group policy. The local learning loop becomes the organization's strategy. It is not yet the value proof I keep asking for in this series — but pull, from that high up, is a measurement too.</p>

<h2>Measured vs. sold</h2>
<p>The rule of this series hasn't changed: separate what is measured from what is told. Applied to the half-year, it gives four findings. Let me take them one at a time.</p>
<p><strong>First, the measurement that stings.</strong> The best randomized trial we have is still METR's: experienced open-source developers, working in repositories they had known for years, were 19% <em>slower</em> with early-2025 AI tools — while believing they were 20% faster. Forty points between what they felt and what the clock said. And the slowdown was invisible to the people living it. METR has since tried to rerun the experiment and admitted the new design was too skewed to give a clean number. So here is the honest state of play: the most rigorous measurement on record is a slowdown, and everything pointing the other way is people describing their own experience.</p>
<p><strong>Second, the gradient is real, and I live on both sides of it.</strong> Stanford's productivity research puts the gain at 30 to 40% on greenfield work, and 0 to 10% on complex brownfield code. My half-year confirms both ends at once. On the legacy suites we still maintain — years old, full of implicit contracts — no release since January moved the needle much. On Solstice, the greenfield rebuild, the agents run at full speed. The gradient isn't a footnote; it's the whole explanation of why two honest engineers can report opposite experiences of the same tools. And even on the green side the speed wasn't free — it's the infrastructure story above, an invoice paid up front.</p>
<p><strong>Third — and this is where my own sub-agents saved me.</strong> I was about to credit DORA with review-time and incident deltas that actually belong to Faros AI's telemetry report. A fact-checking agent caught the mixup before publication — exactly the sourcing laziness I keep criticizing in others. From that whole family of delivery metrics I'll keep a single number, LinearB's, measured across 8.1 million pull requests: AI-written PRs get accepted 32.7% of the time, against 84.4% for human ones. The bottleneck is no longer writing code. It's deciding whether the code is safe to merge.</p>
<blockquote><p>"The benchmark everyone quoted was retired by the people quoting it. Trust the trend. Refuse the leaderboard."</p></blockquote>
<p><strong>Fourth, what the vendors sell: throughput.</strong> Microsoft published the largest real-organization study of the period — tens of thousands of engineers — and found adopters merging about 24% more pull requests. That's a real result and I won't wave it away. But the authors themselves write the sentence that matters: "a merged PR is not the same as the value it delivers". They measured precisely the metric the verification tax inflates. Between "more PRs merged" and "more value shipped" sits the entire nuance of the half-year.</p>

<h2>The scorecard</h2>
<p>Five calls, six months of data. Here's the graded homework.</p>
<table>
<thead><tr><th>The call (Mar–May)</th><th>Grade</th><th>Why</th></tr></thead>
<tbody>
<tr><td><strong>The SDLC is dead</strong></td><td>Holds, amended</td><td>The ceremony died; a verification gate was born. Process didn't shrink — its center of gravity moved from writing to reviewing.</td></tr>
<tr><td><strong>AI is an amplifier</strong></td><td>Confirmed</td><td>Throughput up top, quality costs compounding below. MIT found 95% of GenAI pilots delivered no measurable P&amp;L impact. The tool amplifies the system around it — exactly the claim.</td></tr>
<tr><td><strong>The J-curve is real</strong></td><td>Needs correction</td><td>The dip is now measured. The climb above baseline is not — it rests on self-report. See below.</td></tr>
<tr><td><strong>There is a verification tax</strong></td><td>Confirmed, quantified</td><td>Review time and queue latency up sharply (Faros, LinearB); full delegation stuck at 0–20% of tasks; self-checking now literally sold as a model feature.</td></tr>
<tr><td><strong>The coder becomes an engineer</strong></td><td>Confirmed</td><td>The frontier work of the half-year is orchestration — writing the harness, wiring the tools, grading the agents. Not typing syntax.</td></tr>
</tbody>
</table>

<p>The one correction, then, in a paragraph rather than a chapter: in the DORA piece I drew a J-curve climbing back above its baseline with more confidence than the data allowed. The dip is measured; the climb still rests on self-reported gains and throughput proxies. So I'll say it plainly — <strong>agents gained reach faster than they gained reliability</strong> — and move on, because the more interesting story of the half-year isn't the curve. It's what teams did about the gap.</p>

<h2>The ceiling nobody sells you</h2>
<p>If the climb is taking its time, it's not because the models lack intelligence. It's arithmetic. An agent that is 95% reliable at each step finishes a 20-step task a little better than one time in three. A 50-step task? Seven times in a hundred. Errors multiply into each other, long-horizon autonomy collapses far below the demo reel, and the only thing standing between that collapse and your production branch is called verification. The "context rot" research shows the same thing on the memory side: past a few hundred thousand tokens, the models degrade quietly.</p>
<p>And then a cost showed up that none of my March bets had named: security. Prompt injection is now discussed as a permanent property of agents, not a bug awaiting a patch. Severe CVEs hit the exact tools we use every day. Anthropic even disclosed that a state-linked group had hijacked Claude Code instances to run near-autonomous espionage. The SDLC's ceremony is dead, all right — what's being born in its place is a discipline: provenance, sandboxing, agent verification. That's not a rebuttal of the series. It's the gate the old process should have been all along.</p>

<h2>What we hand the agents in July</h2>
<p>The practical question everyone asks me: concretely, what does an agent do alone in July 2026 that it couldn't in January? Answer from inside Solstice, lane by lane.</p>
<p><strong>In January</strong>, an agent completed a function and wrote a test if you asked politely. An agent PR was a demo you showed around, not a flow you lived with.</p>
<p><strong>In April and May</strong>, with self-checking and then sub-agent fleets, the unit of delegation grew from the function to the sweep: our React rewrite ran that way — a pipeline of agents over hundreds of files, each batch fenced by the existing tests, a human at the merge. May's 1,764 commits are that unit of work, made visible.</p>
<p><strong>In July</strong>, here is what leaves on its own, on our repository, without a human writing a line:</p>
<ol>
<li><strong>The bounded-scope PR, end to end.</strong> Ticket → branch → code → tests → <code>task verify</code> verdict → PR opened. The human only shows up at review. The non-negotiable condition: the lane has its CLAUDE.md, its skills, and the gate says PASS.</li>
<li><strong>CI that heals itself.</strong> Container-name collisions, drifting deploy stacks: the agents now fix their own plumbing. Unthinkable in January — nobody would have let an agent near the pipeline.</li>
<li><strong>End-to-end specs on the critical journeys.</strong> Front-to-back, generated and then maintained. Twenty-seven of them today.</li>
<li><strong>Documentation that follows the code.</strong> Meeting notes, ADRs drafted for review, per-service CLAUDE.md kept current. The agents write the docs the agents run on — that loop closed this half-year.</li>
</ol>
<p>And what still does not leave alone, even in July: architecture — the 54 ADRs are human decisions, above all the ones that fence what agents may touch. Masking the patient identifier on our screens went through an ADR envelope before a single agent-written line came near it. The merge decision, always. And the scoping itself: a human draws the lanes; an agent never grants itself one.</p>
<blockquote><p>"Autonomy is not declared at the model. It is equipped, lane by lane — a brief, a set of skills, a gate that can say no."</p></blockquote>
<p>That's my read of the half-year from ground level: each step of the staircase doesn't make the agent smarter so much as it widens what we dare hand it. A function in January, a sweep in May, a flow in July — the speed at which that unit widens is the real measure of autonomy. Not the benchmarks.</p>

<h2>What still belongs to humans</h2>
<p>As in every piece in this series, the honest list. Six months of progress took none of this off our plates.</p>
<p><strong>Deciding whether the code is safe to merge.</strong> That's the tax, and it didn't get cheaper — it got bigger, and it moved to the front of the pipeline. A 32.7% acceptance rate is a human saying "no" thousands of times a day. On our repository, the <code>task verify</code> gate now says "no" before a human even reads the diff — but the merge click stays human, every single time. That judgment is the job now.</p>
<p><strong>Reading the vendor number as a skeptic.</strong> A benchmark was buried by its own promoters this year. Two reports got mixed up in my own draft until a checker caught it. Nobody automates the incentive filter for you.</p>
<p><strong>Living with the brownfield reality.</strong> The 10% ceiling is where regulated, legacy, consequential software lives. No release this half-year moved it. The person who knows the system's implicit contracts is still the one who ships without breaking things.</p>
<p><strong>Keeping the people.</strong> Klarna spent the year quietly rebuilding the human capacity it had cut, after quality dropped. The financial argument hasn't changed: the value moved <em>toward</em> the humans who can specify, orchestrate and verify fleets of agents. Fire them and you delete your own return, right at the bottom of the curve, where the tax bites hardest. On my team, over these six months, headcount grew again. Nobody was replaced by a machine.</p>

<h2>What to do Monday morning</h2>
<p>If you lead a team and want something concrete out of this checkpoint:</p>
<ol>
<li><strong>Budget the review gate, not just the licenses.</strong> If your agents ship more PRs, someone reviews more PRs. Staff and measure that capacity <em>before</em> you scale generation, or the queue becomes your real bottleneck.</li>
<li><strong>Document for the agents, not just the humans.</strong> A brief per service, a skill per repeated gesture, a glossary for the domain. Least glamorous investment of the half-year, best return: on our repository that's nearly one line of Markdown for five lines of code — and it is what makes delegation possible at all.</li>
<li><strong>Measure your own net gain on real tickets.</strong> Not greenfield demos — the legacy work you actually maintain, net of rework and review. That number is yours, and it's the only one that doesn't belong to a vendor.</li>
<li><strong>Keep batches small.</strong> The compounding-error math is unforgiving: short agent runs with human checkpoints beat one heroic 50-step delegation, every time. Design for verification, not for autonomy theater.</li>
<li><strong>Treat agent security as production security.</strong> Prompt injection, tool permissions, provenance. If an agent can run a command, assume a hostile input can too. Sandbox accordingly.</li>
<li><strong>Retire your dead benchmarks.</strong> If OpenAI dropped SWE-bench Verified, your internal "the model scores X" slide is probably stale too. Trust the trend and your own repository — nothing on a leaderboard.</li>
</ol>

<h2>Where this leaves the series</h2>
<p>Six months ago I was predicting from inside one team. Today the models check their own work, the fleets are infrastructure, and my own repository shows what four months of development can do on a young codebase when the method keeps up. Four of my five calls came out stronger; the fifth taught me to trust measured dips over promised climbs. The agents gained a longer horizon, not a shorter leash. The reach is real. Reliability at that reach is being built — release by release on the vendors' side, gate by gate on ours — and for now, that work is ours.</p>
<p>The next checkpoint writes itself: the day the unit of delegation widens again — from the flow to something I hesitate to name yet — I'll reopen this report card. Until then: build the rails, keep the gate, and count your own numbers.</p>
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
<li>Solstice* — internal repository telemetry (commits, PRs, tests, ADRs), snapshot of July 16, 2026, and the internal product rationale (rewrite arbitration, 2026→2028 roadmap). No links: it's a private codebase, and "Solstice" is a fictitious codename — the real project, its products and its legacy technologies are anonymized. Throughput numbers, not value — read them with the same skepticism as any vendor's.</li>
</ul>`
}

const frenchContent: PostContent = {
  title: 'Six mois d\'agents : j\'ai corrigé ma propre copie',
  description: 'Sept modèles de pointe en six mois, tous vendus sur l\'auto-vérification. Sur Solstice, notre plateforme greenfield, quatre mois de développement avec des méthodes de travail repensées ont transformé cette qualité en vélocité : 4 526 commits, 999 PR, 127 versions. Ce qu\'on automatise en juillet — et ce que ça a coûté.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Six mois, sept modèles de pointe : Opus 4.6, 4.7, 4.8, Fable 5, Sonnet 5, GPT-5.5, GPT-5.6 — une marche toutes les six semaines environ — et à chaque marche, l'argument de vente a changé. Plus personne ne vend « plus intelligent » ; on vend « vérifie son propre travail ». La qualité d'un modèle, désormais, c'est sa fiabilité — et elle monte. Sur mon propre projet — <abbr title="Nom de code fictif : le projet réel, ses produits et son éditeur sont anonymisés.">Solstice*</abbr>, la plateforme greenfield que mon équipe a démarrée en mars — quatre mois passés à redéfinir nos méthodes de travail ont transformé cette qualité en vélocité : 4 526 commits, 999 pull requests, 127 versions, une réécriture frontend complète en vol. Et on confie aux agents des morceaux de plus en plus gros : une fonction en janvier, un chantier en mai, un flux entier en juillet.</p></div>
<hr>
<p>Ce billet, je l'ai fabriqué comme mon équipe travaille désormais. Un panel de sous-agents spécialistes a ratissé le web en parallèle, chacun avec sa grille de lecture, puis une passe de vérification indépendante a essayé de démolir chaque chiffre avant que j'aie le droit de l'écrire. Bien lui en a pris. J'allais attribuer à DORA des statistiques qui appartiennent à quelqu'un d'autre. J'y reviens plus bas — c'est presque le sujet de l'article.</p>
<p>Parce qu'il y a six mois, j'écrivais des prédictions depuis l'intérieur d'une équipe, sans presque rien d'externe pour les appuyer. Aujourd'hui, les études sont sorties. Certaines me donnent raison. Une me donne tort. Reprenons dans l'ordre.</p>

<h2>L'escalier des six mois</h2>
<p>Le paradigme n'est pas arrivé d'un coup. Il a monté marche par marche : un modèle de pointe toutes les six à dix semaines, chacun un peu plus autonome que le précédent. Et en dessous, un glissement discret dans le discours commercial — plus personne ne vend « plus intelligent ». On vend « vérifie son propre travail ».</p>
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
<p>Reprenons la chronologie, de gauche à droite :</p>
<ul>
<li><strong>Janvier.</strong> METR met à jour sa recherche Time Horizon : la durée de tâche qu'un agent termine une fois sur deux double désormais tous les quatre mois environ, contre sept auparavant. Oubliez le chiffre exact — c'est la forme qui compte, et la forme monte, vite.</li>
<li><strong>Février.</strong> Opus 4.6 sort le 5. Trois semaines plus tard, OpenAI arrête de publier ses scores SWE-bench Verified : le benchmark « ne mesure plus les capacités de pointe », et à l'audit, la majorité d'un échantillon de tâches échouées avait en réalité des tests cassés. Le benchmark que tout le monde citait vient d'être enterré par un de ceux qui le citaient.</li>
<li><strong>Avril.</strong> Deux sorties dans la même semaine : Opus 4.7 le 16, GPT-5.5 le 23 — six semaines après GPT-5.4, et OpenAI s'en vante. Et l'argument de vente d'Opus 4.7 n'est pas la puissance. C'est la rigueur : le modèle conçoit ses propres étapes de vérification avant de déclarer une tâche terminée. L'auto-contrôle est devenu une fonctionnalité qu'on achète.</li>
<li><strong>Mai.</strong> Opus 4.8 le 28. Anthropic affirme qu'il laisse passer quatre fois moins de défauts dans son propre code que 4.7 — un chiffre d'éditeur, certes, mais le choix du chiffre dit tout : plus personne ne vend de la génération, on vend du contrôle. Et avec lui, les « dynamic workflows » de Claude Code : un script rejouable qui répartit le travail sur jusqu'à mille agents par exécution, une quinzaine à la fois, sans noyer le contexte du modèle. Ma méthode de panel de personas, en somme, devenue un produit. Le même mois, le protocole MCP passe stateless — une flotte d'agents, c'est désormais un problème de load-balancer, plus une démo.</li>
<li><strong>Juin.</strong> Fable 5 le 9, Sonnet 5 le 30 — la cadence ne ralentit pas. Pendant ce temps, la revue de code reçoit enfin ses chiffres. J'y viens.</li>
<li><strong>Juillet.</strong> GPT-5.6 le 9, et la plus grande étude en entreprise du semestre : un beau chiffre de débit, avec une étiquette d'avertissement collée dessus.</li>
</ul>
<p>Voilà pour les marches. Regardez maintenant la ligne pointillée sous l'escalier — le gain réellement mesuré sur le code que la plupart d'entre nous maintiennent. Elle bouge à peine. Tout cet article tient dans la distance entre les deux.</p>

<h2>Le terrain : Solstice, quatre mois au compteur</h2>
<p>Cette série cite « mon équipe » depuis six mois sans jamais ouvrir les compteurs. Corrigeons ça aussi. Depuis mars, mon quotidien a un nom de code : <abbr title="Nom de code fictif : le projet réel, ses produits et son éditeur sont anonymisés.">Solstice*</abbr> — une plateforme greenfield, premier commit le 10 mars, qui fusionne deux suites produit santé historiques dans une seule base de code TypeScript neuve. Quatre mois plus tard : trente et un microservices backend, cinq micro-frontends, environ 606 000 lignes réparties sur 5 085 fichiers. Du greenfield avec une réserve qui mérite d'être nommée — le code est neuf, le domaine ne l'est pas. De la santé régulée, des données patients, et deux suites legacy de contrats implicites à honorer.</p>
<p>Il faut raconter d'où vient ce projet, parce que sa naissance est le meilleur exemple du semestre. La gestion administrative du patient et le parcours patient tournaient sur deux socles historiques — l'un dans un langage de quatrième génération propriétaire des années 90, l'autre dans une stack de l'ère du client lourd : des technologies où chaque évolution réglementaire se bat contre le code, et où recruter est devenu une cause perdue. Le dilemme refactor-contre-rewrite traînait sur la table depuis des années, et il penchait toujours du même côté : une refonte, c'était trop cher, trop risqué, un double run à financer. L'IA agentique a renversé l'arbitrage début 2026 — vélocité démultipliée, un écran prototypé en heures plutôt qu'en semaines et validé avec le métier avant toute ligne de code de production, la conformité codifiée en garde-fous CI bloquants : identitovigilance, accessibilité, auditabilité. Le coût et le risque du rewrite se sont effondrés ensemble. Solstice n'est pas un projet qui utilise des agents. C'est un projet qui n'existerait pas sans eux.</p>
<p>Le socle choisi dit la même chose : des micro-frontends React derrière un design system, des microservices Fastify/TypeScript, PostgreSQL partout, FHIR R4 comme modèle de données pivot, Docker, OpenTelemetry, CI/CD GitHub Actions. Rien d'exotique — et c'est délibéré. Une stack que les modèles connaissent par cœur est une stack sur laquelle les agents tournent à pleine vitesse. Choisir une technologie, c'est désormais une décision de recrutement pour vos agents autant que pour vos humains.</p>
<p>Voici les compteurs, arrêtés au 15 juillet :</p>
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Du 10 mars au 15 juillet 2026, le dépôt Solstice enregistre 4 526 commits, soit environ 35 par jour. Barres mensuelles : 394 en mars, 1 038 en avril, 1 764 en mai — le pic de la réécriture React exécutée en pipeline d'agents —, 810 en juin, 520 sur la première moitié de juillet, un rythme d'environ 1 070 sur le mois." class="diagram-svg">
<text x="64" y="34" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">SOLSTICE · COMMITS PAR MOIS · MARS – 15 JUILLET 2026</text>
<text x="64" y="68" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="26" font-weight="700">≈ 35 commits par jour</text>
<text x="64" y="88" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.6">4 526 commits · 999 pull requests · 127 versions taguées · 128 jours</text>
<line x1="80" y1="340" x2="728" y2="340" stroke="currentColor" stroke-opacity="0.32" stroke-width="1.5"></line>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="96" y="293" width="96" height="47" rx="8" fill="currentColor" fill-opacity="0.13"></rect>
<rect x="224" y="216" width="96" height="124" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="352" y="130" width="96" height="210" rx="8" fill="currentColor" fill-opacity="0.17"></rect>
<rect x="480" y="244" width="96" height="96" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="608" y="278" width="96" height="62" rx="8" fill="currentColor" fill-opacity="0.13"></rect>
</g>
<rect x="608" y="212" width="96" height="66" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.4" stroke-width="1.3" stroke-dasharray="5,4"></rect>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle">
<text x="144" y="283">394</text>
<text x="272" y="206">1 038</text>
<text x="400" y="120">1 764</text>
<text x="528" y="234">810</text>
<text x="656" y="268">520</text>
</g>
<text x="656" y="202" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" font-style="italic" opacity="0.7" text-anchor="middle">rythme du mois : ~1 070</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" opacity="0.55" letter-spacing="0.1em" text-anchor="middle">
<text x="144" y="360">MARS</text>
<text x="272" y="360">AVR.</text>
<text x="400" y="360">MAI</text>
<text x="528" y="360">JUIN</text>
<text x="656" y="360">JUIL. · AU 15</text>
</g>
<path d="M 452 128 C 470 118 484 114 498 112" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.3" stroke-linecap="round"></path>
<text x="506" y="110" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" font-style="italic" opacity="0.75">la réécriture React,</text>
<text x="506" y="125" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" font-style="italic" opacity="0.75">exécutée en pipeline d'agents</text>
</svg>
<ul>
<li><strong>4 526 commits en 128 jours</strong> — environ 35 par jour. 999 pull requests, 127 versions taguées, plus de 500 déploiements. Le pic de mai — 1 764 commits — n'est pas une anomalie : c'est le mois où la réécriture du frontend s'est exécutée comme un pipeline.</li>
<li><strong>Une réécriture complète, en vol.</strong> Un architecture decision record a acté l'abandon de Vue pour React. Quatre mois plus tard : 328 fichiers <code>.tsx</code>, zéro <code>.vue</code> restant. Ce genre de migration, avant, c'était un projet d'un an avec son propre comité de pilotage. Là, c'est un sweep d'agents sur des centaines de fichiers, borné par les tests, fusionné par des humains.</li>
<li><strong>L'infrastructure d'autonomie.</strong> 54 architecture decision records, 41 CLAUDE.md — un par service —, 39 skills, 260 documents. Près d'une ligne de Markdown pour cinq lignes de code. Ce n'est pas de la bureaucratie : c'est le contexte qu'on injecte aux agents pour qu'ils tiennent un couloir sans nous. On ne documente plus seulement pour les humains. On documente pour les flottes.</li>
<li><strong>La taxe, rendue exécutable.</strong> 643 fichiers de test, 27 specs E2E sur les parcours critiques, et une porte <code>task verify</code> qui rend un verdict PASS/FAIL avant même qu'une PR existe. La taxe de vérification que cette série n'arrête pas de nommer n'est plus un concept de billet de blog — c'est un binaire dans la CI.</li>
</ul>
<p>Et le fait qui compte le plus, dit sans détour : ce code est écrit à 100 % par des agents. Pas « assisté », pas « autocomplété » — écrit. Plus aucun humain de ce projet ne tape de code de production. Les signatures de commits portent pourtant des noms humains, parce qu'une signature ne dit plus qui a écrit le changement ; elle dit qui l'a spécifié, qui a orchestré la flotte et qui a vérifié le résultat. En 2026, une signature de commit est une chaîne de responsabilité, plus une signature d'auteur.</p>
<p>Diagnostic contre arithmétique, comme toujours : ces chiffres mesurent du débit, pas de la valeur — la métrique dont Microsoft nous prévient qu'elle gonfle — et ce sont des chiffres greenfield, le terrain où la recherche de Stanford accorde déjà 30 à 40 % aux agents. Je revendique de la vélocité sur une base de code jeune, rien de plus. L'intéressant n'est pas le compteur brut. C'est ce qu'il a fallu construire pour y arriver.</p>
<h2>Quatre mois pour redéfinir la méthode</h2>
<p>Parce que rien de cette vélocité n'est venu d'un modèle devenu plus malin tout seul. Comment une équipe d'une vingtaine de personnes change-t-elle sa façon de travailler pour produire vite à l'ère agentique ? Pas en achetant des licences. En réécrivant sa méthode morceau par morceau, tout en livrant. Voici ce qui a réellement changé chez nous entre mars et juillet.</p>
<p><strong>Le besoin d'abord, le prototype en heures.</strong> L'ancienne méthode spécifiait pendant des semaines avant que quiconque ne code. La nouvelle inverse l'ordre : immersion terrain, parcours co-conçus avec le métier, puis un prototype fonctionnel produit en heures par les agents — et mis devant les utilisateurs avant d'industrialiser quoi que ce soit. On ne débat plus sur des maquettes. On tranche sur du cliquable.</p>
<p><strong>Tout ce qui se décide s'écrit, parce que tout ce qui s'écrit devient du contexte.</strong> Cinquante-quatre architecture decision records en quatre mois, un brief par service, un glossaire du domaine, trente-neuf skills pour les gestes répétés. La documentation a changé de nature : ce n'est plus un livrable qui vieillit, c'est le carburant des flottes. Une décision mal écrite, c'est une flotte qui code à côté. Près d'une ligne de Markdown pour cinq lignes de code — le meilleur investissement du projet.</p>
<p><strong>La machine dit non avant que l'humain ne lise.</strong> La porte <code>task verify</code> rend un verdict PASS ou FAIL avant même qu'une PR existe ; la revue humaine ne commence que quand la machine a dit oui. Et l'architecture elle-même sert la méthode : les microservices et les micro-frontends sont des couloirs bornés qu'un agent peut tenir seul, sans marcher sur le travail des autres.</p>
<p><strong>L'outillage s'entretient lui-même.</strong> La CI qui se répare, les specs E2E générées puis maintenues sur les parcours critiques, les briefs tenus à jour par les agents mêmes qui les consomment. Le temps d'outillage était un impôt. C'est devenu des intérêts composés.</p>
<p><strong>Et le rituel humain qui porte tout : le partage de pratiques.</strong> Presque chaque semaine, l'équipe s'assoit pour partager ce qu'elle a appris du travail avec les agents — une quinzaine de comptes-rendus en quatre mois. Ce qui marche devient un skill. Ce qui engage l'architecture devient un decision record. C'est la boucle d'apprentissage la plus rapide que j'aie vue dans ma carrière, et elle ne doit rien aux modèles.</p>
<p>Et cette vélocité a une échéance, pas seulement un compteur : un premier MVP de préadmission déployé en octobre 2026, le workflow complet début 2027, la couverture intégrale du périmètre legacy en 2028. Deux ans pour remplacer deux socles historiques. Avant les agents, personne n'aurait signé ce planning — c'est précisément pour ça que la refonte n'avait jamais été lancée.</p>
<p>Un post-scriptum que je n'avais pas prévu en commençant ce billet : au moment où je le terminais, la direction du groupe — PDG et CFO en tête — a passé le projet en revue. Son verdict : très en avance sur le reste du groupe, en pratiques comme en résultats, au point d'en faire le pilote du nouveau contrat groupe avec un fournisseur de modèles de pointe — accès officiel aux outils financé par le groupe, et des ressources supplémentaires pour l'équipe. Je le mentionne moins par fierté (bon, un peu) que pour ce que ça confirme : la méthode décrite plus haut ne fait pas qu'accélérer une équipe. Elle se remarque, elle attire, et elle finit par redescendre en politique de groupe. La boucle d'apprentissage locale devient la stratégie de l'organisation. Ce n'est pas encore la preuve de valeur que je réclame dans cette série — mais l'attraction, à ce niveau-là, est aussi une mesure.</p>

<h2>Mesuré vs. vendu</h2>
<p>La règle de cette série n'a pas changé : séparer ce qui se mesure de ce qui se raconte. Appliquée au semestre, elle donne quatre constats. Prenons-les un par un.</p>
<p><strong>D'abord, la mesure qui pique.</strong> Le meilleur essai randomisé disponible reste celui de METR : des développeurs open-source expérimentés, sur des dépôts qu'ils connaissaient depuis des années, ralentis de 19 % par les outils IA de début 2025 — tout en se croyant 20 % plus rapides. Quarante points d'écart entre le ressenti et le chronomètre. Et le ralentissement était invisible pour ceux qui le vivaient. METR a depuis tenté de refaire l'expérience, et a reconnu que le nouveau protocole était trop biaisé pour donner un chiffre propre. Autrement dit : la mesure la plus rigoureuse dont on dispose est un ralentissement, et tout ce qui pointe dans l'autre sens, ce sont des gens qui décrivent leur propre expérience.</p>
<p><strong>Ensuite, le gradient est réel, et je vis des deux côtés.</strong> La recherche de Stanford sur la productivité donne 30 à 40 % de gain sur du greenfield, et 0 à 10 % sur du brownfield complexe. Mon semestre confirme les deux bouts à la fois. Sur les suites legacy que nous maintenons encore — vieilles de plusieurs années, pleines de contrats implicites — aucune sortie depuis janvier n'a vraiment déplacé l'aiguille. Sur Solstice, la reconstruction greenfield, les agents tournent à pleine vitesse. Le gradient n'est pas une note de bas de page ; c'est toute l'explication du fait que deux ingénieurs honnêtes peuvent rapporter des expériences opposées des mêmes outils. Et même du côté vert, la vitesse n'a pas été gratuite — c'est l'histoire d'infrastructure racontée plus haut, une facture payée d'avance.</p>
<p><strong>Troisième constat — et c'est là que mes propres sous-agents m'ont sauvé la mise.</strong> J'allais attribuer à DORA des deltas de temps de revue et d'incidents qui appartiennent en réalité au rapport de télémétrie de Faros AI. Un agent de vérification m'a pris la main dans le sac avant publication — exactement la paresse de sourcing que je reproche aux autres. De toute cette famille de métriques de delivery, je ne garde qu'un chiffre, celui de LinearB, mesuré sur 8,1 millions de pull requests : 32,7 % d'acceptation pour les PR écrites par l'IA, contre 84,4 % pour les humaines. Le goulot n'est plus d'écrire du code. C'est de décider s'il est sûr de le fusionner.</p>
<blockquote><p>"Le benchmark que tout le monde citait a été enterré par ceux qui le citaient. Faites confiance à la tendance. Refusez le classement."</p></blockquote>
<p><strong>Enfin, ce que vendent les éditeurs : du débit.</strong> Microsoft a publié la plus grande étude en organisation réelle du semestre — des dizaines de milliers d'ingénieurs — et trouve environ 24 % de pull requests fusionnées en plus chez les adopteurs. C'est un vrai résultat, je ne vais pas le balayer. Mais les auteurs écrivent eux-mêmes la phrase qui compte : « une PR fusionnée n'est pas la valeur qu'elle livre ». Ils mesurent précisément la métrique que la taxe de vérification gonfle. Entre « plus de PR fusionnées » et « plus de valeur livrée », il y a toute la nuance du semestre.</p>

<h2>Le bulletin de notes</h2>
<p>Cinq paris, six mois de données. Voici la copie corrigée.</p>
<table>
<thead><tr><th>Le pari (mars–mai)</th><th>Note</th><th>Pourquoi</th></tr></thead>
<tbody>
<tr><td><strong>Le SDLC est mort</strong></td><td>Tient, amendé</td><td>La cérémonie est morte ; une porte de vérification est née. Le processus n'a pas rétréci — son centre de gravité est passé de l'écriture à la revue.</td></tr>
<tr><td><strong>L'IA est un amplificateur</strong></td><td>Confirmé</td><td>Débit en hausse en surface, coûts qualité qui se composent en dessous. Le MIT : 95 % des pilotes d'IA générative sans impact mesurable sur le P&amp;L. L'outil amplifie le système autour — exactement le pari.</td></tr>
<tr><td><strong>La courbe en J est réelle</strong></td><td>À corriger</td><td>Le creux est maintenant mesuré. La remontée au-dessus de la ligne de base, non — elle repose sur du déclaratif. Voir plus bas.</td></tr>
<tr><td><strong>Il existe une taxe de vérification</strong></td><td>Confirmé, chiffré</td><td>Temps de revue et attente en file en forte hausse (Faros, LinearB) ; délégation complète bloquée à 0–20 % des tâches ; l'auto-contrôle désormais vendu comme fonctionnalité.</td></tr>
<tr><td><strong>Le codeur devient ingénieur</strong></td><td>Confirmé</td><td>Le travail de pointe du semestre, c'est l'orchestration — écrire le harnais, câbler les outils, noter les agents. Pas taper de la syntaxe.</td></tr>
</tbody>
</table>

<p>La correction, donc, en un paragraphe plutôt qu'en chapitre : dans l'article sur DORA, j'ai dessiné une courbe en J qui repasse au-dessus de sa ligne de base avec plus d'assurance que les données ne l'autorisaient. Le creux est mesuré ; la remontée repose encore sur du déclaratif et des indicateurs de débit. Alors je le dis simplement — <strong>les agents ont gagné en portée plus vite qu'en fiabilité</strong> — et je passe, parce que l'histoire intéressante du semestre n'est pas la courbe. C'est ce que les équipes ont fait de cet écart.</p>

<h2>Le plafond que personne ne vous vend</h2>
<p>Si la remontée se fait attendre, ce n'est pas que les modèles manquent d'intelligence. C'est de l'arithmétique. Un agent fiable à 95 % à chaque étape termine une tâche de vingt étapes un peu plus d'une fois sur trois. Une tâche de cinquante étapes ? Sept fois sur cent. Les erreurs se multiplient entre elles, l'autonomie longue s'effondre bien en dessous de la démo, et la seule chose entre cet effondrement et votre branche de production s'appelle la vérification. Les travaux sur le « context rot » montrent le même phénomène côté mémoire : passé quelques centaines de milliers de tokens, les modèles se dégradent en silence.</p>
<p>Et puis un coût est apparu qu'aucun de mes paris de mars n'avait prévu : la sécurité. L'injection de prompt se discute maintenant comme une propriété permanente des agents, pas comme un bug en attente de correctif. Des CVE sévères ont touché les outils que nous utilisons tous les jours. Anthropic a même révélé qu'un groupe lié à un État avait détourné des instances de Claude Code pour de l'espionnage quasi autonome. La cérémonie du SDLC est bien morte — ce qui naît à sa place, c'est une discipline : provenance, sandboxing, vérification d'agents. Ce n'est pas un démenti de la série. C'est la porte que l'ancien processus aurait dû être depuis le début.</p>

<h2>Ce qu'on délègue en juillet</h2>
<p>La question pratique qu'on me pose partout : concrètement, qu'est-ce qu'un agent fait seul en juillet 2026 qu'il ne faisait pas en janvier ? Réponse depuis Solstice, couloir par couloir.</p>
<p><strong>En janvier</strong>, un agent complétait une fonction et rédigeait un test si on le lui demandait poliment. La PR d'agent était une démo qu'on montrait, pas un flux qu'on vivait.</p>
<p><strong>En avril-mai</strong>, avec l'auto-vérification puis les flottes de sous-agents, on est passé de déléguer une fonction à déléguer un chantier entier : notre réécriture React s'est faite comme ça — un pipeline d'agents sur des centaines de fichiers, chaque lot borné par les tests existants, un humain à la fusion. Les 1 764 commits de mai, c'est ça, rendu visible.</p>
<p><strong>En juillet</strong>, voilà ce qui part seul, sur notre dépôt, sans qu'un humain écrive une ligne :</p>
<ol>
<li><strong>La PR de périmètre borné, de bout en bout.</strong> Ticket → branche → code → tests → verdict <code>task verify</code> → PR ouverte. L'humain n'apparaît qu'à la revue. Condition non négociable : le couloir a son CLAUDE.md, ses skills, et la porte rend PASS.</li>
<li><strong>La CI qui se répare elle-même.</strong> Collisions de noms de conteneurs, environnements de déploiement qui dérivent : les agents corrigent désormais leur propre tuyauterie. Impensable en janvier — personne n'aurait laissé un agent approcher le pipeline.</li>
<li><strong>Les specs E2E sur les parcours critiques.</strong> Du front jusqu'au back, générées puis maintenues. Vingt-sept aujourd'hui.</li>
<li><strong>La documentation qui suit le code.</strong> Comptes-rendus, ADR rédigés pour relecture, CLAUDE.md par service tenus à jour. Les agents écrivent la doc sur laquelle les agents tournent — la boucle s'est refermée ce semestre.</li>
</ol>
<p>Et ce qui ne part toujours pas seul, même en juillet : l'architecture — les 54 ADR sont des décisions d'humains, à commencer par celles qui bornent ce que les agents ont le droit de toucher. Le masquage de l'identifiant patient sur nos écrans est passé par une enveloppe ADR avant qu'une seule ligne écrite par un agent ne l'approche. La décision de fusion, toujours. Et le découpage lui-même : c'est l'humain qui trace les couloirs, jamais l'agent qui s'en attribue un.</p>
<blockquote><p>« L'autonomie ne se décrète pas au niveau du modèle. Elle s'équipe, couloir par couloir — un brief, des skills, une porte qui sait dire non. »</p></blockquote>
<p>C'est ma lecture du semestre, vue du terrain : chaque marche de l'escalier ne rend pas l'agent plus intelligent, elle élargit ce qu'on ose lui confier. Une fonction en janvier, un chantier en mai, un flux en juillet — la vitesse à laquelle grossit ce qu'on ose leur confier, voilà la vraie mesure de l'autonomie. Pas les benchmarks.</p>

<h2>Ce qui reste aux humains</h2>
<p>Comme dans chaque article de cette série, la liste honnête. Six mois de progrès n'ont rien retiré de tout ceci de nos épaules.</p>
<p><strong>Décider si le code est sûr à fusionner.</strong> C'est la taxe, et elle n'a pas baissé — elle a grossi, et elle est passée en tête du pipeline. Un taux d'acceptation de 32,7 %, c'est un humain qui dit « non » des milliers de fois par jour. Sur notre dépôt, la porte <code>task verify</code> dit « non » avant même qu'un humain ne lise le diff — mais le clic de fusion reste humain, à chaque fois. Ce jugement, c'est le métier maintenant.</p>
<p><strong>Lire le chiffre d'éditeur en sceptique.</strong> Un benchmark s'est fait enterrer par ses propres promoteurs cette année. Deux rapports se sont retrouvés confondus dans mon propre brouillon, jusqu'à ce qu'un vérificateur me rattrape. Personne n'automatise le filtre d'intérêt à votre place.</p>
<p><strong>Vivre avec la réalité du brownfield.</strong> Le plafond de 10 %, c'est là que vit le logiciel régulé, legacy, à conséquences. Aucune sortie du semestre ne l'a bougé. Celui qui connaît les contrats implicites du système reste celui qui livre sans rien casser.</p>
<p><strong>Garder les gens.</strong> Klarna a passé l'année à reconstruire discrètement la capacité humaine qu'elle avait coupée, après une chute de qualité. L'argument financier n'a pas changé : la valeur s'est déplacée <em>vers</em> les humains capables de spécifier, d'orchestrer et de vérifier des flottes d'agents. Licenciez-les, et vous supprimez votre propre retour sur investissement — juste au creux de la courbe, là où la taxe mord le plus fort. Dans mon équipe, sur ces six mois, l'effectif a encore grandi. Personne n'a été remplacé par une machine.</p>

<h2>Que faire lundi matin</h2>
<p>Si vous dirigez une équipe et voulez tirer quelque chose de concret de ce point d'étape :</p>
<ol>
<li><strong>Budgétez la porte de revue, pas seulement les licences.</strong> Si vos agents livrent plus de PR, quelqu'un relit plus de PR. Dotez et mesurez cette capacité <em>avant</em> de passer la génération à l'échelle, sinon la file d'attente devient votre vrai goulot.</li>
<li><strong>Documentez pour les agents, pas seulement pour les humains.</strong> Un brief par service, un skill par geste répété, un glossaire du domaine. L'investissement le moins spectaculaire du semestre, et le plus rentable : chez nous, près d'une ligne de Markdown pour cinq lignes de code — et c'est elle qui rend la délégation possible.</li>
<li><strong>Mesurez votre propre gain net sur de vrais tickets.</strong> Pas des démos greenfield — le code legacy que vous maintenez vraiment, reprise et revue déduites. Ce chiffre est le vôtre, et c'est le seul qui n'appartienne pas à un éditeur.</li>
<li><strong>Gardez les lots petits.</strong> Le calcul d'erreur composée est impitoyable : des exécutions d'agent courtes avec des points de contrôle humains battent une héroïque délégation de cinquante étapes, à tous les coups. Concevez pour la vérification, pas pour le théâtre de l'autonomie.</li>
<li><strong>Traitez la sécurité des agents comme de la sécurité de production.</strong> Injection de prompt, permissions d'outils, provenance. Si un agent peut lancer une commande, supposez qu'une entrée hostile le peut aussi. Sandboxez en conséquence.</li>
<li><strong>Enterrez vos benchmarks morts.</strong> Si OpenAI a lâché SWE-bench Verified, votre slide interne « le modèle score X » est probablement périmée aussi. Faites confiance à la tendance et à votre propre dépôt — à rien de ce qui vient d'un classement.</li>
</ol>

<h2>Où cela laisse la série</h2>
<p>Il y a six mois, je prédisais depuis l'intérieur d'une équipe. Aujourd'hui, les modèles vérifient leur propre travail, les flottes sont devenues de l'infrastructure, et mon propre dépôt montre ce que quatre mois de développement en font sur une base de code jeune quand la méthode suit. Quatre de mes cinq paris sortent renforcés ; le cinquième m'a appris à préférer les creux mesurés aux remontées promises. Les agents ont gagné de l'horizon, pas une laisse plus courte. La portée est là. La fiabilité à cette portée se construit — version après version chez les éditeurs, porte après porte chez nous — et pour l'instant, ce travail est à nous.</p>
<p>Le prochain rendez-vous s'écrit tout seul : le jour où on confiera aux agents plus gros qu'un flux — quelque chose que j'hésite encore à nommer — je ressortirai ce bulletin. D'ici là : posez les rails, gardez la porte, et comptez vos propres chiffres.</p>
<p><strong>Lire la suite de la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">Le SDLC est mort</a> — pourquoi le processus a toujours été du gaspillage. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coder n'a jamais été le métier</a> — ce que devient l'ingénieur quand la syntaxe disparaît. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">L'IA est devenue un réflexe d'équipe</a> — à quoi ressemble une équipe IA-native un mardi. <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA vient de confirmer ce que mon équipe a déjà vécu</a> — le rapport qui a nommé la courbe en J que je corrige aujourd'hui.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://metr.org/blog/2026-1-29-time-horizon-1-1/">METR — Measuring AI Ability to Complete Long Tasks (Time Horizon 1.1)</a> : le doublement de l'horizon de tâche à 50 % de fiabilité, environ tous les quatre mois.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2507.09089">METR — Impact of Early-2025 AI on Experienced Open-Source Developer Productivity</a> : l'essai randomisé qui a mesuré un ralentissement de 19 % malgré une accélération <em>ressentie</em> de 20 %.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/">OpenAI — Why we no longer evaluate SWE-bench Verified</a> : le retrait du benchmark, contamination et tests cassés.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://softwareengineeringproductivity.stanford.edu/ai-impact">Stanford — Software Engineering Productivity (Denisov-Blanch)</a> : le gradient greenfield-vs-brownfield, cité par DORA.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://dora.dev/ai/roi/report/">DORA — The ROI of AI-assisted Software Development (2026)</a> : le cadre de l'amplificateur, la taxe d'instabilité, le chiffre ≤10 % sur du brownfield.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.faros.ai/blog/ai-software-engineering">Faros AI — The Acceleration Whiplash (2026)</a> : les deltas de télémétrie de delivery (temps de revue, incidents, bugs) — ce ne sont <em>pas</em> les chiffres de DORA.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://linearb.io/resources/software-engineering-benchmarks-report">LinearB — 2026 Software Engineering Benchmarks</a> : acceptation des PR IA 32,7 % vs 84,4 %, et l'attente en file 5,3× des PR agentiques.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2607.01418">Murphy-Hill et al. — Adoption and Impact of Command-Line AI Coding Agents (Microsoft, 2026)</a> : les ~24 % de PR fusionnées en plus, et l'aveu « une PR fusionnée n'est pas la valeur ».</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/">Model Context Protocol — sortie 2026</a> : le cœur stateless qui a transformé les flottes d'agents en infrastructure.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://code.claude.com/docs/en/workflows">Claude Code — Dynamic Workflows</a> : la répartition déterministe sur jusqu'à 1 000 agents par exécution (~16 en parallèle).</li>
<li>Solstice* — télémétrie interne du dépôt (commits, PR, tests, ADR), instantané au 16 juillet 2026, et rationnel produit interne (arbitrage de refonte, roadmap 2026→2028). Pas de lien : c'est une base de code privée, et « Solstice » est un nom de code fictif — le projet réel, ses produits et ses technologies legacy sont anonymisés. Des chiffres de débit, pas de valeur — à lire avec le même scepticisme que ceux d'un éditeur.</li>
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
