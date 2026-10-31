#!/usr/bin/env node
/**
 * Validate the local permit/code research under research/local/ and generate
 * src/content/local-detail.generated.ts from it.
 *
 * This script is the gate between "an agent or a human wrote some JSON" and
 * "a dollar figure appears on a live page with a source link". It fails the
 * build rather than emitting anything it cannot vouch for, because the whole
 * reason the metro pages were pulled from the index was thin, underivable
 * content — replacing that with *wrong* content would be worse.
 *
 * What it rejects, and why:
 * - A source URL that is not an official host. Lead-gen sites (Angi, Fixr,
 *   HomeAdvisor and friends) are the exact sources that produce plausible,
 *   unciteable numbers, so they are denied outright rather than warned about.
 * - A `fee` with no currency figure in it. "Varies" and "call for pricing"
 *   are not fees; they belong in `requirement` prose.
 * - A byGuide key that is not a real cost-guide slug (a typo would silently
 *   leave the page noindexed and look like missing research).
 * - A citySlug not present in CITIES (research for a metro we don't publish).
 * - http:// sources. These get published as outbound links.
 *
 * Usage: node scripts/build-local-detail.mjs [--check]
 *   --check  validate and report without writing the generated file.
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const RESEARCH_DIR = join(ROOT, "research/local");
const OUT = join(ROOT, "src/content/local-detail.generated.ts");
const checkOnly = process.argv.includes("--check");

const GUIDE_SLUGS = new Set([
  "electrician-service-call",
  "garbage-disposal-replacement",
  "plumber-service-call",
  "smoke-detector-replacement",
  "water-heater-replacement",
]);

// Hosts whose content is the authority's own publication. A .gov/.us host is
// accepted by suffix; these are the third-party platforms that host municipal
// code under contract to the city.
const OFFICIAL_CODE_HOSTS = [
  "municode.com",
  "amlegal.com",
  "ecode360.com",
  "codepublishing.com",
  "generalcode.com",
  "sterlingcodifiers.com",
  "iccsafe.org",
  "up.codes",
];

// Named and denied so a well-meaning future run cannot quietly reintroduce them.
const DENIED_HOSTS = [
  "angi.com", "angieslist.com", "homeadvisor.com", "thumbtack.com",
  "fixr.com", "homeguide.com", "porch.com", "yelp.com", "houzz.com",
  "networx.com", "buildzoom.com", "homewyse.com", "manta.com",
  "reddit.com", "quora.com", "facebook.com", "nextdoor.com",
];

function hostOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return null;
  }
}

function classifyUrl(url, errors, where) {
  if (typeof url !== "string" || !url.trim()) {
    errors.push(`${where}: missing source URL`);
    return;
  }
  if (!/^https:\/\//i.test(url)) {
    errors.push(`${where}: source URL must be https — got ${url}`);
    return;
  }
  const host = hostOf(url);
  if (!host) {
    errors.push(`${where}: unparseable URL ${url}`);
    return;
  }
  if (DENIED_HOSTS.some((d) => host === d || host.endsWith(`.${d}`))) {
    errors.push(`${where}: ${host} is a lead-gen/forum source and is not acceptable`);
    return;
  }
  const official =
    host.endsWith(".gov") ||
    host === "gov" ||
    host.endsWith(".us") ||
    host.endsWith(".mil") ||
    host.endsWith(".state.oh.us") ||
    OFFICIAL_CODE_HOSTS.some((h) => host === h || host.endsWith(`.${h}`));
  if (!official) {
    errors.push(
      `${where}: ${host} is not a recognised official source (.gov/.us or municipal code host)`
    );
  }
}

const FEE_PATTERN = /\$\s?\d/;

function validateSourcedNote(note, errors, where) {
  if (note === null || note === undefined) return undefined;
  if (typeof note !== "object") {
    errors.push(`${where}: expected an object`);
    return undefined;
  }
  if (typeof note.text !== "string" || note.text.trim().length < 3) {
    errors.push(`${where}: missing text`);
    return undefined;
  }
  classifyUrl(note.sourceUrl, errors, where);
  return { text: note.text.trim(), sourceUrl: note.sourceUrl };
}

// The published city list is the allowlist for research filenames.
const cityFile = readFileSync(join(ROOT, "src/content/city-cost-data.ts"), "utf8");
const knownCities = new Set(
  [...cityFile.matchAll(/slug: "([a-z0-9-]+)",\s*\n\s*name: "/g)].map((m) => m[1])
);

const files = readdirSync(RESEARCH_DIR)
  .filter((f) => f.endsWith(".json") && !f.startsWith("_"))
  .sort();

const errors = [];
const warnings = [];
const entries = [];

for (const file of files) {
  const where = `research/local/${file}`;
  let raw;
  try {
    raw = JSON.parse(readFileSync(join(RESEARCH_DIR, file), "utf8"));
  } catch (err) {
    errors.push(`${where}: invalid JSON — ${err.message}`);
    continue;
  }

  const citySlug = raw.citySlug ?? file.replace(/\.json$/, "");
  if (!knownCities.has(citySlug)) {
    errors.push(`${where}: citySlug "${citySlug}" is not a published metro`);
    continue;
  }
  if (file.replace(/\.json$/, "") !== citySlug) {
    errors.push(`${where}: filename does not match citySlug "${citySlug}"`);
  }

  if (!raw.authority || typeof raw.authority.name !== "string") {
    errors.push(`${where}: authority.name is required`);
  }
  classifyUrl(raw.authority?.url, errors, `${where} authority.url`);

  if (!/^\d{4}-\d{2}-\d{2}$/.test(raw.verifiedOn ?? "")) {
    errors.push(`${where}: verifiedOn must be ISO yyyy-mm-dd`);
  }

  const codeItems = [];
  for (const [i, item] of (raw.codeItems ?? []).entries()) {
    const ok = validateSourcedNote(item, errors, `${where} codeItems[${i}]`);
    if (ok) codeItems.push(ok);
  }

  const byGuide = {};
  for (const [slug, fact] of Object.entries(raw.byGuide ?? {})) {
    const w = `${where} byGuide.${slug}`;
    if (!GUIDE_SLUGS.has(slug)) {
      errors.push(`${w}: not a known cost-guide slug`);
      continue;
    }
    if (typeof fact?.requirement !== "string" || fact.requirement.trim().length < 10) {
      errors.push(`${w}: requirement must be a sentence`);
      continue;
    }
    classifyUrl(fact.sourceUrl, errors, w);
    const out = { requirement: fact.requirement.trim(), sourceUrl: fact.sourceUrl };
    if (fact.fee !== undefined && fact.fee !== null && String(fact.fee).trim() !== "") {
      const fee = String(fact.fee).trim();
      if (!FEE_PATTERN.test(fee)) {
        errors.push(`${w}: fee "${fee}" carries no currency figure — put prose in requirement`);
      } else {
        out.fee = fee;
      }
    }
    byGuide[slug] = out;
  }

  if (Object.keys(byGuide).length === 0) {
    warnings.push(`${where}: no verified guides — metro stays noindexed`);
  }
  if (codeItems.length === 0) {
    warnings.push(`${where}: no verified code items`);
  }

  entries.push({
    citySlug,
    verifiedOn: raw.verifiedOn,
    authority: { name: raw.authority?.name, url: raw.authority?.url },
    codeEdition: validateSourcedNote(raw.codeEdition, errors, `${where} codeEdition`),
    permitPolicy: validateSourcedNote(raw.permitPolicy, errors, `${where} permitPolicy`),
    registration: validateSourcedNote(raw.registration, errors, `${where} registration`),
    codeItems,
    byGuide,
  });
}

const indexablePages = entries.reduce((n, e) => n + Object.keys(e.byGuide).length, 0);

console.log(
  `build-local-detail: ${files.length} file(s) · ${entries.length} metro(s) valid · ` +
    `${indexablePages} page(s) become indexable · ${errors.length} error(s) · ${warnings.length} warning(s)`
);
for (const w of warnings) console.log(`  warn: ${w}`);
for (const e of errors) console.error(`  ERROR: ${e}`);

if (errors.length > 0) {
  console.error("\nRefusing to generate. Fix the research files above.");
  process.exit(1);
}
if (checkOnly) process.exit(0);

const header = `/**
 * GENERATED FILE — DO NOT EDIT BY HAND.
 *
 * Produced by scripts/build-local-detail.mjs from the verified research JSON
 * under research/local/. Re-run that script to regenerate; a manual edit here
 * is lost on the next run and would put an unsourced figure on a live page.
 *
 * Every source URL below passed the official-host check in that script
 * (.gov/.us or a municipal code publisher). Lead-gen sites are denied.
 *
 * ${entries.length} metro(s); ${indexablePages} metro x guide page(s) indexable.
 */
import type { LocalDetail } from "./local-detail-types.ts";

export const LOCAL_DETAIL: Record<string, LocalDetail> = `;

const payload = {};
for (const e of entries.sort((a, b) => a.citySlug.localeCompare(b.citySlug))) {
  const v = { verifiedOn: e.verifiedOn, authority: e.authority };
  if (e.codeEdition) v.codeEdition = e.codeEdition;
  if (e.permitPolicy) v.permitPolicy = e.permitPolicy;
  if (e.registration) v.registration = e.registration;
  v.codeItems = e.codeItems;
  v.byGuide = e.byGuide;
  payload[e.citySlug] = v;
}

writeFileSync(OUT, `${header}${JSON.stringify(payload, null, 2)};\n`, "utf8");
console.log(`wrote ${OUT}`);
