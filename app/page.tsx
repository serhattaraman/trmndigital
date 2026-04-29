'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import HeroSection from '@/components/home/HeroSection'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Monitor, Code, Settings, Search, Layout, Cpu, Gem, Palette, Shield } from 'lucide-react'
import styles from './page.module.css'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <HeroSection />

        {/* KISA GÜVEN BLOĞU */}
        <section className={styles.trustBlock}>
          <div className="container">
            <motion.div 
              className={styles.trustList}
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className={styles.trustItem}><CheckCircle2 className={styles.trustIcon} /> Hızlı teslimat</motion.div>
              <motion.div variants={fadeInUp} className={styles.trustItem}><CheckCircle2 className={styles.trustIcon} /> Kesintisiz iletişim</motion.div>
              <motion.div variants={fadeInUp} className={styles.trustItem}><CheckCircle2 className={styles.trustIcon} /> Performans odaklı sistemler</motion.div>
            </motion.div>
          </div>
        </section>

        {/* FARK BLOĞU */}
        <section className={styles.section}>
          <div className="container">
            <motion.div 
              className={styles.centerBlock}
              {...fadeInUp}
            >
              <h2 className={styles.sectionTitle}>Sadece web sitesi değil,<br/><span>Dijital sistemler kuruyoruz.</span></h2>
              <div className={styles.sectionText}>
                <p>TRMN Digital olarak abartılı vaatler yerine,</p>
                <p>işletmenize gerçekten değer katan çözümler üretiyoruz.</p>
                <br/>
                <p>Karmaşık süreçleri basitleştiriyor,</p>
                <p>teknolojiyi işinizi büyütmek için kullanıyoruz.</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HİZMETLER */}
        <section className={styles.sectionAlt}>
          <div className="container">
            <motion.div {...fadeInUp} style={{ textAlign: 'center' }}>
              <h2 className={styles.sectionTitleCenter}>Neler Yapıyoruz?</h2>
            </motion.div>
            
            <motion.div 
              className={styles.servicesList} 
              style={{ margin: '0 auto' }}
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className={styles.serviceItem}>
                <div className={styles.serviceIconWrap}><Monitor size={28} /></div>
                <div>
                  <h3 className={styles.serviceTitle}>Kurumsal Web Tasarım</h3>
                  <p className={styles.serviceDesc}>Markanızı dijitalde güçlü ve güvenilir gösteren, yüksek performanslı web siteleri.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className={styles.serviceItem}>
                <div className={styles.serviceIconWrap}><Search size={28} /></div>
                <div>
                  <h3 className={styles.serviceTitle}>Google Ads Yönetimi</h3>
                  <p className={styles.serviceDesc}>Reklam bütçenizi en verimli şekilde kullanarak, doğrudan satış ve dönüşüm odaklı kampanyalar.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className={styles.serviceItem}>
                <div className={styles.serviceIconWrap}><Code size={28} /></div>
                <div>
                  <h3 className={styles.serviceTitle}>Özel Yazılım Çözümleri</h3>
                  <p className={styles.serviceDesc}>İşletmenize özel CRM, ERP ve yönetim panelleriyle süreçlerinizi dijitalleştiriyoruz.</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className={styles.serviceItem}>
                <div className={styles.serviceIconWrap}><Settings size={28} /></div>
                <div>
                  <h3 className={styles.serviceTitle}>Otomasyon & Sistemler</h3>
                  <p className={styles.serviceDesc}>Tekrarlayan işleri otomatiğe bağlayarak zaman ve maliyet tasarrufu sağlıyoruz.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* TASARIM ÇEŞİTLİLİĞİ SECTİON */}
        <section className={styles.section}>
          <div className="container">
            <motion.div {...fadeInUp} style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 className={styles.sectionTitleCenter}>Her markaya aynı tasarımı değil,<br/><span>doğru dijital kimliği oluşturuyoruz</span></h2>
              <p className={styles.sectionSub} style={{ maxWidth: 800, margin: '0 auto' }}>
                TRMN Digital olarak sektörünüze, hedef kitlenize ve marka duruşunuza göre farklı tasarım dilleri geliştiriyoruz. Markanızın dijitalde doğru görünmesini sağlıyoruz.
              </p>
            </motion.div>

            <motion.div 
              className={styles.stepsGrid}
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {[
                { icon: Shield, title: 'Kurumsal ve Güvenilir', desc: 'Ağırbaşlı, güven telkin eden ve profesyonel hatlar.' },
                { icon: Layout, title: 'Modern ve Minimal', desc: 'Sade, kullanıcı dostu ve ferah arayüzler.' },
                { icon: Cpu, title: 'Teknolojik ve Dinamik', desc: 'Yüksek enerjili, inovatif ve dikkat çekici yapılar.' },
                { icon: Gem, title: 'Premium ve Dönüşüm Odaklı', desc: 'Lüks hissi veren, detaylara odaklı ve satış vizyonlu tasarımlar.' }
              ].map(style => (
                <motion.div key={style.title} variants={fadeInUp} className={styles.stepItem}>
                  <div className={styles.stepNum} style={{ color: 'var(--accent)' }}><style.icon size={40} /></div>
                  <h3 style={{ marginBottom: 12, fontWeight: 700 }}>{style.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{style.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PROJE BLOĞU */}
        <section className={styles.sectionAlt}>
          <div className="container">
            <motion.div 
              className={styles.centerBlock}
              {...fadeInUp}
            >
              <h2 className={styles.sectionTitle} style={{ marginBottom: '16px' }}>Başarı Hikayelerimiz</h2>
              <p className={styles.sectionSub}>Geliştirdiğimiz projelerle markaların dijitaldeki gücüne güç katıyoruz.</p>
              
              <div className={styles.projectsWrapper}>
                <Link href="/projeler" className={styles.projectsLink}>
                  👉 Tüm projelerimizi inceleyin <ArrowRight className={styles.inlineIcon} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* KAPANIŞ */}
        <section className={styles.ctaSection}>
          <div className="container">
            <motion.div 
              className={styles.ctaBox}
              {...fadeInUp}
            >
              <h2 className={styles.ctaTitle}>Dijital dönüşümünüzü<br/>birlikte başlatalım</h2>
              <p className={styles.ctaText}>
                İşinizi büyütmek için ihtiyaç duyduğunuz sistemi profesyonel bir ekiple kurmak istiyorsanız hemen bizimle iletişime geçin.
              </p>
              <Link href="/teklif-al" className="btn btn-primary btn-lg">
                👉 Ücretsiz Teklif Alın
              </Link>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
