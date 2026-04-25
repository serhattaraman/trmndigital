import Link from 'next/link'
import { ArrowRight, GraduationCap, Users, Briefcase, Building2, Heart, ShoppingBag } from 'lucide-react'
import styles from './WhoFor.module.css'

const segments = [
  {
    icon: GraduationCap,
    title: 'Eğitim Kurumları & Kurs Merkezleri',
    problems: ['Öğrenci devam takibi manuel yapılıyor', 'Öğretmen hakediş hesaplamaları karmaşık', 'Velilere bildirim geç ulaşıyor'],
    solution: 'Eğitim yönetim paneli — kayıt, devam, hakediş, bildirim hepsi otomatik.',
    href: '/hizmetler/egitim-yonetim',
    color: '#10B981',
  },
  {
    icon: Users,
    title: 'İnsan Kaynakları & İşe Alım Firmaları',
    problems: ['Yüzlerce aday Excel\'de kayboluyor', 'Hangi aday hangi aşamada bilinmiyor', 'Süreçler tekrarlanıyor, zaman harcanıyor'],
    solution: 'Aday takip sistemi (ATS) — başvurudan işe alıma kadar tam kontrol.',
    href: '/hizmetler/crm-operasyon',
    color: '#3B82F6',
  },
  {
    icon: Briefcase,
    title: 'Danışmanlık & Hizmet Firmaları',
    problems: ['Müşteri geçmişi birden fazla yerde', 'Teklif takibi yapılamıyor', 'Görev yönetimi eksik'],
    solution: 'CRM ve operasyon paneli — müşteri, görev, teklif, iletişim tek yerde.',
    href: '/hizmetler/crm-operasyon',
    color: '#8B5CF6',
  },
  {
    icon: Building2,
    title: 'Orta & Büyük Ölçekli İşletmeler',
    problems: ['Bölümler arası veri akışı yok', 'Yönetim anlık durumu göremez', 'Raporlama manuel ve yavaş'],
    solution: 'Kurumsal dashboard ve raporlama sistemi — anlık KPI, bölüm bazlı görünüm.',
    href: '/hizmetler/is-takip-raporlama',
    color: '#F59E0B',
  },
  {
    icon: Heart,
    title: 'Sağlık & Wellness İşletmeleri',
    problems: ['Randevu takibi karmaşık', 'Hasta/müşteri geçmişi dağınık', 'Hatırlatma mesajları manuel'],
    solution: 'Randevu yönetimi ve müşteri takip sistemi — otomatik hatırlatma dahil.',
    href: '/teklif-al',
    color: '#EC4899',
  },
  {
    icon: ShoppingBag,
    title: 'Yerel & Küçük İşletmeler',
    problems: ['Müşteri yok, sadece sosyal medya var', 'Google\'da görünmüyor', 'Potansiyel müşteri kaçıyor'],
    solution: 'Dönüşüm odaklı kurumsal web sitesi — Google\'da görün, müşteri kazan.',
    href: '/hizmetler/kurumsal-web-sitesi',
    color: '#06B6D4',
  },
]

export default function WhoFor() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">Bu Sistem Kimler İçin?</div>
          <h2 className="section-title">
            İşletmenizin Türü Farklı Olabilir.<br />
            <span>Problem Genellikle Aynıdır.</span>
          </h2>
          <p className="section-desc">
            Hangi sektörde olursanız olun, dağınık süreçler ve kontrol kaybı ortak problemdir.
            Her işletme türüne özel çözüm geliştiriyorum.
          </p>
        </div>

        <div className={styles.grid}>
          {segments.map(s => (
            <Link key={s.title} href={s.href} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.icon} style={{ background: `${s.color}15`, borderColor: `${s.color}30`, color: s.color }}>
                  <s.icon size={22} />
                </div>
                <h3 className={styles.title}>{s.title}</h3>
              </div>
              <ul className={styles.problems}>
                {s.problems.map(p => (
                  <li key={p} className={styles.problem}>
                    <span className={styles.xDot}>✗</span> {p}
                  </li>
                ))}
              </ul>
              <div className={styles.solution}>
                <span className={styles.checkDot}>✓</span>
                <span>{s.solution}</span>
              </div>
              <div className={styles.cardLink} style={{ color: s.color }}>
                Çözümü İncele <ArrowRight size={13} />
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.bottom}>
          <p>Listede işletme türünüzü görmüyor musunuz?</p>
          <Link href="/teklif-al" className="btn btn-primary">
            İhtiyacımı Anlatayım <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
