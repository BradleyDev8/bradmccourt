export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "FoodFast",
    description:
      "A web application that generates recipes based on the ingredients you have.",
    image: "/foodfast.png",
    link: "https://food-fast-peach.vercel.app",
  },
  {
    title: "Owens Academy",
    description:
      "Irish Dancing School Website - Built with Next.js, Tailwind CSS, and TypeScript",
    image: "/owensAca.png",
    link: "https://www.owensacademy.org/",
  },
  {
    title: "Comeback Generator",
    description: "A simple tool that generates comebacks for any situation.",
    image: "/comebackGenerator.png",
    link: "https://comeback-generator-chi.vercel.app/",
  },
];
