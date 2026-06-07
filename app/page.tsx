import { CaseCard, FAQItem, PackageCard, StyleCard, TextCard } from "@/components/Cards";
import { ContactForm } from "@/components/ContactForm";
import { CTASection } from "@/components/CTASection";
import { HomeHero } from "@/components/HomeHero";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/ButtonLink";
import { businessPaymentIncluded } from "@/lib/business-payments";
import {
  aboutValues,
  caseStudies,
  company,
  faqs,
  growthSteps,
  industries,
  processSteps,
  services,
  solutionPackages,
  techItems,
  websiteStyles,
  whyChoose,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <HomeHero />

      <Section
        id="growth"
        eyebrow="Scalable foundation"
        title="Start with a website. Grow into a system."
        intro="Many companies start with a simple website. With Div3rsa, the same digital foundation can later grow into a customer portal, app, booking system, dashboard or complete SaaS platform."
      >
        <div className="growth-panel reveal">
          {growthSteps.map((step, index) => (
            <div className="growth-step" key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
        <div className="center-actions">
          <ButtonLink href="/contact">Start your digital project</ButtonLink>
        </div>
      </Section>

      <Section id="services" eyebrow="Services" title="From idea to finished digital product.">
        <div className="card-grid three">
          {services.map((service, index) => (
            <TextCard key={service.title} kicker={(index + 1).toString().padStart(2, "0")} {...service} />
          ))}
        </div>
      </Section>

      <Section id="why" eyebrow="Why Div3rsa" title="Why choose Div3rsa?">
        <div className="card-grid three">
          {whyChoose.map((item) => (
            <TextCard key={item.title} {...item} />
          ))}
        </div>
      </Section>

      <Section
        id="industries"
        eyebrow="Industries"
        title="Industries we help"
        intro="We build industry-flexible digital solutions that can be adapted to different business models, workflows and operational needs."
      >
        <div className="industry-grid reveal">
          {industries.map((industry) => (
            <span key={industry}>{industry}</span>
          ))}
        </div>
      </Section>

      <Section id="packages" eyebrow="Typical solutions" title="Typical solutions we build">
        <div className="package-grid">
          {solutionPackages.map((item) => (
            <PackageCard key={item.title} item={item} />
          ))}
        </div>
      </Section>

      <Section
        id="systems"
        eyebrow="Our systems"
        title="Selected digital products built by Div3rsa."
        intro="Examples of platforms, products and systems developed or operated by Div3rsa. Selected products and platforms developed by Div3rsa are shown below."
      >
        <div className="case-grid">
          {caseStudies.map((item) => (
            <CaseCard key={item.title} item={item} />
          ))}
        </div>
      </Section>


      <Section
        id="business-payments"
        eyebrow="Företagsbetalningar & Bankgiro"
        title="For companies that need bankgiro-based payment flows."
        intro="Div3rsa now also helps companies that struggle with bankgiro, invoicing and business payment flows by creating a structured application, admin and portal journey."
      >
        <div className="two-column">
          <div className="rich-copy reveal">
            <p>
              Many companies get stuck when they cannot access a Swedish bankgiro or a working business payment flow.
              Div3rsa gives them one clear place to apply, follow the process and continue onboarding through a portal.
            </p>
            <p>
              Div3rsa is not presented as a bank and we do not guarantee approval. The service is built around
              application handling, portal status, support and partner onboarding where required.
            </p>
            <ButtonLink href="/foretagsbetalningar-bankgiro">Read about Företagsbetalningar & Bankgiro</ButtonLink>
          </div>
          <div className="company-card reveal">
            <h3>What the flow includes</h3>
            <div className="feature-tags">
              {businessPaymentIncluded.slice(0, 6).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="website-styles"
        eyebrow="Website Styles"
        title="What type of website do you want?"
        intro="Choose a direction that matches your company, brand and growth plans."
      >
        <div className="card-grid three">
          {websiteStyles.map((style) => (
            <StyleCard key={style.title} item={style} />
          ))}
        </div>
      </Section>

      <Section id="process" eyebrow="Process" title="How we work.">
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-step reveal" key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <div className="center-actions">
          <ButtonLink href="/contact">Book a project discussion</ButtonLink>
        </div>
      </Section>

      <Section
        id="technology"
        eyebrow="Technology"
        title="Modern technology behind every solution"
        intro="Our solutions are built with modern web technology and a structure that can grow with your business. We keep the technical foundation strong while keeping the conversation business-friendly."
      >
        <div className="tech-cloud reveal">
          {techItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </Section>

      <Section id="faq" eyebrow="FAQ" title="Frequently asked questions">
        <div className="faq-list">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </Section>

      <Section id="about" eyebrow="About Div3rsa" title="We build digital solutions with the business in focus.">
        <div className="two-column">
          <div className="rich-copy reveal">
            <p>
              Div3rsa AB is a Swedish development company that builds modern websites, web apps, internal systems and
              SaaS platforms. We combine technical development with business understanding to create solutions that do
              not only look good, but help companies sell more, work smarter and grow faster.
            </p>
            <p>
              We work with everything from simple company websites to advanced systems with customer portals, admin
              dashboards, automation, payments, databases and integrations.
            </p>
            <ButtonLink href="/about" variant="secondary">
              Learn more about Div3rsa
            </ButtonLink>
          </div>
          <div className="company-card reveal">
            <h3>{company.name}</h3>
            <p>Org.nr: {company.orgNumber}</p>
            <a href={"mailto:" + company.email}>{company.email}</a>
            <div className="feature-tags">
              {aboutValues.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Contact us"
        intro="Do you want to build a website, app, portal or a complete system? Send us an email and we will review your needs."
      >
        <div className="two-column contact-layout">
          <div className="contact-info reveal">
            <h3>Project discussion</h3>
            <p>Email: <a href={"mailto:" + company.email}>{company.email}</a></p>
            <p>Company: {company.name}</p>
            <p>Organization number: {company.orgNumber}</p>
            <ButtonLink href={"mailto:" + company.email}>Email Div3rsa</ButtonLink>
          </div>
          <ContactForm />
        </div>
      </Section>

      <CTASection />
    </>
  );
}
