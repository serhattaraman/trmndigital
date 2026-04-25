import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'KVKK & Çerez Politikası | TRMN Dijital',
  description: 'Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aydınlatma metni ve çerez politikası.',
  alternates: { canonical: 'https://trmndigital.com/kvkk' },
  robots: { index: false },
}

export default function KvkkPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '120px 0 80px' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <nav className="breadcrumb"><Link href="/">Ana Sayfa</Link><span className="breadcrumb-sep">/</span><span>KVKK</span></nav>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', margin: '24px 0 8px' }}>KVKK Aydınlatma Metni & Çerez Politikası</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 48 }}>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında hazırlanmıştır.</p>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '40px 48px', display: 'flex', flexDirection: 'column', gap: 28 }}>
            {[
              { title: 'Veri Sorumlusu', content: 'Serhat Taraman (TRMN Dijital), veri sorumlusu sıfatıyla, kişisel verilerinizi 6698 sayılı KVKK\'ya uygun biçimde işlemektedir. Adres: Bağlar / Diyarbakır. E-posta: serhat_212048@hotmail.com' },
              { title: 'İşlenen Kişisel Veriler', content: 'Ad-soyad, e-posta adresi, telefon numarası, firma adı ve proje detayları. Bu veriler; iletişim formu, teklif formu veya doğrudan iletişim yoluyla toplanmaktadır.' },
              { title: 'Kişisel Verilerin İşlenme Amacı', content: 'Toplanan veriler; proje değerlendirmesi yapmak, teklif hazırlamak, hizmet sunmak ve yasal yükümlülükleri yerine getirmek amacıyla işlenmektedir.' },
              { title: 'Kişisel Verilerin Aktarılması', content: 'Kişisel verileriniz, açık rızanız olmaksızın üçüncü taraflarla paylaşılmamaktadır. Yasal zorunluluk halleri bu kapsamın dışındadır.' },
              { title: 'Çerez Politikası', content: 'Sitemiz; oturum çerezleri (zorunlu) ve analitik çerezler (Google Analytics) kullanmaktadır. Analitik çerezler tercihlerinize göre kabul veya reddedilebilir. Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz.' },
              { title: 'Veri Sahibinin Hakları (Madde 11)', content: 'KVKK Madde 11 kapsamında; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlendiyse bilgi talep etme, işlenme amacını öğrenme, aktarım bilgilerini talep etme, yanlış işleme halinde düzeltme, silinmesini talep etme ve işlemeye itiraz haklarına sahipsiniz.' },
            ].map(s => (
              <div key={s.title}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 10 }}>{s.title}</h2>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8 }}>{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
