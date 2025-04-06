
import { toast } from "sonner";

interface IdeaRequest {
  theme?: string;
  technology?: string;
  difficulty?: string;
}

interface IdeaResponse {
  title: string;
  description: string;
  outline: string[];
  technologies: string[];
  challenges: string[];
}

// This is a placeholder API URL - we'd use a more secure approach in production
const API_URL = "https://api.nemotron.ai/generate";

export async function generateProjectIdea(request: IdeaRequest): Promise<IdeaResponse> {
  try {
    const prompt = `Generate a hackathon project idea with the following details:
      ${request.theme ? `Theme: ${request.theme}` : 'Any theme'}
      ${request.technology ? `Technology focus: ${request.technology}` : 'Any technology'}
      ${request.difficulty ? `Difficulty level: ${request.difficulty}` : 'Intermediate difficulty'}
      
      Please provide a response in the following JSON format:
      {
        "title": "Project title",
        "description": "A short description of the project",
        "outline": ["Step 1: ...", "Step 2: ...", "Step 3: ..."],
        "technologies": ["Tech 1", "Tech 2", "Tech 3"],
        "challenges": ["Challenge 1", "Challenge 2", "Challenge 3"]
      }`;

    // In a real implementation, we would use a backend API to securely make this request
    // This is just a placeholder to show how it might work
    console.log("Generating idea with prompt:", prompt);
    
    // For demo purposes, we'll simulate a response
    // In production, this would be a real API call:
    // const response = await fetch(API_URL, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${apiKey}`
    //   },
    //   body: JSON.stringify({ prompt })
    // });
    // const data = await response.json();
    
    // Simulated delay and response for demonstration
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulated response
    const mockResponse: IdeaResponse = {
      title: `${request.theme || 'Innovative'} ${request.technology || 'Tech'} Solution`,
      description: `A ${request.difficulty || 'intermediate'} level project that helps users solve real-world problems using ${request.technology || 'modern technology'}.`,
      outline: [
        "Define the problem and target users",
        "Create wireframes and design mockups",
        "Implement core functionality",
        "Add user authentication",
        "Test and refine the solution",
        "Prepare presentation and demo"
      ],
      technologies: [
        request.technology || "React",
        "TailwindCSS",
        "Node.js",
        "Database solution",
        "API integration"
      ],
      challenges: [
        "Implementing real-time features",
        "Ensuring accessibility for all users",
        "Optimizing for mobile devices",
        "Handling edge cases gracefully"
      ]
    };
    
    return mockResponse;
    
  } catch (error) {
    console.error("Error generating project idea:", error);
    toast.error("Failed to generate project idea. Please try again.");
    throw error;
  }
}
