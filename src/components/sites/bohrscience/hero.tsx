import { ASSETS, VIDEOS } from "./content";
import { HeroDownloads } from "./downloads";
import { bs } from "./styles";

export function Hero() {
  return (
    <section
      className={bs("hero")}
      style={{
        ["--hero-background-image" as string]: `url("${ASSETS.heroBackground}")`,
      }}
    >
      <div className={bs("hero-intro")}>
        <div className={bs("hero-copy")}>
          <h1 aria-label="接管体力活 启发科学家">
            <span aria-hidden="true">接管体力活</span>
            <span aria-hidden="true">启发科学家</span>
          </h1>
          <p>
            在玻尔科学空间里，与 AI 科学家一起完成调研、分析、计算和成果整理。你负责提出问题、判断方向，
            <br />
            AI 负责把任务跑起来。
          </p>
          <aside className={bs("hero-benefits")} aria-label="客户端福利">
            <img src={ASSETS.photon} alt="" width={26} height={26} />
            <p>
              <span>
                新用户注册送<strong>30天Plus</strong>体验会员
              </span>
              <span className={bs("hero-benefits-divider")}>,</span>
              <wbr />
              <span>
                首次登录客户端再领<strong>10,000光子</strong>
              </span>
            </p>
          </aside>
          <HeroDownloads />
        </div>
      </div>
      <div className={bs("demo-media", "demo-media-large")}>
        <video
          className={bs("hero-video")}
          aria-label="SciMaster 执行科学调研任务的产品界面"
          autoPlay
          controls
          loop
          muted
          playsInline
          preload="metadata"
          src={VIDEOS.hero}
        />
      </div>
    </section>
  );
}
