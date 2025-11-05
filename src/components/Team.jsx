import React from 'react';

const members = [
  {
    name: 'Avv. Serena Belingheri',
    role: 'Socio • Privacy & Compliance',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Avv. Irene Manfè',
    role: 'Socio • Governance & Compliance',
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Il nostro Team</h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Una boutique di consulenza guidata da donne. Le socie fondatrici guidano i progetti con rigore legale,
            ascolto e concretezza, affiancando imprese e PA in materia di compliance, privacy e governance.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {members.map((m) => (
            <article key={m.name} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{m.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{m.role}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Empatia', 'Affidabilità', 'Concretezza'].map((t) => (
                    <span key={t} className="rounded-full bg-rose-50 px-3 py-1 text-xs text-rose-700 ring-1 ring-rose-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
