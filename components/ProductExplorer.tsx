import Link from "next/link";
import { productCategories, products, type ProductCategory } from "@/lib/products";
type Props = { featuredOnly?: boolean; showFilters?: boolean; activeCategory?: ProductCategory };
export function ProductExplorer({ featuredOnly = false, showFilters = true, activeCategory = "all" }: Props) {
  const visible = products.filter(p => (!featuredOnly || p.featured) && (activeCategory === "all" || p.category === activeCategory));
  return <div className="product-explorer">{showFilters && <nav className="product-filters" aria-label="Filter work by sector">{productCategories.map(category => <Link key={category.id} className={activeCategory === category.id ? "product-filter active" : "product-filter"} href={category.id === "all" ? "/systems" : `/systems?category=${category.id}`} aria-current={activeCategory === category.id ? "true" : undefined}>{category.label}</Link>)}</nav>}
    <div className="product-grid">{visible.map(product => <article className={`product-card product-${product.category}`} key={product.slug}>
      <Link className="product-art" href={`/systems/${product.slug}`} aria-label={`Explore ${product.name}`}>
        <div className="art-top"><span>{product.categoryLabel}</span><span aria-hidden="true">↗</span></div>
        <div className="art-identity"><span className="art-monogram" aria-hidden="true">{product.monogram}</span><strong translate="no">{product.name}</strong></div>
        <div className="art-bottom"><span>Product & engineering</span><span>{product.status}</span></div>
      </Link>
      <div className="product-copy"><h3><Link href={`/systems/${product.slug}`}>{product.tagline}</Link></h3><p>{product.description}</p><Link className="text-link" href={`/systems/${product.slug}`}>Explore {product.name} <span aria-hidden="true">↗</span></Link></div>
    </article>)}</div>{visible.length === 0 && <p className="empty-state">No work is listed in this category yet. <Link href="/systems">View all work.</Link></p>}
  </div>;
}
