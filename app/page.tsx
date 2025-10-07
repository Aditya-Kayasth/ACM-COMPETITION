import Headers from '@/components/Headers';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PrizesSection from '@/components/PrizesSection';
import TimelineSection from '@/components/TimelineSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900 text-white">
      <Headers />
      <HeroSection />
      <AboutSection />
      <PrizesSection />
      <TimelineSection />
      <Footer />
    </main>
  );
}