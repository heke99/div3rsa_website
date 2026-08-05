export type ProductCategory =
  | "all"
  | "finance"
  | "energy"
  | "public"
  | "sales"
  | "operations"
  | "property";

export type Product = {
  slug: string;
  name: string;
  monogram: string;
  category: Exclude<ProductCategory, "all">;
  categoryLabel: string;
  tagline: string;
  description: string;
  highlights: string[];
  audience: string;
  status: "Produkt" | "Plattform" | "Under utveckling";
  href?: string;
  featured?: boolean;
};

export const productCategories: Array<{ id: ProductCategory; label: string }> = [
  { id: "all", label: "Alla produkter" },
  { id: "finance", label: "Ekonomi" },
  { id: "energy", label: "Energi" },
  { id: "public", label: "Offentlig sektor" },
  { id: "sales", label: "Försäljning & CRM" },
  { id: "operations", label: "Drift & planering" },
  { id: "property", label: "Fastighet" },
];

export const products: Product[] = [
  {
    slug: "nordklart",
    name: "Nordklart",
    monogram: "NK",
    category: "finance",
    categoryLabel: "Ekonomi",
    tagline: "Bokföring och ekonomistyrning utan onödigt manuellt arbete.",
    description:
      "En modern ekonomiplattform för löpande bokföring, bankavstämning, bokslut, rapportering och byråsamarbete – byggd för att göra ekonomiarbetet tydligare och mer automatiserat.",
    highlights: ["Löpande bokföring", "Bankavstämning", "Bokslut", "Rapportering"],
    audience: "Företag och redovisningsbyråer",
    status: "Produkt",
    featured: true,
  },
  {
    slug: "gridex-ops",
    name: "Gridex OPS",
    monogram: "GX",
    category: "energy",
    categoryLabel: "Energi",
    tagline: "Operativsystemet för moderna elhandelsbolag.",
    description:
      "En komplett driftplattform för elhandel med kundintag, avtal, fullmakter, leverantörsbyten, Ediel-flöden, prissättning, faktureringsunderlag och tenantbaserad administration.",
    highlights: ["Kundintag", "Ediel & marknadsflöden", "Avtal & portfölj", "Multi-tenant"],
    audience: "Elhandelsbolag och energipartners",
    status: "Plattform",
    href: "https://app.gridex.se",
    featured: true,
  },
  {
    slug: "kommunsign",
    name: "Kommunsign",
    monogram: "KS",
    category: "public",
    categoryLabel: "Offentlig sektor",
    tagline: "Säker e-underskrift för kommuner och offentliga verksamheter.",
    description:
      "En e-signeringstjänst med BankID, dokumentflöden, spårbar beviskedja, behörigheter, organisationshantering och API-stöd för integration med verksamhetssystem.",
    highlights: ["BankID-signering", "Bevispaket", "Rollstyrning", "API & integrationer"],
    audience: "Kommuner, myndigheter och organisationer",
    status: "Produkt",
    featured: true,
  },
  {
    slug: "kundexa",
    name: "Kundexa",
    monogram: "KX",
    category: "sales",
    categoryLabel: "Försäljning & CRM",
    tagline: "CRM, telefoni och försäljningsstyrning i ett sammanhängande flöde.",
    description:
      "Ett multi-tenant CRM för säljteam med kundlistor, leads, samtal, nummerhantering, aktiviteter, anteckningar, uppföljning och operativ överblick.",
    highlights: ["CRM & leads", "Telefoni", "Teamstyrning", "Aktiviteter & KPI"],
    audience: "Säljorganisationer och kundcenter",
    status: "Plattform",
    featured: true,
  },
  {
    slug: "coordiqo",
    name: "Coordiqo",
    monogram: "CQ",
    category: "operations",
    categoryLabel: "Drift & planering",
    tagline: "Planering, resurser och uppdrag samlade i en operativ vy.",
    description:
      "Ett verksamhetssystem för organisationer som behöver samordna personal, uppdrag, resurser, scheman, tillgänglighet och ruttbaserat arbete.",
    highlights: ["Personalplanering", "Uppdrag", "Resurser", "Rutter & schema"],
    audience: "Service-, omsorgs- och fältorganisationer",
    status: "Plattform",
    href: "https://coordiqo.com",
  },
  {
    slug: "trafexa",
    name: "Trafexa",
    monogram: "TX",
    category: "operations",
    categoryLabel: "Drift & planering",
    tagline: "Digital dispatch och transportstyrning från order till leverans.",
    description:
      "En transportplattform för bokning, dispatch, transportörsnätverk, acceptflöden, statusuppdateringar, dokument, mobil användning, API och webhooks.",
    highlights: ["Order & dispatch", "Transportörsnätverk", "Mobilflöden", "POD & dokument"],
    audience: "Transport-, logistik- och leveransbolag",
    status: "Under utveckling",
  },
  {
    slug: "bovaro",
    name: "Bovaro",
    monogram: "BV",
    category: "property",
    categoryLabel: "Fastighet",
    tagline: "En modern digital marknadsplats och portal för bostäder.",
    description:
      "En plattform för bostadssökande, hyresvärdar och administration med objekthantering, ansökningar, matchning, dokument och tydliga kundflöden.",
    highlights: ["Bostadsmarknad", "Ansökningar", "Hyresvärdsportal", "Matchning"],
    audience: "Fastighetsbolag och bostadssökande",
    status: "Under utveckling",
  },
];
