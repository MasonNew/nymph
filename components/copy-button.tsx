"use client";

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface CopyButtonProps {
  text: string;
  isPowered?: boolean;
}

export function CopyButton({ text, isPowered = false }: CopyButtonProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Contract address copied to clipboard",
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        duration: 2000,
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`p-1.5 rounded-full transition-all duration-300 flex items-center justify-center group relative ${
        isPowered ? 'hover:bg-pink-500/20' : 'hover:bg-white/10'
      }`}
      aria-label="Copy contract address"
    >
      <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        isPowered ? 'bg-pink-500/20' : 'bg-white/10'
      }`} />
      {copied ? (
        <Check className={`w-4 h-4 ${isPowered ? 'text-pink-400' : 'text-green-400'}`} />
      ) : (
        <Copy className={`w-4 h-4 transition-colors duration-300 ${
          isPowered 
            ? 'text-pink-400 group-hover:text-pink-300' 
            : 'text-violet-300 group-hover:text-violet-200'
        }`} />
      )}
    </button>
  );
}