"use server";

import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { sendSmtpMail } from "@/lib/email/smtp";

type ActionState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
};

const requiredFields = [
  ["company_name", "Skriv företagsnamn."],
  ["org_number", "Skriv organisationsnummer."],
  ["contact_name", "Skriv kontaktperson."],
  ["email", "Skriv e-postadress."],
  ["phone", "Skriv telefonnummer."],
  ["industry", "Skriv bransch."],
  ["business_description", "Beskriv verksamheten kort."],
  ["customer_type", "Välj kundtyp."],
  ["monthly_volume_estimate", "Ange uppskattad månadsvolym."],
  ["invoice_count_estimate", "Ange antal fakturor per månad."],
  ["average_invoice_amount", "Ange genomsnittligt fakturabelopp."],
  ["urgency", "Välj hur snabbt ni behöver komma igång."],
] as const;

function value(formData: FormData, key: string) {
  return String(formData.get(key) || "").trim();
}

function boolValue(formData: FormData, key: string) {
  return formData.get(key) === "on" || formData.get(key) === "true";
}

function optionalBool(formData: FormData, key: string) {
  const raw = value(formData, key);
  if (!raw) return null;
  return raw === "yes";
}

function moneyToNumber(input: string) {
  const cleaned = input.replace(/\s/g, "").replace(",", ".").replace(/[^0-9.]/g, "");
  if (!cleaned) return null;
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : null;
}

function buildAdminEmail(payload: Record<string, unknown>) {
  const portalUrl = process.env.PORTAL_ADMIN_URL || "https://portal.div3rsa.com/admin/payment-applications";
  const lines = [
    "Ny ansökan har skickats in via Div3rsa.",
    "",
    `Företag: ${payload.company_name}`,
    `Org.nr: ${payload.org_number}`,
    `Kontaktperson: ${payload.contact_name}`,
    `E-post: ${payload.email}`,
    `Telefon: ${payload.phone}`,
    `Bransch: ${payload.industry}`,
    `Hemsida: ${payload.website || "-"}`,
    `Har svenskt företagskonto: ${payload.has_swedish_business_account === null ? "Ej valt" : payload.has_swedish_business_account ? "Ja" : "Nej"}`,
    `Har bankgiro: ${payload.has_bankgiro === null ? "Ej valt" : payload.has_bankgiro ? "Ja" : "Nej"}`,
    `Nekad banktjänst: ${payload.was_denied_bank_services === null ? "Ej valt" : payload.was_denied_bank_services ? "Ja" : "Nej"}`,
    `Kundtyp: ${payload.customer_type}`,
    `Uppskattad månadsvolym: ${payload.monthly_volume_estimate}`,
    `Antal fakturor/månad: ${payload.invoice_count_estimate}`,
    `Genomsnittligt fakturabelopp: ${payload.average_invoice_amount}`,
    `Befintligt fakturasystem: ${payload.current_invoice_system || "-"}`,
    `Behöver komma igång: ${payload.urgency}`,
    "",
    "Behov:",
    `- Fakturering: ${payload.needs_invoicing ? "Ja" : "Nej"}`,
    `- Kundinbetalningar: ${payload.needs_customer_payments ? "Ja" : "Nej"}`,
    `- Bankgiroflöde: ${payload.needs_bankgiro_flow ? "Ja" : "Nej"}`,
    `- Fakturaköp/förskott: ${payload.needs_invoice_financing ? "Ja" : "Nej"}`,
    `- API/integration: ${payload.needs_api ? "Ja" : "Nej"}`,
    "",
    "Verksamhetsbeskrivning:",
    String(payload.business_description || "-"),
    "",
    "Övrig kommentar:",
    String(payload.other_comment || "-"),
    "",
    `Admin: ${portalUrl}`,
  ];

  return lines.join("\n");
}

export async function submitBusinessPaymentApplication(_: ActionState, formData: FormData): Promise<ActionState> {
  const errors: Record<string, string> = {};

  for (const [field, message] of requiredFields) {
    if (!value(formData, field)) errors[field] = message;
  }

  if (!value(formData, "email").includes("@")) {
    errors.email = "Skriv en giltig e-postadress.";
  }

  if (!boolValue(formData, "consent_contact")) {
    errors.consent_contact = "Du behöver godkänna att Div3rsa får kontakta dig.";
  }

  if (!boolValue(formData, "consent_partner_forwarding")) {
    errors.consent_partner_forwarding = "Du behöver godkänna att uppgifter kan skickas vidare för onboarding.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Kontrollera fälten och försök igen.", errors };
  }

  const supabase = getSupabaseAdmin();
  const payload = {
    company_name: value(formData, "company_name"),
    org_number: value(formData, "org_number"),
    contact_name: value(formData, "contact_name"),
    email: value(formData, "email"),
    phone: value(formData, "phone"),
    industry: value(formData, "industry"),
    website: value(formData, "website") || null,
    business_description: value(formData, "business_description"),
    has_swedish_business_account: optionalBool(formData, "has_swedish_business_account"),
    has_bankgiro: optionalBool(formData, "has_bankgiro"),
    was_denied_bank_services: optionalBool(formData, "was_denied_bank_services"),
    customer_type: value(formData, "customer_type"),
    monthly_volume_estimate: moneyToNumber(value(formData, "monthly_volume_estimate")),
    invoice_count_estimate: Number(value(formData, "invoice_count_estimate")) || null,
    average_invoice_amount: moneyToNumber(value(formData, "average_invoice_amount")),
    needs_invoicing: boolValue(formData, "needs_invoicing"),
    needs_customer_payments: boolValue(formData, "needs_customer_payments"),
    needs_bankgiro_flow: boolValue(formData, "needs_bankgiro_flow"),
    needs_invoice_financing: boolValue(formData, "needs_invoice_financing"),
    needs_api: boolValue(formData, "needs_api"),
    current_invoice_system: value(formData, "current_invoice_system") || null,
    urgency: value(formData, "urgency"),
    other_comment: value(formData, "other_comment") || null,
    consent_partner_forwarding: boolValue(formData, "consent_partner_forwarding"),
    consent_contact: boolValue(formData, "consent_contact"),
    status: "new",
    admin_notification_status: "pending",
  };

  const { data, error } = await supabase.from("payment_applications").insert(payload).select("id").single();

  if (error || !data) {
    return { ok: false, message: "Ansökan kunde inte sparas. Försök igen eller kontakta info@div3rsa.com." };
  }

  await supabase.from("payment_application_events").insert({
    application_id: data.id,
    event_type: "application_submitted",
    description: "Ansökan skickades in via Div3rsa-webben.",
    created_by: "public_form",
  });

  const recipient = process.env.ADMIN_NOTIFICATION_EMAIL || "info@div3rsa.com";
  const subject = "Ny ansökan – Företagsbetalningar & Bankgiro";
  const body = buildAdminEmail(payload);

  try {
    const result = await sendSmtpMail({ to: recipient, subject, text: body });
    await supabase.from("email_logs").insert({
      application_id: data.id,
      email_type: "admin_new_application_notification",
      recipient,
      subject,
      status: "sent",
      provider_message_id: result.messageId || null,
      sent_at: new Date().toISOString(),
    });
    await supabase
      .from("payment_applications")
      .update({ admin_notification_status: "sent" })
      .eq("id", data.id);
    await supabase.from("payment_application_events").insert({
      application_id: data.id,
      event_type: "admin_notification_email_sent",
      description: `Intern mailnotis skickades till ${recipient}.`,
      created_by: "system",
    });
  } catch (mailError) {
    const message = mailError instanceof Error ? mailError.message : "Unknown SMTP error";
    await supabase.from("email_logs").insert({
      application_id: data.id,
      email_type: "admin_new_application_notification",
      recipient,
      subject,
      status: "failed",
      error_message: message,
    });
    await supabase
      .from("payment_applications")
      .update({ admin_notification_status: "failed" })
      .eq("id", data.id);
    await supabase.from("payment_application_events").insert({
      application_id: data.id,
      event_type: "admin_notification_email_failed",
      description: message,
      created_by: "system",
    });
  }

  return { ok: true, message: "Vi har tagit emot din ansökan." };
}
