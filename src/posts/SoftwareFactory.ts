import type { PostMetadata, PostContent } from '@/lib/posts'

export const metadata: PostMetadata = {
  slug: 'software-factory',
  date: '2026-11-16',
  tags: ['Software', 'AI', 'Opinion'],
  draft: true
}

const englishContent: PostContent = {
  title: "Software Factory: Where the Word Comes From, and What We Do With It",
  description: "The term dates back to General Electric and Hitachi, and every revival since has industrialized what surrounds the programmer. The agent-era version goes after the development cycle itself. A field report from a regulated hospital ERP: the history, the line as we drew it, the part that actually runs, and the limits of merging on machine-checked evidence.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> "Software factory" is a word from 1968, and it has let down several generations already. Each factory standardized what surrounds the developer: tools, process, models, the pipeline. None touched the station where code gets written. In 2026 that station falls. The whole development cycle, the <abbr title="Software Development Life Cycle: the path from need to delivery">SDLC</abbr>, becomes one line held by agents. On <abbr title="Fictitious codename: the real project, its products and its vendor are anonymized.">Solstice*</abbr>, the middle of that line already runs: code, tests, review, correction. Since 14 October, nobody approves our merges any more. A machine checks a proof. We are left with three decisions, and one job: the customer's need.</p></div>
<hr>
<p>People ask me whether the software factory is the new buzzword. No. It is a fifty-eight-year-old word, and it has already failed several times.</p>
<p>In late October, at <abbr title="BDX I/O: yearly tech conference in Bordeaux, France, held on 29 and 30 October 2026">BDX I/O</abbr>, it was in every conversation about agents. Two weeks later I made it the thread of the year review I gave my team.</p>
<p>So here it is. Where the word comes from, what it means now, and what we do with it, on hospital software.</p>

<h2>Where the word comes from</h2>
<p>In 1968, <abbr title="Robert W. Bemer: American computer scientist, one of the fathers of ASCII">R. W. Bemer</abbr>, an engineer at General Electric, proposes a "software factory". His idea: reduce the productivity gaps between programmers with standard tools and a database of measurements. The same year, <abbr title="M. Douglas McIlroy: Bell Labs researcher, the mind behind Unix pipes">Doug McIlroy</abbr> argues for mass-produced software components.</p>
<p>According to the historian <abbr title="Michael Cusumano: MIT professor, author of Japan's Software Factories (1991)">Michael Cusumano</abbr>, Hitachi opens the first site to carry the name in 1969. The large Japanese manufacturers follow. In the United States, System Development Corporation sets up its own in the mid-1970s. It lapses in under three years.</p>
<p>Cusumano sums it up this way: the factory worked for products that look alike. Far less for anything new.</p>
<p>In 2004, Microsoft picks the word up again. Jack Greenfield and Keith Short promise to assemble applications from models and dedicated languages. Then <abbr title="DevOps: bringing development and operations together, tooled by continuous integration and deployment">DevOps</abbr> recycles it once more. In French, "usine logicielle" ends up meaning the integration and deployment toolchain.</p>
<svg viewBox="0 0 640 276" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="From 1968 to 2026, each generation of software factory standardized something else: tools, process, models, the pipeline. Code was still written by hand until the latest one, where agents hold the stations." class="diagram-svg diagram-wide">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">WHAT EACH FACTORY STANDARDIZED</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">58 years to reach the code.</text>
<text x="32" y="122" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">1968</text>
<text x="32" y="146" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">the tools</text>
<text x="32" y="165" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">General Electric</text>
<text x="149" y="122" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">1969</text>
<text x="149" y="146" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">the process</text>
<text x="149" y="165" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">Hitachi</text>
<text x="266" y="122" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">2004</text>
<text x="266" y="146" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">the models</text>
<text x="266" y="165" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">Microsoft</text>
<text x="383" y="122" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">2010+</text>
<text x="383" y="146" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">the pipeline</text>
<text x="383" y="165" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">DevOps</text>
<text x="500" y="122" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">2026</text>
<text x="500" y="146" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">the stations</text>
<text x="500" y="165" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">agents</text>
<rect x="32" y="184" width="459" height="40" rx="8" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<rect x="500" y="184" width="108" height="40" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="48" y="209" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.8">code is still written by hand</text>
<text x="554" y="209" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="650" text-anchor="middle">agents</text>
<text x="32" y="254" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">1968 and 1969 dates: Cusumano (1989); 2004: Greenfield and Short</text>
</svg>
<svg viewBox="0 0 320 452" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="From 1968 to 2026, each generation of software factory standardized something else: tools, process, models, the pipeline. Code was still written by hand until the latest one, where agents hold the stations." class="diagram-svg diagram-narrow">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">FROM 1968 TO 2026</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">58 years to</text>
<text x="32" y="106" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">reach the code.</text>
<rect x="32" y="132" width="256" height="46" rx="8" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="46" y="162" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">1968</text>
<text x="128" y="152" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">the tools</text>
<text x="128" y="169" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">General Electric</text>
<rect x="32" y="186" width="256" height="46" rx="8" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="46" y="216" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">1969</text>
<text x="128" y="206" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">the process</text>
<text x="128" y="223" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">Hitachi</text>
<rect x="32" y="240" width="256" height="46" rx="8" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="46" y="270" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">2004</text>
<text x="128" y="260" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">the models</text>
<text x="128" y="277" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">Microsoft</text>
<rect x="32" y="294" width="256" height="46" rx="8" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="46" y="324" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">2010+</text>
<text x="128" y="314" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">the pipeline</text>
<text x="128" y="331" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">DevOps</text>
<rect x="32" y="348" width="256" height="46" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="46" y="378" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">2026</text>
<text x="128" y="368" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">the stations</text>
<text x="128" y="385" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">agents</text>
<text x="32" y="420" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">1968, 1969: Cusumano (1989)</text>
</svg>
<p>Four factories, one blind spot. They industrialized everything around the programmer. None touched the act of writing.</p>
<blockquote><p>For close to sixty years, the factory standardized everything except the station where the writing happens.</p></blockquote>

<h2>What the word means now</h2>
<p>In 2026, that station is the one that goes. A software factory is now a line where the need goes in at one end and the delivery comes out at the other. In between, agents.</p>
<p>The account that revived the word is the one from <abbr title="StrongDM: US vendor of access-management software">StrongDM</abbr>, in February. Three engineers, one rule: no human writes or reviews the code. Scenarios hidden from the agents judge the outcome. <abbr title="Simon Willison: British developer and writer, co-creator of the Django framework">Simon Willison</abbr>, who visited the team, calls it a glimpse of one possible future. He also doubts you can do without review.</p>
<p>I keep the mechanism: scenarios the agent cannot see. I leave the figures. Nobody has cross-checked them.</p>
<p>Here is the line as I drew it for my team. The steps of the development cycle, in order, on a single conveyor.</p>
<picture class="iso-scene"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/software-factory/factory-en-still.webp"><img src="/visuals/software-factory/factory-en.webp" alt="Animated isometric scene of a software line: the human need enters on the left, a lot goes through the spec, code, tests and review stations, is refused, takes the correction lane back, runs the tests and the review again, then is delivered to the customer." width="1120" height="620" loading="lazy" decoding="async" data-gallery-image="true"></picture>
<p>The lot carries three boxes: S for the specification, C for the code, T for the tests. Each one fills at the station that produces it. The need is not a station. It is the input, and it stays human.</p>
<p>Look at the blue lane. It matters more than the conveyor. A lot refused at review does not ship "with reservations". It goes back to code, runs the same tests, then gets a new review.</p>
<blockquote><p>A fix voids the evidence. You replay it. You do not copy it over.</p></blockquote>
<p>A line like this also has to improve its own stations. Two loops say it all.</p>
<picture class="iso-scene"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/software-factory/loops-en-still.webp"><img src="/visuals/software-factory/loops-en.webp" alt="Animated isometric infinity symbol: on the left the quality loop, which scores each conversation and fixes the misses; on the right the cost loop, which replays the work elsewhere and keeps the cheapest that holds. A dot travels both loops endlessly." width="1120" height="455" loading="lazy" decoding="async" data-gallery-image="true"></picture>
<p>The quality loop scores the agents' work and starts from the misses to fix their instructions. The cost loop replays known tasks on another model and keeps the cheapest one that holds. Neither fixes the software. They fix the agent.</p>
<p>In March I wrote that the SDLC was dead. I stand by it. Every one of its steps is on this drawing. What died is the handoff between people, and the wait at each one.</p>

<h2>What we do with it</h2>
<p>Let me be clear: this drawing is a target. On Solstice*, a hospital <abbr title="Enterprise Resource Planning: the administrative backbone of a hospital group">ERP</abbr>, the middle of the line is what runs. Agents write the code and its tests. The integration pipeline executes them. An agent reviews, in a separate session.</p>
<p>The two ends do not run yet. Turning meeting transcripts into a specification is a trial. Automatic delivery stops at the development environment.</p>
<p>The real switch dates from 14 October. That day, the main branch stopped requiring an approval. A required check asks for a review proof in its place. The proof names the commit that was reviewed and one run of the integration pipeline. The machine checks for itself that this run exists, covers this code and ended in success.</p>
<p>That rule comes from an incident. An approval stated close to 1,800 tests, zero failures, green pipeline. In fact some twenty tests had been skipped and the run had failed. The reviewer noticed on his own, a few minutes later. No machine had seen it.</p>
<p>Our documentation kept one line of it: a count of green tests says nothing about the files that never ran.</p>
<blockquote><p>An approval is an opinion. A proof can be checked.</p></blockquote>
<p>Over five weeks, more than 600 pull requests were merged. Three proportions over that set:</p>
<ul>
<li><strong>More than nine in ten</strong> were reviewed by no other human.</li>
<li><strong>Close to two thirds</strong> carry no recorded review on the platform.</li>
<li><strong>One in five</strong> carried a label through which someone kept a hand on the merge.</li>
</ul>
<p>The last week already changes the picture. The review done by an agent is now recorded on the platform: two merges in three carry one.</p>
<p>These proportions do not add up to a whole. They answer different questions. And I am not waving them around: nine merges in ten without a human reviewer is a fact about how we work. It says nothing about the quality of the code.</p>
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
<text x="32" y="262" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">arbitrate: at the fourth refused review round, a developer decides</text>
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
<text x="32" y="406" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">arbitrate: at the 4th refused</text>
<text x="32" y="424" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">round, a developer decides</text>
<text x="32" y="442" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">override: in an emergency,</text>
<text x="32" y="460" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">by an administrator</text>
<text x="32" y="478" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">release: the version, and every</text>
<text x="32" y="496" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">promotion past dev</text>
</svg>
<p>No agent takes any of these three decisions. Only the development environment receives code without a human gesture. Every move to a later environment is triggered by hand.</p>
<p>Arbitrating is not theoretical. At the fourth refused review round, the merge blocks until a developer decides. In early November that case had never come up. In mid-November it came up about ten times in three days. Each time, someone looked and decided: carry on, or change approach.</p>

<h2>Where the proof is still a statement</h2>
<p>A hostile reader will strike here. They will be right on three counts.</p>
<p><strong>The reviewer can be the same model.</strong> Same agent, same account, a different session. A fresh context reduces anchoring. It proves no diversity of judgement. The machine checks that the review session differs from the commit sessions. It does not check that the review happened anywhere other than in a form.</p>
<p><strong>Test counts are still typed in.</strong> The check establishes that the cited run is green on that commit. It does not cross-check how many tests were skipped. So the rule born from the incident would catch only half of the incident.</p>
<p><strong>The security review is one line.</strong> The risk tier is solid: it is computed from the changed paths, and a pull request cannot lower it. At the high tier, the proof must contain a security review. The reviewing agent writes it.</p>
<p>One objection remains, and it has a name, comprehension debt: we understand less of the code we ship. True. And I think that is no longer our place. Understanding the code line by line is now the agents' responsibility. There will always be an agent to answer the technical need. Our responsibility is to understand the business need, and the way to solve it. The on-site tests will say whether I am right.</p>
<p>I also owe my August post a correction. It described one perimeter kept human on purpose, the surface reachable from outside. I wrote that this kind of mistake should cost a conversation. The rule still demands a non-author on that perimeter. Today that non-author can be an agent. The conversation became optional. I own that, and I am watching what it gives.</p>

<h2>What still belongs to humans</h2>
<blockquote><p>What matters is understanding the business need and how to solve it. The rest no longer matters.</p></blockquote>
<p>Saying what to build, why, and in what order. On the drawing it is the cart on the left. No agent pushes it.</p>
<p>The three decisions: arbitrate, override, release.</p>
<p>Understanding the system, not every line. What the software must guarantee, and how we prove it. The detail of the code is the agents' business.</p>
<p>Proving it on site. The first tests in a hospital are under way. I have no number to give yet. They will tell what a merge without a human reviewer is worth.</p>
<p>And the new. That is where the 1969 factories stalled, by Cusumano's account. Nothing tells me the 2026 one will do better when the need itself is vague.</p>
<p>Two questions stay open. Should every customer ship on one release train, with features switched on by flags? And is the pull request still the right object, when agents open them faster than a queue drains?</p>

<h2>What to do Monday morning</h2>
<ol>
<li><strong>Draw your line, station by station.</strong> Mark what runs and what is a target. The honest drawing is often shorter than the pitch.</li>
<li><strong>Replace the approval with a proof.</strong> It names a commit and a run, and a machine checks both.</li>
<li><strong>Write down what stays declarative.</strong> Our documentation does, in plain words. It is the part I reread most.</li>
<li><strong>Bound the correction loop.</strong> A number of rounds, then a person. On my team, the limit gets used.</li>
<li><strong>Spend your time on the need.</strong> It is the only input of the line, and the only one nobody can hold for you.</li>
</ol>
<p><strong>Read the rest of the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">The SDLC Is Dead</a>. Where this started, and what this post sharpens. <a target="_blank" rel="noopener noreferrer" href="/posts/quality-is-executed">Quality Isn't Read. It's Executed.</a> The checks this line rests on. <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">Doctrine Compounds. Models Don't.</a> Why the rules live in the repository. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100% Agent-Written</a>. The July checkpoint.</p>
<hr>
<h2>Sources</h2>
<ul>
<li>Michael A. Cusumano, "The Software Factory: A Historical Interpretation", <em>IEEE Software</em>, March 1989, and <a target="_blank" rel="noopener noreferrer" href="https://dspace.mit.edu/handle/1721.1/47992">"Factory Concepts and Practices in Software Development: An Historical Overview"</a> (MIT): Bemer in 1968, Hitachi in 1969, the System Development Corporation factory and its end. A historian's work, from archives and interviews. It is the source for the whole first part.</li>
<li>Jack Greenfield and Keith Short, <em>Software Factories: Assembling Applications with Patterns, Models, Frameworks, and Tools</em> (Wiley, 2004): the Microsoft version of the word. A tool vendor's book: read it as a promise, not as a track record.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://simonwillison.net/2026/Feb/7/software-factory/">Simon Willison, "Software Factory" (7 February 2026)</a>: write-up of a visit to StrongDM. Keep the scenarios hidden from the agents. Discard the amounts the company reports, never cross-checked. Greenfield, three people, no outcome published since.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.warp.dev/articles/self-improvement-loop-software-factory">Warp, on the improvement loop of a software factory (2026)</a>: the idea of two loops comes from there. It is a vendor selling the matching tooling. I take the thinking scheme and none of its numbers.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://addyosmani.com/blog/comprehension-debt/">Addy Osmani, "Comprehension Debt" (2026)</a>: the name of the objection I answer. A practitioner's essay, not a measurement.</li>
<li>Solstice*: the proof rule, the orders of magnitude on pull requests, the fourth-round blocks and the three decisions come from the repository, as read on 16 November 2026. Figures are rounded on purpose. Internal, no links: the codename is fictitious and the real project, its products and its vendor are anonymized.</li>
</ul>`
}

const frenchContent: PostContent = {
  title: "Software factory : d’où vient le mot, et ce que nous en faisons",
  description: "Le terme remonte à General Electric et à Hitachi, et chacune de ses résurrections a industrialisé ce qui entoure le programmeur. La version de l'ère des agents s'attaque au cycle de développement lui-même. Retour de terrain sur un ERP hospitalier régulé : l'histoire, la chaîne telle que nous l'avons dessinée, la partie qui tourne vraiment, et les limites d'une fusion sur preuve.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> « Software factory » est un mot de 1968, et il a déjà déçu plusieurs générations. Chaque usine a standardisé ce qui entoure le développeur : les outils, le procédé, les modèles, la chaîne de livraison. Aucune n'a touché au poste où l'on écrit le code. En 2026, ce sont les agents qui le prennent. Le cycle de développement entier, le <abbr title="Software Development Life Cycle : le cycle de développement logiciel, du besoin à la livraison">SDLC</abbr>, devient une chaîne tenue par des agents. Sur <abbr title="Nom de code fictif : le projet réel, ses produits et son éditeur sont anonymisés.">Solstice*</abbr>, le milieu de cette chaîne tourne déjà : code, tests, revue, correction. Depuis le 14 octobre, plus personne n'approuve nos fusions. Une machine vérifie une preuve. Il nous reste trois décisions, et un métier : le besoin du client.</p></div>
<hr>
<p>On me demande si la software factory est le nouveau mot à la mode. Non. C'est un mot de cinquante-huit ans, et il a déjà échoué plusieurs fois.</p>
<p>Fin octobre, à <abbr title="BDX I/O : conférence technique annuelle à Bordeaux, tenue les 29 et 30 octobre 2026">BDX I/O</abbr>, il était dans toutes les conversations sur les agents. Deux semaines plus tard, j'en ai fait le fil du bilan d'année devant mon équipe.</p>
<p>Alors voici. D'où vient ce mot, ce qu'il désigne aujourd'hui, et ce que nous en faisons, nous, sur un logiciel hospitalier.</p>

<h2>D'où vient le mot</h2>
<p>En 1968, <abbr title="Robert W. Bemer : informaticien américain, l'un des pères du code ASCII">R. W. Bemer</abbr>, ingénieur chez General Electric, propose une « software factory ». Son idée : réduire les écarts de productivité entre programmeurs par des outils standardisés et une base de mesures. La même année, <abbr title="M. Douglas McIlroy : chercheur des Bell Labs, à l'origine des tubes Unix">Doug McIlroy</abbr> plaide pour des composants logiciels produits en série.</p>
<p>D'après l'historien <abbr title="Michael Cusumano : professeur au MIT, auteur de Japan's Software Factories (1991)">Michael Cusumano</abbr>, Hitachi ouvre en 1969 le premier site à porter ce nom. Les grands industriels japonais suivent. Aux États-Unis, System Development Corporation monte la sienne au milieu des années 1970. Elle s'éteint en moins de trois ans.</p>
<p>Cusumano en tire un constat : l'usine fonctionnait pour des produits qui se ressemblent, beaucoup moins bien pour ce qui n'avait jamais été fait.</p>
<p>En 2004, Microsoft reprend le mot. Jack Greenfield et Keith Short promettent d'assembler des applications à partir de modèles et de langages dédiés. Puis le <abbr title="DevOps : rapprochement du développement et de l'exploitation, outillé par l'intégration et le déploiement continus">DevOps</abbr> le recycle encore. En français, « usine logicielle » finit par désigner la chaîne d'intégration et de déploiement.</p>
<svg viewBox="0 0 640 276" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="De 1968 à 2026, chaque génération d'usine logicielle a standardisé autre chose : les outils, le procédé, les modèles, la chaîne de livraison. Le code restait écrit à la main jusqu'à la dernière, où des agents tiennent les postes." class="diagram-svg diagram-wide">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">CE QUE CHAQUE USINE A STANDARDISÉ</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">58 ans pour atteindre le code.</text>
<text x="32" y="122" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">1968</text>
<text x="32" y="146" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">les outils</text>
<text x="32" y="165" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">General Electric</text>
<text x="149" y="122" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">1969</text>
<text x="149" y="146" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">le procédé</text>
<text x="149" y="165" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">Hitachi</text>
<text x="266" y="122" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">2004</text>
<text x="266" y="146" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">les modèles</text>
<text x="266" y="165" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">Microsoft</text>
<text x="383" y="122" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">2010+</text>
<text x="383" y="146" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">la chaîne</text>
<text x="383" y="165" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">DevOps</text>
<text x="500" y="122" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">2026</text>
<text x="500" y="146" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">les postes</text>
<text x="500" y="165" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">agents</text>
<rect x="32" y="184" width="459" height="40" rx="8" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<rect x="500" y="184" width="108" height="40" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="48" y="209" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.8">le code reste écrit à la main</text>
<text x="554" y="209" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="650" text-anchor="middle">agents</text>
<text x="32" y="254" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">dates de 1968 et 1969 : Cusumano (1989) ; 2004 : Greenfield et Short</text>
</svg>
<svg viewBox="0 0 320 452" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="De 1968 à 2026, chaque génération d'usine logicielle a standardisé autre chose : les outils, le procédé, les modèles, la chaîne de livraison. Le code restait écrit à la main jusqu'à la dernière, où des agents tiennent les postes." class="diagram-svg diagram-narrow">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">DE 1968 À 2026</text>
<text x="32" y="72" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">58 ans pour</text>
<text x="32" y="106" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="28" font-weight="650">atteindre le code.</text>
<rect x="32" y="132" width="256" height="46" rx="8" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="46" y="162" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">1968</text>
<text x="128" y="152" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">les outils</text>
<text x="128" y="169" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">General Electric</text>
<rect x="32" y="186" width="256" height="46" rx="8" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="46" y="216" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">1969</text>
<text x="128" y="206" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">le procédé</text>
<text x="128" y="223" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">Hitachi</text>
<rect x="32" y="240" width="256" height="46" rx="8" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="46" y="270" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">2004</text>
<text x="128" y="260" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">les modèles</text>
<text x="128" y="277" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">Microsoft</text>
<rect x="32" y="294" width="256" height="46" rx="8" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="46" y="324" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">2010+</text>
<text x="128" y="314" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">la chaîne</text>
<text x="128" y="331" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">DevOps</text>
<rect x="32" y="348" width="256" height="46" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="46" y="378" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">2026</text>
<text x="128" y="368" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">les postes</text>
<text x="128" y="385" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">agents</text>
<text x="32" y="420" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">1968, 1969 : Cusumano (1989)</text>
</svg>
<p>Quatre usines, et chaque fois la même limite.</p>
<blockquote><p>Pendant près de soixante ans, l'usine a tout standardisé sauf le poste où l'on écrit.</p></blockquote>

<h2>Ce que le mot désigne aujourd'hui</h2>
<p>En 2026, c'est justement ce poste que les agents occupent. Une usine logicielle est maintenant une chaîne où le besoin entre d'un côté et la livraison sort de l'autre. Entre les deux, tous les postes sont tenus par des agents.</p>
<p>Le récit qui a relancé le mot est celui de <abbr title="StrongDM : éditeur américain de logiciels de gestion des accès">StrongDM</abbr>, en février. Trois ingénieurs, une règle : aucun humain n'écrit ni ne relit le code. Des scénarios cachés aux agents jugent le résultat. <abbr title="Simon Willison : développeur et auteur britannique, cocréateur du framework Django">Simon Willison</abbr>, qui a visité l'équipe, y voit un aperçu d'un futur possible. Il doute aussi qu'on puisse se passer de revue.</p>
<p>J'en retiens le mécanisme, ces scénarios que l'agent ne voit pas. Je n'en retiens pas les chiffres, que personne n'a recoupés.</p>
<p>Voici la chaîne telle que je l'ai dessinée pour mon équipe. Les étapes du cycle de développement, dans l'ordre, sur un seul convoyeur.</p>
<picture class="iso-scene"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/software-factory/factory-fr-still.webp"><img src="/visuals/software-factory/factory-fr.webp" alt="Scène isométrique animée d'une chaîne logicielle : le besoin humain entre à gauche, un lot traverse les postes spec, code, tests et revue, est refusé, repart par la voie de correction, repasse les tests et la revue, puis est livré au client." width="1120" height="620" loading="lazy" decoding="async" data-gallery-image="true"></picture>
<p>Le lot porte trois cases : S pour la spécification, C pour le code, T pour les tests. Chacune se remplit au poste qui la produit. Le besoin, lui, n'est pas un poste. C'est l'entrée, et elle reste humaine.</p>
<p>Regardez la voie bleue : c'est elle qui compte. Un lot refusé en revue n'est jamais livré « sous réserve ». Il retourne au code, repasse les mêmes tests, puis une nouvelle revue.</p>
<blockquote><p>Après une correction, les preuves ne valent plus rien. Il faut les rejouer.</p></blockquote>
<p>Une chaîne pareille doit aussi s'améliorer elle-même. Deux boucles s'en chargent.</p>
<picture class="iso-scene"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/software-factory/loops-fr-still.webp"><img src="/visuals/software-factory/loops-fr.webp" alt="Symbole infini isométrique animé : à gauche la boucle qualité, qui note chaque conversation et corrige les ratés ; à droite la boucle coût, qui rejoue le travail ailleurs et retient le moins cher qui suffit. Un point parcourt les deux boucles sans fin." width="1120" height="455" loading="lazy" decoding="async" data-gallery-image="true"></picture>
<p>La boucle qualité note le travail des agents et repart des ratés pour corriger leurs consignes. La boucle coût rejoue des tâches connues sur un autre modèle et retient le moins cher de ceux qui font le travail. Ni l'une ni l'autre ne corrige le logiciel : elles corrigent l'agent.</p>
<p>En mars, j'écrivais que le SDLC était mort. Je maintiens. Ses étapes sont toutes sur ce dessin. Ce qui est mort, ce sont les passages de relais entre personnes, et l'attente à chacun d'eux.</p>

<h2>Ce que nous en faisons</h2>
<p>Soyons clairs : ce dessin est une cible. Sur Solstice*, un <abbr title="Enterprise Resource Planning : la colonne vertébrale administrative d'un groupement hospitalier">ERP</abbr> hospitalier, c'est le milieu de la chaîne qui tourne. Des agents écrivent le code et ses tests. La chaîne d'intégration les exécute. Un agent relit, dans une session séparée.</p>
<p>Les deux extrémités ne fonctionnent pas encore. La spécification tirée des comptes rendus de réunion est un essai. La livraison automatique s'arrête à l'environnement de développement.</p>
<p>Le vrai basculement date du 14 octobre. Ce jour-là, la branche principale a cessé d'exiger une approbation. À la place, un contrôle obligatoire réclame une preuve de revue. La preuve cite le <abbr title="Commit : un état du code enregistré, daté et identifié dans l'historique">commit</abbr> relu et une exécution de la chaîne d'intégration. La machine vérifie elle-même que cette exécution existe, porte sur ce code et s'est terminée avec succès.</p>
<p>Cette règle vient d'un incident. Une approbation annonçait près de 1 800 tests, zéro échec, chaîne verte. En réalité, une vingtaine de tests avaient été sautés et l'exécution avait échoué. Le relecteur s'en est aperçu seul, quelques minutes plus tard. Aucun contrôle automatique ne l'avait détecté.</p>
<p>Nous en avons tiré une règle écrite : un nombre de tests verts ne dit rien des fichiers qui n'ont pas été exécutés.</p>
<blockquote><p>Une approbation est un avis. Une preuve se vérifie.</p></blockquote>
<p>En cinq semaines, plus de 600 demandes de fusion ont été acceptées. Sur cet ensemble, trois proportions :</p>
<ul>
<li><strong>Plus de neuf sur dix</strong> n'ont été relues par aucun autre humain.</li>
<li><strong>Près des deux tiers</strong> n'ont aucune revue enregistrée sur la plateforme.</li>
<li><strong>Une sur cinq</strong> portait une étiquette par laquelle quelqu'un gardait la main sur la fusion.</li>
</ul>
<p>La dernière semaine change déjà le tableau. La revue faite par un agent s'enregistre maintenant sur la plateforme : deux fusions sur trois en portent une.</p>
<p>Ces proportions ne s'additionnent pas, elles répondent à des questions différentes. Je ne les brandis pas non plus. Neuf fusions sur dix sans relecteur humain, cela décrit notre façon de travailler. Cela ne dit rien de la qualité du code.</p>
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
<text x="32" y="262" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">trancher : au quatrième tour de revue refusé, un développeur décide</text>
<text x="32" y="282" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">passer outre : en urgence, par un administrateur, avec un ticket de suivi</text>
<text x="32" y="302" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">publier : la version, et tout passage au-delà de l'environnement de dev</text>
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
<text x="32" y="406" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">trancher : au 4e tour de revue</text>
<text x="32" y="424" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">refusé, un développeur décide</text>
<text x="32" y="442" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">passer outre : en urgence,</text>
<text x="32" y="460" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">par un administrateur</text>
<text x="32" y="478" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">publier : la version, et tout</text>
<text x="32" y="496" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.75">passage au-delà du dev</text>
</svg>
<p>Un agent ne prend aucune de ces trois décisions. Seul l'environnement de développement reçoit le code sans intervention humaine. Pour aller plus loin, quelqu'un doit lancer le déploiement.</p>
<p>Trancher n'a rien de théorique. Au quatrième tour de revue refusé, la fusion se bloque jusqu'à la décision d'un développeur. Début novembre, ce cas ne s'était jamais présenté. Mi-novembre, il s'est présenté une dizaine de fois en trois jours. À chaque fois, quelqu'un a regardé et décidé : continuer, ou changer d'approche.</p>

<h2>Là où la preuve reste une déclaration</h2>
<p>C'est ici qu'un lecteur sceptique trouvera à redire. Sur trois points, il aura raison.</p>
<p><strong>Le relecteur peut être le même modèle.</strong> Même agent, même compte, autre session. Repartir d'un contexte vierge limite le biais d'ancrage, sans garantir un regard différent. La machine vérifie que la session de revue n'est pas celle qui a écrit le code. Elle ne vérifie pas que la revue a réellement eu lieu.</p>
<p><strong>Les nombres de tests sont encore saisis à la main.</strong> Le contrôle établit que l'exécution citée est verte sur ce commit. Il ne recoupe pas le nombre de tests sautés. Notre règle ne détecterait donc que la moitié de l'incident qui l'a fait naître.</p>
<p><strong>La relecture de sécurité tient en une ligne.</strong> Le niveau de risque, lui, est fiable : il est calculé à partir des fichiers modifiés, et une demande de fusion ne peut pas l'abaisser. Au niveau élevé, la preuve doit contenir une relecture de sécurité. C'est l'agent relecteur qui l'écrit.</p>
<p>Reste une objection, qui porte un nom : la dette de compréhension. Nous comprenons moins le code livré. C'est vrai. Et je pense que notre place n'est plus là. Comprendre le code ligne à ligne est désormais la responsabilité des agents. Il y aura toujours un agent pour répondre au besoin technique. Notre responsabilité est de comprendre le besoin métier, et la façon de le résoudre. Les tests sur site diront si j'ai raison.</p>
<p>Je dois aussi une correction à mon billet d'août. J'y décrivais un périmètre gardé humain exprès, la surface joignable de l'extérieur. J'écrivais qu'une erreur à cet endroit devait obliger deux personnes à se parler. La règle exige toujours un non-auteur sur ce périmètre. Ce non-auteur peut aujourd'hui être un agent. Deux personnes ne se parlent donc plus forcément. Je l'assume, et je regarde ce que ça donne.</p>

<h2>Ce qui reste aux humains</h2>
<blockquote><p>L'important, c'est de comprendre le besoin métier et comment le résoudre. Le reste n'a plus d'importance.</p></blockquote>
<p>Dire ce qu'il faut construire, pourquoi, et dans quel ordre. Sur le dessin, c'est le chariot à gauche. Aucun agent ne le pousse.</p>
<p>Les trois décisions : trancher, passer outre, publier.</p>
<p>Comprendre le système dans son ensemble : ce que le logiciel doit garantir, et comment on le prouve. Le détail du code est l'affaire des agents.</p>
<p>Mettre le logiciel à l'épreuve sur site. Les premiers tests chez un établissement sont en cours. Je n'ai pas encore de chiffre à donner. Ce sont eux qui diront ce que vaut une fusion sans relecteur humain.</p>
<p>Et ce qui n'a jamais été fait. C'est là que les usines de 1969 ont échoué, d'après Cusumano. Rien ne me dit que celle de 2026 fera mieux quand le besoin lui-même est flou.</p>
<p>Deux questions restent ouvertes. Faut-il livrer tous les clients sur un même flot, en activant les fonctions par drapeaux ? Et la demande de fusion est-elle encore le bon objet, quand des agents en ouvrent plus vite qu'on ne peut les traiter ?</p>

<h2>Quoi faire lundi matin</h2>
<ol>
<li><strong>Dessinez votre chaîne, poste par poste.</strong> Marquez ce qui tourne et ce qui est une cible. Un schéma honnête est souvent plus modeste que le discours.</li>
<li><strong>Remplacez l'approbation par une preuve.</strong> Elle cite un commit et une exécution, et une machine vérifie les deux.</li>
<li><strong>Écrivez ce qui reste déclaratif.</strong> Notre documentation le fait, noir sur blanc. C'est la partie que je relis le plus.</li>
<li><strong>Bornez la boucle de correction.</strong> Un nombre de tours, puis un humain. Chez nous, la limite sert.</li>
<li><strong>Passez votre temps sur le besoin.</strong> C'est la seule entrée de la chaîne, et la seule que personne ne peut tenir à votre place.</li>
</ol>
<p><strong>Lire la suite de la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">Le SDLC est mort</a> : le point de départ, que ce billet précise. <a target="_blank" rel="noopener noreferrer" href="/posts/quality-is-executed">La qualité ne se relit pas. Elle s'exécute.</a> : les contrôles sur lesquels cette chaîne repose. <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">La doctrine capitalise. Pas les modèles.</a> : pourquoi les règles vivent dans le dépôt. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100 % écrit par des agents</a> : le point d'étape de juillet.</p>
<hr>
<h2>Sources</h2>
<ul>
<li>Michael A. Cusumano, « The Software Factory: A Historical Interpretation », <em>IEEE Software</em>, mars 1989, et <a target="_blank" rel="noopener noreferrer" href="https://dspace.mit.edu/handle/1721.1/47992">« Factory Concepts and Practices in Software Development: An Historical Overview »</a> (MIT) : Bemer en 1968, Hitachi en 1969, l'usine de System Development Corporation et sa fin. Travail d'historien, sur archives et entretiens. C'est la source de toute la première partie.</li>
<li>Jack Greenfield et Keith Short, <em>Software Factories: Assembling Applications with Patterns, Models, Frameworks, and Tools</em> (Wiley, 2004) : la version Microsoft du mot. C'est le livre d'un éditeur d'outils, à lire comme une promesse.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://simonwillison.net/2026/Feb/7/software-factory/">Simon Willison, « Software Factory » (7 février 2026)</a> : compte rendu d'une visite chez StrongDM. À garder : les scénarios cachés aux agents. À laisser : les montants déclarés par l'entreprise, jamais recoupés. Projet neuf, trois personnes, aucun résultat publié depuis.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.warp.dev/articles/self-improvement-loop-software-factory">Warp, sur la boucle d'amélioration d'une software factory (2026)</a> : l'idée des deux boucles vient de là. C'est un éditeur qui vend l'outillage correspondant. J'en reprends l'idée, sans les chiffres.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://addyosmani.com/blog/comprehension-debt/">Addy Osmani, « Comprehension Debt » (2026)</a> : le nom de l'objection à laquelle je réponds. Un essai de praticien, sans mesure à l'appui.</li>
<li>Solstice* : la règle de preuve, les ordres de grandeur sur les demandes de fusion, les blocages au quatrième tour et les trois décisions viennent du dépôt, relevés le 16 novembre 2026. Les chiffres sont arrondis exprès. Interne, sans lien : le nom de code est fictif et le projet réel, ses produits et son éditeur sont anonymisés.</li>
</ul>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}
