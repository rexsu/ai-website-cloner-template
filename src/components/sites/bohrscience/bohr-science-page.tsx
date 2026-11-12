/* eslint-disable @next/next/no-img-element -- native img keeps source crop, filters, and em sizing */
"use client";

import { useEffect, useId, useRef, useState } from "react";
import "./bohrscience.css";

const HERO_VIDEO =
  "https://cdn.bohrium.com/bohrium/web/static/media/Scimaster0819.mp4";

const DOWNLOADS = {
  macArm:
    "https://cdn.dp.tech/scix/desktop/prod/darwin_aarch64/0.10.20/%E7%8E%BB%E5%B0%94%C2%B7%E7%A7%91%E5%AD%A6%E7%A9%BA%E9%97%B4_0.10.20_aarch64.dmg",
  macIntel:
    "https://cdn.bohrium.com/scix/desktop/prod/darwin_x86_64/0.10.20/%E7%8E%BB%E5%B0%94%C2%B7%E7%A7%91%E5%AD%A6%E7%A9%BA%E9%97%B4_0.10.20_x86_64.dmg",
  windows:
    "https://cdn.dp.tech/scix/desktop/prod/windows_x86_64/0.10.20/%E7%8E%BB%E5%B0%94%C2%B7%E7%A7%91%E5%AD%A6%E7%A9%BA%E9%97%B4_0.10.20_x64-setup.exe",
} as const;

const features = [
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
    video: "/sites/bohrscience/bohr001.mp4",
    reversed: false,
  },
  {
    index: "2.",
    label: "科研执行",
    title: "把想法交给 AI 跑起来",
    description:
      "确定方向后，AI 科学家会准备数据和环境，运行分析或计算。你可以随时查看进度、检查结果并调整下一步。",
    points: [
      "少花时间配置环境和参数",
      "过程和结果都可以查看",
      "可以根据结果继续追问和调整",
    ],
    caption: "BioMaster · 单细胞 RNA velocity 分析",
    video: "/sites/bohrscience/bohr002.mp4",
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
    video: "/sites/bohrscience/bohr003.mp4",
    reversed: false,
  },
] as const;

const experts = [
  {
    id: "bio",
    name: "BioMaster",
    field: "生物医学研究",
    dataExpert: "bio",
    icon: "/sites/bohrscience/icon-bio.svg",
    title: "论文分析复现",
    description:
      "获取数据、运行作者代码并核对结果，也支持单细胞分析和基因变异解读。",
    video: "/sites/bohrscience/bohr004.mp4",
  },
  {
    id: "pharm",
    name: "PharmMaster",
    field: "药物研发",
    dataExpert: "mat",
    icon: "/sites/bohrscience/icon-pharm.svg",
    title: "ITK 靶点抑制剂研发",
    description: "从靶点调研和专利分析，到候选分子设计、活性与成药性评估。",
    video: "/sites/bohrscience/bohr005.mp4",
  },
  {
    id: "mat",
    name: "MatMaster",
    field: "材料与化学",
    dataExpert: "pharm",
    icon: "/sites/bohrscience/icon-mat.svg",
    title: "高温介电薄膜设计",
    description:
      "根据性能和材料约束，完成候选设计与计算模拟，找到值得优先验证的方向。",
    video: "/sites/bohrscience/bohr006.mp4",
  },
] as const;

const legalLinks = [
  {
    href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802045318",
    label: "京公网安备11010802045318号",
    icon: true,
  },
  {
    href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802045239",
    label: "京公网安备11010802045239号",
  },
  { href: "https://beian.miit.gov.cn/#/", label: "京ICP备20010051号–16" },
  { href: "https://beian.miit.gov.cn/#/", label: "京ICP备20010051号–14" },
  { href: "https://beian.miit.gov.cn/#/", label: "京ICP备20010051号–7" },
  { href: "https://beian.miit.gov.cn/#/", label: "津ICP备2023003620号–2" },
  { href: "https://beian.miit.gov.cn/#/", label: "京ICP备20010051号–15" },
  { href: "https://beian.miit.gov.cn/#/", label: "津ICP备2023003620号–1" },
  {
    href: "https://cdn1.deepmd.net/static/img/0da917f3ICP:EDI-20260304.pdf",
    label: "增值电信业务经营许可证合字B2–20210408",
  },
  {
    href: "https://beian.cac.gov.cn/",
    label: "网信算备110108025106801240015号",
  },
  {
    href: "https://cdn1.deepmd.net/static/img/7c7a1d752026.jpeg",
    label: "营业执照",
  },
] as const;

function openDownload(url: string) {
  window.location.assign(url);
}

function Chevron() {
  return (
    <svg className="bs-feature-point-icon" viewBox="0 0 16 16" aria-hidden="true">
      <path d="m5 3 5 5-5 5" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <rect
        x="1.16669"
        y="3.94727"
        width="8.88889"
        height="8.88889"
        rx="1.16667"
        stroke="currentColor"
        strokeWidth="1.05"
      />
      <path
        d="M3.94443 3.39019V2.33464C3.94443 1.6903 4.46676 1.16797 5.11109 1.16797H11.6666C12.311 1.16797 12.8333 1.6903 12.8333 2.33464V8.89019C12.8333 9.53452 12.311 10.0569 11.6666 10.0569H10.6111"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InViewVideo({
  src,
  label,
  controls = false,
  active = true,
  className = "bs-hero-video",
  preload = "metadata",
}: {
  src: string;
  label: string;
  controls?: boolean;
  active?: boolean;
  className?: string;
  preload?: "none" | "metadata" | "auto";
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!active) {
      element.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          void element.play().catch(() => undefined);
        } else {
          element.pause();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [active, src]);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      aria-label={label}
      autoPlay={controls}
      controls={controls}
      loop
      muted
      playsInline
      preload={preload}
    />
  );
}

function DownloadButtons({ compact = false }: { compact?: boolean }) {
  const className = compact ? undefined : "bs-hero-download-button";
  return (
    <>
      <button
        type="button"
        className={className}
        aria-label="下载适用于 Apple芯片 的玻尔·科学空间客户端"
        onClick={() => openDownload(DOWNLOADS.macArm)}
      >
        <img src="/sites/bohrscience/icon-download.svg" alt="" width={16} height={16} />
        Apple 芯片
      </button>
      <button
        type="button"
        className={className}
        aria-label="下载适用于 Intel处理器 的玻尔·科学空间客户端"
        onClick={() => openDownload(DOWNLOADS.macIntel)}
      >
        <img src="/sites/bohrscience/icon-download.svg" alt="" width={16} height={16} />
        Intel 处理器
      </button>
    </>
  );
}

export function BohrSciencePage() {
  const [expertId, setExpertId] = useState<(typeof experts)[number]["id"]>("bio");
  const [popover, setPopover] = useState<"partner" | "contact" | null>(null);
  const [copied, setCopied] = useState(false);
  const footerRef = useRef<HTMLElement>(null);
  const panelId = useId();
  const expert = experts.find((item) => item.id === expertId) ?? experts[0];

  useEffect(() => {
    if (!popover) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!footerRef.current?.contains(event.target as Node)) {
        setPopover(null);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPopover(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [popover]);

  return (
    <main className="bs-page">
      <header className="bs-header">
        <div className="bs-header-brand" aria-label="玻尔科学空间">
          <img
            className="bs-header-logo"
            alt=""
            width={28}
            height={28}
            src="/sites/bohrscience/mark.png"
          />
          <img
            className="bs-wordmark-bohr"
            alt=""
            width={42}
            height={19}
            src="/sites/bohrscience/wordmark-bohr.svg"
          />
          <img
            className="bs-wordmark-space"
            alt=""
            width={77}
            height={19}
            src="/sites/bohrscience/wordmark-space.svg"
          />
          <span className="bs-header-beta">Beta</span>
        </div>
        <div className="bs-header-actions">
          <a className="bs-header-experience" href="https://www.bohrium.com/">
            去体验
          </a>
          <a
            className="bs-header-download"
            href="#downloads"
            onClick={(event) => {
              event.preventDefault();
              document.getElementById("downloads")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            立即下载
          </a>
        </div>
      </header>

      <section
        className="bs-hero"
        style={{
          ["--hero-background-image" as string]:
            'url("/sites/bohrscience/hero-background.png")',
        }}
      >
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
            <aside className="bs-hero-benefits" aria-label="客户端福利">
              <img
                alt=""
                width={26}
                height={26}
                src="/sites/bohrscience/icon-photon.png"
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
                  <img
                    src="/sites/bohrscience/icon-apple.svg"
                    alt=""
                    width={20}
                    height={24}
                  />
                  下载 macOS 版
                </button>
                <div className="bs-hero-mac-options">
                  <DownloadButtons compact />
                </div>
              </div>
              <button
                type="button"
                className="bs-hero-download-button"
                aria-label="下载 Windows 版"
                onClick={() => openDownload(DOWNLOADS.windows)}
              >
                <img
                  src="/sites/bohrscience/icon-windows.svg"
                  alt=""
                  width={25}
                  height={25}
                />
                下载 Windows 版
              </button>
            </div>
          </div>
        </div>
        <div className="bs-demo-media bs-demo-media-large">
          <InViewVideo
            src={HERO_VIDEO}
            label="SciMaster 执行科学调研任务的产品界面"
            controls
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
          {features.map((feature) => (
            <section
              key={feature.index}
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
                      <Chevron />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <figure className="bs-feature-media">
                <figcaption className="bs-feature-media-caption">
                  {feature.caption}
                </figcaption>
                <div className="bs-demo-media bs-feature-video">
                  <InViewVideo src={feature.video} label={`${feature.caption}内容演示`} />
                </div>
              </figure>
            </section>
          ))}
        </div>
      </section>

      <section className="bs-experts-section">
        <div className="bs-section-heading">
          <h2>按研究任务，选择合适的 AI 学科专家</h2>
          <p>SciMaster 先理解你的目标。需要专业分析时，再由对应领域的 Master 接手执行。</p>
        </div>
        <div className="bs-expert-showcase">
          <div className="bs-expert-selector">
            <div className="bs-expert-tabs" role="tablist" aria-label="选择领域 AI 科学家">
              {experts.map((item) => {
                const selected = item.id === expert.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    className="bs-expert-tab"
                    aria-selected={selected}
                    aria-controls={panelId}
                    id={`expert-tab-${item.id}`}
                    onClick={() => setExpertId(item.id)}
                  >
                    <span className="bs-expert-icon" data-expert={item.dataExpert}>
                      <img src={item.icon} alt="" />
                    </span>
                    <span className="bs-expert-name">
                      <strong>{item.name}</strong>
                      <small>{item.field}</small>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <div
            className="bs-expert-content"
            id={panelId}
            role="tabpanel"
            aria-labelledby={`expert-tab-${expert.id}`}
          >
            <div className="bs-expert-content-heading">
              <strong>{expert.title}</strong>
              <span>{expert.description}</span>
            </div>
            <div className="bs-expert-panel">
              {experts.map((item) => (
                <InViewVideo
                  key={item.id}
                  src={item.video}
                  label={`${item.name} 产品演示`}
                  active={item.id === expert.id}
                  preload={item.id === "bio" ? "auto" : "metadata"}
                  className={
                    item.id === expert.id
                      ? "bs-hero-video bs-expert-video bs-expert-video-active"
                      : "bs-hero-video bs-expert-video"
                  }
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
            文献、数据、模型、软件与算力已经准备好。SciMaster 可以按你的目标调用它们，并把过程和结果留给你检查。
          </p>
        </div>
        <img
          className="bs-environment-image"
          src="/sites/bohrscience/environment.png"
          alt="科研工作流：输入研究问题，AI 科学家拆解、执行、检查并输出可检查结果，同时调用科学知识与数据、模型软件工具、计算环境与算力"
          width={4800}
          height={2780}
        />
      </section>

      <section className="bs-download-section" id="downloads">
        <h2>从一个真实科研问题开始</h2>
        <div className="bs-platform-cards" aria-label="选择操作系统下载">
          <div className="bs-platform-card">
            <span className="bs-platform-card-face">
              <img src="/sites/bohrscience/icon-apple.svg" alt="" width={44} height={52} />
              <strong>macOS</strong>
            </span>
            <div className="bs-platform-card-actions">
              <DownloadButtons compact />
            </div>
          </div>
          <div className="bs-platform-card">
            <span className="bs-platform-card-face">
              <img
                src="/sites/bohrscience/icon-windows.svg"
                alt=""
                width={58}
                height={58}
              />
              <strong>Windows</strong>
            </span>
            <div className="bs-platform-card-actions">
              <button
                type="button"
                aria-label="下载玻尔·科学空间 Windows 客户端"
                onClick={() => openDownload(DOWNLOADS.windows)}
              >
                <img
                  src="/sites/bohrscience/icon-download.svg"
                  alt=""
                  width={16}
                  height={16}
                />
                Windows 版
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bs-footer" ref={footerRef}>
        <div className="bs-footer-inner">
          <div className="bs-footer-top">
            <div className="bs-footer-about">
              <h2 className="bs-footer-about-title">关于玻尔</h2>
              <div className="bs-footer-about-body">
                <p>
                  玻尔（Bohrium）是专为全球科研人员打造的专业科研平台。基于真实权威文献和可追溯引用，玻尔致力于构建面向 AI 时代的全新科研工作流，让知识的获取、理解、产出与沉淀变得更高效、更可信。
                </p>
                <p>
                  我们相信，AI 时代的科研不应该只是回答问题，而是能真正参与科研任务，我们希望，玻尔能够助力千千万万的科研人员更快走完从知识获取到学术产出的关键路径。
                </p>
              </div>
            </div>
            <nav className="bs-footer-nav" aria-label="页脚导航">
              <div>
                <h3 className="bs-footer-col-title">携手科研</h3>
                <ul className="bs-footer-col-list">
                  <li>
                    <a className="bs-footer-col-link" href="https://www.bohrium.com/edu-page">
                      EDU科研加速计划
                    </a>
                  </li>
                  <li className="bs-popover-anchor">
                    <button
                      type="button"
                      className="bs-footer-popover-trigger"
                      aria-expanded={popover === "partner"}
                      onClick={() =>
                        setPopover((current) => (current === "partner" ? null : "partner"))
                      }
                    >
                      合作咨询
                    </button>
                    {popover === "partner" ? (
                      <div className="bs-popover" role="dialog" aria-label="合作咨询">
                        <div className="bs-footer-popover-content">
                          <img
                            className="bs-footer-popover-qr"
                            alt="合作咨询二维码"
                            width={128}
                            height={128}
                            src="/sites/bohrscience/qr-partner.png"
                          />
                          <div>
                            <p className="bs-footer-popover-title">微信扫描</p>
                            <p className="bs-footer-popover-description">
                              使用微信移动端扫码联系我们
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : null}
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
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      隐私政策
                    </a>
                  </li>
                  <li>
                    <a
                      className="bs-footer-col-link"
                      href="https://platform.bohrium.com/agreement?lang=zh-cn&agreementType=1&business=Bohrium"
                      target="_blank"
                      rel="noopener noreferrer"
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
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      帮助中心
                    </a>
                  </li>
                  <li>
                    <a
                      className="bs-footer-col-link"
                      href="https://dptechnology.feishu.cn/wiki/O1hNwyGv0iNYW6kpF75cpqcjn0c"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      更新日志
                    </a>
                  </li>
                  <li>
                    <a
                      className="bs-footer-col-link"
                      href="https://dptechnology.feishu.cn/wiki/NGvbwSVLCiR1WHkSRK7cShJanYd?fromScene=spaceOverview"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      用户共建
                    </a>
                  </li>
                  <li className="bs-popover-anchor">
                    <button
                      type="button"
                      className="bs-footer-popover-trigger"
                      aria-expanded={popover === "contact"}
                      onClick={() =>
                        setPopover((current) => (current === "contact" ? null : "contact"))
                      }
                    >
                      联系我们
                    </button>
                    {popover === "contact" ? (
                      <div className="bs-popover bs-popover-contact" role="dialog" aria-label="联系我们">
                        <div className="bs-footer-popover-content bs-footer-contact-popover-content">
                          <span className="bs-footer-contact-qr-wrap">
                            <img
                              className="bs-footer-popover-qr"
                              alt="微信客服二维码"
                              width={128}
                              height={128}
                              src="/sites/bohrscience/qr-support.png"
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
                                <span>support@bohrium.com</span>
                                <button
                                  type="button"
                                  className="bs-footer-copy-button"
                                  aria-label={copied ? "已复制联系邮箱" : "复制联系邮箱"}
                                  onClick={() => {
                                    void navigator.clipboard
                                      .writeText("support@bohrium.com")
                                      .then(() => {
                                        setCopied(true);
                                        window.setTimeout(() => setCopied(false), 1600);
                                      })
                                      .catch(() => undefined);
                                  }}
                                >
                                  <CopyIcon />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
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
            {legalLinks.map((link) => (
              <a
                key={link.label}
                className="bs-footer-legal-link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {"icon" in link ? (
                  <span className="bs-footer-beian-icon">
                    <img
                      alt=""
                      src="/sites/bohrscience/icon-beian.png"
                      width={11}
                      height={12}
                    />
                  </span>
                ) : null}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
