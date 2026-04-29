'use client'
import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const particleCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 40 : 100
    const connectionDistance = 180
    const mouse = { x: 0, y: 0, active: false, radius: 250 }
    
    // Theme state
    let isLight = document.documentElement.getAttribute('data-theme') === 'light'

    const observer = new MutationObserver(() => {
      isLight = document.documentElement.getAttribute('data-theme') === 'light'
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      connections: number
      isSuper: boolean
      pulse: number
      pulseDir: number
      rotation: number

      constructor(w: number, h: number) {
        this.x = Math.random() * w
        this.y = Math.random() * h
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.isSuper = Math.random() > 0.94
        this.size = this.isSuper ? Math.random() * 2 + 2 : Math.random() * 1.5 + 1
        this.connections = 0
        this.pulse = 1
        this.pulseDir = 0.01 + Math.random() * 0.02
        this.rotation = Math.random() * Math.PI
      }

      update(w: number, h: number) {
        this.x += this.vx
        this.y += this.vy

        if (this.isSuper) {
          this.pulse += this.pulseDir
          if (this.pulse > 1.4 || this.pulse < 0.7) this.pulseDir *= -1
          this.rotation += 0.01
        }

        if (this.x < 0 || this.x > w) this.vx *= -1
        if (this.y < 0 || this.y > h) this.vy *= -1

        if (mouse.active) {
          let dx = mouse.x - this.x
          let dy = mouse.y - this.y
          let distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius
            this.x -= (dx / distance) * force * 1.2
            this.y -= (dy / distance) * force * 1.2
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        if (this.isSuper) {
          this.drawSuper(ctx)
        } else {
          const opacity = isLight ? 0.3 : Math.min(1, 0.4 + this.connections * 0.15)
          const color = isLight ? 'rgba(220, 38, 38, 0.6)' : `rgba(239, 68, 68, ${opacity})`
          
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fillStyle = color
          if (!isLight) {
            ctx.shadowBlur = 10
            ctx.shadowColor = 'rgba(239, 68, 68, 0.5)'
          }
          ctx.fill()
          ctx.shadowBlur = 0
        }
      }

      drawSuper(ctx: CanvasRenderingContext2D) {
        const s = this.size * this.pulse
        const x = this.x
        const y = this.y

        // Central glow
        ctx.save()
        ctx.beginPath()
        ctx.arc(x, y, s * 2, 0, Math.PI * 2)
        const grad = ctx.createRadialGradient(x, y, 0, x, y, s * 4)
        
        if (isLight) {
          grad.addColorStop(0, 'rgba(220, 38, 38, 0.8)')
          grad.addColorStop(1, 'rgba(220, 38, 38, 0)')
        } else {
          grad.addColorStop(0, 'rgba(255, 255, 255, 0.9)')
          grad.addColorStop(0.2, 'rgba(239, 68, 68, 0.8)')
          grad.addColorStop(1, 'rgba(239, 68, 68, 0)')
        }
        
        ctx.fillStyle = grad
        ctx.fill()

        // Flare spikes
        ctx.translate(x, y)
        ctx.rotate(this.rotation)
        
        ctx.beginPath()
        for (let i = 0; i < 4; i++) {
          ctx.rotate(Math.PI / 2)
          const spikeLen = isLight ? s * 8 : s * 15
          const spikeWidth = s * 0.8
          
          const spikeGrad = ctx.createLinearGradient(0, 0, spikeLen, 0)
          if (isLight) {
            spikeGrad.addColorStop(0, 'rgba(220, 38, 38, 0.6)')
            spikeGrad.addColorStop(1, 'rgba(220, 38, 38, 0)')
          } else {
            spikeGrad.addColorStop(0, 'rgba(255, 255, 255, 0.8)')
            spikeGrad.addColorStop(0.3, 'rgba(239, 68, 68, 0.4)')
            spikeGrad.addColorStop(1, 'rgba(239, 68, 68, 0)')
          }
          
          ctx.fillStyle = spikeGrad
          ctx.fillRect(0, -spikeWidth/2, spikeLen, spikeWidth)
        }
        ctx.restore()
        
        // Core
        ctx.beginPath()
        ctx.arc(x, y, s * 0.8, 0, Math.PI * 2)
        ctx.fillStyle = isLight ? '#dc2626' : '#ffffff'
        ctx.fill()
      }
    }

    const resize = () => {
      if (!canvas.parentElement) return
      canvas.width = canvas.parentElement.clientWidth
      canvas.height = canvas.parentElement.clientHeight
      init()
    }

    const init = () => {
      const pCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 40 : 100
      particles = []
      for (let i = 0; i < pCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height))
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => p.connections = 0)

      particles.forEach((p, i) => {
        p.update(canvas.width, canvas.height)

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            p.connections++
            p2.connections++

            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            const opacity = isLight ? 0.08 : (1 - dist / connectionDistance) * 0.3
            const lineColor = isLight ? `rgba(15, 23, 42, ${opacity})` : `rgba(239, 68, 68, ${opacity})`
            
            ctx.strokeStyle = lineColor
            ctx.lineWidth = isLight ? 0.8 : 1.2
            ctx.stroke()
          }
        }
        
        p.draw(ctx)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = true
    }

    const handleMouseLeave = () => {
      mouse.active = false
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    
    resize()
    animate()

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.9,
        mixBlendMode: 'normal' // Changed to normal for better visibility in light mode
      }}
    />
  )
}
