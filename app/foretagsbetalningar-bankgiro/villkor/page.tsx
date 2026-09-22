import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/company";
export const metadata:Metadata={title:"Business payment application terms",description:"Important information about the business payment application process.",alternates:{canonical:"/business-payments/terms"}};
export default function PaymentTerms(){return <LegalPage title="Application terms" intro="Important information about the business payment application process." sections={[
 ["No guarantee of a payment service",`${company.name} is not a bank and does not guarantee a Bankgiro, business account or payment solution before the relevant provider has approved the application and onboarding.`],
 ["Information and assessment","The form collects basic company information and payment requirements. Required KYC/AML checks and supporting documents are handled later by the relevant payment or financial provider."],
 ["Your application",`Submitting asks ${company.name} to assess your enquiry and contact you about next steps. Information is passed to another provider only where there is a legal basis and you have received the information required for further onboarding.`],
 ["Separate agreements","Submission does not establish an agreement for payment services. Any external provider’s fees, conditions, checks and decisions are set out in its separate onboarding or agreement."],
 ]}/>;}
