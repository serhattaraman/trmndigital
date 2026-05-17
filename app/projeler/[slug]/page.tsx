import React from 'react'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, MessageCircle, CheckCircle2, 
  Target, Zap, Star, Shield, ArrowLeft, 
  Layout, Database, Users, Monitor
} from 'lucide-react'
import styles from './project-detail.module.css'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const supabase = await createClient()
  const { data: project } = await supabase
    .from('projects')
    .select('title, short_description, category')
    .eq('slug', params.slug)
    .single()

  if (!project) return { title: 'Proje Bulunamadı' }

  return {
    title: `${project.title} | TRMN Digital Başarı Hikayesi`,
    description: project.short_description || `${project.title} projesi için geliştirdiğimiz özel yazılım ve dijital çözümler.`,
    alternates: { canonical: `https://trmndigital.com/projeler/${params.slug}` },
  }
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const supabase = await createClient()
  const { data: project } = await supabase
    .from('projects')
    .select('*, project_images(*)')
    .eq('slug', params.slug)
    .single()

  if (!project) notFound()

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroBg} />
          <div className="container">
            <Link href="/projeler" className={styles.backLink}>
              <ArrowLeft size={16} /> Projelere Dön
            </Link>
            <div className={styles.heroContent}>
              <div className={styles.catBadge}>{project.category}</div>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.excerpt}>{project.short_description}</p>
            </div>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className={styles.grid}>
              {/* Content Column */}
              <div className={styles.content}>
                {project.cover_image && (
                  <div className={styles.coverImage}>
                    <Image 
                      src={project.cover_image} 
                      alt={project.title} 
                      width={1200} 
                      height={675} 
                      priority 
                      style={{ width: '100%', height: 'auto', display: 'block' }} 
                    />
                  </div>
                )}

                <div className={styles.caseStudy}>
                  <div className={styles.section}>
                    <h2 className={styles.sectionTitle}><Target size={24} style={{ color: '#EF4444' }} /> Problem & İhtiyaç</h2>
                    <p>{project.problem}</p>
                  </div>

                  <div className={styles.section}>
                    <h2 className={styles.sectionTitle}><Zap size={24} style={{ color: 'var(--accent)' }} /> Geliştirdiğimiz Çözüm</h2>
                    <p>{project.solution}</p>
                    <div className={styles.fullDesc}>{project.full_description}</div>
                  </div>

                  <div className={styles.section}>
                    <h2 className={styles.sectionTitle}><CheckCircle2 size={24} style={{ color: '#10B981' }} /> Elde Edilen Sonuç</h2>
                    <div className={styles.resultBox}>
                      <p>{project.result}</p>
                    </div>
                  </div>
                </div>

                {/* Project Screens */}
                {project.project_images && project.project_images.length > 0 && (
                  <div className={styles.screens}>
                    <h2 className={styles.sectionTitle}><Monitor size={24} /> Proje Ekranları</h2>
                    <div className={styles.screenGrid}>
                      {project.project_images.map((img: any, i: number) => (
                        <div key={i} className={styles.screenItem} style={{ position: 'relative', aspectRatio: '16/9' }}>
                          <Image 
                            src={img.image_url} 
                            alt={img.alt_text || 'Ekran Görüntüsü'} 
                            fill
                            sizes="(max-width: 768px) 100vw, 400px"
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar Column */}
              <aside className={styles.sidebar}>
                <div className={styles.sidebarCard}>
                  <h3>Teknik Detaylar</h3>
                  <div className={styles.techStack}>
                    {project.technologies?.map((tech: string) => (
                      <span key={tech} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                </div>

                {project.review_text && (
                  <div className={styles.sidebarCard}>
                    <h3>Müşteri Görüşü</h3>
                    <div className={styles.review}>
                      <div className={styles.stars}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={14} fill={i < (project.review_rating || 5) ? "#F59E0B" : "none"} color="#F59E0B" />
                        ))}
                      </div>
                      <p className={styles.reviewText}>&quot;{project.review_text}&quot;</p>
                      <div className={styles.client}>
                        <div className={styles.clientAvatar}>{project.client_name?.charAt(0)}</div>
                        <div>
                          <div className={styles.clientName}>{project.client_name}</div>
                          <div className={styles.clientInfo}>{project.client_company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className={styles.ctaCard}>
                  <h3>Benzer bir sisteme mi ihtiyacınız var?</h3>
                  <p>İşletmenizin süreçlerini dijitalleştirmek için bugün ücretsiz bir keşif görüşmesi yapalım.</p>
                  <a href={`https://wa.me/905384714674?text=Merhaba%2C%20${encodeURIComponent(project.title)}%20projenizi%20inceledim.%20Benzer%20bir%20çözüm%20için%20görüşmek%20istiyorum.`} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
                    <MessageCircle size={18} /> WhatsApp ile Konuş
                  </a>
                  <Link href="/teklif-al" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: 12 }}>
                    Ücretsiz Teklif Al <ArrowRight size={18} />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
