"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  description?: string;
  url: string;
  screenshots?: string[];
  tags?: string[];
};

const projects: Project[] = [
  {
    id: "cosmicmedia",
    title: "Cosmic Media",
    description: "Tour & media demo for cosmicmedia.com.np",
    url: "https://www.cosmicmedia.com.np",
    screenshots: ["/images/cosmicmedia-1.jpg", "/images/cosmicmedia-2.jpg"],
    tags: ["React", "Shadcn", "Demo"],
  },
  {
    id: "mountglacier",
    title: "Mount Glacier Trek",
    description: "Tour & travel demo for mountglaciertrek.com.np",
    url: "https://www.mountglaciertrek.com.np",
    screenshots: ["/images/mountglacier-1.jpg"],
    tags: ["Next.js", "Tours"],
  },
  {
    id: "lifetech",
    title: "LifeTech",
    description: "Corporate demo for lifetech.com.np",
    url: "https://www.lifetech.com.np",
    screenshots: ["/images/lifetech-1.jpg"],
    tags: ["Corporate", "Demo"],
  },
  {
    id: "cvghar",
    title: "CV Ghar",
    description: "CV service demo cvghar.pramodtharu.com.np",
    url: "https://cvghar.pramodtharu.com.np",
    screenshots: ["/images/cvghar-1.jpg"],
    tags: ["Portfolio"],
  },
  {
    id: "portfolio",
    title: "Pramod Portfolio",
    description: "Personal portfolio pramodtharu.vercel.app",
    url: "https://pramodtharu.vercel.app",
    screenshots: ["/images/portfolio-1.jpg"],
    tags: ["Portfolio", "Personal"],
  },
  {
    id: "careerkhoj",
    title: "CareerKhoj (helped)",
    description: "Helped develop careerkhoj project",
    url: "https://careerkhoj.balgobindchaudhary.com.np",
    screenshots: ["/images/careerkhoj-1.jpg"],
    tags: ["Client Work"],
  },
  {
    id: "sajilodigital",
    title: "Sajilo Digital",
    description: "Company demo sajilodigital.com",
    url: "https://www.sajilodigital.com.np",
    screenshots: ["/images/sajilodigital-1.jpg"],
    tags: ["Agency"],
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-[#090E19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center text-black dark:text-white">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="overflow-hidden shadow-[0_0_15px_#00FF00] dark:shadow-[0_0_15px_#00FFAA] hover:shadow-[0_0_25px_#00FF7F] transition-shadow duration-500 bg-white dark:bg-[#0B1224] transform hover:-translate-y-1 hover:scale-105">
                <div className="relative">
                  {project.screenshots && (
                    <div className="overflow-hidden h-48 rounded-md">
                      <motion.div
                        className="flex flex-col"
                        whileHover={{
                          y:
                            project.screenshots.length > 1
                              ? -project.screenshots.length * 48
                              : 0,
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        {project.screenshots.map((src, i) => (
                          <img
                            key={i}
                            src={src}
                            alt={`${project.title} screenshot ${i + 1}`}
                            className="w-full h-48 object-cover"
                          />
                        ))}
                      </motion.div>
                    </div>
                  )}
                </div>

                <CardContent>
                  <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map((tag) => (
                      <Badge
                        key={tag}
                        className="dark:bg-gray-800 dark:text-gray-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <Button className="w-full py-3 text-base font-medium animate-breathe hover:bg-[#00FF7F] hover:text-black dark:hover:bg-[#00FFAA] transition-colors duration-300">
                      Open Live Demo
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes breathe {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-breathe {
          animation: breathe 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
