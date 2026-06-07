import type { MetadataRoute } from "next";
import { company, websiteStyleLinks } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = company.url;
  const routes = [
    "",
    "/services",
    "/websites",
    ...websiteStyleLinks.map((item) => item.href),
    "/foretagsbetalningar-bankgiro",
    "/foretagsbetalningar-bankgiro/ansok",
    "/foretagsbetalningar-bankgiro/villkor",
    "/systems",
    "/about",
    "/contact",
    "/integritetspolicy",
    "/anvandarvillkor",
    "/cookiepolicy",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("foretagsbetalningar") ? 0.9 : 0.7,
  }));
}
