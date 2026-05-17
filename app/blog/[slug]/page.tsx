import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'

const posts: Record<string, { title: string; excerpt: string; category: string; date: string; content: string[] }> = {
  'kurumsal-web-sitesi-yaptirirken-nelere-dikkat-edilmeli': {
    title: 'Kurumsal Web Sitesi Yaptırırken Nelere Dikkat Edilmeli?',
    excerpt: 'Kurumsal web siteniz firmanızın dijital vitrindir. Doğru tercihleri yapmak için rehber.',
    category: 'Kurumsal Web Sitesi',
    date: '15 Nisan 2025',
    content: [
      'Kurumsal web siteniz, potansiyel müşterilerinizin firmanızla tanıştığı ilk dijital noktadır. Araştırmalara göre ziyaretçilerin %75\'i bir şirketin güvenilirliğini web sitesine bakarak değerlendiriyor.',
      '## Tasarım Kalitesi ve Profesyonellik',
      'Web sitenizin görsel kalitesi, firmanızın kalitesiyle özdeşleştirilir. Hazır tema kullanan bir site, rakiplerinizden sizi ayırt etmez. Özgün tasarım, güçlü tipografi ve tutarlı marka dili şarttır.',
      '## Hız ve Performans',
      'Google\'ın araştırmalarına göre sayfa yükleme süresi 1 saniyeden 3 saniyeye çıktığında, ziyaretçi kayıp oranı %32 artıyor. Core Web Vitals metriklerine dikkat edilmesi zorunludur.',
      '## SEO Uyumlu Altyapı',
      'Web siteniz ne kadar güzel olursa olsun, Google\'da görünmüyorsa bir değeri yoktur. Doğru heading yapısı, meta etiketler, schema markup ve teknik SEO altyapısı şart.',
      '## Mobil Uyumluluk',
      'Türkiye\'de web trafiğinin %70\'inden fazlası mobil cihazlardan geliyor. Sitenizin tüm ekran boyutlarında kusursuz çalışması artık zorunluluk.',
      '## Yönetim Paneli',
      'İçeriklerinizi, hizmetlerinizi ve iletişim bilgilerinizi kolayca güncelleyebilmek için bir yönetim paneli şarttır. Geliştiriciye bağımlı kalmadan sitenizi yönetebilmelisiniz.',
      '## Sonuç',
      'Kurumsal web sitesi bir harcama değil, yatırımdır. Doğru geliştirici ile doğru altyapı kurulduğunda, siteniz 7/24 satış yapan bir temsilcinize dönüşür.',
    ]
  },
  'ozel-yazilim-mi-hazir-sistem-mi': {
    title: 'Özel Yazılım mı, Hazır Sistem mi? Doğru Seçimi Yapın',
    excerpt: 'WordPress, hazır CRM veya özel yazılım — hangisi işletmeniz için daha avantajlı?',
    category: 'Özel Yazılım',
    date: '8 Nisan 2025',
    content: [
      'İşletmeniz için dijital bir sistem kurmaya karar verdiniz. İlk soru şu: Hazır bir yazılım mı kullanmalısınız, yoksa özel geliştirme mi yaptırmalısınız?',
      '## Hazır Sistemlerin Avantaj ve Dezavantajları',
      'WordPress, Shopify, HubSpot gibi hazır çözümler hızlıdır ve düşük maliyetlidir. Ancak esneklikleri sınırlıdır. İşletmenizin benzersiz ihtiyaçlarına tam uymayabilir ve zamanla kısıtlayıcı hale gelebilir.',
      '## Özel Yazılımın Avantajları',
      'Özel yazılım, işletmenizin tam ihtiyacına göre tasarlanır. Gereksiz özellik yoktur, eksik özellik de yoktur. Performanslı, güvenli ve tamamen sizin kontrolünüzdedir.',
      '## Hangisi Size Uygun?',
      'Basit bir blog veya portfolio için hazır sistemler yeterlidir. Ancak müşteri yönetimi, iş takibi, raporlama veya karmaşık süreçler içeren bir sisteme ihtiyacınız varsa özel yazılım tek gerçek çözümdür.',
      '## Maliyet Karşılaştırması',
      'Kısa vadede hazır sistem ucuzdur. Ancak uzun vadede özelleştirme maliyetleri, lisans ücretleri ve verimlilik kaybı hesaplandığında özel yazılım çok daha ekonomik çıkabilir.',
    ]
  },
  'diyarbakirdaki-isletmeler-icin-dijital-donusum-rehberi': {
    title: 'Diyarbakır\'daki İşletmeler İçin Dijital Dönüşüm Rehberi',
    excerpt: 'Diyarbakır\'da faaliyet gösteren KOBİ ve kurumsal firmalar için dijitalleşmenin yol haritası.',
    category: 'Dijital Strateji',
    date: '5 Mayıs 2025',
    content: [
      'Diyarbakır\'daki pek çok geleneksel işletme için dijitalleşme süreci genellikle kafa karıştırıcı olabilir. Ancak doğru adımlarla bu süreç, işletmenizin verimliliğini %40 oranında artırabilir.',
      '## Neden Dijitalleşme?',
      'Geleneksel yöntemlerle iş takibi yapmak, verilerin kaybolmasına ve zaman kaybına yol açar. Dijital dönüşüm; sadece bir web sitesine sahip olmak değil, iş süreçlerinizi yazılımlar aracılığıyla yönetmektir.',
      '## Adım 1: Kurumsal Dijital Kimlik',
      'İlk adım, profesyonel bir web sitesine sahip olmaktır. Müşterilerinizin size güvenmesi için dijital vitrininizin kusursuz olması gerekir.',
      '## Adım 2: Süreçlerin Otomatikleştirilmesi',
      'Tekrarlayan işleri (teklif hazırlama, müşteri takibi, stok yönetimi) özel bir yazılım veya CRM sistemi ile otomatik hale getirmek, ekibinize zaman kazandırır.',
      '## Adım 3: Veri Odaklı Reklamcılık',
      'Diyarbakır\'daki hedef kitlenize ulaşmak için Google Ads ve SEO stratejilerini birleştirerek, reklam bütçenizi en verimli şekilde kullanabilirsiniz.',
      '## Sonuç',
      'Diyarbakır\'da dijitalleşen firmalar, rakiplerinden çok daha hızlı büyüyor. Siz de geç kalmadan dönüşümü başlatın.',
    ]
  },
  'web-tasarim-fiyatlarini-belirleyen-5-kritik-faktor': {
    title: 'Web Tasarım Fiyatlarını Belirleyen 5 Kritik Faktör',
    excerpt: 'Web tasarım maliyetlerini ve kalite farkını belirleyen detayları şeffaflıkla açıklıyoruz.',
    category: 'Web Tasarım',
    date: '3 Mayıs 2025',
    content: [
      'Web tasarım sektöründe fiyat yelpazesi oldukça geniştir. İşletme sahipleri genellikle "Neden bu kadar fark var?" diye sorar. İşte bu farkı yaratan 5 kritik faktör:',
      '## 1. Hazır Tema vs. Özel Tasarım',
      'Hazır temalar ucuzdur ancak yavaştır ve herkesle aynı görünür. Özel tasarım ise sadece sizin markanıza özel kurgulanır ve maksimum performans verir.',
      '## 2. Teknik Altyapı ve SEO',
      'Google\'da üst sıralarda çıkmanızı sağlayan teknik SEO altyapısı, sitenin fiyatını etkileyen en büyük gizli maliyettir. İyi bir altyapı, uzun vadede reklam bütçenizden tasarruf etmenizi sağlar.',
      '## 3. Güvenlik ve Hız (Core Web Vitals)',
      'Hızlı açılan ve güvenli bir site geliştirmek daha fazla mühendislik gerektirir. LCP ve CLS gibi performans metriklerinin optimize edilmesi uzmanlık ister.',
      '## 4. Yönetim Paneli Esnekliği',
      'Sitenizi kolayca güncelleyebileceğiniz, ihtiyaca göre şekillenebilen bir yönetim paneli (CMS), standart sistemlere göre daha değerlidir.',
      '## 5. Satış Sonrası Destek ve Bakım',
      'Siteniz yayına girdikten sonra teknik bir muhatap bulabilmek en büyük konfordur. Profesyonel ajanslar, bakım ve destek maliyetini tekliflerine dahil eder.',
    ]
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts[params.slug]
  if (!post) return { title: 'Yazı Bulunamadı' }
  return {
    title: `${post.title} | TRMN Dijital Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://trmndigital.com/blog/${params.slug}` },
  }
}

export function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]
  if (!post) notFound()

  return (
    <>
      <Navbar />
      <main>
        <div className="page-hero">
          <div className="page-hero-bg" />
          <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 800 }}>
            <nav className="breadcrumb">
              <Link href="/">Ana Sayfa</Link><span className="breadcrumb-sep">/</span>
              <Link href="/blog">Blog</Link><span className="breadcrumb-sep">/</span>
              <span>{post.category}</span>
            </nav>
            <div className="section-label">{post.category}</div>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.15, marginBottom: 16 }}>{post.title}</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>{post.date}</p>
          </div>
        </div>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container" style={{ maxWidth: 800 }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: '40px 48px' }}>
              {post.content.map((block, i) => {
                if (block.startsWith('## ')) {
                  return <h2 key={i} style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', margin: '32px 0 12px' }}>{block.replace('## ', '')}</h2>
                }
                return <p key={i} style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>{block}</p>
              })}
            </div>

            <div style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(129,140,248,0.06))', border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-xl)', padding: '36px 40px', marginTop: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>Bu konuda projenizi değerlendirelim</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>İlk görüşme ücretsiz. 24 saat içinde yanıt garantisi.</p>
              </div>
              <Link href="/teklif-al" className="btn btn-primary">
                Teklif Al <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
