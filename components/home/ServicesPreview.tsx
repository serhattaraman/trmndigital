import Link from 'next/link'
import { Globe, LayoutDashboard, BarChart3, Users, GraduationCap, Zap, ArrowRight, Settings, FileText, Target } from 'lucide-react'
import styles from './ServicesPreview.module.css'

const services = [
  {
    icon: Globe,
    title: 'Kurumsal Web Tasarım',
    desc: 'Markanızı dijitalde güçlü gösteren, hızlı, SEO odaklı ve modern kurumsal web çözümleri.',
    href: '/kurumsal-web-tasarim',
    tag: 'Popüler',
  },
  {
    icon: Target,
    title: 'Google Ads Yönetimi',
    desc: 'Reklam bütçenizi en verimli şekilde yöneterek, hedef kitlenize doğrudan ulaşmanızı sağlıyoruz.',
    href: '/google-ads',
    tag: 'Performans',
  },
  {
    icon: LayoutDashboard,
    title: 'Özel Yazılım Çözümleri',
    desc: 'İşletmenize özel CRM, ERP ve yönetim panelleriyle tüm süreçlerinizi dijitalleştiriyoruz.',
    href: '/hizmetler/ozel-yazilim',
    tag: 'En Çok Tercih',
  },
  {
    icon: Zap,
    title: 'Süreç Otomasyonları',
    desc: 'Tekrarlayan işleri otomatiğe bağlayarak zaman ve maliyet tasarrufu sağlayan sistemler kuruyoruz.',
    href: '/hizmetler/otomasyon',
    tag: null,
  },
  {
    icon: Users,
    title: 'CRM & ERP Sistemleri',
    desc: 'Müşteri ilişkileri ve kaynak yönetimini tek çatı altında toplayan ölçeklenebilir platformlar.',
    href: '/hizmetler/crm-erp',
    tag: null,
  },
  {
    icon: BarChart3,
    title: 'İş Takip & Raporlama',
    desc: 'Operasyonel verilerinizi gerçek zamanlı takip eden ve karar almayı kolaylaştıran dashboardlar.',
    href: '/hizmetler/is-takip',
    tag: null,
  },
]

export default function ServicesPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className="section-label">Hizmetler</div>
            <h2 className="section-title">İşletmenize Özel <span>Dijital Çözümler</span></h2>
          </div>
          <div className={styles.headerRight}>
            <p className="section-desc">
              Hazır şablonlar değil, işinizin gerçek ihtiyaçlarına göre tasarlanan ve geliştirilen sistemler.
            </p>
            <Link href="/hizmetler" className="btn btn-outline">
              Tüm Hizmetler <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <Link key={service.href} href={service.href} className={styles.card}>
              {service.tag && (
                <div className={styles.tag}>{service.tag}</div>
              )}
              <div className={styles.cardIcon}>
                <service.icon size={22} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
              <div className={styles.cardArrow}>
                Detaylı İncele <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
