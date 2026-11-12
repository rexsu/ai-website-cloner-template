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
import type { DownloadKey, DownloadManifest } from "./constants";

type Status = "loading" | "ready" | "error";

type DownloadState = Record<DownloadKey, { status: Status; url?: string }>;

type DownloadContextValue = {
  state: DownloadState;
  download: (key: DownloadKey) => void;
};

const DownloadContext = createContext<DownloadContextValue | null>(null);

const INITIAL: DownloadState = {
  apple: { status: "loading" },
  intel: { status: "loading" },
  windows: { status: "loading" },
};

async function triggerDownload(url: string) {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.rel = "noopener noreferrer";
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

export function DownloadProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DownloadState>(INITIAL);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const response = await fetch("/bohrscience/download", {
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error(`download resolve failed: ${response.status}`);
        }
        const data = (await response.json()) as DownloadManifest;
        if (cancelled) return;
        setState({
          apple: { status: "ready", url: data.apple.url },
          intel: { status: "ready", url: data.intel.url },
          windows: { status: "ready", url: data.windows.url },
        });
      } catch {
        if (cancelled) return;
        setState({
          apple: { status: "error" },
          intel: { status: "error" },
          windows: { status: "error" },
        });
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  const download = useCallback(
    (key: DownloadKey) => {
      const entry = state[key];
      if (entry.status !== "ready" || !entry.url) return;
      void triggerDownload(entry.url);
    },
    [state],
  );

  const value = useMemo(() => ({ state, download }), [state, download]);

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
