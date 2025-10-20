import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { techStackCategories } from "@/lib/data/tech-stack";
import { profile } from "@/lib/data/profile";
import { TechStackCard } from "@/components/ui/tech-stack-card";
import { BlogPostCard } from "@/components/ui/blog-post-card";

export default async function Home() {
  const posts = await getAllPosts();
  const latestPosts = posts.slice(0, 4); // Get 4 latest posts

  return (
    <>
      <main className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-2 md:gap-12">
          <div className="flex flex-col gap-2">
            <p>{profile.bio}</p>
          </div>
          {/* My Writings & Technology Section */}
          <div className="flex flex-col gap-8">
            <span className="font-medium text-lg">My Writings</span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Latest Articles Column */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                  {latestPosts.slice(0, 3).map((post) => (
                    <BlogPostCard key={post.slug} post={post} />
                  ))}
                </div>
                <Link
                  href="/blog"
                  className="text-sm text-[#2E8B57] hover:underline self-start"
                >
                  View All My Writings
                </Link>
              </div>

              {/* Tech Stack Column */}
              <div className="flex flex-col gap-4">
                {techStackCategories.map((category) => (
                  <TechStackCard key={category.name} category={category} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
