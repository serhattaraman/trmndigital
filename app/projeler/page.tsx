import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { createClient } from '@/lib/supabase/server'
import { ProjectsClient } from '@/components/projeler/ProjectsClient'
import styles from './page.module.css'

export const metadata = {
  title: 'Projeler & Portföy | Geliştirilen Özel Yazılım Sistemleri',
  description: 'Aday takip sistemi, eğitim yönetim paneli, CRM, raporlama dashboard\'u ve kurumsal web siteleri — geliştirilen projelerin portföyü.',
  alternates: { canonical: 'https://trmndigital.com/projeler' },
}

export const revalidate = 60 // Revalidate cache every 60 seconds

export default async function ProjelerPage() {
  const supabase = await createClient()

  const { data: projects } = await supabase
    .from('projects')
    .select('*, project_images(*)')
    .eq('status', 'published')
    .order('sort_order', { ascending: true })

  // project_images için sıralama
  if (projects) {
    projects.forEach(p => {
      if (p.project_images) {
        p.project_images.sort((a: any, b: any) => a.sort_order - b.sort_order)
      }
    })
  }

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className="container">
            <div className={styles.heroContent}>
              <div className="section-label">Portföy & Başarı Hikayeleri</div>
              <h1 className={styles.heroTitle}>
                Geliştirdiğim <span>Sistemler</span><br />ve Projeler
              </h1>
              <p className={styles.heroDesc}>
                Her proje, gerçek bir işletmenin gerçek sorununa özel çözüm olarak geliştirildi.
                Siz de işletmenize özel sistem kurabilirsiniz.
              </p>
              <div className={styles.heroCtas}>
                <a href="https://wa.me/905384714674?text=Merhaba%2C%20portf%C3%B6y%C3%BC%20inceledim.%20Benim%20i%C5%9Fletmem%20i%C3%A7in%20de%20benzer%20bir%20sistem%20istiyorum." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                  Projenizi Konuşalım
                </a>
                <a href="/teklif-al" className="btn btn-primary btn-lg">
                  Ücretsiz Teklif Al
                </a>
              </div>
            </div>
          </div>
        </section>

        <ProjectsClient initialProjects={projects || []} />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
