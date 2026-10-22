import type { PostMetadata, PostContent } from '@/lib/posts'

export const metadata: PostMetadata = {
  slug: 'ai-market-segmentation',
  date: '2026-04-12',
  tags: ['AI', 'Opinion']
}

const frenchContent: PostContent = {
  title: 'Le marché à deux IA que personne ne veut voir',
  description: 'OpenAI lance une offre à 109 €/mois entre le Plus et le Pro. On construit sans le dire un marché à deux vitesses : l\'IA cheap que tout le monde commente, et l\'IA premium que personne ne connaît. Le débat public est biaisé à la source.',
  html: `<p><strong>TL;DR :</strong> OpenAI vient de lancer un plan à 109 € par mois. Entre le Plus à 23 € et le Pro à 229 €, ciblé sur les développeurs Codex, avec cinq fois plus d'usage. On est en train de construire, sans le dire, un marché à deux IA. D'un côté les plans gratuits et bon marché avec des modèles bridés. De l'autre les plans premium où l'IA est réellement transformatrice. Le problème : le débat public se base sur la première. Et ça fausse tout.</p>
<hr>
<p>Dans mes deux articles précédents, j'ai argumenté que <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">le SDLC est mort</a> et que <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">coder n'a jamais été le métier</a>. Je parlais du processus et des rôles. Mais il y a un sujet bien plus dérangeant — et personne ne veut le regarder en face.</p>
<p>Quand OpenAI annonce un plan à 109 € par mois, coincé entre le Plus à 23 € et le Pro à 229 €, ce n'est pas un ajustement tarifaire. C'est un aveu. L'aveu d'un phénomène que j'observe depuis des mois et dont le débat public refuse de parler : <strong>on n'utilise pas tous la même IA.</strong> Et tout ce qu'on raconte à son sujet est truqué depuis le départ.</p>

<h2>Deux IA, un seul nom</h2>
<p>Regardez <a target="_blank" rel="noopener noreferrer" href="https://openai.com/chatgpt/pricing/">la grille tarifaire d'OpenAI</a> aujourd'hui. Gratuit. Plus à 23 €. Le nouveau plan à 109 €. <a target="_blank" rel="noopener noreferrer" href="https://openai.com/index/introducing-chatgpt-pro/">Pro à 229 €</a>. Quatre niveaux. Quatre expériences radicalement différentes. <em>(Sources : <a target="_blank" rel="noopener noreferrer" href="https://openai.com/chatgpt/pricing/">openai.com/chatgpt/pricing</a>, <a target="_blank" rel="noopener noreferrer" href="https://openai.com/index/introducing-chatgpt-pro/">openai.com/index/introducing-chatgpt-pro</a>.)</em></p>
<p>Sur le plan gratuit, vous avez un modèle bridé, des quotas serrés, des temps de réponse dégradés aux heures de pointe, et un accès limité aux derniers modèles. Sur le Plus à 23 €, c'est mieux — mais les quotas restent contraignants, surtout si vous travaillez sérieusement. Vous touchez le plafond en milieu de journée. Vous attendez. Vous reformulez pour économiser des tokens. <strong>Vous adaptez votre façon de travailler aux limites de l'outil au lieu de l'inverse.</strong></p>
<p>Sur le plan à 109 €, cinq fois plus de capacité. Accès prioritaire à Codex et aux modèles les plus puissants. Sur le Pro à 229 €, usage quasi illimité des meilleurs modèles, mode recherche approfondie, capacités étendues.</p>
<p>Même marque. Même interface. Même nom. <strong>Mais ce ne sont pas les mêmes produits.</strong></p>
<blockquote><p>"Ce n'est pas la même IA à deux prix. Ce sont deux IA sous le même nom. L'une donne une impression. L'autre transforme une carrière."</p></blockquote>
<p>Et OpenAI n'est pas seul. Anthropic a <a target="_blank" rel="noopener noreferrer" href="https://www.anthropic.com/pricing">son offre Max à 109 € et 229 € pour Claude</a>. Google pousse <a target="_blank" rel="noopener noreferrer" href="https://gemini.google/subscriptions/">Gemini Advanced</a>. Tous construisent la même structure : une vitrine gratuite pour les masses, et un vrai produit pour ceux qui paient.</p>

<h2>Le fossé d'expérience</h2>
<p>Ce n'est pas juste une question de quotas. C'est une question d'expérience qualitative.</p>
<p>La personne sur le plan gratuit interagit avec un modèle qui hallucine plus souvent, qui a moins de contexte, qui refuse plus de requêtes, qui produit des réponses plus génériques. Elle en tire la conclusion logique : <strong>"l'IA, c'est impressionnant mais pas fiable."</strong></p>
<p>La personne sur le plan à 229 € utilise le même nom de modèle — mais avec un contexte étendu, une capacité de raisonnement profond, un accès aux outils avancés, et des quotas qui permettent un vrai flux de travail continu. Elle en tire une conclusion très différente : <strong>"l'IA a changé ma façon de travailler."</strong></p>
<p>Ces deux personnes parlent de "ChatGPT". Elles parlent de "Claude". Elles pensent parler de la même chose. <strong>Elles ne parlent pas de la même chose.</strong></p>
<p>C'est comme si quelqu'un jugeait la photographie après avoir utilisé un appareil jetable, pendant qu'un autre travaille avec un Hasselblad. Ils parlent tous les deux de "prendre des photos". Mais l'un capture des souvenirs flous et l'autre produit des œuvres.</p>
<blockquote><p>"Le fossé entre l'IA gratuite et l'IA premium n'est pas un écart de performance. C'est un écart d'époque."</p></blockquote>

<h2>Le débat public est biaisé à la source</h2>
<p>Et c'est là que ça devient un vrai problème.</p>
<p>Le débat public sur l'IA — celui qui façonne les régulations, les politiques d'entreprise, les décisions d'investissement, l'opinion publique — se base très majoritairement sur l'expérience de l'IA gratuite ou bon marché.</p>
<p><strong>Les journalistes</strong> qui couvrent l'IA utilisent presque tous le plan gratuit ou le Plus à 23 €. Ils testent ChatGPT, constatent des hallucinations, écrivent un article sur "les limites de l'IA". Leur conclusion est honnête — mais elle est basée sur un produit bridé, volontairement. C'est comme tester une Ferrari avec le frein à main serré, conclure que les voitures de sport c'est surfait, et vendre la conclusion en Une.</p>
<p><strong>Les régulateurs</strong> ont vu une démo. Peut-être deux. Probablement sur un compte gratuit, probablement préparée par un assistant qui n'utilise pas l'IA au quotidien. Ils légifèrent sur une technologie qu'ils n'ont jamais utilisée dans un workflow réel pendant une semaine complète. <a target="_blank" rel="noopener noreferrer" href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj">L'EU AI Act</a> est un texte massif. Combien de ses rédacteurs ont utilisé un plan Pro pendant un mois pour comprendre ce que la technologie fait vraiment ?</p>
<p><strong>Les élus</strong> ont entendu que "ChatGPT hallucine". Que l'IA génère du contenu faux. Que c'est dangereux. Et ils n'ont pas tort — sur le plan gratuit, c'est souvent le cas. Mais personne ne leur a montré ce que fait un modèle de raisonnement avancé avec un contexte d'un million de tokens sur un problème structuré.</p>
<p><strong>Les dirigeants d'entreprise</strong> qui décident de la stratégie IA de leur organisation ont souvent la même expérience limitée. Ils ont essayé ChatGPT un samedi après-midi, lui ont demandé d'écrire un mail, ont trouvé ça "sympa mais pas révolutionnaire", et ont décidé que l'IA pouvait attendre 2027 dans la roadmap.</p>
<blockquote><p>"On légifère l'avenir de l'IA avec l'expérience d'un compte gratuit. C'est comme piloter un Rafale après avoir fait voler un cerf-volant. Les deux quittent le sol. Ce n'est pas la même guerre."</p></blockquote>

<h2>Ceux qui savent ne parlent pas</h2>
<p>Pendant ce temps, une minorité silencieuse vit dans une réalité technologique différente.</p>
<p>Le développeur qui paie 109 € ou 229 € par mois ne perd pas son temps à débattre sur LinkedIn de savoir si l'IA est utile. Il est trop occupé à livrer en une matinée ce qui prenait une semaine. Il ne commente pas les articles "l'IA va-t-elle remplacer les développeurs ?" — il est en train de vivre la réponse.</p>
<p>Le chercheur qui utilise Claude Pro avec un contexte d'un million de tokens ne débat pas de savoir si l'IA hallucine. Il a appris à structurer ses requêtes, à vérifier les sorties, à utiliser l'outil dans un workflow qui produit des résultats fiables. Les hallucinations existent — mais dans un contexte structuré avec un modèle avancé, elles sont gérables, identifiables, et de moins en moins fréquentes.</p>
<p><strong>Il y a un silence asymétrique.</strong> Ceux qui ont l'expérience la plus profonde de l'IA sont ceux qui en parlent le moins publiquement. Ils n'ont rien à prouver. Ils n'ont pas besoin de convaincre. Ils travaillent. Et le fossé entre leur réalité et le débat public se creuse chaque mois.</p>
<blockquote><p>"Le silence n'est pas neutre. Ceux qui vivent le vrai produit travaillent. Ceux qui ne connaissent que la vitrine commentent. Devinez lequel des deux groupes façonne l'opinion publique."</p></blockquote>

<h2>Ce que ça signifie vraiment</h2>
<p>Cette segmentation n'est pas un accident. C'est un modèle économique parfaitement rationnel. Les plans gratuits servent de vitrine et de pipeline d'acquisition. Les plans premium génèrent les revenus. Chaque entreprise d'IA fait la même chose — et c'est leur droit.</p>
<p>Mais les conséquences sont profondes :</p>
<p><strong>1. On crée une fracture cognitive.</strong> Deux groupes de personnes parlent du même sujet avec des expériences fondamentalement différentes. L'un dit "l'IA, c'est un gadget". L'autre dit "l'IA a transformé mon travail". Les deux ont raison — mais ils ne parlent pas du même produit. Et cette incompréhension contamine toutes les conversations : en entreprise, en politique, dans les médias.</p>
<p><strong>2. Les décisions stratégiques se prennent sur la mauvaise base.</strong> Quand un CTO décide de la stratégie IA de son entreprise sur la base de son expérience avec le plan gratuit, il sous-estime massivement la technologie. Quand un régulateur légifère après une démo sur un compte standard, il régule un produit qui n'existe plus à l'étage du dessus. Les décisions sont prises sur la foi d'une version tronquée de la réalité.</p>
<p><strong>3. Le fossé de productivité va s'accélérer.</strong> Les entreprises et les individus qui investissent dans les plans premium construisent des workflows, des habitudes et une expertise qui s'accumulent. Chaque mois d'usage intensif creuse l'écart. Dans un an, la différence entre quelqu'un qui utilise l'IA gratuite et quelqu'un sur un plan Pro ne sera pas 5x — ce sera un ordre de grandeur. Parce que ce n'est pas juste l'outil qui est meilleur. C'est la personne qui a appris à l'utiliser à son plein potentiel.</p>
<p><strong>4. Le débat sur l'IA est un débat de classe qui ne dit pas son nom.</strong> 229 € par mois, ce n'est rien pour une entreprise tech californienne. C'est un budget significatif pour un freelance en France. 109 € par mois pour Codex, c'est un investissement raisonnable pour un développeur senior bien payé. C'est inatteignable pour un étudiant ou un développeur junior. On est en train de construire une technologie où l'accès réel — pas l'accès marketing, l'accès réel — est corrélé au pouvoir d'achat. Ce n'est pas nouveau dans la tech. Mais l'écart n'a jamais été aussi large entre la vitrine et le produit.</p>

<h2>Ce qu'il faudrait faire</h2>
<p>Je ne suis pas naïf. Les entreprises d'IA ont besoin de revenus pour financer des coûts d'infrastructure colossaux. La segmentation tarifaire est légitime. Je ne demande pas la gratuité pour tous.</p>
<p>Mais je demande qu'on arrête de faire semblant que le débat est honnête.</p>
<p><strong>Pour les journalistes :</strong> si vous couvrez l'IA, vous devez utiliser les plans premium. Pas une fois. Quotidiennement, pendant des semaines. Sinon vous testez un produit marketing, pas la technologie. C'est comme couvrir le sport automobile en conduisant une Clio. Votre rédaction devrait budgeter un abonnement Pro comme elle budgète un accès Reuters.</p>
<p><strong>Pour les régulateurs :</strong> avant de légiférer, utilisez la technologie. Pas une démo. Un usage réel, sur un vrai workflow, pendant un vrai mois. Mettez un plan Pro sur le budget de votre cabinet. C'est 229 € — moins cher qu'un déjeuner de travail à Bruxelles. Si vous réglez l'avenir de l'IA sans avoir touché le produit réel, vous réglez l'avenir de l'aviation après un vol en planeur.</p>
<p><strong>Pour les dirigeants d'entreprise :</strong> ne prenez pas de décision stratégique sur l'IA sur la base de votre expérience personnelle avec le plan gratuit. Offrez des plans premium à vos meilleurs éléments pendant trois mois. Mesurez les résultats. Puis décidez. Le coût d'un plan Pro pour toute une équipe est inférieur au coût d'un consultant qui viendra vous expliquer ce que l'IA peut faire — mal, puisqu'il ne l'utilise probablement pas non plus au plan Pro.</p>
<p><strong>Pour les individus :</strong> si l'IA fait partie de votre métier, investissez dans un plan premium. C'est un outil professionnel. Un développeur qui code sur un plan gratuit et conclut que l'IA est "moyenne", c'est un photographe qui juge son art avec un appareil jetable. Vous ne pouvez pas évaluer une technologie que vous n'avez jamais utilisée à son plein potentiel.</p>

<h2>Le vrai clivage</h2>
<p>Le clivage de l'IA n'est pas entre ceux qui utilisent l'IA et ceux qui ne l'utilisent pas. Ce serait trop simple.</p>
<blockquote><p>"Le vrai clivage est entre ceux qui utilisent l'IA premium et ceux qui croient utiliser la même chose. Le premier groupe livre. Le second commente."</p></blockquote>
<p>Le plan gratuit donne une impression. Le plan premium donne une transformation. Entre les deux, il n'y a pas une différence de quotas. Il y a un changement d'espèce.</p>
<p>Et tant que le débat public sera alimenté par des gens qui n'ont connu que l'impression, les décisions qui en découleront seront décalées de la réalité. On régulera une technologie d'hier. On investira trop peu, trop tard. On perdra du terrain face à des compétiteurs qui, eux, ont compris que 229 € par mois n'est pas un abonnement — c'est un avantage compétitif.</p>
<blockquote><p>"Le vrai danger en 2026, ce n'est pas que l'IA soit surestimée. C'est que ceux qui la sous-estiment décident pour ceux qui la vivent. Et qu'ils appellent ça de la prudence."</p></blockquote>

<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://openai.com/chatgpt/pricing/">OpenAI — Tarifs ChatGPT</a> : page officielle listant l'ensemble des plans ChatGPT (Free, Plus à 23 €/mois, Business, Pro à 229 €/mois) et leurs quotas respectifs.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://openai.com/index/introducing-chatgpt-pro/">OpenAI — Introducing ChatGPT Pro</a> : annonce officielle du plan ChatGPT Pro à 229 €/mois, avec accès étendu aux modèles de raisonnement avancé et au mode recherche approfondie.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://openai.com/codex/">OpenAI — Codex</a> : page officielle de l'agent de développement Codex, inclus dans les plans Plus, Business et Pro avec des quotas différenciés.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.anthropic.com/pricing">Anthropic — Tarifs Claude</a> : page officielle listant les plans Claude (Free, Pro à 23 €/mois, Max à 109 € et 229 €/mois) avec leurs quotas d'usage et les modèles disponibles.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://gemini.google/subscriptions/">Google — Abonnements Gemini</a> : page officielle des plans Gemini (Free, Gemini Advanced via Google AI Pro et Google AI Ultra) avec les modèles Gemini les plus récents et les capacités étendues.</li>
</ul>

<p><strong>Lire aussi :</strong> <a target="_blank" rel="noopener noreferrer" href="/posts/sdlc-is-dead">Le SDLC est mort</a> — pourquoi le processus était toujours cassé, et pourquoi les agents IA rendent impossible de faire semblant. Et sa suite : <a target="_blank" rel="noopener noreferrer" href="/posts/coder-is-dead-engineer-is-born">Coder n'a jamais été le métier</a> — si l'IA a tué le processus, qu'advient-il des rôles ?</p>`
}

const englishContent: PostContent = {
  title: 'The Two-Tier AI Market Nobody Wants to See',
  description: 'OpenAI just launched a $100/month plan between Plus and Pro. We are silently building a two-speed AI market: the cheap AI everyone comments on, and the premium AI nobody knows. The public debate is biased at the source.',
  html: `<p><strong>TL;DR:</strong> OpenAI just launched a $100/month plan. Between Plus at $20 and Pro at $200, targeted at Codex developers, with five times more usage. We are building, without saying it, a two-tier AI market. On one side, free and cheap plans with throttled models. On the other, premium plans where AI is genuinely transformative. The problem: the public debate is based on the first. And that distorts everything.</p>
<hr>
<p>In my two previous articles, I argued that <a target="_blank" rel="noopener noreferrer" href="/en/posts/sdlc-is-dead">the SDLC is dead</a> and that <a target="_blank" rel="noopener noreferrer" href="/en/posts/coder-is-dead-engineer-is-born">coding was never the job</a>. I was talking about process and roles. But there's a far more uncomfortable topic — and nobody wants to look at it.</p>
<p>When OpenAI announces a $100/month plan, wedged between Plus at $20 and Pro at $200, it's not a pricing adjustment. It's a confession. The confession of something I've been observing for months, and that the public debate refuses to name: <strong>we're not all using the same AI.</strong> And everything said about it is rigged from the start.</p>

<h2>Two AIs, one name</h2>
<p>Look at <a target="_blank" rel="noopener noreferrer" href="https://openai.com/chatgpt/pricing/">OpenAI's pricing grid</a> today. Free. Plus at $20. The new plan at $100. <a target="_blank" rel="noopener noreferrer" href="https://openai.com/index/introducing-chatgpt-pro/">Pro at $200</a>. Four tiers. Four radically different experiences. <em>(Sources: <a target="_blank" rel="noopener noreferrer" href="https://openai.com/chatgpt/pricing/">openai.com/chatgpt/pricing</a>, <a target="_blank" rel="noopener noreferrer" href="https://openai.com/index/introducing-chatgpt-pro/">openai.com/index/introducing-chatgpt-pro</a>.)</em></p>
<p>On the free plan, you get a throttled model, tight quotas, degraded response times during peak hours, and limited access to the latest models. On Plus at $20, it's better — but quotas remain constraining, especially if you're doing serious work. You hit the ceiling by mid-afternoon. You wait. You rephrase to save tokens. <strong>You adapt your workflow to the tool's limits instead of the other way around.</strong></p>
<p>On the $100 plan, five times more capacity. Priority access to Codex and the most powerful models. On Pro at $200, near-unlimited usage of the best models, deep research mode, extended capabilities.</p>
<p>Same brand. Same interface. Same name. <strong>But these are not the same products.</strong></p>
<blockquote><p>"This isn't the same AI at two prices. It's two AIs under the same name. One gives you an impression. The other reshapes your career."</p></blockquote>
<p>And OpenAI isn't alone. Anthropic has its <a target="_blank" rel="noopener noreferrer" href="https://www.anthropic.com/pricing">Max offering at $100 and $200 for Claude</a>. Google pushes <a target="_blank" rel="noopener noreferrer" href="https://gemini.google/subscriptions/">Gemini Advanced</a>. Everyone is building the same structure: a free showcase for the masses, and a real product for those who pay.</p>

<h2>The experience gap</h2>
<p>This isn't just about quotas. It's about qualitative experience.</p>
<p>The person on the free plan interacts with a model that hallucinates more often, has less context, refuses more requests, and produces more generic answers. They reach the logical conclusion: <strong>"AI is impressive but unreliable."</strong></p>
<p>The person on the $200 plan uses the same model name — but with extended context, deep reasoning capability, access to advanced tools, and quotas that enable a real continuous workflow. They reach a very different conclusion: <strong>"AI changed how I work."</strong></p>
<p>Both people talk about "ChatGPT". They talk about "Claude". They think they're talking about the same thing. <strong>They're not talking about the same thing.</strong></p>
<p>It's like someone judging photography after using a disposable camera, while another works with a Hasselblad. They both talk about "taking photos". But one captures blurry memories and the other produces art.</p>
<blockquote><p>"The gap between free and premium AI isn't a performance difference. It's an era gap."</p></blockquote>

<h2>The public debate is biased at the source</h2>
<p>And this is where it becomes a real problem.</p>
<p>The public debate on AI — the one that shapes regulations, corporate policies, investment decisions, public opinion — is overwhelmingly based on the free or cheap AI experience.</p>
<p><strong>Journalists</strong> covering AI almost all use the free plan or Plus at $20. They test ChatGPT, notice hallucinations, write an article about "AI's limitations". Their conclusion is honest — but it's based on a product that's throttled on purpose. It's like test-driving a Ferrari with the handbrake on, concluding that sports cars are overrated, and selling the conclusion on the front page.</p>
<p><strong>Regulators</strong> have seen a demo. Maybe two. Probably on a free account, probably prepared by an assistant who doesn't use AI daily. They legislate on a technology they've never used in a real workflow for a full week. <a target="_blank" rel="noopener noreferrer" href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj">The EU AI Act</a> is a massive text. How many of its drafters used a Pro plan for a month to understand what the technology actually does?</p>
<p><strong>Politicians</strong> have heard that "ChatGPT hallucinates". That AI generates false content. That it's dangerous. And they're not wrong — on the free plan, it often does. But nobody showed them what an advanced reasoning model does with a million-token context on a structured problem.</p>
<p><strong>Business leaders</strong> deciding their organization's AI strategy often have the same limited experience. They tried ChatGPT on a Saturday afternoon, asked it to write an email, found it "nice but not revolutionary", and decided AI could wait until 2027 on the roadmap.</p>
<blockquote><p>"We legislate the future of AI with the experience of a free account. It's like flying a fighter jet after flying a kite. Both leave the ground. They're not the same war."</p></blockquote>

<h2>Those who know don't talk</h2>
<p>Meanwhile, a silent minority lives in a different technological reality.</p>
<p>The developer paying $100 or $200/month doesn't waste time debating on LinkedIn whether AI is useful. They're too busy delivering in a morning what used to take a week. They don't comment on "will AI replace developers?" articles — they're living the answer.</p>
<p>The researcher using Claude Pro with a million-token context doesn't debate whether AI hallucinates. They've learned to structure their queries, verify outputs, and use the tool in a workflow that produces reliable results. Hallucinations exist — but in a structured context with an advanced model, they're manageable, identifiable, and increasingly rare.</p>
<p><strong>There is an asymmetric silence.</strong> Those with the deepest AI experience are the ones who talk about it least publicly. They have nothing to prove. They don't need to convince anyone. They work. And the gap between their reality and the public debate widens every month.</p>
<blockquote><p>"Silence isn't neutral. Those who live the real product work. Those who only know the showcase comment. Guess which of the two groups shapes public opinion."</p></blockquote>

<h2>What this actually means</h2>
<p>This segmentation isn't an accident. It's a perfectly rational business model. Free plans serve as a showcase and acquisition pipeline. Premium plans generate revenue. Every AI company does the same thing — and they have every right to.</p>
<p>But the consequences run deep:</p>
<p><strong>1. We're creating a cognitive divide.</strong> Two groups of people discuss the same topic with fundamentally different experiences. One says "AI is a gimmick". The other says "AI transformed my work". Both are right — but they're not talking about the same product. And this misunderstanding contaminates every conversation: in business, in politics, in media.</p>
<p><strong>2. Strategic decisions are made on the wrong basis.</strong> When a CTO decides their company's AI strategy based on their free-plan experience, they massively underestimate the technology. When a regulator legislates after a demo on a standard account, they regulate a product that doesn't exist one floor up. Decisions are made on faith in a truncated version of reality.</p>
<p><strong>3. The productivity gap will accelerate.</strong> Companies and individuals who invest in premium plans build workflows, habits, and expertise that compound. Every month of intensive usage widens the gap. In a year, the difference between someone using free AI and someone on a Pro plan won't be 5x — it'll be an order of magnitude. Because it's not just the tool that's better. It's the person who learned to use it at full potential.</p>
<p><strong>4. The AI debate is a class debate that won't say its name.</strong> $200/month is nothing for a California tech company. It's a significant budget for a freelancer in France. $100/month for Codex is a reasonable investment for a well-paid senior developer. It's unreachable for a student or junior developer. We're building a technology where real access — not marketing access, real access — correlates with purchasing power. This isn't new in tech. But the gap has never been this wide between the showcase and the product.</p>

<h2>What should be done</h2>
<p>I'm not naive. AI companies need revenue to fund colossal infrastructure costs. Tiered pricing is legitimate. I'm not asking for free access for everyone.</p>
<p>But I'm asking that we stop pretending the debate is honest.</p>
<p><strong>For journalists:</strong> if you cover AI, you need to use premium plans. Not once. Daily, for weeks. Otherwise you're testing a marketing product, not the technology. It's like covering motorsport by driving a compact car. Your newsroom should budget a Pro subscription like it budgets a Reuters feed.</p>
<p><strong>For regulators:</strong> before legislating, use the technology. Not a demo. Real usage, on a real workflow, for a real month. Put a Pro plan on your office's budget. It's $200 — less than a working lunch in Brussels. If you regulate the future of AI without touching the real product, you're regulating the future of aviation after a glider flight.</p>
<p><strong>For business leaders:</strong> don't make strategic AI decisions based on your personal free-plan experience. Give premium plans to your best people for three months. Measure results. Then decide. The cost of a Pro plan for an entire team is less than the cost of a consultant who'll come explain what AI can do — poorly, since they probably don't use it on the Pro plan either.</p>
<p><strong>For individuals:</strong> if AI is part of your job, invest in a premium plan. It's a professional tool. A developer who codes on a free plan and concludes AI is "mediocre" is a photographer judging their art with a disposable camera. You can't evaluate a technology you've never used at full potential.</p>

<h2>The real divide</h2>
<p>The AI divide isn't between those who use AI and those who don't. That would be too simple.</p>
<blockquote><p>"The real divide is between those who use premium AI and those who think they're using the same thing. The first group ships. The second comments."</p></blockquote>
<p>The free plan gives an impression. The premium plan gives a transformation. Between the two, there isn't a quota difference. There's a change of species.</p>
<p>And as long as the public debate is fed by people who've only known the impression, the decisions that follow will be disconnected from reality. We'll regulate yesterday's technology. We'll invest too little, too late. We'll lose ground to competitors who understood that $200/month isn't a subscription — it's a competitive advantage.</p>
<blockquote><p>"The real danger in 2026 isn't that AI is overestimated. It's that the people underestimating it are deciding for the people living it. And they call it caution."</p></blockquote>

<h2>Sources</h2>
<ul>
<li><a target="_blank" rel="noopener noreferrer" href="https://openai.com/chatgpt/pricing/">OpenAI — ChatGPT pricing</a>: official page listing every ChatGPT plan (Free, Plus at $20/month, Business, Pro at $200/month) and their respective quotas.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://openai.com/index/introducing-chatgpt-pro/">OpenAI — Introducing ChatGPT Pro</a>: official announcement of the ChatGPT Pro plan at $200/month, with expanded access to advanced reasoning models and deep research mode.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://openai.com/codex/">OpenAI — Codex</a>: official page for the Codex development agent, bundled into the Plus, Business and Pro plans with differentiated quotas.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://www.anthropic.com/pricing">Anthropic — Claude pricing</a>: official page listing the Claude plans (Free, Pro at $20/month, Max at $100 and $200/month) with their usage quotas and available models.</li>
<li><a target="_blank" rel="noopener noreferrer" href="https://gemini.google/subscriptions/">Google — Gemini subscriptions</a>: official page for Gemini plans (Free, Gemini Advanced via Google AI Pro and Google AI Ultra) with the latest Gemini models and extended capabilities.</li>
</ul>

<p><strong>Read also:</strong> <a target="_blank" rel="noopener noreferrer" href="/en/posts/sdlc-is-dead">The SDLC Is Dead</a> — why the process was always broken, and why AI agents are making it impossible to pretend otherwise. And its follow-up: <a target="_blank" rel="noopener noreferrer" href="/en/posts/coder-is-dead-engineer-is-born">Coding Was Never the Job</a> — if AI killed the process, what happens to the roles?</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

