import Navbar from '@/components/selfcomponents/Navbar';
import Hero from '@/components/selfcomponents/Hero';
import About from '@/components/selfcomponents/About';
import Schedule from '@/components/selfcomponents/Schedule/Schedule';
import Prizes from '@/components/selfcomponents/Prizes/Prizes';
import Sponsors from '@/components/selfcomponents/Sponsors/Sponsors';
import Speakers from '@/components/selfcomponents/Speakers/Speakers';
import Tracks from '@/components/selfcomponents/Tracks/Tracks';
import Judges from '@/components/selfcomponents/Judges/Judges';
import FAQ from '@/components/selfcomponents/FAQ/FAQ';
import Footer from '@/components/selfcomponents/Footer';
import { PastEvents } from '@/components/selfcomponents/pastevents/pastevent';



export default function Home() {
  return (
    <div className="min-h-screen bg-black">
    <Navbar />
    <main>
      <Hero />
      <About />
      <PastEvents/>
      <Speakers />
      <Tracks />
      <Schedule />
      <Prizes />
      <Judges />
      <Sponsors />
      <FAQ />
      <Footer />
    </main>
  </div>

  );
}
