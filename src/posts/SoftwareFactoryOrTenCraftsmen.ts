import type { PostMetadata, PostContent } from '@/lib/posts'

export const metadata: PostMetadata = {
  slug: 'software-factory-or-ten-craftsmen',
  date: '2026-11-16',
  tags: ['Software', 'AI', 'Opinion', 'Work'],
  draft: true
}

const englishContent: PostContent = {
  title: "A Software Factory, or Ten Very Well-Equipped Craftsmen?",
  description: "Our main branch has merged on machine-checked proof, with no human approval, for a month. That part behaves like a factory. The usage data says something else: a handful of people carry most of the agent work. A field report on what runs, what is still a target, and what the proof does not prove.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Since 14 October, on <abbr title="Fictitious codename: the real project, its products and its vendor are anonymized.">Solstice*</abbr>, the main branch asks for no human approval at all. A merge waits for a review proof, bound to the exact commit and to a green pipeline run. Over four weeks, 469 pull requests were merged, 75% of them with no recorded human review. The mechanism looks like a factory. The usage does not: across my organisation, 10 seats out of 66 consume 76% of the credits. The full "software factory", from need to delivery, is still a target. What runs here goes from code to the development environment. Three human decisions are left, several controls are still declarative, and on-site tests have only just started.</p></div>
<hr>
<p>Ten seats out of sixty-six burn three credits in four.</p>
<p>I put that number in front of my team on 12 November. It was two weeks after <abbr title="BDX I/O: yearly tech conference in Bordeaux, France, held on 29 and 30 October 2026">BDX I/O</abbr>, whose second day was mostly about agents. The session was meant to be a conference debrief. It turned into a review of the year.</p>
<p>The last slide asked one question: a software factory, or ten very well-equipped craftsmen? I do not have a clean answer. I have measurements, and they point in two directions.</p>

<h2>What the word promises</h2>
<p>A software factory is a line. The need goes in at one end, the delivery comes out at the other. Agents hold the stations in between: specification, code, tests, review, correction.</p>
<p>The word took off this year with the public account from <abbr title="StrongDM: US vendor of access-management software">StrongDM</abbr>. Three engineers and one rule: no human writes or reviews the code. Scenarios hidden from the agents judge the outcome. <abbr title="Simon Willison: British developer and writer, co-creator of the Django framework">Simon Willison</abbr>, who visited the team, calls it a glimpse of one possible future. He also doubts that dropping review is reasonable.</p>
<p>I keep the mechanism: scenarios the agent cannot see. I leave the spending figures in that account alone. Nobody has cross-checked them.</p>
<svg viewBox="0 0 640 316" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animated diagram of the target line: the need stays human, the specification and the delivery are still a target, code, tests and review already run. A lot refused at review goes back to correction, runs the same tests again and gets a new review before it can ship." class="diagram-svg diagram-wide">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">THE LINE, IN ONE SCENE</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">A refused lot does not ship.</text>
<rect x="32" y="100" width="86" height="40" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="75" y="125" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">need</text>
<rect x="130" y="100" width="86" height="40" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="5 5"></rect>
<text x="173" y="125" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">spec</text>
<rect x="228" y="100" width="86" height="40" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="271" y="125" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">code</text>
<rect x="326" y="100" width="86" height="40" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="369" y="125" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">tests</text>
<rect x="424" y="100" width="86" height="40" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="467" y="125" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">review</text>
<rect x="522" y="100" width="86" height="40" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="5 5"></rect>
<text x="565" y="125" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">delivery</text>
<path d="M 120 120 L 128 120" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"></path>
<path d="M 173 176 L 565 176" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"></path>
<path d="M 173 140 L 173 158" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="173" cy="176" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 271 140 L 271 158" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="271" cy="176" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 369 140 L 369 158" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="369" cy="176" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 467 140 L 467 158" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="467" cy="176" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 565 140 L 565 158" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="565" cy="176" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 467 194 L 467 222 Q 467 234 455 234 L 283 234 Q 271 234 271 222 L 271 194" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 264 203 L 271 194 L 278 203" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<text x="369" y="258" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.8">correction, then the same tests, then a new review</text>
<g class="sf-lot">
<rect class="sf-lot-box" x="455" y="164" width="24" height="24" rx="6" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"></rect>
<path class="sf-refused" d="M 462 171 L 472 181 M 472 171 L 462 181" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path>
<path class="sf-passed" d="M 461 176 L 465 181 L 473 171" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0"></path>
</g>
<rect x="32" y="285" width="16" height="16" rx="4" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="56" y="298" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.8">human</text>
<rect x="150" y="285" width="16" height="16" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="174" y="298" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.8">running today</text>
<rect x="338" y="285" width="16" height="16" rx="4" fill="none" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="5 5"></rect>
<text x="362" y="298" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.8">target, not in place yet</text>
</svg>
<svg viewBox="0 0 320 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animated diagram of the target line: the need stays human, the specification and the delivery are still a target, code, tests and review already run. A lot refused at review goes back to correction, runs the same tests again and gets a new review before it can ship." class="diagram-svg diagram-narrow">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">THE LINE, IN ONE SCENE</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">A refused lot</text>
<text x="32" y="106" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">does not ship.</text>
<rect x="112" y="132" width="176" height="36" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="128" y="155" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">need</text>
<rect x="112" y="178" width="176" height="36" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="5 5"></rect>
<text x="128" y="201" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">spec</text>
<rect x="112" y="224" width="176" height="36" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="128" y="247" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">code</text>
<rect x="112" y="270" width="176" height="36" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="128" y="293" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">tests</text>
<rect x="112" y="316" width="176" height="36" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="128" y="339" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">review</text>
<rect x="112" y="362" width="176" height="36" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="5 5"></rect>
<text x="128" y="385" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">delivery</text>
<path d="M 72 196 L 72 380" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"></path>
<path d="M 90 196 L 112 196" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="72" cy="196" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 90 242 L 112 242" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="72" cy="242" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 90 288 L 112 288" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="72" cy="288" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 90 334 L 112 334" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="72" cy="334" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 90 380 L 112 380" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="72" cy="380" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 54 334 L 44 334 Q 32 334 32 322 L 32 254 Q 32 242 44 242 L 54 242" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 45 235 L 54 242 L 45 249" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<text x="20" y="288" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.8" transform="rotate(-90 20 288)">correction</text>
<g class="sf-lot">
<rect class="sf-lot-box" x="60" y="322" width="24" height="24" rx="6" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"></rect>
<path class="sf-refused" d="M 67 329 L 77 339 M 77 329 L 67 339" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path>
<path class="sf-passed" d="M 66 334 L 70 339 L 78 329" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0"></path>
</g>
<rect x="32" y="424" width="16" height="16" rx="4" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="56" y="437" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.8">human</text>
<rect x="32" y="448" width="16" height="16" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="56" y="461" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.8">running today</text>
<rect x="32" y="472" width="16" height="16" rx="4" fill="none" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="5 5"></rect>
<text x="56" y="485" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.8">target, not in place yet</text>
</svg>
<p>Three stations in this drawing run on my team today: code, tests, review. Two are dashed. Turning meeting transcripts into a specification is a trial in progress. Automatic delivery stops at the development environment.</p>
<p>The loop at the bottom matters more than the conveyor. A lot refused at review does not ship "with reservations". It goes back to code, runs the same tests, then gets a new review.</p>
<blockquote><p>A fix voids the evidence. You replay it. You do not copy it over.</p></blockquote>

<h2>What has been running since 14 October</h2>
<p>That day, the main branch stopped requiring an approval. A required check asks for a review proof in its place. The proof names the commit that was reviewed and one run of the integration pipeline. The machine then checks for itself that this run exists, covers this code and ended in success.</p>
<p>The rule comes from an incident. An approval stated 1,781 tests, zero failures, green pipeline. In fact 21 tests had been skipped and the run had failed. The reviewer noticed on his own, eight minutes later. No machine had seen it.</p>
<p>Our documentation keeps the lesson in one line: a count of green tests says nothing about the files that never ran. An approval is an opinion. A proof can be checked.</p>
<p>Between 14 October and 9 November, 469 <abbr title="Pull request: a proposed change submitted before it is merged into the main branch">PRs</abbr> were merged. Three measurements over that same set:</p>
<ul>
<li><strong>75%</strong> carry no recorded review on the platform.</li>
<li><strong>9%</strong> carry a review from another human account.</li>
<li><strong>25%</strong> carried a label through which someone kept a hand on the merge.</li>
</ul>
<p>These figures do not add up to a whole. They answer three different questions. And the first one says less than it seems to: "no recorded review" does not mean nobody looked.</p>
<blockquote><p>Three merges in four without a human reviewer is a fact about our process. It is not a fact about our code.</p></blockquote>
<svg viewBox="0 0 640 322" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Six steps are automatic, from the specification to the development environment. Three decisions stay human, each attached to one step: arbitrate under review, override under merge, release under the development environment." class="diagram-svg diagram-wide">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">SOLSTICE*, SINCE 14 OCTOBER</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Six steps, three decisions.</text>
<rect x="32" y="100" width="86" height="38" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="75" y="124" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">spec</text>
<rect x="130" y="100" width="86" height="38" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="173" y="124" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">code</text>
<rect x="228" y="100" width="86" height="38" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="271" y="124" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">tests</text>
<rect x="326" y="100" width="86" height="38" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="369" y="124" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">review</text>
<rect x="424" y="100" width="86" height="38" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="467" y="124" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">merge</text>
<rect x="522" y="100" width="86" height="38" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="565" y="124" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">dev</text>
<path d="M 32 160 L 608 160" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 7"></path>
<text x="32" y="207" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.8">three human decisions</text>
<path d="M 369 138 L 369 180" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<rect x="322" y="180" width="94" height="44" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="369" y="207" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle">arbitrate</text>
<path d="M 467 138 L 467 180" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<rect x="420" y="180" width="94" height="44" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="467" y="207" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle">override</text>
<path d="M 565 138 L 565 180" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<rect x="518" y="180" width="94" height="44" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="565" y="207" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle">release</text>
<text x="32" y="262" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">arbitrate: at the fourth refused review round (never triggered so far)</text>
<text x="32" y="282" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">override: in an emergency, by an administrator, with a follow-up ticket</text>
<text x="32" y="302" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">release: the version, and every promotion past the dev environment</text>
</svg>
<svg viewBox="0 0 320 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Six steps are automatic, from the specification to the development environment. Three decisions stay human, each attached to one step: arbitrate under review, override under merge, release under the development environment." class="diagram-svg diagram-narrow">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">SINCE 14 OCTOBER</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Six steps,</text>
<text x="32" y="106" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">three decisions.</text>
<rect x="32" y="129" width="112" height="34" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="88" y="151" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">spec</text>
<rect x="32" y="171" width="112" height="34" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="88" y="193" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">code</text>
<rect x="32" y="213" width="112" height="34" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="88" y="235" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">tests</text>
<rect x="32" y="255" width="112" height="34" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="88" y="277" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">review</text>
<rect x="32" y="297" width="112" height="34" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="88" y="319" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">merge</text>
<rect x="32" y="339" width="112" height="34" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="88" y="361" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">dev</text>
<path d="M 144 272 L 176 272" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<rect x="176" y="255" width="112" height="34" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="232" y="277" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle">arbitrate</text>
<path d="M 144 314 L 176 314" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<rect x="176" y="297" width="112" height="34" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="232" y="319" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle">override</text>
<path d="M 144 356 L 176 356" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<rect x="176" y="339" width="112" height="34" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="232" y="361" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle">release</text>
<text x="32" y="406" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">arbitrate: at the 4th refused round,</text>
<text x="32" y="424" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">never triggered so far</text>
<text x="32" y="442" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">override: in an emergency,</text>
<text x="32" y="460" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">by an administrator</text>
<text x="32" y="478" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">release: the version, and every</text>
<text x="32" y="496" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">promotion past dev</text>
</svg>
<p>No agent takes any of these three decisions. Only the development environment receives code without a human gesture. Every promotion beyond it is triggered by hand.</p>

<h2>Where the proof is still a statement</h2>
<p>A hostile reader will strike here, and will be right on four counts.</p>
<p><strong>The reviewer can be the same model.</strong> Same agent, same account, a different session. A fresh context reduces anchoring. It proves no diversity of judgement. The machine checks that the review session differs from the commit sessions. It does not check that the review happened anywhere other than in a form.</p>
<p><strong>Test counts are still typed in.</strong> The check establishes that the cited run is green on that commit. It does not cross-check how many tests were skipped. So the rule born from the incident would catch only half of the incident.</p>
<p><strong>The security pass is one line.</strong> The risk tier is solid: it is computed from the changed paths, and a pull request cannot lower it. At the high tier, the proof must contain a security pass. The reviewing agent writes it.</p>
<p><strong>The loop limit has never fired.</strong> At the fourth refused review round, the merge blocks until a developer decides. That case has not come up. It is a design, not a result.</p>
<p>Add one debt that nothing counts: we understand less of the code we ship. None of our checks measures what nobody can explain any more.</p>
<p>I also owe my August post a correction. It described one perimeter kept human on purpose, the surface reachable from outside. I wrote that this kind of mistake should cost a conversation. The rule still demands a non-author on that perimeter. Today that non-author can be an agent. The conversation became optional, and I do not know yet which of the two posts is right.</p>

<h2>Ten seats, 76%</h2>
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Out of 66 seats, 10 consume 76% of the credits and the other 56 share the remaining 24%, over a nine-day window." class="diagram-svg diagram-wide">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">AI CREDITS, 1 TO 9 NOVEMBER 2026</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">10 seats, 76% of the credits.</text>
<circle cx="40.7" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="58.2" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="75.6" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="93.1" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="110.5" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="128.0" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="145.5" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="162.9" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="180.4" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="197.8" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="215.3" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="232.7" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="250.2" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="267.6" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="285.1" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="302.5" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="320.0" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="337.5" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="354.9" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="372.4" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="389.8" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="407.3" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="424.7" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="442.2" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="459.6" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="477.1" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="494.5" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="512.0" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="529.5" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="546.9" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="564.4" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="581.8" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="599.3" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="40.7" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="58.2" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="75.6" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="93.1" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="110.5" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="128.0" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="145.5" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="162.9" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="180.4" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="197.8" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="215.3" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="232.7" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="250.2" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="267.6" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="285.1" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="302.5" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="320.0" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="337.5" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="354.9" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="372.4" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="389.8" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="407.3" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="424.7" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="442.2" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="459.6" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="477.1" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="494.5" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="512.0" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="529.5" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="546.9" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="564.4" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="581.8" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="599.3" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<rect x="32" y="152" width="438" height="44" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<rect x="474" y="152" width="134" height="44" rx="8" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="48" y="182" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">76%</text>
<text x="490" y="182" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650" opacity="0.7">24%</text>
<text x="32" y="220" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.8">10 seats</text>
<text x="608" y="220" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="end" opacity="0.8">56 other seats</text>
<text x="32" y="256" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">a nine-day window, six of them working days</text>
<text x="32" y="274" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">the whole organisation, not the Solstice* team alone</text>
</svg>
<svg viewBox="0 0 320 442" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Out of 66 seats, 10 consume 76% of the credits and the other 56 share the remaining 24%, over a nine-day window." class="diagram-svg diagram-narrow">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">1 TO 9 NOVEMBER</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">10 seats,</text>
<text x="32" y="106" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">76% of the credits.</text>
<circle cx="43.6" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="66.9" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="90.2" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="113.5" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="136.7" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="160.0" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="183.3" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="206.5" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="229.8" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="253.1" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="276.4" cy="142" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="43.6" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="66.9" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="90.2" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="113.5" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="136.7" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="160.0" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="183.3" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="206.5" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="229.8" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="253.1" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="276.4" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="43.6" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="66.9" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="90.2" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="113.5" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="136.7" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="160.0" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="183.3" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="206.5" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="229.8" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="253.1" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="276.4" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="43.6" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="66.9" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="90.2" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="113.5" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="136.7" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="160.0" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="183.3" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="206.5" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="229.8" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="253.1" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="276.4" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="43.6" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="66.9" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="90.2" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="113.5" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="136.7" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="160.0" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="183.3" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="206.5" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="229.8" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="253.1" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="276.4" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="43.6" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="66.9" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="90.2" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="113.5" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="136.7" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="160.0" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="183.3" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="206.5" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="229.8" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="253.1" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="276.4" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<rect x="32" y="278" width="192" height="44" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<rect x="228" y="278" width="60" height="44" rx="8" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="46" y="308" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">76%</text>
<text x="258" y="306" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="650" text-anchor="middle" opacity="0.7">24%</text>
<text x="32" y="346" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.8">10 seats</text>
<text x="288" y="346" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="end" opacity="0.8">56 others</text>
<text x="32" y="378" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">nine days, six of them working</text>
<text x="32" y="396" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">the whole organisation,</text>
<text x="32" y="414" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">not the Solstice* team alone</text>
</svg>
<p>The measurement has limits. Nine days, six of them working days. And it covers my whole organisation, not the project team alone.</p>
<p>What separates the ten from the rest, as far as I can observe: the ten run several sessions in parallel. The others start one and wait for it. That is my reading, not a measurement.</p>
<p>Parallel work needs subjects cut into independent lots. That cutting happens with the <abbr title="Product Owner: the person who carries the need and the priorities of the product">POs</abbr>, not inside the tool. So the factory's constraint sits upstream, in how the work is sliced.</p>
<blockquote><p>You can tell a factory by the fact that it runs without its ten best workers. Ours does not, yet.</p></blockquote>
<p>The conclusion is not to keep ten people. It is to bring the other fifty-six to parallel work. We decided to reallocate seats to POs and testers, within defined uses. Topping the consumption chart is not a goal either: some very high spending matches no good practice at all.</p>
<p>Someone asked what normal consumption looks like. Nobody could answer, me included.</p>
<p>On cost, one fact. The share of the most expensive models in our credits went from 92% in September to 22% in early November, with no drop in usage. We got there by hand: one message, then follow-up.</p>
<p>Factory write-ups describe a loop that does this work alone. It replays known tasks on a cheaper model, a judge compares blind, and you keep the cheapest one that holds. We ran it once, in August, on 47 sets of agent instructions. Four frozen tasks per set, 46 new versions kept, one old version retained. Once, by hand: that is not a loop.</p>

<h2>What still belongs to humans</h2>
<p>The need. Saying what to build, why, and in what order. In the drawing, it is the only solid station.</p>
<p>The three decisions: arbitrate, override, release.</p>
<p>Still understanding what we ship. Reading code is what lets you write a good intention and handle an exception.</p>
<p>Slicing. As long as subjects arrive in blocks, the factory has ten stations staffed.</p>
<p>Proving it on site. The first tests in a hospital are under way. I have no number to give yet. They will tell what a merge without a human reviewer is worth.</p>
<p>Two questions stay open. Should every customer ship on one release train, with features switched on by flags? And is the pull request still the right object, when agents open them faster than a queue drains?</p>

<h2>What to do Monday morning</h2>
<ol>
<li><strong>Count the share of your top ten seats.</strong> One number tells you whether you have a line or a workshop.</li>
<li><strong>Replace the approval with a proof.</strong> It names a commit and a run, and a machine checks both.</li>
<li><strong>Write down what stays declarative.</strong> Our documentation does, in plain words. It is the part I reread most.</li>
<li><strong>Bound the correction loop.</strong> A number of rounds, then a person. Even if the limit never fires.</li>
<li><strong>Cut one subject into independent lots with its PO.</strong> Then run them in parallel, and watch who knows how.</li>
</ol>
<p><strong>Read the rest of the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/quality-is-executed">Quality Isn't Read. It's Executed.</a> The checks this line rests on. <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">Doctrine Compounds. Models Don't.</a> Why the rules live in the repository. <a target="_blank" rel="noopener noreferrer" href="/posts/skills-not-seats">The Skill Was Real. The Seat Wasn't.</a> What happens to the roles around the line. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100% Agent-Written</a>. The July checkpoint. <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">The SDLC Is Dead</a>. Where this started.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://simonwillison.net/2026/Feb/7/software-factory/">Simon Willison, "Software Factory" (7 February 2026)</a>: write-up of a visit to StrongDM. Keep the scenarios hidden from the agents. Discard the spending amounts, self-reported and never cross-checked. Greenfield, three people, no outcome published since.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.warp.dev/articles/self-improvement-loop-software-factory">Warp, on the improvement loop of a software factory (2026)</a>: the idea of two loops, quality and cost, comes from there. It is a vendor selling the matching tooling. I take the thinking scheme and none of its numbers.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://addyosmani.com/blog/comprehension-debt/">Addy Osmani, "Comprehension Debt" (2026)</a>: the name of the debt I describe. A practitioner's essay, not a measurement.</li>
<li>Solstice*: the proof rule, the 469 PRs and the three decisions come from the repository, as read on 9 November 2026. The credits come from my organisation's dashboard, 1 to 9 November, aggregated. Internal, no links: the codename is fictitious and the real project, its products and its vendor are anonymized.</li>
</ul>`
}

const frenchContent: PostContent = {
  title: "Une usine logicielle, ou dix artisans très équipés ?",
  description: "Depuis un mois, notre branche principale fusionne sur une preuve vérifiée par la machine, sans approbation humaine. Ce versant-là se comporte comme une usine. Les données d'usage racontent autre chose : une poignée de personnes porte l'essentiel du travail des agents. Retour de terrain sur ce qui tourne, ce qui reste une cible, et ce que la preuve ne prouve pas.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> Depuis le 14 octobre, sur <abbr title="Nom de code fictif : le projet réel, ses produits et son éditeur sont anonymisés.">Solstice*</abbr>, la branche principale ne demande plus aucune approbation humaine. Une fusion attend une preuve de revue, liée au commit exact et à une exécution verte de la chaîne. En quatre semaines, 469 propositions ont été fusionnées, dont 75 % sans revue humaine enregistrée. Le mécanisme ressemble à une usine. L'usage, non : dans mon organisation, 10 licences sur 66 consomment 76 % des crédits. La « software factory » complète, du besoin à la livraison, reste une cible. Ce qui tourne chez nous va du code à l'environnement de développement. Il reste trois décisions humaines, des contrôles encore déclaratifs, et des tests sur site qui viennent de commencer.</p></div>
<hr>
<p>Dix licences sur soixante-six brûlent trois crédits sur quatre.</p>
<p>J'ai montré ce chiffre à mon équipe le 12 novembre. C'était deux semaines après <abbr title="BDX I/O : conférence technique annuelle à Bordeaux, tenue les 29 et 30 octobre 2026">BDX I/O</abbr>, dont la seconde journée a surtout parlé d'agents. La session devait être un retour de conférence. Elle est devenue un bilan de l'année.</p>
<p>La dernière question à l'écran était la suivante : une software factory, ou dix artisans très équipés ? Je n'ai pas de réponse nette. J'ai des mesures, et elles tirent dans deux directions.</p>

<h2>Ce que le mot promet</h2>
<p>Une software factory est une chaîne. Le besoin entre d'un côté, la livraison sort de l'autre. Des agents tiennent les postes intermédiaires : spécification, code, tests, revue, correction.</p>
<p>Le mot s'est imposé cette année avec le récit public de <abbr title="StrongDM : éditeur américain de logiciels de gestion des accès">StrongDM</abbr>. Trois ingénieurs, et une règle : aucun humain n'écrit ni ne relit le code. Des scénarios cachés aux agents jugent le résultat. <abbr title="Simon Willison : développeur et auteur britannique, cocréateur du framework Django">Simon Willison</abbr>, qui a visité l'équipe, y voit un aperçu d'un futur possible. Il doute aussi que l'absence de revue soit raisonnable.</p>
<p>Je garde le mécanisme : des scénarios que l'agent ne voit pas. Je laisse les chiffres de dépense que le récit avance. Personne ne les a recoupés.</p>
<svg viewBox="0 0 640 316" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma animé de la chaîne visée : le besoin reste humain, la spécification et la livraison sont encore une cible, le code, les tests et la revue tournent déjà. Un lot refusé en revue repart en correction, repasse les mêmes tests et une nouvelle revue avant de pouvoir être livré." class="diagram-svg diagram-wide">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">LA CHAÎNE, EN UNE SCÈNE</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Un lot refusé ne part pas.</text>
<rect x="32" y="100" width="86" height="40" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="75" y="125" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">besoin</text>
<rect x="130" y="100" width="86" height="40" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="5 5"></rect>
<text x="173" y="125" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">spec</text>
<rect x="228" y="100" width="86" height="40" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="271" y="125" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">code</text>
<rect x="326" y="100" width="86" height="40" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="369" y="125" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">tests</text>
<rect x="424" y="100" width="86" height="40" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="467" y="125" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">revue</text>
<rect x="522" y="100" width="86" height="40" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="5 5"></rect>
<text x="565" y="125" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">livraison</text>
<path d="M 120 120 L 128 120" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round"></path>
<path d="M 173 176 L 565 176" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"></path>
<path d="M 173 140 L 173 158" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="173" cy="176" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 271 140 L 271 158" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="271" cy="176" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 369 140 L 369 158" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="369" cy="176" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 467 140 L 467 158" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="467" cy="176" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 565 140 L 565 158" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="565" cy="176" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 467 194 L 467 222 Q 467 234 455 234 L 283 234 Q 271 234 271 222 L 271 194" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 264 203 L 271 194 L 278 203" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<text x="369" y="258" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.8">correction, puis mêmes tests, puis nouvelle revue</text>
<g class="sf-lot">
<rect class="sf-lot-box" x="455" y="164" width="24" height="24" rx="6" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"></rect>
<path class="sf-refused" d="M 462 171 L 472 181 M 472 171 L 462 181" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path>
<path class="sf-passed" d="M 461 176 L 465 181 L 473 171" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0"></path>
</g>
<rect x="32" y="285" width="16" height="16" rx="4" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="56" y="298" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.8">humain</text>
<rect x="150" y="285" width="16" height="16" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="174" y="298" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.8">en place chez nous</text>
<rect x="338" y="285" width="16" height="16" rx="4" fill="none" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="5 5"></rect>
<text x="362" y="298" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.8">cible, pas encore en place</text>
</svg>
<svg viewBox="0 0 320 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schéma animé de la chaîne visée : le besoin reste humain, la spécification et la livraison sont encore une cible, le code, les tests et la revue tournent déjà. Un lot refusé en revue repart en correction, repasse les mêmes tests et une nouvelle revue avant de pouvoir être livré." class="diagram-svg diagram-narrow">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">LA CHAÎNE, EN UNE SCÈNE</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Un lot refusé</text>
<text x="32" y="106" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">ne part pas.</text>
<rect x="112" y="132" width="176" height="36" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="128" y="155" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">besoin</text>
<rect x="112" y="178" width="176" height="36" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="5 5"></rect>
<text x="128" y="201" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">spec</text>
<rect x="112" y="224" width="176" height="36" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="128" y="247" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">code</text>
<rect x="112" y="270" width="176" height="36" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="128" y="293" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">tests</text>
<rect x="112" y="316" width="176" height="36" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="128" y="339" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">revue</text>
<rect x="112" y="362" width="176" height="36" rx="8" fill="none" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="5 5"></rect>
<text x="128" y="385" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">livraison</text>
<path d="M 72 196 L 72 380" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round"></path>
<path d="M 90 196 L 112 196" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="72" cy="196" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 90 242 L 112 242" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="72" cy="242" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 90 288 L 112 288" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="72" cy="288" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 90 334 L 112 334" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="72" cy="334" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 90 380 L 112 380" fill="none" stroke="currentColor" stroke-opacity="0.22" stroke-width="1.5" stroke-linecap="round"></path>
<circle cx="72" cy="380" r="3" fill="currentColor" fill-opacity="0.45"></circle>
<path d="M 54 334 L 44 334 Q 32 334 32 322 L 32 254 Q 32 242 44 242 L 54 242" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M 45 235 L 54 242 L 45 249" fill="none" stroke="currentColor" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
<text x="20" y="288" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" text-anchor="middle" opacity="0.8" transform="rotate(-90 20 288)">correction</text>
<g class="sf-lot">
<rect class="sf-lot-box" x="60" y="322" width="24" height="24" rx="6" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2"></rect>
<path class="sf-refused" d="M 67 329 L 77 339 M 77 329 L 67 339" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path>
<path class="sf-passed" d="M 66 334 L 70 339 L 78 329" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0"></path>
</g>
<rect x="32" y="424" width="16" height="16" rx="4" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="56" y="437" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.8">humain</text>
<rect x="32" y="448" width="16" height="16" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="56" y="461" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.8">en place chez nous</text>
<rect x="32" y="472" width="16" height="16" rx="4" fill="none" stroke="currentColor" stroke-opacity="0.55" stroke-width="1.5" stroke-dasharray="5 5"></rect>
<text x="56" y="485" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.8">cible, pas encore en place</text>
</svg>
<p>Dans ce schéma, trois postes tournent chez nous : le code, les tests, la revue. Deux sont en pointillés. La spécification tirée des comptes rendus de réunion est un essai en cours. La livraison automatique s'arrête à l'environnement de développement.</p>
<p>La boucle du bas compte plus que le convoyeur. Un lot refusé en revue ne part pas « avec réserve ». Il retourne au code, repasse les mêmes tests, puis une nouvelle revue.</p>
<blockquote><p>Une correction invalide les preuves. On les rejoue, on ne les recopie pas.</p></blockquote>

<h2>Ce qui tourne depuis le 14 octobre</h2>
<p>Ce jour-là, la branche principale a cessé d'exiger une approbation. À la place, un contrôle obligatoire réclame une preuve de revue. La preuve cite le commit relu et une exécution de la chaîne d'intégration. La machine va vérifier elle-même que cette exécution existe, porte sur ce code et s'est terminée en succès.</p>
<p>La règle vient d'un incident. Une approbation annonçait 1 781 tests, zéro échec, chaîne verte. En réalité, 21 tests avaient été sautés et l'exécution avait échoué. Le relecteur s'en est aperçu seul, huit minutes plus tard. Aucune machine ne l'avait vu.</p>
<p>La leçon tient en une ligne de notre documentation : un décompte de tests verts n'atteste rien sur les fichiers qui n'ont pas tourné. Une approbation est un avis. Une preuve se vérifie.</p>
<p>Entre le 14 octobre et le 9 novembre, 469 <abbr title="Pull request : proposition de modification soumise avant fusion dans la branche principale">PR</abbr> ont été fusionnées. Trois mesures, sur ce même ensemble :</p>
<ul>
<li><strong>75 %</strong> n'ont aucune revue enregistrée sur la plateforme.</li>
<li><strong>9 %</strong> portent la revue d'un autre compte humain.</li>
<li><strong>25 %</strong> portaient une étiquette par laquelle quelqu'un gardait la main sur la fusion.</li>
</ul>
<p>Ces chiffres ne s'additionnent pas. Ils répondent à trois questions différentes. Et le premier dit moins qu'il n'en a l'air : « aucune revue enregistrée » ne veut pas dire que personne n'a regardé.</p>
<blockquote><p>Trois fusions sur quatre sans relecteur humain : c'est un fait sur notre processus, pas sur notre code.</p></blockquote>
<svg viewBox="0 0 640 322" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Six étapes sont automatiques, de la spécification à l'environnement de développement. Trois décisions restent humaines, chacune accrochée à une étape : trancher sous la revue, passer outre sous la fusion, publier sous l'environnement de développement." class="diagram-svg diagram-wide">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">SOLSTICE*, DEPUIS LE 14 OCTOBRE</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Six étapes, trois décisions.</text>
<rect x="32" y="100" width="86" height="38" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="75" y="124" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">spec</text>
<rect x="130" y="100" width="86" height="38" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="173" y="124" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">code</text>
<rect x="228" y="100" width="86" height="38" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="271" y="124" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">tests</text>
<rect x="326" y="100" width="86" height="38" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="369" y="124" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">revue</text>
<rect x="424" y="100" width="86" height="38" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="467" y="124" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">fusion</text>
<rect x="522" y="100" width="86" height="38" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="565" y="124" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">dev</text>
<path d="M 32 160 L 608 160" fill="none" stroke="currentColor" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="2 7"></path>
<text x="32" y="207" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.8">trois décisions humaines</text>
<path d="M 369 138 L 369 180" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<rect x="322" y="180" width="94" height="44" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="369" y="207" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle">trancher</text>
<path d="M 467 138 L 467 180" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<rect x="420" y="180" width="94" height="44" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="467" y="207" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle">passer outre</text>
<path d="M 565 138 L 565 180" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<rect x="518" y="180" width="94" height="44" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="565" y="207" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle">publier</text>
<text x="32" y="262" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">trancher : au quatrième tour de revue refusé (jamais déclenché à ce jour)</text>
<text x="32" y="282" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">passer outre : en urgence, par un administrateur, avec un ticket de suivi</text>
<text x="32" y="302" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">publier : la version, et toute promotion après l'environnement de dev</text>
</svg>
<svg viewBox="0 0 320 520" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Six étapes sont automatiques, de la spécification à l'environnement de développement. Trois décisions restent humaines, chacune accrochée à une étape : trancher sous la revue, passer outre sous la fusion, publier sous l'environnement de développement." class="diagram-svg diagram-narrow">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">DEPUIS LE 14 OCTOBRE</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">Six étapes,</text>
<text x="32" y="106" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">trois décisions.</text>
<rect x="32" y="129" width="112" height="34" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="88" y="151" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">spec</text>
<rect x="32" y="171" width="112" height="34" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="88" y="193" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">code</text>
<rect x="32" y="213" width="112" height="34" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="88" y="235" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">tests</text>
<rect x="32" y="255" width="112" height="34" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="88" y="277" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">revue</text>
<rect x="32" y="297" width="112" height="34" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="88" y="319" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">fusion</text>
<rect x="32" y="339" width="112" height="34" rx="8" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="88" y="361" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">dev</text>
<path d="M 144 272 L 176 272" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<rect x="176" y="255" width="112" height="34" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="232" y="277" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle">trancher</text>
<path d="M 144 314 L 176 314" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<rect x="176" y="297" width="112" height="34" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="232" y="319" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle">passer outre</text>
<path d="M 144 356 L 176 356" fill="none" stroke="currentColor" stroke-opacity="0.45" stroke-width="1.5" stroke-linecap="round"></path>
<rect x="176" y="339" width="112" height="34" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="232" y="361" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="650" text-anchor="middle">publier</text>
<text x="32" y="406" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">trancher : au 4e tour de revue refusé,</text>
<text x="32" y="424" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">jamais déclenché à ce jour</text>
<text x="32" y="442" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">passer outre : en urgence,</text>
<text x="32" y="460" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">par un administrateur</text>
<text x="32" y="478" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">publier : la version, et toute</text>
<text x="32" y="496" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">promotion après la dev</text>
</svg>
<p>Un agent ne prend aucune de ces trois décisions. Seul l'environnement de développement reçoit le code sans geste humain. Toute promotion au-delà se déclenche à la main.</p>

<h2>Là où la preuve reste une déclaration</h2>
<p>Un lecteur hostile attaquera ici, et il aura raison sur quatre points.</p>
<p><strong>Le relecteur peut être le même modèle.</strong> Même agent, même compte, autre session. Un contexte neuf réduit l'ancrage. Il ne prouve aucune diversité de jugement. La machine vérifie que la session de revue diffère de celles des commits. Elle ne vérifie pas que la revue a eu lieu ailleurs que dans un formulaire.</p>
<p><strong>Les décomptes de tests sont encore tapés.</strong> Le contrôle établit que l'exécution citée est verte sur ce commit. Il ne recoupe pas le nombre de tests sautés. La règle née de l'incident n'attraperait donc que la moitié de l'incident.</p>
<p><strong>La passe de sécurité est une ligne.</strong> Le niveau de risque est solide : il se calcule depuis les chemins modifiés, et une proposition ne peut pas l'abaisser. Au niveau élevé, la preuve doit contenir une passe de sécurité. C'est l'agent relecteur qui l'écrit.</p>
<p><strong>La limite de boucle n'a jamais servi.</strong> Au quatrième tour de revue refusé, la fusion se bloque jusqu'à la décision d'un développeur. Ce cas ne s'est pas présenté. C'est un dessin, pas un résultat.</p>
<p>J'ajoute une dette que rien ne compte : nous comprenons moins le code livré. Aucun de nos contrôles ne mesure ce que plus personne ne sait expliquer.</p>
<p>Et je dois une correction à mon billet d'août. J'y décrivais un périmètre gardé humain exprès, la surface joignable de l'extérieur. J'écrivais que cette erreur-là devait coûter une conversation. La règle exige toujours un non-auteur sur ce périmètre. Ce non-auteur peut aujourd'hui être un agent. La conversation est devenue facultative, et je ne sais pas encore lequel des deux billets a raison.</p>

<h2>Dix licences, 76 %</h2>
<svg viewBox="0 0 640 296" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sur 66 licences, 10 consomment 76 % des crédits et les 56 autres se partagent les 24 % restants, sur une fenêtre de neuf jours." class="diagram-svg diagram-wide">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">CRÉDITS IA, DU 1ER AU 9 NOVEMBRE 2026</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">10 licences, 76 % des crédits.</text>
<circle cx="40.7" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="58.2" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="75.6" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="93.1" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="110.5" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="128.0" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="145.5" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="162.9" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="180.4" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="197.8" cy="108" r="6" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="215.3" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="232.7" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="250.2" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="267.6" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="285.1" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="302.5" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="320.0" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="337.5" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="354.9" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="372.4" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="389.8" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="407.3" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="424.7" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="442.2" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="459.6" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="477.1" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="494.5" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="512.0" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="529.5" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="546.9" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="564.4" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="581.8" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="599.3" cy="108" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="40.7" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="58.2" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="75.6" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="93.1" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="110.5" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="128.0" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="145.5" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="162.9" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="180.4" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="197.8" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="215.3" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="232.7" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="250.2" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="267.6" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="285.1" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="302.5" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="320.0" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="337.5" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="354.9" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="372.4" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="389.8" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="407.3" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="424.7" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="442.2" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="459.6" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="477.1" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="494.5" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="512.0" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="529.5" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="546.9" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="564.4" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="581.8" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="599.3" cy="128" r="6" fill="currentColor" fill-opacity="0.16"></circle>
<rect x="32" y="152" width="438" height="44" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<rect x="474" y="152" width="134" height="44" rx="8" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="48" y="182" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">76 %</text>
<text x="490" y="182" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650" opacity="0.7">24 %</text>
<text x="32" y="220" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.8">10 licences</text>
<text x="608" y="220" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="end" opacity="0.8">56 autres licences</text>
<text x="32" y="256" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">fenêtre de neuf jours, dont six ouvrés</text>
<text x="32" y="274" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">toute l'organisation, pas la seule équipe Solstice*</text>
</svg>
<svg viewBox="0 0 320 442" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sur 66 licences, 10 consomment 76 % des crédits et les 56 autres se partagent les 24 % restants, sur une fenêtre de neuf jours." class="diagram-svg diagram-narrow">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">DU 1ER AU 9 NOVEMBRE</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">10 licences,</text>
<text x="32" y="106" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">76 % des crédits.</text>
<circle cx="43.6" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="66.9" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="90.2" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="113.5" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="136.7" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="160.0" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="183.3" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="206.5" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="229.8" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="253.1" cy="142" r="7" fill="currentColor" fill-opacity="0.85"></circle>
<circle cx="276.4" cy="142" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="43.6" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="66.9" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="90.2" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="113.5" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="136.7" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="160.0" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="183.3" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="206.5" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="229.8" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="253.1" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="276.4" cy="164" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="43.6" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="66.9" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="90.2" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="113.5" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="136.7" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="160.0" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="183.3" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="206.5" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="229.8" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="253.1" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="276.4" cy="186" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="43.6" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="66.9" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="90.2" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="113.5" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="136.7" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="160.0" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="183.3" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="206.5" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="229.8" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="253.1" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="276.4" cy="208" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="43.6" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="66.9" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="90.2" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="113.5" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="136.7" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="160.0" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="183.3" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="206.5" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="229.8" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="253.1" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="276.4" cy="230" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="43.6" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="66.9" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="90.2" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="113.5" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="136.7" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="160.0" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="183.3" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="206.5" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="229.8" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="253.1" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<circle cx="276.4" cy="252" r="7" fill="currentColor" fill-opacity="0.16"></circle>
<rect x="32" y="278" width="192" height="44" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<rect x="228" y="278" width="60" height="44" rx="8" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="46" y="308" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">76 %</text>
<text x="258" y="306" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="650" text-anchor="middle" opacity="0.7">24 %</text>
<text x="32" y="346" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" opacity="0.8">10 licences</text>
<text x="288" y="346" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="end" opacity="0.8">56 autres</text>
<text x="32" y="378" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">neuf jours, dont six ouvrés</text>
<text x="32" y="396" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">toute l'organisation,</text>
<text x="32" y="414" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">pas la seule équipe Solstice*</text>
</svg>
<p>La mesure a ses limites. Neuf jours, dont six ouvrés. Et elle couvre toute mon organisation, pas la seule équipe du projet.</p>
<p>Ce qui sépare les dix des autres, d'après ce que j'observe : les premiers mènent plusieurs sessions en parallèle. Les autres en lancent une et attendent son résultat. C'est ma lecture, pas une mesure.</p>
<p>Travailler en parallèle suppose des sujets découpés en lots indépendants. Ce découpage se fait avec les <abbr title="Product Owner : la personne qui porte le besoin et les priorités du produit">PO</abbr>, pas dans l'outil. La contrainte de l'usine est donc en amont : dans la façon de tailler le travail.</p>
<blockquote><p>Une usine se reconnaît à ce qu'elle tourne sans ses dix meilleurs ouvriers. La nôtre, pas encore.</p></blockquote>
<p>La conclusion n'est pas de garder dix personnes. Elle est d'amener les cinquante-six autres au travail en parallèle. Nous avons décidé de réallouer des licences aux PO et aux testeurs, dans des cadres d'usage précis. Être en tête des consommations n'est pas non plus un objectif : certaines dépenses très élevées ne correspondent à aucun bon usage.</p>
<p>Quelqu'un a demandé ce qu'était une consommation normale. Personne n'a su répondre, moi compris.</p>
<p>Sur le coût, un seul fait. La part des modèles les plus chers dans nos crédits est passée de 92 % en septembre à 22 % début novembre, sans baisse d'usage. Nous l'avons obtenu à la main : un message, puis un suivi.</p>
<p>Les récits d'usine décrivent une boucle qui fait ce travail seule. Elle rejoue des tâches connues sur un modèle moins cher, un juge compare à l'aveugle, et on garde le moins cher qui tient. Nous l'avons lancée une fois, en août, sur 47 jeux de consignes pour agents. Quatre tâches gelées par jeu, 46 nouvelles versions gardées, une ancienne conservée. Une fois, à la main : ce n'est pas une boucle.</p>

<h2>Ce qui reste aux humains</h2>
<p>Le besoin. Dire ce qu'il faut construire, pourquoi, et dans quel ordre. Dans le schéma, c'est le seul poste plein.</p>
<p>Les trois décisions : trancher, passer outre, publier.</p>
<p>Comprendre encore ce qu'on livre. Savoir lire du code reste ce qui permet d'écrire une bonne intention et de traiter une exception.</p>
<p>Découper. Tant que les sujets arrivent en blocs, l'usine a dix postes occupés.</p>
<p>Éprouver sur site. Les premiers tests chez un établissement sont en cours. Je n'ai pas encore de chiffre à donner. Ce sont eux qui diront ce que vaut une fusion sans relecteur humain.</p>
<p>Deux questions restent ouvertes. Faut-il livrer tous les clients sur un même flot, en activant les fonctions par drapeaux ? Et la PR est-elle encore le bon objet, quand des agents en ouvrent plus vite qu'une file ne se vide ?</p>

<h2>Quoi faire lundi matin</h2>
<ol>
<li><strong>Comptez la part de vos dix premières licences.</strong> Un seul chiffre vous dit si vous avez une chaîne ou un atelier.</li>
<li><strong>Remplacez l'approbation par une preuve.</strong> Elle cite un commit et une exécution, et une machine va vérifier les deux.</li>
<li><strong>Écrivez ce qui reste déclaratif.</strong> Notre documentation le fait, noir sur blanc. C'est la partie que je relis le plus.</li>
<li><strong>Bornez la boucle de correction.</strong> Un nombre de tours, puis un humain. Même si la limite ne sert jamais.</li>
<li><strong>Découpez un sujet en lots indépendants avec son PO.</strong> Puis lancez-les en parallèle, et regardez qui sait le faire.</li>
</ol>
<p><strong>Lire la suite de la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/quality-is-executed">La qualité ne se relit pas. Elle s'exécute.</a> : les contrôles sur lesquels cette chaîne repose. <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">La doctrine capitalise. Pas les modèles.</a> : pourquoi les règles vivent dans le dépôt. <a target="_blank" rel="noopener noreferrer" href="/posts/skills-not-seats">La compétence était réelle. Le poste, non.</a> : ce que deviennent les rôles autour de la chaîne. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100 % écrit par des agents</a> : le point d'étape de juillet. <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">Le SDLC est mort</a> : le point de départ.</p>
<hr>
<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://simonwillison.net/2026/Feb/7/software-factory/">Simon Willison, « Software Factory » (7 février 2026)</a> : compte rendu d'une visite chez StrongDM. À garder : les scénarios cachés aux agents. À laisser : les montants de dépense, déclarés par l'entreprise et jamais recoupés. Projet neuf, trois personnes, aucun résultat publié depuis.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.warp.dev/articles/self-improvement-loop-software-factory">Warp, sur la boucle d'amélioration d'une software factory (2026)</a> : l'idée des deux boucles, qualité et coût, vient de là. C'est un éditeur qui vend l'outillage correspondant. Je reprends le schéma de pensée, aucun de ses chiffres.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://addyosmani.com/blog/comprehension-debt/">Addy Osmani, « Comprehension Debt » (2026)</a> : le nom de la dette que je décris. Un essai de praticien, pas une mesure.</li>
<li>Solstice* : la règle de preuve, les 469 PR et les trois décisions viennent du dépôt, relevé du 9 novembre 2026. Les crédits viennent du tableau de bord de mon organisation, du 1er au 9 novembre, en agrégat. Interne, sans lien : le nom de code est fictif et le projet réel, ses produits et son éditeur sont anonymisés.</li>
</ul>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}
