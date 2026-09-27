import type { CSSProperties } from "react";
import type { Dictionary } from "@/content/en";
import { brands } from "@/content/site";
import type { Project } from "@/content/types";
import { BrowserFrame } from "./Frames";
import { ArrowUpRight, ChevronDown } from "./Icons";
import Shot from "./Shot";

/**
 * The compact card in the scrollable row: one screenshot, the headline and
 * two lines — enough to choose a project, not to read it. The full work
 * order lives in the panel its button opens (see CaseStudy.tsx).
 */
export default function ProjectCard({ p, labels }: { p: Project; labels: Dictionary["labels"] }) {
  const brand = brands[p.id];
  const style = {
    "--brand-bg": brand.bg,
    "--brand-ink": brand.ink,
    "--brand-accent": brand.accent,
  } as CSSProperties;

  return (
    <li className={`pcard pcard-${p.id}`} style={style}>
      <div className="pcard-media">
        <BrowserFrame url={p.shots.desktop.url ?? p.urlLabel ?? p.name}>
          <Shot
            src={p.shots.desktop.src}
            alt={p.shots.desktop.alt}
            sizes="(min-width: 48rem) 27rem, 85vw"
          />
        </BrowserFrame>
      </div>

      <div className="pcard-body">
        <div className="case-top">
          <span className="case-no">{p.index}</span>
          <span className="case-name">
            {p.name}
            <span lang={/[؀-ۿ]/.test(p.nameAlt) ? "ar" : "en"}>{p.nameAlt}</span>
          </span>
          <span>{p.year}</span>
          {p.status && <span className="case-live">{p.status}</span>}
        </div>
        <h3 className="pcard-title">{p.title}</h3>
        <p className="pcard-kind">{p.kind}</p>
        <p className="pcard-lede">{p.lede}</p>

        <div className="pcard-foot">
          <button
            type="button"
            className="btn btn-ink pcard-more"
            data-detail={p.id}
            aria-expanded="false"
            aria-controls={`detail-${p.id}`}
            suppressHydrationWarning
          >
            {labels.more}
            <ChevronDown />
          </button>
          {p.url && (
            <a href={p.url} className="pcard-link" target="_blank" rel="noopener">
              {p.urlLabel}
              <ArrowUpRight className="flip-rtl" />
            </a>
          )}
        </div>
      </div>
    </li>
  );
}
