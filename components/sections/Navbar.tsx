"use client";

import Logo from "@/components/ui/Logo";
import { navigation } from "@/data/navigation";
import { ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";

const portfolioUrl = "https://www.samuelzeliska.sk/#projekty";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="border-b border-orange-500/30 bg-orange-500/10 px-6 py-2.5 text-center text-xs font-semibold tracking-wide text-orange-100">UKÁŽKOVÝ PROJEKT — nejde o skutočný autoservis ani objednávkový web</div>
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5" aria-label="Hlavná navigácia">
          <Logo />
          <div className="hidden items-center gap-8 text-sm md:flex">{navigation.map((item) => <a key={item.href} href={item.href} className="text-zinc-300 transition hover:text-orange-500">{item.label}</a>)}</div>
          <div className="flex items-center gap-3">
            <a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-600 sm:inline-flex">Späť na portfólio <ExternalLink className="h-4 w-4" /></a>
            <button type="button" aria-label={isOpen ? "Zatvoriť menu" : "Otvoriť menu"} aria-expanded={isOpen} onClick={() => setIsOpen((value) => !value)} className="rounded-xl border border-zinc-800 p-2 text-zinc-300 md:hidden">{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
          </div>
        </nav>
        {isOpen && <div className="border-t border-zinc-800 bg-zinc-950 px-6 py-5 md:hidden"><div className="flex flex-col gap-4 text-sm">{navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-orange-500">{item.label}</a>)}<a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 font-semibold text-orange-500">Späť na portfólio <ExternalLink className="h-4 w-4" /></a></div></div>}
      </header>
    </>
  );
}
