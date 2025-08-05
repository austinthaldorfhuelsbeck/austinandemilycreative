import { cn } from "@/lib/utils";
import Image from "next/image";
import { FilmPlayerSection } from "./film-player-section";

export function FilmSection({
  idx,
  id,
  coupleName,
  filmType,
  src,
}: {
  idx: number;
  id: string;
  coupleName: string;
  filmType: string;
  src: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "bg-background/50 relative flex flex-col px-10",
        idx % 2 === 0 ? "items-end" : "items-start"
      )}
    >
      <h1 className="text-4xl text-accent relative -top-3 font-extralight">
        {coupleName}
      </h1>
      <h2 className="text-2xs uppercase tracking-widest">{filmType}</h2>
      <Image
        src="/assets/bronze-stars.png"
        width={100}
        height={100}
        alt="Sparkles"
        className={cn(
          "absolute top-5 self-end",
          idx % 2 === 0 ? "hidden" : "inline-block"
        )}
      />
      <FilmPlayerSection src={src} />
    </section>
  );
}
