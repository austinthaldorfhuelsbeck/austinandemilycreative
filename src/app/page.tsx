import { HeroSlider } from "./_components/hero-slider";
import { HeroVideo } from "./_components/hero-video";
import { HowItWorks } from "./_components/how-it-works";
import { WhoWeAre } from "./_components/who-we-are";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSlider />
      <WhoWeAre />
      <HeroVideo />
      <HowItWorks />
    </main>
  );
}
