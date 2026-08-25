import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { ProductExplorer } from "@/components/ProductExplorer";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Produkter",
  description:
    "Utforska Attmos systemportfölj inom ekonomi, energi, offentlig sektor, CRM, drift, transport och fastighet.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero product-page-hero">
        <div className="aurora aurora-one" />
        <div className="container narrow reveal">
          <p className="eyebrow">Produktportfölj</p>
          <h1>System byggda för tydligare verksamheter.</h1>
          <p className="page-lead">
            Filtrera mellan våra produktområden och se hur varje plattform löser ett konkret operativt behov. Produkterna kan levereras som egen tjänst, anpassad lösning eller integrationsgrund.
          </p>
        </div>
      </section>

      <Section className="products-section">
        <ProductExplorer />
      </Section>

      <Section
        eyebrow="Gemensam grund"
        title="Olika produkter. Samma tekniska kvalitet."
        intro="Varje plattform byggs med tydlig behörighetsstyrning, säker datamodell, integrationsbara API:er och en struktur som klarar fler kunder, användare och arbetsflöden."
      >
        <div className="platform-principles">
          <article><span>01</span><h3>Multi-tenant från grunden</h3><p>Separata organisationer, roller och dataflöden utan att produkten behöver byggas om för varje kund.</p></article>
          <article><span>02</span><h3>API och webhooks</h3><p>Systemen kan kopplas till banker, identitetstjänster, telefoni, ekonomisystem och externa verksamhetsflöden.</p></article>
          <article><span>03</span><h3>Operativt användbara</h3><p>Vi designar för dagligt arbete, tydliga beslut och färre manuella steg – inte bara för en snygg demonstration.</p></article>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
