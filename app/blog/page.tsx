import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '../../lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen" style={{ background: '#F9F6F1' }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-[8vw] h-[68px]"
        style={{
          background: 'rgba(249,246,241,0.92)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <Link href="/" className="flex items-center gap-3" style={{ textDecoration: 'none' }}>
          <Image
            src="/images/logo.webp"
            alt="Beykoz Kurban Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span
            className="text-base font-black tracking-tight"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#1a1a1a' }}
          >
            BEYKOZ <span style={{ color: '#2E9E97' }}>Kurban</span>
          </span>
        </Link>
        <Link
          href="/"
          className="text-sm font-semibold px-4 py-2 rounded-full transition-all hover:-translate-y-0.5"
          style={{ background: '#1D6A65', color: '#fff', textDecoration: 'none' }}
        >
          ← Ana Sayfa
        </Link>
      </header>

      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-[8vw] pt-16 pb-10">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: 'rgba(29,106,101,0.1)', color: '#1D6A65' }}
          >
            Blog
          </span>
          <h1
            className="text-3xl md:text-4xl lg:text-[2.8rem] font-black tracking-tight leading-tight mb-4"
            style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#1a1a1a' }}
          >
            Kurban Hakkında <span style={{ color: '#B91C1C' }}>Bilmeniz Gerekenler</span>
          </h1>
          <p className="text-base lg:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Kurbanlık fiyatları, İslami kesim rehberleri ve adak kurbanı hakkında
            bilgilendirici yazılarımızı keşfedin.
          </p>
        </div>
      </section>

      {/* Blog Listesi */}
      <section className="px-4 sm:px-6 lg:px-[8vw] pb-20">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-[24px] overflow-hidden bg-white border-[1.5px] border-transparent transition-all duration-300 hover:border-[rgba(29,106,101,0.2)] hover:-translate-y-1"
              style={{
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              }}
            >
              {/* Görsel */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* İçerik */}
              <div className="p-5">
                {/* Tarih */}
                <time
                  className="text-xs font-bold tracking-widest uppercase mb-2 block"
                  style={{ color: '#999' }}
                  dateTime={post.date}
                >
                  {new Date(post.date).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>

                {/* Başlık */}
                <h2
                  className="text-lg font-extrabold leading-snug mb-2 transition-colors group-hover:text-[#1D6A65]"
                  style={{
                    fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                    color: '#1a1a1a',
                  }}
                >
                  {post.title}
                </h2>

                {/* Açıklama */}
                <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
                  {post.description}
                </p>

                {/* Etiketler */}
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-[10px] font-bold"
                      style={{ background: 'rgba(29,106,101,0.08)', color: '#1D6A65' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            Henüz blog yazısı bulunmuyor.
          </div>
        )}
      </section>
    </div>
  );
}
