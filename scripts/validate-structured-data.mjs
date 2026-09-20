#!/usr/bin/env node
/**
 * Structured-data validation against the prerendered build.
 *
 *     npm run build && node scripts/validate-structured-data.mjs
 *
 * Parses every <script type="application/ld+json"> on every page and
 * checks (a) the JSON parses, (b) required properties for the types the
 * site emits (Article, FAQPage, HowTo, BreadcrumbList, Organization,
 * WebSite, ProfilePage/Person), (c) that values match the VISIBLE page —
 * headline = H1, FAQ questions appear in the text, breadcrumb names
 * appear in the breadcrumb nav, dates are ISO, author URL resolves to a
 * page in the build. Schema that does not match visible content is
 * reported as an error. Google's Rich Results Test can then be run on
 * the URLs this script prints as representative samples.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const BUILD = join(ROOT, ".next", "server", "app");

function walk(dir, out = []) { for (const n of readdirSync(dir)) { const f = join(dir, n); if (statSync(f).isDirectory()) walk(f, out); else if (n.endsWith(".html")) out.push(f); } return out; }
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&nbsp;/g, " ");
const strip = (h) => decode(h.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const norm = (s) => strip(String(s)).toLowerCase().replace(/[’']/g, "'").replace(/\s+/g, " ").trim();
const pathOf = (f) => { let p = "/" + relative(BUILD, f).replace(/\.html$/, ""); return p === "/index" ? "/" : p; };

const files = walk(BUILD).filter((f) => !pathOf(f).startsWith("/_"));
const known = new Set(files.map(pathOf));
const errors = []; const typeCounts = new Map(); const samples = new Map();
const err = (p, m) => errors.push(`${p}: ${m}`);

for (const f of files) {
  const path = pathOf(f);
  const html = readFileSync(f, "utf8");
  const visible = norm(html.replace(/<script[\s\S]*?<\/script>/g, " "));
  const h1 = norm(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "");
  const crumbs = [...html.matchAll(/<nav[^>]*aria-label="Breadcrumb"[\s\S]*?<\/nav>/g)].map((m) => norm(m[0])).join(" ");
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  for (const b of blocks) {
    let data;
    try { data = JSON.parse(decode(b)); } catch (e) { err(path, `JSON-LD does not parse: ${e.message}`); continue; }
    const items = Array.isArray(data) ? data : data["@graph"] ?? [data];
    for (const it of items) {
      const type = Array.isArray(it["@type"]) ? it["@type"][0] : it["@type"];
      typeCounts.set(type, (typeCounts.get(type) ?? 0) + 1);
      if (!samples.has(type)) samples.set(type, path);
      const need = (k) => { if (it[k] === undefined || it[k] === "" || it[k] === null) err(path, `${type} missing ${k}`); };
      const iso = (k) => { if (it[k] && !/^\d{4}-\d{2}-\d{2}/.test(String(it[k]))) err(path, `${type}.${k} not ISO date: ${it[k]}`); };
      switch (type) {
        case "Article": case "BlogPosting": case "NewsArticle": {
          for (const k of ["headline", "datePublished", "author", "url"]) need(k);
          iso("datePublished"); iso("dateModified");
          if (it.headline && h1 && norm(it.headline) !== h1) err(path, `Article.headline ≠ H1: "${it.headline}" vs "${h1}"`);
          if (it.dateModified && it.datePublished && it.dateModified < it.datePublished) err(path, `Article.dateModified before datePublished`);
          const author = Array.isArray(it.author) ? it.author[0] : it.author;
          if (author?.url) { const ap = new URL(author.url, "https://x").pathname; if (!known.has(ap)) err(path, `Article.author.url not in build: ${author.url}`); }
          if (!it.image) err(path, `Article has no image (og image route exists at ${path}/opengraph-image)`);
          break;
        }
        case "FAQPage": {
          const qs = it.mainEntity ?? [];
          if (!qs.length) err(path, "FAQPage with no mainEntity");
          for (const q of qs) {
            if (!q.name || !q.acceptedAnswer?.text) { err(path, "FAQPage question missing name/answer"); continue; }
            if (!visible.includes(norm(q.name).slice(0, 60))) err(path, `FAQ question not visible on page: "${q.name.slice(0, 60)}"`);
          }
          break;
        }
        case "HowTo": {
          for (const k of ["name", "step"]) need(k);
          for (const st of it.step ?? []) { if (!st.name && !st.text) err(path, "HowTo step missing name/text"); else if (st.name && !visible.includes(norm(st.name).slice(0, 40))) err(path, `HowTo step not visible: "${st.name.slice(0, 40)}"`); }
          break;
        }
        case "BreadcrumbList": {
          const list = it.itemListElement ?? [];
          if (!list.length) err(path, "BreadcrumbList empty");
          list.forEach((el, i) => { if (el.position !== i + 1) err(path, `Breadcrumb position ${el.position} at index ${i}`); if (el.name && crumbs && !crumbs.includes(norm(el.name))) err(path, `Breadcrumb name not in visible breadcrumb: "${el.name}"`); });
          break;
        }
        case "Organization": for (const k of ["name", "url"]) need(k); if (!it.logo) err(path, "Organization missing logo"); break;
        case "WebSite": for (const k of ["name", "url"]) need(k); break;
        case "Person": for (const k of ["name", "url"]) need(k); break;
        case "ProfilePage": need("mainEntity"); break;
        case "ItemList": case "CollectionPage": case "WebPage": case "Product": case "Service": break;
        default: break;
      }
    }
  }
}

console.log(`validate-structured-data: ${files.length} pages · ${errors.length} error(s)`);
for (const [t, n] of [...typeCounts].sort((a, b) => b[1] - a[1])) console.log(`  ${t}: ${n}  (e.g. ${samples.get(t)})`);
if (errors.length) {
  const grouped = new Map();
  for (const e of errors) { const k = e.replace(/^[^:]+: /, "").replace(/".*"/, "…"); grouped.set(k, [...(grouped.get(k) ?? []), e]); }
  console.log("\nErrors (grouped):");
  for (const [k, list] of [...grouped].sort((a, b) => b[1].length - a[1].length)) console.log(`  ${list.length}× ${k}\n     e.g. ${list[0]}`);
}
console.log("\nRepresentative URLs for Google's Rich Results Test:");
for (const [t, p] of samples) console.log(`  ${t}: https://www.fixitreal.com${p === "/" ? "" : p}`);
process.exit(errors.length ? 1 : 0);
