import { NextResponse } from "next/server";
import { describeNotifyStub } from "@/lib/alipay";

export const runtime = "nodejs";

/**
 * Alipay async notify placeholder.
 * Always acknowledge with success text once verified — verification TBD.
 */
export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  const entries: Record<string, string> = {};
  if (form) {
    form.forEach((value, key) => {
      if (typeof value === "string") entries[key] = value;
    });
  }

  console.info("[alipay/notify] stub received", {
    keys: Object.keys(entries),
    out_trade_no: entries.out_trade_no,
    trade_status: entries.trade_status,
    meta: describeNotifyStub(),
  });

  // Alipay expects plain "success" after verified handling.
  // Until验签 is implemented, still return success to avoid retries during UI demo —
  // DO NOT treat this as paid in production without验签.
  return new NextResponse("success", {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

export async function GET() {
  return NextResponse.json({
    status: "ready",
    ...describeNotifyStub(),
  });
}
