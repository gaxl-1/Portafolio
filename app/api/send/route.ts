import { NextResponse } from "next/server"

export async function POST(request: Request) {
    try {
        const formData = await request.formData()
        const name = formData.get("name")
        const email = formData.get("email")
        const message = formData.get("message")

        // TODO: Integrate Resend here
        // import { Resend } from 'resend';
        // const resend = new Resend(process.env.RESEND_API_KEY);
        // await resend.emails.send({ ... })

        console.log("Email received:", { name, email, message })

        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }
}
