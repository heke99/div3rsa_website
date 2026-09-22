import { company } from "./company";
export const applicationStatuses=["new","under_review","needs_more_info","qualified","sent_to_partner","partner_onboarding","approved","rejected","customer_created"] as const;
export const businessPaymentsFaqs=[
 {question:"Can customers pay through a Swedish Bankgiro flow?",answer:"This may be possible under a solution approved by the relevant payment provider. Availability, settlement arrangements and account requirements depend on that provider’s assessment and terms."},
 {question:"Do we need a Swedish business bank account?",answer:"Not necessarily. Tell us which accounts and payment arrangements you use. We review your needs before discussing any potentially suitable solution."},
 {question:"Will our company receive its own Bankgiro?",answer:"That depends on the arrangement and the provider’s approval. We do not promise a dedicated Bankgiro before the application and onboarding have been assessed."},
 {question:"Can we enquire after a bank has declined us?",answer:"Yes, but every case is assessed individually. A previous refusal does not create any guarantee of approval elsewhere."},
 {question:`Is ${company.shortName} a bank?`,answer:`${company.name} is not a bank. We provide the technology, portal, application flow and administrative onboarding. Regulated payment or financing activities, where required, are handled by the relevant external provider under its own terms and assessment.`},
 {question:"Does this application include KYC or AML checks?",answer:"No. This form collects basic company information and requirements. Any required identity checks, anti-money-laundering assessment and supporting documents are handled later by the relevant provider."},
];
export const businessPaymentIncluded=["Payment workflow assessment","Invoicing and customer payment requirements","Application and administrative onboarding","Portal status and follow-up","Support","Future API and integration options"];
