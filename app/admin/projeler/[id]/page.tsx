import { ProjectForm } from '@/components/admin/ProjectForm'
import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'

export default async function EditProjectPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()

  const { data: project } = await supabase
    .from('projects')
    .select('*, project_images(*)')
    .eq('id', params.id)
    .single()

  if (!project) return notFound()

  // Görselleri sort_order'a göre sıralayalım
  if (project.project_images) {
    project.project_images.sort((a: any, b: any) => a.sort_order - b.sort_order)
  }

  return (
    <div style={{ padding: '40px' }}>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 800, color: '#F1F5F9' }}>Projeyi Düzenle</h1>
        <p style={{ color: '#64748B', marginTop: 4 }}>{project.title} projesini düzenliyorsunuz.</p>
      </div>
      <ProjectForm initialData={project} />
    </div>
  )
}
