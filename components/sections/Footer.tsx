import Logo from "@/components/ui/Logo";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return <footer className="border-t border-zinc-800 bg-zinc-950"><div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between"><div><Logo variant="full" className="h-20 w-auto" priority={false} /><p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400">Ukážkový webový koncept vytvorený Samuelom Zelískom. Nejde o skutočný autoservis ani ponuku služieb.</p></div><a href="https://www.samuelzeliska.sk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-400">www.samuelzeliska.sk <ExternalLink className="h-4 w-4" /></a></div><div className="border-t border-zinc-800 px-6 py-4 text-center text-sm text-zinc-500">© {new Date().getFullYear()} Samuel Zelíska · Portfolio demo projekt</div></footer>;
}
