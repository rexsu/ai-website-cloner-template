import Image from "next/image";
import type { CSSProperties } from "react";
import { ASSET } from "./constants";
import { HeroDownloadButtons } from "./DownloadButtons";

export function Hero() {
  const heroStyle = {
    ["--hero-background-image"]: `url("${ASSET.heroBackground}")`,
  } as CSSProperties;

  return (
    <section className="bs-hero" style={heroStyle}>
      <div className="bs-hero-intro">
        <div className="bs-hero-copy">
          <h1>
            <span>接管体力活</span>
            <span>启发科学家</span>
          </h1>
          <p>
            在玻尔科学空间里，与 AI 科学家一起完成调研、分析、计算和成果整理。你负责提出问题、判断方向，
            <br />
            AI 负责把任务跑起来。
          </p>
          <div className="bs-hero-benefits">
            <Image
              src={ASSET.photon}
              alt=""
              width={26}
              height={26}
              unoptimized
            />
            <p>
              <span>
                新用户注册送<strong>30天Plus</strong>体验会员
                <span className="bs-hero-benefits-divider">，</span>
              </span>
              <wbr />
              <span>
                首次登录客户端再领<strong>10,000光子</strong>
              </span>
            </p>
          </div>
          <HeroDownloadButtons />
          <div className="bs-mobile-download-note">请在web端下载</div>
        </div>
      </div>
      <div className="bs-demo-media bs-demo-media-large">
        <video
          className="bs-hero-video"
          aria-label="SciMaster 执行科学调研任务的产品界面"
          autoPlay
          controls
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
