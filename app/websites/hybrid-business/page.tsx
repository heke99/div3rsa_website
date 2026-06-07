import type { Metadata } from "next";
import { WebsiteStyleDetail } from "@/components/WebsiteStyleDetail";
import { CTASection } from "@/components/CTASection";
import { websiteStyles } from "@/lib/content";

const style = websiteStyles.find((item) => item.slug === "hybrid-business");

export const metadata: Metadata = {
  title: "Modern företagshemsida",
  description: "Modern företagshemsida med premiumdesign, tydlig information och möjlighet att växa till kundportal.",
};

export default function Page() {
  if (!style) {
    return null;
  }

  return (
    <>
      <WebsiteStyleDetail style={style} />
      <CTASection />
    </>
  );
}
