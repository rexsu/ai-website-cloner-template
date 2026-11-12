import { ASSET, FOOTER_LINKS, LEGAL_LINKS } from "./data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-about">
            <h2 className="footer-about-title">关于玻尔</h2>
            <div className="footer-about-body">
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
          <nav className="footer-nav" aria-label="页脚导航">
            <div>
              <h3 className="footer-col-title">携手科研</h3>
              <ul className="footer-col-list">
                {FOOTER_LINKS.partner.map((link) => (
                  <li key={link.label}>
                    <a
                      className="footer-col-link"
                      href={link.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <span className="footer-col-link footer-popover-trigger">
                    合作咨询
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="footer-col-title">法律与合规</h3>
              <ul className="footer-col-list">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      className="footer-col-link"
                      href={link.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="footer-col-title">帮助与支持</h3>
              <ul className="footer-col-list">
                {FOOTER_LINKS.support.map((link) => (
                  <li key={link.label}>
                    <a
                      className="footer-col-link"
                      href={link.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <span className="footer-col-link footer-popover-trigger">
                    联系我们
                  </span>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="footer-rule" />
        <div className="footer-legal">
          <p className="footer-legal-copy">
            版权所有© 2022–2030 北京深势科技股份有限公司
          </p>
          {LEGAL_LINKS.map((link) => (
            <a
              key={link.label}
              className="footer-legal-link"
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {"beian" in link && link.beian ? (
                <span className="footer-beian-icon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ASSET.beian} alt="" width={11} height={12} />
                </span>
              ) : null}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
