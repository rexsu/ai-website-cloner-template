import { FEATURES } from "./content";

function PointIcon() {
  return (
    <svg
      className="bohr-feature-point-icon"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="m5 3 5 5-5 5" />
    </svg>
  );
}

export function ResearchFeatures() {
  return (
    <section className="bohr-research-section">
      <div className="bohr-section-heading">
        <h2>
          从一个科研问题开始，
          <br />
          把调研、验证和成果整理连起来
        </h2>
        <p>你不必再在文献、数据、软件和计算环境之间反复切换。</p>
      </div>
      <div className="bohr-research-features">
        {FEATURES.map((feature) => (
          <section
            key={feature.label}
            className={
              feature.reversed
                ? "bohr-feature bohr-feature-reversed"
                : "bohr-feature"
            }
          >
            <div className="bohr-feature-copy">
              <p className="bohr-feature-index">
                <span>{feature.index}</span>
                {feature.label}
              </p>
              <h2>
                {feature.titleLines.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < feature.titleLines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </h2>
              <p className="bohr-feature-description">{feature.description}</p>
              <ul>
                {feature.points.map((point) => (
                  <li key={point}>
                    <PointIcon />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="bohr-feature-media">
              <figcaption className="bohr-feature-media-caption">
                {feature.caption}
              </figcaption>
              <div className="bohr-demo-media bohr-feature-video">
                <video
                  className="bohr-hero-video"
                  aria-label={`${feature.caption}内容演示`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  src={feature.video}
                />
              </div>
            </figure>
          </section>
        ))}
      </div>
    </section>
  );
}
