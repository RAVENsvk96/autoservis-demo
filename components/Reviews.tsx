"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Martin K.",
    text: "Rýchle objednanie, férový prístup a auto bolo hotové ešte v ten istý deň.",
    rating: 5,
  },
  {
    name: "Peter S.",
    text: "Konečne servis, kde mi všetko vysvetlili normálne a nesnažili sa ma natiahnuť.",
    rating: 5,
  },
  {
    name: "Lucia M.",
    text: "Výborná komunikácia, jasná cena vopred a profesionálny prístup.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Recenzie
        </p>

        <h2 className="mt-4 text-3xl font-bold">
          Čo hovoria naši zákazníci
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500"
            >
              <div className="flex gap-1 text-orange-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-orange-500" />
                ))}
              </div>

              <p className="mt-5 text-sm leading-6 text-zinc-300">
                “{review.text}”
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                  {review.name.charAt(0)}
                </div>

                <p className="font-semibold">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}