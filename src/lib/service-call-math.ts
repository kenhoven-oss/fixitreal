/**
 * The arithmetic behind every service-call number on the programmatic
 * state and metro cost pages — in one dependency-free module so it can be
 * unit-tested with plain `node --test` and read top to bottom.
 *
 * THE MODEL (stated on every page in "How we calculated this local price")
 * ------------------------------------------------------------------------
 *   national base range     what the parent guide publishes for the trip
 *                           plus the INCLUDED time window
 *   included window         minutes covered by the base fee (60 by default)
 *   subsequent hourly rate  billed for time beyond the window, prorated
 *   regional multiplier     tier band (low..high) applied low-to-low and
 *                           high-to-high, so the local range is wider than
 *                           the national one — deliberately
 *   emergency multiplier    1.5× (low) to 2× (high) on the whole total
 *   rounding                $5 steps under $1,000, $50 steps above
 *
 *   total(minutes) = base + max(0, minutes − included) / 60 × hourly
 *   emergency(minutes) = total(minutes) × emergencyMultiplier
 *
 * Each of these is applied to the low end with the low-end inputs and to
 * the high end with the high-end inputs. Nothing on the page may show a
 * number that this file cannot reproduce.
 *
 * WHAT WAS WRONG BEFORE (2026-09-20)
 * -----------------------------------
 * The "Two small items on the same visit — 60–120 min" row was computed as
 * (base.low + hourly.low) to (base.high + hourly.high). That charges a full
 * extra hour at the LOW end even though a 60-minute visit is entirely
 * inside the included window. Ohio electrician showed $140–$385 where the
 * model gives $70–$385; Alabama $110–$300 vs $55–$300; Illinois $175–$455
 * vs $90–$455. The high end was right; the low end double-billed the first
 * hour. Every state page built from the service-call template had it.
 */

export type Range = { low: number; high: number };

export type ServiceCallInputs = {
  /** National trip fee including the first `includedMinutes`. */
  base: Range;
  /** National rate for time beyond the included window, per hour. */
  hourly: Range;
  /** Minutes covered by the base fee. Defaults to 60. */
  includedMinutes?: number;
  /** Regional band, e.g. { low: 0.9, high: 1.1 } for the "mid" tier. */
  multiplier: Range;
  /** After-hours band. Defaults to { low: 1.5, high: 2 }. */
  emergencyMultiplier?: Range;
};

export const DEFAULT_INCLUDED_MINUTES = 60;
export const DEFAULT_EMERGENCY_MULTIPLIER: Range = { low: 1.5, high: 2 };

/** $5 steps under $1,000, $50 steps at or above. Matches the base ranges. */
export function roundToStep(value: number): number {
  const step = value >= 1000 ? 50 : 5;
  return Math.round(value / step) * step;
}

/** Scale a national range to a place: low×low, high×high, then round. */
export function localize(range: Range, multiplier: Range): Range {
  return {
    low: roundToStep(range.low * multiplier.low),
    high: roundToStep(range.high * multiplier.high),
  };
}

/**
 * Unrounded total for a job of `minutes`, at one end of the band.
 * Exposed so tests can check the arithmetic before rounding.
 */
export function rawTotalAtEnd(
  end: "low" | "high",
  minutes: number,
  inputs: ServiceCallInputs
): number {
  const included = inputs.includedMinutes ?? DEFAULT_INCLUDED_MINUTES;
  const m = inputs.multiplier[end];
  const base = inputs.base[end] * m;
  const hourly = inputs.hourly[end] * m;
  const extraHours = Math.max(0, minutes - included) / 60;
  return base + extraHours * hourly;
}

/** Rounded local total range for a job lasting `minutes`. */
export function jobTotal(minutes: number, inputs: ServiceCallInputs): Range {
  return {
    low: roundToStep(rawTotalAtEnd("low", minutes, inputs)),
    high: roundToStep(rawTotalAtEnd("high", minutes, inputs)),
  };
}

/**
 * Rounded local total range for a job that could take anywhere from
 * `minMinutes` to `maxMinutes`: the cheapest plausible visit at the low
 * end of the band, the most expensive plausible visit at the high end.
 */
export function jobTotalForWindow(
  minMinutes: number,
  maxMinutes: number,
  inputs: ServiceCallInputs
): Range {
  return {
    low: roundToStep(rawTotalAtEnd("low", minMinutes, inputs)),
    high: roundToStep(rawTotalAtEnd("high", maxMinutes, inputs)),
  };
}

/** Same as jobTotalForWindow, with the emergency band applied first. */
export function emergencyTotalForWindow(
  minMinutes: number,
  maxMinutes: number,
  inputs: ServiceCallInputs
): Range {
  const em = inputs.emergencyMultiplier ?? DEFAULT_EMERGENCY_MULTIPLIER;
  return {
    low: roundToStep(rawTotalAtEnd("low", minMinutes, inputs) * em.low),
    high: roundToStep(rawTotalAtEnd("high", maxMinutes, inputs) * em.high),
  };
}

/**
 * Sanity thresholds shown in the fair-price block: derived from the local
 * base range, not typed by hand.
 */
export function thresholds(localBase: Range): {
  fair: number;
  suspicious: number;
  walkAway: number;
} {
  return {
    fair: roundToStep((localBase.low + localBase.high) / 2),
    suspicious: roundToStep(localBase.high * 1.4),
    walkAway: roundToStep(localBase.high * 1.8),
  };
}
