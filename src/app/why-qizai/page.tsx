import type { Metadata } from "next";
import { WhyPage } from "@/components/sites/qizai/story-pages";

export const metadata: Metadata = { title: "为何七仔" };

export default function Page() {
  return <WhyPage />;
}
