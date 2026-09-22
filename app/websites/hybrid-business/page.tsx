import type { Metadata } from "next";
import { WebsiteStyleDetail } from "@/components/WebsiteStyleDetail";
export const metadata: Metadata = { title: "Business websites", description: "Clear, connected websites for B2B companies, consultancies and service businesses.", alternates: { canonical: "/websites/hybrid-business" } };
export default function Page() { return <WebsiteStyleDetail slug="hybrid-business" />; }
