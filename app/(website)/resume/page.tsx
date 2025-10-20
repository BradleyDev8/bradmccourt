import { experiences } from "@/lib/data/experience";
import { ExperienceCard } from "@/components/ui/experience-card";

export default function Resume() {
  return (
    <main className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-2 md:gap-12">
        <div className="flex flex-col gap-8">
          <span className="font-medium text-lg">Professional Experiences</span>

          <div className="flex flex-col gap-6">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.company} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
