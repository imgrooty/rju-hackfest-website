
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Team: React.FC = () => {
  const teams = [
    {
      name: "Organizing Team",
      members: [
        { name: "Co-ordinator", role: "Core Organizing Committee" },
        { name: "Student Lead", role: "Core Organizing Committee" },
        { name: "Venue and Logistics Manager", role: "Core Organizing Committee" },
        { name: "Media and Tech Manager", role: "Core Organizing Committee" },
      ]
    },
    // {
    //   name: "Organizing Team",
    //   members: [
    //     { name: "Student Lead", role: "Core Organizing Committee" },
    //     { name: "Industry Advisor", role: "Core Organizing Committee" },
    //   ]
    // },
    // {
    //   name: "Subcommittees",
    //   members: [
    //     { name: "Venue & Logistics", role: "Venue setup & internet coordination" },
    //     { name: "Promotion & Outreach", role: "Social media & branding" },
    //     { name: "Judging & Mentorship", role: "Recruiting judges & mentors" },
    //     { name: "Participant Management", role: "Registration & communication" },
    //   ]
    // },
    {
      name: "Mentors & Judges",
      members: [
        { name: "Industry Professionals", role: "Providing guidance to teams" },
        { name: "Academic Experts", role: "Evaluating projects" },
      ]
    },
  ];

  return (
    <div id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated individuals who are making RJU HackFest possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <Card key={index} className="shadow-md overflow-hidden">
              <div className="h-2 bg-hackathon-primary"></div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">{team.name}</h3>
                <div className="space-y-4">
                  {team.members.map((member, mIndex) => (
                    <div key={mIndex} className="flex items-center p-3 bg-muted rounded-lg">
                      <div className="flex-shrink-0 w-10 h-10 bg-hackathon-primary/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-hackathon-primary font-bold">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold">{member.name}</h4>
                        <p className="text-muted-foreground text-sm">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Want to be part of the organizing team?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're looking for passionate volunteers to help make this event a success.
            If you're interested in being part of our team, get in touch!
          </p>
          <a 
            href="mailto:contact@rjuhackfest.com" 
            className="inline-flex items-center px-6 py-3 bg-hackathon-primary hover:bg-hackathon-secondary text-white font-medium rounded-lg transition-colors"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
