"use client";

import { useEffect, useRef } from "react";

type DemoVideoProps = {
  src: string;
  label: string;
  className?: string;
  autoPlay?: boolean;
  poster?: string;
};

export function DemoVideo({
  src,
  label,
  className = "hero-video",
  autoPlay = true,
  poster,
}: DemoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (!autoPlay) {
      video.pause();
      return;
    }
    const play = async () => {
      try {
        video.currentTime = 0;
        await video.play();
      } catch {
        // Autoplay may be blocked; keep muted loop poster state.
      }
    };
    void play();
  }, [autoPlay, src]);

  return (
    <video
      ref={ref}
      className={className}
      aria-label={label}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      autoPlay={autoPlay}
      preload={autoPlay ? "auto" : "metadata"}
    />
  );
}
