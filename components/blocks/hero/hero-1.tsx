'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { PAGE_QUERYResult } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

type Hero1Props = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>['blocks']>[number],
  { _type: 'hero-1' }
>;

export default function Hero1({ title, subtitle, images }: Hero1Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Rotate through slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (images?.length ?? 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [images?.length]);

  return (
    <section
      style={{ height: 'calc(100vh - var(--header-height))' }}
      className="bg-darkBackground"
    >
      {images?.map((image, idx) => (
        <Image
          key={idx}
          src={urlFor(image).url()}
          quality={100}
          width={1920}
          height={1080}
          alt="Austin + Emily Creative"
          className={cn(
            'object-cover w-full h-full absolute transition-opacity duration-2000 ease-in-out',
            idx === currentSlide ? 'opacity-100' : 'opacity-0'
          )}
          style={{ height: 'calc(100vh - 48px)', filter: 'brightness(70%)' }}
        />
      ))}

      <aside className="absolute bottom-0 text-primary mx-10 my-14 italic flex flex-col gap-2">
        <h1 className="text-6xl md:text-8xl">{title}</h1>
        <div className="flex gap-2 items-center w-full">
          <Image src="/assets/one-star.png" width={25} height={25} alt="Star" />
          <div className="h-1 flex-1 border-t border-primary" />
          <p className="font-bold tracking-wider flex-1 lowercase">
            {subtitle}
          </p>
        </div>
      </aside>
    </section>
  );
}
