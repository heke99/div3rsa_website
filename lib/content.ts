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
  { label: "Tjänster", href: "/services" },
  { label: "Hemsidor", href: "/websites" },
  { label: "Bankgiro", href: "/foretagsbetalningar-bankgiro", fullLabel: "Företagsbetalningar & Bankgiro" },
  { label: "Projekt", href: "/systems" },
  { label: "Kontakt", href: "/contact" },
];

export const websiteStyleLinks = [
  { label: "Premium 3D / Wow", href: "/websites/premium-3d" },
  { label: "Enkel informationssida", href: "/websites/simple-info" },
  { label: "Modern företagshemsida", href: "/websites/hybrid-business" },
];

export const trustIndicators = ["Premiumdesign", "Hemsidor", "Webbappar", "Kundportaler", "Automation", "Bankgiroflöden"];

export const heroProductCards = ["Hero", "CTA", "Portal", "System", "Automation"];

export const growthSteps = ["Hemsida", "Portal", "Automation", "Skala upp"];

export const services = [
  {
    title: "Hemsidor",
    text: "Tydliga, snabba och moderna hemsidor som skapar förtroende och leder kunden vidare.",
  },
  {
    title: "Webbappar & portaler",
    text: "Inloggning, dashboards, kundportaler och arbetsflöden som fungerar i vardagen.",
  },
  {
    title: "Systemutveckling",
    text: "Adminpaneler, interna verktyg och SaaS-grunder byggda för att kunna växa.",
  },
  {
    title: "Automation & AI",
    text: "Smartare flöden, integrationer och AI-stöd som minskar manuellt arbete.",
  },
  {
    title: "Företagsbetalningar & Bankgiro",
    text: "Ett ansöknings- och portalflöde för företag som behöver fakturering och bankgirobaserade betalningar.",
  },
  {
    title: "Dashboards & admin",
    text: "Översikt, ärenden, kunder, priser och rapporter samlat i rena interna vyer.",
  },
];

export const whyChoose = [
  {
    title: "Snyggt nog att sälja",
    text: "Designen ska kännas seriös direkt – på mobil, desktop och i kundens första klick.",
  },
  {
    title: "Byggt för verklig drift",
    text: "Vi tänker på admin, data, flöden och nästa steg från början.",
  },
  {
    title: "En grund som kan växa",
    text: "Börja med webb. Lägg till portal, automation eller SaaS när affären kräver det.",
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
    includes: ["Startsida", "Tjänster", "Kontakt", "Mobilanpassad", "SEO-grund"],
    cta: "Fråga om starthemsida",
  },
  {
    title: "Företagshemsida",
    subtitle: "För företag som vill ha tydligare säljflöde, bättre design och mer premiumkänsla.",
    includes: ["Flera sidor", "CTA-flöden", "Kontaktformulär", "Premiumdesign", "Portal-redo"],
    cta: "Bygg företagshemsida",
    featured: true,
  },
  {
    title: "Anpassat system / SaaS",
    subtitle: "För företag som behöver ett riktigt digitalt system.",
    includes: ["Adminpanel", "Kundportal", "Databas", "Roller", "Automation", "Integrationer"],
    cta: "Diskutera system",
  },
];

export const caseStudies = [
  {
    title: "Gridex",
    displayUrl: "app.gridex.se",
    href: "https://app.gridex.se",
    description: "Operationsplattform för elhandel, onboarding, fullmakter och processkontroll.",
    problem: "Elbolag behöver samla kunder, anläggningar, meddelanden och uppföljning.",
    solution: "Gridex samlar drift, kundflöden och kontroll i en tydlig plattform.",
    features: ["Kundregister", "Mätpunkter", "Ediel-flöden", "Fullmakter", "Admin", "Driftöversikt"],
    cta: "Öppna Gridex",
  },
  {
    title: "Coordiqo",
    displayUrl: "coordiqo.com",
    href: "https://coordiqo.com",
    description: "Planeringssystem för personal, uppdrag, resurser, scheman och rutter.",
    problem: "Drift blir rörig när planering, resurser och ändringar ligger i flera verktyg.",
    solution: "Coordiqo samlar planering och daglig drift i ett tydligt system.",
    features: ["Personalplanering", "Uppdrag", "Resurser", "Scheman", "Rutter", "Driftöversikt"],
    cta: "Öppna Coordiqo",
  },
  {
    title: "Bovaro",
    displayUrl: "bovaro.se",
    href: "https://bovaro.se",
    description: "Digitalt produktkoncept för fastighet, bostad och marknadsplatsflöden.",
    problem: "Objekt, leads och presentation behöver kännas enkelt och trovärdigt.",
    solution: "Bovaro byggs som en ren grund för sök, presentation och leadflöden.",
    features: ["Objektflöden", "Marknadsplats", "Presentation", "Sök/filter", "Leadflöde", "Skalbar grund"],
    cta: "Öppna Bovaro",
  },
  {
    title: "DealFlowIQ",
    displayUrl: "dealfloowiq.com",
    href: "https://dealfloowiq.com",
    description: "Analys- och deal intelligence-plattform för fastighet och investerare.",
    problem: "Affärsmöjligheter behöver analyseras snabbare och mer strukturerat.",
    solution: "DealFlowIQ byggs för dealanalys, beslutsstöd och uppföljning.",
    features: ["Dealanalys", "Fastighetsdata", "Investerarflöden", "Dashboard", "CRM", "Beslutsstöd"],
    cta: "Öppna DealFlowIQ",
  },
];

export const websiteStyles = [
  {
    slug: "premium-3d",
    title: "Premium 3D / Wow",
    shortTitle: "3D / Wow",
    href: "/websites/premium-3d",
    badge: "Mest visuellt",
    description:
      "För bolag som vill skapa ett starkt första intryck med 3D-känsla, animationer och premiumdesign.",
    summary: "Hög wow-faktor, stark hero och visuell identitet.",
    bestFor: "Tech, SaaS, finans, premiumvarumärken och företag som vill sticka ut.",
    exampleTitle: "Exempel: premium SaaS / app",
    exampleText: "Stor hero, 3D-produktkort, glow-effekter, animationer och en tydlig premium-CTA.",
    previewSections: ["3D hero", "Produktkort", "Trust strip", "CTA", "Portal"],
    fits: ["Techbolag", "SaaS", "Appar", "Finans", "Startups", "Premiumvarumärken"],
    features: ["3D hero", "Animationer", "Glow-effekter", "Glassmorphism", "Login-knapp", "Portal-länk", "Stark CTA", "Premiumdesign"],
    cta: "Jag vill ha 3D / Wow",
  },
  {
    slug: "hybrid-business",
    title: "Business / Modern",
    shortTitle: "Business",
    href: "/websites/hybrid-business",
    badge: "Bäst för B2B",
    description:
      "För företag som vill ha en seriös, modern hemsida med tydliga tjänster, CTA-flöden och plats för portal senare.",
    summary: "Professionell B2B-känsla med balans mellan design, förtroende och tydlig information.",
    bestFor: "Växande företag, konsulter, servicebolag och B2B-verksamheter.",
    exampleTitle: "Exempel: konsult / tjänstebolag",
    exampleText: "Ren hero, tjänstekort, case, kontaktsektion och tydliga knappar för offert eller demo.",
    previewSections: ["Hero", "Tjänster", "Case", "Process", "Kontakt"],
    fits: ["Växande företag", "B2B", "Servicebolag", "Konsulter", "Systemleverantörer", "Lokala företag"],
    features: ["Modern hero", "Tjänstesidor", "Kundcase", "Kontakt CTA", "Login/portal", "Integrationsredo", "Kundportal senare"],
    cta: "Jag vill ha Business",
  },
  {
    slug: "simple-info",
    title: "Simple / Information",
    shortTitle: "Simple",
    href: "/websites/simple-info",
    badge: "Snabbast att lansera",
    description:
      "För företag som behöver en ren informationssida som förklarar tjänsterna och gör det lätt att ta kontakt.",
    summary: "Tydligt, snabbt, prisvärt och lätt för kunden att förstå.",
    bestFor: "Lokala företag, mindre bolag, konsulter och verksamheter som vill komma igång snabbt.",
    exampleTitle: "Exempel: lokal tjänstesida",
    exampleText: "Kort hero, om oss, tjänster, FAQ och kontakt – utan onödiga effekter.",
    previewSections: ["Kort hero", "Om oss", "Tjänster", "FAQ", "Kontakt"],
    fits: ["Lokala företag", "Konsulter", "Servicebolag", "Redovisning", "Mindre företag", "Snabb lansering"],
    features: ["Tydlig startsida", "Tjänstesektion", "Om oss", "Kontaktformulär", "Mobilanpassning", "SEO-grund", "Snabb struktur"],
    cta: "Jag vill ha Simple",
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
