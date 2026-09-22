/** Public identities supplied by the owner. Do not infer EINs, addresses or ownership. */
export const entities = [
  { id: "sweden", name: "Trafexa Nordic AB", jurisdiction: "Sweden", registrationLabel: "Company registration no.", registrationNumber: "556855-4884", description: "Our Swedish entity for product development and engineering engagements." },
  { id: "us", name: "Diversa Solutions LLC", jurisdiction: "Wyoming, United States", registrationLabel: "Jurisdiction", registrationNumber: "Wyoming, USA", description: "Our US entity, based in Wyoming, for separately agreed engagements." },
] as const;
export const company = {
  name: entities[0].name,
  shortName: "Trafexa Nordic",
  orgNumber: entities[0].registrationNumber,
  email: "info@div3rsa.com",
  domain: "div3rsa.com",
  url: "https://www.div3rsa.com",
} as const;
export const siteMeta = {
  homeTitle: "Trafexa Nordic — Digital products & engineering",
  homeDescription: "We design and develop business software, SaaS products, customer portals and websites. Explore our work across energy, finance and operations. Sweden and the United States.",
  keywords: ["Trafexa Nordic AB", "Diversa Solutions LLC", "software development", "digital products", "SaaS", "customer portals", "web design", "Sweden", "Wyoming"],
} as const;
