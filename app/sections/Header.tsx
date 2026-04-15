import { useState } from 'react';
import Image from 'next/image';

interface HeaderProps {
  phone: string;
  whatsapp: string;
}

export function Header({ phone, whatsapp }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Hizmetler', href: '#hizmetler' },
    { label: 'Nasıl Çalışır?', href: '#nasil-calisir' },
    { label: 'Neden Biz?', href: '#neden-biz' },
    { label: 'SSS', href: '#sss' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[5vw] h-[68px]"
      style={{
        background: 'rgba(249,246,241,0.92)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      {/* Logo */}
      <a href="#hero" className="flex-shrink-0">
        <Image
          src="/images/logo.png"
          alt="Beykoz Kurban"
          width={120}
          height={120}
          className="rounded-full"
          loading="eager"
          priority
        />
      </a>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-8 list-none">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-semibold transition-opacity hover:opacity-100"
            style={{ color: '#1a1a1a', opacity: 0.7, textDecoration: 'none' }}
          >
            {link.label}
          </a>
        ))}
        <a
          href={`tel:${phone}`}
          className="px-5 py-2 rounded-full text-white text-sm font-bold transition-all hover:-translate-y-0.5"
          style={{ background: '#B91C1C', textDecoration: 'none' }}
        >
          Hemen Kayıt Ol
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex flex-col justify-center gap-1.5 w-10 h-10"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Menü"
      >
        <span
          className="block h-0.5 w-6 rounded transition-transform"
          style={{ background: '#1a1a1a', transform: mobileOpen ? 'rotate(45deg) translateY(5px)' : 'none' }}
        />
        <span
          className="block h-0.5 w-6 rounded transition-opacity"
          style={{ background: '#1a1a1a', opacity: mobileOpen ? 0 : 1 }}
        />
        <span
          className="block h-0.5 w-6 rounded transition-transform"
          style={{ background: '#1a1a1a', transform: mobileOpen ? 'rotate(-45deg) translateY(-5px)' : 'none' }}
        />
      </button>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <div
          className="lg:hidden absolute top-[68px] left-0 right-0 px-[5vw] py-5 flex flex-col gap-4"
          style={{
            background: 'rgba(249,246,241,0.98)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-semibold"
              style={{ color: '#1a1a1a', opacity: 0.85, textDecoration: 'none' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-white text-sm font-bold"
            style={{ background: '#B91C1C', textDecoration: 'none', width: 'fit-content' }}
            onClick={() => setMobileOpen(false)}
          >
            Hemen Kayıt Ol
          </a>
        </div>
      )}
    </header>
  );
}
