import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ResultsSection from './components/ResultsSection';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import CTASection from './components/CTASection';
import BlogPreview from './components/BlogPreview';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <SolutionSection />
        <ResultsSection />
        <AboutSection />
        <div id="testimonials">
          <Testimonials />
        </div>
        <Services />
        <HowItWorks />
        <CTASection />
        <BlogPreview />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
