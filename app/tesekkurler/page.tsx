import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Teşekkürler! Mesajınız Alındı | TRMN Dijital',
  description: 'Mesajınız başarıyla alındı. 24 saat içinde size geri döneceğim.',
  robots: { index: false },
}

export default function TesekkurlerPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px 80px' }}>
        <div style={{ maxWidth: 600, width: '100%', textAlign: 'center' }}>
          <div style={{ width: 80, height: 80, background: 'rgba(16,185,129,0.12)', border: '2px solid rgba(16,185,129,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px', color: '#10B981' }}>
            <CheckCircle2 size={36} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>
            Mesajınız Alındı!
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 32 }}>
            Projenizi inceleyeceğim ve <strong style={{ color: 'var(--text-primary)' }}>24 saat içinde</strong> size detaylı bir değerlendirme ve teklif sunacağım. 
            Daha hızlı yanıt için WhatsApp üzerinden de ulaşabilirsiniz.
          </p>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '28px 32px', marginBottom: 32 }}>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 4 }}>Beklenen yanıt süresi</p>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)' }}>En geç 24 saat</p>
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-outline btn-lg">Ana Sayfaya Dön</Link>
            <a href="https://wa.me/905384714674" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
              <MessageCircle size={18} /> WhatsApp&apos;tan Yaz
            </a>
            <Link href="/projeler" className="btn btn-ghost btn-lg">
              Projeleri İncele <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
