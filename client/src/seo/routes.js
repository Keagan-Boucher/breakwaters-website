// Per-route metadata. Used by <PageMeta> at runtime and by scripts/prerender.mjs
// at build time, so both paths emit identical tags.
export const ROUTES = {
  "/": {
    title: "Breakwaters Recruiting | Recruitment Agency, South Africa",
    description:
      "Human-led recruitment agency in Johannesburg connecting South African businesses with SAP, Oracle and IT talent, and job seekers with roles that actually fit.",
  },
  "/services": {
    title: "Talent Acquisition & IT Recruitment Services | Breakwaters",
    description:
      "Talent acquisition, executive search, staff augmentation and payroll outsourcing for South African businesses, with specialist SAP, Oracle and IT recruitment.",
    breadcrumb: "Services",
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
      "Founded by Vanessa Boucher after nearly two decades in IT consulting, Breakwaters Recruiting is built on care, resilience and genuine connection. Our story.",
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
};
