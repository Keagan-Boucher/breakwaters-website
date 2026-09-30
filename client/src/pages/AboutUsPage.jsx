import { Link } from "react-router-dom";
import "../styling/content-pages.css";
import PageMeta from "../components/seo/PageMeta";
import Reveal from "../components/ui/common/Reveal";
import portrait from "../assets/images/founder-vanessa-boucher.webp";
import { owner } from "../config/site";

const STORY = [
  "Breakwaters was built from real-life experience: the highs, the challenges, and the unexpected turns that shape a career and a life.",
  `After nearly two decades working in the IT industry, our founder, ${owner}, built a career around people, working closely with consultants, clients and teams, understanding what businesses needed and helping people find opportunities where they could grow and succeed.`,
  "Then came a turning point. During the COVID-19 pandemic, Vanessa was retrenched. Like many people at the time, she suddenly found herself navigating uncertainty and wondering what would come next. It was uncertain, overwhelming and deeply personal. But something unexpected happened in the middle of that uncertainty.",
  "People started reaching out. Not just to check in, but to ask for help. Help finding jobs. Help finding talent. Help making connections.",
  "And that is where Breakwaters began. What started with Vanessa using her experience, relationships and trusted network to help people find their next opportunity gradually grew into a business built around something bigger: care, resilience and genuine connection.",
  "Today, those same principles remain at the heart of Breakwaters. While recruitment remains an important part of what we do, we have grown beyond simply filling vacancies. We help businesses navigate the broader people challenges that come with building and growing an organisation, from finding specialist talent, to supporting workforce needs, developing people and helping organisations navigate change.",
  "Because for us, it has never been just about filling a role. It is about people, their livelihoods, their potential, and the businesses they help build. That is the reason Breakwaters exists.",
];

const VALUES = [
  {
    title: "Care",
    lead: "We care deeply about people, not just outcomes.",
    body: "We take the time to understand the people behind every business challenge, placement, development journey and change initiative. We build genuine relationships and treat people with respect, empathy and integrity.",
  },
  {
    title: "Inspire",
    lead: "We create opportunities for people to grow.",
    body: "We believe people can develop, learn and achieve more when they are given the right support and opportunity. We encourage growth, confidence, curiosity and possibility for individuals and organisations.",
  },
  {
    title: "Deliver",
    lead: "We do what we say we will do.",
    body: "We take ownership, follow through and strive to make things happen. Our clients and candidates should be able to rely on us to be responsive, practical and consistent.",
  },
];

const WHY = [
  { title: "Human-led", body: "Technology can help us work smarter, but people are still at the centre of every successful organisation. We believe in genuine relationships and understanding the people behind the process." },
  { title: "Practical", body: "We're focused on solutions that work in the real world, not complicated frameworks that look good on paper but are difficult to implement." },
  { title: "Business-focused", body: "People initiatives should contribute to business outcomes. Whether we're recruiting, developing talent or supporting change, we keep the bigger picture in sight." },
  { title: "Flexible", body: "Every organisation is different. We can support you with a specific requirement or become a longer-term partner as your needs evolve." },
];

export default function AboutUsPage() {
  return (
    <>
      <PageMeta path="/about" />

      <header className="cx-header surface-navy">
        <div className="container container--narrow cx-header__inner">
          <h1>Our story starts with people.</h1>
          <p className="cx-lede">
            A People &amp; Talent Management business founded by {owner}, built on care, resilience and genuine connection.
          </p>
        </div>
      </header>

      <section className="cx-section" aria-labelledby="story-title">
        <div className="container cx-sticky">
          <Reveal className="cx-sticky__aside">
            <figure className="cx-figure">
              <img src={portrait} alt={`${owner}, founder of Breakwaters Recruiting`} width="666" height="900" loading="lazy" decoding="async" />
              <figcaption>{owner}, Founder</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={100} className="cx-prose">
            <h2 id="story-title">How Breakwaters began</h2>
            {STORY.map((p) => <p key={p}>{p}</p>)}
          </Reveal>
        </div>
      </section>

      <section className="cx-section surface-cream" aria-labelledby="purpose-title">
        <div className="container container--narrow">
          <Reveal className="cx-section__head">
            <h2 id="purpose-title">People at the centre. Business with purpose.</h2>
          </Reveal>
          <Reveal className="cx-pair2" data-stagger="">
            <div>
              <h3>Mission</h3>
              <p>To help businesses and people thrive through practical, human-led people and talent solutions.</p>
              <p>We connect organisations with the talent, capability and support they need to grow, while helping people develop, perform and reach their potential.</p>
            </div>
            <div>
              <h3>Vision</h3>
              <p>To be a trusted people and talent partner, helping organisations build the capability they need to grow and helping people build careers they can be proud of.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="cx-section surface-khaki" aria-labelledby="values-title">
        <div className="container container--narrow">
          <Reveal className="cx-section__head"><h2 id="values-title">Three words we work by</h2></Reveal>
          <Reveal as="ul" className="cx-tiles" data-stagger="">
            {VALUES.map(({ title, lead, body }) => (
              <li className="cx-tile" key={title}><h3>{title}</h3><p><strong>{lead}</strong></p><p>{body}</p></li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cx-section" aria-labelledby="why-title">
        <div className="container container--narrow">
          <Reveal className="cx-section__head"><h2 id="why-title">Why work with us</h2></Reveal>
          <Reveal as="ul" className="cx-pair2" data-stagger="">
            {WHY.map(({ title, body }) => (
              <li key={title}><h3>{title}</h3><p>{body}</p></li>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="cx-section surface-navy" aria-labelledby="cta-title">
        <div className="container">
          <Reveal className="cx-cta">
            <h2 id="cta-title">Let's talk</h2>
            <p>Whether you're solving a people challenge or looking for your next opportunity, we'd like to hear from you.</p>
            <div className="cx-cta__actions"><Link to="/contact" className="btn btn--primary">Get in touch</Link></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
