import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { ButtonLink } from "@/components/ButtonLink";
export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const product = products.find(item => item.slug === slug);
  return product ? { title: product.name, description: product.description, alternates: { canonical: `/systems/${product.slug}` } } : { title: "Project not found" };
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const product = products.find(item => item.slug === slug); if (!product) notFound();
  return <><section className={`page-hero project-hero product-${product.category}`}><div className="container"><Link className="text-link back-link" href="/systems">← All work</Link><p className="eyebrow">{product.categoryLabel}</p><h1 translate="no">{product.name}</h1><p className="page-lead">{product.tagline}</p><div className="project-facts"><div><span>Project stage</span><strong>{product.status}</strong></div><div><span>Designed for</span><strong>{product.audience}</strong></div></div></div></section>
    <section className="section"><div className="container case-layout"><aside><p className="eyebrow">Development scope</p><ul className="scope-list">{product.highlights.map(item => <li key={item}>{item}</li>)}</ul>{product.href && <a className="text-link" href={product.href} target="_blank" rel="noopener noreferrer">Project website ↗<span className="sr-only"> (opens in a new tab)</span></a>}</aside><div className="rich-copy case-story"><h2>The work behind the product.</h2><p>{product.description}</p><h3>The operational need</h3><p>{product.problem}</p><h3>Our approach</h3><p>{product.approach}</p>{product.note && <p className="project-note">{product.note}</p>}<ButtonLink href={`/contact?product=${encodeURIComponent(product.name)}`}>Discuss a similar project <span aria-hidden="true">↗</span></ButtonLink></div></div></section></>;
}
