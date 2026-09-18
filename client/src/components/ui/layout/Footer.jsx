import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import "../../../styling/Footer.css";
import Logo from "../common/LogoMark";
import { emailVanessa, linkedinUrl, facebookUrl, locality, region } from "../../../config/site";

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
            <p>Human-led recruitment for SAP, Oracle and IT teams. {locality}, {region}.</p>
          </div>

          <nav aria-label="Footer">
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/job-seekers">Job seekers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
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
