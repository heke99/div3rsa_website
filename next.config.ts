import type { NextConfig } from "next";
const redirects = [
 ["/integritetspolicy", "/privacy"], ["/cookiepolicy", "/cookies"], ["/anvandarvillkor", "/terms"],
 ["/foretagsbetalningar-bankgiro", "/business-payments"], ["/foretagsbetalningar-bankgiro/ansok", "/business-payments/apply"], ["/foretagsbetalningar-bankgiro/villkor", "/business-payments/terms"],
];
const nextConfig: NextConfig = {
  async redirects() { return redirects.map(([source, destination]) => ({ source, destination, permanent: true })); },
};
export default nextConfig;
