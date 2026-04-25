'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Trash2 } from 'lucide-react'

export function DeleteProjectButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleDelete = async () => {
    if (!confirm('Bu projeyi silmek istediğinize emin misiniz?')) return
    setLoading(true)

    try {
      const res = await fetch(`/api/projeler/${id}`, { method: 'DELETE' })
      if (!res.ok) throw new Error('Silme başarısız')
      router.refresh()
    } catch (e) {
      alert('Hata oluştu')
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleDelete} disabled={loading}
      style={{
        display: 'flex', alignItems: 'center', gap: 6, padding: '8px 12px',
        borderRadius: 6, border: '1px solid rgba(239,68,68,0.2)',
        background: 'rgba(239,68,68,0.1)', color: '#EF4444',
        cursor: loading ? 'not-allowed' : 'pointer', fontSize: 13, fontWeight: 500,
        opacity: loading ? 0.6 : 1
      }}
    >
      <Trash2 size={14} /> {loading ? '...' : 'Sil'}
    </button>
  )
}
