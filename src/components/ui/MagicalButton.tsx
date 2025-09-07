import React, { ReactNode } from 'react';

interface MagicalButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export const MagicalButton: React.FC<MagicalButtonProps> = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        relative overflow-hidden
        bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500
        bg-size-200 bg-pos-0 hover:bg-pos-100
        text-white font-bold rounded-xl
        transition-all duration-500
        disabled:opacity-50 disabled:cursor-not-allowed
        shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50
        transform hover:scale-105 active:scale-95
        ${className}
      `}
    >
      {/* Magical Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-1000"></div>
      
      {/* Button Content */}
      <div className="relative z-10 flex items-center justify-center">
        {loading ? (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          children
        )}
      </div>
    </button>
  );
};