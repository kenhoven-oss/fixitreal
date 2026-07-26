/**
 * Walk a raw MDX string and extract H2/H3 headings into a flat TOC.
 *
 * Why hand-rolled instead of remark-toc / rehype-toc:
 * - We already pass MDX through rehype-slug, so the same slug() algorithm
 *   that rehype-slug uses must be matched here for anchor IDs to line up.
 * - We want the TOC available outside the MDX render pass — to render a
 *   sticky sidebar adjacent to (not inside) the article body. Compile-time
 *   walking returns plain data we can store anywhere.
 *
 * We deliberately ignore H1 (the article H1 is the page title, never inside
 * the body content) and ignore H4+ (too granular to be useful for skimming).
 */

import GithubSlugger from "github-slugger";

export type TocItem = { depth: 2 | 3; text: string; slug: string };

/**
 * Slugs MUST come from github-slugger itself, not a re-implementation.
 *
 * This was previously hand-rolled "to keep github-slugger out of the runtime
 * bundle" — but extractToc only ever runs in a server component at render
 * time, so there was no client bundle to protect, and the copy had drifted
 * from the real algorithm in two ways that silently broke anchors:
 *
 *   1. It collapsed whitespace runs (`\s+` -> "-"). github-slugger replaces
 *      each single space individually and does NOT collapse.
 *   2. It collapsed hyphen runs (`-+` -> "-"). github-slugger does not.
 *
 * Any heading containing an em dash hit both. github-slugger strips the "—"
 * but leaves the spaces that surrounded it, producing a DOUBLE hyphen:
 *
 *   "SEER rating — what's worth paying for"
 *     rehype-slug (truth) -> "seer-rating--whats-worth-paying-for"
 *     old slugify (TOC)   -> "seer-rating-whats-worth-paying-for"
 *
 * The TOC therefore linked to an id that did not exist, and every jump link
 * on an em-dash heading was dead. Em dashes are used heavily in our headings,
 * so this affected a large share of long-form pages.
 *
 * Importing the same package rehype-slug uses makes divergence impossible
 * by construction. Do not reintroduce a local copy.
 */

/** Strip inline MDX/markdown noise so the visible TOC text reads cleanly. */
function cleanHeading(raw: string): string {
  return raw
    .replace(/`([^`]+)`/g, "$1") // inline code
    .replace(/\*\*([^*]+)\*\*/g, "$1") // bold
    .replace(/\*([^*]+)\*/g, "$1") // italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links → text
    // Decode common HTML entities so the TOC slug matches rehype-slug, which
    // operates on the parsed MDX AST (entities already decoded by then).
    // Without this, headings written as "What I&apos;d Do" produce slugs like
    // "what-iaposd-do" because the entity letters survive punctuation-stripping.
    .replace(/&apos;|&#39;|&rsquo;|&lsquo;/g, "'")
    .replace(/&quot;|&#34;|&rdquo;|&ldquo;/g, '"')
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/&amp;/g, "&")
    .trim();
}

export function extractToc(mdxSource: string): TocItem[] {
  // Skip the frontmatter block so headings inside YAML examples don't leak in.
  const body = mdxSource.replace(/^---[\s\S]*?\n---\n/, "");
  // Skip fenced code blocks so commented "## ..." inside them is ignored.
  const stripped = body.replace(/```[\s\S]*?```/g, "");

  const items: TocItem[] = [];
  // A fresh slugger per document: it carries the duplicate-heading counter
  // (foo, foo-1, foo-2) exactly as rehype-slug does for the same document.
  const slugger = new GithubSlugger();

  for (const line of stripped.split("\n")) {
    const m = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
    if (!m) continue;
    const depth = m[1].length as 2 | 3;
    const text = cleanHeading(m[2]);
    if (!text) continue;
    items.push({ depth, text, slug: slugger.slug(text) });
  }

  return items;
}
