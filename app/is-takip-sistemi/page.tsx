import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { CheckCircle2, MessageCircle, ArrowRight, BarChart3, Users, Zap, ShieldCheck } from 'lucide-react'
import TimeCalculator from '@/components/home/TimeCalculator'
import InteractiveDemo from '@/components/home/InteractiveDemo'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Excel\'i Bırakın, İşinizi Yönetin | İş Takip Sistemi — TRMN Dijital',
  description: 'Dağınık Excel dosyalarından kurtulun. İşletmenize özel iş takip, müşteri yönetimi ve raporlama sistemleri.',
  alternates: { canonical: 'https://trmndigital.com/is-takip-sistemi' },
}

export default function IsTakipSistemiPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Landing Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.heroLabel}>İşletmenize Özel Çözüm</div>
              <h1 className={styles.heroTitle}>
                Excel ile uğraşmayı bırakın,<br />
                <span>tüm işlerinizi tek panelden yönetin.</span>
              </h1>
              <p className={styles.heroDesc}>
                Müşteri takibi, personel yönetimi, raporlama ve otomasyon. 
                İşiniz sizi değil, siz işinizi yönetin.
              </p>
              <div className={styles.heroCtas}>
                <a href="https://wa.me/905384714674?text=Merhaba%2C%20i%C5%9F%20takip%20sistemi%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                  <MessageCircle size={20} /> WhatsApp&apos;tan Bilgi Al
                </a>
                <Link href="/teklif-al" className="btn btn-primary btn-lg">
                  Hızlı Teklif Al <ArrowRight size={20} />
                </Link>
              </div>
              <div className={styles.heroTrust}>
                <CheckCircle2 size={16} /> 24 saat içinde yanıt garantisi &nbsp;&nbsp; 
                <CheckCircle2 size={16} /> İlk görüşme ücretsiz
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="section">
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className="section-title">İşleriniz <span>Kontrolden mi Çıkıyor?</span></h2>
              <p className="section-desc">Excel dosyaları arasında kaybolmak zorunda değilsiniz.</p>
            </div>
            <div className={styles.painGrid}>
              {[
                { title: 'Excel Bağımlılığı', desc: 'Dosya kayboldu mu? Kim güncelledi? Veriler doğru mu? Bu sorularla uğraşmayın.' },
                { title: 'Dağınık Bilgiler', desc: 'Müşteri notları WhatsApp\'ta, ödemeler Excel\'de, görevler kağıtta kalmasın.' },
                { title: 'Raporlama Zorluğu', desc: 'Haftalık rapor hazırlamak için saatlerce veri derlemeye son verin.' },
                { title: 'Personel Takibi', desc: 'Kimin hangi iş üzerinde olduğunu, hangi aşamada olduğunu anlık görün.' },
              ].map(p => (
                <div key={p.title} className={styles.painCard}>
                  <div className={styles.painIcon}>❌</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TimeCalculator />

        {/* Features */}
        <section className={`section ${styles.featuresSection}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <h2 className="section-title">Size Ne <span>Kazandıracak?</span></h2>
            </div>
            <div className={styles.featureList}>
              {[
                { icon: Users, title: 'Müşteri & Aday Takibi', desc: 'Tüm iletişim geçmişi ve süreçler tek bir merkezde, her an elinizin altında.' },
                { icon: BarChart3, title: 'Anlık Raporlama', desc: 'Satışlar, performans ve finansal durum tek tıkla dashboard ekranınızda.' },
                { icon: Zap, title: 'Otomatik Hatırlatıcılar', desc: 'Geciken işler, bekleyen ödemeler ve önemli randevular için otomatik sistem bildirimleri.' },
                { icon: ShieldCheck, title: 'Tam Veri Güvenliği', desc: 'Verileriniz yalnızca sizin kontrolünüzde olan güvenli bir bulut altyapısında saklanır.' },
              ].map(f => (
                <div key={f.title} className={styles.featureItem}>
                  <div className={styles.featureIcon}><f.icon size={24} /></div>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <InteractiveDemo />

        {/* Comparison */}
        <section className="section">
          <div className="container">
            <div className={styles.compBox}>
              <div className={styles.compSide}>
                <h3>Eski Yöntem</h3>
                <ul>
                  <li>❌ Karışık Excel dosyaları</li>
                  <li>❌ WhatsApp ve not kağıtları</li>
                  <li>❌ Veri kaybı riski</li>
                  <li>❌ Manuel raporlama</li>
                </ul>
              </div>
              <div className={styles.compCenter}>VS</div>
              <div className={styles.compSide}>
                <h3 className={styles.compTitleAccent}>Yeni Sistem</h3>
                <ul>
                  <li>✅ Tek bir merkezi panel</li>
                  <li>✅ Otomatik iş akışları</li>
                  <li>✅ %100 veri güvenliği</li>
                  <li>✅ Saniyeler içinde rapor</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={`section ${styles.finalCta}`}>
          <div className="container">
            <div className={styles.ctaCard}>
              <h2>Sisteminizi birlikte planlayalım.</h2>
              <p>İşletmenizin ihtiyaçlarını analiz edelim, size en uygun sistemi kurgulayalım.</p>
              <div className={styles.ctaBtns}>
                <a href="https://wa.me/905384714674?text=Merhaba%2C%20i%C5%9Fletmem%20i%C3%A7in%20sistem%20yapt%C4%B1rmak%20istiyorum.%20Bilgi%20alabilir%20miyim%3F" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                  <MessageCircle size={20} /> Hemen Yazın
                </a>
                <Link href="/teklif-al" className="btn btn-primary btn-lg">Ücretsiz Analiz Al</Link>
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
