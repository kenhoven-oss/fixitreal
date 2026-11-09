# Networx Lead-Generation Compliance Program

**Owner:** Kenneth Hoven (site owner; acts as compliance officer)
**Covers:** FixItReal.com and, once approved by Networx in writing, HomeRepairPlanner.com
**Governing documents:** Networx Marketing Services Agreement V202609, Insertion Order, and
Exhibit A Compliant Traffic Guidelines — all signed 2026-11-09, PandaDoc ref WBQ9S-AQRCK-9YMTF-9WUB7
**Version:** 1.0 — 2026-11-09. Review at least annually and whenever the MSA, Exhibit A, or Applicable Law changes.

This is the written compliance program required by MSA §6 ("Affiliate shall implement and maintain
a documented compliance program that includes, at a minimum: (a) written policies and procedures
… (b) regular training … (c) ongoing monitoring and quality assurance … (d) prompt investigation
and remediation"). It must be producible to Networx within five business days of a request (MSA §7).
It is not legal advice; it is the operating standard the site holds itself to.

---

## 1. Scope and how leads are generated

- The only lead mechanism is **Networx's own embedded form** (`api.networx.com/iframe.php`) rendered
  on `/get-quotes`. The consumer types their details into Networx's iframe; they go to Networx
  directly. The site's servers never receive, store, or process lead data.
- The site does **not** operate call campaigns, outbound dialing, email or SMS marketing to leads,
  co-registration, sweepstakes, or any Third-Party Source. If any of these are ever contemplated,
  Networx's written approval in an IO is required first (MSA §5).
- Every lead is exclusive to Networx. No lead is sent to, or shared with, any other lead service
  (MSA §5 exclusivity).

## 2. Policies

### 2.1 Consent and disclosure (MSA §6, Exhibit A §3)
1. The TCPA consent language in `src/components/leadgen/TcpaConsent.tsx` is displayed in normal body
   text directly beneath the form on every page that hosts it. It must always:
   - name **Networx Systems, Inc. and its Partners**, with "Partners" hyperlinked to
     `https://www.networx.com/third-party-contractors`;
   - state that the consumer may be contacted by **phone, text message, and email**, including by
     **automatic telephone dialing system and artificial or prerecorded voice**, at the number provided;
   - state that consent is **not a condition of purchase**;
   - describe the purposes (responding to the request and related home-service offers), that the
     request may be shared and resold, and the consumer's rights to opt out, revoke, and delete.
2. No pre-checked boxes, pop-unders, hidden text, tiny type, or disclosures placed after the submit
   action. The site adds no consent mechanism of its own; the submit action is Networx's.
3. The privacy policy carries a "Contractor quote requests" section and a "Do not sell or share"
   choice; the terms of use carry a contractor-quote-requests paragraph; the affiliate disclosure
   names Networx. All three switch wording automatically when the form goes live.
4. **Any change** to the consent wording requires: bumping `TCPA_CONSENT_VERSION`, an entry in
   `consent-language-log.md`, and Networx's written re-approval **before** deployment.

### 2.2 Truthful marketing (Exhibit A §1–2)
1. Pages and components that market the quote form may not use the Exhibit A phrases (incentives,
   government/funding claims, "pre-screened", "licensed and insured", "#1 rated", pricing or savings
   guarantees, "online estimate", quizzes/surveys) or urgency/scarcity, and may not disparage
   contractors or imply Networx endorsement. `npm run check-networx-copy` enforces this on
   Networx-facing files and warns on editorial content; it runs in `check-all` on every change.
2. Copy must say plainly that Networx does the matching, that the site has not vetted the
   contractors, that contractors pay Networx, and that the site earns a fee.
3. Networx's name is used only as required for disclosure. No Networx logo or trademark is used
   without written permission. No brand bidding.
4. Networx may require changes to any page; such requests are implemented within five business days.

### 2.3 Placement
The form and its CTA appear only where a reader has already decided to hire a professional (cost
articles, DIY-or-hire verdicts, the `/get-quotes` page). Never beside safety instructions, inside
calculators or tools, on the homepage, or on policy pages — the same rules as display advertising.

### 2.4 Data handling and security (MSA §7, §9)
1. The site holds no lead PII. Networx's affiliate dashboard shows lead status; dashboard credentials
   are personal to the owner, protected by a unique password and two-factor authentication where
   offered, and never shared.
2. Any consumer request received by email (opt-out, deletion, complaint) is handled per
   `consumer-request-procedure.md` and the email retained for five years.
3. **Suspected breach or unauthorized access** to the dashboard, the site's hosting account, or any
   consumer data: notify Networx (Josh Zlotnick and Legal@networx.com) **within 24 hours** of
   discovery, cooperate with their investigation, and do not notify third parties without Networx's
   consent unless the law requires it.

### 2.5 Records (MSA §7, Exhibit A §3)
Retained for **five years**, producible within five business days:
| Record | Where |
|---|---|
| Exact consent language shown, by version and date | Git history of `TcpaConsent.tsx` + `consent-language-log.md` |
| The page as rendered | Git history; Vercel deployment history; screenshot filed in `evidence/` at each go-live and wording change |
| Per-lead timestamp, IP, user agent, TrustedForm certificate | Captured by Networx inside its iframe (see §5 open item) |
| Consumer requests and forwarding | `consumer-request-log.csv` + the emails |
| Training | `training-log.md` |
| Monitoring checks | `monitoring-log.md` |
| Invoices and Networx remittances | `invoices/` (see `invoice-procedure.md`) |

### 2.6 Change management (MSA §14)
Networx is told **in advance, in writing**, before: adding a new site or domain, adding a new
source of traffic, changing the consent wording or disclosures, or changing how the form is placed.

## 3. Training
- The owner reads the MSA, Exhibit A, and this program on adoption and at least once a year, and
  records it in `training-log.md`.
- Anyone else who writes copy for or edits the site (contractor, assistant, AI-assisted workflow)
  is given §2.1–2.3 of this document before touching Networx-facing pages, and is recorded in the log.

## 4. Monitoring and quality assurance
**Automated, on every change:** `npm run check-all` runs `check-networx-copy` (prohibited phrases
on Networx-facing surfaces; consent-language invariants) and the unit tests that prove nothing
Networx-related renders without configuration.

**Monthly (first week of the month), recorded in `monitoring-log.md`:**
1. Open `/get-quotes` on production: form loads, consent block present, Partners link resolves to the
   Networx page, version stamp matches `consent-language-log.md`.
2. Privacy, terms, and disclosure pages read correctly for the live state.
3. Consumer-request log reviewed: every item forwarded within three business days.
4. Networx dashboard reviewed for rejected leads, chargebacks, or compliance notes; any pattern
   investigated under §5.
5. Invoice for the prior month submitted by the 15th.

**Annually:** re-read the MSA/Exhibit A for changes Networx has published; review this program;
confirm CCPA/state-law thresholds (see §6).

## 5. Investigation and remediation
Trigger: a consumer complaint, a Networx notice, a chargeback pattern, an automated check failure,
or any suspicion of non-compliance.
1. **Contain** — if the issue could affect consumers (wrong consent text, broken link, form appearing
   where it should not), remove the Networx env vars in Vercel and redeploy. The form disappears
   site-wide within minutes; nothing else on the site changes.
2. **Notify** — Networx within three business days (MSA §5), or 24 hours for a security incident.
3. **Record** — what happened, when, how found, consumers affected, in `monitoring-log.md`.
4. **Fix and verify** — correct the cause, run `check-all`, confirm on production, re-enable.
5. **Prevent** — add a check or a step to this program so it cannot recur silently.

**Open item at adoption (must be closed before go-live):** the MSA requires an unmasked TrustedForm
certificate for every lead. With Networx's embedded form, only Networx can generate and retain it.
Written confirmation from Networx that the embedded form satisfies the TrustedForm and consent-
record requirements is required before `/get-quotes` is activated. File the confirmation in `evidence/`.

## 6. Applicable-law watch list
Not legal advice; items to monitor and to raise with a privacy attorney when thresholds approach.
- **TCPA / FCC rules** — the consent language is written to the one-to-one consent and ATDS/
  prerecorded standards; Networx's Partners page is the named-seller list.
- **Florida Telephone Solicitation Act** (owner is a Florida registrant) and other state mini-TCPAs —
  covered by the express-written-consent wording; watch for changes.
- **CCPA/CPRA** — applies to a business that, among other tests, derives **50% or more of annual
  revenue from selling or sharing personal information**. If Networx referral fees approach half of
  a site's revenue, obtain legal advice on a formal "Do Not Sell or Share" process, a privacy notice
  at collection, and request-verification procedures. The footer link and privacy section already
  provide the mechanism.
- **CAN-SPAM** — not applicable (the site sends no marketing email to leads); re-check if that changes.

## 7. Contacts
- Networx business development: Josh Zlotnick, josh@networx.com, (478) 312-6591
- Networx legal notices: Legal@networx.com
- Networx accounts payable: AccountsPayable@networx.com
- Site: hello@fixitreal.com / ken.hoven@gmail.com
