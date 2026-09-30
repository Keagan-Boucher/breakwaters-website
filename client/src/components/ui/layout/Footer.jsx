import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import "../../../styling/Footer.css";
import Logo from "../common/LogoMark";
import { emailVanessa, linkedinUrl, facebookUrl, locality, region } from "../../../config/site";
import { SOLUTIONS, solutionPath } from "../../../config/solutions";

const SOCIALS = [
  { name: "LinkedIn", url: linkedinUrl, Icon: FaLinkedinIn },
  { name: "Facebook", url: facebookUrl, Icon: FaFacebookF },
].filter((s) => s.url);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo />
            <p><strong>People &amp; Talent Solutions</strong></p>
            <p>Talent Acquisition | Payroll Outsourcing | Coaching | Change Management</p>
            <p>{locality}, {region}.</p>
          </div>

          <nav aria-label="Footer">
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Solutions</Link></li>
              <li><Link to="/job-seekers">Job seekers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <ul className="footer__links" style={{ marginTop: "var(--sp-3)" }}>
              {SOLUTIONS.map((s) => (
                <li key={s.slug}><Link to={solutionPath(s.slug)}>{s.short}</Link></li>
              ))}
            </ul>
          </nav>

          <div>
            <dl className="footer__contact">
              <dt>Email</dt>
              <dd><a href={`mailto:${emailVanessa}`}>{emailVanessa}</a></dd>
            </dl>
            {SOCIALS.length > 0 && (
              <div className="footer__social">
                {SOCIALS.map(({ name, url, Icon }) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={`Breakwaters Recruiting on ${name}`}>
                    <Icon aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Breakwaters Recruiting. All rights reserved.</p>
          <ul className="footer__legal">
            <li><Link to="/privacy">Privacy policy</Link></li>
            <li><Link to="/terms">Terms and conditions</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
