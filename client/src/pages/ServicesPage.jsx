import "../styling/content-pages.css";
import AppCardNav from "../components/ui/layout/AppCardNav";
import Footer from "../components/ui/layout/Footer";
import PageMeta from "../components/seo/PageMeta";
import Reveal from "../components/ui/common/Reveal";
import { emailVanessa, siteUrl } from "../config/site";

const ENQUIRE_EMAIL = `mailto:${emailVanessa}`;

const APPROACH_ITEMS = [
  "We take the time to understand your business",
  "We connect you with quality, trusted talent",
  "We work within your budget, not against it",
  "We build relationships that last",
];

const SERVICE_BLOCKS = [
  {
    title: "Talent Acquisition",
    intro: "Whether you're growing your team or filling a critical gap, we're here to help:",
    tags: ["Permanent placements", "Contract placements", "Executive search & headhunting", "Staff augmentation"],
    outro: "We focus on finding not just the right skills, but the right fit.",
  },
  {
    title: "Specialist IT Recruitment",
    intro: "With strong roots in the IT consulting world, we understand what good looks like. We source talent across:",
    tags: ["SAP", "Oracle", "Full-stack development", "IT architects", "Project management and functional roles"],
  },
  {
    title: "Workforce Solutions",
    intro: "We help you plan ahead and stay agile:",
    tags: ["Capacity planning", "Balancing permanent and contract resources", "Building a strong talent pipeline"],
  },
  {
    title: "Payroll Outsourcing",
    outro:
      "We know managing contractors can be time-consuming and complex. Our payroll solutions are designed to make things easier, so you can focus on your business while we take care of the admin.",
  },
];

export default function ServicesPage() {
  return (
    <main className="cx-page">
      <PageMeta
        title="Services | Breakwaters Recruiting"
        description="Talent acquisition, specialist IT recruitment, workforce solutions, and payroll outsourcing from Breakwaters Recruiting, practical, flexible, and built around your needs."
        canonical={`${siteUrl}/services`}
      />
      <AppCardNav />

      <header className="cx-header cx-header--navy">
        <div className="cx-header__inner">
          <h1 className="cx-title">What We Do</h1>
          <p className="cx-lede">
            We offer recruitment and workforce solutions that are practical,
            flexible, and built around your needs. Because no two businesses
            or people are the same.
          </p>
          <p className="cx-lede">
            Looking for talent? Email{" "}
            <a href={ENQUIRE_EMAIL} style={{ color: "inherit" }}>
              {emailVanessa}
            </a>{" "}
            to enquire about Breakwaters finding you talent.
          </p>
        </div>
      </header>

      <section className="cx-section cx-section--white">
        <div className="cx-section__inner cx-section__inner--wide">
          <Reveal className="cx-section__head">
            <h2 className="cx-title cx-title--section">Our Services</h2>
          </Reveal>
          <div className="cx-list">
            {SERVICE_BLOCKS.map((block, index) => (
              <Reveal as="div" className="cx-row" delay={index * 60} key={block.title}>
                <span className="cx-row__index">{String(index + 1).padStart(2, "0")}</span>
                <div className="cx-row__body">
                  <h3>{block.title}</h3>
                  {block.intro ? <p>{block.intro}</p> : null}
                  {block.tags ? <p className="cx-row__tags">{block.tags.join(" · ")}</p> : null}
                  {block.outro ? <p>{block.outro}</p> : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cx-section cx-section--khaki">
        <div className="cx-section__inner">
          <Reveal className="cx-section__head">
            <h2 className="cx-title cx-title--section">Our Approach</h2>
            <p>We believe in doing things properly, and with intention.</p>
          </Reveal>
          <div className="cx-list cx-list--compact">
            {APPROACH_ITEMS.map((item, index) => (
              <div className="cx-row" key={item}>
                <span className="cx-row__index">{String(index + 1).padStart(2, "0")}</span>
                <div className="cx-row__body">
                  <p>{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cx-section cx-section--navy">
        <Reveal className="cx-section__inner">
          <div className="cx-cta">
            <h2 className="cx-title cx-title--section">Let's find your next hire</h2>
            <p>
              Email Vanessa to enquire about Breakwaters finding your
              business the right talent.
            </p>
            <div className="cx-cta__actions">
              <a href={ENQUIRE_EMAIL} className="cx-btn-pill">
                Email {emailVanessa}
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
