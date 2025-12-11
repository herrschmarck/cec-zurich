import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const CONTACT_TO = process.env.CONTACT_TO || "info@cec-zurich.ch";

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
  console.warn(
    "SMTP configuration is missing. Contact form API will not be able to send emails."
  );
}

export async function POST(request: NextRequest) {
  try {
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json(
        { error: "Mail server is not configured." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, experience, message } = body as {
      name?: string;
      email?: string;
      experience?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const mailText = [
      `Name: ${name}`,
      `E-Mail: ${email}`,
      experience ? `Erfahrung: ${experience}` : null,
      "",
      "Nachricht:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      from: `CEC Zürich <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: email,
      subject: "Neue Kontaktanfrage über das CEC Zürich Formular",
      text: mailText,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact form email", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
