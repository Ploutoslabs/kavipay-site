import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { CardShowcase } from '../components/CardShowcase';
import { Security } from '../components/Security';
import { Roadmap } from '../components/Roadmap';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CardShowcase />
        <Security />
        <Roadmap />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
