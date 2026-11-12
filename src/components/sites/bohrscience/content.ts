export const ASSETS = {
  logo: "/sites/bohrscience/logo-mark.png",
  wordmarkBohr: "/sites/bohrscience/wordmark-bohr.svg",
  wordmarkSpace: "/sites/bohrscience/wordmark-space.svg",
  heroBackground: "/sites/bohrscience/hero-background.png",
  photon: "/sites/bohrscience/icon-photon.png",
  apple: "/sites/bohrscience/icon-apple.svg",
  windows: "/sites/bohrscience/icon-windows.svg",
  download: "/sites/bohrscience/icon-download.svg",
  beian: "/sites/bohrscience/icon-beian.png",
  environment: "/sites/bohrscience/environment.png",
  inquiryQr: "/sites/bohrscience/inquiry-qr.png",
  contactQr: "/sites/bohrscience/contact-qr.png",
} as const;

export const VIDEOS = {
  hero: "https://cdn.bohrium.com/bohrium/web/static/media/Scimaster0819.mp4",
  research: [
    "https://cdn.bohrium.com/bohrium/web/static/media/bohr001.mp4",
    "https://cdn.bohrium.com/bohrium/web/static/media/bohr002.mp4",
    "https://cdn.bohrium.com/bohrium/web/static/media/bohr003.mp4",
  ],
  experts: {
    bio: "https://cdn.bohrium.com/bohrium/web/static/media/bohr004.mp4",
    mat: "https://cdn.bohrium.com/bohrium/web/static/media/bohr005.mp4",
    pharm: "https://cdn.bohrium.com/bohrium/web/static/media/bohr006.mp4",
  },
} as const;

export const SUPPORT_EMAIL = "support@bohrium.com";

export const LINKS = {
  experience: "https://www.bohrium.com/",
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
  publicSecurity:
    "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802045318",
  publicSecuritySecondary:
    "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802045239",
  icp: "https://beian.miit.gov.cn/#/",
  telecomLicense:
    "https://cdn1.deepmd.net/static/img/0da917f3ICP:EDI-20260304.pdf",
  algorithmRegistration: "https://beian.cac.gov.cn/",
  businessLicense: "https://cdn1.deepmd.net/static/img/7c7a1d752026.jpeg",
} as const;

export const DOWNLOAD_FALLBACK = {
  apple: {
    source: "releases",
    url: "https://cdn.dp.tech/scix/desktop/prod/darwin_aarch64/0.10.20/%E7%8E%BB%E5%B0%94%C2%B7%E7%A7%91%E5%AD%A6%E7%A9%BA%E9%97%B4_0.10.20_aarch64.dmg",
  },
  intel: {
    source: "releases",
    url: "https://cdn.bohrium.com/scix/desktop/prod/darwin_x86_64/0.10.20/%E7%8E%BB%E5%B0%94%C2%B7%E7%A7%91%E5%AD%A6%E7%A9%BA%E9%97%B4_0.10.20_x86_64.dmg",
  },
  windows: {
    source: "releases",
    url: "https://cdn.dp.tech/scix/desktop/prod/windows_x86_64/0.10.20/%E7%8E%BB%E5%B0%94%C2%B7%E7%A7%91%E5%AD%A6%E7%A9%BA%E9%97%B4_0.10.20_x64-setup.exe",
  },
} as const;
