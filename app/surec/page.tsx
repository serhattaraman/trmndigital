import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { Search, FileText, Layers, Code2, TestTube2, Rocket, LifeBuoy, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Proje Süreci | Nasıl Çalışıyoruz? — TRMN Dijital',
  description: '7 adımda web sitesi ve özel yazılım geliştirme sürecimiz. İhtiyaç analizinden yayına almaya kadar şeffaf, öngörülebilir proje yönetimi.',
  alternates: { canonical: 'https://trmndigital.com/surec' },
}

const steps = [
  {
    num: '01', icon: Search,
    title: 'İhtiyaç Analizi',
    desc: 'Proje görüşmesi ile başlıyoruz. İşletmenizin mevcut süreçlerini, dijital hedeflerini ve beklentilerini ayrıntılı şekilde ele alıyoruz.',
    details: ['Detaylı proje keşif görüşmesi', 'Mevcut altyapının değerlendirilmesi', 'Hedef kitle ve kullanıcı analizi', 'Rakip sistem incelmesi', 'Teknik gereksinim listesi'],
  },
  {
    num: '02', icon: FileText,
    title: 'Planlama & Teklif',
    desc: 'Analiz sonrası kapsamlı bir teknik yol haritası, zaman planı ve net fiyat teklifi hazırlıyorum. Her adım yazılı olarak belgelenir.',
    details: ['Yazılı teknik şartname', 'Ayrıntılı zaman planı', 'Sprint bazlı teslimat takvimi', 'Şeffaf fiyat teklifi', 'Sözleşme & mutabakat'],
  },
  {
    num: '03', icon: Layers,
    title: 'Tasarım',
    desc: 'Kullanıcı deneyimini ve marka kimliğini ön planda tutan, mobil uyumlu arayüz tasarımları hazırlanır. Onayınız alınmadan geliştirme başlamaz.',
    details: ['UI/UX tasarımı', 'Wireframe & prototip', 'Marka uyumlu renk paleti', 'Mobil & masaüstü mockup', 'Tasarım revizyon süreci'],
  },
  {
    num: '04', icon: Code2,
    title: 'Geliştirme',
    desc: 'Onaylanan tasarım doğrultusunda temiz, güvenli ve ölçeklenebilir kod yazılır. Düzenli commit ve erişim güncellemeleriyle süreci takip edebilirsiniz.',
    details: ['Modüler, clean kod mimarisi', 'Güvenlik önlemleri', 'Performans odaklı geliştirme', 'Haftalık ilerleme raporu', 'Git versiyon yönetimi'],
  },
  {
    num: '05', icon: TestTube2,
    title: 'Test & Revizyon',
    desc: 'Kapsamlı test senaryolarından geçirilen proje, belirlenen revizyonlarla mükemmelleştirilir. Yayına almadan önce her detay kontrol edilir.',
    details: ['Fonksiyonel test', 'Çapraz cihaz & tarayıcı testi', 'Performans testi', 'Güvenlik taraması', 'Müşteri kabul testi'],
  },
  {
    num: '06', icon: Rocket,
    title: 'Yayına Alma',
    desc: 'Güvenli sunucu kurulumu, domain yönlendirmesi, SSL ve performans optimizasyonu tamamlanarak sistem canlıya alınır.',
    details: ['Sunucu kurulumu & konfigürasyon', 'SSL sertifikası', 'Domain yönlendirmesi', 'SEO temel ayarları', 'Analytics kurulumu'],
  },
  {
    num: '07', icon: LifeBuoy,
    title: 'Destek & Geliştirme',
    desc: 'Proje tesliminde iş bitmez. Güvenlik güncellemeleri, yeni özellik talepleri ve teknik destek için sürekli erişilebilirim.',
    details: ['Periyodik güvenlik güncellemeleri', 'Yeni özellik geliştirme', 'Performans izleme', 'Yedekleme sistemi', '7/24 acil destek hattı'],
  },
]

export default function SurecPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="page-hero">
          <div className="page-hero-bg" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <nav className="breadcrumb"><Link href="/">Ana Sayfa</Link><span className="breadcrumb-sep">/</span><span>Süreç</span></nav>
            <div className="section-label">Çalışma Süreci</div>
            <h1 className="section-title">Projeniz Nasıl <span>Hayata Geçiyor?</span></h1>
            <p className="section-desc">7 adımda şeffaf, öngörülebilir ve profesyonel proje yönetimi. Her adımda ne olduğunu biliyorsunuz.</p>
          </div>
        </div>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div style={{ maxWidth: 860, margin: '0 auto' }}>
              {steps.map((step, i) => (
                <div key={step.num} style={{ display: 'flex', gap: 32, marginBottom: 48 }}>
                  {/* Left */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--accent-glow)', border: '2px solid var(--border-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontSize: 15, fontWeight: 800, color: 'var(--accent)', flexShrink: 0 }}>
                      {step.num}
                    </div>
                    {i < steps.length - 1 && (
                      <div style={{ width: 2, flex: 1, minHeight: 40, background: 'linear-gradient(180deg, var(--border-accent), transparent)', marginTop: 6 }} />
                    )}
                  </div>
                  {/* Content */}
                  <div style={{ flex: 1, paddingBottom: i < steps.length - 1 ? 0 : 0 }}>
                    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '32px', transition: 'all var(--transition)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                        <div style={{ width: 40, height: 40, background: 'var(--accent-glow)', border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                          <step.icon size={18} />
                        </div>
                        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>{step.title}</h2>
                      </div>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 20 }}>{step.desc}</p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 8 }}>
                        {step.details.map(d => (
                          <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
                            <CheckCircle2 size={13} style={{ color: 'var(--success)', flexShrink: 0 }} /> {d}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(129,140,248,0.06))', border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-xl)', padding: 56, textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>Projenizi Başlatalım</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 32 }}>İlk adım bir görüşme. Tamamen ücretsiz, herhangi bir taahhüt gerektirmiyor.</p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/teklif-al" className="btn btn-primary btn-lg">Teklif Alın <ArrowRight size={18} /></Link>
                <Link href="/iletisim" className="btn btn-outline btn-lg">İletişime Geçin</Link>
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
