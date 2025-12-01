"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

// LEFT: INQUIRY FORM
function InquiryForm() {
  return (
    <Card className="w-full p-8 bg-[#090E19] `shadow-[0_0_20px_#00ff88]` hover:shadow-[0_0_35px_#00ff88] border border-[#00ff88]/40 transition-all duration-300 text-white shadow-xl rounded-2xl">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-blue-300">
          Inquiry
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="First Name" className="p-3 rounded-xl" />
          <Input placeholder="Last Name" className="p-3 rounded-xl" />
        </div>
        <Input placeholder="Email" className="p-3 rounded-xl" />
        <Input placeholder="Phone" className="p-3 rounded-xl" />
        <Input placeholder="Travel Destination" className="p-3 rounded-xl" />

        <Textarea
          placeholder="Tell us about your dream vacation..."
          className="p-3 rounded-xl min-h-[140px]"
        />

        <Button className="w-full p-3 rounded-xl text-lg font-semibold bg-green-600 hover:bg-green-700 text-white shadow-[0_0_15px_#00ff80]">
          Send Message
        </Button>
      </CardContent>
    </Card>
  );
}

// RIGHT: DETAILS COMPONENT
function ContactInfo() {
  const cardClass =
    "p-6 bg-[#090E19] shadow-[0_0_20px_#00ff88] hover:shadow-[0_0_35px_#00ff88] border border-[#00ff88]/40 transition-all duration-300 text-white shadow-lg rounded-2xl";

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
        <CardContent className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-green-600 rounded-xl text-white">
            WhatsApp
          </button>
          <button className="px-4 py-2 bg-pink-600 rounded-xl text-white">
            Instagram
          </button>
          <button className="px-4 py-2 bg-purple-600 rounded-xl text-white">
            Viber
          </button>
          <button className="px-4 py-2 bg-blue-600 rounded-xl text-white">
            WeChat
          </button>
        </CardContent>
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
