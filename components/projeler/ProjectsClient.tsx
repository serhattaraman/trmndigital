'use client'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowRight, X, MessageCircle, ExternalLink,
  Users, BarChart3, GraduationCap, Video,
  Globe, LayoutDashboard, FileText, Settings,
  CheckCircle2, Zap, Shield, FolderOpen, ZoomIn
} from 'lucide-react'
import styles from '@/app/projeler/page.module.css'
import { Lightbox } from './Lightbox'

const categories = ['Tümü', 'CRM', 'Dashboard', 'Eğitim Sistemleri', 'Web Siteleri', 'Otomasyon', 'Diğer']

// Ikon seçici
const getIcon = (category: string) => {
  switch (category) {
    case 'CRM': return Users
    case 'Dashboard': return BarChart3
    case 'Eğitim Sistemleri': return GraduationCap
    case 'Otomasyon': return Settings
    case 'Web Siteleri': return Globe
    default: return FolderOpen
  }
}

// Renk seçici
const getColor = (category: string) => {
  switch (category) {
    case 'CRM': return '#EF4444'
    case 'Dashboard': return '#8B5CF6'
    case 'Eğitim Sistemleri': return '#10B981'
    case 'Otomasyon': return '#F59E0B'
    case 'Web Siteleri': return '#06B6D4'
    default: return '#6366F1'
  }
}

export function ProjectsClient({ initialProjects }: { initialProjects: any[] }) {
  const [activeFilter, setActiveFilter] = useState('Tümü')
  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const allImages = useMemo(() => {
    if (!selectedProject) return []
    const images = []
    if (selectedProject.cover_image) {
      images.push({ url: selectedProject.cover_image, alt: 'Kapak Görseli' })
    }
    if (selectedProject.project_images) {
      selectedProject.project_images.forEach((img: any) => {
        if (img.image_url !== selectedProject.cover_image) {
          images.push({ url: img.image_url, alt: img.alt_text || 'Ekran Görüntüsü' })
        }
      })
    }
    return images
  }, [selectedProject])

  const stats = useMemo(() => {
    const totalProjects = initialProjects.length
    const uniqueCompanies = new Set(initialProjects.filter(p => p.client_company).map(p => p.client_company)).size
    const companyCount = uniqueCompanies > 0 ? uniqueCompanies : Math.max(totalProjects, 1)

    const reviews = initialProjects.filter(p => p.review_rating)
    const avgRating = reviews.length > 0 
      ? reviews.reduce((acc, curr) => acc + curr.review_rating, 0) / reviews.length 
      : 5
    const satisfaction = avgRating >= 4.5 ? '%100' : `%${Math.round((avgRating / 5) * 100)}`

    const yearsExp = new Date().getFullYear() - 2020

    return [
      { val: `${totalProjects}+`, label: 'Tamamlanan Proje' },
      { val: `${companyCount}+`, label: 'Mutlu İşletme' },
      { val: satisfaction, label: 'Müşteri Memnuniyeti' },
      { val: `${yearsExp}+`, label: 'Yıl Deneyim' },
    ]
  }, [initialProjects])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const filtered = activeFilter === 'Tümü'
    ? initialProjects
    : initialProjects.filter(p => p.category === activeFilter)

  return (
    <>
      {/* Stats */}
      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.statsRow}>
            {stats.map(s => (
              <div key={s.label} className={styles.statItem}>
                <div className={styles.statVal}>{s.val}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter + Grid */}
      <section className="section">
        <div className="container">
          {/* Filters */}
          <div className={styles.filters}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterActive : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className={styles.grid}>
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => {
                const Icon = getIcon(project.category)
                const color = getColor(project.category)
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className={styles.card}
                    onClick={() => setSelectedProject({ ...project, Icon, color })}
                    style={{ cursor: 'pointer' }}
                  >
                    {project.cover_image ? (
                      <div className={styles.cardImage}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={project.cover_image} alt={project.title} />
                      </div>
                    ) : (
                      <div className={styles.cardAccent} style={{ background: color }} />
                    )}
                    
                    <div className={styles.cardBody} style={{ padding: project.cover_image ? '24px' : '28px' }}>
                      <div className={styles.cardTop} style={{ marginBottom: project.cover_image ? '16px' : '20px' }}>
                        {!project.cover_image && (
                          <div className={styles.cardIcon} style={{ background: `${color}18`, borderColor: `${color}30`, color }}>
                            <Icon size={22} />
                          </div>
                        )}
                        <span className={styles.cardTag} style={{ background: `${color}15`, color }}>
                          {project.tags?.[0] || project.category}
                        </span>
                      </div>
                      <h2 className={styles.cardTitle}>{project.title}</h2>
                      <p className={styles.cardDesc} style={{ marginBottom: project.cover_image ? '0' : '20px' }}>
                        {project.short_description}
                      </p>
                      
                      {!project.cover_image && (
                        <div className={styles.cardResult}>
                          <div className={styles.resultDot} style={{ background: color }} />
                          {project.result || 'Başarıyla tamamlandı'}
                        </div>
                      )}
                      
                      <div className={styles.cardOverlay}>
                        <span>Detayları Gör <ExternalLink size={14} /></span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
            {filtered.length === 0 && (
              <div style={{ padding: '40px', textAlign: 'center', gridColumn: '1 / -1', color: '#64748B' }}>
                Bu kategoride henüz proje bulunmuyor.
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Trust CTA */}
      <section className={`section ${styles.trustSection}`}>
        <div className="container">
          <div className={styles.trustBox}>
            <div className={styles.trustLeft}>
              <div className={styles.trustIcons}>
                {[CheckCircle2, Shield, Zap].map((Ico, i) => (
                  <div key={i} className={styles.trustIcon}><Ico size={20} /></div>
                ))}
              </div>
              <h2>Bu sistemler tamamen müşteriye özel geliştirilmiştir.</h2>
              <p>Hazır tema yok, kopyala-yapıştır yok. Sizin süreçlerinize göre sıfırdan yazılır, sizin işletmenizde çalışır.</p>
            </div>
            <div className={styles.trustRight}>
              <a href="https://wa.me/905384714674?text=Merhaba%2C%20projeleri%20inceledim.%20Benim%20i%C3%A7in%20de%20benzer%20bir%20sistem%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                <MessageCircle size={20} /> Benim Sistemimi de Kur
              </a>
              <Link href="/teklif-al" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', marginTop: 12 }}>
                Ücretsiz Analiz Al <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => { if (e.target === e.currentTarget) setSelectedProject(null) }}
          >
            <motion.div
              className={styles.modal}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className={styles.modalHeader} style={{ borderColor: `${selectedProject.color}30` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div className={styles.modalIcon} style={{ background: `${selectedProject.color}18`, borderColor: `${selectedProject.color}30`, color: selectedProject.color }}>
                    <selectedProject.Icon size={28} />
                  </div>
                  <div>
                    <span className={styles.modalTag} style={{ background: `${selectedProject.color}15`, color: selectedProject.color }}>{selectedProject.tags?.[0] || selectedProject.category}</span>
                    <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                  </div>
                </div>
                <button className={styles.closeBtn} onClick={() => setSelectedProject(null)}>
                  <X size={22} />
                </button>
              </div>

              <div className={styles.modalBody}>
                {selectedProject.cover_image && (
                  <div 
                    className={styles.coverImageContainer}
                    onClick={() => openLightbox(0)}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={selectedProject.cover_image} alt={selectedProject.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    <div className={styles.imageOverlay}>
                      <ZoomIn size={32} />
                      <span>Büyüt</span>
                    </div>
                  </div>
                )}
                
                <div className={styles.modalGrid}>
                  <div>
                    {selectedProject.full_description && (
                      <div className={styles.modalSection}>
                        <div className={styles.modalSectionLabel}>📝 Proje Detayı</div>
                        <p className={styles.modalText} style={{ whiteSpace: 'pre-wrap' }}>{selectedProject.full_description}</p>
                      </div>
                    )}
                    
                    <div className={styles.modalSection}>
                      <div className={styles.modalSectionLabel} style={{ color: '#EF4444' }}>📌 Problem</div>
                      <p className={styles.modalText}>{selectedProject.problem}</p>
                    </div>
                    <div className={styles.modalSection}>
                      <div className={styles.modalSectionLabel} style={{ color: 'var(--accent)' }}>⚙️ Geliştirilen Çözüm</div>
                      <p className={styles.modalText}>{selectedProject.solution}</p>
                    </div>
                    <div className={styles.modalSection}>
                      <div className={styles.modalSectionLabel} style={{ color: '#10B981' }}>🎯 Sonuç</div>
                      <p className={styles.modalText} style={{ color: '#10B981', fontWeight: 600 }}>{selectedProject.result}</p>
                    </div>
                  </div>

                  <div>
                    {selectedProject.review_text && (
                      <div className={styles.modalSection}>
                        <div className={styles.modalSectionLabel} style={{ color: '#F59E0B' }}>⭐️ Müşteri Değerlendirmesi</div>
                        <div className={styles.reviewCard}>
                          <div className={styles.reviewStars}>
                            {Array.from({ length: 5 }).map((_, i) => (
                              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < (selectedProject.review_rating || 5) ? "#F59E0B" : "none"} stroke={i < (selectedProject.review_rating || 5) ? "#F59E0B" : "rgba(255,255,255,0.2)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                              </svg>
                            ))}
                          </div>
                          <h4 className={styles.reviewTitle}>&quot;{selectedProject.review_title}&quot;</h4>
                          <p className={styles.reviewText}>{selectedProject.review_text}</p>
                          <div className={styles.reviewAuthor}>
                            <div className={styles.reviewAvatar}>
                              {selectedProject.client_name?.charAt(0) || 'M'}
                            </div>
                            <div>
                              <div className={styles.reviewName}>{selectedProject.client_name}</div>
                              <div className={styles.reviewCompany}>{selectedProject.client_company}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className={styles.modalSection}>
                      <div className={styles.modalSectionLabel}>📊 Özellikler</div>
                      <ul className={styles.featureList}>
                        {/* Veritabanında özellikler metin veya dizi olabilir, biz basit tutalım */}
                        {selectedProject.technologies?.map((f: string) => (
                          <li key={f}><CheckCircle2 size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />{f}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {selectedProject.project_images && selectedProject.project_images.length > 0 && (
                      <div className={styles.modalSection}>
                        <div className={styles.modalSectionLabel}>🖥 Ekranlar</div>
                        <div className={styles.screenPreviews}>
                          {selectedProject.project_images.map((img: any, i: number) => {
                            const lIndex = allImages.findIndex(a => a.url === img.image_url)
                            return (
                              <div 
                                key={i} 
                                className={`${styles.screenCard} ${styles.clickableScreen}`} 
                                style={{ borderColor: `${selectedProject.color}30` }}
                                onClick={() => openLightbox(lIndex >= 0 ? lIndex : 0)}
                              >
                                <div className={styles.screenBar}>
                                  <div className={styles.screenDots}><span /><span /><span /></div>
                                </div>
                                <div className={styles.screenBody} style={{ padding: 0, height: 'auto', aspectRatio: '4/3', position: 'relative' }}>
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img src={img.image_url} alt="Ekran" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                  <div className={styles.imageOverlaySmall}>
                                    <ZoomIn size={24} />
                                  </div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.modalFooter}>
                <p>Bu sistem, sizin işletmenize özel olarak sıfırdan geliştirilebilir.</p>
                <div className={styles.modalCtas}>
                  <a href={`https://wa.me/905384714674?text=Merhaba%2C%20${encodeURIComponent(selectedProject.title)}%20gibi%20bir%20sistem%20istiyorum.%20Konuşabilir%20miyiz?`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                    <MessageCircle size={16} /> WhatsApp&apos;tan Yaz
                  </a>
                  <Link href="/teklif-al" className="btn btn-primary" onClick={() => setSelectedProject(null)}>
                    Bana Özel Teklif Al <ArrowRight size={16} />
                  </Link>
                  <button className="btn btn-ghost btn-sm" onClick={() => setSelectedProject(null)}>Kapat</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Lightbox
        images={allImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onChangeIndex={setLightboxIndex}
      />
    </>
  )
}
