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
  homeTitle: "Div3rsa AB - System, hemsidor, webbappar och kundportaler",
  homeDescription:
    "Div3rsa AB bygger professionella hemsidor, webbappar, kundportaler, interna system, SaaS-plattformar och automatiserade flöden för företag.",
  keywords: [
    "systemutveckling",
    "hemsida företag",
    "webbapp",
    "SaaS utveckling",
    "kundportal",
    "adminsystem",
    "automation",
    "AI workflows",
    "företagsbetalningar",
    "bankgiro",
    "Div3rsa AB",
  ],
};

export const navItems = [
  { label: "Hem", href: "/" },
  { label: "Tjänster", href: "/services" },
  { label: "Bankgiro", href: "/foretagsbetalningar-bankgiro", fullLabel: "Företagsbetalningar & Bankgiro" },
  { label: "Projekt", href: "/systems" },
  { label: "Hemsidor", href: "/websites" },
  { label: "Om oss", href: "/about" },
  { label: "Kontakt", href: "/contact" },
];

export const websiteStyleLinks = [
  { label: "Premium 3D / Wow", href: "/websites/premium-3d" },
  { label: "Enkel informationssida", href: "/websites/simple-info" },
  { label: "Modern företagshemsida", href: "/websites/hybrid-business" },
];

export const trustIndicators = [
  "Systemutveckling",
  "SaaS-plattformar",
  "Hemsidor",
  "Webbappar",
  "Automation",
  "Kundportaler",
  "Företagsbetalningar",
];

export const heroProductCards = ["SaaS", "Webbapp", "Kundportal", "Automation", "Admin", "Dashboard"];

export const growthSteps = ["Hemsida", "Portal", "Automation", "SaaS"];

export const services = [
  {
    title: "Systemutveckling",
    text: "Vi bygger adminpaneler, kundsystem, interna verktyg, operationssystem och SaaS-plattformar.",
  },
  {
    title: "Hemsidor",
    text: "Moderna och mobilanpassade hemsidor som bygger förtroende och hjälper företaget få fler kunder.",
  },
  {
    title: "Webbappar & portaler",
    text: "Inloggning, dashboards, bokningsflöden, kundportaler och användarsystem som fungerar i vardagen.",
  },
  {
    title: "Automation & AI",
    text: "Automatiserade flöden, AI-stöd, datahantering och integrationer som minskar manuellt arbete.",
  },
  {
    title: "Kundportaler",
    text: "Säkra portaler där kunder, personal eller partners kan logga in, följa status och hantera uppgifter.",
  },
  {
    title: "Företagsbetalningar & Bankgiro",
    text: "Ett strukturerat ansöknings- och portalflöde för företag som behöver fakturering, kundinbetalningar och bankgirobaserade betalningsflöden.",
  },
  {
    title: "Dashboards & adminsystem",
    text: "Interna verktyg för kunder, ärenden, uppdrag, dokument, priser, rapporter och affärsflöden.",
  },
];

export const whyChoose = [
  {
    title: "Design och funktion i samma lösning",
    text: "En bra digital lösning ska både se seriös ut och göra arbetet enklare för kunder, personal och ledning.",
  },
  {
    title: "Affären först",
    text: "Vi tänker på försäljning, drift, användarflöden och skalbarhet från början – inte bara på kod.",
  },
  {
    title: "Börja enkelt, bygg vidare",
    text: "Ni kan börja med en hemsida och senare växa in i portal, app, automation eller SaaS-produkt.",
  },
  {
    title: "Erfarenhet från riktiga produkter",
    text: "Div3rsa arbetar med egna plattformar och produkter som Gridex, Coordiqo, Bovaro och DealFlowIQ.",
  },
  {
    title: "Modern teknisk grund",
    text: "Vi bygger med databaser, API:er, autentisering, automation, betalflöden och AI-redo struktur.",
  },
];

export const industries = [
  "Serviceföretag",
  "Elhandel och energi",
  "Fastighet",
  "Vård och omsorg",
  "Bygg och fältservice",
  "Konsultbolag",
  "Startups",
  "Lokala företag",
  "SaaS och tech",
  "Logistik och leverans",
  "Kommunala verksamheter",
  "Säljorganisationer",
];

export const solutionPackages = [
  {
    title: "Starthemsida",
    subtitle: "För företag som behöver en professionell hemsida snabbt.",
    includes: [
      "Startsida",
      "Om företaget",
      "Tjänster",
      "Kontakt",
      "Mobilanpassad design",
      "Grundläggande SEO",
      "Professionell presentation",
    ],
    cta: "Fråga om starthemsida",
  },
  {
    title: "Företagshemsida",
    subtitle: "För företag som vill ha tydligare säljflöde, bättre design och mer premiumkänsla.",
    includes: [
      "Flera sidor",
      "CTA-flöden",
      "Kontaktformulär",
      "Premiumdesign",
      "SEO- och tracking-redo struktur",
      "Möjlighet till blogg/nyheter",
      "Redo för framtida portal",
    ],
    cta: "Bygg företagshemsida",
    featured: true,
  },
  {
    title: "Anpassat system / SaaS",
    subtitle: "För företag som behöver ett riktigt digitalt system.",
    includes: [
      "Adminpanel",
      "Kundportal",
      "Databas",
      "Roller och behörigheter",
      "Betalflöden",
      "Automation",
      "Integrationer",
      "Rapporter och analys",
      "Skalbar arkitektur",
    ],
    cta: "Diskutera system",
  },
];

export const caseStudies = [
  {
    title: "Gridex",
    displayUrl: "app.gridex.se",
    href: "https://app.gridex.se",
    description:
      "En operationsplattform för elhandel, kundonboarding, fullmakter, Ediel-flöden och processkontroll.",
    problem:
      "Elbolag behöver struktur för kunder, anläggningar, fullmakter, mätpunkter, meddelanden och daglig uppföljning.",
    solution:
      "Gridex byggs som ett driftssystem där administration, Ediel, kundflöden och uppföljning samlas i en plattform.",
    features: ["Kundregister", "Mätpunkter", "Ediel-flöden", "Fullmakter", "Admin", "Driftöversikt"],
    cta: "Öppna Gridex",
  },
  {
    title: "Coordiqo",
    displayUrl: "coordiqo.com",
    href: "https://coordiqo.com",
    description:
      "Ett planerings- och operationssystem för företag som hanterar personal, uppdrag, resurser, scheman och rutter.",
    problem:
      "Många verksamheter tappar tid när personal, uppdrag, resurser och ändringar hanteras i flera separata verktyg.",
    solution:
      "Coordiqo samlar planering, uppdrag, resurser och daglig drift i ett tydligt system.",
    features: ["Personalplanering", "Uppdrag", "Resurser", "Scheman", "Rutter", "Driftöversikt"],
    cta: "Öppna Coordiqo",
  },
  {
    title: "Bovaro",
    displayUrl: "bovaro.se",
    href: "https://bovaro.se",
    description: "Ett digitalt produktkoncept för fastighet, bostad och marknadsplatsflöden.",
    problem:
      "Fastighets- och bostadsflöden kräver tydlig presentation, sök, filtrering, leads och kundflöden.",
    solution:
      "Bovaro byggs som en digital grund för presentation, sök, leads och marknadsplatslogik.",
    features: ["Objektflöden", "Marknadsplats", "Presentation", "Sök/filter", "Leadflöde", "Skalbar grund"],
    cta: "Öppna Bovaro",
  },
  {
    title: "DealFlowIQ",
    displayUrl: "dealfloowiq.com",
    href: "https://dealfloowiq.com",
    description: "En analys- och deal intelligence-plattform för fastighet, investerare och affärsflöden.",
    problem:
      "Investerare och fastighetsteam behöver bättre sätt att analysera, jämföra och strukturera affärsmöjligheter.",
    solution:
      "DealFlowIQ byggs för dealanalys, beslutsstöd och strukturerad uppföljning.",
    features: ["Dealanalys", "Fastighetsdata", "Investerarflöden", "Dashboard", "CRM", "Beslutsstöd"],
    cta: "Öppna DealFlowIQ",
  },
];

export const websiteStyles = [
  {
    slug: "premium-3d",
    title: "Premium 3D / Wow",
    href: "/websites/premium-3d",
    description:
      "För företag som vill sticka ut direkt med en modern, visuell och premiumkänsla.",
    fits: ["Techbolag", "SaaS", "Konsultbolag", "Finans", "Startups", "Premiumvarumärken"],
    features: ["3D hero", "Animationer", "Glassmorphism", "Login-knapp", "Portal-länk", "Stark CTA", "Premiumdesign", "Visuell identitet"],
    cta: "Jag vill ha denna stil",
  },
  {
    slug: "simple-info",
    title: "Enkel informationssida",
    href: "/websites/simple-info",
    description:
      "För företag som vill presentera tjänster, bygga förtroende och få in kontaktförfrågningar utan onödig komplexitet.",
    fits: ["Lokala företag", "Konsulter", "Servicebolag", "Redovisning", "Mindre företag", "Snabb lansering"],
    features: ["Tydlig startsida", "Tjänstesektion", "Om oss", "Kontaktformulär", "Mobilanpassning", "SEO-grund", "Snabb struktur"],
    cta: "Jag vill ha en enkel hemsida",
  },
  {
    slug: "hybrid-business",
    title: "Modern företagshemsida",
    href: "/websites/hybrid-business",
    description:
      "En balanserad hemsida med premiumkänsla, tydlig information, CTA-flöden och möjlighet att växa till kundportal.",
    fits: ["Växande företag", "B2B", "Servicebolag", "Plattformar", "Bolag som vill växa"],
    features: ["Modern hero", "Tjänstesidor", "Login/portal", "Kontakt CTA", "Integrationsredo", "Kundportal senare", "Skalbar grund"],
    cta: "Jag vill ha modern företagshemsida",
  },
];

export const processSteps = [
  {
    title: "Förstå behovet",
    text: "Vi går igenom vad ni vill bygga, varför det behövs och vad resultatet ska bli.",
  },
  {
    title: "Struktur och design",
    text: "Vi sätter sidor, flöden, funktioner och designriktning innan utvecklingen går för långt.",
  },
  {
    title: "Bygga lösningen",
    text: "Vi utvecklar med modern teknik, tydlig kodstruktur och mobilanpassad design.",
  },
  {
    title: "Lansera och förbättra",
    text: "Vi hjälper med lansering, justeringar och nästa steg när lösningen börjar användas.",
  },
];

export const techItems = [
  "Webbappar",
  "Databaser",
  "Betalflöden",
  "API-integrationer",
  "Automation",
  "AI-flöden",
  "Adminpaneler",
  "Roller och behörigheter",
  "Kundportaler",
  "Hosting och deployment",
  "Rapporter",
  "Säker inloggning",
];

export const faqs = [
  {
    question: "Bygger ni bara hemsidor eller även system?",
    answer: "Vi bygger båda. Div3rsa kan skapa enkla hemsidor, premiumhemsidor, webbappar, interna system, kundportaler och SaaS-plattformar.",
  },
  {
    question: "Kan ni bygga kundportal eller adminpanel?",
    answer: "Ja. Vi kan bygga inloggning, kundportaler, dashboards, adminpaneler, rollstyrning och interna arbetsflöden.",
  },
  {
    question: "Kan ni hjälpa med design och UX?",
    answer: "Ja. Vi hjälper med struktur, layout, användarflöden, visuell riktning och modern gränssnittsdesign.",
  },
  {
    question: "Kan en enkel hemsida senare bli ett system?",
    answer: "Ja. Det är ofta smartast. Vi kan bygga grunden så den senare kan växa till portal, app, dashboard eller SaaS-produkt.",
  },
  {
    question: "Kan ni koppla betalningar?",
    answer: "Ja. Vi kan bygga betalflöden, abonnemang, checkout, fakturaflöden och kundportaler beroende på projektets behov.",
  },
  {
    question: "Hur startar ett projekt?",
    answer: "Oftast börjar vi med en kort genomgång av bolaget, målet, nuvarande läge och vilken lösning som ger mest värde först.",
  },
];

export const aboutValues = [
  "Affärsfokuserad utveckling",
  "Skalbara digitala produkter",
  "Ren design och tydlig användarupplevelse",
  "Långsiktig teknisk grund",
  "Automation och AI-redo flöden",
];

export const projectTypes = [
  "Hemsida",
  "Webbapp",
  "Mobilapp",
  "Kundportal",
  "Adminpanel",
  "SaaS-plattform",
  "Automation / AI-flöde",
  "Förbättra befintligt system",
  "Vet inte ännu",
];

export const budgetRanges = [
  "Under 25 000 kr",
  "25 000-75 000 kr",
  "75 000-150 000 kr",
  "150 000+ kr",
  "Vet inte ännu",
];

export const privacySections = [
  {
    title: "Uppgifter vi kan samla in",
    text: "När du kontaktar Div3rsa eller skickar en ansökan kan vi behandla namn, företag, e-post, telefon, organisationsnummer, bransch, projektbehov och meddelanden.",
  },
  {
    title: "Varför vi använder uppgifter",
    text: "Vi använder uppgifter för att besvara frågor, hantera ansökningar, följa upp kunddialog och administrera våra tjänster.",
  },
  {
    title: "Delning med relevant aktör",
    text: "Vid ansökan om Företagsbetalningar & Bankgiro kan nödvändiga uppgifter delas med relevant betalnings- eller finansaktör när det krävs och när samtycke lämnats.",
  },
  {
    title: "Vi säljer inte personuppgifter",
    text: "Div3rsa AB säljer inte personuppgifter. Vi behandlar uppgifter för kontakt, ansökan, administration och kundrelationer.",
  },
  {
    title: "Frågor om integritet",
    text: "Kontakta info@div3rsa.com vid frågor om personuppgifter.",
  },
];

export const cookieSections = [
  {
    title: "Vad cookies är",
    text: "Cookies är små filer som sparas i webbläsaren och kan användas för funktion, säkerhet, inställningar och statistik.",
  },
  {
    title: "Nuvarande användning",
    text: "Denna version av Div3rsa Web kräver endast nödvändig funktionalitet för att webbplatsen ska fungera.",
  },
  {
    title: "Analys kan läggas till senare",
    text: "Om analys- eller spårningsverktyg aktiveras senare ska cookieinformationen uppdateras tydligt.",
  },
  {
    title: "Frågor om cookies",
    text: "Kontakta info@div3rsa.com vid frågor om cookies.",
  },
];
