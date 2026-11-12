"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ASSETS } from "./assets";
import "./bohrscience.css";
import { DownloadProvider, useDownloads } from "./download-context";
import { FeaturePointIcon } from "./feature-point-icon";

const EXPERTS = [
  {
    id: "bio",
    name: "BioMaster",
    field: "生物医学研究",
    title: "论文分析复现",
    description:
      "获取数据、运行作者代码并核对结果，也支持单细胞分析和基因变异解读。",
    icon: ASSETS.expertBio,
    video: ASSETS.videos.bio,
    iconExpert: "bio" as const,
  },
  {
    id: "pharm",
    name: "PharmMaster",
    field: "药物研发",
    title: "ITK 靶点抑制剂研发",
    description: "从靶点调研和专利分析，到候选分子设计、活性与成药性评估。",
    icon: ASSETS.expertPharm,
    video: ASSETS.videos.pharm,
    iconExpert: "mat" as const,
  },
  {
    id: "mat",
    name: "MatMaster",
    field: "材料与化学",
    title: "高温介电薄膜设计",
    description:
      "根据性能和材料约束，完成候选设计与计算模拟，找到值得优先验证的方向。",
    icon: ASSETS.expertMat,
    video: ASSETS.videos.mat,
    iconExpert: "pharm" as const,
  },
] as const;

const FEATURES = [
  {
    index: "1",
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
    video: ASSETS.videos.feature1,
    reversed: false,
  },
  {
    index: "2",
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
    video: ASSETS.videos.feature2,
    reversed: true,
  },
  {
    index: "3",
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
    video: ASSETS.videos.feature3,
    reversed: false,
  },
];

const LEGAL_LINKS = [
  {
    text: "京公网安备11010802045318号",
    href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802045318",
  },
  {
    text: "京公网安备11010802045239号",
    href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802045239",
  },
  {
    text: "京ICP备20010051号–16",
    href: "https://beian.miit.gov.cn/#/",
  },
  {
    text: "京ICP备20010051号–14",
    href: "https://beian.miit.gov.cn/#/",
  },
  {
    text: "京ICP备20010051号–7",
    href: "https://beian.miit.gov.cn/#/",
  },
  {
    text: "津ICP备2023003620号–2",
    href: "https://beian.miit.gov.cn/#/",
  },
  {
    text: "京ICP备20010051号–15",
    href: "https://beian.miit.gov.cn/#/",
  },
  {
    text: "津ICP备2023003620号–1",
    href: "https://beian.miit.gov.cn/#/",
  },
  {
    text: "增值电信业务经营许可证合字B2–20210408",
    href: "https://cdn1.deepmd.net/static/img/0da917f3ICP:EDI-20260304.pdf",
  },
  {
    text: "网信算备110108025106801240015号",
    href: "https://beian.cac.gov.cn/",
  },
  {
    text: "营业执照",
    href: "https://cdn1.deepmd.net/static/img/7c7a1d752026.jpeg",
  },
] as const;

function AutoVideo({
  src,
  className,
  label,
  active = true,
}: {
  src: string;
  className?: string;
  label: string;
  active?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (active) {
      void el.play().catch(() => undefined);
    } else {
      el.pause();
    }
  }, [active, src]);

  return (
    <video
      ref={ref}
      className={className}
      aria-label={label}
      loop
      muted
      playsInline
      preload={active ? "auto" : "metadata"}
      src={src}
    />
  );
}

function Header() {
  return (
    <header className="bs-header">
      <div className="bs-header-brand" aria-label="玻尔科学空间">
        <Image
          className="bs-header-logo"
          src={ASSETS.mark}
          alt=""
          width={28}
          height={28}
          aria-hidden
          priority
        />
        <Image
          className="bs-wordmark-bohr"
          src={ASSETS.wordmarkBohr}
          alt=""
          width={42}
          height={19}
          aria-hidden
          priority
        />
        <Image
          className="bs-wordmark-space"
          src={ASSETS.wordmarkSpace}
          alt=""
          width={77}
          height={19}
          aria-hidden
          priority
        />
        <span className="bs-header-beta">Beta</span>
      </div>
      <div className="bs-header-actions">
        <a
          className="bs-header-experience"
          href="https://www.bohrium.com/"
          rel="noopener noreferrer"
        >
          去体验
        </a>
        <a className="bs-header-download" href="#downloads">
          立即下载
        </a>
      </div>
    </header>
  );
}

function HeroDownloads() {
  const { downloads, triggerDownload, titleFor } = useDownloads();
  const macUpcoming = "macOS 敬请期待";
  const winUpcoming = "Windows 敬请期待";

  return (
    <div className="bs-hero-downloads">
      <div className="bs-hero-mac-download">
        <button
          type="button"
          className="bs-hero-download-button"
          aria-label="下载 macOS 版"
          disabled={
            downloads.apple.status !== "available" &&
            downloads.intel.status !== "available"
          }
          title={
            downloads.apple.status === "available" ||
            downloads.intel.status === "available"
              ? undefined
              : titleFor(downloads.apple, macUpcoming)
          }
        >
          <Image src={ASSETS.apple} alt="" width={20} height={24} aria-hidden />
          下载 macOS 版
        </button>
        <div className="bs-hero-mac-options">
          {(
            [
              { type: "apple", label: "Apple 芯片" },
              { type: "intel", label: "Intel 处理器" },
            ] as const
          ).map((option) => {
            const slot = downloads[option.type];
            return (
              <button
                key={option.type}
                type="button"
                aria-label={`下载适用于 ${option.label.replace(" ", "")} 的玻尔·科学空间客户端`}
                disabled={slot.status !== "available"}
                title={titleFor(slot, macUpcoming)}
                onClick={() => triggerDownload(option.type)}
              >
                <Image
                  src={ASSETS.download}
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden
                />
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
      <button
        type="button"
        className="bs-hero-download-button"
        aria-label="下载 Windows 版"
        disabled={downloads.windows.status !== "available"}
        title={titleFor(downloads.windows, winUpcoming)}
        onClick={() => triggerDownload("windows")}
      >
        <Image
          src={ASSETS.windows}
          alt=""
          width={25}
          height={25}
          aria-hidden
        />
        下载 Windows 版
      </button>
    </div>
  );
}

function Hero() {
  return (
    <section className="bs-hero">
      <div className="bs-hero-intro">
        <div className="bs-hero-copy">
          <h1 aria-label="接管体力活 启发科学家">
            <span aria-hidden="true">接管体力活</span>
            <span aria-hidden="true">启发科学家</span>
          </h1>
          <p>
            在玻尔科学空间里，与 AI 科学家一起完成调研、分析、计算和成果整理。你负责提出问题、判断方向，
            <br />
            AI 负责把任务跑起来。
          </p>
          <div className="bs-hero-benefits">
            <Image
              src={ASSETS.photon}
              alt=""
              width={26}
              height={26}
              aria-hidden
            />
            <p>
              <span>
                新用户注册送<strong>30天Plus</strong>体验会员
              </span>
              <span className="bs-hero-benefits-divider">,</span>
              <span>
                首次登录客户端再领<strong>10,000光子</strong>
              </span>
            </p>
          </div>
          <p className="bs-mobile-download-note">请在web端下载</p>
          <HeroDownloads />
        </div>
      </div>
      <div className="bs-demo-media bs-demo-media-large">
        <AutoVideo
          className="bs-hero-video"
          src={ASSETS.videos.hero}
          label="SciMaster 执行科学调研任务的产品界面"
        />
      </div>
    </section>
  );
}

function ResearchSection() {
  return (
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
            key={feature.index}
            className={
              feature.reversed ? "bs-feature bs-feature-reversed" : "bs-feature"
            }
          >
            <div className="bs-feature-copy">
              <p className="bs-feature-index">
                <span>{feature.index}.</span>
                {feature.label}
              </p>
              <h2>{feature.title}</h2>
              <p className="bs-feature-description">{feature.description}</p>
              <ul>
                {feature.points.map((point) => (
                  <li key={point}>
                    <FeaturePointIcon />
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
                <AutoVideo
                  className="bs-hero-video"
                  src={feature.video}
                  label={`${feature.caption}内容演示`}
                />
              </div>
            </figure>
          </section>
        ))}
      </div>
    </section>
  );
}

function ExpertsSection() {
  const [active, setActive] = useState<(typeof EXPERTS)[number]["id"]>("bio");
  const current = EXPERTS.find((item) => item.id === active) ?? EXPERTS[0];

  return (
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
          <div className="bs-expert-tabs" role="tablist" aria-label="选择领域">
            {EXPERTS.map((expert) => (
              <button
                key={expert.id}
                type="button"
                role="tab"
                aria-label={`${expert.name} · ${expert.field}`}
                aria-selected={active === expert.id}
                className="bs-expert-tab"
                onClick={() => setActive(expert.id)}
              >
                <span
                  className="bs-expert-icon"
                  data-expert={expert.iconExpert}
                  aria-hidden
                >
                  <span style={{ width: "100%", height: "100%" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={expert.icon}
                      alt=""
                      style={{ width: "100%", height: "100%", display: "block" }}
                    />
                  </span>
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
          aria-label={current.name}
        >
          <div className="bs-expert-content-heading">
            <strong>{current.title}</strong>
            <span>{current.description}</span>
          </div>
          <div className="bs-expert-panel">
            {EXPERTS.map((expert) => (
              <AutoVideo
                key={expert.id}
                className={
                  active === expert.id
                    ? "bs-hero-video bs-expert-video bs-expert-video-active"
                    : "bs-hero-video bs-expert-video"
                }
                src={expert.video}
                label={`${expert.name} 产品演示`}
                active={active === expert.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EnvironmentSection() {
  return (
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
        className="bs-environment-image"
        src={ASSETS.workflow}
        alt="科研工作流：输入研究问题，AI 科学家拆解、执行、检查并输出可检查结果，同时调用科学知识与数据、模型软件工具、计算环境与算力"
      />
    </section>
  );
}

function PlatformCards() {
  const { downloads, triggerDownload, titleFor } = useDownloads();

  return (
    <div className="bs-platform-cards" aria-label="选择操作系统下载">
      <div className="bs-platform-card" tabIndex={0}>
        <div className="bs-platform-card-face">
          <Image src={ASSETS.apple} alt="" width={64} height={64} aria-hidden />
          <strong>macOS</strong>
        </div>
        <div className="bs-platform-card-actions">
          {(
            [
              { type: "apple", label: "Apple 芯片" },
              { type: "intel", label: "Intel 处理器" },
            ] as const
          ).map((option) => {
            const slot = downloads[option.type];
            return (
              <button
                key={option.type}
                type="button"
                disabled={slot.status !== "available"}
                title={titleFor(slot, "macOS 敬请期待")}
                aria-label={`下载玻尔·科学空间 ${option.label}`}
                onClick={() => triggerDownload(option.type)}
              >
                <Image
                  src={ASSETS.download}
                  alt=""
                  width={16}
                  height={16}
                  aria-hidden
                />
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="bs-platform-card" tabIndex={0}>
        <div className="bs-platform-card-face">
          <Image
            src={ASSETS.windows}
            alt=""
            width={64}
            height={64}
            aria-hidden
          />
          <strong>Windows</strong>
        </div>
        <div className="bs-platform-card-actions">
          <button
            type="button"
            disabled={downloads.windows.status !== "available"}
            title={titleFor(downloads.windows, "Windows 敬请期待")}
            aria-label="下载玻尔·科学空间 Windows 客户端"
            onClick={() => triggerDownload("windows")}
          >
            <Image
              src={ASSETS.download}
              alt=""
              width={16}
              height={16}
              aria-hidden
            />
            Windows 版
          </button>
        </div>
      </div>
    </div>
  );
}

function DownloadSection() {
  return (
    <section className="bs-download-section" id="downloads">
      <h2>从一个真实科研问题开始</h2>
      <PlatformCards />
    </section>
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

  return (
    <li style={{ position: "relative" }}>
      <button
        type="button"
        className="bs-footer-popover-trigger"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        onBlur={(event) => {
          if (!event.currentTarget.parentElement?.contains(event.relatedTarget as Node)) {
            setOpen(false);
          }
        }}
      >
        {label}
      </button>
      {open ? children : null}
    </li>
  );
}

function Footer() {
  const [copied, setCopied] = useState(false);

  return (
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
                <FooterPopover label="合作咨询">
                  <div className="bs-footer-popover-content">
                    <p className="bs-footer-popover-title">合作咨询</p>
                    <p className="bs-footer-popover-description">
                      商务合作请联系
                    </p>
                    <p className="bs-footer-contact-email">business@bohrium.com</p>
                  </div>
                </FooterPopover>
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
                <FooterPopover label="联系我们">
                  <div className="bs-footer-popover-content bs-footer-contact-popover-content">
                    <div className="bs-footer-contact-section">
                      <p className="bs-footer-contact-email-title">联系我们</p>
                      <p className="bs-footer-contact-description">
                        如有问题，请发送邮件至
                      </p>
                      <div className="bs-footer-contact-email">
                        <span>support@bohrium.com</span>
                        <button
                          type="button"
                          className="bs-footer-copy-button"
                          onMouseDown={(event) => event.preventDefault()}
                          onClick={async () => {
                            try {
                              await navigator.clipboard.writeText(
                                "support@bohrium.com",
                              );
                              setCopied(true);
                              window.setTimeout(() => setCopied(false), 1500);
                            } catch {
                              setCopied(false);
                            }
                          }}
                        >
                          {copied ? "已复制" : "复制"}
                        </button>
                      </div>
                    </div>
                  </div>
                </FooterPopover>
              </ul>
            </div>
          </nav>
        </div>
        <div className="bs-footer-rule" />
        <div className="bs-footer-legal">
          <p className="bs-footer-legal-copy">
            版权所有© 2022–2030 北京深势科技股份有限公司
          </p>
          <div>
            {LEGAL_LINKS.map((link, index) => (
              <span key={link.text}>
                {index > 0 ? " " : null}
                {index < 2 ? (
                  <span className="bs-footer-beian-icon">
                    <Image
                      src={ASSETS.beian}
                      alt=""
                      width={11}
                      height={12}
                      aria-hidden
                    />
                  </span>
                ) : null}
                <a
                  className="bs-footer-legal-link"
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.text}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function BohrSciencePageInner() {
  return (
    <main className="bs-page">
      <Header />
      <Hero />
      <ResearchSection />
      <ExpertsSection />
      <EnvironmentSection />
      <DownloadSection />
      <Footer />
    </main>
  );
}

export function BohrSciencePage() {
  return (
    <DownloadProvider>
      <BohrSciencePageInner />
    </DownloadProvider>
  );
}
