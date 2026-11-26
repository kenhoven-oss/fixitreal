/**
 * Unit tests for the regional hreflang clusters.
 *
 *   npm run test:unit
 *
 * Why this is worth testing: an hreflang cluster is only valid if every
 * member names every member and exactly one x-default exists across the set.
 * Get either wrong and the declaration is worse than none — Google sees rival
 * x-default claims for the same question and picks a page on its own. That is
 * what happened to the plumber-rate pair: the Canadian page absorbed roughly
 * 200 generic US queries at positions in the 30s-60s with no clicks, while the
 * US page surfaced for one query in 28 days. The failure is invisible in the
 * UI and only shows up as lost traffic, so the invariants get a test.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { HREFLANG_CLUSTERS, clusterForPath } from "../src/content/hreflang-clusters.ts";

test("every cluster has at least two members", () => {
  for (const c of HREFLANG_CLUSTERS) {
    assert.ok(
      Object.keys(c.alternates).length >= 2,
      `a one-member cluster is just a page; drop it instead: ${JSON.stringify(c.alternates)}`,
    );
  }
});

test("every cluster's xDefault names one of its own members", () => {
  for (const c of HREFLANG_CLUSTERS) {
    assert.ok(
      c.xDefault in c.alternates,
      `xDefault "${c.xDefault}" is not a member of ${JSON.stringify(Object.keys(c.alternates))}`,
    );
  }
});

test("paths are site-relative and carry no trailing slash", () => {
  for (const c of HREFLANG_CLUSTERS) {
    for (const [code, p] of Object.entries(c.alternates)) {
      assert.ok(p.startsWith("/"), `${code} path must start with "/": ${p}`);
      assert.ok(!/\/$/.test(p), `${code} path must not end with "/": ${p}`);
    }
  }
});

test("no path belongs to two clusters", () => {
  const seen = new Set<string>();
  for (const c of HREFLANG_CLUSTERS) {
    for (const p of Object.values(c.alternates)) {
      assert.ok(!seen.has(p), `${p} appears in more than one cluster`);
      seen.add(p);
    }
  }
});

test("clusterForPath finds every member of every cluster", () => {
  for (const c of HREFLANG_CLUSTERS) {
    for (const p of Object.values(c.alternates)) {
      assert.deepEqual(clusterForPath(p), c, `clusterForPath missed ${p}`);
      assert.deepEqual(clusterForPath(`${p}/`), c, `clusterForPath missed trailing-slash ${p}/`);
    }
  }
});

test("clusterForPath returns undefined for a standalone page", () => {
  assert.equal(clusterForPath("/costs/water-heater-replacement"), undefined);
  assert.equal(clusterForPath("/"), undefined);
});

test("the plumber pair is clustered with the US page as x-default", () => {
  const us = clusterForPath("/costs/plumber-hourly");
  const ca = clusterForPath("/costs/plumber-hourly-rate-canada");
  assert.ok(us, "the US plumber page must be in a cluster");
  assert.deepEqual(us, ca, "both plumber pages must be in the SAME cluster");
  // Generic, unqualified plumber-rate queries are predominantly US, so the
  // US page is the one that should answer searchers outside both regions.
  assert.equal(us!.alternates[us!.xDefault], "/costs/plumber-hourly");
});
