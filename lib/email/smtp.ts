import nodemailer from "nodemailer";

type MailInput = {
  to: string;
  subject: string;
  text: string;
  html?: string;
};

function getBoolean(value: string | undefined, fallback: boolean) {
  if (value === undefined || value === "") return fallback;
  return ["true", "1", "yes"].includes(value.toLowerCase());
}

export async function sendSmtpMail(input: MailInput) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const secure = getBoolean(process.env.SMTP_SECURE, port === 465);
  const from = process.env.SMTP_FROM || process.env.MAIL_FROM || user;

  if (!host || !user || !pass || !from) {
    throw new Error("Missing SMTP environment variables.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const result = await transporter.sendMail({
    from,
    to: input.to,
    subject: input.subject,
    text: input.text,
    html: input.html,
  });

  return result;
}
