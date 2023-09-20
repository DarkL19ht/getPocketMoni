import React, { ReactNode } from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  style?: string;
  text?: string;
  width: string;
  children?: ReactNode;
}

function Button({ label, onClick, style, text, width, children }: ButtonProps) {
  return (
    <button
      className={`${style} ${text} ${width} h-12 rounded-lg text-sm hover:border-black hover:border-b-4 hover:border-r-4`}
      onClick={onClick}
    >
      {label}
      {children}
    </button>
  );
}

export default Button;
