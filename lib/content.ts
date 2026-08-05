//lib/content.ts
export const locale = "sv" as const;

export const company = {
  name: "Diversa Nordic AB",
  shortName: "Diversa Nordic",
  orgNumber: "556855-4884",
  email: "info@div3rsa.com",
  domain: "div3rsa.com",
  url: "https://div3rsa.com",
};

export const siteMeta = {
  homeTitle: "Diversa Nordic - digitala produkter och skräddarsydd utveckling",
  homeDescription:
    "Diversa Nordic utvecklar SaaS-produkter, verksamhetssystem, kundportaler och integrationsbara digitala plattformar för företag och organisationer.",
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
    "Diversa Nordic AB",
  ],
};

export const navItems = [
  { label: "Produkter", href: "/systems" },
  { label: "Systemutveckling", href: "/services" },
  { label: "Hemsidor", href: "/websites" },
  { label: "Om oss", href: "/about" },
  { label: "Kontakt", href: "/contact" },
];

export const websiteStyleLinks = [
  { label: "Premium 3D / Wow", href: "/websites/premium-3d" },
  { label: "Simple Information Website", href: "/websites/simple-info" },
  { label: "Hybrid / Modern Business", href: "/websites/hybrid-business" },
];

export const trustIndicators = [
  "SaaS-plattformar",
  "Verksamhetssystem",
  "Kundportaler",
  "API & integrationer",
  "Automation",
  "Databaser",
];

export const heroProductCards = [
  "Nordklart",
  "Gridex OPS",
  "Kommunsign",
  "Kundexa",
  "Coordiqo",
  "Trafexa",
];

export const growthSteps = ["Website", "Portal", "Automation", "SaaS Platform"];

export const services = [
  {
    title: "SaaS & verksamhetssystem",
    text: "Kompletta plattformar med organisationsstruktur, roller, arbetsflöden, databas och administration.",
  },
  {
    title: "Kund- och partnerportaler",
    text: "Säkra inloggade ytor där kunder, partners och personal kan hantera data, dokument, status och ärenden.",
  },
  {
    title: "API & integrationer",
    text: "REST API:er, webhooks och integrationer som kopplar systemet till externa tjänster och befintliga processer.",
  },
  {
    title: "Automation & AI",
    text: "Automatiserade flöden, beslutsstöd och AI-assisterade processer som minskar manuellt arbete.",
  },
  {
    title: "Admin & operativ styrning",
    text: "Dashboards och interna verktyg för kunder, avtal, uppgifter, ekonomi, dokument och daglig drift.",
  },
  {
    title: "Produktdesign & webb",
    text: "Tydlig UX, modern design och publika produktsidor som hänger ihop med systemets faktiska funktioner.",
  },
];

export const whyChoose = [
  {
    title: "Vi förstår hela systemkedjan",
    text: "Gränssnitt, affärslogik, databas, behörigheter och integrationer planeras som en sammanhängande produkt.",
  },
  {
    title: "Byggt för verklig användning",
    text: "Vi utgår från användarnas dagliga arbete, ansvar och beslut – inte från funktioner som bara ser bra ut i en demo.",
  },
  {
    title: "Skalbar struktur från start",
    text: "Lösningen kan växa med fler organisationer, användare, moduler och integrationer utan att kärnan behöver byggas om.",
  },
  {
    title: "Erfarenhet från flera branscher",
    text: "Våra produkter täcker bland annat ekonomi, elhandel, offentlig sektor, CRM, transport och fastighet.",
  },
  {
    title: "Tydlig produkt och stark design",
    text: "Tekniken ska vara stabil, men systemet ska också vara enkelt att förstå, sälja in och arbeta i varje dag.",
  },
  {
    title: "Långsiktig utvecklingspartner",
    text: "Vi kan fortsätta med drift, vidareutveckling, nya integrationer och produktförbättringar efter lansering.",
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
    title: "Digital förstudie",
    subtitle: "För verksamheter som behöver strukturera behovet innan utvecklingen startar.",
    includes: [
      "Processkartläggning",
      "Roller och användarflöden",
      "Funktionsstruktur",
      "Teknisk rekommendation",
      "Prioriterad utvecklingsplan",
      "Kostnads- och fasindelning",
    ],
    cta: "Boka en förstudie",
  },
  {
    title: "Verksamhetssystem",
    subtitle: "För företag som behöver en komplett intern plattform eller kundportal.",
    includes: [
      "Admin och dashboards",
      "Kund- eller partnerportal",
      "Databas och behörigheter",
      "Arbetsflöden och automation",
      "API och integrationer",
      "Driftsättning",
    ],
    cta: "Diskutera ert system",
    featured: true,
  },
  {
    title: "SaaS-produkt",
    subtitle: "För bolag som vill lansera och skala en egen digital produkt.",
    includes: [
      "Multi-tenant-arkitektur",
      "Onboarding och abonnemang",
      "Roller och organisationsstruktur",
      "Produktdesign",
      "API, webhooks och integrationer",
      "Skalbar teknisk grund",
    ],
    cta: "Bygg en SaaS-produkt",
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
    title: "Kartlägg verksamheten",
    text: "Vi går igenom användare, roller, data, beslut och de arbetsflöden systemet ska förenkla.",
  },
  {
    title: "Designa produktstrukturen",
    text: "Vi definierar moduler, informationsarkitektur, datamodell, gränssnitt och integrationspunkter.",
  },
  {
    title: "Bygg och verifiera",
    text: "Vi utvecklar hela lösningen och testar att UI, API, databas och behörigheter fungerar konsekvent tillsammans.",
  },
  {
    title: "Lansera och utveckla vidare",
    text: "Efter driftsättning följer vi upp användningen och bygger vidare när verksamheten eller produkten växer.",
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
      "We build both. Diversa Nordic can create simple company websites, premium websites, web apps, internal systems, customer portals and full SaaS platforms.",
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
      "Yes. That is one of the main advantages of working with Diversa Nordic. We can build the foundation so it can later grow into a portal, app, dashboard or SaaS product.",
  },
];

export const aboutValues = [
  "Affärsnära systemutveckling",
  "Skalbara digitala produkter",
  "Tydlig design och användarupplevelse",
  "Långsiktig teknisk grund",
  "Automation och integrationsbara flöden",
];

export const projectTypes = [
  "Verksamhetssystem",
  "SaaS-plattform",
  "Kund- eller partnerportal",
  "Admin och dashboard",
  "API och integration",
  "Automation / AI-flöde",
  "Webbapp",
  "Mobilapp",
  "Hemsida eller produktsida",
  "Vidareutveckling av befintligt system",
  "Inte säker ännu",
];

export const budgetRanges = [
  "Inte säker ännu",
  "Under 50 000 SEK",
  "50 000–150 000 SEK",
  "150 000–500 000 SEK",
  "500 000+ SEK",
];

export const privacySections = [
  {
    title: "Data we may collect",
    text: "When you contact Diversa Nordic AB through email or a contact form, we may collect your name, company name, email address, phone number, project type, budget range and message content.",
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
    text: "Diversa Nordic AB does not sell personal data. We only process information needed to communicate with you and manage business relationships.",
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
    text: "This first version of the Diversa Nordic website is built as a static company site and does not require unnecessary tracking cookies to function.",
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
