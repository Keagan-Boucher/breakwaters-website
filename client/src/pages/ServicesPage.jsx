import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "../styling/content-pages.css";
import PageMeta from "../components/seo/PageMeta";
import Reveal from "../components/ui/common/Reveal";
import { SOLUTIONS, JOURNEY, solutionPath } from "../config/solutions";
import { emailVanessa } from "../config/site";

export default function ServicesPage() {
  return (
    <>
      <PageMeta path="/services" />

      <header className="cx-header surface-cream">
        <div className="container container--narrow cx-header__inner">
          <h1>People &amp; Talent Solutions</h1>
          <p className="cx-lede">
            Practical people solutions, built around your business. From finding specialist talent and managing your
            workforce to developing people and navigating organisational change.
          </p>
        </div>
      </header>

      <section className="cx-section" aria-labelledby="intro-title">
        <div className="container container--narrow cx-prose">
          <Reveal>
            <h2 id="intro-title">Turn people challenges into practical business solutions</h2>
            <p>
              We don't believe in one-size-fits-all solutions. We take the time to understand your business, your
              people, your challenges and your goals, and then work with you to find the right approach.
            </p>
            <p>
              Whether you need to strengthen your team, simplify workforce administration, build capability or support
              your people through change, we can help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="cx-section surface-khaki" aria-labelledby="solutions-title">
        <div className="container">
          <Reveal className="cx-section__head"><h2 id="solutions-title">What we do</h2></Reveal>
          <Reveal as="ul" className="cx-bento" data-stagger="">
            {SOLUTIONS.map((s) => (
              <li key={s.slug}>
                <h3>{s.title}</h3>
                <p>{s.headline}</p>
                <ul className="cx-pills">{s.items.slice(0, 4).map((t) => <li key={t}>{t}</li>)}</ul>
                <p>
                  <Link to={solutionPath(s.slug)} className="cx-lane__go">
                    {s.short} <FiArrowRight aria-hidden="true" />
                  </Link>
                </p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cx-section" aria-labelledby="approach-title">
        <div className="container container--narrow cx-sticky">
          <Reveal className="cx-sticky__aside">
            <h2 id="approach-title">One people partner. Multiple solutions.</h2>
            <p>We do things properly, and with intention.</p>
          </Reveal>
          <Reveal className="cx-prose" delay={80}>
            <p>Your people challenges don't always fit neatly into one category.</p>
            <p>
              You may need to recruit specialist talent while developing your existing team. You may be implementing new
              technology while managing the impact on your people. Or you may need additional workforce support while
              focusing your internal resources on growing the business.
            </p>
            <p>
              That's why Breakwaters brings together talent acquisition, workforce solutions, people development and
              change management under one people and talent offering. Find talent. Build capability. Support change.
            </p>
            <p>We can support you with a single requirement or work with you across multiple people challenges as your business evolves.</p>
          </Reveal>
        </div>
      </section>

      <section className="cx-section surface-cream" aria-labelledby="journey-title">
        <div className="container container--narrow cx-prose">
          <Reveal>
            <h2 id="journey-title">From talent to transformation</h2>
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

      <section className="cx-section surface-navy" aria-labelledby="cta-title">
        <div className="container">
          <Reveal className="cx-cta">
            <h2 id="cta-title">Let's talk</h2>
            <p>Have a people challenge you're trying to solve? You don't need to have the answer before you contact us.</p>
            <div className="cx-cta__actions">
              <Link to="/contact" className="btn btn--primary">Let's start a conversation</Link>
              <a href={`mailto:${emailVanessa}`} className="btn btn--secondary">Email {emailVanessa}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
