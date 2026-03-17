import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Contact Us</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight text-balance">
              Let’s Find the <span className="text-primary">Holes in Your Bucket.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Ready to stop guessing and start growing? Reach out to schedule your strategy session or ask us a question about our growth audits.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-600">strategy@visionaryclinic.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                  <p className="text-slate-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Visit Our Office</h4>
                  <p className="text-slate-600">123 Strategy Ave, Suite 500<br />Austin, TX 78701</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 lg:p-12 rounded-[40px] border border-slate-100 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Dr. Jane Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Practice Name</label>
                  <input
                    type="text"
                    placeholder="Wellness Center"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="jane@wellness.com"
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">How can we help?</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your practice growth goals..."
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>
              
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-secondary transition-all shadow-lg flex items-center justify-center gap-3 group">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
