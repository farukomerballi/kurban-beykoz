import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Blog yazılarının bulunduğu dizin
const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

// Blog yazısı tipi
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string[];
  content: string; // HTML olarak render edilmiş içerik
}

// Blog yazısı özeti (liste sayfası için)
export interface BlogPostSummary {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string[];
}

/**
 * Tüm blog yazılarının slug listesini döndürür
 * generateStaticParams() için kullanılır
 */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

/**
 * Tüm blog yazılarını tarih sırasına göre döndürür (yeniden eskiye)
 * Blog listesi sayfası için kullanılır
 */
export function getAllPosts(): BlogPostSummary[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR);
  const posts = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        image: data.image || '',
        tags: data.tags || [],
      } as BlogPostSummary;
    });

  // Tarihe göre sırala (yeniden eskiye)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Slug'a göre tek bir blog yazısını döndürür
 * Markdown → HTML dönüşümü yapar
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  // Markdown → HTML dönüşümü
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    image: data.image || '',
    tags: data.tags || [],
    content: contentHtml,
  };
}
