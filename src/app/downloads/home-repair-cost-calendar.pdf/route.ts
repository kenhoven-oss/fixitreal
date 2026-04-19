import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { CalendarPdf } from "@/components/calendar/CalendarPdf";

export const dynamic = "force-static";
export const revalidate = 604800; // 1 week

export async function GET() {
  const buffer = await renderToBuffer(CalendarPdf());

  return new NextResponse(buffer as unknown as BodyInit, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'inline; filename="FixItReal-Home-Repair-Cost-Calendar-2026.pdf"',
      "Cache-Control": "public, max-age=604800, immutable",
    },
  });
}
