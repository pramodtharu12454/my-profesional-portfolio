"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function AboutSection() {
  // Typing effect text
  const fullText =
    "I am a Full Stack Developer passionate about creating modern, responsive, and user-friendly web applications. I specialize in React, Next.js, and Node.js, delivering seamless frontend and backend experiences. I enjoy solving complex challenges, optimizing performance, and building visually appealing applications. My goal is to provide efficient, interactive, and high-quality web projects while continuously learning new technologies and improving my";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 30); // Faster typing = smoother
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const remainingText = " skills.";

  return (
    <section className="w-full bg-[#050A17] text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
        {/* LEFT SIDE — TEXT */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-[#0A1323] border-none shadow-xl p-4 md:p-6 rounded-2xl">
            <CardHeader className="space-y-3">
              <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold">
                About Me
              </CardTitle>

              <CardDescription>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white">
                  {displayText}
                  {index === fullText.length && remainingText}
                </p>
              </CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        </motion.div>

        {/* RIGHT SIDE — IMAGE */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative w-full h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/about.jpg"
              alt="Full Stack Developer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
