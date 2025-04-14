import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "Who can participate in RJU HACKFEST?",
      answer: "The hackathon is open to all university students. Teams should consist of 3-4 members, with at least one female member in each team."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in RJU HACKFEST is completely free. We provide meals, snacks, and a comfortable workspace throughout the event."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Participants should bring their laptops, chargers, any specific hardware needed for their projects, and personal items for an overnight stay."
    },
    {
      question: "Will there be food provided?",
      answer: "Yes, we will provide all meals including breakfast, lunch, dinner, and snacks throughout the hackathon."
    },
    {
      question: "How are the projects judged?",
      answer: "Projects will be judged based on innovation, technical complexity, design, functionality, and presentation. A panel of industry experts and academics will evaluate all submissions."
    },
    {
      question: "Can I start working on my project before the event?",
      answer: "No, all coding and development must be done during the hackathon. However, you can come prepared with ideas and plans."
    },
    {
      question: "Will there be mentors available during the hackathon?",
      answer: "Yes, we'll have experienced mentors from industry and academia available throughout the event to help teams with their projects."
    },
  ];

  return (
    <div id="faq" className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about RJU HACKFEST? Find answers to common queries below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 p-6 bg-card shadow-md text-card-foreground rounded-lg max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
          <p className="mb-6">Contact us and we'll get back to you as soon as possible.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:rjuhackfest@gmail.com" 
              className="inline-flex items-center px-6 py-3 bg-hackathon-primary hover:bg-hackathon-secondary text-white font-medium rounded-lg transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </a>
            <a 
              href="https://discord.gg/kbShsZuP8a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-medium rounded-lg transition-colors"
            >
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join Discord
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Discord Invite Code: <span className="font-mono bg-muted px-2 py-1 rounded">kbShsZuP8a</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
