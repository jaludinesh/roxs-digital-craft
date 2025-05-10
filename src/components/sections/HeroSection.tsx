
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-navy text-white flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-orange opacity-50"></div>
      <div className="absolute bottom-1/4 right-20 w-12 h-12 rounded-full bg-skyblue opacity-30"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-skyblue opacity-20"></div>
      <div className="absolute bottom-1/3 left-1/4 w-10 h-10 rounded-full bg-orange opacity-10"></div>

      <div className="container mx-auto px-4 md:px-8 py-16 md:py-0 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0 z-10">
          <p className="text-orange mb-2 animate-fade-in opacity-0" style={{animationDelay: '0.2s'}}>Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in opacity-0" style={{animationDelay: '0.4s'}}>
            Rox <span className="text-orange">.</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 animate-fade-in opacity-0" style={{animationDelay: '0.6s'}}>
            Website & Android App Developer <span className="text-orange">|</span> WordPress Plugin Expert
          </h2>
          <p className="text-lg mb-8 max-w-lg animate-fade-in opacity-0" style={{animationDelay: '0.8s'}}>
            I build high‑performance websites, custom WordPress plugins, and Android apps that scale.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{animationDelay: '1s'}}>
            <Button 
              onClick={() => scrollToSection('portfolio')} 
              className="bg-orange hover:bg-orange/90 text-white px-8 py-6"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-navy px-8 py-6"
            >
              Let's Talk
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-fade-in opacity-0" style={{animationDelay: '1.2s'}}>
          <div className="relative">
            <div className="absolute inset-0 bg-orange rounded-full blur-3xl opacity-20"></div>
            <img 
              src="/placeholder.svg" 
              alt="Rox Professional" 
              className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L48 105C96 90 192 60 288 50C384 40 480 50 576 55C672 60 768 60 864 65C960 70 1056 80 1152 80C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
