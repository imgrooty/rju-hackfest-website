
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
    <div id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1470&q=80"
              alt="Hackathon coding"
              className="rounded-xl shadow-xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The First <span className="text-hackathon-primary">University Hackathon</span> Experience
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              RJU HackFest 1.0 is the first-ever hackathon at our university where students from all faculties can collaborate,
              innovate, and turn their ideas into reality. This 36-hour event brings together participants, mentors, and industry professionals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="card-hover border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
