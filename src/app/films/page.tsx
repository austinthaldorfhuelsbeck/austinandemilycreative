import { filmsContent } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FilmPlayerSection } from "./film-player-section";

export default function FilmsPage() {
  return (
    <main className="bg-primary flex flex-col gap-10">
      <header className="aspect-video w-full bg-darkBackground"></header>
      {filmsContent.map((film, idx) => (
        <section
          key={idx}
          className={cn(
            "bg-background/50 relative flex flex-col px-10",
            idx % 2 === 0 ? "items-end" : "items-start"
          )}
        >
          <h1 className="text-4xl text-accent relative -top-3 font-extralight">
            {film.coupleName}
          </h1>
          <h2 className="text-2xs uppercase tracking-widest">
            {film.filmType}
          </h2>
          <Image
            src="/assets/bronze-stars.png"
            width={100}
            height={100}
            alt="Sparkles"
            className={cn(
              "absolute top-5",
              idx % 2 === 0 ? "self-start top-16" : "self-end"
            )}
          />
          <FilmPlayerSection src={film.src} />
        </section>
      ))}
    </main>
  );
}
