/**
 * Verified local permit / code facts for one metro.
 *
 * This is the "real local data" the programmatic-page inventory
 * (docs/programmatic-page-inventory.md) said a place must carry before its
 * pages are worth submitting to search engines. Everything here has to be
 * a fact published by the permitting authority itself, with the URL it came
 * from and the date it was checked. Tier multipliers, national averages and
 * anything derived from the parent guide do NOT belong in this type -- the
 * whole point is content a reader cannot get from the national guide.
 *
 * Rules for adding an entry:
 * - Fee strings are copied from the authority's published fee schedule,
 *   never estimated, averaged or interpolated. If the authority does not
 *   publish a number, omit `fee` and say so in `requirement`.
 * - Every fact carries its own sourceUrl, because they routinely come from
 *   different documents (fee schedule vs. code section vs. registration page).
 * - A city is only indexable per-guide (see isCityGuideIndexable): a metro
 *   with a verified water-heater permit fee but nothing on smoke detectors
 *   gets the water-heater page indexed and leaves the other noindexed.
 */
export type LocalPermitFact = {
  /** What the authority requires for this job, one sentence. */
  requirement: string;
  /** Published fee, verbatim from the fee schedule. Omit when unpublished. */
  fee?: string;
  sourceUrl: string;
};

export type LocalSourcedNote = {
  text: string;
  sourceUrl: string;
};

export type LocalDetail = {
  /** ISO date these facts were checked against the authority's own pages. */
  verifiedOn: string;
  /** The permitting authority for this city. */
  authority: { name: string; url: string };
  /** Code edition in force, e.g. "2024 Ohio Residential Code". */
  codeEdition?: LocalSourcedNote;
  /** Whether a homeowner may pull the permit, or only a licensed contractor. */
  permitPolicy?: LocalSourcedNote;
  /** Local contractor registration required on top of the state license. */
  registration?: LocalSourcedNote;
  /** Local items inspectors actually check on these jobs. */
  codeItems: LocalSourcedNote[];
  /** Per-guide permit facts, keyed by cost-guide slug. */
  byGuide: Record<string, LocalPermitFact>;
};
