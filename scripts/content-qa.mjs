#!/usr/bin/env node
/**
 * Repository-wide content QA, run against the PRERENDERED HTML.
 *
 *     npm run build && npm run content-qa
 *
 * Why the rendered HTML and not the MDX/TSX source: most of the defects
 * this catches only exist after templating — a glued variable, a wrong
 * article built from a slug, a state name that never got substituted, a
 * heading that a component duplicated. Checking the output catches every
 * template, hand-written page and future component the same way.
 *
 * SEVERITY
 *   error  → build fails (npm run check-all exits non-zero)
 *   warn   → printed, does not fail; review in the report
 *
 * Every check is listed in CHECKS below with its severity so the rule set
 * is visible in one place. The full findings are also written to
 * docs/content-qa-report.md so they can be reviewed without re-running.
 */

import { readdirSync, readFileSync, statSync, writeFileSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const BUILD_HTML = join(ROOT, ".next", "server", "app");
const REPORT = join(ROOT, "docs", "content-qa-report.md");

const CHECKS = {
  gluedVariable: { sev: "error", label: "Glued text at a template boundary (missing space)" },
  missingSpaceAfterPunct: { sev: "error", label: "Sentence punctuation with no following space" },
  wrongArticle: { sev: "error", label: "Wrong indefinite article (a/an)" },
  templateToken: { sev: "error", label: "Template token leaked into the page" },
  failedSubstitution: { sev: "error", label: "Failed variable substitution (undefined/NaN/[object Object])" },
  emptyLink: { sev: "error", label: "Empty or placeholder link" },
  brokenInternalLink: { sev: "error", label: "Internal link to a path that is not in the build" },
  redirectedInternalLink: { sev: "error", label: "Internal link that lands on a 301 redirect (point at the destination)" },
  duplicateTitle: { sev: "error", label: "Duplicate <title> across pages" },
  duplicateDescription: { sev: "error", label: "Duplicate meta description across pages" },
  missingTitle: { sev: "error", label: "Missing <title>" },
  missingDescription: { sev: "warn", label: "Missing meta description" },
  multipleH1: { sev: "error", label: "More than one <h1>" },
  noH1: { sev: "warn", label: "No <h1>" },
  repeatedWord: { sev: "warn", label: "Repeated word (\"the the\")" },
  duplicateHeading: { sev: "warn", label: "Same heading text twice on one page" },
  headingSkip: { sev: "warn", label: "Heading level skipped (h2 → h4)" },
  duplicateRelatedLink: { sev: "warn", label: "Same href listed twice in a related-links list" },
  repeatedParagraph: { sev: "warn", label: "Identical paragraph (60+ chars) repeated on one page" },
  imgNoAlt: { sev: "warn", label: "<img> without alt attribute" },
  longTitle: { sev: "warn", label: "<title> longer than 65 characters" },
};

// ---------------------------------------------------------------------------
// helpers

function walk(dir, out = []) {
  let entries;
  try { entries = readdirSync(dir); } catch { return out; }
  for (const name of entries) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (name.endsWith(".html")) out.push(full);
  }
  return out;
}

const decode = (s) =>
  s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
   .replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#39;/g, "'").replace(/&nbsp;/g, " ");

/** Visible text: scripts/styles removed, tags → space, entities decoded. */
function visibleText(html) {
  return decode(
    html.replace(/<script[\s\S]*?<\/script>/g, " ")
        .replace(/<style[\s\S]*?<\/style>/g, " ")
        .replace(/<!--[\s\S]*?-->/g, "")
        .replace(/<[^>]+>/g, " ")
  ).replace(/[ \t]+/g, " ");
}

/** Page path from build file, e.g. .next/server/app/costs/foo.html → /costs/foo */
function pathOf(file) {
  let p = "/" + relative(BUILD_HTML, file).replace(/\.html$/, "").replace(/\\/g, "/");
  if (p === "/index") p = "/";
  return p;
}

/**
 * Does this word take "an"? Sound-based, not letter-based:
 *  - all-caps acronyms go by the NAME of the first letter (an AFCI, an S-trap,
 *    a UL listing, a USB cable)
 *  - "one"/"once" and "you"-sounding u-words take "a" (a one-time, a unit,
 *    a user, a utility, a Ufer) — u + consonant + vowel is the "you" pattern,
 *    with the un-/um-/up-/ul-/ur-/ug- family as the main exceptions
 *  - silent-h words take "an" (an hour, an honest)
 */
// Acronyms read as words, so the article follows the spoken word, not the letter name.
const SPOKEN_ACRONYMS = /^(MERV|SEER|NEMA|HEPA|LEED|OSHA|FEMA|SKU|PEX|ASHRAE|NIOSH|EIFS|SIP|HERS|IAQ|VOC|LVP|LVT|PSI|GPM|SEO|CAPTCHA|FAQ|NIST|NAICS|BTU|ZIP|USDA|IKEA|VA)$/;
function wantsAn(word) {
  // Judge by the first hyphenated segment: "LED-rated" → "LED", "one-time" → "one".
  const seg = word.split(/[-–]/)[0].replace(/[^A-Za-z]/g, "");
  if (!seg) return null;
  if (/^[A-Z]+$/.test(seg) && seg.length <= 6) {
    if (SPOKEN_ACRONYMS.test(seg)) return /^[AEIOU]/.test(seg) && !/^U/.test(seg);
    // Letter-name sounds: A E F H I L M N O R S X start with a vowel sound; U is "you".
    return /^[AEFHILMNORSX]/.test(seg);
  }
  const lw = seg.toLowerCase();
  if (/^(one|once)/.test(lw)) return false;
  if (/^(hour|honest|heir|honor)/.test(lw)) return true;
  if (/^u/.test(lw)) {
    // "you"-sound: unit, user, usual, utility, unique, uniform, Ufer, uranium…
    // but un-/um-/up-/ul-/ur- prefixes (under, unintended, uninsured, upper) take "an".
    if (/^un(in|im|id|is|ea|ev|us|eq|oc|of|ab|at|ap|ar|aw|ex|em|ob|ed|en|op|au)/.test(lw)) return true;
    if (/^u(ni|se|su|ti|te|ki|ra|ro|to|ber|fer|sa|ru|ve|bi|na)/.test(lw)) return false;
    return true;
  }
  return /^[aeio]/.test(lw);
}

// ---------------------------------------------------------------------------
// collect

const files = walk(BUILD_HTML);
if (files.length === 0) {
  console.error("content-qa: no prerendered HTML under .next/server/app — run `npm run build` first.");
  process.exit(1);
}

const knownPaths = new Set(files.map(pathOf));
// Route handlers and dynamic routes that exist but are not .html files
for (const p of ["/feed.xml", "/sitemap.xml", "/robots.txt", "/llms.txt", "/manifest.webmanifest", "/search", "/opengraph-image", "/api/subscribe"]) knownPaths.add(p);
const knownPrefixes = ["/downloads/", "/_next/", "/authors/", "/api/"];
// Redirect sources from next.config.ts — a link to one of these works for
// users but lands on a 301, so it is reported separately (still an error:
// internal links must point at the destination).
const nextConfig = readFileSync(join(ROOT, "next.config.ts"), "utf8");
const redirectSources = new Set([...nextConfig.matchAll(/source:\s*"([^":]+)"/g)].map((m) => m[1]));

const findings = []; // {check, path, detail}
const add = (check, path, detail) => findings.push({ check, path, detail });

const titles = new Map();
const descs = new Map();

for (const file of files) {
  const path = pathOf(file);
  // Internal Next error pages carry no SEO meaning.
  if (path.startsWith("/_")) continue;

  const html = readFileSync(file, "utf8");
  const text = visibleText(html);

  // --- glued variables (React's empty comment between two word chars)
  for (const m of html.matchAll(/([A-Za-z]{2,40}[.,;:!?]?)<!-- ?-->([A-Za-z]{2,40})/g)) {
    add("gluedVariable", path, `"${m[1]}${m[2]}"`);
  }

  // --- punctuation immediately followed by a capital letter with no space,
  //     e.g. "ranges.Ohio". Excludes URLs, decimals, abbreviations, and file names.
  for (const m of text.matchAll(/\b([a-z]{3,})[.!?]([A-Z][a-z]{2,})\b/g)) {
    const whole = m[0];
    if (/\.(com|org|gov|net|edu|io|tsx?|mdx?|js|pdf|html)$/i.test(whole)) continue;
    add("missingSpaceAfterPunct", path, `"${whole}"`);
  }

  // --- articles
  for (const m of text.matchAll(/(^|[\s(">])([Aa]n?) ([A-Za-z][A-Za-z.-]*)/g)) {
    const art = m[2], word = m[3];
    // A capital "A" mid-sentence is a label ("Class A", "Coverage A"), not an article.
    if (art === "A" || art === "An") {
      const before = text.slice(Math.max(0, m.index - 3), m.index + 1);
      if (!/(^|[.!?:]\s|\n)$/.test(before)) continue;
    }
    if (/^(is|or|and|to|of|in|the|by|at|on|for|vs)$/i.test(word)) continue;
    const need = wantsAn(word);
    if (need === null) continue;
    if (art.toLowerCase() === "a" && need) add("wrongArticle", path, `"a ${word}"`);
    if (art.toLowerCase() === "an" && !need) add("wrongArticle", path, `"an ${word}"`);
  }

  // --- template tokens / failed substitution
  const textNoCode = visibleText(html.replace(/<code\b[^>]*>[\s\S]*?<\/code>/g, " "));
  for (const m of textNoCode.matchAll(/\{\{[^}]*\}\}|\$\{[^}]*\}|\[state\]|\[city\]|\[slug\]|<State>|<City>/g)) add("templateToken", path, `"${m[0]}"`);
  for (const m of text.matchAll(/\b(undefined|NaN|null|\[object Object\])\b/g)) {
    // "null" can appear in legitimate prose ("null and void") — only flag near symbols/numbers
    if (m[1] === "null" && !/[$–-]\s*null|null\s*[$–-]/.test(text.slice(Math.max(0, m.index - 3), m.index + 8))) continue;
    add("failedSubstitution", path, `"${m[1]}" near: …${text.slice(Math.max(0, m.index - 40), m.index + 20).trim()}…`);
  }

  // --- links
  const hrefs = [...html.matchAll(/<a\b[^>]*\bhref="([^"]*)"[^>]*>/g)].map((m) => decode(m[1]));
  for (const h of hrefs) {
    if (h === "" || h === "#" || h === "javascript:void(0)") { add("emptyLink", path, `href="${h}"`); continue; }
    if (h.startsWith("/") && !h.startsWith("//")) {
      const clean = h.split("#")[0].split("?")[0].replace(/\/$/, "") || "/";
      if (knownPaths.has(clean)) continue;
      if (knownPrefixes.some((p) => clean.startsWith(p))) continue;
      if (existsSync(join(ROOT, "public", clean))) continue;
      if (redirectSources.has(clean)) { add("redirectedInternalLink", path, `href="${h}"`); continue; }
      add("brokenInternalLink", path, `href="${h}"`);
    }
  }

  // --- related-links lists: same href twice inside one <ul>
  for (const ul of html.matchAll(/<ul\b[^>]*>([\s\S]*?)<\/ul>/g)) {
    const inner = [...ul[1].matchAll(/href="([^"]*)"/g)].map((m) => m[1]);
    const seen = new Set();
    for (const h of inner) {
      if (seen.has(h)) { add("duplicateRelatedLink", path, `href="${h}"`); break; }
      seen.add(h);
    }
  }

  // --- title / description
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "").trim();
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "").trim();
  if (!title) add("missingTitle", path, "");
  else {
    titles.set(title, [...(titles.get(title) ?? []), path]);
    if (title.length > 65) add("longTitle", path, `${title.length} chars: "${title}"`);
  }
  if (!desc) add("missingDescription", path, "");
  else descs.set(desc, [...(descs.get(desc) ?? []), path]);

  // --- headings
  const heads = [...html.replace(/<script[\s\S]*?<\/script>/g, "").matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/g)]
    .map((m) => ({ level: +m[1], text: decode(m[2].replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim() }));
  const h1s = heads.filter((h) => h.level === 1);
  if (h1s.length > 1) add("multipleH1", path, h1s.map((h) => `"${h.text}"`).join(" | "));
  if (h1s.length === 0) add("noH1", path, "");
  const seenHead = new Map();
  let prev = 1;
  for (const h of heads) {
    if (h.level > prev + 1 && prev !== 0) add("headingSkip", path, `h${prev} → h${h.level} "${h.text}"`);
    prev = h.level;
    const key = `${h.level}:${h.text.toLowerCase()}`;
    if (h.text && seenHead.has(key)) add("duplicateHeading", path, `h${h.level} "${h.text}"`);
    seenHead.set(key, true);
  }

  // --- repeated words (the the, and and) — checked inside single text
  //     elements so a breadcrumb followed by an H1 ("Ohio" / "Ohio…") is
  //     not a false positive. Ignores legitimate doubles ("had had").
  for (const el of html.replace(/<script[\s\S]*?<\/script>/g, "").matchAll(/<(p|li|h[1-6]|td|dd|span)\b[^>]*>([\s\S]*?)<\/\1>/g)) {
    const t = decode(el[2].replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ");
    for (const m of t.matchAll(/\b([A-Za-z]{2,})\s+\1\b/g)) {
      if (/^(had|that|is|very|no|so|bye|yes|well|DIY)$/i.test(m[1])) continue;
      add("repeatedWord", path, `"${m[0]}"`);
    }
  }

  // --- repeated paragraphs
  const paras = [...html.replace(/<script[\s\S]*?<\/script>/g, "").matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)]
    .map((m) => decode(m[1].replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim())
    .filter((t) => t.length >= 60);
  const seenPara = new Set();
  for (const p of paras) {
    if (seenPara.has(p)) { add("repeatedParagraph", path, `"${p.slice(0, 80)}…"`); }
    seenPara.add(p);
  }

  // --- images
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt=/.test(m[0])) add("imgNoAlt", path, m[0].slice(0, 100));
  }
}

for (const [t, paths] of titles) if (paths.length > 1) add("duplicateTitle", paths.join(", "), `"${t}"`);
for (const [d, paths] of descs) if (paths.length > 1) add("duplicateDescription", paths.join(", "), `"${d.slice(0, 80)}…"`);

// ---------------------------------------------------------------------------
// report

const byCheck = new Map();
for (const f of findings) byCheck.set(f.check, [...(byCheck.get(f.check) ?? []), f]);

let errors = 0, warns = 0;
const lines = [`# Content QA report`, ``, `Generated ${new Date().toISOString().slice(0, 10)} against ${files.length} prerendered pages.`, ``];
for (const [check, meta] of Object.entries(CHECKS)) {
  const list = byCheck.get(check) ?? [];
  if (meta.sev === "error") errors += list.length; else warns += list.length;
  lines.push(`## ${meta.sev.toUpperCase()} · ${meta.label} — ${list.length}`);
  // Collapse identical details (the same defect on 600 state pages) to keep the report readable.
  const grouped = new Map();
  for (const f of list) grouped.set(f.detail, [...(grouped.get(f.detail) ?? []), f.path]);
  let shown = 0;
  for (const [detail, paths] of grouped) {
    if (shown++ >= 40) { lines.push(`- … ${grouped.size - 40} more distinct`); break; }
    lines.push(`- ${detail} — ${paths.length} page(s), e.g. \`${paths[0]}\``);
  }
  lines.push(``);
}
writeFileSync(REPORT, lines.join("\n"));

console.log(`content-qa: ${files.length} pages · ${errors} error(s) · ${warns} warning(s) · report: docs/content-qa-report.md`);
for (const [check, meta] of Object.entries(CHECKS)) {
  const n = (byCheck.get(check) ?? []).length;
  if (n) console.log(`  ${meta.sev === "error" ? "✖" : "▲"} ${meta.label}: ${n}`);
}
process.exit(errors > 0 ? 1 : 0);
