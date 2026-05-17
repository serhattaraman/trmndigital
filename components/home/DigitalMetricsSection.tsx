'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, TrendingUp, ArrowUpRight, Globe, Target, MousePointerClick, BarChart3, Search, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import dmStyles from '@/app/digitalmetrics.module.css'

function useCounter(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number
    const step = (ts: number) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return value
}

const chartBars = [28, 42, 37, 55, 48, 67, 72, 61, 80, 88, 76, 95]

function MiniBarChart({ animate }: { animate: boolean }) {
  return (
    <div className={dmStyles.chart}>
      {chartBars.map((h, i) => (
        <motion.div
          key={i}
          className={dmStyles.chartBar}
          initial={{ height: 0 }}
          animate={animate ? { height: `${h}%` } : { height: 0 }}
          transition={{ duration: 0.6, delay: animate ? i * 0.05 : 0, ease: 'easeOut' }}
        />
      ))}
    </div>
  )
}

const seoRows = [
  { keyword: 'dijital ajans ankara', pos: 1, change: +3 },
  { keyword: 'kurumsal web tasarım', pos: 2, change: +5 },
  { keyword: 'google ads yönetimi', pos: 1, change: +2 },
  { keyword: 'özel yazılım çözümleri', pos: 3, change: +8 },
  { keyword: 'e-ticaret sitesi fiyat', pos: 4, change: +1 },
]

const adRows = [
  { name: 'Web Tasarım', spend: '₺2.400', conv: 18, roas: '4.2x', status: 'active' },
  { name: 'Google Ads', spend: '₺3.100', conv: 24, roas: '5.8x', status: 'active' },
  { name: 'Yazılım', spend: '₺1.800', conv: 11, roas: '3.7x', status: 'active' },
]

export default function DigitalMetricsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const roasVal = useCounter(420, 1600, inView)
  const convRate = useCounter(78, 1400, inView)
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [])
  const clicksVal = useCounter(12400, 2000, inView)

  return (
    <section className={dmStyles.section} ref={ref}>
      <div className="container">
        <motion.div
          className={dmStyles.header}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={dmStyles.label}>
            <Zap size={13} /> Dijital Büyüme Platformu
          </span>
          <h2 className={dmStyles.title}>
            Sadece web sitesi değil,<br />
            <span>dijital sistemler kuruyoruz.</span>
          </h2>
          <p className={dmStyles.sub}>
            TRMN Digital olarak abartılı vaatler yerine işletmenize gerçekten değer katan,
            ölçülebilir sonuçlar üreten çözümler geliştiriyoruz.
          </p>
        </motion.div>

        <div className={dmStyles.grid}>
          <motion.div
            className={dmStyles.card}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={dmStyles.cardHeader}>
              <div className={dmStyles.cardIcon} style={{ background: 'rgba(16,185,129,0.12)', color: '#10B981' }}>
                <TrendingUp size={18} />
              </div>
              <div>
                <div className={dmStyles.cardTitle}>SEO Performansı</div>
                <div className={dmStyles.cardSub}>Organik sıralama takibi</div>
              </div>
              <div className={dmStyles.liveDot}>
                <span className={dmStyles.livePulse} />
                CANLI
              </div>
            </div>

            <div className={dmStyles.chartWrap}>
              <div className={dmStyles.chartLabel}>
                <span>Organik Trafik</span>
                <span className={dmStyles.chartUp}><ArrowUpRight size={14} /> +94%</span>
              </div>
              <MiniBarChart animate={inView} />
              <div className={dmStyles.chartMonths}>
                {['O','Ş','M','N','M','H','T','A','E','E','K','A'].map((m, i) => (
                  <span key={i}>{m}</span>
                ))}
              </div>
            </div>

            <div className={dmStyles.tableWrap}>
              <div className={dmStyles.tableHeader}>
                <span>Anahtar Kelime</span>
                <span>Sıra</span>
                <span>Değişim</span>
              </div>
              {seoRows.map((row, i) => (
                <motion.div
                  key={row.keyword}
                  className={dmStyles.tableRow}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                >
                  <span className={dmStyles.keyword}>
                    <Globe size={12} />
                    {row.keyword}
                  </span>
                  <span className={dmStyles.pos}>#{row.pos}</span>
                  <span className={dmStyles.change}>
                    <ArrowUpRight size={12} />+{row.change}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className={dmStyles.cardFooter}>
              <Star size={13} style={{ color: '#F59E0B' }} />
              <span>Ortalama sıra: <strong>#2.2</strong></span>
            </div>
          </motion.div>

          <div className={dmStyles.rightCol}>
            <motion.div
              className={dmStyles.card}
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={dmStyles.cardHeader}>
                <div className={dmStyles.cardIcon} style={{ background: 'rgba(239,68,68,0.12)', color: '#EF4444' }}>
                  <Target size={18} />
                </div>
                <div>
                  <div className={dmStyles.cardTitle}>Google Ads</div>
                  <div className={dmStyles.cardSub}>Aktif kampanya özeti</div>
                </div>
                <div className={dmStyles.badge}>Bu ay</div>
              </div>

              {adRows.map((row, i) => (
                <motion.div
                  key={row.name}
                  className={dmStyles.adRow}
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                >
                  <div className={dmStyles.adName}>
                    <span className={dmStyles.adDot} />
                    {row.name}
                  </div>
                  <div className={dmStyles.adMeta}>
                    <span className={dmStyles.adSpend}>{row.spend}</span>
                    <span className={dmStyles.adConv}><MousePointerClick size={11} />{row.conv} dönüşüm</span>
                    <span className={dmStyles.adRoas}>{row.roas} ROAS</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className={dmStyles.statsRow}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <div className={dmStyles.stat}>
                <div className={dmStyles.statIcon} style={{ color: '#EF4444' }}>
                  <BarChart3 size={20} />
                </div>
                <div className={dmStyles.statVal}>%{roasVal}</div>
                <div className={dmStyles.statLabel}>Ortalama ROAS artışı</div>
              </div>
              <div className={dmStyles.stat}>
                <div className={dmStyles.statIcon} style={{ color: '#10B981' }}>
                  <MousePointerClick size={20} />
                </div>
                <div className={dmStyles.statVal}>%{convRate}</div>
                <div className={dmStyles.statLabel}>Dönüşüm oranı iyileştirmesi</div>
              </div>
              <div className={dmStyles.stat}>
                <div className={dmStyles.statIcon} style={{ color: '#3B82F6' }}>
                  <Search size={20} />
                </div>
                <div className={dmStyles.statVal}>{isMounted ? clicksVal.toLocaleString('tr-TR') : '0'}+</div>
                <div className={dmStyles.statLabel}>Aylık organik tıklama</div>
              </div>
            </motion.div>

            <motion.div
              className={dmStyles.ctaPill}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className={dmStyles.ctaPillText}>
                <Zap size={15} style={{ color: 'var(--accent)' }} />
                <span>Karmaşık süreçleri basitleştiriyor, teknolojiyi işinizi büyütmek için kullanıyoruz.</span>
              </div>
              <Link href="/teklif-al" className={dmStyles.ctaPillBtn}>
                Ücretsiz Analiz <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
