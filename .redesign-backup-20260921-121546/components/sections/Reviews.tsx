"use client";

import SectionHeading from "@/components/layout/SectionHeading";
import { motion } from "framer-motion";
import { Gauge, LayoutTemplate, ShieldCheck } from "lucide-react";

const goals = [
  { icon: ShieldCheck, title: "Dôveryhodná prezentácia", text: "Jasná komunikácia a profesionálny vzhľad pomáhajú budovať dôveru ešte pred prvým kontaktom." },
  { icon: LayoutTemplate, title: "Prehľad služieb", text: "Najdôležitejšie služby a odpovede sú dostupné bez zbytočného hľadania." },
  { icon: Gauge, title: "Rýchly a responzívny web", text: "Návrh je pripravený na pohodlné používanie na mobile aj počítači." },
];

export default function Reviews() {
  return <section className="mx-auto max-w-6xl px-6 py-20"><SectionHeading badge="Ciele návrhu" title="Web navrhnutý pre dôveru a prehľadnosť" description="Táto sekcia predstavuje ciele demo projektu. Neobsahuje recenzie ani výsledky skutočného autoservisu." /><div className="mt-10 grid gap-6 md:grid-cols-3">{goals.map((item, index) => { const Icon = item.icon; return <motion.article key={item.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-7"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10"><Icon className="h-5 w-5 text-orange-500" /></div><h3 className="mt-6 text-xl font-semibold">{item.title}</h3><p className="mt-4 leading-7 text-zinc-300">{item.text}</p></motion.article>; })}</div></section>;
}
