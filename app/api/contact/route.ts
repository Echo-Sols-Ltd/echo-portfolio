import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
const { name, email, company, project, budget, message, newsletter } = await req.json()


  // Create reusable transporter object using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // your Gmail address
      pass: process.env.EMAIL_PASS, // your Gmail app password (not your real password)
    },
  })

const mailOptions = {
  from: `"${name}" <${email}>`,
  to: process.env.TARGET_EMAIL,
  subject: `New Contact from ${name} (${project})`,
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; background-color: #f8f9fa; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2 style="color: #0f172a;">📬 New Project Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Project Type:</strong> ${project}</p>
      <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
      <p><strong>Subscribed to Newsletter:</strong> ${newsletter ? 'Yes' : 'No'}</p>
      
      <h3 style="margin-top: 20px; color: #0f172a;">📄 Project Details</h3>
      <p style="white-space: pre-line; color: #334155;">${message}</p>

      <hr style="margin-top: 30px; margin-bottom: 10px;" />
      <p style="font-size: 12px; color: #6b7280;">
        This message was sent from your portfolio contact form on <strong>lextech.rw</strong> or similar domain.
      </p>
    </div>
  `,
}


  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
