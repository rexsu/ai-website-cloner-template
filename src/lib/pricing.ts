export const RING_ONE_TIME = {
  sku: "qizai-ring",
  name: "七仔戒指",
  amountYuan: 1299,
  currency: "CNY",
  label: "¥1299",
  mode: "one_time" as const,
  modeLabel: "一次性购买",
  note: "不含订阅。会员是否另收费待确认。",
} as const;

export const ALIPAY_ENV = {
  appId: process.env.ALIPAY_APP_ID ?? "",
  privateKey: process.env.ALIPAY_PRIVATE_KEY ?? "",
  alipayPublicKey: process.env.ALIPAY_PUBLIC_KEY ?? "",
  notifyUrl: process.env.ALIPAY_NOTIFY_URL ?? "",
  returnUrl: process.env.ALIPAY_RETURN_URL ?? "https://chanring.com/checkout?paid=1",
  gateway:
    process.env.ALIPAY_GATEWAY ??
    "https://openapi.alipay.com/gateway.do",
  qrImagePath:
    process.env.ALIPAY_QR_IMAGE_PATH ?? "/sites/qizai/payment/alipay-qr.png",
} as const;

export function alipayConfigured() {
  return Boolean(ALIPAY_ENV.appId && ALIPAY_ENV.privateKey && ALIPAY_ENV.alipayPublicKey);
}
