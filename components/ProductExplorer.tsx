"use client";

import { useMemo, useState } from "react";
import { productCategories, products, type ProductCategory } from "@/lib/products";
import { ButtonLink } from "./ButtonLink";

type ProductExplorerProps = {
  featuredOnly?: boolean;
  showFilters?: boolean;
};

export function ProductExplorer({ featuredOnly = false, showFilters = true }: ProductExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");

  const visibleProducts = useMemo(() => {
    const source = featuredOnly ? products.filter((product) => product.featured) : products;
    return activeCategory === "all"
      ? source
      : source.filter((product) => product.category === activeCategory);
  }, [activeCategory, featuredOnly]);

  return (
    <div className="product-explorer">
      {showFilters && (
        <div className="product-filters" role="tablist" aria-label="Filtrera produkter">
          {productCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === category.id}
              className={activeCategory === category.id ? "product-filter active" : "product-filter"}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      )}

      <div className={featuredOnly ? "product-grid product-grid-featured" : "product-grid"}>
        {visibleProducts.map((product, index) => (
          <article className="product-card reveal" id={product.slug} key={product.slug} style={{ animationDelay: `${index * 55}ms` }}>
            <div className="product-card-top">
              <div className={`product-monogram product-monogram-${product.category}`} aria-hidden="true">
                {product.monogram}
              </div>
              <div className="product-meta">
                <span>{product.categoryLabel}</span>
                <span className="product-status"><i />{product.status}</span>
              </div>
            </div>

            <div className="product-copy">
              <h3>{product.name}</h3>
              <strong>{product.tagline}</strong>
              <p>{product.description}</p>
            </div>

            <div className="product-audience">
              <span>För</span>
              <strong>{product.audience}</strong>
            </div>

            <div className="product-features" aria-label={`${product.name} funktioner`}>
              {product.highlights.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>

            <div className="product-card-actions">
              {product.href ? (
                <a href={product.href} target="_blank" rel="noreferrer" className="product-link">
                  {product.displayDomain || "Besök produkten"} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <ButtonLink href={`/contact?product=${product.slug}`} variant="secondary">
                  Diskutera {product.name}
                </ButtonLink>
              )}
            </div>
          </article>
        ))}
      </div>

      {visibleProducts.length === 0 && (
        <div className="product-empty">Inga produkter finns i den här kategorin ännu.</div>
      )}
    </div>
  );
}
