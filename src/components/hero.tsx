"use client"
import { useEffect, useState } from "react";
import Navigation from "./nav";
import { Button } from "./ui/button";


export default function Hero() {
  const images = [
    "img1.png",
    "img2.jpg",
    "img3.png",
    "img4.webp",
    "img5.png",
    "img6.png",
    "img7.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Create an interval to change images every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section className="relative h-[600px] overflow-hidden">
      <Navigation />
      {/* Carousel with fade transition */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex 
              ? 'opacity-100' 
              : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('/carousel/${image}')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      <div className="container relative mx-auto px-4 py-20 max-w-[76rem] mt-[4rem]">
        <div className="max-w-3xl">
          <h2 className="mb-4 text-lg font-medium text-white">
            WELCOME TO SHETH TRADING CORPORATION
          </h2>
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            YOUR TRUSTED PARTNER FOR 3M AND DOWELL&apos;S
          </h1>
        </div>
        <a href="/products">
          <Button
            variant="default"
            className="bg-[#5C1E1E] hover:bg-[#4A1818] text-[1.1rem] mt-8 font-medium p-[1rem]"
          >
            <span>Our Products</span>
          </Button>
        </a>
      </div>
    </section>
  );
}
