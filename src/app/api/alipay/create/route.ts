import { NextResponse } from "next/server";
import { createOneTimeOrder } from "@/lib/alipay";
import { RING_ONE_TIME } from "@/lib/pricing";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: { subject?: string; outTradeNo?: string } = {};
  try {
    body = (await request.json()) as typeof body;
  } catch {
    body = {};
  }

  const result = await createOneTimeOrder({
    subject: body.subject ?? RING_ONE_TIME.name,
    outTradeNo: body.outTradeNo,
  });

  if (!result.ok) {
    return NextResponse.json(result, { status: 500 });
  }

  return NextResponse.json({
    product: RING_ONE_TIME,
    ...result,
  });
}

export async function GET() {
  return NextResponse.json({
    product: RING_ONE_TIME,
    hint: "POST 创建一次性订单；无密钥时返回收款码路径。",
  });
}
