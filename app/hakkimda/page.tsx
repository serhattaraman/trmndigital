import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { Code2, BarChart3, Shield, Clock, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hakkımda | Serhat Taraman — Özel Yazılım Geliştirici',
  description: 'Diyarbakır merkezli özel yazılım geliştirici Serhat Taraman hakkında. Yönetim paneli, CRM ve özel web sistemi geliştirme uzmanlığı.',
  alternates: { canonical: 'https://trmndigital.com/hakkimda' },
}

const strengths = [
  { icon: Code2, title: 'Sıfırdan Özel Sistem Geliştirme', desc: 'Her projeyi özgün bir çözüm olarak ele alıyorum. Hazır tema veya kalıp yok — yalnızca işinize özel yazılmış, clean, sürdürülebilir kod.' },
  { icon: BarChart3, title: 'Süreç ve Veri Odaklı Yaklaşım', desc: 'Sadece estetik değil, iş süreçleri. Raporlayan, karar almayı kolaylaştıran ve verimliliği artıran sistemler geliştiriyorum.' },
  { icon: Shield, title: 'Güvenilir Teknik Altyapı', desc: 'Güvenli kimlik doğrulama, ölçeklenebilir veritabanı yapısı ve temiz mimari. Teknik borç bırakmadan, uzun vadeli düşünerek geliştiriyorum.' },
  { icon: Clock, title: 'Öngörülebilir Proje Yönetimi', desc: 'Başlangıçta net zaman planı, düzenli ilerleme bildirimi ve teslimatta söz verilen tarihe bağlılık. Sürpriz olmaz.' },
  { icon: MessageSquare, title: 'Net ve Anlaşılır İletişim', desc: 'Teknik jargon değil, anlaşılır Türkçe. Süreci anlıyorsunuz, kararları siz veriyorsunuz — ben en iyi şekilde uyguluyorum.' },
  { icon: CheckCircle2, title: 'Uzun Vadeli Destek Anlayışı', desc: 'Proje tesliminden sonra da yanınızdayım. Yeni özellik ekleme, performans optimizasyonu ve teknik destek için sürekli erişilebilirim.' },
]

const skills = [
  'Özel Yönetim Paneli Geliştirme', 'CRM & Aday Takip Sistemleri',
  'Eğitim Yönetim Yazılımları', 'Raporlama Dashboard\'ları',
  'Form & Başvuru Sistemleri', 'API Entegrasyonları',
  'Otomasyon Çözümleri', 'Kurumsal Web Siteleri',
  'Google Ads Landing Page', 'SEO Odaklı Altyapı',
  'Veritabanı Tasarımı', 'Süreç Dijitalleştirme',
]

export default function HakkimdaPage() {
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
              <span>Hakkımda</span>
            </nav>
          </div>
        </div>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 64, alignItems: 'start', marginBottom: 80 }}>
              {/* Profile */}
              <div style={{ position: 'sticky', top: 100 }}>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 36, textAlign: 'center' }}>
                  <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'var(--accent-glow)', border: '3px solid var(--border-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-heading)' }}>ST</div>
                  <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 4 }}>Serhat Taraman</h1>
                  <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600, marginBottom: 12 }}>Özel Yazılım Geliştirici</p>
                  <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 24 }}>📍 Şeyh Şamil, Bağlar/Diyarbakır</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
                    {[['5+', 'Yıl Deneyim'], ['30+', 'Proje'], ['100%', 'Memnuniyet']].map(([n, l]) => (
                      <div key={l} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '12px 8px', textAlign: 'center' }}>
                        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent)' }}>{n}</div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{l}</div>
                      </div>
                    ))}
                  </div>
                  <Link href="/teklif-al" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Proje Başlatalım <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="section-label">Hakkımda</div>
                <h2 className="section-title" style={{ marginBottom: 24 }}>
                  &quot;Site Yaparım&quot; Değil,<br /><span>&quot;Sisteminizi Geliştiririm&quot;</span>
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    'İşletmelerin dijital dönüşümüne öncülük etmek, sıradan bir web sitesi yapmaktan çok farklıdır. Kurumun iç süreçlerini anlamak, veri akışını kavramak ve bu yapıyı yazılıma dönüştürmek — bu benim uzmanlık alanım.',
                    'Yönetim paneli, CRM, iş takip sistemi, eğitim yönetimi, raporlama platformu… Bunlar; dışarıdan basit görünen ama içinde işletmenin tüm sinir sistemini barındıran yazılımlardır. Bu sistemleri geliştirirken sadece teknik değil, iş sürecini de anlayarak hareket ediyorum.',
                    'Her proje benim için özgündür. Müşteriyle uzun bir ihtiyaç analizi yaparak başlıyorum, ortak bir dil kuruyorum ve projenin sonunda yalnızca yazılım değil, bir çalışma altyapısı teslim ediyorum.',
                    'Diyarbakır\'dan hizmet vermekle birlikte, Türkiye genelinde pek çok kurum ve işletmeyle çalışıyorum. Uzaktan iletişim, şeffaf süreç yönetimi ve düzenli raporlama ile fiziksel mesafeyi hissettirmeden çalışıyoruz.',
                  ].map((p, i) => (
                    <p key={i} style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>{p}</p>
                  ))}
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', margin: '36px 0 16px' }}>
                  Uzmanlık Alanlarım
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {skills.map(s => (
                    <span key={s} style={{ background: 'var(--accent-glow)', border: '1px solid var(--border-accent)', color: 'var(--accent-light)', fontSize: 13, fontWeight: 500, padding: '6px 14px', borderRadius: 100 }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Strengths Grid */}
            <div className="section-label" style={{ marginBottom: 20 }}>Güçlü Yönlerim</div>
            <h2 className="section-title" style={{ marginBottom: 40 }}>Seçmeniz İçin <span>İyi Sebepler</span></h2>
            <div className="grid-3">
              {strengths.map(s => (
                <div key={s.title} className="card">
                  <div className="feature-icon"><s.icon size={20} /></div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 64, background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(129,140,248,0.06))', border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-xl)', padding: 48, textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>Projenizi Konuşalım</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 28, maxWidth: 500, margin: '0 auto 28px' }}>
                İlk görüşme ücretsiz. Aklınızdaki sistemi anlatın, size özel bir yol haritası çıkaralım.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/teklif-al" className="btn btn-primary btn-lg">
                  Teklif Al <ArrowRight size={18} />
                </Link>
                <Link href="/surec" className="btn btn-outline btn-lg">
                  Çalışma Sürecim
                </Link>
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
