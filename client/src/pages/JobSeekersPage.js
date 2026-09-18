import "../styling/content-pages.css";
import AppCardNav from "../components/ui/layout/AppCardNav";
import Footer from "../components/ui/layout/Footer";
import PageMeta from "../components/seo/PageMeta";
import Reveal from "../components/ui/common/Reveal";

const CV_EMAIL = "mailto:recruits@breakwatersrecruiting.co.za";

const EXPECTATIONS = [
  "A supportive, human approach",
  "Honest and transparent communication",
  "Opportunities that align with your goals",
  "Guidance every step of the way",
];

export default function JobSeekersPage() {
  return (
    <main className="cx-page">
      <PageMeta
        title="For Job Seekers | Breakwaters Recruiting"
        description="Breakwaters Recruiting takes a personal approach to job hunting. Honest communication, guidance, and opportunities that actually fit your goals."
        canonical="https://breakwatersrecruiting.co.za/job-seekers"
      />
      <AppCardNav />

      <header className="cx-header cx-header--khaki">
        <div className="cx-header__inner">
          <h1 className="cx-title">Find More Than Just Your Next Job</h1>
          <p className="cx-lede">
            We know that looking for a new role can feel overwhelming. That's
            why we take a more personal approach, getting to know you, your
            goals, and what really matters to you.
          </p>
          <p className="cx-lede">
            To get started, email{" "}
            <a href={CV_EMAIL} style={{ color: "inherit" }}>
              recruits@breakwatersrecruiting.co.za
            </a>{" "}
            and our team will guide you through the process of finding your
            next job.
          </p>
        </div>
      </header>

      <section className="cx-section cx-section--cream">
        <div className="cx-section__inner">
          <Reveal className="cx-section__head">
            <h2 className="cx-title cx-title--section">What You Can Expect</h2>
          </Reveal>
          <div className="cx-list cx-list--compact">
            {EXPECTATIONS.map((item, index) => (
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
            <h2 className="cx-title cx-title--section">Stay Connected</h2>
            <p>
              You're not just another CV to us. We're here to help you find
              the right opportunity, one that fits your skills, your
              lifestyle, and your future.
            </p>
            <div className="cx-cta__actions">
              <a href={CV_EMAIL} className="cx-btn-pill">
                Email recruits@breakwatersrecruiting.co.za
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
