"use client"
import React, { useEffect, useState } from "react";

export default function Carousel() {
  const images = [
    "c1.png",
    "c2.png",
    "c3.png",
    "c4.png",
    "c5.png",
    "c6.png",
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
    <>
      {images.map((image, index) => (
       <div
       key={image}
       className={`absolute left-1/2 -translate-x-1/2 top-0 h-[600px] w-[5000px] bg-contain bg-center bg-no-repeat transition-all duration-[1500ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
         index === currentImageIndex ? "opacity-100 visible" : "opacity-0 invisible"
       }`}
       style={{
         backgroundImage: `url('/carousel/${image}')`,
       }}
     >
       <div className="absolute inset-0 bg-black/50" />
     </div>
     
       
      ))}
    </>
  );
}
