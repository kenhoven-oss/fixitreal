#!/usr/bin/env node
/**
 * Live technical-SEO verification against production.
 *
 *     node scripts/technical-seo-check.mjs [https://www.fixitreal.com]
 *
 * Checks robots.txt, sitemap.xml (status, absolute HTTPS locs, lastmod,
 * noindex/canonical on a sample of listed URLs), host and trailing-slash
 * redirects, redirect status codes, 404 behaviour, and the vercel.app
 * alias. Prints PASS/WARN/FAIL lines and exits 1 on any FAIL. Written
 * so the same checks can be re-run after every deploy.
 */
const BASE = (process.argv[2] ?? "https://www.fixitreal.com").replace(/\/$/, "");
const HOST = new URL(BASE).host;
const APEX = HOST.replace(/^www\./, "");

let fails = 0;
const out = (level, msg) => { if (level === "FAIL") fails++; console.log(`${level.padEnd(4)} ${msg}`); };

async function head(url) {
  const r = await fetch(url, { redirect: "manual", headers: { "user-agent": "fixitreal-seo-check" } });
  return { status: r.status, location: r.headers.get("location"), robots: r.headers.get("x-robots-tag"), type: r.headers.get("content-type") ?? "" };
}
async function text(url) { const r = await fetch(url, { headers: { "user-agent": "fixitreal-seo-check" } }); return { status: r.status, body: await r.text(), type: r.headers.get("content-type") ?? "" }; }

// robots
const robots = await text(`${BASE}/robots.txt`);
out(robots.status === 200 ? "PASS" : "FAIL", `robots.txt ${robots.status} ${robots.type}`);
const sm = robots.body.match(/^Sitemap:\s*(\S+)/m)?.[1];
out(sm === `${BASE}/sitemap.xml` ? "PASS" : "FAIL", `robots.txt Sitemap line → ${sm}`);

// sitemap
const sitemap = await text(`${BASE}/sitemap.xml`);
out(sitemap.status === 200 && /xml/.test(sitemap.type) ? "PASS" : "FAIL", `sitemap.xml ${sitemap.status} ${sitemap.type}`);
const locs = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => !u.includes("/opengraph-image"));
const badLoc = locs.filter((u) => !(u === BASE || u.startsWith(`${BASE}/`)));
out(badLoc.length === 0 ? "PASS" : "FAIL", `sitemap: ${locs.length} page URLs, ${badLoc.length} not absolute-HTTPS on ${HOST}`);
const lastmods = [...sitemap.body.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
const buildStamped = lastmods.filter((d) => /T\d\d:\d\d:\d\d\.\d/.test(d) && !/T00:00:00\.000Z$/.test(d)).length;
out(buildStamped === 0 ? "PASS" : "WARN", `sitemap: ${buildStamped} lastmod values are build timestamps (hub pages) rather than content dates`);
const dupLoc = locs.length - new Set(locs).size;
out(dupLoc === 0 ? "PASS" : "FAIL", `sitemap: ${dupLoc} duplicate <loc> entries`);

// sample listed URLs: 200, index, self-canonical, one H1
const sample = locs.filter((_, i) => i % Math.max(1, Math.floor(locs.length / 40)) === 0).slice(0, 40);
let sampleBad = 0;
for (const u of sample) {
  const r = await text(u);
  const canon = r.body.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const meta = r.body.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? "";
  const h1s = (r.body.match(/<h1\b/g) ?? []).length;
  const ok = r.status === 200 && canon === u && !/noindex/.test(meta) && h1s === 1;
  if (!ok) { sampleBad++; out("FAIL", `${u}: status ${r.status}, canonical ${canon}, robots "${meta}", h1×${h1s}`); }
}
out(sampleBad === 0 ? "PASS" : "FAIL", `sitemap sample of ${sample.length}: ${sampleBad} with wrong status/canonical/noindex/H1 count`);

// host + scheme + trailing slash
const checks = [
  [`http://${APEX}/`, [301, 308], null],
  [`https://${APEX}/`, [301, 308], `${BASE}/`],
  [`http://${HOST}/advice`, [301, 308], `${BASE}/advice`],
  [`${BASE}/costs/`, [301, 308], `${BASE}/costs`],
];
for (const [u, codes, loc] of checks) {
  const r = await head(u);
  const okCode = codes.includes(r.status);
  const resolved = r.location ? new URL(r.location, u).toString() : "";
  const okLoc = !loc || resolved.replace(/\/$/, "") === loc.replace(/\/$/, "");
  out(okCode && okLoc ? "PASS" : r.status === 307 || r.status === 302 ? "WARN" : "FAIL", `${u} → ${r.status} ${r.location ?? ""}${okCode ? "" : " (temporary redirect; should be 301/308)"}`);
}

// known redirects from next.config.ts
for (const [from, to] of [["/tools/diy-or-hire/replace-toilet", "/diy-or-hire/toilet"], ["/inspection/buyer-repair-request-response", "/home-inspection-repairs/buyer-repair-request-response"], ["/about/authors/lee-hoven", "/about/authors/ken-hoven"]]) {
  const r = await head(`${BASE}${from}`);
  out([301, 308].includes(r.status) && (r.location ?? "").endsWith(to) ? "PASS" : "FAIL", `${from} → ${r.status} ${r.location ?? ""}`);
}

// 404
const nf = await text(`${BASE}/this-page-does-not-exist-${Date.now()}`);
out(nf.status === 404 ? "PASS" : "FAIL", `unknown URL → ${nf.status}${/noindex/.test(nf.body) ? " (noindex)" : ""}`);

// vercel.app alias must not be an indexable duplicate
const alias = await head(`https://${process.env.VERCEL_ALIAS ?? "fixitreal.vercel.app"}/`);
out(/noindex/.test(alias.robots ?? "") || [301, 308].includes(alias.status) ? "PASS" : "FAIL", `vercel.app alias → ${alias.status}, x-robots-tag: ${alias.robots ?? "(none)"}`);

console.log(fails === 0 ? "\ntechnical-seo-check: all checks passed" : `\ntechnical-seo-check: ${fails} FAIL`);
process.exit(fails ? 1 : 0);
