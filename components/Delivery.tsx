import type { Dictionary } from "@/content/en";

/** How the work gets delivered — AI agents in the loop — and the numbers. */
export default function Delivery({ t }: { t: Dictionary }) {
  return (
    <section className="section delivery" aria-labelledby="delivery-title">
      <div className="wrap">
        <div className="work-head reveal">
          <div>
            <p className="eyebrow">{t.delivery.eyebrow}</p>
            <h2 id="delivery-title" className="section-title">
              {t.delivery.title}
            </h2>
          </div>
          <p className="section-intro">{t.delivery.lede}</p>
        </div>
      </div>
    </section>
  );
}
