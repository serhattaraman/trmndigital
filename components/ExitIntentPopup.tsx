'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Zap, ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
        // Store in session storage so it doesn't show again in same session
        sessionStorage.setItem('exitPopupShown', 'true')
      }
    }

    // Check if shown before
    if (sessionStorage.getItem('exitPopupShown')) {
      setHasShown(true)
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [hasShown])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-2xl)', maxWidth: '500px', width: '100%', padding: '40px', position: 'relative', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}
        >
          <button 
            onClick={() => setIsVisible(false)}
            style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>

          <div style={{ textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', background: 'var(--accent-glow)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--accent)' }}>
              <Zap size={32} />
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '12px', color: 'var(--text-primary)' }}>Gitmeden Önce Bir Sorumuz Var!</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: 1.6 }}>
              İşletmenizin dijital potansiyelini biliyor musunuz? Ücretsiz analiz raporu hazırlayalım ve rakiplerinizin önüne geçmeniz için bir yol haritası sunalım.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link 
                href="/teklif-al" 
                onClick={() => setIsVisible(false)}
                className="btn btn-primary btn-lg" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Ücretsiz Analiz İstiyorum <ArrowRight size={18} />
              </Link>
              <a 
                href="https://wa.me/905384714674" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageCircle size={18} /> WhatsApp ile Konuşalım
              </a>
            </div>
            
            <p style={{ marginTop: '24px', fontSize: '12px', color: 'var(--text-muted)' }}>
              Hiçbir taahhüt gerekmez. Sadece bilgi alırsınız.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
