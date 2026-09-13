#!/usr/bin/env node
/**
 * Affiliate-link integrity guard.
 *
 * Three things this catches that nothing else does:
 *
 * 1. A FABRICATED amzn.to code. SiteStripe short links can only be created
 *    by a human in the Associates dashboard. A made-up one either 404s or
 *    credits somebody else's tag. Every amzn.to link in the codebase must
 *    therefore already appear in docs/product-links.csv, which is the
 *    human-maintained record of links that were actually generated.
 *
 * 2. A full amazon.com link with the tracking tag missing or wrong. An
 *    untagged link is a free referral to Amazon.
 *
 * 3. An affiliate link in sitewide chrome. Header, footer and nav links are
 *    exposure without context, which is the thing that makes a site read as
 *    an affiliate farm.
 *
 * Run: npm run check-affiliate-tags
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const SRC = join(ROOT, "src");
const CSV = join(ROOT, "docs/product-links.csv");
const TAG = "fixitreal-20";

/** Sitewide chrome — affiliate links must never appear in these. */
const CHROME = [
  "src/components/layout",
  "src/app/layout.tsx",
  "src/content/site.ts",
];

const EXTS = [".ts", ".tsx", ".mdx", ".md"];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (EXTS.some((e) => name.endsWith(e))) out.push(full);
  }
  return out;
}

const csv = readFileSync(CSV, "utf8");
const knownShort = new Set(
  [...csv.matchAll(/https?:\/\/amzn\.to\/([A-Za-z0-9]+)/g)].map((m) => m[1])
);
// Documented example link used in a JSDoc block, never rendered.
knownShort.add("4tlV9dU");

const files = walk(SRC);
const errors = [];
let shortCount = 0;
const pages = new Set();

for (const file of files) {
  const rel = relative(ROOT, file);
  // The generator itself contains the URL template, not a real link.
  if (rel === "src/lib/amazon.ts") continue;
  const text = readFileSync(file, "utf8");

  for (const m of text.matchAll(/https?:\/\/amzn\.to\/([A-Za-z0-9]+)/g)) {
    shortCount += 1;
    pages.add(rel);
    if (!knownShort.has(m[1])) {
      errors.push(
        `${rel}: amzn.to/${m[1]} is not in docs/product-links.csv — ` +
          `SiteStripe links cannot be invented. Generate it in Associates ` +
          `and record it in the CSV, or use amazonSearch() instead.`
      );
    }
  }

  for (const m of text.matchAll(/https?:\/\/(?:www\.)?amazon\.[a-z.]+\/[^\s"'`)]*/g)) {
    const url = m[0].replace(/&amp;/g, "&");
    pages.add(rel);
    if (!new RegExp(`[?&]tag=${TAG}(?:&|$)`).test(url)) {
      errors.push(`${rel}: amazon.com link is missing tag=${TAG} — ${url}`);
    }
  }

  if (CHROME.some((c) => rel.startsWith(c)) && /amzn\.to|amazon\.[a-z.]+\//.test(text)) {
    errors.push(`${rel}: affiliate link in sitewide chrome. Not allowed.`);
  }
}

// amazonSearch() calls build their URL at runtime, so count those too.
const picksFile = readFileSync(join(SRC, "content/product-picks.ts"), "utf8");
const generated = [...picksFile.matchAll(/amazonSearch\(/g)].length;

console.log(
  `affiliate links: ${shortCount} SiteStripe + ${generated} tagged search = ` +
    `${shortCount + generated} (in ${pages.size} source files)`
);

if (errors.length) {
  console.error(`\ncheck-affiliate-tags: ${errors.length} problem(s)\n`);
  for (const e of errors) console.error("  " + e);
  process.exit(1);
}
console.log("check-affiliate-tags: all links tagged and accounted for.");
