import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import Footer from "../ui/layout/Footer";

export default function Layout() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
