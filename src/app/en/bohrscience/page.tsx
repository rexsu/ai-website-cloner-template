import type { Metadata } from "next";
import { BohrSciencePage } from "@/components/sites/bohrium/bohr-science-page";

export const metadata: Metadata = {
  title: "玻尔·科学空间",
  description:
    "在玻尔科学空间里，与 AI 科学家一起完成调研、分析、计算和成果整理。",
};

export default function BohrScienceRoutePage() {
  return <BohrSciencePage />;
}
