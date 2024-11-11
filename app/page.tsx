"use client";

import { RobotScene } from '@/components/robot-scene';
import { Terminal } from '@/components/terminal/terminal';
import { CopyButton } from '@/components/copy-button';
import { PowerButton } from '@/components/power-button';
import { StatusIndicators } from '@/components/status-indicators';
import { useState } from 'react';

export default function Home() {
  const [isPowered, setIsPowered] = useState(false);
  const contractAddress = "84m7TP7prCiZznhUrUbUFW2CyQvJfp2xyBchiQ76pump";

  return (
    <main className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
      isPowered ? 'bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900' : 'bg-gradient-to-b from-black via-gray-950 to-black'
    }`}>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute inset-0">
          <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse transition-colors duration-500 ${
            isPowered ? 'bg-pink-500/10' : 'bg-pink-500/5'
          }`} />
          <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 transition-colors duration-500 ${
            isPowered ? 'bg-violet-500/10' : 'bg-violet-500/5'
          }`} />
        </div>
        
        {/* Cyberpunk Grid */}
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,rgba(255,105,180,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,105,180,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] transition-opacity duration-500 ${
          isPowered ? 'opacity-100' : 'opacity-50'
        }`} />
        
        {/* Glowing Lines */}
        <div className="absolute inset-0">
          <div className={`absolute left-0 right-0 h-[1px] top-1/3 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent transition-opacity duration-500 ${
            isPowered ? 'opacity-100' : 'opacity-50'
          }`} />
          <div className={`absolute left-0 right-0 h-[1px] top-2/3 bg-gradient-to-r from-transparent via-violet-500/20 to-transparent transition-opacity duration-500 ${
            isPowered ? 'opacity-100' : 'opacity-50'
          }`} />
        </div>
        
        {/* Vignette Effect */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-black transition-opacity duration-500 ${
          isPowered ? 'opacity-75' : 'opacity-90'
        }`} />
      </div>

      <div className="container mx-auto px-4">
        <div className="absolute inset-0 pointer-events-none">
          <RobotScene isPowered={isPowered} />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
          {/* Power Button */}
          <div className="absolute top-8 right-8">
            <PowerButton isPowered={isPowered} onToggle={() => setIsPowered(!isPowered)} />
          </div>

          {/* Status Indicators */}
          <div className="absolute top-8 left-8">
            <StatusIndicators isPowered={isPowered} />
          </div>

          <h1 className={`text-7xl font-bold mb-8 tracking-tight relative transition-all duration-500 ${
            isPowered 
              ? 'bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent scale-105'
              : 'bg-gradient-to-r from-pink-800 via-fuchsia-800 to-violet-800 bg-clip-text text-transparent'
          }`}>
            NYMPH AI
            <div className={`absolute -inset-1 blur-2xl transition-all duration-500 -z-10 ${
              isPowered 
                ? 'bg-gradient-to-r from-pink-500/30 via-fuchsia-500/30 to-violet-500/30 opacity-100'
                : 'bg-gradient-to-r from-pink-500/10 via-fuchsia-500/10 to-violet-500/10 opacity-50'
            }`} />
          </h1>

          <div className={`flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-sm border relative transition-all duration-500 ${
            isPowered 
              ? 'bg-black/60 border-white/10 hover:border-white/20' 
              : 'bg-black/80 border-white/5 hover:border-white/10'
          }`}>
            <div className={`absolute inset-0 bg-pink-500/5 rounded-full transition-opacity duration-500 ${
              isPowered ? 'animate-pulse opacity-100' : 'opacity-50'
            }`} />
            <span className="text-gray-400 relative">Contract Address</span>
            <div className="flex items-center gap-2 text-violet-300 font-mono relative">
              <span>{contractAddress}</span>
              <CopyButton text={contractAddress} isPowered={isPowered} />
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute left-12 bottom-12 w-32 h-32 border border-pink-500/20 rounded-full animate-spin-slow" />
          <div className="absolute right-12 bottom-12 w-24 h-24 border border-violet-500/20 rounded-full animate-spin-slow animation-delay-1000" />
        </div>
      </div>
      <Terminal />
    </main>
  );
}