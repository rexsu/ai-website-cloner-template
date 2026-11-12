import { ASSET } from "./content";

export function Header() {
  return (
    <header className="bohr-header">
      <div className="bohr-header-brand" aria-label="玻尔·科学空间">
        <div className="bohr-header-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={ASSET.logoMark}
            alt=""
            width={28}
            height={28}
            style={{ borderRadius: 6, display: "block" }}
          />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="bohr-wordmark-bohr"
          src={ASSET.wordmarkBohr}
          alt=""
          width={42}
          height={19}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="bohr-wordmark-space"
          src={ASSET.wordmarkSpace}
          alt=""
          width={77}
          height={19}
        />
        <span className="bohr-header-beta">Beta</span>
      </div>
      <div className="bohr-header-actions">
        <a
          className="bohr-header-experience"
          href="https://www.bohrium.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          去体验
        </a>
        <a className="bohr-header-download" href="#downloads">
          立即下载
        </a>
      </div>
    </header>
  );
}
