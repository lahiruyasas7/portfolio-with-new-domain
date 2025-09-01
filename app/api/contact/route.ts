import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return NextResponse.json(
      { message: "Method Not Allowed" },
      { status: 405 }
    );
  }

  try {
    const { name, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    await transporter.sendMail({
      from: email,
      to: "lahiruyasas7@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Email sending failed", error },
      { status: 500 }
    );
  }
}
