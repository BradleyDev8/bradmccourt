export interface TechItem {
  name: string;
  icon: string;
}

export interface TechStackCategory {
  name: string;
  emoji: string;
  colorClass: string;
  items: TechItem[];
}

export const techStack: Record<string, TechStackCategory> = {
  frontend: {
    name: "frontend",
    emoji: "⚡",
    colorClass: "bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200",
    items: [
      { name: "TypeScript", icon: "/tech-icons/TypeScript Icon.svg" },
      { name: "React", icon: "/tech-icons/React Icon.svg" },
      { name: "Next.js", icon: "/tech-icons/Next.js Icon.svg" },
      { name: "Tailwind CSS", icon: "/tech-icons/Tailwind CSS Icon.svg" },
    ],
  },
  backend: {
    name: "backend",
    emoji: "⚡",
    colorClass: "bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200",
    items: [
      { name: "Python", icon: "/tech-icons/Python Icon.svg" },
      { name: "AWS", icon: "/tech-icons/AWS Icon.svg" },
      { name: "Docker", icon: "/tech-icons/Docker Icon.svg" },
      { name: "Node.js", icon: "/tech-icons/Node.js Icon.svg" },
      { name: "Express", icon: "/tech-icons/Express Icon.svg" },
    ],
  },
  database: {
    name: "database",
    emoji: "⚡",
    colorClass: "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200",
    items: [
      { name: "DynamoDB", icon: "/dynamodb.svg" },
      { name: "RDS", icon: "/aws-rds.svg" },
      { name: "PlanetScale", icon: "/tech-icons/PlanetScale Icon.svg" },
      { name: "Supabase", icon: "/supabase-dark.svg" },
      { name: "Neon", icon: "/neon-icon.svg" },
      { name: "MongoDB", icon: "/mongodb-wordmark.svg" },
    ],
  },
};

export const techStackCategories = Object.values(techStack);
