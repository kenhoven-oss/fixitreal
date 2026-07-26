#!/usr/bin/env node
/**
 * Guard against HTML entities leaking into JavaScript string literals.
 *
 * WHY THIS EXISTS
 * ---------------
 * In JSX *text*, `don&apos;t` is fine — the compiler decodes it and the
 * browser renders "don't". Inside a JS *string literal* it is not decoded by
 * anything, so it reaches the user verbatim:
 *
 *     <p>We don&apos;t do that</p>            // renders: We don't do that   ✅
 *     const faq = { a: "We don&apos;t..." }   // renders: We don&apos;t...   ❌
 *
 * This bit us on /tools/best-drain-snakes-for-homeowners, where a FAQ answer
 * stored as a string rendered "Once you&apos;re past the P-trap" on the live
 * page. Worse, those same strings are fed to faqSchema(), so the broken text
 * was also being emitted into JSON-LD structured data.
 *
 * The class of bug is invisible in review (the entity looks intentional) and
 * invisible in TypeScript (it is a valid string), so it needs a linter.
 *
 * Run: npm run check-entities
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const SRC = join(ROOT, "src");
const EXTENSIONS = [".ts", ".tsx", ".mts", ".mjs"];

/**
 * Files that legitimately contain entities inside strings.
 * - feed.xml/route.ts intentionally *encodes* text for XML output.
 * - lib/toc.ts documents and decodes entities on purpose.
 */
const ALLOWLIST = new Set([
  "src/app/feed.xml/route.ts",
  "src/lib/toc.ts",
]);

/** Named or numeric HTML entity. */
const ENTITY = /&(?:[a-zA-Z][a-zA-Z0-9]{1,10}|#\d{1,5}|#x[0-9a-fA-F]{1,5});/;

/**
 * Pull out double-quoted and backtick-quoted spans on a line.
 *
 * Single-quoted strings are deliberately NOT scanned: unescaped apostrophes
 * in ordinary JSX prose ("the homeowner's guide") would be misread as string
 * delimiters and produce noise. Entities in single-quoted strings are rare
 * enough that the false-negative is a better trade than a noisy check.
 */
function quotedSpans(line) {
  const spans = [];
  const re = /"(?:[^"\\\n]|\\.)*"|`(?:[^`\\]|\\.)*`/g;
  let m;
  while ((m = re.exec(line)) !== null) spans.push(m[0]);
  return spans;
}

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === ".next" || entry.startsWith(".")) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) yield* walk(full);
    else if (EXTENSIONS.some((e) => full.endsWith(e))) yield full;
  }
}

const failures = [];

for (const file of walk(SRC)) {
  const rel = relative(ROOT, file);
  if (ALLOWLIST.has(rel)) continue;

  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((line, i) => {
    // Skip comment lines — they discuss entities without rendering them.
    const trimmed = line.trim();
    if (trimmed.startsWith("//") || trimmed.startsWith("*") || trimmed.startsWith("/*")) return;

    for (const span of quotedSpans(line)) {
      if (ENTITY.test(span)) {
        failures.push({ file: rel, line: i + 1, text: trimmed.slice(0, 140) });
        break;
      }
    }
  });
}

if (failures.length > 0) {
  console.error(
    `\n✖ HTML entities found inside string literals (${failures.length}).\n` +
      `  These are NOT decoded and will render literally to users and into JSON-LD.\n` +
      `  Replace the entity with the real character (e.g. &apos; -> ').\n`
  );
  for (const f of failures) {
    console.error(`  ${f.file}:${f.line}\n    ${f.text}`);
  }
  console.error("");
  process.exit(1);
}

console.log("✓ No HTML entities leaking into string literals.");
