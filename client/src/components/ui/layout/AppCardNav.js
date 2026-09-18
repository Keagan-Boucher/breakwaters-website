import { Link } from 'react-router-dom';
import CardNav from './CardNav';
import defaultLogo from '../../../assets/logos/Logo-full.svg';

const defaultItems = [
  {
    label: 'Company',
    bgColor: '#082658',
    textColor: '#fff',
    links: [
      { label: 'Home', ariaLabel: 'Home Page', href: '/' },
      { label: 'About Us', ariaLabel: 'About Us', href: '/about' }
    ]
  },
  {
    label: 'Solutions',
    bgColor: '#10387fff',
    textColor: '#fff',
    links: [
      { label: 'Our Services', ariaLabel: 'Our Services', href: '/services' },
      { label: 'For Job Seekers', ariaLabel: 'For Job Seekers', href: '/job-seekers' }
    ]
  },
  {
    label: 'Contact',
    bgColor: '#1a4fa3',
    textColor: '#fff',
    links: [
      { label: 'Contact Us', ariaLabel: 'Contact Us', href: '/contact' },
      { label: 'Email', ariaLabel: 'Email us', href: 'mailto:recruits@breakwatersrecruiting.co.za' },
      { label: 'Phone', ariaLabel: 'Call us', href: 'tel:+27823703603' }
    ]
  }
];

const AppCardNav = ({
  logo = defaultLogo,
  logoAlt = 'Company Logo',
  items = defaultItems,
  baseColor = '#fff',
  menuColor = '#082658',
  buttonBgColor = '#082658',
  buttonTextColor = '#fff',
  ease = 'power3.out',
  ctaLabel = 'Get In Touch',
  ctaHref = '/contact',
  rightContent,
  ...rest
}) => {
  const computedRightContent = rightContent || (
    <Link
      className="card-nav-cta-button"
      style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
      to={ctaHref}
      aria-label={ctaLabel}
    >
      {ctaLabel}
    </Link>
  );

  return (
    <CardNav
      logo={logo}
      logoAlt={logoAlt}
      items={items}
      baseColor={baseColor}
      menuColor={menuColor}
      buttonBgColor={buttonBgColor}
      buttonTextColor={buttonTextColor}
      ease={ease}
      rightContent={computedRightContent}
      {...rest}
    />
  );
};

export default AppCardNav;
