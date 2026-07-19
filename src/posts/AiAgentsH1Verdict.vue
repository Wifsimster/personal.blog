<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'ai-agents-h1-2026-verdict',
  date: '2026-07-16',
  tags: ['Software', 'AI', 'Opinion', 'Analysis']
}

const englishContent: PostContent = {
  title: '100% Agent-Written: Six Months on a Greenfield Rebuild',
  description: 'Eight frontier models in six months, most sold on self-verification. On Solstice, our greenfield platform, four months of development with redefined working methods turned model quality into velocity: roughly 4,500 commits, close to 1,000 PRs, 120-plus releases. What we automate in July — and what it took to get there.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Six months, eight frontier models: Opus 4.6, 4.7, 4.8, Fable 5, Sonnet 5, GPT-5.5, GPT-5.6, Kimi K3 — a new step every few weeks, and the sales pitch changed with them. Nobody sells "smarter" anymore; they sell "checks its own work". Model quality now means reliability, and it's climbing. On my own project — <abbr title="Fictitious codename: the real project, its products and its vendor are anonymized.">Solstice*</abbr>, the greenfield platform my team started in March — four months spent redefining how we work turned that quality into velocity: roughly 4,500 commits, close to 1,000 pull requests, 120-plus releases, a full frontend rewrite mid-flight. And the unit of delegation keeps widening: a function in January, a sweep in May, a whole flow in July.</p></div>
<hr>
<p>Since March, my team has been building Solstice, a greenfield platform started from a blank page. In four months we wrote less code than we rewrote the way we produce it: a brief per service, agents that each hold their own lane, a verification gate that returns its verdict before a human reads the diff. That method is what I came to write down — how we put it in place, and what it produced.</p>
<p>Six months ago, I was making predictions from inside that team, with almost nothing external to back them. Now the studies are out, and they back the calls.</p>

<h2>The staircase of six months</h2>
<p>The paradigm didn't land in one jump. It climbed step by step: a new frontier model every few weeks, each a little more autonomous than the last. And underneath, the sales pitch shifted from raw capability to reliability.</p>
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
<li><strong>January.</strong> <abbr title="Model Evaluation and Threat Research — a nonprofit AI-evaluation lab">METR</abbr> updates its Time Horizon research: the length of task an agent finishes one time out of two now doubles roughly every four months, against seven before. Forget the exact hour count — it's the shape that matters, and the shape points up, fast.</li>
<li><strong>February.</strong> Opus 4.6 ships on the 5th. Three weeks later, OpenAI stops publishing SWE-bench Verified scores: the benchmark "no longer measures frontier coding capabilities", and on audit most of a sample of failed tasks had broken tests. The benchmark everyone quoted just got buried by one of the people quoting it.</li>
<li><strong>April.</strong> Two releases in one week: Opus 4.7 on the 16th, GPT-5.5 on the 23rd — six weeks after GPT-5.4, and OpenAI says so proudly. And Opus 4.7's sales pitch isn't power. It's rigor: the model designs its own verification steps before declaring a task done. Self-checking has become a feature you pay for.</li>
<li><strong>May.</strong> Opus 4.8 on the 28th. Anthropic claims it lets four times fewer flaws slip through its own generated code than 4.7 — a vendor number, sure, but the choice of number says everything: nobody sells generation anymore, they sell control. Alongside it, Claude Code's "dynamic workflows": a replayable script that spreads work across up to a thousand agents per run, about sixteen at a time, without flooding the model's context. My <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">persona-panel method</a>, basically, turned into a product. Same month, the <abbr title="Model Context Protocol">MCP</abbr> protocol goes stateless — a fleet of agents is now a load-balancer problem, not a demo.</li>
<li><strong>June.</strong> Fable 5 on the 9th, Sonnet 5 on the 30th — the cadence is not slowing down. Meanwhile, the code-review side finally gets its numbers. I'm coming to those.</li>
<li><strong>July.</strong> GPT-5.6 on the 9th, and the biggest real-company study of the half-year: a handsome throughput figure, with a warning label glued to it. Then, on the 16th — a day after I froze these counters — Moonshot ships Kimi K3: 2.8 trillion parameters, a million-token context window, open weights, and a <em>Swarm Max</em> variant built expressly to run agents in parallel. On its own benchmarks it sits level with the proprietary frontier; take the scores with the usual salt, but the direction is the story — frontier capability is going open-weight, and it's being shaped for fleets.</li>
</ul>
<p>So much for the steps. Now look at the dashed line under the staircase — the gain actually measured on the kind of code most of us maintain. It barely moves. This entire article lives in the distance between the two.</p>
<svg viewBox="0 0 800 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of frontier model releases from February to July 2026: Opus 4.6 on February 5, Opus 4.7 on April 16, GPT-5.5 on April 23, Opus 4.8 on May 28, Fable 5 on June 9, Sonnet 5 on June 30, GPT-5.6 on July 9, and Kimi K3 on July 16. Eight frontier models from three vendors in under six months — about one every three weeks — the cadence tightening toward summer and closing on Kimi K3, the first open-weight model to reach the frontier." class="diagram-svg">
<text x="64" y="30" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">THE RELEASE CADENCE · FEB – JUL 2026</text>
<text x="64" y="58" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="700">Eight frontier models, ~one every three weeks</text>
<text x="64" y="78" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.6">Three vendors — Anthropic, OpenAI, Moonshot — closing on the first open-weight model at the frontier</text>
<line x1="70" y1="262" x2="740" y2="262" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<g stroke="currentColor" stroke-opacity="0.18" stroke-width="1">
<line x1="70" y1="257" x2="70" y2="267"></line>
<line x1="179" y1="257" x2="179" y2="267"></line>
<line x1="299" y1="257" x2="299" y2="267"></line>
<line x1="415" y1="257" x2="415" y2="267"></line>
<line x1="536" y1="257" x2="536" y2="267"></line>
<line x1="652" y1="257" x2="652" y2="267"></line>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" opacity="0.4" letter-spacing="0.1em" text-anchor="middle">
<text x="124" y="286">FEB</text>
<text x="233" y="286">MAR</text>
<text x="349" y="286">APR</text>
<text x="470" y="286">MAY</text>
<text x="590" y="286">JUN</text>
<text x="685" y="286">JUL</text>
</g>
<g stroke="currentColor" stroke-opacity="0.28" stroke-width="1.2" stroke-linecap="round">
<line x1="86" y1="262" x2="86" y2="250"></line>
<line x1="384" y1="262" x2="384" y2="250"></line>
<line x1="567" y1="262" x2="567" y2="250"></line>
<line x1="683" y1="262" x2="683" y2="250"></line>
<line x1="357" y1="262" x2="357" y2="164"></line>
<line x1="520" y1="262" x2="520" y2="164"></line>
<line x1="648" y1="262" x2="648" y2="164"></line>
<line x1="710" y1="262" x2="710" y2="164"></line>
</g>
<circle cx="710" cy="262" r="8" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.3"></circle>
<g fill="currentColor" fill-opacity="0.8">
<circle cx="86" cy="262" r="4"></circle>
<circle cx="357" cy="262" r="4"></circle>
<circle cx="384" cy="262" r="4"></circle>
<circle cx="520" cy="262" r="4"></circle>
<circle cx="567" cy="262" r="4"></circle>
<circle cx="648" cy="262" r="4"></circle>
<circle cx="683" cy="262" r="4"></circle>
<circle cx="710" cy="262" r="4"></circle>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="8.5" opacity="0.5" letter-spacing="0.12em" text-anchor="middle">
<text x="86" y="214">ANTHROPIC</text>
<text x="384" y="214">OPENAI</text>
<text x="567" y="214">ANTHROPIC</text>
<text x="683" y="214">OPENAI</text>
<text x="357" y="126">ANTHROPIC</text>
<text x="520" y="126">ANTHROPIC</text>
<text x="648" y="126">ANTHROPIC</text>
<text x="710" y="126">MOONSHOT</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle">
<text x="86" y="230">Opus 4.6</text>
<text x="384" y="230">GPT-5.5</text>
<text x="567" y="230">Fable 5</text>
<text x="683" y="230">GPT-5.6</text>
<text x="357" y="142">Opus 4.7</text>
<text x="520" y="142">Opus 4.8</text>
<text x="648" y="142">Sonnet 5</text>
<text x="710" y="142">Kimi K3</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" opacity="0.6" text-anchor="middle">
<text x="86" y="244">Feb 5</text>
<text x="384" y="244">Apr 23</text>
<text x="567" y="244">Jun 9</text>
<text x="683" y="244">Jul 9</text>
<text x="357" y="156">Apr 16</text>
<text x="520" y="156">May 28</text>
<text x="648" y="156">Jun 30</text>
<text x="710" y="156">Jul 16</text>
</g>
<text x="710" y="110" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="8.5" font-weight="650" opacity="0.75" letter-spacing="0.1em" text-anchor="middle">OPEN-WEIGHT</text>
</svg>

<h2>The field: Solstice, four months on the clock</h2>
<p>This series has been quoting "my team" for six months without ever opening the books. Let's fix that too. Since March, my day job has a codename: <abbr title="Fictitious codename: the real project, its products and its vendor are anonymized.">Solstice*</abbr> — a greenfield platform, first commit on March 10, that merges two long-lived healthcare product suites into a single new TypeScript codebase. Four months later: some thirty backend microservices, a handful of micro-frontends, around 600,000 lines across roughly 5,000 files. Greenfield with a caveat worth naming — the code is new, the domain is not. Regulated healthcare, patient data, and two legacy suites' worth of implicit contracts to honor.</p>
<p>The project's origin story is worth telling, because it is the half-year's best example of the equation changing. Patient administration and the patient journey ran on two historical foundations — one in a proprietary fourth-generation language from the nineties, the other in a desktop-era stack: technologies where every regulatory change fights the code, and where hiring has become a lost battle. The refactor-versus-rewrite dilemma had been sitting on the table for years, and it always tipped the same way: a rewrite was too expensive, too risky, a double run to fund. Agentic AI flipped the arbitrage in early 2026 — velocity multiplied, a screen prototyped in hours instead of weeks and validated with the domain experts before a line of production code, compliance codified into blocking CI guardrails: patient-identity vigilance, accessibility, auditability. The cost and the risk of the rewrite collapsed together. Solstice is not a project that uses agents. It is a project that would not exist without them.</p>
<p>The chosen foundation says the same thing: React micro-frontends behind a design system, Fastify/TypeScript microservices, PostgreSQL everywhere, <abbr title="Fast Healthcare Interoperability Resources">FHIR</abbr> R4 as the pivot data model, Docker, OpenTelemetry, GitHub Actions <abbr title="Continuous Integration / Continuous Delivery">CI/CD</abbr>. Nothing exotic — deliberately. A stack the models know by heart is a stack the agents run on at full speed.</p>
<blockquote><p>"Choosing a technology is now a hiring decision for your agents as much as for your humans."</p></blockquote>
<p>Here are the counters, frozen on July 15:</p>
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="From March 10 to July 15, 2026, the Solstice repository logged around 4,500 commits — about 35 a day. Monthly bars: ~400 in March, ~1,000 in April, ~1,800 in May — the peak of the React rewrite executed as an agent pipeline — ~800 in June, ~500 over the first half of July, on pace for roughly 1,000 across the month." class="diagram-svg">
<text x="64" y="34" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">SOLSTICE · COMMITS PER MONTH · MARCH – JULY 15, 2026</text>
<text x="64" y="68" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="26" font-weight="700">≈ 35 commits a day</text>
<text x="64" y="88" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.6">~4,500 commits · ~1,000 pull requests · 120+ tagged releases · four months</text>
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
<text x="144" y="283">~400</text>
<text x="272" y="206">~1,000</text>
<text x="400" y="120">~1,800</text>
<text x="528" y="234">~800</text>
<text x="656" y="268">~500</text>
</g>
<text x="656" y="202" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" font-style="italic" opacity="0.7" text-anchor="middle">month pace: ~1,000</text>
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
<li><strong>~4,500 commits in four months</strong> — about 35 a day. Close to 1,000 pull requests, 120-plus tagged releases, over 500 deployments. The May peak — nearly 1,800 commits — is not an anomaly; it's the month the frontend rewrite ran as a pipeline.</li>
<li><strong>A full rewrite, executed mid-flight.</strong> One architecture decision record decided the frontend would leave Vue for React. Four months later: over 300 <code>.tsx</code> files, zero <code>.vue</code> left. That kind of migration used to be a year-long project with its own steering committee. Here it was an agent sweep across hundreds of files, fenced in by tests, merged by humans.</li>
<li><strong>The autonomy infrastructure.</strong> Some fifty architecture decision records, forty-odd CLAUDE.md briefs — one per service and micro-frontend — close to forty skills, some 250 docs. Nearly one line of Markdown for every five lines of code. That's the context we inject into agents so they can work a lane without us. We stopped documenting for humans only. We document for fleets.</li>
<li><strong>The tax, made executable.</strong> Over 600 test files, a couple dozen end-to-end specs on the critical journeys, and a verification gate that returns a PASS/FAIL verdict before any PR exists. The verification tax this series keeps naming is no longer a blog-post concept — it's a binary in the CI.</li>
</ul>
<p>And the fact that matters most, stated without hedging: one hundred percent of this code is agent-written. Not "assisted", not "autocompleted" — written. No human on this project types production code anymore — a claim the workflow enforces rather than takes on trust: every change enters the repository as an agent-opened pull request. The commit signatures still carry human names, because a signature no longer says who wrote the change; it says who specified it, who orchestrated the fleet, and who verified the result.</p>
<blockquote><p>"In 2026, a commit signature is a chain of accountability, not a byline."</p></blockquote>
<p>Diagnosis versus arithmetic, as always: these are throughput numbers, not value — the metric Microsoft warns gets inflated — and they are greenfield numbers, the terrain where Stanford's research already grants agents their 30 to 40%. I claim velocity on a young codebase, nothing more. The interesting part isn't the raw count. It's what it took to get there.</p>
<h2>Four months to redefine how we work</h2>
<p>Because none of that velocity came from a model getting smarter on its own. A team of twenty-odd people doesn't get there by buying licenses. We rewrote the method piece by piece, while shipping. Here is what actually changed for us between March and July.</p>
<p><strong>Need first, prototype in hours.</strong> The old method specified for weeks before anyone coded. The new one inverts it: field immersion, journeys co-designed with the domain experts, then a working prototype produced in hours by the agents — and put in front of users before anything gets industrialized. We no longer argue over mockups. We decide on something clickable.</p>
<p><strong>Everything decided gets written down, because everything written becomes context.</strong> Some fifty architecture decision records in four months, a brief per service, a domain glossary, close to forty skills for the repeated gestures. Documentation changed nature: it is no longer a deliverable that ages, it is fuel for the fleets. A poorly written decision is a fleet coding beside the point. Nearly one line of Markdown for five lines of code — the best investment of the project.</p>
<p><strong>The machine says no before a human reads.</strong> The verification gate returns PASS or FAIL before any PR exists; human review only starts once the machine has said yes. And the architecture itself serves the method: microservices and micro-frontends are bounded lanes an agent can hold alone, without stepping on anyone else's work.</p>
<p><strong>The tooling maintains itself.</strong> Self-healing CI, <abbr title="End-to-end">E2E</abbr> specs generated and then kept alive on the critical journeys, briefs updated by the very agents that consume them. Tooling time used to be a tax. It became compound interest.</p>
<p><strong>And the human ritual that carries it all: practice-sharing.</strong> Nearly every week, the team sits down to share what it has learned about working with agents — about fifteen written reports in four months. What works becomes a skill. What binds the architecture becomes a decision record. It is the fastest learning loop I have seen in my career, and it owes nothing to the models.</p>
<p>And the velocity has a deadline attached, not just a counter: a first preadmission <abbr title="Minimum Viable Product">MVP</abbr> deployed in October 2026, the full workflow early 2027, complete coverage of the legacy scope in 2028. Two years to replace two historical foundations. Before agents, nobody would have signed that plan — which is exactly why the rewrite had never been launched.</p>

<h2>The scorecard</h2>
<p>Four calls, six months of data. Here's the graded homework.</p>
<table>
<thead><tr><th>The call (Mar–May)</th><th>Grade</th><th>Why</th></tr></thead>
<tbody>
<tr><td><strong>The <abbr title="Software Development Life Cycle">SDLC</abbr> is dead</strong></td><td>Holds, amended</td><td>The ceremony died; a verification gate was born. Process didn't shrink — its center of gravity moved from writing to reviewing.</td></tr>
<tr><td><strong>AI is an amplifier</strong></td><td>Confirmed</td><td>Throughput up top, quality costs compounding below. <abbr title="Massachusetts Institute of Technology">MIT</abbr> found 95% of <abbr title="Generative AI">GenAI</abbr> pilots delivered no measurable <abbr title="Profit and Loss">P&amp;L</abbr> impact — a contested figure; keep the direction, not the digit. The tool amplifies the system around it — exactly the claim, and the reading <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">my DORA piece</a> laid out.</td></tr>
<tr><td><strong>There is a verification tax</strong></td><td>Confirmed, quantified</td><td>Review time and queue latency up sharply (Faros, LinearB); full delegation still the exception — 0–20% of tasks depending on the study; self-checking now literally sold as a model feature.</td></tr>
<tr><td><strong>The coder becomes an engineer</strong></td><td>Confirmed</td><td>The frontier work of the half-year is orchestration — writing the harness, wiring the tools, grading the agents. Not typing syntax.</td></tr>
</tbody>
</table>


<h2>The ceiling nobody sells you</h2>
<p>If the climb is taking its time, it's not because the models lack intelligence. It's arithmetic. An agent that is 95% reliable at each step finishes a 20-step task a little better than one time in three. A 50-step task? Seven times in a hundred. Errors multiply into each other, long-horizon autonomy collapses far below the demo reel, and the only thing standing between that collapse and your production branch is called verification. The "context rot" research shows the same thing on the memory side: past a few hundred thousand tokens, the models degrade quietly.</p>
<p>And then a cost showed up that none of my March bets had named: security. Prompt injection is now discussed as a permanent property of agents, not a bug awaiting a patch. Severe <abbr title="Common Vulnerabilities and Exposures">CVEs</abbr> hit the exact tools we use every day. Anthropic even disclosed that a state-linked group had hijacked Claude Code instances to run near-autonomous espionage. The SDLC's ceremony is dead, all right — what's being born in its place is a discipline: provenance, sandboxing, agent verification. That's not a rebuttal of the series. It's the gate the old process should have been all along.</p>

<h2>What we hand the agents in July</h2>
<p>The practical question everyone asks me: concretely, what does an agent do alone in July 2026 that it couldn't in January? Answer from inside Solstice, lane by lane.</p>
<p><strong>In January</strong>, an agent completed a function and wrote a test if you asked politely. An agent PR was a demo you showed around, not a flow you lived with.</p>
<p><strong>In April and May</strong>, with self-checking and then sub-agent fleets, the unit of delegation grew from the function to the sweep: our React rewrite ran that way — a pipeline of agents over hundreds of files, each batch fenced by the existing tests, a human at the merge. May's ~1,800 commits are that unit of work, made visible.</p>
<p><strong>In July</strong>, here is what leaves on its own, on our repository, without a human writing a line:</p>
<ol>
<li><strong>The bounded-scope PR, end to end.</strong> Ticket → branch → code → tests → verification verdict → PR opened. The human only shows up at review. The non-negotiable condition: the lane has its CLAUDE.md, its skills, and the gate says PASS.</li>
<li><strong>CI that heals itself.</strong> Container-name collisions, drifting deploy stacks: the agents now fix their own plumbing. Unthinkable in January — nobody would have let an agent near the pipeline.</li>
<li><strong>End-to-end specs on the critical journeys.</strong> Front-to-back, generated and then maintained. A couple dozen today — and probably many more within weeks or months.</li>
<li><strong>The documentation the code follows.</strong> It's the reverse, really: the docs come first. They come out of the workshops and the domain experts — captured from the transcripts, then turned into briefs, ADRs, a per-service CLAUDE.md — and that is what frames the code the agents write next. Documentation stopped being a trace left behind; it's the source everything starts from.</li>
</ol>
<p>And what still does not leave alone, even in July: architecture — the fifty-odd ADRs are human decisions, above all the ones that fence what agents may touch. Masking the patient identifier on our screens went through an ADR envelope before a single agent-written line came near it. The bar the merge must clear, always — the click behind it is already automating. And the scoping itself: a human draws the lanes; an agent never grants itself one.</p>
<blockquote><p>"Autonomy is not declared at the model. It is equipped, lane by lane — a brief, a set of skills, a gate that can say no."</p></blockquote>
<p>That's my read of the half-year from ground level: each step of the staircase doesn't make the agent smarter so much as it widens what we dare hand it. A function in January, a sweep in May, a flow in July — the speed at which that unit widens is the real measure of autonomy. Not the benchmarks.</p>

<h2>The ladder someone finally numbered</h2>
<p>Halfway through writing this, Boris Cherny — who built Claude Code — published a ladder that puts numbers on the thing I keep calling "the widening unit of delegation". Five rungs, counted in agents per engineer: gated (0), assisted (one agent, a supervised pair), parallel (about ten, an orchestrator hopping between worktrees), supervised autonomy (about a hundred, a manager of managers), AI-native (a thousand-plus, steering by intent alone). It's the cleanest map I've read of the climb — and, being a vendor's, every rung comes with a product bolted to it. Keep the ladder. Ignore the catalogue.</p>
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Boris Cherny's AI-adoption ladder, counted in agents per engineer, bottom to top: rung 0 gated (0 agents), rung 1 assisted (~1 agent, a supervised pair), rung 2 parallel (~10 agents, an orchestrator), rung 3 supervised autonomy (~100 agents, a manager of managers), rung 4 AI-native (~1,000+ agents, steering by intent). Each rung is won with one more guardrail, not more tokens. My team sits at rung 2, reaching into rung 3." class="diagram-svg">
<text x="64" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">CHERNY'S ADOPTION LADDER · AGENTS PER ENGINEER</text>
<text x="64" y="60" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="700">Five rungs, one guardrail per rung</text>
<text x="64" y="80" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.6">You climb by removing the next bottleneck — not by spending more tokens</text>
<g fill="currentColor">
<rect x="230" y="126" width="470" height="32" rx="8" fill-opacity="0.19"></rect>
<rect x="230" y="178" width="320" height="32" rx="8" fill-opacity="0.17"></rect>
<rect x="230" y="230" width="178" height="32" rx="8" fill-opacity="0.15"></rect>
<rect x="230" y="282" width="84" height="32" rx="8" fill-opacity="0.12"></rect>
<rect x="230" y="334" width="36" height="32" rx="8" fill-opacity="0.09"></rect>
</g>
<rect x="230" y="230" width="178" height="32" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.6"></rect>
<rect x="230" y="178" width="320" height="32" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.4" stroke-dasharray="5,4"></rect>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="650" opacity="0.4" text-anchor="middle">
<text x="50" y="146">4</text>
<text x="50" y="198">3</text>
<text x="50" y="250">2</text>
<text x="50" y="302">1</text>
<text x="50" y="354">0</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650">
<text x="68" y="146">AI-native</text>
<text x="68" y="198">Supervised autonomy</text>
<text x="68" y="250">Parallel</text>
<text x="68" y="302">Assisted</text>
<text x="68" y="354">Gated</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="9.5" opacity="0.6">
<text x="68" y="160">steering by intent</text>
<text x="68" y="212">a manager of managers</text>
<text x="68" y="264">an orchestrator</text>
<text x="68" y="316">a supervised pair</text>
<text x="68" y="368">access locked</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" font-weight="650">
<text x="712" y="146">~1,000+ agents</text>
<text x="562" y="198">~100 agents</text>
<text x="420" y="250">~10 agents</text>
<text x="326" y="302">~1 agent</text>
<text x="278" y="354">0</text>
</g>
<path d="M 408 262 C 448 282 470 298 488 310" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.3" stroke-linecap="round"></path>
<circle cx="408" cy="262" r="3" fill="currentColor" fill-opacity="0.8"></circle>
<text x="492" y="314" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700">our team</text>
<text x="492" y="330" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" opacity="0.65">at rung 2 — reaching into 3</text>
</svg>
<p>Because the part worth keeping is the thesis, and it's the one this series has circled for six months: <em>tokens don't move you up.</em> In Cherny's own words, reaching the next rung means you "find and break down the next set of bottlenecks, and build up the next set of guardrails". That's the verification tax rewritten as a career ladder — every rung bought with a guardrail, not a bigger budget. He even hands over the value test I keep groping for: a usage dashboard measures activity, not return; the honest question is whether you'd have spent the engineering hours anyway, and what they would have cost in manual eng-hours. That's a ruler I can finally hold up to Solstice.</p>
<p>So I'll answer his closing question — where's your team? Rung two, honestly: the orchestrator, five to ten agents at once, each on its own lane, a human reviewing final diffs instead of keystrokes. On the bounded lanes where the verification gate has earned trust, we lean into rung three — work that kicks itself off, maintenance that used to wait for a free afternoon now running in the background, which is exactly where Cherny says the real payoff starts: the team stops firefighting and builds things that weren't in range before. We are nowhere near the thousand-agent top rung, and I distrust anyone who says they are; that's where the ladder stops being a maturity model and turns into a roadmap slide.</p>
<p>The line from his piece I'd underline is the humblest one: "there's no one right path through the steps". The trap he names — scaling agent count before the loop has earned trust — is the precise failure this series keeps warning about, now written from the vendor's side of the table. Same gate, same tax; we just approach it from opposite ends.</p>

<h2>What still belongs to humans</h2>
<p>As in every piece in this series, the honest list. Six months of progress took none of this off our plates.</p>
<p><strong>Deciding what "safe to merge" means.</strong> That's the tax, and it didn't get cheaper — it got bigger, and it moved to the front of the pipeline. On our repository, the verification gate now says "no" before a human even reads the diff. The merge click itself is the next thing to go: as the automated controls and guardrails pile up, PRs will soon merge on their own once the gate is green. What stays human isn't the click — it's setting the bar the gate enforces. That judgment is the job now.</p>
<p><strong>Keeping the people.</strong> Klarna — the fintech that had loudly swapped much of its support staff for AI — spent the year quietly rebuilding the human capacity it cut, after quality dropped. The financial argument hasn't changed: the value moved <em>toward</em> the humans who can specify, orchestrate and verify fleets of agents. Fire them and you delete your own return, right where the tax bites hardest. On my team, over these six months, headcount grew again. Nobody was replaced by a machine.</p>

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
<p>Six months ago I was predicting from inside one team. Today the models check their own work, the fleets are infrastructure, and my own repository shows what four months of development can do on a young codebase when the method keeps up. All four of my calls came out stronger. The agents gained a longer horizon, not a shorter leash. The reach is real. Reliability at that reach is being built — release by release on the vendors' side, gate by gate on ours — and for now, that work is ours.</p>
<p>The next checkpoint writes itself: the day the unit of delegation widens again — from the flow to something I hesitate to name yet — I'll reopen this report card. Until then: build the rails, keep the gate, and count your own numbers.</p>
<p><strong>Read the rest of the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">The SDLC Is Dead</a> — why the process was always waste. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coding Was Never the Job</a> — what the engineer becomes when the syntax disappears. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">AI Became a Team Reflex</a> — what an AI-native team looks like on a Tuesday. <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA Just Confirmed What My Team Already Lived</a> — the report that put external data behind what we were already living. <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">One More Prompt</a> — the personal bill this professional verdict comes with.</p>
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
<li><a target="_blank" rel="noopener noreferrer" href="https://x.com/bcherny/status/2077929379661844559">Boris Cherny — <em>Steps of AI Adoption</em></a> (July 16, 2026): the five-rung ladder — gated, assisted, parallel, supervised autonomy, AI-native — counted in agents per engineer (~1 to ~1,000+), and the thesis that you climb by breaking the next bottleneck and building the next guardrail, not by spending tokens. A vendor's framing, product catalogue attached — keep the ladder, discount the SKUs.</li>
<li>Solstice* — internal repository telemetry (commits, PRs, deployments, tests, ADRs), snapshot of July 15, 2026, and the internal product rationale (rewrite arbitration, 2026→2028 roadmap). No links: it's a private codebase, and "Solstice" is a fictitious codename — the real project, its products and its legacy technologies are anonymized. Throughput numbers, not value — read them with the same skepticism as any vendor's.</li>
</ul>`
}

const frenchContent: PostContent = {
  title: '100 % du code écrit par des agents : six mois sur une refonte greenfield',
  description: 'Huit modèles de pointe en six mois, la plupart vendus sur l\'auto-vérification. Sur Solstice, notre plateforme greenfield, quatre mois de développement avec des méthodes de travail repensées ont transformé cette qualité en vélocité : environ 4 500 commits, près de 1 000 PR, 120 et quelques versions. Ce qu\'on automatise en juillet — et ce que ça a coûté.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Six mois, huit modèles de pointe : Opus 4.6, 4.7, 4.8, Fable 5, Sonnet 5, GPT-5.5, GPT-5.6, Kimi K3 — une marche toutes les quelques semaines — et à chaque marche, l'argument de vente a changé. Plus personne ne vend « plus intelligent » ; on vend « vérifie son propre travail ». La qualité d'un modèle, désormais, c'est sa fiabilité — et elle monte. Sur mon propre projet — <abbr title="Nom de code fictif : le projet réel, ses produits et son éditeur sont anonymisés.">Solstice*</abbr>, la plateforme greenfield que mon équipe a démarrée en mars — quatre mois passés à redéfinir nos méthodes de travail ont transformé cette qualité en vélocité : environ 4 500 commits, près de 1 000 pull requests, 120 et quelques versions, une réécriture frontend complète en vol. Et on confie aux agents des morceaux de plus en plus gros : une fonction en janvier, un chantier en mai, un flux entier en juillet.</p></div>
<hr>
<p>Depuis mars, mon équipe construit Solstice, une plateforme greenfield partie d'une page blanche. En quatre mois, on a moins écrit du code qu'on n'a réécrit notre façon d'en produire : un cadrage par service, des agents qui tiennent chacun leur périmètre, un point de contrôle qui rend son verdict avant qu'un humain ne lise le diff. C'est cette méthode que je viens raconter — comment elle s'est mise en place, et ce qu'elle a produit.</p>
<p>Il y a six mois, j'écrivais des prédictions depuis l'intérieur de cette équipe, sans presque rien d'externe pour les appuyer. Aujourd'hui, les études sont sorties, et elles confirment les paris.</p>

<h2>L'escalier des six mois</h2>
<p>Le paradigme n'est pas arrivé d'un coup. Il a monté marche par marche : un modèle de pointe toutes les quelques semaines, chacun un peu plus autonome que le précédent. Et en dessous, le discours commercial a glissé de la puissance brute vers la fiabilité.</p>
<svg viewBox="0 0 800 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="De janvier à juillet 2026, la capacité annoncée des agents grimpe par paliers successifs — l'horizon de tâche qui double, SWE-bench Verified retiré, l'auto-vérification vendue comme fonctionnalité, les sous-agents en parallèle, la taxe de revue chiffrée, +24 % de PR fusionnées — tandis que le gain réellement mesuré sur du code legacy reste bas, autour de 10 %. L'écart entre les deux, c'est la taxe de vérification." class="diagram-svg">
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
<text x="448" y="184" font-size="12.5" font-weight="650">1 000 / run</text>
<text x="556" y="108" font-size="10" opacity="0.55" letter-spacing="0.1em">JUIN</text>
<text x="556" y="126" font-size="12.5" font-weight="650">La taxe,</text>
<text x="556" y="142" font-size="12.5" font-weight="650">chiffrée</text>
<text x="664" y="66" font-size="10" opacity="0.55" letter-spacing="0.1em">JUIL.</text>
<text x="664" y="84" font-size="12.5" font-weight="650">+24 % de PR,</text>
<text x="664" y="100" font-size="12.5" font-weight="650">pas de valeur</text>
</g>
<path d="M 76 330 C 220 324 360 306 470 292 C 560 281 650 262 712 252" fill="none" stroke="currentColor" stroke-width="2" stroke-opacity="0.5" stroke-dasharray="5,4" stroke-linecap="round"></path>
<circle cx="712" cy="252" r="3.5" fill="currentColor" fill-opacity="0.75"></circle>
<text x="470" y="322" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" font-style="italic" opacity="0.7" text-anchor="middle">mesuré sur du legacy : ≤ 10 %</text>
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
<li><strong>Janvier.</strong> <abbr title="Model Evaluation and Threat Research — laboratoire à but non lucratif d'évaluation des IA">METR</abbr> met à jour sa recherche Time Horizon : la durée de tâche qu'un agent termine une fois sur deux double désormais tous les quatre mois environ, contre sept auparavant. Oubliez le chiffre exact — c'est la forme qui compte, et la forme monte, vite.</li>
<li><strong>Février.</strong> Opus 4.6 sort le 5. Trois semaines plus tard, OpenAI arrête de publier ses scores SWE-bench Verified : le benchmark « ne mesure plus les capacités de pointe », et à l'audit, la majorité d'un échantillon de tâches échouées avait en réalité des tests cassés. Le benchmark que tout le monde citait vient d'être enterré par un de ceux qui le citaient.</li>
<li><strong>Avril.</strong> Deux sorties dans la même semaine : Opus 4.7 le 16, GPT-5.5 le 23 — six semaines après GPT-5.4, et OpenAI s'en vante. Et l'argument de vente d'Opus 4.7 n'est pas la puissance. C'est la rigueur : le modèle conçoit ses propres étapes de vérification avant de déclarer une tâche terminée. L'auto-contrôle est devenu une fonctionnalité qu'on achète.</li>
<li><strong>Mai.</strong> Opus 4.8 le 28. Anthropic affirme qu'il laisse passer quatre fois moins de défauts dans son propre code que 4.7 — un chiffre d'éditeur, certes, mais le choix du chiffre dit tout : plus personne ne vend de la génération, on vend du contrôle. Et avec lui, les « dynamic workflows » de Claude Code : un script rejouable qui répartit le travail sur jusqu'à mille agents par exécution, une quinzaine à la fois, sans noyer le contexte du modèle. Ma <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">méthode de panel de personas</a>, devenue un produit. Le même mois, le protocole <abbr title="Model Context Protocol">MCP</abbr> passe stateless — une flotte d'agents, c'est désormais un problème de load-balancer, pas une démo.</li>
<li><strong>Juin.</strong> Fable 5 le 9, Sonnet 5 le 30 — la cadence ne ralentit pas. Pendant ce temps, la revue de code reçoit enfin ses chiffres. J'y viens.</li>
<li><strong>Juillet.</strong> GPT-5.6 le 9, et la plus grande étude en entreprise du semestre : un beau chiffre de débit, avec une étiquette d'avertissement collée dessus. Puis, le 16 — le lendemain du gel de ces compteurs —, Moonshot sort Kimi K3 : 2 800 milliards de paramètres, une fenêtre de contexte d'un million de tokens, des poids ouverts, et une variante <em>Swarm Max</em> conçue exprès pour faire tourner des agents en parallèle. Sur ses propres benchmarks, il se hisse au niveau de la frontière propriétaire ; prenez les scores avec les pincettes d'usage, mais c'est la direction qui compte — la capacité de pointe passe en open-weight, et se façonne pour les flottes.</li>
</ul>
<p>Voilà pour les marches. Regardez maintenant la ligne pointillée sous l'escalier — le gain réellement mesuré sur le code que la plupart d'entre nous maintiennent. Elle bouge à peine. Tout cet article tient dans la distance entre les deux.</p>
<svg viewBox="0 0 800 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Frise des sorties de modèles de pointe de février à juillet 2026 : Opus 4.6 le 5 février, Opus 4.7 le 16 avril, GPT-5.5 le 23 avril, Opus 4.8 le 28 mai, Fable 5 le 9 juin, Sonnet 5 le 30 juin, GPT-5.6 le 9 juillet et Kimi K3 le 16 juillet. Huit modèles de pointe de trois éditeurs en moins de six mois — environ un toutes les trois semaines — la cadence se resserrant vers l'été et s'achevant sur Kimi K3, le premier modèle open-weight à atteindre la frontière." class="diagram-svg">
<text x="64" y="30" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">LA CADENCE DES SORTIES · FÉV – JUIL 2026</text>
<text x="64" y="58" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="700">Huit modèles de pointe, ~un toutes les trois semaines</text>
<text x="64" y="78" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.6">Trois éditeurs — Anthropic, OpenAI, Moonshot — et pour finir le premier modèle open-weight à la frontière</text>
<line x1="70" y1="262" x2="740" y2="262" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round"></line>
<g stroke="currentColor" stroke-opacity="0.18" stroke-width="1">
<line x1="70" y1="257" x2="70" y2="267"></line>
<line x1="179" y1="257" x2="179" y2="267"></line>
<line x1="299" y1="257" x2="299" y2="267"></line>
<line x1="415" y1="257" x2="415" y2="267"></line>
<line x1="536" y1="257" x2="536" y2="267"></line>
<line x1="652" y1="257" x2="652" y2="267"></line>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" opacity="0.4" letter-spacing="0.1em" text-anchor="middle">
<text x="124" y="286">FÉV</text>
<text x="233" y="286">MARS</text>
<text x="349" y="286">AVR</text>
<text x="470" y="286">MAI</text>
<text x="590" y="286">JUIN</text>
<text x="685" y="286">JUIL</text>
</g>
<g stroke="currentColor" stroke-opacity="0.28" stroke-width="1.2" stroke-linecap="round">
<line x1="86" y1="262" x2="86" y2="250"></line>
<line x1="384" y1="262" x2="384" y2="250"></line>
<line x1="567" y1="262" x2="567" y2="250"></line>
<line x1="683" y1="262" x2="683" y2="250"></line>
<line x1="357" y1="262" x2="357" y2="164"></line>
<line x1="520" y1="262" x2="520" y2="164"></line>
<line x1="648" y1="262" x2="648" y2="164"></line>
<line x1="710" y1="262" x2="710" y2="164"></line>
</g>
<circle cx="710" cy="262" r="8" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.3"></circle>
<g fill="currentColor" fill-opacity="0.8">
<circle cx="86" cy="262" r="4"></circle>
<circle cx="357" cy="262" r="4"></circle>
<circle cx="384" cy="262" r="4"></circle>
<circle cx="520" cy="262" r="4"></circle>
<circle cx="567" cy="262" r="4"></circle>
<circle cx="648" cy="262" r="4"></circle>
<circle cx="683" cy="262" r="4"></circle>
<circle cx="710" cy="262" r="4"></circle>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="8.5" opacity="0.5" letter-spacing="0.12em" text-anchor="middle">
<text x="86" y="214">ANTHROPIC</text>
<text x="384" y="214">OPENAI</text>
<text x="567" y="214">ANTHROPIC</text>
<text x="683" y="214">OPENAI</text>
<text x="357" y="126">ANTHROPIC</text>
<text x="520" y="126">ANTHROPIC</text>
<text x="648" y="126">ANTHROPIC</text>
<text x="710" y="126">MOONSHOT</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle">
<text x="86" y="230">Opus 4.6</text>
<text x="384" y="230">GPT-5.5</text>
<text x="567" y="230">Fable 5</text>
<text x="683" y="230">GPT-5.6</text>
<text x="357" y="142">Opus 4.7</text>
<text x="520" y="142">Opus 4.8</text>
<text x="648" y="142">Sonnet 5</text>
<text x="710" y="142">Kimi K3</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" opacity="0.6" text-anchor="middle">
<text x="86" y="244">5 fév</text>
<text x="384" y="244">23 avr</text>
<text x="567" y="244">9 juin</text>
<text x="683" y="244">9 juil</text>
<text x="357" y="156">16 avr</text>
<text x="520" y="156">28 mai</text>
<text x="648" y="156">30 juin</text>
<text x="710" y="156">16 juil</text>
</g>
<text x="710" y="110" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="8.5" font-weight="650" opacity="0.75" letter-spacing="0.1em" text-anchor="middle">POIDS OUVERTS</text>
</svg>

<h2>Le terrain : Solstice, quatre mois au compteur</h2>
<p>Cette série cite « mon équipe » depuis six mois sans jamais ouvrir les compteurs. Corrigeons ça aussi. Depuis mars, mon quotidien a un nom de code : <abbr title="Nom de code fictif : le projet réel, ses produits et son éditeur sont anonymisés.">Solstice*</abbr> — une plateforme greenfield, premier commit le 10 mars, qui fusionne deux suites produit santé historiques dans une seule base de code TypeScript neuve. Quatre mois plus tard : une trentaine de microservices backend, une poignée de micro-frontends, environ 600 000 lignes réparties sur quelque 5 000 fichiers. Du greenfield avec une réserve qui mérite d'être nommée — le code est neuf, le domaine ne l'est pas. De la santé régulée, des données patients, et deux suites legacy de contrats implicites à honorer.</p>
<p>Il faut raconter d'où vient ce projet, parce que sa naissance est le meilleur exemple du semestre. La gestion administrative du patient et le parcours patient tournaient sur deux socles historiques — l'un dans un langage de quatrième génération propriétaire des années 90, l'autre dans une stack de l'ère du client lourd : des technologies où chaque évolution réglementaire se bat contre le code, et où recruter est devenu une cause perdue. Le dilemme refactor-contre-rewrite traînait sur la table depuis des années, et il penchait toujours du même côté : une refonte, c'était trop cher, trop risqué, une double exploitation à financer. L'IA agentique a renversé l'arbitrage début 2026 — vélocité démultipliée, un écran prototypé en heures plutôt qu'en semaines et validé avec le métier avant toute ligne de code de production, la conformité codifiée en garde-fous CI bloquants : identitovigilance, accessibilité, auditabilité. Le coût et le risque de la refonte se sont effondrés ensemble. Solstice n'est pas un projet qui utilise des agents. C'est un projet qui n'existerait pas sans eux.</p>
<p>Le socle choisi dit la même chose : des micro-frontends React derrière un design system, des microservices Fastify/TypeScript, PostgreSQL partout, <abbr title="Fast Healthcare Interoperability Resources">FHIR</abbr> R4 comme modèle de données pivot, Docker, OpenTelemetry, <abbr title="Continuous Integration / Continuous Delivery — intégration et livraison continues">CI/CD</abbr> GitHub Actions. Rien d'exotique — et c'est délibéré. Une stack que les modèles connaissent par cœur est une stack sur laquelle les agents tournent à pleine vitesse.</p>
<blockquote><p>« Choisir une technologie, c'est désormais une décision de recrutement pour vos agents autant que pour vos humains. »</p></blockquote>
<p>Voici les compteurs, arrêtés au 15 juillet :</p>
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Du 10 mars au 15 juillet 2026, le dépôt Solstice enregistre environ 4 500 commits, soit environ 35 par jour. Barres mensuelles : ~400 en mars, ~1 000 en avril, ~1 800 en mai — le pic de la réécriture React exécutée en pipeline d'agents —, ~800 en juin, ~500 sur la première moitié de juillet, un rythme d'environ 1 000 sur le mois." class="diagram-svg">
<text x="64" y="34" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">SOLSTICE · COMMITS PAR MOIS · MARS – 15 JUILLET 2026</text>
<text x="64" y="68" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="26" font-weight="700">≈ 35 commits par jour</text>
<text x="64" y="88" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.6">~4 500 commits · ~1 000 pull requests · 120+ versions taguées · quatre mois</text>
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
<text x="144" y="283">~400</text>
<text x="272" y="206">~1 000</text>
<text x="400" y="120">~1 800</text>
<text x="528" y="234">~800</text>
<text x="656" y="268">~500</text>
</g>
<text x="656" y="202" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" font-style="italic" opacity="0.7" text-anchor="middle">rythme du mois : ~1 000</text>
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
<li><strong>~4 500 commits en quatre mois</strong> — environ 35 par jour. Près de 1 000 pull requests, 120 et quelques versions taguées, plus de 500 déploiements. Le pic de mai — près de 1 800 commits — n'est pas une anomalie : c'est le mois où la réécriture du frontend s'est exécutée comme un pipeline.</li>
<li><strong>Une réécriture complète, en vol.</strong> Un architecture decision record a acté l'abandon de Vue pour React. Quatre mois plus tard : plus de 300 fichiers <code>.tsx</code>, zéro <code>.vue</code> restant. Ce genre de migration, avant, c'était un projet d'un an avec son propre comité de pilotage. Là, c'est un chantier d'agents mené sur des centaines de fichiers, borné par les tests, fusionné par des humains.</li>
<li><strong>L'infrastructure d'autonomie.</strong> Une cinquantaine d'architecture decision records, une quarantaine de CLAUDE.md — un par service et micro-frontend —, une quarantaine de skills, quelque 250 documents. Près d'une ligne de Markdown pour cinq lignes de code. C'est le contexte qu'on injecte aux agents pour qu'ils tiennent un périmètre sans nous. On ne documente plus seulement pour les humains. On documente pour les flottes.</li>
<li><strong>La taxe, rendue exécutable.</strong> Plus de 600 fichiers de test, une vingtaine de specs <abbr title="End-to-end — de bout en bout">E2E</abbr> sur les parcours critiques, et un point de contrôle qui rend un verdict PASS/FAIL avant même qu'une PR existe. La taxe de vérification que cette série n'arrête pas de nommer n'est plus un concept de billet de blog — c'est un binaire dans la CI.</li>
</ul>
<p>Et le fait qui compte le plus, dit sans détour : ce code est écrit à 100 % par des agents. Pas « assisté », pas « autocomplété » — écrit. Plus aucun humain de ce projet ne tape de code de production — et l'affirmation ne repose pas sur la confiance mais sur le workflow : chaque changement entre dans le dépôt par une PR ouverte par un agent. Les signatures de commits portent pourtant des noms humains, parce qu'une signature ne dit plus qui a écrit le changement ; elle dit qui l'a spécifié, qui a orchestré la flotte et qui a vérifié le résultat.</p>
<blockquote><p>« En 2026, une signature de commit est une chaîne de responsabilité, et non plus une signature d'auteur. »</p></blockquote>
<p>Diagnostic contre arithmétique, comme toujours : ces chiffres mesurent du débit, pas de la valeur — la métrique dont Microsoft nous prévient qu'elle gonfle — et ce sont des chiffres greenfield, le terrain où la recherche de Stanford accorde déjà 30 à 40 % aux agents. Je revendique de la vélocité sur une base de code jeune, rien de plus. L'intéressant n'est pas le compteur brut. C'est ce qu'il a fallu construire pour y arriver.</p>
<h2>Quatre mois pour redéfinir la méthode</h2>
<p>Parce que rien de cette vélocité n'est venu d'un modèle devenu plus malin tout seul. Une équipe d'une vingtaine de personnes n'y arrive pas en achetant des licences. On a réécrit la méthode morceau par morceau, tout en livrant. Voici ce qui a réellement changé chez nous entre mars et juillet.</p>
<p><strong>Le besoin d'abord, le prototype en heures.</strong> L'ancienne méthode spécifiait pendant des semaines avant que quiconque ne code. La nouvelle inverse l'ordre : immersion terrain, parcours co-conçus avec le métier, puis un prototype fonctionnel produit en heures par les agents — et mis devant les utilisateurs avant d'industrialiser quoi que ce soit. On ne débat plus sur des maquettes. On tranche sur du cliquable.</p>
<p><strong>Tout ce qui se décide s'écrit, parce que tout ce qui s'écrit devient du contexte.</strong> Une cinquantaine d'architecture decision records en quatre mois, un cadrage par service, un glossaire du domaine, une quarantaine de skills pour les gestes répétés. La documentation a changé de nature : ce n'est plus un livrable qui vieillit, c'est le carburant des flottes. Une décision mal écrite, c'est une flotte qui code à côté. Près d'une ligne de Markdown pour cinq lignes de code — le meilleur investissement du projet.</p>
<p><strong>La machine dit non avant que l'humain ne lise.</strong> Le point de contrôle rend un verdict PASS ou FAIL avant même qu'une PR existe ; la revue humaine ne commence que quand la machine a dit oui. Et l'architecture elle-même sert la méthode : les microservices et les micro-frontends sont des périmètres bornés qu'un agent peut tenir seul, sans marcher sur le travail des autres.</p>
<p><strong>L'outillage s'entretient lui-même.</strong> La CI qui se répare, les specs E2E générées puis maintenues sur les parcours critiques, les cadrages tenus à jour par les agents mêmes qui les consomment. Le temps d'outillage était un impôt. C'est devenu des intérêts composés.</p>
<p><strong>Et le rituel humain qui porte tout : le partage de pratiques.</strong> Presque chaque semaine, l'équipe s'assoit pour partager ce qu'elle a appris du travail avec les agents — une quinzaine de comptes-rendus en quatre mois. Ce qui marche devient un skill. Ce qui engage l'architecture devient un decision record. C'est la boucle d'apprentissage la plus rapide que j'aie vue dans ma carrière, et elle ne doit rien aux modèles.</p>
<p>Et cette vélocité a une échéance, pas seulement un compteur : un premier <abbr title="Minimum Viable Product — produit minimum viable">MVP</abbr> de préadmission déployé en octobre 2026, le workflow complet début 2027, la couverture intégrale du périmètre legacy en 2028. Deux ans pour remplacer deux socles historiques. Avant les agents, personne n'aurait signé ce planning — c'est précisément pour ça que la refonte n'avait jamais été lancée.</p>

<h2>Le bulletin de notes</h2>
<p>Quatre paris, six mois de données. Voici la copie corrigée.</p>
<table>
<thead><tr><th>Le pari (mars–mai)</th><th>Note</th><th>Pourquoi</th></tr></thead>
<tbody>
<tr><td><strong>Le <abbr title="Software Development Life Cycle — cycle de vie du développement logiciel">SDLC</abbr> est mort</strong></td><td>Tient, amendé</td><td>La cérémonie est morte ; un point de contrôle est né. Le processus n'a pas rétréci — son centre de gravité est passé de l'écriture à la revue.</td></tr>
<tr><td><strong>L'IA est un amplificateur</strong></td><td>Confirmé</td><td>Débit en hausse en surface, coûts qualité qui se composent en dessous. Le <abbr title="Massachusetts Institute of Technology">MIT</abbr> : 95 % des pilotes d'IA générative sans impact mesurable sur le <abbr title="Profit and Loss — compte de résultat">P&amp;L</abbr> — chiffre contesté ; gardez la direction, pas la décimale. L'outil amplifie le système autour — exactement le pari, et la lecture posée dans <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">mon article sur DORA</a>.</td></tr>
<tr><td><strong>Il existe une taxe de vérification</strong></td><td>Confirmé, chiffré</td><td>Temps de revue et attente en file en forte hausse (Faros, LinearB) ; délégation complète encore l'exception — 0 à 20 % des tâches selon les études ; l'auto-contrôle désormais vendu comme fonctionnalité.</td></tr>
<tr><td><strong>Le codeur devient ingénieur</strong></td><td>Confirmé</td><td>Le travail de pointe du semestre, c'est l'orchestration — écrire le harnais, câbler les outils, noter les agents. Pas taper de la syntaxe.</td></tr>
</tbody>
</table>


<h2>Le plafond que personne ne vous vend</h2>
<p>Si la remontée se fait attendre, ce n'est pas que les modèles manquent d'intelligence. C'est de l'arithmétique. Un agent fiable à 95 % à chaque étape termine une tâche de vingt étapes un peu plus d'une fois sur trois. Une tâche de cinquante étapes ? Sept fois sur cent. Les erreurs se multiplient entre elles, l'autonomie longue s'effondre bien en dessous de la démo, et la seule chose entre cet effondrement et votre branche de production s'appelle la vérification. Les travaux sur le « context rot » montrent le même phénomène côté mémoire : passé quelques centaines de milliers de tokens, les modèles se dégradent en silence.</p>
<p>Et puis un coût est apparu qu'aucun de mes paris de mars n'avait prévu : la sécurité. L'injection de prompt se discute maintenant comme une propriété permanente des agents, pas comme un bug en attente de correctif. Des <abbr title="Common Vulnerabilities and Exposures">CVE</abbr> sévères ont touché les outils que nous utilisons tous les jours. Anthropic a même révélé qu'un groupe lié à un État avait détourné des instances de Claude Code pour de l'espionnage quasi autonome. La cérémonie du SDLC est bien morte — ce qui naît à sa place, c'est une discipline : provenance, sandboxing, vérification d'agents. Ce n'est pas un démenti de la série. C'est le point de contrôle que l'ancien processus aurait dû être depuis le début.</p>

<h2>Ce qu'on délègue en juillet</h2>
<p>La question pratique qu'on me pose partout : concrètement, qu'est-ce qu'un agent fait seul en juillet 2026 qu'il ne faisait pas en janvier ? Réponse depuis Solstice, périmètre par périmètre.</p>
<p><strong>En janvier</strong>, un agent complétait une fonction et rédigeait un test si on le lui demandait poliment. La PR d'agent était une démo qu'on montrait, pas un flux qu'on vivait.</p>
<p><strong>En avril-mai</strong>, avec l'auto-vérification puis les flottes de sous-agents, on est passé de déléguer une fonction à déléguer un chantier entier : notre réécriture React s'est faite comme ça — un pipeline d'agents sur des centaines de fichiers, chaque lot borné par les tests existants, un humain à la fusion. Les ~1 800 commits de mai, c'est ça, rendu visible.</p>
<p><strong>En juillet</strong>, voilà ce qui part seul, sur notre dépôt, sans qu'un humain écrive une ligne :</p>
<ol>
<li><strong>La PR de périmètre borné, de bout en bout.</strong> Ticket → branche → code → tests → verdict de vérification → PR ouverte. L'humain n'apparaît qu'à la revue. Condition non négociable : le périmètre a son CLAUDE.md, ses skills, et le point de contrôle donne son feu vert.</li>
<li><strong>La CI qui se répare elle-même.</strong> Collisions de noms de conteneurs, environnements de déploiement qui dérivent : les agents corrigent désormais leur propre tuyauterie. Impensable en janvier — personne n'aurait laissé un agent approcher le pipeline.</li>
<li><strong>Les specs E2E sur les parcours critiques.</strong> Du front jusqu'au back, générées puis maintenues. Une vingtaine aujourd'hui, et sans doute bien plus dans quelques semaines ou mois.</li>
<li><strong>La documentation d'où part le code.</strong> C'est plutôt l'inverse : la doc vient d'abord. Elle naît des ateliers et des sachants, captée depuis les transcriptions, puis transformée en cadrages, en ADR, en CLAUDE.md par service — et c'est elle qui cadre le code que les agents écrivent ensuite. La doc n'est plus une trace laissée après coup ; c'est la source dont tout part.</li>
</ol>
<p>Et ce qui ne part toujours pas seul, même en juillet : l'architecture — les quelque cinquante ADR sont des décisions d'humains, à commencer par celles qui bornent ce que les agents ont le droit de toucher. Le masquage de l'identifiant patient sur nos écrans est passé par une enveloppe ADR avant qu'une seule ligne écrite par un agent ne l'approche. La barre que la fusion doit franchir, toujours — le clic, lui, s'automatise déjà. Et le découpage lui-même : c'est l'humain qui trace les périmètres, jamais l'agent qui s'en attribue un.</p>
<blockquote><p>« L'autonomie ne se décrète pas au niveau du modèle. Elle s'équipe, périmètre par périmètre — un cadrage, des skills, un point de contrôle qui sait dire non. »</p></blockquote>
<p>C'est ma lecture du semestre, vue du terrain : chaque marche de l'escalier ne rend pas l'agent plus intelligent, elle élargit ce qu'on ose lui confier. Une fonction en janvier, un chantier en mai, un flux en juillet — la vitesse à laquelle grossit ce périmètre, voilà la vraie mesure de l'autonomie. Pas les benchmarks.</p>

<h2>L'échelle que quelqu'un a enfin chiffrée</h2>
<p>À mi-chemin de ce billet, Boris Cherny — l'auteur de Claude Code — a publié une échelle qui met des chiffres sur ce que j'appelle depuis le début « l'unité de délégation qui s'élargit ». Cinq échelons, comptés en agents par ingénieur : bloqué (0), assisté (un agent, une paire supervisée), parallèle (une dizaine, un orchestrateur qui saute d'un worktree à l'autre), autonomie supervisée (une centaine, un manager de managers), IA-native (mille et plus, on pilote à la seule intention). C'est la carte la plus nette que j'aie lue de cette montée — et, venant d'un éditeur, chaque échelon arrive avec un produit vissé dessus. Gardez l'échelle. Oubliez le catalogue.</p>
<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="L'échelle d'adoption de l'IA selon Boris Cherny, comptée en agents par ingénieur, du bas vers le haut : échelon 0 bloqué (0 agent), échelon 1 assisté (~1 agent, une paire supervisée), échelon 2 parallèle (~10 agents, un orchestrateur), échelon 3 autonomie supervisée (~100 agents, un manager de managers), échelon 4 IA-native (~1 000+ agents, piloté à l'intention). Chaque échelon se gagne avec un garde-fou de plus, pas avec plus de tokens. Mon équipe est à l'échelon 2 et mord sur le 3." class="diagram-svg">
<text x="64" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">L'ÉCHELLE D'ADOPTION · AGENTS PAR INGÉNIEUR</text>
<text x="64" y="60" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="700">Cinq échelons, un garde-fou par échelon</text>
<text x="64" y="80" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.6">On monte en démontant le prochain goulot d'étranglement — pas en dépensant plus de tokens</text>
<g fill="currentColor">
<rect x="230" y="126" width="470" height="32" rx="8" fill-opacity="0.19"></rect>
<rect x="230" y="178" width="320" height="32" rx="8" fill-opacity="0.17"></rect>
<rect x="230" y="230" width="178" height="32" rx="8" fill-opacity="0.15"></rect>
<rect x="230" y="282" width="84" height="32" rx="8" fill-opacity="0.12"></rect>
<rect x="230" y="334" width="36" height="32" rx="8" fill-opacity="0.09"></rect>
</g>
<rect x="230" y="230" width="178" height="32" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.6"></rect>
<rect x="230" y="178" width="320" height="32" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.4" stroke-dasharray="5,4"></rect>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="650" opacity="0.4" text-anchor="middle">
<text x="50" y="146">4</text>
<text x="50" y="198">3</text>
<text x="50" y="250">2</text>
<text x="50" y="302">1</text>
<text x="50" y="354">0</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650">
<text x="68" y="146">IA-native</text>
<text x="68" y="198">Autonomie supervisée</text>
<text x="68" y="250">Parallèle</text>
<text x="68" y="302">Assisté</text>
<text x="68" y="354">Bloqué</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="9.5" opacity="0.6">
<text x="68" y="160">on pilote à l'intention</text>
<text x="68" y="212">un manager de managers</text>
<text x="68" y="264">un orchestrateur</text>
<text x="68" y="316">une paire supervisée</text>
<text x="68" y="368">accès verrouillé</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" font-weight="650">
<text x="712" y="146">~1 000+ agents</text>
<text x="562" y="198">~100 agents</text>
<text x="420" y="250">~10 agents</text>
<text x="326" y="302">~1 agent</text>
<text x="278" y="354">0</text>
</g>
<path d="M 408 262 C 448 282 470 298 488 310" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.3" stroke-linecap="round"></path>
<circle cx="408" cy="262" r="3" fill="currentColor" fill-opacity="0.8"></circle>
<text x="492" y="314" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="700">notre équipe</text>
<text x="492" y="330" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" opacity="0.65">à l'échelon 2 — et on mord sur le 3</text>
</svg>
<p>Parce que ce qu'il faut garder, c'est la thèse, et c'est celle autour de laquelle cette série tourne depuis six mois : <em>les tokens ne vous font pas monter.</em> Les mots de Cherny : pour atteindre l'échelon suivant, il faut « trouver et démonter le prochain lot de goulots d'étranglement, et construire le prochain lot de garde-fous ». C'est notre taxe de vérification transformée en échelle à gravir — chaque échelon s'achète avec un garde-fou, pas avec un budget plus gros. Il livre même le test de valeur que je cherche à tâtons depuis des mois : un tableau de bord d'usage mesure l'activité, pas le retour ; la vraie question, c'est de savoir si vous auriez dépensé ces heures d'ingénierie de toute façon, et ce qu'elles auraient coûté en heures-homme. Voilà une règle que je peux enfin poser sur Solstice.</p>
<p>Alors je réponds à sa question de clôture — où en est votre équipe ? Échelon deux, honnêtement : l'orchestrateur, cinq à dix agents à la fois, chacun sur son périmètre, un humain qui relit des diffs finaux plutôt que des frappes clavier. Sur les périmètres balisés où le point de contrôle a gagné notre confiance, on mord sur l'échelon trois — du travail qui se déclenche seul, de la maintenance qui attendait un après-midi libre et qui tourne désormais en fond, précisément là où Cherny situe le vrai gain : l'équipe cesse d'éteindre des incendies et construit des choses hors de portée jusque-là. On est très loin du sommet à mille agents, et je me méfie de quiconque prétend y être : c'est là que l'échelle cesse d'être un modèle de maturité pour devenir une diapo de feuille de route.</p>
<p>La phrase de son billet que je soulignerais est la plus humble : « il n'y a pas un seul bon chemin à travers les étapes ». Le piège qu'il nomme — faire grossir le nombre d'agents avant que la boucle ait gagné la confiance — c'est exactement le danger que cette série répète, écrit cette fois depuis le côté éditeur de la table. Même point de contrôle, même taxe ; on l'aborde juste par les deux bouts.</p>

<h2>Ce qui reste aux humains</h2>
<p>Comme dans chaque article de cette série, la liste honnête. Six mois de progrès ne nous ont déchargés de rien de ce qui suit.</p>
<p><strong>Définir ce que « sûr à fusionner » veut dire.</strong> C'est la taxe, et elle n'a pas baissé — elle a grossi, et elle est passée en tête du pipeline. Sur notre dépôt, le point de contrôle dit « non » avant même qu'un humain ne lise le diff. Le clic de fusion lui-même est le prochain à disparaître : à mesure que s'empilent les contrôles automatisés et les garde-fous, les PR fusionneront bientôt seules dès que le point de contrôle est au vert. Ce qui reste humain, ce n'est pas le clic — c'est de fixer la barre que le contrôle applique. Ce jugement, c'est le métier maintenant.</p>
<p><strong>Garder les gens.</strong> Klarna — la fintech qui avait remplacé à grand bruit une bonne partie de son support par de l'IA — a passé l'année à reconstruire discrètement la capacité humaine qu'elle avait coupée, après une chute de qualité. L'argument financier n'a pas changé : la valeur s'est déplacée <em>vers</em> les humains capables de spécifier, d'orchestrer et de vérifier des flottes d'agents. Licenciez-les, et vous supprimez votre propre retour sur investissement — juste là où la taxe mord le plus fort. Dans mon équipe, sur ces six mois, l'effectif a encore grandi. Personne n'a été remplacé par une machine.</p>

<h2>Que faire lundi matin</h2>
<p>Si vous dirigez une équipe et voulez tirer quelque chose de concret de ce point d'étape :</p>
<ol>
<li><strong>Budgétez la capacité de revue, pas seulement les licences.</strong> Si vos agents livrent plus de PR, quelqu'un relit plus de PR. Dotez et mesurez cette capacité <em>avant</em> de passer la génération à l'échelle, sinon la file d'attente devient votre vrai goulot.</li>
<li><strong>Documentez pour les agents, pas seulement pour les humains.</strong> Un cadrage par service, un skill par geste répété, un glossaire du domaine. L'investissement le moins spectaculaire du semestre, et le plus rentable : chez nous, près d'une ligne de Markdown pour cinq lignes de code — et c'est elle qui rend la délégation possible.</li>
<li><strong>Mesurez votre propre gain net sur de vrais tickets.</strong> Pas des démos greenfield — le code legacy que vous maintenez vraiment, reprise et revue déduites. Ce chiffre est le vôtre, et c'est le seul qui n'appartienne pas à un éditeur.</li>
<li><strong>Gardez les lots petits.</strong> Le calcul d'erreur composée est impitoyable : des exécutions d'agent courtes avec des jalons de validation humaine battent une héroïque délégation de cinquante étapes, à tous les coups. Concevez pour la vérification, pas pour le théâtre de l'autonomie.</li>
<li><strong>Traitez la sécurité des agents comme de la sécurité de production.</strong> Injection de prompt, permissions d'outils, provenance. Si un agent peut lancer une commande, supposez qu'une entrée hostile le peut aussi. Sandboxez en conséquence.</li>
<li><strong>Enterrez vos benchmarks morts.</strong> Si OpenAI a lâché SWE-bench Verified, votre diapo interne « le modèle obtient X » est probablement périmée aussi. Faites confiance à la tendance et à votre propre dépôt — à rien de ce qui vient d'un classement.</li>
</ol>

<h2>Où en est la série</h2>
<p>Il y a six mois, je prédisais depuis l'intérieur d'une équipe. Aujourd'hui, les modèles vérifient leur propre travail, les flottes sont devenues de l'infrastructure, et mon propre dépôt montre ce que quatre mois de développement en font sur une base de code jeune quand la méthode suit. Mes quatre paris sortent tous renforcés. Les agents ont gagné de l'horizon, pas une laisse plus courte. La portée est là. La fiabilité à cette portée se construit — version après version chez les éditeurs, contrôle après contrôle chez nous — et pour l'instant, ce travail est à nous.</p>
<p>Le prochain rendez-vous s'écrit tout seul : le jour où on confiera aux agents plus gros qu'un flux — quelque chose que j'hésite encore à nommer — je ressortirai ce bulletin. D'ici là : posez les rails, tenez le point de contrôle, et comptez vos propres chiffres.</p>
<p><strong>Lire la suite de la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">Le SDLC est mort</a> — pourquoi le processus a toujours été du gaspillage. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coder n'a jamais été le métier</a> — ce que devient l'ingénieur quand la syntaxe disparaît. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">L'IA est devenue un réflexe d'équipe</a> — à quoi ressemble une équipe IA-native un mardi. <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA vient de confirmer ce que mon équipe a déjà vécu</a> — le rapport qui a mis des chiffres sur ce qu'on vivait déjà. <a target="_blank" rel="noopener noreferrer" href="/posts/agentic-ai-addiction">Encore un prompt</a> — la facture personnelle qui accompagne ce verdict professionnel.</p>
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
<li><a target="_blank" rel="noopener noreferrer" href="https://x.com/bcherny/status/2077929379661844559">Boris Cherny — <em>Steps of AI Adoption</em></a> (16 juillet 2026) : l'échelle à cinq échelons — bloqué, assisté, parallèle, autonomie supervisée, IA-native — comptée en agents par ingénieur (~1 à ~1 000+), et la thèse selon laquelle on monte en démontant le prochain goulot d'étranglement et en construisant le prochain garde-fou, pas en dépensant des tokens. Une grille de lecture d'éditeur, catalogue produit compris — gardez l'échelle, écartez les références.</li>
<li>Solstice* — télémétrie interne du dépôt (commits, PR, déploiements, tests, ADR), instantané au 15 juillet 2026, et rationnel produit interne (arbitrage de refonte, feuille de route 2026→2028). Pas de lien : c'est une base de code privée, et « Solstice » est un nom de code fictif — le projet réel, ses produits et ses technologies legacy sont anonymisés. Des chiffres de débit, pas de valeur — à lire avec le même scepticisme que ceux d'un éditeur.</li>
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
