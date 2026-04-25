import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { Globe, LayoutDashboard, BarChart3, Users, GraduationCap, Zap, FileText, Target, Settings, Search, ArrowRight, CheckCircle2 } from 'lucide-react'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Hizmetler | Özel Yazılım, Yönetim Paneli, Kurumsal Web Sitesi',
  description: 'Özel web yazılımı, yönetim paneli, CRM, iş takip sistemleri, eğitim yönetimi, otomasyon ve kurumsal web sitesi hizmetleri. Diyarbakır ve Türkiye geneli.',
  alternates: { canonical: 'https://trmndigital.com/hizmetler' },
}

const services = [
  {
    icon: Globe, href: '/hizmetler/kurumsal-web-sitesi', tag: 'Popüler',
    title: 'Kurumsal Web Sitesi Geliştirme',
    desc: 'Firmanızın dijital kimliğini temsil eden, SEO odaklı, hızlı ve güven veren profesyonel kurumsal siteler.',
    features: ['SEO odaklı altyapı', 'Yönetim paneli', 'Mobil uyumlu', 'Hızlı yükleme', 'Google Ads uyumlu'],
  },
  {
    icon: LayoutDashboard, href: '/hizmetler/yonetim-paneli', tag: 'En Çok Tercih',
    title: 'Özel Yönetim Paneli Geliştirme',
    desc: 'İşletmenizin tüm verilerini, süreçlerini ve ekibini tek ekrandan yönetebileceğiniz özel admin panelleri.',
    features: ['Rol tabanlı yetkilendirme', 'Gerçek zamanlı veriler', 'Özel raporlar', 'Bildirim sistemi', 'Mobil uyumlu'],
  },
  {
    icon: BarChart3, href: '/hizmetler/is-takip-raporlama', tag: null,
    title: 'İş Takip & Raporlama Sistemleri',
    desc: 'Operasyonel verilerinizi anlık izleyin, filtreleyin ve dışa aktarın. Kararları veriye dayalı alın.',
    features: ['Gerçek zamanlı dashboard', 'Excel/PDF export', 'Tarihsel analiz', 'KPI takibi', 'Özel filtreler'],
  },
  {
    icon: Users, href: '/hizmetler/crm-operasyon', tag: null,
    title: 'CRM / Aday Takip / Operasyon Panelleri',
    desc: 'Müşteri ilişkileri, satış süreci, aday takibi ve iş akışlarını tek çatı altında yöneten sistemler.',
    features: ['Müşteri veritabanı', 'Durum takibi', 'Otomatik bildirim', 'Görev yönetimi', 'İletişim geçmişi'],
  },
  {
    icon: GraduationCap, href: '/hizmetler/egitim-yonetim', tag: null,
    title: 'Eğitim & Kurs Yönetim Sistemleri',
    desc: 'Öğrenci, öğretmen, kurs ve hakediş yönetimini kapsayan, eğitim kurumlarına özel dijital platformlar.',
    features: ['Öğrenci takibi', 'Devam yönetimi', 'Hakediş hesaplama', 'Veli bildirim', 'Online kayıt'],
  },
  {
    icon: FileText, href: '/hizmetler/form-basvuru', tag: null,
    title: 'Form, Başvuru & Veri Toplama',
    desc: 'Başvuru, kayıt ve anket süreçlerinizi dijitalleştiren, verileri otomatik işleyen akıllı form sistemleri.',
    features: ['Çok adımlı formlar', 'Dosya yükleme', 'Otomatik e-posta', 'Veri tabanlı kayıt', 'PDF çıktı'],
  },
  {
    icon: Zap, href: '/hizmetler/otomasyon', tag: null,
    title: 'Otomasyon & Entegrasyon Çözümleri',
    desc: 'Tekrarlayan iş süreçlerini otomatize edin. Farklı sistemleri birbirine entegre edin, zaman ve kaynak kazanın.',
    features: ['API entegrasyonları', 'Otomatik raporlama', 'E-posta/SMS otomasyonu', 'Webhook yapıları', '3. taraf sistemler'],
  },
  {
    icon: Target, href: '/hizmetler/landing-page', tag: null,
    title: 'Google Ads Dönüşüm Odaklı Landing Page',
    desc: 'Reklam trafiğini müşteriye çeviren, A/B test uyumlu, performans odaklı açılış sayfaları.',
    features: ['Yüksek dönüşüm tasarımı', 'Hızlı yükleme', 'A/B test uyumlu', 'GA4 hazır', 'Form optimizasyonu'],
  },
  {
    icon: Search, href: '/hizmetler/seo-tanitim', tag: null,
    title: 'SEO Uyumlu Profesyonel Tanıtım Siteleri',
    desc: 'Organik aramada üst sıralarda yer alan, yerel SEO\'ya uyumlu, kaliteli içerikli kurumsal siteler.',
    features: ['Teknik SEO', 'İçerik stratejisi', 'Yerel SEO', 'Schema markup', 'Hız optimizasyonu'],
  },
  {
    icon: Settings, href: '/hizmetler/bakim-destek', tag: null,
    title: 'Bakım, Güncelleme & Teknik Destek',
    desc: 'Mevcut projenizin güvenliğini, performansını ve güncelliğini koruyan düzenli bakım hizmetleri.',
    features: ['Güvenlik güncellemeleri', 'Performans izleme', 'Yedekleme', 'Hata giderme', 'Yeni özellik'],
  },
]

export default function HizmetlerPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="page-hero">
          <div className="page-hero-bg" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <nav className="breadcrumb">
              <Link href="/">Ana Sayfa</Link>
              <span className="breadcrumb-sep">/</span>
              <span>Hizmetler</span>
            </nav>
            <div className="section-label">Hizmetler</div>
            <h1 className="section-title" style={{ maxWidth: 700 }}>
              İşletmenizin İhtiyacına Göre<br /><span>Özel Yazılım Çözümleri</span>
            </h1>
            <p className="section-desc" style={{ maxWidth: 640 }}>
              Hazır şablonlar değil, gerçek sistem geliştirme. Her hizmet, işletmenizin
              operasyonel ihtiyaçlarına ve büyüme hedeflerine göre kurgulanır.
            </p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className={styles.grid}>
              {services.map((s) => (
                <div key={s.href} className={styles.serviceCard}>
                  {s.tag && <div className={styles.tag}>{s.tag}</div>}
                  <div className={styles.cardTop}>
                    <div className={styles.icon}><s.icon size={24} /></div>
                    <h2 className={styles.cardTitle}>{s.title}</h2>
                    <p className={styles.cardDesc}>{s.desc}</p>
                  </div>
                  <ul className={styles.features}>
                    {s.features.map(f => (
                      <li key={f} className={styles.feature}>
                        <CheckCircle2 size={14} className={styles.featureIcon} /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={s.href} className={`btn btn-outline ${styles.cardBtn}`}>
                    Detaylı İncele <ArrowRight size={15} />
                  </Link>
                </div>
              ))}
            </div>

            <div className={styles.ctaBox}>
              <h2>Hangi Hizmete İhtiyacınız Olduğundan Emin Değil misiniz?</h2>
              <p>Projenizi anlatın, size en uygun çözümü birlikte belirleyelim. İlk görüşme tamamen ücretsiz.</p>
              <div className={styles.ctaBtns}>
                <Link href="/teklif-al" className="btn btn-primary btn-lg">
                  Ücretsiz Danışma Al <ArrowRight size={18} />
                </Link>
                <a href="https://wa.me/905XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                  WhatsApp ile Sor
                </a>
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
