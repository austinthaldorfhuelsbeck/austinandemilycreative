import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

export function InvestmentCard({
  title,
  subtitle,
  description,
  includes,
  footer,
  price,
  className,
}: {
  title: string;
  subtitle: string;
  description: string;
  includes: string[];
  footer: string;
  price?: string;
  className?: string;
}) {
  return (
    <div
      className={cn("bg-primary py-5 flex flex-col relative px-10", className)}
    >
      <h1 className="text-4xl text-accent uppercase relative sm:-top-12">
        {title}
      </h1>

      <aside className="flex items-center gap-3">
        <p className="text-xs uppercase tracking-widest font-extralight min-w-52 text-left">
          {subtitle}
        </p>
        <div className="border-t border-accent w-full my-3" />
      </aside>

      <p className="my-5">{description}</p>
      <ul className="text-left flex flex-col gap-3">
        {includes.map((item, idx) => (
          <li key={idx} className="gap-3 flex">
            <CheckIcon className="inline mr-2 text-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <footer className="flex items-center gap-3">
        <div className="border-t border-accent w-full my-3" />
        <p className="text-xs uppercase tracking-widest font-extralight min-w-32">
          {footer}
        </p>
        {price && <p className="text-2xl text-accent uppercase">{price}</p>}
      </footer>
    </div>
  );
}
