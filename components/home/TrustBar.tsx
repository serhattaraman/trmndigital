import styles from './TrustBar.module.css'
import { CheckCircle2, Clock, Users, Award, Headphones, Code2 } from 'lucide-react'

const items = [
  { icon: Code2, label: 'Sıfırdan Özel Geliştirme', desc: 'Hazır tema yok' },
  { icon: Clock, label: 'Hızlı Teslimat', desc: 'Söz verilen sürede' },
  { icon: Users, label: 'Her Ölçekte İşletme', desc: 'KOBİ — Kurumsal' },
  { icon: CheckCircle2, label: 'Mobil Uyumlu', desc: 'Tüm cihazlarda kusursuz' },
  { icon: Award, label: 'SEO Odaklı Altyapı', desc: 'Google uyumlu yapı' },
  { icon: Headphones, label: 'Uzun Vadeli Destek', desc: 'Proje bitmez, gelişir' },
]

export default function TrustBar() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {items.map((item) => (
            <div key={item.label} className={styles.item}>
              <div className={styles.icon}><item.icon size={20} /></div>
              <div>
                <div className={styles.label}>{item.label}</div>
                <div className={styles.desc}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
