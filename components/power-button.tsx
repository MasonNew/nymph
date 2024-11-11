"use client";

import { useState } from 'react';
import { Power } from 'lucide-react';

interface PowerButtonProps {
  isPowered: boolean;
  onToggle: () => void;
}

export function PowerButton({ isPowered, onToggle }: PowerButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onToggle}
    >
      <div className={`absolute -inset-2 bg-pink-500/20 rounded-full blur-lg transition-opacity ${isPowered ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
      <div className={`relative flex items-center justify-center w-12 h-12 rounded-full border backdrop-blur-sm transition-all duration-300 ${
        isPowered 
          ? 'bg-pink-500/20 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]' 
          : 'bg-gray-900/50 border-pink-500/30 group-hover:border-pink-500/50'
      }`}>
        <Power 
          className={`w-6 h-6 transition-all duration-300 ${
            isPowered 
              ? 'text-pink-400 scale-110 animate-pulse' 
              : 'text-pink-500 group-hover:scale-110'
          }`}
          style={{
            filter: isHovered || isPowered ? 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.5))' : 'none'
          }}
        />
      </div>
    </button>
  );
}