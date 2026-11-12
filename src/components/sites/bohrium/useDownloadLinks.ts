"use client";

import { useEffect, useState } from "react";
import type { DownloadKey, DownloadMap } from "./content";

type Status = "loading" | "ready" | "error";

const FALLBACK_LINKS: DownloadMap = {
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
};

function isDownloadMap(value: unknown): value is DownloadMap {
  if (!value || typeof value !== "object") return false;
  const record = value as Record<string, unknown>;
  return (["apple", "intel", "windows"] as const).every((key) => {
    const item = record[key];
    return (
      !!item &&
      typeof item === "object" &&
      typeof (item as { url?: unknown }).url === "string"
    );
  });
}

export function useDownloadLinks() {
  const [status, setStatus] = useState<Status>("ready");
  const [links, setLinks] = useState<DownloadMap>(FALLBACK_LINKS);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/bohrscience/download", { cache: "no-store" });
        if (!res.ok) throw new Error(String(res.status));
        const data: unknown = await res.json();
        if (cancelled) return;
        if (isDownloadMap(data)) {
          setLinks(data);
          setStatus("ready");
          return;
        }
        throw new Error("invalid payload");
      } catch {
        if (cancelled) return;
        setLinks(FALLBACK_LINKS);
        setStatus("ready");
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  function openDownload(key: DownloadKey) {
    const item = links[key];
    if (!item?.url) return;
    window.open(item.url, "_blank", "noopener,noreferrer");
  }

  return { status, links, openDownload };
}
