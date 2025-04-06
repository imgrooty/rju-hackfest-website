
import React, { useState } from 'react';
import { generateProjectIdea } from '@/services/aiService';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Lightbulb, Code, Rocket, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface IdeaResult {
  title: string;
  description: string;
  outline: string[];
  technologies: string[];
  challenges: string[];
}

const ProjectIdeaGenerator: React.FC = () => {
  const [theme, setTheme] = useState<string>("");
  const [technology, setTechnology] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<IdeaResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    try {
      const response = await generateProjectIdea({
        theme,
        technology,
        difficulty
      });
      
      setResult(response);
      toast.success("Project idea generated successfully!");
    } catch (error) {
      console.error("Failed to generate idea:", error);
      toast.error("Failed to generate idea. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-hackathon-primary" />
            Generate Project Idea
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="theme">Project Theme (Optional)</Label>
                <Input
                  id="theme"
                  placeholder="e.g. Sustainability, Healthcare"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="technology">Technology Focus (Optional)</Label>
                <Input
                  id="technology"
                  placeholder="e.g. React, AI, Mobile"
                  value={technology}
                  onChange={(e) => setTechnology(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="difficulty">Difficulty Level</Label>
                <Select
                  value={difficulty}
                  onValueChange={setDifficulty}
                >
                  <SelectTrigger id="difficulty">
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Project Idea
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {result && (
        <Card className="overflow-hidden border-t-4 border-t-hackathon-primary animate-fade-in">
          <CardHeader className="bg-muted/50">
            <CardTitle className="text-2xl">{result.title}</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-hackathon-primary" />
                  Description
                </h3>
                <p className="mt-2 text-muted-foreground">{result.description}</p>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-lg font-semibold flex items-center">
                  <Rocket className="h-5 w-5 mr-2 text-hackathon-primary" />
                  Project Outline
                </h3>
                <ul className="mt-2 space-y-2 list-disc pl-5">
                  {result.outline.map((step, index) => (
                    <li key={index} className="text-muted-foreground">{step}</li>
                  ))}
                </ul>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold flex items-center">
                    <Code className="h-5 w-5 mr-2 text-hackathon-primary" />
                    Suggested Technologies
                  </h3>
                  <ul className="mt-2 space-y-1 list-disc pl-5">
                    {result.technologies.map((tech, index) => (
                      <li key={index} className="text-muted-foreground">{tech}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold">Potential Challenges</h3>
                  <ul className="mt-2 space-y-1 list-disc pl-5">
                    {result.challenges.map((challenge, index) => (
                      <li key={index} className="text-muted-foreground">{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-muted/30 flex justify-between">
            <Button variant="outline" onClick={() => setResult(null)}>
              Start Over
            </Button>
            <Button>
              Save Idea
            </Button>
          </CardFooter>
        </Card>
      )}
      
      <div className="mt-8 p-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground text-center">
          This AI assistant generates project ideas based on your inputs. The ideas are meant to inspire your creativity 
          and serve as starting points for your hackathon project. Feel free to modify and expand upon them!
        </p>
      </div>
    </div>
  );
};

export default ProjectIdeaGenerator;
