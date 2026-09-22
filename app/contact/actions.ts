"use server";
import { company, entities } from "@/lib/company";
import { validateContact } from "@/lib/contact-validation";
import { renderRows } from "@/lib/server/business-payments-email";
import { sendSmtpMail } from "@/lib/email/smtp";
import { supabaseInsert } from "@/lib/server/supabase-rest";
export type ContactFormState = {ok:boolean;message:string;fieldErrors?:Record<string,string>};
const textValue=(formData:FormData,key:string)=>String(formData.get(key)||"").trim();
async function logEmail(params:{contactSubmissionId?:string;emailType:string;recipient:string;subject:string;status:"sent"|"failed";providerMessageId?:string;errorMessage?:string}) {
 await supabaseInsert({table:"email_logs",payload:{contact_submission_id:params.contactSubmissionId||null,email_type:params.emailType,recipient:params.recipient,subject:params.subject,status:params.status,provider_message_id:params.providerMessageId||null,error_message:params.errorMessage||null,sent_at:params.status==="sent"?new Date().toISOString():null},returning:"minimal"});
}
export async function submitContactRequest(_previousState:ContactFormState,formData:FormData):Promise<ContactFormState> {
 if(textValue(formData,"website_check")) return {ok:false,message:"Please email us directly if you cannot submit this form."};
 const fieldErrors=validateContact(formData);
 if(Object.keys(fieldErrors).length) return {ok:false,message:"Please check the highlighted fields.",fieldErrors};
 const preferredEntity=entities.find(entity=>entity.id===textValue(formData,"preferredEntity"))?.name||"No preference";
 const payload={name:textValue(formData,"name"),company_name:textValue(formData,"company")||null,email:textValue(formData,"email"),phone:textValue(formData,"phone")||null,project_type:textValue(formData,"projectType"),budget_range:textValue(formData,"budget")||null,
 // Retain the existing storage contract; no production migration is needed.
 message:`Preferred contracting entity: ${preferredEntity}\n\n${textValue(formData,"message")}`,status:"new"};
 let submissionId:string|undefined;
 try {const saved=await supabaseInsert<{id:string}>({table:"contact_submissions",payload});submissionId=saved[0]?.id;if(!submissionId) throw new Error("Missing saved record");}
 catch {console.error("Contact request could not be saved");return {ok:false,message:"We could not save your enquiry. Please try again or email info@div3rsa.com directly."};}
 const recipient=process.env.ADMIN_NOTIFICATION_EMAIL||company.email;
 const subject=`New project enquiry – ${payload.company_name||payload.name}`;
 const values:Array<[string,string|null]>=[["Name",payload.name],["Company",payload.company_name],["Email",payload.email],["Phone",payload.phone],["Project",payload.project_type],["Budget",payload.budget_range],["Message",payload.message]];
 try {
  const result=await sendSmtpMail({to:recipient,subject,replyTo:payload.email,text:[`New enquiry for ${company.name} via ${company.domain}.`,"",...values.map(([label,value])=>`${label}: ${value||"-"}`)].join("\n"),html:`<div style="font-family:Arial,sans-serif;line-height:1.6;color:#152a31"><h2>New project enquiry</h2><table style="border-collapse:collapse;width:100%;max-width:720px">${renderRows(values)}</table></div>`});
  await logEmail({contactSubmissionId:submissionId,emailType:"contact_request_admin_notification",recipient,subject,status:"sent",providerMessageId:result.messageId||undefined}).catch(()=>null);
 } catch(error) {
  console.error("Contact notification failed",{submissionId});
  await logEmail({contactSubmissionId:submissionId,emailType:"contact_request_admin_notification",recipient,subject,status:"failed",errorMessage:error instanceof Error?error.message:"Unknown SMTP email error"}).catch(()=>null);
 }
 // The enquiry is durable even when the notification fails.
 return {ok:true,message:"Your enquiry has been received. We will review it and get back to you."};
}
