
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-navy text-white flex items-center overflow-hidden">
      {/* Background decorative elements with improved design */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-orange opacity-5 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-64 h-64 rounded-full bg-skyblue opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-skyblue opacity-5 blur-2xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-orange opacity-5 blur-3xl"></div>
      </div>

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwYy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2IDYtMi42ODYgNi02LTIuNjg2LTYtNi02eiIgc3Ryb2tlPSIjZmZmZmZmMTAiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0yNCA2MGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwYy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2IDYtMi42ODYgNi02LTIuNjg2LTYtNi02eiIgc3Ryb2tlPSIjZmZmZmZmMTAiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0yNCAzMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAwYy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2IDYtMi42ODYgNi02LTIuNjg2LTYtNi02eiIgc3Ryb2tlPSIjZmZmZmZmMTAiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>

      <div className="container mx-auto px-4 md:px-8 py-16 md:py-0 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 mb-10 md:mb-0 z-10">
          <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange/20 to-orange/10 backdrop-blur-sm border border-orange/20 mb-4 animate-fade-in opacity-0" style={{animationDelay: '0.2s'}}>
            <p className="text-sm text-white/90 font-medium">Hello, I'm</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in opacity-0" style={{animationDelay: '0.4s'}}>
            Rox <span className="text-orange">.</span>
          </h1>
          
          <div className="relative h-12 mb-8 overflow-hidden animate-fade-in opacity-0" style={{animationDelay: '0.6s'}}>
            <div className="absolute animate-slide-in opacity-0" style={{animationDelay: '0.8s'}}>
              <h2 className="text-xl md:text-2xl font-medium">
                Website & Android App Developer <span className="text-orange">|</span> WordPress Plugin Expert
              </h2>
            </div>
          </div>
          
          <p className="text-lg mb-10 max-w-lg text-white/80 animate-fade-in opacity-0" style={{animationDelay: '1s'}}>
            I build high‑performance websites, custom WordPress plugins, and Android apps that scale with your business needs.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{animationDelay: '1.2s'}}>
            <Button 
              onClick={() => scrollToSection('portfolio')} 
              className="bg-orange hover:bg-orange/90 text-white px-8 py-6 rounded-full group"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('contact')} 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 py-6 backdrop-blur-sm rounded-full"
            >
              Let's Talk
            </Button>
          </div>
          
          {/* Stats section with improved visibility on white background */}
          <div className="flex gap-6 mt-12 animate-fade-in opacity-0 relative z-20" style={{animationDelay: '1.4s'}}>
            <div className="bg-navy/90 p-3 rounded-lg backdrop-blur-sm">
              <p className="text-3xl font-bold text-orange">50+</p>
              <p className="text-sm text-white">Websites</p>
            </div>
            <div className="bg-navy/90 p-3 rounded-lg backdrop-blur-sm">
              <p className="text-3xl font-bold text-orange">30+</p>
              <p className="text-sm text-white">Plugins</p>
            </div>
            <div className="bg-navy/90 p-3 rounded-lg backdrop-blur-sm">
              <p className="text-3xl font-bold text-orange">10K+</p>
              <p className="text-sm text-white">App Downloads</p>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center animate-fade-in opacity-0" style={{animationDelay: '1.2s'}}>
          <div className="relative">
            {/* Glowing effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange to-skyblue rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-orange/40 to-skyblue/40 rounded-full blur-3xl opacity-20"></div>
            
            {/* Image with frame */}
            <div className="relative bg-gradient-to-br from-orange/20 to-skyblue/20 p-1 rounded-full backdrop-blur-sm border border-white/10">
              <img 
                src="/placeholder.svg" 
                alt="Rox Professional" 
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -right-4 top-10 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full animate-bounce shadow-lg">
              <p className="text-sm font-medium">9+ Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration with improved styling */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L48 105C96 90 192 60 288 50C384 40 480 50 576 55C672 60 768 60 864 65C960 70 1056 80 1152 80C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="white"/>
        </svg>
      </div>

      {/* Mouse scroll indicator */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce hidden md:flex">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/80 rounded-full"></div>
        </div>
        <p className="text-xs text-white/50 mt-2">Scroll</p>
      </div>
    </section>
  );
};

export default HeroSection;
