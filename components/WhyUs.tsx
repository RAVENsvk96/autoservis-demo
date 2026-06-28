import { whyUs } from "@/data/whyUs";

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
          {whyUs.badge}
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          {whyUs.title}
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {whyUs.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-zinc-950/60 p-6"
            >
              <h3 className="font-semibold text-orange-500">
                {item.title}
              </h3>

              <p className="mt-2 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}