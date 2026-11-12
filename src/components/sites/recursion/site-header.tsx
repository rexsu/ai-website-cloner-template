"use client";

import { useEffect, useId, useState } from "react";
import { navItems, type NavItem } from "./content";

function isExternal(href: string) {
  return href.startsWith("http");
}

function Chevron() {
  return (
    <svg className="rx-chevron" viewBox="0 0 12 12" aria-hidden="true">
      <path
        d="M2.1 4.2 6 8.1 9.9 4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuItems({
  openKey,
  onToggle,
}: {
  openKey: string | null;
  onToggle: (key: string) => void;
}) {
  return (
    <>
      {navItems.map((item) => (
        <MenuItem key={item.label} item={item} openKey={openKey} onToggle={onToggle} />
      ))}
    </>
  );
}

function MenuItem({
  item,
  openKey,
  onToggle,
}: {
  item: NavItem;
  openKey: string | null;
  onToggle: (key: string) => void;
}) {
  const menuId = useId();

  if (item.links) {
    const open = openKey === item.label;
    return (
      <li className={`rx-menu-item${open ? " is-open" : ""}`}>
        <button
          type="button"
          className="rx-menu-toggle"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => onToggle(item.label)}
        >
          {item.label}
          <Chevron />
        </button>
        <ul className="rx-dropdown" id={menuId}>
          {item.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={link.current ? "is-current" : undefined}
                aria-current={link.current ? "page" : undefined}
                {...(isExternal(link.href) ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  if (!item.href) return null;

  return (
    <li className="rx-menu-item">
      <a
        className="rx-menu-link"
        href={item.href}
        {...(isExternal(item.href) ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {item.label}
      </a>
    </li>
  );
}

export function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openKey, setOpenKey] = useState<string | null>(null);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? y / scrollable : 0;
      setSolid(progress >= 0.1);
      if (y < 8) setHidden(false);
      else if (y > last + 6) setHidden(true);
      else if (y < last - 6) setHidden(false);
      last = y;
    };
    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true, capture: true });
    return () => document.removeEventListener("scroll", onScroll, { capture: true });
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setOpenKey(null);
      }
    };
    const onPointer = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      const nav = document.querySelector(".rx-nav");
      if (nav && !nav.contains(target)) {
        setOpenKey(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, []);

  const toggleKey = (key: string) => {
    setOpenKey((current) => (current === key ? null : key));
  };

  const className = [
    "rx-nav",
    solid ? "is-solid" : "",
    hidden && !menuOpen ? "is-hidden" : "",
    menuOpen ? "is-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={className} role="banner">
      <div className="rx-nav-bar">
        <div className="rx-nav-inner">
          <a className="rx-brand" href="https://recursion.com/" target="_blank" rel="noreferrer">
            <img
              className="rx-logo-black"
              src="/sites/recursion/logo-black.svg"
              alt=""
              width={200}
              height={64}
            />
            <img
              className="rx-logo-white"
              src="/sites/recursion/logo-white.svg"
              alt="Recursion"
              width={200}
              height={43}
            />
          </a>
          <ul className="rx-menu">
            <MenuItems openKey={openKey} onToggle={toggleKey} />
          </ul>
          <button
            type="button"
            className={`rx-burger${menuOpen ? " is-open" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((open) => !open);
              setOpenKey(null);
            }}
          >
            <svg viewBox="0 0 18 14" aria-hidden="true">
              <path
                d="M1 1h16M1 7h16M1 13h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
