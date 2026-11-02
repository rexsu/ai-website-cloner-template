import type { Metadata } from "next";
import { ProductPage } from "@/components/sites/qizai/product-page";

export const metadata: Metadata = {
  title: "七仔戒指",
  description: "融进日常的智能戒指。外观可看，价格、材质与续航待确认。",
};

export default function Page() {
  return <ProductPage />;
}
