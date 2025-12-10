import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Sparkles, MessageCircle } from 'lucide-react';
import { generateChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm your Humanoid AI guide. Ask me anything you want to learn!" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Focus input when opening
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const recentHistory = messages.slice(-10); 
      const responseText = await generateChatResponse(recentHistory, userMsg.text);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "I encountered an error processing your request.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      <div 
        className={`
          mb-4 w-[350px] sm:w-[400px] h-[600px] max-h-[80vh]
          bg-white dark:bg-[#1e1e1e] 
          border border-gray-200 dark:border-[#333] 
          rounded-2xl shadow-2xl flex flex-col overflow-hidden 
          transition-all duration-300 origin-bottom-right
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none absolute'}
        `}
      >
        
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-blue-600 p-4 flex items-center justify-between shadow-md z-10">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm leading-tight">AI Assistant</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-blue-100 text-xs">Online</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-[#161617]">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center shrink-0
                ${msg.role === 'user' 
                  ? 'bg-gray-200 dark:bg-gray-700' 
                  : 'bg-gradient-to-br from-primary-500 to-blue-600 shadow-lg shadow-primary-500/20'
                }
              `}>
                {msg.role === 'user' ? (
                  <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Sparkles className="w-4 h-4 text-white" />
                )}
              </div>

              {/* Message Bubble */}
              <div className={`
                max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm
                ${msg.role === 'user' 
                  ? 'bg-primary-600 text-white rounded-tr-none' 
                  : 'bg-white dark:bg-[#242526] text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-[#333] rounded-tl-none'
                }
              `}>
                {msg.isError ? (
                  <span className="text-red-500">{msg.text}</span>
                ) : (
                  msg.text.split('\n').map((line, i) => (
                    <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                  ))
                )}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex gap-3">
               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-primary-500/20">
                  <Sparkles className="w-4 h-4 text-white" />
               </div>
               <div className="bg-white dark:bg-[#242526] border border-gray-100 dark:border-[#333] p-4 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                 <div className="flex space-x-1">
                   <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                   <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                   <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                 </div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white dark:bg-[#1e1e1e] border-t border-gray-100 dark:border-[#333]">
          <form 
            onSubmit={handleSubmit}
            className="flex items-center gap-2 bg-gray-100 dark:bg-[#2d2d2d] p-1.5 pr-2 rounded-full border border-transparent focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-100 dark:focus-within:ring-primary-900/30 transition-all"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about humanoids..."
              className="flex-1 bg-transparent px-4 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              disabled={!input.trim() || isLoading}
              className={`
                p-2 rounded-full transition-all duration-200 flex items-center justify-center
                ${!input.trim() || isLoading
                  ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed' 
                  : 'bg-primary-600 hover:bg-primary-700 text-white shadow-md'
                }
              `}
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>
        </div>
      </div>

      {/* Floating Action Button (FAB) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`
          group relative p-0 w-14 h-14 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center 
          bg-gradient-to-r from-primary-600 to-blue-600 hover:scale-105 active:scale-95
          ${isOpen ? 'rotate-90' : 'rotate-0'}
        `}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </button>
    </div>
  );
};
