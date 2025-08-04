import Link from "next/link";
import { Button } from "../components/ui/button";

export default function NotFoundPage() {
  return (
    <main
      style={{ height: "calc(100vh - 48px)" }}
      className="flex flex-col gap-10 items-center justify-center bg-primary h-svh"
    >
      <h1 className="text-4xl font-bold text-primary-foreground">404</h1>
      <p className="text-lg text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <Link href="/">
        <Button>Go back to home</Button>
      </Link>
    </main>
  );
}
