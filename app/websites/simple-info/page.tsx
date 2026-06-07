import type { Metadata } from "next";
import { WebsiteStyleDetail } from "@/components/WebsiteStyleDetail";
import { CTASection } from "@/components/CTASection";
import { websiteStyles } from "@/lib/content";

const style = websiteStyles.find((item) => item.slug === "simple-info");

export const metadata: Metadata = {
  title: "Enkel informationssida",
  description: "Enkel företagshemsida för tydliga tjänster, förtroende och kontaktflöden av Div3rsa AB.",
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
