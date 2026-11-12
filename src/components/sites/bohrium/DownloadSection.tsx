"use client";

import { ASSET } from "./content";
import { useDownloadLinks } from "./useDownloadLinks";

export function DownloadSection() {
  const { status, openDownload } = useDownloadLinks();
  const ready = status === "ready";

  return (
    <section id="downloads" className="bohr-download-section">
      <h2>从一个真实科研问题开始</h2>
      <div className="bohr-platform-cards" aria-label="选择操作系统下载">
        <div className="bohr-platform-card">
          <span className="bohr-platform-card-face" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ASSET.iconApple} alt="" width={64} height={64} />
            <strong>macOS</strong>
          </span>
          <div className="bohr-platform-card-actions">
            <button
              type="button"
              aria-label="下载适用于 Apple 芯片 的玻尔·科学空间客户端"
              disabled={!ready}
              onClick={() => openDownload("apple")}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ASSET.iconDownload} alt="" width={16} height={16} />
              Apple 芯片
            </button>
            <button
              type="button"
              aria-label="下载适用于 Intel处理器 的玻尔·科学空间客户端"
              disabled={!ready}
              onClick={() => openDownload("intel")}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ASSET.iconDownload} alt="" width={16} height={16} />
              Intel 处理器
            </button>
          </div>
        </div>
        <div className="bohr-platform-card">
          <span className="bohr-platform-card-face" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ASSET.iconWindows} alt="" width={64} height={64} />
            <strong>Windows</strong>
          </span>
          <div className="bohr-platform-card-actions">
            <button
              type="button"
              aria-label="下载 Windows 版"
              disabled={!ready}
              onClick={() => openDownload("windows")}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ASSET.iconDownload} alt="" width={16} height={16} />
              Windows 版
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
