import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import HeroSection from '@/components/home/HeroSection'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, Monitor, Code, Settings, Search,
  Layout, Cpu, Gem, Shield, ArrowUpRight, Zap
} from 'lucide-react'
import styles from './page.module.css'
import dynamic from 'next/dynamic'

// Client Components
import ScrollProgress from '@/components/home/ScrollProgress'
import AnimatedSection, { StaggerContainer } from '@/components/home/AnimatedSection'
const DigitalMetricsSection = dynamic(() => import('@/components/home/DigitalMetricsSection'), { ssr: false })

export const metadata = {
  title: 'TRMN Digital | Diyarbakır Yazılım Şirketi & Web Tasarım',
  description: 'Diyarbakır yazılım şirketi TRMN Digital; özel yazılım çözümleri, kurumsal web tasarımı, CRM ve otomasyon sistemleri sunar. İşletmenizi dijitalle büyütün.',
}

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className={styles.main}>
        <HeroSection />

        {/* KISA GÜVEN BLOĞU */}
        <section className={styles.trustBlock}>
          <div className="container">
            <StaggerContainer className={styles.trustList}>
              <AnimatedSection className={styles.trustItem}><CheckCircle2 className={styles.trustIcon} /> Hızlı teslimat</AnimatedSection>
              <AnimatedSection className={styles.trustItem}><CheckCircle2 className={styles.trustIcon} /> Kesintisiz iletişim</AnimatedSection>
              <AnimatedSection className={styles.trustItem}><CheckCircle2 className={styles.trustIcon} /> Performans odaklı sistemler</AnimatedSection>
            </StaggerContainer>
          </div>
        </section>

        {/* FARK BLOĞU — Animated Digital Metrics */}
        <DigitalMetricsSection />

        {/* HİZMETLER */}
        <section className={styles.sectionAlt}>
          <div className="container">
            <AnimatedSection style={{ textAlign: 'center' }}>
              <h2 className={styles.sectionTitleCenter}>Neler Yapıyoruz?</h2>
            </AnimatedSection>

            <StaggerContainer className={styles.servicesList} style={{ margin: '0 auto' }}>
              <AnimatedSection className={styles.serviceItem}>
                <div className={styles.serviceIconWrap}><Monitor size={28} /></div>
                <div>
                  <h3 className={styles.serviceTitle}>Kurumsal Web Tasarım</h3>
                  <p className={styles.serviceDesc}>Markanızı dijitalde güçlü ve güvenilir gösteren, yüksek performanslı web siteleri.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection className={styles.serviceItem}>
                <div className={styles.serviceIconWrap}><Search size={28} /></div>
                <div>
                  <h3 className={styles.serviceTitle}>Google Ads Yönetimi</h3>
                  <p className={styles.serviceDesc}>Reklam bütçenizi en verimli şekilde kullanarak, doğrudan satış ve dönüşüm odaklı kampanyalar.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection className={styles.serviceItem}>
                <div className={styles.serviceIconWrap}><Code size={28} /></div>
                <div>
                  <h3 className={styles.serviceTitle}>Özel Yazılım Çözümleri</h3>
                  <p className={styles.serviceDesc}>İşletmenize özel CRM, ERP ve yönetim panelleriyle süreçlerinizi dijitalleştiriyoruz.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection className={styles.serviceItem}>
                <div className={styles.serviceIconWrap}><Settings size={28} /></div>
                <div>
                  <h3 className={styles.serviceTitle}>Otomasyon & Sistemler</h3>
                  <p className={styles.serviceDesc}>Tekrarlayan işleri otomatiğe bağlayarak zaman ve maliyet tasarrufu sağlıyoruz.</p>
                </div>
              </AnimatedSection>
            </StaggerContainer>
          </div>
        </section>

        {/* TASARIM ÇEŞİTLİLİĞİ */}
        <section className={styles.section}>
          <div className="container">
            <AnimatedSection style={{ textAlign: 'center', marginBottom: 64 }}>
              <h2 className={styles.sectionTitleCenter}>Her markaya aynı tasarımı değil,<br /><span>doğru dijital kimliği oluşturuyoruz</span></h2>
              <p className={styles.sectionSub} style={{ maxWidth: 800, margin: '0 auto' }}>
                TRMN Digital olarak sektörünüze, hedef kitlenize ve marka duruşunuza göre farklı tasarım dilleri geliştiriyoruz.
              </p>
            </AnimatedSection>

            <StaggerContainer className={styles.stepsGrid}>
              {[
                { icon: Shield, title: 'Kurumsal ve Güvenilir', desc: 'Ağırbaşlı, güven telkin eden ve profesyonel hatlar.' },
                { icon: Layout, title: 'Modern ve Minimal', desc: 'Sade, kullanıcı dostu ve ferah arayüzler.' },
                { icon: Cpu, title: 'Teknolojik ve Dinamik', desc: 'Yüksek enerjili, inovatif ve dikkat çekici yapılar.' },
                { icon: Gem, title: 'Premium ve Dönüşüm Odaklı', desc: 'Lüks hissi veren, detaylara odaklı ve satış vizyonlu tasarımlar.' }
              ].map(style => (
                <AnimatedSection key={style.title} className={styles.stepItem}>
                  <div className={styles.stepNum} style={{ color: 'var(--accent)' }}><style.icon size={40} /></div>
                  <h3 style={{ marginBottom: 12, fontWeight: 700 }}>{style.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{style.desc}</p>
                </AnimatedSection>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* PROJE BLOĞU */}
        <section className={styles.sectionAlt}>
          <div className="container">
            <AnimatedSection className={styles.centerBlock}>
              <h2 className={styles.sectionTitle} style={{ marginBottom: '16px' }}>Başarı Hikayelerimiz</h2>
              <p className={styles.sectionSub}>Geliştirdiğimiz projelerle markaların dijitaldeki gücüne güç katıyoruz.</p>
              <div className={styles.projectsWrapper}>
                <Link href="/projeler" className={styles.projectsLink}>
                  👉 Tüm projelerimizi inceleyin <ArrowRight className={styles.inlineIcon} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* KAPANIŞ */}
        <section className={styles.ctaSection}>
          <div className="container">
            <AnimatedSection className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>Dijital dönüşümünüzü<br />birlikte başlatalım</h2>
              <p className={styles.ctaText}>
                İşinizi büyütmek için ihtiyaç duyduğunuz sistemi profesyonel bir ekiple kurmak istiyorsanız hemen bizimle iletişime geçin.
              </p>
              <Link href="/teklif-al" className="btn btn-primary btn-lg">
                👉 Ücretsiz Teklif Alın
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
