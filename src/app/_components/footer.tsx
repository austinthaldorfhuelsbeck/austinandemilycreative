import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-darkBackground">
      <Image
        src="/images/footer-hero-background.jpg"
        alt="Footer hero background"
        width={1920}
        height={1080}
        className="object-cover w-full h-full max-h-48"
      />
      <aside className="p-5 flex justify-between items-center">
        <p className="text-primary text-xs">
          &copy; {new Date().getFullYear()} Austin + Emily Creative. All rights
          reserved.
        </p>
        <aside className="flex gap-3">
          <Link
            href="https://www.instagram.com/austinandemilycreative/"
            target="_blank"
            data-sid="footer_1"
          >
            <Button variant="ghost">
              <Image
                src="/assets/brands/instagram.svg"
                alt="Instagram"
                width={16}
                height={16}
              />
            </Button>
          </Link>
          <Link
            href="https://www.facebook.com/austinandemilycreative/"
            target="_blank"
            data-sid="footer_2"
          >
            <Button variant="ghost">
              <Image
                src="/assets/brands/tiktok.svg"
                alt="TikTok"
                width={16}
                height={16}
              />
            </Button>
          </Link>
        </aside>
      </aside>
    </div>
  );
}
