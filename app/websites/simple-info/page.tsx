import type { Metadata } from "next";
import { WebsiteStyleDetail } from "@/components/WebsiteStyleDetail";
export const metadata: Metadata = { title: "Focused websites", description: "Carefully edited websites for independent businesses, specialists and new ventures.", alternates: { canonical: "/websites/simple-info" } };
export default function Page() { return <WebsiteStyleDetail slug="simple-info" />; }
