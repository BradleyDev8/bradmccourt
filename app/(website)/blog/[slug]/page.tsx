import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { formatDateWithTimeAgo } from '@/lib/string';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: {
  params: Params;
  searchParams: SearchParams;
}): Promise<Metadata> {
  const params = await props.params;
  
  try {
    const post = await getPostBySlug(params.slug);
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

export default async function BlogPost(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  
  try {
    const post = await getPostBySlug(params.slug);

    if (!post) {
      notFound();
    }

    return (
      <article className="prose dark:prose-invert max-w-none">
        <h1>{post.title}</h1>
        <div className="text-low-contrast-text mb-8">
          {post.publishedAt ? formatDateWithTimeAgo(post.publishedAt) : "Coming Soon"}
        </div>
        <MDXRemote source={post.content} />
      </article>
    );
  } catch {
    notFound();
  }
}