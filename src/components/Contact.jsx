import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contatti</h2>
          <p className="mt-4 text-slate-200">Parliamo delle tue esigenze: rispondiamo rapidamente e in modo concreto.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-slate-200">Nome e Cognome</label>
                <input required type="text" className="w-full rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder-slate-400 outline-none focus:border-sky-500" placeholder="Mario Rossi" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-200">Email</label>
                <input required type="email" className="w-full rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder-slate-400 outline-none focus:border-sky-500" placeholder="nome@azienda.it" />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm text-slate-200">Messaggio</label>
              <textarea required rows={4} className="w-full rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder-slate-400 outline-none focus:border-sky-500" placeholder="Raccontaci il tuo progetto..." />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/30 transition hover:opacity-95">
              Invia richiesta
            </button>
            {sent && (
              <p className="mt-3 text-sm text-emerald-300">Grazie! Ti ricontatteremo a breve.</p>
            )}
          </form>

          <div className="space-y-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-lg font-medium">COMPLIS SRL</h3>
              <div className="mt-4 space-y-2 text-slate-200">
                <p className="flex items-center gap-2"><MapPin className="h-5 w-5 text-sky-400" /> Via Francesco Nullo, 2 — 24121 Bergamo BG</p>
                <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-sky-400" /> info@complis.it</p>
                <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-sky-400" /> +39 035 000 0000</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="Mappa COMPLIS SRL"
                src="https://www.google.com/maps?q=Via%20Francesco%20Nullo%202,%20Bergamo&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
