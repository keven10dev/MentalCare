import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';

const AIChat = () => {
  const [messages, setMessages] = useState<Array<{text: string; isUser: boolean}>>([
    {
      text: "¡Hola! Soy tu asistente virtual. ¿Cómo puedo ayudarte hoy?",
      isUser: false
    }
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Gracias por compartir. Estoy aquí para escucharte y apoyarte. ¿Quieres hablar más sobre eso?",
        isUser: false
      }]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-4 bg-rose-500 text-white flex items-center">
          <Bot className="h-6 w-6 mr-2" />
          <h1 className="text-xl font-semibold">Chat de Apoyo</h1>
        </div>

        <div className="h-[60vh] overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isUser
                    ? 'bg-rose-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje aquí..."
              className="flex-1 p-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <button
              type="submit"
              className="p-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AIChat;