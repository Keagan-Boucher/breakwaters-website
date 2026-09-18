import { Link } from "react-router-dom";
import "../styling/home.css";
import "../styling/content-pages.css";
import heroWave from "../assets/svgs/Hero-wave.svg";
import PageMeta from "../components/seo/PageMeta";
import Reveal from "../components/ui/common/Reveal";
import ContactDetails from "../components/ui/common/ContactDetails";
import { locality } from "../config/site";

const HERO_TITLE = "We break barriers\nfor your success.";

const STEPS = [
  { step: "Reach out", seeker: "Send us your CV and a few lines about what you're after.", employer: "Tell us about the role and the kind of person you need." },
  { step: "Review", seeker: "A recruiter reads your profile personally, not a parser.", employer: "We source and shortlist candidates from a network built over years." },
  { step: "Connect", seeker: "You're matched and contacted directly.", employer: "You review the shortlist and schedule interviews." },
];

export default function HomePage() {
  return (
    <>
      <PageMeta path="/" />

      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <h1 id="hero-title" className="hero__title" data-text={HERO_TITLE}>
            <span>We break barriers</span>
            <span>for your success.</span>
          </h1>
          <p className="hero__lede">
            A human-led recruitment agency in {locality}, South Africa. We connect
            companies with SAP, Oracle and IT talent, and talent with the right companies.
          </p>
          <div className="hero__actions">
            <Link to="/job-seekers" className="btn btn--primary">I'm looking for a job</Link>
            <Link to="/services" className="btn btn--secondary">I'm looking for talent</Link>
          </div>
        </div>
        <div className="hero__waves" aria-hidden="true" />
        <img src={heroWave} alt="" className="hero__crest" width="520" height="520" decoding="async" aria-hidden="true" />
      </section>

      <section className="cx-section" aria-labelledby="how-title">
        <div className="container container--narrow">
          <Reveal className="cx-section__head">
            <h2 id="how-title">Human-led matches in three steps</h2>
            <p>From the first hello to the final interview, every connection is guided by a recruiter who knows people matter most.</p>
          </Reveal>
          <ol className="cx-list cx-list--plain">
            {STEPS.map(({ step, seeker, employer }, i) => (
              <Reveal as="li" className="cx-row" delay={i * 60} key={step}>
                <span className="cx-row__index" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <div className="cx-row__body">
                  <h3>{step}</h3>
                  <dl className="cx-pair">
                    <div><dt>Job seeker</dt><dd>{seeker}</dd></div>
                    <div><dt>Employer</dt><dd>{employer}</dd></div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="cx-section surface-cream" aria-labelledby="why-title">
        <div className="container container--text">
          <Reveal className="cx-prose">
            <h2 id="why-title">Recruitment with heart, precision and trust</h2>
            <p>
              Breakwaters Recruiting was built on real experience, not algorithms. Every CV is
              personally reviewed, so every match benefits both sides.
            </p>
            <p>
              With deep roots in SAP, Oracle and the broader IT space, and a trusted network built
              over many years, we do recruitment with care, resilience and genuine connection.
            </p>
            <p><Link to="/about">Read our story</Link></p>
          </Reveal>
        </div>
      </section>

      <section className="cx-section surface-navy" aria-labelledby="cta-title">
        <div className="container">
          <Reveal className="cx-cta">
            <h2 id="cta-title">Take the first step</h2>
            <p>Send us your CV, or tell us who you're looking for. We'll do the heavy lifting.</p>
            <div className="cx-cta__actions">
              <Link to="/job-seekers" className="btn btn--primary">Submit your CV</Link>
              <Link to="/services" className="btn btn--secondary">Find talent</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cx-section" aria-labelledby="contact-title">
        <div className="container container--narrow cx-contact">
          <Reveal className="cx-prose">
            <h2 id="contact-title">Talk to a person</h2>
            <p>Email, call or message us directly, or use the short form on the contact page and we'll come back to you.</p>
            <p><Link to="/contact" className="btn btn--secondary">Go to the contact page</Link></p>
          </Reveal>
          <Reveal className="cx-contact__details" delay={80}>
            <ContactDetails />
          </Reveal>
        </div>
      </section>
    </>
  );
}
