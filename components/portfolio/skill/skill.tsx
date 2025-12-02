"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

type Skill = {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database";
  img: string;
};

// --------------------- Skill Images ----------------------
const skills: Skill[] = [
  {
    id: "next",
    name: "Next.js",
    category: "Frontend",
    img: "/logo/nextjs.png",
  },
  { id: "vite", name: "Vite.js", category: "Frontend", img: "/logo/vite.png" },
  { id: "html", name: "HTML", category: "Frontend", img: "/logo/html5.png" },
  { id: "css", name: "CSS", category: "Frontend", img: "/logo/css.png" },
  {
    id: "js",
    name: "JavaScript",
    category: "Frontend",
    img: "/logo/javascript.png",
  },
  { id: "node", name: "Node.js", category: "Backend", img: "/logo/nodejs.png" },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    img: "/logo/express.png",
  },
  { id: "nest", name: "Nest.js", category: "Backend", img: "/logo/nestjs.jpg" },
  { id: "mysql", name: "MySQL", category: "Database", img: "/logo/mysql.png" },
  {
    id: "mongo",
    name: "MongoDB",
    category: "Database",
    img: "/logo/mongodbl.png",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    category: "Database",
    img: "/logo/postgressql.jpg",
  },
];

// ---------------- BREATHING ANIMATION ----------------
const breathing = {
  animate: { scale: [1, 1.04, 1] },
  transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
};

export default function SkillsGrid() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-4xl font-extrabold">
            <span className="text-black dark:text-white">Skills</span>{" "}
            <span className="text-emerald-400">·</span>
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Frontend · Backend · Databases
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="rounded-lg"
            animate={breathing.animate}
          >
            <Card className="bg-gray-100 dark:bg-[#0b1220] border border-transparent hover:border-emerald-600/40 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
              <CardContent className="flex flex-col items-center gap-3 p-6">
                <div className="w-16 h-16 rounded-md flex items-center justify-center bg-gradient-to-br from-zinc-200/20 dark:from-zinc-900 to-zinc-300/10 dark:to-zinc-800/60 ring-1 ring-inset ring-black/5 dark:ring-white/5">
                  <Image
                    src={skill.img}
                    width={40}
                    height={40}
                    alt={skill.name}
                    className="object-contain"
                  />
                </div>

                <div className="text-center">
                  <div className="text-sm font-semibold text-black dark:text-white">
                    {skill.name}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {skill.category}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
