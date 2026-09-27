import { person, SITE_URL } from "@/content/site";
import { getDictionary, localePath, type Locale } from "@/lib/i18n";
import Contact from "./Contact";
import Delivery from "./Delivery";
import Experience from "./Experience";
import FlutterSection from "./FlutterSection";
import Footer from "./Footer";
import Hero from "./Hero";
import MoreWork from "./MoreWork";
import Nav from "./Nav";
import SiteScript from "./SiteScript";
import WorkSection from "./WorkSection";
import Testimonials from "./Testimonials";

/**
 * The whole page, shared by both locales, so English and Arabic can never
 * drift apart structurally — only the dictionary changes.
 *
 * Order follows the argument: the rule, then the proof of it in real
 * projects, then the Flutter work, then how the work is done and by whom.
 */
export default function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    alternateName: "أحمد عبدالرحمن",
    jobTitle: t.hero.eyebrow.split(" · ")[0],
    description: t.meta.description,
    url: `${SITE_URL}${localePath(locale)}`,
    email: `mailto:${person.email}`,
    telephone: person.phone,
    address: { "@type": "PostalAddress", addressCountry: "SD" },
    worksFor: { "@type": "Organization", name: "Enjaz Tech Services" },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Khartoum",
    },
    knowsLanguage: ["ar", "en"],
    knowsAbout: [
      "Flutter",
      "Dart",
      "Node.js",
      "React",
      "Next.js",
      "MySQL",
      "PostgreSQL",
    ],
    sameAs: [person.linkedin, person.github],
  };

  return (
    <>
      {/* First in <body>: sets the theme and drops `no-js` before first paint. */}
      <SiteScript />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <a href="#main" className="skip">
        {t.a11y.skip}
      </a>
      <Nav t={t} locale={locale} />

      <main id="main">
        <Hero t={t} />
        <Delivery t={t} />

        <WorkSection t={t} />

        <FlutterSection t={t} />

        <section className="section" aria-label={t.more.title}>
          <div className="wrap">
            <MoreWork t={t} />
          </div>
        </section>

        <Experience t={t} />
        <Testimonials t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </>
  );
}
