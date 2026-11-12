import "./bohrscience.css";
import { DownloadProvider } from "./DownloadContext";
import { DownloadSection } from "./DownloadSection";
import { EnvironmentSection } from "./EnvironmentSection";
import { ExpertShowcase } from "./ExpertShowcase";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { PageShell } from "./PageShell";
import { ResearchFeatures } from "./ResearchFeatures";

export function BohrSciencePage() {
  return (
    <PageShell>
      <DownloadProvider>
        <div className="bs-page" id="scroll-container">
          <Header />
          <main>
            <Hero />
            <ResearchFeatures />
            <ExpertShowcase />
            <EnvironmentSection />
            <DownloadSection />
          </main>
          <Footer />
        </div>
      </DownloadProvider>
    </PageShell>
  );
}
