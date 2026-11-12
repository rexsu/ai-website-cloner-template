import Image from "next/image";
import { ASSET } from "./constants";

export function EnvironmentSection() {
  return (
    <section className="bs-environment-section">
      <div className="bs-section-heading">
        <h2>为什么能把科研任务真正做下去</h2>
        <p>
          文献、数据、模型、软件与算力已经准备好。SciMaster
          可以按你的目标调用它们，并把过程和结果留给你检查。
        </p>
      </div>
      <Image
        className="bs-environment-image"
        src={ASSET.environment}
        alt="科研工作流：输入研究问题，AI 科学家拆解、执行、检查并输出可检查结果，同时调用科学知识与数据、模型软件工具、计算环境与算力"
        width={4800}
        height={2780}
        unoptimized
      />
    </section>
  );
}
