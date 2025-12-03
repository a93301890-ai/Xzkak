// app/policy/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Как мы обрабатываем и храним персональные данные.',
  alternates: { canonical: '/policy' },
};

export default function PolicyPage() {
  return (
    <main className="container section">
      <h1 className="h2">Политика конфиденциальности</h1>
      <p className="muted">
        Мы собираем имя и телефон для связи по вашей заявке. Данные не передаются третьим лицам,
        кроме случаев, предусмотренных законом. По запросу удалим данные.
      </p>
      <div className="small" style={{ marginTop: 8 }}>
        Контакты для запросов: privacy@example.com
      </div>
    </main>
  );
}
