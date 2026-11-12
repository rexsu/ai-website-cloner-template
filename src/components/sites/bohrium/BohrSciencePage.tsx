import type { CSSProperties } from "react";
import "./bohrscience.css";
import { ASSET } from "./content";
import { DownloadSection } from "./DownloadSection";
import { EnvironmentSection } from "./EnvironmentSection";
import { ExpertShowcase } from "./ExpertShowcase";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ResearchFeatures } from "./ResearchFeatures";

export function BohrSciencePage() {
  const pageStyle = {
    "--hero-background-image": `url(${ASSET.heroBg})`,
  } as CSSProperties;

  return (
    <main className="bohr-page" style={pageStyle}>
      <Header />
      <Hero />
      <ResearchFeatures />
      <ExpertShowcase />
      <EnvironmentSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}
