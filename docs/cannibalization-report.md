# Topic-overlap / cannibalization report

Generated 2026-09-20 from the production build. Method: for each pair, measure shared 8-word phrases (text-level duplication), compare H2 outlines (structural duplication), read the title/H1/description (declared intent), and check whether the two pages link to each other. Search-query data is from Vercel Web Analytics referrer paths for the 30 days to 2026-09-20 (small sample; the site had 32 search visits in that window).

**Nothing in this report has been actioned. No URL was changed, redirected or canonicalized.**

## Summary

| Pair | Text overlap | Same outline? | Primary intents | Verdict |
|---|---|---|---|---|
| drywall-repair vs drywall-patch-cost | 7% | no | "drywall repair cost" (whole-job, contractor) vs "drywall patch cost" (per-hole sizing, DIY-leaning) | **Keep separate, differentiate titles, cross-link both ways** |
| electrician-hourly vs electrician-service-call | 7% | no | "electrician hourly rate" vs "electrician service call cost" | **Keep separate** — distinct queries, already cross-linked |
| plumber-hourly vs plumber-service-call | 6% | no | "plumber hourly rate" vs "plumber service call cost" | **Keep separate** — distinct queries, already cross-linked |
| advice/water-under-the-bathroom-sink vs what-is-this/water-under-bathroom-sink | 6% | no | how-to-find-and-fix vs quick-ID/diagnostic | **Keep, but make what-is-this the diagnostic and advice the fix; add the missing back-link** |
| advice/toilet-leaking-at-the-base vs what-is-this/toilet-leaking-at-base | 6% | no | same split | **Same as above; add back-link** |
| advice/ceiling-water-stain vs what-is-this/ceiling-water-stain | 6% | no | same split | **Same; neither links to the other today — add both** |
| advice/soft-spot-in-laminate-or-wood-floor vs what-is-this/soft-spot-in-floor | 6% | no | same split | **Same; add back-link** |
| water-leak-detection vs smart-water-leak-detectors | 5% | no | how to find a leak vs whether to buy a sensor | **Keep separate** — different intent, cross-linked |
| drywall-repair vs ceiling-water-damage-repair-cost | 7% | partial (DIY vs hire) | generic drywall vs water-damage-specific | **Keep separate; drywall-repair should link to the ceiling page** |

Text duplication is low everywhere (5–7%, which is the shared component chrome — FAQ/Related/Sources headings — not article text). The real risk in this list is not duplicate text; it is **declared-intent overlap in titles**, where two pages tell Google they answer the same query.

## The three pairs you named

### 1. `/costs/drywall-repair` vs `/costs/drywall-patch-cost`

- **Titles today:** "Drywall repair cost in 2026" / "Drywall patch cost: 2026 pricing by hole size"
- **Intent:** Google treats "drywall repair cost" and "drywall patch cost" as near-synonyms; the SERP for both is the same set of aggregator pages. Two FixItReal pages competing here is the clearest cannibalization on the site.
- **What each actually is:** `drywall-repair` is the shorter, generic page (1,196 words: what you're paying for, DIY vs hire, fair quote, red flags). `drywall-patch-cost` is the stronger page (1,332 words: cost by hole size, when patching beats replacement, "what I'd do") and is the one a homeowner with a hole in the wall needs.
- **Overlapping sections:** "What you're paying for" appears on both with different content; DIY-vs-hire logic appears on both.
- **They do not link to each other** — the strongest signal of an unplanned pair.
- **Recommendation: keep both URLs, re-scope `drywall-repair`.** Make `drywall-repair` the umbrella "drywall repair cost" page that covers *all* drywall work — patches (link to patch page), water-damaged sections (link to ceiling-water-damage), texture matching, whole-wall replacement, and hiring a drywall contractor — and make `drywall-patch-cost` explicitly the per-hole page. Title `drywall-repair` "Drywall repair cost in 2026: patches, sections, and full replacement" and add a "For a single hole, see …" pointer at the top. Cross-link both ways with the anchor text the other page targets. **Merging with a 301 is the fallback** if, after 90 days of Search Console data, both still rank for the same queries and neither wins; if merging, the patch page is the survivor and `drywall-repair` redirects to it.

### 2. `/costs/electrician-hourly` vs `/costs/electrician-service-call`

- **Intent is distinct.** "electrician hourly rate" is a rate question (per-hour, by region, what the rate covers); "electrician service call cost" is a visit question (trip fee, what a visit costs all-in, common job totals). Google shows different top results for the two. The hourly page's own title already names the relationship ("$75–$200 + service call fees").
- **Overlap:** 7%, none in article text. Outlines are different. Already cross-linked both ways. The service-call page is the parent of the 29 state and 102 metro pages.
- **Analytics:** `/costs/electrician-service-call/missouri` received a search visit; the hourly page did not appear in the 30-day sample either way.
- **Recommendation: keep separate.** Tighten anchors so each page's internal links to the other use the other's target phrase ("electrician hourly rate" ↔ "electrician service call cost"), not "see our other guide". No URL change.

### 3. `/costs/plumber-hourly` vs `/costs/plumber-service-call`

- Same analysis as the electrician pair: rate question vs visit question, 6% overlap, different outlines, cross-linked.
- **Recommendation: keep separate.** Same anchor-text tightening. There is a third page in this family, `/costs/plumber-hourly-rate-canada`, which is geographically distinct and not a cannibal.

## The advice / what-is-this pairs (four of them)

The site has two pillars answering the same symptom: `/advice/<symptom>` (long-form: causes, fixes, costs) and `/what-is-this/<symptom>` (short diagnostic: what it usually means, safety, 5-minute check, when to call). Text overlap is 6% and the outlines are genuinely different, so this is a **deliberate two-page pattern**, not accidental duplication. But:

- The **titles compete**. "Toilet leaking at the base: causes, fixes, and what to do next" and "Toilet leaking at the base — what it actually means" will be judged by Google as two answers to "toilet leaking at base". One will be filtered.
- The **what-is-this page never links back** to the advice page (3 of 4 pairs), so the diagnostic page is a dead end and the link equity flows one way.
- The ceiling-stain pair links neither way.

**Recommendation: keep both, but make the roles explicit in the titles and link them as a sequence.**
- what-is-this titles → "Is it serious? <symptom> in 5 minutes" framing (diagnostic intent, e.g. "Toilet leaking at the base: is it serious, and what's it likely to be?").
- advice titles keep the fix/cost intent ("…causes, fixes, and what to do next").
- Every what-is-this page ends with "Once you know what it is → full fix guide" linking to the advice page; every advice page opens with "Not sure what you're looking at? → 5-minute diagnostic" linking to what-is-this.
- Revisit after 90 days of Search Console data. If Google consistently ranks only one of each pair, merge into the survivor with a 301.

## Anchor-text strategy (site-wide)

Internal links between sibling pages currently use generic anchors ("see our guide", "→ Related"). For every pair above, the anchor pointing at page B should be B's target query. That is what tells Google which page owns which query. This is a copy change in `related:` labels and inline links, no URL change.

## What would change URLs (not done)

Only two candidates, both conditional on 90 days of Search Console data:
1. `drywall-repair` → 301 → `drywall-patch-cost` (if re-scoping fails to separate them)
2. any advice/what-is-this pair where Google filters one page for 90 days → 301 to the survivor

Before either: export the losing page's inbound links, update every internal link to the survivor, merge any unique content into the survivor, add the redirect in `next.config.ts`, and re-run `npm run content-qa` (which fails on internal links that land on a redirect).
