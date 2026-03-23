import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO = "ruochen.chen@mounteconsulting.com";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export async function POST(req: Request) {
  let data: Body;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = data.name?.trim();
  const email = data.email?.trim();
  const phone = data.phone?.trim();
  const subject = data.subject?.trim();
  const message = data.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "(not provided)"}`,
    "",
    message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error: "Email service not configured",
        fallbackMailto: true,
        mailto: buildMailto({ name, email, phone, subject, message }),
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM ?? "MountE Contact <onboarding@resend.dev>";

  const result = await resend.emails.send({
    from,
    to: TO,
    replyTo: email,
    subject: subject || `Website contact from ${name}`,
    text,
  });

  if (result.error) {
    return NextResponse.json(
      { error: result.error.message ?? "Failed to send email" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

function buildMailto(parts: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  const subj = parts.subject || `Contact from ${parts.name}`;
  const body = [
    `Name: ${parts.name}`,
    `Email: ${parts.email}`,
    `Phone: ${parts.phone || "(not provided)"}`,
    "",
    parts.message,
  ].join("\n");
  return `mailto:${TO}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
}
