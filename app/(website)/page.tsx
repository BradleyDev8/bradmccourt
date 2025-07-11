import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { DynamicDate } from "@/components/ui/dynamic-date";

const techStack = {
  frontend: [
    { name: "TypeScript", icon: "/tech-icons/TypeScript Icon.svg" },
    { name: "React", icon: "/tech-icons/React Icon.svg" },
    { name: "Next.js", icon: "/tech-icons/Next.js Icon.svg" },
    { name: "Tailwind CSS", icon: "/tech-icons/Tailwind CSS Icon.svg" },
  ],
  backend: [
    { name: "Python", icon: "/tech-icons/Python Icon.svg" },
    { name: "AWS", icon: "/tech-icons/AWS Icon.svg" },
    { name: "Docker", icon: "/tech-icons/Docker Icon.svg" },
    { name: "Node.js", icon: "/tech-icons/Node.js Icon.svg" },
    { name: "Express", icon: "/tech-icons/Express Icon.svg" },
  ],
  database: [
    { name: "DynamoDB", icon: "/dynamodb.svg" },
    { name: "RDS", icon: "/aws-rds.svg" },
    { name: "PlanetScale", icon: "/tech-icons/PlanetScale Icon.svg" },
    { name: "Supabase", icon: "/supabase-dark.svg" },
    { name: "Neon", icon: "/neon-icon.svg" },
    { name: "MongoDB", icon: "/mongodb-wordmark.svg" },
  ],
};

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Latest Articles Column */}
              <div className="flex flex-col gap-4">
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
                <Card className="p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">⚡</span>
                    <span className="font-medium">frontend</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <TooltipProvider>
                      {techStack.frontend.map((tech) => (
                        <Tooltip key={tech.name}>
                          <TooltipTrigger>
                            <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-md text-xs">
                              <Image
                                src={tech.icon}
                                alt={`${tech.name} icon`}
                                width={16}
                                height={16}
                                className="w-4 h-4"
                              />
                              {tech.name}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-white">{tech.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </TooltipProvider>
                  </div>
                </Card>

                <Card className="p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">⚡</span>
                    <span className="font-medium">backend</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <TooltipProvider>
                      {techStack.backend.map((tech) => (
                        <Tooltip key={tech.name}>
                          <TooltipTrigger>
                            <div className="flex items-center gap-2 bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200 px-2 py-1 rounded-md text-xs">
                              <Image
                                src={tech.icon}
                                alt={`${tech.name} icon`}
                                width={16}
                                height={16}
                                className="w-4 h-4"
                              />
                              {tech.name}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-white">{tech.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </TooltipProvider>
                  </div>
                </Card>

                <Card className="p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">⚡</span>
                    <span className="font-medium">database</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <TooltipProvider>
                      {techStack.database.map((tech) => (
                        <Tooltip key={tech.name}>
                          <TooltipTrigger>
                            <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 px-2 py-1 rounded-md text-xs">
                              <Image
                                src={tech.icon}
                                alt={`${tech.name} icon`}
                                width={16}
                                height={16}
                                className="w-4 h-4"
                              />
                              {tech.name}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-white">{tech.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </TooltipProvider>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          {/* <Separator className="bg-white" /> */}
        </div>
      </main>
    </>
  );
}
