import { ALIPAY_ENV, RING_ONE_TIME, alipayConfigured } from "./pricing";

export type CreateOrderInput = {
  subject?: string;
  outTradeNo?: string;
};

export type CreateOrderResult =
  | {
      ok: true;
      mode: "sdk";
      outTradeNo: string;
      amountYuan: number;
      /** Page-pay form HTML or order string once keys are configured. */
      payload: string;
      message: string;
    }
  | {
      ok: true;
      mode: "qr_fallback";
      outTradeNo: string;
      amountYuan: number;
      qrImagePath: string;
      message: string;
    }
  | { ok: false; error: string };

function makeTradeNo() {
  const stamp = new Date()
    .toISOString()
    .replace(/[-:TZ.]/g, "")
    .slice(0, 14);
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `QZ${stamp}${rand}`;
}

/**
 * Scaffold for Alipay open-platform page/QR pay.
 * Without keys, returns the merchant 收款码 fallback so checkout stays usable.
 */
export async function createOneTimeOrder(
  input: CreateOrderInput = {},
): Promise<CreateOrderResult> {
  const outTradeNo = input.outTradeNo ?? makeTradeNo();
  const amountYuan = RING_ONE_TIME.amountYuan;

  if (!alipayConfigured()) {
    return {
      ok: true,
      mode: "qr_fallback",
      outTradeNo,
      amountYuan,
      qrImagePath: ALIPAY_ENV.qrImagePath,
      message: "",
    };
  }

  // Keys present: still scaffolded — wire alipay-sdk / openapi signing here.
  // Do not invent signatures or secrets.
  return {
    ok: true,
    mode: "sdk",
    outTradeNo,
    amountYuan,
    payload: "",
    message:
      "已检测到 ALIPAY_* 环境变量。请接入 alipay-sdk 生成 page.pay / 预创建订单二维码（待确认具体产品码）。",
  };
}

export function describeNotifyStub() {
  return {
    configured: alipayConfigured(),
    expect: [
      "out_trade_no",
      "trade_no",
      "trade_status",
      "total_amount",
      "sign",
      "sign_type",
    ],
    note: "验签与幂等落库尚未实现；配置密钥后再补。",
  };
}
