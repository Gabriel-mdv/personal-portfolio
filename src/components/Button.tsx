import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({ children, onClick, href, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-xl font-semibold transition-all duration-200 inline-flex items-center gap-2';

  const variantStyles = {
    primary: 'bg-[#7C5CFF] hover:bg-[#6A4CFF] text-white shadow-lg shadow-[#7C5CFF]/20 hover:shadow-xl hover:shadow-[#7C5CFF]/30',
    secondary: 'bg-[#121A2F] hover:bg-[#182447] text-[#EAF0FF] border border-[#243255]',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} download={href.startsWith('/files/')}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
