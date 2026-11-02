import type { Metadata } from "next";
import { HowPage } from "@/components/sites/qizai/story-pages";

export const metadata: Metadata = { title: "如何工作" };

export default function Page() {
  return <HowPage />;
}
