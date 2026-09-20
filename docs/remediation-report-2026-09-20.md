# FixItReal remediation report — 2026-09-20

Scope: the 16-item quality / safety / technical-SEO / programmatic-content remediation. Everything below is committed on `main` in the working clone as 13 commits on top of the last deployed commit (`0900f4d`), **not yet pushed**. 120 files changed. Every commit passed `npm run check-all` (lint, unit tests, entity/anchor/affiliate checks, rendered-text guard, content QA, structured-data validation) and a full production build.

Rules followed: no page was created except the four tree articles already written before this brief; no URL was deleted, renamed, redirected, canonicalized or noindexed — the two reports that would justify such changes are written and await sign-off.

---

## P0 — safety and factual

### P0-1 · Service-call math on 655 programmatic pages (item 1) — FIXED, TESTED
**Defect.** The "Two small items on the same visit — 60–120 min" row charged a full extra hour at the *low* end: `(base.low + hourly.low)` to `(base.high + hourly.high)`. A 60-minute visit is inside the included hour, so the low end double-billed.
**Before → after (electrician service call):** Ohio $140–$385 → **$70–$385**; Alabama $110–$300 → **$55–$300**; Illinois $175–$455 → **$90–$455**. Same defect on every state and metro page built from the service-call template (electrician-service-call, plumber-service-call families: 58 state + 204 metro pages). High ends were already correct. Single-fix and emergency rows were correct.
**Fix.** New `src/lib/service-call-math.ts` is the only place service-call totals are computed: `total(min) = base + max(0, min − included)/60 × hourly` per band end, rounded ($5 under $1,000, $50 above); emergency = total × 1.5…2. `buildLocalCostModel` calls it; the on-page methodology block now prints the formula and the hourly rate so a reader can reconcile the table. Lede/FAQ wording unified to "first hour" (one place said "first 30–60 minutes").
**Tests.** `tests/service-call-math.test.ts` (Node built-in runner, no dependencies; `npm run test:unit`, wired into `check-all`): 10 tests, hand-computed expectations for low/mid/high/premium tiers × 30/60/90/120 min, rounding edge cases, window semantics, emergency band, thresholds, and the three named states as regressions.
**Files.** `src/lib/service-call-math.ts` (new), `src/lib/local-cost-page.ts`, `src/components/content/LocalPriceMethodology.tsx`, `src/app/costs/[slug]/[state]/page.tsx`, `src/app/costs/[slug]/metro/[city]/page.tsx`, `tests/service-call-math.test.ts` (new), `package.json`.

### P0-2 · Template artifacts on generated pages (item 2) — FIXED, GUARDED
Covered by the repository-wide QA in P1-11 below. On the state/metro pages specifically: 0 glued variables, 0 missing spaces, 0 wrong articles, 0 failed substitutions, 0 duplicate links after the fixes. The two existing guards (`check-rendered-text.mjs`, `check-toc-anchors.mjs`) stay; the new `content-qa.mjs` supersedes them in breadth.

### P0-3 · Jurisdiction-aware licensing (item 3) — FIXED, SOURCED
**Defect.** One free-text `notes` string per state mixed pricing colour with licensing claims, several of them wrong: Ohio ("state Construction Industry Examining Board licenses plumbers and electricians" — OCILB, correct name, covers *commercial* work only; residential is municipal), Missouri ("licenses plumbers at the state level" — no statewide plumbing license exists; statewide electrical license is optional), Illinois/Chicago ("state electrical licensing" — none exists), Pennsylvania/Philadelphia ("PA state plumbing and electrical certs" — neither exists), Houston ("TDLR plumbing" — TSBPE), Tennessee (statewide limited licenses only under $25,000 and only where no local program exists), Kentucky (agency misnamed). Red-flag copy said "No license number published on the truck, the quote or the invoice."
**Fix.** New `src/content/state-licensing.ts`: per state × trade — level (`state` / `state-commercial-only` / `state-optional` / `state-threshold` / `local` / `mixed`), body, scope, **source URL**, **verified date**, caveat; plus statewide home-improvement consumer protections where they exist (CA B&P §7159 deposit cap, MD MHIC, MA HIC, NJ HIC, PA HICPA, OH Home Construction Service Suppliers Act). New `LocalLicensing` block on every state and metro page renders only from that data and says "varies by city" where that is the truth. 103 licensing sentences removed from `notes` on 29 states and 102 metros (they now carry pricing/climate/permit-fee context only). Red flag reworded to "Can't or won't give you a license (or local registration) number you can look up."
**Verified against sources on 2026-09-20:** MO, OH, IL, TN, KY. Other entries cite the official board site and should be re-verified annually — the block prints its check date.
**Files.** `src/content/state-licensing.ts` (new), `src/components/content/LocalLicensing.tsx` (new), both cost-page routes, `src/content/state-cost-data.ts`, `src/content/city-cost-data.ts`.

### P0-4 · Legal / consumer-protection absolutes (item 4) — FIXED
Grep across the repository for every-state / all-states / required / illegal / must / cannot / license required / permit required / voids insurance / deposit limit. Changed:
- **"Over 33% is a red flag in every state — California and many other states cap residential contractor deposits"** → most states have *no* statutory cap; California's 10 % / $1,000 (B&P §7159) named as the example; a handful of other states have their own; check your own state.
- "In every state that licenses trades, the license number is required on advertising and quotes" → true in some licensing states (CA, FL, AZ), not all; some trades are licensed locally; the red flag is a contractor who can't give you a number to look up.
- "Every state licenses construction trades through a state board" → electricians/plumbers state-level in most states; general contractors state, local, or unlicensed depending on the state.
- "Permit required in every US jurisdiction" (panel) → essentially everywhere the NEC is adopted, enforcement local; some jurisdictions let an owner-occupant pull the permit.
- "illegal in nearly every jurisdiction" (generator without transfer switch) → violates NEC 702 as adopted nearly everywhere; utilities prohibit it.
- **Nine instances of "voids homeowner's insurance"** → "can give an insurer grounds to deny a claim" (a permit omission does not void a policy).
- "in most states it's illegal without a license" (gas repair) → regulated at state or local level depending on where you live; permit commonly required.
**Not changed** (accurate as written): "under the International Residential Code (IRC M1505)", "no permit required for non-structural drywall repair in essentially every US jurisdiction", federal TILA disclosure line.
**Files.** `advice/vetting-a-contractor.mdx`, `app/contractor-red-flags/page.tsx`, `app/tools/contractor-quote-checker/page.tsx` + `Checker.tsx`, `content/glossary/index.ts`, `content/jobs.ts`, `costs/water-heater-replacement.mdx`, `costs/furnace-replacement-cost.mdx`, `diy-or-hire/water-heater.mdx`, `emergency-repairs/gas-smell-in-house.mdx`.

### P0-5 · YMYL safety queue (item 5) — FIXED · **REQUIRES EDITORIAL SIGN-OFF BEFORE DEPLOY**
Reviewed: gas smell, CO alarm, outlet smoking, no heat in freezing weather, pipe burst, water leaking from ceiling, sewage backup, toilet overflowing, tree on house, burning smell from outlet, smoke detector going off, lights flicker — against PHMSA/AGA (gas), CPSC (CO), USFA/NFPA (fire, alarms), ESFI (electrical).
- **Gas smell — CHANGED.** The article's faint-smell branch said "open windows … call the utility if the smell doesn't clear within a few minutes"; the hub said 911 is for "gas smell that doesn't go away after opening windows" and "gas smells that don't clear with ventilation". All now say the same thing: **leave immediately, operate nothing electrical on the way out (on or off), call the utility emergency line and 911 from outside, do not wait to see if it clears, do not re-enter until cleared.** The only in-house action retained: turning off a visibly-on stove knob if it is on the way out and takes a second. FAQ "Can I just open windows and air it out?" now answers **No** with the reasoning. Citations added: PHMSA "Smell gas? Act fast", American Gas Association.
- **Ceiling leak / pipe burst — CHANGED.** "If water is near the panel, kill the main breaker" and "kill the main from outside" (most homes have no homeowner-accessible outside disconnect) → kill the room breaker only from a dry floor with dry hands; if the panel or the floor in front of it is wet, **do not touch the panel — call 911 or the electric utility to disconnect.**
- CO alarm, outlet smoking, no-heat, sewage, toilet overflow, tree, smoke-detector pages: consistent with sources; no change.
**Files.** `emergency-repairs/gas-smell-in-house.mdx`, `app/emergency-repairs/page.tsx`, `emergency-repairs/water-leaking-from-ceiling.mdx`, `emergency-repairs/pipe-burst-first-10-minutes.mdx`.

### P0-6 · Toilet DIY guide (item 6) — FIXED
- The 12-step procedure appeared twice (HowTo block from frontmatter at the top, numbered list in the body). Body list removed; "The actual job" now carries only what the steps can't (flange decision, bolt keepers, don't force porcelain).
- "Is the existing flange in good shape? … Look under the toilet base" asked for an inspection of a flange sealed under the bowl → reframed as pre-removal warning signs (rocking, staining, soft floor), with the real inspection at step 7 after removal, and that step now says what to look for and where a DIYer should stop.
- "Most plumbers who charge $500 … spend 45 of their 60 billable minutes drinking coffee" → what the price covers: trip charge, minimum-visit billing block, truck, insurance, licensing, overhead.
- **Same duplicate-list defect found and fixed on ceiling-fan, dishwasher and GFCI-outlet guides.** Their body lists carried more detail than the HowTo steps, so the detail was folded into the frontmatter steps (which also feed the HowTo JSON-LD); dishwasher HowTo went from 8 to the body's 10 steps.
**Files.** `diy-or-hire/toilet.mdx`, `ceiling-fan.mdx`, `dishwasher.mdx`, `gfci-outlet.mdx`.

---

## P1 — programmatic / template

### P1-7 · Evidence disclosure on every buying guide (item 7) — DONE
`EvidenceDisclosure` renders under the picks heading of all 20 buying guides with exactly one of **Hands-on tested / Personally used / Editorial research only**, who evaluated (author link), last-checked date (the guide's `updatedAt`), sources used (manufacturer specs, the relevant standard — UL 2034, NFPA 72, UL 943/NEC 210.8, ASHRAE 52.2, etc. — verified owner reports, author experience), and whether affiliate links are present (computed). It is a required prop of `RecommendedProductsSection`, so a guide cannot build without it. All 20 are labeled **Editorial research only** — that is the truth today. Homepage promise reworded to match. (An earlier "Tested/Researched" label added this week is replaced by this.)
**Files.** `src/components/tools/EvidenceDisclosure.tsx` (new), `RecommendedProductsSection.tsx`, 20 × `src/app/tools/best-*/page.tsx`, `WhatWeDontDo.tsx`.

### P1-8 · Programmatic-page inventory (item 8) — REPORT WRITTEN, NO ACTION TAKEN
`docs/programmatic-page-inventory.md` (655 rows) from `npm run programmatic-inventory`. Headline: after normalising prices, numbers and place names, a **state page is 13–15 % distinct** from its siblings and a **metro page 27–28 %**; the distinct share is the licensing block, the notes paragraph and (two guides) the DIY-alternative saving. No page carries a local quote sample or permit-fee schedule. All 655 indexed, self-canonical, median 3–4 inbound links. Analytics: 3 search visits in 30 days from 73 % of the sitemap. Three options ranked (enrich a small set + hold the rest / consolidate the state layer / do nothing). **The index switch (`LOCAL_COST_PAGES_INDEXABLE`) exists and is ON; flipping it, adding redirects or deleting URLs needs your sign-off.**

### P1-9 · Cannibalization report (item 9) — REPORT WRITTEN, NO ACTION TAKEN
`docs/cannibalization-report.md`. Text overlap is 5–7 % on every pair (shared chrome, not article text). Verdicts: electrician and plumber hourly-vs-service-call are distinct intents — keep, tighten anchors. **`drywall-repair` vs `drywall-patch-cost` is the one true cannibal** (same query, no cross-links) — re-scope `drywall-repair` as the umbrella page; 301 only if 90 days of Search Console data says re-scoping failed. The four advice/what-is-this pairs are a deliberate diagnostic/fix split with competing titles and missing back-links — retitle by role, link as a sequence.

### P1-10 · Computed counts (item 10) — DONE
`src/lib/content-stats.ts` derives counts from the collections at build. Tools hub said "10 DIY-or-hire verdicts" (`jobs.length`); DIY-or-Hire hub lists 11 articles; the true count of distinct decision pages is **13** (11 articles + 2 job pages that don't redirect onto an article) and that renders now. "Decision database · 10 jobs" stays because that card is about the database tool.

### P1-11 · Repository-wide content QA (item 11) — DONE, IN THE BUILD GATE
`scripts/content-qa.mjs` (`npm run content-qa`, in `check-all`) runs against all 931 prerendered pages and writes `docs/content-qa-report.md`. **Errors fail the build:** glued template text, punctuation with no following space, wrong a/an (sound-based: acronym letter names, "you"-sounding u-words, silent h), leaked template tokens, undefined/NaN/[object Object], empty links, internal links to non-existent paths, **internal links that land on a 301**, duplicate titles/descriptions, missing title, multiple H1. **Warnings:** repeated words, duplicate headings, heading skips, duplicate hrefs in a related list, repeated paragraphs, img without alt, titles > 65 chars.
**First run: 247 errors / 92 warnings → now 0 / 7.** What was actually wrong:
- **35 internal links landed on 301s or 404s.** Eight DIY jobs were folded into `/diy-or-hire/<slug>` articles with redirects from `/tools/diy-or-hire/<job>`, but `ArticlePage`, `JobSelector`, the search index, the cost estimator, the sitemap and IndexNow still built the old URLs. Added `jobHref()` / `getRenderedJobSlugs()` in `jobs.ts` as the single resolver. Three hand-written links pointed at the wrong pillar.
- Two articles used `relatedJob` with a decision slug that isn't a job → links to 404s. Fixed; `articles-loader` now **fails the build** when `relatedJob` / `relatedDecision` / `relatedCost` / `relatedAdvice` point at nothing.
- Glossary "What is a ___?" hard-coded "a" on 80 pages: "a AFCI", "a AHJ", "a Anode rod", "a Expansion tank", "a Ice dam", "a Amperage", "a Efflorescence", "a Egress window" — in the H1 *and* the Article JSON-LD. `glossaryHeading()` picks a/an with per-entry override for uncountable terms ("What is amperage?").
- "a LED-compatible", "a LVL beam", "a R-value" in prose.
- Same href twice in one Related list on 10 pages; ArticlePage de-duplicates at render.
- "## Related" body heading duplicated the component's "Related" H2 on 4 pages → "Further reading".
Remaining 7 warnings are documented in the report (per-block affiliate footnote on a two-block page; signup copy twice on the calendar page; five titles at 66–69 chars).

---

## P2 — SEO / content

### P2-12 · Technical SEO (item 12) — VERIFIED LIVE; ONE FIX SHIPPED; ONE DASHBOARD ITEM
`scripts/technical-seo-check.mjs` (`npm run seo-check`) against production: robots.txt 200 with correct Sitemap line ✅; sitemap 200, `application/xml`, 925 absolute-HTTPS locs, 0 duplicates ✅; 40-URL sample all 200 / self-canonical / index,follow / single H1 ✅; http→https 308 ✅; trailing-slash → no-slash 308 ✅; legacy redirects 308 to the right targets ✅; unknown URL → 404 with noindex ✅; `fixitreal.vercel.app` alias `x-robots-tag: noindex, nofollow` and canonical to www ✅. Homepage canonical and sitemap loc are both `https://www.fixitreal.com` (no slash) — consistent, no change.
- **Fixed:** 48 sitemap `lastmod` values were build timestamps (hub pages "changed every deploy"). Hubs now use the newest article date in their pillar; topics use the site's newest article date. 0 build-stamped lastmods remain.
- **Needs you (Vercel dashboard):** `https://fixitreal.com/` → www is a **307** (temporary). Project → Settings → Domains → `fixitreal.com` → redirect status **308**. Cannot be changed from the repo.

### P2-13 · Structured data (item 13) — VALIDATED; ONE FIX
`scripts/validate-structured-data.mjs` (`npm run validate-schema`, in `check-all`) parses every JSON-LD block (929 pages, 12 types: Article 882, FAQPage 812, BreadcrumbList 956, Organization/WebSite 929 each, HowTo 15, ItemList 48, CollectionPage 29, WebApplication 9, ProfilePage, ContactPage, AboutPage) and checks required fields **and content match**: Article.headline = H1, ISO dates in order, author URL resolves, image present; FAQ questions visible on the page; HowTo steps visible; breadcrumb positions and names match the visible breadcrumb. **1 error → 0:** `/tools/diy-or-hire/replace-faucet` and `replace-panel` emitted a one-step HowTo named "Overview" that appears nowhere on the page — removed (verdict pages aren't procedures). Representative URLs per type for Google's Rich Results Test are printed by the script.

### Earlier this week (already on `main`, for completeness)
Shortened 12 overlong titles; real author bio; pillar-aware lead magnet; 4 mismatched product-card links; smoke-alarm replacement age 8 → 10 years; honest tested/researched promise; wet-panel and deposit-cap wording; 51 cross-links for 22 orphaned articles.

---

## P3 — optimisation

### P3-14 · Lighthouse mobile (item 14) — MEASURED; ONE CHANGE; FULL NUMBERS IN `docs/lighthouse-mobile-2026-09-20.md`
Five production pages: perf 80–83, **CLS 0 everywhere**, TTFB 70–170 ms, TBT 50–180 ms, **LCP 4.3–4.6 s on every page** (the only failing metric). LCP element is text; the delay is 115 KB of preloaded web fonts arriving after first paint under 4G simulation. No render-blocking resources, no oversized images, no third-party scripts, 26 KB unused JS is framework.
- **Changed:** Fraunces loaded without the optical-size axis: 67 KB → 37 KB (−31 KB). Headings unaffected; **visual review item** — 17 small-size serif usages (KensTake, PullQuote) now render at default optical size; check on a phone after deploy.
- **Not changed, with reasons:** `display: "optional"` would fix LCP but can show the fallback font on slow first visits (design change); `prefetch={false}` on chrome links tested, no measurable gain, reverted.

### P3-15 · Preserve strengths (item 15) — OBSERVED
No hub, category, author, methodology, editorial-standards, corrections, disclosure or cross-linking structure was changed. Voice edits were limited to removing unsupported certainty (the "every state" family, "voids insurance") and one insult (the coffee line). Ken's Take blocks were left as written.

---

## Everything modified (120 files)
**New:** `src/lib/service-call-math.ts`, `src/lib/content-stats.ts`, `src/content/state-licensing.ts`, `src/components/content/LocalLicensing.tsx`, `src/components/tools/EvidenceDisclosure.tsx`, `tests/service-call-math.test.ts`, `scripts/content-qa.mjs`, `scripts/programmatic-inventory.mjs`, `scripts/technical-seo-check.mjs`, `scripts/validate-structured-data.mjs`, `docs/content-qa-report.md`, `docs/programmatic-page-inventory.md`, `docs/cannibalization-report.md`, `docs/lighthouse-mobile-2026-09-20.md`, this file.
**Changed (code):** `local-cost-page.ts`, `LocalPriceMethodology.tsx`, `ArticlePage.tsx`, `RecommendedProductsSection.tsx`, `WhatWeDontDo.tsx`, `NewsletterBlock.tsx`, `articles.ts`, `articles-loader.ts`, `metadata.ts`, `jobs.ts`, `glossary/index.ts`, `state-cost-data.ts`, `city-cost-data.ts`, `sitemap.ts`, `api/indexnow/route.ts`, `search/page.tsx`, `tools/page.tsx`, `tools/diy-or-hire/[job]/page.tsx`, `tools/repair-cost-estimator/Estimator.tsx`, `tool/JobSelector.tsx`, `costs/[slug]/[state]/page.tsx`, `costs/[slug]/metro/[city]/page.tsx`, `glossary/[slug]/page.tsx`, `emergency-repairs/page.tsx`, `contractor-red-flags/page.tsx`, `contractor-quote-checker/page.tsx` + `Checker.tsx`, `layout.tsx`, 20 × `tools/best-*/page.tsx`, `package.json`.
**Changed (content):** 48 `.mdx` files — related-link additions on 36; the safety/legal/toilet/DIY edits listed above.

## Tests and gates added
`npm run test:unit` (10 tests) · `npm run content-qa` (build fails on errors) · `npm run validate-schema` (build fails on errors) · `npm run seo-check` (live, exit 1 on FAIL) · `npm run programmatic-inventory` (report) · build-time cross-reference validation in `articles-loader.ts` · all wired into `npm run check-all`.

## URLs affected
All 655 state/metro pages (math on 262 service-call pages; licensing block and notes on all 655); 80 glossary pages (H1 + schema); 20 buying guides; 4 DIY guides; 4 emergency pages + hub; 6 contractor-vetting surfaces; 36 articles (related links); sitemap (48 lastmods); 2 job pages (schema). No URL created, removed or redirected.

## Unresolved / needs your decision
1. **Deploy gate for safety content.** Per your instruction, the P0-5 edits (gas, wet panel) should be read by you before this branch deploys. They are in commit `93bd697`; the diff is short.
2. **Programmatic pages.** Enrich-and-hold vs consolidate — see the inventory. Nothing flips without you.
3. **`drywall-repair` re-scope** and the four advice/what-is-this retitles — copy work, no URL change; I can do it on your go.
4. **Vercel: apex redirect 307 → 308.** Dashboard only.
5. **Licensing data annual re-verification.** 24 of 29 states cite the official board but were not re-checked against a source on 2026-09-20; the block prints its check date.
6. **Font optical-size change** — look at a KensTake on your phone after deploy.
7. **Push.** 13 commits are local to the working clone; the sandbox cannot push. Same route as before: link the Mac and say "push", or I send a patch.
