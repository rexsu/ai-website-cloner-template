import { socialLinks, sourcePath } from "./content";

function external(href: string) {
  return href.startsWith("http") ? { target: "_blank" as const, rel: "noreferrer" } : {};
}

export function SiteFooter() {
  return (
    <footer className="rx-footer">
      <div className="rx-footer-inner">
        <div className="rx-footer-grid">
          <div>
            <div className="rx-footer-brand">
              <h2 className="rx-footer-mark">
                Decoding biology to radically improve lives.
                <span className="rx-reg">®</span>
              </h2>
              <a className="rx-biohive" href="https://www.biohive.com" target="_blank" rel="noreferrer">
                <img src="/sites/recursion/biohive.png" alt="" width={133} height={28} />
                <span className="rx-muted">
                  Proud founding member of BioHive, the fastest growing life sciences community in the nation
                </span>
              </a>
            </div>
          </div>
          <div>
            <div className="rx-footer-col">
              <h3 className="rx-footer-title">Get In Touch</h3>
              <p className="rx-address">
                41 S Rio Grande Street
                <br />
                Salt Lake City, UT 84101
              </p>
              <p className="rx-phone">
                phone: <a href="tel:(385)269-0203">(385) 269-0203</a>
              </p>
              <p className="rx-email">
                <a href="mailto:info@recursion.com">info@recursion.com</a>
              </p>
            </div>
          </div>
          <div>
            <div className="rx-footer-col">
              <div className="rx-involved">
                <h3 className="rx-footer-title v2">Get Involved</h3>
                <p className="rx-footer-links">
                  <a href={sourcePath("/careers")} {...external(sourcePath("/careers"))}>
                    Careers
                  </a>
                </p>
                <p className="rx-footer-links">
                  <a href="https://ir.recursion.com" {...external("https://ir.recursion.com")}>
                    Investor Relations
                  </a>
                </p>
                <p className="rx-footer-links">
                  <a href={sourcePath("/media-kit")} {...external(sourcePath("/media-kit"))}>
                    Media Kit
                  </a>
                </p>
                <p className="rx-footer-links">
                  <a href={sourcePath("/faq")} {...external(sourcePath("/faq"))}>
                    FAQ
                  </a>
                </p>
              </div>
              <h3 className="rx-footer-title v2">Policies</h3>
              <p className="rx-footer-links">
                <a href={sourcePath("/terms-of-use")} {...external(sourcePath("/terms-of-use"))}>
                  Website Terms of Use
                </a>
              </p>
              <p className="rx-footer-links">
                <a href={sourcePath("/privacy-notice")} {...external(sourcePath("/privacy-notice"))}>
                  Privacy Policy
                </a>
              </p>
              <p className="rx-footer-links">
                <a
                  href={sourcePath("/vendor-expectations-and-resources")}
                  {...external(sourcePath("/vendor-expectations-and-resources"))}
                >
                  Vendor Expectations Manual & Resources
                </a>
              </p>
              <p className="rx-footer-links">
                <a href={sourcePath("/accessibility")} {...external(sourcePath("/accessibility"))}>
                  Accessibility
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="rx-footer-title">Connect</h3>
            {socialLinks.map((link) => (
              <a key={link.label} className="rx-social" href={link.href} {...external(link.href)}>
                <img src={link.icon} alt="" width={17} height={17} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
        <p className="rx-copywrite">© 2026 Recursion. All rights reserved.</p>
      </div>
    </footer>
  );
}
