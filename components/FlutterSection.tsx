import type { Dictionary } from "@/content/en";

/**
 * The experience the CVs under-sell: most client systems run on Flutter.
 * A dark band in both themes, so the section reads as its own chapter.
 */
export default function FlutterSection({ t }: { t: Dictionary }) {
  const f = t.flutter;
  return (
    <section id="flutter" className="section flutter" aria-labelledby="flutter-title">
      <div className="wrap">
        <div className="work-head reveal">
          <div>
            <p className="eyebrow">{f.eyebrow}</p>
            <h2 id="flutter-title" className="section-title">
              {f.title}
            </h2>
          </div>
          <p className="section-intro">{f.intro}</p>
        </div>


        <ul className="apps">
          {f.apps.map((a) => (
            <li key={a.name} className="app reveal">
              <div className="app-top">
                <h3 className="app-name">{a.name}</h3>
                {a.year && <span className="app-year">{a.year}</span>}
              </div>
              <p className="app-body">{a.body}</p>
              <ul className="app-tags">
                {a.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="depth reveal">
          <p className="depth-title">{f.depth.title}</p>
          <ul className="depth-list">
            {f.depth.items.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
