/**
 * What a state requires of a home seller for smoke and CO alarms at sale.
 *
 * Every field is read off the statute or the state fire marshal's own rule,
 * never summarised from a realtor or law-firm page — see
 * scripts/build-smoke-alarm-sale.mjs for the gate. The page shows the
 * citation and the date checked beside each row so a reader can verify it,
 * which is the whole point: this is law, it changes, and a stale confident
 * answer could have someone miss an obligation at closing.
 */
export type SmokeAlarmSaleRule = {
  state: string;
  stateSlug: string;
  /** ISO date the statute was read. */
  verifiedOn: string;
  /**
   * true  - state law ties working alarms to sale/transfer specifically
   * false - no sale-specific rule (general alarm duties may still apply)
   * null  - could not be established from an official source; says so
   */
  requiredAtSale: boolean | null;
  /** One plain sentence for a homeowner. */
  summary: string;
  alarmType: string | null;
  coAlarms: string | null;
  certification: string | null;
  /** Statute or rule cite, e.g. "Mass. G.L. c. 148 s. 26F". */
  citation: string | null;
  sourceUrl: string;
  lastAmended: string | null;
};
