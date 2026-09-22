import { company } from "@/lib/company";

export function SiteStructuredData() {
  const organisationId = `${company.url}/#organisation`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organisationId,
        name: company.shortName,
        legalName: company.name,
        url: company.url,
        email: company.email,
        identifier: { "@type": "PropertyValue", propertyID: "Swedish company registration number", value: company.orgNumber },
        logo: { "@type": "ImageObject", url: `${company.url}/brand/icon-512.png`, width: 512, height: 512 },
      },
      {
        "@type": "WebSite",
        "@id": `${company.url}/#website`,
        name: company.shortName,
        url: company.url,
        inLanguage: "en",
        publisher: { "@id": organisationId },
      },
    ],
  };
  // Only the published website operator is represented. Do not infer a parent/subsidiary relationship.
  return <script id="site-structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
