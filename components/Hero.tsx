"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroFeatures } from "@/data/heroFeatures";

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Autoservis v Nitre
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Opravíme vaše auto rýchlo, férovo a spoľahlivo.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-zinc-300">
          Moderný autoservis pre bežnú údržbu, diagnostiku, brzdy,
          podvozok a pneuservis. Objednanie jednoducho online alebo
          telefonicky.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {heroFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="flex items-center gap-3 rounded-2xl bg-zinc-900 p-4 text-sm text-zinc-300 transition-all duration-300 hover:-translate-y-1 hover:bg-zinc-800 hover:shadow-lg"
              >
                <Icon className="h-6 w-6 text-orange-500" />

                <span className="font-medium">{item.text}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#kontakt"
            className="rounded-xl bg-orange-500 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600"
          >
            Objednať termín
          </a>

          <a
            href="tel:0900123456"
            className="rounded-xl border border-zinc-700 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-zinc-900"
          >
            Zavolať
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl"
      >
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/images/car.jpg"
            alt="Auto v autoservise"
            width={700}
            height={500}
            className="h-72 w-full rounded-2xl object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-4 left-4 rounded-2xl bg-black/70 px-5 py-4 backdrop-blur">
            <p className="text-xs uppercase tracking-wider text-orange-400">
              Dnes otvorené
            </p>

            <p className="mt-1 text-lg font-bold text-white">
              08:00 – 17:00
            </p>

            <p className="mt-2 text-sm text-zinc-300">
              ⭐ 4.9 / 5 • 5000+ opravených áut
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-zinc-950 p-4">
            <p className="text-sm text-zinc-400">Otvorené dnes</p>
            <p className="mt-1 font-semibold">08:00 – 17:00</p>
          </div>

          <div className="rounded-2xl bg-zinc-950 p-4">
            <p className="text-sm text-zinc-400">Diagnostika</p>
            <p className="mt-1 font-semibold">od 30 €</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}