"use client"
import React, { useEffect, useState } from "react";

export default function Carousel() {
  const images = [
    "Home Page Banner Carousel 1.png",
   "Home Page Banner Carousel 2.png",
   "Home Page Banner Carousel 3.png",
   "Home Page Banner Carousel 4.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Create an interval to change images every 5 seconds
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images.length]);
  return (
  <div className="relative w-full h-[650px] overflow-hidden">
  {images.map((image, index) => (
    <img
      key={image}
      src={`/Banners/${image}`}
      alt=""
      className={`absolute top-0 left-0 w-full h-[650px] object-fill transition-all duration-[1500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
        index === currentImageIndex ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    />
  ))}
  <div className="absolute inset-0 bg-black/20" />
</div>

  );
}
