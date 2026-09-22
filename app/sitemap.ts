import type { MetadataRoute } from "next";
import { company } from "@/lib/company";
import { products } from "@/lib/products";
export default function sitemap(): MetadataRoute.Sitemap {
 const routes=["", "/about", "/services", "/systems", "/websites", "/contact", "/privacy", "/cookies", "/terms", "/business-payments", "/business-payments/apply", "/business-payments/terms", "/websites/hybrid-business", "/websites/premium-3d", "/websites/simple-info", ...products.map(p=>`/systems/${p.slug}`)];
 return routes.map(route=>({url:`${company.url}${route}`,changeFrequency:"monthly",priority:route===""?1:0.6}));
}
