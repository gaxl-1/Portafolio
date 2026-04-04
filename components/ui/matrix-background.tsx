"use client"

import React, { useEffect, useRef } from "react"

export const MatrixBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Japanese Hiragana, Katakana, digits, and some Linux symbols
    const chars = "あいうえおかきくけこさしすせそ1234567890ABCDEF$#@!%&*()_+-=[]{}|;':,./<>?#ls -la #grep #sudo #rm -rf".split(
      ""
    )

    const fontSize = 16
    const columns = Math.ceil(width / fontSize)
    const drops: number[] = new Array(columns).fill(1)

    // Colors
    const neonColors = ["#ff0000", "#ff0000", "#00f3ff"]

    const draw = () => {
      // Very slight fade effect (persistence)
      ctx.fillStyle = "rgba(10, 10, 10, 0.05)"
      ctx.fillRect(0, 0, width, height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        // Randomly choose a neon color
        ctx.fillStyle = neonColors[Math.floor(Math.random() * neonColors.length)]
        
        // Occasionally make a character white with glow
        if (Math.random() > 0.98) {
          ctx.fillStyle = "#fff"
          ctx.shadowBlur = 15
          ctx.shadowColor = ctx.fillStyle
        } else {
          ctx.shadowBlur = 0
        }

        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      // Update drops array if columns changed
      const newColumns = Math.ceil(width / fontSize)
      if (newColumns > columns) {
        const diff = newColumns - columns
        drops.push(...new Array(diff).fill(1))
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none opacity-40 md:opacity-50"
    />
  )
}
