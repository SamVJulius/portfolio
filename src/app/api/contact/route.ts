import nodemailer from "nodemailer";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // send to yourself
      replyTo: email,
      subject: `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #050811; color: #F1F5F9; border-radius: 12px; overflow: hidden;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #6C3FC5, #4F46E5); padding: 32px 40px;">
            <h1 style="margin: 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
              📡 New Transmission Received
            </h1>
            <p style="margin: 8px 0 0; font-size: 13px; color: rgba(255,255,255,0.7);">
              Via your portfolio contact form
            </p>
          </div>

          <!-- Body -->
          <div style="padding: 32px 40px; background: #080F1F;">
            <!-- Sender details -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(108,63,197,0.15); vertical-align: top;">
                  <span style="font-size: 11px; font-family: monospace; color: #22D3EE; text-transform: uppercase; letter-spacing: 1px;">Sender</span>
                  <p style="margin: 6px 0 0; font-size: 15px; font-weight: 600; color: #F1F5F9;">${name}</p>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(108,63,197,0.15); vertical-align: top;">
                  <span style="font-size: 11px; font-family: monospace; color: #22D3EE; text-transform: uppercase; letter-spacing: 1px;">Reply-To</span>
                  <p style="margin: 6px 0 0; font-size: 15px; color: #F1F5F9;">
                    <a href="mailto:${email}" style="color: #A855F7; text-decoration: none;">${email}</a>
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid rgba(108,63,197,0.15); vertical-align: top;">
                  <span style="font-size: 11px; font-family: monospace; color: #22D3EE; text-transform: uppercase; letter-spacing: 1px;">Timestamp</span>
                  <p style="margin: 6px 0 0; font-size: 14px; color: #94A3B8;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "full", timeStyle: "short" })}</p>
                </td>
              </tr>
            </table>

            <!-- Message -->
            <div>
              <span style="font-size: 11px; font-family: monospace; color: #22D3EE; text-transform: uppercase; letter-spacing: 1px;">Message</span>
              <div style="margin-top: 10px; padding: 20px; background: rgba(108,63,197,0.07); border: 1px solid rgba(108,63,197,0.2); border-radius: 8px; font-size: 15px; line-height: 1.7; color: #CBD5E1; white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
            </div>

            <!-- CTA -->
            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; padding: 12px 28px; background: linear-gradient(135deg, #6C3FC5, #4F46E5); color: #fff; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600;">
                Reply to ${name} →
              </a>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 20px 40px; background: #050811; border-top: 1px solid rgba(108,63,197,0.15); text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #475569; font-family: monospace;">
              samsonvincentjulius.dev · portfolio contact form
            </p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("[contact/route] Failed to send email:", err);
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
