import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Yetkisiz erişim' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { images, ...projectData } = body

    // 1. Projeyi oluştur
    const { data: project, error: projectError } = await supabase
      .from('projects')
      .insert([projectData])
      .select()
      .single()

    if (projectError) throw projectError

    // 2. Görselleri ekle
    if (images && images.length > 0) {
      const imagesData = images.map((img: any) => ({
        project_id: project.id,
        image_url: img.url,
        sort_order: img.sort_order
      }))

      const { error: imagesError } = await supabase
        .from('project_images')
        .insert(imagesData)

      if (imagesError) throw imagesError
    }

    return NextResponse.json(project)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
