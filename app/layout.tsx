// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'Салон красоты — Укладки и уход',
    template: '%s — Салон красоты',
  },
  description: 'Керамическое выпрямление, уход и укладки. Онлайн-запись.',
  openGraph: {
    title: 'Салон красоты',
    description: 'Керамическое выпрямление, уход и укладки. Онлайн-запись.',
    url: 'https://example.com',
    siteName: 'Салон красоты',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Салон красоты',
    url: 'https://example.com',
    telephone: '+7 900 000-00-00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Примерная, 1',
      addressLocality: 'Москва',
      postalCode: '101000',
      addressCountry: 'RU',
    },
  };

  return (
    <html lang="ru">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
