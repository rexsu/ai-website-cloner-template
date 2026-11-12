import { DemoVideo } from "./DemoVideo";
import { FEATURES } from "./data";

function PointIcon() {
  return (
    <svg
      className="feature-point-icon"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="m5 3 5 5-5 5" />
    </svg>
  );
}

export function FeatureSections() {
  return (
    <>
      {FEATURES.map((feature) => (
        <section
          key={feature.id}
          className={
            feature.reversed ? "feature feature-reversed" : "feature"
          }
        >
          <div className="feature-copy">
            <p className="feature-index">
              <span>{feature.index}</span>
              {feature.label}
            </p>
            <h2>
              {feature.title.map((part, index) => {
                const shouldBreak = feature.titleBreakAfter === index;
                return (
                  <span key={`${feature.id}-${index}`}>
                    {part}
                    {shouldBreak ? <br /> : null}
                  </span>
                );
              })}
            </h2>
            <p className="feature-description">{feature.description}</p>
            <ul>
              {feature.points.map((point) => (
                <li key={point}>
                  <PointIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <figure className="feature-media">
            <figcaption className="feature-media-caption">
              {feature.caption}
            </figcaption>
            <div className="demo-media feature-video">
              <DemoVideo src={feature.video} label={feature.videoLabel} />
            </div>
          </figure>
        </section>
      ))}
    </>
  );
}
