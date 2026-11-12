"use client";

import { useState, type CSSProperties } from "react";
import { chapters, youtubeId } from "./content";

export function ChapterPlayer() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const chapter = chapters[active];
  const src = `https://www.youtube.com/embed/${youtubeId}?start=${chapter.start}&rel=0&playsinline=1${autoplay ? "&autoplay=1" : ""}`;

  return (
    <div className="rx-player">
      <div className="rx-stage">
        <div className="rx-frame">
          <iframe
            key={src}
            src={src}
            title={chapter.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <div className="rx-chapters">
        <p className="rx-chapters-label">Chapters:</p>
        {chapters.map((item, index) => {
          const last = index === chapters.length - 1;
          return (
            <button
              key={item.title}
              type="button"
              className={`rx-chapter${index === active ? " is-current" : ""}`}
              style={
                {
                  "--accent": item.color,
                  "--icon": `url("${item.icon}")`,
                } as CSSProperties
              }
              aria-current={index === active ? "true" : undefined}
              onClick={() => {
                setActive(index);
                setAutoplay(true);
              }}
            >
              <span className="rx-chapter-row">
                <span className="rx-chapter-icon" />
                <span className="rx-chapter-label">{item.title}</span>
              </span>
              {last ? null : (
                <span className="rx-stem" aria-hidden="true">
                  <i />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
