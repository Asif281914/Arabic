import React from 'react';
import { motion } from 'motion/react';
import { Target, Search, Map, Zap, CheckCircle } from 'lucide-react';

export default function SolutionSection() {
  const features = [
    {
      icon: <Search className="w-6 h-6 text-primary" />,
      title: 'Growth Audit',
      description: 'We identify the "holes in your bucket" where you are losing potential patients and revenue.',
    },
    {
      icon: <Map className="w-6 h-6 text-primary" />,
      title: 'Strategic Roadmap',
      description: 'A clear, step-by-step plan to optimize your positioning, marketing, and operations.',
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: 'Precision Positioning',
      description: 'We help you stand out in a crowded market as the go-to authority in your niche.',
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: 'Optimization Systems',
      description: 'Implementing high-conversion systems that turn leads into loyal, long-term patients.',
    },
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/20 skew-x-12 translate-x-1/4 -z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              We Fix the <span className="text-accent">Holes in Your Bucket</span> Before You Pour More In.
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Most agencies just want to sell you more ads. We focus on the strategy first. We ensure your practice is optimized for growth before scaling your marketing.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-blue-100 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white p-8 rounded-[40px] shadow-2xl text-slate-900">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-2xl font-bold">The Growth Roadmap</h4>
                <div className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                  Phase 1 Complete
                </div>
              </div>
              
              <div className="space-y-6">
                {[
                  'Identify conversion bottlenecks',
                  'Optimize patient acquisition funnel',
                  'Refine brand positioning',
                  'Implement retention systems',
                  'Scale high-ROI marketing channels'
                ].map((item, i) => (
                  <div key={item} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className={cn(
                      "w-6 h-6 rounded-full flex items-center justify-center",
                      i < 2 ? "bg-green-500 text-white" : "bg-slate-200 text-slate-400"
                    )}>
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className={cn(
                      "font-medium",
                      i < 2 ? "text-slate-900" : "text-slate-400"
                    )}>{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-8 bg-primary text-white py-4 rounded-2xl font-bold hover:bg-secondary transition-all">
                Get Your Practice Audit
              </button>
            </div>
            
            {/* Floating element */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent rounded-full blur-2xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
