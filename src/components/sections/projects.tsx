"use client";

import { useState } from "react";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, ChevronDown } from "lucide-react";

const projectsData = [
  {
    title: "EduSupport Portal",
    description:
      "EduPortal is an interactive student-faculty platform that streamlines academic assistance. With ticket management, private messaging, and a helpful posts section, it ensures smooth communication and easy access to learning resources. 📝✨",
    image: "/eduportal.png",
    imageHint: "Education Portal",
    stack: ["Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Meetnakrani007/EduPortal",
    live: "https://eduportal-web.onrender.com",
  },
  {
    title: "Wanderlust",
    description:
      "Wanderlust is a full-stack travel accommodation platform where users can explore, list, and book unique stays. It features secure authentication, dynamic listings, and a smooth booking experience across devices.",
    image: "/wanderlust.png",
    imageHint: "travel accommodation",
    stack: ["Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Meetnakrani007/WanderLust-Project-Full-stack-",
    live: "https://wanderlust-project-full-stack.onrender.com/listings",
  },
  {
    title: "Currency Converter",
    description:
      "A simple and intuitive currency converter that provides real-time exchange rates. Built with a currency API.",
    image: "/c_convert.png",
    imageHint: "currency exchange",
    stack: ["HTML", "CSS", "JavaScript", "API", "Tailwind CSS"],
    github: "https://github.com/Meetnakrani007/Currency-Converter",
    live: "https://currency-converter-bymeetnakrani.onrender.com/",
  },
  {
    title: "Simon Says Game",
    description:
      'A classic memory game "Simon Says" built with a modern, glowing UI. Test your memory by repeating the sequence of colors and aim for the highest score.',
    image: "/s_game.jpg",
    imageHint: "retro arcade",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Meetnakrani007/Simon-Says-game-",
    live: "https://simon-says-game-bymeetnakrani.onrender.com/",
  },
];

export function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projectsToShow = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="projects" className="w-full scroll-mt-20">
      <div className="space-y-4 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline relative inline-block pb-2">
            My Projects
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-primary rounded-full"></div>
          </h2>
        </div>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          A Glimpse into My Creations
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsToShow.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
          >
            <div className="relative overflow-hidden border-b">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                data-ai-hint={project.imageHint}
                className="object-cover w-full h-auto aspect-video group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <CardTitle className="mb-2">{project.title}</CardTitle>
              <p className="text-muted-foreground text-sm mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-auto flex justify-end space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Link>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      {projectsData.length > 3 && (
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="rounded-full"
          >
            {showAll ? "Show Less" : "Show More Projects"}
            <ChevronDown
              className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
            />
          </Button>
        </div>
      )}
    </section>
  );
}
