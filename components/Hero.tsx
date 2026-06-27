export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Autoservis v Nitre
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Opravíme vaše auto rýchlo, férovo a spoľahlivo.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-zinc-300">
          Moderný autoservis pre bežnú údržbu, diagnostiku, brzdy, podvozok
          a pneuservis. Objednanie jednoducho online alebo telefonicky.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-zinc-900 p-4 text-sm text-zinc-300 transition hover:bg-zinc-800">
            ✓ 15 rokov skúseností
          </div>

          <div className="rounded-2xl bg-zinc-900 p-4 text-sm text-zinc-300 transition hover:bg-zinc-800">
            ✓ Certifikovaná diagnostika
          </div>

          <div className="rounded-2xl bg-zinc-900 p-4 text-sm text-zinc-300 transition hover:bg-zinc-800">
            ✓ 5000+ opravených áut
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#kontakt"
            className="rounded-xl bg-orange-500 px-6 py-3 text-center font-semibold text-white hover:bg-orange-600"
          >
            Objednať termín
          </a>

          <a
            href="tel:0900123456"
            className="rounded-xl border border-zinc-700 px-6 py-3 text-center font-semibold text-white hover:bg-zinc-900"
          >
            Zavolať
          </a>
        </div>
      </div>

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
        <div className="flex h-72 items-center justify-center rounded-2xl bg-zinc-800 text-7xl">
          🚗
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-zinc-950 p-4">
            <p className="text-sm text-zinc-400">Otvorené dnes</p>
            <p className="mt-1 font-semibold">08:00 – 17:00</p>
          </div>

          <div className="rounded-2xl bg-zinc-950 p-4">
            <p className="text-sm text-zinc-400">Diagnostika</p>
            <p className="mt-1 font-semibold">od 30 €</p>
          </div>
        </div>
      </div>
    </section>
  );
}