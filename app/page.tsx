import Hero from "./_components/home/Hero";
import Testimonials from "./_components/home/Testimonials";
import Explore from "./_components/layout/Explore";
import FAQ from "./_components/layout/FAQ";
import Footer from "./_components/layout/Footer";
import Properties from "./_components/properties/Properties";
import HeroCards from "./_components/ui/HeroCards";
import { services } from "./_lib/Constants";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroCards data={services} />
      <Properties />
      <Testimonials />
      <FAQ />
      <Explore />
      <Footer />
    </>
  );
}
