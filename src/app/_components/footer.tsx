import { Button } from "@/components/ui/button";
import { navigationLinks, socialLinks } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { InstagramFeed } from "./instagram-feed";

function FooterNav() {
  return (
    <nav className="mx-auto">
      <ul className="grid grid-cols-3 sm:grid-cols-2 max-w-64 gap-x-5">
        {navigationLinks.map(({ href, label }, idx) => (
          <Link
            key={idx}
            href={href}
            className="text-primary"
            data-sid={`footer_${idx + 1}`}
          >
            <Button variant="link">
              <span>{label}</span>
            </Button>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

function SocialLinks() {
  return (
    <aside className="flex gap-3">
      {socialLinks.map(({ href, src, alt }, idx) => (
        <Link
          key={idx}
          href={href}
          target="_blank"
          data-sid={`footer_${idx + 2}`}
        >
          <Button variant="ghost">
            <Image src={src} alt={alt} width={16} height={16} />
          </Button>
        </Link>
      ))}
    </aside>
  );
}

export function Footer() {
  return (
    <footer className="bg-darkBackground">
      <Image
        src="/images/footer-hero-background.jpg"
        alt="Footer hero background"
        width={1920}
        height={1080}
        className="w-full h-full max-h-48 sm:hidden object-cover"
      />

      <section className="p-5 flex flex-col sm:flex-row gap-5 items-center">
        <FooterNav />
        <InstagramFeed />
      </section>

      <aside className="p-5 flex justify-between items-center">
        <p className="text-primary text-xs">
          &copy; {new Date().getFullYear()} Austin + Emily Creative. All rights
          reserved.
        </p>

        <SocialLinks />
      </aside>
    </footer>
  );
}
