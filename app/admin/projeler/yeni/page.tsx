import { ProjectForm } from '@/components/admin/ProjectForm'

export default function YeniProjePage() {
  return (
    <div style={{ padding: '40px' }}>
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: '2rem', fontWeight: 800, color: '#F1F5F9' }}>Yeni Proje Ekle</h1>
        <p style={{ color: '#64748B', marginTop: 4 }}>Siteye yeni bir proje veya portföy öğesi ekleyin.</p>
      </div>
      <ProjectForm />
    </div>
  )
}
