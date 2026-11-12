import { ChapterPlayer } from "./chapter-player";
import {
  diagramAlt,
  loopBody,
  loopHeading,
  platformFollow,
  platformHeading,
  platformLead,
} from "./content";
import { HeroTitle } from "./hero-title";
import "./recursion.css";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function PlatformPage() {
  return (
    <div className="rx">
      <SiteHeader />
      <main>
        <section className="rx-hero" aria-label="Recursion OS">
          <video
            className="rx-hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/sites/recursion/hero-poster.jpg"
          >
            <source src="/sites/recursion/hero.mp4" type="video/mp4" />
          </video>
          <div className="rx-hero-shade" />
          <div className="rx-hero-inner">
            <HeroTitle />
          </div>
        </section>

        <section className="rx-grey">
          <div className="rx-container">
            <div className="rx-narrow">
              <h2 className="rx-heading">{loopHeading}</h2>
              <p className="rx-copy">{loopBody}</p>
            </div>
          </div>
        </section>

        <ChapterPlayer />

        <section className="rx-band" id="data">
          <div className="rx-container">
            <div className="rx-narrow">
              <h2 className="rx-heading">{platformHeading}</h2>
              <p className="rx-copy">
                {platformLead}
                <br />
                <br />
                {platformFollow}
              </p>
              <a className="rx-models" href="https://www.rxrx.ai/" target="_blank" rel="noreferrer">
                Our data & models
              </a>
            </div>
            <div className="rx-diagram">
              <img src="/sites/recursion/platform-diagram.png" alt={diagramAlt} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
