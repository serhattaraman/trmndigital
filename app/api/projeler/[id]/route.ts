import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { images, ...projectData } = body

    // 1. Projeyi güncelle
    const { error: projectError } = await supabase
      .from('projects')
      .update(projectData)
      .eq('id', params.id)

    if (projectError) throw projectError

    // 2. Mevcut görselleri sil ve yenilerini ekle
    if (images) {
      await supabase.from('project_images').delete().eq('project_id', params.id)

      if (images.length > 0) {
        const imagesData = images.map((img: any) => ({
          project_id: params.id,
          image_url: img.url,
          sort_order: img.sort_order
        }))

        const { error: imagesError } = await supabase
          .from('project_images')
          .insert(imagesData)

        if (imagesError) throw imagesError
      }
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 })
  }

  try {
    // cascade silme ayarlandığı için projeyi silmek yeterli
    const { error } = await supabase.from('projects').delete().eq('id', params.id)
    if (error) throw error

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
