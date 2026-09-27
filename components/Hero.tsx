import type { Dictionary } from "@/content/en";
import { person } from "@/content/site";
import Printer from "./Printer";
import Shot from "./Shot";
import { ArrowRight, Download } from "./Icons";

/**
 * The thesis, acted out: "The product works." is struck through in red pen,
 * and only "The customer is satisfied." gets the tick. All motion is CSS
 * (see .struck / .tick in globals.css); reduced motion shows the end state.
 */
export default function Hero({ t }: { t: Dictionary }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 id="hero-title" className="hero-title">
            <span>
              <s className="struck">
                {t.hero.struck}
                <svg viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">
                  <path pathLength={1} d="M1 12.5C18 9.5 38 13.8 55 10.8S86 9 99 11.4" />
                </svg>
              </s>
            </span>
            <span className="hero-line-2">
              {t.hero.headline}{" "}
              <span style={{ whiteSpace: "nowrap" }}>
                <em className="emph">{t.hero.emphasis}</em>
                <svg className="tick" viewBox="0 0 24 24" aria-hidden="true">
                  <path pathLength={1} d="M3 13.5l6 6L21.5 5" />
                </svg>
              </span>
            </span>
          </h1>
          <p className="hero-tagline">{t.hero.tagline}</p>
          <div className="hero-after">
            <div className="hero-byline">
              <Shot src="me" alt={t.hero.photoAlt} sizes="5rem" className="hero-photo" eager />
              <p className="hero-lede">{t.hero.lede}</p>
            </div>
            <div className="hero-ctas">
              <a href="#work" className="btn btn-ink">
                {t.hero.ctaPrimary}
                <ArrowRight className="flip-rtl" />
              </a>
              <a href={person.cv} className="btn btn-line" download>
                {t.hero.ctaSecondary}
                <Download />
              </a>
            </div>
          </div>
        </div>
        <Printer t={t} />
      </div>

      <div className="wrap ticker" style={{ marginTop: "clamp(3.5rem, 7vw, 5.5rem)" }}>
        <span className="ticker-label">{t.ticker.label}</span>
        <div className="ticker-track">
          <div className="ticker-row">
            <ul>
              {t.ticker.names.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <ul aria-hidden="true">
              {t.ticker.names.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
