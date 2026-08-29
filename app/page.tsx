import SiteShell from '@/components/SiteShell';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GamesSection from '@/components/GamesSection';
import AboutSection from '@/components/AboutSection';
import CommunitySection from '@/components/CommunitySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <SiteShell>
      <Navbar />
      <main>
        <Hero />
        <GamesSection />
        <AboutSection />
        <CommunitySection />
        <ContactSection />
      </main>
      <Footer />
    </SiteShell>
  );
}
