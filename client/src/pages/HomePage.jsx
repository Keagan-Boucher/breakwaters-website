import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "../styling/home.css";
import "../styling/content-pages.css";
import heroWave from "../assets/svgs/Hero-wave.svg";
import PageMeta from "../components/seo/PageMeta";
import Reveal from "../components/ui/common/Reveal";
import ContactDetails from "../components/ui/common/ContactDetails";
import { SOLUTIONS, JOURNEY, solutionPath } from "../config/solutions";

const HERO_TITLE = "We break barriers\nfor your success.";

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
            <strong>People &amp; Talent Solutions.</strong> Find the right people. Build capability. Navigate change.
          </p>
          <p className="hero__lede">
            We help South African businesses solve the people challenges that matter, from finding specialist talent and
            managing payroll to developing people and supporting organisational change.
          </p>
          <div className="hero__actions">
            <Link to="/services" className="btn btn--primary">See our solutions</Link>
          </div>
        </div>
        <div className="hero__waves" aria-hidden="true" />
        <img src={heroWave} alt="" className="hero__crest" width="520" height="520" decoding="async" aria-hidden="true" />
      </section>

      <section className="cx-lanes" aria-label="Choose your path">
        <Link to="/services" className="cx-lane">
          <div className="cx-lane__inner">
            <p className="cx-lane__kicker">Employers</p>
            <h2>Find the right people. Build capability. Navigate change.</h2>
            <p>Practical, flexible people and talent solutions designed around what your business actually needs.</p>
            <span className="cx-lane__go">See our solutions <FiArrowRight aria-hidden="true" /></span>
          </div>
        </Link>
        <Link to="/job-seekers" className="cx-lane cx-lane--navy">
          <div className="cx-lane__inner">
            <p className="cx-lane__kicker">Job seekers</p>
            <h2>Find more than your next role.</h2>
            <p>We get to know you, your goals and what matters to you before we match you with an employer.</p>
            <span className="cx-lane__go">Send us your CV <FiArrowRight aria-hidden="true" /></span>
          </div>
        </Link>
      </section>

      <section className="cx-section" aria-labelledby="solutions-title">
        <div className="container">
          <Reveal className="cx-section__head"><h2 id="solutions-title">Our solutions</h2></Reveal>
          <Reveal as="ul" className="cx-tiles" data-stagger="">
            {SOLUTIONS.map((s) => (
              <li className="cx-tile" key={s.slug}>
                <h3>{s.short}</h3>
                <p>{s.blurb}</p>
                <Link to={solutionPath(s.slug)} className="cx-lane__go" style={{ "--fg": "var(--c-navy-700)" }}>
                  Learn more <FiArrowRight aria-hidden="true" />
                </Link>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cx-section surface-cream" aria-labelledby="journey-title">
        <div className="container container--narrow cx-prose">
          <Reveal>
            <h2 id="journey-title">One business. Many people challenges.</h2>
            <p>
              Your people journey doesn't start when you make a job requisition, and it doesn't end when someone is hired.
              Breakwaters can support different points along that journey, depending on what your business needs.
            </p>
            <ol className="cx-pills" aria-label="The people journey">
              {JOURNEY.map((j) => <li key={j}>{j}</li>)}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="cx-section surface-khaki" aria-labelledby="why-title">
        <div className="container container--narrow cx-prose">
          <Reveal>
            <p className="cx-pull" id="why-title">Our story starts with people.</p>
          </Reveal>
          <Reveal delay={80}>
            <p>
              A People &amp; Talent Management business founded by Vanessa Boucher, built on care, resilience and genuine
              connection. Recruitment remains an important part of what we do, but for us it has never been just about
              filling a role.
            </p>
            <p style={{ marginTop: "var(--sp-4)" }}><Link to="/about">Read our story</Link></p>
          </Reveal>
        </div>
      </section>

      <section className="cx-section" aria-labelledby="contact-title">
        <div className="container container--narrow cx-contact">
          <Reveal className="cx-prose">
            <h2 id="contact-title">Talk to a person</h2>
            <p>Have a people challenge you're trying to solve? You don't necessarily need to know exactly what solution you need.</p>
            <p>Tell us what's happening in your business and we'll help you work out where to start.</p>
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
