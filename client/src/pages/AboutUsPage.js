import "../styling/content-pages.css";
import AppCardNav from "../components/ui/layout/AppCardNav";
import MissionSection from "../components/sections/MissionSection";
import Footer from "../components/ui/layout/Footer";
import PageMeta from "../components/seo/PageMeta";
import Reveal from "../components/ui/common/Reveal";
import ImagePlaceholder from "../components/ui/common/ImagePlaceholder";

const CONTACT_EMAIL = "mailto:recruits@breakwatersrecruiting.co.za";

const STORY_PARAGRAPHS = [
  "Breakwaters Recruiting was built from real life experience, both the highs and the unexpected lows.",
  "After nearly two decades in the IT industry, working closely with consultants, clients, and teams, our founder, Vanessa Boucher, built a career around people, understanding them, supporting them, and helping them succeed.",
  "Then came a turning point. During a challenging time, Vanessa was retrenched. Like many others, it was uncertain, overwhelming, and deeply personal.",
  "But in the middle of that, something meaningful happened: people started reaching out. Not just to check in, but for help. Help finding jobs. Help finding talent. Help making connections.",
  "And that's where Breakwaters Recruiting truly began. What started as simply helping others through a trusted network grew into a business built on care, resilience, and genuine connection.",
  "Today, that same passion still drives everything we do. Because for us, it's never just about filling a role. It's about people, their livelihoods, and the businesses they help build.",
];

const PILLARS = [
  {
    title: "Mission",
    body: "To connect the right people to the right opportunities, creating value for both businesses and professionals.",
  },
  {
    title: "Vision",
    body: "A trusted, human-centered recruitment network that connects businesses with exceptional, niche talent and creates opportunities that genuinely change lives.",
  },
  {
    title: "Values",
    body: "Care: we care deeply about people, not just placements. Inspire: we encourage growth and opportunity. Deliver: we follow through, consistently and reliably.",
  },
];

const APPROACH_ITEMS = [
  "Personal and hands-on",
  "Flexible and mindful of your budget",
  "Fast, without losing quality",
  "Focused on long-term success",
];

export default function AboutUsPage() {
  return (
    <main className="cx-page">
      <PageMeta
        title="About Breakwaters Recruiting | People-First Hiring Studio"
        description="Meet Breakwaters Recruiting: a human-centered recruitment business founded by Vanessa Boucher, built on care, resilience, and genuine connection."
        canonical="https://breakwatersrecruiting.co.za/about"
      />
      <AppCardNav />
      <MissionSection
        id="about-mission"
        entries={[{ lines: ["Our story starts", "with people."] }]}
      />

      <section className="cx-section cx-section--white">
        <div className="cx-section__inner cx-section__inner--wide cx-split">
          <Reveal>
            <ImagePlaceholder label="Vanessa Boucher, Founder" ratio="4 / 5" />
          </Reveal>
          <Reveal delay={100} className="cx-prose">
            <h2 className="cx-title cx-title--section">Our Story</h2>
            {STORY_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cx-section cx-section--cream">
        <div className="cx-section__inner cx-section__inner--wide">
          <Reveal className="cx-section__head">
            <h2 className="cx-title cx-title--section">Mission, Vision &amp; Values</h2>
          </Reveal>
          <Reveal className="cx-columns" delay={100}>
            {PILLARS.map(({ title, body }) => (
              <div className="cx-column" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cx-section cx-section--khaki">
        <Reveal className="cx-section__inner">
          <p className="cx-statement">Connect. Collaborate. Deliver.</p>
        </Reveal>
      </section>

      <section className="cx-section cx-section--white">
        <div className="cx-section__inner">
          <Reveal className="cx-prose">
            <h2 className="cx-title cx-title--section">Why Us</h2>
            <p style={{ fontWeight: 600, color: "#082658" }}>
              More Than Recruitment. It's Personal.
            </p>
            <p>
              At Breakwaters Recruiting, we know that hiring isn't just a
              business decision. It impacts teams, projects, and people's
              lives. That's why we do things a little differently.
            </p>
            <p>
              We take the time to truly understand what you need, not just
              on paper, but in practice. We listen. We advise. And we work
              alongside you to find the right fit.
            </p>
            <p>
              With deep experience in SAP, Oracle, and the broader IT space,
              and a network built over many years, we're able to connect you
              with people you can trust.
            </p>
          </Reveal>

          <div className="cx-list cx-list--compact" style={{ marginTop: 40 }}>
            {APPROACH_ITEMS.map((item, index) => (
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
            <h2 className="cx-title cx-title--section">Ready to work with us?</h2>
            <p>
              Whether you're hiring or looking for your next opportunity,
              we'd love to hear from you.
            </p>
            <div className="cx-cta__actions">
              <a href={CONTACT_EMAIL} className="cx-btn-pill">
                Get In Touch
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}
