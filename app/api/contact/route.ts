import { NextResponse } from "next/server";
import { resend } from "@/lib/mailer";
import { siteConfig } from "@/content/site";

export async function POST(req: Request) {
  const { name, email, company, message } = await req.json();

  await resend.emails.send({
    from: siteConfig.contact.fromEmail,
    to: [siteConfig.contact.email],
    subject: `New Inquiry from ${name}`,
    replyTo: email,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
