"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";

const industriesWeServe = [
  "Power Generation & Distribution",
  "Oil & Gas",
  "Telecommunications",
  "Industrial Manufacturing",
];

const usefulLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "Price List", href: "/price-list" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms and Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {
  const [subscribeEmail, setSubscribeEmail] = useState("");

  const subscribeToNewsletter = async (email: string) => {
    if (!email || !email.includes("@") || !email.includes(".")) {
      toast({
        variant: "destructive",
        description: "Please enter a valid email address.",
      });
      return null;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        variant: "default",
        description: "Thank you for subscribing.",
      });
      return true;
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        variant: "destructive",
        description: "Network error. Please try again.",
      });
      return null;
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    subscribeToNewsletter(subscribeEmail);
    setSubscribeEmail("");
  };

  return (
  <footer className="bg-[#1A1A1A] text-gray-300">
    <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8 mt-10">
      {/* Left Column - Logos */}
      <div className="flex flex-col items-center space-y-2 lg:w-1/4">
        {/* Sheth Logo - Big */}
        <div className="relative h-48 w-80 ">
          <Image
            src="/sheth_logo.png"
            alt="Sheth Trading Corporation Logo"
            fill
            className="object-contain filter invert"
          />
        </div>

        {/* Other 3 Logos in a single row */}
        <div className="flex items-center justify-center space-x-6">
          <div className="relative h-12 w-16">
            <Image
              src="/msme_logo.png"
              alt="MSME Certification"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-12 w-16">
            <Image
              src="/gem_logo.png"
              alt="GEM Certification"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-12 w-16">
            <Image
              src="/ireps_logo.png"
              alt="IREPS Certification"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Right Section - Three Columns */}
      <div className="flex-1">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Get In Touch */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 text-[#993300]" />
                <p>
                  22 Rabindra Sarani, Tiretti Market,
                  <br />
                  Shop #322, Kolkata - 700073
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#993300]" />
                <a
                  href="mailto:shethtrd@gmail.com"
                  className="hover:text-white hover:underline"
                >
                  shethtrd@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#993300]" />
                <a
                  href="tel:+913322379239"
                  className="hover:text-white hover:underline"
                >
                  +91 (033) 2237 9239
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-[#993300]" />
                <p>Monday - Friday: 11:00 AM to 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Industries We Serve */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">Industries We Serve</h3>
            <ul className="space-y-3">
              {industriesWeServe.map((industry) => (
                <li key={industry}>
                  <p>{industry}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">Useful Links</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="bg-[#151515]">
      <div className="container mx-auto px-4 py-4">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Sheth Trading Corporation. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
}
