import { ButtonLink } from "./ButtonLink";

const productNodes = ["Nordklart", "Gridex OPS", "Kommunsign", "Kundexa"];

export function HomeHero() {
  return (
    <section className="hero systems-hero">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Div3rsa Systems · Digitala produkter för verklig drift</p>
          <h1>Vi bygger systemen företag faktiskt arbetar i.</h1>
          <p className="hero-subheadline">
            Div3rsa utvecklar egna SaaS-produkter och skräddarsydda verksamhetssystem – från ekonomi och energi till e-signering, CRM och operativ planering.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/systems">Utforska produkter</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">Bygg ett system med oss</ButtonLink>
          </div>
          <div className="hero-proof" aria-label="Div3rsas tekniska fokus">
            <div><strong>Multi-tenant</strong><span>Skalbara SaaS-plattformar</span></div>
            <div><strong>API-first</strong><span>Integrationer och webhooks</span></div>
            <div><strong>End-to-end</strong><span>Design, databas och drift</span></div>
          </div>
        </div>

        <div className="systems-visual" aria-label="Div3rsa produktportfölj">
          <div className="systems-window">
            <div className="systems-window-head">
              <div className="window-dots"><i /><i /><i /></div>
              <span>Div3rsa Product Cloud</span>
              <b>LIVE</b>
            </div>
            <div className="systems-window-body">
              <aside>
                <span className="active" />
                <span />
                <span />
                <span />
              </aside>
              <div className="systems-dashboard">
                <div className="dashboard-heading">
                  <div><small>Produktportfölj</small><strong>Ett ekosystem av verksamhetssystem</strong></div>
                  <i>7 produkter</i>
                </div>
                <div className="dashboard-product-list">
                  {productNodes.map((product, index) => (
                    <div key={product}>
                      <span>{product.slice(0, 2).toUpperCase()}</span>
                      <strong>{product}</strong>
                      <i style={{ width: `${88 - index * 11}%` }} />
                    </div>
                  ))}
                </div>
                <div className="dashboard-stats">
                  <div><small>Arkitektur</small><strong>SaaS</strong></div>
                  <div><small>Gränssnitt</small><strong>Web + API</strong></div>
                  <div><small>Fokus</small><strong>Automation</strong></div>
                </div>
              </div>
            </div>
          </div>
          <div className="system-orbit orbit-one">API</div>
          <div className="system-orbit orbit-two">DATA</div>
          <div className="system-orbit orbit-three">SaaS</div>
        </div>
      </div>
    </section>
  );
}
