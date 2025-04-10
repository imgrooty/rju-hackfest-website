import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyDONdw8X0NO0dP9aN-BWpAuuwobD-Hi0GA';
const WEBSITE_URL = 'https://rjuhackfest.vercel.app';
const PROXY_URL = 'http://localhost:3001/api/fetch-website';

const genAI = new GoogleGenerativeAI(API_KEY);

// Function to extract specific sections from HTML
function extractSections(doc: Document) {
  const sections = {
    about: doc.querySelector('#about')?.textContent || '',
    schedule: doc.querySelector('#schedule')?.textContent || '',
    prizes: doc.querySelector('#prizes')?.textContent || '',
    faq: doc.querySelector('#faq')?.textContent || '',
    hero: doc.querySelector('.hero-section')?.textContent || '',
  };

  return {
    about: sections.about,
    schedule: sections.schedule,
    prizes: sections.prizes,
    faq: sections.faq,
    hero: sections.hero
  };
}

// Function to fetch website content from our proxy server
async function fetchWebsiteContent() {
  try {
    const response = await fetch(PROXY_URL);
    const html = await response.text();
    
    // Create a DOM parser to extract text content
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Extract organized content from specific sections
    return extractSections(doc);
  } catch (error) {
    console.error('Error fetching website content:', error);
    return null;
  }
}

export async function getChatResponse(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-thinking-exp-01-21' });
    
    // Fetch website content
    const websiteContent = await fetchWebsiteContent();
    
    // Create context with website content
    const context = `You are a friendly and helpful AI assistant for RJU HACKFEST 1.0, a university hackathon. You have access to the following website information that you can reference when relevant:

Website Content:
${JSON.stringify(websiteContent, null, 2)}

Instructions:
1. Be conversational and engaging, like a helpful friend.
2. You can answer general questions about technology, programming, and hackathons. Be brief and to the point.
3. When specifically asked about RJU HACKFEST, use the website content provided.
4. If you're not sure about specific RJU HACKFEST details, be honest and say you're not sure.
5. Feel free to provide general advice and suggestions about hackathons.
6. Be encouraging and supportive to participants.
7. You can also answer questions about the event schedule, prizes, and FAQs.

Remember: You're a general AI assistant who happens to have special knowledge about RJU HACKFEST, not just a website information bot.`;
    
    // Combine the context with the user's prompt
    const fullPrompt = `${context}\n\nUser: ${prompt}\n\nAssistant:`;
    
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting chat response:', error);
    return 'Sorry, I encountered an error. Please try again.';
  }
} 