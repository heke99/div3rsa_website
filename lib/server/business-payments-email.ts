import { sendSmtpMail } from "@/lib/email/smtp";

export type EmailPayload = {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
};

export type EmailResult = {
  ok: boolean;
  providerMessageId?: string;
  error?: string;
};

export function renderRows(rows: Array<[string, string | null | undefined]>) {
  return rows
    .map(([label, value]) => {
      const safeValue = value || "-";
      return `<tr><td style="padding:8px 10px;border:1px solid #e5e7eb;font-weight:700;vertical-align:top;">${label}</td><td style="padding:8px 10px;border:1px solid #e5e7eb;white-space:pre-wrap;">${safeValue}</td></tr>`;
    })
    .join("");
}

export async function sendEmail(payload: EmailPayload): Promise<EmailResult> {
  try {
    const result = await sendSmtpMail(payload);
    return { ok: true, providerMessageId: result.messageId || undefined };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Unknown SMTP email error" };
  }
}
