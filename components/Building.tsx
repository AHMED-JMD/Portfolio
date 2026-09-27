import type { Dictionary } from "@/content/en";
import Shot from "./Shot";

/** Masar: work in progress, shown as what it is — prototype screens. */
export default function Building({ t }: { t: Dictionary }) {
  const b = t.building;
  return (
    <article className="building reveal" aria-labelledby="building-title">
      <div className="building-copy">
        <div className="case-top">
          <span className="building-pill">{b.eyebrow}</span>
          <span className="case-name">
            {b.name}
            <span lang="ar">{b.nameAlt}</span>
          </span>
          <span>{b.kind}</span>
          <span className="building-status">{b.status}</span>
        </div>
        <h3 id="building-title" className="building-title">
          {b.title}
        </h3>
        <p className="building-body">{b.body}</p>
        <ul className="checks">
          {b.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <ul className="chips" aria-label={t.labels.stack}>
          {b.stack.map((s) => (
            <li key={s} className="chip">
              {s}
            </li>
          ))}
        </ul>
      </div>
      <figure className="building-shots">
        {b.shots.map((s) => (
          <Shot key={s.src} src={s.src} alt={s.alt} sizes="(min-width: 64rem) 36rem, 92vw" className="building-shot" />
        ))}
        <figcaption className="stage-note">{b.note}</figcaption>
      </figure>
    </article>
  );
}
