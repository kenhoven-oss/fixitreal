import { NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { InspectionChecklistPdf } from "@/components/downloads/InspectionChecklistPdf";

export const dynamic = "force-static";
export const revalidate = 604800; // 1 week

export async function GET() {
  const buffer = await renderToBuffer(InspectionChecklistPdf());

  return new NextResponse(buffer as unknown as BodyInit, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'inline; filename="FixItReal-Home-Inspection-Repair-Negotiation-Checklist.pdf"',
      "Cache-Control": "public, max-age=604800, immutable",
    },
  });
}
