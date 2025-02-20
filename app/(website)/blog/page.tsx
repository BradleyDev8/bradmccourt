import { getAllPosts } from '@/lib/blog';
import { formatDate } from '@/lib/string';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Brad McCourt',
  description: 'Thoughts on software development, technology, and more.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-4">
        <h1 className="font-medium">Blog</h1>
        <p className="text-low-contrast-text">
          Thoughts on software development, technology, and more.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <Card className="transition-all hover:bg-ui-component-hover">
              <CardHeader>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-low-contrast-text">
                    {formatDate(post.publishedAt)}
                  </div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}