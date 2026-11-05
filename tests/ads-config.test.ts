/**
 * Advertising configuration guard-rails. The one invariant that matters
 * most: with no environment variables, nothing ad-related is on.
 *
 *   npm run test:unit
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { buildAdsConfig, adsTxtPublisherId } from "../src/lib/ads.ts";

const VALID = "ca-pub-1234567890123456";

test("no configuration -> everything off", () => {
  const c = buildAdsConfig({});
  assert.equal(c.publisherId, null);
  assert.equal(c.adsEnabled, false);
  assert.equal(c.verification, "off");
  assert.equal(c.loadScriptSiteWide, false);
  assert.equal(c.renderMetaTag, false);
  assert.equal(c.scriptSrc, null);
  assert.equal(c.slots.inArticle, null);
});

test("ads flag alone cannot enable ads without a publisher ID", () => {
  const c = buildAdsConfig({ NEXT_PUBLIC_ADS_ENABLED: "true" });
  assert.equal(c.adsEnabled, false);
  assert.equal(c.renderMetaTag, false);
});

test("malformed publisher IDs are rejected", () => {
  for (const bad of ["pub-123", "ca-pub-123", "ca-pub-12345678901234567", "ca-pub-abcdefghijklmnop", "YOUR_ID"]) {
    const c = buildAdsConfig({ NEXT_PUBLIC_ADSENSE_PUBLISHER_ID: bad, NEXT_PUBLIC_ADS_ENABLED: "true" });
    assert.equal(c.publisherId, null, bad);
    assert.equal(c.adsEnabled, false, bad);
  }
});

test("verification is independent of advertising", () => {
  const meta = buildAdsConfig({
    NEXT_PUBLIC_ADSENSE_PUBLISHER_ID: VALID,
    NEXT_PUBLIC_ADSENSE_VERIFICATION: "meta",
  });
  assert.equal(meta.adsEnabled, false);
  assert.equal(meta.renderMetaTag, true);
  assert.equal(meta.loadScriptSiteWide, false);

  const script = buildAdsConfig({
    NEXT_PUBLIC_ADSENSE_PUBLISHER_ID: VALID,
    NEXT_PUBLIC_ADSENSE_VERIFICATION: "script",
  });
  assert.equal(script.adsEnabled, false);
  assert.equal(script.loadScriptSiteWide, true);
  assert.equal(script.renderMetaTag, false);
  assert.equal(
    script.scriptSrc,
    `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${VALID}`
  );
});

test("live ads: publisher ID + flag; site-wide script stays off", () => {
  const c = buildAdsConfig({
    NEXT_PUBLIC_ADSENSE_PUBLISHER_ID: VALID,
    NEXT_PUBLIC_ADS_ENABLED: "true",
    NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE: "1234567890",
  });
  assert.equal(c.adsEnabled, true);
  assert.equal(c.slots.inArticle, "1234567890");
  assert.equal(c.loadScriptSiteWide, false);
  assert.equal(c.renderMetaTag, true);
});

test("non-numeric slot IDs are ignored", () => {
  const c = buildAdsConfig({
    NEXT_PUBLIC_ADSENSE_PUBLISHER_ID: VALID,
    NEXT_PUBLIC_ADS_ENABLED: "true",
    NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE: "slot-abc",
  });
  assert.equal(c.slots.inArticle, null);
});

test("ads.txt uses the pub- form of the ID", () => {
  assert.equal(adsTxtPublisherId(VALID), "pub-1234567890123456");
});
