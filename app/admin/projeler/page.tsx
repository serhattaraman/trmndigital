import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { PlusCircle, Pencil, Eye, EyeOff, Star } from 'lucide-react'
import { DeleteProjectButton } from '@/components/admin/DeleteProjectButton'
import styles from './page.module.css'

export default async function AdminProjelerPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  const { data: projects } = await supabase
    .from('projects')
    .select('id, title, category, status, featured, sort_order, created_at')
    .order('sort_order', { ascending: true })

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1>Projeler</h1>
          <p>{projects?.length ?? 0} proje listeleniyor</p>
        </div>
        <Link href="/admin/projeler/yeni" className={styles.addBtn}>
          <PlusCircle size={18} /> Yeni Proje Ekle
        </Link>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Proje Adı</th>
              <th>Kategori</th>
              <th>Durum</th>
              <th>Öne Çıkan</th>
              <th>Oluşturulma</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {projects?.map(p => (
              <tr key={p.id}>
                <td className={styles.titleCell}>{p.title}</td>
                <td><span className={styles.catBadge}>{p.category}</span></td>
                <td>
                  <span className={`${styles.statusBadge} ${p.status === 'published' ? styles.published : styles.draft}`}>
                    {p.status === 'published' ? <><Eye size={12} /> Yayında</> : <><EyeOff size={12} /> Taslak</>}
                  </span>
                </td>
                <td>
                  {p.featured && <span className={styles.featuredBadge}><Star size={12} /> Öne Çıkan</span>}
                </td>
                <td className={styles.dateCell}>
                  {new Date(p.created_at).toLocaleDateString('tr-TR')}
                </td>
                <td>
                  <div className={styles.actions}>
                    <Link href={`/admin/projeler/${p.id}`} className={styles.editBtn}>
                      <Pencil size={14} /> Düzenle
                    </Link>
                    <DeleteProjectButton id={p.id} />
                  </div>
                </td>
              </tr>
            ))}
            {(!projects || projects.length === 0) && (
              <tr>
                <td colSpan={6} className={styles.emptyRow}>
                  Henüz proje yok. <Link href="/admin/projeler/yeni">İlk projeyi ekle →</Link>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
