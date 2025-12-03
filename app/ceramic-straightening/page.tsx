// app/ceramic-straightening/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Керамическое выпрямление волос',
  description: 'Гладкость и блеск без перегрева. Бесплатная консультация.',
  alternates: { canonical: '/ceramic-straightening' },
};

const features = [
  { title: 'Щадящее тепло', text: 'Керамика равномерно распределяет температуру, снижая риск перегрева.' },
  { title: 'Блеск и гладкость', text: 'Волосы становятся визуально плотнее и более гладкими.' },
  { title: 'Подходит большинству типов', text: 'Индивидуально подбираем температуру и уход.' },
];

const steps = [
  'Диагностика состояния и типа волос',
  'Подготовка и термозащита',
  'Выпрямление с контролем температуры',
  'Финишный уход и рекомендации',
];

const faqs = [
  { q: 'Сколько держится эффект?', a: 'Обычно 1–3 дня (до следующего мытья), зависит от структуры волос и влажности.' },
  { q: 'Это то же, что кератин?', a: 'Нет. Керамическое — термоукладка; кератин — уход с химическим фиксированием результата.' },
  { q: 'Подходит для окрашенных волос?', a: 'Да, при корректной температуре и термозащите.' },
];

export default function CeramicStraighteningPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Керамическое выпрямление волос',
    areaServed: 'Москва',
    provider: { '@type': 'BeautySalon', name: 'Салон красоты' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'RUB',
      price: '2500',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <main>
      <section className="container hero">
        <div>
          <span className="tag">Услуга • Волосы</span>
          <h1 className="h1">Керамическое выпрямление волос</h1>
          <p className="muted">
            Гладкость, блеск и защита от перегрева. Подберём режим и уход под ваш тип волос.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <a className="btn" href="#booking">Записаться</a>
            <a className="btn secondary" href="#faq">Вопросы</a>
          </div>
          <p className="small" style={{ marginTop: 12 }}>
            Время: ~45–75 мин • Цена от 2500 ₽
          </p>
        </div>
        <div>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <Image
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop"
              alt="Керамическое выпрямление волос"
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>
      </section>

      <section className="container section">
        <h2 className="h2">Почему это работает</h2>
        <div className="grid3" style={{ marginTop: 12 }}>
          {features.map((f) => (
            <div className="card" key={f.title}>
              <h3 style={{ margin: '4px 0 6px' }}>{f.title}</h3>
              <p className="muted">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2 className="h2">Как проходит процедура</h2>
        <ol style={{ paddingLeft: 18, marginTop: 8 }}>
          {steps.map((s, i) => (
            <li key={i} style={{ margin: '8px 0' }}>{s}</li>
          ))}
        </ol>
        <div className="hr" />
        <div className="grid3">
          <div className="card"><b>Кому подходит</b><p className="muted">Волнистые и слегка кудрявые волосы, пушистость.</p></div>
          <div className="card"><b>Противопоказания</b><p className="muted">Сильно повреждённые/ломкие волосы — сначала восстановление.</p></div>
          <div className="card"><b>Уход дома</b><p className="muted">Термозащита, щадящий режим сушки, несмываемый кондиционер.</p></div>
        </div>
      </section>

      <section className="container section" id="pricing">
        <h2 className="h2">Стоимость</h2>
        <div className="grid3" style={{ marginTop: 12 }}>
          <div className="card"><b>Короткие</b><p className="muted">от 2500 ₽ • 45 мин</p></div>
          <div className="card"><b>Средние</b><p className="muted">от 3000 ₽ • 60 мин</p></div>
          <div className="card"><b>Длинные</b><p className="muted">от 3500 ₽ • 75 мин</p></div>
        </div>
        <p className="small" style={{ marginTop: 8 }}>
          Итоговая цена зависит от густоты и времени работы.
        </p>
      </section>

      <section className="container section" id="faq">
        <h2 className="h2">FAQ</h2>
        <div style={{ display: 'grid', gap: 12, marginTop: 12 }}>
          {faqs.map((f) => (
            <div className="card" key={f.q}>
              <b>{f.q}</b>
              <p className="muted" style={{ marginTop: 6 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container section" id="booking">
        <h2 className="h2">Запись онлайн</h2>
        <p className="muted">Оставьте контакты — администратор перезвонит для подтверждения.</p>
        <LeadForm service="Заявка: керамическое выпрямление" />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
