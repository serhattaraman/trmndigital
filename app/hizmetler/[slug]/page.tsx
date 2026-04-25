import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { CheckCircle2, XCircle, ArrowRight, MessageCircle, Building2, GraduationCap, Briefcase, Store } from 'lucide-react'

const serviceData: Record<string, {
  title: string; subtitle: string; desc: string; metaDesc: string;
  whoFor: { icon: typeof Building2; label: string }[];
  benefits: string[]; mistakes: string[]; whyCustom: string[];
  faqs: { q: string; a: string }[];
}> = {
  'kurumsal-web-sitesi': {
    title: 'Kurumsal Web Sitesi Geliştirme',
    subtitle: 'Firmanızın dijital kimliğini hak ettiği profesyonellikle yansıtın',
    metaDesc: 'SEO odaklı, hızlı, yönetim panelli kurumsal web sitesi geliştirme hizmeti. Diyarbakır ve Türkiye geneli.',
    desc: 'Kurumsal web siteniz, dijital dünyadaki ilk izleniminizdir. Hazır temalar bu izlenimi ortalarda bırakır. Sıfırdan, markanıza özgü, SEO odaklı ve yüksek dönüşümlü bir kurumsal site — rakiplerinizden sizi net şekilde ayırır.',
    whoFor: [
      { icon: Building2, label: 'Orta ve büyük ölçekli firmalar' },
      { icon: Store, label: 'Yerel hizmet işletmeleri' },
      { icon: Briefcase, label: 'Profesyonel hizmet sunanlar' },
      { icon: GraduationCap, label: 'Eğitim kurumları' },
    ],
    benefits: [
      'Google\'da üst sıralarda organik görünürlük',
      'Ziyaretçiyi müşteriye çeviren güçlü CTA yapısı',
      'İçeriği kendiniz güncelleyebileceğiniz yönetim paneli',
      'Tüm cihazlarda kusursuz mobil uyumluluk',
      'Core Web Vitals standartlarında hız performansı',
      'Schema markup ile zengin arama sonuçları',
      'Google Ads ve sosyal medya reklamlarına hazır altyapı',
      'Güvenli HTTPS altyapısı ve form koruması',
    ],
    mistakes: [
      'Hazır tema kullanmak — yavaş, güvensiz, herkese benzeyebilir',
      'SEO\'yu sonradan düşünmek — teknik altyapı baştan kurulmalı',
      'Mobili ihmal etmek — trafiğin %70\'i mobilden geliyor',
      'Yönetim paneli olmayan site — her güncelleme için geliştirici gerekiyor',
      'Yavaş açılan sayfa — kullanıcı 3 saniyede sayfayı terk ediyor',
    ],
    whyCustom: [
      'Rakiplerinizden görsel ve teknik olarak net şekilde ayrışırsınız',
      'Yalnızca ihtiyacınız olan özellikler — şişirilmiş yapı yok',
      'SEO altyapısı temelden doğru kurulur, sonradan yamama gerekmez',
      'Güvenli, hızlı ve uzun vadede bakımı kolay kod mimarisi',
    ],
    faqs: [
      { q: 'Kurumsal web sitesi ne kadar sürede teslim edilir?', a: '2-4 hafta arasında, kapsama göre değişir. Başlangıçta net bir takvim belirlenir.' },
      { q: 'Yönetim paneli dahil mi?', a: 'Evet, içeriklerinizi, hizmetlerinizi ve iletişim bilgilerinizi kolayca güncelleyebilirsiniz.' },
      { q: 'SEO çalışması dahil mi?', a: 'Teknik SEO altyapısı (meta etiketler, schema, hız optimizasyonu) dahildir. İçerik odaklı SEO için ayrı plan oluşturulabilir.' },
      { q: 'Google Ads için kullanılabilir mi?', a: 'Evet, Google Ads ve Meta Ads kampanyalarınıza uygun, dönüşüm odaklı yapıyla teslim edilir.' },
    ]
  },
  'yonetim-paneli': {
    title: 'Özel Yönetim Paneli Geliştirme',
    subtitle: 'İşletmenizin tüm verilerini tek ekrandan kontrol edin',
    metaDesc: 'Özel admin paneli ve yönetim paneli geliştirme. Rol tabanlı yetkilendirme, gerçek zamanlı veri ve özel raporlar.',
    desc: 'Her işletmenin iç süreçleri farklıdır. Hazır admin panelleri bu farklılıkları görmezden gelir. Sizin operasyonunuza, veri yapınıza ve ekip hiyerarşinize göre sıfırdan tasarlanan bir yönetim paneli, iş verimliliğinizi köklü biçimde artırır.',
    whoFor: [
      { icon: Building2, label: 'Çok kullanıcılı operasyonlar' },
      { icon: Briefcase, label: 'Veri yoğun işletmeler' },
      { icon: GraduationCap, label: 'Eğitim ve kurs merkezleri' },
      { icon: Store, label: 'Hizmet sektörü firmaları' },
    ],
    benefits: [
      'Tüm operasyonel verileriniz tek ekranda',
      'Rol tabanlı erişim — herkes yalnızca kendi görür',
      'Gerçek zamanlı dashboard ve KPI takibi',
      'Özel raporlar — Excel/PDF çıktı',
      'Bildirim sistemi — önemli olayları kaçırmayın',
      'Mobil uyumlu — sahada da erişebilirsiniz',
      'Güvenli kimlik doğrulama sistemi',
      'Kolayca yeni modül eklenebilir ölçeklenebilir yapı',
    ],
    mistakes: [
      'Genel amaçlı CRM\'ler kullanmak — iş akışınıza uymaz',
      'Excel ve e-posta ile veri yönetimi — hata prone ve ölçeksiz',
      'Güvenli olmayan paylaşım araçları — veri sızıntısı riski',
      'Mobili düşünmemek — saha ekibi erişemez',
    ],
    whyCustom: [
      'Tam işletmenizin terminolojisi ve akışıyla çalışan arayüz',
      'Mevcut sistemlerinizle entegrasyon yapılabilir',
      'Büyüdükçe yeni modül eklenir, sıfırdan yazmaya gerek yok',
      'Veri güvenliği tam kontrolünüzde',
    ],
    faqs: [
      { q: 'Yönetim paneli ne kadar sürede hazır olur?', a: 'Kapsama göre 4-16 hafta. Başlangıçta sprint planı belirlenir.' },
      { q: 'Kaç kullanıcı kullanabilir?', a: 'Sınırsız kullanıcı tanımlanabilir. Rol tabanlı yetkilendirme ile erişimler kontrol edilir.' },
      { q: 'Mevcut sistemimizle entegre olabilir mi?', a: 'Evet, API entegrasyonları ve veritabanı bağlantıları mevcut yapınıza göre kurgulanır.' },
      { q: 'Sonradan özellik eklenebilir mi?', a: 'Kesinlikle. Modüler mimari sayesinde yeni özellikler kolayca eklenebilir.' },
    ]
  },
}

// Diğer hizmetler için fallback
const fallbackData = {
  title: 'Hizmet Detayı',
  subtitle: 'İşletmenize özel dijital çözüm',
  metaDesc: 'Özel yazılım geliştirme hizmeti. Diyarbakır ve Türkiye geneli.',
  desc: 'Bu hizmet hakkında detaylı bilgi almak için lütfen iletişime geçin.',
  whoFor: [{ icon: Building2, label: 'Tüm ölçeklerdeki işletmeler' }],
  benefits: ['İşletmenize özel çözüm', 'Profesyonel altyapı', 'Uzun vadeli destek'],
  mistakes: ['Hazır sistemler kullanmak', 'SEO\'yu ihmal etmek'],
  whyCustom: ['Size özel geliştirilir', 'Tam kontrol sizde'],
  faqs: [{ q: 'Bu hizmet hakkında nasıl bilgi alabilirim?', a: 'Formu doldurun veya WhatsApp\'tan yazın, 24 saat içinde yanıt veriyorum.' }],
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = serviceData[params.slug] || fallbackData
  return {
    title: `${data.title} | TRMN Dijital`,
    description: data.metaDesc,
    alternates: { canonical: `https://trmndigital.com/hizmetler/${params.slug}` },
  }
}

export function generateStaticParams() {
  return [
    'kurumsal-web-sitesi', 'yonetim-paneli', 'is-takip-raporlama',
    'crm-operasyon', 'egitim-yonetim', 'otomasyon',
    'form-basvuru', 'landing-page', 'seo-tanitim', 'bakim-destek',
  ].map(slug => ({ slug }))
}

export default function HizmetDetayPage({ params }: { params: { slug: string } }) {
  const data = serviceData[params.slug] || fallbackData

  return (
    <>
      <Navbar />
      <main>
        <div className="page-hero">
          <div className="page-hero-bg" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <nav className="breadcrumb">
              <Link href="/">Ana Sayfa</Link><span className="breadcrumb-sep">/</span>
              <Link href="/hizmetler">Hizmetler</Link><span className="breadcrumb-sep">/</span>
              <span>{data.title}</span>
            </nav>
            <div className="section-label">Hizmet Detayı</div>
            <h1 className="section-title" style={{ maxWidth: 700 }}>{data.title}</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: 600, lineHeight: 1.7, marginBottom: 28 }}>{data.subtitle}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/teklif-al" className="btn btn-primary btn-lg">Teklif Al <ArrowRight size={18} /></Link>
              <a href="https://wa.me/905384714674" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                <MessageCircle size={18} /> WhatsApp ile Sor
              </a>
            </div>
          </div>
        </div>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginBottom: 64 }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16 }}>Bu Hizmet Nedir?</h2>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 32 }}>{data.desc}</p>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16 }}>Kimler İçin Uygun?</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                  {data.whoFor.map(w => (
                    <div key={w.label} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '12px 16px', fontSize: 13, color: 'var(--text-secondary)' }}>
                      <w.icon size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} /> {w.label}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16 }}>Sağlanan Faydalar</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {data.benefits.map(b => (
                    <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-secondary)', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                      <CheckCircle2 size={15} style={{ color: 'var(--success)', flexShrink: 0 }} /> {b}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 64 }}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 32 }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 20 }}>Yaygın Yapılan Hatalar</h2>
                {data.mistakes.map(m => (
                  <div key={m} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--text-secondary)', marginBottom: 12 }}>
                    <XCircle size={15} style={{ color: '#EF4444', flexShrink: 0, marginTop: 2 }} /> {m}
                  </div>
                ))}
              </div>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-xl)', padding: 32 }}>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 20 }}>Neden Özel Geliştirme?</h2>
                {data.whyCustom.map(w => (
                  <div key={w} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--text-secondary)', marginBottom: 12 }}>
                    <CheckCircle2 size={15} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }} /> {w}
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div style={{ maxWidth: 720, margin: '0 auto 64px' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 28, textAlign: 'center' }}>
                Sık Sorulan Sorular
              </h2>
              {data.faqs.map((faq, i) => (
                <details key={i} style={{ borderBottom: '1px solid var(--border)', padding: '18px 0' }}>
                  <summary style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', cursor: 'pointer', listStyle: 'none' }}>
                    {faq.q}
                  </summary>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, marginTop: 12 }}>{faq.a}</p>
                </details>
              ))}
            </div>

            {/* CTA */}
            <div style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(129,140,248,0.06))', border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-xl)', padding: 56, textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>
                {data.title} İçin Teklif Alın
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
                İlk görüşme ücretsiz. Projenizi anlayıp size özel bir çözüm sunuyorum.
              </p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/teklif-al" className="btn btn-primary btn-lg">Teklif Al <ArrowRight size={18} /></Link>
                <a href="https://wa.me/905384714674" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                  <MessageCircle size={18} /> WhatsApp
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
