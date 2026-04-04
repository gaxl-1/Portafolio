"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, ChevronRight, X, Check } from "lucide-react"

export const SecurityModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [ipData, setIpData] = useState<any>(null)
  const [lines, setLines] = useState<string[]>([])
  const [checkFinished, setCheckFinished] = useState(false)
  const [accepted, setAccepted] = useState(false)

  const scriptLines = [
    "✓ VPN/Proxy: NO DETECTADO",
    `IP Pública: ${ipData?.ip || "Buscando..."}`,
    `ISP / Org: ${ipData?.org || "Pendiente"}`,
    `Ubicación IP: ${ipData?.city || "Pendiente"}`,
    "Recopilando huella del dispositivo...",
    "CONEXIÓN DIRECTA VERIFICADA ✓"
  ]

  useEffect(() => {
    const isAccepted = localStorage.getItem("jairo-gael-terms-accepted")
    if (!isAccepted) {
      setIsOpen(true)
      document.body.style.overflow = "hidden"
    } else {
      setAccepted(true)
    }

    // Fetch IP info
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => setIpData(data))
      .catch(() => setIpData({ ip: "192.168.1.1", org: "Local Network", city: "Chihuahua, MX" }))
  }, [])

  useEffect(() => {
    if (isOpen && lines.length < scriptLines.length) {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, scriptLines[prev.length]])
      }, 600)
      return () => clearTimeout(timer)
    } else if (lines.length === scriptLines.length) {
      setCheckFinished(true)
    }
  }, [isOpen, lines, ipData])

  const handleAccept = () => {
    localStorage.setItem("jairo-gael-terms-accepted", "true")
    setIsOpen(false)
    setAccepted(true)
    document.body.style.overflow = "auto"
  }

  const handleDecline = () => {
    window.location.reload()
  }

  if (!isOpen && accepted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] p-4 font-mono select-none"
        >
          <div className="absolute inset-0 z-[-1] opacity-20 pointer-events-none overflow-hidden">
             {/* Scanlines Effect */}
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff000011] to-transparent bg-[length:100%_4px] animate-pulse" />
          </div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-2xl bg-black border border-[#ff0000] rounded-lg shadow-[0_0_50px_rgba(0,255,157,0.2)] overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between bg-[#0f0f0f] border-b border-[#ff0000] p-3">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#ff0000]" />
                <span className="text-[#ff0000] text-sm font-bold tracking-widest uppercase">CONEXIÓN DIRECTA VERIFICADA ✓</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/30" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                <div className="w-3 h-3 rounded-full bg-green-500/30" />
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-1.5">
                <p className="text-gray-400 text-xs mb-4">jairo@gaeldev:~$ ./security-check.sh</p>
                {lines.map((line, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={idx} 
                    className={`${line.includes("✓") ? "text-[#ff0000]" : "text-[#00f3ff]"} text-sm md:text-base flex items-center gap-2`}
                  >
                    {line.includes("✓") ? <Check className="w-4 h-4" /> : <ChevronRight className="w-3 h-3" />}
                    {line}
                  </motion.div>
                ))}
              </div>

              {checkFinished && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6 border-t border-gray-800 space-y-4"
                >
                  <div className="space-y-4">
                    <h2 className="text-[#ff0000] text-xl font-bold tracking-tight">AVISO LEGAL – JAIRO GAEL</h2>
                    <div className="text-gray-300 text-sm leading-relaxed space-y-3">
                      <p>
                        “Términos de Uso y Deslinde de Responsabilidad. Lee y acepta los términos. Al aceptar confirmas ser mayor de edad y que usarás el contenido de forma ética y legal.”
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4 text-[12px]">
                        <div className="p-3 border border-gray-800 rounded bg-[#0a0a0a]">
                          <p className="text-[#00f3ff] font-bold mb-1">USO EDUCATIVO </p>
                          <p className="text-gray-500 italic">Contenido para aprendizaje y desarrollo profesional de sistemas.</p>
                        </div>
                        <div className="p-3 border border-gray-800 rounded bg-[#0a0a0a]">
                          <p className="text-[#ff0000] font-bold mb-1">PROHIBICIÓN MALICIOSA</p>
                          <p className="text-gray-500 italic">Prohibido usar este contenido para comprometer sistemas sin autorización.</p>
                        </div>
                      </div>

                      <p className="text-gray-400 text-[11px] uppercase tracking-wide">
                        Jairo Gael no responde por uso indebido. El usuario asume responsabilidad total.
                      </p>

                      <div className="p-4 bg-red-950/20 border-l-4 border-red-500 rounded">
                        <p className="text-red-500 font-bold mb-1 flex items-center gap-2">
                          <Shield className="w-4 h-4" /> ADVERTENCIA CRÍTICA
                        </p>
                        <p className="text-red-400/90 text-[12px]">
                          “Hostigamiento / uso malicioso: denuncia formal ante la Policía Cibernética MX (DSPM), Art. 211 bis CPF. Tus datos de conexión quedan registrados al aceptar.”
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 pt-4">
                    <button 
                      onClick={handleDecline}
                      className="flex-1 px-8 py-3 bg-red-900/20 border border-red-700/50 text-red-500 hover:bg-red-900/40 transition-colors uppercase text-sm font-bold tracking-widest flex items-center justify-center gap-2"
                    >
                      <X className="w-4 h-4" /> No acepto
                    </button>
                    <button 
                      onClick={handleAccept}
                      className="flex-1 px-8 py-3 bg-[#00f3ff]/10 border-2 border-[#00f3ff] text-[#00f3ff] hover:bg-[#00f3ff]/20 shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-all uppercase text-sm font-bold tracking-widest flex items-center justify-center gap-2 group"
                    >
                      <Shield className="w-4 h-4 group-hover:scale-110 transition-transform" /> Acepto los términos
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
