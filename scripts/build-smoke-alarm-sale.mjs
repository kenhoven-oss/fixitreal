#!/usr/bin/env node
/**
 * Validate the state smoke/CO alarm-at-sale research and generate
 * src/content/smoke-alarm-sale.generated.ts from it.
 *
 * Same gate as scripts/build-local-detail.mjs, tightened for legal content:
 * this publishes statements about what STATE LAW requires of a home seller.
 * A wrong requirement here could have someone skip a legal obligation at
 * closing, so the bar is the statute itself, cited, with the URL it was read
 * on and the date it was checked.
 *
 * Rejects: a non-official source host (legal-marketing and lead-gen sites are
 * denied by name - they are exactly where plausible, wrong summaries of state
 * law come from), http sources, a "required at sale" claim with no statute
 * citation, and any state slug that is not one of the 50.
 *
 * Usage: node scripts/build-smoke-alarm-sale.mjs [--check]
 */
import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const DIR = join(ROOT, "research/smoke-alarm-sale");
const OUT = join(ROOT, "src/content/smoke-alarm-sale.generated.ts");
const checkOnly = process.argv.includes("--check");

const STATES = {
  alabama:"Alabama", alaska:"Alaska", arizona:"Arizona", arkansas:"Arkansas",
  california:"California", colorado:"Colorado", connecticut:"Connecticut",
  delaware:"Delaware", florida:"Florida", georgia:"Georgia", hawaii:"Hawaii",
  idaho:"Idaho", illinois:"Illinois", indiana:"Indiana", iowa:"Iowa",
  kansas:"Kansas", kentucky:"Kentucky", louisiana:"Louisiana", maine:"Maine",
  maryland:"Maryland", massachusetts:"Massachusetts", michigan:"Michigan",
  minnesota:"Minnesota", mississippi:"Mississippi", missouri:"Missouri",
  montana:"Montana", nebraska:"Nebraska", nevada:"Nevada",
  "new-hampshire":"New Hampshire", "new-jersey":"New Jersey",
  "new-mexico":"New Mexico", "new-york":"New York",
  "north-carolina":"North Carolina", "north-dakota":"North Dakota",
  ohio:"Ohio", oklahoma:"Oklahoma", oregon:"Oregon", pennsylvania:"Pennsylvania",
  "rhode-island":"Rhode Island", "south-carolina":"South Carolina",
  "south-dakota":"South Dakota", tennessee:"Tennessee", texas:"Texas",
  utah:"Utah", vermont:"Vermont", virginia:"Virginia", washington:"Washington",
  "west-virginia":"West Virginia", wisconsin:"Wisconsin", wyoming:"Wyoming",
};

// Denied by name: these publish confident summaries of state law that are
// often out of date, and are the easiest thing for a researcher to land on.
const DENIED = [
  "rocketlawyer.com","legalzoom.com","realtor.com","zillow.com","redfin.com",
  "homeadvisor.com","angi.com","thumbtack.com","nolo.com","findlaw.com",
  "justia.com","lawinsider.com","avvo.com","trulia.com","opendoor.com",
  "firstalert.com","kidde.com","reddit.com","quora.com",
];

// Official publishers of state law. .gov/.us pass by suffix.
const OFFICIAL_EXTRA = [
  "legis.state.pa.us","law.justia.gov","casetext.gov",
  "malegislature.gov","leginfo.legislature.ca.gov","nysenate.gov",
  "revisor.mn.gov","ilga.gov","legis.wisconsin.gov","capitol.texas.gov",
  "lrc.ky.gov","azleg.gov","alec.al.gov","oklegislature.gov",
];

const host = (u) => { try { return new URL(u).hostname.replace(/^www\./,"").toLowerCase(); } catch { return null; } };

function checkUrl(u, errors, where) {
  if (typeof u !== "string" || !u.trim()) { errors.push(`${where}: missing source URL`); return; }
  if (!/^https:\/\//i.test(u)) { errors.push(`${where}: must be https — ${u}`); return; }
  const h = host(u);
  if (!h) { errors.push(`${where}: unparseable URL`); return; }
  if (DENIED.some((d) => h === d || h.endsWith(`.${d}`))) {
    errors.push(`${where}: ${h} is a legal-marketing/lead-gen source, not acceptable for a statement of law`);
    return;
  }
  const ok = h.endsWith(".gov") || h.endsWith(".us") || h.endsWith(".mil") ||
    OFFICIAL_EXTRA.some((o) => h === o || h.endsWith(`.${o}`));
  if (!ok) errors.push(`${where}: ${h} is not a recognised official publisher of state law`);
}

if (!existsSync(DIR)) { console.log("build-smoke-alarm-sale: no research directory yet"); process.exit(0); }
const files = readdirSync(DIR).filter((f) => f.endsWith(".json") && !f.startsWith("_")).sort();

const errors = [], warnings = [], entries = [];
for (const file of files) {
  const where = `research/smoke-alarm-sale/${file}`;
  let raw;
  try { raw = JSON.parse(readFileSync(join(DIR, file), "utf8")); }
  catch (e) { errors.push(`${where}: invalid JSON — ${e.message}`); continue; }

  const slug = raw.stateSlug ?? file.replace(/\.json$/, "");
  if (!STATES[slug]) { errors.push(`${where}: "${slug}" is not one of the 50 states`); continue; }
  if (file.replace(/\.json$/, "") !== slug) errors.push(`${where}: filename does not match stateSlug`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(raw.verifiedOn ?? "")) errors.push(`${where}: verifiedOn must be ISO yyyy-mm-dd`);

  const req = raw.requiredAtSale;
  if (!(req === true || req === false || req === null)) {
    errors.push(`${where}: requiredAtSale must be true, false or null`);
  }
  if (typeof raw.summary !== "string" || raw.summary.trim().length < 15) {
    errors.push(`${where}: summary must be a sentence`);
  }
  // The load-bearing rule: a positive legal claim needs the statute behind it.
  if (req === true && (!raw.citation || !String(raw.citation).trim())) {
    errors.push(`${where}: claims a requirement at sale but cites no statute`);
  }
  checkUrl(raw.sourceUrl, errors, `${where} sourceUrl`);
  if (req === null) warnings.push(`${where}: requirement unclear — will render as "not established"`);

  entries.push({
    state: STATES[slug], stateSlug: slug, verifiedOn: raw.verifiedOn,
    requiredAtSale: req ?? null,
    summary: String(raw.summary ?? "").trim(),
    alarmType: raw.alarmType ?? null,
    coAlarms: raw.coAlarms ?? null,
    certification: raw.certification ?? null,
    citation: raw.citation ?? null,
    sourceUrl: raw.sourceUrl,
    lastAmended: raw.lastAmended ?? null,
  });
}

const yes = entries.filter((e) => e.requiredAtSale === true).length;
console.log(
  `build-smoke-alarm-sale: ${files.length} file(s) · ${entries.length} state(s) valid · ` +
  `${yes} require alarms at sale · ${errors.length} error(s) · ${warnings.length} warning(s)`
);
for (const w of warnings) console.log(`  warn: ${w}`);
for (const e of errors) console.error(`  ERROR: ${e}`);
if (errors.length) { console.error("\nRefusing to generate."); process.exit(1); }
if (checkOnly) process.exit(0);

entries.sort((a, b) => a.state.localeCompare(b.state));
const header = `/**
 * GENERATED FILE — DO NOT EDIT BY HAND.
 *
 * Produced by scripts/build-smoke-alarm-sale.mjs from the research JSON under
 * research/smoke-alarm-sale/. Every sourceUrl passed that script's
 * official-publisher check (.gov/.us or a state legislature); legal-marketing
 * and lead-gen hosts are denied by name, because this is a statement about
 * what state law requires of a seller.
 *
 * ${entries.length} state(s); ${yes} require working alarms at sale or transfer.
 */
import type { SmokeAlarmSaleRule } from "./smoke-alarm-sale-types.ts";

export const SMOKE_ALARM_SALE: SmokeAlarmSaleRule[] = `;
writeFileSync(OUT, `${header}${JSON.stringify(entries, null, 2)};\n`, "utf8");
console.log(`wrote ${OUT}`);
