import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function InvestmentHeader() {
  return (
    <header className="bg-secondary w-full bg-gradient-to-r from-primary to-accent">
      <div className="-top-5 relative flex sm:flex-row-reverse flex-col items-center max-w-6xl mx-auto">
        <aside className="py-10 h-full px-5">
          <Image
            src="/assets/cream-stars.png"
            alt="Sparkles"
            width={100}
            height={100}
            className="absolute top-15 right-12"
          />
          <Image
            src="/images/cassandra-with-bridesmaids.jpg"
            alt="Cassandra with bridesmaids"
            width={1200}
            height={800}
            className="object-cover w-[314px] h-[464px] rounded-full border p-3 border-darkBackground"
          />
        </aside>
        <section className="h-full bg-primary/40 flex-1 flex flex-col gap-5 p-5 sm:m-5">
          <h1 className="text-accent text-4xl">
            Films that will LAST YOU a <em>lifetime</em>
          </h1>
          <p>
            The glint in your partner&#39;s eye, the same one you remember
            noticing when you knew there must be something more, the gaze that
            sees all of who you are and cherishes you.
          </p>
          <p>
            We want to tell the full story, the one you can relive again and
            again with family and friends. We are committed to our couples and
            what makes them unique, and we take the time to create powerful
            films that move and showcase them and their unique love story.
          </p>
          <p>
            Wedding videography coverage starts at $3450. Your collection is
            fully customizable to your needs through a-la-carte style add-ons
          </p>
          <footer className="mr-auto">
            <Link href="/contact">
              <Button className="mr-auto">
                <span className="tracking-widest uppercase text-xs">
                  Book Now
                </span>
              </Button>
            </Link>
          </footer>
        </section>
      </div>
    </header>
  );
}
