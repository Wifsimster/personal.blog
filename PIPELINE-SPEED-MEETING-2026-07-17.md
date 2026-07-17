# Pipeline Speed Review — Subagents Personas Meeting

**Date:** 2026-07-17
**Site:** https://blog.battistella.ovh
**Branch:** `claude/pipeline-duration-deployment-speed-suic7n`
**Subject:** Review the *duration* of the release pipeline and improve the speed to deployment after a PR merges to `master`.
**Format:** Follow-up to `RELEASE-PIPELINE-MEETING-2026-05-17.md`. That meeting hardened the pipeline for correctness and reliability but, with the self-hosted-runner build declined, treated speed as secondary. This meeting starts from **measured data** and attacks duration directly.
**Outcome:** The deploy is not the bottleneck — it is already ~9 s. 92 % of "time to deployment" is the Docker build, and almost all of that is two cache-defeats firing on every release. Shipped the image fix; the `npm ci` fix is escalated as a one-line follow-up because it touches the frozen release ordering.

---

## The measurement (this is the whole point)

Timings pulled from the GitHub Actions API for the last successful releases on `master` (runs #85–#91). Representative run #91 (total 607 s):

| Phase | Time | Share |
|---|---:|---:|
| Release job — version bump, changelog, tag, push, GitHub release | ~23 s | 4 % |
| Release job — **`Build and push Docker image`** | **560 s (9 min 20 s)** | **92 %** |
| Deploy job — self-hosted pull + restart + `curl /` health check | 19 s (deploy step: **9 s**) | 3 % |

**Conclusion the numbers force:** "speed to deployment after merge" is not a deploy problem. The self-hosted deploy is effectively instant. It is a **Docker-build-caching** problem. The `type=gha` layer cache (`mode=max`) is configured correctly, but two things defeat it on every single release.

---

## Attendees

| Persona | Role | Lens |
|---|---|---|
| **Noor** | CI/CD pipeline engineer | Layer cache keys, what busts them, wasted work |
| **Bram** | Homelab / self-hosted infra | Registry round-trip, where the encode should live |
| **Inès** | Release engineer | Version-bump ordering, idempotency, side-effect safety |
| **Karl** | Skeptical SRE / pragmatist | Proportionality, blast radius, "is the fix worth the risk" |

---

## Round 1 — Persona contributions

### Noor — where the 9 minutes goes

1. **Image optimization re-encodes all 311 images (80 MB) on every build.** `optimize-images.mjs` wrote AVIF into the *ephemeral* `dist/`. Its mtime cache can never hit in CI (fresh `dist/` starts empty), and it ran inside the same `RUN npm run build` layer as `vite build` — a layer that changes every release by definition. So `type=gha` cannot cache it. This is the dominant cost (~5–7 min, and re-confirmed: regenerating the full set locally took >20 min single-container). **This is follow-up #3 from the May meeting, still open.**
2. **`npm ci` re-installs from scratch every release.** The version bump rewrites `package.json`/`package-lock.json` *before* the build context is sent, so `COPY package*.json ./` gets a new content hash every release and busts the `npm ci` layer (~30–60 s) even when no dependency changed.
3. Everything else in the build (nginx stage, labels, `COPY dist`) is already cheap and cached.

### Bram — where the encode should live

1. Endorses committing the AVIFs to the source tree over a BuildKit cache mount: the mount's persistence through the `type=gha` backend is not guaranteed, and **every release ships a new post with a new hero image**, so a single-layer image cache would bust most releases anyway. Committed siblings sidestep the cache question entirely — vite just copies them.
2. Repeats the standing May position: moving the build onto the self-hosted runner is the largest untapped lever (kills the Docker Hub round-trip *and* lets an encode cache persist on disk) but remains the author's architectural call. Out of scope unless he reopens it.

### Inès — release-ordering safety

1. The `npm ci` fix is real but the clean version of it (**build before the version bump, pass `VERSION` purely as a build-arg**) reorders the release side effects. The May meeting deliberately froze "commit before build, push after." Any reorder must go back to the author — it is exactly the kind of change that caused the run-#87 tag collision.
2. Confirmed the app never reads `version` from `package.json` (checked `src/`, `vite.config`): the bump feeds only the git tag and OCI labels. So build-before-bump is *semantically* safe — it just needs a yes.

### Karl — proportionality

1. The image fix is ~90 % of the available speedup and is **low blast radius**: it changes an input directory and a skip condition, not the release sequence. Ship it.
2. The `npm ci` fix is ~30–60 s against the most fragile, deliberately-frozen part of the pipeline. Saving 30 s is not worth a 2 a.m. release failure without the author's sign-off. **Document it with the exact diff; do not bundle it into the same change.**
3. Watch the skip logic: git does not preserve mtimes, so a committed-AVIF workflow **must not** use `mtime` to decide skips or CI will re-encode anyway. Skip on existence; regenerate only on `IMAGE_AVIF_FORCE=1`.

---

## Round 2 — Convergence

All four independently landed on the same split:

1. **The deploy was never the problem.** It is 9 s. Do not touch it.
2. **The build is the problem, and it is caching, not raw compute.** Fix the two cache-defeats; do not move to a bigger runner or add parallelism.
3. **Ship the image fix, escalate the ordering fix.** The image fix is high-value and low-risk. The `npm ci` fix is low-value and touches frozen ordering — it gets the author's yes/no, not a silent commit.

---

## Consolidated action plan

### Shipped in this PR

1. **`scripts/optimize-images.mjs` now operates on the source tree `public/images/`**, not `dist/`. The AVIF siblings are committed to the repo; vite copies them into `dist/images/` verbatim, so CI performs **zero** encoding.
2. **Skip logic is now existence-based, not mtime-based** — deterministic across git checkouts. `IMAGE_AVIF_FORCE=1` regenerates a stale sibling after an in-place image edit.
3. **`package.json`:** image optimization moved *ahead* of `vite build` (so the copy picks up new siblings) and exposed as `npm run optimize:images`. In CI it is now a sub-second no-op that only encodes genuinely new images — self-healing if a sibling was forgotten.
4. **Committed the ~300 AVIF siblings** generated this round.

**Expected effect:** the `Build and push` step drops from ~9 min 20 s to roughly ~2–3 min (npm ci + vite + push), i.e. merge-to-live from ~10–15 min to ~3–4 min.

### Escalated — needs the author's yes/no (not shipped)

5. **`npm ci` cache-bust.** Fix = build the Docker image *before* the version bump and feed `VERSION` as a build-arg (already wired for the OCI labels), then bump/commit/tag/push after a green build. Saves ~30–60 s/release and, as a bonus, avoids committing a version bump for a release whose image failed to build. It reorders the release side effects the May meeting froze, so it is the author's call.

---

## Decisions

1. **Commit AVIFs to the repo** (author's call, 2026-07-17) over cache-mount / separate-layer / self-hosted-runner.
2. **Deploy is out of scope** — it is already instant.
3. **`npm ci` reorder is escalated, not bundled** — proportionality + frozen ordering.

## Follow-ups for Wifsimster (the human)

1. **Decide the `npm ci` build-before-bump reorder** (action item #5). One-line yes/no; I can ship it in a follow-up.
2. **Reconsider building on the self-hosted runner** now that the build cost is *measured* (was ~9 min, will be ~2–3 min after this PR). Still the largest structural lever; still your call.
3. **When adding a new post image:** run `npm run optimize:images` (or `npm run build`) locally and commit the generated `.avif` alongside the source. CI will not generate it for you anymore — that is the point.
