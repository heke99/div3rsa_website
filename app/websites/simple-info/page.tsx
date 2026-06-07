import type { Metadata } from "next";
import { WebsiteStyleDetail } from "@/components/WebsiteStyleDetail";
import { CTASection } from "@/components/CTASection";
import { websiteStyles } from "@/lib/content";

const style = websiteStyles.find((item) => item.slug === "simple-info");

export const metadata: Metadata = {
  title: "Simple / Information hemsida",
  description: "Simple-hemsida för företag som vill ha en ren, tydlig och snabb informationssida med kontaktflöde.",
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
