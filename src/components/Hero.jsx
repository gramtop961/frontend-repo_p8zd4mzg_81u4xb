import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6Y1zsa3WZ0Vt3jUy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur">
            COMPLIS SRL
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            Compliance, Privacy e Sicurezza con rigore e chiarezza
          </h1>
          <p className="mt-6 text-lg text-slate-200">
            Società di consulenza guidata da donne, specializzata in compliance normativa, protezione dei dati, sicurezza delle informazioni e governance.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/30 transition hover:opacity-95">
              Richiedi consulenza
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 text-white backdrop-blur transition hover:bg-white/15">
              I nostri servizi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
