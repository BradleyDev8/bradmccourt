import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { formatDate } from '@/lib/string';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const resolvedParams = await Promise.resolve(params);
    const post = await getPostBySlug(resolvedParams.slug);
    
    return {
      title: `${post.title} | Brad McCourt`,
      description: post.description,
    };
  } catch {
    return {
      title: 'Blog Post Not Found | Brad McCourt',
      description: 'The requested blog post could not be found.',
    };
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  try {
    const resolvedParams = await Promise.resolve(params);
    const post = await getPostBySlug(resolvedParams.slug);

    if (!post) {
      notFound();
    }

    return (
      <article className="prose prose-invert max-w-none">
        <h1>{post.title}</h1>
        <div className="text-low-contrast-text mb-8">
          {formatDate(post.publishedAt)}
        </div>
        <MDXRemote source={post.content} />
      </article>
    );
  } catch {
    notFound();
  }
}