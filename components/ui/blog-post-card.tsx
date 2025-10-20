import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DynamicDate } from "@/components/ui/dynamic-date";
import { BlogPost } from "@/types/blog";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  if (post.status === "coming-soon") {
    return (
      <Card className="transition-all hover:bg-ui-component-hover opacity-60">
        <CardHeader>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <CardTitle className="mr-2 text-sm">{post.title}</CardTitle>
              <div className="text-xs text-low-contrast-text whitespace-nowrap">
                {post.readingTime ? `${post.readingTime} read` : "🤔 mins read"}
              </div>
            </div>
            <div className="text-xs text-low-contrast-text">Coming Soon</div>
            <CardDescription className="py-1 text-xs">
              {post.description}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="transition-all hover:bg-ui-component-hover">
        <CardHeader>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <CardTitle className="mr-2 text-sm">{post.title}</CardTitle>
              <div className="text-xs text-low-contrast-text whitespace-nowrap">
                {post.readingTime ? `${post.readingTime} read` : "8 mins read"}
              </div>
            </div>
            <div className="text-xs text-low-contrast-text">
              {post.publishedAt && <DynamicDate date={post.publishedAt} />}
            </div>
            <CardDescription className="py-1 text-xs">
              {post.description}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
