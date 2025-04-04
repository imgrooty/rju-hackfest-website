
import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Prizes from "@/components/Prizes";
import Team from "@/components/Team";
import RegisterForm from "@/components/RegisterForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { initScrollAnimations } from "@/utils/scrollAnimations";
import Scene3D from "@/components/Scene3D";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "RJU HACKFEST 1.0";
    
    // Initialize scroll animations
    initScrollAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-background/0 z-[-2]">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-hackathon-primary/20 filter blur-3xl opacity-50 animate-float blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-hackathon-secondary/20 filter blur-3xl opacity-50 animate-float delay-1000 blob"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-hackathon-light/10 filter blur-xl opacity-30 animate-pulse-slow blob"></div>
      </div>
      
      <Navbar />
      <div className="relative z-0">
        <Hero />
        <Scene3D />
        <About />
        <Schedule />
        <Prizes />
        <Team />
        <RegisterForm />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
