import React from 'react';
import { Shield, FileSearch, Lock, Users } from 'lucide-react';

const services = [
  {
    icon: <Shield className="h-6 w-6 text-sky-500" aria-hidden="true" />,
    title: 'Privacy e GDPR',
    desc: 'Gestione dati personali, DPO, DPIA e risk analysis per la piena conformità.',
    tags: ['GDPR', 'DPO', 'DPIA'],
  },
  {
    icon: <Users className="h-6 w-6 text-sky-500" aria-hidden="true" />,
    title: 'Modello 231 & OdV',
    desc: 'Progettazione, implementazione e supporto all’Organismo di Vigilanza.',
    tags: ['231', 'OdV', 'Procedure'],
  },
  {
    icon: <FileSearch className="h-6 w-6 text-sky-500" aria-hidden="true" />,
    title: 'Whistleblowing',
    desc: 'Sistemi di segnalazione conformi alla legge 24/2023 e gestione del canale.',
    tags: ['Segnalazioni', 'Legge 24/2023'],
  },
  {
    icon: <Lock className="h-6 w-6 text-sky-500" aria-hidden="true" />,
    title: 'Cybersecurity',
    desc: 'Audit IT, hardening e protezione dati in collaborazione con partner esperti.',
    tags: ['Audit IT', 'Hardening', 'Data Protection'],
  },
  {
    icon: <FileSearch className="h-6 w-6 text-sky-500" aria-hidden="true" />,
    title: 'Audit & Compliance',
    desc: 'Verifiche, risk assessment e piani correttivi per processi e controlli.',
    tags: ['Audit', 'Risk'],
  },
  {
    icon: <Shield className="h-6 w-6 text-sky-500" aria-hidden="true" />,
    title: 'Anticorruzione & Antiriciclaggio',
    desc: 'Valutazioni, protocolli e procedure di prevenzione e controllo.',
    tags: ['231', 'AML'],
  },
  {
    icon: <Users className="h-6 w-6 text-sky-500" aria-hidden="true" />,
    title: 'Formazione & Certificazioni',
    desc: 'Programmi su privacy, 231, ISO e cultura di sicurezza digitale.',
    tags: ['Corsi', 'ISO'],
  },
  {
    icon: <FileSearch className="h-6 w-6 text-sky-500" aria-hidden="true" />,
    title: 'Due Diligence & R&S',
    desc: 'Analisi pre-acquisizione e innovazione normativa/tecnologica.',
    tags: ['Due Diligence', 'R&S'],
  },
  {
    icon: <Shield className="h-6 w-6 text-sky-500" aria-hidden="true" />,
    title: 'Rating di Legalità & White List',
    desc: 'Supporto a BDNA e procedure di trasparenza e legalità.',
    tags: ['BDNA', 'Trasparenza'],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Servizi principali</h2>
          <p className="mt-4 text-base text-slate-600 md:text-lg">
            Soluzioni integrate per compliance aziendale, privacy e sicurezza. Dai fondamenti ai progetti complessi,
            ti accompagniamo con metodo e responsabilità.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 ring-1 ring-sky-100">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 ring-1 ring-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid items-center gap-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Approccio e Metodologia</h3>
            <p className="mt-3 text-slate-300">
              Lavoriamo per fasi: analisi del contesto, progettazione delle misure, implementazione operativa e
              monitoraggio continuo. Il nostro metodo è misurabile e orientato al rischio.
            </p>
          </div>
          <ol className="grid grid-cols-2 gap-4">
            {['Analisi', 'Progettazione', 'Implementazione', 'Monitoraggio'].map((step, idx) => (
              <li key={step} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-sm font-medium text-sky-300">{String(idx + 1).padStart(2, '0')}</div>
                <div className="mt-1 text-sm">{step}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
