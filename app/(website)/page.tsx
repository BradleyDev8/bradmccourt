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

const techStack = [
  { name: "TypeScript", icon: "/tech-icons/TypeScript Icon.svg" },
  // { name: "JavaScript", icon: "/tech-icons/JavaScript Icon.svg" },
  { name: "React", icon: "/tech-icons/React Icon.svg" },
  { name: "Next.js", icon: "/tech-icons/Next.js Icon.svg" },
  { name: "Node.js", icon: "/tech-icons/Node.js Icon.svg" },
  { name: "Tailwind CSS", icon: "/tech-icons/Tailwind CSS Icon.svg" },
  // { name: "Git", icon: "/tech-icons/Git Icon.svg" },
  // { name: "Docker", icon: "/tech-icons/Docker Icon.svg" },
  { name: "AWS", icon: "/tech-icons/AWS Icon.svg" },
];

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
          {/* Tech Stack Section */}
          <div className="flex flex-col gap-2">
            <span className="font-medium">Tech Stack</span>
            <div className="grid grid-cols-3 gap-4">
              <TooltipProvider>
                {techStack.map((tech) => (
                  <Tooltip key={tech.name}>
                    <TooltipTrigger>
                      <Card className="flex items-center justify-center p-3 md:p-6 transition-colors">
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          width={48}
                          height={48}
                          className="w-8 h-8 md:w-12 md:h-12"
                        />
                      </Card>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-white">{tech.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
          {/* <Separator className="bg-white" /> */}
          {/* Latest Articles Section */}
          <div className="flex flex-col gap-4">
            <span className="font-medium">Latest Articles</span>
            <p className="text-low-contrast-text">
              I love writing about tech, programming, and life in general. Here
              are a few of my latest articles. You can find more on my{" "}
              <Link href="/blog" className="text-[#2E8B57] hover:underline">
                blog page
              </Link>
              .
            </p>
            <div className="flex flex-col gap-4">
              {latestPosts.map((post) =>
                post.status === "coming-soon" ? (
                  <Card
                    className="transition-all hover:bg-ui-component-hover opacity-60"
                    key={post.slug}
                  >
                    <CardHeader>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                          <CardTitle className="mr-2">{post.title}</CardTitle>
                          <div className="text-sm text-low-contrast-text whitespace-nowrap">
                            {post.readingTime
                              ? `${post.readingTime} read`
                              : "🤔 mins read"}
                          </div>
                        </div>
                        <div className="text-sm text-low-contrast-text">
                          Coming Soon
                        </div>
                        <CardDescription className="py-1">
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
                            <CardTitle className="mr-2">{post.title}</CardTitle>
                            <div className="text-sm text-low-contrast-text whitespace-nowrap">
                              {post.readingTime
                                ? `${post.readingTime} read`
                                : "8 mins read"}
                            </div>
                          </div>
                          <div className="text-sm text-low-contrast-text">
                            {post.publishedAt && (
                              <DynamicDate date={post.publishedAt} />
                            )}
                          </div>
                          <CardDescription className="py-1">
                            {post.description}
                          </CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                )
              )}
            </div>
          </div>
          {/* <Separator className="bg-white" /> */}
          {/* Experience Section */}
          <div className="flex flex-col gap-8">
            <span className="font-medium">Experience</span>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src="/opinlylogo.png"
                      alt="Opinly Logo"
                      width={48}
                      height={48}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-base font-medium">Opinly</h3>
                      <p className="text-sm text-low-contrast-text">
                        Senior Software Engineer
                      </p>
                    </div>
                    <span className="text-sm text-low-contrast-text whitespace-nowrap">
                      May 2025 — Present
                    </span>
                  </div>
                </div>
              </div>
              {/* Hamilton Robson */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src="/hamrob.png"
                      alt="Hamilton Robson Logo"
                      width={48}
                      height={48}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-base font-medium">Hamilton Robson</h3>
                      <p className="text-sm text-low-contrast-text">
                        Software Engineer
                      </p>
                    </div>
                    <span className="text-sm text-low-contrast-text whitespace-nowrap">
                      Jul 2023 — May 2025
                    </span>
                  </div>
                </div>
              </div>

              {/* Ulster University */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src="/ulsterUni.png"
                      alt="Ulster University Logo"
                      width={48}
                      height={48}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-base font-medium">
                        Ulster University
                      </h3>
                      <p className="text-sm text-low-contrast-text">
                        Web Developer (Placement)
                      </p>
                    </div>
                    <span className="text-sm text-low-contrast-text whitespace-nowrap">
                      May 2021 — May 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <Separator className="bg-white" /> */}
          {/* Project Section */}
          <div className="flex flex-col gap-4">
            <span className="font-medium">Projects</span>
            <div>
              <Card>
                <CardHeader>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <CardTitle>FoodFast</CardTitle>
                      <Link
                        href="https://food-fast-peach.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-low-contrast-text hover:text-high-contrast-text transition-colors"
                      >
                        <FontAwesomeIcon icon={faLink} className="w-5 h-5" />
                      </Link>
                    </div>
                    <CardDescription>
                      <p>
                        A web application that generates recipes based on the
                        ingredients you have.
                      </p>
                    </CardDescription>
                    <Image
                      src="/foodfast.png"
                      alt="FoodFast"
                      width={800}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </CardHeader>
              </Card>
            </div>
            <div className="flex flex-col gap-2">
              <Card>
                <CardHeader>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <CardTitle>Owens Academy</CardTitle>
                      <Link
                        href="https://www.owensacademy.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-low-contrast-text hover:text-high-contrast-text transition-colors"
                      >
                        <FontAwesomeIcon icon={faLink} className="w-5 h-5" />
                      </Link>
                    </div>
                    <CardDescription>
                      <p>
                        Irish Dancing School Website - Built with Next.js,
                        Tailwind CSS, and TypeScript
                      </p>
                    </CardDescription>
                    <Image
                      src="/owensAca.png"
                      alt="Owens Academy Website Screenshot"
                      width={800}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </CardHeader>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <CardTitle>Comeback Generator</CardTitle>
                      <Link
                        href="https://comeback-generator-chi.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-low-contrast-text hover:text-high-contrast-text transition-colors"
                      >
                        <FontAwesomeIcon icon={faLink} className="w-5 h-5" />
                      </Link>
                    </div>
                    <CardDescription>
                      <p>
                        A simple tool that generates comebacks for any
                        situation.
                      </p>
                    </CardDescription>
                    <Image
                      src="/comebackGenerator.png"
                      alt="Comeback Generator"
                      width={800}
                      height={400}
                      className="rounded-lg object-cover"
                    />
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
          {/* <Separator className="bg-white" /> */}
        </div>
      </main>
    </>
  );
}
