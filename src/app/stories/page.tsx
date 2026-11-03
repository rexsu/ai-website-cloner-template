import type { Metadata } from "next";
import { StoriesIndex } from "@/components/sites/qizai/simple-pages";

export const metadata: Metadata = { title: "手记" };

export default function Page() {
  return <StoriesIndex />;
}
