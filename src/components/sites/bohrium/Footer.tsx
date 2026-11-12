import { ASSET, FOOTER_LINKS, LEGAL_LINKS } from "./content";

export function Footer() {
  return (
    <footer className="bohr-footer">
      <div className="bohr-footer-inner">
        <div className="bohr-footer-top">
          <div className="bohr-footer-about">
            <h2 className="bohr-footer-about-title">关于玻尔</h2>
            <div className="bohr-footer-about-body">
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
          <nav className="bohr-footer-nav" aria-label="页脚导航">
            <div>
              <h3 className="bohr-footer-col-title">携手科研</h3>
              <ul className="bohr-footer-col-list">
                {FOOTER_LINKS.partner.map((link) => (
                  <li key={link.label}>
                    <a
                      className="bohr-footer-col-link"
                      href={link.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    className="bohr-footer-col-link"
                    href="https://www.bohrium.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    合作咨询
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="bohr-footer-col-title">法律与合规</h3>
              <ul className="bohr-footer-col-list">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      className="bohr-footer-col-link"
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
              <h3 className="bohr-footer-col-title">帮助与支持</h3>
              <ul className="bohr-footer-col-list">
                {FOOTER_LINKS.help.map((link) => (
                  <li key={link.label}>
                    <a
                      className="bohr-footer-col-link"
                      href={link.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    className="bohr-footer-col-link"
                    href="https://www.bohrium.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    联系我们
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="bohr-footer-rule" />
        <div className="bohr-footer-legal">
          <p className="bohr-footer-legal-copy">
            版权所有© 2022–2030 北京深势科技股份有限公司
          </p>
          {LEGAL_LINKS.map((link) => (
            <a
              key={link.label}
              className="bohr-footer-legal-link"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"beian" in link && link.beian ? (
                <span className="bohr-footer-beian-icon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ASSET.iconBeian} alt="" width={11} height={12} />
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
