import type { Metadata } from "next";
import { ProductPage } from "@/components/sites/qizai/product-page";

export const metadata: Metadata = {
  title: "七仔戒指",
  description: "七仔使用的友宏医疗 JCRing X3：钛合金，血氧与脉率注册，睡眠和情绪记录为非医疗功能。",
};

export default function Page() {
  return <ProductPage />;
}
