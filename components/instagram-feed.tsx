import { recentPostImages } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export async function InstagramFeed() {
  return (
    <section className="mx-auto">
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-5 p-7 max-w-md sm:max-w-5xl mx-auto">
        {recentPostImages.map((img, idx) => (
          <Link
            key={idx}
            href={img.href}
            target="_blank"
            className="aspect-square"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={180}
              height={180}
              className="w-full h-full object-cover"
            />
          </Link>
        ))}
      </ul>
    </section>
  );
}
