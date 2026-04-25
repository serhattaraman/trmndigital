import styles from './Testimonials.module.css'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Mehmet A.',
    role: 'Kurum Müdürü',
    company: 'Diyarbakır Özel Eğitim Kurumu',
    initials: 'MA',
    color: '#3B82F6',
    stars: 5,
    quote: 'Öğrenci devam takibimiz, hakediş hesaplamalarımız ve veli bildirimlerimiz tamamen otomatiğe döndü. Haftalık 6 saat manuel iş ortadan kalktı. Sistem tam istediğimiz gibi çalışıyor.',
    tag: 'Eğitim Yönetim Sistemi',
  },
  {
    name: 'Fatma Ç.',
    role: 'Genel Müdür',
    company: 'FÇ Danışmanlık',
    initials: 'FÇ',
    color: '#10B981',
    stars: 5,
    quote: 'Müşteri takibimizi Excel\'den bu sisteme taşıdığımızda ilk hafta içinde 3 kaçan fırsatı geri kazandık. Artık hangi müşterimizin hangi aşamada olduğunu anlık görüyoruz.',
    tag: 'CRM & Operasyon Paneli',
  },
  {
    name: 'Ali K.',
    role: 'Kurucu Ortak',
    company: 'Anadolu İK Çözümleri',
    initials: 'AK',
    color: '#8B5CF6',
    stars: 5,
    quote: 'Aday takip sistemimiz çok işlevsel oldu. Günde 50-60 başvuru alıyoruz, hiçbiri gözden kaçmıyor. Ekibimiz çok memnun, biz de çok memnunuz. Teşekkürler Serhat Bey.',
    tag: 'Aday Takip Sistemi',
  },
  {
    name: 'Yusuf D.',
    role: 'İşletme Sahibi',
    company: 'YD Mühendislik',
    initials: 'YD',
    color: '#F59E0B',
    stars: 5,
    quote: 'Web sitemiz yenilendikten sonra Google Ads\'den gelen trafik çok daha verimli değerlendirilmeye başlandı. İlk ay 4 yeni proje talebi aldık. Çok memnunuz.',
    tag: 'Kurumsal Web Sitesi',
  },
]

export default function Testimonials() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bg} />
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">Müşteri Yorumları</div>
          <h2 className="section-title">
            Onlar Yaşadı, <span>Sonucu Gördü</span>
          </h2>
          <p className="section-desc">
            Güvensiz mi? Anlaşılır. Bu yüzden önce projelere bakmanızı öneriyorum.
          </p>
        </div>

        <div className={styles.grid}>
          {reviews.map(r => (
            <div key={r.name} className={styles.card}>
              <div className={styles.stars}>
                {Array(r.stars).fill(0).map((_, i) => (
                  <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <blockquote className={styles.quote}>&ldquo;{r.quote}&rdquo;</blockquote>
              <div className={styles.footer}>
                <div className={styles.avatar} style={{ background: `${r.color}20`, color: r.color, borderColor: `${r.color}30` }}>{r.initials}</div>
                <div>
                  <div className={styles.name}>{r.name}</div>
                  <div className={styles.role}>{r.role} · {r.company}</div>
                </div>
                <span className={styles.chip}>{r.tag}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.trustRow}>
          {[
            { value: '30+', label: 'Tamamlanan proje' },
            { value: '%100', label: 'Müşteri memnuniyeti' },
            { value: '5+', label: 'Yıl deneyim' },
            { value: '7/24', label: 'Teknik destek' },
          ].map(t => (
            <div key={t.label} className={styles.stat}>
              <div className={styles.statValue}>{t.value}</div>
              <div className={styles.statLabel}>{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
