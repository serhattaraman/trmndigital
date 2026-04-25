import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import {
  CheckCircle2, MessageCircle, ArrowRight,
  Search, Smartphone, Zap, MapPin, Globe, Shield
} from 'lucide-react'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Kurumsal Web Sitesi Yaptırın | Müşteriler Sizi Google\'da Bulsun — TRMN Dijital',
  description: 'Küçük ve orta ölçekli işletmeler için profesyonel, mobil uyumlu ve SEO\'lu kurumsal web sitesi. WhatsApp entegrasyonlu, hızlı teslim. Ücretsiz teklif alın.',
  alternates: { canonical: 'https://trmndigital.com/kurumsal-web-sitesi' },
}

const features = [
  { icon: Search, title: 'Google\'da Görünün', desc: 'Doğru SEO altyapısıyla potansiyel müşteriler sizi organik olarak bulsun. Rakiplerinizin önünde yer alın.' },
  { icon: Smartphone, title: 'Her Cihazda Mükemmel', desc: 'Siteniz telefonda, tablette ve masaüstünde kusursuz görünsün. Ziyaretçilerinizin %70\'i mobil kullanıcı.' },
  { icon: Zap, title: 'Hızlı Yükleme', desc: '3 saniyede yüklenmeyen siteyi ziyaretçi terk eder. Sıkıştırılmış ve optimize kod ile maksimum hız.' },
  { icon: MessageCircle, title: 'WhatsApp Entegrasyonu', desc: 'Ziyaretçi tek tıkla size mesaj atsın. Direkt WhatsApp butonu ile dönüşümü artırın.' },
  { icon: MapPin, title: 'Google Harita', desc: 'İşletmenizin konumu harita ile sitenizde gösterilsin. Yerel aramalarda öne çıkın.' },
  { icon: Shield, title: 'SSL + Güvenlik', desc: 'Siteniz HTTPS ile güvenli. Google güvenli siteleri sıralamada önceliklendirir.' },
]

const included = [
  'Anasayfa & hakkımızda sayfası',
  'Hizmetler / ürünler sayfası',
  'İletişim formu (e-posta bildirimi)',
  'WhatsApp hızlı iletişim butonu',
  'Google Haritalar entegrasyonu',
  'Sosyal medya bağlantıları',
  'Mobil uyumlu (responsive) tasarım',
  'Temel SEO optimizasyonu',
  'SSL sertifikası (HTTPS)',
  'Google\'a kayıt (Search Console)',
]

export default function KurumsalWebSitesiPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.heroTag}>Küçük & Orta İşletmeler İçin</div>
              <h1 className={styles.heroTitle}>
                Müşteriler sizi <span>Google&apos;da bulsun,</span><br />
                işletmeniz <span>büyüsün.</span>
              </h1>
              <p className={styles.heroDesc}>
                Profesyonel web siteniz olmadan rekabette geri kalırsınız. 
                Uygun bütçe, hızlı teslim ve sizi temsil eden kaliteli bir dijital vitrin.
              </p>
              <div className={styles.heroCtas}>
                <a
                  href="https://wa.me/905384714674?text=Merhaba%2C%20kurumsal%20web%20sitesi%20yapt%C4%B1rmak%20istiyorum.%20Bilgi%20alabilir%20miyim%3F"
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageCircle size={20} /> WhatsApp&apos;tan Teklif Al
                </a>
                <Link href="/teklif-al" className="btn btn-primary btn-lg">
                  Ücretsiz Teklif Formu <ArrowRight size={20} />
                </Link>
              </div>
              <div className={styles.trustRow}>
                <span><CheckCircle2 size={15} /> 7–14 gün teslim</span>
                <span><CheckCircle2 size={15} /> İlk görüşme ücretsiz</span>
                <span><CheckCircle2 size={15} /> Revizyon hakkı dahil</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Need */}
        <section className="section">
          <div className="container">
            <div className={styles.twoCol}>
              <div className={styles.colLeft}>
                <div className="section-label" style={{ color: '#EF4444', background: 'rgba(239,68,68,0.08)', borderColor: 'rgba(239,68,68,0.25)' }}>
                  Web sitesi olmayan işletmeler
                </div>
                <h2 className="section-title" style={{ fontSize: '1.75rem' }}>Web sitesi olmadan neler kaybediyorsunuz?</h2>
                <ul className={styles.lossList}>
                  {[
                    'Google aramasında rakipleriniz görünüyor, siz yoksunuz',
                    'Müşteriler sizi profesyonel bulmayabilir',
                    'Sosyal medya hesabı yeterli değil — güven vermiyor',
                    'İletişim bilgilerinizi bulmak zorlaşıyor',
                    'Fiyat sorgulamak için aranmanız gerekiyor',
                  ].map(item => (
                    <li key={item}><span className={styles.xIcon}>✗</span> {item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.colRight}>
                <div className="section-label">Web sitesi olan işletmeler</div>
                <h2 className="section-title" style={{ fontSize: '1.75rem' }}>Neler kazanırsınız?</h2>
                <ul className={styles.gainList}>
                  {[
                    'Google\'da organik müşteri akışı',
                    '7/24 çalışan dijital vitrin',
                    'Profesyonel kurumsal imaj',
                    'WhatsApp ile anında iletişim',
                    'Rakiplerinize karşı üstünlük',
                  ].map(item => (
                    <li key={item}><span className={styles.checkIcon}>✓</span> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className={`section ${styles.featSection}`}>
          <div className="container">
            <div className={styles.sectionHead}>
              <div className="section-label">Her Pakette Standart</div>
              <h2 className="section-title">Neler Dahil?</h2>
              <p className="section-desc">Temel ihtiyaçlarınızın hepsini karşılayan, hazır çözümler.</p>
            </div>
            <div className={styles.featGrid}>
              {features.map(f => (
                <div key={f.title} className={styles.featCard}>
                  <div className={styles.featIcon}><f.icon size={22} /></div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Included List */}
        <section className="section">
          <div className="container">
            <div className={styles.includedBox}>
              <div className={styles.includedLeft}>
                <div className="section-label">Paket İçeriği</div>
                <h2 className="section-title">Her web sitesinde<br /><span>bunlar standart gelir.</span></h2>
                <p className={styles.includedDesc}>
                  İhtiyacınıza göre e-ticaret, blog, rezervasyon sistemi gibi ek özellikler de eklenebilir.
                </p>
                <div className={styles.includedCtas}>
                  <a href="https://wa.me/905384714674?text=Merhaba%2C%20web%20sitesi%20paketi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                    <MessageCircle size={16} /> Fiyat Sormak İstiyorum
                  </a>
                </div>
              </div>
              <div className={styles.includedRight}>
                <ul className={styles.checkList}>
                  {included.map(item => (
                    <li key={item}>
                      <CheckCircle2 size={18} className={styles.checkMark} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Psychology */}
        <section className={`section ${styles.priceSection}`}>
          <div className="container">
            <div className={styles.priceCards}>
              <div className={styles.priceCard}>
                <div className={styles.priceTag}>Başlangıç</div>
                <h3>Tanıtım Sitesi</h3>
                <p>Hizmetlerinizi, konumunuzu ve iletişim bilgilerinizi sergileyen sade kurumsal site.</p>
                <ul>
                  <li>✓ 3-5 sayfa</li>
                  <li>✓ Mobil uyumlu</li>
                  <li>✓ İletişim formu</li>
                  <li>✓ 7 gün teslim</li>
                </ul>
                <a href="https://wa.me/905384714674?text=Merhaba%2C%20tan%C4%B1t%C4%B1m%20sitesi%20paketi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                  Teklif Al
                </a>
              </div>

              <div className={`${styles.priceCard} ${styles.priceCardFeatured}`}>
                <div className={styles.popularBadge}>En Çok Tercih Edilen</div>
                <div className={styles.priceTag} style={{ color: 'var(--accent)' }}>Profesyonel</div>
                <h3>Kurumsal Web Sitesi</h3>
                <p>Rakiplerinizin önünde yer alan, SEO'lu, hızlı ve dönüşüm odaklı kurumsal site.</p>
                <ul>
                  <li>✓ 5-10 sayfa</li>
                  <li>✓ Gelişmiş SEO</li>
                  <li>✓ Blog / haberler</li>
                  <li>✓ WhatsApp entegrasyonu</li>
                  <li>✓ Google Analytics</li>
                  <li>✓ 14 gün teslim</li>
                </ul>
                <a href="https://wa.me/905384714674?text=Merhaba%2C%20kurumsal%20web%20sitesi%20paketi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <MessageCircle size={16} /> Hemen Başlayalım
                </a>
              </div>

              <div className={styles.priceCard}>
                <div className={styles.priceTag}>Gelişmiş</div>
                <h3>E-Ticaret + Web</h3>
                <p>Online satış yapabileceğiniz, ürün yönetim panelli, ödeme entegrasyonlu site.</p>
                <ul>
                  <li>✓ Sınırsız ürün</li>
                  <li>✓ Ödeme sistemi</li>
                  <li>✓ Stok takibi</li>
                  <li>✓ Sipariş paneli</li>
                </ul>
                <Link href="/teklif-al" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                  Teklif Al <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <p className={styles.priceNote}>
              * Fiyatlar projeye özgüdür. Ücretsiz görüşmede ihtiyacınıza göre net fiyat verilir.
            </p>
          </div>
        </section>

        {/* CTA Bottom */}
        <section className={`section ${styles.ctaSection}`}>
          <div className="container">
            <div className={styles.ctaBox}>
              <Globe size={40} className={styles.ctaIcon} />
              <h2>İşletmeniz için profesyonel web sitesi yaptırmaya hazır mısınız?</h2>
              <p>Ücretsiz bir görüşme ayarlayalım. İhtiyaçlarınızı dinleyelim ve size özel plan çıkaralım.</p>
              <div className={styles.ctaBtns}>
                <a href="https://wa.me/905384714674?text=Merhaba%2C%20i%C5%9Fletmem%20i%C3%A7in%20web%20sitesi%20yapt%C4%B1rmak%20istiyorum.%20Bilgi%20alabilir%20miyim%3F" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                  <MessageCircle size={20} /> WhatsApp&apos;tan Yaz
                </a>
                <Link href="/teklif-al" className="btn btn-primary btn-lg">
                  Teklif Formu <ArrowRight size={20} />
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
