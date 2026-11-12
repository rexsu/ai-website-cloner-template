"use client";

import { ASSET } from "./content";
import { useDownloadLinks } from "./useDownloadLinks";

export function Hero() {
  const { status, openDownload } = useDownloadLinks();
  const ready = status === "ready";

  return (
    <section className="bohr-hero">
      <div className="bohr-hero-intro">
        <div className="bohr-hero-copy">
          <h1 aria-label="接管体力活 启发科学家">
            <span aria-hidden="true">接管体力活</span>
            <span aria-hidden="true">启发科学家</span>
          </h1>
          <p>
            在玻尔科学空间里，与 AI 科学家一起完成调研、分析、计算和成果整理。你负责提出问题、判断方向，
            <br />
            AI 负责把任务跑起来。
          </p>
          <aside className="bohr-hero-benefits" aria-label="客户端福利">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ASSET.iconPhoton} alt="" width={26} height={26} />
            <p>
              <span>
                新用户注册送<strong>30天Plus</strong>体验会员
              </span>
              <span className="bohr-hero-benefits-divider">,</span>
              <wbr />
              <span>
                首次登录客户端再领<strong>10,000光子</strong>
              </span>
            </p>
          </aside>
          <div className="bohr-mobile-download-note" role="status">
            请在web端下载
          </div>
          <div className="bohr-hero-downloads" aria-label="下载玻尔·科学空间">
            <div className="bohr-hero-mac-download">
              <button
                type="button"
                className="bohr-hero-download-button"
                aria-label="下载 macOS 版"
                disabled={!ready}
                title={ready ? undefined : "下载信息加载中"}
                onClick={() => openDownload("apple")}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ASSET.iconApple} alt="" width={20} height={24} />
                下载 macOS 版
              </button>
              <div className="bohr-hero-mac-options">
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
            <button
              type="button"
              className="bohr-hero-download-button"
              aria-label="下载 Windows 版"
              disabled={!ready}
              title={ready ? undefined : "下载信息加载中"}
              onClick={() => openDownload("windows")}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ASSET.iconWindows} alt="" width={25} height={25} />
              下载 Windows 版
            </button>
          </div>
        </div>
      </div>
      <div className="bohr-demo-media bohr-demo-media-large">
        <video
          className="bohr-hero-video"
          aria-label="玻尔科学空间产品演示"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src={ASSET.heroVideo}
        />
      </div>
    </section>
  );
}
