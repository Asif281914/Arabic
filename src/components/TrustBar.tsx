import React from 'react';

export default function TrustBar() {
  const stats = [
    { label: 'Revenue Growth', value: '42%' },
    { label: 'New Patients', value: '2.5x' },
    { label: 'Practices Served', value: '500+' },
    { label: 'Retention Rate', value: '94%' },
  ];

  return (
    <section className="bg-slate-50 py-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left">
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Trusted by Industry Leaders</p>
            <h3 className="text-2xl font-bold text-slate-900">Proven Results Across Wellness</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
