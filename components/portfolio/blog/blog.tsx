"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const blogs = [
  {
    id: 1,
    title: "My Journey at Asian School of Management & Technology",
    desc: "My academic path took a major turn when I joined the Asian School of Management and Technology. It was the first true exposure to structured IT education, helping me understand how technology impacts real businesses.",
    image: "/blog/asian-college.jpg",
    tag: "Education",
  },
  {
    id: 2,
    title: "Training Experience at Broadway Infosys",
    desc: "Broadway Infosys gave me the hands-on environment I always wanted. Learning practical programming from industry experts improved my confidence and made me more skill-ready.",
    image: "/blog/brodway.jpg",
    tag: "Training",
  },
  {
    id: 3,
    title: "Internship at LifeTech Nepal",
    desc: "During my internship at LifeTech, I worked with real projects and development teams, understanding workflows, deadlines, and the pressure of delivering quality.",
    image: "/blog/lifetech.jpg",
    tag: "Internship",
  },
  {
    id: 4,
    title: "My +2 Experience at Manimukunda College, Butwal",
    desc: "I studied Management in classes 11 and 12 at Manimukunda College. It shaped my communication, leadership, and discipline which later helped in my IT journey.",
    image: "/blog/manimukunda.jpg",
    tag: "College Life",
  },
  {
    id: 5,
    title: "From BBM Student to Full-Time IT Learner",
    desc: "I joined BBM 1st semester in lumbini banijya campus, but destiny pulled me towards IT. Leaving BBM was difficult, but choosing IT gave me purpose and direction.",
    image: "/blog/lumbinibanijya.webp",
    tag: "Career Switch",
  },
  {
    id: 6,
    title: "How Travel Inspires My Creativity",
    desc: "Traveling gives me space to think, refresh, and reset. It inspires me to approach problems differently and appreciate diversity.",
    image: "/blog/travel.jpg",
    tag: "Lifestyle",
  },
  {
    id: 7,
    title: "My Love for Biking and Adventure",
    desc: "Biking is not just a hobby — it's freedom. Feeling the wind, exploring new roads, and discovering new places always clears my mind.",
    image: "/blog/bike.jpg",
    tag: "Personal",
  },
  {
    id: 8,
    title: "Passion for Singing, Dancing & Performing",
    desc: "Art has always been a part of me. Singing and dancing help me express emotions and stay mentally balanced beyond coding life.",
    image: "/blog/music.png",
    tag: "Art",
  },
  {
    id: 9,
    title: "Esports & Physical Games: A Balanced Life",
    desc: "I enjoy playing both physical and esports games. Strategy, teamwork, speed — everything sharpens my mind and keeps me active.",
    image: "/blog/sport2.jpg",
    tag: "Games",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-[#050A17] text-white py-20 px-6 md:px-12">
      {/* HEADER */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          My Blogs & Experiences
        </h2>
        <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
          A collection of my journey — from education, internships, training,
          hobbies, adventures, and passion. Every moment shaped who I am today
          as a tech-driven, creative, and continuously evolving person.
        </p>
      </motion.div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-[#0A1323] text-white border border-[#1A2335] rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(0,200,255,0.3)] transition-all duration-300">
              {/* HOVER SLIDE IMAGE ANIMATION */}
              <motion.div
                className="relative w-full h-56 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* CARD BODY */}
              <CardHeader>
                <span className="text-xs text-cyan-300 font-semibold tracking-wider uppercase">
                  {blog.tag}
                </span>

                <CardTitle className="text-xl md:text-2xl font-bold mt-2">
                  {blog.title}
                </CardTitle>

                <CardDescription className="text-gray-300 mt-3 text-sm md:text-base leading-relaxed">
                  {blog.desc}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <motion.button
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-cyan-400 text-sm font-semibold hover:underline"
                >
                  Read More →
                </motion.button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
