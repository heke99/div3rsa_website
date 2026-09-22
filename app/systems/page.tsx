import type { Metadata } from "next";
import { ProductExplorer } from "@/components/ProductExplorer";
import { CTASection } from "@/components/CTASection";
import { productCategories, type ProductCategory } from "@/lib/products";
export const metadata: Metadata = { title: "Our work", description: "Explore our product and engineering work across energy, accounting, signing, CRM and operations. Project scopes and development stages are clearly identified.", alternates: { canonical: "/systems" } };
export default async function WorkPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const activeCategory: ProductCategory = productCategories.find(item => item.id === category)?.id ?? "all";
  return <><section className="page-hero"><div className="container"><p className="eyebrow">Our work</p><h1>Real workflows.<br />Considered products.</h1><p className="page-lead">A look inside the products and initiatives we are developing. Each starts with a particular industry, a practical need and the people doing the work.</p></div></section><section className="section work-section"><div className="container"><ProductExplorer activeCategory={activeCategory} /><p className="portfolio-note">Our product development portfolio. Project pages describe scope and current stage; availability and implementation details are confirmed separately.</p></div></section><CTASection /></>;
}
