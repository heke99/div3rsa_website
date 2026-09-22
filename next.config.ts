import type { NextConfig } from "next";
const redirects = [
 ["/integritetspolicy", "/privacy"], ["/cookiepolicy", "/cookies"], ["/anvandarvillkor", "/terms"],
 ["/foretagsbetalningar-bankgiro", "/business-payments"], ["/foretagsbetalningar-bankgiro/ansok", "/business-payments/apply"], ["/foretagsbetalningar-bankgiro/villkor", "/business-payments/terms"],
];
const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
      ],
    }];
  },
  async redirects() { return redirects.map(([source, destination]) => ({ source, destination, permanent: true })); },
};
export default nextConfig;
