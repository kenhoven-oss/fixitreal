/**
 * calculator_click only fires for Home Repair Planner calculator URLs.
 *
 *   npm run test:unit
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { calculatorSlugFromHref } from "../src/lib/funnel-events.ts";

test("calculator URLs resolve to their slug", () => {
  assert.equal(
    calculatorSlugFromHref("https://homerepairplanner.com/calculators/water-heater-replacement-cost"),
    "water-heater-replacement-cost",
  );
  assert.equal(calculatorSlugFromHref("https://www.homerepairplanner.com/calculators/ac-replacement-cost/"), "ac-replacement-cost");
});

test("everything else is ignored", () => {
  for (const href of [
    null,
    undefined,
    "",
    "not a url",
    "/costs/water-heater-replacement",
    "https://homerepairplanner.com/guides/home-inspection-repair-plan",
    "https://homerepairplanner.com/calculators",
    "https://example.com/calculators/roof-replacement-cost",
    "https://homerepairplanner.com.evil.test/calculators/roof-replacement-cost",
  ]) {
    assert.equal(calculatorSlugFromHref(href), null, String(href));
  }
});
