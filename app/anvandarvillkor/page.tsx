import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/company";
export const metadata:Metadata={title:"Website terms",description:"The terms for using this website and its enquiry and application forms.",alternates:{canonical:"/terms"}};
export default function TermsPage(){return <LegalPage title="Website terms" intro="The terms for using this website and its enquiry and application forms." sections={[
 ["Purpose of the website","This website presents products and services and lets you submit enquiries or applications. Website information is not a binding offer unless explicitly stated otherwise."],
 ["Contracting entities",`${company.name} (Sweden, registration number ${company.orgNumber}) and Diversa Solutions LLC (Wyoming, United States) are separate legal entities. The applicable proposal or agreement identifies the entity responsible for a project, its deliverables and commercial terms. An enquiry or entity preference is not a contract.`],
 ["No banking service or guarantee",`${company.name} is not a bank. The website does not guarantee a bank account, Bankgiro, financing or an approved payment solution. Where relevant, these services are provided or decided by a separate payment or financial provider.`],
 ["Applications","Submitting an application does not automatically grant approval, an agreement, a payment solution or portal access. We review the information and respond with next steps. An external provider may carry out its own assessment and onboarding."],
 ["Accurate information and authority","You are responsible for providing accurate information and for having authority to share that information and, where relevant, represent the company."],
 ["Third-party services","The website may refer to or interact with independent providers. Their services, decisions and conditions are governed by their own agreements and responsibilities unless expressly agreed otherwise."],
 ["Changes","Website content and these terms may be updated. Project-specific obligations are governed by the applicable agreement rather than a general description on this website."],
 ]}/>;}
