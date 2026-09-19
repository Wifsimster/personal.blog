<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'po-is-dead-judgment-is-not',
  date: '2026-08-02',
  tags: ['Software', 'AI', 'Opinion', 'Work']
}

const englishContent: PostContent = {
  title: 'The Backlog Was Never the Job',
  description: 'The same week, my feed buried the Product Owner, saved the Product Manager, gave up reading AI code line by line, and handed a whole product to one person. Four posts, one event: scarcity changed sides. What dies is the relay function. What survives is product judgment — and it no longer belongs to a single role.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> The same week, my feed buried the <abbr title="Product Owner — the Scrum role responsible for the backlog">PO</abbr> and saved the <abbr title="Product Manager">PM</abbr>. A third post gave up reviewing AI-generated code line by line. A fourth argued that one person can now carry a product end to end. Four posts, one event: producing is no longer the scarce part. The relay function — feeding a backlog, formatting tickets, ferrying answers back and forth — dies. Product judgment survives, and it stops being the property of one role. People stay. The job description doesn't.</p></div>
<hr>
<p>The same week, my feed buried the Product Owner and saved him.</p>
<p>Four posts, four authors who don't know each other, four angles. A lead product manager wrote that the PO role was always an organizational aberration and has become indefensible in the AI era: hiring someone to feed a backlog, write tickets and relay information between business and developers is optimizing an organization that is already obsolete. A transformation consultant answered, without knowing she was answering: her team generated two days' worth of user stories in two hours, well-written, well-sliced — and disconnected from the field constraints only real interviews would have surfaced. Her conclusion: the tool saved hours of drafting and not one minute of understanding, so the PM's value moves to arbitration and to field knowledge that cannot be delegated. A staff platform engineer admitted he no longer has the capacity to review all the code his agents produce, and that line-by-line review is probably no longer the right fight: invest in specifications, give the agents the means to test their own work, demand verifiable reports. And an independent developer observed that a single person can now carry a product end to end — code becoming one means among others, no longer the main activity.</p>
<p>Each of them is right about their segment. They just aren't describing four different things.</p>
<blockquote><p>Four angles, one event: production stopped being the scarce thing.</p></blockquote>
<svg viewBox="0 0 800 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four LinkedIn posts from four authors who don't know each other — the PO is indefensible, the PM remains essential, I no longer review line by line, one product one person — converge on a single event: production stopped being the scarce thing." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">THE SAME WEEK · FOUR POSTS</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Four angles. One event.</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="102" width="272" height="44" rx="8" fill="currentColor" fill-opacity="0.13"></rect>
<rect x="64" y="156" width="272" height="44" rx="8" fill="currentColor" fill-opacity="0.13"></rect>
<rect x="64" y="210" width="272" height="44" rx="8" fill="currentColor" fill-opacity="0.13"></rect>
<rect x="64" y="264" width="272" height="44" rx="8" fill="currentColor" fill-opacity="0.13"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif">
<text x="80" y="121" font-size="14.5" font-weight="600">"The PO is indefensible"</text>
<text x="80" y="138" font-size="13" opacity="0.55">a lead product manager</text>
<text x="80" y="175" font-size="14.5" font-weight="600">"The PM remains essential"</text>
<text x="80" y="192" font-size="13" opacity="0.55">a transformation consultant</text>
<text x="80" y="229" font-size="14.5" font-weight="600">"I no longer review line by line"</text>
<text x="80" y="246" font-size="13" opacity="0.55">a staff platform engineer</text>
<text x="80" y="283" font-size="14.5" font-weight="600">"One product, one person"</text>
<text x="80" y="300" font-size="13" opacity="0.55">an independent developer</text>
</g>
<g fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round">
<path d="M 336 124 C 430 124 480 176 540 194"></path>
<path d="M 336 178 C 430 178 480 194 540 200"></path>
<path d="M 336 232 C 430 232 480 212 540 206"></path>
<path d="M 336 286 C 430 286 480 230 540 212"></path>
</g>
<circle cx="550" cy="203" r="5" fill="currentColor" fill-opacity="0.75"></circle>
<text x="570" y="194" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17" font-weight="650">the scarce thing</text>
<text x="570" y="217" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17" font-weight="650">changed sides</text>
<text x="64" y="326" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">four authors who don't know each other — paraphrased, anonymized</text>
</svg>
<p>I wrote the engineering side of this a few months ago: <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">coding was never the job</a>. This is the product side, seen from where I sit — an engineering lead on regulated healthcare software, on the other side of the wall from the product people. And from that side, the debate about whether the PO is dead misses the corpse.</p>

<h2>What the product week was actually made of</h2>
<p>Take an honest inventory of what the transmission-belt configuration filled a week with. Feeding the backlog. Formatting tickets so developers would accept them. Relaying a user's answer to a developer's question, then relaying the follow-up question back. Chasing status updates to feed a steering committee. Reformatting the same information for three audiences. None of this was ever the job. It was the packaging around the job, and it expanded to fill the week because someone had to do it and the tools were bad.</p>
<p>That packaging is what agents absorb. On my team this is no longer an experiment; it is written down as method. I have already <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">described</a> the agents that triage incoming tickets and the persona panels that debate a design before a human reads the synthesis. On <abbr title="Fictitious codename: the real project, its products and its vendor are anonymized.">Solstice*</abbr>, the loop has closed further. The weekly product workshop — PO, PM, tech lead, designer — is recorded. Within the hour, an agent has turned the transcript into the minutes, the business rules, and ready-to-build issues. Nobody writes tickets after the meeting anymore. The meeting became the deliverable: the context, the constraints, the arbitration — what happens in the room is the only part automation cannot extract on the way out. And when we wrote down the open fronts of our own method, the active frontier was not the code. It was the specs. That finding ended up earning its own post: <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">the doctrine that compounds while models depreciate</a>.</p>
<p>The daily version has the same shape. Twenty minutes of context assembly by someone who knows the domain, thirty seconds of generation, then the conversation that actually matters — this draft contradicts the retention policy, kill it; these two stories assume the same screen, merge them.</p>
<blockquote><p>The brief became the work. The drafting was only ever the packaging.</p></blockquote>
<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustrative decomposition of a product week as a single stacked bar: the transmission share — backlog feeding, ticket writing, relaying and status — is what AI agents absorb; the remaining share — arbitration, field knowledge, refusal — is what survives and becomes the job." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">THE PRODUCT WEEK, DECOMPOSED · ILLUSTRATIVE</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">The drafting leaves. The judgment stays.</text>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 64 118 L 64 110 L 450 110 L 450 118"></path>
</g>
<text x="257" y="100" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle" opacity="0.75">what agents absorb</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="140" width="136" height="56" rx="8" fill="currentColor" fill-opacity="0.10"></rect>
<rect x="204" y="140" width="126" height="56" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="334" y="140" width="116" height="56" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="458" y="140" width="96" height="56" rx="8" fill="currentColor" fill-opacity="0.30"></rect>
<rect x="558" y="140" width="92" height="56" rx="8" fill="currentColor" fill-opacity="0.34"></rect>
<rect x="654" y="140" width="82" height="56" rx="8" fill="currentColor" fill-opacity="0.38"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.6">
<text x="132" y="216">backlog</text>
<text x="267" y="216">tickets</text>
<text x="392" y="216">relay &amp; status</text>
<text x="506" y="216">arbitration</text>
<text x="604" y="216">field</text>
<text x="695" y="216">refusal</text>
</g>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 458 228 L 458 236 L 736 236 L 736 228"></path>
</g>
<text x="597" y="258" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle">what remains — and becomes the job</text>
<text x="64" y="288" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">illustrative proportions — a model, not a measurement</text>
</svg>
<p>One thing the gravediggers get wrong, though. The ticket-clerk PO was not born a clerk. <abbr title="Marty Cagan — founder of the Silicon Valley Product Group, theorist of empowered product teams">Marty Cagan</abbr> has said for a decade that "product owner" names a set of responsibilities in a delivery process, not a profession — and that feature-factory organizations manufactured backlog administrators by design: output roadmaps, proxy stakeholders, no mandate to talk to users. Keep his taxonomy, keep your skepticism — he has been selling the empowered-team alternative for twenty years. But the diagnosis stands. It was the surrounding organization that dressed the role up as a relay station. What AI removes is not the person. It removes the excuse for that configuration.</p>

<h2>What survives — and who signs it</h2>
<p>So what is the judgment share made of, concretely? Three things, seen from the engineering side of the wall.</p>
<p><strong>Arbitration.</strong> When an agent generates ten plausible hypotheses in thirty seconds, the scarce act is choosing: what we keep, what we test, what we throw away. A choice that holds when the client escalates, which means a choice someone is accountable for by name.</p>
<p><strong>Refusal.</strong> The most valuable sentence a product person says to my team is no. No, this drafted requirement contradicts how the certified module handles retention. No, we will not ship this to satisfy one hospital's workaround. Refusal requires knowing why, and being able to say why in language an auditor accepts.</p>
<p><strong>The field.</strong> Agents interpolate from tickets, and tickets lie by omission. Nobody's backlog contains the fact that the night-shift nurse uses the software with gloves on, standing, interrupted every ninety seconds. Someone has to have watched. That knowledge does not come out of a language model, because it was never written down anywhere a model could read it.</p>
<p>My industry adds a fourth thing, and it is the one the LinkedIn debate never touches. In regulated healthcare software, a requirement is not a to-do item. It is a compliance artifact. The chain from user need to requirement to architecture to verification test is not bureaucracy; it is the thing the auditor reads, and every link carries a human signature that means something. An agent can draft every link of that chain. It cannot own a single one. "The agent generated it" is not provenance an audit accepts — the questions remain: who reviewed it, when, under what procedure.</p>
<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The traceability chain of regulated healthcare software — user need, requirement, architecture, verification test — where an agent can draft every link but own none: every link carries a human signature, and the most dangerous generated link is the one approved without being read." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">REGULATED HEALTHCARE · THE TRACEABILITY CHAIN</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">The agent drafts. The human signs.</text>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 64 118 L 64 110 L 736 110 L 736 118"></path>
</g>
<text x="400" y="100" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle" opacity="0.75">an agent can draft every link…</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="130" width="144" height="48" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="240" y="130" width="144" height="48" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="416" y="130" width="144" height="48" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="592" y="130" width="144" height="48" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" text-anchor="middle">
<text x="136" y="159">user need</text>
<text x="312" y="159">requirement</text>
<text x="488" y="159">architecture</text>
<text x="664" y="149">verification</text>
<text x="664" y="169">test</text>
</g>
<g fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M 216 146 L 228 154 L 216 162"></path>
<path d="M 392 146 L 404 154 L 392 162"></path>
<path d="M 568 146 L 580 154 L 568 162"></path>
</g>
<g fill="none" stroke="currentColor" stroke-opacity="0.65" stroke-width="1.5" stroke-linecap="round">
<path d="M 108 200 C 124 192 138 206 148 196 C 154 191 160 195 164 193"></path>
<path d="M 284 200 C 300 192 314 206 324 196 C 330 191 336 195 340 193"></path>
<path d="M 460 200 C 476 192 490 206 500 196 C 506 191 512 195 516 193"></path>
<path d="M 636 200 C 652 192 666 206 676 196 C 682 191 688 195 692 193"></path>
</g>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 64 220 L 64 228 L 736 228 L 736 220"></path>
</g>
<text x="400" y="250" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle">…it can own none: who reviewed, when, under what procedure</text>
<text x="64" y="286" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">the most dangerous generated link is the one approved without being read</text>
</svg>
<p>And here the acceleration cuts both ways. A product owner who wrote twelve requirements had read them. A product owner who approves sixty agent-drafted requirements per sprint is a click-through risk. The failure mode is not new. I have <a target="_blank" rel="noopener noreferrer" href="/posts/the-lan-is-dead">already been burned</a> by a checkbox that everyone trusted and nobody read; the same checkbox is now waiting inside the traceability chain. AI makes the chain cheaper to produce and more dangerous to rubber-stamp. The trap even has a recognizable shape: a generated story that is internally perfect — testable, well-sliced, <abbr title="INVEST — Independent, Negotiable, Valuable, Estimable, Small, Testable: the classic checklist for well-formed user stories">INVEST</abbr>-compliant — and wrong, because it assumes a field can be edited when it is in fact locked after signature for legal reasons. Every test passes. Only the person who knows the domain flinches. That person is the exact mirror of the engineer I described in the <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">coder post</a>: the one who notices something is wrong when everything is green.</p>

<h2>The boundary dissolves — and the trap accelerates</h2>
<p>Now put the two sides of the wall together. My engineers, driving agents all day, make product micro-decisions hourly: this edge case matters, that one doesn't, this error message will confuse a nurse. The product people, briefing agents that draft their specifications, are doing design. <abbr title="DORA — DevOps Research and Assessment, Google Cloud's research program on software delivery">DORA</abbr>'s 2025 research describes the same blur from survey data — product managers and analysts now use AI to do technical work that used to be beyond their reach, engineers absorb product work — treat the percentages with the usual survey caution, but the direction is symmetrical. On Solstice, our own method says it in its impact table: the developer becomes an orchestrator of agents; the designer guards a design system instead of producing mockups; the PO feeds context through the workshops; the PM steers by measured delivery numbers instead of estimates. Four roles augmented, none eliminated. The two sides of the wall are not trading tasks. They are converging on the same scarce thing.</p>
<blockquote><p>AI accelerated production. It did not accelerate understanding the problem. It made understanding the only expensive thing left.</p></blockquote>
<svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Conceptual chart: since 2023 the cost of producing a feature collapses while the cost of knowing what to build stays flat; the widening gap between the two curves is where product judgment now lives." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">COST OF PRODUCING vs COST OF UNDERSTANDING · CONCEPTUAL</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">The gap is the new job.</text>
<g fill="none" stroke="currentColor" stroke-opacity="0.32" stroke-width="1.5">
<line x1="64" y1="96" x2="64" y2="292"></line>
<line x1="64" y1="292" x2="736" y2="292"></line>
</g>
<path d="M 80 130 C 300 127 500 126 716 124 L 716 280 C 650 278 550 274 440 248 C 320 214 220 148 80 130 Z" fill="currentColor" fill-opacity="0.10" stroke="none"></path>
<path d="M 80 130 C 220 148 320 214 440 248 C 550 274 650 278 716 280" fill="none" stroke="currentColor" stroke-width="2.5" stroke-opacity="0.8" stroke-linecap="round"></path>
<path d="M 80 130 C 300 127 500 126 716 124" fill="none" stroke="currentColor" stroke-width="2" stroke-opacity="0.6" stroke-dasharray="5,4" stroke-linecap="round"></path>
<line x1="110" y1="267" x2="142" y2="267" stroke="currentColor" stroke-opacity="0.8" stroke-width="2.5" stroke-linecap="round"></line>
<text x="150" y="272" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" opacity="0.7">cost of producing a feature</text>
<line x1="320" y1="107" x2="352" y2="107" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-dasharray="5,4" stroke-linecap="round"></line>
<text x="360" y="112" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" opacity="0.7">cost of knowing what to build</text>
<text x="560" y="180" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17" font-weight="650" text-anchor="middle">what fills the gap:</text>
<text x="560" y="203" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17" font-weight="650" text-anchor="middle">arbitration, field, refusal</text>
<g fill="none" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
<line x1="688" y1="138" x2="688" y2="266"></line>
<path d="M 681 148 L 688 138 L 695 148"></path>
<path d="M 681 256 L 688 266 L 695 256"></path>
</g>
<text x="736" y="312" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="end" opacity="0.6">2023 → 2026</text>
<text x="48" y="194" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.6" transform="rotate(-90 48 194)">cost</text>
<text x="64" y="332" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">conceptual diagram — shapes, not measurements</text>
</svg>
<p>Which is exactly why the acceleration is dangerous. Ten hypotheses in thirty seconds is not ten times more understanding; it is ten times more output against the same discovery deficit. <abbr title="Melissa Perri — product management author and consultant, wrote Escaping the Build Trap">Melissa Perri</abbr> named this trap years before the agents arrived: a team measured on output ships features nobody needs, faithfully and forever. A feature factory with agents is a faster feature factory. I made the same point about my own field in the <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA post</a>: AI amplifies the system you have. If your product organization was a transmission belt, automation makes the belt spin faster. It does not tell you the conveyor is pointed at the wrong wall.</p>
<p>The trap has a second level, and it sits in my own office — my team is the counterexample to any tidy story. We grew this year — interns and apprentices included. Distributed product judgment is a senior-team luxury. A senior engineer with years in the domain can absorb arbitration; an apprentice given the same fused role produces confident, well-formatted, wrong decisions — faster than before, because the agent formats the wrongness beautifully. And the relay work, whatever its waste, was, by accident, a training ground: writing tickets badly was how juniors learned the domain. Remove the relay and you remove the on-ramp with it. The replacement has to be built on purpose — juniors in the user calls, juniors reviewing requirements next to a senior who explains their no. It is the same junior-pipeline problem I flagged for engineers, transposed to product. Nobody inherits judgment. Someone teaches it.</p>

<h2>What still belongs to humans</h2>
<p>The list, stated plainly, because this is the section the obituary posts skip.</p>
<p><strong>Named accountability.</strong> Judgment can spread across a team; responsibility cannot. Someone still signs the priority call, the requirement, the refusal — someone is still the name the auditor writes down and the person the client calls at 8am. "Everyone owns the product" is the fastest way for nobody to own it.</p>
<p><strong>Discovery.</strong> No agent talks to your users. The interviews, the observation, the workflow watched in situ — untouched by everything above.</p>
<p><strong>Political arbitration.</strong> When a client's medical director wants a feature the risk analysis argues against, that negotiation runs on a trust relationship built over years. No generated spec settles it.</p>
<p><strong>Teaching.</strong> The apprenticeship path for product judgment, now that the tasks juniors learned on are automated.</p>
<p>And what this post does not say: that you need fewer product people. The freed hours have a destination — discovery, the field, the regulatory work that was always underwater. Cutting the people would mean cutting the judgment this whole article just argued is the only expensive thing left. The teams that win will be the ones that reinvest the hours, not the ones that harvest them.</p>

<h2>Monday morning</h2>
<ol>
<li><strong>Audit one week.</strong> Take a real week of product time and sort every hour: transmission or judgment. Not to cut anyone — to know what you should automate and what you should protect.</li>
<li><strong>Move one relay loop to an agent.</strong> Story drafting from a brief is the obvious first one. With a named human reviewer at the end of the loop, and a rule that approving without reading is the failure mode you are watching for.</li>
<li><strong>Make the brief the deliverable.</strong> Context, constraints, what is forbidden and why. Judge the week by the quality of the briefs, not the volume of tickets.</li>
<li><strong>Put an engineer in one user call per sprint.</strong> And a junior next to them. The wall falls faster when people cross it in both directions.</li>
<li><strong>Rewrite one epic as a problem statement.</strong> Not a list of tickets — a description of who hurts, when, and how you will know it stopped.</li>
<li><strong>Name who signs.</strong> For each product decision chain, one accountable name. If you cannot find the name, you have found the problem.</li>
</ol>
<p><strong>Read the rest of the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">The SDLC Is Dead</a> — why the process was always waste. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coding Was Never the Job</a> — the engineering side of this exact argument. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">AI Became a Team Reflex</a> — what an AI-native team looks like on a Tuesday. <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA Just Confirmed What My Team Already Lived</a> — the amplifier, measured. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100% Agent-Written</a> — six months of agents, graded. <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">Doctrine Compounds. Models Don't.</a> — where the rules that outlive the models live. <a target="_blank" rel="noopener noreferrer" href="/posts/quality-is-executed">The Tests Passed. Nothing Happened.</a> — the defect that has no symptom, and what catches it instead of reading. <a target="_blank" rel="noopener noreferrer" href="/posts/skills-not-seats">The Skill Was Real. The Seat Wasn't.</a> — what this post's diffusion looks like once the team is small enough to collapse to one name.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.svpg.com/product-manager-vs-product-owner/">SVPG — Product Manager vs. Product Owner</a>: Cagan's decade-old distinction between the Scrum role and the profession. He sells the empowered-team model — keep the taxonomy, keep your skepticism.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.svpg.com/ai-product-management-2-years-in/">SVPG — AI Product Management: 2 Years In</a>: the January 2026 piece splitting delivery-team PO, feature-team PM and empowered PM, and predicting the reckoning for the first two.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://melissaperri.com/book">Melissa Perri — Escaping the Build Trap</a>: the output-vs-outcome frame this post leans on. Written before agents; more relevant since.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://dora.dev/dora-report-2025/">DORA — 2025 State of AI-assisted Software Development</a>: the bidirectional role blur. Self-reported survey data — directions, not decimals.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.mindtheproduct.com/what-the-data-tells-us-about-tech-and-pm-lay-offs-in-2026/">Mind the Product — What the data tells us about tech and PM layoffs</a>: the senior-exit numbers. Nobody can cleanly separate AI from the post-2021 correction, and honest sources say so.</li>
<li>Solstice* — the team's written AI-native method: the weekly workshop cycle, the role impact table, the open-fronts list naming specs as the active frontier. Internal document, no link: the codename is fictitious and the real project, its products and its vendor are anonymized.</li>
<li>Four LinkedIn posts, paraphrased anonymously with their arguments intact. The authors don't know each other, or me. That's rather the point.</li>
</ul>`
}

const frenchContent: PostContent = {
  title: 'Le backlog n\'a jamais été le métier',
  description: 'La même semaine, mon fil d\'actualité a enterré le Product Owner, sauvé le Product Manager, renoncé à relire le code ligne à ligne et confié un produit entier à une seule personne. Quatre posts, un seul événement : la rareté a changé de camp. Ce qui meurt, c\'est la fonction de relais. Ce qui survit, c\'est le jugement produit — et il n\'appartient plus à un seul rôle.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> La même semaine, mon fil d'actualité a enterré le <abbr title="Product Owner — le rôle Scrum responsable du backlog">PO</abbr> et sauvé le <abbr title="Product Manager — responsable produit">PM</abbr>. Un troisième post renonçait à relire ligne à ligne le code généré par l'IA. Un quatrième affirmait qu'une personne seule peut désormais porter un produit de bout en bout. Quatre posts, un seul événement : produire n'est plus ce qui est rare. La fonction de relais — alimenter un backlog, formater des tickets, faire suivre des réponses — meurt. Le jugement produit, lui, survit, et cesse d'appartenir à un seul rôle. Les personnes restent. La fiche de poste, non.</p></div>
<hr>
<p>La même semaine, mon fil d'actualité a enterré le Product Owner et l'a sauvé.</p>
<p>Quatre posts, quatre auteurs qui ne se connaissent pas, quatre angles. Un lead product écrivait que le poste de PO a toujours été une aberration organisationnelle et devient indéfendable à l'ère de l'IA : recruter quelqu'un pour alimenter un backlog, rédiger des tickets et faire l'intermédiaire entre le métier et les développeurs, c'est optimiser une organisation déjà obsolète. Une consultante en transformation lui répondait sans le savoir : son équipe a généré en deux heures deux jours de user stories — bien rédigées, bien découpées, et déconnectées des contraintes terrain que seuls de vrais entretiens auraient fait remonter. Sa conclusion : l'outil a fait gagner des heures de rédaction, pas une minute de compréhension ; la valeur du PM se déplace vers l'arbitrage et vers une connaissance du terrain qui ne se délègue pas. Un staff engineer reconnaissait ne plus avoir la capacité de relire tout le code produit par ses agents, et que la relecture ligne à ligne n'est probablement plus le bon combat : investir dans les spécifications, donner aux agents les moyens de tester leur travail, exiger des rapports vérifiables. Et un développeur indépendant observait qu'une personne seule peut désormais porter un produit de bout en bout — le code devenant un moyen parmi d'autres, et non plus l'activité principale.</p>
<p>Chacun a raison sur son segment. Simplement, ils ne décrivent pas quatre choses différentes.</p>
<blockquote><p>Quatre angles, un seul événement : la production a cessé d'être la chose rare.</p></blockquote>
<svg viewBox="0 0 800 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Quatre posts LinkedIn de quatre auteurs qui ne se connaissent pas — le PO est indéfendable, le PM reste indispensable, je ne relis plus ligne à ligne, un produit une personne — convergent vers un seul événement : la production a cessé d'être la chose rare." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">LA MÊME SEMAINE · QUATRE POSTS</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Quatre angles. Un événement.</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="102" width="272" height="44" rx="8" fill="currentColor" fill-opacity="0.13"></rect>
<rect x="64" y="156" width="272" height="44" rx="8" fill="currentColor" fill-opacity="0.13"></rect>
<rect x="64" y="210" width="272" height="44" rx="8" fill="currentColor" fill-opacity="0.13"></rect>
<rect x="64" y="264" width="272" height="44" rx="8" fill="currentColor" fill-opacity="0.13"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif">
<text x="80" y="121" font-size="14.5" font-weight="600">« Le PO est indéfendable »</text>
<text x="80" y="138" font-size="13" opacity="0.55">un lead product</text>
<text x="80" y="175" font-size="14.5" font-weight="600">« Le PM reste indispensable »</text>
<text x="80" y="192" font-size="13" opacity="0.55">une consultante en transformation</text>
<text x="80" y="229" font-size="14.5" font-weight="600">« Je ne relis plus ligne à ligne »</text>
<text x="80" y="246" font-size="13" opacity="0.55">un staff engineer</text>
<text x="80" y="283" font-size="14.5" font-weight="600">« Un produit, une seule personne »</text>
<text x="80" y="300" font-size="13" opacity="0.55">un développeur indépendant</text>
</g>
<g fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round">
<path d="M 336 124 C 430 124 480 176 540 194"></path>
<path d="M 336 178 C 430 178 480 194 540 200"></path>
<path d="M 336 232 C 430 232 480 212 540 206"></path>
<path d="M 336 286 C 430 286 480 230 540 212"></path>
</g>
<circle cx="550" cy="203" r="5" fill="currentColor" fill-opacity="0.75"></circle>
<text x="570" y="194" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17" font-weight="650">la rareté a</text>
<text x="570" y="217" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17" font-weight="650">changé de camp</text>
<text x="64" y="326" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">quatre auteurs qui ne se connaissent pas — paraphrasés, anonymisés</text>
</svg>
<p>J'ai écrit le versant ingénierie de cette histoire il y a quelques mois : <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">coder n'a jamais été le métier</a>. Voici le versant produit, vu de là où je suis — lead d'une équipe sur du logiciel de santé réglementé, de l'autre côté du mur des gens du produit. Et vu de ce côté-là, le débat sur la mort du PO se trompe de cadavre.</p>

<h2>Ce que la semaine produit contenait vraiment</h2>
<p>Faites l'inventaire honnête de ce qui remplissait une semaine dans la configuration courroie de transmission. Alimenter le backlog. Formater des tickets pour que les développeurs les acceptent. Relayer la réponse d'un utilisateur à la question d'un développeur, puis relayer la question suivante dans l'autre sens. Courir après les statuts pour nourrir un comité. Reformater la même information pour trois publics. Rien de tout cela n'a jamais été le métier. C'était l'emballage autour du métier, et il a fini par remplir la semaine parce qu'il fallait bien que quelqu'un le fasse et que les outils étaient mauvais.</p>
<p>Cet emballage, c'est ce que les agents absorbent. Dans mon équipe, ce n'est plus une expérimentation : c'est écrit comme une méthode. J'ai déjà <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">raconté</a> les agents qui trient les tickets entrants et les panels de personas qui débattent d'une conception avant qu'un humain ne lise la synthèse. Sur <abbr title="Nom de code fictif : le projet réel, ses produits et son éditeur sont anonymisés.">Solstice*</abbr>, la boucle s'est encore refermée. L'atelier produit hebdomadaire — PO, PM, tech lead, designer — est enregistré. Dans l'heure, un agent a transformé la transcription en compte rendu, en règles métier et en issues prêtes à développer. Plus personne ne rédige de tickets après la réunion. La réunion est devenue le livrable : le contexte, les contraintes, l'arbitrage — ce qui se passe dans la pièce est la seule part que l'automatisation ne peut pas extraire en sortant. Et quand on a listé nous-mêmes les chantiers ouverts de notre propre méthode, la frontière active n'était pas le code. C'était les specs. Ce constat a fini par mériter son propre billet : <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">la doctrine qui se capitalise quand les modèles se déprécient</a>.</p>
<p>La version quotidienne a la même forme. Vingt minutes d'assemblage de contexte par quelqu'un qui connaît le domaine, trente secondes de génération, puis la conversation qui compte vraiment — ce brouillon contredit la politique de rétention, on le tue ; ces deux stories supposent le même écran, on les fusionne.</p>
<blockquote><p>Le brief est devenu le travail. La rédaction n'a jamais été que l'emballage.</p></blockquote>
<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Décomposition illustrative d'une semaine produit en une seule barre empilée : la part transmission — alimentation du backlog, rédaction de tickets, relais et statuts — est ce que les agents IA absorbent ; la part restante — arbitrage, terrain, refus — est ce qui survit et devient le métier." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">LA SEMAINE PRODUIT, DÉCOMPOSÉE · ILLUSTRATIF</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">La rédaction part. Le jugement reste.</text>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 64 118 L 64 110 L 450 110 L 450 118"></path>
</g>
<text x="257" y="100" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle" opacity="0.75">ce que les agents absorbent</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="140" width="136" height="56" rx="8" fill="currentColor" fill-opacity="0.10"></rect>
<rect x="204" y="140" width="126" height="56" rx="8" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="334" y="140" width="116" height="56" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="458" y="140" width="96" height="56" rx="8" fill="currentColor" fill-opacity="0.30"></rect>
<rect x="558" y="140" width="92" height="56" rx="8" fill="currentColor" fill-opacity="0.34"></rect>
<rect x="654" y="140" width="82" height="56" rx="8" fill="currentColor" fill-opacity="0.38"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.6">
<text x="132" y="216">backlog</text>
<text x="267" y="216">tickets</text>
<text x="392" y="216">relais &amp; statuts</text>
<text x="506" y="216">arbitrage</text>
<text x="604" y="216">terrain</text>
<text x="695" y="216">refus</text>
</g>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 458 228 L 458 236 L 736 236 L 736 228"></path>
</g>
<text x="597" y="258" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle">ce qui reste — et devient le métier</text>
<text x="64" y="288" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">proportions illustratives — un modèle, pas une mesure</text>
</svg>
<p>Un point, quand même, que les fossoyeurs ratent. Le PO greffier de tickets n'est pas né greffier. <abbr title="Marty Cagan — fondateur du Silicon Valley Product Group, théoricien des équipes produit « empowered »">Marty Cagan</abbr> répète depuis dix ans que « product owner » désigne un ensemble de responsabilités dans un processus de livraison, pas une profession — et que les usines à features ont fabriqué des administrateurs de backlog par construction : des roadmaps d'output, des parties prenantes par procuration, aucun mandat pour parler aux utilisateurs. Gardez sa taxonomie, gardez votre scepticisme — il vend l'alternative « empowered » depuis vingt ans. Mais le diagnostic tient. C'est l'organisation autour du rôle qui l'a déguisé en guichet de relais. Ce que l'IA supprime, ce n'est pas la personne. C'est l'excuse de cette configuration.</p>

<h2>Ce qui survit — et qui le signe</h2>
<p>De quoi est faite la part jugement, concrètement ? Trois choses, vues du côté ingénierie du mur.</p>
<p><strong>L'arbitrage.</strong> Quand un agent génère dix hypothèses plausibles en trente secondes, l'acte rare, c'est choisir : ce qu'on garde, ce qu'on teste, ce qu'on jette. Un choix qui tient quand le client fait remonter — donc un choix dont quelqu'un répond, nommément.</p>
<p><strong>Le refus.</strong> La phrase la plus précieuse qu'une personne produit dit à mon équipe, c'est non. Non, cette exigence générée contredit la gestion de la rétention du module certifié. Non, on ne livre pas ça pour satisfaire le contournement d'un seul établissement. Refuser exige de savoir pourquoi, et de pouvoir le dire dans une langue qu'un auditeur accepte.</p>
<p><strong>Le terrain.</strong> Les agents interpolent à partir des tickets, et les tickets mentent par omission. Aucun backlog ne contient le fait que l'infirmière de nuit utilise le logiciel debout, avec des gants, interrompue toutes les quatre-vingt-dix secondes. Il faut que quelqu'un ait regardé. Ce savoir-là ne sort pas d'un modèle de langage : il n'a jamais été écrit nulle part où un modèle aurait pu le lire.</p>
<p>Mon secteur ajoute une quatrième chose, celle que le débat LinkedIn ne touche jamais. Dans le logiciel de santé réglementé, une exigence n'est pas une tâche à faire. C'est un artefact de conformité. La chaîne qui va du besoin utilisateur à l'exigence, à l'architecture, au test de vérification n'est pas de la bureaucratie : c'est ce que l'auditeur lit, et chaque maillon porte une signature humaine qui veut dire quelque chose. Un agent peut rédiger chaque maillon de cette chaîne. Il ne peut en posséder aucun. « C'est l'agent qui l'a générée » n'est pas une provenance qu'un audit accepte — les questions restent : qui a relu, quand, selon quelle procédure.</p>
<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="La chaîne de traçabilité du logiciel de santé réglementé — besoin utilisateur, exigence, architecture, test de vérification — où un agent peut rédiger chaque maillon mais n'en posséder aucun : chaque maillon porte une signature humaine, et le maillon généré le plus dangereux est celui qu'on approuve sans le lire." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">SANTÉ RÉGLEMENTÉE · LA CHAÎNE DE TRAÇABILITÉ</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">L'agent rédige. L'humain signe.</text>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 64 118 L 64 110 L 736 110 L 736 118"></path>
</g>
<text x="400" y="100" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle" opacity="0.75">un agent peut rédiger chaque maillon…</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="130" width="144" height="48" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="240" y="130" width="144" height="48" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="416" y="130" width="144" height="48" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="592" y="130" width="144" height="48" rx="8" fill="currentColor" fill-opacity="0.14"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" text-anchor="middle">
<text x="136" y="149">besoin</text>
<text x="136" y="169">utilisateur</text>
<text x="312" y="159">exigence</text>
<text x="488" y="159">architecture</text>
<text x="664" y="149">test de</text>
<text x="664" y="169">vérification</text>
</g>
<g fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
<path d="M 216 146 L 228 154 L 216 162"></path>
<path d="M 392 146 L 404 154 L 392 162"></path>
<path d="M 568 146 L 580 154 L 568 162"></path>
</g>
<g fill="none" stroke="currentColor" stroke-opacity="0.65" stroke-width="1.5" stroke-linecap="round">
<path d="M 108 200 C 124 192 138 206 148 196 C 154 191 160 195 164 193"></path>
<path d="M 284 200 C 300 192 314 206 324 196 C 330 191 336 195 340 193"></path>
<path d="M 460 200 C 476 192 490 206 500 196 C 506 191 512 195 516 193"></path>
<path d="M 636 200 C 652 192 666 206 676 196 C 682 191 688 195 692 193"></path>
</g>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 64 220 L 64 228 L 736 228 L 736 220"></path>
</g>
<text x="400" y="250" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" font-weight="600" text-anchor="middle">…il ne peut en posséder aucun : qui a relu, quand, selon quelle procédure</text>
<text x="64" y="286" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">le maillon généré le plus dangereux est celui qu'on approuve sans le lire</text>
</svg>
<p>Et là, l'accélération est à double tranchant. Un PO qui rédigeait douze exigences les avait lues. Un PO qui approuve soixante exigences générées par sprint est un risque de tampon automatique. Le mode de défaillance n'est pas nouveau. Je me suis <a target="_blank" rel="noopener noreferrer" href="/posts/the-lan-is-dead">déjà fait avoir</a> par une case à cocher que tout le monde validait et que personne ne lisait ; la même case attend désormais au milieu de la chaîne de traçabilité. L'IA rend cette chaîne moins chère à produire et plus dangereuse à tamponner. Le piège a même une forme reconnaissable : une story générée, intérieurement parfaite — testable, bien découpée, conforme à <abbr title="INVEST — Independent, Negotiable, Valuable, Estimable, Small, Testable : la check-list classique des user stories bien formées">INVEST</abbr> — et fausse, parce qu'elle suppose modifiable un champ verrouillé après signature pour des raisons légales. Tous les tests passent. Seule la personne qui connaît le domaine tique. Cette personne est le miroir exact de l'ingénieur que je décrivais dans le <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">post sur le code</a> : celle qui remarque que quelque chose cloche quand tout est vert.</p>

<h2>La frontière se dissout — et le piège accélère</h2>
<p>Rassemblez maintenant les deux côtés du mur. Mes ingénieurs, qui pilotent des agents toute la journée, prennent des micro-décisions produit toutes les heures : ce cas limite compte, celui-là non, ce message d'erreur va perdre une infirmière. Les gens du produit, qui briefent des agents rédigeant leurs spécifications, font de la conception. La recherche 2025 de <abbr title="DORA — DevOps Research and Assessment, le programme de recherche de Google Cloud sur le delivery logiciel">DORA</abbr> décrit le même flou à partir de ses données d'enquête — les PM et analystes utilisent l'IA pour faire un travail technique qui leur était inaccessible, les ingénieurs absorbent du travail produit. Prenez les pourcentages avec la prudence des données déclaratives ; la direction, elle, est symétrique. Sur Solstice, notre propre méthode le dit dans son tableau d'impact : le développeur devient orchestrateur d'agents ; le designer garantit un design system au lieu de produire des maquettes ; le PO nourrit le contexte par les ateliers ; le PM pilote sur des métriques mesurées au lieu d'estimations. Quatre rôles augmentés, aucun supprimé. Les deux côtés du mur n'échangent pas des tâches. Ils convergent vers la même chose rare.</p>
<blockquote><p>L'IA a accéléré la production. Elle n'a pas accéléré la compréhension du problème. Elle en a fait la seule chose chère.</p></blockquote>
<svg viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagramme conceptuel : depuis 2023, le coût de production d'une fonctionnalité s'effondre tandis que le coût de savoir quoi construire reste stable ; l'écart grandissant entre les deux courbes est l'endroit où vit désormais le jugement produit." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">COÛT DE PRODUCTION vs COÛT DE COMPRÉHENSION · CONCEPTUEL</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">L'écart, c'est le nouveau métier.</text>
<g fill="none" stroke="currentColor" stroke-opacity="0.32" stroke-width="1.5">
<line x1="64" y1="96" x2="64" y2="292"></line>
<line x1="64" y1="292" x2="736" y2="292"></line>
</g>
<path d="M 80 130 C 300 127 500 126 716 124 L 716 280 C 650 278 550 274 440 248 C 320 214 220 148 80 130 Z" fill="currentColor" fill-opacity="0.10" stroke="none"></path>
<path d="M 80 130 C 220 148 320 214 440 248 C 550 274 650 278 716 280" fill="none" stroke="currentColor" stroke-width="2.5" stroke-opacity="0.8" stroke-linecap="round"></path>
<path d="M 80 130 C 300 127 500 126 716 124" fill="none" stroke="currentColor" stroke-width="2" stroke-opacity="0.6" stroke-dasharray="5,4" stroke-linecap="round"></path>
<line x1="110" y1="267" x2="142" y2="267" stroke="currentColor" stroke-opacity="0.8" stroke-width="2.5" stroke-linecap="round"></line>
<text x="150" y="272" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" opacity="0.7">coût de production d'une fonctionnalité</text>
<line x1="320" y1="107" x2="352" y2="107" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-dasharray="5,4" stroke-linecap="round"></line>
<text x="360" y="112" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" opacity="0.7">coût de savoir quoi construire</text>
<text x="560" y="180" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17" font-weight="650" text-anchor="middle">ce qui remplit l'écart :</text>
<text x="560" y="203" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="17" font-weight="650" text-anchor="middle">arbitrage, terrain, refus</text>
<g fill="none" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
<line x1="688" y1="138" x2="688" y2="266"></line>
<path d="M 681 148 L 688 138 L 695 148"></path>
<path d="M 681 256 L 688 266 L 695 256"></path>
</g>
<text x="736" y="312" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="end" opacity="0.6">2023 → 2026</text>
<text x="48" y="194" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.6" transform="rotate(-90 48 194)">coût</text>
<text x="64" y="332" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">diagramme conceptuel — des formes, pas des mesures</text>
</svg>
<p>C'est exactement pour ça que l'accélération est dangereuse. Dix hypothèses en trente secondes, ce n'est pas dix fois plus de compréhension ; c'est dix fois plus d'output face au même déficit de découverte. <abbr title="Melissa Perri — autrice et consultante en product management, a écrit Escaping the Build Trap">Melissa Perri</abbr> a nommé ce piège des années avant l'arrivée des agents : une équipe mesurée à l'output livre des fonctionnalités dont personne n'a besoin, consciencieusement et pour toujours. Une usine à features avec des agents est une usine à features plus rapide. J'ai fait le même constat pour mon propre métier dans le <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">post sur DORA</a> : l'IA amplifie le système que vous avez. Si votre organisation produit était une courroie de transmission, l'automatisation fait tourner la courroie plus vite. Elle ne vous dit pas que le tapis est braqué vers le mauvais mur.</p>
<p>Le piège a un deuxième étage, et il se trouve dans mon propre bureau — mon équipe est le contre-exemple de toute histoire trop propre. On a grandi cette année — alternants et stagiaires compris. Le jugement produit distribué est un luxe d'équipe senior. Un ingénieur senior avec des années de domaine peut absorber de l'arbitrage ; un alternant à qui on confie le même rôle fusionné produit des décisions confiantes, bien formatées et fausses — plus vite qu'avant, parce que l'agent met magnifiquement en forme l'erreur. Et le travail de relais, quel que soit son gaspillage, était accidentellement une école : écrire des tickets, même mal, c'était apprendre le domaine. Supprimez le relais et vous supprimez la rampe d'accès avec. Le remplacement doit se construire délibérément — des juniors dans les entretiens utilisateurs, des juniors qui relisent les exigences à côté d'un senior qui explique son non. C'est le même problème de vivier junior que j'ai signalé pour les ingénieurs, transposé au produit. Personne n'hérite du jugement. Quelqu'un l'enseigne.</p>

<h2>Ce qui reste aux humains</h2>
<p>La liste, dite simplement, parce que c'est la section que les posts-nécrologies sautent.</p>
<p><strong>La responsabilité nommée.</strong> Le jugement peut se répartir dans une équipe ; la responsabilité, non. Quelqu'un signe toujours l'arbitrage, l'exigence, le refus — quelqu'un reste le nom que l'auditeur note et la personne que le client appelle à 8 h. « Le produit appartient à tout le monde » est le chemin le plus court pour qu'il n'appartienne à personne.</p>
<p><strong>La découverte.</strong> Aucun agent ne parle à vos utilisateurs. Les entretiens, l'observation, le workflow regardé sur place — rien de ce qui précède n'y touche.</p>
<p><strong>L'arbitrage politique.</strong> Quand le directeur médical d'un client veut une fonctionnalité que l'analyse de risque déconseille, cette négociation repose sur une relation de confiance construite sur des années. Aucune spec générée ne la tranche.</p>
<p><strong>La transmission.</strong> Le chemin d'apprentissage du jugement produit, maintenant que les tâches sur lesquelles les juniors apprenaient sont automatisées.</p>
<p>Et ce que ce texte ne dit pas : qu'il faut moins de gens produit. Les heures libérées ont une destination — la découverte, le terrain, le travail réglementaire qui a toujours été sous l'eau. Couper dans les effectifs, ce serait couper le jugement dont tout cet article vient d'expliquer qu'il est la seule chose chère qui reste. Les équipes qui gagneront sont celles qui réinvestissent les heures, pas celles qui les moissonnent.</p>

<h2>Lundi matin</h2>
<ol>
<li><strong>Auditez une semaine.</strong> Prenez une vraie semaine de temps produit et classez chaque heure : transmission ou jugement. Pas pour tailler dans l'équipe — pour savoir quoi automatiser et quoi protéger.</li>
<li><strong>Confiez une boucle de relais à un agent.</strong> La rédaction de stories à partir d'un brief est la candidate évidente. Avec un relecteur humain nommé en sortie, et une règle : approuver sans lire est le mode de défaillance que vous surveillez.</li>
<li><strong>Faites du brief le livrable.</strong> Le contexte, les contraintes, ce qui est interdit et pourquoi. Jugez la semaine à la qualité des briefs, pas au volume de tickets.</li>
<li><strong>Faites participer un ingénieur à un entretien utilisateur par sprint.</strong> Et un junior à côté de lui. Le mur tombe plus vite quand on le traverse dans les deux sens.</li>
<li><strong>Réécrivez une epic en énoncé de problème.</strong> Pas une liste de tickets — la description de qui a mal, quand, et comment vous saurez que ça a cessé.</li>
<li><strong>Nommez qui signe.</strong> Pour chaque chaîne de décision produit, un nom responsable. Si vous ne trouvez pas le nom, vous avez trouvé le problème.</li>
</ol>
<p><strong>Lire la suite de la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">Le SDLC est mort</a> — pourquoi le processus a toujours été du gaspillage. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coder n'a jamais été le métier</a> — le versant ingénierie de ce même argument. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">L'IA est devenue un réflexe d'équipe</a> — à quoi ressemble une équipe IA-native un mardi. <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA vient de confirmer ce que mon équipe a déjà vécu</a> — l'amplificateur, mesuré. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100 % du code écrit par des agents</a> — six mois d'agents, notés. <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">La doctrine se capitalise. Les modèles, non.</a> — où vivent les règles qui survivent aux modèles. <a target="_blank" rel="noopener noreferrer" href="/posts/quality-is-executed">Les tests passent. Il ne se passe rien.</a> — le défaut sans symptôme, et ce qui l'attrape à la place de la lecture. <a target="_blank" rel="noopener noreferrer" href="/posts/skills-not-seats">La compétence était réelle. Le poste, non.</a> — à quoi ressemble la diffusion de ce billet une fois l'équipe assez petite pour s'effondrer sur un seul nom.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.svpg.com/product-manager-vs-product-owner/">SVPG — Product Manager vs. Product Owner</a> : la distinction, vieille de dix ans, entre le rôle Scrum et la profession. Cagan vend le modèle « empowered » — gardez la taxonomie, gardez votre scepticisme.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.svpg.com/ai-product-management-2-years-in/">SVPG — AI Product Management: 2 Years In</a> : le texte de janvier 2026 qui sépare PO d'équipe de livraison, PM d'usine à features et PM « empowered », et prédit l'heure des comptes pour les deux premiers.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://melissaperri.com/book">Melissa Perri — Escaping the Build Trap</a> : le cadre output contre outcome sur lequel ce post s'appuie. Écrit avant les agents ; plus pertinent depuis.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://dora.dev/dora-report-2025/">DORA — 2025 State of AI-assisted Software Development</a> : le flou des rôles, dans les deux sens. Données déclaratives d'enquête — des directions, pas des décimales.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.mindtheproduct.com/what-the-data-tells-us-about-tech-and-pm-lay-offs-in-2026/">Mind the Product — What the data tells us about tech and PM layoffs</a> : les chiffres de départs seniors. Personne ne sait proprement séparer l'IA de la correction post-2021, et les sources honnêtes le disent.</li>
<li>Solstice* — la méthode IA-native écrite de l'équipe : le cycle d'atelier hebdomadaire, le tableau d'impact par rôle, la liste des chantiers ouverts qui nomme les specs comme frontière active. Document interne, pas de lien : le nom de code est fictif et le projet réel, ses produits et son éditeur sont anonymisés.</li>
<li>Quatre posts LinkedIn, paraphrasés anonymement, leurs arguments intacts. Leurs auteurs ne se connaissent pas, et ne me connaissent pas. C'est un peu tout le sujet.</li>
</ul>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'PoIsDeadJudgmentIsNot',
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
