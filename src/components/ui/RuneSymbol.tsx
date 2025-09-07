import React from 'react';

interface RuneSymbolProps {
  symbol: string;
  className?: string;
}

export const RuneSymbol: React.FC<RuneSymbolProps> = ({ symbol, className = '' }) => {
  return (
    <span 
      className={`font-mono select-none ${className}`}
      style={{ fontFamily: 'serif' }}
    >
      {symbol}
    </span>
  );
};