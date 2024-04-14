import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/films", label: "Love Stories" },
  { href: "/investment", label: "Investment" },
  { href: "/contact", label: "Contact" },
];

function NavigationLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href}>
      <Button variant="link" className="px-1">
        <span className="text-2xs uppercase tracking-widest">{label}</span>
      </Button>
    </Link>
  );
}

function MobileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="py-2 flex items-center">
        <MenuIcon size={36} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-darkBackground">
        {links.map(({ href, label }) => (
          <DropdownMenuItem key={`${href}${label}`}>
            <NavigationLink href={href} label={label} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Navigation() {
  return (
    <nav className="flex justify-between items-center bg-darkBackground text-primary sticky top-0 px-3">
      <header className="flex gap-3 items-center">
        <Image
          src="/assets/cream-stars.png"
          width={60}
          height={60}
          alt="Sparkles"
          className="object-contain h-full w-auto my-3 md:h-6 md:w-6"
        />
        <Link href="/">
          <h1 className="text-3xl md:text-2xl">Austin + Emily Creative</h1>
        </Link>
      </header>

      <ul className="gap-2 hidden md:flex">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <NavigationLink href={href} label={label} />
          </li>
        ))}
      </ul>

      <aside className="block md:hidden">
        <MobileDropdown />
      </aside>
    </nav>
  );
}
