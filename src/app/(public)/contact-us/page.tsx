import Header from "@/components/header";
import TopBar from "@/components/top-bar";
import React from "react";
import Navigation from "@/components/nav";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact";
import StepsGuide from "@/components/steps";
import Carousel from "@/components/carousel";

export default function Page() {
  return (
    <main className=" bg-gray-50">
      
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden ">
        <Navigation />
         <div className="relative w-full h-[500px] overflow-hidden">
  <img
    src="/Banners/Website Banner 2.png" // Replace with your image file
    alt="About Us"
    className="w-full h-[500px] object-cover"
  />
  <div className="absolute inset-0 bg-black/20" />
</div>

        <div className="container relative mx-auto px-4 py-20 max-w-[76rem] mt-[4rem]">
          <div className="max-w-3xl ">
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
           
          </div>
        </div>
      </section>

      <ContactSection />

      <StepsGuide />
    </main>
  );
}
