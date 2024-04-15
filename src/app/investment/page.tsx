import { elopementContent, investmentContent } from "@/lib/constants";
import Image from "next/image";
import { CTA } from "../_components/cta";
import { HowItWorks } from "../_components/how-it-works";
import { Testimonials } from "../_components/testimonials";
import { InvestmentCard } from "./investment-card";
import { InvestmentHeader } from "./investment-header";
import { InvestmentSection } from "./investment-section";

function PackagesSection() {
  return (
    <section className="bg-[#ceb098] text-accent flex flex-col gap-10 px-3 py-10">
      <header className="px-10">
        <h1 className="text-5xl uppercase">Our packages</h1>
      </header>
      {investmentContent.map((content, idx) => (
        <InvestmentSection key={idx} {...content} idx={idx} />
      ))}
    </section>
  );
}

function ElopementSection() {
  return (
    <section className="relative bg-darkBackground">
      <Image
        src="/images/kailey-kyle.png"
        alt="Kailey and Kyle"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-15"
      />
      <InvestmentCard
        {...elopementContent}
        className="max-w-2xl mx-auto my-16"
      />
    </section>
  );
}

export default function InvestmentPage() {
  return (
    <main className="flex flex-col">
      <InvestmentHeader />
      <HowItWorks />
      <Testimonials />
      <PackagesSection />
      <ElopementSection />
      <CTA />
    </main>
  );
}
