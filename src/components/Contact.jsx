import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Grazie! Ti contatteremo al più presto.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Contatti</h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Richiedi una consulenza personalizzata. Siamo a tua disposizione per valutare esigenze e priorità.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm font-medium text-slate-700">Nome e Cognome</label>
                <input required type="text" className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Mario Rossi" />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                <input required type="email" className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="mario@azienda.it" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-slate-700">Azienda</label>
                <input type="text" className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Nome azienda" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-slate-700">Messaggio</label>
                <textarea required rows="4" className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200" placeholder="Raccontaci le tue esigenze (GDPR, 231, whistleblowing, audit, cybersecurity, formazione, ecc.)" />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between">
                <div className="text-xs text-slate-500">Compilando il form accetti la nostra informativa privacy.</div>
                <button type="submit" className="inline-flex items-center rounded-md bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-300">
                  Richiedi una consulenza
                </button>
              </div>
              {status && (
                <div className="sm:col-span-2 rounded-md bg-green-50 p-3 text-sm text-green-700 ring-1 ring-green-200">{status}</div>
              )}
            </div>
          </form>

          <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Dove siamo</h3>
            <p className="mt-2 text-sm text-slate-600">
              Sede legale: Via Francesco Nullo 2, 24124 Bergamo (BG). Operiamo in tutta Italia, meeting in presenza e da remoto.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl">
              <iframe
                title="Mappa - Via Francesco Nullo 2, Bergamo"
                src="https://www.google.com/maps?q=Via%20Francesco%20Nullo%202,%20Bergamo&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              <li><span className="font-medium text-slate-800">Ragione sociale:</span> COMPLIS SRL</li>
              <li><span className="font-medium text-slate-800">Indirizzo:</span> Via Francesco Nullo 2, 24124 Bergamo (BG)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
