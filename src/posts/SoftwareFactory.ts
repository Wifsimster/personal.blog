import type { PostMetadata, PostContent } from '@/lib/posts'

export const metadata: PostMetadata = {
  slug: 'software-factory',
  date: '2026-11-16',
  tags: ['Software', 'AI', 'Opinion'],
  draft: true
}

const englishContent: PostContent = {
  title: "Software Factory: Where the Word Comes From, and What We Do With It",
  description: "The term dates back to General Electric and Hitachi, and every revival since has industrialised what surrounds the programmer. The agent-era version goes after the development cycle itself. A field report from a regulated hospital ERP: the history, the line as we drew it, the part that actually runs, and the limits of merging on machine-checked evidence.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> "Software factory" is a word from 1968. Since then, each generation of factory has standardised something around the developer: tools, process, models, the pipeline. The station where code gets written stayed human. In 2026 the word means something else: the whole <abbr title="Software Development Life Cycle: the path from need to delivery">SDLC</abbr> seen as one line, with agents at the stations. On <abbr title="Fictitious codename: the real project, its products and its vendor are anonymized.">Solstice*</abbr>, we run the middle of it: code, tests, review, correction. Since 14 October, a merge no longer waits for a human approval but for a proof the machine checks. Specification and delivery are still a target. Three human decisions are left, and a proof that is still partly declarative.</p></div>
<hr>
<p>The word is fifty-eight years old, and it has already failed several times.</p>
<p>In late October, at <abbr title="BDX I/O: yearly tech conference in Bordeaux, France, held on 29 and 30 October 2026">BDX I/O</abbr>, "software factory" kept coming back in the talk about agents. Two weeks later I made it the thread of the year review I gave my team. Before saying what we do with it, I have to say where it comes from. Its history is why I handle it with care.</p>

<h2>Where the word comes from</h2>
<p>In 1968, <abbr title="Robert W. Bemer: American computer scientist, one of the fathers of ASCII">R. W. Bemer</abbr>, an engineer at General Electric, proposes a "software factory". His idea: reduce the productivity gaps between programmers with standard tools and a database of measurements. The same year, <abbr title="M. Douglas McIlroy: Bell Labs researcher, the mind behind Unix pipes">Doug McIlroy</abbr> argues for mass-produced software components.</p>
<p>According to the historian <abbr title="Michael Cusumano: MIT professor, author of Japan's Software Factories (1991)">Michael Cusumano</abbr>, Hitachi opens the first site to carry the name in 1969. The large Japanese manufacturers follow. In the United States, System Development Corporation sets up its own in the mid-1970s. It lapses in under three years.</p>
<p>Cusumano's reading fits in one sentence: the factory worked for families of similar products, and far less for anything new.</p>
<p>In 2004, Microsoft picks the word up again. Jack Greenfield and Keith Short promise to assemble applications from models and dedicated languages. Then <abbr title="DevOps: bringing development and operations together, tooled by continuous integration and deployment">DevOps</abbr> recycles it once more: in French, "usine logicielle" ends up meaning the integration and deployment toolchain.</p>
<svg viewBox="0 0 640 276" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="From 1968 to 2026, each generation of software factory standardised something else: tools, process, models, the pipeline. Code was still written by hand until the latest one, where agents hold the stations." class="diagram-svg diagram-wide">
<text x="32" y="32" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14.5" font-weight="600" opacity="0.55" letter-spacing="0.14em">WHAT EACH FACTORY STANDARDISED</text>
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
<svg viewBox="0 0 320 452" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="From 1968 to 2026, each generation of software factory standardised something else: tools, process, models, the pipeline. Code was still written by hand until the latest one, where agents hold the stations." class="diagram-svg diagram-narrow">
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
<p>Four factories, one blind spot. Each industrialised what surrounds the programmer. None touched the act of writing.</p>
<blockquote><p>For close to sixty years, the factory standardised everything except the station where the writing happens.</p></blockquote>

<h2>What the word means now</h2>
<p>The 2026 meaning starts from that station. A software factory is now a line where the need goes in at one end and the delivery comes out at the other. Agents hold the stations in between.</p>
<p>The account that revived the word is the one from <abbr title="StrongDM: US vendor of access-management software">StrongDM</abbr>, in February. Three engineers and one rule: no human writes or reviews the code. Scenarios hidden from the agents judge the outcome. <abbr title="Simon Willison: British developer and writer, co-creator of the Django framework">Simon Willison</abbr>, who visited the team, calls it a glimpse of one possible future. He also doubts that dropping review is reasonable.</p>
<p>I keep the mechanism, the scenarios the agent cannot see. I leave the figures in that account alone: nobody has cross-checked them.</p>
<p>Here is the line as I drew it for my team. These are the SDLC steps, in order, on a single conveyor.</p>
<picture class="iso-scene"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/software-factory/factory-en-still.webp"><img src="/visuals/software-factory/factory-en.webp" alt="Animated isometric scene of a software line: the human need enters on the left, a lot goes through the spec, code, tests and review stations, is refused, takes the correction lane back, runs the tests and the review again, then is delivered to the customer." width="1120" height="620" loading="lazy" decoding="async" data-gallery-image="true"></picture>
<p>The lot carries three boxes: S for the specification, C for the code, T for the tests. Each one fills at the station that produces it. The need is not a station: it is the input, and it stays human.</p>
<p>The blue lane matters more than the conveyor. A lot refused at review does not ship "with reservations". It goes back to code, runs the same tests, then gets a new review.</p>
<blockquote><p>A fix voids the evidence. You replay it. You do not copy it over.</p></blockquote>
<p>In March I wrote that the SDLC was dead. Let me be precise: every one of its steps is on this drawing. What goes away is the handoff between people, and the wait at each one.</p>

<h2>What we do with it</h2>
<p>This drawing is a target, not our current state. On Solstice*, a hospital <abbr title="Enterprise Resource Planning: the administrative backbone of a hospital group">ERP</abbr>, the middle of the line runs: agents write the code and its tests, the integration pipeline executes them, an agent reviews in a separate session. The two ends do not run. Turning meeting transcripts into a specification is a trial. Automatic delivery stops at the development environment.</p>
<p>The clearest step dates from 14 October. That day, the main branch stopped requiring an approval. A required check asks for a review proof in its place. The proof names the commit that was reviewed and one run of the integration pipeline. The machine then checks for itself that this run exists, covers this code and ended in success.</p>
<p>The rule comes from an incident. An approval stated 1,781 tests, zero failures, green pipeline. In fact 21 tests had been skipped and the run had failed. The reviewer noticed on his own, eight minutes later. No machine had seen it.</p>
<p>Our documentation keeps one line of it: a count of green tests says nothing about the files that never ran. An approval is an opinion. A proof can be checked.</p>
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
<p>A factory also has to improve its own stations. We did it once, in August, on 47 sets of agent instructions. Old and new versions replayed four frozen tasks, and a judge compared them without knowing which was which. 46 new versions kept, one old version retained. Once, by hand: that is not a loop yet.</p>

<h2>Where the proof is still a statement</h2>
<p>A hostile reader will strike here, and will be right on four counts.</p>
<p><strong>The reviewer can be the same model.</strong> Same agent, same account, a different session. A fresh context reduces anchoring. It proves no diversity of judgement. The machine checks that the review session differs from the commit sessions. It does not check that the review happened anywhere other than in a form.</p>
<p><strong>Test counts are still typed in.</strong> The check establishes that the cited run is green on that commit. It does not cross-check how many tests were skipped. So the rule born from the incident would catch only half of the incident.</p>
<p><strong>The security pass is one line.</strong> The risk tier is solid: it is computed from the changed paths, and a pull request cannot lower it. At the high tier, the proof must contain a security pass. The reviewing agent writes it.</p>
<p><strong>The loop limit has never fired.</strong> At the fourth refused review round, the merge blocks until a developer decides. That case has not come up. It is a design, not a result.</p>
<p>Add one debt that nothing counts: we understand less of the code we ship. None of our checks measures what nobody can explain any more.</p>
<p>I also owe my August post a correction. It described one perimeter kept human on purpose, the surface reachable from outside. I wrote that this kind of mistake should cost a conversation. The rule still demands a non-author on that perimeter. Today that non-author can be an agent. The conversation became optional, and I do not know yet which of the two posts is right.</p>

<h2>What still belongs to humans</h2>
<p>The need. Saying what to build, why, and in what order. On the drawing it is the cart on the left, and no agent pushes it.</p>
<p>The three decisions: arbitrate, override, release.</p>
<p>Still understanding what we ship. Reading code is what lets you write a good intention and handle an exception.</p>
<p>Proving it on site. The first tests in a hospital are under way. I have no number to give yet. They will tell what a merge without a human reviewer is worth.</p>
<p>And the new. That is where the 1969 factories stalled, by Cusumano's account. Nothing tells me the 2026 one will do better when the need itself is vague.</p>
<p>Two questions stay open. Should every customer ship on one release train, with features switched on by flags? And is the pull request still the right object, when agents open them faster than a queue drains?</p>

<h2>What to do Monday morning</h2>
<ol>
<li><strong>Draw your line, station by station.</strong> Mark what runs and what is a target. The honest drawing is often shorter than the pitch.</li>
<li><strong>Replace the approval with a proof.</strong> It names a commit and a run, and a machine checks both.</li>
<li><strong>Write down what stays declarative.</strong> Our documentation does, in plain words. It is the part I reread most.</li>
<li><strong>Bound the correction loop.</strong> A number of rounds, then a person. Even if the limit never fires.</li>
<li><strong>Keep the need off the line.</strong> It is the input. The day an agent fills it alone, you no longer have a factory, you have a generator.</li>
</ol>
<p><strong>Read the rest of the series:</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">The SDLC Is Dead</a>. Where this started, and what this post sharpens. <a target="_blank" rel="noopener noreferrer" href="/posts/quality-is-executed">Quality Isn't Read. It's Executed.</a> The checks this line rests on. <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">Doctrine Compounds. Models Don't.</a> Why the rules live in the repository. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100% Agent-Written</a>. The July checkpoint.</p>
<hr>
<h2>Sources</h2>
<ul>
<li>Michael A. Cusumano, "The Software Factory: A Historical Interpretation", <em>IEEE Software</em>, March 1989, and <a target="_blank" rel="noopener noreferrer" href="https://dspace.mit.edu/handle/1721.1/47992">"Factory Concepts and Practices in Software Development: An Historical Overview"</a> (MIT): Bemer in 1968, Hitachi in 1969, the System Development Corporation factory and its end. A historian's work, from archives and interviews. It is the source for the whole first part.</li>
<li>Jack Greenfield and Keith Short, <em>Software Factories: Assembling Applications with Patterns, Models, Frameworks, and Tools</em> (Wiley, 2004): the Microsoft version of the word. A tool vendor's book: read it as a promise, not as a track record.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://simonwillison.net/2026/Feb/7/software-factory/">Simon Willison, "Software Factory" (7 February 2026)</a>: write-up of a visit to StrongDM. Keep the scenarios hidden from the agents. Discard the amounts the company reports, never cross-checked. Greenfield, three people, no outcome published since.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://addyosmani.com/blog/comprehension-debt/">Addy Osmani, "Comprehension Debt" (2026)</a>: the name of the debt I describe. A practitioner's essay, not a measurement.</li>
<li>Solstice*: the proof rule, the 469 PRs and the three decisions come from the repository, as read on 9 November 2026. Internal, no links: the codename is fictitious and the real project, its products and its vendor are anonymized.</li>
</ul>`
}

const frenchContent: PostContent = {
  title: "Software factory : d’où vient le mot, et ce que nous en faisons",
  description: "Le terme remonte à General Electric et à Hitachi, et chacune de ses résurrections a industrialisé ce qui entoure le programmeur. La version de l'ère des agents s'attaque au cycle de développement lui-même. Retour de terrain sur un ERP hospitalier régulé : l'histoire, la chaîne telle que nous l'avons dessinée, la partie qui tourne vraiment, et les limites d'une fusion sur preuve.",
  html: `<div class="post-tldr"><p><strong>TL;DR</strong> « Software factory » est un mot de 1968. Depuis, chaque génération d'usine a standardisé quelque chose autour du développeur : les outils, le procédé, les modèles, le pipeline. Le poste où l'on écrit le code restait humain. En 2026, le mot désigne autre chose : le <abbr title="Software Development Life Cycle : le cycle de développement logiciel, du besoin à la livraison">SDLC</abbr> entier vu comme une chaîne, avec des agents aux postes. Sur <abbr title="Nom de code fictif : le projet réel, ses produits et son éditeur sont anonymisés.">Solstice*</abbr>, nous en faisons tourner le milieu : code, tests, revue, correction. Depuis le 14 octobre, une fusion n'attend plus d'approbation humaine mais une preuve vérifiée par la machine. La spécification et la livraison restent une cible. Il reste trois décisions humaines, et une preuve encore en partie déclarative.</p></div>
<hr>
<p>Le mot a cinquante-huit ans, et il a déjà échoué plusieurs fois.</p>
<p>Fin octobre, à <abbr title="BDX I/O : conférence technique annuelle à Bordeaux, tenue les 29 et 30 octobre 2026">BDX I/O</abbr>, « software factory » revenait dans les conversations sur les agents. Deux semaines plus tard, j'en ai fait le fil du bilan d'année présenté à mon équipe. Avant de dire ce que nous en faisons, il faut dire d'où il vient. Son histoire explique pourquoi je m'en méfie.</p>

<h2>D'où vient le mot</h2>
<p>En 1968, <abbr title="Robert W. Bemer : informaticien américain, l'un des pères du code ASCII">R. W. Bemer</abbr>, ingénieur chez General Electric, propose une « software factory ». Son idée : réduire les écarts de productivité entre programmeurs par des outils standardisés et une base de mesures. La même année, <abbr title="M. Douglas McIlroy : chercheur des Bell Labs, à l'origine des tubes Unix">Doug McIlroy</abbr> plaide pour des composants logiciels produits en série.</p>
<p>D'après l'historien <abbr title="Michael Cusumano : professeur au MIT, auteur de Japan's Software Factories (1991)">Michael Cusumano</abbr>, Hitachi ouvre en 1969 le premier site à porter ce nom. Les grands industriels japonais suivent. Aux États-Unis, System Development Corporation monte la sienne au milieu des années 1970. Elle s'éteint en moins de trois ans.</p>
<p>La lecture de Cusumano tient en une phrase : l'usine marchait pour des familles de produits qui se ressemblent, beaucoup moins pour l'inédit.</p>
<p>En 2004, Microsoft reprend le mot. Jack Greenfield et Keith Short promettent d'assembler des applications à partir de modèles et de langages dédiés. Puis le <abbr title="DevOps : rapprochement du développement et de l'exploitation, outillé par l'intégration et le déploiement continus">DevOps</abbr> le recycle encore : en français, « usine logicielle » finit par désigner la chaîne d'intégration et de déploiement.</p>
<svg viewBox="0 0 640 276" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="De 1968 à 2026, chaque génération d'usine logicielle a standardisé autre chose : les outils, le procédé, les modèles, le pipeline. Le code restait écrit à la main jusqu'à la dernière, où des agents tiennent les postes." class="diagram-svg diagram-wide">
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
<text x="383" y="146" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">le pipeline</text>
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
<svg viewBox="0 0 320 452" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="De 1968 à 2026, chaque génération d'usine logicielle a standardisé autre chose : les outils, le procédé, les modèles, le pipeline. Le code restait écrit à la main jusqu'à la dernière, où des agents tiennent les postes." class="diagram-svg diagram-narrow">
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
<text x="128" y="314" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">le pipeline</text>
<text x="128" y="331" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">DevOps</text>
<rect x="32" y="348" width="256" height="46" rx="8" fill="currentColor" fill-opacity="0.34" stroke="currentColor" stroke-opacity="0.22" stroke-width="1"></rect>
<text x="46" y="378" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="22" font-weight="650">2026</text>
<text x="128" y="368" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-weight="600">les postes</text>
<text x="128" y="385" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" opacity="0.7">agents</text>
<text x="32" y="420" fill="currentColor" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" font-style="italic" opacity="0.6">1968, 1969 : Cusumano (1989)</text>
</svg>
<p>Quatre usines, et le même angle mort. Chacune a industrialisé ce qui entoure le programmeur. Aucune n'a touché au geste d'écrire.</p>
<blockquote><p>Pendant près de soixante ans, l'usine a tout standardisé sauf le poste où l'on écrit.</p></blockquote>

<h2>Ce que le mot désigne aujourd'hui</h2>
<p>Le sens de 2026 part de ce poste-là. Une software factory est maintenant une chaîne où le besoin entre d'un côté et la livraison sort de l'autre. Des agents tiennent les postes intermédiaires.</p>
<p>Le récit qui a relancé le mot est celui de <abbr title="StrongDM : éditeur américain de logiciels de gestion des accès">StrongDM</abbr>, en février. Trois ingénieurs, et une règle : aucun humain n'écrit ni ne relit le code. Des scénarios cachés aux agents jugent le résultat. <abbr title="Simon Willison : développeur et auteur britannique, cocréateur du framework Django">Simon Willison</abbr>, qui a visité l'équipe, y voit un aperçu d'un futur possible. Il doute aussi que l'absence de revue soit raisonnable.</p>
<p>Je garde le mécanisme, les scénarios que l'agent ne voit pas. Je laisse les chiffres du récit : personne ne les a recoupés.</p>
<p>Voici la chaîne telle que je l'ai dessinée pour mon équipe. Ce sont les étapes du SDLC, dans l'ordre, sur un seul convoyeur.</p>
<picture class="iso-scene"><source media="(prefers-reduced-motion: reduce)" srcset="/visuals/software-factory/factory-fr-still.webp"><img src="/visuals/software-factory/factory-fr.webp" alt="Scène isométrique animée d'une chaîne logicielle : le besoin humain entre à gauche, un lot traverse les postes spec, code, tests et revue, est refusé, repart par la voie de correction, repasse les tests et la revue, puis est livré au client." width="1120" height="620" loading="lazy" decoding="async" data-gallery-image="true"></picture>
<p>Le lot porte trois cases : S pour la spécification, C pour le code, T pour les tests. Chacune se remplit au poste qui la produit. Le besoin, lui, n'est pas un poste : c'est l'entrée, et elle reste humaine.</p>
<p>La voie bleue compte plus que le convoyeur. Un lot refusé en revue ne part pas « avec réserve ». Il retourne au code, repasse les mêmes tests, puis une nouvelle revue.</p>
<blockquote><p>Une correction invalide les preuves. On les rejoue, on ne les recopie pas.</p></blockquote>
<p>En mars, j'écrivais que le SDLC était mort. Je précise : ses étapes sont toutes sur ce dessin. Ce qui disparaît, ce sont les passages de relais entre personnes, et l'attente à chacun d'eux.</p>

<h2>Ce que nous en faisons</h2>
<p>Ce dessin est une cible, pas notre état. Sur Solstice*, un <abbr title="Enterprise Resource Planning : la colonne vertébrale administrative d'un groupement hospitalier">ERP</abbr> hospitalier, le milieu de la chaîne tourne : des agents écrivent le code et ses tests, la chaîne d'intégration les exécute, un agent relit dans une session séparée. Les deux bouts ne tournent pas. La spécification tirée des comptes rendus de réunion est un essai. La livraison automatique s'arrête à l'environnement de développement.</p>
<p>Le pas le plus net date du 14 octobre. Ce jour-là, la branche principale a cessé d'exiger une approbation. À la place, un contrôle obligatoire réclame une preuve de revue. La preuve cite le commit relu et une exécution de la chaîne d'intégration. La machine va vérifier elle-même que cette exécution existe, porte sur ce code et s'est terminée en succès.</p>
<p>La règle vient d'un incident. Une approbation annonçait 1 781 tests, zéro échec, chaîne verte. En réalité, 21 tests avaient été sautés et l'exécution avait échoué. Le relecteur s'en est aperçu seul, huit minutes plus tard. Aucune machine ne l'avait vu.</p>
<p>Notre documentation en garde une ligne : un décompte de tests verts n'atteste rien sur les fichiers qui n'ont pas tourné. Une approbation est un avis. Une preuve se vérifie.</p>
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
<p>Une usine doit aussi améliorer ses propres postes. Nous l'avons fait une fois, en août, sur 47 jeux de consignes pour agents. Ancienne et nouvelle version rejouaient quatre tâches gelées, et un juge comparait sans savoir laquelle était laquelle. 46 nouvelles versions gardées, une ancienne conservée. Une fois, à la main : ce n'est pas encore une boucle.</p>

<h2>Là où la preuve reste une déclaration</h2>
<p>Un lecteur hostile attaquera ici, et il aura raison sur quatre points.</p>
<p><strong>Le relecteur peut être le même modèle.</strong> Même agent, même compte, autre session. Un contexte neuf réduit l'ancrage. Il ne prouve aucune diversité de jugement. La machine vérifie que la session de revue diffère de celles des commits. Elle ne vérifie pas que la revue a eu lieu ailleurs que dans un formulaire.</p>
<p><strong>Les décomptes de tests sont encore tapés.</strong> Le contrôle établit que l'exécution citée est verte sur ce commit. Il ne recoupe pas le nombre de tests sautés. La règle née de l'incident n'attraperait donc que la moitié de l'incident.</p>
<p><strong>La passe de sécurité est une ligne.</strong> Le niveau de risque est solide : il se calcule depuis les chemins modifiés, et une proposition ne peut pas l'abaisser. Au niveau élevé, la preuve doit contenir une passe de sécurité. C'est l'agent relecteur qui l'écrit.</p>
<p><strong>La limite de boucle n'a jamais servi.</strong> Au quatrième tour de revue refusé, la fusion se bloque jusqu'à la décision d'un développeur. Ce cas ne s'est pas présenté. C'est un dessin, pas un résultat.</p>
<p>J'ajoute une dette que rien ne compte : nous comprenons moins le code livré. Aucun de nos contrôles ne mesure ce que plus personne ne sait expliquer.</p>
<p>Et je dois une correction à mon billet d'août. J'y décrivais un périmètre gardé humain exprès, la surface joignable de l'extérieur. J'écrivais que cette erreur-là devait coûter une conversation. La règle exige toujours un non-auteur sur ce périmètre. Ce non-auteur peut aujourd'hui être un agent. La conversation est devenue facultative, et je ne sais pas encore lequel des deux billets a raison.</p>

<h2>Ce qui reste aux humains</h2>
<p>Le besoin. Dire ce qu'il faut construire, pourquoi, et dans quel ordre. Sur le dessin, c'est le chariot à gauche, et aucun agent ne le pousse.</p>
<p>Les trois décisions : trancher, passer outre, publier.</p>
<p>Comprendre encore ce qu'on livre. Savoir lire du code reste ce qui permet d'écrire une bonne intention et de traiter une exception.</p>
<p>Éprouver sur site. Les premiers tests chez un établissement sont en cours. Je n'ai pas encore de chiffre à donner. Ce sont eux qui diront ce que vaut une fusion sans relecteur humain.</p>
<p>Et l'inédit. C'est là que les usines de 1969 ont calé, d'après Cusumano. Rien ne me prouve que celle de 2026 fera mieux quand le besoin lui-même est flou.</p>
<p>Deux questions restent ouvertes. Faut-il livrer tous les clients sur un même flot, en activant les fonctions par drapeaux ? Et la PR est-elle encore le bon objet, quand des agents en ouvrent plus vite qu'une file ne se vide ?</p>

<h2>Quoi faire lundi matin</h2>
<ol>
<li><strong>Dessinez votre chaîne, poste par poste.</strong> Marquez ce qui tourne et ce qui est une cible. Le dessin honnête est souvent plus court que le discours.</li>
<li><strong>Remplacez l'approbation par une preuve.</strong> Elle cite un commit et une exécution, et une machine va vérifier les deux.</li>
<li><strong>Écrivez ce qui reste déclaratif.</strong> Notre documentation le fait, noir sur blanc. C'est la partie que je relis le plus.</li>
<li><strong>Bornez la boucle de correction.</strong> Un nombre de tours, puis un humain. Même si la limite ne sert jamais.</li>
<li><strong>Gardez le besoin hors de la chaîne.</strong> C'est l'entrée. Le jour où un agent la remplit seul, vous n'avez plus une usine, vous avez un générateur.</li>
</ol>
<p><strong>Lire la suite de la série :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">Le SDLC est mort</a> : le point de départ, que ce billet précise. <a target="_blank" rel="noopener noreferrer" href="/posts/quality-is-executed">La qualité ne se relit pas. Elle s'exécute.</a> : les contrôles sur lesquels cette chaîne repose. <a target="_blank" rel="noopener noreferrer" href="/posts/doctrine-as-code">La doctrine capitalise. Pas les modèles.</a> : pourquoi les règles vivent dans le dépôt. <a target="_blank" rel="noopener noreferrer" href="/posts/ai-agents-h1-2026-verdict">100 % écrit par des agents</a> : le point d'étape de juillet.</p>
<hr>
<h2>Sources</h2>
<ul>
<li>Michael A. Cusumano, « The Software Factory: A Historical Interpretation », <em>IEEE Software</em>, mars 1989, et <a target="_blank" rel="noopener noreferrer" href="https://dspace.mit.edu/handle/1721.1/47992">« Factory Concepts and Practices in Software Development: An Historical Overview »</a> (MIT) : Bemer en 1968, Hitachi en 1969, l'usine de System Development Corporation et sa fin. Travail d'historien, sur archives et entretiens. C'est la source de toute la première partie.</li>
<li>Jack Greenfield et Keith Short, <em>Software Factories: Assembling Applications with Patterns, Models, Frameworks, and Tools</em> (Wiley, 2004) : la version Microsoft du mot. Un livre d'éditeur d'outils : à lire comme une promesse, pas comme un bilan.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://simonwillison.net/2026/Feb/7/software-factory/">Simon Willison, « Software Factory » (7 février 2026)</a> : compte rendu d'une visite chez StrongDM. À garder : les scénarios cachés aux agents. À laisser : les montants déclarés par l'entreprise, jamais recoupés. Projet neuf, trois personnes, aucun résultat publié depuis.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://addyosmani.com/blog/comprehension-debt/">Addy Osmani, « Comprehension Debt » (2026)</a> : le nom de la dette que je décris. Un essai de praticien, pas une mesure.</li>
<li>Solstice* : la règle de preuve, les 469 PR et les trois décisions viennent du dépôt, relevé du 9 novembre 2026. Interne, sans lien : le nom de code est fictif et le projet réel, ses produits et son éditeur sont anonymisés.</li>
</ul>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}
