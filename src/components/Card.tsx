import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const hoverStyles = hover
    ? 'hover:border-[#7C5CFF]/50 hover:shadow-lg hover:shadow-[#7C5CFF]/10 hover:-translate-y-1'
    : '';

  return (
    <div className={`bg-[#121A2F] border border-[#243255] rounded-2xl p-6 transition-all duration-300 ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
