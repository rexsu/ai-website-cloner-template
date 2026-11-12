import { FEATURES } from "./constants";
import { FeaturePointIcon } from "./icons";

export function ResearchFeatures() {
  return (
    <section className="bs-research-section">
      <div className="bs-section-heading">
        <h2>
          从一个科研问题开始，
          <br />
          把调研、验证和成果整理连起来
        </h2>
        <p>你不必再在文献、数据、软件和计算环境之间反复切换。</p>
      </div>
      <div className="bs-research-features">
        {FEATURES.map((feature) => (
          <article
            key={feature.index}
            className={
              feature.reversed ? "bs-feature bs-feature-reversed" : "bs-feature"
            }
          >
            <div className="bs-feature-copy">
              <p className="bs-feature-index">
                <span>{feature.index}</span>
                {feature.label}
              </p>
              <h2>
                {feature.titleLines.map((line, index) => (
                  <span key={line}>
                    {line}
                    {index < feature.titleLines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h2>
              <p className="bs-feature-description">{feature.description}</p>
              <ul>
                {feature.points.map((point) => (
                  <li key={point}>
                    <FeaturePointIcon />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bs-feature-media">
              <p className="bs-feature-media-caption">{feature.caption}</p>
              <div className="bs-demo-media">
                <video
                  className="bs-feature-video bs-hero-video"
                  aria-label={feature.videoLabel}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  src={feature.video}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
