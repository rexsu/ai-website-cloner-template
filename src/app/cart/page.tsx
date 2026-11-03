import type { Metadata } from "next";
import { CartPage } from "@/components/sites/qizai/simple-pages";

export const metadata: Metadata = { title: "购物袋" };

export default function Page() {
  return <CartPage />;
}
