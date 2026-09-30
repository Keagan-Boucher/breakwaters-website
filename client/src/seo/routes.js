import { SOLUTIONS, solutionPath } from "../config/solutions.js";

// Per-route metadata. Used by <PageMeta> at runtime and by scripts/prerender.mjs
// at build time, so both paths emit identical tags.
// `parent` adds a middle breadcrumb; `service` makes prerender emit Service JSON-LD.
export const ROUTES = {
  "/": {
    title: "People & Talent Solutions South Africa | Breakwaters Recruiting",
    description:
      "People & talent solutions for South African businesses: talent acquisition, payroll outsourcing, coaching and change management, from Johannesburg. Specialist SAP, Oracle and IT recruitment.",
  },
  "/services": {
    title: "People & Talent Solutions | Breakwaters Recruiting",
    description:
      "Talent acquisition, payroll outsourcing, coaching and development, and change management for South African businesses. Practical people solutions built around your business.",
    breadcrumb: "Solutions",
  },
  "/job-seekers": {
    title: "SAP, Oracle & IT Jobs South Africa | Breakwaters Recruiting",
    description:
      "Looking for SAP, Oracle or IT jobs in South Africa? Send us your CV and get a recruiter who reads it personally and matches you with roles that fit your goals.",
    breadcrumb: "Job seekers",
  },
  "/about": {
    title: "About Vanessa Boucher & Breakwaters Recruiting",
    description:
      "Founded by Vanessa Boucher after nearly two decades in IT, Breakwaters is a people and talent business built on care, resilience and genuine connection. Our story.",
    breadcrumb: "About",
  },
  "/contact": {
    title: "Contact Breakwaters Recruiting | Johannesburg",
    description:
      "Reach Breakwaters Recruiting in Johannesburg by email, WhatsApp or a short form. Job seekers and employers both get a real person, not a ticket queue.",
    breadcrumb: "Contact",
  },
  "/privacy": {
    title: "Privacy Policy | Breakwaters Recruiting",
    description:
      "How Breakwaters Recruiting collects, uses and protects personal information from job seekers and employers, in line with POPIA.",
    breadcrumb: "Privacy policy",
  },
  "/terms": {
    title: "Terms and Conditions | Breakwaters Recruiting",
    description:
      "The terms that apply when you use the Breakwaters Recruiting website or contact us through it.",
    breadcrumb: "Terms and conditions",
  },
  ...Object.fromEntries(
    SOLUTIONS.map((x) => [
      solutionPath(x.slug),
      { title: x.metaTitle, description: x.metaDescription, breadcrumb: x.title, parent: "/services", service: x.title },
    ]),
  ),
  // Rendered for any unknown path. No canonical, not in the sitemap.
  "/404": {
    title: "Page not found | Breakwaters Recruiting",
    description: "That page doesn't exist on the Breakwaters Recruiting site.",
    noindex: true,
  },
};
