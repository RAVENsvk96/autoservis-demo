"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Contact() {
  return <section id="kontakt" className="mx-auto max-w-6xl px-6 py-20"><SectionHeading badge="Demo projekt" title="Páči sa vám tento koncept autoservisu?" description="Toto je ukážka dizajnu a vývoja, nie stránka skutočnej prevádzky. Objednávky ani osobné údaje tu neprijímame." /><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900 p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12"><div className="max-w-2xl"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10"><ShieldCheck className="h-6 w-6 text-orange-500" /></div><h3 className="mt-6 text-2xl font-bold">Bez fiktívnych objednávok a kontaktov</h3><p className="mt-4 leading-7 text-zinc-300">Telefón, email, adresa, mapa a formulár sú v demo verzii zámerne vypnuté. Ak hľadáte autora projektu, pokračujte na jeho portfólio.</p></div><a href="https://www.samuelzeliska.sk/#kontakt" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-600 lg:mt-0">Kontaktovať autora <ArrowUpRight className="h-5 w-5" /></a></motion.div></section>;
}
