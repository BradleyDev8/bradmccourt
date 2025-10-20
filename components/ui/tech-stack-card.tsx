import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TechStackCategory } from "@/lib/data/tech-stack";

interface TechStackCardProps {
  category: TechStackCategory;
}

export function TechStackCard({ category }: TechStackCardProps) {
  return (
    <Card className="p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-yellow-500">{category.emoji}</span>
        <span className="font-medium">{category.name}</span>
      </div>
      <div className="flex flex-wrap gap-3">
        <TooltipProvider>
          {category.items.map((tech) => (
            <Tooltip key={tech.name}>
              <TooltipTrigger>
                <div
                  className={`flex items-center gap-2 ${category.colorClass} px-2 py-1 rounded-md text-xs`}
                >
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
  );
}
