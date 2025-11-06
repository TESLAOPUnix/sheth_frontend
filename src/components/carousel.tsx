"use client";
import React, { useEffect, useState, useRef } from "react";

export default function Carousel() {
  const images = [
    "Home Page Banner Carousel 1 1.png",
    "Home Page Banner Carousel 2.png",
    "Home Page Banner Carousel 3.png",
    "Home Page Banner Carousel 4.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  // Swipe detection (mobile)
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(deltaX) > 50) {
      setCurrentImageIndex((prevIndex) =>
        deltaX > 0
          ? (prevIndex - 1 + images.length) % images.length
          : (prevIndex + 1) % images.length
      );
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full min-h-[220px] sm:min-h-[350px] md:min-h-[500px] lg:min-h-[650px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((image, index) => (
        <img
          key={image}
          src={`/new_banners/${image}`}
          alt={`Slide ${index + 1}`}
          loading="lazy"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
            index === currentImageIndex
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }`}
        />
      ))}

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImageIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === currentImageIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
