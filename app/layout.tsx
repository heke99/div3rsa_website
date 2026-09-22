import type { Metadata, Viewport } from "next";
import { Manrope, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { company, siteMeta } from "@/lib/company";
import "./globals.css";
const display = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-display" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap", variable: "--font-body" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], display: "swap", variable: "--font-mono" });
export const viewport: Viewport = { themeColor: "#f7f9fa" };
export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: { default: siteMeta.homeTitle, template: "%s | Trafexa Nordic" },
  description: siteMeta.homeDescription, keywords: [...siteMeta.keywords],
  applicationName: company.shortName, authors: [{ name: company.name }], creator: company.name, publisher: company.name,
  openGraph: { type: "website", locale: "en_GB", url: company.url, siteName: company.shortName, title: siteMeta.homeTitle, description: siteMeta.homeDescription },
  twitter: { card: "summary_large_image", title: siteMeta.homeTitle, description: siteMeta.homeDescription },
  icons: {
    icon: [
      { url: "/brand/favicon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  other: { "apple-mobile-web-app-title": company.shortName },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}><head><link rel="mask-icon" href="/brand/safari-pinned-tab.svg" color="#14343c" /></head><body><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content" tabIndex={-1}>{children}</main><Footer /><CookieConsent /></body></html>;
}
