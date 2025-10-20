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

  // Filter posts
  const filteredPosts = posts.filter((post) => 
    process.env.NODE_ENV === 'development' || post.status === 'published' || post.status === 'coming-soon'
  );
  
  // Separate coming soon posts and regular posts
  const comingSoonPosts = filteredPosts.filter(post => post.status === 'coming-soon');
  const regularPosts = filteredPosts.filter(post => post.status !== 'coming-soon');
  
  // Sort regular posts by date
  const sortedRegularPosts = regularPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  
  // Combine with coming soon posts first
  return [...comingSoonPosts, ...sortedRegularPosts];
}

function validateBlogPostData(data: any, slug: string): data is Omit<BlogPost, 'slug' | 'content'> {
  const requiredFields = ['title', 'description', 'publishedAt'];
  const missingFields = requiredFields.filter(field => !data[field]);

  if (missingFields.length > 0) {
    console.error(`Blog post ${slug} is missing required fields: ${missingFields.join(', ')}`);
    return false;
  }

  return true;
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      throw new Error(`Blog post not found: ${slug}`);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);

    // Validate that required fields exist
    if (!validateBlogPostData(data, slug)) {
      throw new Error(`Blog post ${slug} has invalid metadata`);
    }

    return {
      slug,
      content,
      ...data as Omit<BlogPost, 'slug' | 'content'>
    };
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    throw error;
  }
}