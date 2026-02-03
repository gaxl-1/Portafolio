import { NextResponse } from "next/server"
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
    try {
        const formData = await request.formData()
        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const message = formData.get("message") as string

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 })
        }

        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: ['lgael4885@gmail.com'],
            subject: `Nuevo mensaje de ${name} - Portfolio`,
            text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
            replyTo: email,
        })

        if (error) {
            return NextResponse.json({ error }, { status: 500 })
        }

        return NextResponse.json({ success: true, data })
    } catch (error) {
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }
}
