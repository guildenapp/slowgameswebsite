import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import GamesSection from '@/components/GamesSection';
import Manifesto from '@/components/Manifesto';
import AboutSection from '@/components/AboutSection';
import CommunitySection from '@/components/CommunitySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee text="Great games take time" />
        <GamesSection />
        <Manifesto />
        <AboutSection />
        <CommunitySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
