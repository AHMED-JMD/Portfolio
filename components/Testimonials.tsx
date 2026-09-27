import type { Dictionary } from "@/content/en";

/** Renders nothing until real quotes are added to the dictionaries. */
export default function Testimonials({ t }: { t: Dictionary }) {
  const q = t.testimonials;
  if (!q.items.length) return null;
  return (
    <section className="section" aria-labelledby="quotes-title">
      <div className="wrap">
        <p className="eyebrow reveal">{q.eyebrow}</p>
        <h2 id="quotes-title" className="section-title reveal">
          {q.title}
        </h2>
        <ul className="quotes">
          {q.items.map((item) => (
            <li key={item.name} className="quote reveal">
              <blockquote>
                <p>{item.quote}</p>
              </blockquote>
              <p className="quote-by">
                {item.name} · <span>{item.role}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
