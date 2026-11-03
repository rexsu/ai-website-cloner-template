import type { Metadata } from "next";
import { StorePage } from "@/components/sites/qizai/store-page";

export const metadata: Metadata = { title: "选购" };

export default function Page() {
  return <StorePage />;
}
