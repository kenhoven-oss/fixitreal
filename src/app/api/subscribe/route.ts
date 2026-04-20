import { NextResponse } from "next/server";

const BEEHIIV_PUB_ID = "pub_d06fee77-da53-4ed1-8c3d-f2339e9e8e80";

export async function POST(req: Request) {
  const apiKey = process.env.BEEHIIV_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  let email: string, firstName: string;
  try {
    ({ email, firstName } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!email || !firstName) {
    return NextResponse.json({ error: "email and firstName are required" }, { status: 400 });
  }

  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUB_ID}/subscriptions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        first_name: firstName,
        utm_source: "fixitreal.com",
        utm_medium: "organic",
        referring_site: "https://www.fixitreal.com/home-repair-cost-calendar",
        send_welcome_email: false,
      }),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    console.error("Beehiiv API error", res.status, text);
    return NextResponse.json({ error: "Subscription failed" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
