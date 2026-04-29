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
    icon: Globe, href: '/kurumsal-web-tasarim', tag: 'Popüler',
    title: 'Kurumsal Web Tasarım',
    desc: 'Markanızı dijitalde güçlü gösteren, hızlı, SEO odaklı ve modern kurumsal web çözümleri geliştiriyoruz.',
    features: ['Modern arayüz tasarımı', 'SEO odaklı altyapı', 'Mobil uyumlu yapı', 'Hızlı yükleme süreleri', 'Yönetim paneli'],
  },
  {
    icon: Target, href: '/google-ads', tag: 'Performans',
    title: 'Google Ads Yönetimi',
    desc: 'Reklam bütçenizi en verimli şekilde yöneterek, hedef kitlenize doğrudan ulaşmanızı ve dönüşüm almanızı sağlıyoruz.',
    features: ['Anahtar kelime analizi', 'Rakip strateji takibi', 'Dönüşüm kurulumu', 'Haftalık raporlama', 'Bütçe optimizasyonu'],
  },
  {
    icon: LayoutDashboard, href: '/hizmetler/ozel-yazilim', tag: 'En Çok Tercih',
    title: 'Özel Yazılım Çözümleri',
    desc: 'İşletmenizin ihtiyaçlarına özel, süreçlerinizi kolaylaştıran ve verimliliği artıran yazılım sistemleri inşa ediyoruz.',
    features: ['Sıfırdan özel kodlama', 'Modüler mimari', 'Güvenli veritabanı', 'API entegrasyonları', 'Ölçeklenebilir yapı'],
  },
  {
    icon: Users, href: '/hizmetler/crm-erp', tag: null,
    title: 'CRM & ERP Sistemleri',
    desc: 'Müşteri ilişkileri ve kaynak yönetimini tek çatı altında toplayan, operasyonel hızı artıran platformlar geliştiriyoruz.',
    features: ['Müşteri takip sistemi', 'Stok & süreç yönetimi', 'Teklif & fatura takibi', 'Ekip yetkilendirme', 'Özel raporlama'],
  },
  {
    icon: Zap, href: '/hizmetler/otomasyon', tag: null,
    title: 'Süreç Otomasyonları',
    desc: 'Tekrarlayan ve zaman alan iş süreçlerinizi otomatiğe bağlayarak hata payını düşürüyor ve zaman tasarrufu sağlıyoruz.',
    features: ['E-posta/SMS otomasyonu', 'Veri senkronizasyonu', 'İş akışı yönetimi', '3. taraf entegrasyonlar', 'Otomatik raporlama'],
  },
  {
    icon: BarChart3, href: '/hizmetler/is-takip', tag: null,
    title: 'İş Takip & Raporlama',
    desc: 'Operasyonel verilerinizi gerçek zamanlı takip eden ve karar almayı kolaylaştıran dijital dashboardlar sunuyoruz.',
    features: ['Anlık veri izleme', 'Performans analizleri', 'Excel/PDF çıktıları', 'Görsel grafikler', 'KPI takibi'],
  },
  {
    icon: Settings, href: '/hizmetler/bakim-destek', tag: null,
    title: 'Bakım & Teknik Destek',
    desc: 'Projelerinizin güvenliğini, performansını ve güncelliğini korumak için düzenli teknik destek ve bakım sağlıyoruz.',
    features: ['Güvenlik güncellemeleri', 'Performans izleme', 'Düzenli yedekleme', 'Hızlı hata giderme', 'Sürekli iyileştirme'],
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
              <Link href="/">Anasayfa</Link>
              <span className="breadcrumb-sep">/</span>
              <span>Hizmetler</span>
            </nav>
            <div className="section-label">Hizmetlerimiz</div>
            <h1 className="section-title" style={{ maxWidth: 700 }}>
              İşletmenizin İhtiyacına Göre<br /><span>Özel Dijital Sistemler</span>
            </h1>
            <p className="section-desc" style={{ maxWidth: 640 }}>
              TRMN Digital olarak hazır şablonlar yerine, işletmenizin operasyonel ihtiyaçlarına ve büyüme hedeflerine özel olarak kurgulanmış profesyonel sistemler geliştiriyoruz.
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
              <p>Projenizi anlatın, size en uygun stratejiyi birlikte belirleyelim. İlk görüşme tamamen ücretsizdir.</p>
              <div className={styles.ctaBtns}>
                <Link href="/teklif-al" className="btn btn-primary btn-lg">
                  Ücretsiz Danışmanlık Alın <ArrowRight size={18} />
                </Link>
                <a href="https://wa.me/905384714674" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                  <MessageCircle size={20} /> WhatsApp ile Sorun
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
