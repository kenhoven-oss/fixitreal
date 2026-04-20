import { NextResponse } from "next/server";

const BEEHIIV_PUB_ID = "pub_d06fee77-da53-4ed1-8c3d-f2339e9e8e80";
const MIN_FORM_MS = 2000;

export async function POST(req: Request) {
  const apiKey = process.env.BEEHIIV_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  let email: string, firstName: string, website: string | undefined, elapsedMs: number | undefined;
  try {
    ({ email, firstName, website, elapsedMs } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Bot checks — honeypot must be empty and form must have been on screen for a human amount of time.
  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ success: true });
  }
  if (typeof elapsedMs !== "number" || elapsedMs < MIN_FORM_MS) {
    return NextResponse.json({ success: true });
  }

  if (!email || !firstName) {
    return NextResponse.json({ error: "email and firstName are required" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }
  if (firstName.length < 2 || firstName.length > 60) {
    return NextResponse.json({ error: "invalid first name" }, { status: 400 });
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
        send_welcome_email: true,
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
