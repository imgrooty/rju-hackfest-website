
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 pt-16 z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-hackathon-primary/20 text-hackathon-light mb-6">
              <span className="flex items-center text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                Coming Soon!
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              RJU <span className="text-gradient animate-pulse-slow">HACK</span>FEST 1.0
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
              The first-ever hackathon at Rajarshi Janak University. Join us for 36 hours of coding, innovation, and fun!
            </p>
            <div className="space-x-4">
              <Button className="bg-hackathon-primary hover:bg-hackathon-secondary text-white px-8 py-6 tilt-card"
                      onClick={() => document.getElementById('register')?.scrollIntoView({behavior: 'smooth'})}>
                Register Now
              </Button>
              <Button variant="outline" className="border-hackathon-light text-hackathon-light hover:bg-hackathon-light/10"
                      onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}>
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-8">
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-hackathon-primary text-3xl font-bold">28-32</span>
                <span className="text-muted-foreground">Participants</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-hackathon-primary text-3xl font-bold">36</span>
                <span className="text-muted-foreground">Hours</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-hackathon-primary text-3xl font-bold">NPR 30K</span>
                <span className="text-muted-foreground">In Prizes</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg perspective">
            <div className="relative transform-3d">
              <div className="w-full h-full rounded-xl overflow-hidden animate-fade-in">
                <div className="tilt-card transform-3d">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1470&q=80" 
                    alt="Hackathon Participants" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 glass-morphism rounded-lg p-4 text-white animate-pulse-slow">
                <p className="text-lg font-medium">Mark your calendar!</p>
                <p className="text-sm opacity-90">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
          className="flex flex-col items-center text-muted-foreground hover:text-hackathon-primary transition-colors"
        >
          <span className="text-sm mb-1">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
