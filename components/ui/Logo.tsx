import Link from "next/link";

type LogoProps = { className?: string; href?: string; priority?: boolean; variant?: "navbar" | "full" };

export default function Logo({ className = "", href = "/" }: LogoProps) {
  return <Link href={href} aria-label="Autoservis – domov" className={`group inline-flex items-center gap-3 ${className}`}><span className="flex skew-x-[-18deg] gap-1" aria-hidden="true"><i className="h-7 w-1.5 bg-red-600" /><i className="h-7 w-1.5 bg-red-600" /><i className="h-7 w-1.5 bg-red-600" /></span><span><span className="block text-lg font-black leading-none tracking-[.06em] text-white">AUTOSERVIS</span><span className="mt-1 block text-[7px] font-semibold uppercase tracking-[.23em] text-zinc-500">Mechanika · diagnostika · pneuservis</span></span></Link>;
}
