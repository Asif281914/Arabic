import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Founder, Mitchell Chiropractic',
      image: 'https://picsum.photos/seed/dr1/200/200',
      quote: 'The Visionary Clinic transformed how we look at our business. We were stuck for 3 years, and within 6 months of their roadmap, we doubled our patient inquiries.',
    },
    {
      name: 'Dr. James Chen',
      role: 'Director, Integrative Health Center',
      image: 'https://picsum.photos/seed/dr2/200/200',
      quote: 'Finally, a consulting firm that understands the nuances of a wellness practice. They didn’t just give us a template; they gave us a custom strategy that actually worked.',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Owner, Zen Wellness Studio',
      image: 'https://picsum.photos/seed/dr3/200/200',
      quote: 'The growth audit was eye-opening. We were wasting thousands on marketing that didn’t convert. Their strategic roadmap saved us time and money.',
    },
  ];

  return (
    <section className="py-24 bg-bg-light/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            What Our <span className="text-primary">Partners Say.</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We’ve helped hundreds of wellness practice owners reclaim their time and scale their impact.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 relative flex flex-col h-full"
            >
              <div className="absolute -top-6 left-10 bg-primary text-white p-4 rounded-2xl shadow-lg">
                <Quote className="w-6 h-6" />
              </div>
              
              <div className="flex gap-1 mb-6 mt-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed mb-10 italic flex-grow">
                "{t.quote}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-slate-50 pt-8">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/10"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
