import { getAllPosts } from '@/lib/blog';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { DynamicDate } from '@/components/ui/dynamic-date';

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
          post.status === 'coming-soon' ? (
            <Card className="transition-all hover:bg-ui-component-hover opacity-60" key={post.slug}>
              <CardHeader>
                <div className="flex flex-col gap-2">
                  <div className="text-sm text-low-contrast-text">
                    Coming Soon
                  </div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ) : (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <Card className="transition-all hover:bg-ui-component-hover">
              <CardHeader>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-low-contrast-text">
                      {post.publishedAt && <DynamicDate date={post.publishedAt} />}
                    </div>
                    <div className="text-sm text-low-contrast-text whitespace-nowrap">
                      {post.readingTime ? `${post.readingTime} read` : '5 mins read'}
                    </div>
                  </div>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
          )
        ))}
      </div>
    </main>
  );
}