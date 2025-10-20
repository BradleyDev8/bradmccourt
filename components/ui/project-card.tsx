import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <CardTitle>{project.title}</CardTitle>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-low-contrast-text hover:text-high-contrast-text transition-colors"
            >
              <FontAwesomeIcon icon={faLink} className="w-5 h-5" />
            </Link>
          </div>
          <CardDescription>
            <p>{project.description}</p>
          </CardDescription>
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>
      </CardHeader>
    </Card>
  );
}
