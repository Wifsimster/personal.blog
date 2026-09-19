<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'doctrine-as-code',
  date: '2026-08-02',
  tags: ['Software', 'AI', 'Opinion']
}

const englishContent: PostContent = {
  title: 'Doctrine Compounds. Models Don\'t.',
  description: 'Eight frontier models in six months, treated as what they have become: a versioned dependency that depreciates. What compounds is the doctrine — the ADRs agents read, the rules CI enforces, the versioned context. And a confession: our own inventory found the doctrine drifting — the part nothing executes had started to lie.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Eight frontier models swapped in six months, with zero meetings and zero onboarding: the model is now a versioned dependency that depreciates. What compounds lives in the repository: 59 <abbr title="Architecture Decision Record — a dated, versioned architecture decision kept in the repository">ADRs</abbr> agents read before structural changes, 134 enforceable rules wired to blocking <abbr title="Continuous Integration">CI</abbr>, and the versioned context of every subsystem. Then our own inventory found the doctrine drifting, precisely where nothing checks it. The honest version of the thesis survived the audit: only the executed part of a doctrine keeps its promises.</p></div>
<hr>
<p>In six months, I replaced my team's brain eight times. Nobody noticed.</p>
<p>Eight frontier models between February and July — I <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">counted them</a> when I graded the half-year. Each swap took one line of configuration and zero meetings. No onboarding, no knowledge transfer, no goodbye card. And the reason nobody noticed is the whole subject of this post: nothing that makes my team work lives in the model anymore. The briefs, the rules, the guardrails, the context — all of it lives in the repository, versioned, reviewed, and enforced. The model stopped being a miracle. It became a dependency.</p>

<h2>The model is a dependency</h2>
<p>Treat that sentence literally, not rhetorically. A dependency is something you pin to a version, upgrade deliberately, and expect to be deprecated. Model vendors now guarantee as little as sixty days of deprecation notice; effective lifecycles have compressed to months. Whatever you build that lives <em>inside</em> a specific model's behavior — the prompt tricks, the workaround for last quarter's weakness — depreciates on the same schedule. You are not investing when you tune to a model. You are renting.</p>
<blockquote><p>A model is replaced with one line of configuration. A doctrine takes years to rebuild.</p></blockquote>
<svg viewBox="0 0 800 390" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Over six months, eight frontier models were adopted and replaced one after the other, while the doctrine — ADRs, rules, guardrails, skills, context files — accreted step by step and was all still there at the end: one model in service, the whole doctrine kept." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">SIX MONTHS ON SOLSTICE · MODELS vs DOCTRINE</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Eight models discarded. One doctrine kept.</text>
<text x="64" y="104" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.55" letter-spacing="0.1em">FRONTIER MODELS · ADOPTED, THEN REPLACED</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="144" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="224" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="304" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="384" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="464" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="544" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="624" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.22"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.55">
<text x="100" y="150">FEB</text>
<text x="180" y="150">APR</text>
<text x="260" y="150">APR</text>
<text x="340" y="150">MAY</text>
<text x="420" y="150">JUN</text>
<text x="500" y="150">JUN</text>
<text x="580" y="150">JUL</text>
<text x="660" y="150">JUL</text>
</g>
<text x="736" y="106" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="end" opacity="0.75">in service: 1</text>
<text x="64" y="192" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.55" letter-spacing="0.1em">DOCTRINE ACCRUED · ADRS, RULES, GUARDRAILS, SKILLS, CONTEXT</text>
<path d="M 64 330 L 64 318 L 160 318 L 160 306 L 256 306 L 256 292 L 352 292 L 352 278 L 448 278 L 448 262 L 544 262 L 544 248 L 640 248 L 640 238 L 696 238 L 696 330 Z" fill="currentColor" fill-opacity="0.26" stroke="currentColor" stroke-opacity="0.22" stroke-width="1" stroke-linejoin="round"></path>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.65">
<text x="112" y="322">ADRs</text>
<text x="256" y="322">rules</text>
<text x="400" y="322">guardrails</text>
<text x="544" y="322">skills</text>
<text x="650" y="322">context</text>
</g>
<text x="736" y="230" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="end" opacity="0.75">kept: all</text>
<text x="64" y="368" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">real release cadence (Feb → Jul 2026) · illustrative heights</text>
</svg>
<h2>The Bitter Lesson, taken seriously</h2>
<p>There is a serious objection here, and it deserves to be stated at full strength. <abbr title="Richard Sutton — reinforcement-learning researcher, author of the 2019 essay The Bitter Lesson">Richard Sutton</abbr>'s Bitter Lesson, applied to agents, says every scaffold is a bet against the next model: the elaborate orchestration you hand-roll today is exactly what the next release absorbs, and the harness builders themselves have deleted large parts of their scaffolding at each generation. That critique is correct — about <em>procedural</em> scaffolding. Hand-written control flow, orchestration logic, prompt choreography: that layer depreciates with the models, and we have thrown ours away more than once.</p>
<p>But it does not touch the other layer. No model release will ever ship knowing that in our product, a specific field is locked after signature for legal reasons — the same locked field that trapped the generated story in the previous post, and that is no coincidence. That fact is not intelligence; it is <em>our</em> system. The declarative layer — decisions, constraints, domain rules, acceptance criteria — is knowledge no amount of model progress makes obsolete, because no vendor has it. The thesis of this post is deliberately narrow: procedural scaffolding depreciates like models do. What compounds is declarative, machine-checked doctrine.</p>
<svg viewBox="0 0 800 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The Bitter Lesson applied: each model generation's procedural scaffolding gets thrown away and rebuilt, while the declarative doctrine — ADRs, domain rules, acceptance criteria — crosses generations intact, because it belongs to no model." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">THE BITTER LESSON, APPLIED · WHAT IS DISCARDED, WHAT STAYS</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Scaffolding is discarded. Doctrine crosses over.</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.55" letter-spacing="0.08em">
<text x="176" y="106">GENERATION N</text>
<text x="400" y="106">GENERATION N+1</text>
<text x="624" y="106">GENERATION N+2</text>
</g>
<g stroke="currentColor" stroke-opacity="0.45" stroke-width="1" stroke-dasharray="5,4">
<rect x="76" y="116" width="200" height="60" rx="8" fill="currentColor" fill-opacity="0.07"></rect>
<rect x="300" y="116" width="200" height="60" rx="8" fill="currentColor" fill-opacity="0.07"></rect>
</g>
<rect x="524" y="116" width="200" height="60" rx="8" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.28" stroke-width="1"></rect>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13.5" text-anchor="middle" opacity="0.7">
<text x="176" y="150">procedural scaffolding</text>
<text x="400" y="150">procedural scaffolding</text>
<text x="624" y="150">procedural scaffolding</text>
</g>
<g stroke="currentColor" stroke-opacity="0.35" stroke-width="1.2" stroke-linecap="round">
<line x1="90" y1="170" x2="262" y2="122"></line>
<line x1="314" y1="170" x2="486" y2="122"></line>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.55">
<text x="176" y="196">thrown away</text>
<text x="400" y="196">thrown away</text>
<text x="624" y="196">in service</text>
</g>
<path d="M 618 202 L 624 212 L 630 202" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<rect x="64" y="222" width="672" height="56" rx="8" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="400" y="255" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" text-anchor="middle">declarative doctrine — ADRs · domain rules · acceptance criteria</text>
<text x="400" y="298" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.6">crosses generations, intact</text>
<text x="64" y="322" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">the procedural layer depreciates with the models — the declarative layer belongs to no model</text>
</svg>

<h2>What agents read before touching code</h2>
<p>Concretely, on <abbr title="Fictitious codename: the real project, its products and its vendor are anonymized.">Solstice*</abbr>, an agent does not start from a blank prompt. There is an official reading order, written down: the root context file, then the ADRs, then the context file of the subsystem it is about to touch, then the domain rules, the design rules, the security rules. The corpus behind that order, as of late July: 59 ADRs that agents must read before any structural change. 134-plus enforceable rules, each linked to the acceptance criteria of the spec it serves, each enforced by blocking CI — no rule drifts silently. That, at least, is what the method claims about itself; hold that sentence. 23 anti-drift check scripts. 47 packaged skills. 42 context files: one at the root, one per subsystem, each documenting the service's role, its applicable ADRs, its local conventions.</p>
<p>Two details in that list tell you where this is going. The pre-PR gate renders a PASS/FAIL verdict whose JSON output is explicitly written to be parsed by an agent — the machine writes for the machine. And one guardrail watches the context layer itself: when a folder's code changes, it reminds you to update the folder's context file. The doctrine documents the system; a check checks the doctrine. Turtles, but useful turtles.</p>
<p>None of this is a new idea. My regulated industry has run <em>compliance as code</em> for years: policy written as text nobody reads becomes policy written as rules a pipeline enforces. And the ADR revival in the agent era has a one-sentence justification I have watched come true: an agent that cannot see <em>why</em> the code has the shape it does will refactor the reason away. The retry logic that looks redundant, the naming that looks legacy — an agent deletes in seconds what took an incident to learn. The ADR is how the incident stays learned.</p>

<h2>I buried the SDLC. Then I wrote 134 rules.</h2>
<p>Now the paragraph I owe you. My first post in this series declared the <abbr title="Software Development Life Cycle">SDLC</abbr> dead: the process was always waste, ceremony is what you do when you don't trust your tools. A hostile reader writes the tweet in ten seconds: <em>he killed the SDLC and rebuilt it in YAML.</em></p>
<blockquote><p>Yes, I rebuilt a process. The promise was never "no process". It was "no process that burns human hours without verifying anything".</p></blockquote>
<p>Here is the test, and it is falsifiable. A ceremony consumes human time at every occurrence and verifies nothing: the estimation meeting, the sign-off, the status update — hours per week, forever, and none of them ever caught a regression. A compiled constraint consumes zero marginal human time and verifies every time: the rule runs in seconds, blocks deterministically, and never gets tired on a Friday afternoon. The old process taxed humans to produce a feeling of control. The doctrine taxes machines to produce actual control. And the day one of our rules requires a meeting to interpret, it has become a ceremony again — and it must die.</p>
<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The falsifiable test between ceremony and compiled constraint: a ceremony costs human hours at every occurrence and verifies nothing, while a compiled constraint costs zero marginal human time and verifies at every occurrence — the tax moves from humans to machines." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">THE TEST · CEREMONY vs COMPILED CONSTRAINT</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">The tax changes hands.</text>
<text x="64" y="104" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">ceremony — human cost at every occurrence</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="127" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="190" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="253" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="316" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="379" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="442" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="505" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="568" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="631" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
</g>
<text x="690" y="140" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13.5" font-weight="600" opacity="0.8">verifies:</text>
<text x="690" y="155" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13.5" font-weight="600" opacity="0.8">nothing</text>
<text x="64" y="228" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">compiled constraint — zero marginal human cost</text>
<g fill="none" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M 76 258 L 82 264 L 94 250"></path>
<path d="M 139 258 L 145 264 L 157 250"></path>
<path d="M 202 258 L 208 264 L 220 250"></path>
<path d="M 265 258 L 271 264 L 283 250"></path>
<path d="M 328 258 L 334 264 L 346 250"></path>
<path d="M 391 258 L 397 264 L 409 250"></path>
<path d="M 454 258 L 460 264 L 472 250"></path>
<path d="M 517 258 L 523 264 L 535 250"></path>
<path d="M 580 258 L 586 264 L 598 250"></path>
<path d="M 643 258 L 649 264 L 661 250"></path>
</g>
<g stroke="none">
<rect x="64" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
<rect x="127" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
<rect x="190" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
<rect x="253" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
<rect x="316" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
<rect x="379" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
<rect x="442" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
<rect x="505" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
<rect x="568" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
<rect x="631" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
</g>
<text x="690" y="262" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13.5" font-weight="600" opacity="0.8">verifies:</text>
<text x="690" y="277" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13.5" font-weight="600" opacity="0.8">every time</text>
<g fill="none" stroke="currentColor" stroke-opacity="0.32" stroke-width="1.5">
<line x1="64" y1="308" x2="671" y2="308"></line>
</g>
<text x="64" y="328" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">occurrences →</text>
<text x="64" y="352" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">a rule that needs humans in a room to interpret it has stopped being a constraint</text>
</svg>
<p>I will even hand over the receipts: the March post already praised the agent that "validates against architectural constraints". The doctrine is that sentence, industrialized. What died was not process. What died was process aimed at people.</p>
<p>One flank stays open, and I would rather name it than have it named for me. A doctrine that only ever accretes is the new waste — 134 rules in four and a half months extrapolates to a number I refuse to type. Pruning has started where it was cheapest: four skills were deleted from the bundle when models made them native. Rules deleted so far: zero. That is the open flank. Quote it back at me.</p>

<h2>The inventory that stings</h2>
<p>Late July, we inventoried our own method — every file, every script, every claim the method makes about itself. The verdict earns its own section.</p>
<svg viewBox="0 0 800 216" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The doctrine audit found that the executed layer of the doctrine held while the descriptive layer drifted, and the drift was found by hand, not by CI." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">THE DOCTRINE AUDIT · LATE JULY</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Doctrine drifts too.</text>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 592 96 L 592 90 L 736 90 L 736 96"></path>
</g>
<text x="664" y="80" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13.5" font-weight="600" text-anchor="middle" opacity="0.75">found by hand, not by CI</text>
<rect x="64" y="104" width="520" height="44" rx="8" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<rect x="592" y="104" width="144" height="44" rx="8" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-opacity="0.45" stroke-width="1" stroke-dasharray="4,3"></rect>
<text x="324" y="170" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.6">the executed layer — held</text>
<text x="664" y="170" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.6">the descriptive layer — rotted</text>
<text x="64" y="204" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">illustrative surface — the four findings below are real</text>
</svg>
<p>Four findings, in full, because a confession only counts itemized:</p>
<ul>
<li>agent files still describing the old framework, months after the migration;</li>
<li>a script documented as "blocking in PR", wired nowhere;</li>
<li>the context-freshness guardrail: advisory, it never blocks;</li>
<li>the local gate, a strict subset of CI — a local PASS guarantees nothing.</li>
</ul>
<p>The honest reading, and I will not spin it: the layer that executes held. The layer that describes rotted, silently, for months — and it was a manual audit, unscheduled and late, that caught it. A smoke detector tested once, after the smell. The files still described the frontend framework we migrated away from mid-flight; one instruction layer got updated, the others did not. Nothing failed, because nothing executes a description. Code that is wrong breaks a test. A context file that is wrong breaks an agent silently, three weeks later, inside a PR that looks plausible.</p>
<blockquote><p>Doctrine compounds only where it executes.</p></blockquote>
<p>The audit also put a number on who pays. 85.4% of the commits on Solstice carry my name — a bias the method deck itself acknowledges. The doctrine exists partly to reduce the team's dependency on its tech lead. Today it is written, and maintained, mostly by the tech lead. That is not a paradox; it is a maintenance contract signed with the future team, and it costs real senior time every week. But it means the bus-factor mitigation is half built: if I left tomorrow, the team would inherit a corpus that is mostly right without knowing which parts lie — arguably worse than nothing, because agents execute the stale parts with full confidence. The fix is known and unglamorous: the freshness guardrail must become blocking — it is on the roadmap — and the inventory must become a ritual, not an accident.</p>
<p>Last caveat, against myself. All of this grew on a greenfield platform with one very senior engineer holding most of the pen. On the legacy code most of us maintain, my own measured gain <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">stays at or under 10%</a>, and doctrine there mostly records the archaeology — it compounds slower, because half the decisions were made by people who left. Read this post as a data point from near-ideal conditions, not a method that transfers as-is.</p>

<h2>What still belongs to humans</h2>
<p><strong>Deciding which rules exist.</strong> The machine enforces a decision. It does not make one.</p>
<p><strong>Deleting rules.</strong> Pruning is a judgment call, and it is the difference between doctrine and bureaucracy. Nobody automates the courage to remove a gate.</p>
<p><strong>Arbitrating when doctrine and judgment conflict.</strong> A rule says no; the person who knows the domain says this case is different. Someone signs that override — the <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">judgment post</a> is about exactly who.</p>
<p><strong>Knowing which document to distrust.</strong> Until freshness is enforced, that knowledge is tribal — and tribal knowledge is the thing this whole edifice was supposed to replace.</p>
<p>And the usual clarification, because this series has a rule about it: none of this argues for fewer people — the full argument is in <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">the judgment post</a>. An asset nobody maintains is a liability with good branding.</p>

<h2>Monday morning</h2>
<ol>
<li><strong>Inventory your doctrine before writing more of it.</strong> Every instruction file, every check, every claim your method makes about itself. What you find will reorder the rest of this list.</li>
<li><strong>One root context file agents actually read.</strong> Current stack, current architecture, one page. Wrong context is worse than no context.</li>
<li><strong>Five rules maximum, every one wired to a check that blocks.</strong> A rule in prose is a wish with a version number. Zero unwired rules, from day one.</li>
<li><strong>ADRs only for decisions someone already re-litigated once.</strong> That is the signal the reason needs writing down before an agent refactors it away.</li>
<li><strong>Make the freshness gate blocking before the corpus grows.</strong> "Context file touched when its folder's code changes" costs nothing at five files and everything at forty-two.</li>
<li><strong>The meeting-to-rules pipeline last.</strong> The one that turns the weekly workshop into minutes, rules and issues — described in <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">the judgment post</a>. It is the compounding engine, but only once the five points above hold.</li>
</ol>
<p><strong>Read the rest of the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">The SDLC Is Dead</a> — the post this one partially answers. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coding Was Never the Job</a> — what the engineer becomes when syntax disappears. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">AI Became a Team Reflex</a> — what an AI-native team looks like on a Tuesday. <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA Just Confirmed What My Team Already Lived</a> — the amplifier, measured. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100% Agent-Written</a> — the six months the eight models span. <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">The Backlog Was Never the Job</a> — who signs when doctrine and judgment disagree. <a target="_blank" rel="noopener noreferrer" href="/posts/quality-is-executed">The Tests Passed. Nothing Happened.</a> — the defect that has no symptom, and what catches it instead of reading. <a target="_blank" rel="noopener noreferrer" href="/posts/skills-not-seats">The Skill Was Real. The Seat Wasn't.</a> — where the rules live once the role that used to own them merges into another one.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents">Anthropic — Effective context engineering for AI agents</a>: the lab's own framing of context as an engineered asset. A vendor with an interest in you investing in its harness — read it as "the lab says so too", not as proof.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://agents.md/">AGENTS.md</a>: the cross-vendor agent-context convention, donated to the Linux Foundation's Agentic AI Foundation in late 2025. Adoption counts come from the spec's promoters.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.actual.ai/blog/agent-optimized-adrs">actual.ai — Agent-optimized ADRs</a>: the "agent refactors the reason away" failure mode. Practitioner writing, not peer review.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/pdf/2606.09090">Context rot in AI-assisted development (preprint)</a>: stale references measured in repository config and context artifacts. A preprint — direction, not decimals.</li>
<li><a target="_blank" rel="noopener noreferrer" href="http://www.incompleteideas.net/IncIdeas/BitterLesson.html">Richard Sutton — The Bitter Lesson</a> and <a target="_blank" rel="noopener noreferrer" href="https://browser-use.com/posts/bitter-lesson-agent-frameworks">its agent-framework application</a>: the strongest objection to this post, cited on purpose. It wins against procedural scaffolding; the declarative layer is the rebuttal.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2509.23994">Policy-as-Prompt (arXiv)</a>: policy-as-code extended to agent governance — the lineage this post claims.</li>
<li>Solstice* — the method deck and the late-July inventory: the counts (59 ADRs, 134+ rules, 23 scripts, 47 skills, 42 context files), the 85.4% commit concentration the deck itself flags as a bias, and the four drift findings. Internal documents, no links: the codename is fictitious and the real project, its products and its vendor are anonymized.</li>
</ul>`
}

const frenchContent: PostContent = {
  title: 'La doctrine se capitalise. Les modèles, non.',
  description: 'Huit modèles de pointe en six mois, traités comme ce qu\'ils sont devenus : une dépendance versionnée qui se déprécie. Ce qui se capitalise, c\'est la doctrine — les ADR que les agents lisent, les règles imposées par la CI, le contexte versionné. Et une confession : notre propre inventaire a trouvé la doctrine en dérive — la partie que rien n\'exécute avait commencé à mentir.',
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Huit modèles de pointe remplacés en six mois, sans une réunion ni un jour d'onboarding : le modèle est désormais une dépendance versionnée qui se déprécie. Ce qui se capitalise habite le dépôt : 59 <abbr title="Architecture Decision Record — une décision d'architecture datée, versionnée dans le dépôt">ADR</abbr> que les agents lisent avant tout changement structurel, 134 règles contraignantes câblées à une <abbr title="Intégration continue">CI</abbr> bloquante, et le contexte versionné de chaque sous-système. Puis notre propre inventaire a trouvé la doctrine en dérive, précisément là où rien ne la vérifie. La version honnête de la thèse a survécu à l'audit : seule la part exécutée d'une doctrine tient ses promesses.</p></div>
<hr>
<p>En six mois, j'ai remplacé huit fois le cerveau de mon équipe. Personne ne s'en est aperçu.</p>
<p>Huit modèles de pointe entre février et juillet — je les ai <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">comptés</a> en notant le semestre. Chaque remplacement a coûté une ligne de configuration et zéro réunion. Pas d'onboarding, pas de transfert de connaissances, pas de pot de départ. Et si personne ne s'en est aperçu, c'est tout le sujet de ce billet : plus rien de ce qui fait fonctionner mon équipe n'habite le modèle. Les briefs, les règles, les garde-fous, le contexte — tout habite le dépôt, versionné, relu, imposé. Le modèle a cessé d'être un miracle. Il est devenu une dépendance.</p>

<h2>Le modèle est une dépendance</h2>
<p>Prenez cette phrase au pied de la lettre, pas comme une figure de style. Une dépendance, c'est quelque chose qu'on épingle à une version, qu'on met à jour délibérément, et dont on attend la dépréciation. Les éditeurs de modèles ne garantissent parfois que soixante jours de préavis avant retrait ; les durées de vie effectives se comptent en mois. Tout ce que vous construisez <em>à l'intérieur</em> du comportement d'un modèle précis — les astuces de prompt, le contournement de la faiblesse du trimestre dernier — se déprécie au même rythme. S'accorder à un modèle, ce n'est pas investir. C'est louer.</p>
<blockquote><p>Un modèle se remplace en une ligne de configuration. Une doctrine se reconstruit en années.</p></blockquote>
<svg viewBox="0 0 800 390" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sur six mois, huit modèles de pointe ont été adoptés puis remplacés l'un après l'autre, tandis que la doctrine — ADR, règles, garde-fous, skills, fichiers de contexte — s'est accumulée marche par marche et est toujours là à la fin : un seul modèle en service, toute la doctrine conservée." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">SIX MOIS SUR SOLSTICE · MODÈLES vs DOCTRINE</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Huit modèles jetés. Une doctrine gardée.</text>
<text x="64" y="104" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.55" letter-spacing="0.1em">MODÈLES DE POINTE · ADOPTÉS PUIS REMPLACÉS</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="144" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="224" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="304" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="384" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="464" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="544" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.12"></rect>
<rect x="624" y="112" width="72" height="22" rx="6" fill="currentColor" fill-opacity="0.22"></rect>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.55">
<text x="100" y="150">FÉV</text>
<text x="180" y="150">AVR</text>
<text x="260" y="150">AVR</text>
<text x="340" y="150">MAI</text>
<text x="420" y="150">JUIN</text>
<text x="500" y="150">JUIN</text>
<text x="580" y="150">JUIL</text>
<text x="660" y="150">JUIL</text>
</g>
<text x="736" y="106" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="end" opacity="0.75">en service : 1</text>
<text x="64" y="192" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.55" letter-spacing="0.1em">DOCTRINE ACCUMULÉE · ADR, RÈGLES, GARDE-FOUS, SKILLS, CONTEXTE</text>
<path d="M 64 330 L 64 318 L 160 318 L 160 306 L 256 306 L 256 292 L 352 292 L 352 278 L 448 278 L 448 262 L 544 262 L 544 248 L 640 248 L 640 238 L 696 238 L 696 330 Z" fill="currentColor" fill-opacity="0.26" stroke="currentColor" stroke-opacity="0.22" stroke-width="1" stroke-linejoin="round"></path>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.65">
<text x="112" y="322">ADR</text>
<text x="256" y="322">règles</text>
<text x="400" y="322">garde-fous</text>
<text x="544" y="322">skills</text>
<text x="650" y="322">contexte</text>
</g>
<text x="736" y="230" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="end" opacity="0.75">conservé : tout</text>
<text x="64" y="368" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">cadence de sorties réelle (fév → juil 2026) · hauteurs illustratives</text>
</svg>
<h2>La Bitter Lesson, prise au sérieux</h2>
<p>Il y a ici une objection sérieuse, et elle mérite d'être énoncée dans toute sa force. La Bitter Lesson de <abbr title="Richard Sutton — chercheur en apprentissage par renforcement, auteur de l'essai The Bitter Lesson (2019)">Richard Sutton</abbr>, appliquée aux agents, dit que tout échafaudage est un pari contre le prochain modèle : l'orchestration sophistiquée que vous écrivez à la main aujourd'hui est exactement ce que la prochaine version absorbe, et les constructeurs de harnais eux-mêmes ont supprimé des pans entiers de leur échafaudage à chaque génération. Cette critique est juste — pour l'échafaudage <em>procédural</em>. Le flux de contrôle écrit à la main, la logique d'orchestration, la chorégraphie de prompts : cette couche se déprécie avec les modèles, et nous avons jeté la nôtre plus d'une fois.</p>
<p>Mais elle ne touche pas l'autre couche. Aucune version de modèle ne saura jamais, en sortant de l'usine, que dans notre produit un champ précis est verrouillé après signature pour des raisons légales — le même champ verrouillé qui piégeait la story générée du billet précédent, et ce n'est pas un hasard. Ce fait n'est pas de l'intelligence ; c'est <em>notre</em> système. La couche déclarative — les décisions, les contraintes, les règles métier, les critères d'acceptation — est un savoir qu'aucun progrès des modèles ne rend obsolète, parce qu'aucun éditeur ne le possède. La thèse de ce billet est volontairement étroite : l'échafaudage procédural se déprécie comme les modèles. Ce qui se capitalise, c'est la doctrine déclarative et vérifiée par la machine.</p>
<svg viewBox="0 0 800 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="La Bitter Lesson appliquée : l'échafaudage procédural de chaque génération de modèle est jeté puis reconstruit, tandis que la doctrine déclarative — ADR, règles métier, critères d'acceptation — traverse les générations intacte, parce qu'elle n'appartient à aucun modèle." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">LA BITTER LESSON, APPLIQUÉE · CE QUI SE JETTE, CE QUI RESTE</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">L'échafaudage se jette. La doctrine traverse.</text>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.55" letter-spacing="0.08em">
<text x="176" y="106">GÉNÉRATION N</text>
<text x="400" y="106">GÉNÉRATION N+1</text>
<text x="624" y="106">GÉNÉRATION N+2</text>
</g>
<g stroke="currentColor" stroke-opacity="0.45" stroke-width="1" stroke-dasharray="5,4">
<rect x="76" y="116" width="200" height="60" rx="8" fill="currentColor" fill-opacity="0.07"></rect>
<rect x="300" y="116" width="200" height="60" rx="8" fill="currentColor" fill-opacity="0.07"></rect>
</g>
<rect x="524" y="116" width="200" height="60" rx="8" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.28" stroke-width="1"></rect>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13.5" text-anchor="middle" opacity="0.7">
<text x="176" y="150">échafaudage procédural</text>
<text x="400" y="150">échafaudage procédural</text>
<text x="624" y="150">échafaudage procédural</text>
</g>
<g stroke="currentColor" stroke-opacity="0.35" stroke-width="1.2" stroke-linecap="round">
<line x1="90" y1="170" x2="262" y2="122"></line>
<line x1="314" y1="170" x2="486" y2="122"></line>
</g>
<g fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.55">
<text x="176" y="196">jeté</text>
<text x="400" y="196">jeté</text>
<text x="624" y="196">en service</text>
</g>
<path d="M 618 202 L 624 212 L 630 202" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
<rect x="64" y="222" width="672" height="56" rx="8" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="400" y="255" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" text-anchor="middle">doctrine déclarative — ADR · règles métier · critères d'acceptation</text>
<text x="400" y="298" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.6">traverse les générations, intacte</text>
<text x="64" y="322" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">la couche procédurale se déprécie avec les modèles — la couche déclarative n'appartient à aucun modèle</text>
</svg>

<h2>Ce que les agents lisent avant de toucher au code</h2>
<p>Concrètement, sur <abbr title="Nom de code fictif : le projet réel, ses produits et son éditeur sont anonymisés.">Solstice*</abbr>, un agent ne part pas d'un prompt vide. Il existe un ordre de lecture officiel, écrit : le fichier de contexte racine, puis les ADR, puis le fichier de contexte du sous-système qu'il s'apprête à toucher, puis les règles métier, les règles de design, la sécurité. Le corpus derrière cet ordre, à fin juillet : 59 ADR que les agents doivent lire avant tout changement structurel. Plus de 134 règles contraignantes, chacune reliée aux critères d'acceptation de la spec qu'elle sert, chacune imposée par une CI bloquante — aucune règle ne dérive en silence. C'est du moins ce que la méthode affirme d'elle-même ; gardez cette phrase en tête. 23 scripts de contrôle anti-dérive. 47 skills packagés. 42 fichiers de contexte : un à la racine, un par sous-système, chacun documentant le rôle du service, ses ADR applicables, ses conventions locales.</p>
<p>Deux détails de cette liste disent où tout cela va. La porte pré-PR rend un verdict PASS/FAIL dont la sortie JSON est explicitement écrite pour être lue par un agent — la machine écrit pour la machine. Et un garde-fou surveille la couche de contexte elle-même : quand le code d'un dossier change, il rappelle de mettre à jour le fichier de contexte du dossier. La doctrine documente le système ; un contrôle contrôle la doctrine. Des poupées russes, mais des poupées utiles.</p>
<p>Rien de tout cela n'est une idée neuve. Mon secteur réglementé pratique la <em>compliance as code</em> depuis des années : la politique écrite en prose que personne ne lit devient une règle qu'un pipeline impose. Et le retour en grâce des ADR à l'ère des agents tient en une phrase que j'ai vue se vérifier : un agent qui ne voit pas <em>pourquoi</em> le code a cette forme refactore la raison. La logique de retry qui a l'air redondante, le nommage qui a l'air hérité — un agent supprime en quelques secondes ce qu'il a fallu un incident et des semaines pour apprendre. L'ADR, c'est la leçon de l'incident, et elle reste acquise.</p>

<h2>J'ai enterré le SDLC. Puis j'ai écrit 134 règles.</h2>
<p>Voici le paragraphe que je vous dois. Mon premier billet de cette série déclarait le <abbr title="Software Development Life Cycle — le cycle de vie du développement logiciel">SDLC</abbr> mort : le processus a toujours été du gaspillage, la cérémonie est ce qu'on fait quand on ne fait pas confiance à ses outils. Un lecteur hostile écrit le tweet en dix secondes : <em>il a tué le SDLC et l'a reconstruit en YAML.</em></p>
<blockquote><p>Oui, j'ai reconstruit un processus. La promesse n'a jamais été « zéro processus ». C'était « zéro processus qui brûle des heures humaines sans rien vérifier ».</p></blockquote>
<p>Voici le discriminant, et il est falsifiable. Une cérémonie consomme du temps humain à chaque occurrence et ne vérifie rien : la réunion d'estimation, la signature de validation, le point d'avancement — des heures par semaine, pour toujours, et aucune n'a jamais intercepté de régression. Une contrainte compilée consomme zéro temps humain marginal et vérifie à chaque fois : la règle tourne en quelques secondes, bloque de façon déterministe, et ne fatigue pas le vendredi après-midi. L'ancien processus taxait les humains pour produire un sentiment de contrôle. La doctrine taxe les machines pour produire du contrôle réel. Et le jour où une de nos règles exige une réunion pour être interprétée, elle est redevenue une cérémonie — et elle doit mourir.</p>
<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Le discriminant falsifiable entre cérémonie et contrainte compilée : une cérémonie coûte des heures humaines à chaque occurrence et ne vérifie rien, tandis qu'une contrainte compilée coûte zéro temps humain marginal et vérifie à chaque occurrence — la taxe passe des humains aux machines." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">LE DISCRIMINANT · CÉRÉMONIE vs CONTRAINTE COMPILÉE</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">La taxe change de payeur.</text>
<text x="64" y="104" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">cérémonie — coût humain à chaque occurrence</text>
<g stroke="currentColor" stroke-opacity="0.22" stroke-width="1">
<rect x="64" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="127" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="190" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="253" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="316" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="379" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="442" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="505" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="568" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
<rect x="631" y="116" width="40" height="56" rx="6" fill="currentColor" fill-opacity="0.14"></rect>
</g>
<text x="690" y="140" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13.5" font-weight="600" opacity="0.8">vérifie :</text>
<text x="690" y="155" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13.5" font-weight="600" opacity="0.8">rien</text>
<text x="64" y="228" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">contrainte compilée — coût humain marginal zéro</text>
<g fill="none" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M 76 258 L 82 264 L 94 250"></path>
<path d="M 139 258 L 145 264 L 157 250"></path>
<path d="M 202 258 L 208 264 L 220 250"></path>
<path d="M 265 258 L 271 264 L 283 250"></path>
<path d="M 328 258 L 334 264 L 346 250"></path>
<path d="M 391 258 L 397 264 L 409 250"></path>
<path d="M 454 258 L 460 264 L 472 250"></path>
<path d="M 517 258 L 523 264 L 535 250"></path>
<path d="M 580 258 L 586 264 L 598 250"></path>
<path d="M 643 258 L 649 264 L 661 250"></path>
</g>
<g stroke="none">
<rect x="64" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
<rect x="127" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
<rect x="190" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
<rect x="253" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
<rect x="316" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
<rect x="379" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
<rect x="442" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
<rect x="505" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
<rect x="568" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
<rect x="631" y="276" width="40" height="6" rx="3" fill="currentColor" fill-opacity="0.35"></rect>
</g>
<text x="690" y="262" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13.5" font-weight="600" opacity="0.8">vérifie :</text>
<text x="690" y="277" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13.5" font-weight="600" opacity="0.8">à chaque fois</text>
<g fill="none" stroke="currentColor" stroke-opacity="0.32" stroke-width="1.5">
<line x1="64" y1="308" x2="671" y2="308"></line>
</g>
<text x="64" y="328" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.6">occurrences →</text>
<text x="64" y="352" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">une règle qu'il faut réunir des humains pour interpréter a cessé d'être une contrainte</text>
</svg>
<p>Je concède même les pièces à conviction : le billet de mars louait déjà l'agent qui « valide contre les contraintes architecturales ». La doctrine, c'est cette phrase, industrialisée. Ce qui est mort, ce n'est pas le processus. C'est le processus pointé sur les gens.</p>
<p>Un flanc reste ouvert, et je préfère le nommer moi-même. Une doctrine qui ne fait qu'accréter est le nouveau gaspillage — 134 règles en quatre mois et demi, extrapolez, je refuse d'écrire le chiffre. L'élagage a commencé là où il était le moins cher : quatre skills ont été supprimés du bundle quand les modèles les ont rendus natifs. Règles supprimées à ce jour : zéro. C'est le flanc ouvert. Ressortez-le-moi.</p>

<h2>L'inventaire qui pique</h2>
<p>Fin juillet, on a inventorié notre propre méthode — chaque fichier, chaque script, chaque affirmation que la méthode fait sur elle-même. Le verdict mérite sa section.</p>
<svg viewBox="0 0 800 216" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="L'audit de la doctrine a trouvé que la couche exécutée a tenu tandis que la couche descriptive a dérivé — et la dérive a été trouvée à la main, pas par la CI." class="diagram-svg">
<text x="64" y="36" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">L'AUDIT DE LA DOCTRINE · FIN JUILLET</text>
<text x="64" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">La doctrine aussi dérive.</text>
<g stroke="currentColor" stroke-opacity="0.55" stroke-width="1.3" fill="none" stroke-linecap="round">
<path d="M 592 96 L 592 90 L 736 90 L 736 96"></path>
</g>
<text x="664" y="80" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13.5" font-weight="600" text-anchor="middle" opacity="0.75">trouvé à la main, pas par la CI</text>
<rect x="64" y="104" width="520" height="44" rx="8" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<rect x="592" y="104" width="144" height="44" rx="8" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-opacity="0.45" stroke-width="1" stroke-dasharray="4,3"></rect>
<text x="324" y="170" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.6">la part qui s'exécute — a tenu</text>
<text x="664" y="170" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.6">la part descriptive — a dérivé</text>
<text x="64" y="204" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">surface illustrative — les quatre trouvailles ci-dessous sont réelles</text>
</svg>
<p>Les quatre trouvailles, en entier, parce qu'une confession ne compte que détaillée :</p>
<ul>
<li>des fichiers agents décrivant encore l'ancien framework, des mois après la migration ;</li>
<li>un script documenté « bloquant en PR », câblé nulle part ;</li>
<li>le garde-fou de fraîcheur du contexte : consultatif, il ne bloque jamais ;</li>
<li>la porte locale, sous-ensemble strict de la CI — un PASS local ne garantit rien.</li>
</ul>
<p>La lecture honnête, et je ne vais pas l'enjoliver : la couche qui s'exécute a tenu. La couche qui décrit a pourri, en silence, pendant des mois — et c'est un audit manuel, non planifié et tardif, qui l'a trouvée. Un détecteur de fumée testé une fois, après l'odeur. Les fichiers décrivaient encore le framework frontend qu'on a quitté en vol ; une couche d'instructions a été mise à jour, les autres non. Rien n'a cassé, parce que rien n'exécute une description. Un code faux casse un test. Un fichier de contexte faux casse un agent, en silence, trois semaines plus tard, dans une PR plausible.</p>
<blockquote><p>La doctrine ne se capitalise que là où elle s'exécute.</p></blockquote>
<p>L'audit a aussi mis un chiffre sur qui paie. 85,4 % des commits de Solstice portent mon nom — un biais que le deck de la méthode déclare lui-même. La doctrine existe en partie pour réduire la dépendance de l'équipe à son tech lead. Elle est aujourd'hui écrite, et entretenue, surtout par le tech lead. Ce n'est pas un paradoxe ; c'est un contrat de maintenance signé avec l'équipe future, et il coûte du vrai temps senior chaque semaine. Mais cela veut dire que la mitigation du facteur bus est à moitié construite : si je partais demain, l'équipe hériterait d'un corpus largement juste sans savoir quelles parties mentent — pire que rien, sans doute, parce que les agents exécutent les parties périmées avec une confiance totale. La suite est connue et sans gloire : le garde-fou de fraîcheur doit devenir bloquant — c'est sur la roadmap — et l'inventaire doit devenir un rituel, pas un accident.</p>
<p>Dernière réserve, contre moi-même. Tout cela a poussé sur une plateforme greenfield, avec un ingénieur très senior qui tient la plume, pour l'essentiel. Sur le code legacy que la plupart d'entre nous maintiennent, mon propre gain mesuré <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">reste à 10 % ou moins</a>, et la doctrine y enregistre surtout l'archéologie — elle capitalise plus lentement, parce que la moitié des décisions ont été prises par des gens partis depuis. Lisez ce billet comme un point de données en conditions quasi idéales, pas comme une méthode transposable telle quelle.</p>

<h2>Ce qui reste aux humains</h2>
<p><strong>Décider quelles règles existent.</strong> La machine impose une décision. Elle n'en prend pas.</p>
<p><strong>Supprimer des règles.</strong> L'élagage est un jugement, et c'est la différence entre une doctrine et une bureaucratie. Personne n'automatise le courage de retirer une porte.</p>
<p><strong>Arbitrer quand la doctrine et le jugement se contredisent.</strong> Une règle dit non ; la personne qui connaît le domaine dit que ce cas est différent. Quelqu'un signe cette dérogation — le <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">billet sur le jugement</a> parle exactement de qui.</p>
<p><strong>Savoir quel document mettre en doute.</strong> Tant que la fraîcheur n'est pas imposée par un contrôle, ce savoir est tribal — et le savoir tribal est précisément ce que tout cet édifice devait remplacer.</p>
<p>Et la clarification habituelle, parce que cette série a une règle à ce sujet : rien de tout cela ne plaide pour moins de gens — l'argument complet est dans <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">le billet sur le jugement</a>. Un actif que personne n'entretient est un passif avec une belle image de marque.</p>

<h2>Lundi matin</h2>
<ol>
<li><strong>Inventoriez votre doctrine avant d'en écrire davantage.</strong> Chaque fichier d'instructions, chaque contrôle, chaque affirmation que votre méthode fait sur elle-même. Ce que vous trouverez réordonnera le reste de cette liste.</li>
<li><strong>Un fichier de contexte racine que les agents lisent vraiment.</strong> Stack actuelle, architecture actuelle, une page. Un contexte faux est pire que pas de contexte du tout.</li>
<li><strong>Cinq règles maximum, chacune câblée à un contrôle qui bloque.</strong> Une règle en prose est un vœu avec un numéro de version. Zéro règle non câblée, dès le premier jour.</li>
<li><strong>Des ADR seulement pour les décisions déjà re-débattues une fois.</strong> C'est le signal que la raison doit être écrite avant qu'un agent ne la refactore.</li>
<li><strong>Rendez la porte de fraîcheur bloquante avant que le corpus ne grossisse.</strong> « Fichier de contexte touché quand le code du dossier change » ne coûte rien à cinq fichiers et coûte tout à quarante-deux.</li>
<li><strong>Le pipeline réunion→règles en dernier.</strong> Celui qui transforme l'atelier hebdomadaire en compte rendu, règles et issues — décrit dans <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">le billet sur le jugement</a>. C'est le moteur de capitalisation, mais seulement une fois les cinq points ci-dessus en place.</li>
</ol>
<p><strong>Lire la suite de la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">Le SDLC est mort</a> — le billet auquel celui-ci répond en partie. <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coder n'a jamais été le métier</a> — ce que devient l'ingénieur quand la syntaxe disparaît. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-team-reflex">L'IA est devenue un réflexe d'équipe</a> — à quoi ressemble une équipe IA-native un mardi. <a target="_blank" rel="noopener noreferrer" href="/posts/dora-ai-roi-report">DORA vient de confirmer ce que mon équipe a déjà vécu</a> — l'amplificateur, mesuré. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100 % du code écrit par des agents</a> — les six mois que couvrent les huit modèles. <a target="_blank" rel="noopener noreferrer" href="/posts/po-is-dead-judgment-is-not">Le backlog n'a jamais été le métier</a> — qui signe quand la doctrine et le jugement ne sont pas d'accord. <a target="_blank" rel="noopener noreferrer" href="/posts/quality-is-executed">Les tests passent. Il ne se passe rien.</a> — le défaut sans symptôme, et ce qui l'attrape à la place de la lecture. <a target="_blank" rel="noopener noreferrer" href="/posts/skills-not-seats">La compétence était réelle. Le poste, non.</a> — où vivent les règles une fois que le rôle qui les possédait fusionne dans un autre.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents">Anthropic — Effective context engineering for AI agents</a> : le cadrage du contexte comme actif d'ingénierie, par le laboratoire lui-même. Un éditeur qui a intérêt à ce que vous investissiez dans son harnais — à lire comme « le labo le dit aussi », pas comme une preuve.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://agents.md/">AGENTS.md</a> : la convention multi-éditeurs de contexte agent, versée à l'Agentic AI Foundation (Linux Foundation) fin 2025. Les chiffres d'adoption viennent des promoteurs de la spec.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.actual.ai/blog/agent-optimized-adrs">actual.ai — Agent-optimized ADRs</a> : le mode de défaillance « l'agent refactore la raison ». Littérature de praticiens, pas de la recherche évaluée par les pairs.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/pdf/2606.09090">Context rot in AI-assisted development (preprint)</a> : des références périmées mesurées dans les artefacts de configuration et de contexte des dépôts. Un preprint — une direction, pas des décimales.</li>
<li><a target="_blank" rel="noopener noreferrer" href="http://www.incompleteideas.net/IncIdeas/BitterLesson.html">Richard Sutton — The Bitter Lesson</a> et <a target="_blank" rel="noopener noreferrer" href="https://browser-use.com/posts/bitter-lesson-agent-frameworks">son application aux frameworks d'agents</a> : l'objection la plus forte contre ce billet, citée exprès. Elle gagne contre l'échafaudage procédural ; la couche déclarative est la réponse.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2509.23994">Policy-as-Prompt (arXiv)</a> : le policy-as-code étendu à la gouvernance des agents — la filiation que ce billet revendique.</li>
<li>Solstice* — le deck de la méthode et l'inventaire de fin juillet : les décomptes (59 ADR, 134+ règles, 23 scripts, 47 skills, 42 fichiers de contexte), les 85,4 % de concentration des commits que le deck déclare lui-même comme biais, et les quatre trouvailles de dérive. Documents internes, pas de lien : le nom de code est fictif et le projet réel, ses produits et son éditeur sont anonymisés.</li>
</ul>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'DoctrineAsCode',
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
