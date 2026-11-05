import { adsConfig, adsTxtPublisherId } from "@/lib/ads";

/**
 * /ads.txt — IAB Authorized Digital Sellers declaration.
 *
 * Google asks AdSense publishers to serve this at the site root so buyers
 * can confirm FixItReal authorises Google to sell its inventory. The line
 * format comes from Google's own instructions
 * (https://support.google.com/adsense/answer/12171612):
 *
 *   google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0
 *
 * where the last field is Google's fixed TAG certification-authority ID and
 * the pub- value is the account's real publisher ID. Nothing here is made
 * up: without NEXT_PUBLIC_ADSENSE_PUBLISHER_ID the route answers 404, which
 * is exactly what a site with no authorised sellers should serve.
 *
 * The repo had no public/ads.txt before this route, so nothing is being
 * replaced. If the site ever adds another ad partner, append its line here
 * from that partner's own instructions.
 */
export const dynamic = "force-static";

export function GET() {
  if (!adsConfig.publisherId) {
    return new Response("Not found", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
  const body = `google.com, ${adsTxtPublisherId(adsConfig.publisherId)}, DIRECT, f08c47fec0942fa0\n`;
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
