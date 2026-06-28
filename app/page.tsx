import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import Reviews from "@/components/Reviews";
import  CTA  from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Reviews />
      <CTA />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
