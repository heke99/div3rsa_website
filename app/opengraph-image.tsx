import { ImageResponse } from "next/og";
import { BrandMark } from "@/components/BrandMark";
import { company } from "@/lib/company";
import brand from "@/lib/brand.json";

export const alt = "Trafexa Nordic — Digital products & engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 70px", background: "#f7f9fa", color: "#152a31", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <BrandMark size={66} primary={brand.background} secondary="#72999e" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 46, letterSpacing: -3, lineHeight: 1 }}>trafexa</span>
            <span style={{ fontSize: 13, letterSpacing: 5, marginTop: 8 }}>NORDIC</span>
          </div>
        </div>
        <span style={{ fontSize: 16, letterSpacing: 2, color: "#54666c" }}>SWEDEN / UNITED STATES</span>
      </div>
      <div style={{ fontSize: 83, lineHeight: 1.08, letterSpacing: -4, display: "flex", flexDirection: "column" }}>
        <span>Complex work.</span><span style={{ color: "#16656f" }}>Considered software.</span>
      </div>
      <div style={{ fontSize: 22, borderTop: "1px solid #d5dfe2", paddingTop: 24, display: "flex", justifyContent: "space-between" }}>
        <span>Digital products & engineering</span><span>{company.domain}</span>
      </div>
    </div>, size,
  );
}
