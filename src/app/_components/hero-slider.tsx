"use client";

import { heroImages } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Rotate through slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      style={{ height: "calc(100vh - 48px)", filter: "brightness(70%)" }}
      className="bg-darkBackground"
    >
      {heroImages.map((_, idx) => (
        <Image
          key={idx}
          src={heroImages[idx]}
          width={1600}
          height={900}
          alt="Austin + Emily Creative"
          className={cn(
            "object-cover w-full h-full absolute transition-opacity duration-2000 ease-in-out ",
            idx === currentSlide ? "opacity-100" : "opacity-0"
          )}
          style={{ height: "calc(100vh - 48px)", filter: "brightness(70%)" }}
        />
      ))}
      <aside className="absolute bottom-0 text-primary mx-10 my-14 italic flex flex-col gap-2">
        <h1 className="text-6xl md:text-8xl">LOVE Stories</h1>
        <div className="flex gap-2 items-center w-full">
          <Image src="/assets/one-star.png" width={25} height={25} alt="Star" />
          <div className="h-1 flex-1 border-t border-primary" />
          <p className="font-bold tracking-wider flex-1">
            crafted by you, captured by us
          </p>
        </div>
      </aside>
    </header>
  );
}
