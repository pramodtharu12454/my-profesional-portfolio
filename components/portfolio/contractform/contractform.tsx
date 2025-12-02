"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  Facebook,
  Instagram,
  Github,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

// LEFT: INQUIRY FORM
function InquiryForm() {
  return (
    <Card className="w-full p-8 bg-white dark:bg-[#090E19] shadow-[0_0_20px_#00ff88] hover:shadow-[0_0_35px_#00ff88] border border-[#00ff88]/40 transition-all duration-300 text-gray-900 dark:text-white shadow-xl rounded-2xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-blue-500 dark:text-blue-300">
          Inquiry
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="First Name"
            className="p-3 rounded-xl bg-gray-100 dark:bg-[#0B1323] text-gray-900 dark:text-white border border-gray-300 dark:border-[#1A2335]"
          />
          <Input
            placeholder="Last Name"
            className="p-3 rounded-xl bg-gray-100 dark:bg-[#0B1323] text-gray-900 dark:text-white border border-gray-300 dark:border-[#1A2335]"
          />
        </div>
        <Input
          placeholder="Email"
          className="p-3 rounded-xl bg-gray-100 dark:bg-[#0B1323] text-gray-900 dark:text-white border border-gray-300 dark:border-[#1A2335]"
        />
        <Input
          placeholder="Phone"
          className="p-3 rounded-xl bg-gray-100 dark:bg-[#0B1323] text-gray-900 dark:text-white border border-gray-300 dark:border-[#1A2335]"
        />
        <Input
          placeholder="Travel Destination"
          className="p-3 rounded-xl bg-gray-100 dark:bg-[#0B1323] text-gray-900 dark:text-white border border-gray-300 dark:border-[#1A2335]"
        />

        <Textarea
          placeholder="Tell us about your dream vacation..."
          className="p-3 rounded-xl min-h-[140px] bg-gray-100 dark:bg-[#0B1323] text-gray-900 dark:text-white border border-gray-300 dark:border-[#1A2335]"
        />

        <Button className="w-full p-3 rounded-xl text-lg font-semibold bg-green-600 hover:bg-green-700 text-white shadow-[0_0_15px_#00ff80] transition-colors duration-300">
          Send Message
        </Button>
      </CardContent>
    </Card>
  );
}

// RIGHT: DETAILS COMPONENT
function ContactInfo() {
  const cardClass =
    "p-6 bg-white dark:bg-[#090E19] shadow-[0_0_20px_#00ff88] hover:shadow-[0_0_35px_#00ff88] border border-[#00ff88]/40 transition-all duration-300 text-gray-900 dark:text-white shadow-lg rounded-2xl";

  return (
    <div className="space-y-6">
      {/* Visit Us */}
      <Card className={cardClass}>
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <MapPin /> Visit Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          Samjhauta marg, Samakhusi
          <br />
          Kathmandu, 44600, Nepal
        </CardContent>
      </Card>

      {/* Call Us */}
      <Card className={cardClass}>
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Phone /> Call Us
          </CardTitle>
        </CardHeader>
        <CardContent>
          +977 9842977209
          <br />
          +977 9815442325
        </CardContent>
      </Card>

      {/* Email Us */}
      <Card className={cardClass}>
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Mail /> Email Us
          </CardTitle>
        </CardHeader>
        <CardContent>tharupramod406@gmail.com</CardContent>
      </Card>

      {/* Office Hours */}
      <Card className={cardClass}>
        <CardHeader>
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Clock /> Office Hours
          </CardTitle>
        </CardHeader>
        <CardContent>
          Mon - Fri: 9AM - 6PM
          <br />
          Sat - Sun: 10AM - 4PM
        </CardContent>
      </Card>

      {/* Chat With Us */}
      <Card className={cardClass}>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Chat With Us</CardTitle>
        </CardHeader>
           <div className="flex gap-4 justify-start md:justify-start mt-6 text-2xl">
            <a
              href="https://www.facebook.com/parmod.tharu.507"
              target="_blank"
              className="hover:text-blue-600 dark:hover:text-green-400 transition"
            >
              <Facebook />
            </a>

            <a
              href="https://www.instagram.com/pra.mod._.tharu/"
              target="_blank"
              className="hover:text-pink-600 dark:hover:text-pink-400 transition"
            >
              <Instagram />
            </a>
            <a
              href="https://wa.me/9815442325"
              target="_blank"
              className="hover:text-green-600 dark:hover:text-green-400 transition"
            >
              <MessageCircle />
            </a>
            <a
              href="https://github.com/pramodtharu12454"
              target="_blank"
              className="hover:text-black dark:hover:text-white transition"
            >
              <Github />
            </a>

            <a
              href="https://www.youtube.com/@mr.tharu9"
              target="_blank"
              className="hover:text-red-600 dark:hover:text-red-400 transition"
            >
              <Youtube />
            </a>

            <a
              href="https://www.linkedin.com/in/pramod-tharu-6877a4273/"
              target="_blank"
              className="hover:text-blue-700 dark:hover:text-blue-400 transition"
            >
              <Linkedin />
            </a>
          </div>
      </Card>
    </div>
  );
}

// EXPORT TWO-COMPONENT LAYOUT
export default function LetsConnect() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full p-6">
      <InquiryForm />
      <ContactInfo />
    </div>
  );
}
