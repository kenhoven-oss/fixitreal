# Consumer request procedure — opt-outs, revocations, deletions, complaints

**Why:** MSA §5 — each party must notify the other **within three (3) business days** of any
opt-out, consent revocation, do-not-contact request, deletion request, complaint, demand, attorney
letter, subpoena, or regulatory inquiry relating to a lead, and must promptly act on it. MSA §6 —
honor and implement all such requests. The privacy policy promises a reply within three business days.

**Intake channels (check every business day):** hello@fixitreal.com, ken.hoven@gmail.com, and any
reply to a site contact form. Treat a message as a request if it asks, in any words, to stop calls
or texts, withdraw a quote request, delete information, or complains about a contractor or about
contact received after using the form.

## Steps

| # | Action | Deadline |
|---|--------|----------|
| 1 | **Log it** in `consumer-request-log.csv`: date received, channel, type, the identifier the consumer gave (phone or email — nothing more than they provided), site. | Same day |
| 2 | **Acknowledge** the consumer using template A below. Do not ask for extra personal details; the identifier they used on the form is enough. | Within 1 business day |
| 3 | **Forward to Networx**: email josh@networx.com **and** Legal@networx.com using template B. Include the consumer's identifier, the site, the date of the original request if known, and what they asked for. For a subpoena, attorney letter, or regulator contact, forward the document itself. | Within 3 business days (same day for legal/regulatory items) |
| 4 | **Record the forwarding** (date, to whom) in the log. | Same day as step 3 |
| 5 | **Close the loop**: when Networx confirms, note it in the log and, if the consumer asked, tell them (template C). If Networx has not confirmed in 5 business days, follow up. | — |
| 6 | **Retain** the emails for five years (MSA §7). Keep the log in the repo; keep emails in a labelled Gmail folder "Networx – consumer requests". | 5 years |

## If the complaint suggests a site problem
A consumer says they never agreed to be contacted, saw no consent text, or were misled → this is a
potential consent defect. Follow §5 of `networx-compliance-program.md`: contain (pull the env vars if
the page is wrong), notify Networx, investigate, fix, record.

## Templates

**A — acknowledgement to consumer**
> Subject: Your request — FixItReal
> Thank you for contacting us. We have received your request to [stop contact / withdraw your quote request / delete your information]. Quote requests on our site are handled by Networx Systems, Inc., so we are passing your request to them today, using the [phone number / email] you provided. You should stop receiving contact shortly; replying STOP to any text message also stops texts from that sender immediately. If you are still contacted after a week, reply to this email and we will escalate. — Ken Hoven, FixItReal

**B — forwarding to Networx**
> Subject: Consumer request — [opt-out / deletion / complaint] — FixItReal — [date]
> Hi Josh / Legal team — per MSA §5, forwarding a consumer request received on [date] via [channel]. Consumer identifier: [phone/email as provided]. Site: FixItReal.com. Request: [stop all contact / delete information / complaint summary]. Original quote request date, if known: [date]. Please confirm when processed and suppressed across your buyers. — Ken Hoven

**C — closing note to consumer**
> Networx has confirmed your request was processed on [date]. If you receive further contact from a contractor about this request, reply here with the caller's name or number and we will follow up.

## Log format
See `consumer-request-log.csv`. One row per request; never store more identifying detail than the
consumer supplied.
