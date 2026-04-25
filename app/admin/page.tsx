import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { FolderOpen, PlusCircle, Eye, TrendingUp } from 'lucide-react'
import styles from './page.module.css'

export default async function AdminDashboard() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const { count: totalProjects } = await supabase
    .from('projects').select('*', { count: 'exact', head: true })
  const { count: publishedProjects } = await supabase
    .from('projects').select('*', { count: 'exact', head: true })
    .eq('status', 'published')
  const { count: draftProjects } = await supabase
    .from('projects').select('*', { count: 'exact', head: true })
    .eq('status', 'draft')
  const { count: featuredProjects } = await supabase
    .from('projects').select('*', { count: 'exact', head: true })
    .eq('featured', true)

  const stats = [
    { label: 'Toplam Proje', value: totalProjects ?? 0, icon: FolderOpen, color: '#EF4444' },
    { label: 'Yayında', value: publishedProjects ?? 0, icon: Eye, color: '#10B981' },
    { label: 'Taslak', value: draftProjects ?? 0, icon: TrendingUp, color: '#F59E0B' },
    { label: 'Öne Çıkan', value: featuredProjects ?? 0, icon: TrendingUp, color: '#8B5CF6' },
  ]

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Dashboard</h1>
        <p>Hoş geldin, {user.email}</p>
      </div>

      <div className={styles.statsGrid}>
        {stats.map(s => (
          <div key={s.label} className={styles.statCard}>
            <div className={styles.statIcon} style={{ background: `${s.color}15`, color: s.color }}>
              <s.icon size={22} />
            </div>
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.quickActions}>
        <h2>Hızlı İşlemler</h2>
        <div className={styles.actions}>
          <Link href="/admin/projeler/yeni" className={styles.actionCard}>
            <PlusCircle size={28} />
            <span>Yeni Proje Ekle</span>
          </Link>
          <Link href="/admin/projeler" className={styles.actionCard}>
            <FolderOpen size={28} />
            <span>Projeleri Yönet</span>
          </Link>
          <Link href="/projeler" target="_blank" className={styles.actionCard}>
            <Eye size={28} />
            <span>Siteyi Görüntüle</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
