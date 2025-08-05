import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { InvestmentCard } from "./investment-card";

export function InvestmentSection({
  title,
  description,
  price,
  includes,
  src,
  idx,
}: {
  title: string;
  description: string;
  price: string;
  includes: string[];
  src: StaticImageData;
  idx: number;
}) {
  const sectionFlexClasses =
    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse";
  const overlapClasses = idx % 2 === 0 ? "md:-left-16" : "md:left-16";

  return (
    <section
      className={cn(
        "text-center flex flex-col items-center relative max-w-4xl mx-auto",
        sectionFlexClasses
      )}
    >
      <aside className="min-w-[380px] h-[500px]">
        <Image
          src={src}
          alt={title}
          quality={100}
          className="w-full h-full object-cover"
        />
      </aside>

      <InvestmentCard
        className={overlapClasses}
        title={title}
        description={description}
        includes={includes}
        price={price}
        footer="Starting at"
        subtitle={`Package ${idx + 1}`}
      />
    </section>
  );
}
