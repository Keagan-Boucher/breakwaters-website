import { Link } from "react-router-dom";
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

export default function JobSeekersPage() {
  return (
    <>
      <PageMeta path="/job-seekers" />

      <header className="cx-header surface-khaki">
        <div className="container container--narrow cx-header__inner">
          <p className="cx-eyebrow">For job seekers</p>
          <h1>SAP, Oracle and IT jobs. Find more than your next role.</h1>
          <p className="cx-lede">
            Looking for a new role can feel overwhelming. We take a more personal approach: getting to
            know you, your goals and what really matters to you before matching you with South African
            employers who need your skills.
          </p>
          <p className="cx-lede">
            To get started, email your CV to <a href={`mailto:${emailRecruits}`}>{emailRecruits}</a> or{" "}
            <Link to="/contact">use the contact form</Link>.
          </p>
        </div>
      </header>

      <section className="cx-section surface-cream" aria-labelledby="expect-title">
        <div className="container container--text">
          <Reveal className="cx-section__head"><h2 id="expect-title">What you can expect</h2></Reveal>
          <ol className="cx-list cx-list--compact cx-list--plain">
            {EXPECT.map((item, i) => (
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
            <h2 id="cta-title">Send us your CV</h2>
            <p>You're not just another CV to us. We'll help you find a role that fits your skills, your lifestyle and your future.</p>
            <div className="cx-cta__actions">
              <a href={`mailto:${emailRecruits}`} className="btn btn--primary">Email {emailRecruits}</a>
              <Link to="/contact" className="btn btn--secondary">Contact us</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
