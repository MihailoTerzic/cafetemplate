"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  "/bg2.jpg",
  "/background.jpg",
  "/bg2.jpg",
  "/background.jpg",
  "/bg2.jpg",
  "/background.jpg",
  "/bg2.jpg",
  "/background.jpg",
  "/bg2.jpg",
  "/background.jpg",
  "/bg2.jpg",
  "/background.jpg",
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(4);
  const totalSlides = slides.length;

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(1);
      } else if (window.innerWidth < 768) {
        setVisibleSlides(2);
      } else if (window.innerWidth < 1024) {
        setVisibleSlides(3);
      } else {
        setVisibleSlides(4);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate the slides to display (including duplicates for infinite loop)
  const getDisplaySlides = () => {
    const displaySlides = [];
    // We need extra slides for smooth transitions
    const extraSlides = Math.min(2, totalSlides - visibleSlides);
    
    for (let i = 0; i < visibleSlides + extraSlides; i++) {
      const slideIndex = (currentIndex + i) % totalSlides;
      displaySlides.push(slides[slideIndex]);
    }
    return displaySlides;
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="w-full h-screen lg:h-[75vh] relative overflow-hidden">
      <div className="w-full h-full relative">
        {/* Slider wrapper */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / visibleSlides) * 0}%)`,
          }}
        >
          {getDisplaySlides().map((src, idx) => (
            <div
              key={`${currentIndex}-${idx}`}
              className="relative h-full flex-shrink-0"
              style={{
                width: `${100 / visibleSlides}%`,
                minWidth: `${100 / visibleSlides}%`,
              }}
            >
              <Image
                src={src}
                alt={`Slide ${idx}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33.33vw, 25vw"
                priority={idx < visibleSlides} // Only prioritize loading visible slides
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 text-2xl text-white rounded-full bg-black/40 hover:bg-black/60"
        aria-label="Previous Slide"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 text-2xl text-white rounded-full bg-black/40 hover:bg-black/60"
        aria-label="Next Slide"
      >
        ›
      </button>
    </section>
  );
}