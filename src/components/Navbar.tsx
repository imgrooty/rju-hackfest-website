
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, Calendar } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-hackathon-dark/90 backdrop-blur-md py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a 
              href="#" 
              className="font-bold text-2xl text-white flex items-center"
            >
              <span className="text-hackathon-primary">RJU</span>
              <span className="mx-1">HACK</span>
              <span className="text-hackathon-primary">FEST</span>
              <span className="text-xs ml-1 text-hackathon-light">1.0</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="#about" 
              className="text-white hover:text-hackathon-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#schedule" 
              className="text-white hover:text-hackathon-primary transition-colors"
            >
              Schedule
            </a>
            <a 
              href="#prizes" 
              className="text-white hover:text-hackathon-primary transition-colors"
            >
              Prizes
            </a>
            <a 
              href="#team" 
              className="text-white hover:text-hackathon-primary transition-colors"
            >
              Team
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-hackathon-primary transition-colors"
            >
              FAQ
            </a>
            <Button 
              className="ml-4 bg-hackathon-primary hover:bg-hackathon-secondary text-white"
              onClick={() => document.getElementById('register')?.scrollIntoView({behavior: 'smooth'})}
            >
              Register Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-white hover:text-hackathon-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#schedule" 
                className="text-white hover:text-hackathon-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Schedule
              </a>
              <a 
                href="#prizes" 
                className="text-white hover:text-hackathon-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Prizes
              </a>
              <a 
                href="#team" 
                className="text-white hover:text-hackathon-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </a>
              <a 
                href="#faq" 
                className="text-white hover:text-hackathon-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <Button 
                className="bg-hackathon-primary hover:bg-hackathon-secondary text-white"
                onClick={() => {
                  document.getElementById('register')?.scrollIntoView({behavior: 'smooth'});
                  setIsMobileMenuOpen(false);
                }}
              >
                Register Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
