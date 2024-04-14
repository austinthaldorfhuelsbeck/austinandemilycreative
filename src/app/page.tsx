"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import heroSlider1 from "../../public/images/hero-slider-1.jpg";
import heroSlider2 from "../../public/images/hero-slider-2.jpg";
import heroSlider3 from "../../public/images/hero-slider-3.jpg";
import heroSlider4 from "../../public/images/hero-slider-4.jpg";
import heroSlider5 from "../../public/images/hero-slider-5.jpg";

const heroImages = [
  heroSlider1,
  heroSlider2,
  heroSlider3,
  heroSlider4,
  heroSlider5,
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Rotate through slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col gap-2">
      <header>
        {heroImages.map((_, idx) => (
          <Image
            key={idx}
            src={heroImages[idx]}
            width={1600}
            height={900}
            alt="Austin + Emily Creative"
            className={cn(
              "object-cover w-full h-full absolute transition-all duration-2000 ease-in-out ",
              idx === currentSlide ? "opacity-100" : "opacity-0"
            )}
            style={{ height: "calc(100vh - 48px)", filter: "brightness(75%)" }}
          />
        ))}
      </header>
    </main>
  );
}
