import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonialsContent } from "@/lib/constants";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import cassandraWithBridesmaids from "../../../public/images/cassandra-with-bridesmaids.jpg";

export function Testimonials() {
  return (
    <section className="relative">
      <Carousel className="w-full max-w-xl mx-auto my-7">
        <CarouselContent>
          {testimonialsContent.map((testimonial, idx) => (
            <CarouselItem
              key={idx}
              className="flex flex-col my-auto bg-primary/10 rounded-sm"
            >
              <QuoteIcon className="h-16 w-16 rotate-180 text-accent opacity-75 m-3" />
              <blockquote className="text-lg text-center text-primary leading-loose m-5">
                <em>{testimonial.quote}</em>
              </blockquote>
              <QuoteIcon className="ml-auto h-16 w-16 text-accent opacity-75 m-3" />
              <Button variant="link" className="font-bold text-lg">
                {testimonial.name}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      <Image
        src={cassandraWithBridesmaids}
        alt="Cassandra with her bridesmaids"
        width={800}
        height={600}
        className="w-full h-full brightness-20 absolute top-0 -z-10 object-cover"
      />
    </section>
  );
}
