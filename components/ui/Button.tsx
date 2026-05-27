import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-10 py-5 text-[9px] font-semibold uppercase tracking-[0.4em] transition-all duration-500 focus:outline-none rounded-none";
  
  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200",
    outline: "border border-white/20 text-neutral-400 hover:border-white hover:text-white bg-transparent",
    ghost: "text-neutral-500 hover:text-white",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};