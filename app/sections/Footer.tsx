export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C3E50] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Beykoz Kurban</h3>
            <p className="text-gray-400 text-sm">
              İslami usullere uygun kurban kesim hizmeti
            </p>
          </div>
          
          <div className="text-center md:text-right text-gray-400 text-sm">
            <p>&copy; {currentYear} Beykoz Kurban. Tüm Hakları Saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
