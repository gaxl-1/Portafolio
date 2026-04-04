"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

export const GlitchText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.9) {
        setGlitch(true)
        setTimeout(() => setGlitch(false), 150)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {glitch && (
        <>
          <span className="absolute top-0 left-[-2px] text-[#ff0000] z-0 opacity-70 animate-pulse">
            {text}
          </span>
          <span className="absolute top-[-1px] left-[2px] text-[#00f3ff] z-0 opacity-70 animate-pulse">
            {text}
          </span>
        </>
      )}
    </div>
  )
}
