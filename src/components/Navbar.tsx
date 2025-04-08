
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import ThemeSwitcher from './ThemeSwitcher';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Schedule", href: "/#schedule" },
    { name: "Prizes", href: "/#prizes" },
    { name: "Team", href: "/#team" },
    { name: "FAQ", href: "/#faq" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.split('#')[1];
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  
  const isScrolled = scrollPosition > 10;
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-300 z-50",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-foreground">
            RJU <span className="text-hackathon-primary">HackFest</span><span className="text-xs ml-1 text-hackathon-light">1.0</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Button 
              key={link.name} 
              variant="ghost"
              className="hover:bg-muted"
              asChild
            >
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>{link.name}</a>
            </Button>
          ))}
          
          <div className="ml-2">
            <ThemeSwitcher />
          </div>
          
          <Button asChild className="ml-2 bg-hackathon-primary hover:bg-hackathon-secondary text-white">
            <a href="#register" onClick={(e) => handleNavClick(e, "#register")}>Register Now</a>
          </Button>
        </div>
        
        {/* Mobile Navigation Button */}
        <div className="flex items-center md:hidden space-x-2">
          <ThemeSwitcher />
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-2 px-4 text-foreground hover:bg-muted rounded-md"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="py-2 px-4">
              <Button asChild className="w-full bg-hackathon-primary hover:bg-hackathon-secondary">
                <a href="#register" onClick={(e) => handleNavClick(e, "#register")}>Register Now</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
