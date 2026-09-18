import { Link } from "react-router-dom";
import "../styling/content-pages.css";
import PageMeta from "../components/seo/PageMeta";

// Prerendered to build/404/index.html; Apache serves it with a real 404
// status (ErrorDocument in .htaccess) so unknown URLs are not soft 404s.
export default function NotFoundPage() {
  return (
    <>
      <PageMeta path="/404" />
      <section className="cx-section surface-navy" aria-labelledby="nf-title">
        <div className="container">
          <div className="cx-cta">
            <h1 id="nf-title">Page not found.</h1>
            <p>That link doesn't go anywhere. Try the homepage, or get in touch if you were looking for something specific.</p>
            <div className="cx-cta__actions">
              <Link to="/" className="btn btn--primary">Go to the homepage</Link>
              <Link to="/contact" className="btn btn--secondary">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
