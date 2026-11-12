"use client";

import { ASSETS, LINKS } from "./content";
import { bs } from "./styles";

export function Header() {
  return (
    <header className={bs("header")}>
      <div className={bs("header-brand")}>
        <img
          className={bs("header-logo")}
          src={ASSETS.logo}
          alt=""
          width={824}
          height={824}
          aria-hidden="true"
        />
        <img
          className={bs("wordmark-bohr")}
          src={ASSETS.wordmarkBohr}
          alt=""
          width={41.756}
          height={19.144}
        />
        <img
          className={bs("wordmark-space")}
          src={ASSETS.wordmarkSpace}
          alt=""
          width={77.421}
          height={18.696}
        />
        <span className={bs("header-beta")}>Beta</span>
      </div>
      <div className={bs("header-actions")}>
        <a className={bs("header-experience")} href={LINKS.experience}>
          去体验
        </a>
        <a
          className={bs("header-download")}
          href="#downloads"
          onClick={(event) => {
            const section = document.getElementById("downloads");
            if (!section) return;
            event.preventDefault();
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          立即下载
        </a>
      </div>
    </header>
  );
}
