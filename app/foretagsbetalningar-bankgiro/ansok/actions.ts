"use server";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { sendSmtpMail } from "@/lib/email/smtp";
import { renderRows } from "@/lib/server/business-payments-email";
import { escapeHtml } from "@/lib/server/escape-html";
import { company } from "@/lib/company";
type ActionState={ok:boolean;message:string;errors?:Record<string,string>};
const requiredFields=["company_name","org_number","contact_name","email","phone","industry","business_description","customer_type","monthly_volume_estimate","invoice_count_estimate","average_invoice_amount","urgency"];
const value=(data:FormData,key:string)=>String(data.get(key)||"").trim();
const boolValue=(data:FormData,key:string)=>data.get(key)==="on"||data.get(key)==="true";
function optionalBool(data:FormData,key:string){const raw=value(data,key);return raw ? raw==="yes":null;}
function amount(data:FormData,key:string){return Number(value(data,key).replace(/\s/g,"").replace(",","."));}
export async function submitBusinessPaymentApplication(_:ActionState,formData:FormData):Promise<ActionState> {
 const errors:Record<string,string>={};
 for(const field of requiredFields){if(!value(formData,field))errors[field]="Please complete this field.";if(field!=="business_description"&&value(formData,field).length>254)errors[field]="Please use no more than 254 characters.";}
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value(formData,"email"))) errors.email="Please enter a valid email address.";
 for(const field of ["business_description","other_comment"])if(value(formData,field).length>8000)errors[field]="Please use no more than 8,000 characters.";
 for(const field of ["website","current_invoice_system"])if(value(formData,field).length>500)errors[field]="Please use no more than 500 characters.";
 for(const field of ["has_swedish_business_account","has_bankgiro","was_denied_bank_services"])if(!["","yes","no"].includes(value(formData,field)))errors[field]="Please select yes or no.";
 if(!["B2B","B2C","both"].includes(value(formData,"customer_type")))errors.customer_type="Please choose a customer type.";
 if(!["asap","1-2 weeks","this month","planning"].includes(value(formData,"urgency")))errors.urgency="Please select your timeframe.";
 for(const field of ["monthly_volume_estimate","average_invoice_amount"]){const raw=value(formData,field).replace(/\s/g,"").replace(",",".");if(!/^\d+(\.\d{1,2})?$/.test(raw)||Number(raw)<=0||!Number.isFinite(Number(raw)))errors[field]="Please enter a positive amount in SEK, with up to two decimal places.";}
 if(!/^\d+$/.test(value(formData,"invoice_count_estimate"))||!Number.isSafeInteger(Number(value(formData,"invoice_count_estimate")))||Number(value(formData,"invoice_count_estimate"))<1)errors.invoice_count_estimate="Please enter a positive whole number.";
 if(!boolValue(formData,"consent_contact"))errors.consent_contact=`Please confirm that ${company.name} may review your application and contact you about next steps.`;
 if(!boolValue(formData,"consent_partner_forwarding"))errors.consent_partner_forwarding="Please confirm that you have read the information about further onboarding.";
 if(Object.keys(errors).length)return {ok:false,message:"Please check the highlighted fields and try again.",errors};
 let supabase:ReturnType<typeof getSupabaseAdmin>;
 try{supabase=getSupabaseAdmin();}catch{return {ok:false,message:"The application service is unavailable. Please email info@div3rsa.com directly."};}
 const payload={company_name:value(formData,"company_name"),org_number:value(formData,"org_number"),contact_name:value(formData,"contact_name"),email:value(formData,"email"),phone:value(formData,"phone"),industry:value(formData,"industry"),website:value(formData,"website")||null,business_description:value(formData,"business_description"),has_swedish_business_account:optionalBool(formData,"has_swedish_business_account"),has_bankgiro:optionalBool(formData,"has_bankgiro"),was_denied_bank_services:optionalBool(formData,"was_denied_bank_services"),customer_type:value(formData,"customer_type"),monthly_volume_estimate:amount(formData,"monthly_volume_estimate"),invoice_count_estimate:Number(value(formData,"invoice_count_estimate")),average_invoice_amount:amount(formData,"average_invoice_amount"),needs_invoicing:boolValue(formData,"needs_invoicing"),needs_customer_payments:boolValue(formData,"needs_customer_payments"),needs_bankgiro_flow:boolValue(formData,"needs_bankgiro_flow"),needs_invoice_financing:boolValue(formData,"needs_invoice_financing"),needs_api:boolValue(formData,"needs_api"),current_invoice_system:value(formData,"current_invoice_system")||null,urgency:value(formData,"urgency"),other_comment:value(formData,"other_comment")||null,consent_partner_forwarding:boolValue(formData,"consent_partner_forwarding"),consent_contact:boolValue(formData,"consent_contact"),status:"new",admin_notification_status:"pending"};
 let applicationId:string;
 try{const {data,error}=await supabase.from("payment_applications").insert(payload).select("id").single();if(error||!data)throw new Error("Not saved");applicationId=data.id;}
 catch{return {ok:false,message:"We could not save the application. Please try again or contact info@div3rsa.com."};}
 const recipient=process.env.ADMIN_NOTIFICATION_EMAIL||company.email;
 const subject="New application – Business payments & Bankgiro";
 const portalUrl=process.env.PORTAL_ADMIN_URL||"https://portal.div3rsa.com/admin/payment-applications";
 const rows:Array<[string,string]>=Object.entries(payload).map(([key,item])=>[key.replaceAll("_"," "),item===null?"Not specified":String(item)]);
 let status:"sent"|"failed"="sent";let providerMessageId:string|null=null;let errorMessage:string|null=null;
 try{const result=await sendSmtpMail({to:recipient,subject,replyTo:payload.email,text:[`New application for ${company.name}.`,...rows.map(([label,item])=>`${label}: ${item}`),`Admin: ${portalUrl}`].join("\n"),html:`<div style="font-family:Arial,sans-serif;line-height:1.6;color:#152a31"><h2>New business payment application</h2><table style="border-collapse:collapse">${renderRows(rows)}</table><p><a href="${escapeHtml(portalUrl)}">Open admin</a></p></div>`});providerMessageId=result.messageId||null;}
 catch(error){status="failed";errorMessage=error instanceof Error?error.message:"Unknown SMTP error";console.error("Application notification failed",{applicationId});}
 // Keep the existing event, email-log and notification status contracts for the separate portal.
 try{
  await supabase.from("payment_application_events").insert({application_id:applicationId,event_type:"application_submitted",description:`Application submitted to ${company.name} via ${company.domain}.`,created_by:"public_form"});
  await supabase.from("email_logs").insert({application_id:applicationId,email_type:"admin_new_application_notification",recipient,subject,status,provider_message_id:providerMessageId,error_message:errorMessage,sent_at:status==="sent"?new Date().toISOString():null});
  await supabase.from("payment_applications").update({admin_notification_status:status}).eq("id",applicationId);
  await supabase.from("payment_application_events").insert({application_id:applicationId,event_type:status==="sent"?"admin_notification_email_sent":"admin_notification_email_failed",description:status==="sent"?`Internal notification sent to ${recipient}.`:errorMessage,created_by:"system"});
 }catch{console.error("Application notification audit failed",{applicationId});}
 return {ok:true,message:"Your application has been received."};
}
