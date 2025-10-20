import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Experience } from "@/lib/data/experience";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
            <Image
              src={experience.logo}
              alt={`${experience.company} Logo`}
              width={48}
              height={48}
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex items-start justify-between mb-2">
            <div className="flex flex-col">
              <h3 className="text-base font-medium">{experience.company}</h3>
              <p className="text-sm text-low-contrast-text">
                {experience.position}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-2 py-1 rounded-2xl text-xs font-medium border border-[#374151] text-yellow-800 dark:text-yellow-200">
              📅 {experience.period}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
