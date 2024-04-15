import { HeroBanner } from "./hero-banner";
import { ThisOrThat } from "./this-or-that";

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <HeroBanner />
      <ThisOrThat />
    </main>
  );
}
