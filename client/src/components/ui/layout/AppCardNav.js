import CardNav from './CardNav';
import defaultLogo from '../../../assets/logos/Logo-full.svg';

const defaultItems = [
  {
    label: 'About',
    bgColor: '#082658',
    textColor: '#fff',
    links: [
      { label: 'Home', ariaLabel: 'Home Page', href: '/' },
      { label: 'About Us', ariaLabel: 'About Us', href: '/about' }

    ]
  },
  {
    label: 'Contact',
    bgColor: '#10387fff',
    textColor: '#fff',
    links: [
      { label: 'Email', ariaLabel: 'Email us', href: 'mailto:support@breakwaters.co.za' },
      { label: 'LinkedIn', ariaLabel: 'LinkedIn', href: 'https://www.linkedin.com/' }
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
  ctaHref = 'mailto:support@breakwaters.co.za',
  rightContent,
  ...rest
}) => {
  const computedRightContent = rightContent || (
    <a
      className="card-nav-cta-button"
      style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
      href={ctaHref}
      aria-label={ctaLabel}
    >
      {ctaLabel}
    </a>
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
