# Analytics setup

This blog uses the self-hosted [Umami](https://umami.is/) instance shared by every
`battistella.ovh` service to measure **engaged reads per article** in a
privacy-friendly, cookieless way.

- **Zero cookies, zero client-side IDs** — nothing is stored in the browser.
- **Zero third-party services** — all data stays on `battistella.ovh`.
- **CNIL-exemption-eligible** audience measurement; no consent banner required.
- **Engaged reads only** — the `engaged_read` event is sent only after the reader
  has dwelled for 10 seconds **or** scrolled past 50% of the article, whichever
  happens first. This is the editorial metric; the plain pageview is sent
  separately by the tracker on every navigation.

## Architecture

```
┌─────────────────────┐   stats.js + engaged_read event   ┌──────────────────────┐
│  blog.battistella   │ ────────────────────────────────▶ │ umami.battistella    │
│  (nginx + Astro)    │                                    │ (Umami + Postgres)  │
└─────────────────────┘                                    └──────────────────────┘
```

The tracker is loaded from `index.html` — there is **no build-time env var** to
configure (the former `VITE_STATS_URL` is gone). Website id:
`acb4f274-58c4-4acb-b114-7fc7ac2e1510`.

The CSP in `nginx.conf` must allow `umami.battistella.ovh` on **two** directives:
`script-src` to load `stats.js` and `connect-src` to post the measurement.
Opening only one gives a silent failure — the script loads and sends nothing.

> **Historique GoatCounter.** Le blog a utilisé une instance GoatCounter
> auto-hébergée sur `stats.battistella.ovh` jusqu'au 2026-08-30. Le conteneur et
> sa base SQLite (~1,9 Mo) sont **conservés** : c'est là que vit l'historique
> d'avant la migration. Rien n'y est plus écrit.

## Setup

Nothing to provision per-deploy: Umami runs at `umami.battistella.ovh` (see
`/opt/docker/umami`) and the site `blog.battistella.ovh` already exists in it.

The only things this repo owns:

1. the tracker tag in `index.html` (website id above);
2. `umami.battistella.ovh` on `script-src` **and** `connect-src` in `nginx.conf`;
3. the `engaged_read` event in `src/composables/useAnalytics.ts`.

### Verify

1. Open an article on `blog.battistella.ovh`.
2. Stay 10+ seconds or scroll past the middle of the article.
3. In the Umami dashboard for `blog.battistella.ovh`, the pageview appears
   immediately and `engaged_read` shows up under **Events** within ~1 minute.

If pageviews appear but `engaged_read` never does, check the browser console for
a CSP violation on `connect-src` — that is the failure mode this setup is most
prone to.

## What gets collected

The tracker sends a pageview per navigation. On top of that, each engaged read
sends one `engaged_read` event carrying only:

| Field | Value | Notes |
|---|---|---|
| `path` | `/posts/slug` or `/en/posts/slug` | Article path, FR/EN kept separate |
| `title` | Article title | For the dashboard label |
| `referrer` | Same-origin referrer, else empty | Cross-site referrers are stripped |

Umami is cookieless: it derives a daily-rotating visitor hash server-side and
never stores a raw IP.

**Never collected:** cookies, `localStorage`, `User-Agent` fingerprint,
cross-site referrer with query params, persistent visitor IDs.

## Operational notes

- **State.** Umami stores everything in its own Postgres (`/opt/docker/umami`);
  this repo owns no analytics state at all.
- **Upgrades / backups.** Handled with the Umami stack, not here.
- **The old GoatCounter instance.** Its container and SQLite database (~1,9 Mo of
  pre-migration history) are deliberately left running on
  `stats.battistella.ovh`. Nothing writes to it any more. Retire it only after
  exporting whatever history you still want — deleting the volume is
  irreversible.

## Local development

`window.umami` only exists once `stats.js` has loaded. In dev the tracker is
still requested from `umami.battistella.ovh`, so:

- if you are online, events land in the **production** site — prefer not to.
- if you are offline or the script is blocked, `useEngagedReadBeacon` is a
  **no-op**: no network call, no error.

To keep dev traffic out of the dashboard, comment out the tracker tag in
`index.html`, or create a separate Umami site and swap the `data-website-id`.
