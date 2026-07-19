<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'agentic-ai-addiction',
  date: '2026-07-19',
  tags: ['Software', 'AI', 'Opinion', 'Work']
}

const englishContent: PostContent = {
  title: 'The Friction Was the Brake',
  description: 'Agentic AI removed the friction between an idea and running code — and the friction was the only brake I had. I build seven days a week; roughly 90% of what crosses my mind becomes a project. A first-person account of the hook: what behavioral science actually says, the sourced ADHD/hyperfocus detour, and the two questions that hurt — does any of it ship, and is it worth what it costs?',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Every hobby I ever had carried its own brake — the soldering iron, the drying plaster, the compiler punishing fatigue. Agents removed it: the cost of starting collapsed to one sentence, and now roughly 90% of the ideas that cross my mind become projects, seven days a week. The loop — idea, prompt, variable reward, one more — is structurally the mechanism the gambling literature describes, and no peer-reviewed study of agentic coding exists yet, so I'm writing from n=1 against that literature, on purpose. The ADHD link is a sourced, moderate correlation; the French "HPI" link is folklore, and I say so. Then the two honest questions: the funnel from idea to living product collapses exactly between "repo created" and "used by someone else" — and the value is real, but it is not where the speed promises it is. Guardrails at the end, because the exit is not built into the loop.</p></div>
<hr>
<p>It is past 11 p.m. on a Sunday and I have just relaunched an agent. Nobody is waiting for this project. It has no deadline, no user, no ticket. It exists because the idea crossed my mind in the shower this morning, and between the shower and tonight, the only thing separating the idea from a deployed service was one sentence to type. I typed it. It has been like this seven days a week for months, and it is time to write down what this actually is: an addiction. The word is strong, and I will keep it at arm's length from its clinical definition all the way through — but it is mine.</p>
<p>Until now this series looked outward: the process, the job, the team, the ROI, the six-month verdict. This post looks inward. Three days ago I published the professional verdict — <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100% agent-written code on Solstice</a>. Here is the personal bill.</p>

<h2>The friction was the brake</h2>
<p>In 2016 I was flashing ESP8266 boards. An idea followed a fixed path: order the component, wait five days for the package, solder, flash, debug the voltage divider I got wrong, start over next weekend. The house renovation obeys the same law — plaster takes a day to dry no matter how motivated you are. Every passion I have ever had carried its own brake, built into the physics of the thing. The idea had to survive the wait. Most didn't, and that was the system working.</p>
<blockquote><p>"The cost of an idea fell to zero. The cost of ten ideas did too."</p></blockquote>
<p>Then the brake disappeared. Today, roughly 90% of the needs that cross my mind get a software answer within the day — my own number, a felt estimate, not a measurement. The forty-plus services running behind Traefik on my homelab box were each, at some point, a Sunday idea. The distance between "it crossed my mind" and "it runs" is now one prompt long.</p>
<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The time between an idea and its first working artifact fell from about a weekend in the ESP8266 era of 2016 to about twenty minutes with agents in 2026 — two orders of magnitude. That time used to filter ideas: the friction that disappeared was the brake. Personal orders of magnitude, not a measurement." class="diagram-svg">
<text x="64" y="34" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">TIME BETWEEN THE IDEA AND THE FIRST ARTIFACT</text>
<text x="64" y="68" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="26" font-weight="700">From a weekend to twenty minutes</text>
<text x="64" y="88" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.6">Personal orders of magnitude, ten years apart — a felt estimate, not a measurement</text>
<text x="64" y="136" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" opacity="0.55" letter-spacing="0.1em">ESP8266 · 2016</text>
<rect x="64" y="146" width="560" height="40" rx="8" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="80" y="171" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12.5" font-weight="650">a weekend — order, wait, solder, flash, debug</text>
<g fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.3" stroke-linecap="round">
<path d="M 82 194 L 82 199 L 624 199 L 624 194"></path>
<path d="M 353 199 L 353 205"></path>
</g>
<text x="353" y="220" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" font-style="italic" opacity="0.7" text-anchor="middle">that time filtered the ideas — it was the brake</text>
<text x="64" y="248" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" opacity="0.55" letter-spacing="0.1em">AGENTS · 2026</text>
<rect x="64" y="258" width="18" height="40" rx="6" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"></rect>
<text x="94" y="283" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12.5" font-weight="650">twenty minutes — one prompt, one agent, a running service</text>
<text x="94" y="303" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" font-style="italic" opacity="0.7">nothing filters anymore — not fatigue, not the soldering iron</text>
</svg>
<p>Here is the part I underestimated for months: the friction didn't just slow me down. It <em>selected</em>. An idea had to survive a week in my head before it earned a weekend. The weak ones died quietly; the good ones fermented, merged with other ideas, came out sharper. That was natural selection for ideas, and I dismantled it with a subscription.</p>

<h2>A loop that looks like something else</h2>
<p>Watch the cycle honestly and it has four stations. An idea triggers a prompt. The prompt costs almost nothing. The agent comes back with a reward — and the reward is <em>variable</em>: sometimes it nailed it, sometimes the build is green with one test red, sometimes it confidently broke everything. And the almost-win, more than the win, is what makes me type "one more".</p>
<svg viewBox="0 0 800 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The agentic coding loop: an idea triggers a near-zero-cost prompt, which produces a variable reward — it almost works — whose near-miss re-arms one more prompt. The loop has no built-in stopping point: the exit does not exist by default and has to be built deliberately." class="diagram-svg">
<text x="64" y="34" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">THE LOOP · VARIABLE-RATIO REWARD</text>
<text x="64" y="64" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="700">No built-in stopping point</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="355" y="140" width="150" height="48" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="590" y="251" width="160" height="48" rx="8" fill="currentColor" fill-opacity="0.15"></rect>
<rect x="340" y="362" width="180" height="48" rx="8" fill="currentColor" fill-opacity="0.16"></rect>
<rect x="110" y="251" width="160" height="48" rx="8" fill="currentColor" fill-opacity="0.17"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle">
<text x="430" y="161">THE IDEA</text>
<text x="670" y="272">THE PROMPT</text>
<text x="430" y="383">THE REWARD</text>
<text x="190" y="272">&#171; ONE MORE &#187;</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="9.5" opacity="0.6" text-anchor="middle">
<text x="430" y="178">the trigger</text>
<text x="670" y="289">cost: near zero</text>
<text x="430" y="400">variable — it almost works</text>
<text x="190" y="289">the near-miss re-arms</text>
</g>
<g fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<path d="M 515 180 Q 625 195 662 248"></path>
<path d="M 662 248 L 654 237 M 662 248 L 650 244"></path>
<path d="M 655 305 Q 625 370 528 392"></path>
<path d="M 528 392 L 541 385 M 528 392 L 539 398"></path>
<path d="M 335 395 Q 235 375 197 305"></path>
<path d="M 197 305 L 199 318 M 197 305 L 208 312"></path>
<path d="M 185 245 Q 225 185 348 170"></path>
<path d="M 348 170 L 335 165 M 348 170 L 337 177"></path>
</g>
<text x="430" y="268" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" opacity="0.45" letter-spacing="0.14em" text-anchor="middle">THE LOOP</text>
<text x="430" y="286" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" font-style="italic" opacity="0.65" text-anchor="middle">&#171; machine zone &#187; : time disappears</text>
<path d="M 108 290 C 70 305 52 335 46 372" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.4" stroke-dasharray="5,5" stroke-linecap="round"></path>
<text x="40" y="398" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="650">the exit</text>
<text x="40" y="414" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" font-style="italic" opacity="0.7">does not exist by default — it has to be built</text>
</svg>
<p>None of this is a new mechanism. Variable-ratio reinforcement — reward that arrives unpredictably — is the schedule Skinner identified as producing the highest, most extinction-resistant behavior, and it is the engine of every slot machine. The near-miss has primary neuroscience behind it: Clark and colleagues showed in 2009 that almost-winning recruits the same win-related dopaminergic circuitry as winning, and increases the motivation to continue — a small fMRI study, about gambling, and I am mapping it onto coding by analogy, not by evidence. But an agent that returns a green build with one red test is a textbook near-miss, and I feel the pull it predicts.</p>
<p>The deepest description I know is Natasha Schüll's <em>Addiction by Design</em>, fifteen years of fieldwork among machine gamblers. Her "machine zone": a state where time dissolves, where even winning stops being the point — continuing is the point. And her sharpest claim: this state is a <em>co-production</em> between human and machine design, not an individual weakness. Chew on that one at 11 p.m. while a third agent runs.</p>
<blockquote><p>"Watching an agent work is not flow. It is anticipation."</p></blockquote>
<p>I want to be careful here, because the confusion is comfortable: this often <em>feels</em> like flow. But Csikszentmihalyi's flow needs your skill actively engaged against a matched challenge — the doing is the reward. Watching a terminal scroll is not challenge-skill balance; it is waiting for a variable payout. Structurally it is closer to the machine zone than to flow. That framing is mine, not a citation — and it is the most uncomfortable sentence in this post.</p>
<p>What does the actual science say about AI overuse? The closest empirical data is the MIT Media Lab / OpenAI randomized study (2025, 981 participants): assigned usage showed no significant effects, but voluntary heavy users showed higher loneliness, emotional dependence and problematic-use markers. Caveats stacked high: it studies emotional chatbot use, not coding agents; the finding that matters is correlational; it is a preprint co-authored by OpenAI. And beyond it, the honest statement is this: as of July 2026 there is <strong>no peer-reviewed study of compulsive agentic coding at all</strong>. The genre exists only as testimony — Axios ran "They operate like slot machines" this April, Hacker News hosts a thread literally titled "Addicted to Claude Code – Help". I am writing from pre-scientific territory: n=1, read against the gambling literature. That is the strongest claim available, so it is the one I make.</p>

<h2>The ADHD detour — and the HPI myth</h2>
<p>Why does this hit people like me harder than others? The reader I have in mind generates ten ideas a day and has spent a life watching nine of them die of friction. For that brain, a machine that converts any passing idea into a reward in twenty minutes is not a productivity tool. It is a perfectly fitted key.</p>
<p>The literature has pieces of this, and they deserve to be quoted at their real strength — no more. <strong>Hyperfocus</strong> is a real, described phenomenon: complete task absorption that tunes out the world, discussed mostly in ADHD but not exclusive to it, and overlapping with ordinary flow. The reference review (Ashinoff &amp; Abu-Akel, 2021) says plainly that it is under-researched and inconsistently defined — so treat it as an experience many people will recognize, not a diagnostic marker. It is explicitly double-edged: the same absorption that ships a project at 2 a.m. is the one that loses the evening.</p>
<p><strong>ADHD and compulsive tech use</strong>: a 2023 meta-analysis (24 studies, ~19,000 participants) finds ADHD traits correlate with problematic internet use at r ≈ 0.36–0.44 — a moderate, cross-sectional correlation on a trait continuum, notably <em>stronger in non-clinical adults</em>. Not "ADHD causes addiction"; direction unresolved. Underneath, Volkow's PET work (2009) supports a reward-pathway difference in ADHD — a preference for small immediate rewards over larger delayed ones. A susceptibility to exactly the loop drawn above — stated as susceptibility, nothing more. And the entrepreneurship literature (Wiklund and colleagues, 2016 — fourteen case studies, qualitative, survivor-biased) describes the pattern idea-rich builders will recognize: impulsivity as the fuel that starts things, hyperfocus as the catalyst that finishes or consumes them.</p>
<p><strong>Now the myth.</strong> In France, this conversation instantly attracts the label "HPI". I looked for the science, and the honest report is: there is none. Franck Ramus and Nicolas Gauvrit have spent years showing that high-IQ populations have no excess of psychological fragility — if anything the opposite — and that the "tormented gifted" figure is a sampling artifact: clinicians only meet the gifted people who consult. "HPI" as sold on French daytime TV predicts nothing about your addiction, your hyperfocus, or your idea count. If you want a label for the mechanism in this post, ADHD traits and plain novelty-seeking carry sourced weight. HPI carries none.</p>
<p>And to be unambiguous: I am diagnosing nobody in this post, myself included. The mechanism describes an experience; it does not hand out labels. If the loop above is eating your nights and it hurts, that conversation belongs with a clinician, not a blog.</p>

<h2>First honest question: does any of it ship?</h2>
<p>So the factory runs seven days a week. What comes out the other end?</p>
<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustrative funnel from idea to living product: ideas, prompts and created repositories form a massive top of funnel — 121 million new GitHub repositories in one year — but the width collapses between the repository created and the product used by someone else, then again at six months alive. Widths are illustrative: no agent-era completion data exists; count your own." class="diagram-svg">
<text x="64" y="34" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">FROM IDEA TO LIVING PRODUCT · ILLUSTRATIVE FUNNEL</text>
<text x="64" y="66" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="700">Velocity fills the top, never the bottom</text>
<text x="64" y="86" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.6">Widths are illustrative — no agent-era completion data exists: count your own</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="200" y="112" width="520" height="34" rx="8" fill="currentColor" fill-opacity="0.13"></rect>
<rect x="200" y="162" width="460" height="34" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="200" y="212" width="380" height="34" rx="8" fill="currentColor" fill-opacity="0.15"></rect>
<rect x="200" y="262" width="190" height="34" rx="8" fill="currentColor" fill-opacity="0.16"></rect>
<rect x="200" y="312" width="80" height="34" rx="8" fill="currentColor" fill-opacity="0.17"></rect>
<rect x="200" y="362" width="34" height="34" rx="8" fill="currentColor" fill-opacity="0.18"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12.5" font-weight="650" text-anchor="end">
<text x="188" y="134">Ideas</text>
<text x="188" y="184">Prompts run</text>
<text x="188" y="234">Repos created</text>
<text x="188" y="284">Deployed</text>
<text x="188" y="334">Used by someone else</text>
<text x="188" y="384">Alive at 6 months</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" font-style="italic" opacity="0.7">
<text x="592" y="228">121M new GitHub repos</text>
<text x="592" y="243">in one year (Octoverse 2025)</text>
<text x="292" y="328">~46% of indie projects at $0</text>
<text x="292" y="343">(pre-agent data)</text>
</g>
<g fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.3" stroke-linecap="round">
<path d="M 706 250 L 714 250 L 714 346 L 706 346" stroke-dasharray="3,3"></path>
</g>
<text x="732" y="298" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="650" text-anchor="middle" transform="rotate(-90 732 298)">the gap</text>
<text x="200" y="424" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" font-style="italic" opacity="0.7">Between the repo created and the product someone else uses — that is where the loop stops, not at the prompt.</text>
</svg>
<p>The top of the funnel has exploded, and that part is measured: GitHub logged <strong>121 million new repositories in one year</strong> — about 230 a minute — its biggest year ever. But a repository is not a product; forks and experiments dominate. The bottom of the funnel, meanwhile, looks the way it always has. The indie-hacker datasets we have (pre-agent era, self-reported, survivor-biased — keep the shape, not the decimals) put roughly <strong>46% of projects at zero revenue</strong>, with a brutal power law above them. Nobody has published completion-rate data for agent-era side projects. The center of this post rests on a funnel nobody has measured — including me, and I'll come back to that.</p>
<p>What we do have is documentation of what happens when the prototype pretends to be a product. The canonical one: in March 2025 a founder announced a SaaS built entirely with Cursor, "zero hand-written code" — and two days later posted "guys, I'm under attack": hardcoded API keys, no auth, paywall bypassed, and he shut it down because he could not debug what he had never understood. One anecdote, self-reported — a perfect illustration, not a statistic. The quantified version: a scan of apps built on Lovable found about <strong>10% exposing vulnerable endpoints</strong> (303 endpoints across 170 of 1,645 apps). And the Tea app breach — 72,000 images including government IDs — is widely <em>attributed</em> to vibe-coded infrastructure; attribution is commentary, not confirmation, so I quote it as a security-debt story, not an AI conviction.</p>
<p>Then there is the study this series already leans on, which lands differently in an addiction post. METR's randomized trial (2025): experienced developers on repositories they knew deeply were <strong>19% slower</strong> with AI — while estimating they were 20% faster. And METR's own 2026 update declared that result historical and its new measurement unreliable, partly because — read this twice — <em>developers who feel dependent on AI refuse to enter a study that might take it away</em>. The measurement problem is itself a symptom.</p>
<blockquote><p>"My felt speed is the one variable the loop is designed to inflate."</p></blockquote>
<p>And my own funnel? Here the honesty gets expensive. My homelab runs forty-plus services, used every day — by me. This blog ships, is read, survives its sixth month many times over. But repos created since January, deployed, used by anyone other than me, still alive in six months: <strong>I have never counted.</strong> A man who wrote three posts about measuring before believing has an unmeasured funnel in his own basement. That count is Monday-morning item number one, and the funnel above stays labeled "illustrative" until it is done.</p>
<p>The structural reading is older than agents: code was never the bottleneck. Understanding, deciding, validating, distributing, maintaining — the bottom of the funnel — none of it accelerated. Velocity fills the top. The gap in the middle is exactly where the loop drops you: at the 90% mark, where the variable reward has already paid out and the remaining 10% is pure friction — the substance the addiction has taught me to avoid.</p>

<h2>Second honest question: is it worth what it costs?</h2>
<p>Diagnosis versus arithmetic, one last time — on myself.</p>
<p><strong>The arithmetic (measurable).</strong> The subscription — the heavy-usage tiers run $100 to $200 a month, and aggressive agentic use can push well past that in API terms. My own exact figure is a count I owe this post's next edit, same as the funnel. The homelab's kilowatt-hours. That column is knowable to the euro. (And symmetric skepticism applies: the viral claims that power users cost Anthropic $25,000 a month are unverifiable estimates of a private company's costs — an anti-vendor number deserves the same distrust as a vendor number.)</p>
<p><strong>The diagnosis (real, unmeasurable).</strong> The evenings. The attention. The sleep edge. The 1970s house whose renovation — the hobby that used to produce finished rooms — has quietly stopped competing with a machine that pays out faster. None of that fits a spreadsheet, and all of it is cost.</p>
<p><strong>The value, honestly, in three lines.</strong> First: learning — the method I forge on Sunday is the one my team runs on Monday; everything Solstice does at work was prototyped on my own time, and that line is the most valuable and the hardest to price. Second: own use — a homelab service I use daily is a finished product with one user, and it counts, as long as I don't dress it up as a business. Third: revenue — zero, like roughly half the indie universe, and that is only a problem if I claim otherwise.</p>
<blockquote><p>"The value is real. It is just not where the speed promises it is."</p></blockquote>

<h2>What the addiction actually costs</h2>
<p>The tradition in this series is a section that lists what the post does not solve. This one gets the harder variant: the audit grid, applied to me. Behavioral science's most cited checklist (Griffiths, 2005) demands six components before "addiction" means anything: salience, mood modification, tolerance, withdrawal, conflict, relapse — all six, plus, in the ICD-11's version, twelve months of functional damage.</p>
<p>My honest scorecard: salience — I think about the running agent in the shower — check. Mood modification — launching one relaxes me the way lighting the soldering iron used to — check. Tolerance — one agent used to be enough, I now run three in parallel — check. Conflict — some evenings, one stalled renovation — half a check, the honest half. Withdrawal, relapse — not really, not yet. Three and a half out of six, depending on the day's honesty.</p>
<blockquote><p>"Officially, I am an enthusiast. Which is exactly what a gambler would say."</p></blockquote>
<p>Two costs the grid doesn't capture. The <strong>idea compost</strong>: unbuilt ideas used to ferment, recombine, and come back better — the friction-era selection this post opened with. Now every idea gets built to 90% and nothing composts; I may be trading ten shipped mediocrities for the one good idea that needed a month in the dark. And the <strong>perception debt</strong>: I feel faster, and METR's developers felt 20% faster while being 19% slower. My feeling is precisely the variable the loop manipulates. That is not a reason to quit — it is the reason the next section exists. You cannot eyeball your own speedometer.</p>

<h2>What to do Monday morning (and Sunday night)</h2>
<p>Not a detox plan. I am not quitting — the machine answers 90% of what my brain produces, and I like it. These are the guardrails of someone who intends to keep playing:</p>
<ol>
<li><strong>Count your funnel, monthly.</strong> Repos created, deployed, used by someone other than you, alive at six months. Four numbers, one line in a note. The count converts the feeling into a measurement — and the funnel diagram above stays a sketch until you do it.</li>
<li><strong>Set a shipping quota.</strong> No new repo while the last one is neither finished nor consciously archived. Starting is the reward the loop sells; make finishing the license to start.</li>
<li><strong>Apply the someone-else test.</strong> One user who is not you — a person, a colleague, a stranger — before a project earns the word "product". My homelab passes with one user: me. Name that honestly.</li>
<li><strong>Write "done" before the first prompt.</strong> One sentence: what exists when this is finished. An idea without a definition of done is a slot machine with better syntax.</li>
<li><strong>Protect one agent-free day.</strong> Not for virtue — for the compost. Ideas need unbuilt time to recombine. The soldering iron gave you that for free; now you have to schedule it.</li>
<li><strong>Total your real monthly cost</strong> — subscription, tokens, kilowatt-hours — and read it next to the funnel's bottom line once a quarter. Not to feel guilty: to decide with numbers what you currently decide with dopamine.</li>
</ol>

<h2>Where this leaves the series</h2>
<p>Three days ago, the professional verdict: agents rebuilt how my team ships, and the numbers hold. Today, the personal bill: the same machine, pointed at one idea-rich brain with no product owner and no verification gate, produces a loop with no built-in exit. Same amplifier, both directions — that has been this series' claim since March. At work, the gate says no before a human reads the diff. At home, I am the gate, at 11 p.m., and the gate wants to see the next reward. The guardrails above are me building for my evenings what we built for the team: a stopping point that does not depend on willpower.</p>
<p><strong>Read the rest of the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">The SDLC Is Dead</a> — why the process was always waste. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coding Was Never the Job</a> — what the engineer becomes when syntax disappears. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">AI Became a Team Reflex</a> — what an AI-native team looks like on a Tuesday. <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA Just Confirmed What My Team Already Lived</a> — the amplifier, measured. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100% Agent-Written</a> — the professional verdict this post is the personal bill for.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.natashadowschull.org/addiction-by-design/">Natasha Dow Schüll — <em>Addiction by Design: Machine Gambling in Las Vegas</em> (Princeton UP, 2012)</a>: the "machine zone" and addiction as human-machine co-production. Ethnography of gamblers — rigorous, qualitative, never tested on coding agents.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2658737/">Clark et al. — Gambling Near-Misses Enhance Motivation to Gamble (<em>Neuron</em>, 2009)</a>: near-misses recruit win-related dopaminergic circuitry. Small-sample fMRI, gambling context — the mapping to coding is analogy, not evidence.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.tandfonline.com/doi/abs/10.1080/14659890500114359">Griffiths — A "components" model of addiction (<em>Journal of Substance Use</em>, 2005)</a>: the six-component checklist; all six required — high engagement alone is not addiction.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6678371/">DSM-5 Internet Gaming Disorder vs. ICD-11 Gaming Disorder — comparison (2019)</a>: the clinical bars, including twelve months of functional impairment. No "AI use disorder" exists in any nosology.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2503.17473">MIT Media Lab &amp; OpenAI — How AI and Human Behaviors Shape Psychosocial Effects of Chatbot Use (2025)</a>: RCT, n=981; voluntary heavy use correlated with loneliness and dependence markers. Chatbots, not coding agents; correlational on the finding that matters; preprint co-authored by OpenAI.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://link.springer.com/article/10.1007/s00426-019-01245-8">Ashinoff &amp; Abu-Akel — Hyperfocus: the forgotten frontier of attention (<em>Psychological Research</em>, 2021)</a>: real, double-edged, under-researched, inconsistently defined, not exclusive to ADHD.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.sciencedirect.com/science/article/abs/pii/S0022395623004703">Meta-analysis — ADHD symptoms and problematic internet use (<em>Journal of Psychiatric Research</em>, 2023)</a>: 24 studies, ~19,000 participants, r ≈ 0.36–0.44. Cross-sectional, trait-continuum, direction unresolved.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2958516/">Volkow et al. — Evaluating Dopamine Reward Pathway in ADHD (<em>JAMA</em>, 2009)</a>: PET evidence for reward-pathway differences; a susceptibility hypothesis, not a mechanism proven on AI tools.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://doi.org/10.1016/j.jbvi.2016.07.001">Wiklund, Patzelt &amp; Dimov — How ADHD can be productively harnessed (<em>JBVI</em>, 2016)</a>: impulsivity fuels starting, hyperfocus catalyzes. Fourteen cases, qualitative, survivor-biased — narrative, not proof.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://ramus-meninges.fr/2017/02/03/la-pseudoscience-des-surdoues-2/">Ramus &amp; Gauvrit — La légende noire des surdoués (2017, updated through 2024)</a>: high-IQ populations show no excess psychological fragility; the "HPI" fragility narrative is a sampling-bias artifact.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/">METR — Early-2025 AI on Experienced Open-Source Developers (2025)</a> and <a target="_blank" rel="noopener noreferrer" href="https://metr.org/blog/2026-02-24-uplift-update/">the 2026 update</a>: −19% measured vs. +20% felt; the follow-up's selection bias — AI-dependent developers declining to participate — quoted here as symptom.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/">GitHub Octoverse 2025</a>: 121 million new repositories in one year. Repo creation ≠ products.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://news.ycombinator.com/item?id=39260051">IndieHackers dataset analysis (HN discussion)</a>: ~46% of indie projects at $0 revenue, power-law distribution. Pre-agent era, self-reported, survivor-biased — keep the shape, not the decimals.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://labs.cloudsecurityalliance.org/research/csa-research-note-ai-codegen-vulnerability-debt-20260406-csa/">Cloud Security Alliance — AI codegen vulnerability debt (research note, April 2026)</a>: corroborates the Lovable-apps scan (~10% of scanned apps with vulnerable endpoints). The Leo/Cursor incident and the Tea breach are quoted as reported anecdotes — the Tea AI-attribution is commentary, not confirmed.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.axios.com/2026/04/04/ai-agents-burnout-addiction-claude-code-openclaw">Axios — "They operate like slot machines" (April 2026)</a> and <a target="_blank" rel="noopener noreferrer" href="https://news.ycombinator.com/item?id=47289440">HN — "Addicted to Claude Code – Help" (March 2026)</a>: the testimony genre. Journalism and self-report, not science — cited as exactly that.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://blog.robbowley.net/2026/01/05/coding-has-never-been-the-bottleneck/">Rob Bowley — Coding has never been the bottleneck (2026)</a>: the structural argument for why the bottom of the funnel didn't move.</li>
</ul>`
}

const frenchContent: PostContent = {
  title: 'La friction était le frein',
  description: 'L\'IA agentique a supprimé la friction entre l\'idée et le code qui tourne — et cette friction était mon seul frein. Je construis sept jours sur sept ; environ 90 % de ce qui me traverse l\'esprit devient un projet. Récit à la première personne d\'une addiction : ce que la science comportementale en dit vraiment, le détour TDAH/hyperfocus sourcé, et les deux questions qui fâchent — est-ce que ça finit, et est-ce que ça vaut ce que ça coûte ?',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Chaque passion que j'ai eue portait son propre frein — le fer à souder, l'enduit qui sèche, le compilateur qui punit la fatigue. Les agents l'ont supprimé : le coût de démarrer s'est effondré à une phrase, et environ 90 % des idées qui me traversent l'esprit deviennent des projets, sept jours sur sept. La boucle — idée, prompt, récompense variable, encore un — est structurellement le mécanisme que décrit la littérature du jeu, et aucune étude évaluée par les pairs n'existe encore sur l'agentic coding : j'écris donc en n=1 contre cette littérature, et je l'assume. Le lien TDAH est une corrélation modérée et sourcée ; le lien « HPI » est du folklore, et je le dis. Puis les deux questions honnêtes : l'entonnoir de l'idée au produit vivant s'effondre exactement entre « repo créé » et « utilisé par quelqu'un d'autre » — et la valeur est réelle, mais pas là où la vitesse la promet. Des garde-fous en fin de billet, parce que la sortie n'est pas dans la boucle.</p></div>
<hr>
<p>Il est 23 heures passées, un dimanche, et je viens de relancer un agent. Personne n'attend ce projet. Il n'a ni deadline, ni utilisateur, ni ticket. Il existe parce que l'idée m'a traversé l'esprit ce matin sous la douche et qu'entre la douche et ce soir, la seule chose qui séparait l'idée du service déployé était une phrase à taper. Je l'ai tapée. C'est comme ça sept jours sur sept depuis des mois, et il est temps d'écrire ce que c'est vraiment : une addiction. Le mot est fort, et je vais le tenir à distance de sa définition clinique tout au long de ce billet — mais c'est le mien.</p>
<p>Jusqu'ici, cette série regardait dehors : le process, le métier, l'équipe, le ROI, le bilan des six mois. Ce billet regarde dedans. Il y a trois jours, je publiais le verdict professionnel — <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100 % du code écrit par des agents sur Solstice</a>. Voici la facture personnelle.</p>

<h2>La friction était le frein</h2>
<p>En 2016, je flashais des ESP8266. Une idée suivait un chemin imposé : commander le composant, attendre le colis cinq jours, souder, flasher, déboguer le pont diviseur monté à l'envers, recommencer le week-end suivant. La rénovation de la maison obéit à la même loi — l'enduit sèche en vingt-quatre heures, quelle que soit votre motivation. Chaque passion que j'ai eue portait son propre frein, inscrit dans la physique du truc. L'idée devait survivre à l'attente. La plupart n'y survivaient pas — et c'était le système qui fonctionnait.</p>
<blockquote><p>« Le coût d'une idée est tombé à zéro. Le coût de dix idées aussi. »</p></blockquote>
<p>Puis le frein a disparu. Aujourd'hui, environ 90 % des besoins qui me traversent l'esprit trouvent une réponse logicielle dans la journée — mon chiffre à moi, un ressenti, pas une mesure. Les quarante et quelques services qui tournent derrière Traefik sur mon serveur ont tous été, à un moment, une idée du dimanche. La distance entre « ça m'a traversé l'esprit » et « ça tourne » fait désormais un prompt de long.</p>
<svg viewBox="0 0 800 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Le temps entre une idée et son premier artefact fonctionnel est passé d'environ un week-end à l'époque ESP8266 en 2016 à une vingtaine de minutes avec les agents en 2026 — deux ordres de grandeur. Ce temps filtrait les idées : la friction disparue était le frein. Ordres de grandeur personnels, pas une mesure." class="diagram-svg">
<text x="64" y="34" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">LE TEMPS ENTRE L'IDÉE ET LE PREMIER ARTEFACT</text>
<text x="64" y="68" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="26" font-weight="700">D'un week-end à vingt minutes</text>
<text x="64" y="88" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.6">Ordres de grandeur personnels, à dix ans d'écart — un ressenti chiffré, pas une mesure</text>
<text x="64" y="136" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" opacity="0.55" letter-spacing="0.1em">ESP8266 · 2016</text>
<rect x="64" y="146" width="560" height="40" rx="8" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="80" y="171" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12.5" font-weight="650">un week-end — commander, attendre, souder, flasher, déboguer</text>
<g fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.3" stroke-linecap="round">
<path d="M 82 194 L 82 199 L 624 199 L 624 194"></path>
<path d="M 353 199 L 353 205"></path>
</g>
<text x="353" y="220" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" font-style="italic" opacity="0.7" text-anchor="middle">ce temps-là filtrait les idées — c'était le frein</text>
<text x="64" y="248" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" opacity="0.55" letter-spacing="0.1em">AGENTS · 2026</text>
<rect x="64" y="258" width="18" height="40" rx="6" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-opacity="0.3" stroke-width="1"></rect>
<text x="94" y="283" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12.5" font-weight="650">vingt minutes — un prompt, un agent, un service qui tourne</text>
<text x="94" y="303" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11.5" font-style="italic" opacity="0.7">plus rien ne filtre — ni la fatigue, ni le fer à souder</text>
</svg>
<p>Voici ce que j'ai sous-estimé pendant des mois : la friction ne faisait pas que ralentir. Elle <em>sélectionnait</em>. Une idée devait survivre une semaine dans ma tête avant de mériter un week-end. Les faibles mouraient en silence ; les bonnes fermentaient, se recombinaient avec d'autres, ressortaient plus affûtées. C'était la sélection naturelle des idées — et je l'ai démontée avec un abonnement.</p>

<h2>Une boucle qui ressemble à autre chose</h2>
<p>Regardez le cycle honnêtement : il a quatre stations. Une idée déclenche un prompt. Le prompt ne coûte presque rien. L'agent revient avec une récompense — et la récompense est <em>variable</em> : parfois c'est exactement ça, parfois le build est vert avec un test rouge, parfois il a tout cassé avec assurance. Et c'est le presque-gagné, plus que le gagné, qui me fait taper « encore un ».</p>
<svg viewBox="0 0 800 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="La boucle de l'agentic coding : une idée déclenche un prompt au coût quasi nul, qui produit une récompense variable — ça marche presque —, dont le near-miss relance un prompt de plus. La boucle n'a aucun point d'arrêt intégré : la sortie n'existe pas par défaut, elle doit être construite délibérément." class="diagram-svg">
<text x="64" y="34" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">LA BOUCLE · RÉCOMPENSE À RATIO VARIABLE</text>
<text x="64" y="64" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="700">Aucun point d'arrêt intégré</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="355" y="140" width="150" height="48" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="590" y="251" width="160" height="48" rx="8" fill="currentColor" fill-opacity="0.15"></rect>
<rect x="340" y="362" width="180" height="48" rx="8" fill="currentColor" fill-opacity="0.16"></rect>
<rect x="110" y="251" width="160" height="48" rx="8" fill="currentColor" fill-opacity="0.17"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle">
<text x="430" y="161">L'IDÉE</text>
<text x="670" y="272">LE PROMPT</text>
<text x="430" y="383">LA RÉCOMPENSE</text>
<text x="190" y="272">&#171; ENCORE UN &#187;</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="9.5" opacity="0.6" text-anchor="middle">
<text x="430" y="178">le déclencheur</text>
<text x="670" y="289">coût : quasi nul</text>
<text x="430" y="400">variable — ça marche… presque</text>
<text x="190" y="289">le near-miss relance</text>
</g>
<g fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<path d="M 515 180 Q 625 195 662 248"></path>
<path d="M 662 248 L 654 237 M 662 248 L 650 244"></path>
<path d="M 655 305 Q 625 370 528 392"></path>
<path d="M 528 392 L 541 385 M 528 392 L 539 398"></path>
<path d="M 335 395 Q 235 375 197 305"></path>
<path d="M 197 305 L 199 318 M 197 305 L 208 312"></path>
<path d="M 185 245 Q 225 185 348 170"></path>
<path d="M 348 170 L 335 165 M 348 170 L 337 177"></path>
</g>
<text x="430" y="268" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10" opacity="0.45" letter-spacing="0.14em" text-anchor="middle">LA BOUCLE</text>
<text x="430" y="286" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" font-style="italic" opacity="0.65" text-anchor="middle">&#171; machine zone &#187; : le temps disparaît</text>
<path d="M 108 290 C 70 305 52 335 46 372" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.4" stroke-dasharray="5,5" stroke-linecap="round"></path>
<text x="40" y="398" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="650">la sortie</text>
<text x="40" y="414" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="10.5" font-style="italic" opacity="0.7">n'existe pas par défaut — elle se construit</text>
</svg>
<p>Rien de tout ça n'est un mécanisme nouveau. Le renforcement à ratio variable — la récompense qui arrive de façon imprévisible — est le programme que Skinner a identifié comme produisant le comportement le plus intense et le plus résistant à l'extinction, et c'est le moteur de toutes les machines à sous. Le presque-gagné a de la neuroscience primaire derrière lui : Clark et ses collègues ont montré en 2009 que le near-miss recrute les mêmes circuits dopaminergiques que le gain, et augmente la motivation à continuer — une petite étude d'IRM fonctionnelle, sur le jeu d'argent, et je la transpose au code par analogie, pas par preuve. Mais un agent qui revient avec un build vert et un test rouge est un near-miss de manuel, et je ressens exactement la traction qu'il prédit.</p>
<p>La description la plus profonde que je connaisse est celle de Natasha Schüll dans <em>Addiction by Design</em>, quinze ans de terrain chez les joueurs de machines. Sa « machine zone » : un état où le temps se dissout, où même gagner cesse d'être le but — continuer est le but. Et sa thèse la plus coupante : cet état est une <em>co-production</em> entre l'humain et le design de la machine, pas une faiblesse individuelle. Méditez ça à 23 heures pendant qu'un troisième agent tourne.</p>
<blockquote><p>« Regarder un agent travailler, ce n'est pas du flow. C'est de l'anticipation. »</p></blockquote>
<p>Je veux être précis ici, parce que la confusion est confortable : souvent, ça <em>ressemble</em> à du flow. Mais le flow de Csikszentmihalyi exige votre compétence activement engagée contre un défi à sa mesure — le faire est la récompense. Regarder un terminal défiler n'est pas un équilibre défi-compétence ; c'est attendre un gain variable. Structurellement, c'est plus proche de la machine zone que du flow. Ce cadrage est le mien, pas une citation — et c'est la phrase la plus inconfortable de ce billet.</p>
<p>Et la science, sur la surconsommation d'IA ? La donnée empirique la plus proche est l'étude randomisée MIT Media Lab / OpenAI (2025, 981 participants) : l'usage assigné n'a pas d'effet significatif, mais l'usage intensif <em>volontaire</em> corrèle avec des marqueurs de solitude, de dépendance émotionnelle et d'usage problématique. Les réserves s'empilent : ça étudie le chatbot émotionnel, pas l'agent de code ; le résultat qui compte est corrélationnel ; c'est un preprint co-signé par OpenAI. Au-delà, la phrase honnête est celle-ci : en juillet 2026, il n'existe <strong>aucune étude évaluée par les pairs sur la compulsion en agentic coding</strong>. Le genre n'existe qu'en témoignages — Axios titrait en avril « They operate like slot machines », Hacker News héberge un fil littéralement intitulé « Addicted to Claude Code – Help ». J'écris depuis un territoire pré-scientifique : n=1, lu contre la littérature du jeu. C'est l'affirmation la plus solide disponible, donc c'est celle que je fais.</p>

<h2>Le détour TDAH — et le mythe HPI</h2>
<p>Pourquoi est-ce que ça frappe plus fort les gens comme moi ? Le lecteur que j'ai en tête produit dix idées par jour et a passé sa vie à en regarder neuf mourir de friction. Pour ce cerveau-là, une machine qui convertit n'importe quelle idée passagère en récompense en vingt minutes n'est pas un outil de productivité. C'est une clé parfaitement taillée.</p>
<p>La littérature a des morceaux de ça, et ils méritent d'être cités à leur force réelle — pas plus. L'<strong>hyperfocus</strong> est un phénomène réel et décrit : une absorption totale dans la tâche qui coupe le monde, discutée surtout dans le TDAH mais pas exclusive à lui, et qui chevauche le flow ordinaire. La revue de référence (Ashinoff &amp; Abu-Akel, 2021) le dit sans détour : c'est sous-étudié et défini de façon incohérente — donc traitez-le comme une expérience que beaucoup reconnaîtront, pas comme un marqueur diagnostique. Il est explicitement à double tranchant : la même absorption qui livre un projet à 2 heures du matin est celle qui perd la soirée.</p>
<p><strong>TDAH et usage compulsif</strong> : une méta-analyse de 2023 (24 études, ~19 000 participants) trouve que les traits TDAH corrèlent avec l'usage problématique d'internet à r ≈ 0,36–0,44 — une corrélation modérée, transversale, sur un continuum de traits, et notamment <em>plus forte chez les adultes non cliniques</em>. Pas « le TDAH cause l'addiction » ; le sens de la flèche n'est pas tranché. En dessous, les travaux de Volkow en imagerie (2009) soutiennent une différence du circuit de la récompense dans le TDAH — une préférence pour la petite récompense immédiate contre la grande récompense différée. Une susceptibilité à exactement la boucle dessinée plus haut — énoncée comme susceptibilité, rien de plus. Et la littérature entrepreneuriale (Wiklund et collègues, 2016 — quatorze cas, qualitatif, biaisé par les survivants) décrit le motif que les cerveaux à idées reconnaîtront : l'impulsivité comme carburant du démarrage, l'hyperfocus comme catalyseur qui termine ou qui dévore.</p>
<p><strong>Maintenant, le mythe.</strong> En France, cette conversation attire instantanément l'étiquette « HPI ». J'ai cherché la science, et le rapport honnête tient en une ligne : il n'y en a pas. Franck Ramus et Nicolas Gauvrit montrent depuis des années que les populations à haut QI n'ont pas d'excès de fragilité psychologique — plutôt l'inverse — et que la figure du « surdoué tourmenté » est un artefact d'échantillonnage : les cliniciens ne rencontrent que les surdoués qui consultent. Le « HPI » vendu en prime time ne prédit rien de votre addiction, de votre hyperfocus ou de votre nombre d'idées. Si vous voulez une étiquette pour le mécanisme de ce billet, les traits TDAH et la simple recherche de nouveauté ont un poids sourcé. Le HPI n'en a aucun.</p>
<p>Et pour être sans ambiguïté : je ne diagnostique personne dans ce billet, moi compris. Le mécanisme décrit une expérience ; il ne distribue pas d'étiquettes. Si la boucle ci-dessus mange vos nuits et que ça fait mal, cette conversation-là appartient à un clinicien, pas à un blog.</p>

<h2>Première question honnête : est-ce que ça finit ?</h2>
<p>Donc l'usine tourne sept jours sur sept. Qu'est-ce qui sort de l'autre côté ?</p>
<svg viewBox="0 0 800 440" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Entonnoir illustratif de l'idée au produit vivant : les idées, les prompts et les repos créés forment un haut d'entonnoir massif — 121 millions de nouveaux repos GitHub en un an — mais la largeur s'effondre entre le repo créé et le produit utilisé par quelqu'un d'autre, puis encore à six mois de vie. Largeurs illustratives : aucune donnée d'ère agentique n'existe, comptez les vôtres." class="diagram-svg">
<text x="64" y="34" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" opacity="0.55" letter-spacing="0.14em">DE L'IDÉE AU PRODUIT VIVANT · ENTONNOIR ILLUSTRATIF</text>
<text x="64" y="66" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="700">La vélocité remplit le haut, jamais le bas</text>
<text x="64" y="86" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" opacity="0.6">Largeurs illustratives — aucune donnée d'ère agentique n'existe : comptez les vôtres</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="200" y="112" width="520" height="34" rx="8" fill="currentColor" fill-opacity="0.13"></rect>
<rect x="200" y="162" width="460" height="34" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="200" y="212" width="380" height="34" rx="8" fill="currentColor" fill-opacity="0.15"></rect>
<rect x="200" y="262" width="190" height="34" rx="8" fill="currentColor" fill-opacity="0.16"></rect>
<rect x="200" y="312" width="80" height="34" rx="8" fill="currentColor" fill-opacity="0.17"></rect>
<rect x="200" y="362" width="34" height="34" rx="8" fill="currentColor" fill-opacity="0.18"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12.5" font-weight="650" text-anchor="end">
<text x="188" y="134">Idées</text>
<text x="188" y="184">Prompts lancés</text>
<text x="188" y="234">Repos créés</text>
<text x="188" y="284">Déployés</text>
<text x="188" y="334">Utilisés par un autre</text>
<text x="188" y="384">Vivants à 6 mois</text>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" font-style="italic" opacity="0.7">
<text x="592" y="228">121 M de nouveaux repos GitHub</text>
<text x="592" y="243">en un an (Octoverse 2025)</text>
<text x="292" y="328">~46 % des projets indés à 0 €</text>
<text x="292" y="343">(données pré-agents)</text>
</g>
<g fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.3" stroke-linecap="round">
<path d="M 706 250 L 714 250 L 714 346 L 706 346" stroke-dasharray="3,3"></path>
</g>
<text x="732" y="298" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="650" text-anchor="middle" transform="rotate(-90 732 298)">le fossé</text>
<text x="200" y="424" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" font-style="italic" opacity="0.7">Entre le repo créé et le produit que quelqu'un d'autre utilise — c'est là que la boucle s'arrête, pas au prompt.</text>
</svg>
<p>Le haut de l'entonnoir a explosé, et cette partie-là est mesurée : GitHub a enregistré <strong>121 millions de nouveaux dépôts en un an</strong> — environ 230 par minute — sa plus grosse année. Mais un dépôt n'est pas un produit ; les forks et les expériences dominent. Le bas de l'entonnoir, lui, ressemble à ce qu'il a toujours été. Les jeux de données indés dont on dispose (ère pré-agents, autodéclarés, biaisés par les survivants — gardez la forme, pas les décimales) placent environ <strong>46 % des projets à zéro revenu</strong>, avec une loi de puissance brutale au-dessus. Personne n'a publié de taux de finition pour les side-projects de l'ère agentique. Le centre de ce billet repose sur un entonnoir que personne n'a mesuré — moi compris, et j'y reviens.</p>
<p>Ce qu'on a, en revanche, c'est la documentation de ce qui arrive quand le prototype se fait passer pour un produit. Le cas d'école : en mars 2025, un fondateur annonce un SaaS construit entièrement avec Cursor, « zéro ligne écrite à la main » — deux jours plus tard il poste « les gars, je suis attaqué » : clés API en dur, pas d'authentification, paywall contourné, et il ferme boutique parce qu'on ne débogue pas ce qu'on n'a jamais compris. Une anecdote autodéclarée — une illustration parfaite, pas une statistique. La version chiffrée : un scan d'applications construites sur Lovable a trouvé environ <strong>10 % d'apps exposant des endpoints vulnérables</strong> (303 endpoints sur 170 apps parmi 1 645). Et la fuite de l'app Tea — 72 000 images dont des pièces d'identité — est largement <em>attribuée</em> à une infrastructure vibe-codée ; l'attribution est un commentaire, pas une confirmation, donc je la cite comme une histoire de dette de sécurité, pas comme un procès de l'IA.</p>
<p>Et puis il y a l'étude sur laquelle cette série s'appuie déjà, qui sonne autrement dans un billet sur l'addiction. L'essai randomisé de METR (2025) : des développeurs expérimentés, sur des dépôts qu'ils connaissaient intimement, étaient <strong>19 % plus lents</strong> avec l'IA — tout en s'estimant 20 % plus rapides. Et la mise à jour 2026 de METR classe ce résultat comme historique et juge sa nouvelle mesure non fiable, en partie parce que — relisez-la deux fois — <em>les développeurs qui se sentent dépendants de l'IA refusent d'entrer dans une étude qui pourrait la leur retirer</em>. Le problème de mesure est lui-même un symptôme.</p>
<blockquote><p>« Ma vitesse ressentie est précisément la variable que la boucle est conçue pour gonfler. »</p></blockquote>
<p>Et mon entonnoir à moi ? C'est ici que l'honnêteté coûte cher. Mon homelab fait tourner quarante et quelques services, utilisés tous les jours — par moi. Ce blog, lui, est fini : publié, lu, largement au-delà de ses six mois de vie. Mais les repos créés depuis janvier, déployés, utilisés par quelqu'un d'autre que moi, encore vivants dans six mois : <strong>je ne les ai jamais comptés.</strong> Un type qui a écrit trois billets sur « mesurer avant de croire » a un entonnoir non mesuré dans sa propre cave. Ce comptage est l'action n°1 du lundi matin, et l'entonnoir ci-dessus restera étiqueté « illustratif » tant qu'il n'est pas fait.</p>
<p>La lecture structurelle est plus vieille que les agents : le code n'a jamais été le goulot d'étranglement. Comprendre, décider, valider, distribuer, maintenir — le bas de l'entonnoir — rien de tout ça n'a accéléré. La vélocité remplit le haut. Le fossé du milieu est exactement là où la boucle vous lâche : à 90 % du chemin, quand la récompense variable a déjà payé et que les 10 % restants sont de la friction pure — la substance que l'addiction m'a appris à fuir.</p>

<h2>Deuxième question honnête : est-ce que ça vaut ce que ça coûte ?</h2>
<p>Diagnostic contre arithmétique, une dernière fois — sur moi.</p>
<p><strong>L'arithmétique (mesurable).</strong> L'abonnement — les paliers gros usage tournent entre 100 et 200 $ par mois, et un usage agentique agressif peut aller bien au-delà en équivalent API. Mon chiffre exact à moi est un comptage que je dois à la prochaine édition de ce billet, comme l'entonnoir. Les kilowattheures du homelab. Cette colonne-là est connaissable à l'euro près. (Et le scepticisme est symétrique : les chiffres viraux du power user qui « coûterait 25 000 $ par mois à Anthropic » sont des estimations invérifiables des coûts d'une boîte privée — un chiffre anti-éditeur mérite la même méfiance qu'un chiffre d'éditeur.)</p>
<p><strong>Le diagnostic (réel, non mesurable).</strong> Les soirées. L'attention. Le bord du sommeil. La maison de 1970 dont la rénovation — le hobby qui produisait des pièces finies — a discrètement cessé de rivaliser avec une machine qui paie plus vite. Rien de tout ça ne rentre dans un tableur, et tout ça est un coût.</p>
<p><strong>La valeur, honnêtement, en trois lignes.</strong> Un : l'apprentissage — la méthode que je forge le dimanche est celle que mon équipe déroule le lundi ; tout ce que Solstice fait au travail a été prototypé sur mon temps à moi, et cette ligne est la plus rentable et la plus difficile à chiffrer. Deux : l'usage propre — un service homelab que j'utilise chaque jour est un produit fini avec un utilisateur, et ça compte, tant que je ne le déguise pas en business. Trois : le revenu — zéro, comme à peu près la moitié de l'univers indé, et ce n'est un problème que si je prétends le contraire.</p>
<blockquote><p>« La valeur est réelle. Elle n'est simplement pas là où la vitesse la promet. »</p></blockquote>

<h2>Ce que l'addiction coûte vraiment</h2>
<p>La tradition de cette série, c'est une section qui liste ce que le billet ne résout pas. Celle-ci a droit à la variante plus dure : la grille d'audit, appliquée à moi. La check-list la plus citée de la science comportementale (Griffiths, 2005) exige six composantes avant que « addiction » veuille dire quelque chose : saillance, modification de l'humeur, tolérance, sevrage, conflit, rechute — les six, plus, dans la version de l'ICD-11, douze mois de dégâts fonctionnels.</p>
<p>Mon relevé honnête : saillance — je pense à l'agent qui tourne sous la douche — coché. Modification de l'humeur — en lancer un me détend comme allumer le fer à souder me détendait — coché. Tolérance — un agent me suffisait, j'en fais tourner trois — coché. Conflit — des soirées, un chantier à l'arrêt — à moitié coché, la moitié honnête. Sevrage, rechute — pas vraiment, pas encore. Trois cases et demie sur six, selon l'honnêteté du jour.</p>
<blockquote><p>« Officiellement, je suis un enthousiaste. C'est exactement ce que dirait un joueur. »</p></blockquote>
<p>Deux coûts que la grille ne capture pas. Le <strong>compost des idées</strong> : les idées non construites fermentaient, se recombinaient, revenaient meilleures — la sélection par friction du début de ce billet. Maintenant chaque idée est construite à 90 % et rien ne composte ; je suis peut-être en train d'échanger dix médiocrités livrées contre la bonne idée qui avait besoin d'un mois d'obscurité. Et la <strong>dette de perception</strong> : je me sens plus rapide, et les développeurs de METR se sentaient 20 % plus rapides en étant 19 % plus lents. Mon ressenti est précisément la variable que la boucle manipule. Ce n'est pas une raison d'arrêter — c'est la raison d'être de la section suivante. On ne lit pas son propre compteur à l'œil nu.</p>

<h2>Quoi faire lundi matin (et dimanche soir)</h2>
<p>Pas un plan de désintox. Je n'arrête pas — la machine répond à 90 % de ce que mon cerveau produit, et j'aime ça. Voici les garde-fous de quelqu'un qui compte continuer à jouer :</p>
<ol>
<li><strong>Comptez votre entonnoir, chaque mois.</strong> Repos créés, déployés, utilisés par quelqu'un d'autre que vous, vivants à six mois. Quatre chiffres, une ligne dans une note. Le comptage transforme le ressenti en mesure — et l'entonnoir ci-dessus reste un croquis tant que ce n'est pas fait.</li>
<li><strong>Fixez un quota de finition.</strong> Pas de nouveau repo tant que le précédent n'est ni terminé ni archivé consciemment. Démarrer est la récompense que vend la boucle ; faites de finir le permis de démarrer.</li>
<li><strong>Appliquez le test du « quelqu'un d'autre ».</strong> Un utilisateur qui n'est pas vous — un proche, un collègue, un inconnu — avant qu'un projet ait droit au mot « produit ». Mon homelab passe le test avec un utilisateur : moi. Nommez ça honnêtement.</li>
<li><strong>Écrivez « fini » avant le premier prompt.</strong> Une phrase : ce qui existe quand c'est terminé. Une idée sans définition de fini est une machine à sous avec une meilleure syntaxe.</li>
<li><strong>Protégez un jour sans agent.</strong> Pas pour la vertu — pour le compost. Les idées ont besoin de temps non construit pour se recombiner. Le fer à souder vous offrait ça gratuitement ; maintenant il faut le planifier.</li>
<li><strong>Totalisez votre coût mensuel réel</strong> — abonnement, tokens, kilowattheures — et lisez-le à côté du bas de votre entonnoir une fois par trimestre. Pas pour culpabiliser : pour décider avec des chiffres ce que vous décidez aujourd'hui à la dopamine.</li>
</ol>

<h2>Où ça laisse la série</h2>
<p>Il y a trois jours, le verdict professionnel : les agents ont reconstruit la façon dont mon équipe livre, et les chiffres tiennent. Aujourd'hui, la facture personnelle : la même machine, pointée sur un cerveau à idées sans product owner et sans point de contrôle, produit une boucle sans sortie intégrée. Le même amplificateur, dans les deux sens — c'est la thèse de cette série depuis mars. Au travail, le portail dit non avant qu'un humain ne lise le diff. À la maison, le portail, c'est moi, à 23 heures, et le portail a envie de voir la prochaine récompense. Les garde-fous ci-dessus, c'est moi en train de construire pour mes soirées ce qu'on a construit pour l'équipe : un point d'arrêt qui ne dépend pas de la volonté.</p>
<p><strong>Lisez le reste de la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">Le SDLC est mort</a> — pourquoi le process a toujours été du gâchis. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coder n'a jamais été le métier</a> — ce que devient l'ingénieur quand la syntaxe disparaît. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">L'IA est devenue un réflexe d'équipe</a> — à quoi ressemble une équipe IA-native un mardi. <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA vient de confirmer ce que mon équipe vivait déjà</a> — l'amplificateur, mesuré. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100 % du code écrit par des agents</a> — le verdict professionnel dont ce billet est la facture personnelle.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.natashadowschull.org/addiction-by-design/">Natasha Dow Schüll — <em>Addiction by Design: Machine Gambling in Las Vegas</em> (Princeton UP, 2012)</a> : la « machine zone » et l'addiction comme co-production humain-machine. Ethnographie de joueurs — rigoureuse, qualitative, jamais testée sur les agents de code.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2658737/">Clark et al. — Gambling Near-Misses Enhance Motivation to Gamble (<em>Neuron</em>, 2009)</a> : le presque-gagné recrute les circuits dopaminergiques du gain. Petit échantillon d'IRMf, contexte jeu d'argent — la transposition au code est une analogie, pas une preuve.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.tandfonline.com/doi/abs/10.1080/14659890500114359">Griffiths — A « components » model of addiction (<em>Journal of Substance Use</em>, 2005)</a> : la grille à six composantes ; les six sont requises — l'engagement intense seul n'est pas une addiction.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6678371/">DSM-5 Internet Gaming Disorder vs ICD-11 Gaming Disorder — comparaison (2019)</a> : les seuils cliniques, dont douze mois d'atteinte fonctionnelle. Aucun « trouble de l'usage d'IA » n'existe dans les nosographies.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2503.17473">MIT Media Lab &amp; OpenAI — How AI and Human Behaviors Shape Psychosocial Effects of Chatbot Use (2025)</a> : essai randomisé, n=981 ; l'usage intensif volontaire corrèle avec solitude et dépendance. Chatbots, pas agents de code ; corrélationnel sur le résultat qui compte ; preprint co-signé par OpenAI.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://link.springer.com/article/10.1007/s00426-019-01245-8">Ashinoff &amp; Abu-Akel — Hyperfocus: the forgotten frontier of attention (<em>Psychological Research</em>, 2021)</a> : réel, à double tranchant, sous-étudié, défini de façon incohérente, pas exclusif au TDAH.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.sciencedirect.com/science/article/abs/pii/S0022395623004703">Méta-analyse — symptômes TDAH et usage problématique d'internet (<em>Journal of Psychiatric Research</em>, 2023)</a> : 24 études, ~19 000 participants, r ≈ 0,36–0,44. Transversal, continuum de traits, sens de la flèche non tranché.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2958516/">Volkow et al. — Evaluating Dopamine Reward Pathway in ADHD (<em>JAMA</em>, 2009)</a> : imagerie TEP en faveur d'une différence du circuit de la récompense ; une hypothèse de susceptibilité, pas un mécanisme prouvé sur les outils d'IA.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://doi.org/10.1016/j.jbvi.2016.07.001">Wiklund, Patzelt &amp; Dimov — How ADHD can be productively harnessed (<em>JBVI</em>, 2016)</a> : l'impulsivité carburant du démarrage, l'hyperfocus catalyseur. Quatorze cas, qualitatif, biais du survivant — un récit, pas une preuve.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://ramus-meninges.fr/2017/02/03/la-pseudoscience-des-surdoues-2/">Ramus &amp; Gauvrit — La légende noire des surdoués (2017, prolongé jusqu'en 2024)</a> : pas d'excès de fragilité psychologique chez les hauts QI ; le récit du « HPI fragile » est un artefact d'échantillonnage.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/">METR — Early-2025 AI on Experienced Open-Source Developers (2025)</a> et <a target="_blank" rel="noopener noreferrer" href="https://metr.org/blog/2026-02-24-uplift-update/">la mise à jour 2026</a> : −19 % mesuré contre +20 % ressenti ; le biais de sélection du suivi — les développeurs dépendants de l'IA refusent de participer — cité ici comme symptôme.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/">GitHub Octoverse 2025</a> : 121 millions de nouveaux dépôts en un an. Création de dépôt ≠ produit.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://news.ycombinator.com/item?id=39260051">Analyse du jeu de données IndieHackers (discussion HN)</a> : ~46 % des projets indés à 0 € de revenu, distribution en loi de puissance. Ère pré-agents, autodéclaré, biais du survivant — gardez la forme, pas les décimales.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://labs.cloudsecurityalliance.org/research/csa-research-note-ai-codegen-vulnerability-debt-20260406-csa/">Cloud Security Alliance — AI codegen vulnerability debt (note de recherche, avril 2026)</a> : corrobore le scan des apps Lovable (~10 % d'apps aux endpoints vulnérables). L'incident Leo/Cursor et la fuite Tea sont cités comme anecdotes rapportées — l'attribution de Tea à l'IA est un commentaire, pas une confirmation.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.axios.com/2026/04/04/ai-agents-burnout-addiction-claude-code-openclaw">Axios — « They operate like slot machines » (avril 2026)</a> et <a target="_blank" rel="noopener noreferrer" href="https://news.ycombinator.com/item?id=47289440">HN — « Addicted to Claude Code – Help » (mars 2026)</a> : le genre du témoignage. Journalisme et autodéclaration, pas de la science — cités comme exactement ça.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://blog.robbowley.net/2026/01/05/coding-has-never-been-the-bottleneck/">Rob Bowley — Coding has never been the bottleneck (2026)</a> : l'argument structurel qui explique pourquoi le bas de l'entonnoir n'a pas bougé.</li>
</ul>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'AgenticAddiction',
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
