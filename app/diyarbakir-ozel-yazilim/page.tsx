import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { Code2, Database, Shield, CheckCircle2, ArrowRight, MessageCircle, LayoutDashboard } from 'lucide-react'
import styles from '../hizmetler/page.module.css'

export const metadata = {
  title: 'Diyarbakır Özel Yazılım | İşletmenize Özel Yazılım Çözümleri',
  description: 'Diyarbakır özel yazılım şirketi TRMN Digital; CRM, ERP, yönetim panelleri ve süreç otomasyonları geliştirir. İşletmenizin verimliliğini artırın.',
  alternates: { canonical: 'https://trmndigital.com/diyarbakir-ozel-yazilim' },
}

export default function DiyarbakirOzelYazilimPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="page-hero">
          <div className="page-hero-bg" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-label">Diyarbakır Yazılım Şirketi</div>
            <h1 className="section-title">
              Diyarbakır <span>Özel Yazılım</span> Geliştirme Hizmetleri
            </h1>
            <p className="section-desc">
              Karmaşık iş süreçlerinizi basitleştiren, verimliliğinizi artıran ve işletmenize özel kurgulanan profesyonel yazılım sistemleri geliştiriyoruz.
            </p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', marginBottom: 80 }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 24, color: 'var(--text-primary)' }}>
                  Diyarbakır'da <br /><span>Yazılım Ortağınız</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>
                  İşletmeniz büyüdükçe hazır paket yazılımlar yetersiz kalmaya başlar. TRMN Digital olarak Diyarbakır'daki firmalara özel; CRM, ERP, iş takip ve raporlama sistemleri geliştirerek operasyonel yükü hafifletiyoruz. Modern yazılım mimarileri ile geleceğe hazır, güvenli ve ölçeklenebilir sistemler sunuyoruz.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  {[
                    { icon: LayoutDashboard, title: 'CRM & ERP' },
                    { icon: Database, title: 'Süreç Takibi' },
                    { icon: Shield, title: 'Veri Güvenliği' },
                    { icon: Code2, title: 'API Entegrasyonu' }
                  ].map(item => (
                    <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ color: 'var(--accent)' }}><item.icon size={20} /></div>
                      <span style={{ fontSize: 15, fontWeight: 600 }}>{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-2xl)', padding: 48 }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: 24 }}>Neler Geliştiriyoruz?</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 0 }}>
                    {[
                      'Müşteri ve Aday Takip Sistemleri (CRM)',
                      'Personel ve İş Akışı Yönetimi',
                      'Finans ve Stok Takip Platformları',
                      'Raporlama ve Analiz Dashboard\'ları',
                      '3. Parti Servis Entegrasyonları (SMS, Ödeme vb.)'
                    ].map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'var(--text-secondary)' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--accent)' }} /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/teklif-al" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: 32 }}>
                    Ücretsiz Analiz İsteyin <ArrowRight size={18} />
                  </Link>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <h2 className="section-title">Teknik <span>Otoritemiz</span></h2>
                <p className="section-desc">En güncel teknolojilerle sürdürülebilir kod mimarisi inşa ediyoruz.</p>
            </div>
            
            <div className="grid-3">
              {[
                { title: 'Modern Teknoloji', desc: 'React, Next.js, Node.js ve Python gibi güçlü ve hızlı dillerle geliştirme.' },
                { title: 'Güvenli Altyapı', desc: 'Verilerinizin güvenliğini en üst düzeyde tutan yetkilendirme ve şifreleme.' },
                { title: 'Ölçeklenebilir Kod', desc: 'İşletmeniz büyüdükçe kolayca genişleyebilen modüler yazılım yapısı.' }
              ].map(s => (
                <div key={s.title} className="card">
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{s.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 80, background: 'linear-gradient(135deg, rgba(239,68,68,0.05), rgba(0,0,0,0))', borderRadius: 'var(--radius-2xl)', padding: 64, textAlign: 'center', border: '1px solid var(--border)' }}>
              <h2 style={{ marginBottom: 16 }}>Diyarbakır'da Yazılım Çözümleri İçin Doğru Adres</h2>
              <p style={{ maxWidth: 600, margin: '0 auto 32px', color: 'var(--text-secondary)' }}>İşletmenizin ihtiyaçlarını birlikte belirleyelim. Süreçlerinizi dijitale taşımak için biz hazırız.</p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://wa.me/905384714674" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                  <MessageCircle size={20} /> Projenizi Anlatın
                </a>
                <Link href="/projeler" className="btn btn-outline btn-lg">
                  Neler Geliştirdik?
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
