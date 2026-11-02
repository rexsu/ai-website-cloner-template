import type { Metadata } from "next";
import { MembershipPage } from "@/components/sites/qizai/story-pages";

export const metadata: Metadata = { title: "七仔同行" };

export default function Page() {
  return <MembershipPage />;
}
