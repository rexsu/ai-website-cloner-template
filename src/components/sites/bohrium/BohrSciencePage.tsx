"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ASSET, DOWNLOAD_URLS, SUPPORT_EMAIL } from "./assets";
import "./bohrscience.css";

type ExpertId = "bio" | "pharm" | "mat";

type Expert = {
  id: ExpertId;
  /** Matches source CSS data-expert attribute quirks */
  iconKey: "bio" | "mat" | "pharm";
  name: string;
  field: string;
  title: string;
  description: string;
  videoSrc: string;
  iconSrc: string;
};

const EXPERTS: Expert[] = [
  {
    id: "bio",
    iconKey: "bio",
    name: "BioMaster",
    field: "生物医学研究",
    title: "论文分析复现",
    description:
      "获取数据、运行作者代码并核对结果，也支持单细胞分析和基因变异解读。",
    videoSrc: ASSET.videoBio,
    iconSrc: "/sites/bohrium/icons/expert-bio.svg",
  },
  {
    id: "pharm",
    iconKey: "mat",
    name: "PharmMaster",
    field: "药物研发",
    title: "ITK 靶点抑制剂研发",
    description: "从靶点调研和专利分析，到候选分子设计、活性与成药性评估。",
    videoSrc: ASSET.videoPharm,
    iconSrc: "/sites/bohrium/icons/expert-pharm.svg",
  },
  {
    id: "mat",
    iconKey: "pharm",
    name: "MatMaster",
    field: "材料与化学",
    title: "高温介电薄膜设计",
    description:
      "根据性能和材料约束，完成候选设计与计算模拟，找到值得优先验证的方向。",
    videoSrc: ASSET.videoMat,
    iconSrc: "/sites/bohrium/icons/expert-mat.svg",
  },
];

const FEATURES = [
  {
    index: "1.",
    label: "调研与假设",
    title: (
      <>
        先看清问题，
        <br />
        再决定研究什么
      </>
    ),
    description:
      "提出研究问题，SciMaster 会检索文献与专利，帮你找出共识、争议和空白，并给出可以继续验证的假设。",
    points: [
      "关键证据带有来源",
      "结论按共识、争议和空白整理",
      "可以把研究假设继续转成实验方案",
    ],
    caption: "SciMaster · 结构化调研结果",
    videoSrc: ASSET.videoFeature1,
    videoLabel: "SciMaster · 结构化调研结果内容演示",
    reversed: false,
  },
  {
    index: "2.",
    label: "科研执行",
    title: <>把想法交给 AI 跑起来</>,
    description:
      "确定方向后，AI 科学家会准备数据和环境，运行分析或计算。你可以随时查看进度、检查结果并调整下一步。",
    points: [
      "少花时间配置环境和参数",
      "过程和结果都可以查看",
      "可以根据结果继续追问和调整",
    ],
    caption: "BioMaster · 单细胞 RNA velocity 分析",
    videoSrc: ASSET.videoFeature2,
    videoLabel: "BioMaster · 单细胞 RNA velocity 分析内容演示",
    reversed: true,
  },
  {
    index: "3.",
    label: "成果与审查",
    title: (
      <>
        把结果整理成
        <br />
        可以继续使用的成果
      </>
    ),
    description:
      "AI 会把数据和分析结果整理为报告、图表或 LaTeX，并检查引用、数据和结论是否一致。",
    points: [
      "输出内容可以继续编辑",
      "证据、图表与结论可以核对",
      "发现问题可以继续补充和修改",
    ],
    caption: "SciMaster · 研究写作 · 引用与数据审查",
    videoSrc: ASSET.videoFeature3,
    videoLabel: "SciMaster · 研究写作 · 引用与数据审查内容演示",
    reversed: false,
  },
] as const;

function PointIcon() {
  return (
    <svg className="bs-feature-point-icon" viewBox="0 0 16 16" aria-hidden="true">
      <path d="m5 3 5 5-5 5" />
    </svg>
  );
}

function AutoPlayVideo({
  src,
  className,
  label,
  controls = false,
  preload = "metadata",
}: {
  src: string;
  className?: string;
  label: string;
  controls?: boolean;
  preload?: "none" | "metadata" | "auto";
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const tryPlay = () => {
      void el.play().catch(() => {
        /* autoplay may be blocked until interaction */
      });
    };
    tryPlay();
    el.addEventListener("loadeddata", tryPlay);
    return () => el.removeEventListener("loadeddata", tryPlay);
  }, [src]);

  return (
    <video
      ref={ref}
      className={className}
      aria-label={label}
      autoPlay
      muted
      loop
      playsInline
      controls={controls}
      preload={preload}
      src={src}
    />
  );
}

function FooterPopover({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div
      className="bs-footer-popover"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="bs-footer-popover-trigger"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
      </button>
      {open ? (
        <div id={id} className="bs-footer-popover-panel" role="dialog">
          {children}
        </div>
      ) : null}
    </div>
  );
}

function startDownload(url: string) {
  const a = document.createElement("a");
  a.href = url;
  a.rel = "noopener noreferrer";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export function BohrSciencePage() {
  const [expertId, setExpertId] = useState<ExpertId>("bio");
  const activeExpert = EXPERTS.find((e) => e.id === expertId) ?? EXPERTS[0];

  useEffect(() => {
    const videos = document.querySelectorAll<HTMLVideoElement>(
      ".bs-feature-video video, .bs-expert-panel video",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            void video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.35 },
    );
    videos.forEach((v) => observer.observe(v));
    return () => observer.disconnect();
  }, [expertId]);

  return (
    <main className="bs-page">
      <header className="bs-header">
        <div className="bs-header-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            aria-hidden="true"
            width={28}
            height={28}
            className="bs-header-logo"
            src={ASSET.logoMark}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            width={42}
            height={19}
            className="bs-wordmark-bohr"
            src={ASSET.wordmarkBohr}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            width={77}
            height={19}
            className="bs-wordmark-space"
            src={ASSET.wordmarkSpace}
          />
          <span className="bs-header-beta">Beta</span>
        </div>
        <div className="bs-header-actions">
          <a
            className="bs-header-experience"
            href="https://www.bohrium.com/"
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

      <section
        className="bs-hero"
        style={{
          ["--hero-background-image" as string]: `url("${ASSET.heroBackground}")`,
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" width={26} height={26} src={ASSET.iconPhoton} />
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" width={20} height={24} src={ASSET.iconApple} />
                  下载 macOS 版
                </button>
                <div className="bs-hero-mac-options">
                  <button
                    type="button"
                    onClick={() => startDownload(DOWNLOAD_URLS.apple)}
                  >
                    Apple 芯片
                  </button>
                  <button
                    type="button"
                    onClick={() => startDownload(DOWNLOAD_URLS.intel)}
                  >
                    Intel 处理器
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="bs-hero-download-button"
                aria-label="下载 Windows 版"
                onClick={() => startDownload(DOWNLOAD_URLS.windows)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" width={25} height={25} src={ASSET.iconWindows} />
                下载 Windows 版
              </button>
            </div>
          </div>
        </div>
        <div className="bs-demo-media bs-demo-media-large">
          <AutoPlayVideo
            className="bs-hero-video"
            label="SciMaster 执行科学调研任务的产品界面"
            controls
            src={ASSET.videoHero}
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
          {FEATURES.map((feature) => (
            <section
              key={feature.label}
              className={
                feature.reversed ? "bs-feature bs-feature-reversed" : "bs-feature"
              }
            >
              <div className="bs-feature-copy">
                <p className="bs-feature-index">
                  <span>{feature.index}</span>
                  {feature.label}
                </p>
                <h2>{feature.title}</h2>
                <p className="bs-feature-description">{feature.description}</p>
                <ul>
                  {feature.points.map((point) => (
                    <li key={point}>
                      <PointIcon />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <figure className="bs-feature-media">
                <figcaption className="bs-feature-media-caption">
                  {feature.caption}
                </figcaption>
                <div className="bs-demo-media bs-feature-video">
                  <AutoPlayVideo
                    className="bs-hero-video"
                    label={feature.videoLabel}
                    src={feature.videoSrc}
                  />
                </div>
              </figure>
            </section>
          ))}
        </div>
      </section>

      <section className="bs-experts-section">
        <div className="bs-section-heading">
          <h2>按研究任务，选择合适的 AI 学科专家</h2>
          <p>
            SciMaster 先理解你的目标。需要专业分析时，再由对应领域的 Master
            接手执行。
          </p>
        </div>
        <div className="bs-expert-showcase">
          <div className="bs-expert-selector">
            <div
              className="bs-expert-tabs"
              role="tablist"
              aria-label="选择领域 AI 科学家"
            >
              {EXPERTS.map((expert) => (
                <button
                  key={expert.id}
                  type="button"
                  role="tab"
                  aria-label={`${expert.name} · ${expert.field}`}
                  aria-selected={expertId === expert.id}
                  className="bs-expert-tab"
                  onClick={() => setExpertId(expert.id)}
                >
                  <span
                    className="bs-expert-icon"
                    data-expert={expert.iconKey}
                    aria-hidden="true"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={expert.iconSrc} alt="" width={32} height={32} />
                  </span>
                  <span className="bs-expert-name">
                    <strong>{expert.name}</strong>
                    <small>{expert.field}</small>
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div
            className="bs-expert-content"
            role="tabpanel"
            aria-label={activeExpert.name}
          >
            <div className="bs-expert-content-heading">
              <strong>{activeExpert.title}</strong>
              <span>{activeExpert.description}</span>
            </div>
            <div className="bs-expert-panel">
              {EXPERTS.map((expert) => (
                <video
                  key={expert.id}
                  className={
                    expertId === expert.id
                      ? "bs-hero-video bs-expert-video bs-expert-video-active"
                      : "bs-hero-video bs-expert-video"
                  }
                  aria-label={`${expert.name} 产品演示`}
                  muted
                  loop
                  playsInline
                  preload={expertId === expert.id ? "auto" : "metadata"}
                  src={expert.videoSrc}
                  ref={(el) => {
                    if (!el) return;
                    if (expertId === expert.id) {
                      void el.play().catch(() => undefined);
                    } else {
                      el.pause();
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bs-environment-section">
        <div className="bs-section-heading">
          <h2>为什么能把科研任务真正做下去</h2>
          <p>
            文献、数据、模型、软件与算力已经准备好。SciMaster
            可以按你的目标调用它们，并把过程和结果留给你检查。
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="科研工作流：输入研究问题，AI 科学家拆解、执行、检查并输出可检查结果，同时调用科学知识与数据、模型软件工具、计算环境与算力"
          loading="lazy"
          width={4800}
          height={2780}
          className="bs-environment-image"
          src={ASSET.environmentWorkflow}
        />
      </section>

      <section id="downloads" className="bs-download-section">
        <h2>从一个真实科研问题开始</h2>
        <div className="bs-platform-cards" aria-label="选择操作系统下载">
          <div className="bs-platform-card" tabIndex={0}>
            <span className="bs-platform-card-face" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" width={44} height={52} src={ASSET.iconApple} />
              <strong>macOS</strong>
            </span>
            <div className="bs-platform-card-actions">
              <button
                type="button"
                aria-label="下载适用于 Apple芯片 的玻尔·科学空间客户端"
                onClick={() => startDownload(DOWNLOAD_URLS.apple)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" width={16} height={16} src={ASSET.iconDownload} />
                Apple 芯片
              </button>
              <button
                type="button"
                aria-label="下载适用于 Intel处理器 的玻尔·科学空间客户端"
                onClick={() => startDownload(DOWNLOAD_URLS.intel)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" width={16} height={16} src={ASSET.iconDownload} />
                Intel 处理器
              </button>
            </div>
          </div>
          <div className="bs-platform-card" tabIndex={0}>
            <span className="bs-platform-card-face" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" width={58} height={58} src={ASSET.iconWindows} />
              <strong>Windows</strong>
            </span>
            <div className="bs-platform-card-actions">
              <button
                type="button"
                aria-label="下载玻尔·科学空间 Windows 客户端"
                onClick={() => startDownload(DOWNLOAD_URLS.windows)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" width={16} height={16} src={ASSET.iconDownload} />
                Windows 版
              </button>
            </div>
          </div>
        </div>
      </section>

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
                      href="https://www.bohrium.com/edu-page"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      EDU科研加速计划
                    </a>
                  </li>
                  <li>
                    <FooterPopover label="合作咨询">
                      <div className="bs-footer-popover-content">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className="bs-footer-popover-qr"
                          src={ASSET.inquiryQr}
                          alt="合作咨询二维码"
                          width={128}
                          height={128}
                        />
                        <div>
                          <p className="bs-footer-popover-title">微信扫描</p>
                          <p className="bs-footer-popover-description">
                            使用微信移动端扫码联系我们
                          </p>
                        </div>
                      </div>
                    </FooterPopover>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="bs-footer-col-title">法律与合规</h3>
                <ul className="bs-footer-col-list">
                  <li>
                    <a
                      className="bs-footer-col-link"
                      href="https://platform.bohrium.com/agreement?lang=zh-cn&agreementType=2&business=Bohrium"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      隐私政策
                    </a>
                  </li>
                  <li>
                    <a
                      className="bs-footer-col-link"
                      href="https://platform.bohrium.com/agreement?lang=zh-cn&agreementType=1&business=Bohrium"
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
                      href="https://bohrium-doc.dp.tech/docs/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      帮助中心
                    </a>
                  </li>
                  <li>
                    <a
                      className="bs-footer-col-link"
                      href="https://dptechnology.feishu.cn/wiki/O1hNwyGv0iNYW6kpF75cpqcjn0c"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      更新日志
                    </a>
                  </li>
                  <li>
                    <a
                      className="bs-footer-col-link"
                      href="https://dptechnology.feishu.cn/wiki/NGvbwSVLCiR1WHkSRK7cShJanYd?fromScene=spaceOverview"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      用户共建
                    </a>
                  </li>
                  <li>
                    <FooterPopover label="联系我们">
                      <div className="bs-footer-popover-content bs-footer-contact-popover-content">
                        <span className="bs-footer-contact-qr-wrap">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            className="bs-footer-popover-qr"
                            src={ASSET.contactQr}
                            alt="微信客服二维码"
                            width={128}
                            height={128}
                          />
                        </span>
                        <div>
                          <div className="bs-footer-contact-section">
                            <p className="bs-footer-popover-title">微信客服</p>
                            <p className="bs-footer-contact-description">
                              使用微信移动端扫码咨询
                            </p>
                          </div>
                          <div>
                            <p className="bs-footer-popover-title bs-footer-contact-email-title">
                              邮箱
                            </p>
                            <div className="bs-footer-contact-email">
                              <span>{SUPPORT_EMAIL}</span>
                              <button
                                type="button"
                                className="bs-footer-copy-button"
                                aria-label="复制联系邮箱"
                                onClick={() =>
                                  void navigator.clipboard.writeText(
                                    SUPPORT_EMAIL,
                                  )
                                }
                              >
                                <svg
                                  viewBox="0 0 14 14"
                                  width="14"
                                  height="14"
                                  aria-hidden="true"
                                >
                                  <rect
                                    x="4"
                                    y="4"
                                    width="8"
                                    height="8"
                                    rx="1.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                  />
                                  <path
                                    d="M2 9.5V2.8A.8.8 0 0 1 2.8 2H9.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.2"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </FooterPopover>
                  </li>
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
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802045318"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bs-footer-beian-icon">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" width={11} height={12} src={ASSET.iconBeian} />
              </span>
              京公网安备11010802045318号
            </a>
            <a
              className="bs-footer-legal-link"
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802045239"
              target="_blank"
              rel="noopener noreferrer"
            >
              京公网安备11010802045239号
            </a>
            <a
              className="bs-footer-legal-link"
              href="https://beian.miit.gov.cn/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              京ICP备20010051号–16
            </a>
            <a
              className="bs-footer-legal-link"
              href="https://beian.miit.gov.cn/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              京ICP备20010051号–14
            </a>
            <a
              className="bs-footer-legal-link"
              href="https://beian.miit.gov.cn/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              京ICP备20010051号–7
            </a>
            <a
              className="bs-footer-legal-link"
              href="https://beian.miit.gov.cn/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              津ICP备2023003620号–2
            </a>
            <a
              className="bs-footer-legal-link"
              href="https://beian.miit.gov.cn/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              京ICP备20010051号–15
            </a>
            <a
              className="bs-footer-legal-link"
              href="https://beian.miit.gov.cn/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              津ICP备2023003620号–1
            </a>
            <a
              className="bs-footer-legal-link"
              href="https://cdn1.deepmd.net/static/img/0da917f3ICP:EDI-20260304.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              增值电信业务经营许可证合字B2–20210408
            </a>
            <a
              className="bs-footer-legal-link"
              href="https://beian.cac.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              网信算备110108025106801240015号
            </a>
            <a
              className="bs-footer-legal-link"
              href="https://cdn1.deepmd.net/static/img/7c7a1d752026.jpeg"
              target="_blank"
              rel="noopener noreferrer"
            >
              营业执照
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
