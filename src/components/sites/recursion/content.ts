const origin = "https://recursion.com";

export function sourcePath(path: string) {
  return `${origin}${path}`;
}

export type NavLink = {
  label: string;
  href: string;
  current?: boolean;
};

export type NavItem = {
  label: string;
  href?: string;
  links?: NavLink[];
};

export const navItems: NavItem[] = [
  {
    label: "Our Platform",
    links: [
      { label: "Mission", href: sourcePath("/mission") },
      { label: "Platform", href: "/platform", current: true },
      { label: "Scientific Materials", href: sourcePath("/scientificmaterials") },
    ],
  },
  {
    label: "Pipeline",
    links: [
      { label: "View All", href: sourcePath("/pipeline") },
      { label: "REC-4881: MEK1/2", href: sourcePath("/pipeline?program=REC-4881") },
      { label: "REC-1245: RBM39", href: sourcePath("/pipeline?program=REC-1245") },
      { label: "REC-4539: LSD1", href: sourcePath("/pipeline?program=REC-4539") },
      { label: "REC-7735: PI3Kα", href: sourcePath("/pipeline?program=REC-7735") },
      { label: "REC-102: ENPP1", href: sourcePath("/pipeline?program=REC-102") },
    ],
  },
  {
    label: "Clinical Trials",
    links: [
      { label: "View All", href: sourcePath("/clinical-trials") },
      {
        label: "FAP - TUPELO",
        href: sourcePath("/clinical-trials/familial-adenomatous-polyposis-clinical-trial"),
      },
      {
        label: "Solid Tumors - ELUCIDATE",
        href: "https://clinicaltrials.gov/study/NCT05985655",
      },
      {
        label: "Solid Tumors & Lymphoma - DAHLIA",
        href: sourcePath("/clinical-trials/solid-tumor-lymphoma-clinical-trial"),
      },
      {
        label: "B-cell Malignancies - EXCELERIZE",
        href: "https://clinicaltrials.gov/study/NCT06980116",
      },
      {
        label: "Solid Tumors - ENLYGHT",
        href: sourcePath("/clinical-trials/solid-tumor-small-cell-lung-cancer-clinical-trial"),
      },
      {
        label: "Solid Tumors - ZINNIA",
        href: sourcePath(
          "/clinical-trials/solid-tumor-pik3ca-h1047r-mutation-breast-cancer-clinical-trial",
        ),
      },
    ],
  },
  { label: "Partners", href: sourcePath("/partners") },
  {
    label: "Investors",
    links: [
      { label: "Investor Relations", href: "https://ir.recursion.com/" },
      { label: "Earnings Call: FAP", href: sourcePath("/fap-webinar") },
      { label: "ESG", href: sourcePath("/esg") },
      {
        label: "Company Materials",
        href: "https://ir.recursion.com/news-events/presentations",
      },
    ],
  },
  {
    label: "About Us",
    links: [
      { label: "Story", href: sourcePath("/our-story") },
      { label: "Team", href: sourcePath("/team") },
      { label: "News", href: "https://ir.recursion.com/news-events/press-releases" },
      { label: "Press", href: sourcePath("/press") },
      { label: "Blog", href: sourcePath("/blogs") },
    ],
  },
  { label: "Careers", href: sourcePath("/careers") },
];

export const heroTitle =
  "Recursion OS: The AI product engine to industrialize drug discovery";

export const loopHeading =
  "Inside the loop: Learn how we map disease biology and design potential medicines, and carry them into the clinic — at scale";

export const loopBody =
  "Take a look inside the automated labs that form our AI-native data factory to see our end-to-end drug discovery and development engine work as one connected system. Driven by bilingual teams of scientists and technologists, our wet and dry \"lab-in-the-loop,\" forms a continuous learning system of physical automation and machine learning models. See how we run up to 2 million weekly experiments to build a 50+ petabyte proprietary dataset, tightly connecting biology, generative de novo chemistry, and translational clinical tools to systematically de-risk drug discovery.";

export const platformHeading =
  "An end-to-end platform for AI drug discovery and development";

export const platformLead =
  "Data is the foundation of the Recursion OS drug discovery and development system, underpinned by algorithms that can make predictions that will then be tested in our labs. Every physical experiment conducted is converted into digital representations of biology and chemistry, forming loops of physical data and digital analysis.";

export const platformFollow =
  "This approach allows us to iterate across the discovery process, leveraging machine learning and large language models (LLMs) built-for-purpose to uncover novel insights across biology and chemistry, fueling our clinical-stage pipeline.";

export const diagramAlt =
  "Flowchart of the Recursion OS 2.0 platform showing three iterative phases: AI-powered Biological Insights (Nomination Workflow), AI-enabled Precision Design (Design Workflow), and AI-informed Clinical Development (ClinTech Workflow).";

export type Chapter = {
  title: string;
  start: number;
  color: string;
  icon: string;
};

export const youtubeId = "hRw0qFX5ReE";

export const chapters: Chapter[] = [
  {
    title: "Intro from our CEO",
    start: 0,
    color: "#fdb800",
    icon: "/sites/recursion/icons/intro.svg",
  },
  {
    title: "Disease-specific cellular engineering",
    start: 80,
    color: "#fe7e28",
    icon: "/sites/recursion/icons/cell.svg",
  },
  {
    title: "Unbiased, high dimensional biology",
    start: 146,
    color: "#ef008b",
    icon: "/sites/recursion/icons/biology.svg",
  },
  {
    title: "Supercompute-powered foundation models",
    start: 276,
    color: "#8351cf",
    icon: "/sites/recursion/icons/supercompute.svg",
  },
  {
    title: "Integrated Design-Make-Test-Learn",
    start: 389,
    color: "#0082dd",
    icon: "/sites/recursion/icons/dmtl.svg",
  },
  {
    title: "AI-native clinical development",
    start: 662,
    color: "#00ba90",
    icon: "/sites/recursion/icons/clinical.svg",
  },
  {
    title: "An end-to-end learning system",
    start: 891,
    color: "#a9d620",
    icon: "/sites/recursion/icons/intro.svg",
  },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "http://linkedin.com/company/4990022",
    icon: "/sites/recursion/social/linkedin.png",
  },
  {
    label: "X",
    href: "http://twitter.com/recursionpharma",
    icon: "/sites/recursion/social/x.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/recursionpharma?igsh=cTVnYTY0eHV6dXpk&utm_source=qr",
    icon: "/sites/recursion/social/instagram.svg",
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/channel/UCXZs32Pik1MWsT9zLQ-K7iA",
    icon: "/sites/recursion/social/youtube.png",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/RecursionPharma",
    icon: "/sites/recursion/social/facebook.svg",
  },
  {
    label: "Bluesky",
    href: "https://bsky.app/profile/recursionpharma.bsky.social",
    icon: "/sites/recursion/social/bluesky.svg",
  },
];
