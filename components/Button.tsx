import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  handleClick?: () => void;
  style?: 'primary' | 'secondary' | 'danger';
};

export default function Button({
  children,
  className,
  handleClick,
  style = 'primary',
}: ButtonProps) {
  const styleVarients = {
    primary: 'bg-blue-700 hover:bg-blue-500',
    secondary: '',
    danger: 'bg-red-700 hover:bg-red-600',
  };

  return (
    <button
      className={`hover:scale-95 transition rounded-md px-3 py-1 border font-medium text-white ${styleVarients[style]} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
