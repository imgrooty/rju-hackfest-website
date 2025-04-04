
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const RegisterForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Registration submitted!",
        description: "We'll contact you with further instructions soon.",
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <div id="register" className="py-20 bg-gradient-to-b from-hackathon-dark to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Register Now</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join us for an unforgettable hackathon experience. Spots are limited!
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="team-name">Team Name</Label>
                  <Input id="team-name" placeholder="Enter your team name" required />
                </div>
                
                <div>
                  <Label htmlFor="leader-name">Team Leader's Full Name</Label>
                  <Input id="leader-name" placeholder="Enter team leader's name" required />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="members">Team Members (3-4 members)</Label>
                  <Textarea
                    id="members"
                    placeholder="List each member's name, email, and gender. Remember to include at least one female member."
                    rows={4}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="project-idea">Project Idea (Optional)</Label>
                  <Textarea
                    id="project-idea"
                    placeholder="Briefly describe your project idea if you already have one"
                    rows={3}
                  />
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" required />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="terms"
                      className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the event rules and code of conduct
                    </Label>
                  </div>
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-hackathon-primary hover:bg-hackathon-secondary" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Register Your Team"}
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                Registration deadline: One week before the event
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterForm;
