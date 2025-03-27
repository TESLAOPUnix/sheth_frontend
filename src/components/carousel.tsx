"use client"
import React, { useEffect, useState } from "react";

export default function Carousel() {
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
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
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
