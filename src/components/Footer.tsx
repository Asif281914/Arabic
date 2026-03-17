import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">V</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                The Visionary Clinic
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-xs">
              Strategic growth and business consulting exclusively for established wellness practices.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary transition-colors">Growth Audit</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Strategic Roadmap</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Practice Optimization</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Patient Acquisition</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <span>strategy@visionaryclinic.com</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <span>123 Strategy Ave, Suite 500<br />Austin, TX 78701</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:row items-center justify-between gap-6 text-sm">
          <p>© {currentYear} The Visionary Clinic. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
