import { CurrentlyInto } from "../_components/currently-into";
import { HeroBanner } from "./hero-banner";
import { ThisOrThat } from "./this-or-that";

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <HeroBanner />
      <ThisOrThat />
      <CurrentlyInto />
    </main>
  );
}
