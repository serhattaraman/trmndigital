import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { CheckCircle2, MessageCircle, ArrowRight, Smartphone, Zap, Search, Shield, Globe, Rocket, Monitor } from 'lucide-react'

import styles from './kurumsal-web.module.css'

export const metadata: Metadata = {
  title: 'Kurumsal Web Tasarım | Markanızı Dijitalde Güçlendirin — TRMN Digital',
  description: 'Markanızı dijitalde güçlü gösteren kurumsal web siteleri. Mobil uyumlu, hızlı, SEO odaklı ve modern tasarım çözümleri. Profesyonel dijital kimliğinizi birlikte inşa edelim.',
  alternates: { canonical: 'https://trmndigital.com/kurumsal-web-tasarim' },
}

const packages = [
  {
    title: 'Başlangıç Web Paketi',
    desc: 'Hizmetlerinizi ve markanızı dijitalde temsil edecek sade ve profesyonel çözüm.',
    features: [
      'Tek sayfa veya az sayfalı tanıtım sitesi',
      'Mobil uyumlu (Responsive) tasarım',
      'WhatsApp hızlı iletişim butonu',
      'Temel SEO ayarları',
      'Hızlı teslimat (7 iş günü)',
      'SSL güvenlik sertifikası'
    ],
    cta: 'Teklif Al',
    highlight: false
  },
  {
    title: 'Kurumsal Web Paketi',
    desc: 'Rakiplerinizin önünde yer alan, geniş içerikli ve tam kapsamlı kurumsal çözüm.',
    features: [
      'Çok sayfalı kurumsal web yapısı',
      'Hakkımızda, Hizmetler, SSS, İletişim',
      'SEO uyumlu içerik altyapısı',
      'Gelişmiş iletişim formları',
      'Modern animasyonlar & geçişler',
      'Analytics & Search Console kurulumu'
    ],
    cta: 'Hemen Başlayalım',
    highlight: true
  },
  {
    title: 'Premium Dijital Sistem Paketi',
    desc: 'Sadece bir web sitesi değil, bir satış ve başvuru sistemi arayan markalar için.',
    features: [
      'Tamamen özel arayüz tasarımı',
      'Gelişmiş teklif / başvuru sistemleri',
      'İş süreçlerine özel otomasyonlar',
      'Chatbot & Lead toplama sistemi',
      'Dönüşüm ve performans odaklı yapı',
      'Öncelikli teknik destek'
    ],
    cta: 'Proje Başlat',
    highlight: false
  }
]

export default function KurumsalWebTasarimPage() {
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
              <span>Kurumsal Web Tasarım</span>
            </nav>
            <div className={styles.heroContent}>
              <div className="section-label">Kurumsal Web Tasarım</div>
              <h1 className="section-title">
                Markanızı dijitalde <span>güçlü gösteren</span> kurumsal web siteleri
              </h1>
              <p className="section-desc">
                TRMN Digital olarak işletmenizin güven veren, hızlı açılan, mobil uyumlu ve dönüşüm odaklı bir web sitesine sahip olması için modern web tasarım çözümleri geliştiriyoruz.
              </p>
              <div className={styles.heroBtns}>
                <Link href="/teklif-al" className="btn btn-primary btn-lg">Projenize Teklif Alın</Link>
                <a href="https://wa.me/905384714674" className="btn btn-whatsapp btn-lg">
                  <MessageCircle size={20} /> Paket Bilgisi Alın <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Importance Section */}
        <section className="section">
          <div className="container">
            <div className={styles.importanceHeader}>
              <div className="section-label">Neden Önemli?</div>
              <h2 className="section-title">Sadece Tasarım Değil, <span>Güven Veren Dijital Kimlik</span></h2>
              <p className={styles.importanceText}>
                İşletmenizin web sitesi, dijital dünyadaki genel merkezinizdir. İlk izlenim saniyeler içinde oluşur. Profesyonel olmayan bir site, potansiyel müşterilerin rakiplerinize gitmesine neden olur.
              </p>
            </div>

            <div className="grid-3" style={{ gap: 32 }}>
              {[
                { icon: Shield, title: 'Güven İnşası', desc: 'Modern ve temiz bir tasarım, müşterilerinizde "profesyonel işletme" algısı yaratır.' },
                { icon: Smartphone, title: 'Mobil Uyumluluk', desc: 'Ziyaretçilerinizin %80\'den fazlası mobilde. Siteniz her cihazda kusursuz çalışmalı.' },
                { icon: Zap, title: 'Yüksek Hız', desc: 'Hızlı açılan sayfalar kullanıcıyı tutar ve Google sıralamanızı yükseltir.' },
                { icon: Search, title: 'SEO Uyumlu Yapı', desc: 'Kodlama aşamasından itibaren Google\'ın seveceği bir altyapı kuruyoruz.' },
                { icon: MessageCircle, title: 'Dönüşüm Odaklılık', desc: 'WhatsApp ve form entegrasyonları ile ziyaretçileri müşteriye dönüştürüyoruz.' },
                { icon: Monitor, title: 'Yönetilebilir Yapı', desc: 'Sitenizi kolayca güncelleyebileceğiniz modern bir panel sağlıyoruz.' }
              ].map(item => (
                <div key={item.title} className="card">
                  <div className="feature-icon"><item.icon size={20} /></div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>{item.title}</h3>
                  <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="section" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className={styles.packagesHeader}>
              <div className="section-label">Paketler</div>
              <h2 className="section-title">Size Uygun <span>Çözümü Seçin</span></h2>
              <p style={{ color: 'var(--text-secondary)' }}>İhtiyacınıza en uygun paketi seçin, profesyonel dönüşümü başlatalım.</p>
            </div>

            <div className={styles.packageGrid}>
              {packages.map(pkg => (
                <div key={pkg.title} className={`${styles.packageCard} ${pkg.highlight ? styles.highlight : ''}`}>
                  {pkg.highlight && (
                    <div className={styles.popularBadge}>
                      Popüler Seçim
                    </div>
                  )}
                  <h3 className={styles.packageTitle}>{pkg.title}</h3>
                  <p className={styles.packageDesc}>{pkg.desc}</p>
                  <div className={styles.featureListWrap}>
                    <ul className={styles.featureList}>
                      {pkg.features.map(f => (
                        <li key={f} className={styles.featureItem}>
                          <CheckCircle2 size={16} className={styles.featureIcon} /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.packageFooter}>
                    <span className={styles.packageNote}>Projenize göre teklif alın</span>
                  </div>
                  <Link href="/teklif-al" className={`btn ${pkg.highlight ? 'btn-primary' : 'btn-outline'} ${styles.packageBtn}`}>
                    {pkg.cta}
                  </Link>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>* E-Ticaret çözümlerimiz için lütfen ayrıca iletişime geçin.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section">
          <div className="container">
            <div className={styles.finalCtaBox}>
              <div className={styles.finalCtaGlow} />
              <Rocket size={48} className={styles.finalCtaIcon} />
              <h2 className="section-title">Sektörünüzde <span>Lider Olmaya</span> Hazır Mısınız?</h2>
              <p className={styles.finalCtaText}>
                Hemen ücretsiz bir görüşme planlayalım. İşinizi dijitalde nasıl daha iyi temsil edebileceğimizi konuşalım.
              </p>
              <div className={styles.finalCtaBtns}>
                <Link href="/teklif-al" className="btn btn-primary btn-lg">Hemen Teklif Alın</Link>
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
