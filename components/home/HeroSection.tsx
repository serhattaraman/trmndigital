import Link from 'next/link'
import { ArrowRight, MessageCircle, Phone, CheckCircle2 } from 'lucide-react'
import styles from './HeroSection.module.css'

const headlines = [
  { problem: 'Excel ile takip yapmayı bırakın.', solution: 'İşletmenizi tek ekrandan yönetin.' },
]

const benefits = [
  { icon: '⏱', text: 'Haftalar içinde kullanıma hazır' },
  { icon: '🎯', text: 'Tam sizin iş akışınıza göre' },
  { icon: '📊', text: 'Anlık raporlar, sıfır kayıp' },
]

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgEffects}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={styles.grid} />
      </div>

      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            {/* Problem badge */}
            <div className={styles.problemBadge}>
              <span className={styles.badgeDot} />
              Dağınık sistemler, kayıp veriler, kontrolsüz süreçler?
            </div>

            {/* Headline — problem first */}
            <h1 className={styles.headline}>
              Excel ile zaman<br />
              <span className={styles.strike}>kaybetmeyi bırakın.</span><br />
              <span className={styles.accent}>İşinizi tek panelden yönetin.</span>
            </h1>

            <p className={styles.sub}>
              İşletmenize özel <strong>Yönetim Paneli, CRM ve İş Takip Sistemleri</strong> geliştiriyorum.
              Dağınık süreçleri tek merkezde toplayın, kontrolü elinize alın.
            </p>

            {/* Benefits row */}
            <div className={styles.benefits}>
              {benefits.map(b => (
                <div key={b.text} className={styles.benefit}>
                  <span className={styles.benefitIcon}>{b.icon}</span>
                  <span>{b.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className={styles.ctas}>
              <Link href="/teklif-al" className={`btn btn-primary btn-lg ${styles.ctaPrimary}`}>
                Hemen Sistemini Planla <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/905384714674?text=Merhaba%2C%20i%C5%9Fletmem%20i%C3%A7in%20bir%20sistem%20geli%C5%9Ftirmek%20istiyorum.%20Bilgi%20alabilir%20miyim%3F"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-whatsapp btn-lg`}
              >
                <MessageCircle size={18} /> WhatsApp&apos;tan Yaz
              </a>
            </div>

            {/* Social proof micro */}
            <div className={styles.microProof}>
              <div className={styles.avatars}>
                {['MA', 'FÇ', 'AK', 'YD'].map(a => (
                  <div key={a} className={styles.avatar}>{a}</div>
                ))}
              </div>
              <p>
                <strong>30+ işletme</strong> sistemlerini bana emanet etti.
                <Link href="/projeler" className={styles.proofLink}> Projelere bak →</Link>
              </p>
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className={styles.visual}>
            <div className={styles.dashboardMock}>
              <div className={styles.mockBar}>
                <div className={styles.mockDots}><span /><span /><span /></div>
                <div className={styles.mockTitle}>panel.işletmeniz.com</div>
                <div className={styles.mockLive}>● Canlı</div>
              </div>
              <div className={styles.mockContent}>
                <div className={styles.mockStats}>
                  {[
                    { label: 'Toplam Başvuru', value: '1,248', change: '+12%', color: '#3B82F6' },
                    { label: 'Bu Hafta', value: '84', change: '+5%', color: '#10B981' },
                    { label: 'Tamamlanan', value: '964', change: '+8%', color: '#8B5CF6' },
                  ].map(s => (
                    <div key={s.label} className={styles.statCard}>
                      <div className={styles.statLabel}>{s.label}</div>
                      <div className={styles.statValue} style={{ color: s.color }}>{s.value}</div>
                      <div className={styles.statChange}>{s.change} bu ay</div>
                    </div>
                  ))}
                </div>
                <div className={styles.mockChart}>
                  <div className={styles.chartTitle}>Haftalık Aktivite</div>
                  <div className={styles.bars}>
                    {[65, 82, 58, 91, 76, 88, 95].map((h, i) => (
                      <div key={i} className={styles.barWrap}>
                        <div className={styles.bar} style={{ height: `${h}%` }} />
                      </div>
                    ))}
                  </div>
                  <div className={styles.chartDays}>
                    {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map(d => (
                      <span key={d}>{d}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.mockTable}>
                  <div className={styles.tableHead}>
                    <span>Ad Soyad</span><span>Durum</span><span>Tarih</span>
                  </div>
                  {[
                    { name: 'Ahmet Yılmaz', status: 'Onaylandı', statusC: '#10B981', date: 'Bugün' },
                    { name: 'Zeynep Kaya', status: 'İncelemede', statusC: '#F59E0B', date: 'Dün' },
                    { name: 'Murat Demir', status: 'Beklemede', statusC: '#64748B', date: '2 gün' },
                  ].map(r => (
                    <div key={r.name} className={styles.tableRow}>
                      <span>{r.name}</span>
                      <span style={{ color: r.statusC, fontWeight: 600 }}>{r.status}</span>
                      <span>{r.date}</span>
                    </div>
                  ))}
                </div>
                {/* Notification */}
                <div className={styles.notification}>
                  <CheckCircle2 size={14} className={styles.notifIcon} />
                  <span>Yeni başvuru otomatik sisteme eklendi</span>
                  <span className={styles.notifTime}>az önce</span>
                </div>
              </div>
            </div>
            <div className={styles.floatBadge1}>✅ Hazır tema yok — sıfırdan özel</div>
            <div className={styles.floatBadge2}>🔒 Verileriniz tamamen güvende</div>
          </div>
        </div>
      </div>
    </section>
  )
}
