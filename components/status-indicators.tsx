interface StatusIndicatorsProps {
  isPowered: boolean;
}

export function StatusIndicators({ isPowered }: StatusIndicatorsProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* System Status */}
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${isPowered ? 'bg-pink-500 animate-pulse' : 'bg-gray-600'}`} />
        <span className={`text-xs font-mono transition-colors ${isPowered ? 'text-gray-300' : 'text-gray-600'}`}>
          SYSTEM {isPowered ? 'ACTIVE' : 'INACTIVE'}
        </span>
      </div>

      {/* Neural Network */}
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full transition-colors ${isPowered ? 'bg-violet-500 animate-pulse animation-delay-150' : 'bg-gray-600'}`} />
        <span className={`text-xs font-mono transition-colors ${isPowered ? 'text-gray-300' : 'text-gray-600'}`}>
          NEURAL LINK {isPowered ? 'CONNECTED' : 'OFFLINE'}
        </span>
      </div>

      {/* Emotion Module */}
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full transition-colors ${isPowered ? 'bg-fuchsia-500 animate-pulse animation-delay-300' : 'bg-gray-600'}`} />
        <span className={`text-xs font-mono transition-colors ${isPowered ? 'text-gray-300' : 'text-gray-600'}`}>
          EMOTION MODULE {isPowered ? 'ENABLED' : 'DISABLED'}
        </span>
      </div>
    </div>
  );
}