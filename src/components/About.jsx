import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Chi Siamo</h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Siamo una società di consulenza specializzata in compliance normativa, privacy, sicurezza e governance.
            La nostra missione è semplificare la complessità regolatoria e proteggere le organizzazioni dai rischi,
            con competenza, trasparenza e innovazione.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            { title: 'Competenza', desc: 'Team di professionisti certificati in GDPR, 231, ISO e cybersecurity.' },
            { title: 'Trasparenza', desc: 'Comunicazione chiara, processi misurabili, risultati verificabili.' },
            { title: 'Innovazione', desc: 'Metodologie data-driven e tecnologie all’avanguardia.' },
            { title: 'Legalità', desc: 'Aderenza rigorosa a norme e best practice nazionali e internazionali.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
