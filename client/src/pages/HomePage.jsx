import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "../styling/home.css";
import "../styling/content-pages.css";
import heroWave from "../assets/svgs/Hero-wave.svg";
import PageMeta from "../components/seo/PageMeta";
import Reveal from "../components/ui/common/Reveal";
import ContactDetails from "../components/ui/common/ContactDetails";
import { locality } from "../config/site";

const HERO_TITLE = "We break barriers\nfor your success.";

const STEPS = [
  { step: "Reach out", body: "Send a CV, or tell us about the role. A few lines is enough to start." },
  { step: "Review", body: "A recruiter reads it personally, not a parser, and shortlists from a network built over years." },
  { step: "Connect", body: "Candidates are contacted directly. Employers review the shortlist and book interviews." },
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
            A human-led recruitment agency in {locality}, connecting South African companies with SAP, Oracle and IT talent.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary">Contact us</Link>
          </div>
        </div>
        <div className="hero__waves" aria-hidden="true" />
        <img src={heroWave} alt="" className="hero__crest" width="520" height="520" decoding="async" aria-hidden="true" />
      </section>

      <section className="cx-lanes" aria-label="Choose your path">
        <Link to="/job-seekers" className="cx-lane">
          <div className="cx-lane__inner">
            <p className="cx-lane__kicker">Job seekers</p>
            <h2>Find more than your next role.</h2>
            <p>We get to know you, your goals and what matters to you before we match you with an employer.</p>
            <span className="cx-lane__go">Send us your CV <FiArrowRight aria-hidden="true" /></span>
          </div>
        </Link>
        <Link to="/services" className="cx-lane cx-lane--navy">
          <div className="cx-lane__inner">
            <p className="cx-lane__kicker">Employers</p>
            <h2>Hire people you can trust.</h2>
            <p>Permanent, contract and executive placements from a recruiter with two decades inside IT consulting.</p>
            <span className="cx-lane__go">See our services <FiArrowRight aria-hidden="true" /></span>
          </div>
        </Link>
      </section>

      <section className="cx-section" aria-labelledby="how-title">
        <div className="container cx-sticky">
          <Reveal className="cx-sticky__aside">
            <h2 id="how-title">Human-led matches in three steps</h2>
            <p>From the first hello to the final interview, every connection is guided by a recruiter who knows people matter most.</p>
          </Reveal>
          <Reveal as="ol" className="cx-steps" data-stagger="">
            {STEPS.map(({ step, body }) => (
              <li className="cx-step" key={step}>
                <h3>{step}</h3>
                <p>{body}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cx-section surface-khaki" aria-labelledby="why-title">
        <div className="container container--narrow cx-prose">
          <Reveal>
            <p className="cx-pull" id="why-title">Built on real experience, not algorithms. Every CV is read by a person.</p>
          </Reveal>
          <Reveal delay={80}>
            <p>
              With deep roots in SAP, Oracle and the broader IT space, and a trusted network built
              over many years, we do recruitment with care, resilience and genuine connection.
            </p>
            <p style={{ marginTop: "var(--sp-4)" }}><Link to="/about">Read our story</Link></p>
          </Reveal>
        </div>
      </section>

      <section className="cx-section" aria-labelledby="contact-title">
        <div className="container container--narrow cx-contact">
          <Reveal className="cx-prose">
            <h2 id="contact-title">Talk to a person</h2>
            <p>Email or message us directly, or use the short form on the contact page and we'll come back to you.</p>
            <p><Link to="/contact" className="btn btn--primary">Get in touch</Link></p>
          </Reveal>
          <Reveal className="cx-contact__details" delay={80}>
            <ContactDetails />
          </Reveal>
        </div>
      </section>
    </>
  );
}
