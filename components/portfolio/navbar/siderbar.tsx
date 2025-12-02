"use client";

import React, { useState, ReactNode, useEffect } from "react";
import {
  Home,
  User,
  Wrench,
  FolderKanban,
  BookOpen,
  Phone,
  Sun,
  Moon,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SidebarLayoutProps {
  children: ReactNode;
}

// 🔥 Loading Screen Component
const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.2, delay: 1 }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-9999"
    >
      <div className="w-28 h-28 rounded-full overflow-hidden shadow-[0_0_30px_6px_rgba(0,255,0,0.4)] mb-4">
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={200}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 4 }}
        className="text-2xl font-semibold"
      >
        Welcome to my website
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 4 }}
        className="text-lg tracking-wide mt-2"
      >
        Pramod
      </motion.p>
    </motion.div>
  );
};

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [loading, setLoading] = useState(true);

  // Loader timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Apply theme to html root
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const menu = [
    { name: "Home", Icon: Home, href: "/" },
    { name: "About", Icon: User, href: "/about" },
    { name: "Skills", Icon: Wrench, href: "/skills" },
    { name: "Projects", Icon: FolderKanban, href: "/projects" },
    { name: "Blog", Icon: BookOpen, href: "/blog" },
  ];

  return (
    <>
      {loading && <LoadingScreen />}

      {!loading && (
        <div className="flex w-full min-h-screen transition-all">
          {/* Desktop Sidebar */}
          <aside className="hidden md:flex flex-col w-48 h-screen p-4 shadow-xl border-r border-gray-700 fixed top-0 left-0 z-30 bg-gray-100 dark:bg-[#0B1224] text-black dark:text-white transition-colors">
            {/* Theme Switch */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <Sun size={16} />
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={theme === "dark"}
                  onChange={toggleTheme}
                />
                <div className="w-14 h-7 bg-gray-300 dark:bg-gray-600 rounded-full peer transition-all" />
                <motion.div
                  layout
                  className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full flex items-center justify-center shadow-md transition-all ${
                    theme === "dark"
                      ? "bg-black text-green-400 shadow-[0_0_8px_2px_rgba(0,255,144,0.5)]"
                      : "bg-yellow-400 text-yellow-500 shadow-[0_0_8px_2px_rgba(255,223,0,0.5)]"
                  }`}
                  style={{
                    transform:
                      theme === "dark" ? "translateX(28px)" : "translateX(0px)",
                  }}
                >
                  {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
                </motion.div>
              </label>
              <Moon size={16} />
            </div>

            {/* Profile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center mb-8 mt-10"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-[0_0_20px_4px_rgba(0,255,0,0.4)]">
                <Image
                  src="/logo.jpg"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            {/* Menu */}
            <nav className="flex flex-col gap-3 mt-6">
              {menu.map(({ name, Icon, href }) => (
                <motion.a
                  key={name}
                  href={href}
                  whileHover={{ x: 6, color: "#00FF91" }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 px-2 py-2 text-md font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                  <Icon size={22} />
                  {name}
                </motion.a>
              ))}

              <motion.a
                href="/contact"
                whileHover={{ x: 6, color: "#00FF91" }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 px-2 py-2 text-md font-medium mt-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                <Phone size={22} /> Contact
              </motion.a>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex flex-col flex-1 md:ml-48 bg-gray-50 dark:bg-[#050A17] text-gray-900 dark:text-white transition-colors p-6 md:p-8 min-h-screen">
            {children}
          </main>

          {/* Mobile Top Bar */}
          <div className="md:hidden fixed top-0 left-0 w-full flex items-center justify-between px-4 py-3 z-40 border-b border-gray-700 dark:border-gray-600 bg-gray-100 dark:bg-[#0B1224] text-black dark:text-white transition-colors">
            <div className="w-12 h-12 rounded-full overflow-hidden shadow-[0_0_15px_3px_rgba(0,255,0,0.4)]">
              <Image
                src="/logo.jpg"
                alt="Profile"
                width={60}
                height={60}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Mobile Theme Switch */}
            <div className="flex items-center gap-2">
              <Sun size={16} />
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={theme === "dark"}
                  onChange={toggleTheme}
                />
                <div className="w-14 h-7 bg-gray-300 dark:bg-gray-600 rounded-full peer transition-all" />
                <motion.div
                  layout
                  className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full flex items-center justify-center shadow-md transition-all ${
                    theme === "dark"
                      ? "bg-black text-green-400 shadow-[0_0_8px_2px_rgba(0,255,144,0.5)]"
                      : "bg-yellow-400 text-yellow-500 shadow-[0_0_8px_2px_rgba(255,223,0,0.5)]"
                  }`}
                  style={{
                    transform:
                      theme === "dark" ? "translateX(28px)" : "translateX(0px)",
                  }}
                >
                  {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
                </motion.div>
              </label>
              <Moon size={16} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
