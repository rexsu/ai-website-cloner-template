"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { EXPERTS } from "./constants";

export function ExpertShowcase() {
  const [activeId, setActiveId] = useState<(typeof EXPERTS)[number]["id"]>(
    "bio",
  );
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const active = EXPERTS.find((expert) => expert.id === activeId) ?? EXPERTS[0];

  useEffect(() => {
    for (const expert of EXPERTS) {
      const video = videoRefs.current[expert.id];
      if (!video) continue;
      if (expert.id === activeId) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    }
  }, [activeId]);

  return (
    <section className="bs-experts-section">
      <div className="bs-section-heading">
        <h2>按研究任务，选择合适的 AI 学科专家</h2>
        <p>
          SciMaster 先理解你的目标。需要专业分析时，再由对应领域的 Master
          接手执行。
        </p>
      </div>
      <div className="bs-expert-showcase">
        <div className="bs-expert-selector">
          <div className="bs-expert-tabs" role="tablist" aria-label="学科专家">
            {EXPERTS.map((expert) => {
              const selected = expert.id === activeId;
              return (
                <button
                  key={expert.id}
                  type="button"
                  role="tab"
                  className="bs-expert-tab"
                  aria-selected={selected}
                  onClick={() => setActiveId(expert.id)}
                >
                  <span
                    className="bs-expert-icon"
                    data-expert={expert.expertAttr}
                  >
                    <Image
                      src={expert.icon}
                      alt=""
                      width={32}
                      height={32}
                      unoptimized
                    />
                  </span>
                  <span className="bs-expert-name">
                    <strong>{expert.name}</strong>
                    <small>{expert.field}</small>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="bs-expert-content">
          <div className="bs-expert-content-heading">
            <strong>{active.title}</strong>
            <span>{active.description}</span>
          </div>
          <div className="bs-expert-panel">
            {EXPERTS.map((expert) => (
              <video
                key={expert.id}
                ref={(node) => {
                  videoRefs.current[expert.id] = node;
                }}
                className={
                  expert.id === activeId
                    ? "bs-expert-video bs-expert-video-active bs-hero-video"
                    : "bs-expert-video bs-hero-video"
                }
                aria-hidden={expert.id !== activeId}
                autoPlay={expert.id === activeId}
                loop
                muted
                playsInline
                preload="metadata"
                src={expert.video}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
