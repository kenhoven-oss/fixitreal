#!/usr/bin/env node
/**
 * Does each affiliate link still point at the product its card describes?
 *
 * WHY THIS EXISTS
 * ---------------
 * check-affiliate-links answers "does this link resolve?". That is not the
 * question that keeps biting this site. Every link in docs/product-links.csv
 * resolved with HTTP 200 while the lead card on the smoke-alarm guide was
 * reportedly sending readers to a carbon-monoxide detector. A 200 tells you
 * nothing about whether the destination is the right product.
 *
 * This resolves every amzn.to link and prints the destination's actual
 * product title next to the slot name from the CSV, so a human can scan for
 * mismatches in one pass instead of clicking 54 links.
 *
 * It deliberately does NOT fail the build. Matching a product title to a
 * slot description is a judgement call, not a rule. Output is a report.
 *
 * Run: npm run audit-affiliate-destinations
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const CSV = join(ROOT, "docs/product-links.csv");
const OUT = join(ROOT, "docs/affiliate-destination-audit.md");

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/124.0 Safari/537.36 FixItReal-LinkChecker";

/** Minimal CSV parser — quoted fields, doubled quotes. */
function parseCsv(text) {
  const rows = [];
  let row = [], field = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++; } else q = false; }
      else field += c;
    } else if (c === '"') q = true;
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

/** Pull a usable product name out of an Amazon product page. */
function productTitle(html, finalUrl) {
  const tag = html.match(/<span[^>]*id="productTitle"[^>]*>([\s\S]{1,400}?)<\/span>/i);
  if (tag) return decode(tag[1]);

  const title = html.match(/<title[^>]*>([\s\S]{1,400}?)<\/title>/i);
  const clean = title
    ? decode(title[1]).replace(/\s*[:|-]\s*Amazon\.com.*$/i, "").trim()
    : "";

  // Amazon serves a bot interstitial titled just "Amazon.com" (or a robot
  // check) to a scripted request often enough that treating that as the
  // product name would make this whole report useless. Fall through to the
  // URL slug, which Amazon builds from the real product title.
  const useless = !clean || /^amazon\.?(com)?$/i.test(clean) || /robot|sorry|captcha/i.test(clean);
  if (!useless) return clean;

  const slug = finalUrl.match(/amazon\.[a-z.]+\/([^/]+)\/(?:dp|gp)\//i);
  if (slug && !/^(gp|dp|s)$/i.test(slug[1])) {
    return slug[1].replace(/-/g, " ") + "  [from URL slug]";
  }
  const asin = finalUrl.match(/\/(?:dp|d)\/([A-Z0-9]{10})/i);
  return asin ? `(no title; ASIN ${asin[1]})` : "(no title found)";
}

const decode = (s) =>
  s
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const rows = parseCsv(readFileSync(CSV, "utf8")).filter((r) =>
  /^https?:\/\/amzn\.to\//.test(r["Affiliate URL (paste here)"] ?? "")
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const results = [];

for (const row of rows) {
  const url = row["Affiliate URL (paste here)"];
  let finalUrl = "", title = "", status = 0;
  try {
    const res = await fetch(url, { headers: { "user-agent": UA }, redirect: "follow" });
    status = res.status;
    finalUrl = res.url;
    title = productTitle(await res.text(), finalUrl);
  } catch (err) {
    title = `(fetch failed: ${err.message})`;
  }
  results.push({
    page: row.Page,
    slot: row["Product Name"],
    url,
    status,
    finalUrl,
    title,
    csvNote: /REDO|DEAD/i.test(row.Notes ?? "") || /DEAD/i.test(row.Status ?? ""),
  });
  process.stdout.write(".");
  await sleep(350 + Math.random() * 300);
}
process.stdout.write("\n");

const lines = [
  "# Affiliate destination audit",
  "",
  `Generated ${new Date().toISOString().slice(0, 10)} by \`npm run audit-affiliate-destinations\`.`,
  "",
  "Each row is the slot the card promises next to the product the link",
  "actually lands on. Read it and judge; nothing here is automatic.",
  "`⚑` marks a row whose CSV Notes or Status still carry a REDO/DEAD flag —",
  "check whether the flag is still true before acting on it.",
  "",
];

let page = "";
for (const r of results) {
  if (r.page !== page) {
    page = r.page;
    lines.push("", `## ${page}`, "");
  }
  lines.push(`- ${r.csvNote ? "⚑ " : ""}**${r.slot}**`);
  lines.push(`  - lands on: ${r.title}`);
  lines.push(`  - ${r.url} → HTTP ${r.status}`);
}

writeFileSync(OUT, lines.join("\n") + "\n");
console.log(`Wrote ${OUT} (${results.length} links).`);
