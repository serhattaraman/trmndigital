'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Users, Calendar, ArrowRight, MessageCircle, AlertCircle } from 'lucide-react'
import styles from './TimeCalculator.module.css'

export default function TimeCalculator() {
  const [personnel, setPersonnel] = useState(3)
  const [hours, setHours] = useState(2)
  const [days, setDays] = useState(5)
  const [result, setResult] = useState({ yearly: 0, workDays: 0 })

  useEffect(() => {
    const yearly = personnel * hours * days * 52
    const workDays = Math.round(yearly / 8)
    setResult({ yearly, workDays })
  }, [personnel, hours, days])

  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className="section-label">Zaman Kaybı Analizi</div>
            <h2 className="section-title">Manuel İşler Size <span>Neye Mal Oluyor?</span></h2>
            <p className="section-desc">
              Excel dosyaları ve manuel takipler arasında kaybolan zamanı somut rakamlarla görün.
              Bu kayıp, işletmenizin büyümesinin önündeki en büyük engeldir.
            </p>

            <div className={styles.calculator}>
              <div className={styles.inputs}>
                <div className={styles.inputGroup}>
                  <label><Users size={16} /> Personel Sayısı</label>
                  <input 
                    type="range" min="1" max="50" value={personnel} 
                    onChange={(e) => setPersonnel(parseInt(e.target.value))} 
                  />
                  <div className={styles.inputValue}>{personnel} kişi</div>
                </div>

                <div className={styles.inputGroup}>
                  <label><Clock size={16} /> Günlük Manuel İş (Saat)</label>
                  <input 
                    type="range" min="0.5" max="8" step="0.5" value={hours} 
                    onChange={(e) => setHours(parseFloat(e.target.value))} 
                  />
                  <div className={styles.inputValue}>{hours} saat / gün</div>
                </div>

                <div className={styles.inputGroup}>
                  <label><Calendar size={16} /> Haftalık Çalışma Günü</label>
                  <input 
                    type="range" min="1" max="7" value={days} 
                    onChange={(e) => setDays(parseInt(e.target.value))} 
                  />
                  <div className={styles.inputValue}>{days} gün</div>
                </div>
              </div>

              <div className={styles.resultCard}>
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={result.yearly}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.resultContent}
                  >
                    <div className={styles.resultLabel}>Yıllık Kaybedilen Zaman</div>
                    <div className={styles.resultValue}>{result.yearly.toLocaleString()} <span>Saat</span></div>
                    <div className={styles.resultSub}>Bu yaklaşık <strong>{result.workDays} iş günü</strong> demek!</div>
                    
                    <div className={styles.comparison}>
                      <div className={styles.compItem}>
                        <div className={styles.compIcon} style={{ background: '#EF4444' }}><AlertCircle size={14} /></div>
                        <span>Şu anki durum: Kontrolsüz kayıp</span>
                      </div>
                      <div className={styles.compItem}>
                        <div className={styles.compIcon} style={{ background: '#10B981' }}>✓</div>
                        <span>Sistemle: %85+ zaman tasarrufu</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className={styles.cta}>
                  <p>Bu zamanı satışa ve büyümeye ayırmak ister misiniz?</p>
                  <div className={styles.ctaBtns}>
                    <a href="https://wa.me/905384714674?text=Merhaba%2C%20zaman%20hesaplay%C4%B1c%C4%B1y%C4%B1%20kulland%C4%B1m.%20%C4%B0%C5%9Fletmemdeki%20kayb%C4%B1%20dijital%20sistemle%20nas%C4%B1l%20%C3%B6nleyebiliriz%3F" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                      <MessageCircle size={16} /> Hemen WhatsApp&apos;tan Yaz
                    </a>
                    <a href="/teklif-al" className="btn btn-primary">
                      Ücretsiz Planlama <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
