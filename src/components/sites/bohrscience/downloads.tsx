"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { ASSETS, DOWNLOAD_FALLBACK } from "./content";
import { bs } from "./styles";

type Slot =
  | { status: "loading" }
  | { status: "upcoming" }
  | { status: "available"; url: string };

type Releases = {
  apple: Slot;
  intel: Slot;
  windows: Slot;
};

type Os = "unknown" | "mobile" | "mac" | "windows" | "other";
type Chip = "apple" | "intel" | null;

type DownloadContextValue = {
  releases: Releases;
  os: Os;
  chip: Chip | null;
};

const loadingReleases: Releases = {
  apple: { status: "loading" },
  intel: { status: "loading" },
  windows: { status: "loading" },
};

const DownloadContext = createContext<DownloadContextValue | null>(null);

function useDownloads() {
  const value = useContext(DownloadContext);
  if (!value) {
    throw new Error("Download controls must be inside DownloadProvider");
  }
  return value;
}

type NavigatorHints = Navigator & {
  userAgentData?: {
    platform?: string;
    getHighEntropyValues?: (
      hints: string[],
    ) => Promise<{ architecture?: string }>;
  };
};

function toSlot(entry: unknown): Slot {
  if (
    entry &&
    typeof entry === "object" &&
    "url" in entry &&
    typeof entry.url === "string" &&
    entry.url.startsWith("https://")
  ) {
    return { status: "available", url: entry.url };
  }
  return { status: "upcoming" };
}

function releasesFrom(payload: unknown): Releases {
  const data =
    payload && typeof payload === "object"
      ? (payload as Record<string, unknown>)
      : {};
  return {
    apple: toSlot(data.apple),
    intel: toSlot(data.intel),
    windows: toSlot(data.windows),
  };
}

function readOs(): Os {
  const nav = navigator as NavigatorHints;
  const agent = nav.userAgent ?? "";
  const platform = nav.userAgentData?.platform?.toLowerCase() ?? "";
  const mobile =
    (nav.platform === "MacIntel" && nav.maxTouchPoints > 1) ||
    /Android|iPhone|iPad|iPod|Mobile/i.test(agent);
  if (mobile) return "mobile";
  if (platform.includes("mac") || /Macintosh|Mac OS X/i.test(agent)) return "mac";
  if (platform.includes("win") || /Windows/i.test(agent)) return "windows";
  return "other";
}

function statusTitle(slot: Slot) {
  if (slot.status === "loading") return "下载信息加载中";
  if (slot.status === "upcoming") return "敬请期待";
  return undefined;
}

function startDownload(url: string) {
  const link = document.createElement("a");
  link.href = url;
  link.download = "";
  link.rel = "noopener";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function DownloadProvider({ children }: { children: ReactNode }) {
  const [releases, setReleases] = useState<Releases>(loadingReleases);
  const os = useSyncExternalStore(
    () => () => {},
    readOs,
    () => "unknown" as Os,
  );
  const [chip, setChip] = useState<Chip | null>(null);
  const resolvedChip = os === "mac" ? chip : null;

  useEffect(() => {
    if (os !== "mac") return;
    let alive = true;
    const hints = (navigator as NavigatorHints).userAgentData;
    void (async () => {
      const data = await hints?.getHighEntropyValues?.(["architecture"]);
      const architecture = data?.architecture?.toLowerCase();
      if (!alive || !architecture) return;
      if (architecture.includes("arm")) setChip("apple");
      if (architecture.includes("x86") || architecture.includes("x64")) {
        setChip("intel");
      }
    })().catch(() => undefined);
    return () => {
      alive = false;
    };
  }, [os]);

  useEffect(() => {
    let alive = true;
    void fetch("/en/bohrscience/download", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) throw new Error(String(response.status));
        return releasesFrom(await response.json());
      })
      .then((next) => {
        if (alive) setReleases(next);
      })
      .catch(() => {
        if (alive) setReleases(releasesFrom(DOWNLOAD_FALLBACK));
      });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <DownloadContext.Provider value={{ releases, os, chip: resolvedChip }}>
      {children}
    </DownloadContext.Provider>
  );
}

const macChoices = [
  { type: "apple", label: "Apple 芯片" },
  { type: "intel", label: "Intel 处理器" },
] as const;

export function MacActions({ chip }: { chip: Chip | null }) {
  const { releases } = useDownloads();
  const choices = chip
    ? macChoices.filter((choice) => choice.type === chip)
    : macChoices;

  if (
    macChoices.every((choice) => releases[choice.type].status === "upcoming")
  ) {
    return (
      <button type="button" aria-label="macOS 敬请期待" disabled>
        敬请期待
      </button>
    );
  }

  return (
    <>
      {choices.map((choice) => {
        const slot = releases[choice.type];
        const ready = slot.status === "available";
        return (
          <button
            key={choice.type}
            type="button"
            aria-label={`下载适用于 ${choice.type === "apple" ? "Apple芯片" : "Intel处理器"} 的玻尔·科学空间客户端`}
            disabled={!ready}
            title={statusTitle(slot)}
            onClick={() => {
              if (slot.status === "available") startDownload(slot.url);
            }}
          >
            <img src={ASSETS.download} alt="" width={16} height={16} />
            {choice.label}
          </button>
        );
      })}
    </>
  );
}

export function HeroDownloads() {
  const { releases, os, chip } = useDownloads();
  const chipSlot = chip ? releases[chip] : undefined;
  const macReady =
    releases.apple.status === "available" ||
    releases.intel.status === "available";
  const macDisabled = chipSlot ? chipSlot.status !== "available" : !macReady;
  const windows = releases.windows;

  return (
    <>
      <div className={bs("mobile-download-note")} role="status">
        请在web端下载
      </div>
      {os !== "mobile" ? (
        <div className={bs("hero-downloads")} aria-label="下载玻尔·科学空间">
          <div className={bs("hero-mac-download")}>
            <button
              type="button"
              className={bs("hero-download-button")}
              disabled={macDisabled}
              title={chipSlot ? statusTitle(chipSlot) : undefined}
              onClick={() => {
                if (chipSlot?.status === "available") {
                  startDownload(chipSlot.url);
                }
              }}
            >
              <img src={ASSETS.apple} alt="" width={20} height={24} />
              下载 macOS 版
            </button>
            {!chip && macReady ? (
              <div className={bs("hero-mac-options")}>
                <MacActions chip={chip} />
              </div>
            ) : null}
          </div>
          <button
            type="button"
            className={bs("hero-download-button")}
            aria-label={
              windows.status === "upcoming"
                ? "Windows 敬请期待"
                : "下载 Windows 版"
            }
            disabled={windows.status !== "available"}
            title={statusTitle(windows)}
            onClick={() => {
              if (windows.status === "available") startDownload(windows.url);
            }}
          >
            <img src={ASSETS.windows} alt="" width={25} height={25} />
            {windows.status === "upcoming" ? "敬请期待" : "下载 Windows 版"}
          </button>
        </div>
      ) : null}
    </>
  );
}

export function DownloadCards() {
  const { releases, os, chip } = useDownloads();
  const windows = releases.windows;

  if (os === "mobile") {
    return (
      <div className={bs("mobile-download-note")} role="status">
        请在web端下载
      </div>
    );
  }

  return (
    <div className={bs("platform-cards")} aria-label="选择操作系统下载">
      <div className={bs("platform-card")}>
        <span className={bs("platform-card-face")} aria-hidden="true">
          <img src={ASSETS.apple} alt="" width={44} height={52} />
          <strong>macOS</strong>
        </span>
        <div className={bs("platform-card-actions")}>
          <MacActions chip={chip} />
        </div>
      </div>
      <div className={bs("platform-card")}>
        <span className={bs("platform-card-face")} aria-hidden="true">
          <img src={ASSETS.windows} alt="" width={58} height={58} />
          <strong>Windows</strong>
        </span>
        <div className={bs("platform-card-actions")}>
          <button
            type="button"
            aria-label={
              windows.status === "upcoming"
                ? "Windows 敬请期待"
                : "下载玻尔·科学空间 Windows 客户端"
            }
            disabled={windows.status !== "available"}
            title={statusTitle(windows)}
            onClick={() => {
              if (windows.status === "available") startDownload(windows.url);
            }}
          >
            <img src={ASSETS.download} alt="" width={16} height={16} />
            {windows.status === "upcoming" ? "敬请期待" : "Windows 版"}
          </button>
        </div>
      </div>
    </div>
  );
}
