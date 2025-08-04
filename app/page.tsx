import { FeaturedIn } from '../components/featured-in';
import { HeroSlider } from '../components/hero-slider';
import { HeroVideo } from '../components/hero-video';
import { HowItWorks } from '../components/how-it-works';
import { Testimonials } from '../components/testimonials';
import { WhoWeAre } from '../components/who-we-are';

export default function HomePage() {
    return (
        <main className="flex flex-col">
            <HeroSlider />
            <WhoWeAre />
            <HeroVideo />
            <HowItWorks />
            <Testimonials />
            <FeaturedIn />
        </main>
    );
}
