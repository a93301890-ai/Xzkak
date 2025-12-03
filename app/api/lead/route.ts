// app/api/lead/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, phone, message, service } = await req.json();

    if (!name || !phone) {
      return NextResponse.json({ error: 'name and phone required' }, { status: 400 });
    }

    const payload = {
      name,
      phone,
      message: message || '',
      service: service || 'Лид с сайта',
      at: new Date().toISOString(),
      ua: req.headers.get('user-agent') || '',
      ip: req.headers.get('x-forwarded-for') || '',
    };

    // Telegram (опционально)
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (token && chatId) {
      const text = `Новая заявка:
Имя: ${payload.name}
Телефон: ${payload.phone}
${payload.message ? `Комментарий: ${payload.message}\n` : ''}
Услуга: ${payload.service}
Время: ${payload.at}`;

      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text }),
      });
    } else {
      console.log('Lead:', payload);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'invalid request' }, { status: 400 });
  }
}
