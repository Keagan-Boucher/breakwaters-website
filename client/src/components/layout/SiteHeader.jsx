import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoFull from "../../assets/logos/Logo-full.svg";
import "../../styling/header.css";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/job-seekers", label: "Job seekers" },
  { to: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const btnRef = useRef(null);
  const panelRef = useRef(null);
  const { pathname } = useLocation();

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  // Escape closes; Tab is trapped inside header while open; focus returns to trigger.
  useEffect(() => {
    if (!open) return undefined;
    const trigger = btnRef.current;
    const focusables = () =>
      Array.from(panelRef.current?.querySelectorAll("a[href], button:not([disabled])") ?? []);
    focusables()[0]?.focus();
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") { setOpen(false); return; }
      if (e.key !== "Tab") return;
      const items = [trigger, ...focusables()];
      const i = items.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); items[items.length - 1].focus(); }
      else if (!e.shiftKey && i === items.length - 1) { e.preventDefault(); trigger.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [open]);

  return (
    <header className={`site-header${open ? " site-header--open" : ""}`}>
      <div className="container site-header__bar">
        <Link to="/" className="site-header__brand" aria-label="Breakwaters Recruiting home">
          <img src={logoFull} alt="" width="648" height="153" />
        </Link>

        <nav className="site-header__nav" aria-label="Primary" ref={panelRef} id={panelId}>
          <ul className="site-header__list">
            {NAV.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === "/"} className="site-header__link">
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn--primary site-header__cta">
            Get in touch
          </Link>
        </nav>

        <button
          ref={btnRef}
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="site-header__burger" aria-hidden="true" />
          <span>{open ? "Close" : "Menu"}</span>
        </button>
      </div>
    </header>
  );
}
