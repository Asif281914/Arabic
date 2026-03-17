import React from 'react';
import { motion } from 'motion/react';
import { Search, Map, Settings, UserPlus, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Growth Audit',
      description: 'A deep dive into your current marketing, website, and sales process to identify hidden bottlenecks.',
      features: ['Conversion Analysis', 'Market Positioning', 'Competitor Benchmarking'],
    },
    {
      icon: <Map className="w-8 h-8" />,
      title: 'Strategic Roadmap',
      description: 'A custom, step-by-step plan to scale your practice based on your specific goals and market.',
      features: ['Marketing Strategy', 'Brand Refinement', 'Growth Timeline'],
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Practice Optimization',
      description: 'Streamlining your internal systems to handle more patients without increasing your workload.',
      features: ['Operations Efficiency', 'Team Alignment', 'Profit Margin Optimization'],
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: 'Patient Acquisition',
      description: 'High-performance systems designed to attract and convert your ideal patients consistently.',
      features: ['Lead Generation', 'Nurture Sequences', 'Retention Systems'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Our Services</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Everything You Need to <span className="text-primary italic">Scale.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We provide the strategic foundation and the execution systems to turn your practice into a high-performance business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-transparent transition-all group"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-slate-700 font-medium">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
