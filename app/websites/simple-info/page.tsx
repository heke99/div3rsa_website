import { pageMetadata } from "@/lib/metadata";
import { WebsiteStyleDetail } from "@/components/WebsiteStyleDetail";
export const metadata = pageMetadata({ title: "Focused websites", description: "Carefully edited websites for independent businesses, specialists and new ventures.", path: "/websites/simple-info" });
export default function Page() { return <WebsiteStyleDetail slug="simple-info" />; }
