/**
 * Networx configuration guard-rails. The invariant that matters most: with
 * no environment variables, nothing Networx-related is on and the
 * quote-request page does not exist in production.
 *
 *   npm run test:unit
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import {
  buildNetworxConfig,
  networxEmbedSrc,
  quotePageVisible,
  TCPA_PARTNERS_URL,
} from "../src/lib/networx.ts";

const AFF = "471684d6c43cfc529b30d600113dae63";

test("no configuration -> everything off", () => {
  const c = buildNetworxConfig({});
  assert.equal(c.affId, null);
  assert.equal(c.formId, null);
  assert.equal(c.trackingUrl, null);
  assert.equal(c.formEnabled, false);
  assert.equal(c.linksEnabled, false);
  assert.equal(c.enabled, false);
  assert.equal(networxEmbedSrc(c), null);
});

test("affiliate ID alone or form ID alone does not enable the form", () => {
  assert.equal(buildNetworxConfig({ NEXT_PUBLIC_NETWORX_AFF_ID: AFF }).formEnabled, false);
  assert.equal(buildNetworxConfig({ NEXT_PUBLIC_NETWORX_FORM_ID: "2215" }).formEnabled, false);
});

test("malformed IDs are rejected", () => {
  for (const bad of ["abc", "YOUR_AFF_ID", AFF.slice(0, 31), `${AFF}0`, "zz1684d6c43cfc529b30d600113dae63"]) {
    const c = buildNetworxConfig({ NEXT_PUBLIC_NETWORX_AFF_ID: bad, NEXT_PUBLIC_NETWORX_FORM_ID: "2215" });
    assert.equal(c.affId, null, bad);
    assert.equal(c.formEnabled, false, bad);
  }
  for (const bad of ["form-2215", "2215a", "", "12345678901"]) {
    const c = buildNetworxConfig({ NEXT_PUBLIC_NETWORX_AFF_ID: AFF, NEXT_PUBLIC_NETWORX_FORM_ID: bad });
    assert.equal(c.formId, null, bad);
    assert.equal(c.formEnabled, false, bad);
  }
});

test("well-formed IDs enable the form and build Networx's exact embed URL", () => {
  const c = buildNetworxConfig({ NEXT_PUBLIC_NETWORX_AFF_ID: AFF.toUpperCase(), NEXT_PUBLIC_NETWORX_FORM_ID: " 2215 " });
  assert.equal(c.formEnabled, true);
  assert.equal(c.enabled, true);
  assert.equal(networxEmbedSrc(c), `https://api.networx.com/iframe.php?aff_id=${AFF}&aff_to_form_id=2215`);
  // A per-placement form ID overrides the default; a malformed one falls back.
  assert.equal(networxEmbedSrc(c, "3001"), `https://api.networx.com/iframe.php?aff_id=${AFF}&aff_to_form_id=3001`);
  assert.equal(networxEmbedSrc(c, "nope"), `https://api.networx.com/iframe.php?aff_id=${AFF}&aff_to_form_id=2215`);
});

test("tracking URL must be https on networx.com", () => {
  assert.equal(buildNetworxConfig({ NEXT_PUBLIC_NETWORX_URL: "http://www.networx.com/x" }).trackingUrl, null);
  assert.equal(buildNetworxConfig({ NEXT_PUBLIC_NETWORX_URL: "https://evil.example/networx.com" }).trackingUrl, null);
  assert.equal(buildNetworxConfig({ NEXT_PUBLIC_NETWORX_URL: "not a url" }).trackingUrl, null);
  const ok = buildNetworxConfig({ NEXT_PUBLIC_NETWORX_URL: "https://www.networx.com/go?aff=1" });
  assert.equal(ok.trackingUrl, "https://www.networx.com/go?aff=1");
  assert.equal(ok.linksEnabled, true);
  assert.equal(ok.formEnabled, false);
  assert.equal(ok.enabled, true);
});

test("quote page: hidden in production until configured, visible on preview", () => {
  const off = buildNetworxConfig({});
  const on = buildNetworxConfig({ NEXT_PUBLIC_NETWORX_AFF_ID: AFF, NEXT_PUBLIC_NETWORX_FORM_ID: "2215" });
  assert.equal(quotePageVisible(off, "production"), false);
  assert.equal(quotePageVisible(on, "production"), true);
  assert.equal(quotePageVisible(off, "preview"), true);
  assert.equal(quotePageVisible(off, undefined), true);
});

test("TCPA partner link is the URL Networx specified", () => {
  assert.equal(TCPA_PARTNERS_URL, "https://www.networx.com/third-party-contractors");
});
