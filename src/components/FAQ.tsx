
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <div id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                <AccordionContent className="text-gray-700 pt-2 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 p-6 bg-hackathon-dark text-white rounded-lg max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
          <p className="mb-6">Contact us and we'll get back to you as soon as possible.</p>
          <a 
            href="mailto:info@rjuhackfest.com" 
            className="inline-flex items-center px-6 py-3 bg-hackathon-primary hover:bg-hackathon-secondary text-white font-medium rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
