import type { Dictionary } from "@/content/en";
// import Building from "./Building";  // Masar — parked, see below
import CaseStudy from "./CaseStudy";
import { ChevronLeft, ChevronRight } from "./Icons";
import ProjectCard from "./ProjectCard";

/**
 * The work section: a scrollable row of compact cards, and under it the full
 * case studies — hidden until a card's "More detail" button opens one
 * (SiteScript). Without JavaScript every panel stays open, so the whole story
 * is still readable.
 */
export default function WorkSection({ t }: { t: Dictionary }) {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="wrap">
        <div className="work-head reveal">
          <div>
            <p className="eyebrow">{t.work.eyebrow}</p>
            <h2 id="work-title" className="section-title">
              {t.work.title}
            </h2>
          </div>
          <div className="work-aside">
            <p className="section-intro">{t.work.intro}</p>
            <div className="rail-nav">
              <span className="rail-hint">{t.work.hint}</span>
              <button type="button" data-row-prev aria-label={t.a11y.scrollPrev}>
                <ChevronLeft className="flip-rtl" />
              </button>
              <button type="button" data-row-next aria-label={t.a11y.scrollNext}>
                <ChevronRight className="flip-rtl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="work-rail" data-rail>
        <ul className="work-row" data-row>
          {t.projects.map((p) => (
            <ProjectCard key={p.id} p={p} labels={t.labels} />
          ))}
        </ul>
      </div>

      <div className="wrap">
        <div className="case-panels">
          {t.projects.map((p) => (
            <CaseStudy key={p.id} p={p} labels={t.labels} />
          ))}
        </div>
        {/* Masar is parked for now. To show it again, un-comment this line and
            the Building import above; its copy still lives in content/*.ts. */}
        {/* <Building t={t} /> */}
      </div>
    </section>
  );
}
