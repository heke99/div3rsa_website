"use client";
import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { submitBusinessPaymentApplication } from "@/app/foretagsbetalningar-bankgiro/ansok/actions";
import { company } from "@/lib/company";
const steps=["Company","Requirements","Confirm"];
const fields=[{name:"company_name",label:"Company name",autocomplete:"organization"},{name:"org_number",label:"Registration number"},{name:"contact_name",label:"Contact name",autocomplete:"name"},{name:"email",label:"Email",type:"email",autocomplete:"email"},{name:"phone",label:"Phone",type:"tel",autocomplete:"tel"},{name:"industry",label:"Industry"}];
const requiredByStep=[[...fields.map(field=>field.name),"business_description"],["customer_type","monthly_volume_estimate","invoice_count_estimate","average_invoice_amount","urgency"],["consent_contact","consent_partner_forwarding"]];
const stepFields=[[...requiredByStep[0],"website","has_swedish_business_account","has_bankgiro","was_denied_bank_services"],[...requiredByStep[1],"current_invoice_system","other_comment"],requiredByStep[2]];
export function BusinessPaymentsApplicationForm(){
 const [state,formAction,pending]=useActionState(submitBusinessPaymentApplication,{ok:false,message:""});
 const [step,setStep]=useState(0);
 const [clientErrors,setClientErrors]=useState<Record<string,string>>({});
 const form=useRef<HTMLFormElement>(null);
 const serverErrorStep=state.errors?stepFields.findIndex(names=>names.some(name=>state.errors?.[name])):-1;
 const [reviewedServerState,setReviewedServerState]=useState(state);
 const currentStep=state!==reviewedServerState&&serverErrorStep>=0?serverErrorStep:step;
 const errors={...(state!==reviewedServerState?state.errors:{}),...clientErrors};
 useEffect(()=>{if(!state.ok&&state.message)form.current?.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();},[state]);
 function fieldError(name:string){return errors[name]?<span id={`${name}-error`} className="field-error">{errors[name]}</span>:null;}
 function attrs(name:string){return {id:name,name,"aria-invalid":Boolean(errors[name]),"aria-describedby":errors[name]?`${name}-error`:undefined};}
 function validate(index:number){
  if(!form.current)return false;
  const data=new FormData(form.current);const next:Record<string,string>={};
  for(const name of requiredByStep[index])if(!String(data.get(name)||"").trim())next[name]=name.startsWith("consent_")?"Please confirm before continuing.":"Please complete this field.";
  if(index===0&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get("email")||"")))next.email="Please enter a valid email address.";
  if(index===1){for(const name of ["monthly_volume_estimate","average_invoice_amount"]){const raw=String(data.get(name)||"").replace(/\s/g,"").replace(",",".");if(!/^\d+(\.\d{1,2})?$/.test(raw)||Number(raw)<=0)next[name]="Enter a positive amount in SEK.";}const count=String(data.get("invoice_count_estimate")||"");if(!/^\d+$/.test(count)||Number(count)<1)next.invoice_count_estimate="Enter a positive whole number.";}
  setClientErrors(next);const name=Object.keys(next)[0];if(name)requestAnimationFrame(()=>form.current?.querySelector<HTMLElement>(`[name="${name}"]`)?.focus());return !name;
 }
 function move(target:number){setReviewedServerState(state);if(target>currentStep)for(let index=currentStep;index<target;index++)if(!validate(index)){setStep(index);return;}setStep(target);setClientErrors({});}
 if(state.ok)return <div className="success-card" role="status"><p className="eyebrow">Application received</p><h2>Thank you for the details.</h2><p>We will review your application and contact you about next steps. This is not a payment service approval.</p><Link className="button button-primary" href="/">Back to Trafexa Nordic</Link></div>;
 return <form ref={form} id="business-payment-application-form" className="application-form" action={formAction} onReset={event=>event.preventDefault()} aria-busy={pending} noValidate onSubmit={event=>{for(let index=0;index<steps.length;index++)if(!validate(index)){event.preventDefault();setStep(index);setReviewedServerState(state);return;}}}>
  <div className="step-indicator" aria-label="Application steps">{steps.map((label,index)=><button key={label} className={index===currentStep?"step-pill active":"step-pill"} type="button" aria-current={index===currentStep?"step":undefined} onClick={()=>move(index)}><span>{index+1}</span> {label}</button>)}</div>
  {state.message&&<p role="alert" className="form-alert">{state.message}</p>}
  <div className={currentStep===0?"form-step active":"form-step"}>
   <div className="form-step-heading"><p className="eyebrow">Step 1</p><h2>The company.</h2><p>Basic details only. Do not upload identity documents or bank credentials.</p></div>
   <div className="form-grid">{fields.map(field=><label key={field.name} htmlFor={field.name}>{field.label}<input {...attrs(field.name)} type={field.type||"text"} autoComplete={field.autocomplete} maxLength={254}/>{fieldError(field.name)}</label>)}
    <label htmlFor="website">Website (optional)<input {...attrs("website")} placeholder="https://" autoComplete="url" maxLength={500}/>{fieldError("website")}</label>
    {[["has_swedish_business_account","Do you have a Swedish business account?"],["has_bankgiro","Do you currently have Bankgiro?"],["was_denied_bank_services","Have you previously been declined bank services?"]].map(([name,label])=><label key={name} htmlFor={name}>{label}<select {...attrs(name)} defaultValue=""><option value="">Not specified</option><option value="yes">Yes</option><option value="no">No</option></select>{fieldError(name)}</label>)}
   </div>
   <label htmlFor="business_description">Brief business description<textarea {...attrs("business_description")} rows={4} maxLength={8000}/>{fieldError("business_description")}</label>
  </div>
  <div className={currentStep===1?"form-step active":"form-step"}>
   <div className="form-step-heading"><p className="eyebrow">Step 2</p><h2>Your requirements.</h2><p>Estimates are fine. All payment amounts below are in SEK.</p></div>
   <div className="form-grid">
    <label htmlFor="customer_type">Who do you invoice?<select {...attrs("customer_type")} defaultValue=""><option value="" disabled>Select customer type</option><option value="B2B">Businesses</option><option value="B2C">Consumers</option><option value="both">Both</option></select>{fieldError("customer_type")}</label>
    {[["monthly_volume_estimate","Estimated monthly volume (SEK)"],["invoice_count_estimate","Invoices per month"],["average_invoice_amount","Average invoice amount (SEK)"]].map(([name,label])=><label key={name} htmlFor={name}>{label}<input {...attrs(name)} inputMode={name==="invoice_count_estimate"?"numeric":"decimal"} maxLength={20}/>{fieldError(name)}</label>)}
    <label htmlFor="current_invoice_system">Current invoicing system (optional)<input {...attrs("current_invoice_system")} maxLength={254}/>{fieldError("current_invoice_system")}</label>
    <label htmlFor="urgency">When would you like to start?<select {...attrs("urgency")} defaultValue=""><option value="" disabled>Select timeframe</option><option value="asap">As soon as possible</option><option value="1-2 weeks">Within 1–2 weeks</option><option value="this month">This month</option><option value="planning">Planning ahead</option></select>{fieldError("urgency")}</label>
   </div>
   <div className="checkbox-grid">{[["needs_invoicing","Invoicing"],["needs_customer_payments","Receiving customer payments"],["needs_bankgiro_flow","Bankgiro-based workflow"],["needs_invoice_financing","Invoice financing / advance payments"],["needs_api","Future API or integration"]].map(([name,label],index)=><label className="checkbox-card" key={name}><input type="checkbox" name={name} defaultChecked={index<3}/><span>{label}</span></label>)}</div>
   <label htmlFor="other_comment">Additional comments (optional)<textarea {...attrs("other_comment")} rows={4} maxLength={8000}/>{fieldError("other_comment")}</label>
  </div>
  <div className={currentStep===2?"form-step active":"form-step"}>
   <div className="form-step-heading"><p className="eyebrow">Step 3</p><h2>Review and confirm.</h2><p>You can return to either previous step to review your details before submitting.</p></div>
   <div className="consent-box">
    <label className="checkbox-card"><input type="checkbox" {...attrs("consent_contact")}/><span>I ask {company.name} to review my application and contact me about next steps.</span>{fieldError("consent_contact")}</label>
    <label className="checkbox-card"><input type="checkbox" {...attrs("consent_partner_forwarding")}/><span>I have read the <Link href="/privacy">privacy notice</Link> and understand that necessary information may be shared with a relevant payment or financial provider for further assessment and onboarding.</span>{fieldError("consent_partner_forwarding")}</label>
    <p>{company.name} is not a bank. Bankgiro and payment services are not guaranteed. Required KYC/AML checks are handled later by the relevant provider. Read the <Link href="/business-payments/terms">application terms</Link>.</p>
   </div>
  </div>
  <div className="form-actions-sticky">{currentStep>0?<button type="button" className="button button-secondary" onClick={()=>move(currentStep-1)}>Back</button>:<span/>}{currentStep<2?<button className="button button-primary" type="button" onClick={()=>move(currentStep+1)}>Next step</button>:<button className="button button-primary" type="submit" disabled={pending}>{pending?"Submitting…":"Submit application"}</button>}</div>
 </form>;
}
