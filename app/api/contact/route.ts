import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    await resend.emails.send({
      from: "JM Cocktails <onboarding@resend.dev>",
      to: "adejareolamide01@gmail.com", // ← Replace with your email
      subject: "New Contact Form Message",
      html: `
        <h2>New Message from JM Cocktails Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error: "Error sending email" }, { status: 500 })
  }
}
