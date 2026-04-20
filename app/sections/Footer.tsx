export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 lg:px-[8vw] py-8"
      style={{ background: '#1a1a1a', color: 'rgba(255,255,255,0.6)' }}
    >
      <div
        className="text-base font-black tracking-tight"
        style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#fff' }}
      >
        BEYKOZ{' '}
        <span style={{ color: '#2E9E97' }}>Kurban Kesim Hizmeti</span>
      </div>
      <small className="text-xs">
        © {currentYear} Beykoz Kurban Organizasyonu — Beykoz'da İslami usullere uygun kurban kesim hizmeti. Tüm hakları saklıdır.
      </small>
    </footer>
  );
}
