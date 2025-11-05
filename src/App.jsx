import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Contact from './components/Contact';

function BrandLogo() {
  return (
    <a href="#home" className="group flex items-center gap-2">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-sky-500 to-indigo-600 shadow-sm ring-1 ring-white/10">
        <svg viewBox="0 0 32 32" className="h-5 w-5 text-white" aria-hidden="true">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="currentColor" />
              <stop offset="100%" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <path fill="currentColor" d="M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm0 4a10 10 0 100 20 10 10 0 000-20zm4.9 6.6a1.25 1.25 0 011.77 1.76l-6.2 6.3a1.25 1.25 0 01-1.78 0l-3.1-3.1a1.25 1.25 0 111.77-1.76l2.22 2.2 5.32-5.4z"/>
        </svg>
      </span>
      <div className="flex flex-col leading-tight">
        <span className="text-base font-bold tracking-tight text-white">COMPLIS SRL</span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-200/80 group-hover:text-white">Compliance • Privacy • Security</span>
      </div>
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <BrandLogo />
          <nav className="hidden gap-6 text-sm text-slate-200 md:flex">
            <a href="#about" className="hover:text-white">Chi Siamo</a>
            <a href="#team" className="hover:text-white">Team</a>
            <a href="#services" className="hover:text-white">Servizi</a>
            <a href="#contact" className="hover:text-white">Contatti</a>
          </nav>
          <a href="#contact" className="hidden rounded-md bg-sky-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-sky-500 md:inline-block">Richiedi consulenza</a>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <About />
        <Team />
        <Services />
        <section className="bg-slate-900 py-16 text-slate-100">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold">Formazione e Cultura Aziendale</h3>
                <p className="mt-3 text-slate-300">
                  Progetti formativi su privacy, 231, ISO e sicurezza digitale. Interventi dedicati nelle scuole su
                  cyberbullismo e cittadinanza digitale responsabile, per diffondere consapevolezza e prevenzione.
                </p>
                <div className="mt-5">
                  <a href="#contact" className="inline-flex items-center rounded-md bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-500">Scopri i percorsi</a>
                </div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-rose-400/10 to-sky-500/10 p-6 ring-1 ring-white/10">
                <ul className="space-y-3 text-sm text-slate-200">
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />Workshop interattivi su GDPR e sicurezza</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />Programmi 231 e cultura della compliance</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />Moduli su phishing, awareness e best practice IT</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />Percorsi per scuole su cyberbullismo e uso consapevole dei social</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>

      <footer className="border-t bg-white py-8 text-slate-600">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm md:flex-row">
          <p>© {new Date().getFullYear()} COMPLIS SRL. Tutti i diritti riservati.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-slate-900">Chi Siamo</a>
            <a href="#team" className="hover:text-slate-900">Team</a>
            <a href="#services" className="hover:text-slate-900">Servizi</a>
            <a href="#contact" className="hover:text-slate-900">Contatti</a>
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
