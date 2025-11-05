import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-sky-500 to-indigo-600 text-white">C</span>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">COMPLIS SRL</div>
              <div className="text-xs text-slate-300">Compliance • Privacy • Security</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-200 sm:flex">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">Chi siamo</a>
            <a href="#services" className="hover:text-white">Servizi</a>
            <a href="#team" className="hover:text-white">Team</a>
            <a href="#contact" className="hover:text-white">Contatti</a>
          </nav>

          <div className="hidden sm:block">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 text-sm text-white shadow-lg shadow-indigo-600/30 transition hover:opacity-95">
              Richiedi consulenza
            </a>
          </div>
        </div>
      </header>

      {/* Main sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-300 sm:flex-row">
          <p>© {new Date().getFullYear()} COMPLIS SRL. Tutti i diritti riservati.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#about" className="hover:text-white">Chi siamo</a>
            <a href="#services" className="hover:text-white">Servizi</a>
            <a href="#team" className="hover:text-white">Team</a>
            <a href="#contact" className="hover:text-white">Contatti</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
