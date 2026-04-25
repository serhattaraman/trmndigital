import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | TRMN Dijital',
  description: 'TRMN Dijital web sitesi gizlilik politikası ve kişisel veri işleme hakkında bilgilendirme.',
  alternates: { canonical: 'https://trmndigital.com/gizlilik-politikasi' },
  robots: { index: false },
}

export default function GizlilikPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '120px 0 80px' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <nav className="breadcrumb"><Link href="/">Ana Sayfa</Link><span className="breadcrumb-sep">/</span><span>Gizlilik Politikası</span></nav>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', margin: '24px 0 8px' }}>Gizlilik Politikası</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 48 }}>Son güncelleme: Nisan 2025</p>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '40px 48px', display: 'flex', flexDirection: 'column', gap: 28 }}>
            {[
              { title: '1. Toplanan Bilgiler', content: 'Web sitemizi ziyaret ettiğinizde veya iletişim formunu doldurduğunuzda ad-soyad, telefon numarası, e-posta adresi ve proje açıklaması gibi bilgiler toplanabilir. Bu bilgiler yalnızca proje değerlendirmesi ve iletişim amaçlı kullanılır.' },
              { title: '2. Bilgilerin Kullanımı', content: 'Toplanan kişisel bilgiler; proje teklifleri hazırlamak, iletişim kurmak ve hizmet sunmak amacıyla kullanılır. Bilgileriniz hiçbir üçüncü tarafla ticari amaçla paylaşılmaz.' },
              { title: '3. Çerezler', content: 'Sitemiz, temel site işlevselliği ve analitik amaçlarla çerez kullanabilir. Çerezleri tarayıcı ayarlarınızdan yönetebilirsiniz. Çerezler hakkında detaylı bilgi için KVKK sayfamızı inceleyebilirsiniz.' },
              { title: '4. Veri Güvenliği', content: 'Kişisel verilerinizin güvenliği için uygun teknik ve idari önlemler alınmaktadır. Verileriniz, güvenli sunucular üzerinde saklanmakta ve yetkisiz erişime karşı korunmaktadır.' },
              { title: '5. Haklarınız', content: 'KVKK kapsamında verilerinize erişim, düzeltme, silme ve işlemeye itiraz haklarına sahipsiniz. Bu haklarınızı kullanmak için serhat_212048@hotmail.com adresine yazabilirsiniz.' },
              { title: '6. İletişim', content: 'Gizlilik politikamız hakkında sorularınız için: serhat_212048@hotmail.com — Serhat Taraman, Bağlar / Diyarbakır' },
            ].map(section => (
              <div key={section.title}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10 }}>{section.title}</h2>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8 }}>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
