import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getPostBySlug, getAllSlugs, getAllPosts } from '../../../lib/blog';

// Build-time'da tüm blog slug'larını oluştur (static export için zorunlu)
export function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Her sayfa için dinamik SEO meta tag'leri
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return { title: 'Yazı Bulunamadı' };

  return {
    title: `${post.title} — Beykoz Kurban`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://kurban-beykoz.com/blog/${slug}`,
      siteName: 'Beykoz Kurban Kesim Hizmeti',
      locale: 'tr_TR',
      type: 'article',
      publishedTime: post.date,
      images: post.image
        ? [{ url: `https://kurban-beykoz.com${post.image}`, width: 1200, height: 750 }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://kurban-beykoz.com/blog/${slug}/`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  // Diğer yazılar (mevcut yazı hariç)
  const otherPosts = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 2);

  // Article schema (JSON-LD)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image ? `https://kurban-beykoz.com${post.image}` : undefined,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Beykoz Kurban Organizasyonu',
      url: 'https://kurban-beykoz.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Beykoz Kurban Organizasyonu',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kurban-beykoz.com/images/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://kurban-beykoz.com/blog/${slug}/`,
    },
  };

  return (
    <div className="min-h-screen" style={{ background: '#F9F6F1' }}>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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
        <div className="flex items-center gap-3">
          <Link
            href="/blog"
            className="text-sm font-semibold px-4 py-2 rounded-full transition-all"
            style={{ color: '#1D6A65', textDecoration: 'none' }}
          >
            ← Blog
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold px-4 py-2 rounded-full transition-all hover:-translate-y-0.5"
            style={{ background: '#1D6A65', color: '#fff', textDecoration: 'none' }}
          >
            Ana Sayfa
          </Link>
        </div>
      </header>

      {/* Hero Görsel */}
      {post.image && (
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F9F6F1] via-transparent to-transparent" />
        </div>
      )}

      {/* İçerik */}
      <article className="px-4 sm:px-6 lg:px-[8vw] -mt-16 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Başlık Kartı */}
          <div
            className="rounded-[28px] p-8 lg:p-10 mb-10"
            style={{ background: '#fff', boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
          >
            {/* Etiketler */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(29,106,101,0.08)', color: '#1D6A65' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Tarih */}
            <time
              className="text-sm font-bold tracking-widest uppercase block mb-3"
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
            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#1a1a1a' }}
            >
              {post.title}
            </h1>
          </div>

          {/* Blog İçeriği */}
          <div
            className="prose prose-lg max-w-none mb-16"
            style={{
              fontFamily: 'var(--font-nunito), Nunito, sans-serif',
              color: '#333',
              lineHeight: '1.8',
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-[8vw] pb-12">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-[24px] p-8 text-center text-white"
            style={{
              background: 'linear-gradient(135deg, #7F1D1D 0%, #B91C1C 45%, #1D6A65 100%)',
            }}
          >
            <h2
              className="text-xl md:text-2xl font-black mb-3"
              style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif' }}
            >
              Kurbanınızı Hemen Kayıt Edin!
            </h2>
            <p className="text-sm opacity-80 mb-5 max-w-md mx-auto">
              Beykoz'da 20+ yıllık tecrübe ile İslami usullere uygun kurban kesim hizmeti.
            </p>
            <a
              href="tel:+905553135290"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-extrabold text-base transition-all hover:-translate-y-0.5"
              style={{
                background: '#fff',
                color: '#B91C1C',
                fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                textDecoration: 'none',
              }}
            >
              📞 +90 555 313 52 90
            </a>
          </div>
        </div>
      </section>

      {/* Diğer Yazılar */}
      {otherPosts.length > 0 && (
        <section className="px-4 sm:px-6 lg:px-[8vw] pb-20">
          <div className="max-w-3xl mx-auto">
            <h3
              className="text-xl font-black mb-6"
              style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#1a1a1a' }}
            >
              Diğer <span style={{ color: '#B91C1C' }}>Yazılar</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block rounded-[20px] overflow-hidden bg-white border-[1.5px] border-transparent transition-all duration-300 hover:border-[rgba(29,106,101,0.2)] hover:-translate-y-1"
                  style={{ textDecoration: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h4
                      className="text-sm font-extrabold leading-snug transition-colors group-hover:text-[#1D6A65]"
                      style={{ fontFamily: 'var(--font-montserrat), Montserrat, sans-serif', color: '#1a1a1a' }}
                    >
                      {p.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
