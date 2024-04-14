import { Button } from "@/components/ui/button";
import { howItWorksContent } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export function HowItWorks() {
  return (
    <section className="w-full bg-secondary text-secondary-foreground flex flex-col items-center justify-between pb-7">
      <div className="relative -top-[88px] flex w-full items-end">
        <div className="border border-t-1 border-b-0 flex-1 border-x-0 border-secondary-foreground mr-7" />
        <Image
          src="/assets/cream-sun.png"
          width={200}
          height={200}
          alt="Illustration of the sun rising or setting"
        />
        <div className="border border-t-1 border-b-0 flex-1 border-x-0 border-secondary-foreground ml-7" />
      </div>

      <h2 className="text-muted-foreground text-4xl md:text-5xl lg:text-7xl uppercase relative -top-[44px]">
        How the process works
      </h2>

      <ul className="flex flex-col md:flex-row p-5 divide-y md:divide-y-0 md:divide-x max-w-6xl mx-auto">
        {howItWorksContent.map((contentBlock, idx) => (
          <li
            className="p-7 relative gap-5 flex flex-col justify-between"
            key={idx}
          >
            <h1 className="text-4xl md:text-xl uppercase">
              {contentBlock.title}
            </h1>
            <p className="text-lg md:text-xs tracking-wider">
              <strong>{`Step ${idx + 1}.`}</strong>
              {` ${contentBlock.description}`}
            </p>
            <Image
              src={contentBlock.imgUrl}
              width={130}
              height={130}
              alt="Progressive waxing crescent moon phases"
              className="opacity-20 absolute top-0"
            />
          </li>
        ))}
      </ul>

      <Link href="/contact">
        <Button variant="outline">Reach out today</Button>
      </Link>
    </section>
  );
}
