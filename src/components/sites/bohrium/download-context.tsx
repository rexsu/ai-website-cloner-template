"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  type DownloadPlatform,
  type DownloadSlot,
  type DownloadState,
} from "./assets";

const INITIAL: DownloadState = {
  apple: { status: "loading" },
  intel: { status: "loading" },
  windows: { status: "loading" },
};

type DownloadContextValue = {
  downloads: DownloadState;
  triggerDownload: (platform: DownloadPlatform) => void;
  titleFor: (slot: DownloadSlot, upcomingLabel: string) => string | undefined;
};

const DownloadContext = createContext<DownloadContextValue | null>(null);

function mapPayload(
  data: Record<string, { url?: string } | null>,
): DownloadState {
  const mapOne = (key: DownloadPlatform): DownloadSlot => {
    const entry = data[key];
    if (entry?.url) return { status: "available", url: entry.url };
    return { status: "upcoming" };
  };
  return {
    apple: mapOne("apple"),
    intel: mapOne("intel"),
    windows: mapOne("windows"),
  };
}

export function DownloadProvider({ children }: { children: ReactNode }) {
  const [downloads, setDownloads] = useState<DownloadState>(INITIAL);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/bohrscience/download", {
          cache: "no-store",
        });
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as Record<
          string,
          { url?: string } | null
        >;
        if (!cancelled) setDownloads(mapPayload(data));
      } catch {
        if (!cancelled) {
          setDownloads({
            apple: { status: "error" },
            intel: { status: "error" },
            windows: { status: "error" },
          });
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const triggerDownload = useCallback(
    (platform: DownloadPlatform) => {
      const slot = downloads[platform];
      if (slot.status !== "available") return;
      const anchor = document.createElement("a");
      anchor.href = slot.url;
      anchor.rel = "noopener noreferrer";
      anchor.style.display = "none";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    },
    [downloads],
  );

  const titleFor = useCallback(
    (slot: DownloadSlot, upcomingLabel: string) => {
      if (slot.status === "loading") return "下载信息加载中";
      if (slot.status === "upcoming" || slot.status === "error") {
        return upcomingLabel;
      }
      return undefined;
    },
    [],
  );

  const value = useMemo(
    () => ({ downloads, triggerDownload, titleFor }),
    [downloads, triggerDownload, titleFor],
  );

  return (
    <DownloadContext.Provider value={value}>{children}</DownloadContext.Provider>
  );
}

export function useDownloads() {
  const ctx = useContext(DownloadContext);
  if (!ctx) {
    throw new Error("useDownloads must be used within DownloadProvider");
  }
  return ctx;
}
