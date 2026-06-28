"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Kontakt
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          Dohodnite si termín ešte dnes
        </h2>

        <p className="mt-5 max-w-2xl text-zinc-400">
          Zavolajte nám alebo nám napíšte. Radi vám poradíme,
          pripravíme cenovú ponuku a nájdeme najbližší voľný termín.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Kontakt */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-orange-500" />

                <div>
                  <p className="text-sm text-zinc-400">
                    Telefón
                  </p>

                  <a
                    href="tel:+421900123456"
                    className="font-semibold hover:text-orange-500"
                  >
                    +421 900 123 456
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-orange-500" />

                <div>
                  <p className="text-sm text-zinc-400">
                    Email
                  </p>

                  <a
                    href="mailto:info@autoservis.sk"
                    className="font-semibold hover:text-orange-500"
                  >
                    info@autoservis.sk
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-orange-500" />

                <div>
                  <p className="text-sm text-zinc-400">
                    Adresa
                  </p>

                  <p className="font-semibold">
                    Nitra, Slovensko
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="h-6 w-6 text-orange-500" />

                <div>
                  <p className="text-sm text-zinc-400">
                    Otváracie hodiny
                  </p>

                  <p className="font-semibold">
                    Po – Pia • 08:00 – 17:00
                  </p>
                </div>
              </div>
            </div>

            <a
              href="tel:+421900123456"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Zavolať teraz

              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Mapa */}
          <div className="overflow-hidden rounded-3xl border border-zinc-800">
            <iframe
              title="Mapa autoservisu"
              src="https://www.google.com/maps?q=Nitra&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}