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

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Apply theme class to <html> for Tailwind dark mode
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
    <div className="flex w-full min-h-screen transition-all">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-48 h-screen p-4 shadow-xl border-r border-border fixed top-0 left-0 z-30 bg-sidebar text-sidebar-foreground transition-colors">
        {/* Theme Button */}
        <div className="absolute top-3 right-3">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
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
        <nav className="flex flex-col gap-3">
          {menu.map(({ name, Icon, href }) => (
            <motion.a
              key={name}
              href={href}
              whileHover={{ x: 6, color: "#00FF91" }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-3 px-2 py-1 text-md font-medium rounded-md hover:bg-white/10"
            >
              <Icon size={22} />
              {name}
            </motion.a>
          ))}

          <motion.a
            href="/contact"
            whileHover={{ x: 6, color: "#00FF91" }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-3 px-2 py-1 text-md font-medium mt-2 rounded-md hover:bg-white/10"
          >
            <Phone size={22} /> Contact
          </motion.a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex flex-col flex-1 md:ml-48 bg-background text-foreground transition-colors p-6 md:p-8 min-h-screen">
        {children}
      </main>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 w-full flex items-center justify-between px-4 py-3 z-40 border-b border-border bg-sidebar text-sidebar-foreground transition-colors">
        <div className="w-12 h-12 rounded-full overflow-hidden shadow-[0_0_15px_3px_rgba(0,255,0,0.4)]">
          <Image
            src="/logo.jpg"
            alt="Profile"
            width={60}
            height={60}
            className="object-cover w-full h-full"
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/20 backdrop-blur text-white"
        >
          {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
        </motion.button>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full flex flex-col items-center pb-4 pt-6 z-40">
        {/* Floating Contact button */}
        <motion.a
          href="/contact"
          animate={{
            scale: [1, 1.06, 1],
            rotateX: [0, 6, 0],
            boxShadow: [
              "0 6px 18px rgba(0,168,57,0.35)",
              "0 12px 26px rgba(0,168,57,0.55)",
              "0 6px 18px rgba(0,168,57,0.35)",
            ],
          }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="w-20 h-20 rounded-full flex items-center justify-center text-white -top-6 mb-2 relative"
          style={{ backgroundColor: "#00A839" }}
        >
          <Phone size={30} />
        </motion.a>

        <div className="flex justify-around w-full px-4 pb-2 text-white text-xs relative">
          <div
            className="absolute inset-x-4 bottom-0 h-12 rounded-t-xl"
            style={{
              backgroundColor:
                theme === "dark"
                  ? "rgba(0,27,77,0.9)"
                  : "rgba(107,182,255,0.9)",
              zIndex: 0,
            }}
          />

          {menu.map(({ name, Icon, href }) => (
            <motion.a
              key={name}
              href={href}
              whileTap={{ scale: 0.9 }}
              whileHover={{ color: "#00FF91" }}
              className="flex flex-col items-center gap-1 z-10"
            >
              <Icon size={20} />
              {name}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
