import type { Metadata } from "next";
import { WebsiteStyleDetail } from "@/components/WebsiteStyleDetail";
import { CTASection } from "@/components/CTASection";
import { websiteStyles } from "@/lib/content";

const style = websiteStyles.find((item) => item.slug === "hybrid-business");

export const metadata: Metadata = {
  title: "Hybrid / Modern Business Website",
  description: "Hybrid modern business website style with premium design, clear information and portal-ready growth by Div3rsa AB.",
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
