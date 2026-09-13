#!/usr/bin/env node
/**
 * Guard against text defects that only exist in the RENDERED page.
 *
 * WHY THIS EXISTS
 * ---------------
 * Two classes of bug shipped to ~655 programmatic cost pages and were
 * invisible in the source, in TypeScript and in review:
 *
 * 1. Glued variables. JSX drops the whitespace between a text line and an
 *    adjacent `{expression}` on the next line, so
 *
 *        Verify the {state.name} license number on the state board's
 *        public lookup tool.
 *
 *    rendered as "Verify the Ohiolicense number on the state board's…".
 *    React marks the join with an empty HTML comment (`<!-- -->`), which is
 *    exactly what makes it detectable here: a word character on both sides
 *    of that comment means two words were concatenated with no space.
 *
 * 2. Wrong indefinite article. Headings built as `a ${guide.shortName}`
 *    produced "a electrician service call" — in the visible FAQ heading AND
 *    in the FAQPage structured data.
 *
 * Run AFTER `npm run build`, against the prerendered HTML:
 *     npm run build && npm run check-text
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const BUILD_HTML = join(ROOT, ".next", "server", "app");

/**
 * Word-character on both sides of React's text separator comment.
 * `$<!-- -->70` is legitimate (a currency symbol joined to a number), so
 * only joins where BOTH sides are words are flagged. A sentence-ending
 * period on the left is included on purpose: "…service-call ranges." glued
 * to "Ohio pricing may vary…" was the other half of this bug.
 */
const GLUED = /([A-Za-z]{2,40}[.,;:!?]?)<!-- ?-->([A-Za-z][A-Za-z]{1,40})/g;

/** "a" before a vowel-initial word, in visible text or JSON-LD. */
const BAD_ARTICLE = /\b[Aa] (?:electric|electrician|hour|install|outlet|oven|emergency|inspect|air|attic|open|upgrade|estimate|item|extra|old|added)\w*/g;

function walk(dir, out = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const name of entries) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (name.endsWith(".html")) out.push(full);
  }
  return out;
}

const files = walk(BUILD_HTML);

if (files.length === 0) {
  console.error(
    "check-rendered-text: no prerendered HTML found under .next/server/app.\n" +
      "Run `npm run build` first."
  );
  process.exit(1);
}

const problems = new Map(); // message -> { count, example }

function record(message, file) {
  const hit = problems.get(message);
  if (hit) hit.count += 1;
  else problems.set(message, { count: 1, example: relative(ROOT, file) });
}

for (const file of files) {
  const html = readFileSync(file, "utf8");

  for (const m of html.matchAll(GLUED)) {
    record(`glued text: "${m[1]}${m[2]}" (missing space around a variable)`, file);
  }

  // Strip scripts for the article check so RSC payload duplicates don't
  // double-count, then check the JSON-LD blocks separately.
  const visible = html.replace(/<script[\s\S]*?<\/script>/g, " ");
  for (const m of visible.matchAll(BAD_ARTICLE)) {
    record(`wrong article: "${m[0]}"`, file);
  }
  for (const m of html.matchAll(/"@type":"FAQPage"[\s\S]{0,4000}?\]/g)) {
    for (const a of m[0].matchAll(BAD_ARTICLE)) {
      record(`wrong article in FAQ structured data: "${a[0]}"`, file);
    }
  }
}

if (problems.size === 0) {
  console.log(`check-rendered-text: ${files.length} pages clean.`);
  process.exit(0);
}

console.error(`check-rendered-text: ${problems.size} distinct problem(s) found\n`);
for (const [message, { count, example }] of problems) {
  console.error(`  ${message}`);
  console.error(`    ${count} occurrence(s), e.g. ${example}\n`);
}
process.exit(1);
