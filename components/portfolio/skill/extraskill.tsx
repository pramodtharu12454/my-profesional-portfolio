"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Skill = {
  id: string;
  title: string;
  details: string[]; // multiple points for more explanation
  icon?: string;
};

const skills: Skill[] = [
  {
    id: "figma",
    title: "Figma Design",
    details: [
      "Create wireframes, mockups, and prototypes.",
      "Design responsive UI/UX for web and mobile.",
      "Collaborate with developers for pixel-perfect implementation.",
    ],
  },
  {
    id: "canva",
    title: "Canva Design",
    details: [
      "Design posters, banners, and social media content.",
      "Use templates and create custom graphics.",
      "Optimize visuals for branding consistency.",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Handling",
    details: [
      "Manage Instagram, Facebook, LinkedIn pages.",
      "Schedule posts and create stories/reels.",
      "Analyze engagement metrics to improve reach.",
    ],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    details: [
      "Edit videos for marketing campaigns.",
      "Use Premiere Pro, CapCut, or similar tools.",
      "Add subtitles, transitions, and effects for engagement.",
    ],
  },
];

export default function ExtraSkills() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#090E19] text-black dark:text-white p-6">
      <h2 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-6">
        Extra Skills
      </h2>

      <div className="space-y-6">
        {skills.map((skill) => (
          <Card
            key={skill.id}
            className="bg-gray-100 dark:bg-[#0F1625] border border-gray-300 dark:border-[#1F2937] shadow-lg hover:shadow-green-400/40 dark:hover:shadow-green-500/40 hover:border-green-300 dark:hover:border-green-400 transition-all duration-300 rounded-xl"
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                {skill.icon && (
                  <img src={skill.icon} alt={skill.title} className="w-6 h-6" />
                )}
                {skill.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <ul className="list-disc list-inside">
                {skill.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
