import React from 'react';
import { Calendar, Users, Award, Clock, Code2, Lightbulb, Rocket, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
/*hello*/
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

  const highlights = [
    {
      icon: <Code2 className="h-6 w-6" />,
      text: "Learn New Technologies"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      text: "Innovate & Create"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      text: "Launch Your Ideas"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      text: "Win Exciting Prizes"
    }
  ];

  return (
    <div id="about" className="py-20 bg-transparent relative overflow-hidden">
      {/* Removed background gradient elements */}
      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The First <span className="text-gradient">Rajarshi Janak University Hackathon</span> Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            RJU HackFest 1.0 is the first-ever hackathon at our university where students from all faculties can collaborate,
            innovate, and turn their ideas into reality. This 36-hour event brings together participants, mentors, and industry professionals.
          </p>
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-hackathon-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className="mb-2 text-hackathon-primary group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <span className="text-sm font-medium text-center">{highlight.text}</span>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
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
