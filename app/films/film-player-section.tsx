"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export function FilmPlayerSection({ src }: { src: string }) {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className="aspect-video mx-auto w-full max-w-2xl mb-10">
      {hasWindow && (
        <ReactPlayer url={src} controls width="100%" height="100%" />
      )}
      <source src={src} type="video/mp4" />
    </div>
  );
}
