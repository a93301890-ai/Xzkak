// app/contacts/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Адрес, телефон и режим работы салона.',
  alternates: { canonical: '/contacts' },
};

export default function ContactsPage() {
  return (
    <main className="container section">
      <h1 className="h2">Контакты</h1>

      <div className="grid3" style={{ marginTop: 12 }}>
        <div className="card">
          <b>Адрес</b>
          <p className="muted">Москва, ул. Примерная, 1</p>
        </div>

        <div className="card">
          <b>Телефон</b>
          <p className="muted">
            <a href="tel:+79000000000">+7 900 000‑00‑00</a>
          </p>
        </div>

        <div className="card">
          <b>График</b>
          <p className="muted">Ежедневно 10:00–21:00</p>
        </div>
      </div>

      <div className="hr" />
      <div className="small">
        Можно встроить карту (Яндекс/Google) — по желанию.
      </div>
    </main>
  );
}
