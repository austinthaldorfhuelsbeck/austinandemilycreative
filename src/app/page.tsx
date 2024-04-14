import { HeroSlider } from "./_components/hero-slider";
import { WhoWeAre } from "./_components/who-we-are";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSlider />
      <WhoWeAre />
    </main>
  );
}
