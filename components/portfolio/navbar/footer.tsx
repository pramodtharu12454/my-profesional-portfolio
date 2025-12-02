"use client";
import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-900">
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
            <a href="#" className="hover:text-gray-400 dark:hover:text-white">
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
          <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg border border-gray-300 dark:border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.112625065017!2d85.30940838452617!3d27.727494779275687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18e08f344a2f%3A0xecd102ae6a3d2e6e!2sSamjhauta%20Marg%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1701535600000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Samjhauta Marg, Kathmandu"
            ></iframe>
          </div>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-14 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-gray-300 dark:border-gray-700 pt-10">
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
      <div className="relative z-10 text-center text-gray-500 dark:text-gray-300 text-sm py-4 border-t border-gray-300 dark:border-gray-700">
        © 2025 All rights reserved by Pramod Tharu.
      </div>
    </footer>
  );
}
