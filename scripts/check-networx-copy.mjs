#!/usr/bin/env node
/**
 * Networx copy-compliance check.
 *
 * Exhibit A (Compliant Traffic Guidelines) of the Networx Marketing Services
 * Agreement, signed 2026-11-09, lists phrases that are prohibited in marketing
 * material used in connection with contractor referrals: incentives, government
 * or funding claims, misleading rankings/certifications, misleading pricing and
 * financing claims, misleading offerings, and surveys/quizzes.
 *
 * Two tiers:
 *   - STRICT surfaces (fail the build): anything that markets the quote form —
 *     the /get-quotes page, the lead-gen components, the in-article CTA, and
 *     the policy pages that describe the program.
 *   - Everything else (warn only): editorial content legitimately says things
 *     like "ask whether the plumber is licensed and insured". Those are advice
 *     to the homeowner, not claims about Networx contractors. The warning list
 *     is printed so each new hit gets a human look.
 *
 * Also asserts the consent component still contains the exact phrase and link
 * Networx requires, so a careless edit can't silently break the approval.
 *
 *   node scripts/check-networx-copy.mjs
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;

// Multi-word marketing phrases: flagged everywhere (warn in editorial, fail on strict surfaces).
const PHRASES = [
  // Incentives and promotions
  "free installation", "free service", "gift card", "sweepstakes", "claim your reward",
  // Government or funding claims
  "government approved", "federal program", "state program", "funding available",
  "prequalify", "pre-qualify", "prequalified", "pre-qualified", "apply now",
  // Misleading rankings or certifications
  "#1 rated", "best contractor", "certified contractors", "pre-screened", "prescreened", "licensed and insured",
  // Misleading pricing or financing claims
  "guaranteed savings", "lowest price", "big savings", "zero down", "no money out of pocket",
  // Misleading offerings
  "online estimate", "online approval", "never before", "revolutionary",
  // Surveys / quizzes
  "take this quiz", "consumer survey", "questionnaire required",
];
// Single words from the same list. Ordinary in repair articles ("a cheap fix", "a utility rebate"),
// so they are checked only on the strict, Networx-facing surfaces.
const STRICT_ONLY_WORDS = ["prize", "grant", "rebate", "accredited", "cheap"];

const STRICT = [
  "src/app/get-quotes",
  "src/components/leadgen",
  "src/components/marketing/QuoteRequestCTA.tsx",
  "src/app/privacy/page.tsx",
  "src/app/affiliate-disclosure/page.tsx",
  "src/app/terms/page.tsx",
];

const SCAN_DIRS = ["src/app", "src/components", "src/content", "src/lib"];
const EXT = /\.(tsx?|mdx?|json)$/;

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (EXT.test(name) && !/\.generated\./.test(name)) out.push(p);
  }
  return out;
}

const files = SCAN_DIRS.flatMap((d) => walk(join(ROOT, d)));
const strictHits = [];
const softHits = [];

for (const file of files) {
  const rel = relative(ROOT, file);
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  const strict = STRICT.some((s) => rel.startsWith(s));
  const phrases = strict ? [...PHRASES, ...STRICT_ONLY_WORDS] : PHRASES;
  lines.forEach((line, i) => {
    const lower = line.toLowerCase();
    for (const phrase of phrases) {
      // Word-boundary match so "grant" doesn't hit "granted" and "cheap" doesn't hit "cheaper".
      const re = new RegExp(`(^|[^a-z0-9])${phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}($|[^a-z0-9])`, "i");
      if (re.test(lower)) {
        const hit = { file: rel, line: i + 1, phrase, text: line.trim().slice(0, 140) };
        (strict ? strictHits : softHits).push(hit);
      }
    }
  });
}

// Consent-language invariants (what Networx actually checks).
const consent = readFileSync(join(ROOT, "src/components/leadgen/TcpaConsent.tsx"), "utf8");
const lib = readFileSync(join(ROOT, "src/lib/networx.ts"), "utf8");
const invariants = [
  [/Networx Systems, Inc\. and its\{" "\}\s*<a[^>]*href=\{TCPA_PARTNERS_URL\}/s.test(consent), "consent names 'Networx Systems, Inc. and its Partners' with the Partners link"],
  [/https:\/\/www\.networx\.com\/third-party-contractors/.test(lib), "TCPA_PARTNERS_URL is the Networx third-party-contractors page"],
  [/automatic telephone dialing system/i.test(consent), "consent mentions an automatic telephone dialing system"],
  [/prerecorded voice/i.test(consent), "consent mentions artificial or prerecorded voice"],
  [/text \(SMS\)\s*\n?\s*messages, and email/i.test(consent) || /text.*email/is.test(consent), "consent covers text and email"],
  [/not a condition of purchasing/i.test(consent), "consent says it is not a condition of purchase"],
  [/STOP/.test(consent), "consent gives the STOP opt-out"],
  [/TCPA_CONSENT_VERSION = "\d{4}-\d{2}-\d{2}"/.test(lib), "TCPA_CONSENT_VERSION is a dated stamp"],
];

let failed = false;
for (const [ok, label] of invariants) {
  if (!ok) { console.error(`✖ consent invariant failed: ${label}`); failed = true; }
}

if (strictHits.length) {
  failed = true;
  console.error(`✖ ${strictHits.length} prohibited phrase(s) on Networx-facing surfaces:`);
  for (const h of strictHits) console.error(`   ${h.file}:${h.line}  "${h.phrase}"  → ${h.text}`);
}
if (softHits.length) {
  console.warn(`▲ ${softHits.length} Exhibit A phrase(s) in editorial content (review, not blocking):`);
  for (const h of softHits) console.warn(`   ${h.file}:${h.line}  "${h.phrase}"`);
}

console.log(
  `check-networx-copy: ${files.length} file(s) · ${strictHits.length} strict hit(s) · ${softHits.length} editorial hit(s) · ${invariants.filter(([ok]) => ok).length}/${invariants.length} consent invariants ok`
);
process.exit(failed ? 1 : 0);
