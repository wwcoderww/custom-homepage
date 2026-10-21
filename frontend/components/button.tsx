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
    primary: 'bg-text hover:bg-textHover',
    secondary: '',
    danger: 'bg-red-700',
  };

  return (
    <button
      className={`translate rounded-md border px-3 py-1 font-medium text-slate-200 duration-300 ease-in-out hover:-translate-y-1 hover:cursor-pointer ${styleVarients[style]} ${className}`}
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  );
}
