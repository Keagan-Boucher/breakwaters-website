import { Link } from "react-router-dom";
import "../styling/content-pages.css";
import PageMeta from "../components/seo/PageMeta";
import Reveal from "../components/ui/common/Reveal";
import { emailVanessa } from "../config/site";

const SERVICES = [
  {
    title: "Talent acquisition",
    intro: "Whether you're growing a team or filling a critical gap:",
    tags: ["Permanent placements", "Contract placements", "Executive search and headhunting", "Staff augmentation"],
    outro: "We look for the right fit, not just the right skills.",
  },
  {
    title: "Specialist IT recruitment",
    intro: "With roots in IT consulting, we know what good looks like. We source across:",
    tags: ["SAP", "Oracle", "Full-stack development", "IT architects", "Project management and functional roles"],
  },
  {
    title: "Workforce solutions",
    intro: "Plan ahead and stay agile:",
    tags: ["Capacity planning", "Balancing permanent and contract resources", "Building a talent pipeline"],
  },
  {
    title: "Payroll outsourcing",
    outro: "Managing contractors is time-consuming. Our payroll solution takes the admin off your desk so you can focus on the business.",
  },
];

const APPROACH = [
  "We take the time to understand your business",
  "We connect you with quality, trusted talent",
  "We work within your budget, not against it",
  "We build relationships that last",
];

export default function ServicesPage() {
  return (
    <>
      <PageMeta path="/services" />

      <header className="cx-header surface-cream">
        <div className="container container--narrow cx-header__inner">
          <p className="cx-eyebrow">For employers</p>
          <h1>Recruitment and workforce services</h1>
          <p className="cx-lede">
            Talent acquisition, specialist IT recruitment, workforce planning and payroll outsourcing for
            South African businesses. Practical, flexible and built around your needs.
          </p>
          <p className="cx-lede">
            Looking for talent? Email <a href={`mailto:${emailVanessa}`}>{emailVanessa}</a> or{" "}
            <Link to="/contact">use the contact form</Link>.
          </p>
        </div>
      </header>

      <section className="cx-section" aria-labelledby="services-title">
        <div className="container container--narrow">
          <Reveal className="cx-section__head"><h2 id="services-title">What we do</h2></Reveal>
          <ol className="cx-list cx-list--plain">
            {SERVICES.map((s, i) => (
              <Reveal as="li" className="cx-row" delay={i * 60} key={s.title}>
                <span className="cx-row__index" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <div className="cx-row__body">
                  <h3>{s.title}</h3>
                  {s.intro && <p>{s.intro}</p>}
                  {s.tags && <p className="cx-row__tags">{s.tags.join(" · ")}</p>}
                  {s.outro && <p>{s.outro}</p>}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="cx-section surface-khaki" aria-labelledby="approach-title">
        <div className="container container--text">
          <Reveal className="cx-section__head">
            <h2 id="approach-title">Our approach</h2>
            <p>We do things properly, and with intention.</p>
          </Reveal>
          <ol className="cx-list cx-list--compact cx-list--plain">
            {APPROACH.map((item, i) => (
              <li className="cx-row" key={item}>
                <span className="cx-row__index" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <div className="cx-row__body"><p>{item}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cx-section surface-navy" aria-labelledby="cta-title">
        <div className="container">
          <Reveal className="cx-cta">
            <h2 id="cta-title">Let's find your next hire</h2>
            <p>Tell Vanessa about the role and we'll come back with a plan.</p>
            <div className="cx-cta__actions">
              <Link to="/contact" className="btn btn--primary">Contact us</Link>
              <a href={`mailto:${emailVanessa}`} className="btn btn--secondary">Email {emailVanessa}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
