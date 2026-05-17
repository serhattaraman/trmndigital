'use client'
import { useEffect, useRef } from 'react'

const rand = (min: number, max: number) => Math.random() * (max - min) + min

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Reduced motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

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

    // ── Shooting Stars ────────────────────────────────────────────────────────
    interface ShootingStar {
      x: number; y: number
      vx: number; vy: number
      length: number
      life: number; maxLife: number
      active: boolean
    }

    let shootingStars: ShootingStar[] = []
    let shootTimer = Math.floor(rand(80, 200))

    function createShootingStar(w: number, h: number): ShootingStar {
      const angle = rand(20, 50) * (Math.PI / 180)
      const speed = rand(7, 14)
      const maxLife = Math.floor(rand(45, 90))
      return {
        x: rand(w * 0.05, w * 0.85),
        y: rand(h * 0.02, h * 0.45),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: rand(100, 220),
        life: 0,
        maxLife,
        active: true
      }
    }

    function drawShootingStars(w: number, h: number) {
      shootTimer--
      if (shootTimer <= 0) {
        shootingStars.push(createShootingStar(w, h))
        shootTimer = Math.floor(rand(150, 380))
      }

      shootingStars = shootingStars.filter(ss => ss.active)

      shootingStars.forEach(ss => {
        ss.life++
        if (ss.life >= ss.maxLife) { ss.active = false; return }

        const progress = ss.life / ss.maxLife
        const alpha = progress < 0.25
          ? (progress / 0.25) * (isLight ? 0.45 : 0.85)
          : (isLight ? 0.45 : 0.85) * (1 - (progress - 0.25) / 0.75)

        ss.x += ss.vx
        ss.y += ss.vy

        const len = Math.hypot(ss.vx, ss.vy)
        const tailX = ss.x - (ss.vx / len) * ss.length
        const tailY = ss.y - (ss.vy / len) * ss.length

        const grad = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY)

        if (isLight) {
          grad.addColorStop(0, `rgba(180, 30, 30, ${alpha})`)
          grad.addColorStop(0.3, `rgba(200, 50, 50, ${alpha * 0.5})`)
          grad.addColorStop(1, 'rgba(200,50,50,0)')
        } else {
          grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`)
          grad.addColorStop(0.2, `rgba(255, 200, 200, ${alpha * 0.6})`)
          grad.addColorStop(0.6, `rgba(220, 60, 60, ${alpha * 0.25})`)
          grad.addColorStop(1, 'rgba(0,0,0,0)')
        }

        ctx.save()
        ctx.beginPath()
        ctx.moveTo(ss.x, ss.y)
        ctx.lineTo(tailX, tailY)
        ctx.strokeStyle = grad
        ctx.lineWidth = isLight ? 1.2 : 2
        ctx.lineCap = 'round'
        if (!isLight) {
          ctx.shadowBlur = 10
          ctx.shadowColor = 'rgba(255, 120, 120, 0.5)'
        }
        ctx.stroke()

        // Head dot
        ctx.beginPath()
        ctx.arc(ss.x, ss.y, isLight ? 1.2 : 2, 0, Math.PI * 2)
        ctx.fillStyle = isLight ? `rgba(180,30,30,${alpha})` : `rgba(255,255,255,${alpha})`
        ctx.fill()
        ctx.restore()
      })
    }

    // ── Comet ─────────────────────────────────────────────────────────────────
    interface Comet {
      x: number; y: number
      vx: number; vy: number
      tailLength: number
      life: number; totalLife: number
      opacity: number
      active: boolean
      restartTimer: number
      restartDelay: number
    }

    const comet: Comet = {
      x: 0, y: 0, vx: 0, vy: 0,
      tailLength: 0,
      life: 0, totalLife: 0,
      opacity: 0,
      active: false,
      restartTimer: 0,
      restartDelay: Math.floor(rand(200, 500))
    }

    function launchComet(w: number, h: number) {
      const angle = rand(10, 28) * (Math.PI / 180)
      const speed = rand(0.5, 0.9)
      comet.x = rand(-200, w * 0.15)
      comet.y = rand(-60, h * 0.3)
      comet.vx = Math.cos(angle) * speed
      comet.vy = Math.sin(angle) * speed
      comet.tailLength = rand(180, 320)
      comet.totalLife = Math.floor(rand(1600, 2600))
      comet.life = 0
      comet.opacity = 0
      comet.active = true
    }

    function drawComet(w: number, h: number) {
      comet.life++
      const progress = comet.life / comet.totalLife

      if (progress < 0.08) {
        comet.opacity = progress / 0.08
      } else if (progress > 0.78) {
        comet.opacity = 1 - (progress - 0.78) / 0.22
      } else {
        comet.opacity = 1
      }

      if (comet.life >= comet.totalLife) {
        comet.active = false
        comet.restartTimer = 0
        comet.restartDelay = Math.floor(rand(600, 1400))
        return
      }

      comet.x += comet.vx
      comet.y += comet.vy

      const alpha = comet.opacity * (isLight ? 0.5 : 0.8)
      const len = Math.hypot(comet.vx, comet.vy)
      const tailX = comet.x - (comet.vx / len) * comet.tailLength
      const tailY = comet.y - (comet.vy / len) * comet.tailLength

      const tailGrad = ctx.createLinearGradient(comet.x, comet.y, tailX, tailY)

      if (isLight) {
        tailGrad.addColorStop(0, `rgba(160, 20, 20, ${alpha})`)
        tailGrad.addColorStop(0.15, `rgba(180, 40, 40, ${alpha * 0.6})`)
        tailGrad.addColorStop(0.5, `rgba(200, 60, 60, ${alpha * 0.2})`)
        tailGrad.addColorStop(1, 'rgba(200,60,60,0)')
      } else {
        tailGrad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`)
        tailGrad.addColorStop(0.06, `rgba(255, 220, 200, ${alpha * 0.85})`)
        tailGrad.addColorStop(0.25, `rgba(200, 70, 60, ${alpha * 0.4})`)
        tailGrad.addColorStop(0.6, `rgba(120, 20, 20, ${alpha * 0.15})`)
        tailGrad.addColorStop(1, 'rgba(0,0,0,0)')
      }

      ctx.save()

      // Core tail
      ctx.beginPath()
      ctx.moveTo(comet.x, comet.y)
      ctx.lineTo(tailX, tailY)
      ctx.strokeStyle = tailGrad
      ctx.lineWidth = isLight ? 1.8 : 2.5
      ctx.lineCap = 'round'
      if (!isLight) {
        ctx.shadowBlur = 16
        ctx.shadowColor = 'rgba(220, 60, 60, 0.45)'
      }
      ctx.stroke()

      // Soft wide glow tail (dark only)
      if (!isLight) {
        ctx.beginPath()
        ctx.moveTo(comet.x, comet.y)
        ctx.lineTo(tailX, tailY)
        ctx.strokeStyle = tailGrad
        ctx.lineWidth = 10
        ctx.globalAlpha = 0.12
        ctx.stroke()
        ctx.globalAlpha = 1
      }

      // Head glow
      const headR = isLight ? 6 : 10
      const headGrad = ctx.createRadialGradient(comet.x, comet.y, 0, comet.x, comet.y, headR)
      if (isLight) {
        headGrad.addColorStop(0, `rgba(180, 30, 30, ${alpha})`)
        headGrad.addColorStop(1, 'rgba(180,30,30,0)')
      } else {
        headGrad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`)
        headGrad.addColorStop(0.4, `rgba(255, 200, 200, ${alpha * 0.7})`)
        headGrad.addColorStop(1, 'rgba(0,0,0,0)')
      }
      ctx.beginPath()
      ctx.arc(comet.x, comet.y, headR, 0, Math.PI * 2)
      ctx.fillStyle = headGrad
      if (!isLight) {
        ctx.shadowBlur = 25
        ctx.shadowColor = 'rgba(255,255,255,0.6)'
      }
      ctx.fill()
      ctx.restore()
    }

    // ── Original Particle System ──────────────────────────────────────────────
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
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
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
          ctx.fillRect(0, -spikeWidth / 2, spikeLen, spikeWidth)
        }
        ctx.restore()

        ctx.beginPath()
        ctx.arc(x, y, s * 0.8, 0, Math.PI * 2)
        ctx.fillStyle = isLight ? '#dc2626' : '#ffffff'
        ctx.fill()
      }
    }

    // ── Resize / Init ──────────────────────────────────────────────────────────
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
      // Reset shooting stars
      shootingStars = []
      shootTimer = Math.floor(rand(60, 180))
      // Reset comet
      comet.active = false
      comet.restartTimer = 0
      comet.restartDelay = Math.floor(rand(200, 500))
    }

    // ── Animate ───────────────────────────────────────────────────────────────
    const animate = () => {
      const W = canvas.width
      const H = canvas.height

      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => p.connections = 0)

      // Particles + connections (original logic)
      particles.forEach((p, i) => {
        p.update(W, H)

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
            const lineColor = isLight
              ? `rgba(15, 23, 42, ${opacity})`
              : `rgba(239, 68, 68, ${opacity})`
            ctx.strokeStyle = lineColor
            ctx.lineWidth = isLight ? 0.8 : 1.2
            ctx.stroke()
          }
        }

        p.draw(ctx)
      })

      // Shooting stars (on top of particles)
      drawShootingStars(W, H)

      // Comet
      if (comet.active) {
        drawComet(W, H)
      } else {
        comet.restartTimer++
        if (comet.restartTimer >= comet.restartDelay) {
          launchComet(W, H)
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    // ── Events ─────────────────────────────────────────────────────────────────
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.active = true
    }
    const handleMouseLeave = () => { mouse.active = false }

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
        mixBlendMode: 'normal'
      }}
    />
  )
}
