// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <div className="small">
          © {new Date().getFullYear()} Салон красоты
        </div>
        <div className="links">
          <Link href="/policy" className="nav-link">
            Политика конфиденциальности
          </Link>
          <Link href="/contacts" className="nav-link">
            Контакты
          </Link>
        </div>
      </div>
    </footer>
  );
}
