"use client";

import { useEffect, useState } from "react";
import { ASSET, type DownloadState } from "./data";

type Chip = "apple" | "intel" | null;

function triggerDownload(url: string) {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.rel = "noopener noreferrer";
  anchor.target = "_blank";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

export function HeroDownloads() {
  const [state, setState] = useState<DownloadState | null>(null);
  const [chip, setChip] = useState<Chip>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/bohrscience/download", { cache: "no-store" });
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as DownloadState;
        if (!cancelled) setState(data);
      } catch {
        if (!cancelled) setState({ apple: null, intel: null, windows: null });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/Macintosh|Mac OS X/i.test(ua)) {
      const data = (
        navigator as Navigator & {
          userAgentData?: {
            getHighEntropyValues?: (
              hints: string[],
            ) => Promise<{ architecture?: string }>;
          };
        }
      ).userAgentData;
      (async () => {
        try {
          const values = data?.getHighEntropyValues
            ? await data.getHighEntropyValues(["architecture"])
            : undefined;
          const arch = values?.architecture?.toLowerCase() ?? "";
          if (arch.includes("arm")) setChip("apple");
          else if (arch.includes("x86") || arch.includes("x64")) setChip("intel");
        } catch {
          // leave chip null → show both options on hover
        }
      })();
    }
  }, []);

  const macReady =
    state?.apple?.url != null || state?.intel?.url != null;
  const windowsUrl = state?.windows?.url;
  const preferred =
    chip === "apple"
      ? state?.apple
      : chip === "intel"
        ? state?.intel
        : null;

  return (
    <>
      <div className="mobile-download-note" role="status">
        请在web端下载
      </div>
      <div className="hero-downloads" aria-label="下载玻尔·科学空间">
        <div className="hero-mac-download">
          <button
            type="button"
            className="hero-download-button"
            disabled={preferred ? !preferred.url : !macReady}
            aria-label="下载 macOS 版"
            onClick={() => {
              if (preferred?.url) triggerDownload(preferred.url);
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ASSET.apple} alt="" width={20} height={24} />
            下载 macOS 版
          </button>
          {!chip ? (
            <div className="hero-mac-options">
              {(
                [
                  { type: "apple", label: "Apple 芯片" },
                  { type: "intel", label: "Intel 处理器" },
                ] as const
              ).map((option) => {
                const item = state?.[option.type];
                return (
                  <button
                    key={option.type}
                    type="button"
                    aria-label={`下载适用于 ${option.type === "apple" ? "Apple芯片" : "Intel处理器"} 的玻尔·科学空间客户端`}
                    disabled={!item?.url}
                    onClick={() => {
                      if (item?.url) triggerDownload(item.url);
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ASSET.apple} alt="" width={16} height={18} />
                    {option.label}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
        <button
          type="button"
          className="hero-download-button"
          aria-label="下载 Windows 版"
          disabled={!windowsUrl}
          onClick={() => {
            if (windowsUrl) triggerDownload(windowsUrl);
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ASSET.windows} alt="" width={25} height={25} />
          下载 Windows 版
        </button>
      </div>
    </>
  );
}

export function PlatformCards() {
  const [state, setState] = useState<DownloadState | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/bohrscience/download", { cache: "no-store" });
        if (!res.ok) throw new Error(String(res.status));
        const data = (await res.json()) as DownloadState;
        if (!cancelled) setState(data);
      } catch {
        if (!cancelled) setState({ apple: null, intel: null, windows: null });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="platform-cards" aria-label="选择操作系统下载">
      <div className="platform-card" tabIndex={0}>
        <div className="platform-card-face">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ASSET.apple} alt="" width={64} height={64} />
          <strong>macOS</strong>
        </div>
        <div className="platform-card-actions">
          {(
            [
              { type: "apple", label: "Apple 芯片" },
              { type: "intel", label: "Intel 处理器" },
            ] as const
          ).map((option) => {
            const item = state?.[option.type];
            return (
              <button
                key={option.type}
                type="button"
                disabled={!item?.url}
                aria-label={`下载适用于 ${option.type === "apple" ? "Apple芯片" : "Intel处理器"} 的玻尔·科学空间客户端`}
                onClick={() => {
                  if (item?.url) triggerDownload(item.url);
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ASSET.download} alt="" width={18} height={18} />
                {option.label}
              </button>
            );
          })}
        </div>
      </div>
      <div className="platform-card" tabIndex={0}>
        <div className="platform-card-face">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ASSET.windows} alt="" width={64} height={64} />
          <strong>Windows</strong>
        </div>
        <div className="platform-card-actions">
          <button
            type="button"
            disabled={!state?.windows?.url}
            aria-label="下载玻尔·科学空间 Windows 客户端"
            onClick={() => {
              if (state?.windows?.url) triggerDownload(state.windows.url);
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ASSET.download} alt="" width={18} height={18} />
            Windows
          </button>
        </div>
      </div>
    </div>
  );
}
