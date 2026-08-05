"use client";

import { useState } from "react";
import { websiteStyles } from "@/lib/content";
import { ButtonLink } from "./ButtonLink";

type WebsiteStyle = (typeof websiteStyles)[number];

function StylePreview({ style, compact = false }: { style: WebsiteStyle; compact?: boolean }) {
  return (
    <div
      className={`website-preview website-preview-${style.slug}${compact ? " website-preview-compact" : ""}`}
      aria-hidden="true"
    >
      <div className="website-preview-browser">
        <div className="website-preview-bar">
          <span /><span /><span />
          <i>{style.shortTitle}</i>
        </div>
        <div className="website-preview-page">
          <div className="website-preview-nav">
            <b>LOGO</b>
            <div><span /><span /><span /></div>
          </div>
          <div className="website-preview-hero-copy">
            <small>{style.badge}</small>
            <strong>{style.exampleTitle}</strong>
            <p>{style.summary}</p>
            <div className="website-preview-actions"><span /><span /></div>
          </div>
          <div className="website-preview-cards"><span /><span /><span /></div>
          <div className="website-preview-accent" />
        </div>
      </div>
    </div>
  );
}

export function WebsiteStyleSelector() {
  const [selectedSlug, setSelectedSlug] = useState(websiteStyles[0].slug);
  const selectedStyle = websiteStyles.find((style) => style.slug === selectedSlug) || websiteStyles[0];

  return (
    <div className="website-selector reveal">
      <div className="website-option-grid" role="group" aria-label="Välj hemsidestil">
        {websiteStyles.map((style) => {
          const selected = style.slug === selectedSlug;
          return (
            <button
              key={style.slug}
              type="button"
              className={selected ? "website-option selected" : "website-option"}
              onClick={() => setSelectedSlug(style.slug)}
              aria-pressed={selected}
            >
              <div className="website-option-heading">
                <span>{style.badge}</span>
                <i>{selected ? "Vald" : "Visa"}</i>
              </div>
              <StylePreview style={style} compact />
              <div className="website-option-copy">
                <h3>{style.title}</h3>
                <p>{style.description}</p>
                <strong>Passar bäst för: {style.bestFor}</strong>
              </div>
            </button>
          );
        })}
      </div>

      <section className={`website-selected-panel website-selected-${selectedStyle.slug}`} aria-live="polite">
        <div className="website-selected-preview">
          <div className="website-selected-label">
            <span>Vald stil</span>
            <strong>{selectedStyle.title}</strong>
          </div>
          <StylePreview style={selectedStyle} />
        </div>

        <div className="website-selected-details">
          <span className="style-badge">{selectedStyle.badge}</span>
          <h2>{selectedStyle.exampleTitle}</h2>
          <p className="website-selected-summary">{selectedStyle.exampleText}</p>

          <div className="website-selected-best-for">
            <small>Rekommenderas för</small>
            <strong>{selectedStyle.bestFor}</strong>
          </div>

          <div className="website-selected-sections">
            <small>Exempel på sidans innehåll</small>
            <div>
              {selectedStyle.previewSections.map((section, index) => (
                <span key={section}><i>{index + 1}</i>{section}</span>
              ))}
            </div>
          </div>

          <div className="feature-tags">
            {selectedStyle.features.map((feature) => <span key={feature}>{feature}</span>)}
          </div>

          <div className="website-selected-actions">
            <ButtonLink href={selectedStyle.href}>Se hela exemplet</ButtonLink>
            <ButtonLink href={`/contact?websiteStyle=${selectedStyle.slug}`} variant="secondary">
              Välj {selectedStyle.shortTitle}
            </ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
