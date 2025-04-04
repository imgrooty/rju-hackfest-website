
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock } from "lucide-react";

const Schedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState('day1');
  
  const day1Schedule = [
    { time: '08:00 AM - 09:00 AM', event: 'Registration & Breakfast', description: 'Check-in and enjoy breakfast before the event begins.' },
    { time: '09:00 AM - 09:30 AM', event: 'Inauguration & Keynote Speech', description: 'Official kick-off with welcome address and keynote.' },
    { time: '09:30 AM - 10:00 AM', event: 'Team Introductions & Networking', description: 'Teams introduce themselves and network with other participants.' },
    { time: '10:00 AM - 10:15 AM', event: 'Problem Statements Unveiled', description: 'Hackathon challenges and problem statements are revealed.' },
    { time: '10:15 AM - 12:00 PM', event: 'Hacking Begins, Mentorship Sessions', description: 'Teams start coding with mentor support available.' },
    { time: '12:00 PM - 01:00 PM', event: 'Lunch Break', description: 'Break for lunch and quick team discussions.' },
    { time: '01:00 PM - 05:00 PM', event: 'Continued Coding & Mentorship', description: 'Teams continue working on their projects with mentorship.' },
    { time: '05:00 PM - 06:00 PM', event: 'Snacks Break', description: 'Refresh with snacks and beverages.' },
    { time: '06:00 PM - 08:00 PM', event: 'Continued Coding & Mentorship', description: 'Further development with mentor guidance.' },
    { time: '08:00 PM - 09:00 PM', event: 'Dinner Break', description: 'Dinner and networking.' },
    { time: '09:00 PM - 12:00 AM', event: 'Night Coding & Check-ins', description: 'Teams continue working with periodic check-ins from mentors.' },
  ];
  
  const day2Schedule = [
    { time: '12:00 AM - 08:00 AM', event: 'Overnight Hacking', description: 'Teams continue working through the night.' },
    { time: '08:00 AM - 09:00 AM', event: 'Breakfast & Progress Check', description: 'Morning breakfast and project progress review.' },
    { time: '09:00 AM - 12:00 PM', event: 'Final Coding Phase & Debugging', description: 'Teams complete their projects and fix any issues.' },
    { time: '12:00 PM - 01:00 PM', event: 'Lunch Break', description: 'Final lunch break before presentations.' },
    { time: '01:00 PM - 03:00 PM', event: 'Presentation Preparation and Snacks', description: 'Teams prepare their presentations while enjoying snacks.' },
    { time: '03:00 PM - 05:00 PM', event: 'Project Pitches to Judges', description: 'Teams present their solutions to the judges.' },
    { time: '05:00 PM - 06:00 PM', event: 'Awards & Closing Ceremony', description: 'Winners announced and closing remarks.' },
  ];

  return (
    <div id="schedule" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Event Schedule</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our 36-hour hackathon is packed with coding, mentorship, and fun. Here's what to expect:
          </p>
        </div>
        
        <Tabs defaultValue="day1" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="day1">Day 1</TabsTrigger>
            <TabsTrigger value="day2">Day 2</TabsTrigger>
          </TabsList>
          
          <TabsContent value="day1" className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center">Day 1: Kickoff & Initial Development</h3>
            <div className="space-y-6">
              {day1Schedule.map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col sm:flex-row rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="sm:w-1/3 mb-2 sm:mb-0">
                    <div className="flex items-center text-hackathon-primary">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-medium">{item.time}</span>
                    </div>
                  </div>
                  <div className="sm:w-2/3">
                    <h4 className="text-lg font-semibold">{item.event}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="day2" className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center">Day 2: Intensive Development & Presentations</h3>
            <div className="space-y-6">
              {day2Schedule.map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col sm:flex-row rounded-lg p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="sm:w-1/3 mb-2 sm:mb-0">
                    <div className="flex items-center text-hackathon-primary">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="font-medium">{item.time}</span>
                    </div>
                  </div>
                  <div className="sm:w-2/3">
                    <h4 className="text-lg font-semibold">{item.event}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Schedule;
