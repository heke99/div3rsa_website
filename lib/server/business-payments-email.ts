type EmailPayload = {
  to: string;
  subject: string;
  html: string;
  text: string;
};

export type EmailResult = {
  ok: boolean;
  providerMessageId?: string;
  error?: string;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export const renderRows = (rows: Array<[string, string | number | boolean | null | undefined]>) =>
  rows
    .map(([label, value]) => {
      const display = value === true ? "Ja" : value === false ? "Nej" : value || "-";
      return `<tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-weight:700;">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${escapeHtml(String(display))}</td></tr>`;
    })
    .join("");

export async function sendEmail(payload: EmailPayload): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM || "info@div3rsa.com";

  if (!apiKey) {
    return { ok: false, error: "RESEND_API_KEY is missing" };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: payload.to,
        subject: payload.subject,
        html: payload.html,
        text: payload.text,
      }),
    });

    const body = (await response.json().catch(() => null)) as { id?: string; message?: string; error?: string } | null;

    if (!response.ok) {
      return { ok: false, error: body?.message || body?.error || `Email provider returned ${response.status}` };
    }

    return { ok: true, providerMessageId: body?.id };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : "Unknown email error" };
  }
}
