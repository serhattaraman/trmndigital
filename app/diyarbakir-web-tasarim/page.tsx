import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { Monitor, Search, Zap, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react'
import styles from '../hizmetler/page.module.css'

export const metadata = {
  title: 'Diyarbakır Web Tasarım | Profesyonel Kurumsal Web Siteleri',
  description: 'Diyarbakır web tasarım ajansı TRMN Digital ile hızlı, modern ve SEO uyumlu web sitelerine sahip olun. İşletmenizi dijital dünyada öne çıkarın.',
  alternates: { canonical: 'https://trmndigital.com/diyarbakir-web-tasarim' },
}

export default function DiyarbakirWebTasarimPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="page-hero">
          <div className="page-hero-bg" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-label">Diyarbakır Yerel Çözümler</div>
            <h1 className="section-title">
              Diyarbakır <span>Web Tasarım</span> ve Dijital Ajans Hizmetleri
            </h1>
            <p className="section-desc">
              Diyarbakır'daki işletmenizi dijital dünyada bir adım öne taşıyoruz. Hazır şablonlar değil, markanıza değer katan, hızlı ve dönüşüm odaklı web siteleri inşa ediyoruz.
            </p>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', marginBottom: 80 }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: 24, color: 'var(--text-primary)' }}>
                  Neden Diyarbakır'da <br /><span>Bizi Seçmelisiniz?</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>
                  TRMN Digital olarak, sadece bir web sitesi yapmıyoruz. İşletmenizin operasyonel süreçlerini anlıyor, hedef kitlenizi analiz ediyor ve bu verilere dayanarak satışlarınızı artıracak dijital platformlar kuruyoruz. Diyarbakır web tasarım pazarında modern teknolojileri (Next.js, React) kullanan nadir ajanslardan biriyiz.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: 0 }}>
                  {[
                    'Yüksek Hız ve Google (LCP) Performansı',
                    'Mobil Uyumlu (Responsive) Tasarım',
                    'Arama Motoru Optimizasyonu (SEO) Altyapısı',
                    'Özel Yönetim Paneli ile Kolay Güncelleme',
                    'Kesintisiz Teknik Destek ve Bakım'
                  ].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: 'var(--text-primary)', fontWeight: 500 }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--accent)' }} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-2xl)', padding: 48, textAlign: 'center' }}>
                  <div style={{ width: 80, height: 80, background: 'var(--accent-glow)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--accent)' }}>
                    <Monitor size={40} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 16 }}>Dönüşüm Odaklı Tasarım</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>Sadece estetik değil, aynı zamanda kullanıcıyı harekete geçiren (CTA) stratejik yapılar.</p>
                  <Link href="/teklif-al" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    Hemen Teklif Alın <ArrowRight size={18} />
                  </Link>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <h2 className="section-title">Hangi Sektörlere <span>Hizmet Veriyoruz?</span></h2>
                <p className="section-desc">Diyarbakır'da farklı sektörlerden onlarca işletme ile çalışıyoruz.</p>
            </div>
            
            <div className="grid-3">
              {[
                { title: 'Kurumsal Firmalar', desc: 'Profesyonel kimliğinizi yansıtan prestijli web siteleri.' },
                { title: 'Yerel İşletmeler', desc: 'Bölgesel aramada (Local SEO) üst sıralarda çıkan yapılar.' },
                { title: 'E-Ticaret', desc: 'Diyarbakır\'dan Türkiye\'ye satış yapmanızı sağlayan sistemler.' }
              ].map(s => (
                <div key={s.title} className="card">
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{s.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 80, background: 'var(--bg-secondary)', borderRadius: 'var(--radius-2xl)', padding: 64, textAlign: 'center', border: '1px solid var(--border)' }}>
              <h2 style={{ marginBottom: 16 }}>Diyarbakır'ın Dijital Dönüşüm Ortağı</h2>
              <p style={{ maxWidth: 600, margin: '0 auto 32px', color: 'var(--text-secondary)' }}>Projenizi profesyonel bir ekiple, zamanında ve eksiksiz teslim almak için bugün bizimle iletişime geçin.</p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://wa.me/905384714674" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                  <MessageCircle size={20} /> WhatsApp ile Sorun
                </a>
                <Link href="/iletisim" className="btn btn-outline btn-lg">
                  Bizimle Tanışın
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
