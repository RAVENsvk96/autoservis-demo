"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="sluzby" className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold">Naše služby</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-xl"
              >
                <Icon className="mb-4 h-10 w-10 text-orange-500" />

                <h3 className="text-lg font-semibold">{service.title}</h3>

                <p className="mt-3 text-sm text-zinc-400">
                  {service.description}
                </p>

                <p className="mt-5 font-semibold text-orange-500">
                  {service.price}
                </p>

                <a
                  href="#kontakt"
                  className="mt-6 block rounded-xl bg-orange-500 px-4 py-2 text-center font-semibold text-white transition hover:bg-orange-600"
                >
                  Objednať
                </a>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}