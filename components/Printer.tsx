import type { Dictionary } from "@/content/en";
import Barcode from "./Barcode";
import { ChevronLeft, ChevronRight } from "./Icons";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * The hero's receipt printer: one receipt per delivered project, each ending in
 * the stamp that defines "done". Server-rendered with the first receipt
 * already printed, so it reads correctly with no JavaScript; SiteScript cycles
 * the rest (see [data-printer] there) and CSS does all the motion.
 *
 * SiteScript changes classes, aria-hidden and the counter text on these
 * elements, so they carry suppressHydrationWarning — in dev, React hydrates
 * the page and would otherwise report those changes as mismatches. The counter
 * is one template string on purpose: `01 / {n}` would render two text nodes,
 * which the script's textContent write collapses into one — a structural
 * mismatch that makes React re-render the whole page.
 */
export default function Printer({ t }: { t: Dictionary }) {
  const total = t.receipts.length;

  return (
    <div
      className="printer"
      data-printer
      role="region"
      aria-roledescription="carousel"
      aria-label={t.hero.printer}
      suppressHydrationWarning
    >
      <div className="printer-top">
        <span className="led">{t.hero.printer}</span>
      </div>
      <div className="printer-head" aria-hidden="true" />

      <div className="printer-feed">
        {t.receipts.map((r, i) => (
          <article
            key={r.id}
            className={i === 0 ? "receipt is-active" : "receipt"}
            data-receipt
            aria-hidden={i === 0 ? undefined : true}
            aria-roledescription="slide"
            aria-label={`${pad(i + 1)} / ${pad(total)} — ${r.title}`}
            suppressHydrationWarning
          >
            <div className="receipt-paper">
              <header className="r-head">
                <p className="r-title">{r.title}</p>
                <p className="r-sub">{r.sub}</p>
              </header>
              <div className="r-rule" />
              <div className="r-row">
                <span className="r-key">{t.receipt.job}</span>
                <span>{`${pad(i + 1)} / ${pad(total)}`}</span>
              </div>
              <div className="r-rule" />
              <div className="r-row">
                <span className="r-key">{t.receipt.customer}</span>
                <span>{r.customer}</span>
              </div>
              <div className="r-row">
                <span className="r-key">{t.receipt.needed}</span>
                <span>{r.needed}</span>
              </div>
              <div className="r-row">
                <span className="r-key">{t.receipt.delivered}</span>
                <span>{r.delivered}</span>
              </div>
              <div className="r-row">
                <span className="r-key">{t.receipt.status}</span>
                <span className="r-status">{r.status}</span>
              </div>
              <div className="r-rule is-double" />
              <div className="r-total">
                <span>{t.receipt.total}</span>
                <span>{t.receipt.totalValue}</span>
              </div>
              <Barcode value={r.id} className="r-barcode" />
              <p className="r-thanks">{t.receipt.thanks}</p>
              <p className="stamp" aria-hidden="true">
                {`✓ ${t.receipt.stamp}`}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="printer-controls">
        <button type="button" data-printer-prev aria-label={t.a11y.prev}>
          <ChevronLeft className="flip-rtl" />
        </button>
        <span className="printer-count" data-printer-count aria-live="polite" suppressHydrationWarning>
          {`01 / ${pad(total)}`}
        </span>
        <button type="button" data-printer-next aria-label={t.a11y.next}>
          <ChevronRight className="flip-rtl" />
        </button>
      </div>
    </div>
  );
}
