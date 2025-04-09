
import React from 'react';
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Prizes: React.FC = () => {
  const prizeData = [
    {
      title: "First Place",
      amount: "NPR 15,000",
      description: "Awarded to the team with the most innovative and well-executed solution.",
      color: "bg-gradient-to-r from-yellow-400 to-yellow-300",
      position: "1st"
    },
    {
      title: "Second Place",
      amount: "NPR 10,000",
      description: "For the runner-up team with an exceptional project.",
      color: "bg-gradient-to-r from-gray-400 to-gray-300",
      position: "2nd"
    },
    {
      title: "Special Awards",
      amount: "NPR 5,000",
      description: "For outstanding achievements in specific categories.",
      color: "bg-gradient-to-r from-amber-700 to-amber-600",
      position: "Special"
    },
  ];

  return (
    <div id="prizes" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Prizes & Rewards</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compete for amazing prizes and recognition for your innovative solutions!
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {prizeData.map((prize, index) => (
            <div key={index} className="w-full sm:w-72">
              <Card className="relative h-full transition-transform hover:-translate-y-2 border-none overflow-hidden shadow-lg">
                <div className={`absolute top-0 left-0 w-full h-1 ${prize.color}`}></div>
                <CardContent className="pt-8 pb-6 px-6 flex flex-col items-center text-center h-full">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${prize.color}`}>
                    <span className="text-white font-bold text-xl">{prize.position}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{prize.title}</h3>
                  <div className="text-3xl font-bold text-hackathon-primary mb-4">{prize.amount}</div>
                  <p className="text-muted-foreground flex-grow">{prize.description}</p>
                  <Award className="mt-6 text-hackathon-primary h-6 w-6" />
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
