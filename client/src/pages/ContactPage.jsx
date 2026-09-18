import "../styling/content-pages.css";
import PageMeta from "../components/seo/PageMeta";
import Reveal from "../components/ui/common/Reveal";
import ContactDetails from "../components/ui/common/ContactDetails";
import ContactForm from "../components/ui/forms/ContactForm";
import { locality } from "../config/site";

export default function ContactPage() {
  return (
    <>
      <PageMeta path="/contact" />

      <header className="cx-header surface-cream">
        <div className="container container--narrow cx-header__inner">
          <p className="cx-eyebrow">Contact · {locality}</p>
          <h1>Get in touch</h1>
          <p className="cx-lede">
            Email, call or message us directly, or leave your details in the short form below.
            Either way it lands with a real person, not a ticket queue.
          </p>
        </div>
      </header>

      <section className="cx-section" aria-labelledby="direct-title">
        <div className="container container--narrow cx-contact">
          <Reveal className="cx-contact__details">
            <h2 id="direct-title">Reach us directly</h2>
            <p>Job seekers and employers go to different inboxes so the right person answers first.</p>
            <ContactDetails />
          </Reveal>
          <Reveal delay={80} className="cx-form-wrap" aria-labelledby="form-title" as="section">
            <div className="cx-prose" style={{ marginBottom: "var(--sp-5)" }}>
              <h2 id="form-title">Or leave your details</h2>
              <p>A few lines is enough. We'll reply by email, usually within a working day.</p>
            </div>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="cx-section surface-khaki">
        <Reveal className="container"><p className="cx-statement">Connect. Collaborate. Deliver.</p></Reveal>
      </section>
    </>
  );
}
