export const ASSET = {
  mark: "/sites/bohrium-bohrscience/images/bohrium-mark.png",
  heroBackground: "/sites/bohrium-bohrscience/images/hero-background.png",
  photon: "/sites/bohrium-bohrscience/images/icon-photon.png",
  environment: "/sites/bohrium-bohrscience/images/environment.png",
  beian: "/sites/bohrium-bohrscience/images/icon-beian.png",
  businessLicense: "/sites/bohrium-bohrscience/images/business-license.jpeg",
  og: "/sites/bohrium-bohrscience/images/og.png",
  wordmarkBohr: "/sites/bohrium-bohrscience/icons/wordmark-bohr.svg",
  wordmarkSpace: "/sites/bohrium-bohrscience/icons/wordmark-space.svg",
  apple: "/sites/bohrium-bohrscience/icons/icon-apple.svg",
  windows: "/sites/bohrium-bohrscience/icons/icon-windows.svg",
  download: "/sites/bohrium-bohrscience/icons/icon-download.svg",
  bioIcon: "/sites/bohrium-bohrscience/icons/icon-biomaster.svg",
  pharmIcon: "/sites/bohrium-bohrscience/icons/icon-pharmmaster.svg",
  matIcon: "/sites/bohrium-bohrscience/icons/icon-matmaster.svg",
  // Videos stay on source CDN (Scimaster alone is >100MB; GitHub rejects that size).
  heroVideo:
    "https://cdn.bohrium.com/bohrium/web/static/media/Scimaster0819.mp4",
  feature1Video: "https://cdn.bohrium.com/bohrium/web/static/media/bohr001.mp4",
  feature2Video: "https://cdn.bohrium.com/bohrium/web/static/media/bohr002.mp4",
  feature3Video: "https://cdn.bohrium.com/bohrium/web/static/media/bohr003.mp4",
  expertBioVideo:
    "https://cdn.bohrium.com/bohrium/web/static/media/bohr004.mp4",
  expertPharmVideo:
    "https://cdn.bohrium.com/bohrium/web/static/media/bohr005.mp4",
  expertMatVideo:
    "https://cdn.bohrium.com/bohrium/web/static/media/bohr006.mp4",
} as const;

export const EXTERNAL = {
  home: "https://www.bohrium.com/",
  edu: "https://www.bohrium.com/edu-page",
  privacy:
    "https://platform.bohrium.com/agreement?lang=zh-cn&agreementType=2&business=Bohrium",
  terms:
    "https://platform.bohrium.com/agreement?lang=zh-cn&agreementType=1&business=Bohrium",
  help: "https://bohrium-doc.dp.tech/docs/",
  changelog:
    "https://dptechnology.feishu.cn/wiki/O1hNwyGv0iNYW6kpF75cpqcjn0c",
  community:
    "https://dptechnology.feishu.cn/wiki/NGvbwSVLCiR1WHkSRK7cShJanYd?fromScene=spaceOverview",
  beian1:
    "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802045318",
  beian2:
    "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802045239",
  miit: "https://beian.miit.gov.cn/#/",
  supportEmail: "support@bohrium.com",
  icpLicense: "https://cdn1.deepmd.net/static/img/0da917f3ICP:EDI-20260304.pdf",
} as const;

export const FEATURES = [
  {
    index: "1.",
    label: "调研与假设",
    titleLines: ["先看清问题", "再决定研究什么"],
    description:
      "提出研究问题，SciMaster 会检索文献与专利，帮你找出共识、争议和空白，并给出可以继续验证的假设。",
    points: [
      "关键证据带有来源",
      "结论按共识、争议和空白整理",
      "可以把研究假设继续转成实验方案",
    ],
    caption: "SciMaster · 结构化调研结果",
    video: ASSET.feature1Video,
    videoLabel: "SciMaster · 结构化调研结果内容演示",
    reversed: false,
  },
  {
    index: "2.",
    label: "科研执行",
    titleLines: ["把想法交给 AI 跑起来"],
    description:
      "确定方向后，AI 科学家会准备数据和环境，运行分析或计算。你可以随时查看进度、检查结果并调整下一步。",
    points: [
      "少花时间配置环境和参数",
      "过程和结果都可以查看",
      "可以根据结果继续追问和调整",
    ],
    caption: "BioMaster · 单细胞 RNA velocity 分析",
    video: ASSET.feature2Video,
    videoLabel: "BioMaster · 单细胞 RNA velocity 分析内容演示",
    reversed: true,
  },
  {
    index: "3.",
    label: "成果与审查",
    titleLines: ["把结果整理成", "可以继续使用的成果"],
    description:
      "AI 会把数据和分析结果整理为报告、图表或 LaTeX，并检查引用、数据和结论是否一致。",
    points: [
      "输出内容可以继续编辑",
      "证据、图表与结论可以核对",
      "发现问题可以继续补充和修改",
    ],
    caption: "SciMaster · 研究写作 · 引用与数据审查",
    video: ASSET.feature3Video,
    videoLabel: "SciMaster · 研究写作 · 引用与数据审查内容演示",
    reversed: false,
  },
] as const;

export const EXPERTS = [
  {
    id: "bio",
    name: "BioMaster",
    field: "生物医学研究",
    title: "论文分析复现",
    description:
      "获取数据、运行作者代码并核对结果，也支持单细胞分析和基因变异解读。",
    icon: ASSET.bioIcon,
    video: ASSET.expertBioVideo,
    expertAttr: "bio",
  },
  {
    id: "pharm",
    name: "PharmMaster",
    field: "药物研发",
    title: "ITK 靶点抑制剂研发",
    description:
      "从靶点调研和专利分析，到候选分子设计、活性与成药性评估。",
    icon: ASSET.pharmIcon,
    video: ASSET.expertPharmVideo,
    expertAttr: "pharm",
  },
  {
    id: "mat",
    name: "MatMaster",
    field: "材料与化学",
    title: "高温介电薄膜设计",
    description:
      "根据性能和材料约束，完成候选设计与计算模拟，找到值得优先验证的方向。",
    icon: ASSET.matIcon,
    video: ASSET.expertMatVideo,
    expertAttr: "mat",
  },
] as const;

export type DownloadKey = "apple" | "intel" | "windows";

export type DownloadManifest = Record<
  DownloadKey,
  { source: string; url: string }
>;
