import Image from "next/image";

import { AutoPlayVideo } from "./AutoPlayVideo";
import { bohriumAssets, externalLinks } from "./assets";
import { ExpertsSection } from "./ExpertsSection";
import { FeaturePointIcon } from "./FeaturePointIcon";
import { FooterContact } from "./FooterContact";
import { PlatformCards } from "./PlatformCards";
import "./bohrscience.css";

function FeaturePoints({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <FeaturePointIcon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function BohrSciencePage() {
  return (
    <div className="bs-page">
      <header className="bs-header">
        <div className="bs-header-brand">
          <Image
            className="bs-header-logo"
            src={bohriumAssets.mark}
            alt=""
            aria-hidden="true"
            width={28}
            height={28}
            unoptimized
            priority
          />
          <Image
            className="bs-wordmark-bohr"
            src={bohriumAssets.wordmarkBohr}
            alt=""
            width={42}
            height={19}
            unoptimized
            priority
          />
          <Image
            className="bs-wordmark-space"
            src={bohriumAssets.wordmarkSpace}
            alt=""
            width={77}
            height={19}
            unoptimized
            priority
          />
          <span className="bs-header-beta">Beta</span>
        </div>
        <div className="bs-header-actions">
          <a
            className="bs-header-experience"
            href={externalLinks.experience}
            rel="noopener noreferrer"
            target="_blank"
          >
            去体验
          </a>
          <a className="bs-header-download" href="#downloads">
            立即下载
          </a>
        </div>
      </header>

      <main>
        <section
          className="bs-hero"
          style={{
            ["--hero-background-image" as string]: `url("${bohriumAssets.heroBackground}")`,
          }}
        >
          <div className="bs-hero-intro">
            <div className="bs-hero-copy">
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
              <aside className="bs-hero-benefits" aria-label="客户端福利">
                <Image
                  src={bohriumAssets.photon}
                  alt=""
                  width={26}
                  height={26}
                  unoptimized
                />
                <p>
                  <span>
                    新用户注册送<strong>30天Plus</strong>体验会员
                  </span>
                  <span className="bs-hero-benefits-divider">,</span>
                  <wbr />
                  <span>
                    首次登录客户端再领<strong>10,000光子</strong>
                  </span>
                </p>
              </aside>
              <div className="bs-mobile-download-note" role="status">
                请在web端下载
              </div>
              <div className="bs-hero-downloads" aria-label="下载玻尔·科学空间">
                <div className="bs-hero-mac-download">
                  <button type="button" className="bs-hero-download-button">
                    <Image
                      src={bohriumAssets.apple}
                      alt=""
                      width={20}
                      height={24}
                      unoptimized
                    />
                    下载 macOS 版
                  </button>
                  <div className="bs-hero-mac-options">
                    <button type="button">Apple 芯片</button>
                    <button type="button">Intel 处理器</button>
                  </div>
                </div>
                <button
                  type="button"
                  className="bs-hero-download-button"
                  aria-label="下载 Windows 版"
                >
                  <Image
                    src={bohriumAssets.windows}
                    alt=""
                    width={25}
                    height={25}
                    unoptimized
                  />
                  下载 Windows 版
                </button>
              </div>
            </div>
          </div>

          <div className="bs-demo-media bs-demo-media-large">
            <AutoPlayVideo
              className="bs-hero-video"
              label="SciMaster 执行科学调研任务的产品界面"
              src={bohriumAssets.videos.hero}
              controls
              preload="metadata"
            />
          </div>
        </section>

        <section className="bs-research-section">
          <div className="bs-section-heading">
            <h2>
              从一个科研问题开始，
              <br />
              把调研、验证和成果整理连起来
            </h2>
            <p>你不必再在文献、数据、软件和计算环境之间反复切换。</p>
          </div>

          <div className="bs-research-features">
            <section className="bs-feature">
              <div className="bs-feature-copy">
                <p className="bs-feature-index">
                  <span>1.</span>调研与假设
                </p>
                <h2>
                  先看清问题，
                  <br />
                  再决定研究什么
                </h2>
                <p className="bs-feature-description">
                  提出研究问题，SciMaster
                  会检索文献与专利，帮你找出共识、争议和空白，并给出可以继续验证的假设。
                </p>
                <FeaturePoints
                  items={[
                    "关键证据带有来源",
                    "结论按共识、争议和空白整理",
                    "可以把研究假设继续转成实验方案",
                  ]}
                />
              </div>
              <figure className="bs-feature-media">
                <figcaption className="bs-feature-media-caption">
                  SciMaster · 结构化调研结果
                </figcaption>
                <div className="bs-demo-media bs-feature-video">
                  <AutoPlayVideo
                    className="bs-hero-video"
                    label="SciMaster · 结构化调研结果内容演示"
                    src={bohriumAssets.videos.research}
                  />
                </div>
              </figure>
            </section>

            <section className="bs-feature bs-feature-reversed">
              <div className="bs-feature-copy">
                <p className="bs-feature-index">
                  <span>2.</span>科研执行
                </p>
                <h2>把想法交给 AI 跑起来</h2>
                <p className="bs-feature-description">
                  确定方向后，AI
                  科学家会准备数据和环境，运行分析或计算。你可以随时查看进度、检查结果并调整下一步。
                </p>
                <FeaturePoints
                  items={[
                    "少花时间配置环境和参数",
                    "过程和结果都可以查看",
                    "可以根据结果继续追问和调整",
                  ]}
                />
              </div>
              <figure className="bs-feature-media">
                <figcaption className="bs-feature-media-caption">
                  BioMaster · 单细胞 RNA velocity 分析
                </figcaption>
                <div className="bs-demo-media bs-feature-video">
                  <AutoPlayVideo
                    className="bs-hero-video"
                    label="BioMaster · 单细胞 RNA velocity 分析内容演示"
                    src={bohriumAssets.videos.execution}
                  />
                </div>
              </figure>
            </section>

            <section className="bs-feature">
              <div className="bs-feature-copy">
                <p className="bs-feature-index">
                  <span>3.</span>成果与审查
                </p>
                <h2>
                  把结果整理成
                  <br />
                  可以继续使用的成果
                </h2>
                <p className="bs-feature-description">
                  AI 会把数据和分析结果整理为报告、图表或
                  LaTeX，并检查引用、数据和结论是否一致。
                </p>
                <FeaturePoints
                  items={[
                    "输出内容可以继续编辑",
                    "证据、图表与结论可以核对",
                    "发现问题可以继续补充和修改",
                  ]}
                />
              </div>
              <figure className="bs-feature-media">
                <figcaption className="bs-feature-media-caption">
                  SciMaster · 研究写作 · 引用与数据审查
                </figcaption>
                <div className="bs-demo-media bs-feature-video">
                  <AutoPlayVideo
                    className="bs-hero-video"
                    label="SciMaster · 研究写作 · 引用与数据审查内容演示"
                    src={bohriumAssets.videos.results}
                  />
                </div>
              </figure>
            </section>
          </div>
        </section>

        <ExpertsSection />

        <section className="bs-environment-section">
          <div className="bs-section-heading">
            <h2>为什么能把科研任务真正做下去</h2>
            <p>
              文献、数据、模型、软件与算力已经准备好。SciMaster
              可以按你的目标调用它们，并把过程和结果留给你检查。
            </p>
          </div>
          <Image
            className="bs-environment-image"
            src={bohriumAssets.environment}
            alt="科研工作流：输入研究问题，AI 科学家拆解、执行、检查并输出可检查结果，同时调用科学知识与数据、模型软件工具、计算环境与算力"
            width={4800}
            height={2568}
            unoptimized
          />
        </section>

        <section id="downloads" className="bs-download-section">
          <h2>从一个真实科研问题开始</h2>
          <PlatformCards />
        </section>
      </main>

      <footer className="bs-footer">
        <div className="bs-footer-inner">
          <div className="bs-footer-top">
            <div className="bs-footer-about">
              <h2 className="bs-footer-about-title">关于玻尔</h2>
              <div className="bs-footer-about-body">
                <p>
                  玻尔（Bohrium）是专为全球科研人员打造的专业科研平台。基于真实权威文献和可追溯引用，玻尔致力于构建面向
                  AI
                  时代的全新科研工作流，让知识的获取、理解、产出与沉淀变得更高效、更可信。
                </p>
                <p>
                  我们相信，AI
                  时代的科研不应该只是回答问题，而是能真正参与科研任务，我们希望，玻尔能够助力千千万万的科研人员更快走完从知识获取到学术产出的关键路径。
                </p>
              </div>
            </div>

            <nav className="bs-footer-nav" aria-label="页脚导航">
              <div>
                <h3 className="bs-footer-col-title">携手科研</h3>
                <ul className="bs-footer-col-list">
                  <li>
                    <a
                      className="bs-footer-col-link"
                      href={externalLinks.edu}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      EDU科研加速计划
                    </a>
                  </li>
                  <li>
                    <button type="button" className="bs-footer-popover-trigger">
                      合作咨询
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="bs-footer-col-title">法律与合规</h3>
                <ul className="bs-footer-col-list">
                  <li>
                    <a
                      className="bs-footer-col-link"
                      href={externalLinks.privacy}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      隐私政策
                    </a>
                  </li>
                  <li>
                    <a
                      className="bs-footer-col-link"
                      href={externalLinks.terms}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      服务协议
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="bs-footer-col-title">帮助与支持</h3>
                <ul className="bs-footer-col-list">
                  <li>
                    <a
                      className="bs-footer-col-link"
                      href={externalLinks.help}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      帮助中心
                    </a>
                  </li>
                  <li>
                    <a
                      className="bs-footer-col-link"
                      href={externalLinks.changelog}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      更新日志
                    </a>
                  </li>
                  <li>
                    <a
                      className="bs-footer-col-link"
                      href={externalLinks.community}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      用户共建
                    </a>
                  </li>
                  <FooterContact />
                </ul>
              </div>
            </nav>
          </div>

          <div className="bs-footer-rule" />

          <div className="bs-footer-legal">
            <p className="bs-footer-legal-copy">
              版权所有© 2022–2030 北京深势科技股份有限公司
            </p>
            <a
              className="bs-footer-legal-link"
              href={externalLinks.beian1}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bs-footer-beian-icon">
                <Image
                  src={bohriumAssets.beian}
                  alt=""
                  width={11}
                  height={12}
                  unoptimized
                />
              </span>
              京公网安备11010802045318号
            </a>
            <a
              className="bs-footer-legal-link"
              href={externalLinks.beian2}
              target="_blank"
              rel="noopener noreferrer"
            >
              京公网安备11010802045239号
            </a>
            <a
              className="bs-footer-legal-link"
              href={externalLinks.icp}
              target="_blank"
              rel="noopener noreferrer"
            >
              京ICP备20010051号–16
            </a>
            <a
              className="bs-footer-legal-link"
              href={externalLinks.icp}
              target="_blank"
              rel="noopener noreferrer"
            >
              京ICP备20010051号–14
            </a>
            <a
              className="bs-footer-legal-link"
              href={externalLinks.icp}
              target="_blank"
              rel="noopener noreferrer"
            >
              京ICP备20010051号–7
            </a>
            <a
              className="bs-footer-legal-link"
              href={externalLinks.icp}
              target="_blank"
              rel="noopener noreferrer"
            >
              津ICP备2023003620号–2
            </a>
            <a
              className="bs-footer-legal-link"
              href={externalLinks.icp}
              target="_blank"
              rel="noopener noreferrer"
            >
              京ICP备20010051号–15
            </a>
            <a
              className="bs-footer-legal-link"
              href={externalLinks.icp}
              target="_blank"
              rel="noopener noreferrer"
            >
              津ICP备2023003620号–1
            </a>
            <a
              className="bs-footer-legal-link"
              href={externalLinks.telecomLicense}
              target="_blank"
              rel="noopener noreferrer"
            >
              增值电信业务经营许可证合字B2–20210408
            </a>
            <a
              className="bs-footer-legal-link"
              href={externalLinks.cac}
              target="_blank"
              rel="noopener noreferrer"
            >
              网信算备110108025106801240015号
            </a>
            <a
              className="bs-footer-legal-link"
              href={bohriumAssets.businessLicense}
              target="_blank"
              rel="noopener noreferrer"
            >
              营业执照
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
