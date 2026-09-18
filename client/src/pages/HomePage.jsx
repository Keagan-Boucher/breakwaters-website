import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styling/home.css";
import AppCardNav from "../components/ui/layout/AppCardNav";
import heroWave from "../assets/svgs/Hero-wave.svg";
import Footer from "../components/ui/layout/Footer";
import PageMeta from "../components/seo/PageMeta";
import { siteUrl } from "../config/site";

const HERO_TITLE = "We Break Barriers\nfor your success.";
const HOW_IT_WORKS_STEPS = [
  {
    step: "1. Reach Out",
    client: "Email us your CV and a bit about what you're after.",
    company: "Email us about the talent you're looking for.",
  },
  {
    step: "2. Review",
    client: "Our team personally reviews your profile.",
    company: "We source and shortlist candidates for you.",
  },
  {
    step: "3. Connect",
    client: "Get matched and contacted directly.",
    company: "Review candidates and schedule interviews.",
  },
];


export default function HomePage() {
  const howItWorksRef = useRef(null);
  const aboutBreakwatersRef = useRef(null);
  const [howItWorksVisible, setHowItWorksVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      setHowItWorksVisible(true);
      setAboutVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === howItWorksRef.current) {
            setHowItWorksVisible(entry.isIntersecting);
          } else if (entry.target === aboutBreakwatersRef.current) {
            setAboutVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10%",
      }
    );

    const targets = [howItWorksRef.current, aboutBreakwatersRef.current].filter(Boolean);
    targets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="home-page">
      <PageMeta
        title="Breakwaters Recruiting | Human-Led Talent Matching"
        description="Breakwaters Recruiting connects South African businesses with exceptional, niche talent through a personal, human-centered recruitment process."
        canonical={`${siteUrl}/`}
      />
      <section className="hero-section noise">
        <div className="hero-content">
          <AppCardNav />
          <h1 className="hero-title" data-text={HERO_TITLE}>
            <span>We Break Barriers</span>
            <span>for your success.</span>
          </h1>

          <p className="hero-subtext">
            Connecting companies with top talent and talent with top companies!
          </p>

          <div className="hero-cta-container">
            <Link to="/job-seekers" className="hero-cta">
              I'm Looking for a Job
            </Link>
            <Link to="/services" className="hero-cta hero-cta--white">
              I'm Looking for Talent
            </Link>
          </div>
        </div>
        <div className="hero-wave-accent" aria-hidden="true" />
        <img
          src={heroWave}
          alt=""
          className="hero-wave"
          decoding="async"
          aria-hidden="true"
        />
      </section>

      <div className="home-gradient-flow noise">
        <section
          ref={howItWorksRef}
          className={`home-section how-it-works ${
            howItWorksVisible ? "home-section--visible" : ""
          }`}
        >
          <div className="home-section__inner">
            <h2 className="section-title">
              Human-led matches in three simple steps
            </h2>
            <p className="section-lead">
              From the first hello to the final interview, every connection is
              guided by experienced recruiters who know people matter most.
            </p>

            <div className="how-it-works__grid">
              {HOW_IT_WORKS_STEPS.map(({ step, client, company }) => (
                <article className="how-it-works__item" key={step}>
                  <header className="how-it-works__item-header">
                    <span className="how-it-works__badge">{step}</span>
                  </header>
                  <div className="how-it-works__roles">
                    <div className="how-it-works__role">
                      <h3>Client</h3>
                      <p>{client}</p>
                    </div>
                    <div className="how-it-works__role">
                      <h3>Company</h3>
                      <p>{company}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="home-section-divider" aria-hidden="true" />

        <section
          ref={aboutBreakwatersRef}
          className={`home-section about-breakwaters ${
            aboutVisible ? "home-section--visible" : ""
          }`}
        >
          <div className="home-section__inner">
            <h2 className="section-title">
              Recruitment with heart, precision, and trust
            </h2>
            <div className="about-breakwaters__content">
              <p>
                Breakwaters Recruiting was built on real experience, not
                algorithms. Every CV is personally reviewed by our team,
                ensuring every match benefits both sides.
              </p>
              <p>
                With deep roots in SAP, Oracle, and the broader IT space, and
                a trusted network built over many years, we&apos;re
                redefining recruitment for care, resilience, and genuine
                connection.
              </p>
            </div>

            <div className="career-journey-panel">
              <div className="career-journey-panel__copy">
                <h3>Take the first step in your career journey.</h3>
                <p>
                  Send us your CV, and let our team do the heavy lifting. We
                  connect you with verified companies that match your goals
                  and expertise.
                </p>
                <Link to="/job-seekers" className="panel-cta">
                  Submit Your CV
                </Link>
              </div>
              <div className="career-journey-panel__accent" aria-hidden="true">
                <div className="career-journey-panel__texture" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
