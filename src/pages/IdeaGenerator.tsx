
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectIdeaGenerator from "@/components/ProjectIdeaGenerator";

const IdeaGenerator: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-background/0 z-[-2]">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-hackathon-primary/20 filter blur-3xl opacity-50 animate-float blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-hackathon-secondary/20 filter blur-3xl opacity-50 animate-float delay-1000 blob"></div>
      </div>
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Project Idea Generator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Need inspiration for your hackathon project? Let our AI assistant help you generate innovative ideas
            tailored to your interests and skills.
          </p>
        </div>

        <ProjectIdeaGenerator />
        
        <div className="mt-16 text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 bg-muted hover:bg-muted/80 text-foreground font-medium rounded-lg transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default IdeaGenerator;
