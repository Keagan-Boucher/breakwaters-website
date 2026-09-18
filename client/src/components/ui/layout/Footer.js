import { Link } from 'react-router-dom';
import '../../../styling/Footer.css';
import { ReactComponent as Logo } from '../../../assets/logos/logo.svg';
import { emailRecruits, phoneDisplay, phoneE164 } from '../../../config/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <nav className="footer__links" aria-label="Footer navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/services">Services</Link>
            <Link to="/job-seekers">Job Seekers</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="footer__logo" aria-hidden="true">
            <Logo className="footer__logo-svg" focusable="false" />
          </div>
          <div className="footer__contact">
            <p>
              Email:{' '}
              <a href={`mailto:${emailRecruits}`}>{emailRecruits}</a>
            </p>
            <p>
              Phone:{' '}
              <a href={`tel:${phoneE164}`}>{phoneDisplay}</a>
            </p>
            <p>LinkedIn: Breakwaters Recruiting</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Breakwaters Recruiting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
