import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import "../styling/content-pages.css";
import PageMeta from "../components/seo/PageMeta";
import Reveal from "../components/ui/common/Reveal";
import { emailVanessa } from "../config/site";

// Order matters: the first service is the feature cell of the bento.
const SERVICES = [
  {
    title: "Talent acquisition",
    intro: "Whether you're growing a team or filling a critical gap.",
    tags: ["Permanent placements", "Contract placements", "Executive search and headhunting", "Staff augmentation"],
    outro: "We look for the right fit, not just the right skills.",
  },
  {
    title: "Specialist IT recruitment",
    intro: "With roots in IT consulting, we know what good looks like.",
    tags: ["SAP", "Oracle", "Full-stack development", "IT architects", "Project management and functional roles"],
  },
  {
    title: "Workforce solutions",
    intro: "Plan ahead and stay agile.",
    tags: ["Capacity planning", "Permanent and contract balance", "Talent pipeline"],
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
          <h1>Recruitment and workforce services</h1>
          <p className="cx-lede">
            Talent acquisition, specialist IT recruitment, workforce planning and payroll outsourcing for
            South African businesses. Practical, flexible and built around your needs.
          </p>
        </div>
      </header>

      <section className="cx-section" aria-labelledby="services-title">
        <div className="container">
          <Reveal className="cx-section__head"><h2 id="services-title">What we do</h2></Reveal>
          <Reveal as="ul" className="cx-bento" data-stagger="">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                {s.intro && <p>{s.intro}</p>}
                {s.tags && <ul className="cx-pills">{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>}
                {s.outro && <p>{s.outro}</p>}
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cx-section surface-khaki" aria-labelledby="approach-title">
        <div className="container container--narrow cx-sticky">
          <Reveal className="cx-sticky__aside">
            <h2 id="approach-title">Our approach</h2>
            <p>We do things properly, and with intention.</p>
          </Reveal>
          <Reveal as="ul" className="cx-grid2" data-stagger="">
            {APPROACH.map((item) => (
              <li key={item}><FiCheck aria-hidden="true" /><span>{item}</span></li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cx-section surface-navy" aria-labelledby="cta-title">
        <div className="container">
          <Reveal className="cx-cta">
            <h2 id="cta-title">Let's find your next hire</h2>
            <p>Tell Vanessa about the role and we'll come back with a plan.</p>
            <div className="cx-cta__actions">
              <Link to="/contact" className="btn btn--primary">Get in touch</Link>
              <a href={`mailto:${emailVanessa}`} className="btn btn--secondary">Email {emailVanessa}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
