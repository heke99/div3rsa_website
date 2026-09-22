import { pageMetadata } from "@/lib/metadata";
import { BusinessPaymentsApplicationForm } from "@/components/business-payments/BusinessPaymentsApplicationForm";
import { company } from "@/lib/company";
export const metadata = pageMetadata({ title: "Business payment application", description: "Tell us about your company and payment requirements.", path: "/business-payments/apply" });
export default function ApplyPage() {return <><section className="page-hero compact"><div className="container narrow"><p className="eyebrow">Business payments / Application</p><h1>Tell us what you need.</h1><p className="page-lead">Your application goes to {company.name} for an initial review. Submission is not an approval or a guarantee of a payment solution. Please do not include identity documents or bank credentials.</p></div></section><section className="section application-section"><div className="container narrow"><BusinessPaymentsApplicationForm/></div></section></>;}
