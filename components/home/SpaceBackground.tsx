'use client'
import { useEffect, useRef } from 'react'

/* ─────────────────────────────────────────────
   TRMN Digital – SpaceBackground
   Ultra-premium, cinematic, canvas-based background
   ───────────────────────────────────────────── */

// ── Utility ──────────────────────────────────
const rand = (min: number, max: number) => Math.random() * (max - min) + min
const randInt = (min: number, max: number) => Math.floor(rand(min, max + 1))

// ── Types ─────────────────────────────────────
interface Star {
  x: number; y: number
  size: number
  opacity: number
  twinkleSpeed: number
  twinkleDir: number
  blur: number
  layer: number   // 0=far 1=mid 2=near  → parallax factor
  gold: boolean
}

interface ShootingStar {
  x: number; y: number
  vx: number; vy: number
  length: number
  opacity: number
  fade: number
  life: number
  maxLife: number
  active: boolean
}

interface FloatParticle {
  x: number; y: number
  vx: number; vy: number
  size: number
  opacity: number
  opDir: number
}

interface HUDLine {
  x1: number; y1: number
  x2: number; y2: number
  opacity: number
  opDir: number
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    let W = 0, H = 0

    // ── State ────────────────────────────────
    let stars: Star[] = []
    let shootingStars: ShootingStar[] = []
    let floatParticles: FloatParticle[] = []
    let hudLines: HUDLine[] = []

    // Comet
    const comet = {
      x: -200, y: 0,
      vx: 0.28, vy: 0.10,
      length: 280,
      opacity: 0,
      life: 0,
      totalLife: 0,
      active: false,
      restartTimer: 0,
      restartDelay: rand(4000, 7000)
    }

    // Parallax offsets driven by mouse
    let mouseX = 0, mouseY = 0
    let parallaxX = 0, parallaxY = 0

    // Camera float (slow drift)
    let camTime = 0

    // ── Helpers ──────────────────────────────
    function resize() {
      if (!canvas.parentElement) return
      W = canvas.parentElement.clientWidth
      H = canvas.parentElement.clientHeight
      canvas.width = W
      canvas.height = H
      init()
    }

    function createStar(): Star {
      const layer = randInt(0, 2)          // 0=far 1=mid 2=near
      const sizeMap = [rand(0.3, 0.8), rand(0.6, 1.2), rand(0.9, 1.8)]
      const gold = Math.random() < 0.025    // 2.5% chance of gold sparkle
      return {
        x: rand(0, W), y: rand(0, H),
        size: sizeMap[layer],
        opacity: rand(0.2, 0.95),
        twinkleSpeed: rand(0.003, 0.012),
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
        blur: layer === 0 ? rand(0.5, 1.5) : 0,
        layer,
        gold
      }
    }

    function createShootingStar(): ShootingStar {
      const angle = rand(20, 55) * (Math.PI / 180)
      const speed = rand(8, 16)
      const maxLife = rand(40, 90)
      return {
        x: rand(W * 0.1, W * 0.9),
        y: rand(H * 0.05, H * 0.4),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: rand(120, 260),
        opacity: 1,
        fade: 1 / maxLife,
        life: 0,
        maxLife,
        active: true
      }
    }

    function createFloatParticle(): FloatParticle {
      return {
        x: rand(0, W), y: rand(0, H),
        vx: rand(-0.12, 0.12),
        vy: rand(-0.18, -0.04),
        size: rand(0.8, 2.2),
        opacity: rand(0.05, 0.35),
        opDir: rand(0.001, 0.004) * (Math.random() > 0.5 ? 1 : -1)
      }
    }

    function createHUDLines(count: number): HUDLine[] {
      const lines: HUDLine[] = []
      const margin = 40
      // corners
      const corners = [
        { cx: margin, cy: margin },
        { cx: W - margin, cy: margin },
        { cx: margin, cy: H - margin },
        { cx: W - margin, cy: H - margin }
      ]
      const segLen = rand(60, 120)
      corners.forEach(({ cx, cy }) => {
        lines.push({ x1: cx, y1: cy, x2: cx + segLen, y2: cy, opacity: rand(0.04, 0.12), opDir: rand(0.0005, 0.002) })
        lines.push({ x1: cx, y1: cy, x2: cx, y2: cy + segLen, opacity: rand(0.04, 0.12), opDir: rand(0.0005, 0.002) })
      })
      // scattered fragments
      for (let i = 0; i < count; i++) {
        const horiz = Math.random() > 0.5
        const x = rand(W * 0.05, W * 0.95)
        const y = rand(H * 0.05, H * 0.95)
        const len = rand(30, 80)
        lines.push({
          x1: x, y1: y,
          x2: horiz ? x + len : x,
          y2: horiz ? y : y + len,
          opacity: rand(0.02, 0.08),
          opDir: rand(0.0003, 0.0015)
        })
      }
      return lines
    }

    function init() {
      // Stars
      const count = W < 768 ? 180 : 380
      stars = Array.from({ length: count }, createStar)

      // Float particles
      floatParticles = Array.from({ length: W < 768 ? 30 : 70 }, createFloatParticle)

      // HUD lines
      hudLines = createHUDLines(W < 768 ? 6 : 14)

      // Shooting stars pool
      shootingStars = []

      // Comet reset
      comet.active = false
      comet.restartTimer = 0
      comet.restartDelay = rand(3000, 6000)
      launchComet()
    }

    function launchComet() {
      // Come in from top-left quadrant, travel diagonally
      comet.x = rand(-300, W * 0.2)
      comet.y = rand(-100, H * 0.25)
      const angle = rand(8, 22) * (Math.PI / 180)
      const speed = rand(0.22, 0.36)
      comet.vx = Math.cos(angle) * speed
      comet.vy = Math.sin(angle) * speed
      comet.length = rand(220, 360)
      comet.opacity = 0
      comet.totalLife = rand(1800, 2800)  // frames
      comet.life = 0
      comet.active = true
    }

    // ── Draw Nebula (pre-rendered as gradient layers) ──
    function drawNebula() {
      // Center glow – subtle red
      const cx = W * 0.5, cy = H * 0.45
      const rg1 = ctx.createRadialGradient(cx, cy, 0, cx, cy, W * 0.55)
      rg1.addColorStop(0, 'rgba(120, 0, 0, 0.07)')
      rg1.addColorStop(0.4, 'rgba(80, 0, 30, 0.04)')
      rg1.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = rg1
      ctx.fillRect(0, 0, W, H)

      // Top-left dust
      const rg2 = ctx.createRadialGradient(W * 0.1, H * 0.15, 0, W * 0.1, H * 0.15, W * 0.38)
      rg2.addColorStop(0, 'rgba(60, 0, 80, 0.06)')
      rg2.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = rg2
      ctx.fillRect(0, 0, W, H)

      // Bottom-right dust
      const rg3 = ctx.createRadialGradient(W * 0.88, H * 0.78, 0, W * 0.88, H * 0.78, W * 0.4)
      rg3.addColorStop(0, 'rgba(100, 0, 20, 0.05)')
      rg3.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = rg3
      ctx.fillRect(0, 0, W, H)
    }

    // ── Draw center radial glow (for hero content) ──
    function drawCenterGlow() {
      const cx = W * 0.5, cy = H * 0.45
      const r = Math.min(W, H) * 0.45
      const rg = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
      rg.addColorStop(0, 'rgba(150, 0, 0, 0.055)')
      rg.addColorStop(0.5, 'rgba(80, 0, 0, 0.025)')
      rg.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = rg
      ctx.fillRect(0, 0, W, H)
    }

    // ── Draw Stars ──
    function drawStars(dt: number) {
      stars.forEach(s => {
        // Twinkle
        s.opacity += s.twinkleSpeed * s.twinkleDir
        if (s.opacity >= 0.95) { s.opacity = 0.95; s.twinkleDir = -1 }
        if (s.opacity <= 0.05) { s.opacity = 0.05; s.twinkleDir = 1 }

        // Parallax offset (near layer moves more)
        const pFactor = [0.003, 0.007, 0.014][s.layer]
        const px = s.x + parallaxX * pFactor * W
        const py = s.y + parallaxY * pFactor * H

        const wrapped = {
          x: ((px % W) + W) % W,
          y: ((py % H) + H) % H
        }

        ctx.save()
        if (s.blur > 0) {
          ctx.filter = `blur(${s.blur}px)`
        }

        if (s.gold) {
          // Gold sparkle
          ctx.beginPath()
          ctx.arc(wrapped.x, wrapped.y, s.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 215, 100, ${s.opacity * 0.7})`
          ctx.shadowBlur = 6
          ctx.shadowColor = 'rgba(255, 200, 60, 0.6)'
          ctx.fill()
        } else {
          ctx.beginPath()
          ctx.arc(wrapped.x, wrapped.y, s.size, 0, Math.PI * 2)
          const alpha = s.opacity
          const baseColor = s.layer === 2
            ? `rgba(230, 230, 255, ${alpha})`    // near – bright white
            : s.layer === 1
              ? `rgba(200, 200, 230, ${alpha})`  // mid
              : `rgba(150, 160, 200, ${alpha * 0.7})` // far – dimmer, bluer
          ctx.fillStyle = baseColor
          if (s.layer === 2) {
            ctx.shadowBlur = 4
            ctx.shadowColor = 'rgba(200, 200, 255, 0.4)'
          }
          ctx.fill()
        }
        ctx.restore()
      })
    }

    // ── Draw Shooting Stars ──
    let shootTimer = 0
    const shootInterval = () => rand(180, 420) // frames between spawns

    function drawShootingStars() {
      shootTimer--
      if (shootTimer <= 0) {
        shootingStars.push(createShootingStar())
        shootTimer = shootInterval()
      }

      shootingStars = shootingStars.filter(ss => ss.active)
      shootingStars.forEach(ss => {
        ss.life++
        if (ss.life >= ss.maxLife) { ss.active = false; return }

        const progress = ss.life / ss.maxLife
        const alpha = progress < 0.2
          ? (progress / 0.2) * 0.9
          : 0.9 - ((progress - 0.2) / 0.8) * 0.9

        ss.x += ss.vx
        ss.y += ss.vy

        const tailX = ss.x - (ss.vx / Math.hypot(ss.vx, ss.vy)) * ss.length
        const tailY = ss.y - (ss.vy / Math.hypot(ss.vx, ss.vy)) * ss.length

        const grad = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY)
        grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`)
        grad.addColorStop(0.2, `rgba(255, 200, 200, ${alpha * 0.6})`)
        grad.addColorStop(0.6, `rgba(220, 60, 60, ${alpha * 0.2})`)
        grad.addColorStop(1, 'rgba(0,0,0,0)')

        ctx.save()
        ctx.beginPath()
        ctx.moveTo(ss.x, ss.y)
        ctx.lineTo(tailX, tailY)
        ctx.strokeStyle = grad
        ctx.lineWidth = 2
        ctx.lineCap = 'round'
        ctx.shadowBlur = 12
        ctx.shadowColor = 'rgba(255, 100, 100, 0.5)'
        ctx.stroke()

        // head glow
        ctx.beginPath()
        ctx.arc(ss.x, ss.y, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.fill()
        ctx.restore()
      })
    }

    // ── Draw Comet ──
    function drawComet() {
      comet.life++
      const progress = comet.life / comet.totalLife
      // Fade in / fade out
      if (progress < 0.08) {
        comet.opacity = progress / 0.08
      } else if (progress > 0.75) {
        comet.opacity = 1 - (progress - 0.75) / 0.25
      } else {
        comet.opacity = 1
      }

      if (comet.life >= comet.totalLife) {
        comet.active = false
        comet.restartTimer = 0
        comet.restartDelay = rand(5000, 9000)
        return
      }

      comet.x += comet.vx
      comet.y += comet.vy

      const alpha = comet.opacity * 0.75

      // Tail
      const tailX = comet.x - comet.vx * comet.length / 0.35
      const tailY = comet.y - comet.vy * comet.length / 0.35

      const tailGrad = ctx.createLinearGradient(comet.x, comet.y, tailX, tailY)
      tailGrad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`)
      tailGrad.addColorStop(0.05, `rgba(255, 220, 200, ${alpha * 0.8})`)
      tailGrad.addColorStop(0.2, `rgba(200, 80, 60, ${alpha * 0.4})`)
      tailGrad.addColorStop(0.5, `rgba(120, 20, 20, ${alpha * 0.15})`)
      tailGrad.addColorStop(1, 'rgba(0,0,0,0)')

      ctx.save()
      // Soft glow backdrop for tail
      ctx.shadowBlur = 20
      ctx.shadowColor = `rgba(220, 60, 60, ${alpha * 0.4})`

      ctx.beginPath()
      ctx.moveTo(comet.x, comet.y)
      ctx.lineTo(tailX, tailY)
      ctx.strokeStyle = tailGrad
      ctx.lineWidth = 3
      ctx.lineCap = 'round'
      ctx.stroke()

      // Wide soft glow tail
      ctx.beginPath()
      ctx.moveTo(comet.x, comet.y)
      ctx.lineTo(tailX, tailY)
      ctx.strokeStyle = tailGrad
      ctx.lineWidth = 10
      ctx.globalAlpha = 0.15
      ctx.stroke()
      ctx.globalAlpha = 1

      // Head core
      const headGrad = ctx.createRadialGradient(comet.x, comet.y, 0, comet.x, comet.y, 8)
      headGrad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`)
      headGrad.addColorStop(0.4, `rgba(255, 200, 200, ${alpha * 0.7})`)
      headGrad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.beginPath()
      ctx.arc(comet.x, comet.y, 8, 0, Math.PI * 2)
      ctx.fillStyle = headGrad
      ctx.shadowBlur = 30
      ctx.shadowColor = 'rgba(255, 255, 255, 0.6)'
      ctx.fill()
      ctx.restore()
    }

    // ── Draw Floating Particles ──
    function drawFloatParticles() {
      floatParticles.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        p.opacity += p.opDir
        if (p.opacity > 0.35) { p.opacity = 0.35; p.opDir *= -1 }
        if (p.opacity < 0.02) { p.opacity = 0.02; p.opDir *= -1 }

        // Wrap
        if (p.y < -10) p.y = H + 10
        if (p.y > H + 10) p.y = -10
        if (p.x < -10) p.x = W + 10
        if (p.x > W + 10) p.x = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 180, 230, ${p.opacity})`
        ctx.shadowBlur = 4
        ctx.shadowColor = 'rgba(200, 100, 100, 0.3)'
        ctx.fill()
        ctx.shadowBlur = 0
      })
    }

    // ── Draw HUD Lines ──
    function drawHUDLines() {
      hudLines.forEach(l => {
        l.opacity += l.opDir
        if (l.opacity > 0.14) { l.opacity = 0.14; l.opDir *= -1 }
        if (l.opacity < 0.01) { l.opacity = 0.01; l.opDir *= -1 }

        ctx.beginPath()
        ctx.moveTo(l.x1, l.y1)
        ctx.lineTo(l.x2, l.y2)
        ctx.strokeStyle = `rgba(180, 200, 255, ${l.opacity})`
        ctx.lineWidth = 0.8
        ctx.stroke()
      })
    }

    // ── Main animate loop ──
    let lastTime = 0
    function animate(ts: number) {
      const dt = ts - lastTime
      lastTime = ts

      // Smooth parallax follow mouse
      parallaxX += (mouseX - parallaxX) * 0.04
      parallaxY += (mouseY - parallaxY) * 0.04

      // Slow camera drift
      camTime += 0.0004

      // Clear
      ctx.fillStyle = '#030712'  // deep space black
      ctx.fillRect(0, 0, W, H)

      // Layers (back→front)
      drawNebula()
      drawCenterGlow()
      drawStars(dt)
      drawHUDLines()
      drawFloatParticles()
      drawShootingStars()

      // Comet logic
      if (comet.active) {
        drawComet()
      } else {
        comet.restartTimer++
        if (comet.restartTimer >= comet.restartDelay) {
          launchComet()
        }
      }

      raf = requestAnimationFrame(animate)
    }

    // ── Events ──
    function onMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect()
      const nx = ((e.clientX - rect.left) / W - 0.5) * 2   // -1 to 1
      const ny = ((e.clientY - rect.top) / H - 0.5) * 2
      mouseX = nx
      mouseY = ny
    }

    // ── Init ──
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    resize()

    shootTimer = randInt(60, 200)  // first shot slightly delayed

    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
