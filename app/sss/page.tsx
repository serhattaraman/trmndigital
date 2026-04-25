import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Sık Sorulan Sorular | Web Yazılım & Özel Geliştirme',
  description: 'Özel yazılım, web sitesi fiyatları, teslimat süresi, yönetim paneli, SEO ve daha fazlası hakkında en çok sorulan sorular ve detaylı yanıtları.',
  alternates: { canonical: 'https://trmndigital.com/sss' },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Web sitesi ne kadar sürede teslim edilir?", "acceptedAnswer": { "@type": "Answer", "text": "Projenin kapsamına göre değişir. Basit kurumsal tanıtım siteleri 2-3 haftada, yönetim paneli gibi karmaşık sistemler 6-12 haftada teslim edilir. Her proje için başlangıçta net bir zaman planı oluşturulur." } },
    { "@type": "Question", "name": "Özel yazılım ile hazır site arasındaki fark nedir?", "acceptedAnswer": { "@type": "Answer", "text": "Hazır temalar genel amaçlıdır. Özel yazılım ise yalnızca sizin işletmenizin süreçlerine göre geliştirilir. Daha hızlı, daha güvenli ve tam olarak ihtiyacınıza uyar." } },
  ]
}

const faqs = [
  {
    category: 'Genel',
    items: [
      { q: 'Web sitesi ne kadar sürede teslim edilir?', a: 'Proje kapsamına göre değişir. Kurumsal tanıtım siteleri genellikle 2–4 haftada tamamlanır. Yönetim paneli, CRM veya karmaşık sistem projeleri 6–16 hafta arasında sürebilir. Her proje başlangıcında detaylı zaman planı oluşturulur ve haftalık ilerleme raporu paylaşılır.' },
      { q: 'Özel yazılım ile hazır site (WordPress vb.) arasındaki fark nedir?', a: 'Hazır temalar ve CMS\'ler herkes için tasarlanmıştır — genel amaçlıdır, yavaş olabilir ve özelleştirmek çok güçtür. Özel yazılım ise yalnızca sizin işletmenizin süreç ve verilerine göre sıfırdan geliştirilir. Çok daha hızlı, güvenli, yönetilebilir ve işletmenize tam uyumludur.' },
      { q: 'Fiyatlandırma nasıl belirleniyor?', a: 'Proje kapsamı, karmaşıklığı, kullanılacak teknolojiler ve teslim süresi fiyatı belirleyen temel faktörlerdir. Görüşmenin ardından yazılı teklifte net ve şeffaf bir fiyat sunulur. Ek ücret veya sürpriz yoktur.' },
      { q: 'İletişim nasıl sağlanıyor? Fiziksel görüşme gerekiyor mu?', a: 'Tüm proje süreci uzaktan yürütülebilir. Video görüşme, e-posta, WhatsApp ve paylaşımlı proje takip araçlarıyla şeffaf iletişim kuruyoruz. Türkiye\'nin herhangi bir şehrinden hizmet alabilirsiniz.' },
    ]
  },
  {
    category: 'Teknik',
    items: [
      { q: 'Mobil uyumlu site yapılıyor mu?', a: 'Evet, geliştirdiğim tüm sistemler ve siteler tam responsive\'dir. Masaüstü, tablet ve mobil cihazlarda kusursuz çalışır. Ayrıca Core Web Vitals (Google hız metrikleri) standartlarına uyum özellikle önemseniyor.' },
      { q: 'SEO uyumlu altyapı sağlanıyor mu?', a: 'Evet. Her geliştirmede teknik SEO altyapısı dahildir: doğru heading yapısı, meta etiketler, Schema/JSON-LD, hız optimizasyonu, sitemap, robots.txt ve mobil uyumluluk. Yerel SEO için de gerekli yapılar kurulur.' },
      { q: 'Yönetim paneli eklenebilir mi?', a: 'Kesinlikle. Geliştirdiğim sistemlerin büyük çoğunluğu yönetim paneli içerir. İçerik yönetimi, kullanıcı yönetimi, form yanıtları, raporlar ve daha fazlasını kolayca yönetebilirsiniz. Teknik bilgi gerektirmez.' },
      { q: 'Sonradan yeni özellik eklenebilir mi?', a: 'Evet, modüler ve ölçeklenebilir mimariyle geliştirildiği için her zaman yeni özellik eklenebilir. Bu sayede projeniz işletmenizle birlikte büyüyebilir.' },
      { q: 'Google Analytics ve Meta Pixel entegrasyonu yapılıyor mu?', a: 'Evet. GA4, Google Ads dönüşüm kodu, Meta Pixel ve diğer analitik araçlar entegre edilebilir. Google Ads kampanyalarınızı ölçümleyecek yapı hazır hale getirilir.' },
    ]
  },
  {
    category: 'Süreç & Destek',
    items: [
      { q: 'Google Ads için özel açılış sayfası yapılıyor mu?', a: 'Evet. Dönüşüm odaklı, hızlı yüklenen ve reklam trafiğini müşteriye çeviren landing page\'ler geliştiriyorum. Google Ads ve Meta Ads kampanyalarınıza özel, A/B test uyumlu sayfalar.' },
      { q: 'Bakım ve güncelleme desteği var mı?', a: 'Evet. Proje tesliminin ardından bakım ve destek hizmetleri sunuyorum: güvenlik güncellemeleri, performans izleme, yedekleme, hata giderme ve yeni özellik geliştirme. Aylık veya yıllık destek paketleri mevcuttur.' },
      { q: 'Kurumsal firmalara özel çözüm üretiliyor mu?', a: 'Kesinlikle. Orta ve büyük ölçekli firmalara yönelik; rol tabanlı yetkilendirme, çok kullanıcılı yönetim, entegrasyon ve kurumsal raporlama kapasitesine sahip sistemler geliştiriyorum.' },
      { q: 'Projeyi devralmak için ne bilmem gerekiyor?', a: 'Sizi teknolojiden uzak tutmak değil, işletmenizin tam kontrolüne almak istiyorum. Teslim aşamasında eğitim, kullanım kılavuzu ve erişim bilgileri eksiksiz sağlanır. Projeyi rahatlıkla yönetebilirsiniz.' },
    ]
  }
]

export default function SSSPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        <div className="page-hero">
          <div className="page-hero-bg" />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <nav className="breadcrumb">
              <Link href="/">Ana Sayfa</Link><span className="breadcrumb-sep">/</span><span>SSS</span>
            </nav>
            <div className="section-label">SSS</div>
            <h1 className="section-title">Sık Sorulan <span>Sorular</span></h1>
            <p className="section-desc">Aklınızda soru işareti bırakmayalım. Hepsini yanıtlamak için buradayım.</p>
          </div>
        </div>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className={styles.content}>
              {faqs.map(cat => (
                <div key={cat.category} className={styles.category}>
                  <h2 className={styles.catTitle}>{cat.category}</h2>
                  <div className={styles.items}>
                    {cat.items.map((faq, i) => (
                      <details key={i} className={styles.item}>
                        <summary className={styles.q}>{faq.q}<span className={styles.chevron}>+</span></summary>
                        <p className={styles.a}>{faq.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-xl)', padding: 48, textAlign: 'center', marginTop: 64 }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 12 }}>Başka Sorunuz mu Var?</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 28 }}>Her projeye özel yanıtlar veriyorum. Sorunuzu direkt sormaktan çekinmeyin.</p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/iletisim" className="btn btn-primary">Soru Sorun <ArrowRight size={16} /></Link>
                <a href="https://wa.me/905XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">WhatsApp ile Sor</a>
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
