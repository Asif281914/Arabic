import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary rounded-[60px] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
              Ready to Scale Your Practice with <span className="text-accent italic">Precision?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Stop guessing and start growing. Book your free 30-minute strategy session today and get your custom growth roadmap.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center gap-3 group">
                <Calendar className="w-6 h-6" />
                Book Your Strategy Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                View Case Studies
              </button>
            </div>
            
            <p className="mt-10 text-sm text-blue-200 font-medium">
              No clinical talk. No medical jargon. Just business growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
