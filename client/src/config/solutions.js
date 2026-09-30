// The four People & Talent Solutions. Single source for the /services overview,
// the /services/<slug> pages, the footer links, route metadata and the sitemap.
export const SOLUTIONS = [
  {
    slug: "talent-acquisition",
    surface: "cream", // header colour band
    listStyle: "pills", // how the list is drawn: pills | checks | steps | columns
    title: "Talent Acquisition",
    short: "Talent Acquisition",
    blurb: "Finding the right people for your business",
    headline: "Find the right people. Build the right capability.",
    metaTitle: "Talent Acquisition & IT Recruitment South Africa | Breakwaters",
    metaDescription:
      "Specialist talent acquisition for South African businesses: SAP, Oracle, IT and professional services recruitment, permanent and contract, from Johannesburg.",
    lede: "The right person can make all the difference.",
    body: [
      "Breakwaters helps South African businesses identify, attract and secure the talent they need to perform and grow. Our recruitment approach combines market knowledge, careful candidate assessment and an understanding of your business, not simply the requirements of a job description.",
      "We focus on finding people who bring the right combination of skills, experience, potential and organisational fit.",
    ],
    listTitle: "Our specialist recruitment experience includes",
    items: [
      "IT & Technology Recruitment",
      "SAP Recruitment",
      "Oracle Recruitment",
      "Professional Services Recruitment",
      "Specialist and hard-to-find skills",
      "Permanent Recruitment",
      "Contract Recruitment",
      "Specialist Talent Acquisition",
    ],
    outro: "Whether you're building a team, replacing a critical skill or looking for a specialist resource, we help you find the talent your business needs.",
  },
  {
    slug: "workforce-payroll",
    surface: "khaki", // header colour band
    listStyle: "checks", // how the list is drawn: pills | checks | steps | columns
    title: "Workforce & Payroll Solutions",
    short: "Payroll Outsourcing",
    blurb: "Taking the complexity out of payroll",
    headline: "Less administration. More time for your business.",
    metaTitle: "Payroll Outsourcing & Workforce Solutions | Breakwaters Recruiting",
    metaDescription:
      "Flexible payroll outsourcing and workforce administration for South African businesses, including contractor administration and workforce planning.",
    lede: "Managing employees, contractors and payroll can be time-consuming and complex.",
    body: [
      "Breakwaters provides flexible workforce and payroll outsourcing solutions that help businesses manage their people more efficiently while reducing the administrative burden.",
      "Our approach is practical and tailored to your workforce requirements. We work with you to understand what you need and provide the level of support that makes sense for your business.",
    ],
    listTitle: "Our workforce solutions can support",
    items: [
      "Payroll outsourcing",
      "Workforce administration",
      "Contractor and resource administration",
      "Flexible workforce support",
      "Workforce planning",
      "Payroll and people-process support",
    ],
    outro: "Our goal is simple: take care of the people administration so you can focus on your business.",
  },
  {
    slug: "coaching-development",
    surface: "navy", // header colour band
    listStyle: "steps", // how the list is drawn: pills | checks | steps | columns
    title: "Coaching & Development",
    short: "Coaching & Development",
    blurb: "Helping people and leaders perform and grow",
    headline: "Develop your people. Strengthen your business.",
    metaTitle: "Coaching & Leadership Development South Africa | Breakwaters",
    metaDescription:
      "Individual coaching, leadership development and capability-building for South African organisations that connect personal growth with business needs.",
    lede: "Great people don't just need training. They need opportunities to grow, build confidence and develop the capabilities required for their current and future roles.",
    body: [
      "Breakwaters supports individuals, leaders and teams through coaching, talent development and capability-building solutions that connect personal growth with organisational needs.",
      "We believe development should go beyond ticking a training box. It should help people perform better today while building the skills and capabilities your organisation will need tomorrow.",
    ],
    listTitle: "Our coaching and development solutions include",
    items: [
      "Individual Coaching",
      "Leadership Development",
      "Career Development",
      "Talent Development",
      "Skills & Capability Development",
      "Career Pathways",
      "Development Planning",
      "Learning & Development Support",
    ],
    outro: "Turn potential into capability. By connecting individual development with business requirements, we help organisations build stronger people, stronger teams and stronger capability.",
  },
  {
    slug: "change-management",
    surface: "cream", // header colour band
    listStyle: "columns", // how the list is drawn: pills | checks | steps | columns
    title: "Change Management",
    short: "Change Management",
    blurb: "Helping organisations navigate change successfully",
    headline: "Help your people navigate change successfully.",
    metaTitle: "Change Management Services South Africa | Breakwaters Recruiting",
    metaDescription:
      "Practical change management for South African organisations: technology and process change, change readiness, communication, engagement and adoption.",
    lede: "Whatever the reason for change, successful implementation ultimately depends on people.",
    body: [
      "Change can involve new technology, organisational restructuring, changing processes, business growth or a shift in strategy.",
      "Breakwaters helps organisations manage the people side of change, helping employees understand what is changing, why it matters and what they need to do to move forward. We support organisations with practical change management approaches that encourage communication, engagement and adoption.",
    ],
    listTitle: "Our change management solutions include",
    items: [
      "Organisational Change",
      "Technology & Digital Change",
      "Process Change",
      "Change Readiness",
      "Communication & Engagement",
      "Change Adoption",
      "People Impact Assessments",
      "Stakeholder Engagement",
    ],
    outro: "Change happens. How you manage it matters. We help organisations create the understanding, capability and support people need to move through change successfully.",
  },
];

export const JOURNEY = ["Attract", "Recruit", "Onboard", "Develop", "Retain", "Change", "Grow"];

export const solutionPath = (slug) => `/services/${slug}`;
