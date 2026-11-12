"use client";

import { useState, type JSX } from "react";
import { EXPERTS, type ExpertId } from "./content";
import {
  BioMasterIcon,
  MatMasterIcon,
  PharmMasterIcon,
} from "./ExpertIcons";

const ICONS: Record<ExpertId, () => JSX.Element> = {
  bio: BioMasterIcon,
  mat: PharmMasterIcon,
  pharm: MatMasterIcon,
};

export function ExpertShowcase() {
  const [active, setActive] = useState<ExpertId>("bio");
  const [loaded, setLoaded] = useState<Set<ExpertId>>(() => new Set(["bio"]));
  const current = EXPERTS.find((e) => e.id === active) ?? EXPERTS[0];

  function select(id: ExpertId) {
    setActive(id);
    setLoaded((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      return next;
    });
  }

  return (
    <section className="bohr-experts-section">
      <div className="bohr-section-heading">
        <h2>按研究任务，选择合适的 AI 学科专家</h2>
        <p>
          SciMaster 先理解你的目标。需要专业分析时，再由对应领域的 Master
          接手执行。
        </p>
      </div>
      <div className="bohr-expert-showcase">
        <div className="bohr-expert-selector">
          <div
            className="bohr-expert-tabs"
            role="tablist"
            aria-label="选择领域 AI 科学家"
          >
            {EXPERTS.map((expert) => {
              const Icon = ICONS[expert.id];
              return (
                <button
                  key={expert.id}
                  type="button"
                  role="tab"
                  aria-label={`${expert.name} · ${expert.field}`}
                  aria-selected={active === expert.id}
                  aria-controls={`expert-panel-${expert.id}`}
                  className="bohr-expert-tab"
                  onClick={() => select(expert.id)}
                >
                  <span
                    className="bohr-expert-icon"
                    data-expert={expert.id}
                    aria-hidden="true"
                  >
                    <Icon />
                  </span>
                  <span className="bohr-expert-name">
                    <strong>{expert.name}</strong>
                    <small>{expert.field}</small>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div
          className="bohr-expert-content"
          id={`expert-panel-${current.id}`}
          role="tabpanel"
          aria-label={current.name}
        >
          <div className="bohr-expert-content-heading">
            <strong>{current.title}</strong>
            <span>{current.description}</span>
          </div>
          <div className="bohr-expert-panel">
            {EXPERTS.map((expert) =>
              loaded.has(expert.id) ? (
                <video
                  key={expert.id}
                  className={
                    active === expert.id
                      ? "bohr-hero-video bohr-expert-video bohr-expert-video-active"
                      : "bohr-hero-video bohr-expert-video"
                  }
                  aria-label={`${expert.name} 产品演示`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload={expert.id === "bio" ? "auto" : "metadata"}
                  src={expert.video}
                />
              ) : null,
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
