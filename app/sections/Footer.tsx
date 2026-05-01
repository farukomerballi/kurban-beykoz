import { Instagram } from 'lucide-react';

interface FooterProps {
  phone: string;
  whatsapp: string;
  instagram: string;
}

export function Footer({ phone, whatsapp, instagram }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Hizmetler', href: '#hizmetler' },
    { label: 'Nasıl Çalışır?', href: '#nasil-calisir' },
    { label: 'SSS', href: '#sss' },
    { label: 'İletişim', href: '#iletisim' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <footer
      className="px-4 sm:px-6 lg:px-[8vw] py-10 lg:py-14"
      style={{ background: '#1a1a1a', color: 'rgba(255,255,255,0.6)' }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        {/* Üst kısım: Logo, Hızlı Linkler, İletişim */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Marka */}
          <div>
            <div
              className="text-lg font-black tracking-tight mb-3"
              style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#fff' }}
            >
              BEYKOZ{' '}
              <span style={{ color: '#2E9E97' }}>Kurban Kesim Hizmeti</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Beykoz'da 20+ yıllık tecrübe ile İslami usullere uygun kurban kesim hizmeti.
              Büyükbaş, küçükbaş, adak, akika kurbanları.
            </p>
          </div>

          {/* Hızlı Erişim */}
          <div>
            <h3
              className="text-sm font-bold tracking-widest uppercase mb-4"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              Hızlı Erişim
            </h3>
            <nav aria-label="Footer Menüsü">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* İletişim */}
          <div>
            <h3
              className="text-sm font-bold tracking-widest uppercase mb-4"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              İletişim
            </h3>
            <address className="not-italic space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              <div>
                📍 Beykoz, İstanbul
              </div>
              <div>
                <a
                  href={`tel:${phone}`}
                  className="transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
                >
                  📞 {phone}
                </a>
              </div>
              <div>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
                >
                  💬 WhatsApp ile Ulaşın
                </a>
              </div>
              <div>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white inline-flex items-center gap-2"
                  style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
                >
                  <Instagram size={16} />
                  Instagram'dan Takip Edin
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Alt çizgi */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Alt kısım: Copyright */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <small className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © {currentYear} Beykoz Kurban Organizasyonu — Beykoz'da İslami usullere uygun kurban kesim hizmeti. Tüm hakları saklıdır.
          </small>
          <small className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            kurban-beykoz.com
          </small>
        </div>
      </div>
    </footer>
  );
}
