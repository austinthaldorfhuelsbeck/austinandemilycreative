import { Button } from "@/components/ui/button";
import { featuredFilmContent } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function FeaturedFilm() {
  return (
    <header className="bg-darkBackground relative flex flex-col">
      <article className="flex flex-col sm:flex-row gap-10 mx-7 my-16">
        <Image
          src="/images/lauren-andrew.png"
          width={400}
          height={400}
          alt="Lauren + Andrew"
          className="object-cover w-[340px] h-[340px]"
        />
        <aside className="flex flex-col justify-between gap-5">
          <h1 className="text-4xl text-accent font-extralight">
            Featured wedding:
            <br />
            {featuredFilmContent.coupleName}
          </h1>
          <p className="text-primary text-sm leading-loose">
            {featuredFilmContent.description}
          </p>
          <footer className="flex items-center justify-center">
            <Link href={featuredFilmContent.href} passHref>
              <Button variant="outline">
                <span className="uppercase tracking-widest text-xs font-bold mx-5">
                  Watch film
                </span>
              </Button>
            </Link>
          </footer>
        </aside>
      </article>

      <Image
        src="/assets/bronze-stars.png"
        width={100}
        height={100}
        alt="Sparkles"
        className={cn("absolute top-5 self-end")}
      />
      <Image
        src="/assets/cream-stars.png"
        width={100}
        height={100}
        alt="Sparkles"
        className={cn("absolute bottom-5 self-start")}
      />
    </header>
  );
}
