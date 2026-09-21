import { CarFront, CircleGauge, Disc3, Droplets, Snowflake, Wrench } from "lucide-react";
import Image from "next/image";

const items = [
  [Droplets,"Servis a údržba","Oleje, filtre, kontroly"], [Disc3,"Brzdy a podvozok","Bezpečne na prvom mieste"],
  [CarFront,"Pneuservis","Prezutie, vyváženie"], [CircleGauge,"Diagnostika","Pre všetky značky"],
  [Snowflake,"Klimatizácia","Servis a dezinfekcia"], [Wrench,"Geometria","Presné nastavenie"],
] as const;

export default function Services() {
  return <section id="sluzby" className="grid border-b border-white/10 bg-[#070909] lg:grid-cols-2">
    <div className="relative min-h-[480px] overflow-hidden lg:min-h-[650px]"><Image src="/images/undercar-service.png" alt="Servis podvozka vozidla" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /><div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" /><p className="absolute bottom-12 left-8 text-xs font-bold uppercase leading-6 tracking-[.3em]">Kvalitná<br />mechanika<br />za férovú cenu.</p></div>
    <div className="flex items-center px-5 py-20 sm:px-12 lg:px-16"><div className="w-full"><p className="eyebrow">Naše služby</p><div className="mt-5 flex items-start justify-between gap-8"><div><h2 className="display text-4xl sm:text-5xl">KOMPLEXNÝ SERVIS<br />PRE VÁŠ VOZ</h2><p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400">Od bežnej údržby až po náročnejšie opravy. Moderné vybavenie, skúsený prístup a dôraz na detail.</p></div><span className="hidden text-[9px] uppercase tracking-[.25em] text-zinc-500 sm:block">Spoľahlivosť<br />je základ</span></div>
      <div className="mt-10 grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3">{items.map(([Icon,title,text])=><article key={title} className="border-b border-r border-white/10 p-5"><Icon className="h-7 w-7 text-red-600" /><h3 className="mt-4 text-sm font-black">{title}</h3><p className="mt-1 text-[11px] text-zinc-500">{text}</p></article>)}</div>
    </div></div>
  </section>;
}
