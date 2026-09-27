import type { Dictionary } from "@/content/en";

/** Roles as a ledger: dates in the margin, one line of what the work was. */
export default function Experience({ t }: { t: Dictionary }) {
  const x = t.experience;
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="wrap">
        <div className="work-head reveal">
          <div>
            <p className="eyebrow">{x.eyebrow}</p>
            <h2 id="experience-title" className="section-title">
              {x.title}
            </h2>
          </div>
        </div>

        <ol className="ledger">
          {x.roles.map((r) => (
            <li key={r.org + r.when} className="ledger-row reveal">
              <p className="ledger-when">{r.when}</p>
              <div>
                <h3 className="ledger-role">{r.role}</h3>
                <p className="ledger-org">
                  {r.org} · {r.place}
                </p>
                <p className="ledger-body">{r.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="facts">
          <div className="fact reveal">
            <h3 className="fact-title">{x.education.title}</h3>
            <p className="fact-main">{x.education.degree}</p>
            <p className="fact-sub">
              {x.education.school} · {x.education.when}
            </p>
          </div>
          <div className="fact reveal">
            <h3 className="fact-title">{x.languages.title}</h3>
            {x.languages.items.map((l) => (
              <p key={l} className="fact-main">
                {l}
              </p>
            ))}
          </div>
          <div className="fact fact-wide reveal">
            <h3 className="fact-title">{x.skills.title}</h3>
            <div className="skill-groups">
              {x.skills.groups.map((g) => (
                <div key={g.name}>
                  <p className="fact-sub">{g.name}</p>
                  <ul className="chips">
                    {g.items.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
