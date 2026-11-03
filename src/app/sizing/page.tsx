import type { Metadata } from "next";
import { SizingPage } from "@/components/sites/qizai/simple-pages";

export const metadata: Metadata = { title: "尺寸" };

export default function Page() {
  return <SizingPage />;
}
