/**
 * Unit tests for the service-call arithmetic behind the state/metro pages.
 * Runs with the Node built-in test runner, no dependencies:
 *
 *   npm run test:unit
 *
 * The expected values are worked by hand from the model documented in
 * src/lib/service-call-math.ts, not copied from program output — that is
 * the point.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  emergencyTotalForWindow,
  jobTotal,
  jobTotalForWindow,
  localize,
  rawTotalAtEnd,
  roundToStep,
  thresholds,
  type ServiceCallInputs,
} from "../src/lib/service-call-math.ts";

/** Electrician service call, national: $80–$200 trip + first hour, $75–$150/h. */
const ELECTRICIAN = { base: { low: 80, high: 200 }, hourly: { low: 75, high: 150 } };

/** Tier bands exactly as in src/content/state-cost-data.ts. */
const TIERS = {
  low: { low: 0.7, high: 0.85 },
  mid: { low: 0.9, high: 1.1 },
  high: { low: 1.1, high: 1.3 },
  premium: { low: 1.3, high: 1.6 },
} as const;

const inputs = (tier: keyof typeof TIERS): ServiceCallInputs => ({
  ...ELECTRICIAN,
  includedMinutes: 60,
  multiplier: TIERS[tier],
});

test("roundToStep: $5 steps under $1,000, $50 steps at or above", () => {
  assert.equal(roundToStep(72), 70);
  assert.equal(roundToStep(67.5), 70);
  assert.equal(roundToStep(62.5), 65); // JS Math.round rounds .5 up
  assert.equal(roundToStep(1021), 1000);
  assert.equal(roundToStep(1025), 1050);
  assert.equal(roundToStep(999), 1000);
});

test("localize: low×low, high×high, then rounded", () => {
  // mid: 80×0.9=72→70, 200×1.1=220
  assert.deepEqual(localize(ELECTRICIAN.base, TIERS.mid), { low: 70, high: 220 });
  // low: 80×0.7=56→55, 200×0.85=170
  assert.deepEqual(localize(ELECTRICIAN.base, TIERS.low), { low: 55, high: 170 });
  // high: 80×1.1=88→90, 200×1.3=260
  assert.deepEqual(localize(ELECTRICIAN.base, TIERS.high), { low: 90, high: 260 });
  // premium: 80×1.3=104→105, 200×1.6=320
  assert.deepEqual(localize(ELECTRICIAN.base, TIERS.premium), { low: 105, high: 320 });
});

test("inside the included window, the total is the base fee — every tier", () => {
  for (const tier of ["low", "mid", "high", "premium"] as const) {
    const base = localize(ELECTRICIAN.base, TIERS[tier]);
    assert.deepEqual(jobTotal(30, inputs(tier)), base, `${tier} @30`);
    assert.deepEqual(jobTotal(60, inputs(tier)), base, `${tier} @60`);
  }
});

test("beyond the window, time is prorated at the local hourly rate", () => {
  // mid tier, 90 min = base + 0.5 h × hourly
  // low end: 72 + 0.5 × 67.5 = 105.75 → 105
  // high end: 220 + 0.5 × 165 = 302.5 → 300 (Math.round(60.5)=61 → 305? no:
  //   302.5 / 5 = 60.5 → Math.round → 61 → 305. Spelled out so nobody
  //   "fixes" it to 300 later.)
  assert.equal(rawTotalAtEnd("low", 90, inputs("mid")), 105.75);
  assert.equal(rawTotalAtEnd("high", 90, inputs("mid")), 302.5);
  assert.deepEqual(jobTotal(90, inputs("mid")), { low: 105, high: 305 });

  // mid tier, 120 min = base + 1 h × hourly
  // low: 72 + 67.5 = 139.5 → 140 ; high: 220 + 165 = 385
  assert.deepEqual(jobTotal(120, inputs("mid")), { low: 140, high: 385 });
});

test("30/60/90/120-minute totals across low, mid, high, premium", () => {
  // Hand-computed: base_end×m + max(0, min−60)/60 × hourly_end×m, rounded.
  const expected: Record<keyof typeof TIERS, Record<number, [number, number]>> = {
    //          30           60           90                        120
    low:     { 30: [55, 170], 60: [55, 170], 90: [80, 235],  120: [110, 300] },
    // low: 56 + 0.5×52.5 = 82.25→80 ; 170 + 0.5×127.5 = 233.75→235
    //      56 + 52.5 = 108.5→110   ; 170 + 127.5 = 297.5→300
    mid:     { 30: [70, 220], 60: [70, 220], 90: [105, 305], 120: [140, 385] },
    high:    { 30: [90, 260], 60: [90, 260], 90: [130, 360], 120: [170, 455] },
    // high: 88 + 0.5×82.5 = 129.25→130 ; 260 + 0.5×195 = 357.5→360
    //       88 + 82.5 = 170.5→170     ; 260 + 195 = 455
    premium: { 30: [105, 320], 60: [105, 320], 90: [150, 440], 120: [200, 560] },
    // prem: 104 + 0.5×97.5 = 152.75→155? → 152.75/5 = 30.55 → 31 → 155.
    //       Recheck below with assertion on raw value.
  };
  for (const tier of Object.keys(expected) as (keyof typeof TIERS)[]) {
    for (const minutes of [30, 60, 90, 120]) {
      const [low, high] = expected[tier][minutes];
      if (tier === "premium" && minutes === 90) continue; // asserted separately
      assert.deepEqual(jobTotal(minutes, inputs(tier)), { low, high }, `${tier} @${minutes}`);
    }
  }
  // premium @90: low 104 + 48.75 = 152.75 → 155 ; high 320 + 120 = 440
  assert.equal(rawTotalAtEnd("low", 90, inputs("premium")), 152.75);
  assert.deepEqual(jobTotal(90, inputs("premium")), { low: 155, high: 440 });
});

test("a window's range is cheapest-short-visit to priciest-long-visit", () => {
  // "Two small items, 60–120 min" on a mid-tier state:
  // low end is a 60-minute visit (inside the window) = base.low = 70
  // high end is a 120-minute visit = base.high + hourly.high = 385
  assert.deepEqual(jobTotalForWindow(60, 120, inputs("mid")), { low: 70, high: 385 });
});

test("REGRESSION: the two-item row must not bill an extra hour at the low end", () => {
  // These are the exact figures that were live on 2026-09-20.
  // Ohio (mid) showed $140–$385 — the low end was base.low + hourly.low.
  const ohio = jobTotalForWindow(60, 120, inputs("mid"));
  assert.equal(ohio.low, 70, "Ohio two-item low end must equal the base fee");
  assert.equal(ohio.high, 385);
  assert.notEqual(ohio.low, 140);

  // Alabama (low) showed $110–$300.
  const alabama = jobTotalForWindow(60, 120, inputs("low"));
  assert.deepEqual(alabama, { low: 55, high: 300 });

  // Illinois (high) showed $175–$455.
  const illinois = jobTotalForWindow(60, 120, inputs("high"));
  assert.deepEqual(illinois, { low: 90, high: 455 });
});

test("emergency multiplier applies to the whole total, 1.5× low to 2× high", () => {
  // mid, single fix 30–60 min: 72×1.5 = 108→110 ; 220×2 = 440
  assert.deepEqual(emergencyTotalForWindow(30, 60, inputs("mid")), { low: 110, high: 440 });
  // low: 56×1.5 = 84→85 ; 170×2 = 340
  assert.deepEqual(emergencyTotalForWindow(30, 60, inputs("low")), { low: 85, high: 340 });
  // high: 88×1.5 = 132→130 ; 260×2 = 520
  assert.deepEqual(emergencyTotalForWindow(30, 60, inputs("high")), { low: 130, high: 520 });
});

test("thresholds derive from the local base range", () => {
  // mid: base 70–220 → fair (70+220)/2 = 145 ; suspicious 220×1.4 = 308→310 ; walk 220×1.8 = 396→395
  assert.deepEqual(thresholds({ low: 70, high: 220 }), { fair: 145, suspicious: 310, walkAway: 395 });
});

test("includedMinutes is honoured when a guide sets a different window", () => {
  const thirty: ServiceCallInputs = { ...inputs("mid"), includedMinutes: 30 };
  // 60 min with a 30-min window = base + 0.5 h: 72 + 33.75 = 105.75 → 105
  assert.deepEqual(jobTotal(60, thirty), { low: 105, high: 305 });
});
