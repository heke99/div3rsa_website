import type { Metadata } from "next";
import { company } from "./company";

type PageDetails = { title: string; description: string; path: string };

/** Keep each page's canonical and social URL aligned; nested Next metadata is shallow-merged. */
export function pageMetadata({ title, description, path }: PageDetails): Metadata {
  const socialTitle = path === "/" ? title : `${title} | ${company.shortName}`;
  return {
    title: path === "/" ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: company.shortName,
      title: socialTitle,
      description,
      url: new URL(path, company.url).href,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${company.shortName} — Digital products & engineering` }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [{ url: "/twitter-image", alt: `${company.shortName} — Digital products & engineering` }],
    },
  };
}
