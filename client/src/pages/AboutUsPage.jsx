import { Link } from "react-router-dom";
import "../styling/content-pages.css";
import PageMeta from "../components/seo/PageMeta";
import Reveal from "../components/ui/common/Reveal";
import FounderPortrait from "../components/ui/common/FounderPortrait";
import { owner } from "../config/site";

const STORY = [
  "Breakwaters Recruiting was built from real life experience, both the highs and the unexpected lows.",
  `After nearly two decades in the IT industry, working closely with consultants, clients and teams, our founder, ${owner}, built a career around people: understanding them, supporting them and helping them succeed.`,
  "Then came a turning point. During a challenging time, Vanessa was retrenched. Like many others, it was uncertain, overwhelming and deeply personal.",
  "In the middle of that, something meaningful happened: people started reaching out. Not just to check in, but for help. Help finding jobs. Help finding talent. Help making connections.",
  "That's where Breakwaters Recruiting truly began. What started as helping others through a trusted network grew into a business built on care, resilience and genuine connection.",
  "Today that same drive shapes everything we do. It's never just about filling a role. It's about people, their livelihoods and the businesses they help build.",
];

const PILLARS = [
  { title: "Mission", body: "To connect the right people to the right opportunities, creating value for both businesses and professionals." },
  { title: "Vision", body: "A trusted, human-centred recruitment network that connects businesses with exceptional, niche talent and creates opportunities that genuinely change lives." },
  { title: "Values", body: "Care: we care about people, not just placements. Inspire: we encourage growth and opportunity. Deliver: we follow through, consistently and reliably." },
];

const APPROACH = ["Personal and hands-on", "Flexible and mindful of your budget", "Fast, without losing quality", "Focused on long-term success"];

export default function AboutUsPage() {
  return (
    <>
      <PageMeta path="/about" />

      <header className="cx-header surface-navy">
        <div className="container container--narrow cx-header__inner">
          <p className="cx-eyebrow">About Breakwaters Recruiting</p>
          <h1>Our story starts with people.</h1>
          <p className="cx-lede">
            A human-centred recruitment business founded by {owner}, built on care, resilience and genuine connection.
          </p>
        </div>
      </header>

      <section className="cx-section" aria-labelledby="story-title">
        <div className="container container--narrow cx-split">
          <Reveal><FounderPortrait /></Reveal>
          <Reveal delay={100} className="cx-prose">
            <h2 id="story-title">How Breakwaters began</h2>
            {STORY.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
        </div>
      </section>

      <section className="cx-section surface-cream" aria-labelledby="pillars-title">
        <div className="container container--narrow">
          <Reveal className="cx-section__head"><h2 id="pillars-title">Mission, vision and values</h2></Reveal>
          <Reveal className="cx-columns" delay={100}>
            {PILLARS.map(({ title, body }) => (
              <div className="cx-column" key={title}><h3>{title}</h3><p>{body}</p></div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cx-section surface-khaki">
        <Reveal className="container"><p className="cx-statement">Connect. Collaborate. Deliver.</p></Reveal>
      </section>

      <section className="cx-section" aria-labelledby="why-title">
        <div className="container container--text">
          <Reveal className="cx-prose">
            <h2 id="why-title">Why work with us</h2>
            <p><strong>More than recruitment. It's personal.</strong></p>
            <p>Hiring isn't just a business decision. It affects teams, projects and people's lives. That's why we do things a little differently.</p>
            <p>We take the time to understand what you need, not just on paper but in practice. We listen, we advise, and we work alongside you to find the right fit.</p>
            <p>With deep experience in SAP, Oracle and the broader IT space, and a network built over many years, we connect you with people you can trust.</p>
          </Reveal>
          <ol className="cx-list cx-list--compact cx-list--plain" style={{ marginTop: "var(--sp-6)" }}>
            {APPROACH.map((item, i) => (
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
            <h2 id="cta-title">Ready to work with us?</h2>
            <p>Whether you're hiring or looking for your next opportunity, we'd like to hear from you.</p>
            <div className="cx-cta__actions"><Link to="/contact" className="btn btn--primary">Get in touch</Link></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
