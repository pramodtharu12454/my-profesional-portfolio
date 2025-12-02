"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardHero() {
  const router = useRouter();
  const roles = ["Full Stack Developer", "Creative Thinker", "Web Developer"];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  // Typewriter Animation
  useEffect(() => {
    const currentText = roles[index];
    let i = 0;

    const typing = setInterval(() => {
      setDisplayText(currentText.slice(0, i));
      i++;
      if (i > currentText.length) {
        clearInterval(typing);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1200);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <section
      className="
        w-full h-screen flex flex-col md:flex-row 
        items-center justify-between 
        px-6 md:px-12 lg:px-20 py-16 
        relative overflow-hidden 
        bg-white text-black
        dark:bg-[#050A17] dark:text-white
        animate-fadeIn
      "
    >
      {/* LEFT CONTENT */}
      <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left relative z-10 animate-slideUp">
        <p className="text-blue-600 dark:text-green-400 text-lg md:text-xl font-medium">
          Hello, I&apos;m
        </p>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-wide">
          Pramod Tharu
        </h1>

        <h2 className="text-blue-700 dark:text-green-300 text-xl md:text-3xl font-semibold h-10">
          {displayText}
          <span className="border-r-2 border-current ml-1 animate-pulse" />
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 text-sm md:text-base">
          Building futuristic web experiences with clean code, modern UI,
          animation, and high-performance architecture.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 justify-center md:justify-start pt-4">
          <button
            onClick={() => router.push("/projects")}
            className="
              px-5 py-2 rounded-md border 
              border-blue-600 text-blue-600 
              hover:bg-blue-600 hover:text-white
              dark:border-green-500 dark:text-green-400 
              dark:hover:bg-green-500 dark:hover:text-black 
              shadow-lg shadow-blue-500/30 dark:shadow-green-500/40
            "
          >
            View Work
          </button>

          <button
            onClick={() => router.push("/contact")}
            className="
              px-5 py-2 rounded-md border 
              border-gray-700 text-black 
              hover:bg-gray-300
              dark:border-gray-400 dark:text-white 
              dark:hover:bg-gray-300 dark:hover:text-black 
              shadow-lg shadow-gray-400/20 dark:shadow-white/10
            "
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE + OVERLAYS */}
      <div className="flex-1 flex flex-col items-center mt-10 md:mt-0 relative z-10 animate-slideRight">
        <div className="relative flex justify-center items-center">
          {/* Glow Background */}
          <div
            className="
            absolute inset-0 w-64 h-64 md:w-80 md:h-80 
            rounded-full blur-[100px] opacity-40 
            bg-blue-500 dark:bg-green-500
          "
          />

          {/* Main Image */}
          <Image
            src="/myimage.jpg"
            width={300}
            height={300}
            alt="Profile Image"
            className="
              relative w-56 h-56 md:w-72 md:h-72 
              rounded-full object-cover 
              border-4 
              border-blue-600 dark:border-green-400
              shadow-[0_0_40px_10px_rgba(0,120,255,0.4)]
              dark:shadow-[0_0_40px_10px_rgba(0,255,100,0.5)]
            "
          />

          {/* Overlay 1 */}
          <div
            className="
              absolute -top-10 md:-top-12 
              bg-white/80 text-blue-700 border border-blue-600 
              dark:bg-[#0F1A2B]/80 dark:border-green-500 dark:text-green-300 
              shadow-lg 
              px-4 py-2 rounded-lg animate-breathing
            "
          >
            ⭐ 6 Months of Experience
          </div>

          {/* Overlay 2 */}
          <div
            className="
              absolute -bottom-10 md:-bottom-12 
              bg-white/80 text-blue-700 border border-blue-600 
              dark:bg-[#0F1A2B]/80 dark:border-green-500 dark:text-green-300 
              shadow-lg 
              px-4 py-2 rounded-lg animate-breathing
            "
          >
            🚀 6+ Clients Satisfied
          </div>
        </div>
      </div>
    </section>
  );
}
