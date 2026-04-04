"use client"

import { useState } from "react"
import { ArrowRight, Loader2, CheckCircle2, Terminal } from "lucide-react"

export function ContactForm() {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setLoading(true)

        try {
            const formData = new FormData(event.currentTarget)
            const response = await fetch('/api/send', {
                method: 'POST',
                body: formData,
            })

            if (response.ok) {
                setSuccess(true)
            } else {
                const error = await response.json()
                alert(`Error al enviar: ${error.message || 'Inténtalo de nuevo más tarde.'}`)
            }
        } catch (error) {
            console.error("Fetch Error:", error)
            alert("Ocurrió un error inesperado. Por favor, revisa tu conexión.")
        } finally {
            setLoading(false)
        }
    }

    if (success) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center bg-[#ff0000]/5 border border-[#ff0000]/20 rounded-sm">
                <CheckCircle2 className="h-12 w-12 text-[#ff0000] mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">ENLACE ESTABLECIDO</h3>
                <p className="text-gray-400 font-mono text-xs">
                    Su mensaje ha sido transmitido con éxito. Iniciando protocolo de espera de respuesta...
                </p>
                <button
                    onClick={() => setSuccess(false)}
                    className="mt-6 text-[10px] font-mono tracking-widest text-[#ff0000] uppercase border-b border-[#ff0000]/20 hover:border-[#ff0000] transition-all"
                >
                    Enviar nueva transmisión
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">IDENTIDAD / NOMBRE</label>
                    <input
                        id="name"
                        name="name"
                        required
                        className="flex h-12 w-full bg-black border border-gray-800 px-4 py-2 text-sm text-white font-mono placeholder:text-gray-700 focus:outline-none focus:border-[#ff0000] focus:shadow-[0_0_10px_rgba(0,255,157,0.1)] transition-all"
                        placeholder="INGRESE_NOMBRE"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">CANAL / EMAIL</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="flex h-12 w-full bg-black border border-gray-800 px-4 py-2 text-sm text-white font-mono placeholder:text-gray-700 focus:outline-none focus:border-[#00f3ff] focus:shadow-[0_0_10px_rgba(0,243,255,0.1)] transition-all"
                        placeholder="tu@dominio.com"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">CONTENIDO / MENSAJE</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="flex min-h-[120px] w-full bg-black border border-gray-800 px-4 py-2 text-sm text-white font-mono placeholder:text-gray-700 focus:outline-none focus:border-[#ff0000] focus:shadow-[0_0_10px_rgba(255,0,0,0.1)] transition-all"
                    placeholder="ESPECIFIQUE_SU_SOLICITUD..."
                />
            </div>
            <button
                type="submit"
                disabled={loading}
                className="group relative flex items-center justify-center h-14 w-full bg-black border border-gray-800 overflow-hidden hover:border-[#ff0000] transition-all"
            >
                <div className="absolute inset-0 bg-[#ff0000]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                
                <div className="relative z-10 flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.4em] text-white uppercase group-hover:text-[#ff0000]">
                    {loading ? (
                        <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            TRANSMITIENDO...
                        </>
                    ) : (
                        <>
                            ENVIAR_MENSAJE
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                    )}
                </div>
            </button>
        </form>

    )
}

