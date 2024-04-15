import { thisOrThatContent } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

function SelectedIndicator({
  austinSelected,
  emilySelected,
}: {
  austinSelected?: boolean;
  emilySelected?: boolean;
}) {
  const randomScale = {
    transform: `scale(${Math.random() * 2 - 0.8})`,
  };
  const randomRotation = {
    transform: `rotate(${Math.random() * 10 - 5}deg)`,
  };
  const randomTranslate = {
    transform: `translate(${Math.random() * 10 - 30}px, ${
      Math.random() * 10 - 5
    }px)`,
  };

  let selectedClasses = "border-none";
  if (austinSelected) {
    selectedClasses = "border-foreground/30";
  }
  if (emilySelected) {
    selectedClasses = "border-foreground/65";
  }

  return (
    <div
      className={cn(
        "absolute border border-primary w-full rounded-full h-8",
        selectedClasses
      )}
      style={{
        borderRadius: "50%",
        ...randomScale,
        ...randomRotation,
        ...randomTranslate,
      }}
    />
  );
}

export function ThisOrThat() {
  const { this: thisItems, that: thatItems } = thisOrThatContent;
  const itemsLists = [thisItems, thatItems];

  return (
    <section className="bg-accent text-primary p-10 text-center flex flex-col gap-3 items-center">
      <h1 className="text-5xl lg:text-6xl">
        THIS <em>or</em> THAT
      </h1>
      <p className="py-3">
        <em>just a few of our favorite things</em>
      </p>
      <div className="border-t border-primary w-full" />
      <Image src="/assets/one-star.png" alt="One star" width={32} height={32} />

      <article className="flex gap-3 divide-x uppercase tracking-wide text-left mr-2.5 w-96">
        {itemsLists.map((items, idx) => (
          <ul
            className="relative flex flex-col px-5 flex-1 gap-5"
            key={items.length + idx}
          >
            {items.map((item, idx) => (
              <div key={item.text + idx}>
                <SelectedIndicator austinSelected={item.austinSelected} />
                <SelectedIndicator emilySelected={item.emilySelected} />
                <p className="ml-3 mt-1">{item.text}</p>
              </div>
            ))}
          </ul>
        ))}
      </article>
    </section>
  );
}
