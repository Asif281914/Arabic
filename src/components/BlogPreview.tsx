import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, User } from 'lucide-react';

export default function BlogPreview() {
  const posts = [
    {
      title: 'The 3 Growth Bottlenecks Every Wellness Practice Faces',
      excerpt: 'Learn how to identify and fix the most common issues that prevent practices from scaling past $500k.',
      image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=800',
      author: 'David Visionary',
      date: 'Mar 12, 2026',
      category: 'Strategy',
    },
    {
      title: 'Why Your Website Isn’t Converting Visitors into Patients',
      excerpt: 'A deep dive into the psychology of patient acquisition and how to optimize your digital presence.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      author: 'Sarah Jenkins',
      date: 'Mar 08, 2026',
      category: 'Marketing',
    },
    {
      title: 'Scaling Operations: From Solo Practitioner to Clinic Director',
      excerpt: 'How to build the systems and team needed to step away from the treatment room and lead your business.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
      author: 'Michael Ross',
      date: 'Mar 02, 2026',
      category: 'Operations',
    },
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Insights & Strategy</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Latest from the <span className="text-primary italic">Visionary Blog.</span>
            </h2>
            <p className="text-xl text-slate-600">
              Strategic advice for the modern wellness practice owner.
            </p>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[32px] mb-6 aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.date}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-slate-600 leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
