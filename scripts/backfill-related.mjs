#!/usr/bin/env node
/**
 * One-off script to backfill `related:` frontmatter fields on articles that
 * are missing cross-pillar internal links. Adds the field after the FAQ /
 * citations block in each MDX file. Idempotent: if `related:` already
 * exists in a file's frontmatter, we skip it.
 *
 * Run from project root:
 *   node scripts/backfill-related.mjs
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, "..");

/** Map of file relative path → array of related link objects. */
const updates = {
  // ---------- home-inspection-repairs ----------
  "src/content/articles/home-inspection-repairs/sellers-replace-smoke-detectors-before-closing.mdx":
    [
      { path: "/diy-or-hire/smoke-detector", label: "DIY or hire: smoke detector replacement" },
      { path: "/costs/smoke-detector-replacement", label: "Cost guide: smoke detector replacement" },
      { path: "/tools/best-smoke-detectors-for-homeowners", label: "Best smoke detectors for homeowners" },
    ],
  "src/content/articles/home-inspection-repairs/which-inspection-repairs-sellers-must-fix.mdx": [
    { path: "/home-inspection-repairs/seller-refuse-repair-requests", label: "Can a seller refuse buyer repair requests?" },
    { path: "/home-inspection-repairs/repair-credit-vs-fix-before-closing", label: "Repair credit vs. fix before closing" },
    { path: "/contractor-red-flags", label: "Contractor red flags" },
  ],
  "src/content/articles/home-inspection-repairs/seller-refuse-repair-requests.mdx": [
    { path: "/home-inspection-repairs/which-inspection-repairs-sellers-must-fix", label: "Which inspection repairs sellers must fix" },
    { path: "/home-inspection-repairs/repair-credit-vs-fix-before-closing", label: "Repair credit vs. fix before closing" },
  ],
  "src/content/articles/home-inspection-repairs/repair-credit-vs-fix-before-closing.mdx": [
    { path: "/home-inspection-repairs/seller-refuse-repair-requests", label: "Can a seller refuse buyer repair requests?" },
    { path: "/home-inspection-repairs/which-inspection-repairs-sellers-must-fix", label: "Which inspection repairs sellers must fix" },
  ],
  "src/content/articles/home-inspection-repairs/bathroom-exhaust-fan-vent-under-porch.mdx": [
    { path: "/costs/bathroom-exhaust-fan-vent-repair", label: "Cost guide: bathroom exhaust fan vent repair" },
    { path: "/home-inspection-repairs/which-inspection-repairs-sellers-must-fix", label: "Which inspection repairs sellers must fix" },
  ],

  // ---------- senior-home-safety ----------
  "src/content/articles/senior-home-safety/bathroom-safety.mdx": [
    { path: "/senior-home-safety/best-grab-bars-for-showers", label: "Best grab bars for showers" },
    { path: "/senior-home-safety/grab-bar-installation-cost", label: "Grab bar installation cost" },
    { path: "/senior-home-safety/walk-in-tub-vs-walk-in-shower", label: "Walk-in tub vs walk-in shower" },
    { path: "/senior-home-safety/home-safety-checklist-for-elderly-parents", label: "Home safety checklist for elderly parents" },
  ],
  "src/content/articles/senior-home-safety/best-grab-bars-for-showers.mdx": [
    { path: "/senior-home-safety/grab-bar-installation-cost", label: "Grab bar installation cost" },
    { path: "/senior-home-safety/bathroom-safety", label: "Bathroom safety for seniors" },
    { path: "/senior-home-safety/home-safety-checklist-for-elderly-parents", label: "Home safety checklist for elderly parents" },
  ],
  "src/content/articles/senior-home-safety/grab-bar-installation-cost.mdx": [
    { path: "/senior-home-safety/best-grab-bars-for-showers", label: "Best grab bars for showers" },
    { path: "/senior-home-safety/bathroom-safety", label: "Bathroom safety for seniors" },
  ],
  "src/content/articles/senior-home-safety/home-safety-checklist-for-elderly-parents.mdx": [
    { path: "/senior-home-safety/bathroom-safety", label: "Bathroom safety for seniors" },
    { path: "/senior-home-safety/how-to-make-stairs-safer-for-seniors", label: "How to make stairs safer for seniors" },
    { path: "/senior-home-safety/best-grab-bars-for-showers", label: "Best grab bars for showers" },
    { path: "/tools/best-smoke-detectors-for-homeowners", label: "Best smoke detectors for homeowners" },
    { path: "/tools/best-carbon-monoxide-detectors", label: "Best carbon-monoxide detectors" },
  ],
  "src/content/articles/senior-home-safety/how-to-make-stairs-safer-for-seniors.mdx": [
    { path: "/senior-home-safety/bathroom-safety", label: "Bathroom safety for seniors" },
    { path: "/senior-home-safety/home-safety-checklist-for-elderly-parents", label: "Home safety checklist for elderly parents" },
  ],
  "src/content/articles/senior-home-safety/walk-in-tub-vs-walk-in-shower.mdx": [
    { path: "/senior-home-safety/bathroom-safety", label: "Bathroom safety for seniors" },
    { path: "/senior-home-safety/best-grab-bars-for-showers", label: "Best grab bars for showers" },
    { path: "/contractor-red-flags", label: "Contractor red flags" },
  ],

  // ---------- emergency-repairs ----------
  "src/content/articles/emergency-repairs/water-leaking-from-ceiling.mdx": [
    { path: "/costs/plumber-service-call", label: "Plumber service call cost" },
    { path: "/tools/best-moisture-meters-for-homeowners", label: "Moisture meters for finding the source" },
    { path: "/tools/best-shop-vacs-for-water-cleanup", label: "Shop vacs for water cleanup" },
    { path: "/tools/best-water-leak-detectors", label: "Best water leak detectors" },
  ],
  "src/content/articles/emergency-repairs/pipe-burst-first-10-minutes.mdx": [
    { path: "/emergency-repairs/water-leaking-from-ceiling", label: "Water leaking from ceiling" },
    { path: "/costs/plumber-service-call", label: "Plumber service call cost" },
    { path: "/tools/best-water-leak-detectors", label: "Best water leak detectors" },
    { path: "/tools/best-shop-vacs-for-water-cleanup", label: "Shop vacs for water cleanup" },
  ],
  "src/content/articles/emergency-repairs/outlet-smoking.mdx": [
    { path: "/advice/breaker-keeps-tripping", label: "Breaker keeps tripping: DIY checks" },
    { path: "/advice/gfci-outlet-keeps-tripping", label: "GFCI outlet keeps tripping" },
    { path: "/costs/electrician-service-call", label: "Electrician service call cost" },
    { path: "/tools/best-fire-extinguishers-for-home", label: "Best fire extinguishers for home" },
  ],
  "src/content/articles/emergency-repairs/toilet-overflowing.mdx": [
    { path: "/advice/toilet-leaking-at-the-base", label: "Toilet leaking at the base" },
    { path: "/diy-or-hire/toilet", label: "Should I fix a leaking toilet myself?" },
    { path: "/diy-or-hire/unclog-drain", label: "Should I unclog the drain myself?" },
    { path: "/tools/best-plungers-for-homeowners", label: "Best plungers for homeowners" },
  ],

  // ---------- what-is-this ----------
  "src/content/articles/what-is-this/outlet-with-buttons.mdx": [
    { path: "/diy-or-hire/gfci-outlet", label: "Should I replace a GFCI outlet myself?" },
    { path: "/advice/gfci-outlet-keeps-tripping", label: "GFCI outlet keeps tripping" },
    { path: "/advice/breaker-keeps-tripping", label: "Breaker keeps tripping" },
    { path: "/tools/best-voltage-testers-for-homeowners", label: "Voltage testers" },
  ],
  "src/content/articles/what-is-this/valve-near-water-heater.mdx": [
    { path: "/diy-or-hire/water-heater", label: "Should I replace my own water heater?" },
    { path: "/advice/water-heater-leaking", label: "Water heater is leaking" },
    { path: "/costs/water-heater-replacement", label: "Water heater replacement cost" },
    { path: "/advice/tankless-vs-tank-water-heater", label: "Tankless vs tank water heater" },
  ],
  "src/content/articles/what-is-this/pipe-under-sink.mdx": [
    { path: "/advice/sink-drain-leaking-under-kitchen-sink", label: "Sink drain leaking under kitchen sink" },
    { path: "/advice/garbage-disposal-humming-not-spinning", label: "Garbage disposal humming but not spinning" },
    { path: "/diy-or-hire/garbage-disposal", label: "Should I replace my own garbage disposal?" },
    { path: "/tools/best-drain-snakes-for-homeowners", label: "Drain snakes — choosing the right one" },
  ],

  // ---------- costs (the ones missing related links) ----------
  "src/content/articles/costs/bathroom-exhaust-fan-vent-repair.mdx": [
    { path: "/home-inspection-repairs/bathroom-exhaust-fan-vent-under-porch", label: "Bath fan venting under porch roof" },
    { path: "/advice/ceiling-water-stain", label: "Ceiling water stain — no active leak" },
    { path: "/tools/best-moisture-meters-for-homeowners", label: "Moisture meters" },
  ],
  "src/content/articles/costs/smoke-detector-replacement.mdx": [
    { path: "/diy-or-hire/smoke-detector", label: "Should I replace my own smoke detector?" },
    { path: "/home-inspection-repairs/sellers-replace-smoke-detectors-before-closing", label: "Do sellers have to replace smoke detectors before closing?" },
    { path: "/tools/best-smoke-detectors-for-homeowners", label: "Best smoke detectors for homeowners" },
  ],
  "src/content/articles/costs/plumber-hourly.mdx": [
    { path: "/costs/plumber-service-call", label: "Plumber service call cost" },
    { path: "/advice/signs-of-overpriced-quote", label: "Signs of an overpriced quote" },
    { path: "/contractor-red-flags", label: "Contractor red flags" },
  ],
  "src/content/articles/costs/electrician-hourly.mdx": [
    { path: "/costs/electrician-service-call", label: "Electrician service call cost" },
    { path: "/advice/breaker-keeps-tripping", label: "Breaker keeps tripping: DIY checks" },
    { path: "/contractor-red-flags", label: "Contractor red flags" },
  ],

  // ---------- diy-or-hire cross-pillar additions ----------
  "src/content/articles/diy-or-hire/smoke-detector.mdx": [
    { path: "/home-inspection-repairs/sellers-replace-smoke-detectors-before-closing", label: "Do sellers have to replace smoke detectors before closing?" },
    { path: "/tools/best-smoke-detectors-for-homeowners", label: "Best smoke detectors for homeowners" },
  ],
  "src/content/articles/diy-or-hire/gfci-outlet.mdx": [
    { path: "/what-is-this/outlet-with-buttons", label: "What is this outlet with buttons?" },
    { path: "/tools/best-voltage-testers-for-homeowners", label: "Voltage testers" },
  ],
  "src/content/articles/diy-or-hire/water-heater.mdx": [
    { path: "/advice/tankless-vs-tank-water-heater", label: "Tankless vs tank water heater" },
    { path: "/what-is-this/valve-near-water-heater", label: "What is this valve near my water heater?" },
  ],

  // ---------- advice cross-pillar additions ----------
  "src/content/articles/advice/water-heater-leaking.mdx": [
    { path: "/what-is-this/valve-near-water-heater", label: "What is this valve near my water heater?" },
    { path: "/advice/tankless-vs-tank-water-heater", label: "Tankless vs tank water heater" },
  ],
  "src/content/articles/advice/ceiling-water-stain.mdx": [
    { path: "/emergency-repairs/water-leaking-from-ceiling", label: "Water leaking from ceiling: what to do first" },
    { path: "/tools/best-moisture-meters-for-homeowners", label: "Moisture meters" },
  ],
  "src/content/articles/advice/breaker-keeps-tripping.mdx": [
    { path: "/emergency-repairs/outlet-smoking", label: "Outlet is smoking: what to do first" },
    { path: "/diy-or-hire/gfci-outlet", label: "Should I replace a GFCI outlet myself?" },
    { path: "/tools/best-voltage-testers-for-homeowners", label: "Voltage testers" },
  ],
  "src/content/articles/advice/gfci-outlet-keeps-tripping.mdx": [
    { path: "/what-is-this/outlet-with-buttons", label: "What is this outlet with buttons?" },
    { path: "/diy-or-hire/gfci-outlet", label: "Should I replace a GFCI outlet myself?" },
    { path: "/emergency-repairs/outlet-smoking", label: "Outlet is smoking: what to do first" },
  ],
  "src/content/articles/advice/sump-pump-not-working.mdx": [
    { path: "/emergency-repairs/water-leaking-from-ceiling", label: "Water leaking from ceiling" },
    { path: "/tools/best-water-leak-detectors", label: "Best water leak detectors" },
    { path: "/tools/best-shop-vacs-for-water-cleanup", label: "Shop vacs for water cleanup" },
  ],
  "src/content/articles/advice/toilet-leaking-at-the-base.mdx": [
    { path: "/emergency-repairs/toilet-overflowing", label: "Toilet overflowing: what to do first" },
  ],
  "src/content/articles/advice/sink-drain-leaking-under-kitchen-sink.mdx": [
    { path: "/what-is-this/pipe-under-sink", label: "What is this pipe under my sink?" },
    { path: "/tools/best-drain-snakes-for-homeowners", label: "Drain snakes" },
  ],
  "src/content/articles/advice/water-under-the-bathroom-sink.mdx": [
    { path: "/what-is-this/pipe-under-sink", label: "What is this pipe under my sink?" },
    { path: "/tools/best-moisture-meters-for-homeowners", label: "Moisture meters" },
  ],
  "src/content/articles/advice/garbage-disposal-humming-not-spinning.mdx": [
    { path: "/what-is-this/pipe-under-sink", label: "What is this pipe under my sink?" },
    { path: "/tools/best-plungers-for-homeowners", label: "Best plungers for homeowners" },
  ],
  "src/content/articles/advice/hidden-fees.mdx": [
    { path: "/contractor-red-flags", label: "Contractor red flags" },
  ],
  "src/content/articles/advice/vetting-a-contractor.mdx": [
    { path: "/contractor-red-flags", label: "Contractor red flags" },
    { path: "/home-inspection-repairs/which-inspection-repairs-sellers-must-fix", label: "Which inspection repairs sellers must fix" },
  ],
  "src/content/articles/advice/three-contractor-quotes.mdx": [
    { path: "/contractor-red-flags", label: "Contractor red flags" },
    { path: "/advice/roto-rooter-vs-local-plumber", label: "Roto-Rooter vs local plumber" },
  ],
  "src/content/articles/advice/signs-of-overpriced-quote.mdx": [
    { path: "/contractor-red-flags", label: "Contractor red flags" },
    { path: "/costs/plumber-service-call", label: "Plumber service call cost" },
    { path: "/costs/electrician-service-call", label: "Electrician service call cost" },
  ],
  "src/content/articles/advice/home-warranties-bad-deal.mdx": [
    { path: "/contractor-red-flags", label: "Contractor red flags" },
  ],
  "src/content/articles/advice/tankless-vs-tank-water-heater.mdx": [
    { path: "/what-is-this/valve-near-water-heater", label: "What is this valve near my water heater?" },
  ],
  "src/content/articles/advice/roto-rooter-vs-local-plumber.mdx": [
    { path: "/contractor-red-flags", label: "Contractor red flags" },
    { path: "/costs/plumber-service-call", label: "Plumber service call cost" },
  ],
};

function toYamlBlock(related) {
  let out = "related:\n";
  for (const r of related) {
    out += `  - path: "${r.path}"\n`;
    if (r.label) out += `    label: "${r.label.replace(/"/g, '\\"')}"\n`;
  }
  return out;
}

function inject(filePath, related) {
  const full = readFileSync(filePath, "utf8");

  // Frontmatter is the first ---...--- block.
  const fmMatch = full.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fmMatch) {
    console.warn(`SKIP (no frontmatter): ${filePath}`);
    return false;
  }
  if (/^related:/m.test(fmMatch[1])) {
    console.log(`SKIP (already has related:): ${filePath}`);
    return false;
  }

  // Insert the related: block right BEFORE the closing --- of frontmatter.
  // (Inserts as a sibling to the existing keys, keeps YAML valid.)
  const fmBody = fmMatch[1];
  const newFmBody = fmBody.replace(/\s*$/, "") + "\n" + toYamlBlock(related);
  const newFull = `---\n${newFmBody}---\n` + full.slice(fmMatch[0].length);
  writeFileSync(filePath, newFull);
  return true;
}

let written = 0;
let skipped = 0;
let missing = 0;
for (const [rel, related] of Object.entries(updates)) {
  const abs = join(ROOT, rel);
  try {
    if (inject(abs, related)) written++;
    else skipped++;
  } catch (e) {
    if (e.code === "ENOENT") {
      console.warn(`MISSING: ${rel}`);
      missing++;
    } else {
      throw e;
    }
  }
}

console.log(`\nDone: ${written} written, ${skipped} already had related, ${missing} missing.`);
