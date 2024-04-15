import { currentlyInto } from "@/lib/constants";
import Image from "next/image";

export function CurrentlyInto() {
  return (
    <section className="bg-darkBackground text-primary text-center relative">
      <Image
        src="/images/megan-anand.png"
        alt="Megan + Anand holding hands in their traditional Indian wedding attire"
        width={1920}
        height={1080}
        className="object-cover w-full h-full absolute opacity-10"
      />

      <div className="px-5 py-16 flex flex-col gap-10 sm:flex-row-reverse sm:gap-5 max-w-6xl mx-auto items-center sm:items-start">
        <h1 className="text-6xl text-accent uppercase tracking-wide font-extralight flex-1 max-w-lg">
          Currently into
        </h1>
        <ul className="space-y-7 pb-10 flex-1">
          {currentlyInto.map(({ title, description }, idx) => (
            <li key={idx} className="sm:text-left">
              <article className="flex flex-col sm:flex-row items-center gap-3">
                <h2 className="text-xl sm:text-sm tracking-widest uppercase flex-1 max-w-24">
                  {title}
                </h2>
                <p className="text-xl flex-1">{description}</p>
              </article>
              <div className="border-t border-primary" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
