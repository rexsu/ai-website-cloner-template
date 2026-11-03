import type { Metadata } from "next";
import { HealthPage } from "@/components/sites/qizai/story-pages";

export const metadata: Metadata = { title: "身心观察" };

export default function Page() {
  return <HealthPage />;
}
