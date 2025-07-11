import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <CardTitle>FoodFast</CardTitle>
                <Link
                  href="https://food-fast-peach.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-low-contrast-text hover:text-high-contrast-text transition-colors"
                >
                  <FontAwesomeIcon icon={faLink} className="w-5 h-5" />
                </Link>
              </div>
              <CardDescription>
                <p>
                  A web application that generates recipes based on the
                  ingredients you have.
                </p>
              </CardDescription>
              <Image
                src="/foodfast.png"
                alt="FoodFast"
                width={800}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <CardTitle>Owens Academy</CardTitle>
                <Link
                  href="https://www.owensacademy.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-low-contrast-text hover:text-high-contrast-text transition-colors"
                >
                  <FontAwesomeIcon icon={faLink} className="w-5 h-5" />
                </Link>
              </div>
              <CardDescription>
                <p>
                  Irish Dancing School Website - Built with Next.js,
                  Tailwind CSS, and TypeScript
                </p>
              </CardDescription>
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

        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <CardTitle>Comeback Generator</CardTitle>
                <Link
                  href="https://comeback-generator-chi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-low-contrast-text hover:text-high-contrast-text transition-colors"
                >
                  <FontAwesomeIcon icon={faLink} className="w-5 h-5" />
                </Link>
              </div>
              <CardDescription>
                <p>
                  A simple tool that generates comebacks for any
                  situation.
                </p>
              </CardDescription>
              <Image
                src="/comebackGenerator.png"
                alt="Comeback Generator"
                width={800}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </CardHeader>
        </Card>
      </div>
    </main>
  );
}