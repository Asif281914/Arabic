import React from 'react';
import { motion } from 'motion/react';
import { Search, ListChecks, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Diagnose',
      description: 'We conduct a comprehensive growth audit to identify your practice’s hidden bottlenecks.',
      color: 'bg-blue-500',
    },
    {
      icon: <ListChecks className="w-8 h-8" />,
      title: 'Prioritize',
      description: 'We develop a custom strategic roadmap, prioritizing the highest-impact growth levers.',
      color: 'bg-indigo-500',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Implement',
      description: 'We guide you through the execution of the strategy, providing the tools and systems to scale.',
      color: 'bg-emerald-500',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">The Process</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            A Simple Path to <span className="text-primary italic">Success.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We’ve refined our process over 15 years to ensure maximum impact with minimum friction.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 hidden lg:block" />
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 text-center relative"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center font-bold text-slate-400">
                  0{index + 1}
                </div>
                
                <div className={`w-20 h-20 ${step.color} text-white rounded-[32px] flex items-center justify-center mx-auto mb-8 shadow-xl`}>
                  {step.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
