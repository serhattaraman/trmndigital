import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, phone, email, service, budget, description, timeline, source } = data

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error('Telegram env variables missing')
      return NextResponse.json({ error: 'System configuration error' }, { status: 500 })
    }

    const message = `
🚀 *Yeni TRMN Digital Talebi*

👤 *Ad Soyad:* ${name || 'Belirtilmedi'}
📞 *Telefon:* ${phone || 'Belirtilmedi'}
📧 *E-posta:* ${email || 'Belirtilmedi'}
🛠 *Hizmet:* ${service || 'Belirtilmedi'}
💰 *Bütçe:* ${budget || 'Belirtilmedi'}
⏳ *Zaman:* ${timeline || 'Belirtilmedi'}
📝 *Açıklama:* ${description || 'Belirtilmedi'}

📍 *Kaynak:* ${source || 'Bilinmiyor'}
`

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Telegram API error:', errorData)
      return NextResponse.json({ error: 'Failed to send message' }, { status: 502 })
    }

    return NextResponse.json({ success: true, message: 'Talebiniz alındı, en kısa sürede sizinle iletişime geçeceğiz.' })
  } catch (error) {
    console.error('Lead API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
