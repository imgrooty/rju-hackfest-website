
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

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "RJU HACKFEST 1.0";
  }, []);

  return (
    <div className="min-h-screen bg-hackathon-dark">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Prizes />
      <Team />
      <RegisterForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
