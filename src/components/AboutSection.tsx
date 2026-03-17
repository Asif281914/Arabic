import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Briefcase } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: 'Strategy First',
      description: 'We don’t just run ads. We build the foundation for sustainable growth.',
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: 'Industry Experts',
      description: 'We specialize exclusively in the wellness and holistic medicine space.',
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: 'Business Partners',
      description: 'We act as an extension of your team, not just another vendor.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[48px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Strategy Team"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[32px] shadow-2xl z-20 border border-slate-100 text-center">
              <p className="text-5xl font-bold text-primary mb-1">15+</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Years Experience</p>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-1/2 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
          </motion.div>
          
          <div>
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Our Positioning</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              We Are Your <span className="text-primary">Strategy Partner</span>, Not Just Another Agency.
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              The Visionary Clinic was founded on a simple principle: established wellness practices deserve high-level business strategy. We bridge the gap between clinical excellence and business growth.
            </p>
            
            <div className="space-y-8">
              {values.map((value) => (
                <div key={value.title} className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="mt-12 bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-all shadow-lg">
              Meet the Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
