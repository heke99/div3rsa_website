import type { Metadata } from "next";
import { WebsiteStyleDetail } from "@/components/WebsiteStyleDetail";
import { CTASection } from "@/components/CTASection";
import { websiteStyles } from "@/lib/content";

const style = websiteStyles.find((item) => item.slug === "premium-3d");

export const metadata: Metadata = {
  title: "Premium 3D / Wow-hemsida",
  description: "Premium 3D-hemsida med animationer, stark hero och modern varumärkeskänsla av Div3rsa AB.",
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
