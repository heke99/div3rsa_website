"use server";

import { sendEmail, renderRows } from "@/lib/server/business-payments-email";
import { supabaseInsert, supabasePatch } from "@/lib/server/supabase-rest";

type ApplicationRecord = {
  id: string;
  company_name: string;
  org_number: string;
  contact_name: string;
  email: string;
  phone: string | null;
  industry: string | null;
  website: string | null;
  business_description: string | null;
  has_swedish_business_account: boolean | null;
  has_bankgiro: boolean | null;
  was_denied_bank_services: boolean | null;
  customer_type: string | null;
  monthly_volume_estimate: string | null;
  invoice_count_estimate: string | null;
  average_invoice_amount: string | null;
  needs_invoicing: boolean;
  needs_customer_payments: boolean;
  needs_bankgiro_flow: boolean;
  needs_invoice_financing: boolean;
  needs_api: boolean;
  current_invoice_system: string | null;
  urgency: string | null;
  other_comment: string | null;
  consent_partner_forwarding: boolean;
  consent_contact: boolean;
};

export type BusinessApplicationState = {
  ok: boolean;
  message: string;
  applicationId?: string;
};

const textValue = (formData: FormData, key: string) => String(formData.get(key) || "").trim();
const optionalTextValue = (formData: FormData, key: string) => textValue(formData, key) || null;
const boolValue = (formData: FormData, key: string) => formData.get(key) === "on" || formData.get(key) === "true";
const nullableBoolValue = (formData: FormData, key: string) => {
  const value = textValue(formData, key);
  if (value === "yes") return true;
  if (value === "no") return false;
  return null;
};

async function logApplicationEvent(applicationId: string, eventType: string, description: string) {
  await supabaseInsert({
    table: "payment_application_events",
    payload: {
      application_id: applicationId,
      event_type: eventType,
      description,
      created_by: "system",
    },
    returning: "minimal",
  });
}

async function logEmail(params: {
  applicationId: string;
  emailType: string;
  recipient: string;
  subject: string;
  status: "sent" | "failed";
  providerMessageId?: string;
  errorMessage?: string;
}) {
  await supabaseInsert({
    table: "email_logs",
    payload: {
      application_id: params.applicationId,
      customer_id: null,
      email_type: params.emailType,
      recipient: params.recipient,
      subject: params.subject,
      status: params.status,
      provider_message_id: params.providerMessageId || null,
      error_message: params.errorMessage || null,
      sent_at: params.status === "sent" ? new Date().toISOString() : null,
    },
    returning: "minimal",
  });
}

function validate(formData: FormData) {
  const required = [
    ["company_name", "Företagsnamn saknas"],
    ["org_number", "Organisationsnummer saknas"],
    ["contact_name", "Kontaktperson saknas"],
    ["email", "E-post saknas"],
    ["industry", "Bransch saknas"],
    ["business_description", "Kort verksamhetsbeskrivning saknas"],
    ["customer_type", "Kundtyp saknas"],
  ];

  for (const [key, message] of required) {
    if (!textValue(formData, key)) {
      return message;
    }
  }

  if (!boolValue(formData, "consent_contact") || !boolValue(formData, "consent_partner_forwarding")) {
    return "Du behöver godkänna samtycken för att skicka ansökan.";
  }

  return null;
}

export async function submitBusinessPaymentsApplication(
  _previousState: BusinessApplicationState,
  formData: FormData,
): Promise<BusinessApplicationState> {
  const validationError = validate(formData);
  if (validationError) {
    return { ok: false, message: validationError };
  }

  const payload = {
    company_name: textValue(formData, "company_name"),
    org_number: textValue(formData, "org_number"),
    contact_name: textValue(formData, "contact_name"),
    email: textValue(formData, "email"),
    phone: optionalTextValue(formData, "phone"),
    industry: optionalTextValue(formData, "industry"),
    website: optionalTextValue(formData, "website"),
    business_description: optionalTextValue(formData, "business_description"),
    has_swedish_business_account: nullableBoolValue(formData, "has_swedish_business_account"),
    has_bankgiro: nullableBoolValue(formData, "has_bankgiro"),
    was_denied_bank_services: nullableBoolValue(formData, "was_denied_bank_services"),
    customer_type: optionalTextValue(formData, "customer_type"),
    monthly_volume_estimate: optionalTextValue(formData, "monthly_volume_estimate"),
    invoice_count_estimate: optionalTextValue(formData, "invoice_count_estimate"),
    average_invoice_amount: optionalTextValue(formData, "average_invoice_amount"),
    needs_invoicing: boolValue(formData, "needs_invoicing"),
    needs_customer_payments: boolValue(formData, "needs_customer_payments"),
    needs_bankgiro_flow: boolValue(formData, "needs_bankgiro_flow"),
    needs_invoice_financing: boolValue(formData, "needs_invoice_financing"),
    needs_api: boolValue(formData, "needs_api"),
    current_invoice_system: optionalTextValue(formData, "current_invoice_system"),
    urgency: optionalTextValue(formData, "urgency"),
    other_comment: optionalTextValue(formData, "other_comment"),
    consent_partner_forwarding: boolValue(formData, "consent_partner_forwarding"),
    consent_contact: boolValue(formData, "consent_contact"),
    status: "new",
    admin_notification_status: "pending",
    customer_confirmation_status: "pending",
  };

  let application: ApplicationRecord;

  try {
    const rows = await supabaseInsert<ApplicationRecord>({ table: "payment_applications", payload });
    application = rows[0];
  } catch (error) {
    return {
      ok: false,
      message: error instanceof Error ? error.message : "Ansökan kunde inte sparas. Försök igen eller kontakta info@div3rsa.com.",
    };
  }

  await logApplicationEvent(application.id, "application_submitted", "Ansökan skickades in via Div3rsa Web.").catch(() => null);

  const customerSubject = "Vi har tagit emot din ansökan – Div3rsa Företagsbetalningar & Bankgiro";
  const customerText = `Hej ${application.contact_name},\n\nTack för din ansökan till Div3rsa Företagsbetalningar & Bankgiro.\n\nVi har tagit emot dina uppgifter och kommer att granska ansökan. Om vi behöver kompletterande information kontaktar vi dig.\n\nVänliga hälsningar,\nDiv3rsa AB`;
  const customerHtml = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;">
      <h2>Vi har tagit emot din ansökan</h2>
      <p>Hej ${application.contact_name},</p>
      <p>Tack för din ansökan till <strong>Div3rsa Företagsbetalningar & Bankgiro</strong>.</p>
      <p>Vi har tagit emot dina uppgifter och kommer att granska ansökan. Om vi behöver kompletterande information kontaktar vi dig.</p>
      <p>Vänliga hälsningar,<br/>Div3rsa AB</p>
    </div>`;

  const customerEmail = await sendEmail({
    to: application.email,
    subject: customerSubject,
    html: customerHtml,
    text: customerText,
  });

  await logEmail({
    applicationId: application.id,
    emailType: "application_confirmation",
    recipient: application.email,
    subject: customerSubject,
    status: customerEmail.ok ? "sent" : "failed",
    providerMessageId: customerEmail.providerMessageId,
    errorMessage: customerEmail.error,
  }).catch(() => null);
  await logApplicationEvent(
    application.id,
    customerEmail.ok ? "customer_confirmation_email_sent" : "customer_confirmation_email_failed",
    customerEmail.ok ? "Bekräftelsemail skickades till kunden." : customerEmail.error || "Bekräftelsemail misslyckades.",
  ).catch(() => null);
  await supabasePatch({
    table: "payment_applications",
    match: { id: application.id },
    payload: { customer_confirmation_status: customerEmail.ok ? "sent" : "failed", updated_at: new Date().toISOString() },
  }).catch(() => null);

  const adminEmailAddress = process.env.ADMIN_NOTIFICATION_EMAIL || "info@div3rsa.com";
  const adminSubject = "Ny ansökan – Företagsbetalningar & Bankgiro";
  const adminRows = renderRows([
    ["Företag", application.company_name],
    ["Org.nr", application.org_number],
    ["Kontaktperson", application.contact_name],
    ["E-post", application.email],
    ["Telefon", application.phone],
    ["Bransch", application.industry],
    ["Har bankgiro", application.has_bankgiro],
    ["Har svenskt företagskonto", application.has_swedish_business_account],
    ["Nekad banktjänst", application.was_denied_bank_services],
    ["Uppskattad månadsvolym", application.monthly_volume_estimate],
    ["Antal fakturor/månad", application.invoice_count_estimate],
    ["Kundtyp", application.customer_type],
  ]);
  const adminUrl = process.env.PORTAL_ADMIN_URL || "https://portal.div3rsa.com/admin/payment-applications";
  const adminHtml = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;">
      <h2>Ny ansökan har skickats in</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px;">${adminRows}</table>
      <p style="margin-top:24px;"><a href="${adminUrl}">Öppna adminpanelen</a></p>
    </div>`;
  const adminText = [
    "Ny ansökan har skickats in.",
    "",
    `Företag: ${application.company_name}`,
    `Org.nr: ${application.org_number}`,
    `Kontaktperson: ${application.contact_name}`,
    `E-post: ${application.email}`,
    `Telefon: ${application.phone || "-"}`,
    `Bransch: ${application.industry || "-"}`,
    `Har bankgiro: ${application.has_bankgiro === true ? "Ja" : application.has_bankgiro === false ? "Nej" : "-"}`,
    `Har svenskt företagskonto: ${application.has_swedish_business_account === true ? "Ja" : application.has_swedish_business_account === false ? "Nej" : "-"}`,
    `Nekad banktjänst: ${application.was_denied_bank_services === true ? "Ja" : application.was_denied_bank_services === false ? "Nej" : "-"}`,
    `Uppskattad månadsvolym: ${application.monthly_volume_estimate || "-"}`,
    `Antal fakturor/månad: ${application.invoice_count_estimate || "-"}`,
    "",
    `Admin: ${adminUrl}`,
  ].join("\n");

  const adminEmail = await sendEmail({
    to: adminEmailAddress,
    subject: adminSubject,
    html: adminHtml,
    text: adminText,
  });

  await logEmail({
    applicationId: application.id,
    emailType: "admin_new_application_notification",
    recipient: adminEmailAddress,
    subject: adminSubject,
    status: adminEmail.ok ? "sent" : "failed",
    providerMessageId: adminEmail.providerMessageId,
    errorMessage: adminEmail.error,
  }).catch(() => null);
  await logApplicationEvent(
    application.id,
    adminEmail.ok ? "admin_notification_email_sent" : "admin_notification_email_failed",
    adminEmail.ok ? "Intern mailnotis skickades till Div3rsa." : adminEmail.error || "Intern mailnotis misslyckades.",
  ).catch(() => null);
  await supabasePatch({
    table: "payment_applications",
    match: { id: application.id },
    payload: { admin_notification_status: adminEmail.ok ? "sent" : "failed", updated_at: new Date().toISOString() },
  }).catch(() => null);

  return {
    ok: true,
    applicationId: application.id,
    message: "Vi har tagit emot din ansökan.",
  };
}
