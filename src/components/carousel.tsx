"use client"
import React, { useEffect, useState } from "react";

export default function Carousel() {
  const images = [
    "Pi7_Tool_img1.png",
    "Pi7_Tool_img2.jpg",
    "Pi7_Tool_img3.png",
    "img4.webp",
    "Pi7_Tool_img5.png",
    "Pi7_Tool_img6.png",
    "Pi7_Tool_img7.jpg",
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
       className={`absolute left-1/2 -translate-x-1/2 top-0 h-[600px] w-[5000px] bg-contain bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
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
