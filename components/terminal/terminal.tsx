"use client";

import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Send, Minimize2, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TerminalMessage } from './terminal-message';
import { useChat } from '@/hooks/use-chat';

export function Terminal() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [input, setInput] = useState('');
  const { messages, sendMessage, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      const { scrollHeight, clientHeight } = messagesContainerRef.current;
      messagesContainerRef.current.scrollTop = scrollHeight - clientHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isMinimized]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    await sendMessage(userMessage);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };

  const toggleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(!isMinimized);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsHidden(true);
  };

  if (isHidden) return null;

  return (
    <div
      className={cn(
        'fixed bottom-0 left-1/2 -translate-x-1/2 w-[380px] bg-black/95 rounded-t-lg border border-gray-800 shadow-xl backdrop-blur-sm transition-all duration-300 ease-in-out z-50',
        isMinimized ? 'h-12' : 'h-[224px]'
      )}
    >
      <div className="flex items-center justify-between p-2 border-b border-gray-800">
        <div 
          className="flex items-center gap-2 cursor-pointer select-none flex-1"
          onClick={toggleMinimize}
        >
          <TerminalIcon className="w-4 h-4 text-pink-400" />
          <span className="text-sm font-medium text-gray-200">NYMPH AI Terminal</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMinimize}
            className="p-1 hover:bg-gray-800 rounded transition-colors"
            aria-label={isMinimized ? "Maximize" : "Minimize"}
          >
            <Minimize2 className="w-4 h-4 text-gray-400" />
          </button>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-800 rounded transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div 
            ref={messagesContainerRef}
            className="p-2 h-[134px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            {messages.length === 0 && (
              <div className="text-sm text-gray-500 text-center mt-4">
                <p>✨ Welcome! ✨</p>
                <p className="mt-1">Type a message to chat with NYMPH AI!</p>
              </div>
            )}
            {messages.map((message, index) => (
              <TerminalMessage key={index} {...message} />
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 border-t border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Send a message to NYMPH AI..."
                  className={cn(
                    "w-full bg-gray-900 text-gray-100 rounded px-3 py-2 text-sm",
                    "focus:outline-none focus:ring-2 focus:ring-pink-500/50",
                    "placeholder:text-gray-500",
                    "transition-all duration-200",
                    "hover:bg-gray-900/80",
                    isLoading && "opacity-50 cursor-not-allowed"
                  )}
                  disabled={isLoading}
                />
                {isLoading && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 border-2 border-pink-500/20 border-t-pink-500 rounded-full animate-spin" />
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className={cn(
                  "px-3 py-2 bg-pink-600 text-white rounded",
                  "hover:bg-pink-700 focus:outline-none focus:ring-2",
                  "focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900",
                  "transition-all duration-200",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  "flex items-center justify-center"
                )}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}