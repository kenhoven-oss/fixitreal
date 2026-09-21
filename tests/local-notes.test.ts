import { test } from "node:test";
import assert from "node:assert/strict";
import { notesForTrade, splitSentences } from "../src/lib/local-notes.ts";

const CLEVELAND =
  "Cleveland service rates run at the lower end of Midwest pricing. Lake-effect winter weather drives heavy emergency-call demand January–February. Older housing stock commonly needs aluminum-branch-wiring remediation.";

test("wiring notes do not appear on plumber-trade pages (water heater, disposal, plumber)", () => {
  const out = notesForTrade(CLEVELAND, "plumber");
  assert.ok(!/wiring/i.test(out));
  assert.ok(/lower end of Midwest pricing/.test(out));
  assert.ok(/Lake-effect/.test(out));
});

test("wiring notes do appear on electrician-trade pages", () => {
  assert.ok(/aluminum-branch-wiring/.test(notesForTrade(CLEVELAND, "electrician")));
});

test("frozen-pipe and hard-water notes do not appear on electrician pages", () => {
  const n = "Minneapolis runs at the upper end of Midwest pricing. Winter frozen-pipe season creates extreme emergency demand. Hard water shortens fixture life.";
  const out = notesForTrade(n, "electrician");
  assert.equal(out, "Minneapolis runs at the upper end of Midwest pricing.");
});

test("HVAC-only sentences are dropped for both trades; mixed sentences stay for both", () => {
  const n = "Summer-heat demand pushes HVAC-adjacent rates up. Saltwater corrosion shortens copper pipe and electrical service-entry life.";
  for (const t of ["electrician", "plumber"] as const) {
    const out = notesForTrade(n, t);
    assert.ok(!/HVAC/.test(out), t);
    assert.ok(/Saltwater/.test(out), t);
  }
});

test("sentence split does not break on U.S. or St.", () => {
  assert.deepEqual(
    splitSentences("Rates run at the top of the U.S. range. St. Louis runs mid-tier. Permits take 5 days."),
    ["Rates run at the top of the U.S. range.", "St. Louis runs mid-tier.", "Permits take 5 days."]
  );
});
