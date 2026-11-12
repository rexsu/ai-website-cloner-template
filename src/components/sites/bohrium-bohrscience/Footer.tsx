"use client";

import Image from "next/image";
import { useState } from "react";
import { ASSET, EXTERNAL } from "./constants";
import { CopyIcon } from "./icons";

function ContactPopover({
  label,
  variant,
}: {
  label: string;
  variant: "inquiry" | "contact";
}) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EXTERNAL.supportEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="bs-footer-popover">
      <button type="button" className="bs-footer-popover-trigger">
        {label}
      </button>
      <div
        className={
          variant === "contact"
            ? "bs-footer-popover-panel bs-footer-contact-popover-content"
            : "bs-footer-popover-panel"
        }
        role="dialog"
      >
        <div
          className={
            variant === "contact"
              ? "bs-footer-popover-content bs-footer-contact-popover-content"
              : "bs-footer-popover-content"
          }
        >
          {variant === "inquiry" ? (
            <>
              <div>
                <p className="bs-footer-popover-title">合作咨询</p>
                <p className="bs-footer-popover-description">
                  使用微信移动端扫码联系我们
                </p>
              </div>
              <div className="bs-footer-contact-qr-wrap">
                <Image
                  className="bs-footer-popover-qr"
                  src={ASSET.og}
                  alt="合作咨询二维码占位"
                  width={128}
                  height={128}
                  unoptimized
                />
              </div>
            </>
          ) : (
            <div>
              <div className="bs-footer-contact-section">
                <p className="bs-footer-popover-title">联系我们</p>
                <p className="bs-footer-contact-description">
                  工作日 10:00–19:00 在线支持
                </p>
              </div>
              <div className="bs-footer-contact-section">
                <p className="bs-footer-popover-title bs-footer-contact-email-title">
                  邮箱
                </p>
                <div className="bs-footer-contact-email">
                  <span>{EXTERNAL.supportEmail}</span>
                  <button
                    type="button"
                    className="bs-footer-copy-button"
                    aria-label="复制联系邮箱"
                    onClick={() => void copyEmail()}
                  >
                    <CopyIcon />
                  </button>
                  {copied ? <span>已复制</span> : null}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bs-footer">
      <div className="bs-footer-inner">
        <div className="bs-footer-top">
          <div className="bs-footer-about">
            <h2 className="bs-footer-about-title">关于玻尔</h2>
            <div className="bs-footer-about-body">
              <p>
                玻尔（Bohrium）是专为全球科研人员打造的专业科研平台。基于真实权威文献和可追溯引用，玻尔致力于构建面向
                AI
                时代的全新科研工作流，让知识的获取、理解、产出与沉淀变得更高效、更可信。
              </p>
              <p>
                我们相信，AI
                时代的科研不应该只是回答问题，而是能真正参与科研任务，我们希望，玻尔能够助力千千万万的科研人员更快走完从知识获取到学术产出的关键路径。
              </p>
            </div>
          </div>
          <nav className="bs-footer-nav" aria-label="页脚导航">
            <div>
              <h3 className="bs-footer-col-title">携手科研</h3>
              <ul className="bs-footer-col-list">
                <li>
                  <a
                    className="bs-footer-col-link"
                    href={EXTERNAL.edu}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EDU科研加速计划
                  </a>
                </li>
                <li>
                  <ContactPopover label="合作咨询" variant="inquiry" />
                </li>
              </ul>
            </div>
            <div>
              <h3 className="bs-footer-col-title">法律与合规</h3>
              <ul className="bs-footer-col-list">
                <li>
                  <a
                    className="bs-footer-col-link"
                    href={EXTERNAL.privacy}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    隐私政策
                  </a>
                </li>
                <li>
                  <a
                    className="bs-footer-col-link"
                    href={EXTERNAL.terms}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    服务协议
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="bs-footer-col-title">帮助与支持</h3>
              <ul className="bs-footer-col-list">
                <li>
                  <a
                    className="bs-footer-col-link"
                    href={EXTERNAL.help}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    帮助中心
                  </a>
                </li>
                <li>
                  <a
                    className="bs-footer-col-link"
                    href={EXTERNAL.changelog}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    更新日志
                  </a>
                </li>
                <li>
                  <a
                    className="bs-footer-col-link"
                    href={EXTERNAL.community}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    用户共建
                  </a>
                </li>
                <li>
                  <ContactPopover label="联系我们" variant="contact" />
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="bs-footer-rule" />
        <div className="bs-footer-legal">
          <p className="bs-footer-legal-copy">
            版权所有© 2022–2030 北京深势科技股份有限公司
          </p>
          <a
            className="bs-footer-legal-link"
            href={EXTERNAL.beian1}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bs-footer-beian-icon">
              <Image
                src={ASSET.beian}
                alt=""
                width={11}
                height={12}
                unoptimized
              />
            </span>
            京公网安备11010802045318号
          </a>
          <a
            className="bs-footer-legal-link"
            href={EXTERNAL.beian2}
            target="_blank"
            rel="noopener noreferrer"
          >
            京公网安备11010802045239号
          </a>
          <a
            className="bs-footer-legal-link"
            href={EXTERNAL.miit}
            target="_blank"
            rel="noopener noreferrer"
          >
            京ICP备20010051号–16
          </a>
          <a
            className="bs-footer-legal-link"
            href={EXTERNAL.miit}
            target="_blank"
            rel="noopener noreferrer"
          >
            京ICP备20010051号–14
          </a>
          <a
            className="bs-footer-legal-link"
            href={EXTERNAL.miit}
            target="_blank"
            rel="noopener noreferrer"
          >
            京ICP备20010051号–7
          </a>
          <a
            className="bs-footer-legal-link"
            href={EXTERNAL.miit}
            target="_blank"
            rel="noopener noreferrer"
          >
            津ICP备2023003620号–2
          </a>
          <a
            className="bs-footer-legal-link"
            href={EXTERNAL.miit}
            target="_blank"
            rel="noopener noreferrer"
          >
            京ICP备20010051号–15
          </a>
          <a
            className="bs-footer-legal-link"
            href={EXTERNAL.miit}
            target="_blank"
            rel="noopener noreferrer"
          >
            津ICP备2023003620号–1
          </a>
          <a
            className="bs-footer-legal-link"
            href={EXTERNAL.icpLicense}
            target="_blank"
            rel="noopener noreferrer"
          >
            增值电信业务经营许可证合字B2–20210408
          </a>
          <span>网信算备110108025106801240015号</span>
          <a
            className="bs-footer-legal-link"
            href={ASSET.businessLicense}
            target="_blank"
            rel="noopener noreferrer"
          >
            营业执照
          </a>
        </div>
      </div>
    </footer>
  );
}
