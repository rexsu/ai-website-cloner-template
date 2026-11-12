export const ASSETS = {
  mark: "/sites/bohrium/icons/bohrium-mark.png",
  wordmarkBohr: "/sites/bohrium/wordmarks/wordmark-bohr.svg",
  wordmarkSpace: "/sites/bohrium/wordmarks/wordmark-space.svg",
  photon: "/sites/bohrium/icons/icon-photon.png",
  apple: "/sites/bohrium/icons/icon-apple.svg",
  windows: "/sites/bohrium/icons/icon-windows.svg",
  download: "/sites/bohrium/icons/icon-download.svg",
  chevron: "/sites/bohrium/icons/icon-chevron.svg",
  beian: "/sites/bohrium/icons/icon-beian.png",
  workflow: "/sites/bohrium/images/workflow-diagram.png",
  expertBio: "/sites/bohrium/icons/expert-biomaster.svg",
  expertPharm: "/sites/bohrium/icons/expert-pharmmaster.svg",
  expertMat: "/sites/bohrium/icons/expert-matmaster.svg",
  videos: {
    hero: "https://cdn.bohrium.com/bohrium/web/static/media/Scimaster0819.mp4",
    feature1: "/sites/bohrium/videos/bohr001.mp4",
    feature2: "/sites/bohrium/videos/bohr002.mp4",
    feature3: "/sites/bohrium/videos/bohr003.mp4",
    bio: "/sites/bohrium/videos/bohr004.mp4",
    pharm: "/sites/bohrium/videos/bohr005.mp4",
    mat: "/sites/bohrium/videos/bohr006.mp4",
  },
} as const;

export type DownloadPlatform = "apple" | "intel" | "windows";

export type DownloadSlot =
  | { status: "loading" }
  | { status: "upcoming" }
  | { status: "available"; url: string }
  | { status: "error" };

export type DownloadState = Record<DownloadPlatform, DownloadSlot>;
