"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion, easeInOut } from "framer-motion";

type Skill = {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database";
  img: string; // image path instead of svg
};

// --------------------- Skill Images ----------------------
const skills: Skill[] = [
  {
    id: "next",
    name: "Next.js",
    category: "Frontend",
    img: "/skills/next.png",
  },
  {
    id: "vite",
    name: "Vite.js",
    category: "Frontend",
    img: "/skills/vite.png",
  },
  {
    id: "html",
    name: "HTML",
    category: "Frontend",
    img: "/skills/html.png",
  },
  {
    id: "css",
    name: "CSS",
    category: "Frontend",
    img: "/skills/css.png",
  },
  {
    id: "js",
    name: "JavaScript",
    category: "Frontend",
    img: "/skills/js.png",
  },
  {
    id: "node",
    name: "Node.js",
    category: "Backend",
    img: "/skills/node.png",
  },
  {
    id: "express",
    name: "Express.js",
    category: "Backend",
    img: "/skills/express.png",
  },
  {
    id: "nest",
    name: "Nest.js",
    category: "Backend",
    img: "/skills/nest.png",
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Database",
    img: "/skills/mysql.png",
  },
  {
    id: "mongo",
    name: "MongoDB",
    category: "Database",
    img: "/skills/mongo.png",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    category: "Database",
    img: "/skills/postgres.png",
  },
];

// ---------------- BREATHING ANIMATION ----------------
const breathing = {
  animate: {
    scale: [1, 1.04, 1],
  },
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: easeInOut,
  },
};

export default function SkillsGrid() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-4xl font-extrabold text-emerald-400 items-center ">
            <span className="text-white">Skills</span>
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Frontend · Backend · Databases
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <motion.div key={skill.id} className="rounded-lg" {...breathing}>
            <Card className="bg-[#0b1220] border border-transparent hover:border-emerald-600/40 shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
              <CardContent className="flex flex-col items-center gap-3 p-6">
                <div className="w-16 h-16 rounded-md flex items-center justify-center bg-linear-to-br from-zinc-900 to-zinc-800/60 ring-1 ring-inset ring-white/5">
                  <Image
                    src={skill.img}
                    width={40}
                    height={40}
                    alt={skill.name}
                    className="object-contain"
                  />
                </div>

                <div className="text-center">
                  <div className="text-sm font-semibold text-white">
                    {skill.name}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
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
