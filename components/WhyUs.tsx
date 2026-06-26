export default function WhyUs() {
  return (
<section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-zinc-900 p-8">
          <h2 className="text-3xl font-bold">Prečo tento web funguje?</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-orange-500">Rýchly kontakt</h3>
              <p className="mt-2 text-zinc-400">
                Zákazník sa vie objednať bez zbytočného telefonovania.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-orange-500">Jasné služby</h3>
              <p className="mt-2 text-zinc-400">
                Návštevník hneď vidí, čo servis ponúka.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-orange-500">AI asistent</h3>
              <p className="mt-2 text-zinc-400">
                V ďalšej fáze pridáme chat, ktorý odpovedá na časté otázky.
              </p>
            </div>
          </div>
        </div>
      </section>
      );
}