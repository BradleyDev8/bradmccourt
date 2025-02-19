import Avatar from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const techStack = [
    { name: "TypeScript", icon: "/tech-icons/TypeScript Icon.svg" },
    { name: "JavaScript", icon: "/tech-icons/JavaScript Icon.svg" },
    { name: "React", icon: "/tech-icons/React Icon.svg" },
    { name: "Next.js", icon: "/tech-icons/Next.js Icon.svg" },
    { name: "Node.js", icon: "/tech-icons/Node.js Icon.svg" },
    { name: "Tailwind CSS", icon: "/tech-icons/Tailwind CSS Icon.svg" },
    { name: "Git", icon: "/tech-icons/Git Icon.svg" },
    { name: "Docker", icon: "/tech-icons/Docker Icon.svg" },
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
                    <p>A Full Stack Software Engineer with a passion for building scalable and efficient software. With expertise in distributed systems and cloud architecture, I focus on creating solutions that drive value at scale.</p>
                    <p>My experience spans backend, frontend, and mobile development, with particular strength in frontend development. While I&apos;m technology-agnostic and can adapt to any stack, I excel in Next.js, React, and Node.js with TypeScript. I&apos;m driven by clean code principles and always aim to balance technical excellence with practical busisness needs.</p>
                </div>
                <Separator className="bg-white" />
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
            </div>
        </main>
        </>
    )
}
