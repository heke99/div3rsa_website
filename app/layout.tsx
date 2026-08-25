import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { company, siteMeta } from "@/lib/company";
import "./globals.css";
import "./cookie-consent.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: siteMeta.homeTitle,
    template: "%s | Attmos AB",
  },
  description: siteMeta.homeDescription,
  keywords: siteMeta.keywords,
  applicationName: company.name,
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: company.url,
    siteName: company.name,
    title: siteMeta.homeTitle,
    description: siteMeta.homeDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.homeTitle,
    description: siteMeta.homeDescription,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
