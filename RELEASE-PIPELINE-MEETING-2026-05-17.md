# Release Pipeline Review — Subagents Personas Meeting

**Date:** 2026-05-17
**Site:** https://blog.battistella.ovh
**Branch:** `claude/optimize-release-pipeline-2LBPX`
**Subject:** Review the release pipeline (`.github/workflows/release.yml`) to make it faster and properly adapted to the homelab configuration (self-hosted runner, Traefik, Docker Compose).
**Format:** Four specialist personas reviewed the pipeline and homelab files in parallel (Round 1), then converged on a shared action plan (Round 2). One architectural decision was escalated to the author mid-meeting.
**Outcome:** Pipeline hardened for speed, correctness and homelab fit — changes shipped to `release.yml`, `Dockerfile`, `compose.yml` and `deploy/deploy.sh`.

---

## Attendees

| Persona | Role | Lens |
|---|---|---|
| **Noor** | CI/CD pipeline engineer | GitHub Actions speed, caching, job graph, concurrency, wasted work |
| **Bram** | Homelab / self-hosted infrastructure engineer | Self-hosted runner, registry round-trip, deploy-script drift, Traefik/Compose |
| **Inès** | Release engineer | Semver bump logic, changelog, tagging, idempotency, ordering of side effects |
| **Karl** | Skeptical SRE / pragmatist | Failure modes, deploy verification, rollback, observability |

---

## Round 1 — Persona contributions

### Noor — CI/CD pipeline speed

1. **`cache: "npm"` on `setup-node` is dead weight.** The GitHub runner never runs `npm ci` or `npm run build` — the whole build happens inside Docker. The npm cache is restored and saved every run and never consulted. Pure overhead (~5–15 s/run). Node is still needed for `npm version`, so keep `setup-node`, just drop `cache`.
2. **No `concurrency:` block — a real race.** Two pushes to master close together run two `release` jobs in parallel; both `npm version` from the same base, both tag, and the second `git push origin master` fails non-fast-forward (or the tags collide).
3. **`type=gha` Docker layer cache is correctly tuned for a GitHub-hosted build.** `mode=max` caches the heavy build-stage layers (`npm ci`, `npm run build`) — that is what enables reuse. It would only become a *waste* if the build moved to the self-hosted runner, where a local cache beats a network round-trip.
4. **Deferred speed win:** the in-Docker `npm run build` re-optimizes ~300 images on every release because `optimize-images.mjs` runs inside the same `RUN` as `vite build`. Splitting it into its own cacheable layer needs a Dockerfile + `package.json` refactor — left as a follow-up.

### Bram — Homelab fit

1. **Build → push → pull round-trip.** The image is built on `ubuntu-latest`, pushed to Docker Hub, then the *self-hosted homelab runner pulls it back* over the internet. Building on the self-hosted runner would make the image local and instantly deployable. **(Escalated — see mid-meeting decision.)**
2. **Deploy-script drift.** The workflow runs `/home/deploy/deploy-personal-blog.sh` — a script that lives on the runner host, untracked and unreviewable — while `deploy/deploy.sh` *in the repo* is dead code. The repo must be the source of truth.
3. **Non-deterministic deploys.** `compose.yml` pins `:latest`; `deploy.sh` pulls `:latest`. There is no recorded "last good" image, so rollback means guessing.
4. **Wrong OCI label.** `org.opencontainers.image.source` points at `github.com/Wifsimster/wifsimster.github.io` — the actual repo is `wifsimster/personal.blog`.

### Inès — Release correctness

1. **Tags exist on the remote** (66 of them) — `git describe --tags` works in CI, so the changelog is *not* dumping full history. The "no tags" symptom was a local-clone artifact.
2. **Changelog noise.** `git log` for the release notes includes the `chore: bump version` automation commits — they should be filtered out.
3. **`BUILD_DATE` is wrong.** The build arg is fed `github.event.repository.updated_at` — the repo's metadata timestamp, not the build time. The OCI `created` label is therefore meaningless.
4. **The skip guard is fragile.** `!contains(github.event.head_commit.message, 'chore: bump version')` breaks on multi-commit pushes (only the tip commit is inspected). An actor-based guard (`github.actor != 'github-actions[bot]'`) is robust.
5. **Bump logic** only ever produces `patch` for `post(...)`/`edit(...)` commits — that is fine for a blog, but it is silent. Push order (commit+tag before the Docker build, push after) is the *safe* order — keep it.

### Karl — Deploy reliability

1. **The deploy is blind.** `docker compose up -d` returns when the container *starts*, not when it is *healthy*. A broken image (empty `dist/`, bad `nginx.conf`) ships and the GitHub Actions run still goes green. The deploy step is structurally incapable of catching a bad release.
2. **No rollback path.** `:latest` is overwritten every release. The previous image must be recorded *before* the pull so it can be restored.
3. **`docker image prune -f` runs unconditionally** — it should run only *after* the new release is verified, so a failed deploy still has an image to roll back to.
4. **Healthcheck mismatch.** The Dockerfile probes `/`; `compose.yml` probes `/health`. `/health` is a static `return 200` that passes even when `dist/` is empty — the weaker probe. Align both on `/`, which actually fails on a broken build.
5. **Proportionality.** This is a personal blog: `up -d --wait` + a `curl` of the live site + a recorded rollback image is the right amount of engineering. Full E2E test suites are not.

---

## Mid-meeting decision — where to build

Bram's finding #1 (build on the self-hosted runner vs. keep `ubuntu-latest`) is architectural and depends on the homelab runner's capacity, which the meeting could not inspect. It was escalated to the author.

**Author's decision: keep building on `ubuntu-latest`.** The build → push → pull round-trip stays; the meeting's scope narrows to caching, concurrency, correctness and deploy verification. Moving the build onto the self-hosted runner (the largest single speed lever, ~90–180 s/run) remains available as a future change.

---

## Round 2 — Convergence

Where the personas independently converged:

1. **The deploy is the weakest link, not the build.** Bram and Karl both: a fast pipeline that ships a broken site silently is worse than a slow one. Verification + rollback is the highest-value work in this meeting.
2. **The race is real and cheap to fix.** Noor and Inès both flagged the missing `concurrency` block.
3. **The repo must own the deploy logic.** The host-side `deploy-personal-blog.sh` is invisible to review; `deploy/deploy.sh` in the repo must become the script the workflow actually runs.

With `ubuntu-latest` retained, the headline speed gain is modest (removing the wasted npm cache); the bulk of the value is **correctness and reliability**.

---

## Consolidated action plan (shipped)

### Pipeline — `.github/workflows/release.yml`

1. **Added a `concurrency: { group: release, cancel-in-progress: false }` block** — releases serialize instead of racing. *(Noor, Inès)*
2. **Removed `cache: "npm"` from `setup-node`** — the cache was never consulted. *(Noor)*
3. **Replaced the skip guard** with `github.actor != 'github-actions[bot]'`. *(Inès)*
4. **`BUILD_DATE`** now uses a real UTC build timestamp instead of `repository.updated_at`. *(Inès)*
5. **Changelog** filters out `chore: bump version` commits with `--invert-grep`. *(Inès)*
6. **Deploy job** checks out the repo and runs `./deploy/deploy.sh` — the repo, not the host, owns deploy logic. *(Bram, Karl)*

### Image — `Dockerfile`

7. **Re-declared `VERSION` / `BUILD_DATE` / `VCS_REF`** inside the `nginx` stage — global ARGs are only in scope for `FROM` lines, so the OCI `version`/`created`/`revision` labels were previously emitting empty strings. *(Noor, Bram)*
8. **Fixed `org.opencontainers.image.source`** to the correct repository. *(Bram)*

### Runtime — `compose.yml`

9. **Healthcheck aligned on `/`** — `/health` passes even on an empty build; `/` does not. *(Karl)*

### Deploy — `deploy/deploy.sh`

10. **Rewrote it as the authoritative, verified, rollback-capable deploy script:**
    - records the running image before pulling;
    - pulls and restarts the service;
    - polls the live site (`curl`, 10 attempts) instead of trusting `up -d`;
    - on failure, re-tags and restarts the previous image, then exits non-zero;
    - `docker image prune -f` runs *only after* a verified deploy. *(Karl, Bram)*

---

## Decisions

1. **Build stays on `ubuntu-latest`** (author's call) — the Docker Hub round-trip is retained.
2. **Verification over speed** — with the big speed lever declined, the meeting prioritized making "green" mean "actually serving."
3. **Repo is the source of truth for deploy** — the workflow now runs the in-repo script.
4. **Proportionate** — no test suite, no smoke-test job, no version-pinning rewrite of host config; the `docker build` succeeding already proves `npm run build` works.

## Follow-ups for Wifsimster (the human)

1. **Delete the now-unused `/home/deploy/deploy-personal-blog.sh`** on the runner host, and ensure `/opt/blog/compose.yml` matches this repo's `compose.yml` (the `/` healthcheck change).
2. **Build on the self-hosted runner** — the largest remaining speed win (~90–180 s/run), declined this round; revisit if the homelab runner has spare capacity.
3. **Split image optimization into its own Docker layer** so ~300 images aren't re-processed on every release.
4. **Optional:** a failure notification (ntfy / Discord) on the `deploy` job so a red run reaches you without watching the Actions tab.
