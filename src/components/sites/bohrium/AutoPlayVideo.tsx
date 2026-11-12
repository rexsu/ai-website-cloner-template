"use client";

import { useEffect, useRef } from "react";

type AutoPlayVideoProps = {
  src: string;
  className?: string;
  label: string;
  controls?: boolean;
  preload?: "none" | "metadata" | "auto";
  active?: boolean;
};

export function AutoPlayVideo({
  src,
  className,
  label,
  controls = false,
  preload = "metadata",
  active = true,
}: AutoPlayVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!active) {
      el.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          void el.play().catch(() => undefined);
        } else {
          el.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [active, src]);

  return (
    <video
      ref={ref}
      className={className}
      aria-label={label}
      src={src}
      muted
      loop
      playsInline
      controls={controls}
      preload={preload}
    />
  );
}
