import React, { ReactNode } from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  style?: string;
  text?: string;
  children?: ReactNode;
}

function Button({ label, onClick, style, text, children }: ButtonProps) {
  return (
    <button className={`${style} ${text} w-40  h-12 rounded-lg text-sm`} onClick={onClick}>
      {label}
      {children}
    </button>
  );
}

export default Button;
