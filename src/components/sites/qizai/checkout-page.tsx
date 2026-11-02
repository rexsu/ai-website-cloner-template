"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PageShell } from "./site-chrome";

type CreateResponse = {
  product: {
    name: string;
    amountYuan: number;
    label: string;
    modeLabel: string;
    note: string;
  };
  mode: "sdk" | "qr_fallback";
  outTradeNo: string;
  amountYuan: number;
  qrImagePath?: string;
  message: string;
};

export function CheckoutPage() {
  const params = useSearchParams();
  const paid = params.get("paid") === "1";
  const [data, setData] = useState<CreateResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/alipay/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ subject: "七仔戒指 · 一次性" }),
        });
        const json = (await res.json()) as CreateResponse & { error?: string };
        if (!res.ok || (json as { ok?: boolean }).ok === false) {
          throw new Error(json.error ?? "创建订单失败");
        }
        if (!cancelled) setData(json);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : "网络错误");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <p className="text-[12px] tracking-[0.18em] text-[#6a6560]">结账</p>
        <h1 className="qz-serif mt-3 text-5xl leading-tight">¥1299 · 一次性购买</h1>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#4e4944]">
          七仔戒指按一次性付清。不含订阅。会员是否另收费待确认。退换政策待确认。
        </p>

        {paid ? (
          <div className="mt-8 rounded-[24px] bg-[#e8f5e9] p-5 text-[#1b5e20]">
            已从支付宝返回本页。订单是否到账仍以商户后台为准（异步通知验签待接入）。
          </div>
        ) : null}

        <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[28px] bg-white p-6">
            <h2 className="qz-serif text-3xl">订单</h2>
            <dl className="mt-5 space-y-3 text-[15px]">
              <div className="flex justify-between gap-4">
                <dt className="text-[#6a6560]">商品</dt>
                <dd>七仔戒指</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#6a6560]">支付方式</dt>
                <dd>支付宝 · 一次性</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#6a6560]">金额</dt>
                <dd className="qz-serif text-2xl">¥1299</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[#6a6560]">单号</dt>
                <dd className="font-mono text-xs">{data?.outTradeNo ?? (loading ? "生成中…" : "—")}</dd>
              </div>
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-[#6a6560]">
              {data?.product.note ?? "不含订阅。会员是否另收费待确认。"}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/store/rings/qizai-ring" className="qz-btn qz-btn-dark inline-flex">
                返回产品页
              </Link>
              <Link href="/contact?topic=pay" className="qz-btn qz-btn-blue inline-flex">
                付款后联系我们
              </Link>
            </div>
          </section>

          <section className="rounded-[28px] bg-[#1677ff]/08 p-6 text-center">
            <h2 className="qz-serif text-3xl text-[#1677ff]">支付宝收款</h2>
            {loading ? <p className="mt-8 text-sm text-[#6a6560]">正在准备支付…</p> : null}
            {error ? <p className="mt-8 text-sm text-red-700">{error}</p> : null}
            {data ? (
              <>
                <img
                  src={data.qrImagePath ?? "/sites/qizai/payment/alipay-qr.png"}
                  alt="支付宝收款码"
                  className="mx-auto mt-6 w-full max-w-[280px] rounded-2xl bg-white p-3 shadow-sm"
                />
                <p className="mt-4 text-sm leading-relaxed text-[#2c2a26]">
                  请用支付宝扫码支付 <strong>¥1299</strong>。备注可填本页单号。
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#6a6560]">{data.message}</p>
                <p className="mt-4 text-xs text-[#6a6560]">
                  替换真实收款码：把图片放到{" "}
                  <code className="rounded bg-white px-1">public/sites/qizai/payment/alipay-qr.png</code>
                </p>
              </>
            ) : null}
          </section>
        </div>
      </div>
    </PageShell>
  );
}
