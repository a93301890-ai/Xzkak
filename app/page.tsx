// app/page.tsx
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';

export default function Home() {
  return (
    <main>
      <section className="container hero">
        <div>
          <span className="tag">Салон • Волосы</span>
          <h1 className="h1">Гладкость и блеск с керамическим выпрямлением</h1>
          <p className="muted">
            Щадящее тепло, ровная температура и сияние волос. Бесплатная консультация перед процедурой.
          </p>

          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <a className="btn" href="/ceramic-straightening">
              Подробнее об услуге
            </a>
            <a className="btn secondary" href="#booking">
              Записаться
            </a>
          </div>

          <p className="small" style={{ marginTop: 12 }}>
            Время: ~45–75 мин • Цена от 2500 ₽
          </p>
        </div>

        <div>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <Image
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
              alt="Идеально гладкие волосы после укладки"
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>
      </section>

      <section className="container section">
        <h2 className="h2">Почему выбирают нас
