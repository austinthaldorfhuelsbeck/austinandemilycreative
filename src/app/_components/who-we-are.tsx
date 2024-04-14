import Image from "next/image";

const copy = ["Weddings", "Proposals", "Elopements"];

export function WhoWeAre() {
  return (
    <section className="bg-darkBackground text-accent">
      <div className="max-w-6xl py-8 px-2 flex items-center flex-col gap-5 md:flex-row justify-between mx-auto">
        <aside className="m-5">
          <h2 className="text-5xl lg:text-6xl text-center">
            <em>for</em> THE
            <br />
            WILD <em>at</em>
            <br />
            HEART
          </h2>
        </aside>

        <Image
          src="/images/emily-austin-champagne.gif"
          width={1600}
          height={900}
          alt="Emily and Austin on their wedding day, popping a bottle of champagne."
          className="object-cover w-[314px] h-[464px] rounded-full border p-5 border-accent"
        />

        <aside className="flex flex-col gap-5">
          {copy.map((item) => (
            <div key={item} className="flex flex-col gap-5">
              <h3 className="flex gap-3 items-center">
                <span className="text-xl lg:text-3xl">
                  <em>for</em>
                </span>
                <span className="text-3xl lg:text-5xl hover:text-primary transition-colors duration-500 ease-in-out">
                  {item}
                </span>
              </h3>
              <div className="h-1 flex-1 border-t border-accent" />
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
