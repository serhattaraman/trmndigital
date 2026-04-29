import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { Target, Search, BarChart3, TrendingUp, Users, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react'

import styles from './google-ads.module.css'

export const metadata: Metadata = {
  title: 'Google Ads Yönetimi | TRMN Digital — Performans Odaklı Reklamcılık',
  description: 'Google Ads bütçenizi doğru hedefe yönlendirin. TRMN Digital ile profesyonel anahtar kelime analizi, dönüşüm takibi ve kampanya yönetimi.',
  alternates: { canonical: 'https://trmndigital.com/google-ads' },
}

const services = [
  { icon: Search, title: 'Anahtar Kelime Analizi', desc: 'İşletmeniz için en yüksek dönüşüm potansiyeline sahip kelimeleri belirliyor, maliyetlerinizi optimize ediyoruz.' },
  { icon: Target, title: 'Rakip Analizi', desc: 'Rakiplerinizin reklam stratejilerini analiz ederek, pazar payınızı artıracak hamleler geliştiriyoruz.' },
  { icon: TrendingUp, title: 'Kampanya Kurulumu', desc: 'Arama ağı, görüntülü reklam ve yeniden pazarlama kampanyalarınızı profesyonelce kurguluyoruz.' },
  { icon: CheckCircle2, title: 'Dönüşüm Takibi', desc: 'Sadece tıklamaları değil, gerçek satışları ve form başvurularını ölçümlüyor, performansı raporluyoruz.' },
  { icon: MessageCircle, title: 'Reklam Metni Oluşturma', desc: 'Tıklama oranını artıracak, ikna edici ve markanızın dilini yansıtan metinler hazırlıyoruz.' },
  { icon: BarChart3, title: 'Performans Raporlama', desc: 'Kampanyalarınızın gelişimini şeffaf bir şekilde paylaşıyor, stratejimizi verilere göre güncelliyoruz.' },
]

export default function GoogleAdsPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="page-hero">
          <div className="page-hero-bg" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <nav className="breadcrumb">
              <Link href="/">Anasayfa</Link>
              <span className="breadcrumb-sep">/</span>
              <span>Google Ads</span>
            </nav>
            <div className={styles.heroContent}>
              <div className="section-label">Google Ads Yönetimi</div>
              <h1 className="section-title">
                Reklam bütçenizi <span>doğru hedefe yönlendiriyoruz</span>
              </h1>
              <p className="section-desc" style={{ marginBottom: 32 }}>
                TRMN Digital olarak Google Ads kampanyalarınızı sadece reklam yayına almak için değil, doğru müşteriye ulaşmak, dönüşüm almak ve bütçenizi verimli kullanmak için planlıyoruz.
              </p>
              <div className={styles.ctaBtns}>
                <Link href="/teklif-al" className="btn btn-primary btn-lg">Ücretsiz Analiz İsteyin</Link>
                <a href="https://wa.me/905384714674" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                  <MessageCircle size={20} /> WhatsApp ile Sorun
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="section">
          <div className="container">
            <div className={styles.intro}>
              <div>
                <h2 className={`section-title ${styles.introTitle}`}>Google Ads <span>Nedir?</span></h2>
                <p className={styles.introText}>
                  Google Ads, işletmenizin ürün veya hizmetlerini tam olarak arayan kişilere ulaşmasını sağlayan dünyanın en güçlü reklam platformudur. Doğru yönetildiğinde, her kuruşun karşılığını yeni müşteriler olarak almanızı sağlar.
                </p>
                <h3 className={styles.introListTitle}>Kimler İçin Uygundur?</h3>
                <ul className={styles.introList}>
                  {[
                    'Yeni müşteri bulmak isteyen işletmeler',
                    'Marka bilinirliğini artırmak isteyen kurumlar',
                    'Belirli bir hizmeti öne çıkarmak isteyen ajanslar',
                    'Dönüşüm odaklı büyüme hedefleyen markalar'
                  ].map(item => (
                    <li key={item} className={styles.introListItem}>
                      <CheckCircle2 size={18} style={{ color: 'var(--accent)' }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.visual}>
                <div className={styles.statsCard}>
                  <div className={styles.progressWrap}>
                    <div className={styles.progressLabel}>Aylık Büyüme Hedefi</div>
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill} />
                    </div>
                  </div>
                  <div className={styles.miniStats}>
                    <div className={styles.miniStatItem}>
                      <div className={styles.miniStatValue}>%40</div>
                      <div className={styles.miniStatLabel}>Daha Fazla Dönüşüm</div>
                    </div>
                    <div className={styles.miniStatItem}>
                      <div className={styles.miniStatValue}>-%25</div>
                      <div className={styles.miniStatLabel}>Maliyet Azalışı</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-label">Hizmet Kapsamımız</div>
            <h2 className="section-title" style={{ marginBottom: 48 }}>Google Ads Sürecinde <span>Neler Yapıyoruz?</span></h2>
            <div className="grid-3">
              {services.map(s => (
                <div key={s.title} className="card">
                  <div className="feature-icon"><s.icon size={20} /></div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>

            <div className={styles.bottomCta}>
              <div className="section-label">Neden TRMN Digital?</div>
              <h2 className="section-title">Paranızı Değil, <span>Geleceğinizi Yönetiyoruz</span></h2>
              <p className={styles.bottomCtaText}>
                Biz sadece reklam yayına almıyoruz. İşletmenizin karlılığını artırmak için veri analizi yapıyor, sürekli optimizasyon sağlıyor ve harcadığınız her bütçenin karşılığını raporluyoruz.
              </p>
              <div className={styles.ctaBtns}>
                <Link href="/teklif-al" className="btn btn-primary btn-lg">Hemen Başlayalım</Link>
                <Link href="/iletisim" className="btn btn-outline btn-lg">Bizimle İletişime Geçin</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
