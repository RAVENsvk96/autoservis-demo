"use client";

import { company } from "@/data/company";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import type { ComponentProps } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleSubmit: NonNullable<ComponentProps<"form">["onSubmit"]> =
  async (event) => {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="mx-auto max-w-6xl px-6 py-20">
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
          Zavolajte nám alebo nám napíšte. Radi vám poradíme, pripravíme cenovú
          ponuku a nájdeme najbližší voľný termín.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-orange-500" />
                <div>
                  <p className="text-sm text-zinc-400">Telefón</p>
                  <a
                    href={company.phoneHref}
                    className="font-semibold hover:text-orange-500"
                  >
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-orange-500" />
                <div>
                  <p className="text-sm text-zinc-400">Email</p>
                  <a
                    href={company.emailHref}
                    className="font-semibold hover:text-orange-500"
                  >
                    {company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-orange-500" />
                <div>
                  <p className="text-sm text-zinc-400">Adresa</p>
                  <p className="font-semibold">{company.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="h-6 w-6 text-orange-500" />
                <div>
                  <p className="text-sm text-zinc-400">Otváracie hodiny</p>
                  <p className="font-semibold">{company.openingHours}</p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
          >
            <div className="grid gap-4">
              <input
                name="name"
                required
                placeholder="Vaše meno"
                className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-orange-500"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Váš email"
                className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-orange-500"
              />

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Napíšte, s čím potrebujete pomôcť"
                className="resize-none rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-orange-500"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? "Odosielam..." : "Odoslať správu"}
                <Send className="h-5 w-5" />
              </button>

              {status === "success" && (
                <p className="text-sm text-green-400">
                  Správa bola úspešne odoslaná.
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Správu sa nepodarilo odoslať. Skúste to znova.
                </p>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}