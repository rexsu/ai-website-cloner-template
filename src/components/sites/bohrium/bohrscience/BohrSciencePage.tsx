import { DemoVideo } from "./DemoVideo";
import { HeroDownloads, PlatformCards } from "./DownloadButtons";
import { ExpertShowcase } from "./ExpertShowcase";
import { FeatureSections } from "./FeatureSection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ASSET, VIDEO } from "./data";
import "./bohrscience.css";

export function BohrSciencePage() {
  return (
    <div className="bohrscience page">
      <Header />
      <section className="hero">
        <div className="hero-intro">
          <div className="hero-copy">
            <h1 aria-label="接管体力活 启发科学家">
              <span aria-hidden="true">接管体力活</span>
              <span aria-hidden="true">启发科学家</span>
            </h1>
            <p>
              在玻尔科学空间里，与 AI
              科学家一起完成调研、分析、计算和成果整理。你负责提出问题、判断方向，
              <br />
              AI 负责把任务跑起来。
            </p>
            <aside className="hero-benefits" aria-label="客户端福利">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ASSET.photon} alt="" width={26} height={26} />
              <p>
                <span>
                  新用户注册送<strong>30天Plus</strong>体验会员
                </span>
                <span className="hero-benefits-divider">,</span>
                <wbr />
                <span>
                  首次登录客户端再领<strong>10,000光子</strong>
                </span>
              </p>
            </aside>
            <HeroDownloads />
          </div>
        </div>
        <div className="demo-media demo-media-large">
          <DemoVideo
            src={VIDEO.hero}
            label="执行科学调研任务的产品界面"
            poster="/sites/bohrium/bohrscience/images/hero-video-poster.jpg"
          />
        </div>
      </section>

      <section className="research-section">
        <div className="section-heading">
          <h2>
            从一个科研问题开始，
            <br />
            把调研、验证和成果整理连起来
          </h2>
          <p>你不必再在文献、数据、软件和计算环境之间反复切换。</p>
        </div>
        <div className="research-features">
          <FeatureSections />
        </div>
      </section>

      <section className="experts-section">
        <div className="section-heading">
          <h2>按研究任务，选择合适的 AI 学科专家</h2>
          <p>
            SciMaster
            先理解你的目标。需要专业分析时，再由对应领域的 Master 接手执行。
          </p>
        </div>
        <ExpertShowcase />
      </section>

      <section className="environment-section">
        <div className="section-heading">
          <h2>为什么能把科研任务真正做下去</h2>
          <p>
            文献、数据、模型、软件与算力已经准备好。SciMaster
            可以按你的目标调用它们，并把过程和结果留给你检查。
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="environment-image"
          src={ASSET.workflow}
          alt="科研工作流：输入研究问题，AI 科学家拆解、执行、检查并输出可检查结果，同时调用科学知识与数据、模型软件工具、计算环境与算力"
          width={1200}
          height={695}
        />
      </section>

      <section id="downloads" className="download-section">
        <h2>从一个真实科研问题开始</h2>
        <PlatformCards />
      </section>

      <Footer />
    </div>
  );
}
