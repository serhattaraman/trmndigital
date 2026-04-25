import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Shield, CheckCircle2, Clock, Zap } from 'lucide-react'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Teklif Al — Projenizi Başlatalım | TRMN Dijital',
  description: 'Özel yazılım, yönetim paneli veya web sitesi projeniz için ücretsiz teklif alın. 24 saat içinde detaylı proje planı ve fiyat teklifi.',
  alternates: { canonical: 'https://trmndigital.com/teklif-al' },
}

const budgetOptions = [
  '5.000 — 10.000 ₺',
  '10.000 — 25.000 ₺',
  '25.000 — 50.000 ₺',
  '50.000 ₺ ve üzeri',
  'Belirlemedim',
]

const timelineOptions = [
  'En kısa sürede (acil)',
  '1 ay içinde',
  '1-3 ay içinde',
  '3 ay ve üzeri',
  'Esnek',
]

export default function TeklifAlPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.bg} />

        <div className="container">
          <div className={styles.inner}>
            {/* Left Column */}
            <div className={styles.left}>
              <div className="section-label">Ücretsiz Teklif</div>
              <h1 className={styles.title}>
                Projenizi<br />
                <span>Birlikte Başlatalım</span>
              </h1>
              <p className={styles.desc}>
                Aklınızdaki sistemi anlatın. 24 saat içinde size özel detaylı bir proje değerlendirmesi ve fiyat teklifi hazırlıyorum.
                İlk görüşme tamamen ücretsiz, herhangi bir taahhüt gerektirmez.
              </p>

              <div className={styles.features}>
                {[
                  { icon: Clock, text: '24 saat içinde geri dönüş garantisi' },
                  { icon: Shield, text: 'Bilgileriniz gizli tutulur, 3. taraflarla paylaşılmaz' },
                  { icon: Zap, text: 'Projeye özel detaylı teknik analiz' },
                  { icon: CheckCircle2, text: 'Şeffaf fiyatlandırma — sürpriz yok' },
                ].map(f => (
                  <div key={f.text} className={styles.feature}>
                    <f.icon size={16} className={styles.featureIcon} />
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>

              <div className={styles.orSep}>veya doğrudan ulaşın</div>

              <div className={styles.directCtas}>
                <a href="https://wa.me/905384714674?text=Merhaba%2C%20teklif%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  <MessageCircle size={16} /> WhatsApp ile Yaz
                </a>
                <a href="tel:+905384714674" className="btn btn-outline">
                  Hemen Ara: +90 538 471 46 74
                </a>
              </div>
            </div>

            {/* Right Column — Form */}
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Proje Bilgilerini Paylaşın</h2>
              <form className={styles.form} action="/tesekkurler" method="GET">
                <input name="honeypot" type="text" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                <div className={styles.formRow}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="t-ad">Ad Soyad *</label>
                    <input id="t-ad" name="ad_soyad" type="text" className="form-input" placeholder="Adınız Soyadınız" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="t-tel">Telefon *</label>
                    <input id="t-tel" name="telefon" type="tel" className="form-input" placeholder="+90 538 471 46 74" required />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="t-email">E-posta *</label>
                    <input id="t-email" name="eposta" type="email" className="form-input" placeholder="ornek@firma.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="t-firma">Firma / Kurum</label>
                    <input id="t-firma" name="firma" type="text" className="form-input" placeholder="Firma adı (opsiyonel)" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="t-hizmet">Hizmet Türü *</label>
                  <select id="t-hizmet" name="hizmet" className="form-input" required>
                    <option value="">Hangi hizmete ihtiyacınız var?</option>
                    <option>Kurumsal Web Sitesi</option>
                    <option>Özel Yönetim Paneli</option>
                    <option>CRM / Aday Takip Sistemi</option>
                    <option>Eğitim Yönetim Sistemi</option>
                    <option>İş Takip & Raporlama</option>
                    <option>Otomasyon & Entegrasyon</option>
                    <option>Google Ads Landing Page</option>
                    <option>Bakım & Teknik Destek</option>
                    <option>Diğer / Birden Fazla</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="t-detay">Proje Detayı *</label>
                  <textarea id="t-detay" name="detay" className="form-input" rows={5} required
                    placeholder="Projenizi olabildiğince detaylı anlatın. Mevcut bir sisteminiz var mı? Kaç kullanıcı kullanacak? Özellikle ne yapmasını istiyorsunuz?" />
                </div>

                <div className={styles.formRow}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="t-butce">Bütçe Aralığı</label>
                    <select id="t-butce" name="butce" className="form-input">
                      <option value="">Belirtmek ister misiniz?</option>
                      {budgetOptions.map(b => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="t-sure">Beklenen Süre</label>
                    <select id="t-sure" name="sure" className="form-input">
                      <option value="">Ne zaman hazır olsun?</option>
                      {timelineOptions.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <button type="submit" className={`btn btn-primary btn-lg ${styles.submitBtn}`}>
                  Teklif Talep Et <ArrowRight size={18} />
                </button>

                <p className={styles.formNote}>
                  Bilgileriniz yalnızca proje değerlendirmesi için kullanılır.
                  <Link href="/gizlilik-politikasi"> Gizlilik Politikası</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
