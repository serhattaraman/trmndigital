'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function PageLoader() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      background: 'var(--bg-primary)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '32px'
    }}>
      {/* Background Glows */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%)',
        filter: 'blur(40px)',
        zIndex: -1
      }} />

      <div style={{ position: 'relative', width: '80px', height: '80px' }}>
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute',
            inset: 0,
            border: '2px solid rgba(255,255,255,0.05)',
            borderTop: '2px solid var(--accent)',
            borderRadius: '50%'
          }}
        />

        {/* Inner Logo/Icon Placeholder */}
        <div style={{
          position: 'absolute',
          inset: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--bg-card)',
          borderRadius: '50%',
          border: '1px solid var(--border)',
          boxShadow: '0 0 20px rgba(0,0,0,0.2)'
        }}>
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              fontSize: '24px',
              fontWeight: 900,
              color: 'var(--accent)',
              fontFamily: 'var(--font-heading)'
            }}
          >
            T
          </motion.div>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ 
            fontSize: '13px', 
            fontWeight: 700, 
            letterSpacing: '0.2em', 
            color: 'var(--text-primary)', 
            textTransform: 'uppercase',
            marginBottom: '8px'
          }}
        >
          TRMN Digital
        </motion.div>
        <div style={{ 
          width: '120px', 
          height: '2px', 
          background: 'rgba(255,255,255,0.05)', 
          borderRadius: '10px', 
          overflow: 'hidden',
          margin: '0 auto'
        }}>
          <motion.div
            animate={{ x: [-120, 120] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, var(--accent), transparent)'
            }}
          />
        </div>
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '12px' }}
        >
          Sistem yükleniyor...
        </motion.div>
      </div>
    </div>
  )
}
