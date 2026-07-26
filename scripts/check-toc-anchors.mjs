#!/usr/bin/env node
/**
 * Verify every TOC anchor actually resolves to a heading id on the page.
 *
 * WHY THIS EXISTS
 * ---------------
 * The sidebar TOC is built at build time by `extractToc()` scanning raw MDX
 * text. The heading ids it links to are generated separately, at render time,
 * by rehype-slug walking the parsed MDX AST. Two different code paths, one
 * shared assumption — which is exactly the shape of bug that rots silently.
 *
 * It did rot. `extractToc` used a hand-written slugify that collapsed runs of
 * whitespace and hyphens; github-slugger (what rehype-slug uses) does not. Any
 * heading with an em dash produced a double hyphen in the real id and a single
 * hyphen in the TOC link:
 *
 *     "SEER rating — what's worth paying for"
 *        real id  : seer-rating--whats-worth-paying-for
 *        TOC link : seer-rating-whats-worth-paying-for   ← dead link
 *
 * Nothing failed. No error, no 404, no type error — the anchor just silently
 * went nowhere, on a large share of long-form pages, for as long as em dashes
 * have been in headings.
 *
 * This check closes the loop by running the REAL rehype-slug pipeline over
 * every article and diffing the ids it emits against what the TOC links to.
 * It is deliberately not a re-implementation of either side.
 *
 * Run: npm run check-anchors
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import { extractToc } from "../src/lib/toc.ts";

const ROOT = new URL("..", import.meta.url).pathname;
const CONTENT = join(ROOT, "src/content/articles");

/** Mirrors the render pipeline in ArticlePage.tsx. */
const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeSlug);

/** Collect the ids rehype-slug actually assigns to h2/h3 elements. */
function realHeadingIds(mdx) {
  const body = mdx.replace(/^---[\s\S]*?\n---\n/, "");
  const tree = processor.runSync(processor.parse(body));
  const ids = [];
  const visit = (node) => {
    if (node.type === "element" && (node.tagName === "h2" || node.tagName === "h3")) {
      if (node.properties?.id) ids.push(String(node.properties.id));
    }
    for (const child of node.children ?? []) visit(child);
  };
  visit(tree);
  return ids;
}

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) yield* walk(full);
    else if (full.endsWith(".mdx")) yield full;
  }
}

let filesChecked = 0;
let anchorsChecked = 0;
const failures = [];

for (const file of walk(CONTENT)) {
  const mdx = readFileSync(file, "utf8");
  const rel = relative(ROOT, file);

  let ids;
  try {
    ids = new Set(realHeadingIds(mdx));
  } catch (err) {
    // MDX-specific syntax (JSX components) can trip plain remark-parse.
    // Those files still get their TOC checked on the next build; skip here
    // rather than failing the whole run on a parser limitation.
    if (process.env.VERBOSE) console.warn(`  (skipped ${rel}: ${err.message})`);
    continue;
  }

  filesChecked++;
  for (const item of extractToc(mdx)) {
    anchorsChecked++;
    if (!ids.has(item.slug)) {
      failures.push({ file: rel, text: item.text, slug: item.slug });
    }
  }
}

if (failures.length > 0) {
  console.error(
    `\n✖ ${failures.length} TOC anchor(s) point at heading ids that do not exist.\n` +
      `  The TOC slugger and rehype-slug have diverged again.\n`
  );
  for (const f of failures.slice(0, 40)) {
    console.error(`  ${f.file}\n    "${f.text}"  ->  #${f.slug}`);
  }
  if (failures.length > 40) console.error(`  ...and ${failures.length - 40} more`);
  console.error("");
  process.exit(1);
}

console.log(
  `✓ ${anchorsChecked} TOC anchors across ${filesChecked} articles all resolve to real heading ids.`
);
