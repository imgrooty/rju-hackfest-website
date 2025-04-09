
import React from 'react';
import { Calendar, Users, Award, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About: React.FC = () => {
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

  return (
    <div id="about" className="py-20 bg-transparent relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 fade-in-left perspective">
            <div className="rotate-3d transform-3d">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1470&q=80"
                alt="Hackathon coding"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
          <div className="flex-1 fade-in-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The First <span className="text-gradient">University Hackathon</span> Experience
            </h2>
            <p className="text-lg mb-8">
              RJU HackFest 1.0 is the first-ever hackathon at our university where students from all faculties can collaborate,
              innovate, and turn their ideas into reality. This 36-hour event brings together participants, mentors, and industry professionals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="card-hover border-none shadow-md animate-on-scroll tilt-card dark:bg-secondary/30 backdrop-blur-sm" style={{ transitionDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-10 right-0 w-full overflow-hidden z-[-1] h-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="currentColor" fillOpacity="0.1" d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,96C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default About;
