"use client";

import Navigation from "./nav";
import { Button } from "./ui/button";
import Carousel from "./carousel";

export default function Hero() {
  return (
    <section
      className="
        relative 
        w-full 
        min-h-[220px] 
        sm:min-h-[350px] 
        md:min-h-[500px] 
        lg:min-h-[650px] 
        overflow-visible 
        bg-gray-50
        flex 
        flex-col
      "
    >
      {/* Top Navigation */}
      <div className="z-20 w-full absolute top-0 left-0">
        <Navigation />
      </div>

      {/* Carousel */}
      <div className="relative flex-1">
        <Carousel />
      </div>

      {/* Optional CTA Section below Carousel for mobile (if needed later) */}
      {/* 
      <div className="block sm:hidden text-center py-6 bg-white shadow-sm">
        <a href="/products">
          <Button
            variant="default"
            className="bg-[#5C1E1E] hover:bg-[#4A1818] text-[1rem] font-medium px-6 py-3 rounded-lg"
          >
            Our Products
          </Button>
        </a>
      </div> 
      */}
    </section>
  );
}
