import { useState, useRef, useEffect } from 'react';
import { getChatResponse } from '../services/gemini';
import { MessageCircle, Send, X, Minimize2, Maximize2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getChatResponse(input);
      const assistantMessage: Message = { role: 'assistant', content: response };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-4 bg-hackathon-primary hover:bg-hackathon-secondary text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-4 right-4 ${isMinimized ? 'w-72' : 'w-60 sm:w-80'} bg-background border border-border rounded-lg shadow-xl transition-all duration-300`}>
      {/* Header */}
      <div className="p-3 bg-hackathon-primary/10 backdrop-blur-sm border-b border-border rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-5 h-5 text-hackathon-primary" />
          <h2 className="text-sm font-semibold">AI Assistant</h2>
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-background/10 rounded-md transition-colors"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-background/10 rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className={`${isMinimized ? 'h-36' : 'h-[50vh]'} overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-border scrollbar-track-background`}>
        {messages.length === 0 && (
          <div className="text-center text-muted-foreground text-sm py-8">
            👋 Hi! I'm your AI assistant. Ask me anything about RJU HACKFEST or general tech questions!
          </div>
        )}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                message.role === 'user'
                  ? 'bg-hackathon-primary text-white ml-4'
                  : 'bg-muted/50 backdrop-blur-sm mr-4'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-muted/50 backdrop-blur-sm p-3 rounded-2xl text-sm mr-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-hackathon-primary/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-hackathon-primary/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-hackathon-primary/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} /> {/* Scroll anchor */}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-border" autoComplete="off">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            data-form-type="other"
            name="chat-input"
            aria-label="Chat message"
            className="flex-1 p-2 bg-muted/50 backdrop-blur-sm border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-hackathon-primary chat-input"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-2 bg-hackathon-primary hover:bg-hackathon-secondary disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}