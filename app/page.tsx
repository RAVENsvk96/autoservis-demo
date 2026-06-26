import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Hero />
      <Services />
      <WhyUs />
      
      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">Kontakt</h2>

        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <p className="text-zinc-300">Autoservis Demo</p>
          <p className="mt-2 text-zinc-400">Nitriansky kraj</p>
          <p className="mt-2 text-zinc-400">Tel.: 0900 123 456</p>
          <p className="mt-2 text-zinc-400">Email: info@autoservisdemo.sk</p>
        </div>
      </section>
    </main>
  );
}