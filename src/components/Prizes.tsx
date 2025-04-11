import React, { useState } from 'react';
import { Award, Crown, Trophy, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Prizes: React.FC = () => {
  const [activePrize, setActivePrize] = useState<number | null>(null);

  const prizeData = [
    {
      title: "First Place",
      amount: "NPR 15,000",
      description: "Awarded to the team with the most innovative and well-executed solution.",
      color: "from-yellow-400 to-yellow-300",
      position: "1st",
      icon: <Crown className="h-5 w-5 text-white" />,
      features: [
        "Cash Prize",
        "Premium Swag Kit",
        "Mentorship Program",
        "Interview Opportunities"
      ]
    },
    {
      title: "Second Place",
      amount: "NPR 10,000",
      description: "For the runner-up team with an exceptional project.",
      color: "from-gray-400 to-gray-300",
      position: "2nd",
      icon: <Trophy className="h-5 w-5 text-white" />,
      features: [
        "Cash Prize",
        "Developer Swag Kit",
        "Mentorship Program",
        "Interview Opportunities"
      ]
    },
    {
      title: "Special Awards",
      amount: "NPR 5,000",
      description: "For outstanding achievements in specific categories.",
      color: "from-amber-700 to-amber-600",
      position: "Special",
      icon: <Medal className="h-5 w-5 text-white" />,
      features: [
        "Cash Prize",
        "Developer Swag Kit",
        "Special Recognition",
        "Interview Opportunities"
      ]
    },
  ];

  return (
    <div id="prizes" className="py-16 bg-transparent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-hackathon-primary/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-hackathon-secondary/5 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Amazing <span className="text-gradient">Prizes & Rewards</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Compete for exciting prizes and recognition for your innovative solutions!
          </p>
        </div>
        
        {/* Prize Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {prizeData.map((prize, index) => (
            <div 
              key={index} 
              className="group"
              onMouseEnter={() => setActivePrize(index)}
              onMouseLeave={() => setActivePrize(null)}
            >
              <Card className={`relative h-full transition-all duration-500 ease-in-out border-none overflow-hidden shadow-lg ${
                activePrize === index 
                  ? 'shadow-2xl scale-105 z-10' 
                  : activePrize !== null 
                    ? 'opacity-70 scale-95' 
                    : ''
              }`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${prize.color}`}></div>
                <div className={`absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl ${prize.color} opacity-20 rounded-bl-full transition-opacity duration-500 ${
                  activePrize === index ? 'opacity-40' : ''
                }`}></div>
                
                <CardContent className="pt-4 pb-3 px-4 flex flex-col items-center text-center h-full">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-gradient-to-r ${prize.color} transition-transform duration-500 ${
                    activePrize === index ? 'scale-110' : ''
                  }`}>
                    {prize.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold mb-1 transition-colors duration-300">
                    {prize.title}
                  </h3>
                  
                  <div className="text-xl font-bold text-hackathon-primary mb-2 transition-transform duration-300">
                    {prize.amount}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2 flex-grow">
                    {prize.description}
                  </p>
                  
                  {activePrize === index && (
                    <div className="w-full space-y-1.5 animate-fadeIn">
                      <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-hackathon-primary to-hackathon-secondary rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      
                      <ul className="text-left space-y-1">
                        {prize.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start">
                            <div className="flex-shrink-0 h-3.5 w-3.5 rounded-full bg-hackathon-primary/20 flex items-center justify-center mr-1.5 mt-0.5">
                              <svg className="h-2 w-2 text-hackathon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-xs">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <Award className={`mt-2 text-hackathon-primary h-4 w-4 transition-transform duration-500 ${
                    activePrize === index ? 'scale-110' : ''
                  }`} />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-secondary/40 dark:bg-secondary/20 rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">Participant Benefits</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hackathon-primary/30 flex items-center justify-center mr-3 mt-0.5">
                <svg className="h-4 w-4 text-hackathon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-muted-foreground">🌐 Access to Premium Tools & APIs</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hackathon-primary/30 flex items-center justify-center mr-3 mt-0.5">
                <svg className="h-4 w-4 text-hackathon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-muted-foreground">🧠 Workshops & Tech Talks</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hackathon-primary/30 flex items-center justify-center mr-3 mt-0.5">
                <svg className="h-4 w-4 text-hackathon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-muted-foreground">📓Exclusive hackathon T-shirts and merchandise</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hackathon-primary/30 flex items-center justify-center mr-3 mt-0.5">
                <svg className="h-4 w-4 text-hackathon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-muted-foreground">🤝Networking opportunities with industry professionals</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hackathon-primary/30 flex items-center justify-center mr-3 mt-0.5">
                <svg className="h-4 w-4 text-hackathon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-muted-foreground">📜Certificates of participation for all contestants</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hackathon-primary/30 flex items-center justify-center mr-3 mt-0.5">
                <svg className="h-4 w-4 text-hackathon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-muted-foreground">📸 Professional Event Photography</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-hackathon-primary/30 flex items-center justify-center mr-3 mt-0.5">
                <svg className="h-4 w-4 text-hackathon-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-muted-foreground">💬 Mentorship & Team Support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
