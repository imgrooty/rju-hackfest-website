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
