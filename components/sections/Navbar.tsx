"use client";
import Logo from "@/components/ui/Logo";
import { navigation } from "@/data/navigation";
import { ExternalLink, Menu, X } from "lucide-react";
import { useState } from "react";
const portfolioUrl = "https://www.samuelzeliska.sk/#projekty";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <><div className="border-b border-white/10 bg-black px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[.2em] text-zinc-400">Ukážkový projekt · nejde o skutočný autoservis</div><header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl"><nav className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 lg:px-10" aria-label="Hlavná navigácia"><Logo /><div className="hidden items-center gap-8 lg:flex">{navigation.map((item, index) => <a key={item.href} href={item.href} className={`nav-link ${index === 0 ? "active" : ""}`}>{item.label}</a>)}</div><a href={portfolioUrl} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 border border-red-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-red-600 sm:inline-flex">Portfólio <ExternalLink className="h-4 w-4" /></a><button type="button" aria-label={open ? "Zatvoriť menu" : "Otvoriť menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="border border-white/15 p-2.5 text-white lg:hidden">{open ? <X /> : <Menu />}</button></nav>{open && <div className="border-t border-white/10 bg-black px-5 py-6 lg:hidden"><div className="flex flex-col gap-5">{navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-bold uppercase tracking-widest text-zinc-300">{item.label}</a>)}<a href={portfolioUrl} className="text-sm font-bold uppercase tracking-widest text-red-500">Späť na portfólio</a></div></div>}</header></>;
}
