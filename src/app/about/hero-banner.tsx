import Image from "next/image";
import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="bg-primary text-accent">
      <div className="p-7 flex flex-col md:flex-row gap-5">
        <aside className="flex flex-col gap-5">
          <Image
            src="/images/emily-austin-vows.jpg"
            alt="Emily reading her vows to Austin at their elopement on the Washington coast."
            quality={100}
            className="object-cover w-[463px] h-[536px] border border-accent"
          />
          <p className="mt-5 text-lg italic">
            We know we can make magic together
            <br />& we can&#39;t wait to meet you!
          </p>
        </aside>

        <article className="flex flex-col gap-5 flex-1 max-w-5xl">
          <h2 className="text-2xl lg:text-4xl mt-5 uppercase tracking-wide">
            Hey, friend! We are so glad you&#39;re here.
          </h2>
          <h1 className="text-5xl lg:text-6xl mt-5 font-extralight leading-snug md:-translate-x-12">
            <em>
              We&#39;re Austin + Emily, your new best friends & double dates
            </em>
          </h1>
          <p>
            Together, we not only found a great life partner, but also a
            creative partner and founded Austin + Emily Creative, a full-service
            elopement and wedding filmmaking company. Teamwork is crucial in any
            great marriage, and our teamwork will provide your wedding with a
            streamlined experience from start to finish.
          </p>
          <p>
            We are lovers of love. Love in all its forms. We are committed to
            being a safe and inclusive presence at each wedding that we are
            graciously asked to be a part of.
          </p>

          <p className="text-xs">
            Like our wedding photos? All our engagement and wedding photography
            was provided by{" "}
            <Link
              href="https://www.henry-tieu.com/"
              target="_blank"
              className="underline"
            >
              Henry Tieu Photography
            </Link>
            .
          </p>
        </article>
      </div>
    </section>
  );
}
