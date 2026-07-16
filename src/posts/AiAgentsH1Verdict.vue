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
  description: 'A frontier model every six weeks — and on my own project, Alliage, four months of counters: 4,526 commits, 999 PRs, a full frontend rewrite. I grade my own predictions: four held, one gets corrected. Agent velocity is real; autonomy is earned lane by lane.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Six months, seven frontier models: Opus 4.6, 4.7, 4.8, Fable 5, Sonnet 5, GPT-5.5, GPT-5.6 — a new step roughly every six weeks. I re-read the calls I made in this series between March and May: the SDLC as waste, AI as an amplifier, the verification tax, the coder becoming an engineer. Four held, and got stronger. One correction is due all the same: the models gained reach much faster than they gained reliability. Every release goes further; none of them fails less at that distance yet. That gap is the verification tax I named — and now it has numbers. This time I open my own books too: four months of Alliage, the healthcare-suite merge my team runs — 4,526 commits, 999 pull requests, 127 releases, a full frontend rewrite, and barely 2% of commits signed by an agent. The thread of the half-year: agent velocity and autonomy push deeper into the SDLC every month — as long as you pay the tax in infrastructure, not in trust.</p></div>
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

<h2>The field: Alliage, four months on the clock</h2>
<p>This series has been quoting "my team" for six months without ever opening the books. Let's fix that too. Since March, my day job has a codename: Alliage — the merge of two long-lived healthcare product suites into a single TypeScript platform. Thirty-one backend microservices, five micro-frontends, about 606,000 lines across 5,085 files. Brownfield in the strictest sense: years of implicit contracts, a regulated domain, patient data. Exactly the terrain the 10% ceiling describes.</p>
<p>Here are the counters, frozen on July 15:</p>
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="From March 10 to July 15, 2026, the Alliage repository logged 4,526 commits — about 35 a day. Monthly bars: 394 in March, 1,038 in April, 1,764 in May — the peak of the React rewrite executed as an agent pipeline — 810 in June, 520 over the first half of July, on pace for roughly 1,070 across the month." class="diagram-svg">
<text x="64" y="34" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">ALLIAGE · COMMITS PER MONTH · MARCH – JULY 15, 2026</text>
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
<li><strong>A full rewrite, executed mid-flight.</strong> ADR 0051 decided the frontend would leave Vue for React. Four months later: 328 <code>.tsx</code> files, zero <code>.vue</code> left. That kind of migration used to be a year-long project with its own steering committee. Here it was an agent sweep across hundreds of files, fenced in by tests, merged by humans.</li>
<li><strong>The autonomy infrastructure.</strong> 54 architecture decision records, 41 CLAUDE.md briefs — one per service — 39 skills, 260 docs. Nearly one line of Markdown for every five lines of code. That is not bureaucracy; it's the context we inject into agents so they can work a lane without us. We stopped documenting for humans only. We document for fleets.</li>
<li><strong>The tax, made executable.</strong> 643 test files, 27 end-to-end specs on the critical journeys, and a <code>task verify</code> gate that returns a PASS/FAIL verdict before any PR exists. The verification tax this series keeps naming is no longer a blog-post concept — it's a binary in the CI.</li>
</ul>
<p>And the most honest number of the lot: of those 4,526 commits, barely a hundred — around 2% — carry an agent's signature. Two humans sign 87%. The velocity is real; the autonomy is earned lane by lane. A human-signed commit, in 2026, is more and more often the output of a fleet that human specified, orchestrated and verified.</p>
<p>Diagnosis versus arithmetic, as always: these are throughput numbers, not value — precisely the metric Microsoft warns gets inflated. I publish them as field facts, not as ROI. The value gets read the day the merged platform holds production load for real customers. But the throughput itself tells a story January could not tell.</p>

<h2>Measured vs. sold</h2>
<p>The rule of this series hasn't changed: separate what is measured from what is told. Applied to the half-year, it gives four findings. Let me take them one at a time.</p>
<p><strong>First, the measurement that stings.</strong> The best randomized trial we have is still METR's: experienced open-source developers, working in repositories they had known for years, were 19% <em>slower</em> with early-2025 AI tools — while believing they were 20% faster. Forty points between what they felt and what the clock said. And the slowdown was invisible to the people living it. METR has since tried to rerun the experiment and admitted the new design was too skewed to give a clean number. So here is the honest state of play: the most rigorous measurement on record is a slowdown, and everything pointing the other way is people describing their own experience.</p>
<p><strong>Second, my terrain didn't move.</strong> Stanford's productivity research — the one the DORA 2026 report leans on — puts the gain at 30 to 40% on simple greenfield work, and 0 to 10% on complex brownfield code. That ceiling survived Opus 4.8. It survived GPT-5.6. A new frontier model every six weeks, and the one number that describes my day job — regulated healthcare software, years old, full of implicit contracts — didn't gain a single point. One nuance, though, that my own counters force on me: the ceiling measures the net gain of a developer handed an agent inside an unchanged SDLC. It says nothing about a team that rebuilds its SDLC around the agents — verification gates, per-service briefs, bounded lanes. On Alliage, that rebuild is what produced the numbers above. The ceiling is real; it just isn't a law of nature. It's an invoice — the price of the autonomy infrastructure, payable up front.</p>
<p><strong>Third — and this is where my own sub-agents saved me.</strong> I was about to write that DORA had measured some staggering deltas: median PR review time up 441%, incidents per PR up 243%, bugs per developer up 54%. Except those numbers are not DORA's. They come from Faros AI's "Acceleration Whiplash" report, built on telemetry from about 22,000 developers. DORA provides the framework; Faros provides the deltas. Mixing them up is exactly the sourcing laziness I keep criticizing in others, and a fact-checking agent caught me doing it. Meanwhile LinearB, across 8.1 million pull requests, measured AI-written PRs getting accepted 32.7% of the time against 84.4% for human ones — and agent PRs waiting 5.3 times longer in the queue. The bottleneck is no longer writing code. It's deciding whether the code is safe to merge.</p>
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

<h2>The one correction I owe myself</h2>
<p>In the DORA piece, I drew a J-curve that dips and then climbs, and I drew it sailing back above its starting point with real confidence. Six months later, I can prove the descent. Not the climb.</p>
<p>The descent is measured three times over: METR's −19%, the 10% brownfield ceiling, the review tax sitting in the telemetry. The climb, though, rests on people's own accounts of themselves. METR's 2026 survey has developers crediting themselves with a 1.4 to 2× gain — a figure METR itself warns overstates the value. Microsoft's +24% is real, but it's counted in merged PRs, a throughput proxy. Nobody has yet published a clean, measured, net-of-review-cost gain on complex legacy code. So my correction fits in one sentence: <strong>agents gained reach faster than they gained reliability</strong>, and I let the pretty shape of the J make me more confident about the ending than the data allows. The J exists. I've only seen half of it.</p>
<blockquote><p>"I can prove the dip. Not yet the climb. That's the honest state of the art."</p></blockquote>

<h2>The ceiling nobody sells you</h2>
<p>If the climb is taking its time, it's not because the models lack intelligence. It's arithmetic. An agent that is 95% reliable at each step finishes a 20-step task a little better than one time in three. A 50-step task? Seven times in a hundred. Errors multiply into each other, long-horizon autonomy collapses far below the demo reel, and the only thing standing between that collapse and your production branch is called verification. The "context rot" research shows the same thing on the memory side: past a few hundred thousand tokens, the models degrade quietly.</p>
<p>And then a cost showed up that none of my March bets had named: security. Prompt injection is now discussed as a permanent property of agents, not a bug awaiting a patch. Severe CVEs hit the exact tools we use every day. Anthropic even disclosed that a state-linked group had hijacked Claude Code instances to run near-autonomous espionage. The SDLC's ceremony is dead, all right — what's being born in its place is a discipline: provenance, sandboxing, agent verification. That's not a rebuttal of the series. It's the gate the old process should have been all along.</p>

<h2>What we hand the agents in July</h2>
<p>The practical question everyone asks me: concretely, what does an agent do alone in July 2026 that it couldn't in January? Answer from inside Alliage, lane by lane.</p>
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
<p>Six months ago I was predicting from inside one team. Today, external measurement has caught up with my terrain — and the strange part is that it tells the same story. Four bets came out stronger. The fifth is corrected, and I'd rather correct it myself than wait for someone to do it for me. The agents gained a longer horizon, not a shorter leash. The reach is real. Reliability at that reach is the work still in front of us — and for now, that work is ours.</p>
<p>The next checkpoint writes itself: the day someone publishes a clean climb — measured, verification cost deducted, on real legacy code — I'll pull this report card back out and grade again. Until then, the dip is proven and the climb is a promise. Know which half of the curve you're standing in.</p>
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
<li>Alliage — internal repository telemetry (commits, PRs, tests, ADRs), snapshot of July 16, 2026. No link: it's a private codebase. Throughput numbers, not value — read them with the same skepticism as any vendor's.</li>
</ul>`
}

const frenchContent: PostContent = {
  title: 'Six mois d\'agents : j\'ai corrigé ma propre copie',
  description: 'Un modèle de pointe toutes les six semaines — et sur mon propre projet, Alliage, quatre mois de compteurs : 4 526 commits, 999 PR, une réécriture frontend complète. Je corrige ma copie : quatre paris tiennent, un se corrige. La vélocité des agents est réelle ; l\'autonomie se gagne couloir par couloir.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Entre mars et mai, j'ai posé cinq paris dans cette série : le SDLC a toujours été du gaspillage, l'IA est un amplificateur, la courbe en J existe, la vérification a un prix, le codeur devient ingénieur. Six mois plus tard, les données sont là. Quatre paris tiennent — mieux, ils se renforcent. Le cinquième me vaut une correction : j'ai cru à la remontée de la courbe en J avant que les données n'y croient. Les agents vont beaucoup plus loin qu'en janvier. Ils ne sont pas devenus plus fiables à cette distance. Cet écart, c'est la taxe de vérification que j'avais nommée — et cette fois, elle est chiffrée. Et cette fois, j'ouvre aussi mes propres compteurs : quatre mois d'Alliage — la fusion de deux suites santé que porte mon équipe — 4 526 commits, 999 pull requests, 127 versions, une réécriture frontend complète, et à peine 2 % des commits signés par un agent. Le fil du semestre : la vélocité et l'autonomie des agents s'enfoncent chaque mois un peu plus loin dans le SDLC — à condition de payer la taxe en infrastructure, pas en confiance.</p></div>
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

<h2>Le terrain : Alliage, quatre mois au compteur</h2>
<p>Cette série cite « mon équipe » depuis six mois sans jamais ouvrir les compteurs. Corrigeons ça aussi. Depuis mars, mon quotidien a un nom de code : Alliage — la fusion de deux suites produit santé historiques en une seule plateforme TypeScript. Trente et un microservices backend, cinq micro-frontends, environ 606 000 lignes réparties sur 5 085 fichiers. Du brownfield au sens le plus strict : des années de contrats implicites, un domaine régulé, des données patients. Exactement le terrain que décrit le plafond des 10 %.</p>
<p>Voici les compteurs, arrêtés au 15 juillet :</p>
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Du 10 mars au 15 juillet 2026, le dépôt Alliage enregistre 4 526 commits, soit environ 35 par jour. Barres mensuelles : 394 en mars, 1 038 en avril, 1 764 en mai — le pic de la réécriture React exécutée en pipeline d'agents —, 810 en juin, 520 sur la première moitié de juillet, un rythme d'environ 1 070 sur le mois." class="diagram-svg">
<text x="64" y="34" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">ALLIAGE · COMMITS PAR MOIS · MARS – 15 JUILLET 2026</text>
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
<li><strong>Une réécriture complète, en vol.</strong> L'ADR 0051 a acté l'abandon de Vue pour React. Quatre mois plus tard : 328 fichiers <code>.tsx</code>, zéro <code>.vue</code> restant. Ce genre de migration, avant, c'était un projet d'un an avec son propre comité de pilotage. Là, c'est un sweep d'agents sur des centaines de fichiers, borné par les tests, fusionné par des humains.</li>
<li><strong>L'infrastructure d'autonomie.</strong> 54 architecture decision records, 41 CLAUDE.md — un par service —, 39 skills, 260 documents. Près d'une ligne de Markdown pour cinq lignes de code. Ce n'est pas de la bureaucratie : c'est le contexte qu'on injecte aux agents pour qu'ils tiennent un couloir sans nous. On ne documente plus seulement pour les humains. On documente pour les flottes.</li>
<li><strong>La taxe, rendue exécutable.</strong> 643 fichiers de test, 27 specs E2E sur les parcours critiques, et une porte <code>task verify</code> qui rend un verdict PASS/FAIL avant même qu'une PR existe. La taxe de vérification que cette série n'arrête pas de nommer n'est plus un concept de billet de blog — c'est un binaire dans la CI.</li>
</ul>
<p>Et le chiffre le plus honnête du lot : sur ces 4 526 commits, une centaine à peine — environ 2 % — porte la signature d'un agent. Deux humains en signent 87 %. La vélocité est réelle ; l'autonomie, elle, se gagne couloir par couloir. Un commit signé par un humain, en 2026, c'est de plus en plus souvent le travail d'une flotte que cet humain a spécifiée, orchestrée et vérifiée.</p>
<p>Diagnostic contre arithmétique, comme toujours : ces chiffres mesurent du débit, pas de la valeur — précisément la métrique dont Microsoft nous prévient qu'elle gonfle. Je les publie comme des faits de terrain, pas comme un ROI. La valeur, on la lira le jour où la plateforme fusionnée tiendra la charge en production chez les clients. Mais le débit lui-même raconte quelque chose que janvier ne racontait pas.</p>

<h2>Mesuré vs. vendu</h2>
<p>La règle de cette série n'a pas changé : séparer ce qui se mesure de ce qui se raconte. Appliquée au semestre, elle donne quatre constats. Prenons-les un par un.</p>
<p><strong>D'abord, la mesure qui pique.</strong> Le meilleur essai randomisé disponible reste celui de METR : des développeurs open-source expérimentés, sur des dépôts qu'ils connaissaient depuis des années, ralentis de 19 % par les outils IA de début 2025 — tout en se croyant 20 % plus rapides. Quarante points d'écart entre le ressenti et le chronomètre. Et le ralentissement était invisible pour ceux qui le vivaient. METR a depuis tenté de refaire l'expérience, et a reconnu que le nouveau protocole était trop biaisé pour donner un chiffre propre. Autrement dit : la mesure la plus rigoureuse dont on dispose est un ralentissement, et tout ce qui pointe dans l'autre sens, ce sont des gens qui décrivent leur propre expérience.</p>
<p><strong>Ensuite, mon terrain n'a pas bougé.</strong> La recherche de Stanford sur la productivité — celle sur laquelle s'appuie le rapport DORA 2026 — donne 30 à 40 % de gain sur du greenfield simple, et 0 à 10 % sur du brownfield complexe. Ce plafond a survécu à Opus 4.8. Il a survécu à GPT-5.6. Un modèle de pointe toutes les six semaines, et le seul chiffre qui décrit mon quotidien — du logiciel de santé régulé, vieux de plusieurs années, plein de contrats implicites — n'a pas pris un point. Une nuance, tout de même, que mes propres compteurs m'imposent : ce plafond mesure le gain net d'un développeur qu'on équipe d'un agent sans rien changer autour. Il ne dit rien d'une équipe qui reconstruit son SDLC autour des agents — portes de vérification, briefs par service, couloirs bornés. Sur Alliage, c'est cette reconstruction-là qui a produit les chiffres du chapitre précédent. Le plafond est réel ; il n'est simplement pas une loi de la nature. C'est une facture — le prix de l'infrastructure d'autonomie, payable d'avance.</p>
<p><strong>Troisième constat — et c'est là que mes propres sous-agents m'ont sauvé la mise.</strong> J'allais écrire que DORA avait mesuré des deltas vertigineux : +441 % de temps médian de revue de PR, +243 % d'incidents par PR, +54 % de bugs par développeur. Sauf que ces chiffres ne sont pas ceux de DORA. Ils viennent du rapport « Acceleration Whiplash » de Faros AI, bâti sur la télémétrie d'environ 22 000 développeurs. DORA fournit le cadre ; Faros fournit les deltas. Les confondre, c'est exactement la paresse de sourcing que je reproche aux autres — et c'est un agent de vérification qui m'a pris la main dans le sac. De son côté, LinearB, sur 8,1 millions de pull requests, mesure 32,7 % d'acceptation pour les PR écrites par l'IA, contre 84,4 % pour les humaines — et une attente en file 5,3 fois plus longue pour les PR d'agents. Le goulot n'est plus d'écrire du code. C'est de décider s'il est sûr de le fusionner.</p>
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

<h2>La correction que je me dois</h2>
<p>Dans l'article sur DORA, j'ai dessiné une courbe en J qui plonge puis remonte, et je l'ai fait repasser au-dessus de son point de départ avec une belle assurance. Six mois plus tard, je peux prouver la descente. Pas la remontée.</p>
<p>La descente, elle, est mesurée trois fois : les −19 % de METR, le plafond de 10 % sur le brownfield, la taxe de revue inscrite dans la télémétrie. La remontée, en revanche, repose sur ce que les gens disent d'eux-mêmes. L'enquête 2026 de METR voit les développeurs s'attribuer un gain de 1,4 à 2 fois — un chiffre dont METR elle-même prévient qu'il surestime la valeur. Le +24 % de Microsoft est réel, mais il compte des PR fusionnées, un indicateur de débit. Personne n'a encore publié de gain net, mesuré, coût de revue déduit, sur du code legacy complexe. Ma correction tient donc en une phrase : <strong>les agents ont gagné en portée plus vite qu'en fiabilité</strong>, et j'ai laissé la jolie forme du J me rendre plus sûr de la fin de l'histoire que les données ne l'autorisent. Le J existe. Je n'en ai vu que la moitié.</p>
<blockquote><p>"Je peux prouver le creux. Pas encore la remontée. Voilà l'état de l'art, honnêtement."</p></blockquote>

<h2>Le plafond que personne ne vous vend</h2>
<p>Si la remontée se fait attendre, ce n'est pas que les modèles manquent d'intelligence. C'est de l'arithmétique. Un agent fiable à 95 % à chaque étape termine une tâche de vingt étapes un peu plus d'une fois sur trois. Une tâche de cinquante étapes ? Sept fois sur cent. Les erreurs se multiplient entre elles, l'autonomie longue s'effondre bien en dessous de la démo, et la seule chose entre cet effondrement et votre branche de production s'appelle la vérification. Les travaux sur le « context rot » montrent le même phénomène côté mémoire : passé quelques centaines de milliers de tokens, les modèles se dégradent en silence.</p>
<p>Et puis un coût est apparu qu'aucun de mes paris de mars n'avait prévu : la sécurité. L'injection de prompt se discute maintenant comme une propriété permanente des agents, pas comme un bug en attente de correctif. Des CVE sévères ont touché les outils que nous utilisons tous les jours. Anthropic a même révélé qu'un groupe lié à un État avait détourné des instances de Claude Code pour de l'espionnage quasi autonome. La cérémonie du SDLC est bien morte — ce qui naît à sa place, c'est une discipline : provenance, sandboxing, vérification d'agents. Ce n'est pas un démenti de la série. C'est la porte que l'ancien processus aurait dû être depuis le début.</p>

<h2>Ce qu'on délègue en juillet</h2>
<p>La question pratique qu'on me pose partout : concrètement, qu'est-ce qu'un agent fait seul en juillet 2026 qu'il ne faisait pas en janvier ? Réponse depuis Alliage, couloir par couloir.</p>
<p><strong>En janvier</strong>, un agent complétait une fonction et rédigeait un test si on le lui demandait poliment. La PR d'agent était une démo qu'on montrait, pas un flux qu'on vivait.</p>
<p><strong>En avril-mai</strong>, avec l'auto-vérification puis les flottes de sous-agents, la maille de délégation est passée de la fonction au chantier : notre réécriture React s'est faite comme ça — un pipeline d'agents sur des centaines de fichiers, chaque lot borné par les tests existants, un humain à la fusion. Les 1 764 commits de mai, c'est cette maille-là, rendue visible.</p>
<p><strong>En juillet</strong>, voilà ce qui part seul, sur notre dépôt, sans qu'un humain écrive une ligne :</p>
<ol>
<li><strong>La PR de périmètre borné, de bout en bout.</strong> Ticket → branche → code → tests → verdict <code>task verify</code> → PR ouverte. L'humain n'apparaît qu'à la revue. Condition non négociable : le couloir a son CLAUDE.md, ses skills, et la porte rend PASS.</li>
<li><strong>La CI qui se répare elle-même.</strong> Collisions de noms de conteneurs, environnements de déploiement qui dérivent : les agents corrigent désormais leur propre tuyauterie. Impensable en janvier — personne n'aurait laissé un agent approcher le pipeline.</li>
<li><strong>Les specs E2E sur les parcours critiques.</strong> Du front jusqu'au back, générées puis maintenues. Vingt-sept aujourd'hui.</li>
<li><strong>La documentation qui suit le code.</strong> Comptes-rendus, ADR rédigés pour relecture, CLAUDE.md par service tenus à jour. Les agents écrivent la doc sur laquelle les agents tournent — la boucle s'est refermée ce semestre.</li>
</ol>
<p>Et ce qui ne part toujours pas seul, même en juillet : l'architecture — les 54 ADR sont des décisions d'humains, à commencer par celles qui bornent ce que les agents ont le droit de toucher. Le masquage de l'identifiant patient sur nos écrans est passé par une enveloppe ADR avant qu'une seule ligne écrite par un agent ne l'approche. La décision de fusion, toujours. Et le découpage lui-même : c'est l'humain qui trace les couloirs, jamais l'agent qui s'en attribue un.</p>
<blockquote><p>« L'autonomie ne se décrète pas au niveau du modèle. Elle s'équipe, couloir par couloir — un brief, des skills, une porte qui sait dire non. »</p></blockquote>
<p>C'est ma lecture du semestre, vue du terrain : chaque marche de l'escalier ne rend pas l'agent plus intelligent, elle élargit ce qu'on ose lui confier. Une fonction en janvier, un chantier en mai, un flux en juillet — la vitesse à laquelle cette maille s'élargit, voilà la vraie mesure de l'autonomie. Pas les benchmarks.</p>

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
<p>Il y a six mois, je prédisais depuis l'intérieur d'une équipe. Aujourd'hui, la mesure externe a rattrapé mon terrain — et l'étrange, c'est qu'elle raconte la même histoire que lui. Quatre paris sortent renforcés. Le cinquième est corrigé, et je préfère le corriger moi-même plutôt que d'attendre qu'on le fasse à ma place. Les agents ont gagné de l'horizon, pas une laisse plus courte. La portée est là. La fiabilité à cette portée, c'est le travail qui reste — et pour l'instant, ce travail est à nous.</p>
<p>Le prochain rendez-vous s'écrit tout seul : le jour où quelqu'un publiera une remontée propre — mesurée, coût de vérification déduit, sur du vrai code legacy — je ressortirai ce bulletin et je noterai à nouveau. D'ici là, le creux est prouvé, la remontée est une promesse. Sachez dans quelle moitié de la courbe vous vous trouvez.</p>
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
<li>Alliage — télémétrie interne du dépôt (commits, PR, tests, ADR), instantané au 16 juillet 2026. Pas de lien : c'est une base de code privée. Des chiffres de débit, pas de valeur — à lire avec le même scepticisme que ceux d'un éditeur.</li>
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
