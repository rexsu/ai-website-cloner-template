"use client";

import { useEffect, type ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    root.classList.add("bs-root");
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    return () => {
      root.classList.remove("bs-root");
      body.style.overflow = previousOverflow;
    };
  }, []);

  return children;
}
