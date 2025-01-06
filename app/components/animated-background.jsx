'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Handle resize
    window.addEventListener('resize', setCanvasSize)

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.color = `rgba(${Math.random() * 50 + 100}, ${Math.random() * 50 + 200}, ${
          Math.random() * 50 + 200
        }, ${Math.random() * 0.3})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    const init = () => {
      particles = []
      const numberOfParticles = 100
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle())
      }
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(17, 24, 39, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Connect particles with lines if they're close enough
      particles.forEach((particle1) => {
        particles.forEach((particle2) => {
          const dx = particle1.x - particle2.x
          const dy = particle1.y - particle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(64, 224, 208, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particle1.x, particle1.y)
            ctx.lineTo(particle2.x, particle2.y)
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Initialize
    setCanvasSize()
    init()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(17,24,39,0.8)_50%,rgba(17,24,39,1)_100%)]" />
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  )
}

