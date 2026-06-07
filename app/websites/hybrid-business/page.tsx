import type { Metadata } from "next";
import { WebsiteStyleDetail } from "@/components/WebsiteStyleDetail";
import { CTASection } from "@/components/CTASection";
import { websiteStyles } from "@/lib/content";

const style = websiteStyles.find((item) => item.slug === "hybrid-business");

export const metadata: Metadata = {
  title: "Business / Modern hemsida",
  description: "Business-hemsida med modern design, tydlig B2B-struktur, CTA-flöden och möjlighet att växa till kundportal.",
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
