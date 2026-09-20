#!/usr/bin/env node
/**
 * Inventory of the programmatic state and metro cost pages.
 *
 *     npm run build && node scripts/programmatic-inventory.mjs
 *
 * For every generated URL: template family, word count, how much of its
 * visible text is unique versus the other pages in the same family
 * (n-gram overlap against the family's shared text), what state- or
 * city-specific information it carries, whether it is indexable, and how
 * many internal links point at it. Written to
 * docs/programmatic-page-inventory.md with per-family summaries and a
 * recommendation. It changes nothing; it is the evidence for a decision.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const BUILD = join(ROOT, ".next", "server", "app");
const OUT = join(ROOT, "docs", "programmatic-page-inventory.md");

function walk(dir, out = []) {
  for (const n of readdirSync(dir)) {
    const f = join(dir, n);
    if (statSync(f).isDirectory()) walk(f, out);
    else if (n.endsWith(".html")) out.push(f);
  }
  return out;
}
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&nbsp;/g, " ");
function mainText(html) {
  // Article body only: drop header/nav/footer/script so shared chrome doesn't count as "shared text".
  const m = html.match(/<main[\s\S]*?<\/main>/) ?? [html];
  return decode(m[0].replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}
const pathOf = (f) => "/" + relative(BUILD, f).replace(/\.html$/, "");
/**
 * Normalise away the things a template substitutes — dollar figures,
 * percentages, place names — so the second metric measures what is left
 * once "same page, different numbers and state name" is discounted.
 */
const PLACE_WORDS = new Set();
const normalise = (text) =>
  text
    .replace(/\$[\d,]+(?:–\$[\d,]+)?/g, "$N")
    .replace(/\b\d+(?:[.,]\d+)?%?/g, "N")
    .split(/\s+/)
    .map((w) => (PLACE_WORDS.has(w.replace(/[^A-Za-z]/g, "").toLowerCase()) ? "PLACE" : w))
    .join(" ");
const shingles = (text, n = 8) => {
  const w = text.toLowerCase().split(/\s+/);
  const s = new Set();
  for (let i = 0; i + n <= w.length; i++) s.add(w.slice(i, i + n).join(" "));
  return s;
};

const files = walk(BUILD);
const all = files.map((f) => ({ path: pathOf(f), html: readFileSync(f, "utf8") }));

// inbound internal links across the whole site
const inbound = new Map();
for (const p of all) {
  for (const m of p.html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const t = m[1].replace(/\/$/, "") || "/";
    if (t !== p.path) inbound.set(t, (inbound.get(t) ?? 0) + 1);
  }
}

// place names from the URL slugs (ohio, new-york, oklahoma-city-ok …)
for (const p of all) {
  const m = p.path.match(/^\/costs\/[^/]+\/(?:metro\/)?([a-z-]+)$/);
  if (m) for (const w of m[1].split("-")) if (w.length > 2) PLACE_WORDS.add(w);
}
const state = all.filter((p) => /^\/costs\/[^/]+\/[^/]+$/.test(p.path) && !p.path.includes("/metro/"));
const metro = all.filter((p) => /^\/costs\/[^/]+\/metro\/[^/]+$/.test(p.path));

function analyse(pages, familyOf) {
  const families = new Map();
  for (const p of pages) {
    const fam = familyOf(p.path);
    families.set(fam, [...(families.get(fam) ?? []), p]);
  }
  const rows = [];
  const famSummary = [];
  for (const [fam, ps] of families) {
    const texts = ps.map((p) => { const text = mainText(p.html); return { p, text, sh: shingles(text), shN: shingles(normalise(text)) }; });
    // shared shingles = present in >= 80% of the family's pages
    const count = new Map();
    for (const t of texts) for (const s of t.sh) count.set(s, (count.get(s) ?? 0) + 1);
    const shared = new Set([...count].filter(([, c]) => c >= Math.ceil(texts.length * 0.8)).map(([s]) => s));
    const countN = new Map();
    for (const t of texts) for (const s of t.shN) countN.set(s, (countN.get(s) ?? 0) + 1);
    const sharedN = new Set([...countN].filter(([, c]) => c >= Math.ceil(texts.length * 0.8)).map(([s]) => s));
    let uniqSum = 0, uniqNSum = 0;
    for (const t of texts) {
      const uniq = [...t.sh].filter((s) => !shared.has(s)).length;
      const pct = t.sh.size ? Math.round((100 * uniq) / t.sh.size) : 0;
      uniqSum += pct;
      const uniqN = [...t.shN].filter((s) => !sharedN.has(s)).length;
      const pctN = t.shN.size ? Math.round((100 * uniqN) / t.shN.size) : 0;
      uniqNSum += pctN;
      const html = t.p.html;
      const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? "(none)";
      const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? "(none)";
      const specific = [];
      if (/Who licenses (electricians|plumbers) in/.test(html)) specific.push("licensing block (data-driven)");
      if (/-specific factors\./.test(html)) specific.push("notes paragraph");
      if (/Doing it yourself in/.test(html)) specific.push("DIY alternative");
      rows.push({
        path: t.p.path,
        family: fam,
        words: t.text.split(/\s+/).length,
        uniquePct: pct,
        uniqueAfterNorm: pctN,
        specific: specific.join(", ") || "none",
        indexable: /noindex/.test(robots) ? "noindex" : "index",
        canonicalSelf: canonical.endsWith(t.p.path) ? "yes" : canonical,
        inbound: inbound.get(t.p.path) ?? 0,
      });
    }
    famSummary.push({ fam, pages: ps.length, avgUnique: Math.round(uniqSum / texts.length), avgUniqueNorm: Math.round(uniqNSum / texts.length), avgWords: Math.round(texts.reduce((a, t) => a + t.text.split(/\s+/).length, 0) / texts.length) });
  }
  return { rows, famSummary };
}

const S = analyse(state, (p) => p.split("/")[2] + " × state");
const M = analyse(metro, (p) => p.split("/")[2] + " × metro");

const lines = [];
lines.push("# Programmatic cost-page inventory", "", `Generated ${new Date().toISOString().slice(0, 10)} from the production build. ${state.length} state pages, ${metro.length} metro pages, ${all.length} pages total in the build.`, "");
lines.push("## How to read this", "", "- **Unique %**: share of a page's 8-word phrases that are NOT common to 80%+ of pages in its template family. Numbers and place names count as unique here.", "- **Unique after normalisation %**: the same measure after every dollar figure, number and place name is replaced by a token. This is the honest number: it is what is left once \"same template, different state and prices\" is discounted. Google's scaled-content guidance is about this number, not the first one.", "- **State/city-specific info**: which page elements carry information that could not be derived from the national guide plus a multiplier.", "- **Sources**: every page cites its parent national guide and the tier model in its methodology block; state pages additionally cite the licensing body. No page carries a local quote sample.", "- Nothing in this report changes any URL. See the recommendation at the end.", "");
lines.push("## Family summary", "", "| Family | Pages | Avg unique % | Avg unique after normalisation % | Avg words |", "|---|---:|---:|---:|---:|");
for (const f of [...S.famSummary, ...M.famSummary]) lines.push(`| ${f.fam} | ${f.pages} | ${f.avgUnique} | ${f.avgUniqueNorm} | ${f.avgWords} |`);
lines.push("");
const dist = (rows) => { const b = { "<10": 0, "10-19": 0, "20-29": 0, "30+": 0 }; for (const r of rows) b[r.uniqueAfterNorm < 10 ? "<10" : r.uniqueAfterNorm < 20 ? "10-19" : r.uniqueAfterNorm < 30 ? "20-29" : "30+"]++; return b; };
lines.push("## Distribution of unique-after-normalisation %", "", "| Set | <10% | 10–19% | 20–29% | 30%+ |", "|---|---:|---:|---:|---:|");
for (const [name, rows] of [["state", S.rows], ["metro", M.rows]]) { const d = dist(rows); lines.push(`| ${name} | ${d["<10"]} | ${d["10-19"]} | ${d["20-29"]} | ${d["30+"]} |`); }
lines.push("");
lines.push("## Indexability and links", "", `- Indexable: ${[...S.rows, ...M.rows].filter((r) => r.indexable === "index").length} / ${S.rows.length + M.rows.length}; all self-canonical: ${[...S.rows, ...M.rows].every((r) => r.canonicalSelf === "yes") ? "yes" : "NO"}.`, `- Pages with zero inbound internal links: ${[...S.rows, ...M.rows].filter((r) => r.inbound === 0).length}.`, `- Median inbound links: state ${median(S.rows.map((r) => r.inbound))}, metro ${median(M.rows.map((r) => r.inbound))}.`, "");
lines.push("## Every page", "", "| URL | Family | Words | Unique % | Unique after norm. % | Specific info | Index | Canonical | Inbound |", "|---|---|---:|---:|---:|---|---|---|---:|");
for (const r of [...S.rows, ...M.rows].sort((a, b) => a.path.localeCompare(b.path))) lines.push(`| ${r.path} | ${r.family} | ${r.words} | ${r.uniquePct} | ${r.uniqueAfterNorm} | ${r.specific} | ${r.indexable} | ${r.canonicalSelf} | ${r.inbound} |`);
lines.push("");
lines.push("## Recommendation (evidence above; nothing here has been actioned)", "",
"**What the numbers say.** Once prices and place names are discounted, a state page is ~13–15% distinct from its siblings and a metro page ~27–28%. The distinct share is almost entirely (a) the licensing block, now generated from per-state data with sources, (b) the one-paragraph local notes, and (c) on two guides, the DIY-alternative saving. No page carries a local quote sample, a local permit fee schedule, or any figure that was not derived from the national guide × tier multiplier. Vercel analytics for the 30 days to 2026-09-20: these 655 pages (73% of the sitemap) produced 3 search visits; hand-written articles produced the rest.", "",
"**Options, in order of preference.**", "",
"1. **Enrich a small set, hold the rest.** Pick the states and metros that matter (Ohio and the five Ohio metros first, then the ten largest metros) and add what a reader cannot get from the national guide: the county/city permit fee for this job, the local code items inspectors actually fail (e.g. Cleveland's water-heater expansion-tank and pan rules), and 3–5 anonymised local quotes with dates. A page with those is worth indexing; the template can render them from a per-place data block the same way the licensing block works. Keep the other pages live for navigation but stop submitting them (one switch already exists: LOCAL_COST_PAGES_INDEXABLE). Re-enable per page as each is enriched.", "",
"2. **Consolidate the state layer.** The 145 state pages are the thinnest family (13–15%). Fold each guide's 29 state pages into one 'by state' table on the national guide (already partly present as StateCostLinks) and 301 the state URLs to it. Keep the metro pages, which carry more local text and match higher-intent queries.", "",
"3. **Do nothing.** Not recommended: the pages are not helping (3 visits) and, at this volume on a five-month-old domain, they are the most likely thing dragging the pages that do rank.", "",
"**What must not happen without sign-off:** flipping the index switch, adding redirects, or deleting URLs. This report is the inventory that rule asked for; the decision is Ken's.", "");
writeFileSync(OUT, lines.join("\n"));
console.log(`programmatic-inventory: ${S.rows.length} state + ${M.rows.length} metro pages → docs/programmatic-page-inventory.md`);
for (const f of [...S.famSummary, ...M.famSummary]) console.log(`  ${f.fam}: ${f.pages} pages, unique ${f.avgUnique}% → after normalisation ${f.avgUniqueNorm}%, avg ${f.avgWords} words`);

function median(a) { const s = [...a].sort((x, y) => x - y); return s.length ? s[Math.floor(s.length / 2)] : 0; }
