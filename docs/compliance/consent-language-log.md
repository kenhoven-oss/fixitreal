# Consent language log

The MSA (§7) requires us to be able to produce the exact consent language a consumer saw. Each row
is one version of `src/components/leadgen/TcpaConsent.tsx`; the version string is also rendered on
the page and in `data-consent-version` on the consent block, so a screenshot or capture can be
matched to a row. Add a row **before** deploying any wording change, and do not deploy until the
Networx approval column is filled.

| Version | Date | Git commit | Summary of change | Sent to Networx | Networx approval (who / date / where filed) |
|---|---|---|---|---|---|
| 2026-11-09 | 2026-11-09 | (this PR) | Initial wording: names Networx Systems, Inc. and its Partners (linked); phone, text and email; ATDS and artificial/prerecorded voice; not a condition of purchase; resale disclosure; opt-out/revoke/delete rights. | Pending — send preview link / screenshot to Josh Zlotnick | Pending — file email in `evidence/` |

## Evidence folder
`evidence/` holds, per version: a full-page screenshot of `/get-quotes` as deployed (production once
live, preview before), and the Networx approval email exported as PDF. Name files
`YYYY-MM-DD-<site>-get-quotes.png` and `YYYY-MM-DD-networx-approval.pdf`.
