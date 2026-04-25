import Link from 'next/link'
import { ArrowRight, CheckCircle2, X } from 'lucide-react'
import styles from './WhyMe.module.css'

const comparison = [
  { aspect: 'Hazır tema / WordPress', them: true, me: false, note: 'Herkes aynı görünüyor, yavaş, kısıtlı' },
  { aspect: 'Sıfırdan özel geliştirme', them: false, me: true, note: 'Tam size göre, hızlı, güvenli' },
  { aspect: 'İş sürecinizi anlayan geliştirici', them: false, me: true, note: 'Teknik değil, iş odaklı çözüm' },
  { aspect: 'Uzun vadeli destek garantisi', them: false, me: true, note: 'Proje bitmez, ilişki devam eder' },
  { aspect: 'Şeffaf fiyat ve zaman planı', them: false, me: true, note: 'Sürpriz maliyet yok' },
  { aspect: 'Türkçe iletişim, hızlı yanıt', them: false, me: true, note: 'Aynı gün yanıt, anlayan biri' },
]

const strengths = [
  { title: '"Teknik konuşmayın, anlamıyorum" demeyin', desc: 'Süreci sizin dilinizde anlatıyorum. Ne yapıldığını, neden yapıldığını her adımda açıklıyorum.' },
  { title: 'Önce sorunu anlıyorum, sonra kod yazıyorum', desc: 'Pek çok geliştirici doğrudan koda girer. Ben önce iş sürecinizi anlıyor, sonra çözüm üretiyorum.' },
  { title: 'Proje teslim = ilişki başlangıcı', desc: 'Çoğu geliştirici teslimde kaybolur. Ben proje bittikten sonra da yanınızdayım; yeni özellik, bakım, güncelleme.' },
  { title: 'Zaman planına sözüm var', desc: 'Başlangıçta verilen takvime bağlıyım. Gecikme olursa önceden haberdar ederim.' },
]

export default function WhyMe() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div className="section-label">Neden Ben?</div>
          <h2 className="section-title">
            Yazılım Yaptıranların <span>%70&apos;i Hayal Kırıklığıyla</span> Bitirir.
          </h2>
          <p className="section-desc">
            Proje yarıda kalması, söylenen fiyatın 2 katına çıkması, teslim sonrası kayıplara karışma...
            Bu tuzaklardan kaçınmak için doğru geliştiriciyi seçmek kritik.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Comparison table */}
          <div className={styles.comparison}>
            <div className={styles.compHead}>
              <span>Kriter</span>
              <span>Hazır Sistem / Diğerleri</span>
              <span>Ben (Serhat)</span>
            </div>
            {comparison.map(c => (
              <div key={c.aspect} className={styles.compRow}>
                <div>
                  <span className={styles.compAspect}>{c.aspect}</span>
                  <span className={styles.compNote}>{c.note}</span>
                </div>
                <div className={styles.compCell}>
                  {c.them
                    ? <CheckCircle2 size={16} className={styles.yes} />
                    : <X size={16} className={styles.no} />}
                </div>
                <div className={styles.compCell}>
                  {c.me
                    ? <CheckCircle2 size={16} className={styles.yes} />
                    : <X size={16} className={styles.no} />}
                </div>
              </div>
            ))}
          </div>

          {/* Strengths */}
          <div className={styles.strengths}>
            {strengths.map(s => (
              <div key={s.title} className={styles.strengthCard}>
                <CheckCircle2 size={18} className={styles.checkIcon} />
                <div>
                  <h3 className={styles.strengthTitle}>{s.title}</h3>
                  <p className={styles.strengthDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
            <div className={styles.cta}>
              <p>Kendi değerlendirmenizi yapın — ilk görüşme ücretsiz.</p>
              <Link href="/teklif-al" className="btn btn-primary">
                Görüşme Planlayın <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
