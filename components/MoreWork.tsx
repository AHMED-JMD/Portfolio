import type { Dictionary } from "@/content/en";
import { ArrowUpRight } from "./Icons";

/** Smaller projects as receipt lines: year, name, what it did, what it's made of. */
export default function MoreWork({ t }: { t: Dictionary }) {
  return (
    <div className="more">
      <div className="work-head reveal">
        <div>
          <p className="eyebrow">{t.more.eyebrow}</p>
          <h2 className="section-title">{t.more.title}</h2>
        </div>
      </div>
      <ul className="more-list">
        {t.more.items.map((m) => (
          <li key={m.name} className="more-row reveal">
            <span className="more-year">{m.year}</span>
            <div className="more-main">
              <h3 className="more-name">
                {m.url ? (
                  <a href={m.url} target="_blank" rel="noopener">
                    {m.name}
                    <ArrowUpRight className="flip-rtl" />
                  </a>
                ) : (
                  m.name
                )}
                {m.status && <span className="more-status">{m.status}</span>}
              </h3>
              <p className="more-body">{m.body}</p>
            </div>
            <span className="more-stack">{m.stack}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
