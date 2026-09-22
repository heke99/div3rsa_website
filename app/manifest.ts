import type { MetadataRoute } from "next";
import { company, siteMeta } from "@/lib/company";
import brand from "@/lib/brand.json";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: company.shortName,
    short_name: "Trafexa",
    description: siteMeta.homeDescription,
    lang: "en",
    start_url: "/",
    scope: "/",
    // This remains a company website. No offline capability or standalone app is implied.
    display: "browser",
    background_color: "#f7f9fa",
    theme_color: brand.background,
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/brand/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
