import { Button } from "@/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-2 h-full">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </main>
  );
}
