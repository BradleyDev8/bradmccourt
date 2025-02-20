import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types/blog';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(BLOG_DIR);
  
  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace('.mdx', '');
      return getPostBySlug(slug);
    })
  );

  // Sort by date
  return posts
    .filter((post) => 
      process.env.NODE_ENV === 'development' || post.status === 'published'
    )
    .sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  
  return {
    slug,
    content,
    ...data as Omit<BlogPost, 'slug' | 'content'>
  };
}