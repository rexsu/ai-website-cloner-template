import { ASSET } from "./data";

export function Header() {
  return (
    <header className="header">
      <div className="header-brand" aria-label="玻尔·科学空间">
        <div className="header-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="header-logo-mark"
            src={ASSET.mark}
            alt=""
            width={28}
            height={28}
          />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="wordmark-bohr"
          src={ASSET.wordmarkBohr}
          alt="玻尔"
          width={42}
          height={19}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="wordmark-space"
          src={ASSET.wordmarkSpace}
          alt="科学空间"
          width={77}
          height={19}
        />
        <span className="header-beta">Beta</span>
      </div>
      <div className="header-actions">
        <a
          className="header-experience"
          href="https://www.bohrium.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          去体验
        </a>
        <a className="header-download" href="#downloads">
          立即下载
        </a>
      </div>
    </header>
  );
}
