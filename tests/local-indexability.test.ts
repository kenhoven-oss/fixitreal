/**
 * Unit tests for the rule that decides whether a programmatic metro page is
 * submitted to search engines.
 *
 *   npm run test:unit
 *
 * Why this is worth testing: 655 templated state/metro pages were pulled
 * from the index because they were ~27% distinct once prices and place names
 * were discounted, and produced 3 search visits in 30 days. The replacement
 * rule is "a page is indexable if and only if it carries verified local data
 * for that specific job". If that rule ever silently returns true for a metro
 * with no researched data, the thin pages go back into the index without
 * anyone noticing — the failure is invisible in the UI and only shows up as
 * ranking damage weeks later. So it gets a test.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { isCityGuideIndexable, getLocalDetail } from "../src/lib/local-indexability.ts";
import { LOCAL_DETAIL } from "../src/content/local-detail.generated.ts";
import { METRO_PRIMARY_GUIDE } from "../src/content/metro-primary-guide.generated.ts";

const GUIDES = [
  "electrician-service-call",
  "garbage-disposal-replacement",
  "plumber-service-call",
  "smoke-detector-replacement",
  "water-heater-replacement",
];

test("a metro with no researched data is never indexable", () => {
  // A slug that cannot be in the registry.
  for (const guide of GUIDES) {
    assert.equal(isCityGuideIndexable("not-a-real-metro-zz", guide), false);
  }
});

test("a guide with no verified byGuide fact is never indexable", () => {
  // This is the property that stops one verified water-heater fee from
  // re-indexing all five of a city's pages.
  for (const [citySlug, detail] of Object.entries(LOCAL_DETAIL)) {
    for (const guide of GUIDES) {
      if (Object.prototype.hasOwnProperty.call(detail.byGuide, guide)) continue;
      assert.equal(
        isCityGuideIndexable(citySlug, guide),
        false,
        `${citySlug} / ${guide} is indexable without a byGuide entry`
      );
    }
  }
});

test("exactly one page per researched city is indexable", () => {
  // Guide pages for the same city share the whole local block and measured
  // 72-76% identical, so only the city's primary guide is submitted. A city
  // with verified data must keep exactly one page: zero would silently drop
  // its research from the index, two would bring the duplication back.
  for (const [citySlug, detail] of Object.entries(LOCAL_DETAIL)) {
    const verified = GUIDES.filter((g) =>
      Object.prototype.hasOwnProperty.call(detail.byGuide, g)
    );
    const indexable = GUIDES.filter((g) => isCityGuideIndexable(citySlug, g));
    assert.equal(
      indexable.length,
      verified.length > 0 ? 1 : 0,
      `${citySlug} has ${indexable.length} indexable pages`
    );
    if (indexable.length === 1) {
      assert.equal(indexable[0], METRO_PRIMARY_GUIDE[citySlug]);
    }
  }
});

test("the primary-guide map names only researched cities and verified guides", () => {
  for (const [citySlug, guide] of Object.entries(METRO_PRIMARY_GUIDE)) {
    const detail = getLocalDetail(citySlug);
    assert.ok(detail, `${citySlug} is in the primary map but has no local detail`);
    assert.ok(
      Object.prototype.hasOwnProperty.call(detail.byGuide, guide),
      `${citySlug} primary guide ${guide} has no verified fact`
    );
  }
});

test("every indexable page actually carries a sourced requirement", () => {
  // The page renders detail.byGuide[guide].requirement and sourceUrl. An
  // indexable page with either missing would be an empty block on a page we
  // just told Google to crawl.
  for (const [citySlug, detail] of Object.entries(LOCAL_DETAIL)) {
    for (const guide of GUIDES) {
      if (!isCityGuideIndexable(citySlug, guide)) continue;
      const fact = detail.byGuide[guide];
      assert.ok(
        typeof fact.requirement === "string" && fact.requirement.trim().length > 10,
        `${citySlug} / ${guide} is indexable with no requirement sentence`
      );
      assert.match(
        fact.sourceUrl,
        /^https:\/\//,
        `${citySlug} / ${guide} is indexable with no https source`
      );
    }
  }
});

test("no published fee is missing a currency figure", () => {
  // "Varies" is not a fee. Prose belongs in requirement; the fee row is for
  // figures copied from a published schedule.
  for (const [citySlug, detail] of Object.entries(LOCAL_DETAIL)) {
    for (const [guide, fact] of Object.entries(detail.byGuide)) {
      if (fact.fee === undefined) continue;
      assert.match(
        fact.fee,
        /\$\s?\d/,
        `${citySlug} / ${guide} has a fee string with no dollar figure: ${fact.fee}`
      );
    }
  }
});

test("every researched metro carries an authority and a check date", () => {
  for (const [citySlug, detail] of Object.entries(LOCAL_DETAIL)) {
    assert.ok(detail.authority?.name, `${citySlug} has no authority name`);
    assert.match(detail.authority.url, /^https:\/\//, `${citySlug} authority url`);
    assert.match(detail.verifiedOn, /^\d{4}-\d{2}-\d{2}$/, `${citySlug} verifiedOn`);
  }
});

test("getLocalDetail and the registry agree", () => {
  for (const citySlug of Object.keys(LOCAL_DETAIL)) {
    assert.equal(getLocalDetail(citySlug), LOCAL_DETAIL[citySlug]);
  }
  assert.equal(getLocalDetail("not-a-real-metro-zz"), undefined);
});
