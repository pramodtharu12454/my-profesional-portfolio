"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React, Next.js, Node.js, and various databases to build full stack applications.",
  },
  {
    question: "Do you build responsive websites?",
    answer:
      "Yes, all my projects are fully responsive and optimized for mobile, tablet, and desktop screens.",
  },
  {
    question: "Can you work on both frontend and backend?",
    answer:
      "Absolutely! I enjoy working on both frontend and backend, creating seamless full stack solutions.",
  },
  {
    question: "Do you follow best coding practices?",
    answer:
      "Yes, I follow clean code principles, proper component structuring, and maintainable architecture.",
  },
  {
    question: "Can you optimize website performance?",
    answer:
      "Yes, I optimize applications for speed, SEO, and overall user experience.",
  },
  {
    question: "Do you use motion and animations?",
    answer:
      "Yes, I use Framer Motion for smooth animations and interactive UI components.",
  },
  {
    question: "Do you collaborate with designers and teams?",
    answer:
      "Yes, I believe in teamwork and always collaborate closely with designers, developers, and stakeholders.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white dark:bg-[#050A17] text-black dark:text-white py-20 px-6 md:px-12 transition-colors duration-500">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-black dark:text-white">
          Frequently Asked Questions
        </h2>

        {faqData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(0, 255, 128, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            <Card
              className="bg-gray-100 dark:bg-[#0A1323] border-none shadow-md cursor-pointer transition-colors duration-500"
              onClick={() => toggleFAQ(index)}
            >
              <CardHeader className="flex justify-between items-center">
                <CardTitle className="text-lg md:text-xl font-semibold text-black dark:text-white">
                  {item.question}
                </CardTitle>
                <div className="text-black dark:text-white">
                  {openIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </div>
              </CardHeader>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent>
                      <p className="text-sm sm:text-base md:text-base leading-relaxed text-black dark:text-gray-200">
                        {item.answer}
                      </p>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
