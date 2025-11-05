import React from 'react';
import { Shield, Lock, Scale } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Compliance a prova di audit',
      desc: 'Framework e controlli misurabili, documentazione chiara e processi sostenibili nel tempo.',
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: 'Privacy by design',
      desc: 'Approccio privacy-centrico su processi, sistemi e fornitori. DPO-as-a-service, DPIA, data mapping.',
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: 'Governance & risk',
      desc: 'Modelli di governance efficaci, risk assessment e monitoraggio continuo a supporto delle decisioni.',
    },
  ];

  return (
    <section id="about" className="relative w-full bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Chi siamo</h2>
          <p className="mt-4 text-slate-200">
            COMPLIS SRL supporta aziende e organizzazioni nell’allineamento a normative e standard
            attraverso metodi pragmatici e documentazione essenziale. Uniamo competenze legali e
            tecniche per soluzioni realmente applicabili.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 p-3 text-white">
                {v.icon}
              </div>
              <h3 className="text-lg font-medium">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-200">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
