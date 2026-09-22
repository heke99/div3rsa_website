import { pageMetadata } from "@/lib/metadata";
import { LegalPage } from "@/components/LegalPage";
export const metadata = pageMetadata({ title: "Cookie policy", description: "What this website stores in your browser and how you control it.", path: "/cookies" });
export default function CookiePolicy(){return <LegalPage title="Cookie policy" intro="What this website stores in your browser and how you control it." sections={[
 ["Necessary storage","The website may use cookies or equivalent technical storage when needed for security, forms, sessions and functions you request. This storage is not used for advertising."],
 ["Remembering your choice","The key div3rsa-site-cookie-consent-v1 is stored locally in your browser to remember whether you allowed or rejected optional storage. It remains until you clear your website data or the consent version changes."],
 ["Optional analytics and advertising","This website currently has no optional analytics or advertising trackers enabled. Choosing “Allow optional” records a preference; it does not activate an undisclosed service. Before introducing optional tracking, this notice must identify the provider, purpose and retention period, and that tracking must be subject to the appropriate consent."],
 ["Changing your preference","On your first visit you can select “Reject optional” or “Allow optional”. Use “Cookie preferences” to reopen the panel and change your choice. Where browser storage is blocked, your choice can be kept only for the current page session."],
 ["Browser controls","You can also remove cookies and local storage in your browser. Blocking technically necessary storage can affect features that rely on it, such as sessions or forms."],
 ]}/>;}
