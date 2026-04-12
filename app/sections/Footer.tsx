export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#253D10] text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center">
          <p className="text-white/80 text-sm">
            &copy; {currentYear} Beykoz Kurban. Tüm Hakları Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
