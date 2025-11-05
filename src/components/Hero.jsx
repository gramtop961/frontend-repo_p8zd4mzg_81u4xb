import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-28 text-left text-white md:py-36">
        <span className="inline-flex items-center rounded-full bg-sky-500/10 px-4 py-1 text-sm font-medium text-sky-300 ring-1 ring-inset ring-sky-500/30 backdrop-blur">
          Compliance • Privacy • Sicurezza • Governance
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
          Proteggiamo il valore della tua impresa.
          <span className="block text-sky-300">Dalla privacy alla compliance, la sicurezza è il nostro mestiere.</span>
        </h1>
        <p className="max-w-2xl text-base text-slate-300 md:text-lg">
          Supportiamo organizzazioni nell'affrontare rischi legali, organizzativi e informatici con un approccio
          integrato, trasparente e orientato ai risultati.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#services" className="inline-flex items-center rounded-md bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300">
            Scopri i nostri servizi
          </a>
          <a href="#contact" className="inline-flex items-center rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/40">
            Contattaci
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
    </section>
  );
}
