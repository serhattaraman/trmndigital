import Link from 'next/link'
import { ArrowRight, X, CheckCircle2 } from 'lucide-react'
import styles from './ProblemSolution.module.css'

const problems = [
  {
    pain: 'Müşteri bilgilerini Excel\'de tutuyorsunuz.',
    fix: 'Tüm müşteri geçmişi, notu ve iletişim kaydı tek panelde.',
    before: 'Kayıp veri, geç yanıt, unutulan takip',
    after: 'Sıfır kayıp, otomatik hatırlatma, anlık durum',
  },
  {
    pain: 'Her personel kendi not defterini kullanıyor.',
    fix: 'Ortak platform, ortak bilgi. Kim ne yaptı, kim ne planlıyor — herkes görüyor.',
    before: 'Dağınık bilgi, yönetim zorluğu',
    after: 'Şeffaf ekip yönetimi, kolay denetim',
  },
  {
    pain: 'Haftalık raporu hazırlamak saatler alıyor.',
    fix: 'Dashboard\'dan tek tıkla PDF veya Excel. Veriler zaten sisteminizde.',
    before: 'Manuel derleme, hata riski, zaman kaybı',
    after: 'Saniyeler içinde güncel rapor',
  },
  {
    pain: 'Hangi müşteri aday aşamasında, hangi süreçte — bilmiyorsunuz.',
    fix: 'Durum bazlı takip, otomatik bildirim, görsel kanban.',
    before: 'Gözden kaçan fırsatlar, tepkisiz kalma',
    after: 'Her adayı, her fırsatı kontrol altında tut',
  },
]

export default function ProblemSolution() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.bg} />
      <div className="container">
        <div className={styles.header}>
          <div className="section-label" style={{ background: 'rgba(239,68,68,0.08)', borderColor: 'rgba(239,68,68,0.25)', color: '#FCA5A5' }}>
            İşletmenizdeki Gizli Kayıplar
          </div>
          <h2 className="section-title">
            İşleriniz Kontrolden mi Çıkıyor?<br />
            <span>Dijital Düzenle Geri Kazanın.</span>
          </h2>
          <p className="section-desc">
            Excel dosyaları, WhatsApp grupları ve kaybolan notlar arasında boğulmayın. 
            İşinizi değil, sadece kaosu yönetiyor olabilirsiniz.
          </p>
        </div>

        <div className={styles.grid}>
          {problems.map((p, i) => (
            <div key={i} className={styles.card}>
              {/* Problem side */}
              <div className={styles.problemSide}>
                <div className={styles.sideLabel}>
                  <X size={12} /> Şu an yaşanan
                </div>
                <p className={styles.painText}>{p.pain}</p>
                <div className={styles.tag} style={{ background: 'rgba(239,68,68,0.08)', borderColor: 'rgba(239,68,68,0.2)', color: '#FCA5A5' }}>
                  {p.before}
                </div>
              </div>

              {/* Arrow */}
              <div className={styles.arrow}><ArrowRight size={20} /></div>

              {/* Solution side */}
              <div className={styles.solutionSide}>
                <div className={styles.sideLabel} style={{ color: 'var(--success)', background: 'rgba(16,185,129,0.08)', borderColor: 'rgba(16,185,129,0.2)' }}>
                  <CheckCircle2 size={12} /> Sistemle
                </div>
                <p className={styles.fixText}>{p.fix}</p>
                <div className={styles.tag} style={{ background: 'rgba(16,185,129,0.08)', borderColor: 'rgba(16,185,129,0.2)', color: '#34D399' }}>
                  {p.after}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.midCTA}>
          <p className={styles.midCTAText}>
            Bu sorunlardan birini yaşıyorsanız, çözüm için birlikte 15 dakika konuşalım.
          </p>
          <div className={styles.midCTABtns}>
            <Link href="/teklif-al" className="btn btn-primary">
              Sistemimi Planla <ArrowRight size={16} />
            </Link>
            <a href="https://wa.me/905XXXXXXXXX?text=Merhaba%2C%20sistemim%20hakk%C4%B1nda%20konu%C5%9Fmak%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              WhatsApp&apos;tan Yaz
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
