import Link from 'next/link'
import { ArrowRight, Users, BarChart3, GraduationCap, Video, Globe, LayoutDashboard } from 'lucide-react'
import styles from './ProjectsPreview.module.css'

const projects = [
  {
    icon: Users,
    title: 'Aday Takip Sistemi',
    category: 'CRM / Operasyon',
    problem: 'Yüzlerce başvuru Excel ve e-postalarda kayboluyordu.',
    solution: 'Tüm başvuruları tek panelde toplayan, otomatik bildirimli sistem.',
    result: 'İşe alım sürecinde %60 verimlilik artışı',
    color: '#3B82F6',
  },
  {
    icon: GraduationCap,
    title: 'Eğitim Yönetim Paneli',
    category: 'Eğitim Yazılımı',
    problem: 'Öğrenci ödemeleri ve ders programı manuel takip ediliyordu.',
    solution: 'Hakediş, ödeme ve program yönetimini kapsayan tam LMS.',
    result: '500+ öğrenci hatasız yönetiliyor',
    color: '#10B981',
  },
  {
    icon: BarChart3,
    title: 'İş Takip & Raporlama',
    category: 'Veri & Analitik',
    problem: 'Haftalık raporları hazırlamak 4 saat sürüyordu.',
    solution: 'Tek tıkla Excel/PDF çıktı veren canlı dashboard.',
    result: 'Raporlama süresi 10 dakikaya düştü',
    color: '#8B5CF6',
  },
]

export default function ProjectsPreview() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bg} />
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">Gerçek Başarı Hikayeleri</div>
          <h2 className="section-title">Neleri <span>Çözdüm?</span></h2>
          <p className="section-desc">
            Sadece kod yazmıyorum; işletmelerin kangren olmuş süreçlerini dijital sistemlerle iyileştiriyorum.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.title} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.cardIcon} style={{ background: `${p.color}18`, borderColor: `${p.color}30`, color: p.color }}>
                  <p.icon size={20} />
                </div>
                <div className={styles.cardCat}>{p.category}</div>
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              
              <div className={styles.flow}>
                <div className={styles.flowItem}>
                  <span className={styles.flowLabel}>Problem:</span>
                  <p className={styles.flowText}>{p.problem}</p>
                </div>
                <div className={styles.flowItem}>
                  <span className={styles.flowLabel} style={{ color: 'var(--accent)' }}>Çözüm:</span>
                  <p className={styles.flowText}>{p.solution}</p>
                </div>
              </div>

              <div className={styles.result}>
                <span className={styles.resultDot} style={{ background: p.color }} />
                <strong>Sonuç:</strong> {p.result}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <Link href="/projeler" className="btn btn-primary">
            Daha Fazla Çözüm İncele <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
