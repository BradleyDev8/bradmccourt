import Avatar from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

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
                <Separator className=" bg-white" />
                <div className="flex flex-col gap-2">
                    <span className="font-medium">Tech Stack</span>
                    <div className="flex flex-wrap gap-2">

                    </div>
                </div>
            </div>
        </main>
        </>
    )
}
