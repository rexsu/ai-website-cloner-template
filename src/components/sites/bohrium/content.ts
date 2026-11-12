export const ASSET = {
  heroBg: "/sites/bohrium/images/hero-background.png",
  logoMark: "/sites/bohrium/images/logo-mark.png",
  wordmarkBohr: "/sites/bohrium/icons/wordmark-bohr.svg",
  wordmarkSpace: "/sites/bohrium/icons/wordmark-space.svg",
  iconApple: "/sites/bohrium/icons/icon-apple.svg",
  iconWindows: "/sites/bohrium/icons/icon-windows.svg",
  iconDownload: "/sites/bohrium/icons/icon-download.svg",
  iconPhoton: "/sites/bohrium/icons/icon-photon.png",
  iconBeian: "/sites/bohrium/icons/icon-beian.png",
  environment: "/sites/bohrium/images/environment-workflow.png",
  heroVideo: "/sites/bohrium/videos/Scimaster0819.mp4",
  featureVideos: {
    research: "/sites/bohrium/videos/bohr001.mp4",
    execution: "/sites/bohrium/videos/bohr002.mp4",
    results: "/sites/bohrium/videos/bohr003.mp4",
  },
  expertVideos: {
    bio: "/sites/bohrium/videos/bohr004.mp4",
    mat: "/sites/bohrium/videos/bohr005.mp4",
    pharm: "/sites/bohrium/videos/bohr006.mp4",
  },
} as const;

export const FEATURES = [
  {
    index: "1.",
    label: "调研与假设",
    titleLines: ["先看清问题，", "再决定研究什么"],
    description:
      "提出研究问题，SciMaster 会检索文献与专利，帮你找出共识、争议和空白，并给出可以继续验证的假设。",
    points: [
      "关键证据带有来源",
      "结论按共识、争议和空白整理",
      "可以把研究假设继续转成实验方案",
    ],
    caption: "SciMaster · 结构化调研结果",
    video: ASSET.featureVideos.research,
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
    video: ASSET.featureVideos.execution,
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
    video: ASSET.featureVideos.results,
    reversed: false,
  },
] as const;

export type ExpertId = "bio" | "mat" | "pharm";

export const EXPERTS: Array<{
  id: ExpertId;
  name: string;
  field: string;
  title: string;
  description: string;
  video: string;
}> = [
  {
    id: "bio",
    name: "BioMaster",
    field: "生物医学研究",
    title: "论文分析复现",
    description:
      "获取数据、运行作者代码并核对结果，也支持单细胞分析和基因变异解读。",
    video: ASSET.expertVideos.bio,
  },
  {
    id: "mat",
    name: "PharmMaster",
    field: "药物研发",
    title: "ITK 靶点抑制剂研发",
    description: "从靶点调研和专利分析，到候选分子设计、活性与成药性评估。",
    video: ASSET.expertVideos.mat,
  },
  {
    id: "pharm",
    name: "MatMaster",
    field: "材料与化学",
    title: "高温介电薄膜设计",
    description:
      "根据性能和材料约束，完成候选设计与计算模拟，找到值得优先验证的方向。",
    video: ASSET.expertVideos.pharm,
  },
];

export const FOOTER_LINKS = {
  partner: [
    {
      label: "EDU科研加速计划",
      href: "https://www.bohrium.com/edu-page",
    },
  ],
  legal: [
    {
      label: "隐私政策",
      href: "https://platform.bohrium.com/agreement?lang=zh-cn&agreementType=2&business=Bohrium",
    },
    {
      label: "服务协议",
      href: "https://platform.bohrium.com/agreement?lang=zh-cn&agreementType=1&business=Bohrium",
    },
  ],
  help: [
    { label: "帮助中心", href: "https://bohrium-doc.dp.tech/docs/" },
    {
      label: "更新日志",
      href: "https://dptechnology.feishu.cn/wiki/O1hNwyGv0iNYW6kpF75cpqcjn0c",
    },
    {
      label: "用户共建",
      href: "https://dptechnology.feishu.cn/wiki/NGvbwSVLCiR1WHkSRK7cShJanYd?fromScene=spaceOverview",
    },
  ],
} as const;

export const LEGAL_LINKS = [
  {
    label: "京公网安备11010802045318号",
    href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802045318",
    beian: true,
  },
  {
    label: "京公网安备11010802045239号",
    href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802045239",
  },
  { label: "京ICP备20010051号–16", href: "https://beian.miit.gov.cn/#/" },
  { label: "京ICP备20010051号–14", href: "https://beian.miit.gov.cn/#/" },
  { label: "京ICP备20010051号–7", href: "https://beian.miit.gov.cn/#/" },
  { label: "津ICP备2023003620号–2", href: "https://beian.miit.gov.cn/#/" },
  { label: "京ICP备20010051号–15", href: "https://beian.miit.gov.cn/#/" },
  { label: "津ICP备2023003620号–1", href: "https://beian.miit.gov.cn/#/" },
  {
    label: "增值电信业务经营许可证合字B2–20210408",
    href: "https://cdn1.deepmd.net/static/img/0da917f3ICP:EDI-20260304.pdf",
  },
  {
    label: "网信算备110108025106801240015号",
    href: "https://beian.cac.gov.cn/",
  },
  {
    label: "营业执照",
    href: "https://cdn1.deepmd.net/static/img/7c7a1d752026.jpeg",
  },
] as const;

export type DownloadKey = "apple" | "intel" | "windows";

export type DownloadMap = Record<
  DownloadKey,
  { source: string; url: string } | undefined
>;
