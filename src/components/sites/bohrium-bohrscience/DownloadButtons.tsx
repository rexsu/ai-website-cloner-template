"use client";

import Image from "next/image";
import { ASSET } from "./constants";
import { useDownloads } from "./DownloadContext";

export function HeroDownloadButtons() {
  const { state, download } = useDownloads();
  const busy =
    state.apple.status === "loading" || state.windows.status === "loading";

  return (
    <div className="bs-hero-downloads">
      <div className="bs-hero-mac-download">
        <button
          type="button"
          className="bs-hero-download-button"
          disabled={busy}
          aria-haspopup="menu"
        >
          <Image src={ASSET.apple} alt="" width={22} height={26} unoptimized />
          下载 macOS 版
        </button>
        <div className="bs-hero-mac-options" role="menu">
          <button
            type="button"
            role="menuitem"
            disabled={state.apple.status !== "ready"}
            onClick={() => download("apple")}
          >
            <Image src={ASSET.apple} alt="" width={16} height={19} unoptimized />
            Apple 芯片
          </button>
          <button
            type="button"
            role="menuitem"
            disabled={state.intel.status !== "ready"}
            onClick={() => download("intel")}
          >
            <Image src={ASSET.apple} alt="" width={16} height={19} unoptimized />
            Intel 处理器
          </button>
        </div>
      </div>
      <button
        type="button"
        className="bs-hero-download-button"
        disabled={state.windows.status !== "ready"}
        onClick={() => download("windows")}
      >
        <Image src={ASSET.windows} alt="" width={24} height={24} unoptimized />
        下载 Windows 版
      </button>
    </div>
  );
}

export function PlatformCards() {
  const { state, download } = useDownloads();

  return (
    <div className="bs-platform-cards">
      <div className="bs-platform-card" tabIndex={0}>
        <div className="bs-platform-card-face">
          <Image src={ASSET.apple} alt="" width={64} height={64} unoptimized />
          <strong>macOS</strong>
        </div>
        <div className="bs-platform-card-actions">
          <button
            type="button"
            disabled={state.apple.status !== "ready"}
            onClick={() => download("apple")}
          >
            <Image
              src={ASSET.download}
              alt=""
              width={18}
              height={18}
              unoptimized
            />
            Apple 芯片
          </button>
          <button
            type="button"
            disabled={state.intel.status !== "ready"}
            onClick={() => download("intel")}
          >
            <Image
              src={ASSET.download}
              alt=""
              width={18}
              height={18}
              unoptimized
            />
            Intel 处理器
          </button>
        </div>
      </div>
      <div className="bs-platform-card" tabIndex={0}>
        <div className="bs-platform-card-face">
          <Image
            src={ASSET.windows}
            alt=""
            width={64}
            height={64}
            unoptimized
          />
          <strong>Windows</strong>
        </div>
        <div className="bs-platform-card-actions">
          <button
            type="button"
            disabled={state.windows.status !== "ready"}
            onClick={() => download("windows")}
          >
            <Image
              src={ASSET.download}
              alt=""
              width={18}
              height={18}
              unoptimized
            />
            Windows 版
          </button>
        </div>
      </div>
    </div>
  );
}
