import Link from 'next/link'
import { ArrowRight, LayoutDashboard, Globe } from 'lucide-react'
import styles from './CustomerSelector.module.css'

export default function CustomerSelector() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">Hangi Çözüm Size Uygun?</div>
          <h2 className="section-title">İhtiyacınıza Göre <span>Doğru Yolu Seçin</span></h2>
          <p className="section-desc">İki farklı müşteri profiline özel iki farklı çözüm sunuyorum.</p>
        </div>

        <div className={styles.cards}>
          {/* Card 1: Custom System */}
          <div className={`${styles.card} ${styles.cardSystem}`}>
            <div className={styles.cardIcon} style={{ background: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.3)', color: '#3B82F6' }}>
              <LayoutDashboard size={28} />
            </div>
            <div className={styles.cardBadge} style={{ background: 'rgba(59,130,246,0.1)', color: '#60A5FA' }}>
              Özel Yazılım / Sistem
            </div>
            <h3 className={styles.cardTitle}>CRM, Panel & Otomasyon</h3>
            <p className={styles.cardDesc}>
              Excel ile boğuşan, süreçlerini dijitalleştirmek isteyen, büyüyen işletmeler için.
            </p>
            <ul className={styles.cardList}>
              <li>✓ Özel Yönetim Paneli</li>
              <li>✓ CRM ve Müşteri Takibi</li>
              <li>✓ Raporlama & Dashboard</li>
              <li>✓ Otomasyon & Entegrasyon</li>
            </ul>
            <div className={styles.cardFor}>
              <strong>Kimler için?</strong>
              <span>Orta-büyük işletmeler, aday takip sistemleri, eğitim kurumları</span>
            </div>
            <div className={styles.cardCtas}>
              <Link href="/is-takip-sistemi" className="btn btn-primary">
                Detayları Gör <ArrowRight size={16} />
              </Link>
              <a href="/teklif-al" className="btn btn-ghost btn-sm">Teklif Al</a>
            </div>
          </div>

          {/* Divider */}
          <div className={styles.divider}>
            <span>VEYA</span>
          </div>

          {/* Card 2: Web Site */}
          <div className={`${styles.card} ${styles.cardWeb}`}>
            <div className={styles.cardIcon} style={{ background: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.3)', color: '#10B981' }}>
              <Globe size={28} />
            </div>
            <div className={styles.cardBadge} style={{ background: 'rgba(16,185,129,0.1)', color: '#34D399' }}>
              Kurumsal Web Sitesi
            </div>
            <h3 className={styles.cardTitle}>Profesyonel Dijital Vitrin</h3>
            <p className={styles.cardDesc}>
              Google&apos;da görünmek isteyen, hızlı ve uygun bütçeli profesyonel site arayan işletmeler için.
            </p>
            <ul className={styles.cardList}>
              <li>✓ Tanıtım & Hizmet Sayfaları</li>
              <li>✓ SEO & Google Haritalar</li>
              <li>✓ WhatsApp Entegrasyonu</li>
              <li>✓ Mobil Uyumlu, Hızlı</li>
            </ul>
            <div className={styles.cardFor}>
              <strong>Kimler için?</strong>
              <span>Küçük işletmeler, esnaflar, hizmet sektörü</span>
            </div>
            <div className={styles.cardCtas}>
              <Link href="/kurumsal-web-sitesi" className="btn btn-primary" style={{ background: '#10B981', boxShadow: '0 4px 20px rgba(16,185,129,0.35)' }}>
                Detayları Gör <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/905384714674?text=Merhaba%2C%20kurumsal%20web%20sitesi%20yapt%C4%B1rmak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-sm">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
