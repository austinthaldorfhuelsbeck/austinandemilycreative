import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-accent relative text-background">
      <Image
        src="/images/vietnamese-tea-ceremony.png"
        alt="Vietnamese tea ceremony"
        width={1920}
        height={1080}
        className="object-cover w-full h-full absolute opacity-20"
      />

      <div className="px-7 py-16 flex flex-col gap-5 justify-center items-center sm:items-start">
        <Image src="/assets/cream-sun.png" alt="Sun" width={200} height={200} />
        <h1 className="text-6xl">
          Let&#39;s make MAGIC <em>together</em>
        </h1>

        <aside className="flex z-50 gap-5">
          <Image
            src="/assets/one-star.png"
            alt="One star"
            width={40}
            height={40}
          />
          <Link href="/contact">
            <Button variant="outline">
              <span className="uppercase tracking-widest text-xs">
                Book consultation
              </span>
            </Button>
          </Link>
        </aside>
      </div>
    </section>
  );
}
