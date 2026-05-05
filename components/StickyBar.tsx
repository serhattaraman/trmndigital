'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MessageCircle, X, Zap } from 'lucide-react'
import styles from './StickyBar.module.css'

/**
 * Haftalık deterministik slot sayısı hesaplar.
 *
 * Mantık:
 * - Her haftanın başında (Pazartesi) 3-5 arası farklı bir slotla başlar.
 *   (Hafta numarasına göre değişir → her hafta farklı ama tutarlı)
 * - Hafta içi geçen gün sayısına göre azalır (Pzt → Cum).
 * - 1 kaldığında "Son slot" yazar.
 * - Hafta sonu (C.tesi/Pazar) bir sonraki haftanın sayısını gösterir.
 */
function getSlotInfo(): { count: number; isLast: boolean } {
  const now = new Date()

  // Yılın kaçıncı haftası (0 tabanlı)
  const startOfYear = new Date(now.getFullYear(), 0, 1)
  const weekNum = Math.floor(
    (now.getTime() - startOfYear.getTime()) / (7 * 24 * 60 * 60 * 1000)
  )

  // Haftanın başlangıç slot sayısı: hafta numarasına göre 3, 4 veya 5
  // (deterministik ama her hafta farklı)
  const baseSlots = (weekNum % 3) + 3   // → 3, 4, 5, 3, 4, 5 ...

  // Haftanın kaçıncı günü (0=Paz, 1=Pzt … 5=Cum, 6=Cts)
  // Pazartesi = gün 0 olarak alıyoruz
  const rawDay = now.getDay()
  const dayIndex = rawDay === 0 ? 6 : rawDay - 1   // Pzt=0 … Paz=6

  // İş günü sayısı (Pzt–Cum = 0-4). Hafta sonu ise bir sonraki Pzt gibi davran
  const workDay = Math.min(dayIndex, 4)

  // Her iki iş gününde bir 1 azalır (Pzt: base, Çrş: base-1, Cum: base-2)
  const slotsUsed = Math.floor(workDay / 2)
  const remaining = Math.max(1, baseSlots - slotsUsed)

  return { count: remaining, isLast: remaining === 1 }
}

export default function StickyBar() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [slotInfo, setSlotInfo] = useState({ count: 2, isLast: false })

  // Slot bilgisini client tarafında hesapla (hydration uyumsuzluğunu önlemek için)
  useEffect(() => {
    setSlotInfo(getSlotInfo())
  }, [])

  // 300px scroll sonrası göster
  useEffect(() => {
    if (dismissed) return
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [dismissed])

  if (dismissed) return null

  const slotLabel = slotInfo.isLast
    ? 'Son slot açık'
    : `Bu hafta ${slotInfo.count} slot açık`

  const subLabel = slotInfo.isLast
    ? 'Hemen rezervasyon yapın!'
    : 'sisteminizi planlayalım'

  return (
    <div
      className={`${styles.bar} ${visible ? styles.visible : ''}`}
      role="complementary"
      aria-label="Hızlı iletişim çubuğu"
    >
      {/* Sol — durum mesajı */}
      <div className={styles.left}>
        <span
          className={`${styles.pulse} ${slotInfo.isLast ? styles.pulseLast : ''}`}
          aria-hidden="true"
        />
        <span className={styles.msg}>
          <strong className={slotInfo.isLast ? styles.lastText : ''}>
            {slotLabel}
          </strong>
          <span className={styles.sep}>—</span>
          <span className={styles.sub}>{subLabel}</span>
        </span>
      </div>

      {/* Sağ — aksiyonlar */}
      <div className={styles.actions}>
        <a
          href="https://wa.me/905384714674"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnWa}
          aria-label="WhatsApp ile iletişime geçin"
        >
          <MessageCircle size={15} />
          <span>WhatsApp</span>
        </a>

        <Link href="/teklif-al" className={styles.btnCta}>
          <Zap size={13} />
          Hemen Yaz
        </Link>

        <button
          className={styles.close}
          onClick={() => setDismissed(true)}
          aria-label="Bildirimi kapat"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  )
}
