#!/usr/bin/env node
/**
 * Push affiliate URLs from docs/product-links.csv into the code.
 *
 * WHY THIS EXISTS
 * ---------------
 * The old workflow ended with a manual step: "copy that URL into the matching
 * affiliateUrl field in the corresponding page.tsx". That step is where the
 * tracker and the code drifted apart. At the time this script was written the
 * CSV was missing 16 products entirely, listed one link as Live that had gone
 * 404, and had a `100%%` typo in a product name that silently broke the match.
 *
 * Now the CSV is the single source of truth for links and this script does the
 * copying. Paste into the spreadsheet, run one command, commit.
 *
 * WHAT IT DOES
 *   /tools/... rows  -> writes affiliateUrl into the matching page.tsx
 *   /advice/... rows -> VERIFY ONLY. These links live inline in MDX prose, and
 *                      a script cannot know where in a sentence a link belongs.
 *                      Mismatches are reported for you to fix by hand.
 *
 * Usage:
 *   npm run sync-product-links -- --dry-run   # show what would change
 *   npm run sync-product-links                # apply
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const CSV = join(ROOT, "docs/product-links.csv");
const DRY = process.argv.includes("--dry-run");

const bold = (s) => `\x1b[1m${s}\x1b[0m`;
const dim = (s) => `\x1b[2m${s}\x1b[0m`;
const green = (s) => `\x1b[32m${s}\x1b[0m`;
const yellow = (s) => `\x1b[33m${s}\x1b[0m`;
const red = (s) => `\x1b[31m${s}\x1b[0m`;

/** Minimal RFC-4180 parser — handles quoted fields and doubled quotes. */
function parseCsv(text) {
  const rows = [];
  let row = [], field = "", inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n") { row.push(field); rows.push(row); row = []; field = ""; }
    else if (c !== "\r") field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const header = rows.shift();
  return rows
    .filter((r) => r.some((v) => v.trim()))
    .map((r) => Object.fromEntries(header.map((h, i) => [h.trim(), (r[i] ?? "").trim()])));
}

/**
 * Replace the affiliateUrl belonging to a named product.
 *
 * Deliberately uses indexOf on the exact product name rather than a regex:
 * these names contain (, ), +, /, % and other characters that would need
 * escaping, and a mis-escaped pattern here would rewrite the wrong product.
 */
function setAffiliateUrl(source, productName, url) {
  const nameNeedle = `name: "${productName}"`;
  const at = source.indexOf(nameNeedle);
  if (at === -1) return { ok: false, reason: "product name not found in file" };

  const urlKey = "affiliateUrl: \"";
  const urlAt = source.indexOf(urlKey, at);
  if (urlAt === -1) return { ok: false, reason: "no affiliateUrl field after this product" };

  // Guard against running past this object into the next product's field.
  const nextName = source.indexOf("name: \"", at + nameNeedle.length);
  if (nextName !== -1 && urlAt > nextName) {
    return { ok: false, reason: "affiliateUrl field belongs to the next product" };
  }

  const start = urlAt + urlKey.length;
  const end = source.indexOf('"', start);
  if (end === -1) return { ok: false, reason: "unterminated affiliateUrl string" };

  const existing = source.slice(start, end);
  if (existing === url) return { ok: true, changed: false, existing };
  return {
    ok: true,
    changed: true,
    existing,
    next: source.slice(0, start) + url + source.slice(end),
  };
}

if (!existsSync(CSV)) {
  console.error(red(`\nMissing ${CSV}\n`));
  process.exit(1);
}

const rows = parseCsv(readFileSync(CSV, "utf8"));
const URL_FIELD = "Affiliate URL (paste here)";

const toolRows = rows.filter((r) => r.Page.startsWith("/tools/"));
const articleRows = rows.filter((r) => r.Page.startsWith("/advice/"));

/* ------------------------------------------------------- tools: write --- */

const edits = new Map(); // file -> source
const applied = [], skipped = [], problems = [], pending = [];

for (const r of toolRows) {
  const url = r[URL_FIELD];
  const file = join(ROOT, "src/app", r.Page, "page.tsx");

  if (!url) { pending.push(r); continue; }
  if (!existsSync(file)) { problems.push({ r, reason: "page.tsx not found" }); continue; }

  const current = edits.get(file) ?? readFileSync(file, "utf8");
  const res = setAffiliateUrl(current, r["Product Name"], url);

  if (!res.ok) { problems.push({ r, reason: res.reason }); continue; }
  if (!res.changed) { skipped.push(r); continue; }

  edits.set(file, res.next);
  applied.push({ r, from: res.existing || "(empty)", to: url });
}

console.log(bold("\nBUYING GUIDES — CSV → code\n"));
if (applied.length === 0) console.log(dim("  nothing to write; code already matches the CSV"));
for (const a of applied) {
  console.log(`  ${green(DRY ? "would set" : "set")}  ${a.r["Product Name"]}`);
  console.log(dim(`            ${a.from}  →  ${a.to}`));
}
if (skipped.length) console.log(dim(`\n  ${skipped.length} already in sync`));

if (!DRY) {
  for (const [file, source] of edits) writeFileSync(file, source);
}

/* --------------------------------------------------- articles: verify --- */

const articleProblems = [];
for (const r of articleRows) {
  const url = r[URL_FIELD];
  if (!url) { pending.push(r); continue; }
  const file = join(ROOT, "src/content/articles", `${r.Page.replace("/advice/", "advice/")}.mdx`);
  if (!existsSync(file)) { articleProblems.push({ r, reason: "article not found" }); continue; }
  if (!readFileSync(file, "utf8").includes(url)) {
    articleProblems.push({ r, reason: "URL in CSV is not present in the article" });
  }
}

console.log(bold("\n\nARTICLE COMPANIONS — verify only\n"));
if (articleProblems.length === 0) {
  console.log(green(`  ✓ all ${articleRows.filter((r) => r[URL_FIELD]).length} article links match the CSV`));
} else {
  for (const p of articleProblems) {
    console.log(`  ${yellow("check")}  ${p.r.Page}  ${p.r["Product Name"]}`);
    console.log(dim(`          ${p.reason}`));
  }
  console.log(
    dim("\n  These are inline prose links — add or correct them by hand, then re-run.")
  );
}

/* ------------------------------------------------------------ summary --- */

if (problems.length) {
  console.log(bold(red("\n\nCOULD NOT MATCH\n")));
  for (const p of problems) {
    console.log(`  ${red("✖")}  ${p.r.Page}  ${p.r["Product Name"]}`);
    console.log(dim(`      ${p.reason}`));
  }
  console.log(
    dim("\n  Product Name in the CSV must match the `name:` field in page.tsx exactly.")
  );
}

console.log(bold("\n\nSTILL NEEDS A LINK\n"));
if (pending.length === 0) {
  console.log(green("  ✓ every tracked product has a link"));
} else {
  const byPage = new Map();
  for (const r of pending) {
    if (!byPage.has(r.Page)) byPage.set(r.Page, []);
    byPage.get(r.Page).push(r);
  }
  for (const [page, list] of byPage) {
    console.log(`  ${bold(page)}  ${dim(`(${list.length})`)}`);
    for (const r of list) {
      console.log(`      ${r["Product Name"]}`);
      if (r["Amazon Search Hint"]) console.log(dim(`        search: ${r["Amazon Search Hint"]}`));
    }
  }
  console.log(dim(`\n  ${pending.length} product(s) waiting on a SiteStripe link.`));
}

if (DRY) console.log(yellow("\n  dry run — nothing written\n"));
else console.log(dim(`\n  ${edits.size} file(s) written. Run \`npm run check-links\` next.\n`));

if (problems.length) process.exit(1);
