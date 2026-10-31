# Local permit & code research brief

You are gathering VERIFIED, CITABLE local permit and code facts for a
home-repair cost website. Your findings get published, so an unsourced
figure is worse than no figure.

The site has five cost guides. These exact slugs matter:
- `electrician-service-call`
- `garbage-disposal-replacement`
- `plumber-service-call`
- `smoke-detector-replacement`
- `water-heater-replacement`

## For each city assigned to you, find

A. **Permits** — for each of the five jobs: does this city require a permit?
   If yes, the actual published dollar fee, and what it covers (flat fee /
   per-fixture / valuation-based / minimum fee). Note if inspection is included.
B. **Who pulls it** — may a homeowner pull their own plumbing/electrical
   permit here, or only a licensed/registered contractor?
C. **Local registration** — does the city require trade registration on top
   of the state license? Fee or bond amount if published.
D. **Local code items** — 2 to 5 specific things an inspector in THIS city
   checks on water-heater or electrical work that a national guide would not
   mention. Examples of the KIND of thing: thermal expansion tank, drain pan,
   TPR discharge termination, seismic strapping, AFCI/GFCI scope, aluminum
   branch wiring remediation, backflow prevention, sediment trap, combustion
   air. Only report ones you can actually source to the city or its adopted code.
E. **Code edition in force** — e.g. "2021 IRC as amended by <city>", plus the
   city's own amendments if published.

## Hard rules — these outrank completeness

- ONLY official sources: the city's own .gov pages, the county .gov, the
  city's codified ordinances, the state building-standards or licensing
  board. Municode / American Legal Publishing / eCode360 hosting the city's
  own code is acceptable. A state code is acceptable for item E and for code
  items the city adopts wholesale.
- NEVER estimate, interpolate, average, round or infer a dollar figure. If the
  authority does not publish a number you can see, omit the `fee` field.
- NEVER use Angi, Thumbtack, HomeAdvisor, Fixr, HomeGuide, Porch, Yelp,
  contractor blogs or marketing pages. Not for any fact, not even a cross-check.
- Every fact carries the exact source URL it came from. Different facts will
  come from different documents; that is expected.
- If you cannot verify something, leave it out and list it under `notVerified`.
  A city with only two verified facts is a correct result.
- Do not copy sentences from sources. Write each fact in your own words, short
  and factual. No long quotations.

## Output — write one JSON file per city, then stop

Write to `/home/claude/fixitreal/research/local/<city-slug>.json` using the
slug given to you. Exact schema:

```json
{
  "citySlug": "cleveland-oh",
  "cityName": "Cleveland",
  "stateAbbr": "OH",
  "verifiedOn": "2026-10-31",
  "authority": { "name": "Cleveland Dept. of Building & Housing", "url": "https://..." },
  "codeEdition": { "text": "...", "sourceUrl": "https://..." },
  "permitPolicy": { "text": "...", "sourceUrl": "https://..." },
  "registration": { "text": "...", "sourceUrl": "https://..." },
  "codeItems": [ { "text": "...", "sourceUrl": "https://..." } ],
  "byGuide": {
    "water-heater-replacement": { "requirement": "...", "fee": "$XX", "sourceUrl": "https://..." }
  },
  "notVerified": ["smoke-detector-replacement permit fee", "..."]
}
```

Rules for the file:
- `authority` and `verifiedOn` are required. Use `2026-10-31` for verifiedOn.
- Include a key in `byGuide` ONLY if you verified it with a real URL. Omitting
  a guide is normal and correct.
- `requirement` is one plain sentence a homeowner would understand, e.g.
  "A plumbing permit is required to replace a water heater, and the city
  inspects the TPR discharge and expansion tank."
- Set `codeEdition`, `permitPolicy`, `registration` to null if unverified.
- `fee`: copy the published figure verbatim, e.g. "$75 minimum permit fee" or
  "$50 base + $10 per fixture". Omit the field entirely if unpublished.
- Valid JSON only. No comments. No trailing commas.

## Your reply back to me

Two lines maximum per city, in this form:
`<city-slug>: <n> guides verified, <n> code items — <one-line note on gaps>`

Do NOT paste the JSON or the research into your reply. The files are the
deliverable. Keep the reply under 10 lines total.
