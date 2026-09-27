import type { Dictionary } from "@/content/en";
import { person, whatsappLink } from "@/content/site";
import { localePath, type Locale } from "@/lib/i18n";
import { Close, Menu, Moon, Sun, WhatsApp } from "./Icons";

export default function Nav({ t, locale }: { t: Dictionary; locale: Locale }) {
  const wa = whatsappLink(t.nav.whatsappMessage);
  const brand = (
    <a href={localePath(locale)} className="brand">
      <span className="brand-mark" aria-hidden="true">
        AA
      </span>
      <span>{person.name}</span>
    </a>
  );

  return (
    <>
      <header className="nav">
        <div className="wrap nav-bar">
          {brand}
          <nav className="nav-links" aria-label="Primary">
            {/* SiteScript toggles .is-active on these as sections scroll by. */}
            {t.nav.links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link" suppressHydrationWarning>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-tools">
            <a
              href={t.nav.lang.href}
              hrefLang={t.nav.lang.hreflang}
              lang={t.nav.lang.hreflang}
              className="icon-btn"
              data-lang-link
            >
              {t.nav.lang.label}
            </a>
            <button type="button" className="icon-btn" data-theme-toggle aria-label={t.a11y.theme}>
              <Moon className="theme-moon" />
              <Sun className="theme-sun" />
            </button>
            <a href={wa} className="btn btn-ink nav-cta" target="_blank" rel="noopener">
              <WhatsApp />
              {t.nav.cta}
            </a>
            <button
              type="button"
              className="icon-btn menu-btn"
              data-menu-open
              aria-label={t.a11y.menu}
              aria-expanded="false"
              aria-controls="drawer"
              suppressHydrationWarning
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/* SiteScript removes `inert` while the menu is open. */}
      <div id="drawer" className="drawer" inert suppressHydrationWarning>
        <div className="nav-bar">
          {brand}
          <button
            type="button"
            className="icon-btn"
            data-menu-close
            aria-label={t.a11y.close}
            style={{ marginInlineStart: "auto" }}
          >
            <Close />
          </button>
        </div>
        <nav className="drawer-links" aria-label="Menu">
          {t.nav.links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href={wa} className="btn btn-ok" target="_blank" rel="noopener">
          <WhatsApp />
          {t.nav.cta}
        </a>
      </div>
    </>
  );
}
