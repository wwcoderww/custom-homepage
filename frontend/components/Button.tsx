import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  handleClick?: () => void;
  style?: 'primary' | 'secondary' | 'danger';
  type?: 'submit' | 'button';
};

export default function Button({
  children,
  className,
  handleClick,
  style = 'primary',
  type = 'button',
}: ButtonProps) {
  const styleVarients = {
    primary: 'bg-blue-700 hover:bg-blue-500',
    secondary: '',
    danger: 'bg-red-700 hover:bg-red-600',
  };

  return (
    <button
      className={`rounded-md border px-3 py-1 font-medium text-white transition hover:scale-95 ${styleVarients[style]} ${className}`}
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  );
}
