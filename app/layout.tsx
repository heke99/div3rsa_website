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
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}><body><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content" tabIndex={-1}>{children}</main><Footer /><CookieConsent /></body></html>;
}
