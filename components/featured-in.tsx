import { featuredIn } from "@/lib/constants";
import Image from "next/image";

export function FeaturedIn() {
  return (
    <section className="py-12 bg-primary">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-extralight text-foreground text-center uppercase tracking-wider mb-6">
          Featured in
        </h2>

        <ul className="grid grid-cols-2 md:grid-cols-4 items-center gap-5">
          {featuredIn.map((publication, idx) => (
            <Image
              key={idx}
              src={publication.src}
              alt={publication.alt}
              width={80}
              height={80}
              className="mx-auto"
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
