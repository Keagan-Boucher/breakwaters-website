import { Link } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
import "../styling/content-pages.css";
import PageMeta from "../components/seo/PageMeta";
import Reveal from "../components/ui/common/Reveal";
import ImagePlaceholder from "../components/ui/common/ImagePlaceholder";
import { owner } from "../config/site";

const STORY = [
  "Breakwaters Recruiting was built from real life experience, both the highs and the unexpected lows.",
  `After nearly two decades in the IT industry, working closely with consultants, clients and teams, our founder, ${owner}, built a career around people: understanding them, supporting them and helping them succeed.`,
  "Then came a turning point. During a challenging time, Vanessa was retrenched. Like many others, it was uncertain, overwhelming and deeply personal.",
  "In the middle of that, something meaningful happened: people started reaching out. Not just to check in, but for help. Help finding jobs. Help finding talent. Help making connections.",
  "That's where Breakwaters Recruiting truly began. What started as helping others through a trusted network grew into a business built on care, resilience and genuine connection.",
  "Today that same drive shapes everything we do. It's never just about filling a role. It's about people, their livelihoods and the businesses they help build.",
];

const VALUES = [
  { title: "Care", body: "We care about people, not just placements." },
  { title: "Inspire", body: "We encourage growth and opportunity." },
  { title: "Deliver", body: "We follow through, consistently and reliably." },
];

const APPROACH = ["Personal and hands-on", "Flexible and mindful of your budget", "Fast, without losing quality", "Focused on long-term success"];

export default function AboutUsPage() {
  return (
    <>
      <PageMeta path="/about" />

      <header className="cx-header surface-navy">
        <div className="container container--narrow cx-header__inner">
          <h1>Our story starts with people.</h1>
          <p className="cx-lede">
            A human-centred recruitment business founded by {owner}, built on care, resilience and genuine connection.
          </p>
        </div>
      </header>

      <section className="cx-section" aria-labelledby="story-title">
        <div className="container cx-sticky">
          <Reveal className="cx-sticky__aside">
            <ImagePlaceholder label={`${owner}, Founder`} />
          </Reveal>
          <Reveal delay={100} className="cx-prose">
            <h2 id="story-title">How Breakwaters began</h2>
            {STORY.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
        </div>
      </section>

      <section className="cx-section surface-cream" aria-label="Mission and vision">
        <Reveal className="container container--narrow cx-pair2" data-stagger="">
          <div>
            <h2>Mission</h2>
            <p>To connect the right people to the right opportunities, creating value for both businesses and professionals.</p>
          </div>
          <div>
            <h2>Vision</h2>
            <p>A trusted, human-centred recruitment network that connects businesses with exceptional, niche talent and creates opportunities that genuinely change lives.</p>
          </div>
        </Reveal>
      </section>

      <section className="cx-section surface-khaki" aria-labelledby="values-title">
        <div className="container container--narrow">
          <Reveal className="cx-section__head"><h2 id="values-title">Three words we work by</h2></Reveal>
          <Reveal as="ul" className="cx-tiles" data-stagger="">
            {VALUES.map(({ title, body }) => (
              <li className="cx-tile" key={title}><h3>{title}</h3><p>{body}</p></li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cx-section" aria-labelledby="why-title">
        <div className="container container--narrow cx-sticky">
          <Reveal className="cx-sticky__aside">
            <h2 id="why-title">Why work with us</h2>
            <p className="cx-pull">More than recruitment. It's personal.</p>
          </Reveal>
          <div className="cx-prose">
            <Reveal className="cx-prose">
              <p>Hiring isn't just a business decision. It affects teams, projects and people's lives. That's why we do things a little differently.</p>
              <p>We take the time to understand what you need, not just on paper but in practice. We listen, we advise, and we work alongside you to find the right fit.</p>
            </Reveal>
            <Reveal as="ul" className="cx-grid2" data-stagger="" style={{ marginTop: "var(--sp-5)" }}>
              {APPROACH.map((item) => (
                <li key={item}><FiCheck aria-hidden="true" /><span>{item}</span></li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="cx-section surface-navy" aria-labelledby="cta-title">
        <div className="container">
          <Reveal className="cx-cta">
            <h2 id="cta-title">Ready to work with us?</h2>
            <p>Whether you're hiring or looking for your next opportunity, we'd like to hear from you.</p>
            <div className="cx-cta__actions"><Link to="/contact" className="btn btn--primary">Get in touch</Link></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
