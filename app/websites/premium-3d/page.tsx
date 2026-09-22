import type { Metadata } from "next";
import { WebsiteStyleDetail } from "@/components/WebsiteStyleDetail";
export const metadata: Metadata = { title: "Product-led websites", description: "Distinctive product storytelling and considered interaction for software and technology companies.", alternates: { canonical: "/websites/premium-3d" } };
export default function Page() { return <WebsiteStyleDetail slug="premium-3d" />; }
