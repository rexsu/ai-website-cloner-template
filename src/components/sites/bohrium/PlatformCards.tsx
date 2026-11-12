import Image from "next/image";

import { bohriumAssets } from "./assets";

export function PlatformCards() {
  return (
    <div className="bs-platform-cards" aria-label="选择操作系统下载">
      <div className="bs-platform-card">
        <span className="bs-platform-card-face" aria-hidden="true">
          <Image
            src={bohriumAssets.apple}
            alt=""
            width={44}
            height={52}
            unoptimized
          />
          <strong>macOS</strong>
        </span>
        <div className="bs-platform-card-actions">
          <button type="button" aria-label="下载适用于 Apple芯片 的玻尔·科学空间客户端">
            <Image
              src={bohriumAssets.download}
              alt=""
              width={16}
              height={16}
              unoptimized
            />
            Apple 芯片
          </button>
          <button type="button" aria-label="下载适用于 Intel处理器 的玻尔·科学空间客户端">
            <Image
              src={bohriumAssets.download}
              alt=""
              width={16}
              height={16}
              unoptimized
            />
            Intel 处理器
          </button>
        </div>
      </div>

      <div className="bs-platform-card">
        <span className="bs-platform-card-face" aria-hidden="true">
          <Image
            src={bohriumAssets.windows}
            alt=""
            width={58}
            height={58}
            unoptimized
          />
          <strong>Windows</strong>
        </span>
        <div className="bs-platform-card-actions">
          <button type="button" aria-label="下载玻尔·科学空间 Windows 客户端">
            <Image
              src={bohriumAssets.download}
              alt=""
              width={16}
              height={16}
              unoptimized
            />
            Windows 版
          </button>
        </div>
      </div>
    </div>
  );
}
