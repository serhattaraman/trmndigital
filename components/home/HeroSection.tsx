'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Play, RefreshCw, Download, User, Database, 
  Send, Zap, RotateCcw, Mail, Globe, 
  Monitor, Activity, ShieldCheck, Rocket,
  ArrowRight
} from 'lucide-react'
import styles from './HeroSection.module.css'
import ParticleBackground from './ParticleBackground'

const terminalLogs = [
  { time: '10:42:15', text: 'Sistem başlatıldı', Icon: Play, color: '#10B981' },
  { time: '10:42:16', text: 'Bağlantı kontrolü yapıldı', Icon: RefreshCw, color: '#3B82F6' },
  { time: '10:42:17', text: 'Form verileri alındı', Icon: Download, color: '#F59E0B' },
  { time: '10:42:18', text: 'Müşteri kaydı oluşturuldu', Icon: User, color: '#8B5CF6' },
  { time: '10:42:19', text: 'Veritabanına kaydedildi', Icon: Database, color: '#10B981' },
  { time: '10:42:20', text: 'Telegram bildirimi gönderildi', Icon: Send, color: '#0EA5E9' },
  { time: '10:42:21', text: 'Otomasyon tetiklendi', Icon: Zap, color: '#EF4444' },
  { time: '10:42:22', text: 'İşlemler senkronize edildi', Icon: RotateCcw, color: '#F59E0B' },
  { time: '10:42:23', text: 'E-posta bildirimi gönderildi', Icon: Mail, color: '#F97316' },
  { time: '10:42:24', text: 'API isteği başarıyla tamamlandı', Icon: Globe, color: '#3B82F6' },
  { time: '10:42:25', text: 'Sunucu durumu: AKTİF', Icon: Monitor, color: '#10B981' },
  { time: '10:42:26', text: 'Sistem kaynakları kontrol edildi', Icon: Activity, color: '#8B5CF6' },
  { time: '10:42:27', text: 'Yedekleme tamamlandı', Icon: ShieldCheck, color: '#10B981' },
  { time: '10:42:28', text: 'Proje yayına alındı', Icon: Rocket, color: '#EF4444' },
]

export default function HeroSection() {
  const [visibleLogs, setVisibleLogs] = useState<typeof terminalLogs>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLogs(prev => {
        const next = [...prev, terminalLogs[currentIndex]]
        if (next.length > 13) next.shift()
        return next
      })
      setCurrentIndex(prev => (prev + 1) % terminalLogs.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className={styles.hero}>
      <ParticleBackground />
      
      <div className={styles.bgGlows}>
        <div className={styles.glowRed} />
        <div className={styles.glowNavy} />
      </div>

      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <motion.h1 
              className={styles.headline}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Dijital varlığınızı<br />
              <span className={styles.accent}>Güçlendiriyoruz</span>
            </motion.h1>

            <motion.p 
              className={styles.sub}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              TRMN Digital olarak işletmeler için güven veren, hızlı çalışan ve sonuç odaklı 
              web siteleri, dijital sistemler ve otomasyon çözümleri geliştiriyoruz.
            </motion.p>

            <motion.div 
              className={styles.ctas}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/hizmetler" className={`${styles.btnPrimary} btn btn-lg`}>
                Hizmetlerimiz <ArrowRight size={18} />
              </Link>
              <Link href="/projeler" className={`${styles.btnSecondary} btn btn-lg`}>
                Projelerimizi İnceleyin <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>

          <motion.div 
            className={styles.visual}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className={styles.terminal}>
              <div className={styles.terminalHeader}>
                <div className={styles.dots}>
                  <span className={styles.dotRed} />
                  <span className={styles.dotYellow} />
                  <span className={styles.dotGreen} />
                </div>
                <div className={styles.terminalTitle}>trmn-system — terminal</div>
                <div className={styles.liveBadge}>
                  <span className={styles.liveDot} />
                  CANLI
                </div>
              </div>
              
              <div className={styles.terminalBody}>
                <div className={styles.logContainer}>
                  <AnimatePresence mode="popLayout">
                    {visibleLogs.map((log, i) => (
                      <motion.div 
                        key={`${log.time}-${i}`}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className={styles.logLine}
                      >
                        <span className={styles.logTime}>[{log.time}]</span>
                        <log.Icon size={14} style={{ color: log.color, flexShrink: 0 }} />
                        <span className={styles.logText}>{log.text}</span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                
                <div className={styles.promptLine}>
                  <span className={styles.promptText}>trmn@system:~$</span>
                  <span className={styles.cursor} />
                </div>
              </div>
              
              <div className={styles.terminalGlow} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
