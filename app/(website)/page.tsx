import Avatar from "@/components/ui/avatar";
// import { Separator } from "@/components/ui/separator";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
import { formatDateWithTimeAgo } from "@/lib/string";

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
                <div className="block md:hidden">
                    <Avatar width={56} height={56} />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-medium">About</span>
                    <p>Full Stack Software Engineer passionate about scalable, efficient solutions.</p>
                    <p>Skilled in distributed systems, cloud architecture, and development with Next.js, React, TypeScript, and Node.js. Focused on clean code and business value.</p>
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
                                        <Card className="flex items-center justify-center p-3 md:p-6 hover:bg-ui-component-hover transition-colors">
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
                        I love writing about tech, programming, and life in general. Here are a few of my latest
                        articles. You can find more on my <Link href="/blog" className="text-[#2E8B57] hover:underline">blog page</Link>.
                    </p>
                    <div className="flex flex-col gap-4">
                        {latestPosts.map((post) => (
                            post.status === 'coming-soon' ? (
                                <Card className="transition-all hover:bg-ui-component-hover opacity-60" key={post.slug}>
                                    <CardHeader>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex justify-between items-center">
                                                <CardTitle className="mr-2">{post.title}</CardTitle>
                                                <div className="text-sm text-low-contrast-text whitespace-nowrap">
                                                    {post.readingTime ? `${post.readingTime} read` : '🤔 mins read'}
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
                                                        {post.readingTime ? `${post.readingTime} read` : '8 mins read'}
                                                    </div>
                                                </div>
                                                <div className="text-sm text-low-contrast-text">
                                                    {formatDateWithTimeAgo(post.publishedAt)}
                                                </div>
                                                <CardDescription className="py-1">
                                                    {post.description}
                                                </CardDescription>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                </Link>
                            )
                        ))}
                    </div>
                </div>
                {/* <Separator className="bg-white" /> */}
                {/* Experience Section */}
                <div className="flex flex-col gap-2">
                    <span className="font-medium">Experience</span>
                    <div className="flex flex-col gap-4">
                        <Card>
                            <CardHeader>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-row gap-4 items-center">
                                        <div className="flex min-w-[60px] w-[60px] h-[60px] md:min-w-[100px] md:w-[100px] md:h-[100px] items-center justify-center">
                                            <Image
                                                src="/hamrob.png"
                                                alt="Hamilton Robson Logo"
                                                width={100}
                                                height={100}
                                                className="w-full h-full object-contain bg-white rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-sm text-low-contrast-text">
                                                Jul 2023 — Present
                                            </div>
                                            <CardTitle>Hamilton Robson - Software Engineer</CardTitle>
                                        </div>
                                    </div>
                                    <CardDescription>
                                        <p>As a Full Stack Engineer, I specialise in developing scalable and efficient solutions across various platforms using
                                        TypeScript, React, React Native, Node.js and Next.js.</p>
                                    </CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-row gap-4 items-center">
                                        <div className="flex min-w-[60px] w-[60px] h-[60px] md:min-w-[100px] md:w-[100px] md:h-[100px] items-center justify-center">
                                            <Image
                                                src="/ulsterUni.png"
                                                alt="Ulster University Logo"
                                                width={100}
                                                height={100}
                                                className="w-full h-full object-contain bg-white rounded-lg"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-sm text-low-contrast-text">
                                                May 2021 — May 2022
                                            </div>
                                            <CardTitle>Ulster University - Web Developer (Placement)</CardTitle>
                                        </div>
                                    </div>
                                    <CardDescription>
                                        <p>providing a solution for students during the pandemic by creating a front-end application that
                                        allowed students to check which PCs were available and in use for remote access.</p>
                                    </CardDescription>
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
                {/* <Separator className="bg-white" /> */}
                {/* Project Section */}
                <div className="flex flex-col gap-4">
                    <span className="font-medium">Projects</span>
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
                                        <p>Irish Dancing School Website - Built with Next.js, Tailwind CSS, and TypeScript</p>
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
                                        <p>A simple tool that generates comebacks for any situation.</p>
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
    )
}
