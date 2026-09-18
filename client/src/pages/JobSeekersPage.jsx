import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import "../styling/content-pages.css";
import PageMeta from "../components/seo/PageMeta";
import Reveal from "../components/ui/common/Reveal";
import { emailRecruits } from "../config/site";

const EXPECT = [
  "A supportive, human approach",
  "Honest and transparent communication",
  "Opportunities that align with your goals",
  "Guidance every step of the way",
];

const STEPS = [
  { step: "Send your CV", body: "Email it with a few lines about what you're after. No portal, no forms to fight." },
  { step: "We read it", body: "A recruiter, not a parser. We get in touch to understand your goals, not just your keywords." },
  { step: "We introduce you", body: "When a role fits, you hear from us directly and we prepare you for the conversation." },
];

export default function JobSeekersPage() {
  return (
    <>
      <PageMeta path="/job-seekers" />

      <header className="cx-header cx-header--split surface-khaki">
        <div className="container cx-header__inner">
          <div className="cx-header__copy">
            <h1>SAP, Oracle and IT jobs. Find more than your next role.</h1>
            <p className="cx-lede">
              Looking for a new role can feel overwhelming. We get to know you, your goals and what really
              matters to you before matching you with South African employers who need your skills.
            </p>
          </div>
          <Reveal className="cx-panel">
            <h2>Send us your CV</h2>
            <p>Attach it to an email with a few lines about what you're looking for. A person will reply.</p>
            <a href={`mailto:${emailRecruits}`} className="btn btn--primary">Email your CV</a>
            <p>Sends to <a href={`mailto:${emailRecruits}`}>{emailRecruits}</a>. Prefer a form? <Link to="/contact">Get in touch</Link>.</p>
          </Reveal>
        </div>
      </header>

      <section className="cx-section" aria-labelledby="how-title">
        <div className="container cx-sticky">
          <Reveal className="cx-sticky__aside">
            <h2 id="how-title">What happens next</h2>
            <p>Three steps, each one with a real person on the other end.</p>
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

      <section className="cx-section surface-cream" aria-labelledby="expect-title">
        <div className="container container--narrow">
          <Reveal className="cx-section__head"><h2 id="expect-title">What you can expect</h2></Reveal>
          <Reveal as="ul" className="cx-grid2" data-stagger="">
            {EXPECT.map((item) => (
              <li key={item}><FiCheck aria-hidden="true" /><span>{item}</span></li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cx-section surface-navy" aria-labelledby="cta-title">
        <div className="container">
          <Reveal className="cx-cta">
            <h2 id="cta-title">You're not just another CV to us</h2>
            <p>We'll help you find a role that fits your skills, your lifestyle and your future.</p>
            <div className="cx-cta__actions">
              <a href={`mailto:${emailRecruits}`} className="btn btn--primary">Email {emailRecruits}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
