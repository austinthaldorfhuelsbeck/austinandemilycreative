import Image from "next/image";
import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <main
      style={{ height: "calc(100vh - 48px)" }}
      className="flex flex-col gap-10 items-center justify-center bg-darkBackground h-svh relative text-primary"
    >
      <Image
        src="/images/lantern-balloon.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Lantern Balloon"
        className="opacity-20"
      />
      <div className="w-full z-10 max-w-2xl">
        <h1 className="text-4xl font-extralight uppercase text-center">
          Let&#39;s chat!
        </h1>
        <ContactForm />
      </div>
    </main>
  );
}
