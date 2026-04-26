import { NextResponse } from "next/server";
// Assuming CDSRegistry is or could be imported from cds-data.ts, but we simulate it here.
import { CDSRegistry } from "@/lib/cds-data";

export const revalidate = 3600;

export async function GET() {
  return NextResponse.json(CDSRegistry, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
