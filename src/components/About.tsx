import React, { useEffect, useRef } from 'react';
import { Calendar, Users, Award, Clock, Code2, Lightbulb, Rocket, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
/*hello*/
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    gsap.fromTo(
      headerRef.current,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Highlights animation
    const highlightElements = highlightsRef.current?.children;
    if (highlightElements) {
      gsap.fromTo(
        highlightElements,
        {
          y: 50,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: highlightsRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Features animation
    const featureElements = featuresRef.current?.children;
    if (featureElements) {
      gsap.fromTo(
        featureElements,
        {
          x: (index) => (index % 2 === 0 ? -100 : 100),
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const features = [
    {
      icon: <Clock className="h-8 w-8 text-hackathon-primary" />,
      title: "36-Hour Challenge",
      description: "Intensive 2-day coding event where teams build innovative solutions."
    },
    {
      icon: <Users className="h-8 w-8 text-hackathon-primary" />,
      title: "Team Collaboration",
      description: "Form teams of 3-4 members with at least one female member."
    },
    {
      icon: <Award className="h-8 w-8 text-hackathon-primary" />,
      title: "Amazing Prizes",
      description: "Win up to NPR 15,000 for first place and other special awards."
    },
    {
      icon: <Calendar className="h-8 w-8 text-hackathon-primary" />,
      title: "Mentorship",
      description: "Get guidance from industry professionals and experts."
    }
  ];

  const highlights = [
    {
      icon: <Code2 className="h-6 w-6" />,
      text: "Learn New Technologies",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      text: "Innovate & Create",
      color: "from-amber-500 to-yellow-400"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      text: "Launch Your Ideas",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      text: "Win Exciting Prizes",
      color: "from-green-500 to-emerald-400"
    }
  ];

  return (
    <div id="about" ref={sectionRef} className="py-20 bg-transparent relative overflow-hidden">
      {/* Removed background gradient elements */}
      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The First <span className="text-gradient">Rajarshi Janak University Hackathon</span> Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          RJU HackFest 1.0 is the first-ever hackathon at our university organized under department of science and technology where students from faculties (BSc CSIT and BCA) can collaborate, innovate, and turn their ideas into reality. This 36-hour event brings together participants, mentors, and industry professionals.  </p>
        </div>

        {/* Highlights Section */}
        <div ref={highlightsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-transparent transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Glow effect background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
              
              {/* Glow effect border */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className={`mb-2 text-transparent bg-clip-text bg-gradient-to-r ${highlight.color} group-hover:scale-110 transition-transform duration-300`}>
                  {highlight.icon}
                </div>
                <span className="text-sm font-medium text-center group-hover:text-white transition-colors duration-300">{highlight.text}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-hackathon-primary/10 to-hackathon-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-6 relative">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-hackathon-primary/10 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-hackathon-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
