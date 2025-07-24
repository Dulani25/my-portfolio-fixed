import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email credentials in environment variables")
      return NextResponse.json(
        { error: "Email service is not configured. Please contact the administrator." },
        { status: 500 },
      )
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Verify the connection configuration
    try {
      await transporter.verify()
    } catch (verifyError) {
      console.error("SMTP connection verification failed:", verifyError)
      return NextResponse.json({ error: "Email service configuration error. Please try again later." }, { status: 500 })
    }

    // Email to you (notification)
    const mailToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email where you want to receive messages
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000000ff;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            This message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    }

    // Auto-reply to sender
    const autoReply = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for your message!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000000ff;">Thank you for reaching out!</h2>
          <p style="color: #000000ff;">Hi ${name},</p>
          <p style="color: #000000ff;">Thank you for your message. I've received your inquiry and will get back to you as soon as possible.</p>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #000000ff;">Best regards,<br>Dulani Kamkanamge</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          <p style="color: #64748b; font-size: 14px;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(mailToYou)
    await transporter.sendMail(autoReply)

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
