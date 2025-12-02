"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  expertise: string;
}

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Pramod Tharu",
    role: "Chairperson",
    description:
      "Strategic leader guiding company vision, partnerships, and long-term direction.",
    expertise: "Leadership",
  },
  {
    name: "Bal Gobind Chaudhary",
    role: "Founder & CEO",
    description:
      "Founder focusing on product strategy, partnerships, and company growth.",
    expertise: "Strategy",
  },
  {
    name: "Arun Neupane",
    role: "Project Manager & Lead Developer",
    description:
      "Leads engineering teams, designs scalable systems, and ensures delivery cadence.",
    expertise: "Project Management",
  },
  {
    name: "Bijay Kumar Chaudhary",
    role: "Frontend Developer",
    description:
      "Focuses on performant UI, component libraries, and pixel-perfect implementation.",
    expertise: "Frontend Dev",
  },
  {
    name: "Aashish GM",
    role: "Frontend Developer",
    description:
      "Creates reusable UI patterns, animations, and accessibility-first components.",
    expertise: "Frontend Dev",
  },
  {
    name: "Puspa Gurung",
    role: "UI/UX Designer",
    description:
      "Crafts user journeys, high-fidelity prototypes, and design systems for consistency.",
    expertise: "UI/UX Design",
  },
  {
    name: "Roshan Ghimire",
    role: "Social Media & Marketing Handler",
    description:
      "Leads social strategy, content pipelines, and community engagement campaigns.",
    expertise: "Marketing",
  },
  {
    name: "Sunil Poudel",
    role: "QA Engineer",
    description:
      "Designs test strategy, automation, and ensures release quality across products.",
    expertise: "QA",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Pramod Tharu",
    role: "Chairperson",
    text: "Leading this amazing team has been a journey of constant innovation and growth.",
  },
  {
    name: "Bal Gobind Chaudhary",
    role: "Founder & CEO",
    text: "Building Sajilo Digital from the ground up has taught me the power of vision and execution.",
  },
  {
    name: "Arun Neupane",
    role: "Project Manager & Lead Developer",
    text: "Coordinating projects while maintaining code quality is my daily passion.",
  },
];

export default function TeamSection() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Auto-slide testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white text-black dark:bg-[#050A17] dark:text-white py-20 px-6 md:px-12 transition-colors duration-500">
      {/* Section Title */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
          Meet Our Team
        </h2>
        <p className="text-sm sm:text-base md:text-lg mt-4 text-gray-700 dark:text-gray-300">
          A multidisciplinary team building robust products — design-led,
          data-driven, and user-first.
        </p>
      </div>

      {/* Team Members */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="bg-gray-100 dark:bg-[#0A1323] border-none shadow-lg relative overflow-hidden transition-colors duration-500">
              {/* Expertise Badge */}
              <div className="absolute top-3 right-3 bg-blue-600 dark:bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold z-10">
                {member.expertise}
              </div>
              <CardHeader className="text-center mt-4">
                <CardTitle className="text-lg md:text-xl font-semibold text-black dark:text-white">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base leading-relaxed text-black dark:text-gray-200">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Testimonials Slider */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-black dark:text-white">
          Testimonials
        </h3>
        <div className="relative h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full"
            >
              <Card className="bg-gray-100 dark:bg-[#0A1323] border-none shadow-lg p-6 text-center transition-colors duration-500">
                <CardContent>
                  <p className="text-sm md:text-base italic mb-4 text-black dark:text-gray-200">
                    &quot;{testimonials[testimonialIndex].text}&quot;
                  </p>
                  <p className="font-semibold text-black dark:text-white">
                    {testimonials[testimonialIndex].name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonials[testimonialIndex].role}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
