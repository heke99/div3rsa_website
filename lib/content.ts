export const locale = "sv" as const;

export const company = {
  name: "Div3rsa AB",
  shortName: "Div3rsa",
  orgNumber: "559416-7149",
  email: "info@div3rsa.com",
  domain: "div3rsa.com",
  url: "https://div3rsa.com",
};

export const siteMeta = {
  homeTitle: "Div3rsa AB - Hemsidor, system, appar och SaaS",
  homeDescription:
    "Div3rsa AB bygger moderna hemsidor, webappar, kundportaler, SaaS-plattformar och digitala system för företag.",
  keywords: [
    "system development",
    "website development",
    "app development",
    "SaaS development",
    "customer portals",
    "web apps",
    "automation",
    "AI workflows",
    "dashboards",
    "Div3rsa AB",
  ],
};

export const navItems = [
  { label: "Tjänster", href: "/services" },
  { label: "Hemsidor", href: "/websites" },
  { label: "Bankgiro", href: "/foretagsbetalningar-bankgiro" },
  { label: "System", href: "/systems" },
  { label: "Kontakt", href: "/contact" },
];

export const websiteStyleLinks = [
  { label: "Premium 3D / Wow", href: "/websites/premium-3d" },
  { label: "Simple Information Website", href: "/websites/simple-info" },
  { label: "Hybrid / Modern Business", href: "/websites/hybrid-business" },
];

export const trustIndicators = [
  "Hemsidor",
  "System",
  "Kundportaler",
  "Bankgiroflöden",
  "Automation",
  "SaaS",
];

export const heroProductCards = [
  "3D / Wow",
  "Business",
  "Simple",
  "Bankgiro",
  "Portal",
  "Automation",
];

export const growthSteps = ["Website", "Portal", "Automation", "SaaS Platform"];

export const services = [
  {
    title: "System Development",
    text: "Admin portals, customer systems, internal tools, operations systems and SaaS platforms.",
  },
  {
    title: "Websites",
    text: "Modern, responsive and conversion-focused websites for companies that want to look serious online.",
  },
  {
    title: "Apps & Web Apps",
    text: "Mobile-friendly apps, dashboards, booking flows, customer portals and user systems.",
  },
  {
    title: "Automation & AI",
    text: "Automated workflows, AI assistants, data handling and smarter business processes.",
  },
  {
    title: "Customer Portals",
    text: "Secure portals where customers, partners or staff can log in, manage data, view status and interact with your business.",
  },
  {
    title: "Dashboards & Admin Panels",
    text: "Internal tools that help teams manage customers, operations, tasks, documents, payments and business workflows.",
  },
];

export const whyChoose = [
  {
    title: "We build both design and functionality",
    text: "A good website should not only look good. It should support your business, your sales and your internal processes.",
  },
  {
    title: "Business-first development",
    text: "We think about sales, operations, scalability and real usage from the beginning.",
  },
  {
    title: "Start small, scale later",
    text: "We can start with a website and later expand it into a customer portal, app or SaaS platform.",
  },
  {
    title: "Experience from real products",
    text: "Div3rsa works on digital platforms and products such as Gridex, Coordiqo, Bovaro and DealFlowIQ.",
  },
  {
    title: "Modern systems and automation",
    text: "We build with databases, dashboards, automation, APIs, payments and AI-ready workflows.",
  },
];

export const industries = [
  "Service companies",
  "Energy and electricity trading",
  "Real estate",
  "Healthcare and care operations",
  "Construction and field service",
  "Consulting companies",
  "Startups",
  "Local businesses",
  "SaaS and tech companies",
  "Logistics and delivery operations",
  "Municipal and public-sector operations",
  "Sales organizations",
];

export const solutionPackages = [
  {
    title: "Start Website",
    subtitle: "For companies that need a professional website quickly.",
    includes: [
      "Homepage",
      "About",
      "Services",
      "Contact",
      "Mobile responsive design",
      "Basic SEO structure",
      "Professional company presentation",
    ],
    cta: "Ask about Start Website",
  },
  {
    title: "Business Website",
    subtitle: "For companies that want stronger sales, better design and a more premium feeling.",
    includes: [
      "Multiple pages",
      "CTA flows",
      "Contact form",
      "Premium design",
      "Tracking-ready structure",
      "Blog/news possibility",
      "Login/customer portal possibility later",
    ],
    cta: "Ask about Business Website",
    featured: true,
  },
  {
    title: "Custom System / SaaS",
    subtitle: "For companies that need a real digital system.",
    includes: [
      "Admin dashboard",
      "Customer portal",
      "Database",
      "Roles and permissions",
      "Payments",
      "Automation",
      "Integrations",
      "Reporting and analytics",
      "Scalable system architecture",
    ],
    cta: "Discuss a custom system",
  },
];

export const caseStudies = [
  {
    title: "Gridex",
    displayUrl: "app.gridex.se",
    href: "https://app.gridex.se",
    description:
      "A platform for electricity trading operations, Ediel flows, customer management, onboarding, powers of attorney and operational workflows.",
    problem:
      "Electricity companies need structured systems for customer onboarding, metering points, powers of attorney, Ediel messages and operational follow-up.",
    solution:
      "Gridex is built as an operations platform for electricity trading workflows, customer administration, Ediel handling and process control.",
    features: [
      "Customer management",
      "Metering point handling",
      "Ediel message flows",
      "Powers of attorney",
      "Admin workflows",
      "Operational control",
    ],
    cta: "View Gridex",
  },
  {
    title: "Coordiqo",
    displayUrl: "coordiqo.com",
    href: "https://coordiqo.com",
    description:
      "A planning and operations system for companies that manage staff, assignments, resources, schedules and routes.",
    problem:
      "Many companies struggle to coordinate staff, assignments, resources, availability, routes and daily operational changes.",
    solution:
      "Coordiqo is designed as a planning and operations platform that helps companies manage schedules, tasks, resources and route-based work.",
    features: [
      "Staff planning",
      "Assignments",
      "Resource tracking",
      "Scheduling",
      "Route planning",
      "Operational overview",
    ],
    cta: "View Coordiqo",
  },
  {
    title: "Bovaro",
    displayUrl: "bovaro.se",
    href: "https://bovaro.se",
    description: "A digital product for property, housing or marketplace workflows.",
    problem:
      "Property and housing workflows often require better structure, digital presentation, search, customer flows and marketplace logic.",
    solution:
      "Bovaro is developed as a digital product concept for property, housing or marketplace-based workflows.",
    features: [
      "Property/housing workflows",
      "Marketplace structure",
      "Digital presentation",
      "Search and filtering",
      "Lead/contact flow",
      "Scalable product foundation",
    ],
    cta: "View Bovaro",
  },
  {
    title: "DealFlowIQ",
    displayUrl: "dealfloowiq.com",
    href: "https://dealfloowiq.com",
    description: "A deal intelligence and analysis platform for real estate, investors and business workflows.",
    problem:
      "Investors and real estate teams need better ways to analyze deals, compare opportunities and structure decision-making.",
    solution:
      "DealFlowIQ is built as a deal analysis and intelligence platform for real estate and investment workflows.",
    features: [
      "Deal analysis",
      "Real estate intelligence",
      "Investment workflows",
      "Dashboard structure",
      "Buyer/investor workflows",
      "Data-driven decision support",
    ],
    cta: "View DealFlowIQ",
  },
];

export const websiteStyles = [
  {
    slug: "premium-3d",
    title: "3D / Wow",
    shortTitle: "3D / Wow",
    badge: "Premium",
    href: "/websites/premium-3d",
    description:
      "För företag som vill skapa ett starkt första intryck med en visuell, modern och premium hemsida.",
    summary: "Mörkare premiumkänsla, stora visuella element, glow-effekter och en hero som verkligen syns.",
    bestFor: "SaaS, appar, techbolag och premiumtjänster",
    exampleTitle: "Premium hero med 3D-känsla",
    exampleText:
      "En stark första vy med 3D-produktkort, tydlig CTA, animerade sektioner och en exklusiv känsla.",
    previewSections: [
      "Stor hero med 3D-känsla",
      "Visuella produktkort",
      "Tjänster eller features",
      "Case eller social proof",
      "Premium CTA",
    ],
    fits: ["SaaS", "Appar", "Techbolag", "Premiumtjänster", "Investerarpitch", "Nya varumärken"],
    features: ["3D-känsla", "Glow-effekter", "Stark hero", "Animationer", "Premium CTA", "Modern identitet"],
    cta: "Jag vill ha 3D / Wow",
  },
  {
    slug: "hybrid-business",
    title: "Business",
    shortTitle: "Business",
    badge: "B2B",
    href: "/websites/hybrid-business",
    description:
      "För företag som vill ha en seriös, tydlig och konverterande hemsida som förklarar tjänsterna snabbt.",
    summary: "Ren B2B-layout med tydliga sektioner, tjänstekort, kundcase och smarta CTA-flöden.",
    bestFor: "Konsulter, servicebolag, systembolag och B2B-företag",
    exampleTitle: "Seriös B2B-sida med tydligt säljflöde",
    exampleText:
      "En modern företagssida med tydlig hero, tjänster, process, kundcase och kontaktflöde.",
    previewSections: [
      "Tydlig hero",
      "Tjänstekort",
      "Process eller arbetssätt",
      "Kundcase",
      "Kontakt eller boka demo",
    ],
    fits: ["B2B", "Konsulter", "Servicebolag", "Systemleverantörer", "Lokala företag", "Växande bolag"],
    features: ["Tjänstekort", "Case", "Process", "Kontaktflöde", "Tydliga CTA", "Förtroende"],
    cta: "Jag vill ha Business",
  },
  {
    slug: "simple-info",
    title: "Simple",
    shortTitle: "Simple",
    badge: "Snabb start",
    href: "/websites/simple-info",
    description:
      "För företag som behöver en enkel, snabb och professionell hemsida utan onödiga effekter.",
    summary: "Minimalistisk informationssida med mycket luft, enkel struktur och snabb väg till kontakt.",
    bestFor: "Småföretag, nystartade bolag och lokala tjänster",
    exampleTitle: "Ren informationssida som går snabbt att förstå",
    exampleText:
      "En lättläst sida med kort hero, om företaget, tjänster, FAQ och en tydlig kontaktväg.",
    previewSections: [
      "Kort hero",
      "Om företaget",
      "Tjänster",
      "FAQ",
      "Kontakt",
    ],
    fits: ["Småföretag", "Lokala tjänster", "Nystartade bolag", "Informationssidor", "Snabb lansering"],
    features: ["Kort hero", "Om oss", "Tjänster", "FAQ", "Kontakt", "Snabb struktur"],
    cta: "Jag vill ha Simple",
  },
];

export const processSteps = [
  {
    title: "Understand the need",
    text: "We go through what the company needs: website, app, system, portal or automation.",
  },
  {
    title: "Structure and design",
    text: "We define the flow, pages, features and design direction.",
  },
  {
    title: "Build the solution",
    text: "We develop using modern technology, responsive design and scalable structure.",
  },
  {
    title: "Launch and improve",
    text: "We help with launch, adjustments and further development.",
  },
];

export const techItems = [
  "Web apps",
  "Databases",
  "Payments",
  "API integrations",
  "Automation",
  "AI workflows",
  "Admin dashboards",
  "Roles and permissions",
  "Customer portals",
  "Hosting and deployment",
  "Analytics and reporting",
  "Secure authentication",
];

export const faqs = [
  {
    question: "Do you only build websites or also systems?",
    answer:
      "We build both. Div3rsa can create simple company websites, premium websites, web apps, internal systems, customer portals and full SaaS platforms.",
  },
  {
    question: "Can you build a customer portal or admin dashboard?",
    answer:
      "Yes. We can build login areas, customer portals, dashboards, admin panels, role-based access and internal workflows.",
  },
  {
    question: "Can you help with design?",
    answer: "Yes. We can help with layout, user experience, visual direction and modern interface design.",
  },
  {
    question: "Can you build on an existing website?",
    answer:
      "Yes. Depending on the current setup, we can either improve the existing website or rebuild it with a stronger foundation.",
  },
  {
    question: "Can you create login and user accounts?",
    answer: "Yes. We can build authentication, user accounts, roles and protected pages.",
  },
  {
    question: "Can you connect payments?",
    answer:
      "Yes. We can connect payment flows, subscriptions, checkout pages and customer billing portals depending on the project.",
  },
  {
    question: "Can you help with automation and AI?",
    answer:
      "Yes. We can build automated workflows, AI-assisted processes, internal tools and integrations that reduce manual work.",
  },
  {
    question: "How does a project start?",
    answer:
      "A project usually starts with a short discussion about your business, what you want to build, your current situation and what result you want.",
  },
  {
    question: "Do you work with both small and larger companies?",
    answer:
      "Yes. We can help smaller companies with professional websites and larger companies with more advanced systems, portals and operations tools.",
  },
  {
    question: "Can a simple website later become a system?",
    answer:
      "Yes. That is one of the main advantages of working with Div3rsa. We can build the foundation so it can later grow into a portal, app, dashboard or SaaS product.",
  },
];

export const aboutValues = [
  "Business-focused development",
  "Scalable digital products",
  "Clean design and strong user experience",
  "Long-term technical foundation",
  "Automation and AI-ready workflows",
];

export const projectTypes = [
  "Website",
  "Web app",
  "Mobile app",
  "Customer portal",
  "Admin dashboard",
  "SaaS platform",
  "Automation / AI workflow",
  "Existing system improvement",
  "Not sure yet",
];

export const budgetRanges = [
  "Under 25,000 SEK",
  "25,000-75,000 SEK",
  "75,000-150,000 SEK",
  "150,000+ SEK",
  "Not sure yet",
];

export const privacySections = [
  {
    title: "Data we may collect",
    text: "When you contact Div3rsa AB through email or a contact form, we may collect your name, company name, email address, phone number, project type, budget range and message content.",
  },
  {
    title: "Purpose of contact data",
    text: "We use contact data to answer your request, understand your business needs, prepare project discussions and provide relevant information about our services.",
  },
  {
    title: "Email communication",
    text: "If you email us or submit a contact request, we may reply by email and keep the conversation for follow-up and business administration.",
  },
  {
    title: "No unnecessary sale of personal data",
    text: "Div3rsa AB does not sell personal data. We only process information needed to communicate with you and manage business relationships.",
  },
  {
    title: "Privacy questions",
    text: "For privacy-related questions, contact us at info@div3rsa.com.",
  },
];

export const cookieSections = [
  {
    title: "What cookies are",
    text: "Cookies are small text files stored by your browser. They can help websites remember settings, measure usage and improve the visitor experience.",
  },
  {
    title: "Current use",
    text: "This first version of the Div3rsa website is built as a static company site and does not require unnecessary tracking cookies to function.",
  },
  {
    title: "Analytics may be added later",
    text: "Analytics or tracking tools may be added later to understand website performance and improve content. If that happens, this page should be updated with clear information.",
  },
  {
    title: "Cookie questions",
    text: "For cookie-related questions, contact us at info@div3rsa.com.",
  },
];
