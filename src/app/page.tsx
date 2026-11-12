import type { Metadata } from "next";
import { BohrSciencePage } from "@/components/sites/bohrscience/bohr-science-page";

export const metadata: Metadata = {
  title: "玻尔·科学空间",
  description:
    "在一个桌面空间里，与 AI 科学家一起完成调研、分析、计算和成果整理。你负责提出问题、判断方向，AI 负责把任务跑起来。",
  icons: {
    icon: "/sites/bohrscience/favicon.png",
    apple: "/sites/bohrscience/favicon.png",
  },
};

export default function Page() {
  return <BohrSciencePage />;
}
