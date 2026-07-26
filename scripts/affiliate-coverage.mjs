#!/usr/bin/env node
/**
 * Report affiliate-link coverage: what's monetised, what's a slot waiting on a
 * SiteStripe link, and which high-intent articles carry no link at all.
 *
 * Companion to check-affiliate-links.mjs — that one asks "do the links we have
 * still work?", this one asks "where is there no link at all?".
 *
 * Run: npm run affiliate-coverage
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, basename, dirname } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const TOOLS = join(ROOT, "src/app/tools");
const ARTICLES = join(ROOT, "src/content/articles");

const bold = (s) => `\x1b[1m${s}\x1b[0m`;
const dim = (s) => `\x1b[2m${s}\x1b[0m`;
const green = (s) => `\x1b[32m${s}\x1b[0m`;
const yellow = (s) => `\x1b[33m${s}\x1b[0m`;

/**
 * Pillars ordered by commercial intent, highest first.
 *
 * "diy-or-hire" tops the list because a reader who has just been told "yes,
 * you can do this yourself" has the strongest possible reason to buy the tool
 * in the next sixty seconds. "costs" is deliberately low: someone pricing a
 * $6,000 AC install is not in the market for a $28 hand tool, and pushing one
 * at them reads as desperate.
 */
const PILLAR_INTENT = [
  "diy-or-hire",
  "advice",
  "emergency-repairs",
  "senior-home-safety",
  "what-is-this",
  "home-inspection-repairs",
  "costs",
];

/* ---------------------------------------------------------------- tools --- */

const slots = [];
for (const entry of readdirSync(TOOLS, { withFileTypes: true })) {
  if (!entry.isDirectory() || !entry.name.startsWith("best-")) continue;
  const file = join(TOOLS, entry.name, "page.tsx");
  let src;
  try {
    src = readFileSync(file, "utf8");
  } catch {
    continue;
  }

  // Walk the products array, pairing each `name:` with the `affiliateUrl:`
  // that follows it inside the same object literal.
  const filled = [];
  const empty = [];
  let currentName = null;
  for (const line of src.split("\n")) {
    const nameMatch = /^\s{4}name:\s*"(.+?)",?\s*$/.exec(line);
    if (nameMatch) currentName = nameMatch[1];
    const urlMatch = /^\s{4}affiliateUrl:\s*"(.*?)",?\s*$/.exec(line);
    if (urlMatch) {
      (urlMatch[1] ? filled : empty).push(currentName ?? "(unnamed)");
      currentName = null;
    }
  }
  slots.push({ guide: entry.name, filled, empty });
}

const totalFilled = slots.reduce((n, s) => n + s.filled.length, 0);
const totalEmpty = slots.reduce((n, s) => n + s.empty.length, 0);

console.log(bold("\nBUYING GUIDES\n"));
for (const s of slots.sort((a, b) => b.empty.length - a.empty.length)) {
  const total = s.filled.length + s.empty.length;
  const label =
    s.empty.length === 0
      ? green(`${s.filled.length}/${total}`)
      : yellow(`${s.filled.length}/${total}`);
  console.log(`  ${label}  ${s.guide}`);
  for (const name of s.empty) console.log(dim(`         empty → ${name}`));
}
console.log(
  `\n  ${totalFilled} filled, ${bold(String(totalEmpty))} empty slot(s) already built and waiting on a link.`
);

/* ------------------------------------------------------------- articles --- */

function* walk(dir) {
  for (const e of readdirSync(dir)) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) yield* walk(full);
    else if (full.endsWith(".mdx")) yield full;
  }
}

const byPillar = new Map();
for (const file of walk(ARTICLES)) {
  const pillar = basename(dirname(file));
  const has = readFileSync(file, "utf8").includes("amzn.to");
  if (!byPillar.has(pillar)) byPillar.set(pillar, { with: [], without: [] });
  byPillar.get(pillar)[has ? "with" : "without"].push(
    relative(ARTICLES, file).replace(/\.mdx$/, "")
  );
}

console.log(bold("\n\nARTICLES — no affiliate link, ordered by commercial intent\n"));
const ordered = [...byPillar.entries()].sort(
  (a, b) =>
    (PILLAR_INTENT.indexOf(a[0]) + 1 || 99) - (PILLAR_INTENT.indexOf(b[0]) + 1 || 99)
);

let unmonetised = 0;
for (const [pillar, data] of ordered) {
  const total = data.with.length + data.without.length;
  unmonetised += data.without.length;
  console.log(
    `  ${bold(pillar)} ${dim(`— ${data.with.length}/${total} monetised`)}`
  );
  for (const slug of data.without.slice(0, 8)) console.log(dim(`      ${slug}`));
  if (data.without.length > 8)
    console.log(dim(`      …and ${data.without.length - 8} more`));
  console.log("");
}

console.log(
  `  ${unmonetised} article(s) carry no affiliate link.\n\n` +
    dim(
      "  Only add a link where a specific tool genuinely completes the job the\n" +
        "  reader came for. A link that doesn't fit the task earns nothing and\n" +
        "  costs the independence the site is built on.\n"
    )
);
