"use client"

import { useState } from "react"
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react"

/**
 * Formulario de contacto interactivo.
 *
 * Maneja el estado de envío (cargando, éxito) y valida los campos básicos.
 * Actualmente simula un envío, listo para conectar con una API real.
 *
 * @returns {JSX.Element} El formulario de contacto.
 */
export function ContactForm() {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setLoading(true)

        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // TODO: Connect to backend API
        // const formData = new FormData(event.currentTarget)
        // const response = await fetch('/api/send', { method: 'POST', body: formData })

        setLoading(false)
        setSuccess(true)
    }

    if (success) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center bg-secondary/50 rounded-lg border">
                <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">¡Mensaje enviado!</h3>
                <p className="text-muted-foreground">
                    Gracias por contactarme. Te responderé lo antes posible.
                </p>
                <button
                    onClick={() => setSuccess(false)}
                    className="mt-6 text-sm font-medium text-primary underline underline-offset-4"
                >
                    Enviar otro mensaje
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Nombre</label>
                    <input
                        id="name"
                        name="name"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tu nombre"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="tu@email.com"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Mensaje</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="¿En qué puedo ayudarte?"
                />
            </div>
            <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full md:w-auto"
            >
                {loading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                    </>
                ) : (
                    <>
                        Enviar Mensaje
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                )}
            </button>
        </form>
    )
}
