// components/LeadForm.tsx
'use client';
import { useState, FormEvent } from 'react';

export default function LeadForm({ service = 'Заявка с сайта' }: { service?: string }) {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setErr(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value || '',
      service,
    };

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Network');

      setOk('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
      form.reset();
    } catch {
      setErr('Не удалось отправить. Попробуйте ещё раз.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{ marginTop: 12, display: 'grid', gap: 12, maxWidth: 560 }}
    >
      <div className="row">
        <input className="input" name="name" placeholder="Ваше имя" required />
        <input className="input" name="phone" placeholder="Телефон" required />
      </div>

      <textarea className="textarea" name="message" placeholder="Комментарий (необязательно)" />

      <button className="btn" disabled={loading} type="submit">
        {loading ? 'Отправляем…' : 'Отправить заявку'}
      </button>

      {ok && (
        <div className="small" style={{ color: '#1a7f37' }}>
          {ok}
        </div>
      )}

      {err && (
        <div className="small" style={{ color: '#b42318' }}>
          {err}
        </div>
      )}

      <div className="small">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
      </div>
    </form>
  );
}
