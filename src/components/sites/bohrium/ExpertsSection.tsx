"use client";

import { useState } from "react";

import { AutoPlayVideo } from "./AutoPlayVideo";
import { bohriumAssets } from "./assets";

type ExpertId = "bio" | "pharm" | "mat";

const experts: {
  id: ExpertId;
  name: string;
  field: string;
  title: string;
  description: string;
  icon: string;
  video: string;
  expertAttr: string;
}[] = [
  {
    id: "bio",
    name: "BioMaster",
    field: "生物医学研究",
    title: "论文分析复现",
    description:
      "获取数据、运行作者代码并核对结果，也支持单细胞分析和基因变异解读。",
    icon: bohriumAssets.experts.bio,
    video: bohriumAssets.videos.bio,
    expertAttr: "bio",
  },
  {
    id: "pharm",
    name: "PharmMaster",
    field: "药物研发",
    title: "ITK 靶点抑制剂研发",
    description: "从靶点调研和专利分析，到候选分子设计、活性与成药性评估。",
    icon: bohriumAssets.experts.pharm,
    video: bohriumAssets.videos.pharm,
    expertAttr: "mat",
  },
  {
    id: "mat",
    name: "MatMaster",
    field: "材料与化学",
    title: "高温介电薄膜设计",
    description:
      "根据性能和材料约束，完成候选设计与计算模拟，找到值得优先验证的方向。",
    icon: bohriumAssets.experts.mat,
    video: bohriumAssets.videos.mat,
    expertAttr: "pharm",
  },
];

export function ExpertsSection() {
  const [active, setActive] = useState<ExpertId>("bio");
  const current = experts.find((expert) => expert.id === active) ?? experts[0];

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
          <div
            className="bs-expert-tabs"
            role="tablist"
            aria-label="选择领域 AI 科学家"
          >
            {experts.map((expert) => (
              <button
                key={expert.id}
                type="button"
                role="tab"
                aria-label={`${expert.name} · ${expert.field}`}
                aria-selected={active === expert.id}
                aria-controls={`expert-panel-${expert.id}`}
                className="bs-expert-tab"
                onClick={() => setActive(expert.id)}
              >
                <span
                  className="bs-expert-icon"
                  data-expert={expert.expertAttr}
                  aria-hidden="true"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={expert.icon} alt="" width={32} height={32} />
                </span>
                <span className="bs-expert-name">
                  <strong>{expert.name}</strong>
                  <small>{expert.field}</small>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div
          id={`expert-panel-${current.id}`}
          className="bs-expert-content"
          role="tabpanel"
          aria-label={current.name}
        >
          <div className="bs-expert-content-heading">
            <strong>{current.title}</strong>
            <span>{current.description}</span>
          </div>
          <div className="bs-expert-panel">
            {experts.map((expert) => (
              <AutoPlayVideo
                key={expert.id}
                className={`bs-hero-video bs-expert-video${
                  active === expert.id ? " bs-expert-video-active" : ""
                }`}
                label={`${expert.name} 产品演示`}
                src={expert.video}
                preload={active === expert.id ? "auto" : "metadata"}
                active={active === expert.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
