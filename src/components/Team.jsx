import React from 'react';

const people = [
  {
    name: 'Avv. Serena Belingheri',
    role: 'Socio • Privacy & Compliance',
    // Professional female portrait
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Avv. Irene Manfè',
    role: 'Socio • Governance & Compliance',
    // Replaced with a female portrait as requested
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Team() {
  return (
    <section id="team" className="w-full bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Team</h2>
          <p className="mt-4 text-slate-200">
            Un team guidato da donne con background legale e tecnico per accompagnare organizzazioni
            verso una compliance concreta e verificabile.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {people.map((p) => (
            <article key={p.name} className="overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-300">{p.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
