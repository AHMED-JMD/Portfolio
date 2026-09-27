import type { CSSProperties } from "react";
import type { Dictionary } from "@/content/en";
import { brands } from "@/content/site";
import type { Project } from "@/content/types";
import { BrowserFrame, PhoneFrame } from "./Frames";
import { ArrowUpRight, ChevronDown } from "./Icons";
import Player from "./Player";
import Shot from "./Shot";

/**
 * The full story of one project, as a work order: who the customer was, what
 * they really needed, what I decided for them, and what came of it. The stage
 * shows the product in the client's own colours — desktop + phone, or two
 * frames side by side when the project has two customers.
 *
 * It is the panel behind a card's "More detail" button: hidden until opened,
 * one at a time (SiteScript). `html.no-js` shows them all.
 */
export default function CaseStudy({ p, labels }: { p: Project; labels: Dictionary["labels"] }) {
  const brand = brands[p.id];
  const style = {
    "--brand-bg": brand.bg,
    "--brand-ink": brand.ink,
    "--brand-accent": brand.accent,
  } as CSSProperties;
  const titleId = `case-${p.id}`;
  const { desktop, mobile, second, extra } = p.shots;
  const layout = second ? " is-duo" : mobile ? "" : " is-solo";
  const wide = "(min-width: 76rem) 62rem, (min-width: 48rem) 80vw, 94vw";
  const half = "(min-width: 56rem) 36rem, 94vw";

  const cells = [
    { label: labels.customer, body: <p>{p.customer}</p> },
    { label: labels.needed, body: <p>{p.needed}</p> },
    {
      label: labels.decided,
      body: (
        <ul className="checks">
          {p.decided.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      ),
    },
    {
      label: labels.result,
      body: (
        <>
          <p>{p.result}</p>
          {extra && (
            <BrowserFrame url={extra.url ?? ""} className="order-shot">
              <Shot src={extra.src} alt={extra.alt} sizes="(min-width: 56rem) 34rem, 90vw" />
            </BrowserFrame>
          )}
        </>
      ),
    },
  ];

  return (
    <article
      id={`detail-${p.id}`}
      className={`case case-${p.id}`}
      style={style}
      aria-labelledby={titleId}
      data-panel
      tabIndex={-1}
      hidden
      suppressHydrationWarning
    >
      <div className="case-top reveal">
        <span className="case-no">{p.index}</span>
        <span className="case-name">
          {p.name}
          <span lang={/[؀-ۿ]/.test(p.nameAlt) ? "ar" : "en"}>{p.nameAlt}</span>
        </span>
        <span>{p.kind}</span>
        <span>{p.year}</span>
        {p.status && <span className="case-live">{p.status}</span>}
      </div>
      <h3 id={titleId} className="case-title reveal">
        {p.title}
      </h3>
      <div className={`stage reveal${layout}`}>
        {brand.motif && (
          <div className="stage-motif" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        )}
        <BrowserFrame url={desktop.url ?? p.urlLabel ?? p.name} className="stage-browser">
          <Player m={desktop} sizes={second ? half : wide} label={labels.watch} />
        </BrowserFrame>
        {second && (
          <BrowserFrame url={second.url ?? p.name} className="stage-browser">
            <Player m={second} sizes={half} label={labels.watch} />
          </BrowserFrame>
        )}
        {mobile && (
          <PhoneFrame className="stage-phone">
            <Shot src={mobile.src} alt={mobile.alt} sizes="(min-width: 76rem) 13.5rem, 22vw" />
          </PhoneFrame>
        )}
      </div>
      {p.note && <p className="stage-note reveal">{p.note}</p>}

      <div className="order reveal">
        <div className="order-bar">
          <span>
            {labels.workOrder} · {p.name}
          </span>
          <span>{p.year}</span>
        </div>
        <div className="order-grid">
          {cells.map((c, i) => (
            <div key={c.label} className="order-cell">
              <p className="order-label">
                <b>{String(i + 1).padStart(2, "0")}</b>
                {c.label}
              </p>
              {c.body}
            </div>
          ))}
        </div>
      </div>

      <div className="case-foot reveal">
        <ul className="chips" aria-label={labels.stack}>
          {p.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
        <div className="case-actions">
          {p.url && (
            <a href={p.url} className="btn btn-line" target="_blank" rel="noopener">
              {labels.visit} {p.urlLabel}
              <ArrowUpRight className="flip-rtl" />
            </a>
          )}
          <button type="button" className="btn btn-line case-close" data-detail-close={p.id}>
            {labels.less}
            <ChevronDown />
          </button>
        </div>
      </div>
    </article>
  );
}
