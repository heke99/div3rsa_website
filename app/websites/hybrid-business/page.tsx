import { pageMetadata } from "@/lib/metadata";
import { WebsiteStyleDetail } from "@/components/WebsiteStyleDetail";
export const metadata = pageMetadata({ title: "Business websites", description: "Clear, connected websites for B2B companies, consultancies and service businesses.", path: "/websites/hybrid-business" });
export default function Page() { return <WebsiteStyleDetail slug="hybrid-business" />; }
