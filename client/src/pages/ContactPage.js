import "../styling/content-pages.css";
import AppCardNav from "../components/ui/layout/AppCardNav";
import Footer from "../components/ui/layout/Footer";
import PageMeta from "../components/seo/PageMeta";
import Reveal from "../components/ui/common/Reveal";

const ROUTING_ROWS = [
  {
    label: "Job seekers",
    content: (
      <p>
        Email{" "}
        <a href="mailto:recruits@breakwatersrecruiting.co.za">
          recruits@breakwatersrecruiting.co.za
        </a>{" "}
        to get started in your job search.
      </p>
    ),
  },
  {
    label: "Businesses",
    content: (
      <p>
        Email{" "}
        <a href="mailto:vanessa@breakwatersrecruiting.co.za">
          vanessa@breakwatersrecruiting.co.za
        </a>{" "}
        to enquire about us finding you talent.
      </p>
    ),
  },
];

const CONTACT_ROWS = [
  {
    label: "Email",
    content: (
      <p>
        <a href="mailto:vanessa@breakwatersrecruiting.co.za">
          vanessa@breakwatersrecruiting.co.za
        </a>
        <br />
        <a href="mailto:recruits@breakwatersrecruiting.co.za">
          recruits@breakwatersrecruiting.co.za
        </a>
      </p>
    ),
  },
  {
    label: "Phone",
    content: (
      <p>
        <a href="tel:+27823703603">082 370 3603</a>
      </p>
    ),
  },
  {
    label: "LinkedIn",
    content: <p>Breakwaters Recruiting</p>,
  },
];

export default function ContactPage() {
  return (
    <main className="cx-page">
      <PageMeta
        title="Contact Us | Breakwaters Recruiting"
        description="Get in touch with Breakwaters Recruiting by email or phone, we'd love to hear from you."
        canonical="https://breakwatersrecruiting.co.za/contact"
      />
      <AppCardNav />

      <header className="cx-header cx-header--cream">
        <div className="cx-header__inner">
          <h1 className="cx-title">Get in Touch</h1>
          <p className="cx-lede">
            We'd love to hear from you. No forms, no ticketing system, just a
            real person on the other end.
          </p>
        </div>
      </header>

      <section className="cx-section cx-section--white">
        <div className="cx-section__inner">
          <Reveal className="cx-section__head">
            <h2 className="cx-title cx-title--section">Not Sure Who to Email?</h2>
          </Reveal>
          <div className="cx-list cx-list--labelled">
            {ROUTING_ROWS.map(({ label, content }) => (
              <div className="cx-row" key={label}>
                <span className="cx-row__index">{label}</span>
                <div className="cx-row__body">{content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cx-section cx-section--khaki">
        <Reveal className="cx-section__inner">
          <p className="cx-statement">Connect. Collaborate. Deliver.</p>
        </Reveal>
      </section>

      <section className="cx-section cx-section--cream">
        <div className="cx-section__inner">
          <Reveal className="cx-section__head">
            <h2 className="cx-title cx-title--section">Reach Us Directly</h2>
          </Reveal>
          <div className="cx-list cx-list--labelled">
            {CONTACT_ROWS.map(({ label, content }) => (
              <div className="cx-row" key={label}>
                <span className="cx-row__index">{label}</span>
                <div className="cx-row__body">{content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
