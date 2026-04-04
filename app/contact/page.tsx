import { ContactForm } from "@/components/forms/contact-form"
import { SocialLinks } from "@/components/shared/social-links"
import { Terminal, Shield, MessageCircle, Activity } from 'lucide-react'

export const metadata = {
    title: "Secure Communication | Jairo Gael",
    description: "Establecer enlace de comunicación directa con Jairo Gael.",
}

export default function ContactPage() {
    return (
        <section className="pt-32 pb-24 relative overflow-hidden">
            <div className="container px-6 md:px-12 max-w-6xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left Column: Info & Status */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-[#ff0000] font-mono text-xs uppercase tracking-[0.4em]">
                                <Activity className="w-4 h-4 animate-pulse" />
                                <span>COMMS_LINK --ESTABLISHED</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase italic leading-none">
                                ESTABLECER <br/>
                                <span className="text-[#ff0000]">CONTACTO</span>
                            </h1>
                            <p className="text-gray-400 font-mono text-sm max-w-md leading-relaxed">
                                Si estás interesado en colaborar, tienes una idea en mente para realizar o simplemente quieres saludar,
                                abre un socket de comunicación directa.
                            </p>
                        </div>

                        {/* Connection Specs */}
                        <div className="p-8 border border-gray-900 bg-black/40 space-y-6 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Shield className="w-12 h-12" />
                            </div>
                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#ff0000] animate-ping" />
                                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Availability: PENDING_PROJECTS</span>
                                </div>
                                <div className="h-[1px] bg-gray-900 w-full" />
                                <div className="space-y-2">
                                     <span className="font-mono text-[10px] text-gray-500 uppercase">Secure_Socials:</span>
                                     <SocialLinks />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative">
                        {/* Terminal Frame */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#ff0000] to-[#ff0000] opacity-10 blur z-0" />
                        <div className="relative bg-[#0a0a0a] border border-gray-800 p-8 md:p-12 z-10">
                            <div className="flex items-center gap-3 mb-8 border-b border-gray-900 pb-4">
                                <Terminal className="w-4 h-4 text-[#ff0000]" />
                                <span className="font-mono text-[10px] text-[#ff0000] uppercase tracking-widest">msg_encrypt --send</span>
                            </div>
                            <ContactForm />
                        </div>
                        
                        {/* Decorative Decal */}
                        <div className="absolute -bottom-6 -right-6 font-mono text-[80px] text-white/[0.02] select-none pointer-events-none font-black italic">
                            SEND
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-5">
                <div className="absolute top-[20%] left-[5%] text-[15vw] font-black text-white italic">COMMS</div>
            </div>
        </section>
    )
}

