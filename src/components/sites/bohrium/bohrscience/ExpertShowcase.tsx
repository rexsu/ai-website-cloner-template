"use client";

import { useState } from "react";
import { DemoVideo } from "./DemoVideo";
import { EXPERTS } from "./data";
import {
  BioMasterIcon,
  MatMasterIcon,
  PharmMasterIcon,
} from "./ExpertIcons";

// Source bundle exports Mat/Pharm icon modules in swapped visual order; map by appearance.
const ICONS = {
  bio: BioMasterIcon,
  pharm: MatMasterIcon,
  mat: PharmMasterIcon,
} as const;

export function ExpertShowcase() {
  const [selected, setSelected] = useState<(typeof EXPERTS)[number]["id"]>(
    "bio",
  );
  const active = EXPERTS.find((item) => item.id === selected) ?? EXPERTS[0];

  return (
    <div className="expert-showcase">
      <div className="expert-selector">
        <div className="expert-tabs" role="tablist" aria-label="选择领域 AI 科学家">
          {EXPERTS.map((expert) => {
            const Icon = ICONS[expert.icon];
            const selectedTab = expert.id === selected;
            return (
              <button
                key={expert.id}
                type="button"
                role="tab"
                id={`expert-tab-${expert.id}`}
                className="expert-tab"
                aria-selected={selectedTab}
                aria-controls={`expert-panel-${expert.id}`}
                onClick={() => setSelected(expert.id)}
              >
                <span
                  className="expert-icon"
                  data-expert={expert.icon === "mat" ? "mat" : undefined}
                >
                  <Icon />
                </span>
                <span className="expert-name">
                  <strong>{expert.name}</strong>
                  <small>{expert.field}</small>
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="expert-content" role="tabpanel" aria-labelledby={`expert-tab-${active.id}`}>
        <div className="expert-content-heading">
          <strong>{active.title}</strong>
          <span>{active.description}</span>
        </div>
        <div className="expert-panel" id={`expert-panel-${active.id}`}>
          {EXPERTS.map((expert) => {
            const isActive = expert.id === selected;
            return (
              <div
                key={expert.id}
                className={
                  isActive ? "expert-video expert-video-active" : "expert-video"
                }
                aria-hidden={!isActive}
              >
                <DemoVideo
                  src={expert.videoSrc}
                  label={`${expert.name} · ${expert.title}`}
                  className="hero-video"
                  autoPlay={isActive}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
