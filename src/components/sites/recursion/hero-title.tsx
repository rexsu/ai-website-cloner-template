"use client";

import { useEffect, useState } from "react";
import { heroTitle } from "./content";

export function HeroTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setCount(index);
      if (index >= heroTitle.length) window.clearInterval(timer);
    }, 40);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <h1 className="rx-hero-title" aria-label={heroTitle}>
      {heroTitle.split("").map((character, index) => (
        <span key={`${character}-${index}`} className={index < count ? "is-on" : undefined} aria-hidden="true">
          {character}
        </span>
      ))}
    </h1>
  );
}
