import { NextResponse, type NextRequest } from "next/server";

const PROD_HOSTS = new Set(["www.fixitreal.com", "fixitreal.com"]);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const response = NextResponse.next();

  if (!PROD_HOSTS.has(host.toLowerCase())) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/|_vercel|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|avif|txt|xml)$).*)"],
};
