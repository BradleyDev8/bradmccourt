import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ui/project-card";

export const metadata = {
  title: 'Projects | Brad McCourt',
  description: 'Portfolio of my software development projects and work samples.',
};

export default function Project() {
  return (
    <main className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-4">
        <h1 className="font-medium">Projects</h1>
        <p className="text-low-contrast-text">
          A collection of my software development projects and work samples.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </main>
  );
}