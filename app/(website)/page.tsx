import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { DynamicDate } from "@/components/ui/dynamic-date";

export default async function Home() {
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 4); // Get 4 latest posts

  return (
    <>
      <main className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-2 md:gap-12">
          <div className="flex flex-col gap-2">
            <p>
              As a Full Stack Software Engineer at Opinly, I enjoy tackling
              complex problems and building scalable solutions that make a real
              impact. I develop applications using Next.js, React, TypeScript,
              and Node.js.{" "}
            </p>
          </div>
          {/* <Separator className="bg-white" /> */}
          {/* My Writings & Technology Section */}
          <div className="flex flex-col gap-8">
            <span className="font-medium text-lg">My Writings</span>
            <div className="flex flex-col gap-4">
              {latestPosts.slice(0, 3).map((post) =>
                post.status === "coming-soon" ? (
                  <Card
                    className="transition-all hover:bg-ui-component-hover opacity-60"
                    key={post.slug}
                  >
                    <CardHeader>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <CardTitle className="mr-2 text-sm">
                            {post.title}
                          </CardTitle>
                          <div className="text-xs text-low-contrast-text whitespace-nowrap">
                            {post.readingTime
                              ? `${post.readingTime} read`
                              : "🤔 mins read"}
                          </div>
                        </div>
                        <div className="text-xs text-low-contrast-text">
                          Coming Soon
                        </div>
                        <CardDescription className="py-1 text-xs">
                          {post.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ) : (
                  <Link href={`/blog/${post.slug}`} key={post.slug}>
                    <Card className="transition-all hover:bg-ui-component-hover">
                      <CardHeader>
                        <div className="flex flex-col gap-2">
                          <div className="flex justify-between items-center">
                            <CardTitle className="mr-2 text-sm">
                              {post.title}
                            </CardTitle>
                            <div className="text-xs text-low-contrast-text whitespace-nowrap">
                              {post.readingTime
                                ? `${post.readingTime} read`
                                : "8 mins read"}
                            </div>
                          </div>
                          <div className="text-xs text-low-contrast-text">
                            {post.publishedAt && (
                              <DynamicDate date={post.publishedAt} />
                            )}
                          </div>
                          <CardDescription className="py-1 text-xs">
                            {post.description}
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                )
              )}
              <Link
                href="/blog"
                className="text-sm text-[#2E8B57] hover:underline self-start"
              >
                View All My Writings
              </Link>
            </div>
          </div>
          {/* <Separator className="bg-white" /> */}
        </div>
      </main>
    </>
  );
}
