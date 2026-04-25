import Link from 'next/link'
import { Globe, LayoutDashboard, BarChart3, Users, GraduationCap, Zap, ArrowRight, Settings, FileText, Target } from 'lucide-react'
import styles from './ServicesPreview.module.css'

const services = [
  {
    icon: Globe,
    title: 'Kurumsal Web Sitesi',
    desc: 'Firmanızın dijital kimliğini yansıtan, SEO odaklı, hızlı ve güven veren kurumsal site.',
    href: '/hizmetler/kurumsal-web-sitesi',
    tag: 'Popüler',
  },
  {
    icon: LayoutDashboard,
    title: 'Özel Yönetim Paneli',
    desc: 'İşletmenizin tüm verilerini tek ekranda yönetebileceğiniz sıfırdan özel admin paneli.',
    href: '/hizmetler/yonetim-paneli',
    tag: 'En Çok Tercih',
  },
  {
    icon: BarChart3,
    title: 'İş Takip & Raporlama',
    desc: 'Süreçlerinizi, ekibinizi ve operasyonel verilerinizi gerçek zamanlı takip eden sistemler.',
    href: '/hizmetler/is-takip-raporlama',
    tag: null,
  },
  {
    icon: Users,
    title: 'CRM & Operasyon Paneli',
    desc: 'Müşteri ilişkileri, aday takibi ve iş akışlarını tek çatı altında yöneten özel platformlar.',
    href: '/hizmetler/crm-operasyon',
    tag: null,
  },
  {
    icon: GraduationCap,
    title: 'Eğitim Yönetim Sistemi',
    desc: 'Kurs, öğrenci, öğretmen ve hakediş yönetimini kapsayan özel eğitim yazılımları.',
    href: '/hizmetler/egitim-yonetim',
    tag: null,
  },
  {
    icon: Zap,
    title: 'Otomasyon & Entegrasyon',
    desc: 'Tekrarlayan süreçleri otomatize edin, farklı sistemleri entegre edin, zamandan kazanın.',
    href: '/hizmetler/otomasyon',
    tag: null,
  },
  {
    icon: FileText,
    title: 'Form & Başvuru Sistemleri',
    desc: 'Başvuru, kayıt ve veri toplama süreçlerinizi dijitalleştiren akıllı form altyapısı.',
    href: '/hizmetler/form-basvuru',
    tag: null,
  },
  {
    icon: Target,
    title: 'Google Ads Landing Page',
    desc: 'Reklam trafiğini müşteriye dönüştüren, A/B test uyumlu, yüksek dönüşümlü sayfa.',
    href: '/hizmetler/landing-page',
    tag: null,
  },
  {
    icon: Settings,
    title: 'Bakım & Teknik Destek',
    desc: 'Mevcut projenizin sürdürülebilirliği için düzenli bakım, güncelleme ve teknik destek.',
    href: '/hizmetler/bakim-destek',
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
