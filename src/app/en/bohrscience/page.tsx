import type { Metadata } from "next";
import { BohrSciencePage } from "@/components/sites/bohrium-bohrscience/BohrSciencePage";

export const metadata: Metadata = {
  title: "玻尔·科学空间",
  description:
    "在一个桌面空间里，与 AI 科学家一起完成调研、分析、计算和成果整理。你负责提出问题、判断方向，AI 负责把任务跑起来。",
  authors: [{ name: "Bohrium" }],
  keywords: [
    "Bohrium",
    "AI for Science",
    "academic search",
    "research hub",
    "AI research tools",
    "scientific collaboration",
    "reproducible research",
  ],
  openGraph: {
    title: "玻尔·科学空间",
    description:
      "在一个桌面空间里，与 AI 科学家一起完成调研、分析、计算和成果整理。你负责提出问题、判断方向，AI 负责把任务跑起来。",
    siteName: "Bohrium",
    type: "website",
    images: ["/sites/bohrium-bohrscience/images/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Bohrium_AI4S",
    creator: "@Bohrium_AI4S",
    title: "Bohrium | AI for Science with Global Scientists",
    description:
      "AI-powered research hub offering academic search, comprehensive resources, and collaborative tools for scientists worldwide.",
    images: ["/sites/bohrium-bohrscience/images/og.png"],
  },
  icons: {
    icon: "/sites/bohrium-bohrscience/images/favicon.png",
    apple: "/sites/bohrium-bohrscience/images/favicon.png",
  },
};

export default function Page() {
  return <BohrSciencePage />;
}
