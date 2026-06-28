import Logo from "@/components/Logo";
export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <Logo />

          <p className="mt-4 max-w-sm text-sm text-zinc-400">
            Rýchle, férové a spoľahlivé opravy vozidiel v Nitrianskom kraji.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Navigácia</h3>

          <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-400">
            <a href="#" className="hover:text-orange-500">Domov</a>
            <a href="#sluzby" className="hover:text-orange-500">Služby</a>
            <a href="#kontakt" className="hover:text-orange-500">Kontakt</a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Kontakt</h3>

          <div className="mt-4 space-y-2 text-sm text-zinc-400">
            <p>📍 Nitra, Slovensko</p>
            <p>📞 0900 123 456</p>
            <p>✉️ info@autoservis.sk</p>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 px-6 py-4 text-center text-sm text-zinc-500">
        © 2026 AutoServis. Všetky práva vyhradené.
      </div>
    </footer>
  );
}