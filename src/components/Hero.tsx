import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, CheckCircle2, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-bg-light -z-10 rounded-l-[100px] opacity-50" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Strategic Growth for Established Wellness Practices
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 text-slate-900 text-balance">
              Scale Your Practice with <span className="text-primary">Strategic Clarity</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl text-balance">
              We help practitioners transition from solo clinicians to clinic directors by identifying growth bottlenecks and building high-performance systems.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-secondary transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group">
                Book a Strategy Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                <Play className="w-5 h-5 fill-primary text-primary" />
                See How It Works
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/consultant${i}/100/100`}
                    alt="Client"
                    className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm text-slate-500">
                <p className="font-bold text-slate-900 text-base">Trusted by 500+ Practitioners</p>
                <p>Chiropractors, Naturopaths, & Holistic Owners</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white/50">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000"
                alt="Strategic Business Discussion"
                className="w-full h-auto object-cover aspect-[4/5] lg:aspect-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-sm font-bold uppercase tracking-widest mb-2 text-accent">Case Study: Austin Wellness</p>
                <h4 className="text-2xl font-bold leading-tight">From $40k to $120k Monthly Revenue in 8 Months</h4>
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[32px] shadow-2xl z-20 border border-slate-100 hidden sm:block max-w-xs"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Growth Rate</p>
                  <p className="text-2xl font-bold text-slate-900">+124% YoY</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-slate-600">Efficiency</span>
                  <span className="text-primary">94%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[94%] transition-all duration-1000" />
                </div>
              </div>
            </motion.div>
            
            {/* Floating User Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -top-10 -right-10 glass-card p-6 rounded-[32px] z-20 hidden lg:block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/20 rounded-2xl">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">New Patients</p>
                  <p className="text-xs text-slate-500">Last 30 Days</p>
                </div>
                <div className="text-green-600 font-bold text-lg">+42</div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/20 rounded-full -z-10 blur-xl" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 border-8 border-primary/5 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
