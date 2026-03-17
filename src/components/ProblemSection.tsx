import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, TrendingDown, Users, Layout } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
      title: 'Growth Plateau',
      description: 'You’ve reached a ceiling and can’t seem to break through to the next level of revenue.',
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: 'Inconsistent Marketing',
      description: 'Patient acquisition feels like a roller coaster—busy one month, quiet the next.',
    },
    {
      icon: <Layout className="w-8 h-8 text-red-500" />,
      title: 'Low Conversions',
      description: 'Your website gets traffic, but your phone isn’t ringing. Visitors aren’t becoming patients.',
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      title: 'Hidden Bottlenecks',
      description: 'Operational inefficiencies are draining your profit margins without you even realizing it.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Is Your Practice <span className="text-primary italic">Stuck?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Most wellness practice owners are excellent clinicians but struggle with the business side of growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group"
            >
              <div className="mb-6 p-3 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{problem.title}</h3>
              <p className="text-slate-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
