// components/Header.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <div className="logo">
          <Image src="/logo.svg" alt="Логотип" width={28} height={28} />
          <span>Салон красоты</span>
        </div>

        <nav className="menu">
          <Link href="/uslugi" className="nav-link">
            Услуга
          </Link>
          <Link href="/contacts" className="nav-link">
            Контакты
          </Link>
          <Link href="/policy" className="nav-link">
            Политика
          </Link>
          <a className="btn" href="/#booking">
            Записаться
          </a>
        </nav>
      </div>
    </header>
  );
}
