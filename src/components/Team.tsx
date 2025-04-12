import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Team: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

  const teams = [
    {
      name: "Organizing Team",
      members: [
        {
          post: "Hackathon Director",
          name: "Brikhesh Choudhary",
          role: "Core Organizing Committee",
          image: "brikhesh.jpeg",
          bio: "Leading the vision and direction of RJU HackFest 1.0, ensuring a successful event.",
          social: {
            linkedin: "#",
            github: "#",
            twitter: "#",
            email: "director@example.com"
          }
        },
        {
          post: "Hackathon Co-ordinator",
          name: "Sanjana Yadav",
          role: "Core Organizing Committee",
          image: "sanjana.jpg",
          bio: "Coordinating all aspects of the hackathon, from planning to execution.",
          social: {
            linkedin: "#",
            github: "#",
            twitter: "#",
            email: "coordinator@example.com"
          }
        },
        {
          post: "Venue and Logistics Manager",
          name: "Sushmita Sah",
          image: "sushmita.jpeg",
          role: "Core Organizing Committee",
          bio: "Managing venue arrangements, equipment, and all logistical aspects of the event.",
          social: {
            linkedin: "#",
            github: "#",
            twitter: "#",
            email: "logistics@example.com"
          }
        },
        {
          post: "Media and Tech Manager",
          name: "Bikram Sharma",
          image: "bikram.jpg",
          role: "Core Organizing Committee",
          bio: "Overseeing technical infrastructure, media coverage, and digital presence.",
          social: {
            linkedin: "#",
            github: "#",
            twitter: "#",
            email: "media@example.com"
          }
        },
      ]
    },
    {
      name: "Mentors & Judges",
      members: [
        {
          name: "Industry Professionals",
          role: "Providing guidance to teams",
          bio: "Experienced professionals from leading tech companies providing mentorship and guidance to participants.",
          social: {
            linkedin: "#",
            github: "#",
            twitter: "#",
            email: "mentors@example.com"
          }
        },
        {
          name: "Academic Experts",
          role: "Evaluating projects",
          bio: "Distinguished faculty members and academic experts evaluating projects and providing feedback.",
          social: {
            linkedin: "#",
            github: "#",
            twitter: "#",
            email: "judges@example.com"
          }
        },
      ]
    },
  ];

  return (
    <div id="team" className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-gradient">Amazing Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The dedicated individuals behind RJU HackFest 1.0 who are working tirelessly to make this event a success.
          </p>
        </div>

        <div className="space-y-16">
          {teams.map((team, teamIndex) => (
            <div key={teamIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-center">{team.name}</h3>
              <div className={`grid gap-4 ${teamIndex === 0 ? 'grid-cols-1 sm:grid-cols-2 grid-rows-2' : 'grid-cols-1 md:grid-cols-2'
                }`}>
                {team.members.map((member, memberIndex) => {
                  const isExpanded = expandedIndex === `${teamIndex}-${memberIndex}`;
                  const totalIndex = `${teamIndex}-${memberIndex}`;

                  return (
                    <div
                      key={memberIndex}
                      className={`transition-all duration-500 ease-in-out ${isExpanded
                          ? 'sm:row-span-2'
                          : expandedIndex !== null && expandedIndex !== totalIndex
                            ? 'opacity-50 scale-95'
                            : ''
                        }`}
                      onMouseEnter={() => setExpandedIndex(totalIndex)}
                      onMouseLeave={() => setExpandedIndex(null)}
                    >
                      <Card className={`h-full overflow-hidden border-blue shadow-lg transition-all duration-500 ${isExpanded ? 'shadow-2xl' : ''
                        }`}>
                        <div className="h-1 bg-hackathon-primary"></div>
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className={`flex-shrink-0 transition-all duration-500 ${isExpanded ? 'md:w-32 md:h-32' : 'w-16 h-16'
                              }`}>
                              <div className={`w-full h-full rounded-full overflow-hidden bg-hackathon-primary/20 flex items-center justify-center ${isExpanded ? 'border-4 border-hackathon-primary/30' : ''
                                }`}>
                                {member.image ? (
                                  <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <span className="text-hackathon-primary text-2xl font-bold">
                                    {member.name.charAt(0)}
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="flex-1">
                              <h4 className={`font-bold transition-all duration-500 ${isExpanded ? 'text-2xl mb-2' : 'text-xl'
                                }`}>
                                {member.post}
                              </h4>
                              <p className="text-hackathon-primary font-medium mb-2">{member.name}</p>

                              {isExpanded && (
                                <div className="mt-4 space-y-4 animate-fadeIn">
                                  <p className="text-muted-foreground">{member.bio}</p>

                                  <div className="flex gap-3 pt-2">
                                    <a href={member.social.linkedin} className="text-muted-foreground hover:text-hackathon-primary transition-colors">
                                      <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a href={member.social.github} className="text-muted-foreground hover:text-hackathon-primary transition-colors">
                                      <Github className="h-5 w-5" />
                                    </a>
                                    <a href={member.social.twitter} className="text-muted-foreground hover:text-hackathon-primary transition-colors">
                                      <Twitter className="h-5 w-5" />
                                    </a>
                                    <a href={`mailto:${member.social.email}`} className="text-muted-foreground hover:text-hackathon-primary transition-colors">
                                      <Mail className="h-5 w-5" />
                                    </a>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
