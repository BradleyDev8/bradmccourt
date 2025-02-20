import Avatar from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

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

export default function Home() {
    return (
        <>  
        <main className="flex flex-col gap-16 md:gap=24">
            <div className="flex flex-col gap-4">
                <div className="block md:hidden">
                    <Avatar width={56} height={56} />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-medium">About</span>
                    <p>Full Stack Software Engineer passionate about scalable, efficient solutions.</p>
                    <p>Skilled in distributed systems, cloud architecture, and development with Next.js, React, TypeScript, and Node.js. Focused on clean code and business value.</p>
                </div>
                <Separator className="bg-white" />
                {/* Tech Stack Section */}
                <div className="flex flex-col gap-2">
                    <span className="font-medium">Tech Stack</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <TooltipProvider>
                            {techStack.map((tech) => (
                                <Tooltip key={tech.name}>
                                    <TooltipTrigger>
                                        <Card className="flex items-center justify-center p-6 hover:bg-ui-component-hover transition-colors">
                                            <Image
                                                src={tech.icon}
                                                alt={`${tech.name} icon`}
                                                width={48}
                                                height={48}
                                                className="w-12 h-12"
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
                <Separator className="bg-white" />
                {/* Experience Section */}
                <div className="flex flex-col gap-2">
                    <span className="font-medium">Experience</span>
                    <div className="flex flex-col gap-4">
                        <Card>
                            <CardHeader>
                                <div className="flex flex-row gap-4">
                                    <div className="flex min-w-[100px] w-[100px] h-[100px] items-center justify-center">
                                        <Image
                                            src="/hamrob.png"
                                            alt="Hamilton Robson Logo"
                                            width={100}
                                            height={100}
                                            className="w-full h-full object-contain bg-white rounded-lg"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col gap-1">
                                            <div className="text-sm text-low-contrast-text">
                                                Jul 2023 — Present
                                            </div>
                                            <CardTitle>Hamilton Robson - Software Engineer</CardTitle>
                                            <CardDescription>
                                                <p>As a Full Stack Engineer, I specialise in developing scalable and efficient solutions across various platforms using
                                                TypeScript, React, React Native, Node.js and Next.js.</p>
                                            </CardDescription>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <div className="flex flex-row gap-4">
                                    <div className="flex min-w-[100px] w-[100px] h-[100px] items-center justify-center">
                                        <Image
                                            src="/ulsterUni.png"
                                            alt="Ulster University Logo"
                                            width={100}
                                            height={100}
                                            className="w-full h-full object-contain bg-white rounded-lg"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col gap-1">
                                            <div className="text-sm text-low-contrast-text">
                                                May 2021 — May 2022
                                            </div>
                                            <CardTitle>Ulster University - Web Developer (Placement)</CardTitle>
                                            <CardDescription>
                                                <p>providing a solution for students during the pandemic by creating a front-end application that
                                                allowed students to check which PCs were available and in use for remote access.</p>
                                            </CardDescription>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
                <Separator className="bg-white" />
                {/* Project Section */}
                <div className="flex flex-col gap-2">
                    <span className="font-medium">Projects</span>
                    <div className="flex flex-col gap-2">
                        <Card>
                            <CardHeader>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <CardTitle>Owens Academy</CardTitle>
                                        <CardDescription>
                                            <p>Irish Dancing School Website - Built with Next.js, Tailwind CSS, and TypeScript</p>
                                        </CardDescription>
                                    </div>
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
                </div>
                <Separator className="bg-white" />

            </div>
        </main>
        </>
    )
}
