"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function DeveloperProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        min-h-screen w-full 
        bg-white text-black 
        dark:bg-[#090E19] dark:text-white
        flex items-center justify-center 
        p-4 md:p-6
      "
    >
      <Card
        className="
          w-full max-w-5xl 
          bg-gray-100 dark:bg-[#0C1324] 
          shadow-2xl rounded-2xl border 
          border-gray-300 dark:border-[#1A2A45] 
          p-4 sm:p-6
        "
      >
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* IMAGE SECTION */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center"
            >
              <motion.div
                initial={{ scale: 0.7, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="
                  w-44 h-44 
                  sm:w-56 sm:h-56 
                  md:w-72 md:h-72 
                  rounded-full 
                  overflow-hidden flex items-center justify-center
                  shadow-[0_0_40px_#00ff88] 
                  bg-blue-400 dark:bg-green-400
                "
              >
                <Image
                  src="/contact.jpg"
                  width={300}
                  height={300}
                  alt="Profile Image"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* TEXT SECTION */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center md:text-left"
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
                Jr. Web Application
              </h1>
              <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 text-blue-600 dark:text-green-400">
                DEVELOPER
              </h2>

              <div className="mt-6 sm:mt-8 space-y-2 text-lg sm:text-xl font-medium text-black dark:text-white">
                <p className="font-bold text-3xl sm:text-4xl">
                  PRAMOD{" "}
                  <span className="text-blue-600 dark:text-green-400">
                    THARU
                  </span>
                </p>

                <p>📞 9815442325 / 9842977209</p>
                <p>📧 tharupramod@gmail.com</p>
                <p>📍 Nepal</p>

                {/* ⭐ DOWNLOAD RESUME BUTTON */}
                <motion.a
                  href="/pramod.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    mt-4 inline-block 
                    bg-blue-600 dark:bg-green-500 
                    text-white dark:text-black 
                    font-semibold px-6 py-2 rounded-full 
                    shadow-[0_0_12px_#00FFAA] 
                    hover:bg-blue-500 dark:hover:bg-green-400 
                    transition
                  "
                >
                  📄 Download Resume
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* SERVICES SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-10"
          >
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-green-400 mb-4 text-center md:text-left">
              My Services
            </h3>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                "Website Development",
                "Website Re-design",
                "Custom Web Application",
                "E-commerce Website",
                "Corporate Website",
                "News Portal Website",
                "API / Mobile Apps Development",
                "Logo Designing",
                "Graphic Designing",
                "Domain & Hosting",
                "Maintenance & Support",
                "Many More...",
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="
                    bg-blue-200 dark:bg-[#004080] 
                    text-black dark:text-green-300
                    px-4 py-2 rounded-full text-sm sm:text-base
                    shadow-[0_0_10px_#00ff88] 
                    border border-blue-400 dark:border-green-400 
                    cursor-pointer
                  "
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
