
import { toast } from "sonner";
import OpenAI from 'openai';

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

// Initialize the OpenAI client with NVIDIA's API endpoint
const openai = new OpenAI({
  apiKey: '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',
  baseURL: 'https://integrate.api.nvidia.com/v1',
});

export async function generateProjectIdea(request: IdeaRequest): Promise<IdeaResponse> {
  try {
    // Construct the prompt with the user's input
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

    console.log("Sending request to Nemotron API with prompt:", prompt);

    // Make the actual API call to NVIDIA Nemotron
    const completion = await openai.chat.completions.create({
      model: "nvidia/llama-3.1-nemotron-70b-instruct",
      messages: [{"role": "user", "content": prompt}],
      temperature: 0.7,
      top_p: 1,
      max_tokens: 1024,
    });

    const responseText = completion.choices[0]?.message?.content || '';
    console.log("Received response from API:", responseText);

    // Extract the JSON portion from the response
    // The model might include additional text around the JSON, so we need to extract just the JSON part
    let jsonStr = responseText;
    try {
      // Find JSON content - look for text between { and the last }
      const startIndex = responseText.indexOf('{');
      const endIndex = responseText.lastIndexOf('}');
      if (startIndex !== -1 && endIndex !== -1) {
        jsonStr = responseText.substring(startIndex, endIndex + 1);
      }

      const parsedResponse: IdeaResponse = JSON.parse(jsonStr);
      return {
        title: parsedResponse.title || 'Innovative Project Idea',
        description: parsedResponse.description || 'A project that solves a real-world problem.',
        outline: Array.isArray(parsedResponse.outline) ? parsedResponse.outline : [
          "Define project scope", "Create wireframes", "Implement MVP", "Test and refine"
        ],
        technologies: Array.isArray(parsedResponse.technologies) ? parsedResponse.technologies : [
          "JavaScript/TypeScript", "React", "Node.js", "Database solution"
        ],
        challenges: Array.isArray(parsedResponse.challenges) ? parsedResponse.challenges : [
          "Time constraints", "Feature prioritization", "Technical complexity"
        ]
      };
    } catch (parseError) {
      console.error("Error parsing JSON response:", parseError);
      throw new Error("Failed to parse AI response. Please try again.");
    }
  } catch (error) {
    console.error("Error generating project idea:", error);
    toast.error("Failed to generate project idea. Please try again.");
    throw error;
  }
}
