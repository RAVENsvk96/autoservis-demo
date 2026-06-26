import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="sluzby" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold">Naše služby</h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <h3 className="font-semibold">{service.title}</h3>

            <p className="mt-3 text-sm text-zinc-400">
              {service.description}
            </p>

            <p className="mt-4 font-semibold text-orange-500">
              {service.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}