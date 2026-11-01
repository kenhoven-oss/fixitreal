# Smoke & CO alarm requirements at property sale/transfer — research brief

Gathering VERIFIED, CITABLE state law on what a seller must have in place when
a one- or two-family home changes hands. This gets published on a consumer
advice site, so an unsourced claim is worse than no claim.

## For each state assigned to you, find

A. **Is there a requirement at sale/transfer?** Does state law require working
   smoke alarms (and/or CO alarms) as a condition of sale, transfer of title,
   or occupancy? Some states require it at sale specifically; others only
   require alarms generally and nothing special at transfer. Both answers are
   useful — say which it is.
B. **Alarm type required** — e.g. 10-year sealed lithium battery, hardwired,
   interconnected, photoelectric, combination smoke/CO. Only what the statute
   or rule actually says.
C. **Who certifies, and how** — does anyone have to inspect or sign off (fire
   department certificate, seller affidavit, nothing)?
D. **CO alarms** — treated separately where the state does.
E. **Statute or rule citation** — the actual cite (e.g. "Mass. G.L. c. 148
   s. 26F") plus the URL you read it on.

## Hard rules — these outrank completeness

- ONLY official sources: the state legislature's own site, the state fire
  marshal, a state agency, or a .gov publication of the statute. Cornell LII
  is acceptable for federal only. A state bar or realtor-association summary
  is NOT acceptable as the source of the rule, though it may help you find the
  cite — follow it to the statute and cite that.
- NEVER infer, generalise from a neighbouring state, or state a requirement
  you did not read. If you cannot verify, say NOT VERIFIED.
- Do NOT use Rocket Lawyer, LegalZoom, realtor.com, Zillow, Redfin, HomeAdvisor,
  Angi, law-firm blogs or any lead-gen/marketing page as a source for the rule.
- Quote nothing at length. Write each fact in your own words, short and plain.
  This is a consumer page, not a brief.
- Note the date the statute was last amended if the source shows it.
- Never try to get past a bot check. Note the block and move on.
- Use curl via Bash to fetch; WebSearch to find pages. WebFetch only where
  curl has actually failed.

## Output — one JSON file per state

Write `/home/claude/fixitreal/research/smoke-alarm-sale/<state-slug>.json`
(e.g. `massachusetts.json`), as soon as each state is done:

```json
{
  "state": "Massachusetts",
  "stateSlug": "massachusetts",
  "verifiedOn": "2026-11-01",
  "requiredAtSale": true,
  "summary": "One plain sentence a homeowner understands.",
  "alarmType": "10-year sealed battery or hardwired, photoelectric …",
  "coAlarms": "What the state requires, or null.",
  "certification": "Who signs off, or null.",
  "citation": "Mass. G.L. c. 148 s. 26F",
  "sourceUrl": "https://malegislature.gov/...",
  "lastAmended": "2016",
  "notVerified": ["…"]
}
```

- `requiredAtSale`: true / false / null when genuinely unclear. null is a
  legitimate answer and better than a guess.
- Set any field you could not verify to null. Omit nothing from `notVerified`.

## Your reply

One line per state: `<state>: required-at-sale <yes|no|unclear> — <cite or gap>`.
Do not paste JSON or research into your reply.
