import { Link, useParams } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import "../styling/content-pages.css";
import PageMeta from "../components/seo/PageMeta";
import Reveal from "../components/ui/common/Reveal";
import NotFoundPage from "./NotFoundPage";
import { SOLUTIONS, solutionPath } from "../config/solutions";
import { emailVanessa } from "../config/site";

export default function SolutionPage() {
  const { slug } = useParams();
  const solution = SOLUTIONS.find((s) => s.slug === slug);
  if (!solution) return <NotFoundPage />;
  const { title, headline, lede, body, listTitle, items, outro } = solution;
  const path = solutionPath(slug);

  return (
    <>
      <PageMeta path={path} />

      <header className="cx-header surface-cream">
        <div className="container container--narrow cx-header__inner">
          <p><Link to="/services">People &amp; Talent Solutions</Link></p>
          <h1>{title}</h1>
          <p className="cx-lede">{headline}</p>
        </div>
      </header>

      <section className="cx-section" aria-labelledby="overview-title">
        <div className="container cx-sticky">
          <Reveal className="cx-sticky__aside">
            <h2 id="overview-title" className="cx-pull">{lede}</h2>
          </Reveal>
          <Reveal delay={80} className="cx-prose">
            {body.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
        </div>
      </section>

      <section className="cx-section surface-khaki" aria-labelledby="list-title">
        <div className="container container--narrow">
          <Reveal className="cx-section__head"><h2 id="list-title">{listTitle}</h2></Reveal>
          <Reveal as="ul" className="cx-grid2" data-stagger="">
            {items.map((item) => (
              <li key={item}><FiCheck aria-hidden="true" /><span>{item}</span></li>
            ))}
          </Reveal>
          <Reveal className="cx-prose" delay={80}>
            <p style={{ marginTop: "var(--sp-6)" }}>{outro}</p>
          </Reveal>
        </div>
      </section>

      <section className="cx-section" aria-labelledby="more-title">
        <div className="container">
          <Reveal className="cx-section__head"><h2 id="more-title">Other people &amp; talent solutions</h2></Reveal>
          <Reveal as="ul" className="cx-tiles" data-stagger="">
            {SOLUTIONS.filter((s) => s.slug !== slug).map((s) => (
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

      <section className="cx-section surface-navy" aria-labelledby="cta-title">
        <div className="container">
          <Reveal className="cx-cta">
            <h2 id="cta-title">Let's talk</h2>
            <p>You don't need to have the answer before you contact us. Tell us what's happening in your business and we'll help you explore the right solution.</p>
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
