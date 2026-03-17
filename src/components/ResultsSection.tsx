import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

export default function ResultsSection() {
  const metrics = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: '142%',
      label: 'Avg. Revenue Increase',
      color: 'bg-blue-500',
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: '3.5x',
      label: 'Patient Inquiries',
      color: 'bg-indigo-500',
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      value: '$2.4M',
      label: 'Revenue Unlocked',
      color: 'bg-emerald-500',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: '12wks',
      label: 'Avg. Time to ROI',
      color: 'bg-amber-500',
    },
  ];

  return (
    <section id="results" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Measurable Outcomes, <span className="text-primary">Not Just Promises.</span>
            </h2>
            <p className="text-xl text-slate-600">
              We track everything. Our success is tied directly to your growth metrics. Here is what our partners achieve on average.
            </p>
          </div>
          <button className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all">
            View Case Studies
          </button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 ${metric.color} opacity-5 rounded-bl-full transition-all group-hover:scale-150`} />
              
              <div className={`w-12 h-12 ${metric.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                {metric.icon}
              </div>
              
              <p className="text-5xl font-bold text-slate-900 mb-2">{metric.value}</p>
              <p className="text-lg font-medium text-slate-500">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
