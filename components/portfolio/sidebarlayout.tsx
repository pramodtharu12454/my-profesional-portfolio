"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Broadway Infosys – Training Certificate",
    description:
      "Completed professional training program with verified certification.",
  },
  {
    title: "Lifetech Pvt. Ltd – Internship Certificate",
    description:
      "Successfully completed internship with hands-on real-world projects.",
  },
  {
    title: "React Developer — Practice Certificate",
    description: "Built multiple React-based applications and UI components.",
  },
  {
    title: "MERN Stack — Bootcamp",
    description:
      "Completed MERN full-stack bootcamp with final project submission.",
  },
  {
    title: "Web Design — Training",
    description:
      "Training focused on modern UI/UX, responsive layouts, and best practices.",
  },
  {
    title: "API Development — Practical Certificate",
    description:
      "Created REST APIs and learned best backend architecture patterns.",
  },
];

const breath = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.03, 1],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#090E19] text-black dark:text-white grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
      {/* LEFT SIDE — ACHIEVEMENT CARDS */}
      <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
        {certificates.map((item, i) => (
          <motion.div key={i} {...breath}>
            <Card className="bg-gray-100 dark:bg-[#0F1625] border border-gray-300 dark:border-[#1F2937] shadow-lg hover:shadow-green-400/40 dark:hover:shadow-green-500/40 hover:border-green-300 dark:hover:border-green-400 transition-all duration-300 rounded-xl">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-green-700 dark:text-green-300">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 dark:text-gray-300">
                {item.description}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* RIGHT SIDE — ONLY CONTACT CARD */}
      <div className="space-y-6">
        <Card className="bg-gray-100 dark:bg-[#0F1625] border border-gray-300 dark:border-[#1F2937] p-4 rounded-xl shadow-xl sticky top-4">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-green-700 dark:text-green-300">
              Let’s Connect
            </CardTitle>
          </CardHeader>

          <CardContent className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <p>Turn your vision into reality.</p>
            <p>
              Available: <b>9:00 AM – 6:00 PM</b>
              <br />
              Monday to Friday
            </p>

            <div className="pt-2 space-y-1">
              <p>
                <b className="text-green-700 dark:text-green-300">9842977209</b>
              </p>
              <p>
                <b className="text-green-700 dark:text-green-300">9815442325</b>
              </p>
            </div>

            <button className="mt-3 w-full py-2 rounded-lg bg-green-700 dark:bg-green-300 text-white dark:text-black hover:bg-green-600 dark:hover:bg-green-400 shadow-lg hover:shadow-green-500/40 dark:hover:shadow-green-400/40 transition">
              Let’s Start Conversation
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
