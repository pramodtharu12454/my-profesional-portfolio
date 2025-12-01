"use client";
import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full text-white bg-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/footer.webp"
          alt="Footer Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* LEFT : LOGO + SOCIAL */}
        <div className="flex flex-col gap-6">
          <Image
            src="/nepal.png"
            alt="Logo"
            width={120}
            height={120}
            className="object-contain"
          />

          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-500">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-pink-500">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Github size={24} />
            </a>
          </div>
        </div>

        {/* MIDDLE : ADDRESS + PHONE */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
            <p>Samjhauta Marg, Samakhusi</p>
            <p>Kathmandu, 44600, Nepal</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-1">Call Us</h3>
            <p>+977 9842977209</p>
            <p>+977 9815442325</p>
          </div>
        </div>

        {/* RIGHT : MAP */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Our Location</h3>

          <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <iframe
              src="https://www.google.com/maps/place/Samjhauta+Marg,+Kathmandu+44600/@27.7274948,85.3094084,874m/data=!3m2!1e3!4b1!4m6!3m5!1s0x39eb18e08f344a2f:0xecd102ae6a3d2e6e!8m2!3d27.7274948!4d85.3119887!16s%2Fg%2F11vjtdgm0z"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* SECOND ROW (NEW ROW BY YOUR REQUEST) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-gray-700 pt-10">
        {/* Email */}
        <div>
          <h3 className="font-semibold text-lg mb-1">Email Us</h3>
          <p className="break-all">tharupramod406@gmail.com</p>
        </div>

        {/* Office Hours */}
        <div>
          <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
          <p>Mon - Fri: 9AM - 6PM</p>
          <p>Sat - Sun: 10AM - 4PM</p>
        </div>

        {/* Chat With Us */}
        <div>
          <h3 className="font-semibold text-lg mb-1">Chat With Us</h3>
          <div className="flex gap-4 mt-1">
            <a href="#" className="hover:text-green-500">
              WhatsApp
            </a>
            <a href="#" className="hover:text-pink-500">
              Instagram
            </a>
            <a href="#" className="hover:text-purple-400">
              Viber
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="relative z-10 text-center text-gray-300 text-sm py-4 border-t border-gray-700">
        © 2025 Your Company. All rights reserved.
      </div>
    </footer>
  );
}
