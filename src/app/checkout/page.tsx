import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckoutPage } from "@/components/sites/qizai/checkout-page";

export const metadata: Metadata = {
  title: "结账 · ¥1299 一次性",
  description: "七仔戒指支付宝一次性支付或商户收款码。",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="px-5 py-20 text-center">加载结账页…</div>}>
      <CheckoutPage />
    </Suspense>
  );
}
