import type { Metadata } from "next";
import { DownloadSection } from "@/components/sites/bohrscience/download-section";
import { DownloadProvider } from "@/components/sites/bohrscience/downloads";
import { EnvironmentSection } from "@/components/sites/bohrscience/environment-section";
import { ExpertsSection } from "@/components/sites/bohrscience/experts-section";
import { Footer } from "@/components/sites/bohrscience/footer";
import { Header } from "@/components/sites/bohrscience/header";
import { Hero } from "@/components/sites/bohrscience/hero";
import { ResearchSection } from "@/components/sites/bohrscience/research-section";
import { bs } from "@/components/sites/bohrscience/styles";

export const metadata: Metadata = {
  title: "玻尔·科学空间",
  description:
    "在一个桌面空间里，与 AI 科学家一起完成调研、分析、计算和成果整理。你负责提出问题、判断方向，AI 负责把任务跑起来。",
};

export default function BohrSciencePage() {
  return (
    <DownloadProvider>
      <div className="h-dvh overflow-hidden bg-white">
        <main className={bs("page")}>
          <Header />
          <Hero />
          <ResearchSection />
          <ExpertsSection />
          <EnvironmentSection />
          <DownloadSection />
          <Footer />
        </main>
      </div>
    </DownloadProvider>
  );
}
