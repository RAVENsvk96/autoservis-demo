export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold">
          Auto<span className="text-orange-500">Servis</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <a href="#" className="hover:text-white">Domov</a>
          <a href="#sluzby" className="hover:text-white">Služby</a>
          <a href="#kontakt" className="hover:text-white">Kontakt</a>
        </div>

        <a
          href="#kontakt"
          className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
        >
          Objednať
        </a>
      </nav>
    </header>
  );
}