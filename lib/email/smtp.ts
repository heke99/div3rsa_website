import nodemailer from "nodemailer";

type MailInput = {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
};

function getBoolean(value: string | undefined, fallback: boolean) {
  if (value === undefined || value === "") return fallback;
  return ["true", "1", "yes"].includes(value.toLowerCase());
}

function requireSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const secure = getBoolean(process.env.SMTP_SECURE, port === 465);
  const from = process.env.SMTP_FROM || user;

  if (!host || !user || !pass || !from) {
    throw new Error(
      "Missing SMTP environment variables. Required: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_SECURE and SMTP_FROM.",
    );
  }

  if (!Number.isFinite(port)) {
    throw new Error("Invalid SMTP_PORT environment variable.");
  }

  return { host, port, user, pass, secure, from };
}

export async function sendSmtpMail(input: MailInput) {
  const config = requireSmtpConfig();

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: { user: config.user, pass: config.pass },
  });

  try {
    const result = await transporter.sendMail({
      from: config.from,
      to: input.to,
      subject: input.subject,
      text: input.text,
      html: input.html,
      replyTo: input.replyTo,
    });

    return result;
  } catch (error) {
    console.error("SMTP mail failed", {
      to: input.to,
      subject: input.subject,
      host: config.host,
      port: config.port,
      secure: config.secure,
      error,
    });
    throw error;
  }
}
