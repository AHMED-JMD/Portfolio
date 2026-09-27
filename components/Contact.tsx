import type { Dictionary } from "@/content/en";
import { person, whatsappLink } from "@/content/site";
import Barcode from "./Barcode";
import { ArrowUpRight, Download, WhatsApp } from "./Icons";

/** The last receipt on the page is the visitor's own — still blank. */
export default function Contact({ t }: { t: Dictionary }) {
  const c = t.contact;
  const wa = whatsappLink(t.nav.whatsappMessage);
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div className="reveal">
          <p className="eyebrow">{c.eyebrow}</p>
          <h2 id="contact-title" className="section-title">
            {c.title}
          </h2>
          <p className="section-intro contact-body">{c.body}</p>
          <div className="hero-ctas">
            <a href={wa} className="btn btn-ok" target="_blank" rel="noopener">
              <WhatsApp />
              {c.whatsapp}
            </a>
            <a href={`mailto:${person.email}`} className="btn btn-line">
              {c.email}
            </a>
          </div>
          <dl className="contact-list">
            <div>
              <dt>{c.details.phone}</dt>
              <dd>
                <a href={person.phoneHref} dir="ltr">
                  {person.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt>{c.details.email}</dt>
              <dd>
                <a href={`mailto:${person.email}`}>{person.email}</a>
              </dd>
            </div>
            <div>
              <dt>{c.details.linkedin}</dt>
              <dd>
                <a href={person.linkedin} target="_blank" rel="noopener">
                  in/ahmed-abdalrahman <ArrowUpRight className="flip-rtl" />
                </a>
              </dd>
            </div>
            <div>
              <dt>{c.details.github}</dt>
              <dd>
                <a href={person.github} target="_blank" rel="noopener">
                  AHMED-JMD <ArrowUpRight className="flip-rtl" />
                </a>
              </dd>
            </div>
            <div>
              <dt>{c.details.location}</dt>
              <dd>{c.details.locationValue}</dd>
            </div>
            <div>
              <dt>CV</dt>
              <dd>
                <a href={person.cv} download>
                  {c.cv} <Download />
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="contact-receipt reveal" aria-hidden="true">
          <div className="receipt-paper">
            <header className="r-head">
              <p className="r-title">{c.receipt.title}</p>
              <p className="r-sub">#{new Date().getFullYear()}-···</p>
            </header>
            <div className="r-rule" />
            <div className="r-row">
              <span className="r-key">{t.receipt.customer}</span>
              <span>{c.receipt.customer}</span>
            </div>
            <div className="r-row">
              <span className="r-key">{t.receipt.needed}</span>
              <span>{c.receipt.needed}</span>
            </div>
            <div className="r-row">
              <span className="r-key">{t.receipt.status}</span>
              <span className="r-status is-waiting">{c.receipt.status}</span>
            </div>
            <div className="r-rule is-double" />
            <div className="r-total">
              <span>{t.receipt.total}</span>
              <span>{t.receipt.totalValue}</span>
            </div>
            <Barcode value="your-project" className="r-barcode" />
            <p className="r-thanks">{t.receipt.thanks}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
