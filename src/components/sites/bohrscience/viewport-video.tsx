"use client";

import { useEffect, useRef } from "react";

type ViewportVideoProps = {
  src: string;
  label: string;
  className?: string;
  active?: boolean;
  preload?: "none" | "metadata" | "auto";
  onCanPlay?: () => void;
};

export function ViewportVideo({
  src,
  label,
  className,
  active = true,
  preload = "metadata",
  onCanPlay,
}: ViewportVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || !("IntersectionObserver" in window)) return;
    if (!active) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.15 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [active, src]);

  return (
    <video
      ref={ref}
      className={className}
      aria-label={label}
      loop
      muted
      playsInline
      preload={preload}
      src={src}
      onCanPlay={onCanPlay}
    />
  );
}
