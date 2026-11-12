"use client";

import { useEffect, useId, useRef, useState } from "react";

export function FooterContact() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <li ref={rootRef} style={{ position: "relative" }}>
      <button
        type="button"
        className="bs-footer-popover-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        联系我们
      </button>
      {open ? (
        <div
          id={panelId}
          className="bs-footer-popover-content bs-footer-contact-popover-content"
          role="dialog"
          aria-label="联系我们"
        >
          <div className="bs-footer-contact-section">
            <p className="bs-footer-popover-title bs-footer-contact-email-title">
              邮箱
            </p>
            <div className="bs-footer-contact-email">
              <span>service@dp.tech</span>
              <button
                type="button"
                className="bs-footer-copy-button"
                aria-label="复制邮箱"
                onClick={() => {
                  void navigator.clipboard.writeText("service@dp.tech");
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <rect
                    x="4.5"
                    y="4.5"
                    width="7"
                    height="7"
                    rx="1.2"
                    fill="none"
                    stroke="currentColor"
                  />
                  <rect
                    x="2.5"
                    y="2.5"
                    width="7"
                    height="7"
                    rx="1.2"
                    fill="none"
                    stroke="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
          <p className="bs-footer-contact-description">工作日 10:00–19:00</p>
        </div>
      ) : null}
    </li>
  );
}
