"use server";

import { sendEmail, renderRows } from "@/lib/server/business-payments-email";
import { supabaseInsert } from "@/lib/server/supabase-rest";

export type ContactFormState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};

const textValue = (formData: FormData, key: string) => String(formData.get(key) || "").trim();

function validateContact(formData: FormData): ContactFormState | null {
  const fieldErrors: Record<string, string> = {};

  if (!textValue(formData, "name")) fieldErrors.name = "Skriv ditt namn.";
  if (!textValue(formData, "email")) fieldErrors.email = "Skriv din e-post.";
  if (!textValue(formData, "projectType")) fieldErrors.projectType = "Välj vad du vill bygga.";
  if (!textValue(formData, "message")) fieldErrors.message = "Skriv några rader om behovet.";

  const email = textValue(formData, "email");
  if (email && !email.includes("@")) fieldErrors.email = "Skriv en giltig e-postadress.";

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, message: "Kontrollera fälten och försök igen.", fieldErrors };
  }

  return null;
}

async function logEmail(params: {
  contactSubmissionId?: string;
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
      contact_submission_id: params.contactSubmissionId || null,
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

export async function submitContactRequest(_previousState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const validation = validateContact(formData);
  if (validation) return validation;

  const payload = {
    name: textValue(formData, "name"),
    company_name: textValue(formData, "company") || null,
    email: textValue(formData, "email"),
    phone: textValue(formData, "phone") || null,
    project_type: textValue(formData, "projectType"),
    budget_range: textValue(formData, "budget") || null,
    message: textValue(formData, "message"),
    status: "new",
  };

  let submissionId: string | undefined;
  try {
    const rows = await supabaseInsert<{ id: string }>({ table: "contact_submissions", payload });
    submissionId = rows[0]?.id;
  } catch (error) {
    return {
      ok: false,
      message: error instanceof Error ? error.message : "Meddelandet kunde inte sparas. Maila info@div3rsa.com direkt.",
    };
  }

  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || "info@div3rsa.com";
  const subject = `Ny kontaktförfrågan – ${payload.company_name || payload.name}`;
  const rows = renderRows([
    ["Namn", payload.name],
    ["Bolag", payload.company_name],
    ["E-post", payload.email],
    ["Telefon", payload.phone],
    ["Projekt", payload.project_type],
    ["Budget", payload.budget_range],
    ["Meddelande", payload.message],
  ]);

  const result = await sendEmail({
    to: adminEmail,
    subject,
    text: [
      "Ny kontaktförfrågan från Div3rsa Web.",
      "",
      `Namn: ${payload.name}`,
      `Bolag: ${payload.company_name || "-"}`,
      `E-post: ${payload.email}`,
      `Telefon: ${payload.phone || "-"}`,
      `Projekt: ${payload.project_type}`,
      `Budget: ${payload.budget_range || "-"}`,
      "",
      payload.message,
    ].join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;">
        <h2>Ny kontaktförfrågan från Div3rsa Web</h2>
        <table style="border-collapse:collapse;width:100%;max-width:720px;">${rows}</table>
      </div>`,
  });

  await logEmail({
    contactSubmissionId: submissionId,
    emailType: "contact_request_admin_notification",
    recipient: adminEmail,
    subject,
    status: result.ok ? "sent" : "failed",
    providerMessageId: result.providerMessageId,
    errorMessage: result.error,
  }).catch(() => null);

  if (!result.ok) {
    return {
      ok: true,
      message: "Vi har tagit emot din förfrågan. Om du inte får svar, maila info@div3rsa.com direkt.",
    };
  }

  return { ok: true, message: "Vi har tagit emot din förfrågan." };
}
