import Image from "next/image";
import { ASSET, EXTERNAL } from "./constants";

export function Header() {
  return (
    <header className="bs-header">
      <div className="bs-header-brand" aria-label="玻尔·科学空间">
        <div className="bs-header-logo">
          <Image
            className="bs-header-logo-bg"
            src={ASSET.mark}
            alt=""
            width={28}
            height={28}
            unoptimized
            priority
          />
        </div>
        <Image
          className="bs-wordmark-bohr"
          src={ASSET.wordmarkBohr}
          alt="Bohr"
          width={42}
          height={19}
          unoptimized
          priority
        />
        <Image
          className="bs-wordmark-space"
          src={ASSET.wordmarkSpace}
          alt="Space"
          width={77}
          height={19}
          unoptimized
          priority
        />
        <span className="bs-header-beta">Beta</span>
      </div>
      <div className="bs-header-actions">
        <a
          className="bs-header-experience"
          href={EXTERNAL.home}
          target="_blank"
          rel="noopener noreferrer"
        >
          去体验
        </a>
        <a className="bs-header-download" href="#downloads">
          立即下载
        </a>
      </div>
    </header>
  );
}
