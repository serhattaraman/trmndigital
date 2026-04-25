import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Monitor, Code, Settings, Search } from 'lucide-react'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'TRMN Digital | İşinizi Düzene Sokan Dijital Çözümler',
  description: 'Web sitesi, yazılım ve otomasyon çözümlerini gereksiz karmaşa olmadan, işe yarar şekilde kuruyoruz.',
  alternates: { canonical: 'https://trmndigital.com' },
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.heroTitle}>Düzgün çalışan dijital sistemler kuruyoruz</h1>
            <p className={styles.heroSubtitle}>
              Web sitesi, yazılım ve otomasyon çözümlerini<br/>
              gereksiz karmaşa olmadan, işe yarar şekilde kuruyoruz.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/teklif-al" className="btn btn-primary btn-lg">
                👉 Projeni anlat
              </Link>
              <a href="https://wa.me/905445209804" target="_blank" rel="noreferrer" className="btn btn-outline btn-lg">
                👉 WhatsApp’tan yaz
              </a>
            </div>
          </div>
        </section>

        {/* KISA GÜVEN BLOĞU */}
        <section className={styles.trustBlock}>
          <div className="container">
            <div className={styles.trustList}>
              <div className={styles.trustItem}><CheckCircle2 className={styles.trustIcon} /> Hızlı teslim</div>
              <div className={styles.trustItem}><CheckCircle2 className={styles.trustIcon} /> Net iletişim</div>
              <div className={styles.trustItem}><CheckCircle2 className={styles.trustIcon} /> Gerçekten çalışan sistemler</div>
            </div>
          </div>
        </section>

        {/* FARK BLOĞU */}
        <section className={styles.section}>
          <div className="container">
            <div className={styles.centerBlock}>
              <h2 className={styles.sectionTitle}>Her şeyi yapmayız.<br/>İşe yarayanı yaparız.</h2>
              <div className={styles.sectionText}>
                <p>Amacımız basit:</p>
                <p>kurduğumuz sistem gerçekten çalışsın.</p>
                <br/>
                <p>Gösterişli ama boş işler yerine,</p>
                <p>kullanılan ve sonuç veren çözümler kurarız.</p>
              </div>
            </div>
          </div>
        </section>

        {/* HİZMETLER */}
        <section className={styles.sectionAlt}>
          <div className="container">
            <h2 className={styles.sectionTitleCenter}>Ne yapıyoruz?</h2>
            <div className={styles.servicesList} style={{ margin: '0 auto' }}>
              <div className={styles.serviceItem}>
                <div className={styles.serviceIconWrap}><Monitor size={28} /></div>
                <div>
                  <h3 className={styles.serviceTitle}>💻 Web Sitesi</h3>
                  <p className={styles.serviceDesc}>Müşteri getiren, sade ve hızlı web siteleri kuruyoruz.</p>
                </div>
              </div>
              <div className={styles.serviceItem}>
                <div className={styles.serviceIconWrap}><Code size={28} /></div>
                <div>
                  <h3 className={styles.serviceTitle}>⚙️ Özel Yazılım</h3>
                  <p className={styles.serviceDesc}>İşine özel, gereksiz karmaşa olmayan sistemler geliştiriyoruz.</p>
                </div>
              </div>
              <div className={styles.serviceItem}>
                <div className={styles.serviceIconWrap}><Settings size={28} /></div>
                <div>
                  <h3 className={styles.serviceTitle}>🔄 Otomasyon</h3>
                  <p className={styles.serviceDesc}>Tekrarlayan işleri azaltan, süreci hızlandıran çözümler kuruyoruz.</p>
                </div>
              </div>
              <div className={styles.serviceItem}>
                <div className={styles.serviceIconWrap}><Search size={28} /></div>
                <div>
                  <h3 className={styles.serviceTitle}>📈 SEO</h3>
                  <p className={styles.serviceDesc}>Sitenin bulunmasını sağlıyoruz. Görünmeyen site işe yaramaz.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NASIL ÇALIŞIYORUZ */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitleCenter}>Nasıl ilerliyoruz?</h2>
            <div className={styles.stepsGrid}>
              <div className={styles.stepItem}>
                <div className={styles.stepNum}>1️⃣</div>
                <div className={styles.stepText}>İhtiyacı netleştiriyoruz</div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepNum}>2️⃣</div>
                <div className={styles.stepText}>Gereksiz olanı çıkarıyoruz</div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepNum}>3️⃣</div>
                <div className={styles.stepText}>Sistemi kuruyoruz</div>
              </div>
              <div className={styles.stepItem}>
                <div className={styles.stepNum}>4️⃣</div>
                <div className={styles.stepText}>Test edip teslim ediyoruz</div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJE BLOĞU */}
        <section className={styles.sectionAlt}>
          <div className="container">
            <div className={styles.centerBlock}>
              <h2 className={styles.sectionTitle} style={{ marginBottom: '16px' }}>Yaptığımız işler</h2>
              <p className={styles.sectionSub}>Abartmadan. Olduğu gibi.</p>
              
              <div className={styles.projectsWrapper}>
                <Link href="/projeler" className={styles.projectsLink}>
                  👉 Projelerimizi incele <ArrowRight className={styles.inlineIcon} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* YORUMLAR */}
        <section className={styles.section}>
          <div className="container">
            <h2 className={styles.sectionTitleCenter}>Bizimle çalışanlar ne diyor</h2>
            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialItem}>
                <p>“İşimiz daha düzenli hale geldi.”</p>
              </div>
              <div className={styles.testimonialItem}>
                <p>“Site gerçekten işe yaradı.”</p>
              </div>
              <div className={styles.testimonialItem}>
                <p>“Süreç beklediğimizden daha hızlı ilerledi.”</p>
              </div>
            </div>
          </div>
        </section>

        {/* KAPANIŞ */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaBox}>
              <h2 className={styles.ctaTitle}>İşini düzgün kurmak istiyorsan doğru yerdesin</h2>
              <p className={styles.ctaText}>
                Gereksiz karmaşa olmadan, çalışan bir sistem istiyorsan konuşalım.
              </p>
              <Link href="/teklif-al" className="btn btn-primary btn-lg">
                👉 Başlayalım
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
