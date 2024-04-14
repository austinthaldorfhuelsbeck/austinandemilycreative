"use client";

import { heroVideoUrl } from "@/lib/constants";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export function HeroVideo() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <section className="w-full bg-secondary">
      <div className="aspect-video max-w-[1255px] mx-auto -top-5 relative">
        {hasWindow && (
          <ReactPlayer
            url={heroVideoUrl}
            width="100%"
            height="100%"
            playing
            loop
            muted
            controls
          />
        )}
        <source src={heroVideoUrl} type="video/mp4" />
      </div>
    </section>
  );
}
