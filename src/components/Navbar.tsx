
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-navy">
          Rox<span className="text-orange">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-navy hover:text-orange transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-navy hover:text-orange transition-colors">About</button>
          <button onClick={() => scrollToSection('services')} className="text-navy hover:text-orange transition-colors">Services</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-navy hover:text-orange transition-colors">Portfolio</button>
          <button onClick={() => scrollToSection('contact')} className="text-navy hover:text-orange transition-colors">Contact</button>
          <Button onClick={() => scrollToSection('contact')} className="bg-orange text-white hover:bg-orange/90">
            Hire Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-navy focus:outline-none"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-navy hover:text-orange transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-navy hover:text-orange transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="text-navy hover:text-orange transition-colors">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-navy hover:text-orange transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('contact')} className="text-navy hover:text-orange transition-colors">Contact</button>
            <Button onClick={() => scrollToSection('contact')} className="bg-orange text-white hover:bg-orange/90 w-full">
              Hire Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
