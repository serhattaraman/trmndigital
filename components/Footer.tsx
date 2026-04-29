import Link from 'next/link'
import { Phone, Mail, MapPin, MessageCircle, Code2, ArrowRight } from 'lucide-react'
import styles from './Footer.module.css'
import Image from 'next/image'

const services = [
  { label: 'Kurumsal Web Tasarım', href: '/kurumsal-web-tasarim' },
  { label: 'Google Ads Yönetimi', href: '/google-ads' },
  { label: 'Özel Yazılım Çözümleri', href: '/hizmetler/ozel-yazilim' },
  { label: 'CRM & ERP Sistemleri', href: '/hizmetler/crm-erp' },
  { label: 'Süreç Otomasyonları', href: '/hizmetler/otomasyon' },
  { label: 'İş Takip & Raporlama', href: '/hizmetler/is-takip' },
]

const quickLinks = [
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Projelerimiz', href: '/projeler' },
  { label: 'Çalışma Sürecimiz', href: '/surec' },
  { label: 'Sık Sorulan Sorular', href: '/sss' },
  { label: 'Blog', href: '/blog' },
  { label: 'Teklif Al', href: '/teklif-al' },
]

const legal = [
  { label: 'Gizlilik Politikası', href: '/gizlilik-politikasi' },
  { label: 'KVKK & Çerez Politikası', href: '/kvkk' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.brand}>
              <Link href="/" className={styles.logo}>
                <Image 
                  src="/logo.png" 
                  alt="TRMN Digital" 
                  width={140} 
                  height={40} 
                  className={styles.logoImg} 
                />
              </Link>
              <p className={styles.brandDesc}>
                İşletmenizin dijital altyapısını uçtan uca, ihtiyacınıza özel olarak geliştiriyoruz. Hazır kalıplar değil, performansa dayalı gerçek dijital sistemler inşa ediyoruz.
              </p>
              <div className={styles.contact}>
                <a href="tel:+905384714674" className={styles.contactItem}>
                  <Phone size={15} /> <span>+90 538 471 46 74</span>
                </a>
                <a href="mailto:info@trmndigital.com" className={styles.contactItem}>
                  <Mail size={15} /> <span>info@trmndigital.com</span>
                </a>
                <a href="https://wa.me/905384714674" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                  <MessageCircle size={15} /> <span>WhatsApp ile Yaz</span>
                </a>
                <div className={styles.contactItem}>
                  <MapPin size={15} /> <span>TRMN Digital, Şeyh Şamil, 21080 Bağlar/Diyarbakır</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className={styles.colTitle}>Hizmetlerimiz</h4>
              <ul className={styles.linkList}>
                {services.map(s => (
                  <li key={s.href}>
                    <Link href={s.href} className={styles.footerLink}>
                      <ArrowRight size={12} /> {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={styles.colTitle}>Hızlı Erişim</h4>
              <ul className={styles.linkList}>
                {quickLinks.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.footerLink}>
                      <ArrowRight size={12} /> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={styles.colTitle}>Proje Başlatalım</h4>
              <p className={styles.ctaText}>Aklınızdaki projeyi ekibimizle birlikte değerlendirelim. İlk görüşme ücretsizdir.</p>
              <Link href="/teklif-al" className={`btn btn-primary ${styles.footerCta}`}>
                Ücretsiz Keşif Görüşmesi
              </Link>
              <a href="https://wa.me/905384714674?text=Merhaba, proje hakkında görüşmek istiyorum." target="_blank" rel="noopener noreferrer" className={`btn btn-whatsapp ${styles.footerCta}`}>
                <MessageCircle size={16} /> WhatsApp&apos;tan Yaz
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copy}>© 2024 - 2026 TRMN Digital. Tüm hakları saklıdır.</p>
            <div className={styles.legal}>
              {legal.map(l => (
                <Link key={l.href} href={l.href} className={styles.legalLink}>{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
